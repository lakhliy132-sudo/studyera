-- Sujet de français, examen régional 2013 (session de rattrapage), académie
-- Guelmim-Oued Noun, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2013 جهة كلميم واد نون »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie « جهة كلميم السمارة » (Guelmim-Es Semara,
-- avant le découpage régional de 2015, aujourd'hui Guelmim-Oued Noun) ;
-- « المترشحون الرسميون », « الدورة الاستدراكية 2013 » (session de rattrapage),
-- durée « ساعتان ». L'en-tête porte « المعامل: 4 » mais la ligne des filières
-- précise : 4 pour lettres et sciences humaines, sciences expérimentales,
-- sciences mathématiques, sciences et technologies ; 3 pour sciences
-- économiques et gestion. Coefficient donc laissé vide.
-- Questions 2, 3 et 7 (« 1 pt » chacune sur la feuille) découpées en a/b
-- selon le corrigé (0,5 pt chacune) ; questions 3a/3b : vrai ou faux avec
-- justification, saisies en questions libres.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2013,
  $sujet$rattrapage$sujet$,
  $sujet$Guelmim-Oued Noun$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies, sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

Heureusement pour moi, ces séances de bain étaient assez rares. Ma mère ne voulait point s'embarrasser de l'enfant empoté et maladroit que j'étais. Pendant son absence, j'étais livré à mes timides fantaisies. Je courais pieds nus dans le *derb*, imitant le pas cadencé des chevaux, je hennissais fièrement, envoyais des ruades. Parfois, je vidais simplement ma Boîte à Merveilles par terre et j'inventoriais mes trésors. Un simple bouton de porcelaine me mettait les sens en extase. Quand je l'avais longtemps regardé, j'en caressais des doigts la matière avec respect. Mais il y avait dans cet objet un élément qui ne pouvait être saisi ni par les yeux, ni par les doigts, une mystérieuse beauté intraduisible. Elle me fascinait. Je sentais toute mon impuissance à en jouir pleinement. Je pleurais presque de sentir autour de moi cette étrange chose invisible, impalpable, que je ne pouvais goûter de la langue, mais qui avait un goût et le pouvoir d'enivrer. Et cela s'incarnait dans un bouton de porcelaine et lui donnait ainsi une âme et une vertu de talisman.

Dans la Boîte à Merveilles, il y avait une foule d'objets hétéroclites qui, pour moi seul, avaient un sens : des boules de verre, des anneaux de cuivre, un minuscule cadenas sans clef, des clous à tête dorée, des encriers vides, des boutons décorés, des boutons sans décor.

Il y en avait en matière transparente, en métal, en nacre. Chacun de ces objets me parlait son langage. C'étaient là mes seuls amis. Bien sûr, j'avais des relations dans le monde de la légende avec des princes très vaillants et des géants au cœur tendre, mais ils habitaient les recoins cachés de mon imagination. Quant à mes boules de verre, mes boutons et mes clous, ils étaient là, à chaque instant, dans leur boîte rectangulaire, prêts à me porter secours dans mes heures de chagrin.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1pt)**

| Titre de l'œuvre | Auteur | Genre | Siècle |
|---|---|---|---|
| | | | |

**2a.** Quelle étape de sa vie le narrateur raconte-t-il dans cette œuvre ? **(1 pt)**

**2b.** Dans ce texte, le narrateur vient de sortir : (Choisissez la bonne réponse.)

a- de chez la Chouafa.  
b- de chez Lalla Aïcha.  
c- du bain maure.

**3a.** Répondez par vrai ou faux ; justifiez votre réponse : Le narrateur aimait aller au bain. **(1 pt)**

**3b.** Répondez par vrai ou faux ; justifiez votre réponse : La mère aimait accompagner son fils au bain.

**4.** Que faisait le narrateur en l'absence de sa mère ? (deux actions). **(1 pt)**

**5.** Citez quatre des objets que contenait la boîte à merveilles. **(1 pt)**

**6.** Parmi les objets de sa boîte, lequel le narrateur semble-t-il aimer le plus ? Justifiez votre réponse par un indice tiré du texte. **(1 pt)**

**7a.** « Chacun de ces objets me parlait son langage ». Quelle figure de style reconnaissez-vous dans cet énoncé ? **(1 pt)**

