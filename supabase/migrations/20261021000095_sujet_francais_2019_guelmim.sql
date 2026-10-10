-- Sujet de français, examen régional 2019 (session normale), académie
-- Guelmim-Oued Noun, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2019 جهة كلميم واد نون »).
-- Corrigé et barème officiels recopiés question par question.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين جهة كلميم واد نون »,
-- « الامتحان الجهوي الموحد لنيل شهادة البكالوريا », « الأولى بكالوريا »,
-- « الدورة : العادية / يونيو 2019 », durée « 2 ساعات ». Coefficient « 3 أو 4 » :
-- 4 pour lettres et sciences humaines, sciences expérimentales, sciences
-- mathématiques, sciences et technologies, arts appliqués ; 3 pour sciences
-- économiques et gestion : laissé vide.
-- Barème : la feuille ne donne que « 10 points (1pt. X 10) » pour l'étude de
-- texte, sans barème par question ; le détail vient du corrigé.
-- Question 2 : le corrigé note « 1pt. (¼ x4) » sans répartir entre A et B,
-- d'où une seule question à 1 point.
-- Question 4 b : « las Haïks » (pour « les ») sur la feuille, recopié tel quel.
-- Question 7 : tableau de deux lignes ; ligne 1, la phrase est à trouver
-- (expression de « L'opposition ») ; ligne 2, la phrase est donnée et
-- l'expression est à trouver. Le corrigé souligne « mais » dans la réponse
-- de la ligne 1 (en gras ici).
-- Question 8 : la parenthèse « (¼) pour la ponctuation) » est déséquilibrée
-- sur le corrigé ; recopiée telle quelle.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2019,
  $sujet$normale$sujet$,
  $sujet$Guelmim-Oued Noun$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies, arts appliqués ; sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

Nous étions un lundi, lorsque mon père, renonçant à ses habitudes, vint déjeuner à la maison. Il nous expliqua que les *djellabas* de laine se vendaient moins bien qu'en hiver et qu'il avait l'intention de se lancer dans la fabrication des *haïks* de coton.

Ces étoffes jouissent toujours du même succès. Été comme hiver, les femmes de Fès ne peuvent sortir qu'enveloppées dans ces pièces blanches.

– Aujourd'hui, ajouta-t-il, j'ai l'intention de vous emmener tous les deux au souk des bijoux.

Et s'adressant à ma mère, il continua :

– Il y a longtemps que tu me demandes ces bracelets *soleil et lune* (or et argent). Il est temps que je te les offre. D'autre part, mon ouvrier a perdu sa mère qui habitait la campagne. Il est parti pour l'enterrement ; demain il sera de retour et nous reprendrons le travail.

Ma mère interrogea :

– Est-elle morte d'une maladie ?

– Je crois, dit mon père, qu'elle est morte surtout de vieillesse, mais peu importe, que Dieu la reçoive dans sa miséricorde !

– Mais, objectai-je, je ne peux pas manquer le *Msid* pour vous accompagner au souk des bijoux, j'ai ma leçon à apprendre.

– Ne te tourmente pas, répondit mon père. En passant, j'ai vu le *fqih*, je l'ai prévenu de ton absence. Tu travailles bien, cette demi-journée de repos sera une juste récompense. Mais peut-être n'aimes-tu pas voir de jolis bijoux et l'animation des enchères ?

– Oh si ! Les bijoux c'est beau, c'est beau comme….

Je n'osai pas poursuivre ma comparaison. Mon père m'encouragea :

– Beau comme quoi ?

Je baissai les yeux et, d'une voix de confidence, je dis timidement :

– Les bijoux c'est beau comme les fleurs.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant :

| Auteur de l'œuvre | Titre de l'œuvre | Genre littéraire | Date de publication |
|---|---|---|---|
| | | | |

**2.** A- Comment s'appellent les membres de la famille du narrateur (père, mère et narrateur enfant) ? B- Quel est l'âge du narrateur enfant ?

**3.** Où se passent les événements du texte ? Et en quel moment de la journée ?

**4.** Répondez par **Vrai** ou **Faux** en justifiant d'après le texte : a- Le père du narrateur revient toujours à la maison pour déjeuner ; b- Le père du narrateur pensait que las *Haïks* se vendaient bien toute l'année.

**5.** Où le père du narrateur veut-il emmener sa famille ? Pourquoi ?

**6.** Relevez dans le texte deux mots relatifs à chacun des champs lexicaux suivants : **a- La culture marocaine ; b- La beauté.**

**7.** A Partir du texte, vous complétez le tableau suivant : (Phrase du texte / Expression de)

| Phrase du texte (Expression de : L'opposition) | Expression de (Phrase du texte : *les djellabas de laine se vendaient moins bien qu'en hiver*) |
|---|---|
| | |

