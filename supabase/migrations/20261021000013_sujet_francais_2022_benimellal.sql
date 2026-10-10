-- Sujet de français, examen régional 2022 (session normale), académie
-- Béni Mellal-Khénifra, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2022 جهة بني ملال خنيفرة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Sujet à deux textes : La Boîte à merveilles (texte 1) et Antigone (texte 2) ;
-- l'œuvre retenue pour le filtre est celle du texte 1. Académie de Béni
-- Mellal-Khénifra, session normale 2022, « جميع الشعب العلمية والتقنية »,
-- durée 2 heures, coefficient « 4/3 » (laissé vide). Les mots soulignés
-- sur la feuille (question 4) sont en gras. La grille du corrigé pour la
-- production écrite (« Structure et forme de la lettre ») est recopiée
-- telle quelle, bien que le sujet ne demande pas de lettre.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2022,
  $sujet$normale$sujet$,
  $sujet$Béni Mellal-Khénifra$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Toutes les filières scientifiques et techniques$sujet$,
  120,
  $sujet$## Texte

**Texte 1**

Il ronronna tout contre moi. Je ne le craignais pas. Je décidai de l'associer à ma joie, de lui ouvrir les portes de mon univers. Il s'intéressa gravement à mes discours, allongea la patte pour toucher mon cabochon de verre taillé, regarda avec étonnement ma chaîne d'or, je lui en fis un collier. Il se montra d'abord tout fier. Il essaya ensuite de l'arracher. Elle ne céda pas à ses coups de griffes. Il se mit en colère, s'affola et partit en flèche, la queue hérissée, les yeux dilatés d'inquiétude. Je courus derrière lui pour récupérer mon bien. Le **maudit** chat resta sourd à mes appels. Il ne voulait rien avoir de commun avec moi, il grimpait les marches de l'escalier, cachait des menaces.

J'alertai ma mère, demandai secours a Fatma Bziouya, Rahma et même à mon ennemie Zineb, la propriétaire de ce **démon** quadrupède. Tout le monde se précipitait sur la terrasse mais le chat, ne sachant pas pourquoi on le poursuivait, s'usait les griffes à grimper le long d'un mur d'une hauteur vertigineuse. J'étais furieux contre le chat. Les femmes essayèrent de me consoler.

**Texte 2**

**ANTIGONE** - Promets que tu **ne la gronderas tout de même pas**. Je t'en prie, dis, je t'en prie, nounou…

**LA NOURRICE** - Tu profites de ce que tu câlines… C'est bon. C'est bon. On essuiera sans rien dire. Tu me fais tourner en bourrique.

**ANTIGONE** - Et puis, promets-moi aussi que **tu lui parleras**, que tu lui parleras souvent.

**LA NOURRICE**, *hausse les épaules* - A-t-on vu ça ? Parler aux bêtes !

**ANTIGONE** - Et justement pas comme à une bête. Comme à une vraie personne, comme tu m'entends faire…

**LA NOURRICE** - Ah, ça non ! A mon âge, faire l'idiote ! Mais pourquoi veux-tu que toute la maison lui parle comme toi, à cette bête ?

**ANTIGONE**, *doucement.* - Si moi, pour une raison ou pour une autre, je ne pouvais plus lui parler...

**LA NOURRICE**, *qui ne comprend pas.* - Plus lui parler, plus lui parler ? Pourquoi ?

**ANTIGONE**, *détourne un peu la tête et puis elle ajoute, la voix dure.* - Et puis, si elle était trop triste, si elle avait trop l'air d'attendre tout de même, -le nez sous la porte comme lorsque je suis sortie, -il vaudrait peut-être mieux la faire tuer, nounou, sans qu'elle ait mal.

**LA NOURRICE** - La faire tuer, ma mignonne ? Faire tuer ta chienne ? Mais tu es folle ce matin !

**ANTIGONE** - Non, nounou. (*Hémon paraît*).Voilà Hémon. Laisse-nous, nourrice. Et n'oublie pas ce que tu m'as juré.

## I. Étude de texte (10 points)

**1.** Contextualiser (2 points) — Complétez le tableau suivant : **(1 pt)**

| Texte 1 — Source | Texte 1 — Genre littéraire | Texte 2 — Source | Texte 2 — Genre littéraire |
|---|---|---|---|
| | | | |

**2a.** Pour situer les deux extraits : Texte 1 : Quel triste événement précède ce passage ? **(1pt)**

