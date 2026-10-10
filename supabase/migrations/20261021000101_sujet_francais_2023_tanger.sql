-- Sujet de français, examen régional 2023 (session normale), académie
-- Tanger-Tétouan-Al Hoceïma, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2023 جهة طنجة تطوان الحسيمة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Tanger-Tétouan-Al Hoceïma ; « الدورة العادية 2023 », durée
-- « ساعتان », filière « جميع مسالك الشعب العلمية والتقنية ». Coefficient « 4 / 3 » :
-- selon la série, donc non saisi.
-- Le sujet est imprimé sur une feuille-réponse (pointillés pour répondre) ; la
-- page 5 du PDF n'est que la suite lignée de la production écrite.
-- Question 3 : « Menace 1 » et « Menace 2 », 0,5 pt chacune (« 0,5pt x 2 » sur le
-- corrigé). Question 7 : la citation porte « Il y'a du pain sur la planche »,
-- le texte « il y a du pain sur la planche » ; laissé comme sur la feuille.
-- Le texte écrit « le coeur », la question 8 « le cœur ».
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2023,
  $sujet$normale$sujet$,
  $sujet$Tanger-Tétouan-Al Hoceïma$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Toutes les filières scientifiques et techniques$sujet$,
  120,
  $sujet$## Texte

**CRÉON**, *lui serre le bras.*

Ecoute-moi bien. J'ai le mauvais rôle, c'est entendu, et tu as le bon. Et tu le sens. Mais n'en profite tout de même pas trop, petite peste... Si j'étais une bonne brute ordinaire de tyran, il y aurait déjà longtemps qu'on t'aurait arraché la langue, tiré les membres aux tenailles, ou jetée dans un trou. Mais tu vois dans mes yeux quelque chose qui hésite, tu vois que je te laisse parler au lieu d'appeler mes soldats ; alors, tu nargues, tu attaques tant que tu peux. Où veux-tu en venir, petite furie ?

**ANTIGONE**

Lâchez-moi. Vous me faites mal au bras avec votre main.

**CRÉON**, *qui serre plus fort.*

Non. Moi, je suis le plus fort comme cela, j'en profite aussi.

**ANTIGONE**, *pousse un petit cri.*

Aïe !

**CRÉON**, *dont les yeux rient.*

C'est peut-être ce que je devrais faire après tout, tout simplement, te tordre le poignet, te tirer les cheveux comme on fait aux filles dans les jeux. *(Il la regarde encore. Il redevient grave. Il lui dit tout près.)* Je suis ton oncle, c'est entendu, mais nous ne sommes pas tendres les uns pour les autres, dans la famille. Cela ne te semble pas drôle, tout de même, ce roi bafoué qui t'écoute, ce vieil homme qui peut tout et qui en a vu tuer d'autres, je t'assure, et d'aussi attendrissants que toi, et qui est là, à se donner toute cette peine pour essayer de t'empêcher de mourir ?

**ANTIGONE**, *après un temps.*

Vous serrez trop, maintenant. Cela ne me fait même plus mal. Je n'ai plus de bras.

**CRÉON**, *la regarde et la lâche avec un petit sourire. Il murmure.*

Dieu sait pourtant si j'ai autre chose à faire aujourd'hui, mais je vais tout de même perdre le temps qu'il faudra et te sauver, petite peste. […] Au lendemain d'une révolution ratée, il y a du pain sur la planche, je te l'assure. Mais les affaires urgentes attendront. Je ne veux pas te laisser mourir dans une histoire de politique. Tu vaux mieux que cela. […] Tu crois que cela ne me dégoûte pas autant que toi, cette viande qui pourrit au soleil ? Le soir, quand le vent vient de la mer, on la sent déjà du palais. Cela me soulève le coeur. Pourtant, je ne vais même pas fermer ma fenêtre. C'est ignoble, et je peux même le dire à toi, c'est bête, monstrueusement bête, mais il faut que tout Thèbes sente cela pendant quelque temps. Tu penses bien que je l'aurais fait enterrer, ton frère, ne fût-ce que pour l'hygiène ! Mais pour que les brutes que je gouverne comprennent, il faut que cela pue le cadavre de Polynice dans toute la ville, pendant un mois.

**ANTIGONE**

Vous êtes odieux !

## I. Étude de texte (10 points)

**1.** Pour identifier l'auteur et son œuvre, complétez le tableau suivant : **(0,25 pt x 4)**

| Auteur | Titre de l'œuvre | Genre littéraire | Date d'écriture |
|---|---|---|---|
| | | | |

**2.** Pour situer le passage dans l'œuvre, répondez par « vrai » ou par « faux ». **(0,5 pt + 0,5 pt)**

| | Vrai | Faux |
|---|---|---|
| a- Antigone a été arrêtée lors de sa première tentative d'enterrement. | | |
| b-Créon veut faire disparaître les gardes pour étouffer l'affaire. | | |

**3.** Dans sa première réplique, de quoi Créon menace-t-il Antigone ? Menace 1 : ………… Menace 2 : ………… **(0,5 pt + 0,5 pt)**

