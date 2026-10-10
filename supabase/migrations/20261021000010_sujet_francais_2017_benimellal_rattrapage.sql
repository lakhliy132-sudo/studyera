-- Sujet de français, examen régional 2017 (session de rattrapage), académie
-- Béni Mellal-Khénifra, sur Le Dernier Jour d'un condamné.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2017 جهة بني ملال خنيفرة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Sujet à deux textes : Le Dernier Jour d'un condamné (texte 1) et La Boîte
-- à merveilles (texte 2) ; l'œuvre retenue pour le filtre est celle du
-- texte 1. Académie de Béni Mellal-Khénifra, session de rattrapage 2017,
-- durée 2 heures (en-tête en arabe). Coefficient vide : 04 ou 03 selon la
-- série. Corrigé de la question 6b sans barème : 0,5 pt par déduction.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2017,
  $sujet$rattrapage$sujet$,
  $sujet$Béni Mellal-Khénifra$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies, sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

**TEXTE 1 :**

(…) Encore six heures ; et je serai mort ! je serai quelque chose d'immonde qui traînera sur la table froide des amphithéâtres; une tête qu'on moulera d'un côté, un tronc qu'on disséquera de l'autre; puis de ce qui restera, on en mettra plein une bière⁽¹⁾, et le tout ira à Clamart.

Voilà ce qu'ils vont faire de ton père, ces hommes dont aucun ne me hait, qui tous me plaignent et tous pourraient me sauver. Ils vont me tuer. Comprends-tu cela, Marie ? me tuer de sang-froid, en cérémonie, pour le bien de la chose ! Ah ! grand Dieu ! (…)

Oh ! si ces jurés l'avaient vue, au moins, ma jolie petite Marie ! ils auraient compris qu'il ne faut pas tuer le père d'un enfant de trois ans.

*(1) Cercueil, coffre où l'on met le cadavre d'un mort avant de l'enterrer.*

**TEXTE 2 :**

« Je vais peut-être mourir, moi aussi, pensais-je. Peut être aurai-je, derrière mon cercueil, des anges beaux comme la lumière du jour ! »

J'imaginais le cortège : quelques personnes du quartier, le *fqih* de l'école coranique, mon père, plus grave que jamais et des anges, des milliers d'anges vêtus de soie blanche. A la maison, ma mère pousserait des cris à se déchirer le gosier, elle pleurerait pendant des jours et pendant des nuits. Elle serait toute seule le soir pour attendre le retour de mon père.

Non! Je ne voulais pas mourir !

- je ne veux pas mourir ! criais-je en me dressant dans mon lit. Je ne veux pas mourir.

Je rejetai la couverture et me mis debout, hurlai cette phrase de toute la force de mes poumons. Mon père me recoucha, tempéra par des paroles douces mes angoisses.

## I. Étude de texte (10 points)

**1.** Contextualiser (2 points) — Recopiez et complétez le tableau suivant (texte 1 : auteur « Victor Hugo » ; texte 2 : « La Boîte à Merveilles », Roman autobiographique, 1954) : **(1 pt)**

| Texte 1 — Référence du texte (œuvre) | Texte 1 — Genre littéraire | Texte 1 — Date de publication | Texte 2 — Auteur |
|---|---|---|---|
| | | | |

**2.** Qui est le narrateur dans chaque texte ? **(1pt)**

**3a.** Analyser (6 points) — Questions sur le texte 1 : A qui s'adresse le narrateur dans ce texte? **(1pt)**

**3b.** Le narrateur parle-t-il essentiellement de sa grâce, de son exécution ou de son passé avec sa petite fille?

**4a.** Quels sentiments se dégagent des paroles du narrateur ? (Recopiez la bonne réponse) **(1pt)**

a- La joie et le bonheur  
b- L'espoir et l'optimisme.  
c- La pitié et l'attendrissement.

**4b.** Quelle tonalité (registre littéraire) suggèrent ces sentiments ?

**5.** Le narrateur accepte-t-il la peine de mort ? Pourquoi d'après le texte ? **(1pt)**

**6a.** Questions sur le texte 2 : Relevez du texte deux mots appartenant au champ lexical de la mort. **(1 pt)**

**6b.** Ce champ lexical met-il en valeur une atmosphère de deuil ou d'allégresse?

**7.** « A la maison, ma mère pousserait des cris à se déchirer le gosier » Dans cette phrase, la figure de style utilisée est l'………… C'est une figure qui consiste à ………… le sentiment de ………… de la mère en l'………… Recopiez et complétez l'énoncé ci-dessus avec les mots convenables choisis dans la liste suivante : plaisir, hyperbole, adoucissant, atténuer, douleur, exagérant, antithèse, mettre en valeur. **(1 pt)**

**8.** Citez un geste fait par le père pour calmer son enfant. **(1pt)**

