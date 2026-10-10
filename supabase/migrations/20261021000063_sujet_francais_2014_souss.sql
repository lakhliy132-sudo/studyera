-- Sujet de français, examen régional 2014 (session normale), académie
-- Souss-Massa, sur Le Dernier Jour d'un condamné.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2014 جهة سوس ماسة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie « جهة سوس ماسة درعة » (Souss-Massa-Drâa,
-- avant le découpage régional de 2015, aujourd'hui Souss-Massa) ;
-- « الدورة العادية يونيو 2014 », durée « ساعتان ». Coefficient : 3 pour
-- sciences économiques et gestion, 4 pour les autres séries.
-- La feuille ne note pas chaque question : elle porte « I - COMPREHENSION :
-- 10 points (1ptx10) », d'où le barème « 1pt » par question ; le détail
-- (1/4pt, 1/2pt) vient du corrigé. La question 2 (a et b) vaut 1pt en tout.
-- Grille de production écrite : la note de la colonne « langue » est
-- coupée au bord de la page (« 5pt » sur le sujet, « 5 » sur le corrigé).
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2014,
  $sujet$normale$sujet$,
  $sujet$Souss-Massa$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences économiques et gestion, sciences et technologies électriques, sciences et technologies mécaniques, arts appliqués$sujet$,
  120,
  $sujet$## Texte

L'espérance vint rayonner en moi comme le jour autour de moi ; et, confiant, j'attendis ma sentence comme on attend la délivrance et la vie.

Cependant mon avocat arriva. On l'attendait. Il venait de déjeuner copieusement et de bon appétit. Parvenu à sa place, il se pencha vers moi avec un sourire.

– J'espère, me dit-il.

– N'est-ce pas ? répondis-je, léger et souriant aussi.

– Oui, reprit-il; je ne sais rien encore de leur déclaration, mais ils auront sans doute écarté la préméditation, et alors ce ne sera que les travaux forcés à perpétuité.

– Que dites-vous là, monsieur? répliquai-je indigné ; plutôt cent fois la mort!

Oui, la mort! – Et d'ailleurs, me répétait je ne sais quelle voix intérieure, qu'est-ce que je risque à dire cela ? A-t-on jamais prononcé sentence de mort autrement qu'à minuit, aux flambeaux, dans une salle sombre et noire, et par une froide nuit de pluie et d'hiver? Mais au mois d'août, à huit heures du matin, un si beau jour, ces bons jurés, c'est impossible! Et mes yeux revenaient se fixer sur la jolie fleur jaune au soleil.

Tout à coup le président, qui n'attendait que l'avocat, m'invita à me lever. La troupe porta les armes; comme par un mouvement électrique, toute l'assemblée fut debout au même instant. Une figure insignifiante et nulle, placée à une table au-dessous du tribunal, c'était, je pense, le greffier, prit la parole, et lut le verdict que les jurés avaient prononcé en mon absence. Une sueur froide sortit de tous mes membres; je m'appuyai au mur pour ne pas tomber.

– Avocat, avez-vous quelque chose à dire sur l'application de la peine? demanda le président.

J'aurais eu, moi, tout à dire, mais rien ne me vint. Ma langue resta collée à mon palais.

Le défenseur se leva.

Je compris qu'il cherchait à atténuer la déclaration du jury, et à mettre dessous, au lieu de la peine qu'elle provoquait, l'autre peine, celle que j'avais été si blessé de lui voir espérer.

Il fallut que l'indignation fût bien forte, pour se faire jour à travers les mille émotions qui se disputaient ma pensée. Je voulus répéter à haute voix ce que je lui avais déjà dit: Plutôt cent fois la mort! Mais l'haleine me manqua et je ne pus que l'arrêter rudement par le bras, en criant avec une force convulsive⁽*⁾: Non!

Le procureur général combattit l'avocat, et je l'écoutai avec une satisfaction stupide. Puis les juges sortirent, puis ils rentrèrent, et le président me lut mon arrêt.

– Condamné à mort! dit la foule.

*\*- convulsive : involontaire et violente.*

## I. Étude de texte (10 points)

**1.** En vous référant à l'œuvre dont le texte est extrait, recopiez et complétez : **(1pt)**

| L'auteur | Le titre | Le genre | Le siècle |
|---|---|---|---|
| | | | |

**2a.** Où se passe la scène ? Justifiez votre réponse. **(1pt)**

**2b.** En quelle saison ? Justifiez votre réponse.

**3.** Quel est le sentiment du narrateur avant le jugement ? **(1pt)**

**4.** Le narrateur accepte-il le point de vue de son avocat ? Justifiez votre réponse. **(1pt)**

**5.** Comment le narrateur a-t-il réagi après la déclaration du jugement ? **(1pt)**

**6.** Relevez 4 mots appartenant au champ lexical de la justice. **(1pt)**

**7.** Le narrateur décrit-il le greffier de manière valorisante ou dévalorisante ? Justifiez votre réponse. **(1pt)**

