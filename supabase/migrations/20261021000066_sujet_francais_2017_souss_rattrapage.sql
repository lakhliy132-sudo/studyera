-- Sujet de français, examen régional 2017 (session de rattrapage), académie
-- Souss-Massa, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2017 جهة سوس ماسة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie régionale d'éducation et de formation « جهة سوس ماسة » (en-tête en
-- arabe), « الدورة الإستدراكية 2017 » (session de rattrapage, juillet 2017),
-- durée « ساعتان ». Coefficient : 3 pour sciences économiques et gestion, 4
-- pour les autres séries.
-- La feuille ne note pas chaque question : elle porte « I- COMPREHENSION :
-- (10 points) (1ptx10) », d'où le barème « 1pt » par question.
-- Texte transcrit depuis la couche texte du PDF (deux colonnes), vérifié
-- sur le scan. Question 2 : le corrigé écrit « a- au milieu de l'œuvre »
-- alors que « au milieu » est l'option b de la feuille ; recopié tel quel.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2017,
  $sujet$rattrapage$sujet$,
  $sujet$Souss-Massa$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences économiques et gestion, sciences et technologies électriques, sciences et technologies mécaniques, arts appliqués$sujet$,
  120,
  $sujet$## Texte

**CRÉON**

Tu m'amuses!

**ANTIGONE**

Non. Je vous fais peur. C'est pour cela que vous essayez de me sauver. Ce serait tout de même plus commode de garder une petite Antigone vivante et muette dans ce palais. Vous êtes trop sensible pour faire un bon tyran, voilà tout. Mais vous allez tout de même me faire mourir tout à l'heure, vous le savez, et c'est pour cela que vous avez peur. C'est laid un homme qui a peur.

**CRÉON**, *sourdement.*

Eh bien, oui, j'ai peur d'être obligé de te faire tuer si tu t'obstines. Et je ne le voudrais pas.

**ANTIGONE**

Moi, je ne suis pas obligée de faire ce que je ne voudrais pas! Vous n'auriez pas voulu non plus, peut-être, refuser une tombe à mon frère? Dites-le donc, que vous ne l'auriez pas voulu?

**CRÉON**

Je te l'ai dit.

**ANTIGONE**

Et vous l'avez fait tout de même. Et maintenant, vous allez me faire tuer sans le vouloir. Et c'est cela, être roi!

**CRÉON**

Oui, c'est cela!

**ANTIGONE**

Pauvre Créon! Avec mes ongles cassés et pleins de terre et les bleus que tes gardes m'ont faits aux bras, avec ma peur qui me tord le ventre, moi je suis reine.

**CRÉON**

Alors, aie pitié de moi, vis. Le cadavre de ton frère qui pourrit sous mes fenêtres, c'est assez payé pour que l'ordre règne dans Thèbes. Mon fils t'aime. Ne m'oblige pas à payer avec toi encore. J'ai assez payé.

**ANTIGONE**

Non. Vous avez dit « oui », Vous ne vous arrêterez jamais de payer maintenant!

**CRÉON**, *la secoue soudain, hors de lui.*

Mais, bon Dieu! Essaie de comprendre une minute, toi aussi, petite idiote! J'ai bien essayé de te comprendre, moi. Il faut pourtant qu'il y en ait qui disent oui. Il faut pourtant qu'il y en ait qui mènent la barque. Cela prend l'eau de toutes parts, c'est plein de crimes, de bêtise, de misère... Et le gouvernail est là qui ballotte. L'équipage ne veut plus rien faire, il ne pense qu'à piller la cale et les officiers sont déjà en train de se construire un petit radeau confortable, rien que pour eux, avec toute la provision d'eau douce pour tirer au moins leurs os de là. Et le mât craque, et le vent siffle, et les voiles vont se déchirer, et toutes ces brutes vont crever toutes ensemble, parce qu'elles ne pensent qu'à leur peau, à leur précieuse peau et à leurs petites affaires. Crois-tu, alors, qu'on a le temps de faire le raffiné, de savoir s'il faut dire « oui» ou « non», de se demander s'il ne faudra pas payer trop cher un jour et si on pourra encore être un homme après? On prend le bout de bois, on redresse devant la montagne d'eau, on gueule un ordre et on tire dans le tas, sur le premier qui s'avance. Dans le tas! Cela n'a pas de nom. C'est comme la vague qui vient de s'abattre sur le pont devant vous; le vent qui vous gifle, et la chose qui tombe dans le groupe n'a pas de nom. C'était peut-être celui qui t'avait donné du feu en souriant la veille. Il n'a plus de nom. Et toi non plus, tu n'as plus de nom, cramponné à la barre. Il n'y a plus que le bateau qui ait un nom et la tempête. Est-ce que tu le comprends, cela?

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1pt)**

| Titre de l'œuvre | Auteur | Genre | Siècle |
|---|---|---|---|
| | | | |

**2.** Cette scène est située: Recopiez la bonne réponse. Justifiez-la. **(1pt)**

