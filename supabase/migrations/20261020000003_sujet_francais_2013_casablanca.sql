-- Sujet de français, examen régional 2013 (session normale), académie
-- Casablanca-Settat, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2013 جهة الدار البيضاء سطات »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie du Grand Casablanca (avant le
-- découpage régional de 2015) ; « دورة يونيو 2013 », durée « ساعتان ».
-- Coefficient vide : 4 ou 3 selon la série.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2013,
  $sujet$normale$sujet$,
  $sujet$Casablanca-Settat$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, arts appliqués, sciences économiques et gestion, sciences et technologies$sujet$,
  120,
  $sujet$## Texte

*La porte s'ouvre. Entre Ismène.*

**ISMÈNE**, *dans un cri.*

Antigone!

**ANTIGONE**

Qu'est-ce que tu veux, toi aussi?

**ISMÈNE**

Antigone, pardon! Antigone, tu vois, je viens, j'ai du courage. J'irai maintenant avec toi.

**ANTIGONE**

Où iras-tu avec moi?

**ISMÈNE**

Si vous la faites mourir, il faudra me faire mourir avec elle!

**ANTIGONE**

Ah! Non. Pas maintenant. Pas toi! C'est moi, c'est moi seule. Tu ne te figures pas que tu vas venir mourir avec moi maintenant. Ce serait trop facile!

**ISMÈNE**

Je ne veux pas vivre si tu meurs, je ne veux pas rester sans toi!

**ANTIGONE**

Tu as choisi la vie et moi la mort. Laisse-moi maintenant avec tes jérémiades. Il fallait y aller ce matin, à quatre pattes, dans la nuit. Il fallait aller gratter la terre avec tes ongles pendant qu'ils étaient tout près et te faire empoigner par eux comme une voleuse!

**ISMÈNE**

Hé bien, j'irai demain!

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

**ISMÈNE**

Antigone! Antigone!

*Créon est resté seul, le chœur entre et va à lui.*

## I. Étude de texte (10 points)

**1.** Selon vos connaissances de l'œuvre, complétez le tableau suivant que vous recopiez sur votre copie d'examen : **(0.25x4) = (1point)**

| Auteur de l'œuvre | Titre de l'œuvre | Genre de l'œuvre | Fin heureuse ou malheureuse ? |
|---|---|---|---|
| | | | |

**2.** Avant cette scène, que demandait Créon à Antigone? Et que cherchait-il ? **(1 point)**

**3.** Relevez dans la scène deux éléments qui montrent qu'il s'agit d'une tragédie. **(1 point)**

**4.** Pourquoi Ismène demande-t-elle pardon sa sœur ? Qu'a-t-elle fait ? **(1 point)**

**5.** Recopiez le tableau suivant et complétez-le avec des les éléments qui définissent les rapports entre les personnages. Les éléments qui montrent qui est contre qui (un élément par cas) : **(0.25x4=1 point)**

| Antigone contre Ismène | Antigone contre Créon | Les deux sœurs contre Créon | Créon contre Antigone |
|---|---|---|---|
| | | | |

**6.** Quelle est la réplique qui rappelle la loi de Créon citée à la 1ère scène, « Le Prologue »? **(1 point)**

**7.** Quelle figure de style reconnaissez-vous dans cette réplique et qu'exprime-t-elle? « Tu as choisi la vie et moi la mort. » **(1point)**

**8.** Comment expliquez-vous que Créon parle peu pendant cette scène et ses répliques sont courtes ? **(1 point)**

**9.** Relevez quatre éléments appartenant aux champs de l'opposition et du refus. **(1 point)**

**10.** Donnez un titre à cette scène **(1 point)**

## II. Production écrite (10 points)

**Sujet :** Dans cette tragédie, tous les protagonistes (personnages) sont perdants.

Montrez-le, en pensant à la valeur de ce que chacun d'eux a perdu et gagné.

**Lors de la correction de votre écrit, on tiendra compte des critères suivants :**

| Critères de réalisation de l'écrit produit | Note attribuée |
|---|---|
| Respect de la consigne (traiter le sujet proposé) | 1 point |
| Organisation du texte | 2 points |
| Choix des arguments précis et pertinents | 2 points |
| Correction de la langue : vocabulaire adéquat, orthographe et conjugaison correctes, ponctuation | 5 points |$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponses + Barème donnés à titre indicatif.*

### I. Étude de texte

**1.** **(0.25x4) = (1point)**