**2b.** Texte 2 : S'agit-il de la première ou de la deuxième entrevue entre Antigone et sa nourrice ?

**3a.** Analyser (6 points) — Dans le texte 1, à quel objet concret renvoie l'expression en gras dans l'énoncé suivant: « ouvrir les portes de **mon univers** » ? **(1 pt)**

**3b.** Dans le texte 2, à quoi pense Antigone quand elle dit : « - Si moi, pour une raison ou pour une autre, je ne pouvais plus lui parler... » ?

**4.** Observez les mots et /ou expressions soulignés dans les deux textes [soulignés sur la feuille, en gras ici] et dites si l'animal est évoqué « avec amour » ou « avec mépris »: **(1 pt)**

| Texte 1 | Texte 2 |
|---|---|
| | |

**5.** Questions sur le texte 1 : D'après votre compréhension du texte, complétez les énoncés suivants: a- Le chat est en colère parce que… b- Le narrateur est furieux parce que… **(1 pt)**

**6a.** « Il se mit en colère, s'affola et partit en flèche.» Quelle figure de style est contenue dans l'énoncé : (gradation / énumération) ? **(1 pt)**

a- gradation  
b- énumération

**6b.** Quel en est l'effet recherché : mettre en valeur l'intensité /souligner l'opposition ? (choisissez la bonne réponse)

a- mettre en valeur l'intensité  
b- souligner l'opposition

**7.** Questions sur le texte 2 : La Nourrice semble ne pas comprendre ce qui se passe dans la tête d'Antigone : Relevez dans le texte deux indices qui le montrent. **(1 pt)**

**8a.** Cet extrait se situe en: **(1 pt)**

a- début de scène ?  
b- fin de scène ?

**8b.** Quelle didascalie le précise ?

**9.** Réagir (2 points) — Partagez-vous le point de vue selon lequel les animaux seraient mieux traités et respectés dans les pays développés que chez nous ? Exprimez votre point de vue en le justifiant. **(1 pt)**

**10.** Adopteriez-vous (prendriez-vous) un animal domestique ? Pourquoi ? **(1 pt)**

## II. Production écrite (10 points)

**Sujet :** De nos jours, de plus en plus de jeunes adoptent un chien de race. Ce phénomène semble faire des mécontents qui y voient une mode étrangère à notre société et qui ne manque pas d'inconvénients pour les jeunes eux-mêmes, pour la famille et pour la société.

Partagez-vous le point de vue de ces jeunes?

Exprimez votre point de vue dans une réflexion soutenue par des arguments et des exemples pertinents.

La correction de l'épreuve de production écrite tiendra compte des critères suivants :

- Critères d'évaluation du discours : (Conformité, cohérence, structure) 5 points.
- Critères d'évaluation de la langue :(syntaxe, vocabulaire, orthographe, conjugaison, ponctuation ) 5 points$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponse (à titre indicatif) et barème de notation. Toute formulation — ou réponse - non prévue est laissée à l'appréciation du professeur correcteur.*

### I. Étude de texte

**1.** **(1 pt)**

| Texte 1 — Source | Texte 1 — Genre littéraire | Texte 2 — Source | Texte 2 — Genre littéraire |
|---|---|---|---|
| La Boîte à Merveilles | Roman autobiographique | Antigone | Théâtre/Tragédie moderne |

**2a.** La mort de Sidi Mohammed Ben Tahar, le coiffeur (0,5pt) **(1pt)**

**2b.** La deuxième entrevue entre les deux personnages... (0,5pt)

**3a.** à la boîte à merveilles du narrateur. (0.5pt) **(1 pt)**

**3b.** à ce qui lui arriverait après la réalisation de son projet... (0,5pt)

**4.** **(1 pt)**

| Texte 1 | Texte 2 |
|---|---|
| avec mépris. | avec amour. |

**5.** a- parce que la chaîne ne céda pas à ses coups de griffe, lui a collé au cou. (0.5pt) b- parce que le chat est parti avec le (son) collier… (0,5pt) **(1 pt)**

**6a.** une gradation. (0,5pt) **(1 pt)**

**6b.** mettre en valeur l'intensité. (0.5pt)

**7.** tout indice parmi les suivants : Tu me fais tourner en bourrique/Parler aux bêtes ?/A mon âge faire l'idiote ?/ la didascalie : « qui ne comprend pas »/plus lui parler ? Pourquoi ?/Mais tu es folle ce matin ! etc. (0.5 pt x2) **(1 pt)**