**8.** Recopiez et complétez le tableau suivant: (Enoncé : « *L'espérance vint rayonner en moi* ».) **(1pt)**

| Figure de style | Niveau de langue |
|---|---|
| | |

**9.** Selon vous, la foule (le public) doit-elle être présente au tribunal pendant un procès ? Pourquoi ? (2 à 3 phrases). **(1pt)**

**10.** Votre point de vue sur la peine de mort a-t-il changé après la lecture de l'œuvre ? Justifiez votre réponse. (2 à 3 phrases) **(1pt)**

## II. Production écrite (10 points)

« Aujourd'hui, la plupart des familles marocaines n'aiment plus les vacances d'été. »

Partagez-vous ce point de vue ?

Dans un texte bien construit, vous exprimerez votre opinion à l'aide d'arguments précis.

| ***Critères d'évaluation du discours*** | | ***Critères d'évaluation de la langue*** | |
|---|---|---|---|
| | 5pts | Vocabulaire (usage de termes précis et variés) | 5pts |
| Conformité de la production à la consigne d'écriture | | Syntaxe (construction de phrases correctes) | |
| Cohérence de l'argumentation | | Ponctuation (usage d'une ponctuation adéquate | |
| Structure du texte (organisation et progression du texte) | | Orthographe d'usage et grammaticale (respect des règles) | |
| | | Conjugaison (emploi des temps) | |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute réponse (ou formulation) non prévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** **(1pt)**

| L'auteur | Le titre | Le genre | Le siècle |
|---|---|---|---|
| Victor HUGO | Le dernier jour d'un condamné | Roman (roman à thèse) | 19ème siècle |

**2a.** Au tribunal(palais de justice). (1/4pt) Justification: EX: - « *Tout à coup le président, qui n'attendait que l'avocat, m'invita à me lever*. » - « *toute l'assemblée fut debout*. » - … (1/4pt) **(1pt)**

**2b.** En été. (1/4pt) Justification : *au mois d'août*. (1/4pt)

**3.** Ex : Il était *confiant, léger et souriant*, plein d'espérance, optimiste, … **(1pt)**

**4.** Non. (1/2pt) Justification : Ex: « *Plutôt cent fois la mort !* » Il préférait la mort aux travaux forcés à perpétuité. (1/2pt) **(1pt)**

**5.** Réaction du narrateur : Ex :- *Une sueur froide sortit de tous mes membres.* - *Je m'appuyai au mur pour ne pas tomber.* - *Ma langue resta collée à mon palais.* - *Mais l'haleine me manqua et je … Non !* **(1pt)**

**6.** Ex: sentence, président, avocat, préméditation, condamné à mort,… (1/4ptx4) **(1pt)**

**7.** dévalorisante. (1/2pt) Justification: Une figure insignifiante et nulle, placée à une table au-dessous du tribunal. (1/2pt) **(1pt)**

**8.** **(1pt)**

| Figure de style | Niveau de langue |
|---|---|
| Métaphore | Soutenu |

**9.** Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue. (2 à 3 phrases) **(1pt)**

**10.** Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue. (2 à 3 phrases) **(1pt)**

### II. Production écrite

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| | 5pts | Vocabulaire (usage de termes précis et variés) | 5 |
| Conformité de la production à la consigne d'écriture | | Syntaxe (construction de phrases correctes) | |
| Cohérence de l'argumentation | | Ponctuation (usage d'une ponctuation adéquate | |
| Structure du texte (organisation et progression du texte) | | Orthographe d'usage et grammaticale (respect des règles) | |
| | | Conjugaison (emploi des temps) | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "L'espérance vint rayonner en moi comme le jour autour de moi ; et, confiant, j'attendis ma sentence comme on attend la délivrance et la vie.\n\nCependant mon avocat arriva. On l'attendait. Il venait de déjeuner copieusement et de bon appétit. Parvenu à sa place, il se pencha vers moi avec un sourire.\n\n– J'espère, me dit-il.\n\n– N'est-ce pas ? répondis-je, léger et souriant aussi.\n\n– Oui, reprit-il; je ne sais rien encore de leur déclaration, mais ils auront sans doute écarté la préméditation, et alors ce ne sera que les travaux forcés à perpétuité.\n\n– Que dites-vous là, monsieur? répliquai-je indigné ; plutôt cent fois la mort!\n\nOui, la mort! – Et d'ailleurs, me répétait je ne sais quelle voix intérieure, qu'est-ce que je risque à dire cela ? A-t-on jamais prononcé sentence de mort autrement qu'à minuit, aux flambeaux, dans une salle sombre et noire, et par une froide nuit de pluie et d'hiver? Mais au mois d'août, à huit heures du matin, un si beau jour, ces bons jurés, c'est impossible! Et mes yeux revenaient se fixer sur la jolie fleur jaune au soleil.\n\nTout à coup le président, qui n'attendait que l'avocat, m'invita à me lever. La troupe porta les armes; comme par un mouvement électrique, toute l'assemblée fut debout au même instant. Une figure insignifiante et nulle, placée à une table au-dessous du tribunal, c'était, je pense, le greffier, prit la parole, et lut le verdict que les jurés avaient prononcé en mon absence. Une sueur froide sortit de tous mes membres; je m'appuyai au mur pour ne pas tomber.\n\n– Avocat, avez-vous quelque chose à dire sur l'application de la peine? demanda le président.\n\nJ'aurais eu, moi, tout à dire, mais rien ne me vint. Ma langue resta collée à mon palais.\n\nLe défenseur se leva.\n\nJe compris qu'il cherchait à atténuer la déclaration du jury, et à mettre dessous, au lieu de la peine qu'elle provoquait, l'autre peine, celle que j'avais été si blessé de lui voir espérer.\n\nIl fallut que l'indignation fût bien forte, pour se faire jour à travers les mille émotions qui se disputaient ma pensée. Je voulus répéter à haute voix ce que je lui avais déjà dit: Plutôt cent fois la mort! Mais l'haleine me manqua et je ne pus que l'arrêter rudement par le bras, en criant avec une force convulsive⁽*⁾: Non!\n\nLe procureur général combattit l'avocat, et je l'écoutai avec une satisfaction stupide. Puis les juges sortirent, puis ils rentrèrent, et le président me lut mon arrêt.\n\n– Condamné à mort! dit la foule.\n\n*\\*- convulsive : involontaire et violente.*", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "En vous référant à l'œuvre dont le texte est extrait, recopiez et complétez :", "champs": [{"libelle": "L'auteur", "reponse": "Victor HUGO"}, {"libelle": "Le titre", "reponse": "Le dernier jour d'un condamné"}, {"libelle": "Le genre", "reponse": "Roman (roman à thèse)"}, {"libelle": "Le siècle", "reponse": "19ème siècle"}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Où se passe la scène ? Justifiez votre réponse.", "correction": "Au tribunal(palais de justice). (1/4pt) Justification: EX: - « *Tout à coup le président, qui n'attendait que l'avocat, m'invita à me lever*. » - « *toute l'assemblée fut debout*. » - … (1/4pt)"}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "En quelle saison ? Justifiez votre réponse.", "correction": "En été. (1/4pt) Justification : *au mois d'août*. (1/4pt)"}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Quel est le sentiment du narrateur avant le jugement ?", "correction": "Ex : Il était *confiant, léger et souriant*, plein d'espérance, optimiste, …"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Le narrateur accepte-il le point de vue de son avocat ? Justifiez votre réponse.", "correction": "Non. (1/2pt) Justification : Ex: « *Plutôt cent fois la mort !* » Il préférait la mort aux travaux forcés à perpétuité. (1/2pt)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Comment le narrateur a-t-il réagi après la déclaration du jugement ?", "correction": "Réaction du narrateur : Ex :- *Une sueur froide sortit de tous mes membres.* - *Je m'appuyai au mur pour ne pas tomber.* - *Ma langue resta collée à mon palais.* - *Mais l'haleine me manqua et je … Non !*"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez 4 mots appartenant au champ lexical de la justice.", "correction": "Ex: sentence, président, avocat, préméditation, condamné à mort,… (1/4ptx4)"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Le narrateur décrit-il le greffier de manière valorisante ou dévalorisante ? Justifiez votre réponse.", "correction": "dévalorisante. (1/2pt) Justification: Une figure insignifiante et nulle, placée à une table au-dessous du tribunal. (1/2pt)"}, {"type": "tableau", "numero": "8", "points": 1, "enonce": "Recopiez et complétez le tableau suivant: (Enoncé : « *L'espérance vint rayonner en moi* ».)", "champs": [{"libelle": "Figure de style", "reponse": "Métaphore"}, {"libelle": "Niveau de langue", "reponse": "Soutenu"}]}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Selon vous, la foule (le public) doit-elle être présente au tribunal pendant un procès ? Pourquoi ? (2 à 3 phrases).", "correction": "Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue. (2 à 3 phrases)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Votre point de vue sur la peine de mort a-t-il changé après la lecture de l'œuvre ? Justifiez votre réponse. (2 à 3 phrases)", "correction": "Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue. (2 à 3 phrases)"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "« Aujourd'hui, la plupart des familles marocaines n'aiment plus les vacances d'été. »\n\nPartagez-vous ce point de vue ?\n\nDans un texte bien construit, vous exprimerez votre opinion à l'aide d'arguments précis.\n\n| ***Critères d'évaluation du discours*** | | ***Critères d'évaluation de la langue*** | |\n|---|---|---|---|\n| | 5pts | Vocabulaire (usage de termes précis et variés) | 5pts |\n| Conformité de la production à la consigne d'écriture | | Syntaxe (construction de phrases correctes) | |\n| Cohérence de l'argumentation | | Ponctuation (usage d'une ponctuation adéquate | |\n| Structure du texte (organisation et progression du texte) | | Orthographe d'usage et grammaticale (respect des règles) | |\n| | | Conjugaison (emploi des temps) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
