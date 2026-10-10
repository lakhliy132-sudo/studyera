-- Sujet de français, examen régional 2021 (session normale), académie
-- Guelmim-Oued Noun, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2021 جهة كلميم واد نون »).
-- Corrigé et barème officiels recopiés question par question.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين جهة كلميم واد نون »,
-- « الامتحان الجهوي الموحد لنيل شهادة البكالوريا », « الأولى بكالوريا – مترشحون
-- متمدرسون », « الدورة: العادية 2021 », durée « 2 ساعات ». Coefficient « 3 أو 4 » :
-- 4 pour les sciences expérimentales, sciences mathématiques, technologies
-- et arts appliqués ; 3 pour les sciences économiques (et gestion) :
-- laissé vide.
-- « Soirée de bénédiction, Lui dis-je » : majuscule de la feuille conservée.
-- Question 1 : le corrigé écrit le siècle « XX me » (exposant).
-- Question 2 B : propositions a, b, c imprimées, mais dans la même question
-- que le A (1 point en tout, 0,5 chacun d'après le corrigé) ; découpée en
-- 2A (libre) et 2B (choix).
-- Question 8 : les mots soulignés dans la réponse du corrigé sont mis en
-- gras.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2021,
  $sujet$normale$sujet$,
  $sujet$Guelmim-Oued Noun$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Sciences expérimentales, sciences mathématiques, technologies, arts appliqués ; sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

A la maison, je trouvai ma mère très ennuyée. Il n'y avait plus de pétrole dans la lampe. Ma mère avait oublié d'en faire acheter. Je lui proposai de faire sa commission. Elle refusa. Driss El Aouad rentra. Ma mère descendit au premier. Je l'entendis chuchoter sur le palier de Rahma. Le pas de Driss El Aouad retentit de nouveau dans l'escalier. Il avait accepté de rendre service à ma mère. […]

La nuit tomba brusquement. Nous attendions impatiemment le retour de notre voisin pour éclairer la chambre. Quelqu'un toussa à la porte d'entrée de la maison. Driss El Aouad demanda s'il n'y avait personne sur son passage. Ma mère se précipita chez Rahma, ramena sa bouteille à moitié pleine de pétrole. A la lumière d'un bout de chandelle, elle dévissa le bec, remplit la lampe, nettoya la mèche de son charbon et alluma.

– Soirée de bénédiction, Lui dis-je.

– Que ta soirée soit bénie, me répondit ma mère.

– Lalla Zoubida, appela Lalla Kanza du rez-de-chaussée, bénie soit ta soirée, pourrais-tu me donner un brin de menthe ?

– Sidi Mohammed va te le porter.

Ma mère me donna quelques branches de menthe très parfumée. J'allai fièrement les offrir à la *chouafa*. Je la trouvai dans le patio. Une odeur d'encens, de benjoin et de bien d'autres aromates alourdissait l'atmosphère. J'étais persuadé qu'une assemblée de démons, attirés par toutes ces odeurs, se tenait dans la pénombre.

Lalla Kanza, pour me remercier, me mit dans le creux de la main une poignée de grains de sésame. **Je pensai que c'était là une part d'un repas mystérieux offert aux génies par la sorcière.**

## I. Étude de texte (10 points)

**1.** Recopier et compléter le tableau suivant : **(1pt.)**

| Auteur | Titre de l'œuvre | Genre littéraire | Siècle |
|---|---|---|---|
| | | | |

**2A.** En vous fondant sur votre lecture de l'œuvre, répondez aux questions suivantes : A) Qui partage le deuxième étage de Dar Chouafa avec la famille du narrateur ? **(1pt.)**

**2B.** B) Ce texte se situe : **Recopiez la bonne réponse.**

a- Avant la fête de la Achoura ;  
b- Pendant le jour de la fête de la Achoura ;  
c- Après la fête de la Achoura.

**3.** Pourquoi la mère du narrateur se précipita chez Rahma ? **(1pt.)**

