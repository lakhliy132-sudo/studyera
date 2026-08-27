# État du projet MADRASTI

> Mis à jour à la fin de chaque session. Dernière mise à jour : 2026-08-27.
>
> ⚠️ **Session parallèle de nouveau détectée** (comme au tout début de
> cette conversation) : en travaillant sur la "Fiche du chapitre"
> ci-dessous, `git status` a montré des fichiers déjà modifiés/créés que
> je n'avais pas touchés — `components/OngletLieux.tsx`,
> `components/OngletSujets.tsx` (nouveaux), `components/OngletsOeuvre.tsx`
> (6 onglets au lieu de 5, "Lieux" ajouté), `components/icones.tsx`
> (`IconeHorloge`/`IconeEtoile`/`IconeTexte`), `lib/supabase/contenu.ts`
> (`recupererSujetsOeuvre`), et `/oeuvres/[slug]/page.tsx` (onglets Lieux
> et Sujets d'analyse branchés sur de vraies données). Relu : cohérent,
> basé sur le même fichier de référence "Rubriques" que Personnages/
> Lexique, `tsc`/`eslint` passent sur l'ensemble — committé avec le reste
> plutôt que défait, conformément à la consigne de ne pas annuler un
> changement externe sans raison. Onglets de /oeuvres/[slug] désormais
> tous réels sauf "Thèmes et enjeux".
>
> **"Fiche du chapitre" refaite sur `/oeuvres/[slug]/[numero]`** :
> l'ancien aperçu Personnages/Lieux/Sujets liés à trois colonnes égales
> (`BlocApercu`) est remplacé par `FicheChapitreApercu.tsx`, une carte
> unique en 2/3 (Personnages, avec recherche) + 1/3 (Lieux en frise
> verticale, Sujets liés en petites cartes) — design repris du fichier de
> référence fourni par l'utilisateur ("Chapitre 3 — La Boîte à
> Merveilles"). Toujours les 27 personnages de l'œuvre (pas de filtrage,
> comme demandé précédemment), mais ceux introduits DANS le chapitre
> consulté (`chapitre_apparition_id === chapitre.id`) sont mis en avant
> par un avatar plein plutôt qu'à contour — repris du concept "cle" du
> fichier de référence. `components/PersonnagesChapitre.tsx`, devenu
> orphelin (plus aucun appelant), supprimé.
>
> **Lexique étendu aux chapitres 2 à 12 : 51 mots au total** (était 18,
> tous du chapitre 1 seul — l'onglet Lexique de la page œuvre affichait
> déjà "tout" mais n'avait en réalité que du contenu chapitre 1, faute de
> mots saisis ailleurs). Demandé explicitement par l'utilisateur ("fais
> tout lexique du l'œuvre pas que chap1"). ⚠️ Contrairement aux résumés
> de chapitres, l'utilisateur n'a fourni aucune liste de vocabulaire :
> **les 33 nouveaux mots (3 par chapitre) sont choisis et rédigés
> entièrement par Claude**, à partir de termes déjà présents dans les
> résumés/points clés déjà écrits cette session (ex. "la faillite",
> "un sanctuaire", "une marieuse", "un haïk"), pas transcrits d'une
> source externe. `statut` n'existe pas sur la table `lexique` (pas de
> mécanisme "à relire" comme pour `fiches`/`chapitres`) — à faire
> vérifier par un enseignant avant usage en classe, au même titre que
> les traductions arabes des résumés. Ajouté via le pipeline Excel
> habituel (`npm run importer`, 0 erreur, `essentiel_fr`/`essentiel_ar`
> vérifiés intacts avant relance) ; vérifié par capture d'écran (mot du
> chapitre 9 retrouvé par recherche).
>
> **Onglet "Lexique" de la page œuvre branché sur de vraies données**
> (`/oeuvres/[slug]?onglet=lexique` — jusqu'ici "Bientôt disponible").
> Nouveau composant `OngletLexique.tsx` (**Client Component** — état
> local pour la recherche et le mode révision, pas de round-trip
> serveur) + fonction `recupererLexiqueOeuvre` (`lib/supabase/contenu.ts`,
> passe par la liste des chapitres de l'œuvre car `lexique` n'a pas de
> colonne `oeuvre_id` directe). Mêmes carte/interactions que le fichier
> de référence "Rubriques — Le Dernier Jour d'un Condamné" déjà utilisé
> pour Personnages : mot souligné en pointillé doré à gauche, traduction
> arabe sur fond crème à droite avec badge "CH. N", recherche par mot ou
> définition, "Mode révision" qui floute les traductions (révélées au
> survol ou par clic, pour s'entraîner à deviner le sens avant de
> vérifier). Deux nouvelles icônes ajoutées à `icones.tsx` :
> `IconeRecherche` (loupe), `IconeOeil` (bascule mode révision).
>
> ⚠️ **Bug trouvé et corrigé pendant la vérification, pas signalé par
> l'utilisateur** : la recherche ne gérait pas les accents (taper
> "boite" ne trouvait pas "boîte") — comparaison naïve `toLowerCase()`
> sans normalisation Unicode. Corrigé avec un helper `normaliser()`
> (`.normalize("NFD")` + suppression des marques diacritiques
> combinantes U+0300–U+036F) appliqué à la fois à la requête et aux
> champs mot/définition. Repéré en testant la recherche avant de
> considérer l'onglet terminé, pas par lecture du code.
>
> L'onglet Lexique de la page **chapitre** (contrairement à Personnages,
> déjà unifié partout) reste chapitre-scopé (`LexiqueChapitre.tsx`,
> `recupererLexiqueChapitre`) — pas demandé au niveau chapitre cette
> fois, seulement au niveau œuvre.
>
> **Casting complet : 27 personnages** (était 13). Ajout des 14
> personnages secondaires mentionnés au fil des chapitres 2 à 12 mais
> absents de la feuille "Personnages" jusqu'ici — demandé explicitement
> ("ajoute tous les personnages principaux et secondaires") : Moulay
> Larbi, Abdelkader, Sidi Mohammed Ben Taher (le coiffeur défunt),
> Hamoussa, Abderrahman le coiffeur, la fille du coiffeur (2ᵉ épouse de
> Moulay Larbi), le courtier malhonnête du souk des bijoutiers, Sidi El
> Arafi (le voyant) et sa femme, Salama la marieuse, Zhour, l'oncle
> Othmane et Lalla Khadija (personnages d'un récit dans le récit, chez
> Rahma — n'apparaissent jamais directement), et Khadija la sœur de
> Rahma (mentionnée seulement, chapitre 3). Contenu (rôle, description,
> chapitre de première apparition — au sens large : y compris une simple
> mention pour les personnages qui n'apparaissent jamais physiquement)
> rédigé par Claude à partir des résumés de chapitres déjà écrits cette
> session, pas inventé. Ajouté via le pipeline Excel habituel (`npm run
> importer`, 0 erreur, `essentiel_fr`/`essentiel_ar` vérifiés intacts
> avant relance) ; vérifié par capture d'écran (27 cartes, tous les
> champs corrects).
>
> **Onglet "Personnages" branché sur de vraies données, partout**
> (page œuvre ET chaque page chapitre — jusqu'ici "Bientôt disponible" ou
> vide sur la quasi-totalité des chapitres). Nouveau composant
> `OngletPersonnages.tsx` + fonction `recupererPersonnagesOeuvre`
> (`lib/supabase/contenu.ts`) : tous les personnages de l'œuvre, en
> cartes "médaillon" (initiales, nom en Playfair, nom arabe, pastille de
> rôle dorée, description, chapitre de première apparition) — design
> repris d'un fichier de référence HTML fourni par l'utilisateur
> ("Rubriques — Le Dernier Jour d'un Condamné", non committé). D'abord
> posé sur `/oeuvres/[slug]?onglet=personnages` seul, puis étendu à
> `/oeuvres/[slug]/[numero]?onglet=personnages` **et** à l'aperçu compact
> sous le résumé d'un chapitre, à la demande explicite de l'utilisateur
> ("applique les personnages dans tous les chapitres") : ces deux
> derniers montraient auparavant seulement les personnages apparaissant
> pour la PREMIÈRE fois dans le chapitre consulté (`recupererPersonnages
> Chapitre`, désormais supprimée, plus aucun appelant) — comme la plupart
> des personnages sont introduits au chapitre 1, ça laissait l'onglet
> vide sur presque tous les autres chapitres. Les trois emplacements
> affichent maintenant la liste complète et identique des personnages.
> Ce fichier de référence couvre aussi Lexique/Lieux/Sujets liés dans le
> même esprit visuel — **seul Personnages a été fait pour l'instant**, le
> reste est un suivi possible si demandé. L'accent doré (`--or`) de cette
> maquette est appliqué en couleurs arbitraires locales au composant, pas
> en token global : la palette v2 du reste du site n'en a pas (retiré
> lors de la refonte v2), seul cet onglet en a besoin.
>
> Contenu des 10 personnages déjà en base enrichi (descriptions plus
> complètes, fournies par l'utilisateur dans la conversation) + un
> nouveau personnage ajouté, Lalla Aïcha (apparue au chapitre 4, absente
> de la feuille "Personnages" jusqu'ici). ⚠️ Deux petits écarts
> d'orthographe entre le texte de l'utilisateur et les noms déjà
> enregistrés, volontairement PAS renommés pour ne pas dupliquer la ligne
> à l'import (upsert sur `oeuvre_id, nom`) : "Maâlem Abdeslem" (utilisateur,
> et aussi la graphie utilisée dans tous les résumés de chapitres 2-12)
> vs "Maalem Abdeslam" (nom déjà en base, conservé) ; "La Chouafa (Lalla
> Kanza)" (utilisateur) vs "La Chouafa (tante Kenza)" (déjà en base,
> conservé). À uniformiser un jour si ça gêne.
>
> ⚠️ **Piège réel de `npm run importer` découvert (et déclenché par erreur)
> cette session : un `upsert` écrase avec `null` toute colonne dont la
> cellule Excel est vide, même si la ligne existe déjà en base avec une
> vraie valeur.** En relançant l'import pour ajouter les chapitres 2/3
> (feuille "Chapitres"), la feuille "Oeuvres" a aussi été ré-upsertée en
> passant — et ses colonnes `essentiel_fr`/`essentiel_ar` étaient restées
> VIDES dans le fichier Excel (ce texte avait été écrit directement en
> base par Claude lors d'une session précédente, jamais reporté dans
> l'Excel). Résultat : le résumé "essentiel" de *La Boîte à Merveilles*,
> pourtant affiché et vérifié par capture d'écran plus tôt dans cette
> même session, a été silencieusement remis à `null` — repéré
> immédiatement (recherche du texte connu sur la page live) et corrigé en
> reportant ce texte dans l'Excel puis en relançant l'import. **Leçon** :
> toute donnée écrite directement en base (hors pipeline Excel) doit être
> reportée dans le fichier Excel dans la foulée, sinon le prochain
> `npm run importer` — même motivé par un tout autre besoin — peut
> l'effacer sans avertissement (`0 erreur` dans le résumé de l'import : ce
> n'est pas un cas signalé comme un problème par le script).
>
> **Les 12 chapitres de *La Boîte à Merveilles* sont tous ajoutés — le
> roman est complet** (en trois vagues cette session : 2-3, puis 4-6, puis
> 7-12 ; l'œuvre n'avait que le chapitre 1 avant). Source à chaque fois :
> l'utilisateur a fourni, dans la conversation, le déroulé événement par
> événement de chaque chapitre — ce contenu n'est donc PAS inventé, il
> vient de l'utilisateur (y compris l'ordre d'arrivée un peu particulier :
> les chapitres 9 à 12 ont été envoyés avant les chapitres 7 et 8, qui ont
> comblé le trou juste après — les 12 chapitres sont bien tous présents et
> dans le bon ordre en base). À partir de ces points, Claude a
> systématiquement : rédigé un résumé français suivi (`resume_fr`),
> reformaté les points en `points_cles_fr` (numérotation et légères
> corrections orthographiques), proposé des thèmes
> (`theme_principal`/`themes_secondaires`) et un titre court et descriptif
> par chapitre (aucun titre fourni par l'utilisateur pour aucun chapitre —
> même logique que "Dar Chouafa" pour le chapitre 1, un titre par
> événement/lieu central : "Le pèlerinage à Sidi Ali Boughaleb", "La
> disparition de Zineb", "La visite chez Lalla Aïcha", "La mort du
> coiffeur", "Les préparatifs de l'Achoura", "Le jour de l'Achoura", "La
> bagarre chez les bijoutiers", "La faillite de Maâlem Abdeslem", "La
> visite au voyant Sidi El Arafi", "Le mariage malheureux de Moulay
> Larbi", "Le retour du père") ; puis traduit l'ensemble en arabe
> (`resume_ar`, `points_cles_ar`, `titre_ar`). **⚠️ Comme pour le chapitre
> 1, la traduction arabe et les thèmes/titres proposés sont signalés
> `statut = "à relire"` — non relus par un locuteur/enseignant, à faire
> avant tout usage en classe.** Ajouté via le pipeline normal (lignes dans
> la feuille "Chapitres" de `data/contenu-plateforme-bac.xlsx`, fichier
> non versionné — voir `.gitignore` — puis `npm run importer`, 0 erreur à
> chaque fois ; avant chaque relance, vérifié que
> `essentiel_fr`/`essentiel_ar` étaient bien restés dans la feuille
> "Oeuvres" — voir le piège documenté juste au-dessus). Les onglets
> Personnages/Sujets liés restent "Bientôt disponible" pour tous les
> chapitres : l'utilisateur n'a pas fourni cette information, donc rien
> n'y a été ajouté (nouveaux personnages mentionnés au fil des chapitres
> mais pas dans la feuille "Personnages" : Hamoussa, Lalla Aïcha, Moulay
> Larbi, le courtier malhonnête, Abderrahman le coiffeur et sa fille, Sidi
> Mohammed Ben Taher le coiffeur, Sidi El Arafi le voyant et sa femme,
> Salama la marieuse, Zhour, l'oncle Othmane et Lalla Khadija — à faire si
> besoin).
>
> ⚠️ **Incident résolu cette session : le site paraissait "catastrophique"
> à l'utilisateur, cause réelle = mémoire système épuisée, pas le design.**
> Après le déploiement v2, `/oeuvres/[slug]` répondait par intermittence en
> 500 ("Jest worker encountered 2 child process exceptions") ou restait
> bloqué 10-15s : la RAM de la machine (8 Go) était descendue à ~267 Mo
> libres, à cause de **~25 processus `chrome.exe` zombies** accumulés par
> des sessions Playwright précédentes non refermées proprement (chacune
> lançait un navigateur sans toujours le fermer en cas d'échec du script).
> Sous cette pression mémoire, les workers de compilation du serveur de
> dev plantaient et le rendaient intermittent, pas le CSS/JS livré. Fixé
> en tuant tous les `chrome.exe`, en vidant `.next` et en relançant le
> serveur (RAM libre repassée à ~2 Go). **Leçon pour la suite** : après
> tout script Playwright (même en cas d'échec), tuer explicitement les
> process `chrome.exe`/`playwright` restants avant de continuer — ne pas
> supposer que `browser.close()` suffit si le script a pu planter avant.
>
> En creusant plus loin (13 pages, desktop + mobile, capturées une fois le
> serveur stable), un vrai bug visuel a aussi été trouvé et corrigé :
> `components/SelecteurOeuvres.tsx` posait `flex-1` directement sur
> chaque pilule d'œuvre, ce qui entre en conflit avec le
> `overflow-x-auto` du conteneur — un enfant `flex-1` (flex-basis:0) se
> fait comprimer pour tenir dans la largeur disponible au lieu de
> déborder, donc en dessous de `md` (mobile) les pilules étaient
> écrasées et leur texte tronqué à l'écran, au lieu de défiler
> horizontalement comme prévu. `OngletsOeuvre`/`OngletsChapitre`
> n'avaient pas ce bug (ils utilisent le bon motif : rangée `min-w-max`,
> items à largeur naturelle). Corrigé en réservant `flex-1` à `md:` et
> en gardant `flex-none` en dessous — vérifié par une vraie capture
> d'écran mobile + une mesure DOM (`scrollWidth > clientWidth`), pas
> seulement en relisant le code.
>
> **Retouches demandées ensuite par l'utilisateur** (mêmes tokens/
> mécanismes v2, pas une nouvelle refonte) : (1) les onglets
> `OngletsOeuvre`/`OngletsChapitre` sont repassés du style souligné
> (v2) à une pastille bleue pleine et arrondie (style d'avant la
> refonte v2) ; (2) la photo de couverture de *La Boîte à Merveilles*
> recadrée plus haut (`bg-[center_62%]` → `bg-[center_74%]`) pour que
> l'enfant soit plus visible dans le cadre, au lieu du grand aplat de
> ciel au-dessus de lui ; (3) le sélecteur des 3 œuvres
> (`SelecteurOeuvres`, la barre de pilules Antigone/Boîte à
> Merveilles/Dernier Jour) a été **retiré** de `/oeuvres/[slug]` — plus
> affiché une fois qu'on est sur la page d'une œuvre précise — et le
> composant, devenu orphelin (plus aucun appelant), a été supprimé.
> Pour changer d'œuvre il faut désormais repasser par `/oeuvres`.
>
> ⚠️ **Fichiers non committés laissés par une session parallèle/antérieure,
> toujours en attente d'une décision de l'utilisateur** : `PROJECT_CHARTER.md`
> (un audit du projet, non lu en détail par Claude — jamais committé, jamais
> supprimé) et une capture d'écran à la racine (`Capture d'écran 2026-08-26
> 162006.png`). À décider : les garder, les supprimer, ou fusionner
> `PROJECT_CHARTER.md` avec ce fichier ETAT.md qui a la même fonction.
> `.omo/` et `dev-server.log` (métadonnées d'outils locaux de cette même
> session parallèle, pas du code) ont déjà été ajoutés à `.gitignore`.
>
> ### Refonte visuelle v2 (remplace intégralement la v1)
>
> La session précédente avait reconstruit tout le design sur la base d'un
> premier fichier de référence (`page-oeuvre.html`, pour *La Boîte à
> Merveilles*) : palette DM Sans/Playfair/Spectral, pilules pleines pour
> les onglets, bannière en rectangle plein, résumé sur carte teintée.
> **L'utilisateur a ensuite fourni un second fichier de référence, plus
> abouti** (`page-oeuvre (2).html`, pour *Le Dernier Jour d'un Condamné*)
> et a explicitement demandé, via question posée, de **remplacer le
> design v1 par celui-ci comme version définitive** — ce qui a été fait
> cette session sur toute la partie œuvre/chapitre du site :
>
> - **Tokens** (`app/globals.css`, système `@theme` de Tailwind v4) :
>   nouvelle palette bleue/encre (`--color-primary:#1d4ed8`,
>   `--color-ink:#1b3a8f`, `--color-surface`/`--color-surface-muted`,
>   `--color-validation`/`--color-erreur`...), rayons et ombre repensés.
>   Le token `--color-or` (accent ambre du lexique en v1) a été supprimé
>   sans remplaçant dédié — voir bug corrigé plus bas.
> - **Polices** (`app/layout.tsx`) : Inter (texte courant), Playfair
>   Display (titres), Lora (texte de lecture fr), IBM Plex Sans Arabic
>   (texte arabe) — remplacent DM Sans/Spectral.
> - **Icônes** (`components/icones.tsx`) : nouvelles icônes ajoutées
>   (`IconeIdee`, `IconeMasques`, `IconeMaison`) pour coller à la
>   maquette v2 ; ⚠️ piège connu du composant — passer un `className`
>   personnalisé remplace entièrement la taille par défaut (`size-4`),
>   il faut toujours inclure un `size-*` explicite sinon l'icône rend
>   énorme/non stylée (bug rencontré et corrigé sur `IconeFleche`).
> - **Nav/bannière/onglets** : `BarreNavigation.tsx` reconstruite (logo
>   SVG deux tons, hauteur 88px), `SelecteurOeuvres.tsx` en pilules
>   égales avec icône par œuvre, `BanniereOeuvre.tsx` refaite avec un
>   effet de fondu CSS `mask-image` (photo de couverture qui se fond en
>   dégradé vers la carte blanche, au lieu du rectangle plein v1),
>   `OngletsOeuvre.tsx`/`OngletsChapitre.tsx` passés en soulignement actif
>   (au lieu de pilules pleines), `SommaireChapitres.tsx` en grille de
>   cartes verticales avec badge numéroté/coche si lu.
> - **Règle métier inchangée** : les boutons "Lire le texte intégral"/
>   "Lecteur bilingue" n'apparaissent que si `oeuvre.mode ===
>   "texte_integral"` **et** qu'un premier chapitre existe réellement.
> - **Couvertures photo** : en plus de la photo *Boîte à Merveilles*
>   ajoutée par la session parallèle (corrigée en rectangle plein cette
>   session, `max-w-[800px] mx-auto` → pleine largeur `aspect-[16/9]`),
>   une photo de couverture pour *Le Dernier Jour d'un Condamné* a été
>   extraite du fichier de référence v2 lui-même (image encodée en
>   base64 dans son CSS) et posée dans `public/couvertures/
>   dernier-jour-condamne.jpg` + migration `20260831000000_
>   couverture_dernier_jour_condamne.sql`.
> - **Illustration SVG abandonnée** : `components/IllustrationEnfantBoite.tsx`
>   (dessin au trait fait main d'un enfant portant sa boîte, créé en
>   réponse à une demande précédente faute d'outil de génération d'image
>   réel) a été **supprimé** — la bannière v2 affiche désormais la vraie
>   photo avec l'effet de fondu au lieu d'une illustration.
> - **Bug corrigé** : `MotLexique.tsx`/`LexiqueChapitre.tsx` référençaient
>   encore `text-or`/`decoration-or`, un token disparu avec la refonte
>   des tokens — Tailwind ne génère alors silencieusement aucune règle
>   (pas d'erreur de build), le soulignement du lexique perdait sa
>   couleur. Repéré uniquement via une vraie capture d'écran, pas en
>   lisant le code. Corrigé en `text-primary`/`decoration-primary` (la
>   palette v2 n'a pas d'accent dédié « lexique » comme l'ambre en v1).
>
> Chaque changement de design a été vérifié par une **vraie capture
> d'écran Playwright** avant d'être considéré terminé (voir règle
> ci-dessous) — jamais uniquement par lecture du code/CSS compilé.
>
> ⚠️ **Si le serveur de dev devient très lent ou plante (out of
> memory)** : vérifier `tasklist` pour des processus `node.exe`
> orphelins — chaque redémarrage de `npm run dev` dans une session
> laisse l'ancien processus tourner en arrière-plan si on ne le tue pas
> explicitement (le port change alors à chaque fois : 3000, 3001,
> 3002...). Un jour, 8 serveurs de dev tournaient simultanément sur
> cette machine et ont fini par saturer la RAM. Toujours `taskkill //F
> //PID <pid>` l'ancien processus avant/après en relancer un nouveau.
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
| `/` | `(public)` | aucune | ✅ accueil minimal, lien vers /oeuvres |
| `/ressources`, `/a-propos` | `(public)` | aucune | ✅ pages minimales ("Bientôt disponible"), destinations de la nav |
| `/oeuvres` | `(public)` | aucune | ✅ grille des œuvres, filière codée en dur (`"1bac"`) |
| `/oeuvres/[slug]` | `(public)` | aucune | ✅ sélecteur d'œuvre en pilules, bannière (cartes résumé fr/ar, badge auteur, boutons d'action, barre d'avancement si connecté) toujours visible, barre d'onglets ; seul l'onglet **Résumé** a du contenu réel |
| `/oeuvres/[slug]/[numero]` (détail d'un chapitre) | `(public)` | aucune | ✅ fil d'Ariane, en-tête, barre d'onglets (Résumé/Personnages/Lexique/Lieux/Sujets liés), résumé bilingue avec **mots de lexique cliquables**, texte intégral (si dispo), aperçu 3 colonnes, bouton "Marquer comme lu", journal d'activité |

### Composants (`components/`)

⚠️ Liste ci-dessous partiellement périmée sur le style visuel exact
(rédigée avant la refonte sur fichier de référence, voir la section
"Refonte visuelle complète" plus bas pour les composants réellement
nouveaux : `BanniereOeuvre`, `LiensNavigation`, `icones.tsx`) — les
noms de composants et leur rôle fonctionnel, eux, restent à jour.

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

Session design (nav + maquettes) : `BarreNavigation` (nav globale,
menu mobile en `<details>` natif, sans JS), `BoutonDeconnexion`
(**client**, seul morceau interactif de la nav), `SelecteurOeuvres`
(pilules d'œuvre), `CarteBilingue` (paire de cartes résumé fr/ar,
réutilisée dans la bannière d'œuvre et l'onglet Résumé d'un chapitre),
`MotLexique` (**client**, mot cliquable ouvrant sa définition — popover
en desktop, feuille pleine largeur depuis le bas en mobile),
`OngletsChapitre` (barre d'onglets du chapitre, même mécanisme que
`OngletsOeuvre`), `PersonnagesChapitre`, `LieuxChapitre`,
`SujetsChapitre` (listes utilisées à la fois en aperçu 3 colonnes et
comme contenu de leur propre onglet).

### `lib/`

- `lib/supabase/client.ts` — client navigateur (`createBrowserClient`)
- `lib/supabase/server.ts` — client serveur (`createServerClient`,
  cookies), à recréer à chaque requête
- `lib/supabase/contenu.ts` — lecture du contenu public (œuvres,
  chapitres, fiches, paragraphes, lexique, personnages et sujets d'un
  chapitre précis) pour les Server Components
- `lib/lexique.ts` — normalisation d'un mot pour faire correspondre le
  texte d'un chapitre à une entrée `lexique.mot` (retire les articles
  de tête, élidés ou séparés — voir les commentaires du fichier pour
  les limites connues : pas d'expressions à plusieurs mots, pas
  d'accord singulier/pluriel)
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
- ✅ Session Design : nav globale (`BarreNavigation`, avec état connecté/
  déconnecté), sélecteur d'œuvre en pilules, bannière d'œuvre et de
  chapitre reprises des deux maquettes fournies, mots de lexique
  cliquables dans le résumé d'un chapitre (popover desktop / feuille
  mobile), nouveaux onglets **du chapitre** Personnages/Lieux/Sujets
  liés branchés sur les vraies données. Détail des choix et des
  quelques écarts assumés par rapport aux maquettes littérales
  ci-dessous ("Adaptations pragmatiques").
- Attention à ne pas confondre avec le point suivant : ce sont les
  onglets **du chapitre** qui sont branchés cette session, pas les
  onglets **de l'œuvre** (Personnages/Lexique/Sujets/Biographie de
  `/oeuvres/[slug]`), toujours "Bientôt disponible".
