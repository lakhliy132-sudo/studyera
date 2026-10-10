-- Sujet de français, examen régional 2021 (session normale), académie
-- Béni Mellal-Khénifra, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2021 جهة بني ملال خنيفرة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Béni Mellal-Khénifra, session normale 2021, « جميع الشعب
-- العلمية والتقنية والمهنية », « مدة الإنجاز : 2 ساعات », coefficient « 4/3 »
-- (laissé vide : deux valeurs). Le PDF place le corrigé en page 1, le sujet
-- ensuite (feuille de réponse en cinq pages).
-- Corrigé de la question 8 : « Comparant : jeunes seigneurs / Comparé : le
-- fqih », reporté dans les cases vides du tableau.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2021,
  $sujet$normale$sujet$,
  $sujet$Béni Mellal-Khénifra$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Toutes les filières scientifiques, techniques et professionnelles$sujet$,
  120,
  $sujet$## Texte

La lumière brillait à toutes les fenêtres de la maison. Hommes et femmes commençaient l'année dans l'activité. Ceux qui resteraient au lit un matin comme celui-ci se sentiraient, durant douze mois, indolents, paresseux.

L'appel d'un mendiant nous arrivait de la rue. J'entendais le bruit de sa canne. C'était sûrement un aveugle.

Je perdais mes babouches tous les trois pas. Mes parents voyaient grand. Ni les vêtements, ni les chaussures n'étaient à ma taille. Mais j'étais heureux.

Une fois dans la rue, mon père me glissa dans la main une pièce de cinq francs et me mit entre les bras le cierge dont nous avions fait l'acquisition. C'étaient mes cadeaux de nouvel an pour le maître d'école.

Les passants que nous rencontrions me souriaient avec bienveillance. Les boutiques étaient ouvertes, les rues éclairées. Je faisais de terribles efforts pour retenir mes babouches. De loin, j'aperçus les fenêtres à auvents de notre école.

Je faillis lâcher mon cierge d'enthousiasme. Des grappes de lumière pendaient et transformaient cette façade habituellement triste et poussiéreuse en un décor de féerie. Les lampes à huile, diversement colorées, scintillaient et par leur seule présence créaient un climat raffiné de fête et de joie.

Je hâtais le pas. Les voix des élèves montaient claires dans la fraîcheur du matin. Elles rivalisaient de gaîté avec les dizaines de petites flammes qui dansaient dans leur bain d'huile et d'eau teintée des couleurs de l'arc-en-ciel. Cette impression de fête fabuleuse s'accentua lorsque je poussai la porte du *Msid*. Je n'étais plus le prince unique au gilet de drap amarante. Je devenais un membre d'une congrégation de jeunes seigneurs, tous richement vêtus, chantant sous la direction d'un roi de légende des cantiques d'allégresse et des actions de grâce.

## I. Étude de texte (10 points)

**1.** Contextualiser (2 points) — Remplissez ce tableau en vous référant à l'œuvre dont est extrait ce texte : **(1 pt)**

| Titre de l'œuvre | Date de publication | Auteur | Nationalité |
|---|---|---|---|
| | | | |

**2.** Lesquels des événements suivants précédent le texte ? a- Maâlem Abdeslem a pris Sidi Mohamed chez le coiffeur ; b- Maâlem Abdeslem a emmené le narrateur au bain maure ; c- Maâlem Abdeslem a acheté des jouets à son fils. (Recopiez les deux bonnes réponses) **(1 pt)**

**3a.** Analyser (6 points) — Observez l'énoncé suivant : « Ceux qui resteraient au lit un matin comme celui-ci se sentiraient, durant douze mois, indolents, paresseux ». Selon le narrateur, pourquoi tout le monde devait se réveiller tôt le jour de l'Achoura? **(1 pt)**

**3b.** Est-ce qu'il s'agit d'une réalité ou d'une croyance populaire ?