| Auteur de l'œuvre | Titre de l'œuvre | Genre de l'œuvre | Fin heureuse ou malheureuse ? |
|---|---|---|---|
| Jean Anouilh | Antigone | Une tragédie moderne | Malheureuse, Créon reste seul, il perd sa femme, son fils, sa nièce… |

**2.** Créon lui demandait de se taire, de ne pas raconter sa transgression de la loi car il cherchait à la sauver de la peine de mort et la préserver pour le mariage de son fils. **(1 point)**

**3.** Les deux éléments …tragédie : - Tu as choisi la vie et moi la mort / Allons, cuisinier puisqu'il le faut. - Si vous la faites mourir, il faudra me faire mourir avec elle. **(1 point)**

**4.** Ismène lui demande pardon car elle avait peur de mourir, elle n'avait pas de courage, elle manquait à son devoir mais à présent, elle est disponible à braver la loi de Créon, elles sont deux sœurs contre Créon **(1 point)**

**5.** **(0.25x4=1 point)**

| Antigone contre Ismène | Antigone contre Créon | Les deux sœurs contre Créon | Créon contre Antigone |
|---|---|---|---|
| - Ah ! non. Pas maintenant ? Pas toi, c'est moi, c'est moi seule -Tu ne te figures …maintenant. | - Allons cuisinier, puisqu'il le faut | - Si vous la faites mourir, il faudra me faire mourir avec elle - Tu l'entends Créon ? Elle aussi | - Emmenez-la |

**6.** « Si vous la faites mourir, il faudra me faire mourir avec elle ». **(1 point)**

**7.** C'est une antithèse qui montre le côté tragique de la pièce et l'impossibilité d'éviter la mort à Antigone. **(1point)**

**8.** Les courtes répliques de Créon montrent qu'il est dominé, qu'il perd le face à face, qu'il ne réalise pas son vœu et qu'il a tout dit et tout fait. **(1 point)**

**9.** Ah ! Non / Pas toi ! / Je ne veux pas/ Laisse-moi/ Qu'est-ce que tu veux toi, aussi ?/ Pas maintenant… **(1 point)**

**10.** « Créon perd son face à face »/ « La fin du face à face»/ « Les deus sœurs contre Créon »/ « La mort inévitable »/ « Deux contre un » … - Accepter toute réponse adéquate **(1 point)**

### II. Production écrite