**8.** Transformez l'objection du petit enfant au discours indirect : J'objectai : « *je ne peux pas manquer le Msid pour vous accompagner au souk des bijoux.* »

**9.** Que pensez-vous de la communication au sein de la famille du narrateur ? Expliquez votre jugement.

**10.** « *Tu travailles bien, cette demi-journée de repos sera une juste récompense.* » Partagez-vous cette opinion du père ? Justifiez.

## II. Production écrite (10 points)

**Sujet :** « Derrière chaque élève qui travaille bien, il y a toujours une famille qui le soutient, l'aide et l'encourage ».

- Partagez-vous cette idée ?
- Rédigez un texte argumentatif dans lequel vous défendez votre point de vue à l'aide d'arguments pertinents illustrés par des exemples précis.

***Lors de la rédaction, vous tenez compte des critères suivants :***

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |
| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Respect des règles orthographiques et grammaticales. | |
| | | Conjugaison (emploi des temps verbaux) | |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute réponse non prévue est laissée à l'appréciation du professeur correcteur.*

### I. Étude de texte

**1.** 

| Auteur de l'œuvre | Titre de l'œuvre | Genre littéraire | Date de publication |
|---|---|---|---|
| Ahmed SEFRIOUI | *La boîte à merveilles* | Roman autobiographique | 1954 |

**2.** A- le père s'appelle (maâlem) Abdeslam ; la mère s'appelle (Lalla) Zoubida et le petit enfant s'appelle Sidi mohammed. B- le narrateur enfant est âgé de **6 ans**. (1pt. (¼ x4))

**3.** Les événements du texte se passent dans la maison du narrateur (dar chouafa) à Fès. Le moment de la journée c'est le déjeuner (midi) (1pt. (½ pt.x2))

**4.** a- **Faux** : le père du narrateur ne revient à la maison que le soir « *…renonçant à ses habitude,…* b- **Vrai** : « *ces étoffes jouissent toujours du même succès. Été comme hiver…* » (1pt. (¼ x4))

**5.** Le père veut emmener sa famille au souk des bijoux. (½ pt.) Pour acheter à sa femme un bracelet qu'elle lui avait demandé, et pour récompenser le petit pour son bon travail au Msid. (une raison suffirait) (½ pt.)

**6.** a- la culture marocaine : *djellabas, Msid, Fqih, haïks…..* b- la beauté : *beau, joli, bijoux…* (1pt. (¼ x4))

**7.** 

| Phrase du texte (Expression de : L'opposition) | Expression de (Phrase du texte : *les djellabas de laine se vendaient moins bien qu'en hiver*) |
|---|---|
| *elle est morte surtout de vieillesse,* ***mais*** *peu importe.* (½ pt.) | **la comparaison** : les djellabas de laine se vendaient moins bien qu'en hiver. (½ pt.) |

**8.** J'objectai **que** (¼) je ne **pouvais** (¼) pas manquer le Msid pour **les** (¼) accompagner au souk des bijoux. **(¼) pour la ponctuation) → Total= 1pt.**

**9.** Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. (1pt. (½pt. x 2))

**10.** Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. (1pt. (½ pt. x 2))

### II. Production écrite