**4a.** Sidi Mohamed était-il gêné dans ses nouveaux vêtements (oui / non) ? **(1 pt)**

**4b.** Relevez un indice du texte qui le montre.

**5.** En vous référant au texte, répondez par vrai ou faux : **(1 pt)**

| | Vrai | Faux |
|---|---|---|
| Les parents ont acheté à leur enfant des vêtements serrés. | | |
| L'enfant était ravi de porter ces vêtements. | | |

**6.** Observez le passage suivant : « je faillis lâcher ……je poussai la porte du Msid » Sidi Mohamed était excité et pressé de rejoindre ses camarades. Relevez deux indices qui le confirment : **(1 pt)**

**7a.** Relevez dans le texte deux mots appartenant au champ lexical de la "fête" **(1 pt)**

**7b.** Quel trait de caractère du narrateur ce climat de fête met-il en valeur (solitaire ou imaginatif)?

**8.** Complétez le tableau suivant à partir du passage : « je devenais un membre d'une congrégation(…) et des actions de grâce » (comparé « le narrateur et ses camarades » → comparant ? ; comparé ? → comparant « un roi de légende ») **(1 pt)**

| Comparant de « le narrateur et ses camarades » | Comparé de « un roi de légende » |
|---|---|
| | |

**9.** Réagir (2 points) — Les parents du narrateur achètent à leur enfant des vêtements qui ne sont pas à sa taille. D'après vous, doit-on écouter les enfants pour prendre leur avis dans l'achat de leurs vêtements ? Pourquoi ? **(1 pt)**

**10.** Appréciez-vous le climat dans lequel se déroulait Achoura durant l'enfance du narrateur ? Justifiez votre réponse. **(1 pt)**

## II. Production écrite (10 points)

**Sujet :** A l'occasion de l'Achoura, les avis sont partagés concernant quelques pratiques et rituels de certains jeunes qui n'hésitent pas à s'attaquer aux passants pour les asperger d'eau (les mouiller) ou à allumer de grands feux sur les espaces publics.

Que pensez-vous de ces comportements?

Rédigez un texte argumentatif dans lequel vous exprimez votre point de vue justifié à l'aide d'arguments et d'exemples pertinents.

La correction de l'épreuve de production écrite tiendra compte des critères suivants :

- Critères d'évaluation du discours : (Conformité, cohérence, structure) 5 points.
- Critères d'évaluation de la langue :(syntaxe, vocabulaire, orthographe, conjugaison, ponctuation ) 5 points$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponse (à titre indicatif) et barème de notation.*

### I. Étude de texte

**1.** **(1 pt)**

| Titre de l'œuvre | Date de publication | Auteur | Nationalité |
|---|---|---|---|
| La Boîte à Merveilles | 1954 | Ahmed SEFRIOUI | Marocaine. |

**2.** Réponses : a et c (0,5ptx2) **(1 pt)**

**3a.** ..pour ne pas se sentir, durant douze mois, indolents, paresseux. (0,5 pt) **(1 pt)**

**3b.** une croyance populaire (0,5 pt)

**4a.** Oui (0.5 pt) **(1 pt)**

**4b.** « Je perdais mes babouches tous les trois pas. » « ni les vêtements, ni les chaussures n'étaient à ma taille », « Je faisais de terribles efforts pour retenir mes babouches » … (0.5 pt)

**5.** **(1 pt)**

| | |
|---|---|
| Les parents ont acheté à leur enfant des vêtements serrés. | Faux |
| L'enfant était ravi de porter ces vêtements. | Vrai |

**6.** Indice 1 : Je faillis lâcher mon cierge d'enthousiasme. (0.5 pt) Indice 2 : je hâtais le pas. (0.5 pt) **(1 pt)**

**7a.** féerie, chantant... (0,25 ptx2) **(1 pt)**

**7b.** imaginatif (0,5 pt)

**8.** **(1 pt)**

