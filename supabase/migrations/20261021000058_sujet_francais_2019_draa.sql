-- Sujet de français, examen régional 2019 (session normale), académie
-- Drâa-Tafilalet, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2019 جهة درعة تافيلالت »).
-- Corrigé et barème officiels recopiés question par question.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين جهة درعة تافيلالت »,
-- « الامتحان الجهوي الموحد - دورة يونيو 2019 », « الموضوع الرئيسي »,
-- « المستوى: السنة الأولى بكالوريا », durée « ساعتان ». Coefficient non
-- unique : 04 pour toutes les séries sauf sciences économiques et gestion
-- (03) ; « فنون ت » (arts appliqués) est ajouté à la main dans le tableau.
-- Le sujet est imprimé sur un livret-réponse (pages 2 à 5 avec lignes à
-- remplir) ; la page 5 ne contient que des lignes vides pour la
-- production écrite. Pas de ligne « Extrait de » sous le texte.
-- Question 6 : la feuille cite « Les bijoux, c'est comme les fleurs »
-- (le texte dit « c'est beau comme les fleurs ») ; recopié tel quel.
-- Lecture douteuse sur le scan : « moins étendues. J'en avais » (point ou
-- virgule ; point retenu).
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2019,
  $sujet$normale$sujet$,
  $sujet$Drâa-Tafilalet$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, arts appliqués, sciences et technologies (toutes filières), sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

– Aujourd'hui, j'ai l'intention de vous emmener tous les deux au souk des bijoux.

Et s'adressant à ma mère, il continua :

– Il y a longtemps que tu me demandes ces bracelets *soleil et lune* (or et argent). Il est temps que je te les offre. D'autre part, mon ouvrier a perdu sa mère qui habitait la campagne. Il est parti pour l'enterrement ; demain, il sera de retour et nous reprendrons le travail.

Ma mère interrogea.

– Est-elle morte d'une maladie ?

– Je crois, dit mon père, qu'elle est morte surtout de vieillesse, mais peu importe, que Dieu la reçoive dans sa bénédiction !

– Mais, objectai-je, je ne peux pas manquer le *Msid* pour vous accompagner au souk des bijoux, j'ai ma leçon à apprendre.

– Ne te tourmente pas, répondit mon père. En passant, j'ai vu le *fqih*, je l'ai prévenu de ton absence. Tu travailles bien, cette demi-journée de repos sera une juste récompense. Mais peut-être n'aimes-tu pas voir de jolis bijoux et l'animation des enchères ?

– Oh si ! Les bijoux c'est beau, c'est beau comme...

Je n'osai pas poursuivre ma comparaison. Mon père m'encouragea :

– Beau comme quoi ?

Je baissai les yeux et, d'une voix de confidence, je dis timidement :

– Les bijoux, c'est beau comme les fleurs.

Mon père et ma mère éclatèrent de rire. Je trouvai leur réaction déplacée. Un doute se glissa en moi sur la qualité de leur intelligence.

Le déjeuner fini, j'allai m'asseoir dans l'escalier en attendant l'heure des enchères aux bijoux. Accroupi sur une marche, les mains sur les genoux, je réfléchis très profondément à la conversation du déjeuner. Comparer des bijoux à des fleurs, était-ce signe de stupidité ? Le rire de mes parents traduisait cette indulgence\* que les grandes personnes manifestent devant les enfants qui leur tiennent des propos niais\* ou puérils\*. Je sentais que ma comparaison exprimait une idée essentielle. Elle devait être accueillie par le silence. Le rire en une telle circonstance devenait une incongruité\*.

Je connaissais quelques fleurs : les soucis et les coquelicots qui s'épanouissent au printemps sur les tombes, les marguerites dodues qui offrent au soleil leurs cœurs d'or, les liserons qui se redressent sous nos pas lorsque, par une belle journée, mon père m'emmenait sur les collines de Bab Guissa.

Sur la terrasse de notre maison, poussaient dans des fragments de poteries, du géranium rosat, des œillets et des roses d'Ispahan.

Mes connaissances en bijoux étaient moins étendues. J'en avais pourtant vu de somptueux à l'occasion des fêtes sur les femmes et sur les petites filles. Je les classais en deux catégories les bijoux de tous les jours en argent gris bleu qui me fascinaient et les bijoux de fête rutilants de pierreries. Ceux-ci, forgés par les mains des génies dans des palais souterrains, gardaient encore dans leur miroitement et leur couleur de soleil, le souvenir des flammes où leur matière avait coulé.