a- au début  
b- au milieu  
c- à la fin de l'œuvre

**3.** a- Quelle est l'intention de Créon ? b- Antigone est-elle d'accord ? Pourquoi ? **(1pt)**

**4.** Répondez par « Vrai » ou « Faux » : **(1pt)**

| | Vrai | Faux |
|---|---|---|
| a- Créon est courageux. | | |
| b- Créon fait peur à Antigone. | | |
| c- Créon change de comportement. | | |
| d- Créon ne veut pas tuer Antigone. | | |

**5.** Relevez dans le texte deux arguments présentés par Créon pour convaincre Antigone . **(1pt)**

**6.** La didascalie suivante « ***la secoue soudain, hors de lui.*** », montre : Recopiez la bonne réponse. **(1pt)**

a- un Créon calme  
b- un Créon en colère  
c- un Créon sage

**7.** Relevez dans le texte quatre mots appartenant au champ lexical de la marine. **(1pt)**

**8.** « ***On gueule un ordre et on tire dans le tas***. » A quel niveau de langue appartient cet énoncé ? **(1pt)**

**9.** Si vous étiez à la place de Créon, agiriez-vous de la même façon? Pourquoi ? **(1pt)**

**10.** Pour bien communiquer avec les autres, il faut éviter de dire « Non ». Etes-vous d'accord ? Pourquoi ? **(1pt)**

## II. Production écrite (10 points)

*« Seules les personnes âgées peuvent nous donner de bons conseils. »*

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
| Antigone | Jean Anouilh | Théâtre, tragédie moderne | 20ème (XX°) |

**2.** a- au milieu de l'œuvre (1/2pt) Justification : C'est le nœud. Arrêtée, Antigone est conduite devant Créon. (1/2pt) **(1pt)**

**3.** **a**-Créon veut sauver Antigone. (1/2pt) **b**- Non. (1/4pt) Justification:« *Moi, je ne suis pas obligée de faire ce que je ne voudrais pas!* » (1/4pt) **(1pt)**

**4.** **(1pt)**

| | |
|---|---|
| a- Créon est courageux. | Faux |
| b- Créon fait peur à Antigone. | Faux |
| c- Créon change de comportement. | Vrai |
| d- Créon ne veut pas tuer Antigone. | Vrai |

**5.** 2 arguments : - Faire régner l'ordre dans Thèbes. (1/2pt) - « *Mon fils t'aime*. » (1/2pt) **(1pt)**

**6.** b- un Créon en colère **(1pt)**

**7.** barque – gouvernail – équipage – radeau – mât – voile, … (1/4ptx4) **(1pt)**

**8.** Familier. **(1pt)**

**9.** Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue. **(1pt)**

**10.** Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue. **(1pt)**