| Comparant de « le narrateur et ses camarades » | Comparé de « un roi de légende » |
|---|---|
| jeunes seigneurs | le fqih |

**9.** Le candidat a exprimé son point de vue (0,5 pt) / Le candidat a justifié son point de vue (0,5 pt) **(1 pt)**

**10.** Le candidat a exprimé son point de vue (0,5 pt) / Le candidat a justifié son point de vue (0,5 pt) **(1 pt)**

### II. Production écrite

La correction de l'épreuve de production écrite tiendra compte des critères suivants :

| Barème de notation | |
|---|---|
| **Critères d'évaluation du discours :** | **…/5 points** |
| - Conformité de la production à la consigne d'écriture. | 3 pts |
| - Cohérence de l'argumentation. | 1 pt |
| - Structure du texte (organisation et progression du texte). | 1 pt |
| **Critères d'évaluation de la langue :** | **…/5 points** |
| - Syntaxe (construction de phrases correctes) | 1 pt |
| - Vocabulaire (usage de termes précis et variés) | 1 pt |
| - Orthographe d'usage et grammaticale (respect des règles) | 1 pt |
| - Conjugaison (emploi des temps) | 1 pt |
| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "La lumière brillait à toutes les fenêtres de la maison. Hommes et femmes commençaient l'année dans l'activité. Ceux qui resteraient au lit un matin comme celui-ci se sentiraient, durant douze mois, indolents, paresseux.\n\nL'appel d'un mendiant nous arrivait de la rue. J'entendais le bruit de sa canne. C'était sûrement un aveugle.\n\nJe perdais mes babouches tous les trois pas. Mes parents voyaient grand. Ni les vêtements, ni les chaussures n'étaient à ma taille. Mais j'étais heureux.\n\nUne fois dans la rue, mon père me glissa dans la main une pièce de cinq francs et me mit entre les bras le cierge dont nous avions fait l'acquisition. C'étaient mes cadeaux de nouvel an pour le maître d'école.\n\nLes passants que nous rencontrions me souriaient avec bienveillance. Les boutiques étaient ouvertes, les rues éclairées. Je faisais de terribles efforts pour retenir mes babouches. De loin, j'aperçus les fenêtres à auvents de notre école.\n\nJe faillis lâcher mon cierge d'enthousiasme. Des grappes de lumière pendaient et transformaient cette façade habituellement triste et poussiéreuse en un décor de féerie. Les lampes à huile, diversement colorées, scintillaient et par leur seule présence créaient un climat raffiné de fête et de joie.\n\nJe hâtais le pas. Les voix des élèves montaient claires dans la fraîcheur du matin. Elles rivalisaient de gaîté avec les dizaines de petites flammes qui dansaient dans leur bain d'huile et d'eau teintée des couleurs de l'arc-en-ciel. Cette impression de fête fabuleuse s'accentua lorsque je poussai la porte du *Msid*. Je n'étais plus le prince unique au gilet de drap amarante. Je devenais un membre d'une congrégation de jeunes seigneurs, tous richement vêtus, chantant sous la direction d'un roi de légende des cantiques d'allégresse et des actions de grâce.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Contextualiser (2 points) — Remplissez ce tableau en vous référant à l'œuvre dont est extrait ce texte :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "La Boîte à Merveilles"}, {"libelle": "Date de publication", "reponse": "1954"}, {"libelle": "Auteur", "reponse": "Ahmed SEFRIOUI"}, {"libelle": "Nationalité", "reponse": "Marocaine."}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Lesquels des événements suivants précédent le texte ? a- Maâlem Abdeslem a pris Sidi Mohamed chez le coiffeur ; b- Maâlem Abdeslem a emmené le narrateur au bain maure ; c- Maâlem Abdeslem a acheté des jouets à son fils. (Recopiez les deux bonnes réponses)", "correction": "Réponses : a et c (0,5ptx2)"}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "Analyser (6 points) — Observez l'énoncé suivant : « Ceux qui resteraient au lit un matin comme celui-ci se sentiraient, durant douze mois, indolents, paresseux ». Selon le narrateur, pourquoi tout le monde devait se réveiller tôt le jour de l'Achoura?", "correction": "..pour ne pas se sentir, durant douze mois, indolents, paresseux. (0,5 pt)"}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Est-ce qu'il s'agit d'une réalité ou d'une croyance populaire ?", "correction": "une croyance populaire (0,5 pt)"}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Sidi Mohamed était-il gêné dans ses nouveaux vêtements (oui / non) ?", "correction": "Oui (0.5 pt)"}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "Relevez un indice du texte qui le montre.", "correction": "« Je perdais mes babouches tous les trois pas. » « ni les vêtements, ni les chaussures n'étaient à ma taille », « Je faisais de terribles efforts pour retenir mes babouches » … (0.5 pt)"}, {"type": "vrai-faux", "numero": "5", "points": 1, "enonce": "En vous référant au texte, répondez par vrai ou faux :", "affirmations": [{"texte": "Les parents ont acheté à leur enfant des vêtements serrés.", "vrai": false}, {"texte": "L'enfant était ravi de porter ces vêtements.", "vrai": true}]}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Observez le passage suivant : « je faillis lâcher ……je poussai la porte du Msid » Sidi Mohamed était excité et pressé de rejoindre ses camarades. Relevez deux indices qui le confirment :", "correction": "Indice 1 : Je faillis lâcher mon cierge d'enthousiasme. (0.5 pt) Indice 2 : je hâtais le pas. (0.5 pt)"}, {"type": "libre", "numero": "7a", "points": 0.5, "enonce": "Relevez dans le texte deux mots appartenant au champ lexical de la \"fête\"", "correction": "féerie, chantant... (0,25 ptx2)"}, {"type": "libre", "numero": "7b", "points": 0.5, "enonce": "Quel trait de caractère du narrateur ce climat de fête met-il en valeur (solitaire ou imaginatif)?", "correction": "imaginatif (0,5 pt)"}, {"type": "tableau", "numero": "8", "points": 1, "enonce": "Complétez le tableau suivant à partir du passage : « je devenais un membre d'une congrégation(…) et des actions de grâce » (comparé « le narrateur et ses camarades » → comparant ? ; comparé ? → comparant « un roi de légende »)", "champs": [{"libelle": "Comparant de « le narrateur et ses camarades »", "reponse": "jeunes seigneurs"}, {"libelle": "Comparé de « un roi de légende »", "reponse": "le fqih"}]}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Réagir (2 points) — Les parents du narrateur achètent à leur enfant des vêtements qui ne sont pas à sa taille. D'après vous, doit-on écouter les enfants pour prendre leur avis dans l'achat de leurs vêtements ? Pourquoi ?", "correction": "Le candidat a exprimé son point de vue (0,5 pt) / Le candidat a justifié son point de vue (0,5 pt)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Appréciez-vous le climat dans lequel se déroulait Achoura durant l'enfance du narrateur ? Justifiez votre réponse.", "correction": "Le candidat a exprimé son point de vue (0,5 pt) / Le candidat a justifié son point de vue (0,5 pt)"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** A l'occasion de l'Achoura, les avis sont partagés concernant quelques pratiques et rituels de certains jeunes qui n'hésitent pas à s'attaquer aux passants pour les asperger d'eau (les mouiller) ou à allumer de grands feux sur les espaces publics.\n\nQue pensez-vous de ces comportements?\n\nRédigez un texte argumentatif dans lequel vous exprimez votre point de vue justifié à l'aide d'arguments et d'exemples pertinents.\n\nLa correction de l'épreuve de production écrite tiendra compte des critères suivants :\n\n- Critères d'évaluation du discours : (Conformité, cohérence, structure) 5 points.\n- Critères d'évaluation de la langue :(syntaxe, vocabulaire, orthographe, conjugaison, ponctuation ) 5 points", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