\* *Incongruité* : impolitesse, acte déplacé. \* *Niais, puéril* : sans profondeur. \* *Indulgence* : esprit d'excuse.

## I. Étude de texte (10 points)

**1.** Complétez le tableau suivant. **(0,25x4)**

| Auteur | Titre de l'œuvre | Genre littéraire | Siècle |
|---|---|---|---|
| | | | |

**2a.** Le père du narrateur ira au souk des bijoux. D'après votre lecture de l'œuvre, a. Qui accompagnera-t-il ? (Citez au moins deux personnages) **(0.5)**

**2b.** b. Il lui arrivera un grand malheur. Lequel ? **(0.5)**

**3.** Quelles sont les deux raisons que le père du narrateur cite pour expliquer son congé inattendu ? **(1 point)**

**4.** Est-ce que le narrateur a tout de suite accepté d'accompagner ses parents au souk des bijoux ? Pourquoi ? **(1 point)**

**5.** Répondez par « vrai » ou « faux ». **(1 point)**

| | Vrai | Faux |
|---|---|---|
| Le narrateur a des connaissances approfondies sur les bijoux et les fleurs. | | |
| Le narrateur doute de l'intelligence de ses parents. | | |

**6a.** « Les bijoux, c'est comme les fleurs » a. Quelle est la figure de style contenue dans cet énoncé ? **(0.5)**

**6b.** b. Sur quel rapport est-elle fondée : sur une ressemblance ou sur une différence ? **(0.5)**

**7.** Relevez dans le texte deux termes appartenant au champ lexical des « bijoux » et deux autres au champ lexical des « fleurs ». **(0,25x4)**

| Bijoux | Fleurs |
|---|---|
| | |

**8a.** En comparant les bijoux aux fleurs, le narrateur a provoqué le rire de ses parents. a. Comment a-t-il pris ce rire, bien ou mal ? **(0.5)**

**8b.** b. Relevez un indice qui le montre. **(0.5)**

**9.** Le narrateur pense que le rire de ses parents est une incongruité. A-t-il raison de réagir ainsi ? Justifiez votre attitude dans une ou deux phrases. **(1 point)**

**10.** Les parents n'ont pas pris au sérieux les propos de leur enfant. Comment trouvez-vous ce comportement ? **(1 point)**

## II. Production écrite (10 points)

**Sujet :**

Dans notre société, on constate que plusieurs parents n'écoutent pas suffisamment leurs enfants et n'accordent pas d'importance à ce qu'ils disent ou expriment.

Approuvez-vous ce comportement ?

Répondez à cette question en appuyant votre réflexion par des arguments et des exemples pertinents.

Lors de la correction, il sera tenu compte des éléments suivants :

- Critères d'évaluation du discours : respect de la consigne, cohérence, organisation et progression du texte (5points)
- Critères d'évaluation de la langue : correction de la langue (orthographe, syntaxe, vocabulaire, conjugaison) ..(5points)$sujet$,
  $sujet$## Corrigé et barème

*Éléments de correction et barème de notation. NB : Toute réponse – ou formulation - non prévue est laissée à l'appréciation du professeur correcteur.*

### I. Étude de texte

**1.** **(0,25x4)**

| Auteur | Titre de l'œuvre | Genre littéraire | Siècle |
|---|---|---|---|
| Ahmed Sefrioui | *La boîte à Merveilles* | Roman autobiographique | 20ème siècle |

**2a.** Sidi Mohammed, Lalla Zoubida, Fatma Bziouya (citer au moins deux personnages) (0,5) **(0.5)**

**2b.** Il perdra son capital de roulement dans la cohue du souk des bijoux. (0,5) **(0.5)**

**3.** – Il avait l'intention d'amener sa femme et son fils au souk des bijoux ; (0,5) – La mère de son ouvrier est morte et celui-ci est parti à la campagne pour les funérailles. (0,5) **(1 point)**

**4.** – Non. Il a d'abord refusé ; (0,5) – Parce qu'il ne voulait pas rater sa leçon au *Msid*. (0,5) **(1 point)**

**5.** **(1 point)**

| | |
|---|---|
| Le narrateur a des connaissances approfondies sur les bijoux et les fleurs. | Faux |
| Le narrateur doute de l'intelligence de ses parents. | Vrai |

**6a.** Une comparaison (0,5) **(0.5)**

