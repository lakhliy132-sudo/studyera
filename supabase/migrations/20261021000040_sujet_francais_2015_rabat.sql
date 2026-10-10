-- Sujet de français, examen régional 2015 (session normale), académie
-- Rabat-Salé-Kénitra, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2015 جهة الرباط سلا القنيطرة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Rabat-Salé-Zemmour-Zaër (aujourd'hui Rabat-Salé-Kénitra),
-- session normale (« دورة يونيو 2015 », « المترشحون الرسميون »), durée « ساعتان (2 س) ».
-- Coefficient vide : 4 (ع ق – ع ت) ou 3 selon la série.
-- Le corrigé publié avec ce sujet correspond à une autre version de la même
-- épreuve : question 1, dernière colonne « Date de parution » (1954) au lieu
-- de « Une autre œuvre du même auteur » ; questions 7 et 8 notées 0,5 x 2.
-- Ne sont reportées que les réponses qui s'appliquent à ce sujet : la
-- dernière colonne de la question 1, la ligne « Lala Aïcha » de la question 7
-- et la question 8 (« a/3 - b/1 », où b ne correspond pas à l'énoncé b de ce
-- sujet) restent sans réponse. Les deux dernières pages du PDF (corrigés
-- d'« Il était une fois un vieux couple heureux ») sont ignorées.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2015,
  $sujet$normale$sujet$,
  $sujet$Rabat-Salé-Kénitra$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  120,
  $sujet$## Texte

[…] Ma mère oublia que Rahma n'était qu'une pouilleuse, une mendiante d'entre les mendiantes. Tout émue, elle se précipita au premier étage en criant :

– Ma sœur! Ma pauvre sœur! Que t'est-il arrivé?

– Nous pouvons peut-être te venir-en aide. Cesse de pleurer, tu nous déchires le cœur.

Toutes les femmes entourèrent Rahma la malheureuse. Elle réussit enfin à les renseigner: Zineb avait disparu, perdue dans la foule. En vain, sa mère avait essayé de la retrouver dans les petites rues latérales, Zineb s'était volatilisée, le sol l'avait engloutie et il n'en restait pas la moindre trace.

La nouvelle de cette disparition se propagea instantanément dans le quartier. Des femmes inconnues traversèrent les terrasses pour venir prendre part à la douleur de Rahma et l'exhorter à la patience. Tout le monde se mit à pleurer bruyamment. Chacune des assistantes gémissait, se lamentait, se rappelait les moments particulièrement pénibles de sa vie, s'attendrissait sur son propre sort.

Je m'étais mêlé au groupe des pleureuses et j'éclatai en sanglots. Personne ne s'occupait de moi. Je n'aimais pas Zineb, sa disparition me réjouissait plutôt, je pleurais pour bien d'autres raisons. D'abord, je pleurais pour faire comme tout le monde, il me semblait que la bienséance l'exigeait; je pleurais aussi parce que ma mère pleurait et parce que Rahma, qui m'avait fait cadeau d'un beau cabochon de verre, avait du chagrin ; mais la raison profonde peut-être, c'était celle que je donnai à ma mère lorsqu'elle s'arrêta, épuisée.

Toutes les femmes s'arrêtèrent, s'essuyèrent le visage, qui avec un mouchoir, qui avec le bas de sa chemise.

Je continuais à pousser des cris prolongés. Elles essayèrent de me consoler. Ma mère me dit:

– Arrête! Sidi Mohammed, on retrouvera Zineb, arrête ! Tu vas te faire mal aux yeux avec toutes ces larmes.

Hoquetant, je lui répondis:

– Cela m'est égal qu'on ne retrouve pas Zineb, je pleure parce que j'ai faim!

Ma mère me saisit par le poignet et m'entraîna, courroucée. […]

Mon père arriva, comme de coutume, après la prière de l'Aacha. Le repas se déroula simplement, mais à l'heure du thé, maman parla des évènements de la journée. Elle commença :

– Cette pauvre Rahma a passé une journée dans les affres de l'angoisse. Nous avons toutes été bouleversées.

– Que s'est-il passé ? demanda mon père.

Ma mère reprit:

– Tu connais Allal le fournier qui demeure à Kalklyine ? Si, si, tu dois le connaître. Il est marié à Khadija, la sœur de notre voisine Rahma. Il y a un an, ils sont venus passer une semaine ici chez leurs parents ; ce sont des gens honnêtes, pieux et bien élevés. Mariés depuis trois ans, ils désiraient vivement avoir un enfant. La pauvre Khadija a consulté les guérisseurs, les fqihs, les sorciers et les chouafas sans résultat. Il y a un an, ils sont allés en pèlerinage à Sidi Ali Bou Serghine. Khadija se baigna dans la source, promit au saint de sacrifier un agneau si Dieu exauçait son vœu. Elle a eu son bébé.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant **(1pt)**

| Titre de l'œuvre | Auteur de cette œuvre | Genre littéraire | Une autre œuvre du même auteur |
|---|---|---|---|
| | | | |

**2.** Situez le passage dans l'œuvre dont il est extrait. **(1pt)**

**3.** A quelle occasion, dans l'œuvre, la mère du narrateur s'était-elle disputée avec Rahma et pourquoi change-t-elle d'attitude vis-à-vis d'elle dans ce passage ? **(1pt)**

**4.** Relevez dans le texte quatre mots ou expressions relatifs au champ lexical de la douleur **(1pt)**

**5.** Dans la phrase suivante, de quelle figure de style s'agit-il et quel en est l'effet ? « Cesse de pleurer, tu nous déchires le cœur. » **(1pt)**

**6.** Les femmes pleurent pour deux raisons, lesquelles ? **(1pt)**

**7.** En vous appuyant sur votre connaissance de l'œuvre, recopiez et complétez le tableau suivant (Les personnages / Le malheur ayant frappé chacun d'eux) **(1pt)**

| Maalem Abdeslem | Moulay Larbi | Lala Aïcha | Rahma |
|---|---|---|---|
| | | | |

**8.** Reliez chaque énoncé du texte de la colonne A à la signification qui lui convient dans la colonne B (B. Signification : 1. Le respect des bonnes manières. 2. La peine 3. La disparition 4. La peur de se perdre 5. L'offrande) **(1pt)**

| a. « Zineb s'était volatilisée, le sol l'avait engloutie. » | b. « Khadija promit au saint de sacrifier un agneau. » | c. « les affres de l'angoisse». | d. «il me semblait que la bienséance l'exigeait. » |
|---|---|---|---|
| | | | |

**9.** Toutes les voisines se sont associées à Rahma dans son malheur. Quel sentiment cela suscite-t- il en vous ? Répondez en deux ou trois phrases. **(1pt)**

**10.** Pour avoir un enfant, Khadija a consulté les guérisseurs, les fqihs et les sorciers. Quel jugement portez-vous sur cette pratique ? Justifiez votre réponse en deux ou trois phrases. **(1pt)**

## II. Production écrite (10 points)

**Sujet**

Si Antigone avait obéi aux ordres de Créon, elle n'aurait pas été condamnée à mort.

A votre avis, les jeunes doivent-ils toujours obéir aux adultes ?

En tant que jeune, donnez votre propre point de vue en vous appuyant sur des arguments convaincants et des exemples précis.

**Votre production sera évaluée selon les critères suivants :**

- respect de la consigne
- cohérence de l'argumentation
- correction de la langue
- originalité$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponse et barème de correction (Les réponses non prévues sont laissées à l'appréciation des correcteurs).*

### I. Étude de texte

**1.** **(1pt)**

| Titre de l'œuvre | Auteur de cette œuvre | Genre littéraire | Une autre œuvre du même auteur |
|---|---|---|---|
| La Boîte à Merveilles | Ahmed Sefrioui | Roman autobiographique |  |

**2.** Indications : - Début du chapitre III - Rahma, accompagnée de sa fille Zineb, s'est rendue au quartier Kalklyine pour assister à un baptême. - Elle revient en pleurs sans sa fille Zineb. **(1pt)**

**3.** La dispute entre Rahma et Lalla Zoubida a eu lieu vers la fin du chapitre I parce que Rahma a fait sa lessive un lundi, jour réservé à Lalla Zoubida. La mère du narrateur a changé d'attitude par compassion et solidarité avec Rahma. **(1pt)**

**4.** Ex. se mit à pleurer, gémissait, j'éclatai en sanglots, pleureuses. **(1pt)**

**5.** La figure de style est la métaphore (accepter l'hyperbole). L'effet produit : l'idée de l'intensité, de la compassion, de la douleur ressentie et partagée. (1 pt= 0.5x2) **(1pt)**

**6.** - à cause de la disparition de la fille de Rahma ; - à cause de leurs propres malheurs. (1 pt = 0,5x2) **(1pt)**

**7.** **(1pt)**

| Maalem Abdeslem | Moulay Larbi | Lala Aïcha | Rahma |
|---|---|---|---|
| Il a perdu son capital au souk des haïks. | Abdelkader a refusé de rendre l'argent que Moulay Larbi lui avait prêté. |  | La fille de Rahma s'est égarée. |

**9.** Accepter toute réponse pertinente et correctement formulée. **(1pt)**

**10.** Accepter toute réponse pertinente et correctement formulée. **(1pt)**

### II. Production écrite

Critères d'évaluation : respect de la consigne ; cohérence de l'argumentation ; correction de la langue ; originalité.$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "[…] Ma mère oublia que Rahma n'était qu'une pouilleuse, une mendiante d'entre les mendiantes. Tout émue, elle se précipita au premier étage en criant :\n\n– Ma sœur! Ma pauvre sœur! Que t'est-il arrivé?\n\n– Nous pouvons peut-être te venir-en aide. Cesse de pleurer, tu nous déchires le cœur.\n\nToutes les femmes entourèrent Rahma la malheureuse. Elle réussit enfin à les renseigner: Zineb avait disparu, perdue dans la foule. En vain, sa mère avait essayé de la retrouver dans les petites rues latérales, Zineb s'était volatilisée, le sol l'avait engloutie et il n'en restait pas la moindre trace.\n\nLa nouvelle de cette disparition se propagea instantanément dans le quartier. Des femmes inconnues traversèrent les terrasses pour venir prendre part à la douleur de Rahma et l'exhorter à la patience. Tout le monde se mit à pleurer bruyamment. Chacune des assistantes gémissait, se lamentait, se rappelait les moments particulièrement pénibles de sa vie, s'attendrissait sur son propre sort.\n\nJe m'étais mêlé au groupe des pleureuses et j'éclatai en sanglots. Personne ne s'occupait de moi. Je n'aimais pas Zineb, sa disparition me réjouissait plutôt, je pleurais pour bien d'autres raisons. D'abord, je pleurais pour faire comme tout le monde, il me semblait que la bienséance l'exigeait; je pleurais aussi parce que ma mère pleurait et parce que Rahma, qui m'avait fait cadeau d'un beau cabochon de verre, avait du chagrin ; mais la raison profonde peut-être, c'était celle que je donnai à ma mère lorsqu'elle s'arrêta, épuisée.\n\nToutes les femmes s'arrêtèrent, s'essuyèrent le visage, qui avec un mouchoir, qui avec le bas de sa chemise.\n\nJe continuais à pousser des cris prolongés. Elles essayèrent de me consoler. Ma mère me dit:\n\n– Arrête! Sidi Mohammed, on retrouvera Zineb, arrête ! Tu vas te faire mal aux yeux avec toutes ces larmes.\n\nHoquetant, je lui répondis:\n\n– Cela m'est égal qu'on ne retrouve pas Zineb, je pleure parce que j'ai faim!\n\nMa mère me saisit par le poignet et m'entraîna, courroucée. […]\n\nMon père arriva, comme de coutume, après la prière de l'Aacha. Le repas se déroula simplement, mais à l'heure du thé, maman parla des évènements de la journée. Elle commença :\n\n– Cette pauvre Rahma a passé une journée dans les affres de l'angoisse. Nous avons toutes été bouleversées.\n\n– Que s'est-il passé ? demanda mon père.\n\nMa mère reprit:\n\n– Tu connais Allal le fournier qui demeure à Kalklyine ? Si, si, tu dois le connaître. Il est marié à Khadija, la sœur de notre voisine Rahma. Il y a un an, ils sont venus passer une semaine ici chez leurs parents ; ce sont des gens honnêtes, pieux et bien élevés. Mariés depuis trois ans, ils désiraient vivement avoir un enfant. La pauvre Khadija a consulté les guérisseurs, les fqihs, les sorciers et les chouafas sans résultat. Il y a un an, ils sont allés en pèlerinage à Sidi Ali Bou Serghine. Khadija se baigna dans la source, promit au saint de sacrifier un agneau si Dieu exauçait son vœu. Elle a eu son bébé.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "La Boîte à Merveilles"}, {"libelle": "Auteur de cette œuvre", "reponse": "Ahmed Sefrioui"}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Une autre œuvre du même auteur", "reponse": ""}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Situez le passage dans l'œuvre dont il est extrait.", "correction": "Indications : - Début du chapitre III - Rahma, accompagnée de sa fille Zineb, s'est rendue au quartier Kalklyine pour assister à un baptême. - Elle revient en pleurs sans sa fille Zineb."}, {"type": "libre", "numero": "3", "points": 1, "enonce": "A quelle occasion, dans l'œuvre, la mère du narrateur s'était-elle disputée avec Rahma et pourquoi change-t-elle d'attitude vis-à-vis d'elle dans ce passage ?", "correction": "La dispute entre Rahma et Lalla Zoubida a eu lieu vers la fin du chapitre I parce que Rahma a fait sa lessive un lundi, jour réservé à Lalla Zoubida. La mère du narrateur a changé d'attitude par compassion et solidarité avec Rahma."}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Relevez dans le texte quatre mots ou expressions relatifs au champ lexical de la douleur", "correction": "Ex. se mit à pleurer, gémissait, j'éclatai en sanglots, pleureuses."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Dans la phrase suivante, de quelle figure de style s'agit-il et quel en est l'effet ? « Cesse de pleurer, tu nous déchires le cœur. »", "correction": "La figure de style est la métaphore (accepter l'hyperbole). L'effet produit : l'idée de l'intensité, de la compassion, de la douleur ressentie et partagée. (1 pt= 0.5x2)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Les femmes pleurent pour deux raisons, lesquelles ?", "correction": "- à cause de la disparition de la fille de Rahma ; - à cause de leurs propres malheurs. (1 pt = 0,5x2)"}, {"type": "tableau", "numero": "7", "points": 1, "enonce": "En vous appuyant sur votre connaissance de l'œuvre, recopiez et complétez le tableau suivant (Les personnages / Le malheur ayant frappé chacun d'eux)", "champs": [{"libelle": "Maalem Abdeslem", "reponse": "Il a perdu son capital au souk des haïks."}, {"libelle": "Moulay Larbi", "reponse": "Abdelkader a refusé de rendre l'argent que Moulay Larbi lui avait prêté."}, {"libelle": "Lala Aïcha", "reponse": ""}, {"libelle": "Rahma", "reponse": "La fille de Rahma s'est égarée."}]}, {"type": "tableau", "numero": "8", "points": 1, "enonce": "Reliez chaque énoncé du texte de la colonne A à la signification qui lui convient dans la colonne B (B. Signification : 1. Le respect des bonnes manières. 2. La peine 3. La disparition 4. La peur de se perdre 5. L'offrande)", "champs": [{"libelle": "a. « Zineb s'était volatilisée, le sol l'avait engloutie. »", "reponse": ""}, {"libelle": "b. « Khadija promit au saint de sacrifier un agneau. »", "reponse": ""}, {"libelle": "c. « les affres de l'angoisse».", "reponse": ""}, {"libelle": "d. «il me semblait que la bienséance l'exigeait. »", "reponse": ""}]}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Toutes les voisines se sont associées à Rahma dans son malheur. Quel sentiment cela suscite-t- il en vous ? Répondez en deux ou trois phrases.", "correction": "Accepter toute réponse pertinente et correctement formulée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Pour avoir un enfant, Khadija a consulté les guérisseurs, les fqihs et les sorciers. Quel jugement portez-vous sur cette pratique ? Justifiez votre réponse en deux ou trois phrases.", "correction": "Accepter toute réponse pertinente et correctement formulée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet**\n\nSi Antigone avait obéi aux ordres de Créon, elle n'aurait pas été condamnée à mort.\n\nA votre avis, les jeunes doivent-ils toujours obéir aux adultes ?\n\nEn tant que jeune, donnez votre propre point de vue en vous appuyant sur des arguments convaincants et des exemples précis.\n\n**Votre production sera évaluée selon les critères suivants :**\n\n- respect de la consigne\n- cohérence de l'argumentation\n- correction de la langue\n- originalité", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
