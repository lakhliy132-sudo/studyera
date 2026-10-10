-- Sujet de français, examen régional 2019 (juin), académie de
-- Casablanca-Settat, sur Antigone de Jean Anouilh. Transcrit mot pour
-- mot depuis le PDF officiel de l'académie publié sur moutamadris.ma
-- (« الامتحان الجهوي في اللغة الفرنسية 2019 جهة الدار البيضاء سطات
-- الدورة العادية ») : sujet sur 2 pages, « Corrigé et Barème » sur 1 page.
--
-- En-tête : « Session normale : Juin 2019 », « Durée : 2 heures », séries
-- « littéraires/ scientifiques/ sciences /technologie/ Arts appliqués/
-- sc économiques ». Le coefficient reste vide : 04 pour les quatre
-- premières séries, 03 pour sc économiques, une seule colonne.
--
-- La question 8 (0.5ptx2) est découpée en 8a (figure) et 8b (effet) ; la
-- question 7 (deux arguments, 0.5ptx2) reste une seule question.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2019,
  $sujet$normale$sujet$,
  $sujet$Casablanca-Settat$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Littéraires, scientifiques, sciences/technologie, arts appliqués, sciences économiques$sujet$,
  120,
  $sujet$## Texte

**ANTIGONE**

Tu as choisi la vie et moi la mort. Laisse-moi maintenant avec tes jérémiades. Il fallait y aller ce matin, à quatre pattes, dans la nuit. Il fallait aller gratter la terre avec tes ongles pendant qu'ils étaient tout près et te faire empoigner par eux comme une voleuse!

**ISMENE**

He bien, j'irai demain!

**ANTIGONE**

Tu l'entends, Créon? Elle aussi. Qui sait si cela ne va pas prendre à d'autres encore, en m'écoutant? Qu'est-ce que tu attends pour me faire taire, qu'est-ce que tu attends pour appeler tes gardes? Allons, Créon, un peu de courage, ce n'est qu'un mauvais moment à passer. Allons, cuisinier, puisqu'il le faut!

**CRÉON**, *crie soudain.*

Gardes!

*Les gardes apparaissent aussitôt.*

**CRÉON**

Emmenez-la.

**ANTIGONE**, *dans un grand cri soulagé.*

Enfin, Créon!

*Les gardes se jettent sur elle et l'emmènent. Ismène sort en criant derrière elle.*

**ISMENE**

Antigone! Antigone!

*Créon est resté seul, le chœur entre et va à lui.*

**LE CHOEUR**

Tu es fou, Créon. Qu'as-tu fait?

**CRÉON**, *qui regarde au loin devant lui.*

Il fallait qu'elle meure.

**LE CHOEUR**

Ne laisse pas mourir Antigone, Créon! Nous allons tous porter cette plaie au côté, pendant des siècles.

**CRÉON**

C'est elle qui voulait mourir. Aucun de nous n'était assez fort pour la décider à vivre. Je le comprends maintenant, Antigone était faite pour être morte. Elle-même ne le savait peut-être pas, mais Polynice n'était qu'un prétexte. Quand elle a dû y renoncer, elle a trouvé autre chose tout de suite. Ce qui importait pour elle, c'était de refuser et de mourir.

**LE CHOEUR**

C'est une enfant, Créon.

**CRÉON**

Que veux-tu que je fasse pour elle? La condamner à vivre?

**Hémon**, *entre en criant.*

Père!

**CRÉON**, *court à lui, l'embrasse.*

Oublie-la, Hémon; oublie-la, mon petit.

**HÉMON**

Tu es fou, père. Lâche-moi.

## I-Etude de texte (10 points)

1- **Recopiez et complétez** le tableau suivant : **(0.25pt x4)**

| Titre | Auteur | Genre littéraire | Deux personnages principaux |
|---|---|---|---|
| | | | |

2- **Situez** le passage en répondant à la question suivante : **(1pt)**
Par qui Antigone a-t-elle été empoignée comme une voleuse ?
a- Le chœur ? b- Créon ? c- Les gardes ?
**Choisissez la bonne réponse.**

3- **Relevez** dans le texte une phrase qui montre qu'Ismène a décidé d'imiter Antigone. **(1pt)**

4- **Pourquoi** Créon doit-il faire taire Antigone ? **(1pt)**

5- Quelle est **la fonction du chœur dans ce texte** ? **(1pt)**

6- Qu'exprime Créon par la phrase suivante: «*Aucun de nous n'était assez fort pour la décider à vivre.* » **(1pt)**
a- Son impuissance ? b- sa puissance ? c- son indifférence ?
**Choisissez la bonne réponse.**

7- **Dégagez** du texte deux (2) **arguments** sur lesquels s'appuie Créon pour convaincre le chœur ? **(0.5ptx2)**

