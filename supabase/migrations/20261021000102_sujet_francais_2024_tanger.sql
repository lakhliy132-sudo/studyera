-- Sujet de français, examen régional 2024 (session normale), académie
-- Tanger-Tétouan-Al Hoceïma, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2024 جهة طنجة تطوان الحسيمة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Tanger-Tétouan-Al Hoceïma ; « الدورة العادية 2024 », durée
-- « ساعتان », filière « جميع مسالك الشعبة العلمية والتقنية والادبية ». Coefficient
-- « 4 / 3 » : selon la série, donc non saisi.
-- Le sujet est imprimé sur une feuille-réponse (pointillés pour répondre) ; la
-- page 5 du PDF n'est que la suite lignée de la production écrite.
-- Question 7 : « 0,25 pt x 2 » sur chacune des deux lignes de la feuille
-- (« 0,25 pt x 4 » sur le corrigé). Question 1 : le corrigé donne 1952 comme
-- « date d'écriture ».
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2024,
  $sujet$normale$sujet$,
  $sujet$Tanger-Tétouan-Al Hoceïma$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Toutes les filières scientifiques, techniques et littéraires$sujet$,
  120,
  $sujet$## Texte

Des mains s'agrippèrent à ma balayette. Je résistai de toutes mes forces, mais la lutte s'avérait inégale. Je lâchai le précieux instrument et me trouvai assis dans une flaque d'eau qui me gelait le derrière. Je ne songeai pas à pleurer, je me relevai, décidé à reprendre mon bien. Je me jetai dans la mêlée, mais la voix du maître domina le tumulte. […]

Le maître nous imposa silence, nous releva de nos fonctions et voyant nos mines dépitées, nous conseilla d'attendre qu'il eût besoin de nous. Nous attendîmes dans un coin. Le *fqih* décréta que, seuls, les grands étaient admis à passer les murs au lait de chaux. Nous attendîmes jusqu'au soir que le maître nous chargeât de rendre le moindre service. Il n'en fut rien.

Les murs étaient blanchis. Le lendemain, des équipes furent de nouveau constituées, chaque groupe avait sa spécialité. Je devins un personnage important. Je fus nommé chef des frotteurs. On procéda au lavage du sol. Une vingtaine d'élèves, chargés d'énormes seaux, faisait la corvée d'eau. Ils allaient la chercher à la fontaine d'une zaouïa située à cinquante pas de notre école.

Le sol fut inondé. Je pris très au sérieux mon travail et, pour donner l'exemple, je maniai avec énergie ma balayette. J'en avais mal aux reins. De temps à autre, je me redressais tout rouge. Les muscles des bras me faisaient mal. Au repos, je les sentais trembler. Dans l'eau jusqu'aux chevilles, pieds nus, bousculé par celui-ci, insulté par celui-là, j'étais heureux ! Adieu les leçons, les récitations collectives, les planchettes rigides, rébarbatives, inhumaines ! […]

Le soir, je revins à la maison mort de fatigue, mais très fier de ma journée.

Devant mes parents je me vantai de mes multiples exploits. Je réussis à les convaincre que sans moi aucun résultat sérieux n'aurait été obtenu. Mon père me félicita. Il dit à ma mère que je devenais vraiment un homme. Je me mis au lit.

## I. Étude de texte (10 points)

**1.** Pour identifier l'auteur et son œuvre, complétez le tableau ci-dessous. **(0,25 pt x 4)**

| Auteur | Titre | Genre littéraire | Date d'écriture |
|---|---|---|---|
| | | | |

**2a.** Pour situer le passage dans l'œuvre, répondez aux questions suivantes : a. Quel événement les élèves du Msid se préparaient-ils à célébrer ? **(0,5 pt)**

**2b.** b. Qui a fait don au Msid d'une charge d'âne de chaux? **(0,5 pt)**

**3.** Comment Sidi Mohammed a-t-il réagi quand on lui a pris sa balayette ? **(1pt)**

**4a.** a. Qui a mis fin à la dispute des enfants ? **(0,5 pt)**

**4b.** b. De quoi a-t-il chargé les grands et que devaient faire les petits ? Les grands : ………… Les petits : ………… **(0,25 pt + 0,25 pt)**

**5a.** a. Quelle était la nouvelle fonction de Sidi Mohammed? **(0,5 pt)**

**5b.** b. Ce nouveau travail était dur pour Sidi Mohammed. Citez deux énoncés du texte qui le montrent. Énoncé 1 : ………… Énoncé 2 : ………… **(0,25 pt + 0,25 pt)**

**6.** « Il dit à ma mère que je devenais vraiment un homme.» De type de proposition subordonnée s'agit-il dans cette phrase ? **(1 pt)**

**7.** Relevez, dans le texte, quatre mots ou expressions appartenant au champ lexical "du travail". **(0,25 pt x 2 + 0,25 pt x 2)**

