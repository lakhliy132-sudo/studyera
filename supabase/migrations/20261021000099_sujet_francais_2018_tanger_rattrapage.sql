-- Sujet de français, examen régional 2018 (session de rattrapage), académie
-- Tanger-Tétouan-Al Hoceïma, sur Le Dernier Jour d'un condamné.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2018 جهة طنجة تطوان الحسيمة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Tanger-Tétouan-Al Hoceïma (nom en partie illisible sur le logo,
-- mise en page identique au sujet normal 2018 de cette académie) ;
-- « الدورة الاستدراكية - يوليوز 2018 », durée « 2 ساعات » sur le sujet (« ساعتان » sur
-- le corrigé), filière « جميع الشعب الأدبية والعلمية والتقنية ». Coefficient « 4 / 3 » :
-- selon la série, donc non saisi.
-- Le sujet est imprimé sur une feuille-réponse (pointillés pour répondre) ; la
-- dernière page du PDF n'est que la suite lignée de la production écrite.
-- Question 6 : la citation porte « Les bourreaux » alors que le texte dit « Ces
-- bourreaux » ; laissé comme sur la feuille.
-- Question 7 : la feuille note 0,5 pt x2 (deux mots), le corrigé 0,25 pt x4.
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
  $sujet$rattrapage$sujet$,
  $sujet$Tanger-Tétouan-Al Hoceïma$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Toutes les filières littéraires, scientifiques et techniques$sujet$,
  120,
  $sujet$## Texte

C'était le bourreau, le valet de la guillotine. Les deux autres étaient ses valets, à lui.

À peine assis, les deux autres se sont approchés de moi, par derrière, comme des chats ; puis tout à coup j'ai senti un froid d'acier dans mes cheveux, et les ciseaux ont grincé à mes oreilles.

Mes cheveux, coupés au hasard, tombaient par mèches sur mes épaules, et l'homme au chapeau à trois cornes les époussetait doucement avec sa grosse main.

Autour, on parlait à voix basse.

Il y avait un grand bruit au dehors, comme un frémissement qui ondulait dans l'air. J'ai cru d'abord que c'était la rivière ; mais, à des rires qui éclataient, j'ai reconnu que c'était la foule.

Un jeune homme, près de la fenêtre, qui écrivait, avec un crayon, sur un portefeuille, a demandé à un des guichetiers comment s'appelait ce qu'on faisait là.

– La toilette du condamné, a répondu l'autre.

J'ai compris que cela serait demain dans le journal.

Tout à coup l'un des valets m'a enlevé ma veste, et l'autre a pris mes deux mains qui pendaient, les a ramenées derrière mon dos, et j'ai senti les nœuds d'une corde se rouler lentement autour de mes poignets rapprochés. En même temps, l'autre détachait ma cravate. Ma chemise de batiste, seul lambeau qui me restât du moi d'autrefois, l'a fait en quelque sorte hésiter un moment ; puis il s'est mis à en couper le col.

À cette précaution horrible, au saisissement de l'acier qui touchait mon cou, mes coudes ont tressailli, et j'ai laissé échapper un rugissement étouffé. La main de l'exécuteur a tremblé.

– Monsieur, m'a-t-il dit, pardon ! Est-ce que je vous ai fait mal ?

Ces bourreaux sont des hommes très doux.

## I. Étude de texte (10 points)

**1.** Complétez le tableau ci-dessous : **(0,25 pt ×4)**

| Titre | Auteur | Genre littéraire | Siècle |
|---|---|---|---|
| | | | |

**2a.** Pour situer ce texte, répondez à ces questions : a) Où se trouve le condamné ? **(0,5 pt)**

**2b.** b) Combien de temps lui reste-t-il à vivre ? Recopiez la bonne réponse. **(0,5 pt)**

a- Moins d'une heure.  
b- Un jour.  
c- Une semaine.

**3.** Citez deux personnages présents dans ce texte **(0,5pt x2)**

**4.** Comment appelle-t-on, d'après le texte, la procédure qu'on fait subir au condamné avant son exécution ? **(1pt)**

**5.** Relevez dans le texte un indice qui montre l'importance de l'évènement de l'exécution. **(1pt)**

