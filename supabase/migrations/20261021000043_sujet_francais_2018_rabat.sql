-- Sujet de français, examen régional 2018 (session normale), académie
-- Rabat-Salé-Kénitra, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2018 جهة الرباط سلا القنيطرة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Rabat-Salé-Kénitra, session normale (« دورة يونيو 2018 »,
-- « الدورة العادية »), durée « ساعتان », coefficient « 4 » pour
-- « ش. العلمية و الأدبية والتقنية بكل مسالكها » (filières des lettres et sciences
-- humaines, sciences expérimentales et mathématiques, et de l'enseignement
-- technique).
-- Question 1 : le corrigé range les colonnes dans un autre ordre (Auteur,
-- Titre, Genre, Siècle) ; les réponses sont remises dans l'ordre du sujet.
-- Le texte porte « Nous sommes riches «, » (guillemet ouvrant à la place du
-- fermant) et « []… » : laissés tels quels.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, duree_minutes, coefficient, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2018,
  $sujet$normale$sujet$,
  $sujet$Rabat-Salé-Kénitra$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  120,
  4,
  $sujet$## Texte

Déjà, les questions fusaient de toutes les chambres. Rahma se pencha à la fenêtre, Kanza qui lavait près du puits lâcha ses seaux et son savon, Fatma Bziouya abandonna son rouet, toutes interrogeaient à la fois ma mère sur la santé de mon père, sur son nouveau travail, sur l'endroit où il se trouvait. Mais ma mère répondait par des mots vagues suivis d'un cortège de formules de politesse. La curiosité de nos voisines se montrait tenace. Elles désiraient toutes savoir ce que mon père nous avait envoyé. Je sentais que ma mère tenait à les faire languir. Quand j'arrivai dans notre chambre, je trouvai, posés sur la petite table ronde, une douzaine d'œufs, un pot de terre ébréché plein de beurre et une bouteille d'huile d'un brun sombre. Je regardai ma mère, elle rayonnait de joie. Ses yeux étaient remplis de larmes.

– Regarde, me dit-elle, ce que ton père nous a envoyé! Il ne nous a pas oubliés. Il est loin, mais il veille sur nous. Il nous a même fait parvenir de l'argent. Regarde! regarde!

Elle ouvrit la main. Je vis trois pièces d'argent jeter leurs reflets de clair de lune.

Ce monologue fut murmuré à mi-voix, mais les oreilles qui guettaient cet instant surprirent le mot argent.

Le mot magique voyagea d'une bouche à l'autre. Nos voisines à demi satisfaites reprirent leur ouvrage. Elles savaient fort bien que ma mère ne leur cacherait pas longtemps sa bonne fortune. Moi, je pensais surtout à notre promenade qui paraissait très compromise. Je ne la regrettais pas. La gaîté de ma mère me gagna. Tout se mit à chanter en moi et autour de moi. « Nous sommes riches ! Nous sommes riches «, répétais-je pour moi-même. Une semaine auparavant, je n'osais même pas penser à l'étendue de notre pauvreté. La misère habitait nos murs, suintait du plafond, imprégnait de son odeur jusqu'à notre linge. Le messager invisible a surgi ce matin dans notre existence, il a balayé nos craintes, nos appréhensions, nos inquiétudes. Nous pouvions, ma mère et moi, faire confiance à notre bonne étoile et patienter.

– Sidi Mohammed, va jouer sur la terrasse si cela te fait plaisir, me dit ma mère ; aujourd'hui, j'ai trop à faire pour te conduire sur la tombe de Sidi Ali M'zali, Nous irons, s'il plaît à Dieu, la semaine prochaine ou l'une des semaines à venir.

Je n'avais nulle envie de monter sur la terrasse. Le soleil, d'un blanc métallique, la transformait en géhenne. []…

Sur la table ronde, il ne restait plus que six œufs.

Ma mère avait partagé équitablement avec nos voisines. J'adorais les œufs, leur vue me faisait saliver abondamment. Avant de préparer le repas, ma mère monta sur la terrasse.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(0,25 x 4)**

| Titre de l'œuvre | Genre littéraire | Auteur | Siècle de l'œuvre |
|---|---|---|---|
| | | | |

