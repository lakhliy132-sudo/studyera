-- Sujet de français, examen régional 2018 (session normale), académie
-- Tanger-Tétouan-Al Hoceïma, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2018 جهة طنجة تطوان الحسيمة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Tanger-Tétouan-Al Hoceïma ; « الدورة العادية - يونيو 2018 »,
-- durée « 2 ساعات » sur le sujet (« ساعتان » sur le corrigé), filière « جميع الشعب
-- الأدبية والعلمية والتقنية ». Coefficient « 4 / 3 » : selon la série, donc non saisi.
-- Le sujet est imprimé sur une feuille-réponse (pointillés pour répondre) ; la
-- page 5 du PDF n'est que la page lignée de la production écrite.
-- Question 7 : la citation porte « chargé de se frotter » alors que le texte
-- dit « chargé de venir se frotter » ; laissé comme sur la feuille.
-- Questions 9 et 10 : la feuille note 0,5 pt pour la réponse et 0,5 pt pour la
-- justification ; le corrigé les note globalement (1 pt).
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2018,
  $sujet$normale$sujet$,
  $sujet$Tanger-Tétouan-Al Hoceïma$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Toutes les filières littéraires, scientifiques et techniques$sujet$,
  120,
  $sujet$## Texte

J'alertai ma mère, demandai secours à Fatma Bziouya, à Rahma et même à mon ennemie Zineb, la propriétaire de ce démon quadrupède. Tout le monde se précipita sur la terrasse mais le chat, ne sachant pas pourquoi on le poursuivait, s'usait les griffes à grimper le long d'un mur d'une hauteur vertigineuse. J'étais furieux contre le chat. Les femmes essayèrent de me consoler.

– Il reviendra ce soir, Zineb te rendra ta chaîne.

Zineb! Zineb! C'était elle qui l'avait chargé de venir se frotter contre moi, abuser de ma gentillesse et me voler mon plus beau bijou. Je suffoquais de colère et d'indignation. Ma rage se déchaîna ; je me précipitai sur Zineb. Je lui enfonçai les ongles dans les joues, lui arrachai les cheveux par touffes, lui envoyai de formidables coups de pieds dans le ventre. Elle se défendit, la brute, avec violence, me tira les oreilles, me renversa par terre, me marcha sur la poitrine. Les femmes criaient, essayaient de nous séparer et recevaient des coups de poing et des coups de tête des deux adversaires.

Enfin, ma mère réussit à me maîtriser. Elle m'amena dans la chambre, me plongea la tête dans un seau d'eau, m'essuya le visage avec un torchon et m'intima l'ordre de me coucher.

La poitrine encore secouée de sanglots, je m'endormis presque immédiatement.

## I. Étude de texte (10 points)

**1.** Complétez le tableau ci-dessous: **(0,25pt ×4)**

| Titre | Auteur | Genre littéraire | Date d'écriture |
|---|---|---|---|
| | | | |

**2a.** Pour situer le texte, répondez à ces deux questions : a) Pourquoi Sidi Mohammed était-il hors de lui (en colère) ? **(0,5pt)**

**2b.** A qui le chat appartient-il? **(0,5pt)**

**3a.** Sidi Mohammed s'est disputé avec Zineb. a) Où cette dispute a-t-elle eu lieu ? **(0,5pt)**

**3b.** Citez deux personnages qui étaient présents lors de la dispute. **(0,5pt)**

**4a.** Est- ce que l'enfant a pu récupérer sa chaîne? **(0,5 pt)**

**4b.** Justifiez votre réponse à partir du texte? **(0,5 pt)**

**5.** Pourquoi Sidi Mohammed a-t-il attaqué violemment Zineb ? **(1 pts)**

**6.** Relevez dans le texte une phrase qui montre la grande colère de l'enfant. **(1pt)**

**7.** « C'était elle qui l'avait chargé de se frotter contre moi, abuser de ma gentillesse et me voler mon plus beau bijou». La figure de style employée dans cet énoncé est : Recopiez la bonne réponse : **(1pt)**

a- Une métaphore.  
b- Une métonymie  
c- Une personnification.

**8.** « C'était elle **qui l'avait chargé de venir se frotter contre moi** » : [souligné sur la feuille, en gras ici] Identifiez le type de la subordonnée soulignée dans cette phrase : **(1pt)**

