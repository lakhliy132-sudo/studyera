-- Sujet de français, examen régional 2018 (session de rattrapage), académie
-- Guelmim-Oued Noun.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2018 جهة كلميم واد نون »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Deux textes : le texte 1 est tiré de « La Boîte à merveilles », le texte 2
-- du « Dernier Jour d'un condamné » (œuvre laissée vide pour cette raison).
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين جهة كلميم - واد نون »,
-- « الامتحان الجهوي الموحد لنيل شهادة البكالوريا ( دورة يوليوز 2018 ) » (session
-- de rattrapage), « الأولى بكالوريا - المترشحون المتمدرسون », « مادة: اللغة الفرنسية »,
-- durée « ساعتان ». Coefficient 4 pour lettres et sciences humaines, sciences
-- expérimentales, sciences mathématiques, sciences et technologies, arts
-- appliqués ; 3 pour sciences économiques et gestion : laissé vide.
-- Barème : la feuille ne donne que « 10 points (1pt. X 10) » pour l'étude de
-- texte, sans barème par question ; le détail (½ pt, ¼ pt…) vient du corrigé.
-- Question 1 : seules les cases pointillées sont à remplir (les autres sont
-- noircies sur la feuille) : auteur et personnage principal du texte 1,
-- titre et genre du texte 2.
-- Question 8 b : la feuille termine l'affirmation par un point
-- d'interrogation ; recopié tel quel.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2018,
  $sujet$rattrapage$sujet$,
  $sujet$Guelmim-Oued Noun$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies, sciences économiques et gestion, arts appliqués$sujet$,
  120,
  $sujet$## Texte

**TEXTE 1 :**

Mon père se levait toujours le premier. Je voyais vaguement sa silhouette dans le demi-jour danser lentement. Il s'enroulait autour des reins une corde de plusieurs coudées en poil de chèvre, qui lui servait de ceinture. Pour cela, il tournait sur lui-même, soulevait une jambe pour laisser passer la corde, soulevait l'autre alternativement, faisait des gestes larges de ses bras. Il procédait ensuite à l'arrangement de son turban, mettait sa djellaba et sortait en silence. Ma mère dormait.

Ce matin, j'entendis mon père lui chuchoter :

– Ne l'envoie pas au Msid, il semble bien fatigué. Ma mère acquiesça et se replongea dans ses couvertures. Toute la maison dormait encore.

Deux moineaux vinrent se poser sur le mur du patio, je les entendais sautiller d'un endroit à l'autre, frappant l'air de leurs courtes ailes. Ils discutaient avec passion et je comprenais leur langage. Ce fut un dialogue passionné : ils affirmèrent ceci avec conviction :

– J'aime les figues sèches.

– Pourquoi aimes-tu les figues sèches ?

– Tout le monde aime les figues sèches.

– Oui ! Oui ! Oui !

– Tout le monde aime les figues sèches.

Les figues sèches ! Les figues sèches ! Les figues sèches !

Les ailes froufroutèrent, les deux moineaux partirent continuer leur conversation sur d'autres toits. Je comprenais le langage des oiseaux et de bien d'autres bêtes encore, mais ils ne le savaient pas et s'enfuyaient à mon approche. J'en éprouvais beaucoup de peine.

**TEXTE 2 :**

Pendant le peu d'heures que j'ai passées à l'infirmerie, je m'étais assis près d'une fenêtre, au soleil - il avait reparu - ou du moins recevant du soleil tout ce que les grilles de la croisée m'en laissaient.

J'étais là, ma tête pesante et embrassée dans mes deux mains, qui en avaient plus qu'elles n'en pouvaient porter mes coudes sur mes genoux, les pieds sur les barreaux de ma chaise ; car l'abattement fait que je me courbe et me replie sur moi-même comme si je n'avais plus ni os dans les membres ni muscles dans la chair.

L'odeur étouffée de la prison me suffoquait plus que jamais, j'avais encore dans l'oreille tout ce bruit de chaînes des galériens, j'éprouvais une grande lassitude de Bicêtre. Il me semblait que le bon Dieu devrait bien avoir pitié de moi et m'envoyer au moins un petit oiseau pour chanter là, en face, au bord du toit.