**2.** Parmi les évènements suivants, choisissez celui qui vous permet de situer le passage. **(1 point)**

a- Après que son père a perdu tout son capital, Sidi Mohammed, affecté par ce drame, souffre de fièvre ;  
b- Après avoir consulté Sidi Elarrafi, Lalla Zoubida et Lalla Aicha sont rentrées chez elles, discrètes ;  
c- Au moment où le narrateur évoque la visite rendue au devin Sidi Elarrafi, un messager arrive.

**3.** En tenant compte de votre connaissance de l'œuvre, recopiez et remplissez le tableau suivant en répondant par vrai ou faux. **(1 point)**

| | Vrai | Faux |
|---|---|---|
| a. Maalem Abdeslem est le mari de Lalla Zoubida. | | |
| b. Moulay Larbi est le mari de Lalla Kanza. | | |
| c. Lalla Aicha pratique la voyance.. | | |
| d. Zineb est la fille de Driss El Aouad et de Rahma | | |

**4.** Pourquoi le narrateur chante-il ? **(1 point)**

**5.** Le messager est présenté comme un sauveur. Qu'a-t-il fait ? **(1 point)**

**6.** En tenant compte du texte, reliez par une flèche chaque énoncé de la colonne « A » à la signification qui lui correspond dans la colonne « B ». (B. Signification : 1. Chance 2. Faire attendre 3. Argent 4. Travail 5. Chaleur insupportable) **(1 point)**

| a. Ma mère tenait à les **faire languir**. | b. Nous devions faire confiance à **notre bonne étoile**. | c. Le soleil transformait la terrasse **en géhenne**. | d. Ma mère ne leur cacherait pas longtemps sa **bonne fortune** |
|---|---|---|---|
| | | | |

**7.** Relevez dans le texte les quatre choses que le père a envoyées à sa famille. **(1 point)**

**8.** Quelle figure de style est employée dans les phrases suivantes ? a. « La misère habitait nos murs.» **(1 point)**

**9.** La mère dit à son fils qu'elle allait le conduire sur la tombe de Sidi Ali M'zali. Que pensez-vous de cette pratique ? **(1 point)**

**10.** Le narrateur dit que sa mère avait partagé tous les œufs avec ses voisines. Comment trouvez-vous ce geste ? **(1 point)**

## II. Production écrite (10 points)

**Sujet :**

**Sujet :** Dans ***Le Dernier Jour d'un Condamné***, on sait que le condamné sera tué et exécuté ; mais on ignore les circonstances du crime qu'il a commis pour être condamné.

Rédigez **un plaidoyer** dans lequel vous défendez le condamné à mort.

Développez votre réflexion en vous appuyant sur des arguments variés et des exemples concrets.

***NB : Votre production sera évaluée selon les critères suivants :***

- **Respect de la consigne.**
- **Organisation de l'écrit (introduction, , développement, conclusion) cohérence de l'argumentation .**
- **Correction de la langue**
- **Originalité.**$sujet$,
  $sujet$## Corrigé et barème

*NB : Les réponses non prévues sont laissées à l'appréciation des correcteurs.*

### I. Étude de texte

**1.** **(0,25 x 4)**

| Titre de l'œuvre | Genre littéraire | Auteur | Siècle de l'œuvre |
|---|---|---|---|
| *La boite à merveilles* | Roman autobiographique | *Ahmed Sefrioui* | 20ème |

**2.** c- Au moment où le narrateur évoque la visite rendue au devin Sidi Elarrafi, un messager arrive. **(1 point)**

**3.** **(1 point)**

| | |
|---|---|
| a. Maalem Abdeslem est le mari de Lalla Zoubida. | Vrai |
| b. Moulay Larbi est le mari de Lalla Kanza. | Faux |
| c. Lalla Aicha pratique la voyance.. | Faux |
| d. Zineb est la fille de Driss El Aouad et de Rahma | Vrai |

**4.** Ex : Il est content, lui et sa mère, car son père leur a envoyé de l'argent et de la nourriture. **(1 point)**

**5.** En leur apportant de l'argent et de la nourriture, il les aurait sauvés de la misère et de la faim / apporte de bonnes nouvelles de Maalem Abdeslem **(1 point)**

