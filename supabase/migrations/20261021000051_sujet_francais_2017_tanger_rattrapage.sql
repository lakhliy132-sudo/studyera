-- Sujet de français, examen régional 2017 (session de rattrapage), académie
-- Tanger-Tétouan-Al Hoceïma, sur Le Dernier Jour d'un condamné.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2017 جهة طنجة تطوان الحسيمة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Tanger-Tétouan-Al Hoceïma (« جهة طنجة تطوان الحسيمة ») ;
-- « الدورة الاستدراكية – يوليوز 2017 », durée « 2 ساعات », filière « جميع الشعب
-- الأدبية و العلمية و التقنية ». Coefficient « 4 / 3 » : selon la série, donc non saisi.
-- Le sujet est imprimé sur une feuille-réponse (pointillés pour répondre) ; la
-- page 5 du PDF n'est que la page lignée de la production écrite.
-- L'étude de texte compte 9 questions (la question 2 vaut 0,5 pt x 4).
-- Les deux pronoms soulignés du texte (« lui », « elle ») sont mis en gras.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2017,
  $sujet$rattrapage$sujet$,
  $sujet$Tanger-Tétouan-Al Hoceïma$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Toutes les filières littéraires, scientifiques et techniques$sujet$,
  120,
  $sujet$## Texte

Une espèce de monsieur, en habit noir, accompagné du directeur de la prison, s'est présenté, et m'a salué profondément. Cet homme avait sur le visage quelque chose de la tristesse officielle des employés des pompes funèbres. Il tenait un rouleau de papier à la main.

– Monsieur, m'a-t-il dit avec un sourire de courtoisie, je suis huissier près de la cour royale de Paris. J'ai l'honneur de vous apporter un message de la part de monsieur le procureur général.

La première secousse était passée. Toute ma présence d'esprit m'était revenue.

– C'est monsieur le procureur général, **lui** ai-je répondu, qui a demandé si instamment ma tête ? Bien de l'honneur pour moi qu'il m'écrive. J'espère que ma mort lui va faire grand plaisir ; car il me serait dur de penser qu'il l'a sollicitée avec tant d'ardeur et qu'**elle** lui était indifférente.

J'ai dit tout cela, et j'ai repris d'une voix ferme :

– Lisez, monsieur !

Il s'est mis à me lire un long texte, en chantant à la fin de chaque ligne et en hésitant au milieu de chaque mot. C'était le rejet de mon pourvoi.

– L'arrêt sera exécuté aujourd'hui en place de Grève, a-t-il ajouté quand il a eu terminé, sans lever les yeux de dessus son papier timbré. Nous partons à sept heures et demie précises pour la Conciergerie. Mon cher monsieur aurez-vous l'extrême bonté de me suivre ?

Depuis quelques instants je ne l'écoutais plus. Le directeur causait avec le prêtre ; lui avait l'œil fixé sur son papier ; je regardais la porte, qui était restée entrouverte…

– Ah ! misérable ! quatre fusiliers dans le corridor !

L'huissier a répété sa question, en me regardant cette fois.

– Quand vous voudrez, lui ai-je répondu. À votre aise !

Il m'a salué en disant :

– J'aurai l'honneur de venir vous chercher dans une demi-heure.

Alors ils m'ont laissé seul.

Un moyen de fuir, mon Dieu ! un moyen quelconque ! Il faut que je m'évade ! il le faut ! sur-le-champ ! par les portes, par les fenêtres, par la charpente du toit ! quand même je devrais laisser de ma chair après les poutres !

Ô rage ! démons ! malédiction ! Il faudrait des mois pour percer ce mur avec de bons outils, et je n'ai ni un clou, ni une heure !

## I. Étude de texte (10 points)

**1.** a) De quelle œuvre le texte est-il extrait ? b) A quel genre littéraire appartient-elle ? c) Qui en est l'auteur ? d) A quel siècle a-t-il vécu ? **(0,25 pt x 4)**

**2.** Pour situer le texte dans l'œuvre, répondez à ces questions : a) Quel est le nom de la prison où se trouve le narrateur ? b) Quel crime a-t-il commis ? c) A quelle heure sera-t-il exécuté ? d) Quel est le nom de la place où il sera exécuté ? **(0,5 pt x 4)**

**3.** Quel est le métier du monsieur qui se présente au narrateur ? **(1 pt)**

**4.** Quelles nouvelles malheureuses (*deux nouvelles*) le monsieur annonce-t-il au narrateur ? **(0,5 pt x 2)**

**5.** A quelle heure le narrateur sera-t-il conduit à la Conciergerie ? **(1 pt)**

**6.** Relevez du texte quatre mots appartenant au champ lexical de « **la justice** ». **(0,25 pt x 4)**