- ✅ Correctif de fidélité visuelle (même session Design, suite à un
  retour direct comparant au rendu réel des maquettes) : fond de page
  bleu très pâle (`--color-background`) au lieu de blanc, bordures des
  cartes en bleu clair (`--color-border`) au lieu de gris neutre,
  ombre légère (`shadow-sm`) sur toutes les cartes, police serif
  (Playfair Display, `font-serif`) sur les grands titres d'œuvre et de
  chapitre en bleu foncé, barres d'onglets sur fond bleu pâle avec
  soulignement épais (`border-b-4`) de l'onglet actif, cartes de
  chapitre simplifiées ("Chapitre N" en gras + titre réel en sous-titre,
  sans répétition). Vérifié dans la CSS compilée après build, pas
  seulement dans le code source.

**Commencé mais incomplet :**
- Onglets Personnages, Lexique, Sujets, Biographie de `/oeuvres/[slug]`
  (au niveau de l'**œuvre** entière, pas du chapitre) : UI présente
  (barre d'onglets fonctionnelle, restylée cette session), contenu
  toujours non branché alors que les tables/colonnes existent déjà.
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

### Bug visuel trouvé et corrigé par capture d'écran réelle

Après un retour "ce n'est pas élégant", plutôt que de continuer à
deviner à partir du code, une vraie capture d'écran (Playwright) a été
prise du rendu réel. Elle a révélé un bug que la relecture du code
n'avait pas montré : le titre arabe (œuvre et chapitre) apparaissait
détaché, plaqué à droite de la page, sans rapport visuel avec le titre
français juste au-dessus.

**Cause** : un bloc `<p dir="rtl">` en pleine largeur aligne son texte
à droite de TOUTE la largeur disponible (comportement RTL normal), pas
à droite de son propre contenu — donc loin du titre français, aligné
à gauche, plus étroit. Idem pour l'en-tête "ملخص" de la carte de
résumé arabe : le `dir="rtl"` était posé sur toute la carte (au lieu
du texte seul), ce qui inversait aussi la ligne d'en-tête en flex et
poussait l'icône + le mot à droite, incohérent avec la carte française.

**Correctif** : `w-fit` sur les titres arabes (le bloc se réduit à son
contenu, reste donc calé au même bord gauche que le titre français
au-dessus) ; `dir="rtl"` déplacé du conteneur de la carte "ملخص" vers
le seul bloc de texte, en laissant la ligne d'en-tête en LTR comme
celle de la carte française. Appliqué partout où le même motif
existait : `/oeuvres/[slug]`, `/oeuvres/[slug]/[numero]`, `CarteOeuvre`
(grille de `/oeuvres`), `CarteBilingue`.

**Leçon pour la suite** : pour tout retour visuel/esthétique sur ce
projet, prendre une vraie capture d'écran (Playwright) avant de faire
des hypothèses sur ce qui ne va pas — mais **jamais** en installant
Playwright dans le `node_modules` du projet pendant que `next dev`
tourne dessus : la première tentative (`npm install --no-save
playwright` directement dans le projet) a corrompu le cache webpack et
cassé le serveur en cours d'utilisation (voir plus bas, section
mémoire des processus). Depuis, Playwright est installé dans un
répertoire complètement séparé (le scratchpad de la session, avec son
propre `package.json`), qui pointe juste vers le serveur de dev déjà
lancé via son URL `localhost` — aucun risque pour `node_modules` du
projet. Le vide apparent en bas de `/oeuvres/[slug]/boite-a-merveilles`
n'est PAS un bug : `essentiel_fr`/`essentiel_ar` sont vides pour les 3
œuvres en base (colonnes existantes, jamais remplies dans le fichier
Excel), la page est donc légitimement courte tant que ce contenu n'est
pas rédigé.

### Passage typographie (texte courant, pas seulement les titres)

Après un retour "l'écriture est catastrophique", constat : la session
précédente avait donné un traitement soigné aux grands titres (police
serif Playfair Display, taille, couleur) mais rien au texte courant
(résumés, listes, thèmes...), qui retombait sur la police système par
défaut du visiteur — aucune police n'était chargée pour lui.

- Nouvelle police **Source Sans 3** (`app/layout.tsx`), câblée comme
  police par défaut de tout le site via le token Tailwind `--font-sans`
  (`app/globals.css`) : aucune classe à ajouter dans les composants
  existants, tout le texte courant en bénéficie automatiquement.
- Texte des cartes de résumé (`CarteBilingue`) : `text-sm` → `text-base`
  + `leading-relaxed` — c'est le contenu principal de lecture de la
  page, il ne doit pas être traité comme un `text-sm` d'interface.
- En-têtes de section ("Résumé", "ملخص", "Points clés", "Personnages",
  "Lieux", "Sujets liés") : petites capitales bleues avec filet
  (`text-xs uppercase tracking-wide text-primary border-b`), motif
  éditorial cohérent repris partout où un tel en-tête existe.
- Thèmes d'un chapitre : passés d'une phrase brute ("Thèmes : a, b, c")
  à des pastilles (même style que les autres badges du site).
- Points clés, lieux, sujets liés : puce ronde colorée au lieu du
  disque HTML par défaut, plus d'espacement vertical entre les lignes.
- Personnages/lieux/sujets : nom en gras sur une ligne, rôle/description
  en dessous en texte atténué, plutôt qu'une seule ligne dense séparée
  par un tiret.

### Couverture photo de La Boîte à Merveilles (session parallèle + correctif)

`oeuvres.couverture_url` de `boite-a-merveilles` pointe désormais vers
`/couvertures/boite-a-merveilles.png` — un **fichier local du dépôt**
(`public/couvertures/`, servi directement par Next.js), pas un objet
Supabase Storage comme le suggérait le commentaire original de la
migration de création d'`oeuvres`. `couverture_url` accepte les deux :
une URL distante (bucket public, ce que `next.config.ts` autorise déjà
via `remotePatterns` pour `*.supabase.co`) ou un chemin public local —
`CouverturePanneau` (dans `BanniereOeuvre.tsx`) ne fait aucune
distinction, `next/image` gère les deux de la même façon.

Correctif apporté cette session : la photo s'affichait centrée avec de
grandes marges blanches de chaque côté (`max-w-[800px] mx-auto`), ce
qui cassait l'effet de bannière rectangulaire attendu. Passée en
pleine largeur de la carte, `aspect-[16/9]`.

`CouvertureOeuvre.tsx` (la grille `/oeuvres`) et `CouverturePanneau`
(la bannière `/oeuvres/[slug]`) sont deux composants distincts qui
lisent chacun `couverture_url` séparément : les deux en bénéficient
déjà sans changement supplémentaire.

### Contenu rédigé par Claude (à réviser) et illustration ajoutée

- `oeuvres.essentiel_fr`/`essentiel_ar` de `boite-a-merveilles` : ces
  deux colonnes existaient depuis le début mais étaient vides pour les
  3 œuvres (la feuille Excel ne les remplit pas). Sur demande directe,
  rédigé un résumé de l'intrigue à partir de la connaissance générale
  du roman (pas de sa source Excel) et écrit directement en base via
  `SUPABASE_SERVICE_ROLE_KEY` (même clé que `scripts/importer.ts`).
  ⚠️ **La version arabe est une traduction de Claude, non relue par un
  locuteur** — à faire vérifier avant un usage en classe. Si le fichier
  Excel est un jour réimporté avec ces colonnes remplies, il écrasera
  ce texte (comportement normal de l'upsert).
- `components/IllustrationEnfantBoite.tsx` (nouveau) : illustration
  originale au trait (SVG dessiné à la main, pas une photo ni une
  image générée par IA) représentant un enfant portant sa boîte à
  merveilles, dans le même langage graphique que `components/icones.tsx`.
  Remplace le dégradé nu du panneau de couverture de `BanniereOeuvre`
  — le titre n'y est plus répété (déjà affiché en grand dans la
  colonne de gauche), l'illustration devient le centre d'attention du
  panneau.

### Refonte visuelle complète sur fichier de référence fourni

L'utilisateur a fourni un fichier HTML/CSS autonome et déjà abouti
(`page-oeuvre.html`, non committé — reçu dans la conversation, pas
dans le dépôt) avec instruction explicite : "reproduis exactement...
ne change rien au rendu visuel". Traité comme référence faisant
autorité, remplaçant la palette/les polices/le style de tous les
passages design précédents (voir sections ci-dessus, en grande partie
obsolètes depuis).

**Tokens** (`app/globals.css`) — extraits 1:1 du `:root` du fichier de
référence, noms français choisis pour rester cohérents avec le code :
fond de page `#f5f8ff`, cartes blanches, bordure `#dce6f8` (+ variante
`--color-border-strong` `#c3d4f2` pour le survol), bleu actif
`#2453c4` (`--color-primary`), bleu profond `#16307b`
(`--color-ink`, réservé à l'affichage — titres/logo, jamais un élément
cliquable), plus `--color-validation` (vert, badge "lu"),
`--color-or` (accent réservé au Lexique). Rayons de coin agrandis
(10/14/20px) et ombre bleutée personnalisée, tous deux appliqués
globalement via les tokens Tailwind `--radius-*`/`--shadow-sm` — aucun
composant n'a eu besoin d'être touché pour ça spécifiquement.

**Polices** (`app/layout.tsx`) — trois polices latines au lieu d'une :
DM Sans (interface, `--font-sans`, par défaut sur tout le site),
Playfair Display (grands titres, `--font-serif`), Spectral (texte de
lecture longue — résumés —, nouveau token `--font-lecture`), plus
Amiri (arabe, inchangé).

**Icônes** (`components/icones.tsx`) — tous les emoji du site (📖 👤 📍
🔗 ✎ 📚 ☰) remplacés par un jeu d'icônes SVG cohérent (trait
`currentColor`), repris des chemins exacts du fichier de référence
quand ils y figurent, complétés dans le même style pour les icônes
propres à la page chapitre (Lieux, Sujets liés) qui n'y figurent pas.