**6.** **(1 point)**

| a. Ma mère tenait à les **faire languir**. | b. Nous devions faire confiance à **notre bonne étoile**. | c. Le soleil transformait la terrasse **en géhenne**. | d. Ma mère ne leur cacherait pas longtemps sa **bonne fortune** |
|---|---|---|---|
| 2 | 1 | 5 | 3 |

**7.** Du beurre, de l'huile, des œufs et de l'argent. (0,25 X 4) **(1 point)**

**8.** La personnification. **(1 point)**

**9.** Accepter toute réponse plausible correctement formulée. **(1 point)**

**10.** Accepter toute réponse plausible correctement formulée. **(1 point)**

### II. Production écrite

*Compétence visée : Exprimer et justifier un point de vue*

| | |
|---|---|
| **Critères d'évaluation du discours produit.** | **5 pts** |
| 1 Pertinence (respect de la consigne) | 1 pt |
| 2 Cohérence de l'argumentation | 2 pts |
| 3 Type et Structure du texte | 2 pts |
| **Critères d'évaluation de la langue** | **5 pts** |
| 4 Vocabulaire (usage de termes précis et variés) | 1 pt |
| 5 Syntaxe (construction de phrases correctes, enchainées | 1 pt |
| 6 Ponctuation(usage d'une ponctuation adéquate) | 1 pt |
| 7 Orthographe d'usage et grammaticale (respect des règles) | 1 pt |
| 8 Conjugaison (emploi et concordance des temps) | 1 pt |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Déjà, les questions fusaient de toutes les chambres. Rahma se pencha à la fenêtre, Kanza qui lavait près du puits lâcha ses seaux et son savon, Fatma Bziouya abandonna son rouet, toutes interrogeaient à la fois ma mère sur la santé de mon père, sur son nouveau travail, sur l'endroit où il se trouvait. Mais ma mère répondait par des mots vagues suivis d'un cortège de formules de politesse. La curiosité de nos voisines se montrait tenace. Elles désiraient toutes savoir ce que mon père nous avait envoyé. Je sentais que ma mère tenait à les faire languir. Quand j'arrivai dans notre chambre, je trouvai, posés sur la petite table ronde, une douzaine d'œufs, un pot de terre ébréché plein de beurre et une bouteille d'huile d'un brun sombre. Je regardai ma mère, elle rayonnait de joie. Ses yeux étaient remplis de larmes.\n\n– Regarde, me dit-elle, ce que ton père nous a envoyé! Il ne nous a pas oubliés. Il est loin, mais il veille sur nous. Il nous a même fait parvenir de l'argent. Regarde! regarde!\n\nElle ouvrit la main. Je vis trois pièces d'argent jeter leurs reflets de clair de lune.\n\nCe monologue fut murmuré à mi-voix, mais les oreilles qui guettaient cet instant surprirent le mot argent.\n\nLe mot magique voyagea d'une bouche à l'autre. Nos voisines à demi satisfaites reprirent leur ouvrage. Elles savaient fort bien que ma mère ne leur cacherait pas longtemps sa bonne fortune. Moi, je pensais surtout à notre promenade qui paraissait très compromise. Je ne la regrettais pas. La gaîté de ma mère me gagna. Tout se mit à chanter en moi et autour de moi. « Nous sommes riches ! Nous sommes riches «, répétais-je pour moi-même. Une semaine auparavant, je n'osais même pas penser à l'étendue de notre pauvreté. La misère habitait nos murs, suintait du plafond, imprégnait de son odeur jusqu'à notre linge. Le messager invisible a surgi ce matin dans notre existence, il a balayé nos craintes, nos appréhensions, nos inquiétudes. Nous pouvions, ma mère et moi, faire confiance à notre bonne étoile et patienter.\n\n– Sidi Mohammed, va jouer sur la terrasse si cela te fait plaisir, me dit ma mère ; aujourd'hui, j'ai trop à faire pour te conduire sur la tombe de Sidi Ali M'zali, Nous irons, s'il plaît à Dieu, la semaine prochaine ou l'une des semaines à venir.\n\nJe n'avais nulle envie de monter sur la terrasse. Le soleil, d'un blanc métallique, la transformait en géhenne. []…\n\nSur la table ronde, il ne restait plus que six œufs.\n\nMa mère avait partagé équitablement avec nos voisines. J'adorais les œufs, leur vue me faisait saliver abondamment. Avant de préparer le repas, ma mère monta sur la terrasse.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "*La boite à merveilles*"}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Auteur", "reponse": "*Ahmed Sefrioui*"}, {"libelle": "Siècle de l'œuvre", "reponse": "20ème"}]}, {"type": "choix", "numero": "2", "points": 1, "enonce": "Parmi les évènements suivants, choisissez celui qui vous permet de situer le passage.", "options": ["Après que son père a perdu tout son capital, Sidi Mohammed, affecté par ce drame, souffre de fièvre ;", "Après avoir consulté Sidi Elarrafi, Lalla Zoubida et Lalla Aicha sont rentrées chez elles, discrètes ;", "Au moment où le narrateur évoque la visite rendue au devin Sidi Elarrafi, un messager arrive."], "bonne": 2}, {"type": "vrai-faux", "numero": "3", "points": 1, "enonce": "En tenant compte de votre connaissance de l'œuvre, recopiez et remplissez le tableau suivant en répondant par vrai ou faux.", "affirmations": [{"texte": "a. Maalem Abdeslem est le mari de Lalla Zoubida.", "vrai": true}, {"texte": "b. Moulay Larbi est le mari de Lalla Kanza.", "vrai": false}, {"texte": "c. Lalla Aicha pratique la voyance..", "vrai": false}, {"texte": "d. Zineb est la fille de Driss El Aouad et de Rahma", "vrai": true}]}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Pourquoi le narrateur chante-il ?", "correction": "Ex : Il est content, lui et sa mère, car son père leur a envoyé de l'argent et de la nourriture."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Le messager est présenté comme un sauveur. Qu'a-t-il fait ?", "correction": "En leur apportant de l'argent et de la nourriture, il les aurait sauvés de la misère et de la faim / apporte de bonnes nouvelles de Maalem Abdeslem"}, {"type": "tableau", "numero": "6", "points": 1, "enonce": "En tenant compte du texte, reliez par une flèche chaque énoncé de la colonne « A » à la signification qui lui correspond dans la colonne « B ». (B. Signification : 1. Chance 2. Faire attendre 3. Argent 4. Travail 5. Chaleur insupportable)", "champs": [{"libelle": "a. Ma mère tenait à les **faire languir**.", "reponse": "2"}, {"libelle": "b. Nous devions faire confiance à **notre bonne étoile**.", "reponse": "1"}, {"libelle": "c. Le soleil transformait la terrasse **en géhenne**.", "reponse": "5"}, {"libelle": "d. Ma mère ne leur cacherait pas longtemps sa **bonne fortune**", "reponse": "3"}]}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez dans le texte les quatre choses que le père a envoyées à sa famille.", "correction": "Du beurre, de l'huile, des œufs et de l'argent. (0,25 X 4)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Quelle figure de style est employée dans les phrases suivantes ? a. « La misère habitait nos murs.»", "correction": "La personnification."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "La mère dit à son fils qu'elle allait le conduire sur la tombe de Sidi Ali M'zali. Que pensez-vous de cette pratique ?", "correction": "Accepter toute réponse plausible correctement formulée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Le narrateur dit que sa mère avait partagé tous les œufs avec ses voisines. Comment trouvez-vous ce geste ?", "correction": "Accepter toute réponse plausible correctement formulée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\n**Sujet :** Dans ***Le Dernier Jour d'un Condamné***, on sait que le condamné sera tué et exécuté ; mais on ignore les circonstances du crime qu'il a commis pour être condamné.\n\nRédigez **un plaidoyer** dans lequel vous défendez le condamné à mort.\n\nDéveloppez votre réflexion en vous appuyant sur des arguments variés et des exemples concrets.\n\n***NB : Votre production sera évaluée selon les critères suivants :***\n\n- **Respect de la consigne.**\n- **Organisation de l'écrit (introduction, , développement, conclusion) cohérence de l'argumentation .**\n- **Correction de la langue**\n- **Originalité.**", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  duree_minutes = excluded.duree_minutes,
  coefficient = excluded.coefficient,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
