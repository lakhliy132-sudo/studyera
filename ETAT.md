# État du projet MADRASTI

> Mis à jour à la fin de chaque session. Dernière mise à jour : 2026-08-26,
> après la Session 5 (tableau de bord) : blocs Reprendre / Rédaction /
> Progression / Dernières activités sur `/tableau-de-bord`.
>
> ⚠️ **Action requise avant de tester `/administration`** : la migration
> `supabase/migrations/20260829000000_lecture_admin_profils.sql` n'a pas
> été appliquée automatiquement (pas de CLI Supabase liée dans ce dépôt).
> À exécuter manuellement dans l'éditeur SQL du dashboard Supabase, comme
> pour les migrations précédentes.

## 1. C'est quoi ce projet ?

MADRASTI est une application web pédagogique (français/arabe) pour des
élèves marocains préparant le bac (mentions "filière", "1bac" dans le
code). Elle donne accès à un programme d'œuvres littéraires au programme
(résumés, chapitres, personnages, lexique, sujets d'exercice) et, à
terme, à un outil de correction de copies (photo → transcription →
notation), avec suivi de progression et quota quotidien par élève.

Deux profils d'utilisateurs : **élève** (accès à son espace et au
contenu public) et **admin** (accès à `/administration`, seul rôle
autorisé à écrire le contenu pédagogique).

**Stack** : Next.js 15.5 (App Router) + React 19 + TypeScript,
Tailwind CSS v4, Supabase (Postgres + Auth + Storage) via `@supabase/ssr`,
authentification Google OAuth. Import de contenu depuis un fichier Excel
via un script `tsx` (`exceljs`) utilisant la clé `service_role`.

