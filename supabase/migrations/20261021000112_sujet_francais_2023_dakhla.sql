-- Sujet de français, examen régional 2023 (session normale), académie
-- Dakhla-Oued Ed-Dahab, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2023 جهة الداخلة وادي الذهب »).
-- Le PDF ne contient pas de corrigé : aucune réponse n'est saisie.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين لجهة الداخلة - وادي الذهب »,
-- « الامتحان الجهوي الموحد لنيل شهادة الباكالوريا - المترشحون المتمدرسون »,
-- « الدورة العادية - يونيو 2023 », matière « اللغة الأجنبية الأولى », « القطب
-- العلمي والتقني », « مدة الإنجاز: ساعتان ». Coefficient non saisi : 3 pour
-- « العلوم الاقتصادية والتدبير », 4 pour « باقي الشعب ».
-- Le PDF ne contient pas de corrigé.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, questions)
values (
  $sujet$francais$sujet$,
  2023,
  $sujet$normale$sujet$,
  $sujet$Dakhla-Oued Ed-Dahab$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Pôle scientifique et technique$sujet$,
  120,
  $sujet$## Texte

Dans toute la ville, les femmes essayaient leurs tambourins. Un bourdonnement sourd couvrait l'espace. Je gonflai mes joues et soufflai de toutes mes forces dans ma longue trompette ; le son s'étrangla et j'eus l'impression d'entendre un bébé qui perce ses premières dents. Le chat de Zineb somnolait au soleil. Il fit un saut d'épouvante, faillit perdre l'équilibre, tomber du haut du mur, sa demeure favorite. Il m'abandonna la terrasse et s'engouffra dans une gouttière.

Ma mère me rappelait déjà. Je descendis pour la rejoindre.

« Un de tes camarades, envoyé par le maître d'école t'attend dans le patio, me dit-elle. Prends tes babouches et va le rejoindre ; le fqih a besoin de toi ».

J'abandonnai ma trompette avec regret et dégringolai l'escalier pour retrouver mon condisciple. C'était Hamoussa, pois chiche, l'élève le plus petit de taille de l'école. Il s'appelait de son vrai nom Azzouz Berrada. Il me recommanda de me dépêcher.

L'équipement des lustres pour la nuit de l'Achoura réclamait le concours de toutes les mains.

Il fallait venir travailler comme les autres au lieu de jouer de la trompette. Nous arrivâmes au Msid. J'embrassai la main du Maître et m'installai au milieu d'un groupe chargé de découper des mèches minuscules dans un carré de vieille cotonnade blanche.

Nous travaillâmes activement...Notre tâche fut terminée avant le coucher du soleil.

Avant de quitter l'école, nous chantâmes des cantiques en l'honneur du prophète.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(0.25ptx4)**

| Auteur | Titre de l'œuvre | Genre | Année de publication |
|---|---|---|---|
| | | | |

**2.** Pour situer ce passage dans l'œuvre dont il est extrait, dites quel est l'événement qui se prépare dans toute la ville. **(1 pt)**

**3.** Comment réagit le chat de Zineb au moment où le narrateur joue de la trompette ? **(1 pt)**

**4.** Qui est venu chercher le narrateur dans le texte ? Pourquoi ? **(0,5ptx2)**

**5.** Quelle était la tâche assignée au groupe auquel le narrateur s'est joint ? **(1 pt)**

**6.** Qu'a fait le groupe après avoir terminé sa tâche ? **(1 pt)**

**7.** Relevez dans le premier paragraphe quatre mots appartenant au champ lexical du « son ». **(1 pt)**

**8A.** « **Un bourdonnement sourd** couvrait l'espace » A- Quelle figure de style reconnaissez- vous dans l'énoncé ci-dessus ? **(0.5pt)**

a- La comparaison  
b- La métonymie  
c- L'oxymore.

**8B.** B- Quel en est l'effet recherché ? **(0,5 pt)**

**9.** Sidi Mohamed a abandonné sa trompette pour obéir aux ordres du Fkih. À sa place auriez-vous fait la même chose ? Dites pourquoi **(0.5ptx2)**

**10.** « Il fallait venir travailler comme les autres au lieu de jouer de la trompette. » Pensez-vous, comme exprimé par Sidi Mohammed dans cette phrase, qu'il faut aider les autres pour atteindre des objectifs communs ? Justifiez votre réponse. **(0.5ptx2)**

## II. Production écrite (10 points)

**Sujet :**

**Certains élèves pensent que le travail collectif aide à avancer et à développer leurs connaissances. D'autres, au contraire, voient que ce genre de travail ne permet pas d'exceller dans leurs études et de mettre en valeur leur effort personnel.**

Rédigez un texte argumentatif dans lequel vous défendez votre point de vue , tout en vous basant sur des arguments et des exemples pertinents.

**N.B. : Lors de votre rédaction, vous tenez compte des critères suivants :**

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture. | 5 points | Vocabulaire (usage de termes précis et variés). | 5 points |
| Cohérence de l'argumentation. | | Syntaxe (construction de phrases correctes). | |
| Structure du texte (organisation et progression du texte). | | Conjugaison (emploi des temps). | |
| | | Orthographe d'usage (respect des règles). | |
| | | Ponctuation (usage de ponctuation adéquate). | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Dans toute la ville, les femmes essayaient leurs tambourins. Un bourdonnement sourd couvrait l'espace. Je gonflai mes joues et soufflai de toutes mes forces dans ma longue trompette ; le son s'étrangla et j'eus l'impression d'entendre un bébé qui perce ses premières dents. Le chat de Zineb somnolait au soleil. Il fit un saut d'épouvante, faillit perdre l'équilibre, tomber du haut du mur, sa demeure favorite. Il m'abandonna la terrasse et s'engouffra dans une gouttière.\n\nMa mère me rappelait déjà. Je descendis pour la rejoindre.\n\n« Un de tes camarades, envoyé par le maître d'école t'attend dans le patio, me dit-elle. Prends tes babouches et va le rejoindre ; le fqih a besoin de toi ».\n\nJ'abandonnai ma trompette avec regret et dégringolai l'escalier pour retrouver mon condisciple. C'était Hamoussa, pois chiche, l'élève le plus petit de taille de l'école. Il s'appelait de son vrai nom Azzouz Berrada. Il me recommanda de me dépêcher.\n\nL'équipement des lustres pour la nuit de l'Achoura réclamait le concours de toutes les mains.\n\nIl fallait venir travailler comme les autres au lieu de jouer de la trompette. Nous arrivâmes au Msid. J'embrassai la main du Maître et m'installai au milieu d'un groupe chargé de découper des mèches minuscules dans un carré de vieille cotonnade blanche.\n\nNous travaillâmes activement...Notre tâche fut terminée avant le coucher du soleil.\n\nAvant de quitter l'école, nous chantâmes des cantiques en l'honneur du prophète.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Auteur", "reponse": ""}, {"libelle": "Titre de l'œuvre", "reponse": ""}, {"libelle": "Genre", "reponse": ""}, {"libelle": "Année de publication", "reponse": ""}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Pour situer ce passage dans l'œuvre dont il est extrait, dites quel est l'événement qui se prépare dans toute la ville.", "correction": ""}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Comment réagit le chat de Zineb au moment où le narrateur joue de la trompette ?", "correction": ""}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Qui est venu chercher le narrateur dans le texte ? Pourquoi ?", "correction": ""}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Quelle était la tâche assignée au groupe auquel le narrateur s'est joint ?", "correction": ""}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Qu'a fait le groupe après avoir terminé sa tâche ?", "correction": ""}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez dans le premier paragraphe quatre mots appartenant au champ lexical du « son ».", "correction": ""}, {"type": "choix", "numero": "8A", "points": 0.5, "enonce": "« **Un bourdonnement sourd** couvrait l'espace » A- Quelle figure de style reconnaissez- vous dans l'énoncé ci-dessus ?", "options": ["La comparaison", "La métonymie", "L'oxymore."], "bonne": null}, {"type": "libre", "numero": "8B", "points": 0.5, "enonce": "B- Quel en est l'effet recherché ?", "correction": ""}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Sidi Mohamed a abandonné sa trompette pour obéir aux ordres du Fkih. À sa place auriez-vous fait la même chose ? Dites pourquoi", "correction": ""}, {"type": "libre", "numero": "10", "points": 1, "enonce": "« Il fallait venir travailler comme les autres au lieu de jouer de la trompette. » Pensez-vous, comme exprimé par Sidi Mohammed dans cette phrase, qu'il faut aider les autres pour atteindre des objectifs communs ? Justifiez votre réponse.", "correction": ""}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\n**Certains élèves pensent que le travail collectif aide à avancer et à développer leurs connaissances. D'autres, au contraire, voient que ce genre de travail ne permet pas d'exceller dans leurs études et de mettre en valeur leur effort personnel.**\n\nRédigez un texte argumentatif dans lequel vous défendez votre point de vue , tout en vous basant sur des arguments et des exemples pertinents.\n\n**N.B. : Lors de votre rédaction, vous tenez compte des critères suivants :**\n\n| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |\n|---|---|---|---|\n| Conformité de la production à la consigne d'écriture. | 5 points | Vocabulaire (usage de termes précis et variés). | 5 points |\n| Cohérence de l'argumentation. | | Syntaxe (construction de phrases correctes). | |\n| Structure du texte (organisation et progression du texte). | | Conjugaison (emploi des temps). | |\n| | | Orthographe d'usage (respect des règles). | |\n| | | Ponctuation (usage de ponctuation adéquate). | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  questions = excluded.questions;
