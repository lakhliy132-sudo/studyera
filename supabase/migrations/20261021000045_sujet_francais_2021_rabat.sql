-- Sujet de français, examen régional 2021 (session normale), académie
-- Rabat-Salé-Kénitra, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2021 جهة الرباط سلا القنيطرة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Rabat-Salé-Kénitra, session normale (« الدورة العادية 2021 »),
-- sujet des « الشعب العلمية والتقنية » (code S1.ST ; le corrigé porte « القطب العلمي
-- و التقني و المهني »), durée « (2) ساعتان » ; aucun coefficient sur la feuille.
-- Le sujet se présente comme une copie à remplir (lignes pointillées, cadres
-- « لا يكتب شيء في هذا الإطار », dernière page de lignes vides) : ces éléments ne
-- sont pas reproduits. La feuille ne donne pas de critères pour la production
-- écrite ; seule la grille du corrigé est reportée.
-- Question 8 : le corrigé donne pour toute la partie « Réagir » : « Admettre les
-- réponses bien formulées et conformes aux consignes. »
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2021,
  $sujet$normale$sujet$,
  $sujet$Rabat-Salé-Kénitra$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Séries scientifiques et techniques$sujet$,
  120,
  $sujet$## Texte

Mon père se recueillit un moment.

– Je vous laisserai seuls pendant un mois. Je tâcherai de ne rien dépenser de mon salaire, il me sera possible de remettre l'atelier en marche dès mon retour.

Un grand silence s'établit, un silence lourd, moite, huileux et noir comme la suie. J'étouffais. Je désirais de toutes mes forces qu'une porte claquât, qu'une voisine poussât un cri de joie ou un gémissement de douleur, que quelque événement extraordinaire survînt pour rompre cette angoisse. Je voulais parler, dire n'importe quelle sottise mais ma gorge se serra et une plainte expira sur mes lèvres.

Mes parents ne bougeaient pas, se transformaient peu à peu en personnages de cauchemar. Plus j'écarquillais les yeux pour les voir, plus ils devenaient fluides, insaisissables, tantôt transparents, tantôt d'un noir agressif, mais sans contours précis. Pour la première fois, j'eus la sensation du vide absolu, de la solitude sans miséricorde. Mon cœur se remplit de peine. Une boule dure se forma dans ma poitrine, gênant ma respiration. Je fermai les yeux. Je priai avec ferveur. Je me sentais abandonné aux portes de l'Enfer.

**[…]**

Mon père nous quitta le surlendemain à l'aube. Il partit, avec pour tout bagage, une sacoche de berger, en palmier nain, dont il avait fait l'acquisition la veille, une faucille neuve et un sac en toile, avec une fermeture à coulisse. Ma mère l'avait confectionné dans un morceau de *haïk* de coton et l'avait bourré de provisions : olives noires, figues sèches, farine grillée et sucrée, deux pains parfumés à l'anis et dix *qarchalas*. Nous appelons ainsi des petits pains ronds sucrés, parfumés à l'anis et à la fleur d'oranger et décorés de grains de sésame.

J'étais réveillé quand mon père partit. Ma mère lui fit quelques recommandations et resta après son départ, prostrée sur son lit, le visage caché dans ses deux mains. J'eus la sensation que nous étions abandonnés, que nous étions devenus orphelins.

Tout le monde dans le quartier devait être au courant de nos ennuis matériels et du départ de mon père. Ils manifesteraient à notre égard une pitié ostentatoire plus humiliante que le pire mépris. Mon père parti, nous restions sans soutien, sans défense.

Le père, dans une famille comme la nôtre, représente une protection occulte. Point n'est besoin qu'il soit riche, son prestige moral donne force, équilibre, assurance et respectabilité.

## I. Étude de texte (10 points)

**1.** Complétez le tableau suivant : **(0,25x4= 1 pt)**

| Auteur | Titre | Genre | Siècle |
|---|---|---|---|
| | | | |

**2a.** Pour situer ce passage, répondez à ces deux questions : Pour quelle raison le père quitte-t-il sa femme et son fils unique ? **(0.5x2= 1 pt)**

**2b.** Quel métier va-t-il exercer ?

**3a.** « Un grand *silence s'établit, un silence lourd, moite, huileux et noir.* » A quoi est dû ce silence, quelle en est la raison ? **(1 pt)**

**3b.** Relevez deux des figures de style contenues dans cette phrase. **(05x2= 1 pt)**

**4a.** Dans le paragraphe : « Mes parents… l'Enfer », Quel est le sentiment dominant ? **(0.5 pt)**

**4b.** Justifiez à l'aide de 4 mots (ou expressions). **(0.5 pt)**

**5.** Transformez cette phrase au discours indirect : Mon père [nous annonça] : « *Je vous laisserai seuls pendant un mois. Je tâcherai de ne rien dépenser de mon salaire.* »