**4A.** A) Quel service sidi Mohammed a rendu à Lalla Kenza ? **(1pt.)**

**4B.** B) Que lui donna-t-elle pour le remercier ?

**5.** Dégagez du texte une expression qui montre que le narrateur est doté d'une riche imagination. **(1pt.)**

**6.** Relevez du texte deux comportements (ou faits) qui traduisent la solidarité entre les voisins. **(1pt.)**

**7.** Identifiez dans l'énoncé en gras dans le texte : a) la proposition principale ; b) la proposition subordonnée ; c) le moyen de subordination ; d) le type de proposition subordonnée. **(1pt.)**

**8.** Transformez la phrase suivante au discours indirect en opérant les changements nécessaires : Lalla Kanza demanda à Lalla Zoubida: « *peux-tu me donner un brin de menthe* ? » **(1pt.)**

**9.** Pensez-vous que la récompense de Lalla Kanza à sidi Mohammed était importante pour lui ? Justifiez votre réponse par un argument. **(1pt.)**

**10.** « *Driss El Aouad demanda s'il n'y avait personne sur son passage* » : ce comportement respectueux existe-t-il encore dans notre société moderne ? Justifier votre réponse par un argument. **(1pt.)**

## II. Production écrite (10 points)

**Sujet :** « Le confinement général de l'année dernière a contribué à renforcer les relations du bon voisinage dans notre pays. »

Partagez- vous ce point de vue ?

**Consigne :** Rédigez un texte argumentatif où vous exposez votre point de vue illustré par des arguments des exemples pertinents.