***IMPORTANT :*** *Lors de la correction, tenir impérativement compte des critères spécifiés en accordant la note finale sur la base des notes partielles attribuées et dûment reportées sur la copie du candidat ou de la candidate.*

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |
| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Respect des règles orthographiques et grammaticales. | |
| | | Conjugaison (emploi des temps verbaux) | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Nous étions un lundi, lorsque mon père, renonçant à ses habitudes, vint déjeuner à la maison. Il nous expliqua que les *djellabas* de laine se vendaient moins bien qu'en hiver et qu'il avait l'intention de se lancer dans la fabrication des *haïks* de coton.\n\nCes étoffes jouissent toujours du même succès. Été comme hiver, les femmes de Fès ne peuvent sortir qu'enveloppées dans ces pièces blanches.\n\n– Aujourd'hui, ajouta-t-il, j'ai l'intention de vous emmener tous les deux au souk des bijoux.\n\nEt s'adressant à ma mère, il continua :\n\n– Il y a longtemps que tu me demandes ces bracelets *soleil et lune* (or et argent). Il est temps que je te les offre. D'autre part, mon ouvrier a perdu sa mère qui habitait la campagne. Il est parti pour l'enterrement ; demain il sera de retour et nous reprendrons le travail.\n\nMa mère interrogea :\n\n– Est-elle morte d'une maladie ?\n\n– Je crois, dit mon père, qu'elle est morte surtout de vieillesse, mais peu importe, que Dieu la reçoive dans sa miséricorde !\n\n– Mais, objectai-je, je ne peux pas manquer le *Msid* pour vous accompagner au souk des bijoux, j'ai ma leçon à apprendre.\n\n– Ne te tourmente pas, répondit mon père. En passant, j'ai vu le *fqih*, je l'ai prévenu de ton absence. Tu travailles bien, cette demi-journée de repos sera une juste récompense. Mais peut-être n'aimes-tu pas voir de jolis bijoux et l'animation des enchères ?\n\n– Oh si ! Les bijoux c'est beau, c'est beau comme….\n\nJe n'osai pas poursuivre ma comparaison. Mon père m'encouragea :\n\n– Beau comme quoi ?\n\nJe baissai les yeux et, d'une voix de confidence, je dis timidement :\n\n– Les bijoux c'est beau comme les fleurs.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Auteur de l'œuvre", "reponse": "Ahmed SEFRIOUI"}, {"libelle": "Titre de l'œuvre", "reponse": "*La boîte à merveilles*"}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Date de publication", "reponse": "1954"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "A- Comment s'appellent les membres de la famille du narrateur (père, mère et narrateur enfant) ? B- Quel est l'âge du narrateur enfant ?", "correction": "A- le père s'appelle (maâlem) Abdeslam ; la mère s'appelle (Lalla) Zoubida et le petit enfant s'appelle Sidi mohammed. B- le narrateur enfant est âgé de **6 ans**. (1pt. (¼ x4))"}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Où se passent les événements du texte ? Et en quel moment de la journée ?", "correction": "Les événements du texte se passent dans la maison du narrateur (dar chouafa) à Fès. Le moment de la journée c'est le déjeuner (midi) (1pt. (½ pt.x2))"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Répondez par **Vrai** ou **Faux** en justifiant d'après le texte : a- Le père du narrateur revient toujours à la maison pour déjeuner ; b- Le père du narrateur pensait que las *Haïks* se vendaient bien toute l'année.", "correction": "a- **Faux** : le père du narrateur ne revient à la maison que le soir « *…renonçant à ses habitude,…* b- **Vrai** : « *ces étoffes jouissent toujours du même succès. Été comme hiver…* » (1pt. (¼ x4))"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Où le père du narrateur veut-il emmener sa famille ? Pourquoi ?", "correction": "Le père veut emmener sa famille au souk des bijoux. (½ pt.) Pour acheter à sa femme un bracelet qu'elle lui avait demandé, et pour récompenser le petit pour son bon travail au Msid. (une raison suffirait) (½ pt.)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez dans le texte deux mots relatifs à chacun des champs lexicaux suivants : **a- La culture marocaine ; b- La beauté.**", "correction": "a- la culture marocaine : *djellabas, Msid, Fqih, haïks…..* b- la beauté : *beau, joli, bijoux…* (1pt. (¼ x4))"}, {"type": "tableau", "numero": "7", "points": 1, "enonce": "A Partir du texte, vous complétez le tableau suivant : (Phrase du texte / Expression de)", "champs": [{"libelle": "Phrase du texte (Expression de : L'opposition)", "reponse": "*elle est morte surtout de vieillesse,* ***mais*** *peu importe.* (½ pt.)"}, {"libelle": "Expression de (Phrase du texte : *les djellabas de laine se vendaient moins bien qu'en hiver*)", "reponse": "**la comparaison** : les djellabas de laine se vendaient moins bien qu'en hiver. (½ pt.)"}]}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Transformez l'objection du petit enfant au discours indirect : J'objectai : « *je ne peux pas manquer le Msid pour vous accompagner au souk des bijoux.* »", "correction": "J'objectai **que** (¼) je ne **pouvais** (¼) pas manquer le Msid pour **les** (¼) accompagner au souk des bijoux. **(¼) pour la ponctuation) → Total= 1pt.**"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Que pensez-vous de la communication au sein de la famille du narrateur ? Expliquez votre jugement.", "correction": "Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. (1pt. (½pt. x 2))"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "« *Tu travailles bien, cette demi-journée de repos sera une juste récompense.* » Partagez-vous cette opinion du père ? Justifiez.", "correction": "Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. (1pt. (½ pt. x 2))"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** « Derrière chaque élève qui travaille bien, il y a toujours une famille qui le soutient, l'aide et l'encourage ».\n\n- Partagez-vous cette idée ?\n- Rédigez un texte argumentatif dans lequel vous défendez votre point de vue à l'aide d'arguments pertinents illustrés par des exemples précis.\n\n***Lors de la rédaction, vous tenez compte des critères suivants :***\n\n| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |\n|---|---|---|---|\n| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |\n| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |\n| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |\n| | | Respect des règles orthographiques et grammaticales. | |\n| | | Conjugaison (emploi des temps verbaux) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
