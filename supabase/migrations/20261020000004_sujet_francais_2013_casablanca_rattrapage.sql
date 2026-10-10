-- Sujet de français, examen régional 2013 (session de rattrapage), académie
-- Casablanca-Settat, sur Le Dernier Jour d'un condamné.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2013 جهة الدار البيضاء سطات »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie du Grand Casablanca (avant le
-- découpage régional de 2015) ; session « الاستدراكية » (rattrapage),
-- durée « ساعتان ». Coefficient vide : 4 ou 3 selon la série.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2013,
  $sujet$rattrapage$sujet$,
  $sujet$Casablanca-Settat$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, arts appliqués, sciences économiques et gestion, sciences et technologies$sujet$,
  120,
  $sujet$## Texte

Malheureusement, je n'étais pas malade. Le lendemain il fallut sortir de l'infirmerie. Le cachot me reprit.

Pas malade ! En effet, je suis jeune, sain et fort. Le sang coule librement dans mes veines ; tous mes membres obéissent à tous mes caprices ; je suis robuste de corps et d'esprit, constitué pour une longue vie ; oui, tout cela est vrai ; et cependant j'ai une maladie, une maladie mortelle, une maladie faite de la main des hommes.

Depuis que je suis sorti de l'infirmerie, il m'est venu une idée poignante, une idée à me rendre fou, c'est que j'aurais peut-être pu m'évader si l'on m'y avait laissé. Ces médecins, ces sœurs de charité, semblaient prendre intérêt à moi. Mourir si jeune et d'une telle mort ! On eût dit qu'ils me plaignaient, tant ils étaient empressés autour de mon chevet. Bah ! Curiosité ! Et puis, ces gens qui guérissent vous guérissent bien d'une fièvre, mais non d'une sentence de mort. Et pourtant cela leur serait si facile ! Une porte ouverte ! Qu'est-ce que cela leur ferait ?

Plus de chance maintenant ! Mon pourvoi sera rejeté, parce que tout est en règle ; les témoins ont bien témoigné, les plaideurs ont bien plaidé, les juges ont bien jugé. Je n'y compte pas, à moins que… Non, folie ! Plus d'espérance ! Le pourvoi, c'est une corde qui vous tient suspendu au-dessus de l'abîme, et qu'on entend craquer à chaque instant, jusqu'à ce qu'elle se casse. C'est comme si le couteau de la guillotine mettait six semaines à tomber.

Si j'avais ma grâce ? – Avoir ma grâce ! Et par qui ? Et pourquoi ? Et comment ? Il est impossible qu'on me fasse grâce. L'exemple ! Comme ils disent.

Je n'ai plus que trois pas à faire : Bicêtre, la Conciergerie, la Grève.

## I. Étude de texte (10 points)

**1.** Selon vos connaissances de l'œuvre, complétez le tableau suivant que vous recopiez sur votre copie d'examen : **(0.25x4= 1 point)**

| Nom de l'auteur | Titre de l'œuvre | Genre de l'œuvre | Visée de l'auteur |
|---|---|---|---|
| | | | |

**2.** Après quel événement proche peut-on situer l'extrait ci-dessus ? Pourquoi ? **(0.5x2= 1 point)**

**3.** Dans ce texte, qui parle ? A qui parle-t-il ? Et pourquoi ? **(0.5x2= 1 point)**

**4.** Ce texte est-il une autobiographie ? **(0.5x2= 1 point)**

**5.** Citez les deux sentiments ou attitudes exprimés par les phrases exclamatives et interrogatives ? **(1 point)**

**6.** Relevez deux arguments contre la peine de mort. **(1 point)**

**7.** Identifiez la tonalité du texte. Relevez un exemple qui le prouve. **(0.5x2= 1 point)**

**8.** Donnez deux exemples qui présentent le narrateur plus victime que coupable. **(0.5x2= 1 point)**