**9.** Réagir (2 points) — La relation entre le père et son enfant, dans les deux textes, vous semble-t-elle bonne ou mauvaise? Justifiez votre réponse en une ou deux phrases. **(1 pt)**

**10.** Selon vous, qu'est-ce qui justifie l'attachement des deux personnages à la vie ? **(1pt)**

## II. Production écrite (10 points)

**SUJET :** Vous avez lu sur les pages d'un réseau social (internet) les propos suivants :

« Pour moi, ma vie au sein de ma famille, entre mes frères et sœurs, est une source de joie et de bonheur. »

- Êtes-vous d'accord avec ces propos? Rédigez un écrit argumenté dans lequel vous défendrez votre point de vue.

Les éléments suivants seront tenus en compte lors de la correction de votre copie.

- **Discours :** respect de la consigne, cohérence de l'argumentation, structure du texte.
- **Langue :** vocabulaire, syntaxe, ponctuation, orthographe, conjugaison, mise en forme.$sujet$,
  $sujet$## Corrigé et barème

*Barème et éléments de réponse. Toute réponse imprévue est laissée à l'appréciation des correcteurs.*

### I. Étude de texte

**1.** **(1 pt)**

| Texte 1 — Référence du texte (œuvre) | Texte 1 — Genre littéraire | Texte 1 — Date de publication | Texte 2 — Auteur |
|---|---|---|---|
| Le Dernier Jour d'un Condamné | Roman à thèse | 1829 | Ahmed Sefrioui |

**2.** Texte 1 : le narrateur = Le condamné à mort /Texte 2 : le narrateur = Sidi Mohammed. (0,5 pt x2) **(1pt)**

**3a.** Il s'adresse à sa fille. (0,5 pt) **(1pt)**

**3b.** Il parle de son exécution. (0,5 pt)

**4a.** c- La pitié et l'attendrissement. **(1pt)**

**4b.** La tonalité pathétique... (0,5 pt)

**5.** -Non, il n'accepte pas la peine de mort... (0,5 pt) -«…il ne faut pas tuer le père d'un enfant... » / L'exécution d'un père de famille est horrible pour les enfants. (Accepter toute réponse allant dans ce sens.) (0,5 pt) **(1pt)**