**4.** Que reproche Créon à Antigone ? **(1 pt)**

**5.** Relevez, dans le texte, deux énoncés qui montrent que Créon veut sauver Antigone ? **(0,5 pt x 2)**

**6.** Pour quelle raison, Créon ne voulait-il pas enterrer le cadavre Polynice ? **(1 pt)**

**7.** « Il y'a du pain sur la planche.» Cette phrase signifie : Choisissez la bonne réponse. **(1 pt)**

a- Une tâche complexe et difficile.  
b- Une tâche unique et difficile.  
c- Une tâche ennuyeuse et inutile.

**8.** « Cela me soulève le cœur. » La figure de style employée dans cet énoncé est : Recopiez la bonne réponse. **(1pt)**

a- Une anaphore.  
b- Une antithèse.  
c- Une hyperbole.

**9.** Antigone insulte son oncle en le traitant d'odieux ? Approuvez-vous cet acte ? Justifiez votre réponse. **(1pt)**

**10.** Créon reconnaît que la relation entre les membres de sa famille n'est pas tendre. Trouvez-vous cela normal ? Justifiez votre réponse. **(1pt)**

## II. Production écrite (10 points)

**Sujet**

Obsédées et aveuglées par la richesse, la célébrité et le pouvoir, certaines personnes renoncent facilement aux principes et aux valeurs auxquels ils ont toujours cru.

Qu'en pensez-vous?

Rédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Barème de notation | | |
|---|---|---|
| **Critères d'évaluation du discours :** | | **5 points** |
| - Conformité de la production à la consigne d'écriture | 1pt | |
| - Cohérence de l'argumentation | 2pts | |
| - Structure du texte (organisation et progression du texte) | 2pts | |
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

| Auteur | Titre de l'œuvre | Genre littéraire | Date d'écriture |
|---|---|---|---|
| Jean Anouilh | Antigone | Tragédie moderne | 1942 |

**2.** **(0,5 pt + 0,5 pt)**

| | |
|---|---|
| a- Antigone a été arrêtée lors de sa première tentative d'enterrement. | Faux |
| b-Créon veut faire disparaître les gardes pour étouffer l'affaire. | Vrai |

**3.** « arraché la langue » / « tiré les membres aux tenailles » /« jetée dans un trou » (0,5pt x 2) **(0,5 pt + 0,5 pt)**

**4.** Il lui reproche de profiter de son hésitation/ de l'attaquer / de le narguer... **(1 pt)**

**5.** « se donner toute cette peine pour essayer de t'empêcher de mourir? », « je vais tout de même perdre le temps qu'il faudra et te sauver », «Je ne veux pas te laisser mourir », « Tu vaux mieux que cela » **(0,5 pt x 2)**

**6.** Pour une raison politique / à cause de la politique / pour donner l'exemple / pour que les brutes comprennent / pour servir de leçon... **(1 pt)**

**7.** Une tâche complexe et difficile. **(1 pt)**

**8.** c- Une hyperbole. **(1pt)**

**9.** Accepter toute réponse convenablement justifiée. **(1pt)**

**10.** Accepter toute réponse convenablement justifiée. **(1pt)**

