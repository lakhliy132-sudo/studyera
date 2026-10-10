-- Sujet de français, examen régional 2020 (session normale), académie
-- Laâyoune-Sakia El Hamra, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2020 جهة العيون الساقية الحمراء »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Laâyoune-Sakia El Hamra, « الدورة العادية 2020 », « المترشحون
-- الرسميون », « مدة الإنجاز : 2 س », code « 105 », coefficient 3 (sciences
-- économiques et gestion) ou 4 (sciences expérimentales, mathématiques,
-- sciences et technologies) : laissé vide.
-- Le PDF ne contient qu'un sujet (pages 1-2, La Boîte à merveilles), mais
-- trois corrigés : pages 3-4, corrigé d'une épreuve sur Le Dernier Jour d'un
-- condamné (annoté « DJC » à la main), pages 5-6, corrigé d'une épreuve sur
-- Antigone, dont les sujets ne figurent pas dans le PDF : ces quatre pages
-- sont ignorées. Le corrigé du sujet présent est aux pages 7-8 (« عناصر
-- الإجابة », annoté « La boîte à merveilles » à la main).
-- Le texte imprimé porte « dussé-je mendi:r » (lettre abîmée au scan),
-- rendu « mendier ». Question 3 : « (1pt) » sur la feuille, « (0,5x2 pts) »
-- dans le corrigé. La question 5 est découpée en 5A et 5B comme sur la
-- feuille, chacune avec son barème.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2020,
  $sujet$normale$sujet$,
  $sujet$Laâyoune-Sakia El Hamra$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Sciences économiques et gestion ; Sciences expérimentales – Sciences mathématiques – Sciences et technologies$sujet$,
  120,
  $sujet$## Texte

Elle éclata franchement de rire. Sa gaîté soudain me rendit toute ma confiance. Je ris plus fort qu'elle ; je battis des mains. Ma mère mit son index sur les lèvres et me dit :

– Que diraient les voisins s'ils t'entendaient rire de la sorte le jour du départ de ton père ?

– Mon père reviendra bientôt et nous serons de nouveau très riches.

– Mais nous n'avons jamais été riches.

– Si, nous n'avions pas faim ; et notre chambre n'est-elle pas la plus jolie de la maison ?

– Repose-toi, mon petit ; tant que je serai vivante, tu n'auras jamais faim, dussé-je mendier.

Quelqu'un gratta timidement à la porte. Ma mère se leva.

– Qui est là ? dit-elle tout en se dirigeant vers le couloir d'entrée. Suivit un long conciliabule, tout en murmures et en chuchotements. J'entendis finalement ma mère dire d'une voix pressante :

– Entre, Fatma ! Entre et donne-le-lui toi-même ; à moi il refusera, il est si entêté ! Entre donc !

Fatma Bziouya parut. Elle tenait à la main un bol fumant. Elle s'approcha de moi, me fit un large sourire et me demanda :

– Comment te sens-tu ce matin, *fqih* !

Je ne répondis rien. Je ne voulais engager aucune conversation avec cette femme qui venait m'amadouer afin de me faire avaler quelque breuvage infect.

– J'ai préparé pour toi du *tadeffi* ! Ne voudrais-tu pas y goûter ?

*Lexique : Tadeffi : est une soupe marocaine à base d'ail, d'huile d'olive et de menthe sauvage.*

## I. Étude de texte (10 points)

**1.** A. CONTEXTUALISATION DU TEXTE — **Recopiez** et **complétez** le tableau suivant : **(0,25x4 pts)**

| Titre de l'œuvre | Auteur | Genre | Siècle |
|---|---|---|---|
| | | | |

**2.** Les événements racontés dans ce texte se déroulent-ils : **Choisissez** la bonne réponse. **(1pt)**

a- Avant la perte du capital ;  
b- Le jour du départ du père du narrateur ;  
c- Le jour de la disparition de Zineb ;  
d- Le jour des préparatifs pour l'Achoura.

**3.** B. ANALYSE DU TEXTE — D'après le texte que **signifie** être riche pour le narrateur ? **(1pt)**

**4.** « - Entre, Fatma ! Entre et donne-le-lui toi-même ; à moi il refusera, il est si **entêté** [souligné sur la feuille, en gras ici] !» Le mot souligné signifie : **Recopiez** la bonne réponse. **(0,5pt)**

a- Courageux  
b- Obstiné  
c- Timide  
d- Paresseux.

**5A.** Qu'est-ce que Fatma Bziouya a apporté au narrateur ? pourquoi ? **(0,5x2pts)**

**5B.** **Montrez** à partir du texte que le narrateur refuse de communiquer avec la visiteuse ? **(0,5pt)**

**6.** **Relevez** dans le texte une phrase comportant une caractérisation dévalorisante de Tadeffi. **(1pt)**

**7.** **« Elle éclata franchement de rire.»** Cet énoncé comporte : **(1pt)**

a- Une métonymie  
b- Une métaphore  
c- Une hyperbole.