**9.** Si vous aviez vécu la même situation que Sidi Mohammed, quelle serait votre réaction ? Justifiez votre réponse. **(0,5pt + 0,5 pt)**

**10.** Croyez-vous que la violence soit un moyen efficace pour régler ses problèmes avec les autres ? Justifiez votre réponse. **(0,5 pt + 0,5 pt)**

## II. Production écrite (10 points)

**Sujet :**

Certains parents croient que pour bien éduquer les enfants, il faut tout leur pardonner.

Partagez-vous ce point de vue ?

Rédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Barème de notation | | |
|---|---|---|
| **Critères d'évaluation du discours :** | | **5points** |
| - Conformité de la production à la consigne d'écriture. | 2 pts | |
| - Cohérence de l'argumentation. | 1,5 pts | |
| - Structure du texte (organisation et progression du texte). | 1,5 pts | |
| **Critères d'évaluation de la langue :** | | **5points** |
| - Syntaxe (construction de phrases correctes) | 1 pt | |
| - Vocabulaire (usage de termes précis et variés) | 1 pt | |
| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |
| - Conjugaison (emploi des temps) | 1 pt | |
| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponse (à titre indicatif) et barème de notation.*

### I. Étude de texte

**1.** **(0,25pt ×4)**

| Titre | Auteur | Genre littéraire | Date d'écriture |
|---|---|---|---|
| La Boîte à merveilles. | Ahmed Sefrioui. | Roman autobiographique. | 1952. |

**2a.** Un chat lui a volé sa chaîne. **(0,5pt)**

**2b.** Le chat appartient à Zineb **(0,5pt)**

**3a.** Sur la terrasse. **(0,5pt)**

**3b.** Rahma, Fatma, Lalla Zoubida. **(0,5pt)**

**4a.** Non **(0,5 pt)**

**4b.** Le chat s'est enfui **(0,5 pt)**

**5.** Car il croit que c'était elle qui avait chargé le chat de lui voler la chaîne **(1 pts)**

**6.** « Je lui enfonçai les ongles dans le joues, je lui arrachai les cheveux / Je suffoquais de colère et d'indignation / Ma rage se déchaîne / …. **(1pt)**

**7.** Une personnification **(1pt)**

**8.** Une subordonnée relative **(1pt)**

**9.** Accepter toute réponse convenablement justifiée **(0,5pt + 0,5 pt)**

**10.** Accepter toute réponse convenablement justifiée **(0,5 pt + 0,5 pt)**

### II. Production écrite

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Barème de notation | | |
|---|---|---|
| **Critères d'évaluation du discours :** | | **5points** |
| - Conformité de la production à la consigne d'écriture. | 2 pts | |
| - Cohérence de l'argumentation. | 1,5 pts | |
| - Structure du texte (organisation et progression du texte). | 1,5 pts | |
| **Critères d'évaluation de la langue :** | | **5points** |
| - Syntaxe (construction de phrases correctes) | 1 pt | |
| - Vocabulaire (usage de termes précis et variés) | 1 pt | |
| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |
| - Conjugaison (emploi des temps) | 1 pt | |
| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |

**IMPORTANT :**