**Composants reconstruits** : `BarreNavigation` (74px, logo "Medrasti"
en serif, liens Accueil/Œuvres/Langue/Rédaction, avatar rond pour un
utilisateur connecté), `LiensNavigation` (nouveau, **client** —
seul moyen fiable de connaître l'URL courante pour surligner le lien
actif, `BarreNavigation` étant un Server Component partagé par toutes
les pages), `SelecteurOeuvres` (fond blanc, pilule inactive fondue
dans le fond de page), `BanniereOeuvre` (nouveau — carte blanche
unique encadrant tout le haut de page, avec panneau de couverture
typographique en dégradé bleu + cercles décoratifs, PAS une
illustration générée), `CarteBilingue` (cartes imbriquées
`--color-background`, plus de blanc, texte en `font-lecture`),
`OngletsOeuvre`/`OngletsChapitre` (carte de pilules avec ombre, onglet
actif en pastille bleu plein — remplace l'ancien style à
soulignement), `SommaireChapitres` (carte de chapitre sans ombre,
titre en Playfair, effet de levée au survol), `BarreProgression`
("Ta progression" + barre fine).

**Nouvelle règle métier** : `oeuvre.mode === "texte_integral"` ET un
premier chapitre existant conditionnent désormais l'affichage de "Lire
le texte intégral"/"Lecteur bilingue" (avant : toujours affichés).
Vérifié sur les 3 œuvres réelles : `boite-a-merveilles` et `antigone`
sont en `accompagnement` (pas de bouton, comme dans le fichier de
référence), `dernier-jour-condamne` est en `texte_integral` mais n'a
aucun chapitre importé (pas de bouton non plus, faute de destination).

