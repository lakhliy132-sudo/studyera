-- Sujet de français, examen régional 2022 (session normale), académie
-- Tanger-Tétouan-Al Hoceïma, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2022 جهة طنجة تطوان الحسيمة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Tanger-Tétouan-Al Hoceïma ; « الدورة العادية - يونيو 2022 », durée
-- « ساعتان », filière « جميع مسالك الشعب العلمية و التقنية والمهنية ». Coefficient
-- « 4 / 3 » : selon la série, donc non saisi.
-- Le sujet est imprimé sur une feuille-réponse (pointillés pour répondre) ; la
-- page 5 du PDF n'est que la page lignée de la production écrite.
-- Question 2 : chaque énoncé est noté 0,5 pt sur la feuille (« 0,5pt x2 » sur
-- le corrigé). Question 7 : « 0,25ptx2 » sur chacune des deux lignes de la
-- feuille (« 0,25 ptx4 » sur le corrigé).
-- Le même corrigé figure aussi, par erreur, à la fin du PDF du sujet normal 2022
-- de Rabat-Salé-Kénitra.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2022,
  $sujet$normale$sujet$,
  $sujet$Tanger-Tétouan-Al Hoceïma$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Toutes les filières scientifiques, techniques et professionnelles$sujet$,
  120,
  $sujet$## Texte

Un silence de mort obscurcit la maison. Au deuxième coup, Rahma cria:

– Qui est là ?

Une voix fragile d'enfant miaula une phrase incompréhensible. Le sang déserta mes joues. Je me penchai à la fenêtre. Tante Kanza invita l'enfant à pénétrer dans le patio. Après deux minutes d'attente intolérable, parut la silhouette souffreteuse d'un petit garçon d'une dizaine d'années. Je le reconnus, c'était Allal El Yacoubi, un élève de notre école coranique. Pris de panique, je me précipitai derrière le lit, cherchant une cachette. Mes membres tremblaient, mes dents claquaient dans ma bouche, le froid s'insinuait dans ma poitrine, s'y établissait pour jamais.

Ma mère parlait. Elle disait:

– Il va mieux. Tu remercieras le *fqih* de t'avoir envoyé prendre de ses nouvelles, tu lui diras qu'il n'est pas encore assez bien portant pour retourner au *Msid*. Va, mon fils, qu'Allah t'ouvre les portes de la connaissance.

La maison se replongea dans un silence épais.

Ma mère appela:

– Sidi Mohammed ! Ya, Sidi Mohammed ! Où es-tu?

Je ne répondis pas.

Elle s'énerva.

– Où es-tu, fils de chien ? Ne peux-tu plus répondre?

Incapable d'ouvrir la bouche, j'opposai à ces insultes un mutisme offensant.

Elle se lamenta, prit à témoin de son infortune le ciel, la maison, la noble communauté islamique.

– Malheur ! Malheur ! Etre abandonnée de son mari et vivre avec un fils affublé d'une tête de mule est un si triste sort qu'on n'oserait pas le souhaiter à son ennemi, fût-il un Juif ou un Nazaréen! Dieu! Ecoute mes pleurs! Exauce mes prières.

## I. Étude de texte (10 points)

**1.** Pour identifier l'auteur et son œuvre, complétez le tableau suivant : **(0,25ptx4)**

| Auteur | Titre de l'œuvre | Genre littéraire | Date de publication |
|---|---|---|---|
| | | | |

**2.** Pour situer le passage dans l'œuvre, répondez par « vrai » ou par « faux ». **(0,5 pt + 0,5 pt)**

| | Vrai | Faux |
|---|---|---|
| a- Mâalem Abdeslam est parti travailler aux environs de Fès. | | |
| b- Sidi Mohammed s'est absenté du Msid à cause de la maladie de sa mère. | | |

**3.** Qui Lalla Kanza a-t-elle invité à entrer dans le patio ? **(1pt)**

**4a.** a- Quel sentiment Sidi Mohammed a-t-il éprouvé en reconnaissant le visiteur ? **(0.5pt)**

**4b.** b-Justifiez votre réponse par une phrase du texte. **(0,5pt)**

**5.** D'après la mère, pourquoi Sidi Mohammed devait-il encore s'absenter de l'école ? **(1pt)**

**6.** Quelle a été la réaction de la mère face au silence de son fils ? **(1pt)**

**7.** Relevez, dans le texte, quatre mots ou expressions appartenant au champ lexical des sentiments. **(0,25ptx2 + 0,25ptx2)**

**8.** « Mes membres tremblaient, mes dents claquaient dans ma bouche, le froid s'insinuait dans ma poitrine, s'y établissait pour jamais. » La figure de style employée dans cet énoncé est : Recopiez la bonne réponse. **(1pt)**