### II. Production écrite

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Barème de notation | | |
|---|---|---|
| **Critères d'évaluation du discours :** | | **5 points** |
| - Conformité de la production à la consigne d'écriture | 1pt | |
| - Cohérence de l'argumentation | 2pts | |
| - Structure du texte (organisation et progression du texte) | 2pts | |
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
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez à ces questions.", "texte": "**CRÉON**, *lui serre le bras.*\n\nEcoute-moi bien. J'ai le mauvais rôle, c'est entendu, et tu as le bon. Et tu le sens. Mais n'en profite tout de même pas trop, petite peste... Si j'étais une bonne brute ordinaire de tyran, il y aurait déjà longtemps qu'on t'aurait arraché la langue, tiré les membres aux tenailles, ou jetée dans un trou. Mais tu vois dans mes yeux quelque chose qui hésite, tu vois que je te laisse parler au lieu d'appeler mes soldats ; alors, tu nargues, tu attaques tant que tu peux. Où veux-tu en venir, petite furie ?\n\n**ANTIGONE**\n\nLâchez-moi. Vous me faites mal au bras avec votre main.\n\n**CRÉON**, *qui serre plus fort.*\n\nNon. Moi, je suis le plus fort comme cela, j'en profite aussi.\n\n**ANTIGONE**, *pousse un petit cri.*\n\nAïe !\n\n**CRÉON**, *dont les yeux rient.*\n\nC'est peut-être ce que je devrais faire après tout, tout simplement, te tordre le poignet, te tirer les cheveux comme on fait aux filles dans les jeux. *(Il la regarde encore. Il redevient grave. Il lui dit tout près.)* Je suis ton oncle, c'est entendu, mais nous ne sommes pas tendres les uns pour les autres, dans la famille. Cela ne te semble pas drôle, tout de même, ce roi bafoué qui t'écoute, ce vieil homme qui peut tout et qui en a vu tuer d'autres, je t'assure, et d'aussi attendrissants que toi, et qui est là, à se donner toute cette peine pour essayer de t'empêcher de mourir ?\n\n**ANTIGONE**, *après un temps.*\n\nVous serrez trop, maintenant. Cela ne me fait même plus mal. Je n'ai plus de bras.\n\n**CRÉON**, *la regarde et la lâche avec un petit sourire. Il murmure.*\n\nDieu sait pourtant si j'ai autre chose à faire aujourd'hui, mais je vais tout de même perdre le temps qu'il faudra et te sauver, petite peste. […] Au lendemain d'une révolution ratée, il y a du pain sur la planche, je te l'assure. Mais les affaires urgentes attendront. Je ne veux pas te laisser mourir dans une histoire de politique. Tu vaux mieux que cela. […] Tu crois que cela ne me dégoûte pas autant que toi, cette viande qui pourrit au soleil ? Le soir, quand le vent vient de la mer, on la sent déjà du palais. Cela me soulève le coeur. Pourtant, je ne vais même pas fermer ma fenêtre. C'est ignoble, et je peux même le dire à toi, c'est bête, monstrueusement bête, mais il faut que tout Thèbes sente cela pendant quelque temps. Tu penses bien que je l'aurais fait enterrer, ton frère, ne fût-ce que pour l'hygiène ! Mais pour que les brutes que je gouverne comprennent, il faut que cela pue le cadavre de Polynice dans toute la ville, pendant un mois.\n\n**ANTIGONE**\n\nVous êtes odieux !", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Pour identifier l'auteur et son œuvre, complétez le tableau suivant :", "champs": [{"libelle": "Auteur", "reponse": "Jean Anouilh"}, {"libelle": "Titre de l'œuvre", "reponse": "Antigone"}, {"libelle": "Genre littéraire", "reponse": "Tragédie moderne"}, {"libelle": "Date d'écriture", "reponse": "1942"}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "Pour situer le passage dans l'œuvre, répondez par « vrai » ou par « faux ».", "affirmations": [{"texte": "a- Antigone a été arrêtée lors de sa première tentative d'enterrement.", "vrai": false}, {"texte": "b-Créon veut faire disparaître les gardes pour étouffer l'affaire.", "vrai": true}]}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Dans sa première réplique, de quoi Créon menace-t-il Antigone ? Menace 1 : ………… Menace 2 : …………", "correction": "« arraché la langue » / « tiré les membres aux tenailles » /« jetée dans un trou » (0,5pt x 2)"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Que reproche Créon à Antigone ?", "correction": "Il lui reproche de profiter de son hésitation/ de l'attaquer / de le narguer..."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Relevez, dans le texte, deux énoncés qui montrent que Créon veut sauver Antigone ?", "correction": "« se donner toute cette peine pour essayer de t'empêcher de mourir? », « je vais tout de même perdre le temps qu'il faudra et te sauver », «Je ne veux pas te laisser mourir », « Tu vaux mieux que cela »"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Pour quelle raison, Créon ne voulait-il pas enterrer le cadavre Polynice ?", "correction": "Pour une raison politique / à cause de la politique / pour donner l'exemple / pour que les brutes comprennent / pour servir de leçon..."}, {"type": "choix", "numero": "7", "points": 1, "enonce": "« Il y'a du pain sur la planche.» Cette phrase signifie : Choisissez la bonne réponse.", "options": ["Une tâche complexe et difficile.", "Une tâche unique et difficile.", "Une tâche ennuyeuse et inutile."], "bonne": 0}, {"type": "choix", "numero": "8", "points": 1, "enonce": "« Cela me soulève le cœur. » La figure de style employée dans cet énoncé est : Recopiez la bonne réponse.", "options": ["Une anaphore.", "Une antithèse.", "Une hyperbole."], "bonne": 2}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Antigone insulte son oncle en le traitant d'odieux ? Approuvez-vous cet acte ? Justifiez votre réponse.", "correction": "Accepter toute réponse convenablement justifiée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Créon reconnaît que la relation entre les membres de sa famille n'est pas tendre. Trouvez-vous cela normal ? Justifiez votre réponse.", "correction": "Accepter toute réponse convenablement justifiée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet**\n\nObsédées et aveuglées par la richesse, la célébrité et le pouvoir, certaines personnes renoncent facilement aux principes et aux valeurs auxquels ils ont toujours cru.\n\nQu'en pensez-vous?\n\nRédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.\n\n**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**\n\n| Barème de notation | | |\n|---|---|---|\n| **Critères d'évaluation du discours :** | | **5 points** |\n| - Conformité de la production à la consigne d'écriture | 1pt | |\n| - Cohérence de l'argumentation | 2pts | |\n| - Structure du texte (organisation et progression du texte) | 2pts | |\n| **Critères d'évaluation de la langue :** | | **5 points** |\n| - Syntaxe (construction de phrases correctes) | 1 pt | |\n| - Vocabulaire (usage de termes précis et variés) | 1 pt | |\n| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |\n| - Conjugaison (emploi des temps) | 1 pt | |\n| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