Le dépôt contient un `AGENTS.md` qui n'est **pas** de la documentation
projet : c'est un bloc auto-généré par `next dev` rappelant que cette
version de Next.js peut différer de ce que le modèle connaît (à lire dans
`node_modules/next/dist/docs/` avant d'écrire du code). Il n'y a donc pas
de doc projet séparée à comparer à l'existant — voir section 4.

## 2. Inventaire

### Tables Supabase (10 migrations, `supabase/migrations/`)

RLS activé sur **toutes** les tables. Modèle constant : contenu
pédagogique = lecture publique (`using (true)`) + écriture réservée aux
admins via `public.est_admin()` ; données élève = chacun ne voit/écrit
que les siennes (`auth.uid() = user_id`).

| Table | Contenu | RLS |
|---|---|---|
| `profils` | id, email, nom_complet, role (`eleve`/`admin`), date_creation | lecture de sa propre ligne + lecture de tous les profils par un admin (⚠️ migration à appliquer, voir en tête de fichier) ; **aucune policy INSERT/UPDATE** (remplie uniquement par trigger `on_auth_user_created`) |
| `oeuvres` | slug, titre_fr/ar, auteur, filiere, mode, essentiel_fr/ar, couverture_url, biographie_fr/ar | lecture publique, écriture admin |
| `chapitres` | oeuvre_id, numero, titre_fr/ar, resume_court, lieux, citation_reference, statut | lecture publique, écriture admin |
| `paragraphes` | chapitre_id, ordre, texte_fr/ar | lecture publique, écriture admin |
| `fiches` | chapitre_id (unique), resume_fr/ar, themes (jsonb {principal, secondaires}), points_cles_fr/ar | lecture publique, écriture admin |
| `lexique` | chapitre_id, mot, sens_ar, nature, note | lecture publique, écriture admin |
| `personnages` | oeuvre_id, nom, nom_ar, role, description_fr, chapitre_apparition_id | lecture publique, écriture admin |
| `cours` | slug, titre, categorie, contenu_mdx, filiere, ordre | lecture publique, écriture admin |
| `sujets` | oeuvre_id, chapitre_id, titre, consigne, type | lecture publique, écriture admin |
| `copies` | user_id, sujet_id, image_url, transcription, note_forme/fond/total, erreurs, points_forts, axes, commentaire, cout_tokens | élève : select+insert sur ses copies, **pas d'update** (réservé à un futur traitement serveur via service_role) ; admin : select+update de toutes |
| `progression` | user_id, chapitre_id, lu, termine_le (PK composite) | élève gère librement les siennes ; **isolation testée concrètement**, voir section 4 |
| `activite` | user_id, type, ressource_id/titre | élève : select+insert (append-only, pas d'update) ; alimentée à chaque ouverture de chapitre (type `consultation_chapitre`) |
| `quota_jour` | user_id, date, corrections_utilisees | élève : select seule (pas d'écriture — l'incrément devra venir d'un contexte serveur de confiance) |

Fonction utilitaire : `public.est_admin()` (SQL, `stable`), centralise
la vérification de rôle pour toutes les policies d'écriture.

### Pages / routes

| Route | Groupe | Protection | État |
|---|---|---|---|
| `/connexion` | `(public)` | aucune | ✅ fonctionne (bouton Google OAuth) |
| `/api/auth/retour` | — | aucune | ✅ fonctionne (échange le code OAuth contre une session) |
| `/tableau-de-bord` | `(eleve)` | middleware, connecté requis | ✅ quatre blocs empilés : Reprendre, Rédaction, Progression, Dernières activités — chacun avec un état "invitation" si vide (voir section 3) |
| `/redaction/nouvelle` | `(eleve)` | middleware, connecté requis | ✅ page minimale ("Bientôt disponible"), destination du bouton "Corriger une copie" |
| `/activite` | `(eleve)` | middleware, connecté requis | ✅ historique complet ("Tout voir" depuis le tableau de bord) |
| `/administration` | `(admin)` | middleware, connecté + `role=admin` | ✅ affiche l'email + liste des copies déposées (`TableauCopies`), vide tant qu'aucune UI élève ne permet d'en déposer une |
| `/oeuvres` | `(public)` | aucune | ✅ grille des œuvres, filière codée en dur (`"1bac"`) |
| `/oeuvres/[slug]` | `(public)` | aucune | ⚠️ header (+ barre d'avancement si connecté) et barre d'onglets fonctionnels ; seul l'onglet **Résumé** a du contenu réel, les 4 autres (Personnages, Lexique, Sujets, Biographie) affichent "Bientôt disponible" alors que les données existent déjà en base |
| `/oeuvres/[slug]/[numero]` (détail d'un chapitre) | `(public)` | aucune | ✅ texte intégral (ou "Bientôt disponible"), fiche de synthèse, lexique, navigation précédent/suivant, bouton "Marquer comme lu" (si connecté), journal d'activité |

### Composants (`components/`)

`BoutonConnexionGoogle`, `CarteOeuvre`, `CouvertureOeuvre` (image ou
bloc de remplacement avec le titre), `OngletResume`, `OngletsOeuvre`
(barre d'onglets, Server Component, navigation par query param
`?onglet=`), `SommaireChapitres` (liste des chapitres, coche de
progression en lecture seule — cochage réel uniquement depuis la page
du chapitre), `TexteChapitre` (texte intégral d'un chapitre ou message
"Bientôt disponible"), `FicheChapitre` (résumé/thèmes/points clés d'un
chapitre), `LexiqueChapitre` (mots de vocabulaire d'un chapitre),
`BoutonMarquerLu` (**client**, bascule "Marquer comme lu" / "Lu ✓" avec
mise à jour optimiste ; affiche une invite de connexion si le
visiteur n'est pas connecté), `BarreProgression` ("N chapitres sur
total", affichée dans l'en-tête de `/oeuvres/[slug]` si connecté).
`TableauCopies` (liste des copies pour `/administration`, ou message
"Aucune copie déposée pour l'instant").

Blocs du tableau de bord (session 5), chacun avec son propre état
"invitation" quand il n'y a rien à montrer (voir section 3, règle
"aucun bloc vide") : `BlocReprendre`, `BlocRedaction`, `BlocProgression`
(3 chiffres + une barre par œuvre), `BlocDernieresActivites`.

### `lib/`

- `lib/supabase/client.ts` — client navigateur (`createBrowserClient`)
- `lib/supabase/server.ts` — client serveur (`createServerClient`,
  cookies), à recréer à chaque requête
- `lib/supabase/contenu.ts` — lecture du contenu public (œuvres,
  chapitres, fiches, paragraphes, lexique) pour les Server Components
- `lib/supabase/admin.ts` — lecture des données réservées à l'espace
  admin (copies, avec sujet et identité élève joints manuellement)
- `lib/supabase/progression.ts` — lecture de la progression de lecture
  de l'utilisateur connecté (par œuvre entière ou par chapitre)
- `lib/supabase/activite.ts` — écriture dans le journal d'activité,
  avec déduplication (pas de doublon si rechargement dans la minute)
- `lib/supabase/tableauDeBord.ts` — agrégations pour `/tableau-de-bord`
  et `/activite` : activités récentes résolues en liens, chapitre
  recommandé, progression par œuvre, stats copies, quota restant
- `lib/filiere.ts` / `lib/quota.ts` — constantes partagées codées en dur
  (`FILIERE_ACTUELLE = "1bac"`, `QUOTA_QUOTIDIEN_MAX = 3`), un seul
  endroit à changer le jour où elles deviendront de vraies données

### Scripts

- `npm run dev` / `build` / `start` / `lint` — standards Next.js
- `npm run importer` (`scripts/importer.ts`) — importe
  `data/contenu-plateforme-bac.xlsx` (présent en local, ignoré par git)
  vers Supabase via la clé `service_role`. Idempotent (upsert sur
  contraintes uniques). Alimente Oeuvres, Chapitres+Fiches, Lexique,
  Personnages, Sujets. Prêt à importer une feuille "Paragraphes"
  (colonnes oeuvre_slug, chapitre_numero, ordre, texte_fr, texte_ar) si
  elle est ajoutée au fichier, mais **cette feuille n'existe pas encore
  dans `data/contenu-plateforme-bac.xlsx`** — le texte intégral des
  chapitres n'est donc pas encore importable, seulement les résumés
  (`fiches`). N'importe pas non plus `cours`, ni les colonnes
  `couverture_url`/`biographie_fr`/`biographie_ar` d'`oeuvres`.

### Authentification

Google OAuth via Supabase Auth. Trigger Postgres
(`gerer_nouvel_utilisateur`, `security definer`) crée automatiquement la
ligne `profils` à l'inscription, rôle `eleve` par défaut. Middleware
(`middleware.ts`) : rafraîchit la session à chaque requête, protège
`/tableau-de-bord` (connecté) et `/administration` (connecté + rôle
admin vérifié **côté serveur** via une requête Supabase soumise à RLS).
Pas de mécanisme applicatif pour promouvoir un élève en admin (aucune
policy UPDATE sur `profils` — changement de rôle possible uniquement à
la main depuis le dashboard Supabase / SQL direct, volontairement laissé
pour plus tard).

### Variables d'environnement référencées dans le code

- `NEXT_PUBLIC_SUPABASE_URL` (client + serveur + script importer)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (client + serveur)
- `SUPABASE_SERVICE_ROLE_KEY` (script importer **uniquement**, jamais
  dans le code de l'app)

`.env.example` documente ces trois variables ; `.env.local` existe en
local et est correctement ignoré par git (`.gitignore`), tout comme
`data/*` (seul `data/.gitkeep` est suivi).

## 3. Ce qui manque / ce qui est cassé

**Corrigé cette session :**
- ✅ `/oeuvres/[slug]/[numero]` (détail d'un chapitre) créée — le lien
  depuis `SommaireChapitres` ne renvoie plus de 404.
- ✅ `/administration` liste désormais les copies déposées (vide pour
  l'instant, voir plus bas).
- ✅ Progression de lecture (Session 4) : bouton "Marquer comme lu" sur
  la page d'un chapitre (mise à jour optimiste), coche dans le sommaire,
  barre d'avancement sur la page œuvre, journal d'activité à chaque
  consultation de chapitre. Isolation RLS entre élèves vérifiée
  concrètement (voir section 4).
- ✅ Tableau de bord (Session 5) : quatre blocs (Reprendre, Rédaction,
  Progression, Dernières activités). Règle "aucun bloc vide" appliquée
  systématiquement — chaque bloc a un état invitation distinct de son
  état avec données (détail dans les commentaires des composants
  `Bloc*`) plutôt qu'un "0" ou une zone blanche pour un nouvel élève.
  `/redaction/nouvelle` (stub) et `/activite` (historique complet)
  créées comme destinations de ce tableau de bord.

**Commencé mais incomplet :**
- Onglets Personnages, Lexique, Sujets, Biographie de `/oeuvres/[slug]` :
  UI présente (barre d'onglets fonctionnelle), contenu non branché alors
  que les tables/colonnes existent déjà (`personnages`, `lexique`,
  `sujets`, `oeuvres.biographie_fr/ar`).
- `/administration` : affiche les copies, mais aucune gestion de
  contenu (œuvres/chapitres) ni gestion des rôles.
- Filière codée en dur (`"1bac"`, désormais centralisée dans
  `lib/filiere.ts`) — dépend d'une colonne `profils.filiere` qui
  n'existe pas encore.
- Quota quotidien codé en dur à **3** (`lib/quota.ts`, `QUOTA_QUOTIDIEN_MAX`) :
  valeur inventée faute de vraie décision produit, à ajuster (⚠️ à
  confirmer avec l'équipe, pas une valeur métier validée).

**Pas commencé :**
- Aucune UI **élève** pour déposer une copie (photo, transcription) —
  seule la consultation admin existe désormais (`/administration`), la
  table `copies` reste donc vide en pratique.
- Aucun mécanisme serveur pour incrémenter `quota_jour` ou remplir les
  champs de correction de `copies` (prévu pour un contexte
  `service_role`, explicitement hors périmètre des sessions passées).
- Texte intégral des chapitres (`paragraphes`) : le fichier Excel n'a
  pas de feuille "Paragraphes" — rien à importer tant qu'elle n'existe
  pas. Le script est prêt à la lire dès qu'elle sera ajoutée (colonnes
  oeuvre_slug, chapitre_numero, ordre, texte_fr, texte_ar). Ne concerne
  que les œuvres en mode `texte_integral` ; les œuvres en
  `accompagnement` n'en ont pas besoin.
- Script `importer.ts` n'importe toujours pas `cours`, ni
  couverture/biographie des œuvres — à vérifier si ces données existent
  dans une autre feuille du fichier Excel ou doivent être ajoutées.
- Aucun test automatisé (pas de script `test` dans `package.json`, pas
  de dossier de tests).
- `README.md` est resté celui par défaut de `create-next-app`, non
  spécifique au projet.

## 4. Sécurité — état des lieux

Points corrects observés :
- RLS activé sur toutes les tables, sans exception.
- Vérification du rôle admin faite **côté serveur** (middleware +
  requête Supabase soumise à RLS), jamais côté client.
- Clé `service_role` cantonnée au script `scripts/importer.ts`, jamais
  référencée dans `app/`, `components/` ou `lib/` — jamais exposée au
  navigateur.
- Clés `NEXT_PUBLIC_*` exposées côté client par design (clé anon,
  documenté dans `.env.example`) — sécurité réelle reposant sur les
  policies RLS, ce qui est le modèle correct pour Supabase.
- `.env.local` et le contenu de `data/` correctement ignorés par git.
- **Isolation RLS de `progression` testée concrètement** (session 4,
  script jetable non committé) : deux vrais comptes élève créés via
  l'API admin Supabase (puis supprimés à la fin du test), connectés
  chacun avec leur propre session. Résultat : élève A ne voit aucune
  ligne de la progression d'élève B (`select` filtré à 0 ligne, pas une
  erreur masquée), ne peut pas la modifier (`update` : 0 ligne
  affectée), et une tentative d'insérer une ligne de progression *au
  nom* de B (`user_id = B` depuis la session de A) est explicitement
  rejetée par Postgres ("new row violates row-level security policy").
  Les trois angles (lecture, modification, usurpation à l'insertion)
  sont couverts.
- **Visiteur non connecté sur une page de chapitre** (public par
  design, pas de redirection) : `user` vaut `null` côté serveur, ce qui
  fait "tomber" en cascade tous les points touchant la progression sans
  aucune requête tentée — `recupererProgressionChapitre`/`Oeuvre`
  renvoient un résultat vide sans appeler Supabase, `enregistrerActivite`
  s'arrête avant toute requête, `BoutonMarquerLu` affiche une invite
  "Connecte-toi" à la place du bouton, `BarreProgression` n'est pas
  rendue. Aucun de ces chemins ne tente d'écrire en tant qu'anonyme :
  il n'y a donc rien à bloquer côté RLS pour ce cas (contrairement à
  l'isolation entre élèves, qui elle repose sur les policies).

Points de vigilance (pas des failles actives, mais à garder en tête) :
- Nouvelle policy `SELECT` sur `profils` pour les admins (migration
  `20260829000000_lecture_admin_profils.sql`) : volontairement lecture
  seule, aucune capacité d'écriture ajoutée. À appliquer manuellement
  (voir en tête de fichier) avant de tester `/administration` avec de
  vraies données.
- Aucune policy ne permet à un admin de changer le rôle d'un profil
  depuis l'application : tant que ça reste vrai, c'est plutôt une
  garantie de sécurité qu'un manque — mais le jour où une page de
  gestion des rôles sera ajoutée, il faudra une policy UPDATE stricte
  (admin uniquement, et probablement interdire à un admin de se
  rétrograder lui-même par erreur).
- `copies` et `quota_jour` n'ont pas encore de contexte serveur qui les
  écrit : le jour où cette fonctionnalité sera implémentée, s'assurer
  que l'incrémentation du quota et le remplissage des notes passent
  bien par une clé `service_role` (ou une fonction `security definer`
  dédiée), jamais par une policy ouverte côté élève — c'est déjà
  anticipé par les commentaires dans les migrations correspondantes.

Aucune clé ou secret trouvé committé dans le code ou les migrations.

## 5. Prochaines étapes suggérées

1. **Design (en attente)** : refonte visuelle générale sur la base de
   deux maquettes fournies (nav bar, sélecteur d'œuvre en pilules,
   bannière, onglets, cartes de chapitres, popover de lexique) — pas
   encore décrite ni codée.
2. Appliquer la migration `20260829000000_lecture_admin_profils.sql`
   dans le dashboard Supabase (voir avertissement en tête de fichier).
3. Confirmer la vraie valeur de `QUOTA_QUOTIDIEN_MAX` (actuellement 3,
   inventé — voir section 3).
4. Brancher les onglets Personnages / Lexique / Sujets / Biographie de
   `/oeuvres/[slug]` sur les données déjà en base.
5. Décider si `profils.filiere` doit être ajouté maintenant (déblocage
   de la filière codée en dur) ou reporté.
6. Construire l'UI élève de dépôt de copie (photo → `copies`), seule
   pièce manquante pour que `/administration` et le bloc Progression du
   tableau de bord affichent des données réelles côté rédaction.
7. Si le texte intégral des œuvres devient disponible, ajouter une
   feuille "Paragraphes" au fichier Excel (colonnes : oeuvre_slug,
   chapitre_numero, ordre, texte_fr, texte_ar) puis relancer
   `npm run importer` — le script est déjà prêt à la lire.