8- **Identifiez** la figure de style contenue dans l'énoncé suivant et **dites quel en est l'effet recherché.** **(0.5ptx2)**
« Tu as choisi la vie et moi la mort. »

9- Le comportement d'Antigone vis-à-vis de son oncle Créon vous paraît-il acceptable ? **(1pt si réponse argumentée).**

10- Pensez-vous qu'Antigone est un personnage imprudent ? **(1pt si réponse argumentée).**

## II-Production écrite (10 points)

**Sujet : De nos jours, certains jeunes se montrent méchants, agressifs, voire insultants vis-à-vis de leurs parents et des personnes âgées.**

**Trouvez-vous ce comportement normal ?**

Rédigez un texte argumentatif où vous développez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.

***Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction.***

| Critère d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne (traiter le sujet proposé et non un autre). | 1point. |
| Produire un texte argumentatif, cohérent et bien structuré. | 4 points. |
| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |$sujet$,
  $sujet$## Corrigé et Barème

*Ce corrigé est donné à titre indicatif. Le professeur jugera de la validité des réponses non prévues.*

### I-Etude de texte (10 points)

#### Questions de contextualisation.

**1-** Recopiez et complétez le tableau suivant : **(0.25pt x4)**

| Titre | Auteur | Genre littéraire | Deux personnages principaux |
|---|---|---|---|
| Antigone | Jean Anouilh | Pièce de théâtre | Antigone et Créon |

**2-** Antigone a été empoignée comme une voleuse **par les gardes.** **(1pt)**

#### Questions d'analyse.

**3-** « ***He bien, j'irai demain!*** » **(1pt)**

**4-** …**pour ne pas encourager les autres à faire comme elle.** **(1pt)**

**5-** La fonction du chœur : **il est le sage, la conscience de Créon et celui qui lui donne des conseils…** **(1pt)**

**6-** Il exprime **son impuissance.** **(1pt)**

**7-** Les arguments : « ***C'est elle qui voulait mourir*** »/ « ***Aucun de nous n'était assez fort pour la décider à vivre.*** »/« ***Antigone était faite pour être morte*** »/ « ***Ce qui importait pour elle, c'était de refuser et de mourir.*** » **(0.5ptx2)**

**8-** **Une antithèse (0.5pt). Cette figure de style met en évidence la ligne de démarcation séparant les deux personnages : Ismène la mondaine et Antigone le personnage tragique qui refuse tout compromis. (0.5pt)**

#### Questions de réaction.

**9-** **Oui**, si on considère que Créon a empêché Antigone d'accomplir un devoir familial et religieux.
**Non**, car elle lui doit du respect en tant que roi, oncle et personne plus âgée qu'elle. **(1pt)**

**10-** **Oui**, parce qu'elle a osé braver (transgresser) une décision royale.(interdiction d'enterrer Polynice).
**Non**, car Antigone est un personnage tragique qui n'accepte pas le compromis… **(1pt)**

### II-Production écrite (10 points)

***Chaque copie sera corrigée à la lumière des critères suivants qu'il importe de respecter.***