Lors de la correction de l'écrit, tenir compte des critères suivants : respect de la consigne (1 point), organisation du texte (2 points), choix des arguments précis et pertinents (2 points), correction de la langue : vocabulaire adéquat, orthographe et conjugaison correctes, ponctuation (5 points).$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "*La porte s'ouvre. Entre Ismène.*\n\n**ISMÈNE**, *dans un cri.*\n\nAntigone!\n\n**ANTIGONE**\n\nQu'est-ce que tu veux, toi aussi?\n\n**ISMÈNE**\n\nAntigone, pardon! Antigone, tu vois, je viens, j'ai du courage. J'irai maintenant avec toi.\n\n**ANTIGONE**\n\nOù iras-tu avec moi?\n\n**ISMÈNE**\n\nSi vous la faites mourir, il faudra me faire mourir avec elle!\n\n**ANTIGONE**\n\nAh! Non. Pas maintenant. Pas toi! C'est moi, c'est moi seule. Tu ne te figures pas que tu vas venir mourir avec moi maintenant. Ce serait trop facile!\n\n**ISMÈNE**\n\nJe ne veux pas vivre si tu meurs, je ne veux pas rester sans toi!\n\n**ANTIGONE**\n\nTu as choisi la vie et moi la mort. Laisse-moi maintenant avec tes jérémiades. Il fallait y aller ce matin, à quatre pattes, dans la nuit. Il fallait aller gratter la terre avec tes ongles pendant qu'ils étaient tout près et te faire empoigner par eux comme une voleuse!\n\n**ISMÈNE**\n\nHé bien, j'irai demain!\n\n**ANTIGONE**\n\nTu l'entends, Créon? Elle aussi. Qui sait si cela ne va pas prendre à d'autres encore, en m'écoutant? Qu'est-ce que tu attends pour me faire taire, qu'est-ce que tu attends pour appeler tes gardes? Allons, Créon, un peu de courage, ce n'est qu'un mauvais moment à passer. Allons, cuisinier, puisqu'il le faut!\n\n**CRÉON**, *crie soudain.*\n\nGardes!\n\n*Les gardes apparaissent aussitôt.*\n\n**CRÉON**\n\nEmmenez-la.\n\n**ANTIGONE**, *dans un grand cri soulagé.*\n\nEnfin, Créon!\n\n*Les gardes se jettent sur elle et l'emmènent. Ismène sort en criant derrière elle.*\n\n**ISMÈNE**\n\nAntigone! Antigone!\n\n*Créon est resté seul, le chœur entre et va à lui.*", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Selon vos connaissances de l'œuvre, complétez le tableau suivant que vous recopiez sur votre copie d'examen :", "champs": [{"libelle": "Auteur de l'œuvre", "reponse": "Jean Anouilh"}, {"libelle": "Titre de l'œuvre", "reponse": "Antigone"}, {"libelle": "Genre de l'œuvre", "reponse": "Une tragédie moderne"}, {"libelle": "Fin heureuse ou malheureuse ?", "reponse": "Malheureuse, Créon reste seul, il perd sa femme, son fils, sa nièce…"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Avant cette scène, que demandait Créon à Antigone? Et que cherchait-il ?", "correction": "Créon lui demandait de se taire, de ne pas raconter sa transgression de la loi car il cherchait à la sauver de la peine de mort et la préserver pour le mariage de son fils."}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Relevez dans la scène deux éléments qui montrent qu'il s'agit d'une tragédie.", "correction": "Les deux éléments …tragédie : - Tu as choisi la vie et moi la mort / Allons, cuisinier puisqu'il le faut. - Si vous la faites mourir, il faudra me faire mourir avec elle."}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Pourquoi Ismène demande-t-elle pardon sa sœur ? Qu'a-t-elle fait ?", "correction": "Ismène lui demande pardon car elle avait peur de mourir, elle n'avait pas de courage, elle manquait à son devoir mais à présent, elle est disponible à braver la loi de Créon, elles sont deux sœurs contre Créon"}, {"type": "tableau", "numero": "5", "points": 1, "enonce": "Recopiez le tableau suivant et complétez-le avec des les éléments qui définissent les rapports entre les personnages. Les éléments qui montrent qui est contre qui (un élément par cas) :", "champs": [{"libelle": "Antigone contre Ismène", "reponse": "- Ah ! non. Pas maintenant ? Pas toi, c'est moi, c'est moi seule -Tu ne te figures …maintenant."}, {"libelle": "Antigone contre Créon", "reponse": "- Allons cuisinier, puisqu'il le faut"}, {"libelle": "Les deux sœurs contre Créon", "reponse": "- Si vous la faites mourir, il faudra me faire mourir avec elle - Tu l'entends Créon ? Elle aussi"}, {"libelle": "Créon contre Antigone", "reponse": "- Emmenez-la"}]}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Quelle est la réplique qui rappelle la loi de Créon citée à la 1ère scène, « Le Prologue »?", "correction": "« Si vous la faites mourir, il faudra me faire mourir avec elle »."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Quelle figure de style reconnaissez-vous dans cette réplique et qu'exprime-t-elle? « Tu as choisi la vie et moi la mort. »", "correction": "C'est une antithèse qui montre le côté tragique de la pièce et l'impossibilité d'éviter la mort à Antigone."}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Comment expliquez-vous que Créon parle peu pendant cette scène et ses répliques sont courtes ?", "correction": "Les courtes répliques de Créon montrent qu'il est dominé, qu'il perd le face à face, qu'il ne réalise pas son vœu et qu'il a tout dit et tout fait."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Relevez quatre éléments appartenant aux champs de l'opposition et du refus.", "correction": "Ah ! Non / Pas toi ! / Je ne veux pas/ Laisse-moi/ Qu'est-ce que tu veux toi, aussi ?/ Pas maintenant…"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Donnez un titre à cette scène", "correction": "« Créon perd son face à face »/ « La fin du face à face»/ « Les deus sœurs contre Créon »/ « La mort inévitable »/ « Deux contre un » … - Accepter toute réponse adéquate"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** Dans cette tragédie, tous les protagonistes (personnages) sont perdants.\n\nMontrez-le, en pensant à la valeur de ce que chacun d'eux a perdu et gagné.\n\n**Lors de la correction de votre écrit, on tiendra compte des critères suivants :**\n\n| Critères de réalisation de l'écrit produit | Note attribuée |\n|---|---|\n| Respect de la consigne (traiter le sujet proposé) | 1 point |\n| Organisation du texte | 2 points |\n| Choix des arguments précis et pertinents | 2 points |\n| Correction de la langue : vocabulaire adéquat, orthographe et conjugaison correctes, ponctuation | 5 points |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