**6a.** « Les bourreaux sont des hommes très doux » a) La figure de style utilisée dans cet énoncé est : Recopiez la bonne réponse. **(0,5pt)**

a- Une antiphrase.  
b- Une comparaison.  
c- Une personnification.

**6b.** b) L'effet recherché par cette figure est de : Recopiez la bonne réponse **(0,5pt)**

a- Susciter la pitié.  
b- Distraire.  
c- Ironiser/ Se moquer.

**7.** Relevez dans le texte deux mots appartenant au champ lexical de l'exécution: **(0,5pt x2)**

**8.** « J'ai compris **que cela serait demain dans le journal** » [souligné sur la feuille, en gras ici] Identifiez le type de la subordonnée soulignée dans cette phrase. **(1pt)**

**9.** Exécuter un condamné en public, est-il vraiment un spectacle ? Justifiez votre réponse. **(0,5 pt + 0,5 pt)**

**10.** Si vous étiez journaliste, aimeriez-vous couvrir (rapporter) un évènement d'exécution ? Justifiez votre réponse. **(0,5 pt + 0,5 pt)**

## II. Production écrite (10 points)

**Sujet :**

« Ouvrir une école, c'est fermer une prison ».

Partagez-vous cette réflexion ?

Rédigez un texte argumentatif dans lequel vous développez votre opinion en l'illustrant par des arguments pertinents et des exemples précis.

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

**1.** **(0,25 pt ×4)**

| Titre | Auteur | Genre littéraire | Siècle |
|---|---|---|---|
| Le Dernier jour d'un condamné | Victor Hugo | Un roman à thèse | 19ème |

**2a.** L'hôtel de ville (une chambre) **(0,5 pt)**

**2b.** moins d'une heure **(0,5 pt)**

**3.** Le bourreau / ses deux valets / des guichetiers / un journaliste (1pt) **(0,5pt x2)**

**4.** La toilette du condamné **(1pt)**

**5.** Présence de la foule / Présence d'un journaliste / **(1pt)**

**6a.** Une antiphrase **(0,5pt)**

**6b.** Ironiser/se moquer **(0,5pt)**

**7.** Guillotine/ bourreau/ condamné/ toilette du condamné / … (0,25pt×4) **(0,5pt x2)**

**8.** Une subordonnée complétive. (Conjonctive) **(1pt)**

**9.** Accepter toute réponse convenablement justifiée (1pt) **(0,5 pt + 0,5 pt)**

**10.** Accepter toute réponse convenablement justifiée (1pt) **(0,5 pt + 0,5 pt)**