**6.** Complétez d'après le texte (**deux** [souligné sur la feuille, en gras ici] mots ou expressions par ligne) : Réactions et sentiments après le départ du père **(0.25x4= 1 pt)**

| La femme | La femme et l'enfant |
|---|---|
| | |

**7a.** Réactions des voisins : Comment les voisins réagiraient-ils par rapport au départ du père ? **(0.5 pt)**

**7b.** Pourquoi le narrateur craint-il cette réaction ? **(0.5 pt)**

**8.** Que pensez-vous de la décision du père de quitter sa famille ? Développez votre réponse en deux lignes maximum. **(2 pts)**

## II. Production écrite (10 points)

Dans *la Boite à merveilles*, les femmes sont, comme ce fut le cas autrefois, ignorantes, soumises et superstitieuses. Pensez-vous personnellement qu'il en est toujours de même (que c'est toujours le cas) dans la société marocaine d'aujourd'hui ?

Développez votre point de vue en vous appuyant sur des arguments et des exemples précis.$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponse et barème de notation : NB : Les réponses non prévues dépendront de l'appréciation du correcteur.*

### I. Étude de texte

**1.** **(0,25x4= 1 pt)**

| Auteur | Titre | Genre | Siècle |
|---|---|---|---|
| Ahmed Sefrioui | La Boîte à merveilles | roman autobiographique | XXème siècle |

**2a.** Le père quitte sa femme et son fils unique car il a perdu tout son capital au souk des enchères. **(0.5x2= 1 pt)**

**2b.** Il va travailler comme moissonneur.

**3a.** Ce silence est dû à l'annonce du père de partir seul et d'abandonner provisoirement sa famille. **(1 pt)**

**3b.** (2/3) Anaphore (Répétition) - Gradation - Métaphore. (0,x2= 1 pt) **(05x2= 1 pt)**

**4a.** Le sentiment dominant : la peur, l'angoisse, etc. **(0.5 pt)**

**4b.** Justification : cauchemar / noir agressif / vide absolu / la solitude sans miséricorde / cœur se remplit de peine / Une boule dans ma poitrine / gêner la respiration, etc. **(0.5 pt)**

**5.** Mon père nous annonça qu'il nous laisserait seuls pendant un mois et qu'il tâcherait de ne rien dépenser de son salaire. (1 pt)

**6.** **(0.25x4= 1 pt)**

| La femme | La femme et l'enfant |
|---|---|
| Prostrée / le visage caché dans ses deux mains | Nous étions abandonnés / nous étions devenus orphelins / (sans soutien, sans défense) |

**7a.** « Une pitié ostentatoire ». **(0.5 pt)**

**7b.** « plus humiliante que le pire mépris. » **(0.5 pt)**

**8.** Admettre les réponses bien formulées et conformes aux consignes. **(2 pts)**

### II. Production écrite

La correction de l'épreuve de production écrite tiendra compte des critères suivants :