**8.** « Le soir, je revins à la maison mort de fatigue. » Quelle figure de style reconnaissez-vous dans cet énoncé ? **(1pt)**

**9.** Maâlem Abdeslem félicitait et encourageait son fils. Comment trouvez-vous son comportement ? Justifiez votre réponse. **(1pt)**

**10.** Sidi Mohammed accomplissait des tâches dures, et pourtant il était heureux. À sa place auriez-vous eu la même attitude? Justifiez votre réponse. **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

Pour plus de confiance, de productivité et de réussite, certains préfèrent le travail en groupe, tandis que d'autres optent pour le travail individuel.

Et vous, que choisissez-vous ?

Rédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Barème de notation | | |
|---|---|---|
| **Critères d'évaluation du discours :** | | **5 points** |
| - Conformité de la production à la consigne d'écriture. | 1 pt | |
| - Cohérence de l'argumentation. | 2 pts | |
| - Structure du texte (organisation et progression du texte). | 2 pts | |
| **Critères d'évaluation de la langue :** | | **5 points** |
| - Syntaxe (construction de phrases correctes) | 1 pt | |
| - Vocabulaire (usage de termes précis et variés) | 1 pt | |
| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |
| - Conjugaison (emploi des temps) | 1 pt | |
| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponse (à titre indicatif) et barème de notation*

### I. Étude de texte

**1.** **(0,25 pt x 4)**

| Auteur | Titre | Genre littéraire | Date d'écriture |
|---|---|---|---|
| Ahmed Sefrioui | La boîte à merveilles | Roman autobiographique | 1952. |

**2a.** Achoura. **(0,5 pt)**

**2b.** Le père d'un élève. **(0,5 pt)**

**3.** Il a résisté / Il a décidé de reprendre son bien / Il se jeta dans la mêlée / Il a réagi avec acharnement, force et énergie... **(1pt)**

**4a.** Le fqih / le maitre. **(0,5 pt)**

**4b.** Les grands : Ils étaient chargés de blanchir les murs au lait de chaux. (0,25 pt) Les petits : Ils devaient attendre. (0,25 pt) **(0,25 pt + 0,25 pt)**

**5a.** Chef des frotteurs. **(0,5 pt)**

**5b.** J'en avais mal aux reins - Je me redressais tout rouge - Les muscles des bras me faisaient mal - Je les sentais trembler - Mort de fatigue ... (0,25 pt x 2) **(0,25 pt + 0,25 pt)**

**6.** Proposition subordonnée complétive. **(1 pt)**

**7.** ma balayette – instrument - fonctions - chef – lavage- la corvée - spécialité - groupe - service - exploits - chargeât ... (0,25 pt x 4) **(0,25 pt x 2 + 0,25 pt x 2)**

**8.** Une hyperbole. **(1pt)**

**9.** Accepter toute réponse convenablement justifiée. **(1pt)**

**10.** Accepter toute réponse convenablement justifiée. **(1pt)**

### II. Production écrite

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Barème de notation | | |
|---|---|---|
| **Critères d'évaluation du discours :** | | **5 points** |
| - Conformité de la production à la consigne d'écriture | 1 pt | |
| - Cohérence de l'argumentation | 2 pts | |
| - Structure du texte (organisation et progression du texte) | 2 pts | |
| **Critères d'évaluation de la langue :** | | **5 points** |
| - Syntaxe (construction de phrases correctes) | 1 pt | |
| - Vocabulaire (usage de termes précis et variés) | 1 pt | |
| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |
| - Conjugaison (emploi des temps) | 1 pt | |
| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |

**IMPORTANT :**