a- une antithèse  
b- une anaphore  
c- une gradation.

**9.** Sidi Mohammed refuse de répondre à l'appel de sa mère. Approuvez-vous son comportement ? Justifiez votre réponse. **(1pt)**

**10.** Le fqih envoie un messager prendre des nouvelles de Sidi Mohammed. Comment trouvez-vous cette attitude? Justifiez votre réponse. **(1pt)**

## II. Production écrite (10 points)

**Sujet**

Pour se faire respecter et pour imposer leur autorité à leurs enfants, certains parents recourent à l'insulte et à l'humiliation.

Qu'en pensez-vous ?

Rédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Barème de notation | | |
|---|---|---|
| **Critères d'évaluation du discours :** | | **5 points** |
| - Conformité de la production à la consigne d'écriture | 2 pts | |
| - Cohérence de l'argumentation | 1,5 pts | |
| - Structure du texte (organisation et progression du texte) | 1,5 pts | |
| **Critères d'évaluation de la langue :** | | **5 points** |
| - Syntaxe (construction de phrases correctes) | 1 pt | |
| - Vocabulaire (usage de termes précis et variés) | 1 pt | |
| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |
| - Conjugaison (emploi des temps) | 1 pt | |
| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponse (à titre indicatif) et barème de notation*

### I. Étude de texte

**1.** **(0,25ptx4)**

| Auteur | Titre de l'œuvre | Genre littéraire | Date de publication |
|---|---|---|---|
| Ahmed Sefrioui | La boîte à merveilles | Un roman autobiographique | 1954 |

**2.** **(0,5 pt + 0,5 pt)**

| | |
|---|---|
| a- Mâalem Abdeslam est parti travailler aux environs de Fès. | Vrai |
| b- Sidi Mohammed s'est absenté du Msid à cause de la maladie de sa mère. | Faux |

**3.** Un enfant /Un petit garçon/ Allal El Yacoubi / Un élève de l'école coranique... **(1pt)**

**4a.** La peur/ La panique/ L'angoisse... **(0.5pt)**

**4b.** « Le sang déserta mes joues./ Pris de panique, je me précipitai derrière le lit. / Mes membres tremblaient./ Mes dents claquaient / le froid s'insinuait dans ma poitrine/... » **(0,5pt)**

**5.** parce qu'il n'était pas encore assez bien portant pour retourner au Msid./ Il était encore malade./ Il ne s'était pas encore rétabli... **(1pt)**

**6.** Elle s'est énervée./ Elle l'a insulté./ Elle s'est lamentée … **(1pt)**

**7.** Le sang déserta mes joues/ panique/ tremblaient/ mes dents claquaient/ le froid s'insinuait dans ma poitrine/ s'énerva / offensant / se lamenta / Malheur / triste / souhaiter/ mes pleurs … (0,25 pt x 4) **(0,25ptx2 + 0,25ptx2)**

**8.** c- Une gradation **(1pt)**

**9.** Accepter toute réponse convenablement justifiée. **(1pt)**

**10.** Accepter toute réponse convenablement justifiée. **(1pt)**