| | |
|---|---|
| **Critères d'évaluation du discours produit.** | **5pts** |
| - Cohérence des idées. | 2pts |
| - Structure du texte (Organisation et progression) | 2pts |
| - Respect de la consigne. | 1pt |
| **Critères d'évaluation de la langue.** | **5pts** |
| - Vocabulaire (utilisation de termes précis et variés) | 1pt |
| - Ponctuation (utilisation d'une ponctuation appropriée) | 1pt |
| - Syntaxe (construction de phrases correctes et variées) | 1pt |
| - Orthographe d'usage et grammaticale (respect des règles) | 1pt |
| - Conjugaison (emploi et concordance des temps) | 1pt |

**IMPORTANT :**

- Les correcteurs sont priés de bien vouloir respecter le barème de notation de l'épreuve de production.
- Les correcteurs sont conviés à accepter tout plan argumentatif mis en œuvre par le candidat (binaire, dialectique, analytique…)
- Il est recommandé d'éviter tout recours injustifié à la mention « hors sujet ».$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions suivantes :", "texte": "Mon père se recueillit un moment.\n\n– Je vous laisserai seuls pendant un mois. Je tâcherai de ne rien dépenser de mon salaire, il me sera possible de remettre l'atelier en marche dès mon retour.\n\nUn grand silence s'établit, un silence lourd, moite, huileux et noir comme la suie. J'étouffais. Je désirais de toutes mes forces qu'une porte claquât, qu'une voisine poussât un cri de joie ou un gémissement de douleur, que quelque événement extraordinaire survînt pour rompre cette angoisse. Je voulais parler, dire n'importe quelle sottise mais ma gorge se serra et une plainte expira sur mes lèvres.\n\nMes parents ne bougeaient pas, se transformaient peu à peu en personnages de cauchemar. Plus j'écarquillais les yeux pour les voir, plus ils devenaient fluides, insaisissables, tantôt transparents, tantôt d'un noir agressif, mais sans contours précis. Pour la première fois, j'eus la sensation du vide absolu, de la solitude sans miséricorde. Mon cœur se remplit de peine. Une boule dure se forma dans ma poitrine, gênant ma respiration. Je fermai les yeux. Je priai avec ferveur. Je me sentais abandonné aux portes de l'Enfer.\n\n**[…]**\n\nMon père nous quitta le surlendemain à l'aube. Il partit, avec pour tout bagage, une sacoche de berger, en palmier nain, dont il avait fait l'acquisition la veille, une faucille neuve et un sac en toile, avec une fermeture à coulisse. Ma mère l'avait confectionné dans un morceau de *haïk* de coton et l'avait bourré de provisions : olives noires, figues sèches, farine grillée et sucrée, deux pains parfumés à l'anis et dix *qarchalas*. Nous appelons ainsi des petits pains ronds sucrés, parfumés à l'anis et à la fleur d'oranger et décorés de grains de sésame.\n\nJ'étais réveillé quand mon père partit. Ma mère lui fit quelques recommandations et resta après son départ, prostrée sur son lit, le visage caché dans ses deux mains. J'eus la sensation que nous étions abandonnés, que nous étions devenus orphelins.\n\nTout le monde dans le quartier devait être au courant de nos ennuis matériels et du départ de mon père. Ils manifesteraient à notre égard une pitié ostentatoire plus humiliante que le pire mépris. Mon père parti, nous restions sans soutien, sans défense.\n\nLe père, dans une famille comme la nôtre, représente une protection occulte. Point n'est besoin qu'il soit riche, son prestige moral donne force, équilibre, assurance et respectabilité.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Complétez le tableau suivant :", "champs": [{"libelle": "Auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Titre", "reponse": "La Boîte à merveilles"}, {"libelle": "Genre", "reponse": "roman autobiographique"}, {"libelle": "Siècle", "reponse": "XXème siècle"}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Pour situer ce passage, répondez à ces deux questions : Pour quelle raison le père quitte-t-il sa femme et son fils unique ?", "correction": "Le père quitte sa femme et son fils unique car il a perdu tout son capital au souk des enchères."}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "Quel métier va-t-il exercer ?", "correction": "Il va travailler comme moissonneur."}, {"type": "libre", "numero": "3a", "points": 1, "enonce": "« Un grand *silence s'établit, un silence lourd, moite, huileux et noir.* » A quoi est dû ce silence, quelle en est la raison ?", "correction": "Ce silence est dû à l'annonce du père de partir seul et d'abandonner provisoirement sa famille."}, {"type": "libre", "numero": "3b", "points": 1, "enonce": "Relevez deux des figures de style contenues dans cette phrase.", "correction": "(2/3) Anaphore (Répétition) - Gradation - Métaphore. (0,x2= 1 pt)"}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Dans le paragraphe : « Mes parents… l'Enfer », Quel est le sentiment dominant ?", "correction": "Le sentiment dominant : la peur, l'angoisse, etc."}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "Justifiez à l'aide de 4 mots (ou expressions).", "correction": "Justification : cauchemar / noir agressif / vide absolu / la solitude sans miséricorde / cœur se remplit de peine / Une boule dans ma poitrine / gêner la respiration, etc."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Transformez cette phrase au discours indirect : Mon père [nous annonça] : « *Je vous laisserai seuls pendant un mois. Je tâcherai de ne rien dépenser de mon salaire.* »", "correction": "Mon père nous annonça qu'il nous laisserait seuls pendant un mois et qu'il tâcherait de ne rien dépenser de son salaire. (1 pt)"}, {"type": "tableau", "numero": "6", "points": 1, "enonce": "Complétez d'après le texte (**deux** [souligné sur la feuille, en gras ici] mots ou expressions par ligne) : Réactions et sentiments après le départ du père", "champs": [{"libelle": "La femme", "reponse": "Prostrée / le visage caché dans ses deux mains"}, {"libelle": "La femme et l'enfant", "reponse": "Nous étions abandonnés / nous étions devenus orphelins / (sans soutien, sans défense)"}]}, {"type": "libre", "numero": "7a", "points": 0.5, "enonce": "Réactions des voisins : Comment les voisins réagiraient-ils par rapport au départ du père ?", "correction": "« Une pitié ostentatoire »."}, {"type": "libre", "numero": "7b", "points": 0.5, "enonce": "Pourquoi le narrateur craint-il cette réaction ?", "correction": "« plus humiliante que le pire mépris. »"}, {"type": "libre", "numero": "8", "points": 2, "enonce": "Que pensez-vous de la décision du père de quitter sa famille ? Développez votre réponse en deux lignes maximum.", "correction": "Admettre les réponses bien formulées et conformes aux consignes."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "Dans *la Boite à merveilles*, les femmes sont, comme ce fut le cas autrefois, ignorantes, soumises et superstitieuses. Pensez-vous personnellement qu'il en est toujours de même (que c'est toujours le cas) dans la société marocaine d'aujourd'hui ?\n\nDéveloppez votre point de vue en vous appuyant sur des arguments et des exemples précis.", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