**9.** Quelle figure de style est exprimée dans la phrase suivante : « J'ai une maladie faite de la main des hommes. » ? Que remplace-t-elle ? **(0.5x2= 1 point)**

**10.** Recopiez le tableau suivant sur votre copie d'examen et remplissez-le par un événement que le narrateur a vécu dans chacun des lieux citez ci-dessous : Ce que le narrateur a vécu, a rencontré, a fait, a souhaité, a espéré…dans chaque lieu **(1 point)**

| Bicêtre | La Conciergerie | La Grève |
|---|---|---|
| | | |

## II. Production écrite (10 points)

Le narrateur a été condamné à mort mais il réclame et souhaite fortement sa grâce. Pensez-vous qu'il la mérite ? Pourquoi ?

Développez votre point de vue dans un écrit argumenté et illustré d'exemples, en vous appuyant sur tout le roman.

**Lors de la correction, on tiendra compte des critères suivants:**

| Critères de réalisation | Note attribuée |
|---|---|
| Respect de la consigne et pertinence des idées | 1 point |
| Organisation de l'écrit (Introduction, développement et conclusion) | 2 points |
| Choix précis des arguments | 2 points |
| Correction de la langue, articulateurs logiques, ponctuation | 5 points |$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponses + Barème donnés à titre indicatif.*

### I. Étude de texte

**1.** **(0.25x4= 1 point)**

| Nom de l'auteur | Titre de l'œuvre | Genre de l'œuvre | Visée de l'auteur |
|---|---|---|---|
| Victor Hugo | Le Dernier jour d'un condamné | Roman à thèse | Dénoncer la peine de mort |

**2.** L'événement proche : Après le ferrement des bagnards à Bicêtre, ou, le ferrage des forçats, ou le départ des forçats de Bicêtre ; car après avoir assisté à un tel spectacle émouvant, le condamné a été choqué puis il s'est évanoui ; ce qui l'a conduit à l'infirmerie. **(0.5x2= 1 point)**

**3.** Le condamné à mort (le narrateur) parle à lui-même et s'dressant au lecteur (0.25x2= 0.5 point) - Pour le rallier à sa cause, se décharger, se soulager, gagner la sympathie du lecteur, dénoncer la peine de mort, faire réfléchir les juges… (0.5 point) **(0.5x2= 1 point)**

**4.** Non, car le narrateur qui est le personnage principal n'est pas l'auteur qui est Victor Hugo. **(0.5x2= 1 point)**

**5.** « L'indignation, la révolte, la colère, l'étonnement, le mépris, le désespoir, l'ironie, l'espoir… » **(1 point)**

**6.** a - « J'ai une maladie, une maladie mortelle …de la main des hommes/ Et puis, ces gens qui guérissent… sentence de mort. »; b - « Mourir si jeune et d'une telle mort !/ Il est impossible qu'on me fasse grâce / L'exemple ! Comme ils disent. **(1 point)**

**7.** La tonalité du texte : tragique, pathétique : Il est impossible qu'on me fasse grâce /Mourir si jeune…/ On eut dit qu'ils me plaignaient/ Je n'y compte pas/Plus d'espérance… **(0.5x2= 1 point)**

**8.** a- « Je n'y compte pas / On eut dit qu'ils me plaignaient…de mon chevet/ Ces médecins …intérêt à moi… » b- « J'ai une maladie …faite de la main des hommes/ Mourir si jeune d'une telle maladie… » **(0.5x2= 1 point)**

**9.** Il s'agit d'une périphrase qui remplace ou désigne la peine de mort, la condamnation du narrateur. **(0.5x2= 1 point)**

**10.** **(1 point)**