Je ne sais si ce fut le bon Dieu ou le démon qui m'exauça ; mais presque au même moment j'entendis s'élever sous ma fenêtre une voix, non celle d'un oiseau, mais bien mieux : la voix pure, fraîche, veloutée d'une jeune fille de quinze ans. Je levai la tête comme en sursaut, j'écoutai avidement la chanson qu'elle chantait. C'était un air lent et langoureux, une espèce de roucoulement triste et lamentable…

## I. Étude de texte (10 points)

**1.** Recopiez le tableau suivant et remplissez seulement les cases pointillées :

| Texte 1 — Auteur | Texte 1 — Personnage principal | Texte 2 — Titre de l'œuvre | Texte 2 — Genre |
|---|---|---|---|
| | | | |

**2a.** Pour situer les deux textes dans les œuvres dont ils sont extraits choisissez la bonne réponse : Texte 1 — Fatigué, l'enfant ne va pas au M'SID car :

a- Il était en visite avec sa mère à Lalla AICHA.  
b- Il était griffé par un matou.  
c- Il était avec son père à la mosquée.

**2b.** Texte 2 — Le condamné se trouve à Bicêtre juste après le fait suivant :

a- Il s'était évanoui et transporté à l'infirmerie.  
b- Il s'est disputé avec un autre condamné et mis seul dans un cachot.  
c- Il est dans son cachot et pense à Pipéta.

**3a.** I.2. ANALYSE — Questions relatives au texte1 : a. Relevez dans le texte deux verbes par lesquels le narrateur désigne le langage des oiseaux.

**3b.** b. Quel est l'effet du chant d'oiseau sur l'imaginaire de l'enfant ?

**4a.** « *Ils discutaient avec passion et je comprenais leur langage.* » a. Quelle figure de style est exprimée dans cet énoncé ?

**4b.** b. Quelle image voudrait transmettre le narrateur par l'utilisation de cette figure de style ?

**5a.** Questions relatives au texte2 : a. Relevez dans le texte deux termes relatifs au champ lexical de la chanson.

**5b.** b. Quel est l'impact de la chanson écoutée sur la psychologie (le sentiment) du narrateur ?

**6.** En attendant la voix d'un oiseau, quelle réaction fait le narrateur quand il a écouté la chanson d'une jeune fille ? Relevez un indice dans le texte.

**7.** Questions relatives aux deux textes 1et 2 : Comment vous expliquez, d'après les deux textes, que les deux narrateurs sont tellement tristes ?

**8.** Répondez par « vrai » ou « faux » :

| | Vrai | Faux |
|---|---|---|
| a. Le matin, très tôt, quand le père se réveilla, il parlait à haute voix. (Texte 1) | | |
| b. Les deux moineaux chantaient toujours sur le même toit de la maison ? (Texte 1) | | |
| c. Le narrateur restait indifférent face à la chanson de la jeune fille. (Texte 2) | | |
| d. La jeune fille chantait sous une fenêtre. (Texte 2) | | |

**9.** I. 3. RÉACTION : La musique parait-elle un bon moyen pour se soulager ? Justifiez par un argument pertinent.

**10.** D'après votre lecture de l'œuvre ''La Boite à Merveilles'', comment vous expliquez l'attachement de l'enfant aux moineaux ?

## II. Production écrite (10 points)

**Sujet :**

De nos jours, certains jeunes passent leur temps de loisirs dans des salles de sport ou dans des cafés pour regarder des matchs de football. D'autres, au contraire, préfèrent s'intéresser aux activités artistiques (musique, peinture, photographie, lecture…), tout en adhérant à des associations de la société civile. Quel est d'après vous, la meilleure façon pour bénéficier plus de son temps de loisirs ?

Rédigez un texte argumentatif dans lequel vous défendez votre point de vue à l'aide d'arguments pertinents étayés d'exemples précis.