**Écarts assumés par rapport au fichier de référence** :
- Pas d'année de publication dans le badge auteur ("Ahmed Sefrioui",
  pas "Ahmed Sefrioui — 1954" comme dans le fichier) : aucune colonne
  `annee`/`date_publication` n'existe sur `oeuvres`, rien à afficher
  sans l'inventer.
- Liste de chapitres : seuls les chapitres réellement importés
  s'affichent (1 pour `boite-a-merveilles`) — le fichier de référence
  montre une liste de 12 avec des titres fictifs ("Le Msid", "Les
  Bijoux"...) pour les chapitres non encore rédigés ; ces titres
  n'existent dans aucune source de données réelle, ils n'ont donc pas
  été reproduits (pas de fabrication de contenu).
- Page chapitre (fil d'Ariane, en-tête, largeur `max-w-3xl` au lieu de
  1180px) : non couverte par le fichier de référence (qui ne montre
  que la page œuvre) — même système de tokens/polices/cartes appliqué
  par cohérence, largeur de lecture plus étroite choisie délibérément
  (confort de lecture d'un texte long).
- Points de repère de breakpoints (960px/600px dans le fichier
  d'origine) approximés par les paliers `sm`/`md` standards de
  Tailwind plutôt que reproduits au pixel près.

### Adaptations pragmatiques par rapport aux maquettes littérales

- **Nav** (⚠️ description ci-dessous périmée, voir "Refonte visuelle
  complète" au-dessus pour les liens réels actuels — conservé pour
  l'historique) : "Accueil", "Correcteur IA", "Ressources", "À propos"
  menaient à des pages minimales sans contenu réel. "Se connecter" et
  "S'inscrire" pointent tous les deux vers `/connexion` : le site n'a
  qu'un seul flux (Google OAuth), qui gère indifféremment inscription
  et connexion — ce point-là reste vrai.
- **Bannière d'œuvre** : "Lire le texte intégral" et "Lecteur bilingue"
  mènent tous les deux au premier chapitre — il n'existe qu'une seule
  expérience de lecture aujourd'hui (déjà bilingue), pas un second mode
  "lecteur bilingue" distinct.
- **Illustrations** : portraits d'auteur générés par IA retirés
  partout (demandé explicitement) ; illustration décorative de la
  bannière de chapitre non reprise du tout (pas seulement masquée en
  mobile) pour rester cohérent avec l'absence d'illustration générée
  côté œuvre.
- **Popover de lexique** : feuille pleine largeur en mobile (recommandé
  avant codage), popover flottante ancrée sous le mot en desktop —
  aucune librairie de positionnement dans le projet, donc pas de
  recalage automatique en cas de débordement proche du bord d'écran
  (rare en desktop vu la largeur de colonne).
- **Onglets** (œuvre et chapitre) : pas de scroll-into-view JS si on
  arrive directement sur un onglet non visible au chargement — accepté
  comme limite d'un composant volontairement sans JS.
- **Sommaire des chapitres** : reste une liste verticale (cartes
  empilées, badge numéroté rond) plutôt que la rangée de cartes à
  défilement horizontal de la maquette — plus accessible et plus sûr
  sur mobile pour un nombre de chapitres qui peut grandir.
- **Mot de lexique cliquable** : ne détecte qu'un mot isolé par
  occurrence (première seulement), pas les expressions à plusieurs mots
  ni les accords singulier/pluriel/conjugaison — voir les limites
  documentées dans `lib/lexique.ts`.

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

1. Appliquer la migration `20260829000000_lecture_admin_profils.sql`
   dans le dashboard Supabase (voir avertissement en tête de fichier).
2. Confirmer la vraie valeur de `QUOTA_QUOTIDIEN_MAX` (actuellement 3,
   inventé — voir section 3).
3. Brancher les onglets Personnages / Lexique / Sujets / Biographie de
   `/oeuvres/[slug]` (niveau œuvre) sur les données déjà en base — les
   onglets équivalents du **chapitre** le sont déjà depuis cette session.
4. Décider si `profils.filiere` doit être ajouté maintenant (déblocage
   de la filière codée en dur) ou reporté.
5. Construire l'UI élève de dépôt de copie (photo → `copies`), seule
   pièce manquante pour que `/administration` et le bloc Progression du
   tableau de bord affichent des données réelles côté rédaction.
6. Revoir les adaptations pragmatiques listées en section 3 si l'une
   d'elles doit finalement suivre la maquette à la lettre (ex. un vrai
   contenu pour Correcteur IA/Ressources/À propos, ou une distinction
   réelle entre "texte intégral" et "lecteur bilingue").
7. Si le texte intégral des œuvres devient disponible, ajouter une
   feuille "Paragraphes" au fichier Excel (colonnes : oeuvre_slug,
   chapitre_numero, ordre, texte_fr, texte_ar) puis relancer
   `npm run importer` — le script est déjà prêt à la lire.
8. Décider du sort de `PROJECT_CHARTER.md` et de la capture d'écran non
   committée à la racine (laissés par la session parallèle — voir
   avertissement en tête de fichier).
9. La refonte v2 n'a couvert que la partie œuvre/chapitre (nav,
   bannière, onglets, cartes) — le reste du site (accueil, tableau de
   bord, page de rédaction) utilise déjà les nouveaux tokens via les
   classes sémantiques mais n'a pas été comparé composant par composant
   à la maquette v2, faute de référence pour ces pages-là.
