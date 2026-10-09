@AGENTS.md

# StudyEra — notes de projet

Site de révision pour les élèves de **1ère année du baccalauréat au
Maroc**. Quatre matières (français, arabe, histoire-géographie,
éducation islamique), leurs cours, et les outils qui vont avec :
calendrier de l'examen régional, flashcards, communauté, correcteur de
copies.

Le dossier local s'appelle `MADRASTI`, le site s'appelle **StudyEra**.
C'est le second nom qui est affiché partout.

---

## 1. La règle qui prime sur toutes les autres

**Ne jamais inventer de contenu ni de données.**

Ce site sert à réviser un examen. Un chiffre inventé, un sujet d'examen
reconstitué de mémoire ou une leçon approximative valent moins que rien :
ils induisent l'élève en erreur sur ce qu'il doit savoir.

En pratique, partout dans le code :

- Une donnée absente donne un **état vide honnête** (« Bientôt
  disponible », « Pas encore de suivi ») et non un zéro, un tiret ou un
  exemple.
- Un chiffre affiché est **compté sur la base**, jamais écrit en dur.
  Le rythme de révision conseillé, le nombre de leçons, les jours avant
  l'examen : tous calculés.
- Quand une maquette fournie montre une donnée qui n'existe pas
  (coefficients, nombre d'annales, pourcentage global de progression),
  **l'élément est retiré** et l'écart est expliqué en commentaire,
  plutôt que rempli avec du plausible.

Les commentaires du code citent souvent la demande de l'utilisateur
entre guillemets. Ce n'est pas du bavardage : c'est ce qui permet de
savoir, un an plus tard, si un choix était délibéré ou accidentel.
Garder cette habitude.

---

## 2. Pile et structure

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4,
Supabase. 32 routes, 97 composants, 20 migrations.

```
app/
  (public)/     pages ouvertes à tous
    [matiere]/            liste d'une matière, ses leçons, ses parties
    examens-regionaux/    annales (structure prête, contenu à venir)
    oeuvres/ langue/ production-ecrite/   le français
  (eleve)/      pages protégées (middleware.ts → CHEMINS_PROTEGES)
    tableau-de-bord/ progres/ communaute/ calendrier/ redaction/
  (admin)/      espace d'administration
components/     composants partagés
lib/            logique métier, accès Supabase (lib/supabase/)
supabase/migrations/   SQL, appliqué à la main (voir §6)
```

Serveur par défaut, client uniquement quand il le faut (`"use client"` :
filtres, chronomètre, formulaires, menu). Pas de gestionnaire d'état
global.

---

## 3. Couleurs, mode jour/nuit, palettes

C'est la partie la plus facile à casser. Trois mécanismes se
superposent.

### Les jetons

Toutes les couleurs sont des variables CSS déclarées dans
`app/globals.css` (`--color-primary`, `--color-ink`, `--color-surface`,
`--color-border`…). **Aucune couleur en dur dans les composants**, à
deux exceptions près, documentées sur place : les fonds sombres sur
lesquels du texte blanc est posé (bandeaux), et les quatre couleurs de
matière.

### Le mode sombre

Il n'y a **pas** de variante `dark:` de Tailwind dans ce projet. Le
thème se joue sur deux conditions, et il faut écrire les deux :

```css
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) { /* … */ }
}
:root[data-theme="dark"] { /* … */ }
```

La première suit la préférence système sauf si l'élève a forcé le mode
clair ; la seconde couvre le forçage explicite. `BoutonModeNuit` pose
`data-theme` sur `<html>` et le retient dans `localStorage`, et un
petit script dans `app/layout.tsx` l'applique avant le premier rendu
pour éviter le clignotement. C'est pour cette raison que `<html>` porte
`suppressHydrationWarning`.

### Les palettes

16 palettes (`lib/palettes.ts`), posées via `data-palette` sur `<html>`.
Une palette ne change que `--color-primary` et `--color-primary-vif` ;
les surfaces et le texte ne bougent pas.

**Le piège, déjà tombé une fois :** changer la couleur d'accent ne
suffit pas. `--color-ink`, l'encre de tous les titres sérif, était
restée bleu nuit, si bien que la moitié des titres du site ne suivait
pas la palette. Elle est maintenant **dérivée** de la couleur active :

```css
:root[data-palette] {
  --color-ink: color-mix(in srgb, var(--color-primary) 78%, #0a1020);
}
```

Les fonds sombres sous du texte blanc (menu de gauche d'un élève
connecté, bandeau du bas de l'accueil) passent par `--fond-sombre-haut`,
`--fond-sombre-bas` et `--fond-sombre-actif` : en mode sombre,
`--color-primary` devient clair, et un mélange unique donnait un fond
mauve où le blanc ne se lisait plus. Ces jetons ont donc une valeur par
mode.

Toute nouvelle variable qui dépend visuellement de l'accent doit être
traitée pareil, et **vérifiée à l'écran dans au moins deux palettes, en
clair et en sombre**, avant d'annoncer que c'est fait.

### Les couleurs de matière

```
français #1769e5   arabe #7546e9   histoire-géo #ec8214   islamique #0da58a
```

Elles ne servent plus qu'à la **grille de matières de l'accueil**
(`/matieres` suit la palette depuis sa refonte d'après maquette, à la
demande de l'utilisateur). Partout ailleurs — pages de matière, feuilles de cours,
sommaires, tableaux — tout suit la palette courante. Une tentative de
teinter chaque page selon sa matière a été faite puis **annulée à la
demande de l'utilisateur** : l'incohérence entre la section française
(bleue) et l'islamique (verte) le gênait. Ne pas la refaire.

### Deux pièges techniques

- **Tailwind ne voit pas les classes construites à l'exécution.** Une
  classe du type `` `text-${couleur}` `` ne sera jamais générée. Utiliser
  une classe littérale ou un `style` en ligne.
- **`color-mix` avec un jeton de thème** : en mode sombre, mélanger avec
  `var(--color-background)` donne la valeur claire, que Tailwind a
  inlinée. Mélanger avec une valeur fixe (`#0b0d12`).

---

## 4. Mise en page

- **Pleine largeur, avec des marges.** Les pages se construisent avec
  `flex w-full flex-col … px-6 sm:px-9 lg:px-16 xl:px-24 2xl:px-40`,
  jamais `mx-auto max-w-*`. L'utilisateur y tient : « je veux la forme
  d'un site, pas la forme d'une application ». Les marges grandissent
  avec l'écran (« avoir de la marge dans les côtés ») ; la barre du haut
  et le pied de page prennent les mêmes, pour rester alignés. Toute
  nouvelle page reprend cette suite de classes telle quelle.
  **Exception** : l'accueil, le tableau de bord et le calendrier gardent
  `px-6 sm:px-9` (« laisse les tailles comme avant cad sans marge »).
  La liste est dans `components/ConteneurMarges.tsx`
  (`PAGES_SANS_MARGES`), qui aligne la barre et le pied sur la page.
- **Breakpoints arbitraires** : une variante `min-[1400px]:` est placée
  *avant* `sm:` dans la CSS générée, donc `sm:grid-cols-2` l'emporte.
  Borner les plages (`sm:max-[1399px]:… min-[1400px]:…`), et vérifier
  à l'écran. Seule
  exception admise au `max-w` : un texte long destiné à la lecture — et
  encore, en demandant.
- **Téléphone d'abord pour les espacements.** Les marges et les tailles
  de titre sont resserrées en dessous de `sm` (640 px), les valeurs de
  bureau restant au-dessus. Les cartes de leçon deviennent des lignes
  compactes sur téléphone : une liste de 16 leçons passait de 5 écrans
  à moins de 3.
- **Le logo** (`components/LogoStudyera.tsx`) n'est pas une image mais
  un **masque CSS** rempli par `currentColor`, pour qu'il suive la
  palette et le mode sombre comme du texte. Seul le symbole est
  affiché, sans le mot « Studyera ».

---

## 5. Contenu des cours

Les leçons vivent dans la table `cours` en Markdown (`contenu_mdx`),
rendues par `components/ContenuMarkdown.tsx`.

- `##` → titre de section (numéroté en mise en page « feuille »),
  `###` → sous-titre.
- Un `## التصحيح` sépare le corrigé du reste : il est automatiquement
  **replié derrière un bouton** (`separerCorrection`), parce qu'un
  corrigé visible d'emblée ne sert à rien.
- Mise en page « feuille » (fond ivoire, sections numérotées, sommaire
  latéral) pour l'histoire-géographie et l'éducation islamique.
- **Arabe et RTL** : `dir="rtl"` explicite, `font-arabe`, propriétés
  logiques (`ps-*`, `border-s-*`). Le texte arabe demande un corps plus
  grand que le français pour rester lisible (`grandeTaille`).
- Les qasidas utilisent `***` entre les deux hémistiches. C'est voulu,
  ce n'est pas un défaut de rendu.
- **Piège CommonMark** : `و**«mot»**` ne produit pas de gras — un `**`
  collé à une lettre et suivi d'une ponctuation n'ouvre rien. Mettre la
  conjonction à l'intérieur : `**و«mot»**`.

**Transcrire un PDF :** l'extraction de texte (pdfjs, mupdf) perd des
lettres arabes. La méthode qui marche est de **rendre chaque page en
PNG et de la lire visuellement**, puis d'écrire le contenu dans un
script `.mjs` (les heredocs bash cassent sur de gros blocs arabes) qui
fait un PATCH REST.

---

## 6. Supabase

Tables principales : `cours`, `oeuvres`, `chapitres`, `sujets`,
`copies`, `progression`, `activite`, `profils`, `communaute_*`,
`evenements_eleve`, `annales`.

- **RLS sur tout.** Lecture publique pour le contenu pédagogique,
  restreinte à son propriétaire pour les données d'élève.
- **Les migrations ne peuvent pas être appliquées depuis le code** :
  seules les clés REST sont disponibles ici, pas de connexion Postgres.
  Les fichiers de `supabase/migrations/` sont donc **lancés à la main
  par l'utilisateur** dans l'éditeur SQL de Supabase. Les écrire de
  façon rejouable (`if not exists`, `drop policy if exists`).
- **Le code tolère l'absence d'une table** quand sa migration peut ne
  pas encore être appliquée (voir `lib/supabase/annales.ts`) : il
  renvoie une liste vide au lieu d'une erreur 500.
- **Jamais de clé `service_role` côté navigateur.** Elle n'est utilisée
  que par `lib/supabase/service.ts`, en contexte serveur, pour les
  écritures que l'élève ne doit pas pouvoir faire — typiquement la note
  d'une copie corrigée : il peut créer sa copie, pas en changer la note.

---

## 7. Le correcteur de copies

`/redaction/nouvelle` → `app/(eleve)/redaction/actions.ts` →
`lib/correcteur.ts` (API Messages d'Anthropic) → table `copies` →
`/redaction/[id]`.

- La clé se met dans `.env.local` sous `ANTHROPIC_API_KEY`, **sans**
  préfixe `NEXT_PUBLIC_`. Sans elle, la page le dit et désactive
  l'envoi au lieu de proposer un formulaire qui échouerait.
- Tout ce que renvoie le modèle est **revérifié avant d'entrer en
  base** : notes bornées à leur barème, listes nettoyées.
- Quota et longueur sont revalidés **dans l'action serveur**, pas
  seulement à l'affichage : un formulaire peut être rejoué.
- Texte uniquement pour l'instant. Pas de photo de copie : il faudrait
  un stockage d'images et une transcription.

---

## 8. Vérifier son travail

L'utilisateur juge sur ce qu'il voit, pas sur ce que dit le code.

- `npx tsc --noEmit` et `npx next lint` avant de conclure.
- **Prendre une vraie capture d'écran** avant d'affirmer qu'un
  changement visuel est correct. Playwright est utilisable
  (`playwright-core` + le Chromium déjà installé dans
  `~/AppData/Local/ms-playwright`). Raisonner depuis la CSS compilée ne
  suffit pas : plusieurs défauts n'ont été vus qu'à l'écran.
- Pour vérifier une page protégée, créer un compte de test via l'API
  admin de Supabase, injecter la session en cookie
  (`sb-<ref>-auth-token`, encodé en base64), **puis supprimer le
  compte**.
- Un build de production (`next build` avec un `distDir` séparé) donne
  les vrais chiffres de poids et de vitesse. Le serveur de
  développement sert ~11 Mo de script : ce n'est pas représentatif.

---

## 9. Ce qui reste à faire

- **Annales** : la structure est complète (table `annales`, épreuve
  interactive avec questions typées, chronomètre), il n'y a **aucun
  sujet** en base. La migration `20261003000000_annales.sql` doit être
  lancée.
- **Suivi de lecture** limité au français : seule `progression` existe,
  et elle ne suit que les chapitres d'œuvres. Les trois autres matières
  affichent « Pas encore de suivi ».
- **Correcteur** : en attente de la clé d'API.
- Pas de table d'exercices ni d'annales par matière, pas de
  coefficients d'examen. D'où les compteurs absents sur les cartes.