***Lors de la rédaction, vous tenez compte des critères suivants :***

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |
| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Respect des règles orthographiques et grammaticales. | |
| | | Conjugaison (emploi des temps verbaux) | |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute réponse non prévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** 

| Texte 1 — Auteur | Texte 1 — Personnage principal | Texte 2 — Titre de l'œuvre | Texte 2 — Genre |
|---|---|---|---|
| Ahmed Sefrioui | Sidi Mohamed | Le dernier jour d'un condamné | Un roman à thèse |

**2a.** Réponse **b.** Il était griffé par un matou. (½ pt.)

**2b.** Réponse **a.** Il s'était évanoui et transporté à l'infirmerie. (½ pt.)

**3a.** Deux verbes (langage des oiseaux) : *sautier, frappant, discutaient, affirmèrent, froufroutèrent*. (½ pt. (¼ x2))

**3b.** L'effet du chant d'oiseau sur l'imaginaire de l'enfant : il pense qu'il est capable de comprendre les paroles et le langage des oiseux voire même des bêtes. (½ pt.)

**4a.** figure de style est exprimée dans cet énoncé : la personnification. (½ pt.)

**4b.** l'image que voudrait transmettre le narrateur par l'utilisation de cette figure de style : il est seul, mais il est capable de nouer des relations d'amitiés avec les oiseaux, les bêtes. (½ pt.)

**5a.** Deux termes relatifs au champ lexical de la chanson : *chanter, une voix, la chanson, chantait*. (½ pt. (¼ x2))

**5b.** L'effet de la chanson écoutée sur la psychologie (le sentiment) du narrateur : il se soulage, il s'oublie dans la voix pure, fraiche et veloutée de la jeune fille, il se libère de ses tensions. (½ pt.)

**6.** La réaction du narrateur : Il était surpris : « *Je levai la tête comme en sursaut* » (1pt. (½ x2))