| Bicêtre | La Conciergerie | La Grève |
|---|---|---|
| - Attendre l'acceptation ou le rejet de son pourvoi / recevoir la visite d'un prêtre ; - Ecrire son journal intime / penser à l'évasion… ; - Assister au ferrage des forçats à leur départ. (0.25 point) | - Rencontrer le friauche (condamné à mort) / Lui faire sa toilette/Réclamer sa grâce ; - Ecrire une lettre à sa fille/ Recevoir sa fille/Ecrire ses dernière volontés ; - Espérer encore sa grâce / attendre l'heure de l'exécution. (0.25 point) | - La place de la décapitation/ Lieu de mort ; - Lieu de l'exécution de la peine de mort ; - La place qu'il peut voir de sa fenêtre. (0.5 point) |

### II. Production écrite

Lors de la correction de l'écrit, tenir compte des critères suivants : respect de la consigne (1 point), organisation du texte (2 points), choix des arguments précis et pertinents (2 points), correction de la langue : vocabulaire adéquat, orthographe et conjugaison correctes, ponctuation (5 points).$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Malheureusement, je n'étais pas malade. Le lendemain il fallut sortir de l'infirmerie. Le cachot me reprit.\n\nPas malade ! En effet, je suis jeune, sain et fort. Le sang coule librement dans mes veines ; tous mes membres obéissent à tous mes caprices ; je suis robuste de corps et d'esprit, constitué pour une longue vie ; oui, tout cela est vrai ; et cependant j'ai une maladie, une maladie mortelle, une maladie faite de la main des hommes.\n\nDepuis que je suis sorti de l'infirmerie, il m'est venu une idée poignante, une idée à me rendre fou, c'est que j'aurais peut-être pu m'évader si l'on m'y avait laissé. Ces médecins, ces sœurs de charité, semblaient prendre intérêt à moi. Mourir si jeune et d'une telle mort ! On eût dit qu'ils me plaignaient, tant ils étaient empressés autour de mon chevet. Bah ! Curiosité ! Et puis, ces gens qui guérissent vous guérissent bien d'une fièvre, mais non d'une sentence de mort. Et pourtant cela leur serait si facile ! Une porte ouverte ! Qu'est-ce que cela leur ferait ?\n\nPlus de chance maintenant ! Mon pourvoi sera rejeté, parce que tout est en règle ; les témoins ont bien témoigné, les plaideurs ont bien plaidé, les juges ont bien jugé. Je n'y compte pas, à moins que… Non, folie ! Plus d'espérance ! Le pourvoi, c'est une corde qui vous tient suspendu au-dessus de l'abîme, et qu'on entend craquer à chaque instant, jusqu'à ce qu'elle se casse. C'est comme si le couteau de la guillotine mettait six semaines à tomber.\n\nSi j'avais ma grâce ? – Avoir ma grâce ! Et par qui ? Et pourquoi ? Et comment ? Il est impossible qu'on me fasse grâce. L'exemple ! Comme ils disent.\n\nJe n'ai plus que trois pas à faire : Bicêtre, la Conciergerie, la Grève.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Selon vos connaissances de l'œuvre, complétez le tableau suivant que vous recopiez sur votre copie d'examen :", "champs": [{"libelle": "Nom de l'auteur", "reponse": "Victor Hugo"}, {"libelle": "Titre de l'œuvre", "reponse": "Le Dernier jour d'un condamné"}, {"libelle": "Genre de l'œuvre", "reponse": "Roman à thèse"}, {"libelle": "Visée de l'auteur", "reponse": "Dénoncer la peine de mort"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Après quel événement proche peut-on situer l'extrait ci-dessus ? Pourquoi ?", "correction": "L'événement proche : Après le ferrement des bagnards à Bicêtre, ou, le ferrage des forçats, ou le départ des forçats de Bicêtre ; car après avoir assisté à un tel spectacle émouvant, le condamné a été choqué puis il s'est évanoui ; ce qui l'a conduit à l'infirmerie."}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Dans ce texte, qui parle ? A qui parle-t-il ? Et pourquoi ?", "correction": "Le condamné à mort (le narrateur) parle à lui-même et s'dressant au lecteur (0.25x2= 0.5 point) - Pour le rallier à sa cause, se décharger, se soulager, gagner la sympathie du lecteur, dénoncer la peine de mort, faire réfléchir les juges… (0.5 point)"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Ce texte est-il une autobiographie ?", "correction": "Non, car le narrateur qui est le personnage principal n'est pas l'auteur qui est Victor Hugo."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Citez les deux sentiments ou attitudes exprimés par les phrases exclamatives et interrogatives ?", "correction": "« L'indignation, la révolte, la colère, l'étonnement, le mépris, le désespoir, l'ironie, l'espoir… »"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez deux arguments contre la peine de mort.", "correction": "a - « J'ai une maladie, une maladie mortelle …de la main des hommes/ Et puis, ces gens qui guérissent… sentence de mort. »; b - « Mourir si jeune et d'une telle mort !/ Il est impossible qu'on me fasse grâce / L'exemple ! Comme ils disent."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Identifiez la tonalité du texte. Relevez un exemple qui le prouve.", "correction": "La tonalité du texte : tragique, pathétique : Il est impossible qu'on me fasse grâce /Mourir si jeune…/ On eut dit qu'ils me plaignaient/ Je n'y compte pas/Plus d'espérance…"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Donnez deux exemples qui présentent le narrateur plus victime que coupable.", "correction": "a- « Je n'y compte pas / On eut dit qu'ils me plaignaient…de mon chevet/ Ces médecins …intérêt à moi… » b- « J'ai une maladie …faite de la main des hommes/ Mourir si jeune d'une telle maladie… »"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Quelle figure de style est exprimée dans la phrase suivante : « J'ai une maladie faite de la main des hommes. » ? Que remplace-t-elle ?", "correction": "Il s'agit d'une périphrase qui remplace ou désigne la peine de mort, la condamnation du narrateur."}, {"type": "tableau", "numero": "10", "points": 1, "enonce": "Recopiez le tableau suivant sur votre copie d'examen et remplissez-le par un événement que le narrateur a vécu dans chacun des lieux citez ci-dessous : Ce que le narrateur a vécu, a rencontré, a fait, a souhaité, a espéré…dans chaque lieu", "champs": [{"libelle": "Bicêtre", "reponse": "- Attendre l'acceptation ou le rejet de son pourvoi / recevoir la visite d'un prêtre ; - Ecrire son journal intime / penser à l'évasion… ; - Assister au ferrage des forçats à leur départ. (0.25 point)"}, {"libelle": "La Conciergerie", "reponse": "- Rencontrer le friauche (condamné à mort) / Lui faire sa toilette/Réclamer sa grâce ; - Ecrire une lettre à sa fille/ Recevoir sa fille/Ecrire ses dernière volontés ; - Espérer encore sa grâce / attendre l'heure de l'exécution. (0.25 point)"}, {"libelle": "La Grève", "reponse": "- La place de la décapitation/ Lieu de mort ; - Lieu de l'exécution de la peine de mort ; - La place qu'il peut voir de sa fenêtre. (0.5 point)"}]}]}, {"titre": "II. Production écrite", "points": 10, "texte": "Le narrateur a été condamné à mort mais il réclame et souhaite fortement sa grâce. Pensez-vous qu'il la mérite ? Pourquoi ?\n\nDéveloppez votre point de vue dans un écrit argumenté et illustré d'exemples, en vous appuyant sur tout le roman.\n\n**Lors de la correction, on tiendra compte des critères suivants:**\n\n| Critères de réalisation | Note attribuée |\n|---|---|\n| Respect de la consigne et pertinence des idées | 1 point |\n| Organisation de l'écrit (Introduction, développement et conclusion) | 2 points |\n| Choix précis des arguments | 2 points |\n| Correction de la langue, articulateurs logiques, ponctuation | 5 points |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
