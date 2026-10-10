-- Sujet de français, examen régional 2013 (session normale), académie
-- Rabat-Salé-Kénitra, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2013 جهة الرباط سلا القنيطرة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Rabat-Salé-Zemmour-Zaër (aujourd'hui Rabat-Salé-Kénitra),
-- session normale 2013, durée « 2 س » (en-tête en arabe) ; coefficient non
-- relevé. Corrigé recopié tel quel, y compris l'année d'édition « 1942 »
-- (la pièce a été créée en 1944). Le barème du corrigé est en partie
-- illisible sur le scan (« ] » pour 1) ; 1 point par question, comme dans
-- le sujet.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2013,
  $sujet$normale$sujet$,
  $sujet$Rabat-Salé-Kénitra$sujet$,
  $sujet$Antigone$sujet$,
  120,
  $sujet$## Texte

**ISMÈNE**, *dans un cri.*

Antigone !

**ANTIGONE**

Qu'est-ce que tu veux, toi aussi ?

**ISMÈNE**

Antigone, pardon ! Antigone, tu vois, je viens, j'ai du courage. J'irai maintenant avec toi.

**ANTIGONE**

Où iras-tu avec moi ?

**ISMÈNE**

Si vous la faites mourir, il faudra me faire mourir avec elle !

**ANTIGONE**

Ah ! non. Pas maintenant. Pas toi ! C'est moi, c'est moi seule. Tu ne te figures pas que tu vas venir mourir avec moi maintenant. Ce serait trop facile !

**ISMÈNE**

Je ne veux pas vivre si tu meurs, je ne veux pas rester sans toi !

**ANTIGONE**

Tu as choisi la vie et moi la mort. Laisse-moi maintenant avec tes jérémiades. Il fallait y aller ce matin, à quatre pattes, dans la nuit. Il fallait aller gratter la terre avec tes ongles pendant qu'ils étaient tout près et te faire empoigner par eux comme une voleuse !

**ISMÈNE**

Eh bien, j'irai demain !

**ANTIGONE**

Tu l'entends, Créon ? Elle aussi. Qui sait si cela ne va pas prendre à d'autres encore, en m'écoutant ? Qu'est-ce que tu attends pour me faire taire, qu'est-ce que tu attends pour appeler tes gardes ? Allons, Créon, un peu de courage, ce n'est qu'un mauvais moment à passer. Allons, cuisinier, puisqu'il le faut !

**CRÉON**, *crie soudain.*

Gardes !

*Les gardes apparaissent aussitôt.*

**CRÉON**

Emmenez-la.

**ANTIGONE**, *dans un cri soulagé.*

Enfin, Créon !

*Les gardes se jettent sur elle et l'emmènent. Ismène sort en criant derrière elle.*

**ISMÈNE**

Antigone ! Antigone !

## I. Étude de texte (10 points)

**1.** Recopie et complète le tableau suivant : **(1 point)**

| Nom de l'auteur | Titre de l'œuvre | Genre littéraire | Année d'édition |
|---|---|---|---|
| | | | |

**2.** Situe ce passage dans l'œuvre dont il est extrait. **(1point)**

**3.** Relève dans le texte la phrase qui montre clairement que les deux sœurs n'ont pas le même destin. **(1 pt)**

**4.** D'après le texte, par quels mots de la liste suivante peux-tu remplacer le terme « jérémiades » ? : joies ; pleurs ; encouragements ; plaisirs ; plaintes ; satisfactions. **(1 point)**

**5.** Quel est l'effet de sens produit par la comparaison suivante : - «Il fallait te faire empoigner par eux comme une voleuse. » **(1 point)**

**6.** D'après ta connaissance de l'œuvre, propose quatre adjectifs (deux pour Antigone et deux pour Ismène) qui montrent la différence de caractère des deux sœurs. **(1point)**

**7.** Que signifie le verbe « taire » dans la question suivante : « Qu'est-ce que tu attends pour me faire taire ? » **(1 point)**

**8.** La dernière didascalie du passage précise que les gardes « se jettent sur Antigone et l'emmènent. ». D'après la fin de l'œuvre : Recopie la réponse de ton choix. **(1 point)**

a- Antigone sera libérée ;  
b- Antigone sera emprisonnée :  
c- Antigone sera jetée dans un trou :  
d- Antigone sera laissée aux animaux.

