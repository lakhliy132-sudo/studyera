-- Sujet de français, examen régional 2012 (session normale), académie
-- Souss-Massa, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2012 جهة سوس ماسة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie « جهة سوس ماسة درعة » (Souss-Massa-Drâa,
-- avant le découpage régional de 2015, aujourd'hui Souss-Massa) ;
-- « الدورة العادية يونيو 2012 », durée « ساعتان ». Coefficient : 3 pour
-- sciences économiques et gestion, 4 pour les autres séries.
-- Texte transcrit depuis la couche texte du PDF (deux colonnes), vérifié
-- sur le scan.
-- Question 1 : la case « Genre » du corrigé porte « Théâtre / tragédie » et,
-- à la ligne, « tragédie moderne » ; les deux lignes sont séparées ici par
-- une virgule.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2012,
  $sujet$normale$sujet$,
  $sujet$Souss-Massa$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences économiques et gestion, sciences et technologies électriques, sciences et technologies mécaniques, arts appliqués$sujet$,
  120,
  $sujet$## Texte

**ISMÈNE**

Il est plus fort que nous, Antigone. Il est le roi. Et ils pensent tous comme lui dans la ville. Ils sont des milliers et des milliers autour de nous, grouillant dans toutes les rues de Thèbes.

**ANTIGONE**

Je ne t'écoute pas.

**ISMÈNE**

Ils nous hueront. Ils nous prendront avec leurs mille bras, leurs mille visages et leur unique regard. Ils nous cracheront à la figure. Et il faudra avancer dans leur haine sur la charrette avec leur odeur et leurs rires jusqu'au supplice. Et là il y aura les gardes avec leurs têtes d'imbéciles, congestionnées sur leurs cols raides, leurs grosses mains lavées, leur regard de bœuf — qu'on sent qu'on pourra toujours crier, essayer de leur faire comprendre, qu'ils vont comme des nègres et qu'ils feront tout ce qu'on leur a dit scrupuleusement, sans savoir si c'est bien ou mal... Et souffrir ? Il faudra souffrir, sentir que la douleur monte, qu'elle est arrivée au point où l'on ne peut plus la supporter; qu'il faudrait qu'elle s'arrête, mais qu'elle continue pourtant et monte encore, comme une voix aiguë... Oh ! je ne peux pas, je ne peux pas...

**ANTIGONE**

Comme tu as bien tout pensé !

**ISMÈNE**

Toute la nuit. Pas toi ?

**ANTIGONE**

Si, bien sûr.

**ISMÈNE**

Moi, tu sais, je ne suis pas très courageuse.

**ANTIGONE**, *doucement.*

Moi non plus. Mais qu'est-ce que cela fait ?

*Il y a un silence, Ismène demande soudain :*

**ISMÈNE**

Tu n'as donc pas envie de vivre, toi ?

**ANTIGONE** *murmure.*

Pas envie de vivre... *(Et plus doucement encore si c'est possible.)* Qui se levait la première, le matin, rien que pour sentir l'air froid sur sa peau nue ? Qui se couchait la dernière seulement quand elle n'en pouvait plus de fatigue, pour vivre encore un peu de la nuit ? Qui pleurait déjà toute petite, en pensant qu'il y avait tant de petites bêtes, tant de brins d'herbe dans le pré et qu'on ne pouvait pas tous les prendre ?

**ISMÈNE** *a un élan soudain vers elle,*

Ma petite sœur...

**ANTIGONE** *se redresse et crie.*

Ah, non ! Laisse-moi ! Ne me caresse pas ! Ne nous mettons pas à pleurnicher ensemble, maintenant. Tu as bien réfléchi, tu dis ? Tu penses que toute la ville hurlante contre toi, tu penses que la douleur et la peur de mourir, c'est assez ?

**ISMÈNE** *baisse la tête.*

Oui.

**ANTIGONE**

Sers-toi de ces prétextes.

**ISMÈNE** *se jette contre elle.*

Antigone ! Je t'en supplie ! C'est bon pour les hommes de croire aux idées et de mourir pour elles. Toi tu es une fille.

**ANTIGONE**, *les dents serrées.*

Une fille, oui. Ai-je assez pleuré d'être une fille !

**ISMÈNE**

Ton bonheur est là devant toi et tu n'as qu'à le prendre. Tu es fiancée, tu es jeune, tu es belle...

**ANTIGONE**, *sourdement.*

Non, je ne suis pas belle.

**ISMÈNE**

Pas belle comme nous, mais autrement.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1pt)**

| Titre de l'œuvre | Auteur | Genre | Siècle |
|---|---|---|---|
| | | | |

**2.** En tenant compte de ce qui s'est passé avant ce passage, dites si les affirmations suivantes sont **vraies** ou **fausses** : **(1pt)**

| | Vrai | Faux |
|---|---|---|
| a- Créon a essayé une dernière fois de convaincre Antigone. | | |
| b- Antigone a déjà enterré le corps de Polynice. | | |
| c- La nourrice a surpris Antigone qui rentrait discrètement chez elle. | | |
| d- Ismène sait déjà qu'Antigone a enterré le corps de Polynice. | | |

**3.** De quoi Ismène cherche-t-elle à convaincre Antigone ? **(1pt)**

**4.** Relevez deux arguments utilisés par Ismène. **(1pt)**

**5.** Comment trouvez-vous Antigone dans ce passage ? Recopiez la bonne réponse. Justifiez-la. **(1/2pt x 2)**

a- Elle est ouverte au dialogue.  
b- Elle est hésitante.  
c- Elle est obstinée, plus décidée.

**6.** Relevez dans le texte quatre mots appartenant au champ lexical des sentiments. **(1pt)**

**7.** « ISMENE *se jette contre elle*. » Qu'est-ce qui justifie l'emploi de cette didascalie ? **(1pt)**

**8.** « *Il est plus fort que nous* ». La figure de style employée dans cette phrase est-elle : **(1pt)**

a- une comparaison ?  
b- une métaphore ?  
c- une hyperbole ?

**9.** Antigone dit : « *Je ne suis pas belle*. » Pour vous, qu'est-ce qu'être beau (être belle) ? Justifiez votre réponse. **(1pt)**

**10.** Pour Ismène, une fille ne meurt pas pour ses idées. Etes-vous du même avis ? Justifiez votre réponse. **(1pt)**

## II. Production écrite (10 points)

*« Aujourd'hui, pour vivre en toute tranquillité, il faut éviter tout contact avec les voisins. »*

Partagez-vous ce point de vue ?

Développez votre réflexion en vous appuyant sur des arguments précis.

| ***Critères d'évaluation du discours*** | | ***Critères d'évaluation de la langue*** | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5PTS | Vocabulaire (usage de termes précis et variés) | 5PTS |
| Cohérence de l'argumentation | | Syntaxe (construction de phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Orthographe d'usage et grammaticale (respect des règles) | |
| | | Conjugaison (emploi des temps) | |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute réponse (ou formulation) non prévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** **(1pt)**

| Titre de l'œuvre | Auteur | Genre | Siècle |
|---|---|---|---|
| Antigone | Jean ANOUILH | Théâtre / tragédie, tragédie moderne | XXème |

**2.** **(1pt)**

| | |
|---|---|
| a- Créon a essayé une dernière fois de convaincre Antigone. | Faux |
| b- Antigone a déjà enterré le corps de Polynice. | Vrai |
| c- La nourrice a surpris Antigone qui rentrait discrètement chez elle. | Vrai |
| d- Ismène sait déjà qu'Antigone a enterré le corps de Polynice. | Faux |

**3.** Ismène cherche à convaincre Antigone de ne pas enterrer son frère Polynice. **(1pt)**

**4.** Deux arguments utilisés par Ismène : **Exemples** : « *Il est plus fort que nous* » ; « *je ne suis pas courageuse.* » (1/2pt x 2) **(1pt)**

**5.** c- Elle est obstinée, plus décidée. (1/2pt) **Justification** : **Exemples** : « *Je ne t'écoute pas* » ; « *Sers-toi de ces prétextes*. » (1/2pt) **(1/2pt x 2)**

**6.** Quatre mots appartenant au champ lexical des sentiments : Exemples : « haine », « souffrir », « supplice », « sentir ». (1/4ptx4) **(1pt)**

**7.** Exemple : Sentant que sa sœur est loin d'être convaincue, Ismène la supplie une dernière fois. **(1pt)**

**8.** La figure de style employée dans la phrase : a- une comparaison. **(1pt)**

**9.** Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue. **(1pt)**

**10.** Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue. **(1pt)**

### II. Production écrite

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5PTS | Vocabulaire (usage de termes précis et variés) | 5PTS |
| Cohérence de l'argumentation | | Syntaxe (construction de phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Orthographe d'usage et grammaticale (respect des règles) | |
| | | Conjugaison (emploi des temps) | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**ISMÈNE**\n\nIl est plus fort que nous, Antigone. Il est le roi. Et ils pensent tous comme lui dans la ville. Ils sont des milliers et des milliers autour de nous, grouillant dans toutes les rues de Thèbes.\n\n**ANTIGONE**\n\nJe ne t'écoute pas.\n\n**ISMÈNE**\n\nIls nous hueront. Ils nous prendront avec leurs mille bras, leurs mille visages et leur unique regard. Ils nous cracheront à la figure. Et il faudra avancer dans leur haine sur la charrette avec leur odeur et leurs rires jusqu'au supplice. Et là il y aura les gardes avec leurs têtes d'imbéciles, congestionnées sur leurs cols raides, leurs grosses mains lavées, leur regard de bœuf — qu'on sent qu'on pourra toujours crier, essayer de leur faire comprendre, qu'ils vont comme des nègres et qu'ils feront tout ce qu'on leur a dit scrupuleusement, sans savoir si c'est bien ou mal... Et souffrir ? Il faudra souffrir, sentir que la douleur monte, qu'elle est arrivée au point où l'on ne peut plus la supporter; qu'il faudrait qu'elle s'arrête, mais qu'elle continue pourtant et monte encore, comme une voix aiguë... Oh ! je ne peux pas, je ne peux pas...\n\n**ANTIGONE**\n\nComme tu as bien tout pensé !\n\n**ISMÈNE**\n\nToute la nuit. Pas toi ?\n\n**ANTIGONE**\n\nSi, bien sûr.\n\n**ISMÈNE**\n\nMoi, tu sais, je ne suis pas très courageuse.\n\n**ANTIGONE**, *doucement.*\n\nMoi non plus. Mais qu'est-ce que cela fait ?\n\n*Il y a un silence, Ismène demande soudain :*\n\n**ISMÈNE**\n\nTu n'as donc pas envie de vivre, toi ?\n\n**ANTIGONE** *murmure.*\n\nPas envie de vivre... *(Et plus doucement encore si c'est possible.)* Qui se levait la première, le matin, rien que pour sentir l'air froid sur sa peau nue ? Qui se couchait la dernière seulement quand elle n'en pouvait plus de fatigue, pour vivre encore un peu de la nuit ? Qui pleurait déjà toute petite, en pensant qu'il y avait tant de petites bêtes, tant de brins d'herbe dans le pré et qu'on ne pouvait pas tous les prendre ?\n\n**ISMÈNE** *a un élan soudain vers elle,*\n\nMa petite sœur...\n\n**ANTIGONE** *se redresse et crie.*\n\nAh, non ! Laisse-moi ! Ne me caresse pas ! Ne nous mettons pas à pleurnicher ensemble, maintenant. Tu as bien réfléchi, tu dis ? Tu penses que toute la ville hurlante contre toi, tu penses que la douleur et la peur de mourir, c'est assez ?\n\n**ISMÈNE** *baisse la tête.*\n\nOui.\n\n**ANTIGONE**\n\nSers-toi de ces prétextes.\n\n**ISMÈNE** *se jette contre elle.*\n\nAntigone ! Je t'en supplie ! C'est bon pour les hommes de croire aux idées et de mourir pour elles. Toi tu es une fille.\n\n**ANTIGONE**, *les dents serrées.*\n\nUne fille, oui. Ai-je assez pleuré d'être une fille !\n\n**ISMÈNE**\n\nTon bonheur est là devant toi et tu n'as qu'à le prendre. Tu es fiancée, tu es jeune, tu es belle...\n\n**ANTIGONE**, *sourdement.*\n\nNon, je ne suis pas belle.\n\n**ISMÈNE**\n\nPas belle comme nous, mais autrement.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "Antigone"}, {"libelle": "Auteur", "reponse": "Jean ANOUILH"}, {"libelle": "Genre", "reponse": "Théâtre / tragédie, tragédie moderne"}, {"libelle": "Siècle", "reponse": "XXème"}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "En tenant compte de ce qui s'est passé avant ce passage, dites si les affirmations suivantes sont **vraies** ou **fausses** :", "affirmations": [{"texte": "a- Créon a essayé une dernière fois de convaincre Antigone.", "vrai": false}, {"texte": "b- Antigone a déjà enterré le corps de Polynice.", "vrai": true}, {"texte": "c- La nourrice a surpris Antigone qui rentrait discrètement chez elle.", "vrai": true}, {"texte": "d- Ismène sait déjà qu'Antigone a enterré le corps de Polynice.", "vrai": false}]}, {"type": "libre", "numero": "3", "points": 1, "enonce": "De quoi Ismène cherche-t-elle à convaincre Antigone ?", "correction": "Ismène cherche à convaincre Antigone de ne pas enterrer son frère Polynice."}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Relevez deux arguments utilisés par Ismène.", "correction": "Deux arguments utilisés par Ismène : **Exemples** : « *Il est plus fort que nous* » ; « *je ne suis pas courageuse.* » (1/2pt x 2)"}, {"type": "choix", "numero": "5", "points": 1, "enonce": "Comment trouvez-vous Antigone dans ce passage ? Recopiez la bonne réponse. Justifiez-la.", "options": ["Elle est ouverte au dialogue.", "Elle est hésitante.", "Elle est obstinée, plus décidée."], "bonne": 2}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez dans le texte quatre mots appartenant au champ lexical des sentiments.", "correction": "Quatre mots appartenant au champ lexical des sentiments : Exemples : « haine », « souffrir », « supplice », « sentir ». (1/4ptx4)"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "« ISMENE *se jette contre elle*. » Qu'est-ce qui justifie l'emploi de cette didascalie ?", "correction": "Exemple : Sentant que sa sœur est loin d'être convaincue, Ismène la supplie une dernière fois."}, {"type": "choix", "numero": "8", "points": 1, "enonce": "« *Il est plus fort que nous* ». La figure de style employée dans cette phrase est-elle :", "options": ["une comparaison ?", "une métaphore ?", "une hyperbole ?"], "bonne": 0}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Antigone dit : « *Je ne suis pas belle*. » Pour vous, qu'est-ce qu'être beau (être belle) ? Justifiez votre réponse.", "correction": "Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Pour Ismène, une fille ne meurt pas pour ses idées. Etes-vous du même avis ? Justifiez votre réponse.", "correction": "Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "*« Aujourd'hui, pour vivre en toute tranquillité, il faut éviter tout contact avec les voisins. »*\n\nPartagez-vous ce point de vue ?\n\nDéveloppez votre réflexion en vous appuyant sur des arguments précis.\n\n| ***Critères d'évaluation du discours*** | | ***Critères d'évaluation de la langue*** | |\n|---|---|---|---|\n| Conformité de la production à la consigne d'écriture | 5PTS | Vocabulaire (usage de termes précis et variés) | 5PTS |\n| Cohérence de l'argumentation | | Syntaxe (construction de phrases correctes) | |\n| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |\n| | | Orthographe d'usage et grammaticale (respect des règles) | |\n| | | Conjugaison (emploi des temps) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
