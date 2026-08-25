# État du projet MADRASTI

> Mis à jour à la fin de chaque session. Dernière mise à jour : 2026-08-26,
> après la création de la page `/oeuvres/[slug]/[numero]` (correction du
> lien mort signalé en fin de Session 3).

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

### Tables Supabase (9 migrations, `supabase/migrations/`)

RLS activé sur **toutes** les tables. Modèle constant : contenu
pédagogique = lecture publique (`using (true)`) + écriture réservée aux
admins via `public.est_admin()` ; données élève = chacun ne voit/écrit
que les siennes (`auth.uid() = user_id`).

| Table | Contenu | RLS |
|---|---|---|
| `profils` | id, email, nom_complet, role (`eleve`/`admin`), date_creation | lecture de sa propre ligne seulement ; **aucune policy INSERT/UPDATE** (remplie uniquement par trigger `on_auth_user_created`) |
| `oeuvres` | slug, titre_fr/ar, auteur, filiere, mode, essentiel_fr/ar, couverture_url, biographie_fr/ar | lecture publique, écriture admin |
| `chapitres` | oeuvre_id, numero, titre_fr/ar, resume_court, lieux, citation_reference, statut | lecture publique, écriture admin |
| `paragraphes` | chapitre_id, ordre, texte_fr/ar | lecture publique, écriture admin |
| `fiches` | chapitre_id (unique), resume_fr/ar, themes (jsonb {principal, secondaires}), points_cles_fr/ar | lecture publique, écriture admin |
| `lexique` | chapitre_id, mot, sens_ar, nature, note | lecture publique, écriture admin |
| `personnages` | oeuvre_id, nom, nom_ar, role, description_fr, chapitre_apparition_id | lecture publique, écriture admin |
| `cours` | slug, titre, categorie, contenu_mdx, filiere, ordre | lecture publique, écriture admin |
| `sujets` | oeuvre_id, chapitre_id, titre, consigne, type | lecture publique, écriture admin |
| `copies` | user_id, sujet_id, image_url, transcription, note_forme/fond/total, erreurs, points_forts, axes, commentaire, cout_tokens | élève : select+insert sur ses copies, **pas d'update** (réservé à un futur traitement serveur via service_role) ; admin : select+update de toutes |
| `progression` | user_id, chapitre_id, lu, termine_le (PK composite) | élève gère librement les siennes |
| `activite` | user_id, type, ressource_id/titre | élève : select+insert (append-only, pas d'update) |
| `quota_jour` | user_id, date, corrections_utilisees | élève : select seule (pas d'écriture — l'incrément devra venir d'un contexte serveur de confiance) |

Fonction utilitaire : `public.est_admin()` (SQL, `stable`), centralise
la vérification de rôle pour toutes les policies d'écriture.

### Pages / routes

| Route | Groupe | Protection | État |
|---|---|---|---|
| `/connexion` | `(public)` | aucune | ✅ fonctionne (bouton Google OAuth) |
| `/api/auth/retour` | — | aucune | ✅ fonctionne (échange le code OAuth contre une session) |
| `/tableau-de-bord` | `(eleve)` | middleware, connecté requis | ✅ page minimale (affiche l'email) |
| `/administration` | `(admin)` | middleware, connecté + `role=admin` | ✅ page minimale (affiche l'email), **aucune fonctionnalité métier** |
| `/oeuvres` | `(public)` | aucune | ✅ grille des œuvres, filière codée en dur (`"1bac"`) |
| `/oeuvres/[slug]` | `(public)` | aucune | ⚠️ header + barre d'onglets fonctionnels ; seul l'onglet **Résumé** a du contenu réel, les 4 autres (Personnages, Lexique, Sujets, Biographie) affichent "Bientôt disponible" alors que les données existent déjà en base |
| `/oeuvres/[slug]/[numero]` (détail d'un chapitre) | `(public)` | aucune | ✅ créée : texte intégral (ou "Bientôt disponible"), fiche de synthèse, lexique du chapitre, navigation chapitre précédent/suivant |

### Composants (`components/`)

`BoutonConnexionGoogle`, `CarteOeuvre`, `CouvertureOeuvre` (image ou
bloc de remplacement avec le titre), `OngletResume`, `OngletsOeuvre`
(barre d'onglets, Server Component, navigation par query param
`?onglet=`), `SommaireChapitres` (liste des chapitres avec case de
progression **affichée mais non cochable**, pas encore branchée à la
table `progression`), `TexteChapitre` (texte intégral d'un chapitre ou
message "Bientôt disponible"), `FicheChapitre` (résumé/thèmes/points
clés d'un chapitre), `LexiqueChapitre` (mots de vocabulaire d'un
chapitre) — ces trois derniers utilisés par la page
`/oeuvres/[slug]/[numero]`.

### `lib/`

- `lib/supabase/client.ts` — client navigateur (`createBrowserClient`)
- `lib/supabase/server.ts` — client serveur (`createServerClient`,
  cookies), à recréer à chaque requête
- `lib/supabase/contenu.ts` — lecture du contenu public (œuvres,
  chapitres) pour les Server Components

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

**Commencé mais incomplet :**
- Onglets Personnages, Lexique, Sujets, Biographie de `/oeuvres/[slug]` :
  UI présente (barre d'onglets fonctionnelle), contenu non branché alors
  que les tables/colonnes existent déjà (`personnages`, `lexique`,
  `sujets`, `oeuvres.biographie_fr/ar`).
- Case de progression dans `SommaireChapitres` : affichée, pas
  cochable, pas connectée à la table `progression`.
- `/administration` : accès protégé correctement mais aucune
  fonctionnalité (pas de gestion de contenu, pas de gestion des rôles).
- Filière codée en dur (`"1bac"`) dans `app/(public)/oeuvres/page.tsx` —
  signalé en commentaire dans le code lui-même comme dépendant d'une
  colonne `profils.filiere` qui n'existe pas encore.

**Pas commencé :**
- Aucune UI pour les copies (soumission photo, transcription,
  correction) — la table `copies` et ses policies existent, rien côté
  `app/`.
- Aucun mécanisme serveur pour incrémenter `quota_jour` ou remplir les
  champs de correction de `copies` (prévu pour un contexte
  `service_role`, explicitement hors périmètre des sessions passées).
- Table `activite` (journal d'activité) non alimentée nulle part dans
  l'UI.
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

Points de vigilance (pas des failles actives, mais à garder en tête) :
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

1. Brancher les onglets Personnages / Lexique / Sujets / Biographie de
   `/oeuvres/[slug]` sur les données déjà en base.
2. Décider si `profils.filiere` doit être ajouté maintenant (déblocage
   de la filière codée en dur) ou reporté.
3. Donner un minimum de contenu métier à `/administration` (au moins
   consulter les copies déposées, table déjà prête).
4. Si le texte intégral des œuvres devient disponible, ajouter une
   feuille "Paragraphes" au fichier Excel (colonnes : oeuvre_slug,
   chapitre_numero, ordre, texte_fr, texte_ar) puis relancer
   `npm run importer` — le script est déjà prêt à la lire.