**9.** Que penses-tu de la réaction d'Ismène face à la situation de sa sœur ? Réponds en justifiant ton point de vue (deux à trois phrases). **(1 point)**

**10.** À ton avis, qui semble être le plus courageux dans ce passage, Créon ou Antigone ? Donne ton point de vue en le justifiant (deux à trois phrases). **(1 point)**

## II. Production écrite (10 points)

**Sujet :** Les œuvres au programme présentent trois exemples d'hommes : un père affectueux (le condamné), un père responsable (Si Abdeslem) et un oncle autoritaire (Créon).

Partant de ces exemples, quel serait le bon père pour toi ? Donne ton point de vue en le justifiant par des arguments variés et des exemples précis.

**La rédaction sera évaluée selon les critères suivants**

1. Pertinence (respect de la consigne)
2. Cohérence de l'argumentation
3. Structure du texte
4. Vocabulaire (usage de termes précis et variés)
5. Syntaxe (construction de phrases correctes)
6. Ponctuation (usage d'une ponctuation adéquate)
7. Orthographe d'usage et grammaticale (respect des règles)
8. Conjugaison (emploi des temps)$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponse et barème de correction (Les réponses non prévues sont laissées à l'appréciation des correcteurs).*

### I. Étude de texte

**1.** **(1 point)**

| Nom de l'auteur | Titre de l'œuvre | Genre littéraire | Année d'édition |
|---|---|---|---|
| Jean Anouilh | Antigone | Tragédie moderne | 1942 |

**2.** Indications : - Créon presse Antigone de nier avoir essayé d'enterrer son frère. - Antigone pousse Créon à appliquer la loi. - Ismène, jusque-là différente de sa sœur, vient lui manifester sa solidarité. **(1point)**

**3.** - Tu as choisi la vie et moi la mort. **(1 pt)**

**4.** a- pleurs ; b- plaintes. (0,5x2) **(1 point)**

**5.** Ex. Idée de « mauvais traitement/humiliation. » **(1 point)**

**6.** Ex. a-Antigone : courageuse : révoltée/rebelle. b- Ismène : peureuse ; soumise/résignée. (0,25x4) **(1point)**

**7.** Ex. : - mourir/tuer/condamner/exécuter/réduire au silence. **(1 point)**

**8.** c- Antigone sera jetée dans un trou : **(1 point)**

**9.** Accepter toute réponse correcte et pertinente. **(1 point)**

**10.** Accepter toute réponse correcte et pertinente. **(1 point)**

### II. Production écrite

*Compétence visée : produire un texte argumentatif*

| | |
|---|---|
| **Critères d'évaluation du discours** | **5 pts** |
| 1 Respect de la consigne | 1 |
| 2 Cohérence de l'argumentation | 2 |
| 3 Structure du texte | 2 |
| **Critères d'évaluation de la langue** | **5 pts** |
| 4 Vocabulaire (usage de termes précis et variés) | 1 |
| 5 Syntaxe (construction de phrases correctes) | 1 |
| 6 Ponctuation (usage d'une ponctuation adéquate) | 1 |
| 7 Orthographe d'usage et grammaticale (respect des règles) | 1 |
| 8 Conjugaison (emploi des temps) | 1 |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**ISMÈNE**, *dans un cri.*\n\nAntigone !\n\n**ANTIGONE**\n\nQu'est-ce que tu veux, toi aussi ?\n\n**ISMÈNE**\n\nAntigone, pardon ! Antigone, tu vois, je viens, j'ai du courage. J'irai maintenant avec toi.\n\n**ANTIGONE**\n\nOù iras-tu avec moi ?\n\n**ISMÈNE**\n\nSi vous la faites mourir, il faudra me faire mourir avec elle !\n\n**ANTIGONE**\n\nAh ! non. Pas maintenant. Pas toi ! C'est moi, c'est moi seule. Tu ne te figures pas que tu vas venir mourir avec moi maintenant. Ce serait trop facile !\n\n**ISMÈNE**\n\nJe ne veux pas vivre si tu meurs, je ne veux pas rester sans toi !\n\n**ANTIGONE**\n\nTu as choisi la vie et moi la mort. Laisse-moi maintenant avec tes jérémiades. Il fallait y aller ce matin, à quatre pattes, dans la nuit. Il fallait aller gratter la terre avec tes ongles pendant qu'ils étaient tout près et te faire empoigner par eux comme une voleuse !\n\n**ISMÈNE**\n\nEh bien, j'irai demain !\n\n**ANTIGONE**\n\nTu l'entends, Créon ? Elle aussi. Qui sait si cela ne va pas prendre à d'autres encore, en m'écoutant ? Qu'est-ce que tu attends pour me faire taire, qu'est-ce que tu attends pour appeler tes gardes ? Allons, Créon, un peu de courage, ce n'est qu'un mauvais moment à passer. Allons, cuisinier, puisqu'il le faut !\n\n**CRÉON**, *crie soudain.*\n\nGardes !\n\n*Les gardes apparaissent aussitôt.*\n\n**CRÉON**\n\nEmmenez-la.\n\n**ANTIGONE**, *dans un cri soulagé.*\n\nEnfin, Créon !\n\n*Les gardes se jettent sur elle et l'emmènent. Ismène sort en criant derrière elle.*\n\n**ISMÈNE**\n\nAntigone ! Antigone !", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopie et complète le tableau suivant :", "champs": [{"libelle": "Nom de l'auteur", "reponse": "Jean Anouilh"}, {"libelle": "Titre de l'œuvre", "reponse": "Antigone"}, {"libelle": "Genre littéraire", "reponse": "Tragédie moderne"}, {"libelle": "Année d'édition", "reponse": "1942"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Situe ce passage dans l'œuvre dont il est extrait.", "correction": "Indications : - Créon presse Antigone de nier avoir essayé d'enterrer son frère. - Antigone pousse Créon à appliquer la loi. - Ismène, jusque-là différente de sa sœur, vient lui manifester sa solidarité."}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Relève dans le texte la phrase qui montre clairement que les deux sœurs n'ont pas le même destin.", "correction": "- Tu as choisi la vie et moi la mort."}, {"type": "libre", "numero": "4", "points": 1, "enonce": "D'après le texte, par quels mots de la liste suivante peux-tu remplacer le terme « jérémiades » ? : joies ; pleurs ; encouragements ; plaisirs ; plaintes ; satisfactions.", "correction": "a- pleurs ; b- plaintes. (0,5x2)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Quel est l'effet de sens produit par la comparaison suivante : - «Il fallait te faire empoigner par eux comme une voleuse. »", "correction": "Ex. Idée de « mauvais traitement/humiliation. »"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "D'après ta connaissance de l'œuvre, propose quatre adjectifs (deux pour Antigone et deux pour Ismène) qui montrent la différence de caractère des deux sœurs.", "correction": "Ex. a-Antigone : courageuse : révoltée/rebelle. b- Ismène : peureuse ; soumise/résignée. (0,25x4)"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Que signifie le verbe « taire » dans la question suivante : « Qu'est-ce que tu attends pour me faire taire ? »", "correction": "Ex. : - mourir/tuer/condamner/exécuter/réduire au silence."}, {"type": "choix", "numero": "8", "points": 1, "enonce": "La dernière didascalie du passage précise que les gardes « se jettent sur Antigone et l'emmènent. ». D'après la fin de l'œuvre : Recopie la réponse de ton choix.", "options": ["Antigone sera libérée ;", "Antigone sera emprisonnée :", "Antigone sera jetée dans un trou :", "Antigone sera laissée aux animaux."], "bonne": 2}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Que penses-tu de la réaction d'Ismène face à la situation de sa sœur ? Réponds en justifiant ton point de vue (deux à trois phrases).", "correction": "Accepter toute réponse correcte et pertinente."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "À ton avis, qui semble être le plus courageux dans ce passage, Créon ou Antigone ? Donne ton point de vue en le justifiant (deux à trois phrases).", "correction": "Accepter toute réponse correcte et pertinente."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** Les œuvres au programme présentent trois exemples d'hommes : un père affectueux (le condamné), un père responsable (Si Abdeslem) et un oncle autoritaire (Créon).\n\nPartant de ces exemples, quel serait le bon père pour toi ? Donne ton point de vue en le justifiant par des arguments variés et des exemples précis.\n\n**La rédaction sera évaluée selon les critères suivants**\n\n1. Pertinence (respect de la consigne)\n2. Cohérence de l'argumentation\n3. Structure du texte\n4. Vocabulaire (usage de termes précis et variés)\n5. Syntaxe (construction de phrases correctes)\n6. Ponctuation (usage d'une ponctuation adéquate)\n7. Orthographe d'usage et grammaticale (respect des règles)\n8. Conjugaison (emploi des temps)", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