**8.** **Relevez** dans le texte deux énoncés/expressions qui montrent **la joie** de la mère. **(0,5x2pts)**

**9.** C. REACTION PERSONNELLE — « *Je ne répondis rien. Je ne voulais engager aucune conversation avec cette femme…* » Approuvez-vous cette réaction de l'enfant. Répondez en justifiant votre point de vue. **(1pt)**

**10.** Fatma Bziouya rend visite à la mère du narrateur pour s'informer sur l'état de santé de l'enfant. Comment trouvez-vous son comportement ? Justifiez votre réponse. **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

Malgré le progrès que connait le domaine de la médecine aujourd'hui, certaines personnes préfèrent utiliser les plantes médicinales pour se soigner ou se protéger contre les maladies. Pensez-vous qu'ils ont raison ? Exposez votre point de vue dans un texte argumentatif en l'appuyant par des exemples précis.

**NB : Lors de la correction de votre production, il sera tenu compte des critères suivants :**

| Critères d'évaluation de la langue | | Critères d'évaluation du discours | |
|---|---|---|---|
| Vocabulaire (usage de termes précis et variés) | 5pts | Conformité de la production à la Consigne d'écriture | 5pts |
| Syntaxe (construction de phrases correctes) | | Cohérence de l'argumentation | |
| Ponctuation (usage d'une ponctuation adéquate) | | Structure du texte (organisation et progression du texte) | |
| Orthographe d'usage et grammaticale (respect des règles) | | | |
| Conjugaison (emploi des temps) | | | |$sujet$,
  $sujet$## Corrigé et barème

*NB- Les réponses non prévues sont laissées à l'appréciation des correcteurs.*

### I. Étude de texte

**1.** **(0,25x4 pts)**

| Titre de l'œuvre | Auteur | Genre | Siècle |
|---|---|---|---|
| La boîte à merveilles | Ahmed Sefrioui | Roman autobiographique | XX ème / 20 ème |

**2.** B. Le jour du départ du père du narrateur ; **(1pt)**

**3.** D'après le texte être riche pour le narrateur signifie : - Ne pas avoir faim, ; avoir une chambre plus jolie de la maison (0,5x2 pts) **(1pt)**

**4.** B. Obstiné. **(0,5pt)**

**5A.** Fatma Bziouya a apporté au narrateur un bol fumant / Tadeffi / *acceptez aussi* : Une soupe, un remède, une boisson à la menthe sauvage. Parce que l'enfant/narrateur est malade. **(0,5x2pts)**

**5B.** « Je ne répondis rien. » « Je ne voulais engager aucune conversation avec cette femme… » **(0,5pt)**

**6.** La phrase comportant une caractérisation dévalorisante de Tadeffi : « … breuvage infect. » **(1pt)**

**7.** - Une hyperbole. **(1pt)**

**8.** Les deux énoncés/expressions qui montrent la joie de la mère sont : « Elle éclata franchement de rire. » « Sa gaîté soudain… » **(0,5x2pts)**

**9.** - Accepter tout point de vue plausible, correctement formulé et structuré. **(1pt)**

**10.** - Accepter toute réponse plausible, correctement formulée et structurée. **(1pt)**

### II. Production écrite

**Lors de la correction, il sera tenu compte des critères suivants :**

| Critères d'évaluation de la langue | | Critères d'évaluation du discours | |
|---|---|---|---|
| Vocabulaire (usage de termes précis et variés) | 5pts | Conformité de la production à la Consigne d'écriture | 5pts |
| Syntaxe (construction de phrases correctes) | | Cohérence de l'argumentation | |
| Ponctuation (usage d'une ponctuation adéquate) | | Structure du texte (organisation et progression du texte) | |
| Orthographe d'usage et grammaticale (respect des règles) | | | |
| Conjugaison (emploi des temps) | | | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Elle éclata franchement de rire. Sa gaîté soudain me rendit toute ma confiance. Je ris plus fort qu'elle ; je battis des mains. Ma mère mit son index sur les lèvres et me dit :\n\n– Que diraient les voisins s'ils t'entendaient rire de la sorte le jour du départ de ton père ?\n\n– Mon père reviendra bientôt et nous serons de nouveau très riches.\n\n– Mais nous n'avons jamais été riches.\n\n– Si, nous n'avions pas faim ; et notre chambre n'est-elle pas la plus jolie de la maison ?\n\n– Repose-toi, mon petit ; tant que je serai vivante, tu n'auras jamais faim, dussé-je mendier.\n\nQuelqu'un gratta timidement à la porte. Ma mère se leva.\n\n– Qui est là ? dit-elle tout en se dirigeant vers le couloir d'entrée. Suivit un long conciliabule, tout en murmures et en chuchotements. J'entendis finalement ma mère dire d'une voix pressante :\n\n– Entre, Fatma ! Entre et donne-le-lui toi-même ; à moi il refusera, il est si entêté ! Entre donc !\n\nFatma Bziouya parut. Elle tenait à la main un bol fumant. Elle s'approcha de moi, me fit un large sourire et me demanda :\n\n– Comment te sens-tu ce matin, *fqih* !\n\nJe ne répondis rien. Je ne voulais engager aucune conversation avec cette femme qui venait m'amadouer afin de me faire avaler quelque breuvage infect.\n\n– J'ai préparé pour toi du *tadeffi* ! Ne voudrais-tu pas y goûter ?\n\n*Lexique : Tadeffi : est une soupe marocaine à base d'ail, d'huile d'olive et de menthe sauvage.*", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "A. CONTEXTUALISATION DU TEXTE — **Recopiez** et **complétez** le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "La boîte à merveilles"}, {"libelle": "Auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Genre", "reponse": "Roman autobiographique"}, {"libelle": "Siècle", "reponse": "XX ème / 20 ème"}]}, {"type": "choix", "numero": "2", "points": 1, "enonce": "Les événements racontés dans ce texte se déroulent-ils : **Choisissez** la bonne réponse.", "options": ["Avant la perte du capital ;", "Le jour du départ du père du narrateur ;", "Le jour de la disparition de Zineb ;", "Le jour des préparatifs pour l'Achoura."], "bonne": 1}, {"type": "libre", "numero": "3", "points": 1, "enonce": "B. ANALYSE DU TEXTE — D'après le texte que **signifie** être riche pour le narrateur ?", "correction": "D'après le texte être riche pour le narrateur signifie : - Ne pas avoir faim, ; avoir une chambre plus jolie de la maison (0,5x2 pts)"}, {"type": "choix", "numero": "4", "points": 0.5, "enonce": "« - Entre, Fatma ! Entre et donne-le-lui toi-même ; à moi il refusera, il est si **entêté** [souligné sur la feuille, en gras ici] !» Le mot souligné signifie : **Recopiez** la bonne réponse.", "options": ["Courageux", "Obstiné", "Timide", "Paresseux."], "bonne": 1}, {"type": "libre", "numero": "5A", "points": 1, "enonce": "Qu'est-ce que Fatma Bziouya a apporté au narrateur ? pourquoi ?", "correction": "Fatma Bziouya a apporté au narrateur un bol fumant / Tadeffi / *acceptez aussi* : Une soupe, un remède, une boisson à la menthe sauvage. Parce que l'enfant/narrateur est malade."}, {"type": "libre", "numero": "5B", "points": 0.5, "enonce": "**Montrez** à partir du texte que le narrateur refuse de communiquer avec la visiteuse ?", "correction": "« Je ne répondis rien. » « Je ne voulais engager aucune conversation avec cette femme… »"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "**Relevez** dans le texte une phrase comportant une caractérisation dévalorisante de Tadeffi.", "correction": "La phrase comportant une caractérisation dévalorisante de Tadeffi : « … breuvage infect. »"}, {"type": "choix", "numero": "7", "points": 1, "enonce": "**« Elle éclata franchement de rire.»** Cet énoncé comporte :", "options": ["Une métonymie", "Une métaphore", "Une hyperbole."], "bonne": 2}, {"type": "libre", "numero": "8", "points": 1, "enonce": "**Relevez** dans le texte deux énoncés/expressions qui montrent **la joie** de la mère.", "correction": "Les deux énoncés/expressions qui montrent la joie de la mère sont : « Elle éclata franchement de rire. » « Sa gaîté soudain… »"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "C. REACTION PERSONNELLE — « *Je ne répondis rien. Je ne voulais engager aucune conversation avec cette femme…* » Approuvez-vous cette réaction de l'enfant. Répondez en justifiant votre point de vue.", "correction": "- Accepter tout point de vue plausible, correctement formulé et structuré."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Fatma Bziouya rend visite à la mère du narrateur pour s'informer sur l'état de santé de l'enfant. Comment trouvez-vous son comportement ? Justifiez votre réponse.", "correction": "- Accepter toute réponse plausible, correctement formulée et structurée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nMalgré le progrès que connait le domaine de la médecine aujourd'hui, certaines personnes préfèrent utiliser les plantes médicinales pour se soigner ou se protéger contre les maladies. Pensez-vous qu'ils ont raison ? Exposez votre point de vue dans un texte argumentatif en l'appuyant par des exemples précis.\n\n**NB : Lors de la correction de votre production, il sera tenu compte des critères suivants :**\n\n| Critères d'évaluation de la langue | | Critères d'évaluation du discours | |\n|---|---|---|---|\n| Vocabulaire (usage de termes précis et variés) | 5pts | Conformité de la production à la Consigne d'écriture | 5pts |\n| Syntaxe (construction de phrases correctes) | | Cohérence de l'argumentation | |\n| Ponctuation (usage d'une ponctuation adéquate) | | Structure du texte (organisation et progression du texte) | |\n| Orthographe d'usage et grammaticale (respect des règles) | | | |\n| Conjugaison (emploi des temps) | | | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