**6a.** Cercueil, cortège, mourir, etc.(L'élève doit relever seulement deux mots...) (0,25 pt x 2) **(1 pt)**

**6b.** atmosphère de deuil...

**7.** Dans cette phrase, la figure de style utilisée est l'hyperbole. C'est une figure qui consiste à mettre en valeur le sentiment de douleur de la mère en l'exagérant. (0,25x4) **(1 pt)**

**8.** recoucher son enfant/ tempérer ses angoisses **(1pt)**

**9.** Accepter toute réponse pertinemment justifiée. **(1 pt)**

**10.** Accepter toute réponse pertinemment justifiée. **(1pt)**

### II. Production écrite

Tenir compte des critères ci-dessous en accordant la note finale sur la base des notes partielles attribuées et dûment reportées sur la copie du candidat ou de la candidate. **Discours :** conformité de la production à la consigne d'écriture, cohérence de l'argumentation, structure du texte (organisation et progression du texte) 5 pts. **Langue :** vocabulaire, syntaxe, ponctuation, orthographe, conjugaison... 5 pts.$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**TEXTE 1 :**\n\n(…) Encore six heures ; et je serai mort ! je serai quelque chose d'immonde qui traînera sur la table froide des amphithéâtres; une tête qu'on moulera d'un côté, un tronc qu'on disséquera de l'autre; puis de ce qui restera, on en mettra plein une bière⁽¹⁾, et le tout ira à Clamart.\n\nVoilà ce qu'ils vont faire de ton père, ces hommes dont aucun ne me hait, qui tous me plaignent et tous pourraient me sauver. Ils vont me tuer. Comprends-tu cela, Marie ? me tuer de sang-froid, en cérémonie, pour le bien de la chose ! Ah ! grand Dieu ! (…)\n\nOh ! si ces jurés l'avaient vue, au moins, ma jolie petite Marie ! ils auraient compris qu'il ne faut pas tuer le père d'un enfant de trois ans.\n\n*(1) Cercueil, coffre où l'on met le cadavre d'un mort avant de l'enterrer.*\n\n**TEXTE 2 :**\n\n« Je vais peut-être mourir, moi aussi, pensais-je. Peut être aurai-je, derrière mon cercueil, des anges beaux comme la lumière du jour ! »\n\nJ'imaginais le cortège : quelques personnes du quartier, le *fqih* de l'école coranique, mon père, plus grave que jamais et des anges, des milliers d'anges vêtus de soie blanche. A la maison, ma mère pousserait des cris à se déchirer le gosier, elle pleurerait pendant des jours et pendant des nuits. Elle serait toute seule le soir pour attendre le retour de mon père.\n\nNon! Je ne voulais pas mourir !\n\n- je ne veux pas mourir ! criais-je en me dressant dans mon lit. Je ne veux pas mourir.\n\nJe rejetai la couverture et me mis debout, hurlai cette phrase de toute la force de mes poumons. Mon père me recoucha, tempéra par des paroles douces mes angoisses.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Contextualiser (2 points) — Recopiez et complétez le tableau suivant (texte 1 : auteur « Victor Hugo » ; texte 2 : « La Boîte à Merveilles », Roman autobiographique, 1954) :", "champs": [{"libelle": "Texte 1 — Référence du texte (œuvre)", "reponse": "Le Dernier Jour d'un Condamné"}, {"libelle": "Texte 1 — Genre littéraire", "reponse": "Roman à thèse"}, {"libelle": "Texte 1 — Date de publication", "reponse": "1829"}, {"libelle": "Texte 2 — Auteur", "reponse": "Ahmed Sefrioui"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Qui est le narrateur dans chaque texte ?", "correction": "Texte 1 : le narrateur = Le condamné à mort /Texte 2 : le narrateur = Sidi Mohammed. (0,5 pt x2)"}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "Analyser (6 points) — Questions sur le texte 1 : A qui s'adresse le narrateur dans ce texte?", "correction": "Il s'adresse à sa fille. (0,5 pt)"}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Le narrateur parle-t-il essentiellement de sa grâce, de son exécution ou de son passé avec sa petite fille?", "correction": "Il parle de son exécution. (0,5 pt)"}, {"type": "choix", "numero": "4a", "points": 0.5, "enonce": "Quels sentiments se dégagent des paroles du narrateur ? (Recopiez la bonne réponse)", "options": ["La joie et le bonheur", "L'espoir et l'optimisme.", "La pitié et l'attendrissement."], "bonne": 2}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "Quelle tonalité (registre littéraire) suggèrent ces sentiments ?", "correction": "La tonalité pathétique... (0,5 pt)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Le narrateur accepte-t-il la peine de mort ? Pourquoi d'après le texte ?", "correction": "-Non, il n'accepte pas la peine de mort... (0,5 pt) -«…il ne faut pas tuer le père d'un enfant... » / L'exécution d'un père de famille est horrible pour les enfants. (Accepter toute réponse allant dans ce sens.) (0,5 pt)"}, {"type": "libre", "numero": "6a", "points": 0.5, "enonce": "Questions sur le texte 2 : Relevez du texte deux mots appartenant au champ lexical de la mort.", "correction": "Cercueil, cortège, mourir, etc.(L'élève doit relever seulement deux mots...) (0,25 pt x 2)"}, {"type": "libre", "numero": "6b", "points": 0.5, "enonce": "Ce champ lexical met-il en valeur une atmosphère de deuil ou d'allégresse?", "correction": "atmosphère de deuil..."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "« A la maison, ma mère pousserait des cris à se déchirer le gosier » Dans cette phrase, la figure de style utilisée est l'………… C'est une figure qui consiste à ………… le sentiment de ………… de la mère en l'………… Recopiez et complétez l'énoncé ci-dessus avec les mots convenables choisis dans la liste suivante : plaisir, hyperbole, adoucissant, atténuer, douleur, exagérant, antithèse, mettre en valeur.", "correction": "Dans cette phrase, la figure de style utilisée est l'hyperbole. C'est une figure qui consiste à mettre en valeur le sentiment de douleur de la mère en l'exagérant. (0,25x4)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Citez un geste fait par le père pour calmer son enfant.", "correction": "recoucher son enfant/ tempérer ses angoisses"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Réagir (2 points) — La relation entre le père et son enfant, dans les deux textes, vous semble-t-elle bonne ou mauvaise? Justifiez votre réponse en une ou deux phrases.", "correction": "Accepter toute réponse pertinemment justifiée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Selon vous, qu'est-ce qui justifie l'attachement des deux personnages à la vie ?", "correction": "Accepter toute réponse pertinemment justifiée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**SUJET :** Vous avez lu sur les pages d'un réseau social (internet) les propos suivants :\n\n« Pour moi, ma vie au sein de ma famille, entre mes frères et sœurs, est une source de joie et de bonheur. »\n\n- Êtes-vous d'accord avec ces propos? Rédigez un écrit argumenté dans lequel vous défendrez votre point de vue.\n\nLes éléments suivants seront tenus en compte lors de la correction de votre copie.\n\n- **Discours :** respect de la consigne, cohérence de l'argumentation, structure du texte.\n- **Langue :** vocabulaire, syntaxe, ponctuation, orthographe, conjugaison, mise en forme.", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