**7b.** Quel est l'effet recherché par l'emploi de cette figure ?

**8.** Relevez du texte quatre termes appartenant au champ lexical des sentiments. **(1 pt)**

**9.** Un objet (ou un jouet) peut-il à votre avis consoler pendant les heures de tristesse ? Justifiez votre réponse. (2 à 3 lignes). **(1 pt)**

**10.** Les jouets électroniques actuels sont-ils à votre avis meilleurs que les objets simples avec lesquels jouait Le narrateur ? Justifiez votre réponse. (2 à 3 lignes). **(1 pt)**

## II. Production écrite (10 points)

**Sujet :**

Vaut-il mieux à votre avis qu'un enfant joue tout seul, comme fait Sidi Mohammed avec les objets de sa boîte, ou avec des amis ? Justifiez votre point de vue en l'appuyant par des arguments.$sujet$,
  $sujet$## Corrigé et barème

*Barème et éléments de correction (à titre indicatif). Toute réponse non prévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** **(1pt)**

| Titre de l'œuvre | Auteur | Genre | Siècle |
|---|---|---|---|
| La boîte à merveilles. | Ahmed SEFRIOUI | Roman autobiographique. | 20ème |

**2a.** Il raconte son enfance (0,5 pt) **(1 pt)**

**2b.** du bain maure (0,5 pt)

**3a.** Faux. Justification : Heureusement pour moi ces séances de bain étaient assez rares. (0,5 pt) **(1 pt)**

**3b.** Faux. Justification : Ma mère ne voulait point s'embarrasser de l'enfant…. (0,5 pt)

**4.** Il courait pieds nus dans le *derb*, il vidait sa boîte à merveilles par terre, il envoyait des ruades, il hennissait… (0,5 pt x 2) **(1 pt)**

**5.** Des boules de verre, des anneaux de cuivre, un minuscule cadenas sans clef, des clous à tête dorée, des encriers vides, des boutons décorés, des boutons sans décor. (0,25 pt x 4) **(1 pt)**

**6.** a) un simple bouton de porcelaine. 0,5pt / Justification : Un simple bouton de porcelaine me mettait le sens en extase, beauté intraduisible, pouvoir d'enivrer ; etc.… (Accepter tout indice pertinent 0,5pt **(1 pt)**

**7a.** Personnification (0,5pt) **(1 pt)**

**7b.** Mise en valeur de ces objets auxquels il confère un pouvoir. (0,5pt)

**8.** Champ lexical des sentiments : pleurais, jouir, chagrin, extase, fascinait, fièrement… (0,25 pt x 4) **(1 pt)**

**9.** Réponse justifiée. **(1 pt)**

**10.** Point de vue justifié. **(1 pt)**

### II. Production écrite

**Critères d'évaluation du discours : 5 pts**

- Conformité de la production à la consigne d'écriture
- Cohérence de l'argumentation
- Organisation et progression du texte

**Critères d'évaluation de la langue : 5 pts**