**6b.** La ressemblance (0,5) **(0.5)**

**7.** **(0,25x4)**

| Bijoux | Fleurs |
|---|---|
| bracelets, or, argent, etc. (Deux termes) 0,25x2 | marguerites, coquelicots, œillet, roses, etc. (Deux termes) 0,25x2 |

**8a.** Mal (0,5) **(0.5)**

**8b.** « Je trouvai leur réaction déplacée » ; « un doute se glissa en moi » ; «… était-ce signe de stupidité ? » (0,5) (Accepter toute réaction ou pensée du personnage allant dans ce sens) **(0.5)**

**9.** a) Prise de position : oui/non (0,5) b) Justification : accepter toute réponse élaborée et justifiée (0,5) **(1 point)**

**10.** Réponse élaborée et justifiée. (1) **(1 point)**

### II. Production écrite

| *Critères d'évaluation du discours :* | Barème et notation |
|---|---|
| a. Conformité de la production à la consigne d'écriture. b. Cohérence de l'argumentation. c. Structure du texte (organisation et progression du texte). | 5 points |
| *Critères d'évaluation de la langue :* | Barème et notation |
| a. Orthographe (respect des règles) b. Conjugaison (emploi des temps) c. Ponctuation (usage d'une ponctuation adéquate) | 5 points |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions ci-dessous.", "texte": "– Aujourd'hui, j'ai l'intention de vous emmener tous les deux au souk des bijoux.\n\nEt s'adressant à ma mère, il continua :\n\n– Il y a longtemps que tu me demandes ces bracelets *soleil et lune* (or et argent). Il est temps que je te les offre. D'autre part, mon ouvrier a perdu sa mère qui habitait la campagne. Il est parti pour l'enterrement ; demain, il sera de retour et nous reprendrons le travail.\n\nMa mère interrogea.\n\n– Est-elle morte d'une maladie ?\n\n– Je crois, dit mon père, qu'elle est morte surtout de vieillesse, mais peu importe, que Dieu la reçoive dans sa bénédiction !\n\n– Mais, objectai-je, je ne peux pas manquer le *Msid* pour vous accompagner au souk des bijoux, j'ai ma leçon à apprendre.\n\n– Ne te tourmente pas, répondit mon père. En passant, j'ai vu le *fqih*, je l'ai prévenu de ton absence. Tu travailles bien, cette demi-journée de repos sera une juste récompense. Mais peut-être n'aimes-tu pas voir de jolis bijoux et l'animation des enchères ?\n\n– Oh si ! Les bijoux c'est beau, c'est beau comme...\n\nJe n'osai pas poursuivre ma comparaison. Mon père m'encouragea :\n\n– Beau comme quoi ?\n\nJe baissai les yeux et, d'une voix de confidence, je dis timidement :\n\n– Les bijoux, c'est beau comme les fleurs.\n\nMon père et ma mère éclatèrent de rire. Je trouvai leur réaction déplacée. Un doute se glissa en moi sur la qualité de leur intelligence.\n\nLe déjeuner fini, j'allai m'asseoir dans l'escalier en attendant l'heure des enchères aux bijoux. Accroupi sur une marche, les mains sur les genoux, je réfléchis très profondément à la conversation du déjeuner. Comparer des bijoux à des fleurs, était-ce signe de stupidité ? Le rire de mes parents traduisait cette indulgence\\* que les grandes personnes manifestent devant les enfants qui leur tiennent des propos niais\\* ou puérils\\*. Je sentais que ma comparaison exprimait une idée essentielle. Elle devait être accueillie par le silence. Le rire en une telle circonstance devenait une incongruité\\*.\n\nJe connaissais quelques fleurs : les soucis et les coquelicots qui s'épanouissent au printemps sur les tombes, les marguerites dodues qui offrent au soleil leurs cœurs d'or, les liserons qui se redressent sous nos pas lorsque, par une belle journée, mon père m'emmenait sur les collines de Bab Guissa.\n\nSur la terrasse de notre maison, poussaient dans des fragments de poteries, du géranium rosat, des œillets et des roses d'Ispahan.\n\nMes connaissances en bijoux étaient moins étendues. J'en avais pourtant vu de somptueux à l'occasion des fêtes sur les femmes et sur les petites filles. Je les classais en deux catégories les bijoux de tous les jours en argent gris bleu qui me fascinaient et les bijoux de fête rutilants de pierreries. Ceux-ci, forgés par les mains des génies dans des palais souterrains, gardaient encore dans leur miroitement et leur couleur de soleil, le souvenir des flammes où leur matière avait coulé.\n\n\\* *Incongruité* : impolitesse, acte déplacé. \\* *Niais, puéril* : sans profondeur. \\* *Indulgence* : esprit d'excuse.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Complétez le tableau suivant.", "champs": [{"libelle": "Auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Titre de l'œuvre", "reponse": "*La boîte à Merveilles*"}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Siècle", "reponse": "20ème siècle"}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Le père du narrateur ira au souk des bijoux. D'après votre lecture de l'œuvre, a. Qui accompagnera-t-il ? (Citez au moins deux personnages)", "correction": "Sidi Mohammed, Lalla Zoubida, Fatma Bziouya (citer au moins deux personnages) (0,5)"}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "b. Il lui arrivera un grand malheur. Lequel ?", "correction": "Il perdra son capital de roulement dans la cohue du souk des bijoux. (0,5)"}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Quelles sont les deux raisons que le père du narrateur cite pour expliquer son congé inattendu ?", "correction": "– Il avait l'intention d'amener sa femme et son fils au souk des bijoux ; (0,5) – La mère de son ouvrier est morte et celui-ci est parti à la campagne pour les funérailles. (0,5)"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Est-ce que le narrateur a tout de suite accepté d'accompagner ses parents au souk des bijoux ? Pourquoi ?", "correction": "– Non. Il a d'abord refusé ; (0,5) – Parce qu'il ne voulait pas rater sa leçon au *Msid*. (0,5)"}, {"type": "vrai-faux", "numero": "5", "points": 1, "enonce": "Répondez par « vrai » ou « faux ».", "affirmations": [{"texte": "Le narrateur a des connaissances approfondies sur les bijoux et les fleurs.", "vrai": false}, {"texte": "Le narrateur doute de l'intelligence de ses parents.", "vrai": true}]}, {"type": "libre", "numero": "6a", "points": 0.5, "enonce": "« Les bijoux, c'est comme les fleurs » a. Quelle est la figure de style contenue dans cet énoncé ?", "correction": "Une comparaison (0,5)"}, {"type": "libre", "numero": "6b", "points": 0.5, "enonce": "b. Sur quel rapport est-elle fondée : sur une ressemblance ou sur une différence ?", "correction": "La ressemblance (0,5)"}, {"type": "tableau", "numero": "7", "points": 1, "enonce": "Relevez dans le texte deux termes appartenant au champ lexical des « bijoux » et deux autres au champ lexical des « fleurs ».", "champs": [{"libelle": "Bijoux", "reponse": "bracelets, or, argent, etc. (Deux termes) 0,25x2"}, {"libelle": "Fleurs", "reponse": "marguerites, coquelicots, œillet, roses, etc. (Deux termes) 0,25x2"}]}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "En comparant les bijoux aux fleurs, le narrateur a provoqué le rire de ses parents. a. Comment a-t-il pris ce rire, bien ou mal ?", "correction": "Mal (0,5)"}, {"type": "libre", "numero": "8b", "points": 0.5, "enonce": "b. Relevez un indice qui le montre.", "correction": "« Je trouvai leur réaction déplacée » ; « un doute se glissa en moi » ; «… était-ce signe de stupidité ? » (0,5) (Accepter toute réaction ou pensée du personnage allant dans ce sens)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Le narrateur pense que le rire de ses parents est une incongruité. A-t-il raison de réagir ainsi ? Justifiez votre attitude dans une ou deux phrases.", "correction": "a) Prise de position : oui/non (0,5) b) Justification : accepter toute réponse élaborée et justifiée (0,5)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Les parents n'ont pas pris au sérieux les propos de leur enfant. Comment trouvez-vous ce comportement ?", "correction": "Réponse élaborée et justifiée. (1)"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nDans notre société, on constate que plusieurs parents n'écoutent pas suffisamment leurs enfants et n'accordent pas d'importance à ce qu'ils disent ou expriment.\n\nApprouvez-vous ce comportement ?\n\nRépondez à cette question en appuyant votre réflexion par des arguments et des exemples pertinents.\n\nLors de la correction, il sera tenu compte des éléments suivants :\n\n- Critères d'évaluation du discours : respect de la consigne, cohérence, organisation et progression du texte (5points)\n- Critères d'évaluation de la langue : correction de la langue (orthographe, syntaxe, vocabulaire, conjugaison) ..(5points)", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