- Les correcteurs sont priés de respecter le barème de notation de l'épreuve de production écrite avec la précision et la rigueur requises.
- Les correcteurs sont invités à accepter tout plan argumentatif mis en œuvre par le candidat (binaire, dialectique, analytique, …).
- La note globale de la production écrite devrait correspondre à la somme des notes partielles (les critères).
- Il est recommandé d'éviter tout recours injustifié à la mention « hors sujet ».$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "J'alertai ma mère, demandai secours à Fatma Bziouya, à Rahma et même à mon ennemie Zineb, la propriétaire de ce démon quadrupède. Tout le monde se précipita sur la terrasse mais le chat, ne sachant pas pourquoi on le poursuivait, s'usait les griffes à grimper le long d'un mur d'une hauteur vertigineuse. J'étais furieux contre le chat. Les femmes essayèrent de me consoler.\n\n– Il reviendra ce soir, Zineb te rendra ta chaîne.\n\nZineb! Zineb! C'était elle qui l'avait chargé de venir se frotter contre moi, abuser de ma gentillesse et me voler mon plus beau bijou. Je suffoquais de colère et d'indignation. Ma rage se déchaîna ; je me précipitai sur Zineb. Je lui enfonçai les ongles dans les joues, lui arrachai les cheveux par touffes, lui envoyai de formidables coups de pieds dans le ventre. Elle se défendit, la brute, avec violence, me tira les oreilles, me renversa par terre, me marcha sur la poitrine. Les femmes criaient, essayaient de nous séparer et recevaient des coups de poing et des coups de tête des deux adversaires.\n\nEnfin, ma mère réussit à me maîtriser. Elle m'amena dans la chambre, me plongea la tête dans un seau d'eau, m'essuya le visage avec un torchon et m'intima l'ordre de me coucher.\n\nLa poitrine encore secouée de sanglots, je m'endormis presque immédiatement.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Complétez le tableau ci-dessous:", "champs": [{"libelle": "Titre", "reponse": "La Boîte à merveilles."}, {"libelle": "Auteur", "reponse": "Ahmed Sefrioui."}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique."}, {"libelle": "Date d'écriture", "reponse": "1952."}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Pour situer le texte, répondez à ces deux questions : a) Pourquoi Sidi Mohammed était-il hors de lui (en colère) ?", "correction": "Un chat lui a volé sa chaîne."}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "A qui le chat appartient-il?", "correction": "Le chat appartient à Zineb"}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "Sidi Mohammed s'est disputé avec Zineb. a) Où cette dispute a-t-elle eu lieu ?", "correction": "Sur la terrasse."}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Citez deux personnages qui étaient présents lors de la dispute.", "correction": "Rahma, Fatma, Lalla Zoubida."}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Est- ce que l'enfant a pu récupérer sa chaîne?", "correction": "Non"}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "Justifiez votre réponse à partir du texte?", "correction": "Le chat s'est enfui"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Pourquoi Sidi Mohammed a-t-il attaqué violemment Zineb ?", "correction": "Car il croit que c'était elle qui avait chargé le chat de lui voler la chaîne"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez dans le texte une phrase qui montre la grande colère de l'enfant.", "correction": "« Je lui enfonçai les ongles dans le joues, je lui arrachai les cheveux / Je suffoquais de colère et d'indignation / Ma rage se déchaîne / …."}, {"type": "choix", "numero": "7", "points": 1, "enonce": "« C'était elle qui l'avait chargé de se frotter contre moi, abuser de ma gentillesse et me voler mon plus beau bijou». La figure de style employée dans cet énoncé est : Recopiez la bonne réponse :", "options": ["Une métaphore.", "Une métonymie", "Une personnification."], "bonne": 2}, {"type": "libre", "numero": "8", "points": 1, "enonce": "« C'était elle **qui l'avait chargé de venir se frotter contre moi** » : [souligné sur la feuille, en gras ici] Identifiez le type de la subordonnée soulignée dans cette phrase :", "correction": "Une subordonnée relative"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Si vous aviez vécu la même situation que Sidi Mohammed, quelle serait votre réaction ? Justifiez votre réponse.", "correction": "Accepter toute réponse convenablement justifiée"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Croyez-vous que la violence soit un moyen efficace pour régler ses problèmes avec les autres ? Justifiez votre réponse.", "correction": "Accepter toute réponse convenablement justifiée"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nCertains parents croient que pour bien éduquer les enfants, il faut tout leur pardonner.\n\nPartagez-vous ce point de vue ?\n\nRédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.\n\n**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**\n\n| Barème de notation | | |\n|---|---|---|\n| **Critères d'évaluation du discours :** | | **5points** |\n| - Conformité de la production à la consigne d'écriture. | 2 pts | |\n| - Cohérence de l'argumentation. | 1,5 pts | |\n| - Structure du texte (organisation et progression du texte). | 1,5 pts | |\n| **Critères d'évaluation de la langue :** | | **5points** |\n| - Syntaxe (construction de phrases correctes) | 1 pt | |\n| - Vocabulaire (usage de termes précis et variés) | 1 pt | |\n| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |\n| - Conjugaison (emploi des temps) | 1 pt | |\n| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