- Correction de la langue (ponctuation, orthographe, syntaxe, vocabulaire, conjugaison)$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Heureusement pour moi, ces séances de bain étaient assez rares. Ma mère ne voulait point s'embarrasser de l'enfant empoté et maladroit que j'étais. Pendant son absence, j'étais livré à mes timides fantaisies. Je courais pieds nus dans le *derb*, imitant le pas cadencé des chevaux, je hennissais fièrement, envoyais des ruades. Parfois, je vidais simplement ma Boîte à Merveilles par terre et j'inventoriais mes trésors. Un simple bouton de porcelaine me mettait les sens en extase. Quand je l'avais longtemps regardé, j'en caressais des doigts la matière avec respect. Mais il y avait dans cet objet un élément qui ne pouvait être saisi ni par les yeux, ni par les doigts, une mystérieuse beauté intraduisible. Elle me fascinait. Je sentais toute mon impuissance à en jouir pleinement. Je pleurais presque de sentir autour de moi cette étrange chose invisible, impalpable, que je ne pouvais goûter de la langue, mais qui avait un goût et le pouvoir d'enivrer. Et cela s'incarnait dans un bouton de porcelaine et lui donnait ainsi une âme et une vertu de talisman.\n\nDans la Boîte à Merveilles, il y avait une foule d'objets hétéroclites qui, pour moi seul, avaient un sens : des boules de verre, des anneaux de cuivre, un minuscule cadenas sans clef, des clous à tête dorée, des encriers vides, des boutons décorés, des boutons sans décor.\n\nIl y en avait en matière transparente, en métal, en nacre. Chacun de ces objets me parlait son langage. C'étaient là mes seuls amis. Bien sûr, j'avais des relations dans le monde de la légende avec des princes très vaillants et des géants au cœur tendre, mais ils habitaient les recoins cachés de mon imagination. Quant à mes boules de verre, mes boutons et mes clous, ils étaient là, à chaque instant, dans leur boîte rectangulaire, prêts à me porter secours dans mes heures de chagrin.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "La boîte à merveilles."}, {"libelle": "Auteur", "reponse": "Ahmed SEFRIOUI"}, {"libelle": "Genre", "reponse": "Roman autobiographique."}, {"libelle": "Siècle", "reponse": "20ème"}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Quelle étape de sa vie le narrateur raconte-t-il dans cette œuvre ?", "correction": "Il raconte son enfance (0,5 pt)"}, {"type": "choix", "numero": "2b", "points": 0.5, "enonce": "Dans ce texte, le narrateur vient de sortir : (Choisissez la bonne réponse.)", "options": ["de chez la Chouafa.", "de chez Lalla Aïcha.", "du bain maure."], "bonne": 2}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "Répondez par vrai ou faux ; justifiez votre réponse : Le narrateur aimait aller au bain.", "correction": "Faux. Justification : Heureusement pour moi ces séances de bain étaient assez rares. (0,5 pt)"}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Répondez par vrai ou faux ; justifiez votre réponse : La mère aimait accompagner son fils au bain.", "correction": "Faux. Justification : Ma mère ne voulait point s'embarrasser de l'enfant…. (0,5 pt)"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Que faisait le narrateur en l'absence de sa mère ? (deux actions).", "correction": "Il courait pieds nus dans le *derb*, il vidait sa boîte à merveilles par terre, il envoyait des ruades, il hennissait… (0,5 pt x 2)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Citez quatre des objets que contenait la boîte à merveilles.", "correction": "Des boules de verre, des anneaux de cuivre, un minuscule cadenas sans clef, des clous à tête dorée, des encriers vides, des boutons décorés, des boutons sans décor. (0,25 pt x 4)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Parmi les objets de sa boîte, lequel le narrateur semble-t-il aimer le plus ? Justifiez votre réponse par un indice tiré du texte.", "correction": "a) un simple bouton de porcelaine. 0,5pt / Justification : Un simple bouton de porcelaine me mettait le sens en extase, beauté intraduisible, pouvoir d'enivrer ; etc.… (Accepter tout indice pertinent 0,5pt"}, {"type": "libre", "numero": "7a", "points": 0.5, "enonce": "« Chacun de ces objets me parlait son langage ». Quelle figure de style reconnaissez-vous dans cet énoncé ?", "correction": "Personnification (0,5pt)"}, {"type": "libre", "numero": "7b", "points": 0.5, "enonce": "Quel est l'effet recherché par l'emploi de cette figure ?", "correction": "Mise en valeur de ces objets auxquels il confère un pouvoir. (0,5pt)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Relevez du texte quatre termes appartenant au champ lexical des sentiments.", "correction": "Champ lexical des sentiments : pleurais, jouir, chagrin, extase, fascinait, fièrement… (0,25 pt x 4)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Un objet (ou un jouet) peut-il à votre avis consoler pendant les heures de tristesse ? Justifiez votre réponse. (2 à 3 lignes).", "correction": "Réponse justifiée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Les jouets électroniques actuels sont-ils à votre avis meilleurs que les objets simples avec lesquels jouait Le narrateur ? Justifiez votre réponse. (2 à 3 lignes).", "correction": "Point de vue justifié."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nVaut-il mieux à votre avis qu'un enfant joue tout seul, comme fait Sidi Mohammed avec les objets de sa boîte, ou avec des amis ? Justifiez votre point de vue en l'appuyant par des arguments.", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