**7.** A quels mots renvoient les deux pronoms soulignés dans le texte ? [soulignés sur la feuille, en gras ici] **(0,5 pt x 2)**

**8.** « ***Un moyen de fuir, mon Dieu ! un moyen quelconque !*** » La figure de style employée dans cet énoncé est : Recopiez la bonne réponse. **(1 pt)**

a- une personnification  
b- une anaphore  
c- une comparaison

**9.** Tout en sachant qu'il lui est impossible de s'évader, le narrateur pense à s'enfuir. Comment trouvez-vous cette attitude ? Justifiez votre réponse (*quatre lignes maximum*). **(1 pt)**

## II. Production écrite (10 points)

**Sujet :**

Certaines personnes ne manifestent aucun intérêt, ni sentiments envers les difficultés et les malheurs des autres. D'autres au contraire se montrent solidaires et bienveillants envers les autres.

Qu'en pensez-vous ?

Développez votre point de vue (*trente lignes maximum*) en vous appuyant sur des arguments et des exemples précis.

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Critères d'évaluation | Barème de notation |
|---|---|
| ***Critères d'évaluation du discours*** – Conformité de la production à la consigne d'écriture – Cohérence de l'argumentation – Structure du texte (organisation et progression du texte) | 5 Points |
| ***Critères d'évaluation de la langue*** – Vocabulaire (usage de termes précis et variés) – Syntaxe (construction de phrases correctes) – Ponctuation (usage d'une ponctuation adéquate) – Orthographe d'usage et grammaticale (respect des règles) – Conjugaison (emploi des temps) | 5 Points |$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponses (à titre indicatif) et barème de notation.*

### I. Étude de texte

**1.** a) *Le Dernier Jour d'un Condamné* ; b) un roman à thèse ; c) Victor Hugo ; d) Le XIX° siècle. **(0,25 pt x 4)**

**2.** a) Bicêtre ; b) un crime de sang ; c) Quatre heures ; d) la place de Grève; **(0,5 pt x 4)**

**3.** Huissier (près de la cour royale de Paris). **(1 pt)**

**4.** Le rejet de son pourvoi ; l'arrêt (la sentence) sera exécuté le jour même. **(0,5 pt x 2)**

**5.** Sept heures et demie (précises). **(1 pt)**

**6.** Le procureur général ; l'huissier ; le pourvoi ; l'arrêt ; la cour. **(0,25 pt x 4)**

**7.** « lui » : L'huissier (le monsieur) ; « elle » : ma mort. **(0,5 pt x 2)**

**8.** Une anaphore. **(1 pt)**

**9.** Accepter toute réaction convenablement justifiée. **(1 pt)**

### II. Production écrite

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Critères d'évaluation | Barème de notation |
|---|---|
| ***Critères d'évaluation du discours*** | **5 Points** |
| – Conformité de la production à la consigne d'écriture | (1 pt) |
| – Cohérence de l'argumentation | (2 pts) |
| – Structure du texte (organisation et progression du texte) | (2 pts) |
| ***Critères d'évaluation de la langue*** – Vocabulaire (usage de termes précis et variés) – Syntaxe (construction de phrases correctes) – Ponctuation (usage d'une ponctuation adéquate) – Orthographe d'usage et grammaticale (respect des règles) – Conjugaison (emploi des temps) | **5 Points** |

**IMPORTANT :**