### II. Production écrite

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Barème de notation | | |
|---|---|---|
| **Critères d'évaluation du discours :** | | **5 points** |
| - Conformité de la production à la consigne d'écriture. | 2 pts | |
| - Cohérence de l'argumentation. | 1,5 pts | |
| - Structure du texte (organisation et progression du texte). | 1,5 pts | |
| **Critères d'évaluation de la langue :** | | **5 points** |
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
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions suivantes:", "texte": "C'était le bourreau, le valet de la guillotine. Les deux autres étaient ses valets, à lui.\n\nÀ peine assis, les deux autres se sont approchés de moi, par derrière, comme des chats ; puis tout à coup j'ai senti un froid d'acier dans mes cheveux, et les ciseaux ont grincé à mes oreilles.\n\nMes cheveux, coupés au hasard, tombaient par mèches sur mes épaules, et l'homme au chapeau à trois cornes les époussetait doucement avec sa grosse main.\n\nAutour, on parlait à voix basse.\n\nIl y avait un grand bruit au dehors, comme un frémissement qui ondulait dans l'air. J'ai cru d'abord que c'était la rivière ; mais, à des rires qui éclataient, j'ai reconnu que c'était la foule.\n\nUn jeune homme, près de la fenêtre, qui écrivait, avec un crayon, sur un portefeuille, a demandé à un des guichetiers comment s'appelait ce qu'on faisait là.\n\n– La toilette du condamné, a répondu l'autre.\n\nJ'ai compris que cela serait demain dans le journal.\n\nTout à coup l'un des valets m'a enlevé ma veste, et l'autre a pris mes deux mains qui pendaient, les a ramenées derrière mon dos, et j'ai senti les nœuds d'une corde se rouler lentement autour de mes poignets rapprochés. En même temps, l'autre détachait ma cravate. Ma chemise de batiste, seul lambeau qui me restât du moi d'autrefois, l'a fait en quelque sorte hésiter un moment ; puis il s'est mis à en couper le col.\n\nÀ cette précaution horrible, au saisissement de l'acier qui touchait mon cou, mes coudes ont tressailli, et j'ai laissé échapper un rugissement étouffé. La main de l'exécuteur a tremblé.\n\n– Monsieur, m'a-t-il dit, pardon ! Est-ce que je vous ai fait mal ?\n\nCes bourreaux sont des hommes très doux.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Complétez le tableau ci-dessous :", "champs": [{"libelle": "Titre", "reponse": "Le Dernier jour d'un condamné"}, {"libelle": "Auteur", "reponse": "Victor Hugo"}, {"libelle": "Genre littéraire", "reponse": "Un roman à thèse"}, {"libelle": "Siècle", "reponse": "19ème"}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Pour situer ce texte, répondez à ces questions : a) Où se trouve le condamné ?", "correction": "L'hôtel de ville (une chambre)"}, {"type": "choix", "numero": "2b", "points": 0.5, "enonce": "b) Combien de temps lui reste-t-il à vivre ? Recopiez la bonne réponse.", "options": ["Moins d'une heure.", "Un jour.", "Une semaine."], "bonne": 0}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Citez deux personnages présents dans ce texte", "correction": "Le bourreau / ses deux valets / des guichetiers / un journaliste (1pt)"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Comment appelle-t-on, d'après le texte, la procédure qu'on fait subir au condamné avant son exécution ?", "correction": "La toilette du condamné"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Relevez dans le texte un indice qui montre l'importance de l'évènement de l'exécution.", "correction": "Présence de la foule / Présence d'un journaliste /"}, {"type": "choix", "numero": "6a", "points": 0.5, "enonce": "« Les bourreaux sont des hommes très doux » a) La figure de style utilisée dans cet énoncé est : Recopiez la bonne réponse.", "options": ["Une antiphrase.", "Une comparaison.", "Une personnification."], "bonne": 0}, {"type": "choix", "numero": "6b", "points": 0.5, "enonce": "b) L'effet recherché par cette figure est de : Recopiez la bonne réponse", "options": ["Susciter la pitié.", "Distraire.", "Ironiser/ Se moquer."], "bonne": 2}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez dans le texte deux mots appartenant au champ lexical de l'exécution:", "correction": "Guillotine/ bourreau/ condamné/ toilette du condamné / … (0,25pt×4)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "« J'ai compris **que cela serait demain dans le journal** » [souligné sur la feuille, en gras ici] Identifiez le type de la subordonnée soulignée dans cette phrase.", "correction": "Une subordonnée complétive. (Conjonctive)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Exécuter un condamné en public, est-il vraiment un spectacle ? Justifiez votre réponse.", "correction": "Accepter toute réponse convenablement justifiée (1pt)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Si vous étiez journaliste, aimeriez-vous couvrir (rapporter) un évènement d'exécution ? Justifiez votre réponse.", "correction": "Accepter toute réponse convenablement justifiée (1pt)"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\n« Ouvrir une école, c'est fermer une prison ».\n\nPartagez-vous cette réflexion ?\n\nRédigez un texte argumentatif dans lequel vous développez votre opinion en l'illustrant par des arguments pertinents et des exemples précis.\n\n**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**\n\n| Barème de notation | | |\n|---|---|---|\n| **Critères d'évaluation du discours :** | | **5points** |\n| - Conformité de la production à la consigne d'écriture. | 2 pts | |\n| - Cohérence de l'argumentation. | 1,5 pts | |\n| - Structure du texte (organisation et progression du texte). | 1,5 pts | |\n| **Critères d'évaluation de la langue :** | | **5points** |\n| - Syntaxe (construction de phrases correctes) | 1 pt | |\n| - Vocabulaire (usage de termes précis et variés) | 1 pt | |\n| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |\n| - Conjugaison (emploi des temps) | 1 pt | |\n| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