### II. Production écrite

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| | 5pts | Vocabulaire (usage de termes précis et variés) | 5pts |
| Conformité de la production à la consigne d'écriture | | Syntaxe (construction de phrases correctes) | |
| Cohérence de l'argumentation | | Ponctuation (usage d'une ponctuation adéquate) | |
| Structure du texte (organisation et progression du texte) | | Orthographe d'usage et grammaticale (respect des règles) | |
| | | Conjugaison (emploi des temps) | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**CRÉON**\n\nTu m'amuses!\n\n**ANTIGONE**\n\nNon. Je vous fais peur. C'est pour cela que vous essayez de me sauver. Ce serait tout de même plus commode de garder une petite Antigone vivante et muette dans ce palais. Vous êtes trop sensible pour faire un bon tyran, voilà tout. Mais vous allez tout de même me faire mourir tout à l'heure, vous le savez, et c'est pour cela que vous avez peur. C'est laid un homme qui a peur.\n\n**CRÉON**, *sourdement.*\n\nEh bien, oui, j'ai peur d'être obligé de te faire tuer si tu t'obstines. Et je ne le voudrais pas.\n\n**ANTIGONE**\n\nMoi, je ne suis pas obligée de faire ce que je ne voudrais pas! Vous n'auriez pas voulu non plus, peut-être, refuser une tombe à mon frère? Dites-le donc, que vous ne l'auriez pas voulu?\n\n**CRÉON**\n\nJe te l'ai dit.\n\n**ANTIGONE**\n\nEt vous l'avez fait tout de même. Et maintenant, vous allez me faire tuer sans le vouloir. Et c'est cela, être roi!\n\n**CRÉON**\n\nOui, c'est cela!\n\n**ANTIGONE**\n\nPauvre Créon! Avec mes ongles cassés et pleins de terre et les bleus que tes gardes m'ont faits aux bras, avec ma peur qui me tord le ventre, moi je suis reine.\n\n**CRÉON**\n\nAlors, aie pitié de moi, vis. Le cadavre de ton frère qui pourrit sous mes fenêtres, c'est assez payé pour que l'ordre règne dans Thèbes. Mon fils t'aime. Ne m'oblige pas à payer avec toi encore. J'ai assez payé.\n\n**ANTIGONE**\n\nNon. Vous avez dit « oui », Vous ne vous arrêterez jamais de payer maintenant!\n\n**CRÉON**, *la secoue soudain, hors de lui.*\n\nMais, bon Dieu! Essaie de comprendre une minute, toi aussi, petite idiote! J'ai bien essayé de te comprendre, moi. Il faut pourtant qu'il y en ait qui disent oui. Il faut pourtant qu'il y en ait qui mènent la barque. Cela prend l'eau de toutes parts, c'est plein de crimes, de bêtise, de misère... Et le gouvernail est là qui ballotte. L'équipage ne veut plus rien faire, il ne pense qu'à piller la cale et les officiers sont déjà en train de se construire un petit radeau confortable, rien que pour eux, avec toute la provision d'eau douce pour tirer au moins leurs os de là. Et le mât craque, et le vent siffle, et les voiles vont se déchirer, et toutes ces brutes vont crever toutes ensemble, parce qu'elles ne pensent qu'à leur peau, à leur précieuse peau et à leurs petites affaires. Crois-tu, alors, qu'on a le temps de faire le raffiné, de savoir s'il faut dire « oui» ou « non», de se demander s'il ne faudra pas payer trop cher un jour et si on pourra encore être un homme après? On prend le bout de bois, on redresse devant la montagne d'eau, on gueule un ordre et on tire dans le tas, sur le premier qui s'avance. Dans le tas! Cela n'a pas de nom. C'est comme la vague qui vient de s'abattre sur le pont devant vous; le vent qui vous gifle, et la chose qui tombe dans le groupe n'a pas de nom. C'était peut-être celui qui t'avait donné du feu en souriant la veille. Il n'a plus de nom. Et toi non plus, tu n'as plus de nom, cramponné à la barre. Il n'y a plus que le bateau qui ait un nom et la tempête. Est-ce que tu le comprends, cela?", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "Antigone"}, {"libelle": "Auteur", "reponse": "Jean Anouilh"}, {"libelle": "Genre", "reponse": "Théâtre, tragédie moderne"}, {"libelle": "Siècle", "reponse": "20ème (XX°)"}]}, {"type": "choix", "numero": "2", "points": 1, "enonce": "Cette scène est située: Recopiez la bonne réponse. Justifiez-la.", "options": ["au début", "au milieu", "à la fin de l'œuvre"], "bonne": 1}, {"type": "libre", "numero": "3", "points": 1, "enonce": "a- Quelle est l'intention de Créon ? b- Antigone est-elle d'accord ? Pourquoi ?", "correction": "**a**-Créon veut sauver Antigone. (1/2pt) **b**- Non. (1/4pt) Justification:« *Moi, je ne suis pas obligée de faire ce que je ne voudrais pas!* » (1/4pt)"}, {"type": "vrai-faux", "numero": "4", "points": 1, "enonce": "Répondez par « Vrai » ou « Faux » :", "affirmations": [{"texte": "a- Créon est courageux.", "vrai": false}, {"texte": "b- Créon fait peur à Antigone.", "vrai": false}, {"texte": "c- Créon change de comportement.", "vrai": true}, {"texte": "d- Créon ne veut pas tuer Antigone.", "vrai": true}]}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Relevez dans le texte deux arguments présentés par Créon pour convaincre Antigone .", "correction": "2 arguments : - Faire régner l'ordre dans Thèbes. (1/2pt) - « *Mon fils t'aime*. » (1/2pt)"}, {"type": "choix", "numero": "6", "points": 1, "enonce": "La didascalie suivante « ***la secoue soudain, hors de lui.*** », montre : Recopiez la bonne réponse.", "options": ["un Créon calme", "un Créon en colère", "un Créon sage"], "bonne": 1}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez dans le texte quatre mots appartenant au champ lexical de la marine.", "correction": "barque – gouvernail – équipage – radeau – mât – voile, … (1/4ptx4)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "« ***On gueule un ordre et on tire dans le tas***. » A quel niveau de langue appartient cet énoncé ?", "correction": "Familier."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Si vous étiez à la place de Créon, agiriez-vous de la même façon? Pourquoi ?", "correction": "Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Pour bien communiquer avec les autres, il faut éviter de dire « Non ». Etes-vous d'accord ? Pourquoi ?", "correction": "Acceptez toute formulation adéquate où le candidat prend position par rapport au contenu du passage (à son contexte) en justifiant son point de vue."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "*« Seules les personnes âgées peuvent nous donner de bons conseils. »*\n\nPartagez-vous ce point de vue ?\n\nDéveloppez votre réflexion en vous appuyant sur des arguments précis.\n\n| ***Critères d'évaluation du discours*** | | ***Critères d'évaluation de la langue*** | |\n|---|---|---|---|\n| Conformité de la production à la consigne d'écriture | 5PTS | Vocabulaire (usage de termes précis et variés) | 5PTS |\n| Cohérence de l'argumentation | | Syntaxe (construction de phrases correctes) | |\n| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |\n| | | Orthographe d'usage et grammaticale (respect des règles) | |\n| | | Conjugaison (emploi des temps) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