- Les correcteurs sont priés de respecter le barème de notation de l'épreuve de production écrite avec la précision et la rigueur requises.
- Les correcteurs sont invités à accepter tout plan argumentatif mis en œuvre par le candidat (binaire, dialectique, analytique, …).
- La note globale de la production écrite doit correspondre à la somme des notes partielles (les critères).
- Il est recommandé d'éviter tout recours injustifié à la mention « hors sujet ».$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez à ces questions.", "texte": "Des mains s'agrippèrent à ma balayette. Je résistai de toutes mes forces, mais la lutte s'avérait inégale. Je lâchai le précieux instrument et me trouvai assis dans une flaque d'eau qui me gelait le derrière. Je ne songeai pas à pleurer, je me relevai, décidé à reprendre mon bien. Je me jetai dans la mêlée, mais la voix du maître domina le tumulte. […]\n\nLe maître nous imposa silence, nous releva de nos fonctions et voyant nos mines dépitées, nous conseilla d'attendre qu'il eût besoin de nous. Nous attendîmes dans un coin. Le *fqih* décréta que, seuls, les grands étaient admis à passer les murs au lait de chaux. Nous attendîmes jusqu'au soir que le maître nous chargeât de rendre le moindre service. Il n'en fut rien.\n\nLes murs étaient blanchis. Le lendemain, des équipes furent de nouveau constituées, chaque groupe avait sa spécialité. Je devins un personnage important. Je fus nommé chef des frotteurs. On procéda au lavage du sol. Une vingtaine d'élèves, chargés d'énormes seaux, faisait la corvée d'eau. Ils allaient la chercher à la fontaine d'une zaouïa située à cinquante pas de notre école.\n\nLe sol fut inondé. Je pris très au sérieux mon travail et, pour donner l'exemple, je maniai avec énergie ma balayette. J'en avais mal aux reins. De temps à autre, je me redressais tout rouge. Les muscles des bras me faisaient mal. Au repos, je les sentais trembler. Dans l'eau jusqu'aux chevilles, pieds nus, bousculé par celui-ci, insulté par celui-là, j'étais heureux ! Adieu les leçons, les récitations collectives, les planchettes rigides, rébarbatives, inhumaines ! […]\n\nLe soir, je revins à la maison mort de fatigue, mais très fier de ma journée.\n\nDevant mes parents je me vantai de mes multiples exploits. Je réussis à les convaincre que sans moi aucun résultat sérieux n'aurait été obtenu. Mon père me félicita. Il dit à ma mère que je devenais vraiment un homme. Je me mis au lit.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Pour identifier l'auteur et son œuvre, complétez le tableau ci-dessous.", "champs": [{"libelle": "Auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Titre", "reponse": "La boîte à merveilles"}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Date d'écriture", "reponse": "1952."}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Pour situer le passage dans l'œuvre, répondez aux questions suivantes : a. Quel événement les élèves du Msid se préparaient-ils à célébrer ?", "correction": "Achoura."}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "b. Qui a fait don au Msid d'une charge d'âne de chaux?", "correction": "Le père d'un élève."}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Comment Sidi Mohammed a-t-il réagi quand on lui a pris sa balayette ?", "correction": "Il a résisté / Il a décidé de reprendre son bien / Il se jeta dans la mêlée / Il a réagi avec acharnement, force et énergie..."}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "a. Qui a mis fin à la dispute des enfants ?", "correction": "Le fqih / le maitre."}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "b. De quoi a-t-il chargé les grands et que devaient faire les petits ? Les grands : ………… Les petits : …………", "correction": "Les grands : Ils étaient chargés de blanchir les murs au lait de chaux. (0,25 pt) Les petits : Ils devaient attendre. (0,25 pt)"}, {"type": "libre", "numero": "5a", "points": 0.5, "enonce": "a. Quelle était la nouvelle fonction de Sidi Mohammed?", "correction": "Chef des frotteurs."}, {"type": "libre", "numero": "5b", "points": 0.5, "enonce": "b. Ce nouveau travail était dur pour Sidi Mohammed. Citez deux énoncés du texte qui le montrent. Énoncé 1 : ………… Énoncé 2 : …………", "correction": "J'en avais mal aux reins - Je me redressais tout rouge - Les muscles des bras me faisaient mal - Je les sentais trembler - Mort de fatigue ... (0,25 pt x 2)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "« Il dit à ma mère que je devenais vraiment un homme.» De type de proposition subordonnée s'agit-il dans cette phrase ?", "correction": "Proposition subordonnée complétive."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez, dans le texte, quatre mots ou expressions appartenant au champ lexical \"du travail\".", "correction": "ma balayette – instrument - fonctions - chef – lavage- la corvée - spécialité - groupe - service - exploits - chargeât ... (0,25 pt x 4)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "« Le soir, je revins à la maison mort de fatigue. » Quelle figure de style reconnaissez-vous dans cet énoncé ?", "correction": "Une hyperbole."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Maâlem Abdeslem félicitait et encourageait son fils. Comment trouvez-vous son comportement ? Justifiez votre réponse.", "correction": "Accepter toute réponse convenablement justifiée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Sidi Mohammed accomplissait des tâches dures, et pourtant il était heureux. À sa place auriez-vous eu la même attitude? Justifiez votre réponse.", "correction": "Accepter toute réponse convenablement justifiée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nPour plus de confiance, de productivité et de réussite, certains préfèrent le travail en groupe, tandis que d'autres optent pour le travail individuel.\n\nEt vous, que choisissez-vous ?\n\nRédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.\n\n**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**\n\n| Barème de notation | | |\n|---|---|---|\n| **Critères d'évaluation du discours :** | | **5 points** |\n| - Conformité de la production à la consigne d'écriture. | 1 pt | |\n| - Cohérence de l'argumentation. | 2 pts | |\n| - Structure du texte (organisation et progression du texte). | 2 pts | |\n| **Critères d'évaluation de la langue :** | | **5 points** |\n| - Syntaxe (construction de phrases correctes) | 1 pt | |\n| - Vocabulaire (usage de termes précis et variés) | 1 pt | |\n| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |\n| - Conjugaison (emploi des temps) | 1 pt | |\n| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