### II. Production écrite

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Barème de notation | | |
|---|---|---|
| **Critères d'évaluation du discours :** | | **5 points** |
| - Conformité de la production à la consigne d'écriture | 2 pts | |
| - Cohérence de l'argumentation | 1,5 pts | |
| - Structure du texte (organisation et progression du texte) | 1,5 pts | |
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
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez à ces questions.", "texte": "Un silence de mort obscurcit la maison. Au deuxième coup, Rahma cria:\n\n– Qui est là ?\n\nUne voix fragile d'enfant miaula une phrase incompréhensible. Le sang déserta mes joues. Je me penchai à la fenêtre. Tante Kanza invita l'enfant à pénétrer dans le patio. Après deux minutes d'attente intolérable, parut la silhouette souffreteuse d'un petit garçon d'une dizaine d'années. Je le reconnus, c'était Allal El Yacoubi, un élève de notre école coranique. Pris de panique, je me précipitai derrière le lit, cherchant une cachette. Mes membres tremblaient, mes dents claquaient dans ma bouche, le froid s'insinuait dans ma poitrine, s'y établissait pour jamais.\n\nMa mère parlait. Elle disait:\n\n– Il va mieux. Tu remercieras le *fqih* de t'avoir envoyé prendre de ses nouvelles, tu lui diras qu'il n'est pas encore assez bien portant pour retourner au *Msid*. Va, mon fils, qu'Allah t'ouvre les portes de la connaissance.\n\nLa maison se replongea dans un silence épais.\n\nMa mère appela:\n\n– Sidi Mohammed ! Ya, Sidi Mohammed ! Où es-tu?\n\nJe ne répondis pas.\n\nElle s'énerva.\n\n– Où es-tu, fils de chien ? Ne peux-tu plus répondre?\n\nIncapable d'ouvrir la bouche, j'opposai à ces insultes un mutisme offensant.\n\nElle se lamenta, prit à témoin de son infortune le ciel, la maison, la noble communauté islamique.\n\n– Malheur ! Malheur ! Etre abandonnée de son mari et vivre avec un fils affublé d'une tête de mule est un si triste sort qu'on n'oserait pas le souhaiter à son ennemi, fût-il un Juif ou un Nazaréen! Dieu! Ecoute mes pleurs! Exauce mes prières.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Pour identifier l'auteur et son œuvre, complétez le tableau suivant :", "champs": [{"libelle": "Auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Titre de l'œuvre", "reponse": "La boîte à merveilles"}, {"libelle": "Genre littéraire", "reponse": "Un roman autobiographique"}, {"libelle": "Date de publication", "reponse": "1954"}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "Pour situer le passage dans l'œuvre, répondez par « vrai » ou par « faux ».", "affirmations": [{"texte": "a- Mâalem Abdeslam est parti travailler aux environs de Fès.", "vrai": true}, {"texte": "b- Sidi Mohammed s'est absenté du Msid à cause de la maladie de sa mère.", "vrai": false}]}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Qui Lalla Kanza a-t-elle invité à entrer dans le patio ?", "correction": "Un enfant /Un petit garçon/ Allal El Yacoubi / Un élève de l'école coranique..."}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "a- Quel sentiment Sidi Mohammed a-t-il éprouvé en reconnaissant le visiteur ?", "correction": "La peur/ La panique/ L'angoisse..."}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "b-Justifiez votre réponse par une phrase du texte.", "correction": "« Le sang déserta mes joues./ Pris de panique, je me précipitai derrière le lit. / Mes membres tremblaient./ Mes dents claquaient / le froid s'insinuait dans ma poitrine/... »"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "D'après la mère, pourquoi Sidi Mohammed devait-il encore s'absenter de l'école ?", "correction": "parce qu'il n'était pas encore assez bien portant pour retourner au Msid./ Il était encore malade./ Il ne s'était pas encore rétabli..."}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Quelle a été la réaction de la mère face au silence de son fils ?", "correction": "Elle s'est énervée./ Elle l'a insulté./ Elle s'est lamentée …"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez, dans le texte, quatre mots ou expressions appartenant au champ lexical des sentiments.", "correction": "Le sang déserta mes joues/ panique/ tremblaient/ mes dents claquaient/ le froid s'insinuait dans ma poitrine/ s'énerva / offensant / se lamenta / Malheur / triste / souhaiter/ mes pleurs … (0,25 pt x 4)"}, {"type": "choix", "numero": "8", "points": 1, "enonce": "« Mes membres tremblaient, mes dents claquaient dans ma bouche, le froid s'insinuait dans ma poitrine, s'y établissait pour jamais. » La figure de style employée dans cet énoncé est : Recopiez la bonne réponse.", "options": ["une antithèse", "une anaphore", "une gradation."], "bonne": 2}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Sidi Mohammed refuse de répondre à l'appel de sa mère. Approuvez-vous son comportement ? Justifiez votre réponse.", "correction": "Accepter toute réponse convenablement justifiée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Le fqih envoie un messager prendre des nouvelles de Sidi Mohammed. Comment trouvez-vous cette attitude? Justifiez votre réponse.", "correction": "Accepter toute réponse convenablement justifiée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet**\n\nPour se faire respecter et pour imposer leur autorité à leurs enfants, certains parents recourent à l'insulte et à l'humiliation.\n\nQu'en pensez-vous ?\n\nRédigez un texte argumentatif dans lequel vous développez votre point de vue en l'appuyant par des arguments pertinents et des exemples précis.\n\n**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**\n\n| Barème de notation | | |\n|---|---|---|\n| **Critères d'évaluation du discours :** | | **5 points** |\n| - Conformité de la production à la consigne d'écriture | 2 pts | |\n| - Cohérence de l'argumentation | 1,5 pts | |\n| - Structure du texte (organisation et progression du texte) | 1,5 pts | |\n| **Critères d'évaluation de la langue :** | | **5 points** |\n| - Syntaxe (construction de phrases correctes) | 1 pt | |\n| - Vocabulaire (usage de termes précis et variés) | 1 pt | |\n| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |\n| - Conjugaison (emploi des temps) | 1 pt | |\n| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