**CRITÈRES D'ÉVALUATION**

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| **Conformité** de la production à la consigne d'écriture | *5 points* | **Vocabulaire** (usage des termes précis et variés) | *5 points* |
| **Cohérence** de l'argumentation | | **Syntaxe** (construction des phrases correctes) | |
| **Structure** du texte (organisation et progression du texte) | | **Ponctuation** (usage d'une ponctuation adéquate) | |
| | | Respect des règles **orthographiques** et **grammaticales** | |
| | | **Conjugaison** (emploi adéquat des temps verbaux) | |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute réponse non prévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** **(1pt.)**

| Auteur | Titre de l'œuvre | Genre littéraire | Siècle |
|---|---|---|---|
| Ahmed Sefrioui | *La Boîte à merveilles* | Roman autobiographique | XXᵐᵉ |

**2A.** **Fatma Bziouya - (et sa famille).** (0,5 pt.) **(1pt.)**

**2B.** Ce texte se situe plutôt : **Avant la fête de la Achoura (a)** (0,5 pt.)

**3.** La mère du narrateur se précipita chez Rahma pour ramener sa bouteille de pétrole pour allumer sa lampe. (1pt.) **(1pt.)**

**4A.** **sidi Mohammed emporta quelques branches de menthe à Lalla Kenza.** (0,5 pt.) **(1pt.)**

**4B.** Pour le remercier elle lui donna **une poignée de grains de sésame.** (0,5 pt.)

**5.** **une expression** qui montre la grande imagination du narrateur : « *Je pensai que c'était là une part d'un repas mystérieux offert aux génies par la sorcière.* » **Ou bien** « *J'étais persuadé qu'une assemblée de démons, attirés par toutes ces odeurs* » (1pt.) **(1pt.)**

**6.** Les deux comportements (ou faits), dans le texte, qui traduisent la solidarité entre les voisins : – **Driss El Aouad rend service à la mère du narrateur : chercher le pétrole de la lampe.** – **La mère du narrateur rend service à Lalla Kenza : donner un brin de menthe.** (1pt. (0,5 pt x2)) **(1pt.)**

**7.** [*Je pensai que c'était là une part d'un repas mystérieux offert aux génies par la sorcière.*] a) Prop. principale : [***je pensai***] ; b) Prop. sub. [***que c'était là….la sorcière.***] c) Moyen de sub. : **QUE** ; d) **subordonnée complétive.** (1pt. (0,25 x 4)) **(1pt.)**

**8.** Lalla Kanza demanda à Lalla Zoubida **si elle pouvait lui** donner un brin de menthe. (1pt.(0,25 x 4)) **(1pt.)**

**9.** Accepter toute réponse adéquate ou le candidat prend position par rapport à la question tout en justifiant son point de vue. (1pt. (0,5 x2)) **(1pt.)**

**10.** Accepter toute réponse adéquate ou le candidat prend position par rapport à la question tout en justifiant son point de vue. (1pt. (0,5 x2)) **(1pt.)**

### II. Production écrite

*IMPORTANT : Lors de la correction, tenir impérativement compte des critères spécifiés en accordant la note finale sur la base des notes partielles attribuées et dûment reportées sur la copie du candidat ou de la candidate.*

**CRITÈRES D'ÉVALUATION**

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| **Conformité** de la production à la consigne d'écriture | *5 points* | **Vocabulaire** (usage des termes précis et variés) | *5 points* |
| **Cohérence** de l'argumentation | | **Syntaxe** (construction des phrases correctes) | |
| **Structure** du texte (organisation et progression du texte) | | **Ponctuation** (usage d'une ponctuation adéquate) | |
| | | Respect des règles **orthographiques** et **grammaticales** | |
| | | **Conjugaison** (emploi adéquat des temps verbaux) | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "A la maison, je trouvai ma mère très ennuyée. Il n'y avait plus de pétrole dans la lampe. Ma mère avait oublié d'en faire acheter. Je lui proposai de faire sa commission. Elle refusa. Driss El Aouad rentra. Ma mère descendit au premier. Je l'entendis chuchoter sur le palier de Rahma. Le pas de Driss El Aouad retentit de nouveau dans l'escalier. Il avait accepté de rendre service à ma mère. […]\n\nLa nuit tomba brusquement. Nous attendions impatiemment le retour de notre voisin pour éclairer la chambre. Quelqu'un toussa à la porte d'entrée de la maison. Driss El Aouad demanda s'il n'y avait personne sur son passage. Ma mère se précipita chez Rahma, ramena sa bouteille à moitié pleine de pétrole. A la lumière d'un bout de chandelle, elle dévissa le bec, remplit la lampe, nettoya la mèche de son charbon et alluma.\n\n– Soirée de bénédiction, Lui dis-je.\n\n– Que ta soirée soit bénie, me répondit ma mère.\n\n– Lalla Zoubida, appela Lalla Kanza du rez-de-chaussée, bénie soit ta soirée, pourrais-tu me donner un brin de menthe ?\n\n– Sidi Mohammed va te le porter.\n\nMa mère me donna quelques branches de menthe très parfumée. J'allai fièrement les offrir à la *chouafa*. Je la trouvai dans le patio. Une odeur d'encens, de benjoin et de bien d'autres aromates alourdissait l'atmosphère. J'étais persuadé qu'une assemblée de démons, attirés par toutes ces odeurs, se tenait dans la pénombre.\n\nLalla Kanza, pour me remercier, me mit dans le creux de la main une poignée de grains de sésame. **Je pensai que c'était là une part d'un repas mystérieux offert aux génies par la sorcière.**", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopier et compléter le tableau suivant :", "champs": [{"libelle": "Auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Titre de l'œuvre", "reponse": "*La Boîte à merveilles*"}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Siècle", "reponse": "XXᵐᵉ"}]}, {"type": "libre", "numero": "2A", "points": 0.5, "enonce": "En vous fondant sur votre lecture de l'œuvre, répondez aux questions suivantes : A) Qui partage le deuxième étage de Dar Chouafa avec la famille du narrateur ?", "correction": "**Fatma Bziouya - (et sa famille).** (0,5 pt.)"}, {"type": "choix", "numero": "2B", "points": 0.5, "enonce": "B) Ce texte se situe : **Recopiez la bonne réponse.**", "options": ["Avant la fête de la Achoura ;", "Pendant le jour de la fête de la Achoura ;", "Après la fête de la Achoura."], "bonne": 0}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Pourquoi la mère du narrateur se précipita chez Rahma ?", "correction": "La mère du narrateur se précipita chez Rahma pour ramener sa bouteille de pétrole pour allumer sa lampe. (1pt.)"}, {"type": "libre", "numero": "4A", "points": 0.5, "enonce": "A) Quel service sidi Mohammed a rendu à Lalla Kenza ?", "correction": "**sidi Mohammed emporta quelques branches de menthe à Lalla Kenza.** (0,5 pt.)"}, {"type": "libre", "numero": "4B", "points": 0.5, "enonce": "B) Que lui donna-t-elle pour le remercier ?", "correction": "Pour le remercier elle lui donna **une poignée de grains de sésame.** (0,5 pt.)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Dégagez du texte une expression qui montre que le narrateur est doté d'une riche imagination.", "correction": "**une expression** qui montre la grande imagination du narrateur : « *Je pensai que c'était là une part d'un repas mystérieux offert aux génies par la sorcière.* » **Ou bien** « *J'étais persuadé qu'une assemblée de démons, attirés par toutes ces odeurs* » (1pt.)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez du texte deux comportements (ou faits) qui traduisent la solidarité entre les voisins.", "correction": "Les deux comportements (ou faits), dans le texte, qui traduisent la solidarité entre les voisins : – **Driss El Aouad rend service à la mère du narrateur : chercher le pétrole de la lampe.** – **La mère du narrateur rend service à Lalla Kenza : donner un brin de menthe.** (1pt. (0,5 pt x2))"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Identifiez dans l'énoncé en gras dans le texte : a) la proposition principale ; b) la proposition subordonnée ; c) le moyen de subordination ; d) le type de proposition subordonnée.", "correction": "[*Je pensai que c'était là une part d'un repas mystérieux offert aux génies par la sorcière.*] a) Prop. principale : [***je pensai***] ; b) Prop. sub. [***que c'était là….la sorcière.***] c) Moyen de sub. : **QUE** ; d) **subordonnée complétive.** (1pt. (0,25 x 4))"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Transformez la phrase suivante au discours indirect en opérant les changements nécessaires : Lalla Kanza demanda à Lalla Zoubida: « *peux-tu me donner un brin de menthe* ? »", "correction": "Lalla Kanza demanda à Lalla Zoubida **si elle pouvait lui** donner un brin de menthe. (1pt.(0,25 x 4))"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Pensez-vous que la récompense de Lalla Kanza à sidi Mohammed était importante pour lui ? Justifiez votre réponse par un argument.", "correction": "Accepter toute réponse adéquate ou le candidat prend position par rapport à la question tout en justifiant son point de vue. (1pt. (0,5 x2))"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "« *Driss El Aouad demanda s'il n'y avait personne sur son passage* » : ce comportement respectueux existe-t-il encore dans notre société moderne ? Justifier votre réponse par un argument.", "correction": "Accepter toute réponse adéquate ou le candidat prend position par rapport à la question tout en justifiant son point de vue. (1pt. (0,5 x2))"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** « Le confinement général de l'année dernière a contribué à renforcer les relations du bon voisinage dans notre pays. »\n\nPartagez- vous ce point de vue ?\n\n**Consigne :** Rédigez un texte argumentatif où vous exposez votre point de vue illustré par des arguments des exemples pertinents.\n\n**CRITÈRES D'ÉVALUATION**\n\n| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |\n|---|---|---|---|\n| **Conformité** de la production à la consigne d'écriture | *5 points* | **Vocabulaire** (usage des termes précis et variés) | *5 points* |\n| **Cohérence** de l'argumentation | | **Syntaxe** (construction des phrases correctes) | |\n| **Structure** du texte (organisation et progression du texte) | | **Ponctuation** (usage d'une ponctuation adéquate) | |\n| | | Respect des règles **orthographiques** et **grammaticales** | |\n| | | **Conjugaison** (emploi adéquat des temps verbaux) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