**7.** Au début, sidi Mohammed parait un enfant solitaire, car il était malade et fatigué, son père quitta la maison alors que sa mère dormait encore. Le condamné, lui aussi semble triste, car il vient d'être transporté de l'infirmerie à Bicêtre ; il souffre doublement : de la maladie (s'évanouit puis guéri) et de son emprisonnement. (1pt.)

**8.** 

| | |
|---|---|
| a. Le matin, très tôt, quand le père se réveilla, il parlait à haute voix. (Texte 1) | Faux |
| b. Les deux moineaux chantaient toujours sur le même toit de la maison ? (Texte 1) | Faux |
| c. Le narrateur restait indifférent face à la chanson de la jeune fille. (Texte 2) | Faux |
| d. La jeune fille chantait sous une fenêtre. (Texte 2) | Vrai |

**9.** Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. (1pt. (½ x 2))

**10.** Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. (1pt. (½ x 2))

### II. Production écrite

*Lors de la correction, vous tenez compte des critères suivants :*

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |
| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Respect des règles orthographiques et grammaticales. | |
| | | Conjugaison (emploi des temps verbaux) | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "I.1. CONTEXTUALISATION : Lisez attentivement ces deux textes tirés des œuvres étudiées et répondez aux questions suivantes.", "texte": "**TEXTE 1 :**\n\nMon père se levait toujours le premier. Je voyais vaguement sa silhouette dans le demi-jour danser lentement. Il s'enroulait autour des reins une corde de plusieurs coudées en poil de chèvre, qui lui servait de ceinture. Pour cela, il tournait sur lui-même, soulevait une jambe pour laisser passer la corde, soulevait l'autre alternativement, faisait des gestes larges de ses bras. Il procédait ensuite à l'arrangement de son turban, mettait sa djellaba et sortait en silence. Ma mère dormait.\n\nCe matin, j'entendis mon père lui chuchoter :\n\n– Ne l'envoie pas au Msid, il semble bien fatigué. Ma mère acquiesça et se replongea dans ses couvertures. Toute la maison dormait encore.\n\nDeux moineaux vinrent se poser sur le mur du patio, je les entendais sautiller d'un endroit à l'autre, frappant l'air de leurs courtes ailes. Ils discutaient avec passion et je comprenais leur langage. Ce fut un dialogue passionné : ils affirmèrent ceci avec conviction :\n\n– J'aime les figues sèches.\n\n– Pourquoi aimes-tu les figues sèches ?\n\n– Tout le monde aime les figues sèches.\n\n– Oui ! Oui ! Oui !\n\n– Tout le monde aime les figues sèches.\n\nLes figues sèches ! Les figues sèches ! Les figues sèches !\n\nLes ailes froufroutèrent, les deux moineaux partirent continuer leur conversation sur d'autres toits. Je comprenais le langage des oiseaux et de bien d'autres bêtes encore, mais ils ne le savaient pas et s'enfuyaient à mon approche. J'en éprouvais beaucoup de peine.\n\n**TEXTE 2 :**\n\nPendant le peu d'heures que j'ai passées à l'infirmerie, je m'étais assis près d'une fenêtre, au soleil - il avait reparu - ou du moins recevant du soleil tout ce que les grilles de la croisée m'en laissaient.\n\nJ'étais là, ma tête pesante et embrassée dans mes deux mains, qui en avaient plus qu'elles n'en pouvaient porter mes coudes sur mes genoux, les pieds sur les barreaux de ma chaise ; car l'abattement fait que je me courbe et me replie sur moi-même comme si je n'avais plus ni os dans les membres ni muscles dans la chair.\n\nL'odeur étouffée de la prison me suffoquait plus que jamais, j'avais encore dans l'oreille tout ce bruit de chaînes des galériens, j'éprouvais une grande lassitude de Bicêtre. Il me semblait que le bon Dieu devrait bien avoir pitié de moi et m'envoyer au moins un petit oiseau pour chanter là, en face, au bord du toit.\n\nJe ne sais si ce fut le bon Dieu ou le démon qui m'exauça ; mais presque au même moment j'entendis s'élever sous ma fenêtre une voix, non celle d'un oiseau, mais bien mieux : la voix pure, fraîche, veloutée d'une jeune fille de quinze ans. Je levai la tête comme en sursaut, j'écoutai avidement la chanson qu'elle chantait. C'était un air lent et langoureux, une espèce de roucoulement triste et lamentable…", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez le tableau suivant et remplissez seulement les cases pointillées :", "champs": [{"libelle": "Texte 1 — Auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Texte 1 — Personnage principal", "reponse": "Sidi Mohamed"}, {"libelle": "Texte 2 — Titre de l'œuvre", "reponse": "Le dernier jour d'un condamné"}, {"libelle": "Texte 2 — Genre", "reponse": "Un roman à thèse"}]}, {"type": "choix", "numero": "2a", "points": 0.5, "enonce": "Pour situer les deux textes dans les œuvres dont ils sont extraits choisissez la bonne réponse : Texte 1 — Fatigué, l'enfant ne va pas au M'SID car :", "options": ["Il était en visite avec sa mère à Lalla AICHA.", "Il était griffé par un matou.", "Il était avec son père à la mosquée."], "bonne": 1}, {"type": "choix", "numero": "2b", "points": 0.5, "enonce": "Texte 2 — Le condamné se trouve à Bicêtre juste après le fait suivant :", "options": ["Il s'était évanoui et transporté à l'infirmerie.", "Il s'est disputé avec un autre condamné et mis seul dans un cachot.", "Il est dans son cachot et pense à Pipéta."], "bonne": 0}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "I.2. ANALYSE — Questions relatives au texte1 : a. Relevez dans le texte deux verbes par lesquels le narrateur désigne le langage des oiseaux.", "correction": "Deux verbes (langage des oiseaux) : *sautier, frappant, discutaient, affirmèrent, froufroutèrent*. (½ pt. (¼ x2))"}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "b. Quel est l'effet du chant d'oiseau sur l'imaginaire de l'enfant ?", "correction": "L'effet du chant d'oiseau sur l'imaginaire de l'enfant : il pense qu'il est capable de comprendre les paroles et le langage des oiseux voire même des bêtes. (½ pt.)"}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "« *Ils discutaient avec passion et je comprenais leur langage.* » a. Quelle figure de style est exprimée dans cet énoncé ?", "correction": "figure de style est exprimée dans cet énoncé : la personnification. (½ pt.)"}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "b. Quelle image voudrait transmettre le narrateur par l'utilisation de cette figure de style ?", "correction": "l'image que voudrait transmettre le narrateur par l'utilisation de cette figure de style : il est seul, mais il est capable de nouer des relations d'amitiés avec les oiseaux, les bêtes. (½ pt.)"}, {"type": "libre", "numero": "5a", "points": 0.5, "enonce": "Questions relatives au texte2 : a. Relevez dans le texte deux termes relatifs au champ lexical de la chanson.", "correction": "Deux termes relatifs au champ lexical de la chanson : *chanter, une voix, la chanson, chantait*. (½ pt. (¼ x2))"}, {"type": "libre", "numero": "5b", "points": 0.5, "enonce": "b. Quel est l'impact de la chanson écoutée sur la psychologie (le sentiment) du narrateur ?", "correction": "L'effet de la chanson écoutée sur la psychologie (le sentiment) du narrateur : il se soulage, il s'oublie dans la voix pure, fraiche et veloutée de la jeune fille, il se libère de ses tensions. (½ pt.)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "En attendant la voix d'un oiseau, quelle réaction fait le narrateur quand il a écouté la chanson d'une jeune fille ? Relevez un indice dans le texte.", "correction": "La réaction du narrateur : Il était surpris : « *Je levai la tête comme en sursaut* » (1pt. (½ x2))"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Questions relatives aux deux textes 1et 2 : Comment vous expliquez, d'après les deux textes, que les deux narrateurs sont tellement tristes ?", "correction": "Au début, sidi Mohammed parait un enfant solitaire, car il était malade et fatigué, son père quitta la maison alors que sa mère dormait encore. Le condamné, lui aussi semble triste, car il vient d'être transporté de l'infirmerie à Bicêtre ; il souffre doublement : de la maladie (s'évanouit puis guéri) et de son emprisonnement. (1pt.)"}, {"type": "vrai-faux", "numero": "8", "points": 1, "enonce": "Répondez par « vrai » ou « faux » :", "affirmations": [{"texte": "a. Le matin, très tôt, quand le père se réveilla, il parlait à haute voix. (Texte 1)", "vrai": false}, {"texte": "b. Les deux moineaux chantaient toujours sur le même toit de la maison ? (Texte 1)", "vrai": false}, {"texte": "c. Le narrateur restait indifférent face à la chanson de la jeune fille. (Texte 2)", "vrai": false}, {"texte": "d. La jeune fille chantait sous une fenêtre. (Texte 2)", "vrai": true}]}, {"type": "libre", "numero": "9", "points": 1, "enonce": "I. 3. RÉACTION : La musique parait-elle un bon moyen pour se soulager ? Justifiez par un argument pertinent.", "correction": "Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. (1pt. (½ x 2))"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "D'après votre lecture de l'œuvre ''La Boite à Merveilles'', comment vous expliquez l'attachement de l'enfant aux moineaux ?", "correction": "Accepter toute formulation adéquate où le candidat prend position par rapport à la question en justifiant son point de vue. (1pt. (½ x 2))"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nDe nos jours, certains jeunes passent leur temps de loisirs dans des salles de sport ou dans des cafés pour regarder des matchs de football. D'autres, au contraire, préfèrent s'intéresser aux activités artistiques (musique, peinture, photographie, lecture…), tout en adhérant à des associations de la société civile. Quel est d'après vous, la meilleure façon pour bénéficier plus de son temps de loisirs ?\n\nRédigez un texte argumentatif dans lequel vous défendez votre point de vue à l'aide d'arguments pertinents étayés d'exemples précis.\n\n***Lors de la rédaction, vous tenez compte des critères suivants :***\n\n| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |\n|---|---|---|---|\n| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |\n| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |\n| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |\n| | | Respect des règles orthographiques et grammaticales. | |\n| | | Conjugaison (emploi des temps verbaux) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