- *Les correcteurs sont priés de respecter le barème de notation de l'épreuve de production écrite avec la précision et la rigueur requises.*
- *Les correcteurs sont invités à accepter tout plan argumentatif mis en œuvre par le candidat (binaire, dialectique, analytique…)*
- *La note globale de la production devrait correspondre à la somme des notes partielles (les critères).*
- *Il est recommandé d'éviter tout recours injustifié à la mention « hors sujet ».*$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Une espèce de monsieur, en habit noir, accompagné du directeur de la prison, s'est présenté, et m'a salué profondément. Cet homme avait sur le visage quelque chose de la tristesse officielle des employés des pompes funèbres. Il tenait un rouleau de papier à la main.\n\n– Monsieur, m'a-t-il dit avec un sourire de courtoisie, je suis huissier près de la cour royale de Paris. J'ai l'honneur de vous apporter un message de la part de monsieur le procureur général.\n\nLa première secousse était passée. Toute ma présence d'esprit m'était revenue.\n\n– C'est monsieur le procureur général, **lui** ai-je répondu, qui a demandé si instamment ma tête ? Bien de l'honneur pour moi qu'il m'écrive. J'espère que ma mort lui va faire grand plaisir ; car il me serait dur de penser qu'il l'a sollicitée avec tant d'ardeur et qu'**elle** lui était indifférente.\n\nJ'ai dit tout cela, et j'ai repris d'une voix ferme :\n\n– Lisez, monsieur !\n\nIl s'est mis à me lire un long texte, en chantant à la fin de chaque ligne et en hésitant au milieu de chaque mot. C'était le rejet de mon pourvoi.\n\n– L'arrêt sera exécuté aujourd'hui en place de Grève, a-t-il ajouté quand il a eu terminé, sans lever les yeux de dessus son papier timbré. Nous partons à sept heures et demie précises pour la Conciergerie. Mon cher monsieur aurez-vous l'extrême bonté de me suivre ?\n\nDepuis quelques instants je ne l'écoutais plus. Le directeur causait avec le prêtre ; lui avait l'œil fixé sur son papier ; je regardais la porte, qui était restée entrouverte…\n\n– Ah ! misérable ! quatre fusiliers dans le corridor !\n\nL'huissier a répété sa question, en me regardant cette fois.\n\n– Quand vous voudrez, lui ai-je répondu. À votre aise !\n\nIl m'a salué en disant :\n\n– J'aurai l'honneur de venir vous chercher dans une demi-heure.\n\nAlors ils m'ont laissé seul.\n\nUn moyen de fuir, mon Dieu ! un moyen quelconque ! Il faut que je m'évade ! il le faut ! sur-le-champ ! par les portes, par les fenêtres, par la charpente du toit ! quand même je devrais laisser de ma chair après les poutres !\n\nÔ rage ! démons ! malédiction ! Il faudrait des mois pour percer ce mur avec de bons outils, et je n'ai ni un clou, ni une heure !", "questions": [{"type": "libre", "numero": "1", "points": 1, "enonce": "a) De quelle œuvre le texte est-il extrait ? b) A quel genre littéraire appartient-elle ? c) Qui en est l'auteur ? d) A quel siècle a-t-il vécu ?", "correction": "a) *Le Dernier Jour d'un Condamné* ; b) un roman à thèse ; c) Victor Hugo ; d) Le XIX° siècle."}, {"type": "libre", "numero": "2", "points": 2, "enonce": "Pour situer le texte dans l'œuvre, répondez à ces questions : a) Quel est le nom de la prison où se trouve le narrateur ? b) Quel crime a-t-il commis ? c) A quelle heure sera-t-il exécuté ? d) Quel est le nom de la place où il sera exécuté ?", "correction": "a) Bicêtre ; b) un crime de sang ; c) Quatre heures ; d) la place de Grève;"}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Quel est le métier du monsieur qui se présente au narrateur ?", "correction": "Huissier (près de la cour royale de Paris)."}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Quelles nouvelles malheureuses (*deux nouvelles*) le monsieur annonce-t-il au narrateur ?", "correction": "Le rejet de son pourvoi ; l'arrêt (la sentence) sera exécuté le jour même."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "A quelle heure le narrateur sera-t-il conduit à la Conciergerie ?", "correction": "Sept heures et demie (précises)."}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez du texte quatre mots appartenant au champ lexical de « **la justice** ».", "correction": "Le procureur général ; l'huissier ; le pourvoi ; l'arrêt ; la cour."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "A quels mots renvoient les deux pronoms soulignés dans le texte ? [soulignés sur la feuille, en gras ici]", "correction": "« lui » : L'huissier (le monsieur) ; « elle » : ma mort."}, {"type": "choix", "numero": "8", "points": 1, "enonce": "« ***Un moyen de fuir, mon Dieu ! un moyen quelconque !*** » La figure de style employée dans cet énoncé est : Recopiez la bonne réponse.", "options": ["une personnification", "une anaphore", "une comparaison"], "bonne": 1}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Tout en sachant qu'il lui est impossible de s'évader, le narrateur pense à s'enfuir. Comment trouvez-vous cette attitude ? Justifiez votre réponse (*quatre lignes maximum*).", "correction": "Accepter toute réaction convenablement justifiée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nCertaines personnes ne manifestent aucun intérêt, ni sentiments envers les difficultés et les malheurs des autres. D'autres au contraire se montrent solidaires et bienveillants envers les autres.\n\nQu'en pensez-vous ?\n\nDéveloppez votre point de vue (*trente lignes maximum*) en vous appuyant sur des arguments et des exemples précis.\n\n**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**\n\n| Critères d'évaluation | Barème de notation |\n|---|---|\n| ***Critères d'évaluation du discours*** – Conformité de la production à la consigne d'écriture – Cohérence de l'argumentation – Structure du texte (organisation et progression du texte) | 5 Points |\n| ***Critères d'évaluation de la langue*** – Vocabulaire (usage de termes précis et variés) – Syntaxe (construction de phrases correctes) – Ponctuation (usage d'une ponctuation adéquate) – Orthographe d'usage et grammaticale (respect des règles) – Conjugaison (emploi des temps) | 5 Points |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