**8a.** en fin de scène (0.5pt) **(1 pt)**

**8b.** La didascalie :(Hémon paraît.) (0,5pt)

**9.** L'expression d'une attitude …. (0.5pt) - toute justification convaincante (0,5pt) **(1 pt)**

**10.** L'expression d'une attitude …. (0.5pt) - toute justification convaincante (0,5pt) **(1 pt)**

### II. Production écrite

Tenir impérativement compte des critères spécifiés en accordant la note finale sur la base des notes partielles attribuées et dûment reportées sur la copie du candidat ou de la candidate.

- A- Respect de la consigne (se conformer à ce qui est demandé dans le sujet) : 1pt
- B- Structure et forme de la lettre: 1pt
- C- Pertinence des arguments et emploi des liens logiques : 3pts
- D- Correction de la langue (construction des phrases, orthographe, vocabulaire approprié...) : 4pts
- E- Présentation du texte (alinéas, paragraphes, ponctuation, majuscule.) : 1pt$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement les deux textes et répondez aux questions suivantes.", "texte": "**Texte 1**\n\nIl ronronna tout contre moi. Je ne le craignais pas. Je décidai de l'associer à ma joie, de lui ouvrir les portes de mon univers. Il s'intéressa gravement à mes discours, allongea la patte pour toucher mon cabochon de verre taillé, regarda avec étonnement ma chaîne d'or, je lui en fis un collier. Il se montra d'abord tout fier. Il essaya ensuite de l'arracher. Elle ne céda pas à ses coups de griffes. Il se mit en colère, s'affola et partit en flèche, la queue hérissée, les yeux dilatés d'inquiétude. Je courus derrière lui pour récupérer mon bien. Le **maudit** chat resta sourd à mes appels. Il ne voulait rien avoir de commun avec moi, il grimpait les marches de l'escalier, cachait des menaces.\n\nJ'alertai ma mère, demandai secours a Fatma Bziouya, Rahma et même à mon ennemie Zineb, la propriétaire de ce **démon** quadrupède. Tout le monde se précipitait sur la terrasse mais le chat, ne sachant pas pourquoi on le poursuivait, s'usait les griffes à grimper le long d'un mur d'une hauteur vertigineuse. J'étais furieux contre le chat. Les femmes essayèrent de me consoler.\n\n**Texte 2**\n\n**ANTIGONE** - Promets que tu **ne la gronderas tout de même pas**. Je t'en prie, dis, je t'en prie, nounou…\n\n**LA NOURRICE** - Tu profites de ce que tu câlines… C'est bon. C'est bon. On essuiera sans rien dire. Tu me fais tourner en bourrique.\n\n**ANTIGONE** - Et puis, promets-moi aussi que **tu lui parleras**, que tu lui parleras souvent.\n\n**LA NOURRICE**, *hausse les épaules* - A-t-on vu ça ? Parler aux bêtes !\n\n**ANTIGONE** - Et justement pas comme à une bête. Comme à une vraie personne, comme tu m'entends faire…\n\n**LA NOURRICE** - Ah, ça non ! A mon âge, faire l'idiote ! Mais pourquoi veux-tu que toute la maison lui parle comme toi, à cette bête ?\n\n**ANTIGONE**, *doucement.* - Si moi, pour une raison ou pour une autre, je ne pouvais plus lui parler...\n\n**LA NOURRICE**, *qui ne comprend pas.* - Plus lui parler, plus lui parler ? Pourquoi ?\n\n**ANTIGONE**, *détourne un peu la tête et puis elle ajoute, la voix dure.* - Et puis, si elle était trop triste, si elle avait trop l'air d'attendre tout de même, -le nez sous la porte comme lorsque je suis sortie, -il vaudrait peut-être mieux la faire tuer, nounou, sans qu'elle ait mal.\n\n**LA NOURRICE** - La faire tuer, ma mignonne ? Faire tuer ta chienne ? Mais tu es folle ce matin !\n\n**ANTIGONE** - Non, nounou. (*Hémon paraît*).Voilà Hémon. Laisse-nous, nourrice. Et n'oublie pas ce que tu m'as juré.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Contextualiser (2 points) — Complétez le tableau suivant :", "champs": [{"libelle": "Texte 1 — Source", "reponse": "La Boîte à Merveilles"}, {"libelle": "Texte 1 — Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Texte 2 — Source", "reponse": "Antigone"}, {"libelle": "Texte 2 — Genre littéraire", "reponse": "Théâtre/Tragédie moderne"}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Pour situer les deux extraits : Texte 1 : Quel triste événement précède ce passage ?", "correction": "La mort de Sidi Mohammed Ben Tahar, le coiffeur (0,5pt)"}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "Texte 2 : S'agit-il de la première ou de la deuxième entrevue entre Antigone et sa nourrice ?", "correction": "La deuxième entrevue entre les deux personnages... (0,5pt)"}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "Analyser (6 points) — Dans le texte 1, à quel objet concret renvoie l'expression en gras dans l'énoncé suivant: « ouvrir les portes de **mon univers** » ?", "correction": "à la boîte à merveilles du narrateur. (0.5pt)"}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Dans le texte 2, à quoi pense Antigone quand elle dit : « - Si moi, pour une raison ou pour une autre, je ne pouvais plus lui parler... » ?", "correction": "à ce qui lui arriverait après la réalisation de son projet... (0,5pt)"}, {"type": "tableau", "numero": "4", "points": 1, "enonce": "Observez les mots et /ou expressions soulignés dans les deux textes [soulignés sur la feuille, en gras ici] et dites si l'animal est évoqué « avec amour » ou « avec mépris »:", "champs": [{"libelle": "Texte 1", "reponse": "avec mépris."}, {"libelle": "Texte 2", "reponse": "avec amour."}]}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Questions sur le texte 1 : D'après votre compréhension du texte, complétez les énoncés suivants: a- Le chat est en colère parce que… b- Le narrateur est furieux parce que…", "correction": "a- parce que la chaîne ne céda pas à ses coups de griffe, lui a collé au cou. (0.5pt) b- parce que le chat est parti avec le (son) collier… (0,5pt)"}, {"type": "choix", "numero": "6a", "points": 0.5, "enonce": "« Il se mit en colère, s'affola et partit en flèche.» Quelle figure de style est contenue dans l'énoncé : (gradation / énumération) ?", "options": ["gradation", "énumération"], "bonne": 0}, {"type": "choix", "numero": "6b", "points": 0.5, "enonce": "Quel en est l'effet recherché : mettre en valeur l'intensité /souligner l'opposition ? (choisissez la bonne réponse)", "options": ["mettre en valeur l'intensité", "souligner l'opposition"], "bonne": 0}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Questions sur le texte 2 : La Nourrice semble ne pas comprendre ce qui se passe dans la tête d'Antigone : Relevez dans le texte deux indices qui le montrent.", "correction": "tout indice parmi les suivants : Tu me fais tourner en bourrique/Parler aux bêtes ?/A mon âge faire l'idiote ?/ la didascalie : « qui ne comprend pas »/plus lui parler ? Pourquoi ?/Mais tu es folle ce matin ! etc. (0.5 pt x2)"}, {"type": "choix", "numero": "8a", "points": 0.5, "enonce": "Cet extrait se situe en:", "options": ["début de scène ?", "fin de scène ?"], "bonne": 1}, {"type": "libre", "numero": "8b", "points": 0.5, "enonce": "Quelle didascalie le précise ?", "correction": "La didascalie :(Hémon paraît.) (0,5pt)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Réagir (2 points) — Partagez-vous le point de vue selon lequel les animaux seraient mieux traités et respectés dans les pays développés que chez nous ? Exprimez votre point de vue en le justifiant.", "correction": "L'expression d'une attitude …. (0.5pt) - toute justification convaincante (0,5pt)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Adopteriez-vous (prendriez-vous) un animal domestique ? Pourquoi ?", "correction": "L'expression d'une attitude …. (0.5pt) - toute justification convaincante (0,5pt)"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** De nos jours, de plus en plus de jeunes adoptent un chien de race. Ce phénomène semble faire des mécontents qui y voient une mode étrangère à notre société et qui ne manque pas d'inconvénients pour les jeunes eux-mêmes, pour la famille et pour la société.\n\nPartagez-vous le point de vue de ces jeunes?\n\nExprimez votre point de vue dans une réflexion soutenue par des arguments et des exemples pertinents.\n\nLa correction de l'épreuve de production écrite tiendra compte des critères suivants :\n\n- Critères d'évaluation du discours : (Conformité, cohérence, structure) 5 points.\n- Critères d'évaluation de la langue :(syntaxe, vocabulaire, orthographe, conjugaison, ponctuation ) 5 points", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