| Critère d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne (traiter le sujet proposé et non un autre). | 1point. |
| Produire un texte argumentatif, cohérent et bien structuré. | 4 points. |
| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |$sujet$,
  $sujet${"parties": [{"titre": "I-Etude de texte", "points": 10, "consigne": "Lis attentivement le texte et réponds aux questions.", "texte": "**ANTIGONE**\n\nTu as choisi la vie et moi la mort. Laisse-moi maintenant avec tes jérémiades. Il fallait y aller ce matin, à quatre pattes, dans la nuit. Il fallait aller gratter la terre avec tes ongles pendant qu'ils étaient tout près et te faire empoigner par eux comme une voleuse!\n\n**ISMENE**\n\nHe bien, j'irai demain!\n\n**ANTIGONE**\n\nTu l'entends, Créon? Elle aussi. Qui sait si cela ne va pas prendre à d'autres encore, en m'écoutant? Qu'est-ce que tu attends pour me faire taire, qu'est-ce que tu attends pour appeler tes gardes? Allons, Créon, un peu de courage, ce n'est qu'un mauvais moment à passer. Allons, cuisinier, puisqu'il le faut!\n\n**CRÉON**, *crie soudain.*\n\nGardes!\n\n*Les gardes apparaissent aussitôt.*\n\n**CRÉON**\n\nEmmenez-la.\n\n**ANTIGONE**, *dans un grand cri soulagé.*\n\nEnfin, Créon!\n\n*Les gardes se jettent sur elle et l'emmènent. Ismène sort en criant derrière elle.*\n\n**ISMENE**\n\nAntigone! Antigone!\n\n*Créon est resté seul, le chœur entre et va à lui.*\n\n**LE CHOEUR**\n\nTu es fou, Créon. Qu'as-tu fait?\n\n**CRÉON**, *qui regarde au loin devant lui.*\n\nIl fallait qu'elle meure.\n\n**LE CHOEUR**\n\nNe laisse pas mourir Antigone, Créon! Nous allons tous porter cette plaie au côté, pendant des siècles.\n\n**CRÉON**\n\nC'est elle qui voulait mourir. Aucun de nous n'était assez fort pour la décider à vivre. Je le comprends maintenant, Antigone était faite pour être morte. Elle-même ne le savait peut-être pas, mais Polynice n'était qu'un prétexte. Quand elle a dû y renoncer, elle a trouvé autre chose tout de suite. Ce qui importait pour elle, c'était de refuser et de mourir.\n\n**LE CHOEUR**\n\nC'est une enfant, Créon.\n\n**CRÉON**\n\nQue veux-tu que je fasse pour elle? La condamner à vivre?\n\n**Hémon**, *entre en criant.*\n\nPère!\n\n**CRÉON**, *court à lui, l'embrasse.*\n\nOublie-la, Hémon; oublie-la, mon petit.\n\n**HÉMON**\n\nTu es fou, père. Lâche-moi.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre", "reponse": "Antigone"}, {"libelle": "Auteur", "reponse": "Jean Anouilh"}, {"libelle": "Genre littéraire", "reponse": "Pièce de théâtre"}, {"libelle": "Deux personnages principaux", "reponse": "Antigone et Créon"}]}, {"type": "choix", "numero": "2", "points": 1, "enonce": "Situez le passage en répondant à la question suivante : Par qui Antigone a-t-elle été empoignée comme une voleuse ? Choisissez la bonne réponse.", "options": ["Le chœur ?", "Créon ?", "Les gardes ?"], "bonne": 2}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Relevez dans le texte une phrase qui montre qu'Ismène a décidé d'imiter Antigone.", "correction": "« He bien, j'irai demain! »"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Pourquoi Créon doit-il faire taire Antigone ?", "correction": "…pour ne pas encourager les autres à faire comme elle."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Quelle est la fonction du chœur dans ce texte ?", "correction": "La fonction du chœur : il est le sage, la conscience de Créon et celui qui lui donne des conseils…"}, {"type": "choix", "numero": "6", "points": 1, "enonce": "Qu'exprime Créon par la phrase suivante: « Aucun de nous n'était assez fort pour la décider à vivre. » Choisissez la bonne réponse.", "options": ["Son impuissance ?", "sa puissance ?", "son indifférence ?"], "bonne": 0}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Dégagez du texte deux (2) arguments sur lesquels s'appuie Créon pour convaincre le chœur ?", "correction": "Les arguments : « C'est elle qui voulait mourir » / « Aucun de nous n'était assez fort pour la décider à vivre. » / « Antigone était faite pour être morte » / « Ce qui importait pour elle, c'était de refuser et de mourir. »"}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "Identifiez la figure de style contenue dans l'énoncé suivant : « Tu as choisi la vie et moi la mort. »", "correction": "Une antithèse."}, {"type": "libre", "numero": "8b", "points": 0.5, "enonce": "Dites quel en est l'effet recherché.", "correction": "Cette figure de style met en évidence la ligne de démarcation séparant les deux personnages : Ismène la mondaine et Antigone le personnage tragique qui refuse tout compromis."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Le comportement d'Antigone vis-à-vis de son oncle Créon vous paraît-il acceptable ? (1pt si réponse argumentée)", "correction": "Oui, si on considère que Créon a empêché Antigone d'accomplir un devoir familial et religieux. Non, car elle lui doit du respect en tant que roi, oncle et personne plus âgée qu'elle."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Pensez-vous qu'Antigone est un personnage imprudent ? (1pt si réponse argumentée)", "correction": "Oui, parce qu'elle a osé braver (transgresser) une décision royale.(interdiction d'enterrer Polynice). Non, car Antigone est un personnage tragique qui n'accepte pas le compromis…"}]}, {"titre": "II-Production écrite", "points": 10, "texte": "**Sujet : De nos jours, certains jeunes se montrent méchants, agressifs, voire insultants vis-à-vis de leurs parents et des personnes âgées.**\n\n**Trouvez-vous ce comportement normal ?**\n\nRédigez un texte argumentatif où vous développez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.\n\n***Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction.***\n\n| Critère d'évaluation | Note à accorder |\n|---|---|\n| Respect de la consigne (traiter le sujet proposé et non un autre). | 1point. |\n| Produire un texte argumentatif, cohérent et bien structuré. | 4 points. |\n| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
