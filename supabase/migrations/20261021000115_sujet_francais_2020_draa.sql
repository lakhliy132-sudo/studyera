-- Sujet de français, examen régional 2020 (session normale), académie
-- Drâa-Tafilalet.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2020 جهة درعة تافيلالت »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Drâa-Tafilalet, « الدورة العادية », « دورة أكتوبر 2020 » (session
-- normale tenue en octobre 2020), « الشعب العلمية والتقنية », « المترشحون
-- المتمدرسون », « مدة الانجاز : ساعتان ». La case du coefficient porte « *** » :
-- aucun coefficient n'est saisi. Le PDF réunit trois sujets numérotés
-- (« الموضوع رقم 01 / 02 / 03 » : La Boîte à merveilles, Le Dernier Jour d'un
-- condamné, Antigone), chacun sur une feuille paysage de deux pages suivie de
-- ses éléments de correction (pages 2, 4 et 6, numérotées à la main 1/3, 2/3,
-- 3/3). Aucune consigne générale de choix n'est imprimée sur les feuilles.
-- Les renvois aux lignes (« lignes 1 et 2 », « lignes 12 - 19 », « ligne 6 »,
-- « ligne 32 ») visent la mise en page de la feuille.
-- Barèmes : la feuille donne « (1 point) » par question ; la répartition du
-- corrigé (0,5x2, 0,25x4…) est recopiée à la fin de chaque réponse.
-- Sujet 01, question 2 : l'ordre donné par le corrigé (b, d, a, c) est
-- reporté tel quel, avec sa remarque sur les autres ordres.
-- Sujet 02 : la case barème de la question 8 est vide dans le corrigé. La
-- question 3 (vrai/faux à justifier) est gardée en question libre.
-- Sujet 03, question 3 : le corrigé numérote la dernière ligne « a) » au lieu
-- de « d) » ; question 4 : appariement d'après les flèches du corrigé ;
-- question 8 : le corrigé cite cinq mots pour quatre demandés.
-- Le texte du sujet 03 garde les ponctuations manquantes de la feuille
-- (« c'est du propre Toi », « pour les élever Elles »).
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2020,
  $sujet$normale$sujet$,
  $sujet$Drâa-Tafilalet$sujet$,
  $sujet$Filières scientifiques et techniques$sujet$,
  120,
  $sujet$# Sujet n° 01

## Texte

Nous nous trouvâmes bientôt dans une cour qui me parut immense. Au centre trônaient quatre vaisseaux en terre cuite remplis d'eau. Ma mère trouva un gobelet et me fit boire. Elle se versa un peu de liquide dans le creux de la main, me passa les doigts sur le visage, les yeux, les jointures des mains et sur les chevilles. Tout en procédant à ce rituel, elle marmonnait de vagues prières, des invocations, me recommandait de rester tranquille, rappelait à Lalla Aïcha telle ou telle péripétie de notre promenade. Je subissais tout cela avec ma patience coutumière. Je me tortillais le cou pour regarder une armée de chats qui se livraient à une folle sarabande à l'intérieur de ce temple étrange. Au delà de cette cour s'ouvrait la *Zaouia*. De chaque côté d'une pièce carrée où se dressait le catafalque du Saint, deux portes conduisaient aux chambres des pèlerins. Des gens venus de loin, pour se débarrasser de leurs maux, vivaient là avec leurs enfants, attendant la guérison.

En arrivant devant le catafalque, Lalla Aïcha et ma mère se mirent à appeler à grands cris le saint à leur secours. L'une ignorant les paroles de l'autre, chacune lui exposait ses petites misères, frappait du plat de la main le bois du catafalque, gémissait, suppliait, vitupérait contre ses ennemis. Les voix montaient, les mains frappaient le bois du catafalque avec plus d'énergie et de passion. Un délire sacré s'était emparé des deux femmes. Elles énuméraient leurs maux, exposaient leurs faiblesses, demandaient protection, réclamaient vengeance, avouaient impuretés, proclamaient la miséricorde de Dieu et la puissance de Sidi Ali Boughaleb, en appelaient à sa pitié. Épuisées par leur ferveur, elles s'arrêtèrent enfin. La gardienne du mausolée vint les complimenter sur leur piété et joindre ses prières aux leurs.

– Vos vœux seront exaucés et vos désirs comblés, dit-elle pour conclure.

## I. Étude de texte (10 points)

**1.** Ce texte est tiré de l'une des œuvres au programme : a. Laquelle? b. Cette œuvre est: ➡ une tragédie ; ➡ une biographie ; ➡ un roman autobiographique. Choisissez la bonne réponse. **(1 point)**

**2.** D'après votre lecture de l'œuvre, mettez en ordre chronologique les événements suivants selon leur apparition dans l'histoire. Aidez-vous du schéma ci-dessous. a. Le malheur de Lalla Aicha à la suite du remariage de Moulay Larbi ; b. La visite du sanctuaire Sidi Ali Boughaleb ; c. Le malheur de Lalla Zoubida après le voyage du père ; d. La faillite de Moulay Larbi. [Schéma : quatre cases numérotées 1 à 4 le long d'une flèche.] **(1 point)**

| 1 | 2 | 3 | 4 |
|---|---|---|---|
| | | | |

**3.** Qui a été en compagnie de Lalla Zoubida lors de la visite du sanctuaire de Sidi Ali Boughaleb ? **(1 point)**

**4.** Le narrateur ne prend pas part aux premiers rituels de son gré ; il adopte une attitude passive. Relevez dans le texte une phrase qui le montre. **(1 point)**

**5.** Choisissez parmi ces quatre propositions des rituels associés à l'univers du mausolée Sidi Ali Boughaleb : a) Oraisons, prières et invocations, b) Sacrifice des animaux, c) Danse aux rythmes d'une musique apaisante, d) Le pieux délire, la transe. **(1 point)**

**6.** a. En parlant du sanctuaire et des rituels, quelle image se dégage de la description du mausolée ? b. Relevez dans le texte deux termes appartenant au champ lexical de **la religion** [souligné sur la feuille, en gras ici]. **(1 point)**

**7.** Observez attentivement l'énoncé suivant : « Au centre trônaient quatre vaisseaux en terre cuite remplis d'eau» (lignes 1 et 2) a. De quelle figure de style s'agit-il ? (Choisir la bonne réponse.) ➡ La comparaison ; ➡ La métaphore ; ➡ L'anaphore. b. Quel en est l'effet recherché ? **(1 point)**

**8.** En vous référant à ce passage allant de « En arrivant devant le catafalque » jusqu'à « elles s'arrêtèrent enfin » (lignes 12 - 19) a. Citez au moins deux actions des deux femmes (ce qu'elles font) ; b. Dans quel état d'âme se trouvent-elles ? (Choisir la bonne réponse.) ➡ Elles sont dans un état de délire ; ➡ Elles sont passives ; ➡ Elles sont déçues. **(1 point)**

**9.** Lalla Aicha et Lalla Zoubida se trouvent dans l'agitation et le délire. Leur conduite est-elle normale ? Exprimez votre point de vue en deux ou trois lignes. **(1 point)**

**10.** Au mausolée Sidi Ali Boughaleb, les gens malades viennent de loin pour se faire guérir. Que pensez-vous de ces pratiques ? Pourquoi ? **(1 point)**

## II. Production écrite (10 points)

__Sujet__ :

**Les parents ont-ils raison d'imposer à leurs enfants ce qu'ils n'aiment ou ne comprennent pas ? Pourquoi ?**

**Exposez votre point de vue dans un développement argumenté.**

*Lors de la correction, il sera tenu compte des aspects suivants :*

- *Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte ……… (5 points)*
- *Critères d'évaluation de la langue : qualité de la langue (orthographe, syntaxe, vocabulaire, conjugaison) ……… (5 points)*

# Sujet n° 02

## Texte

J'étais resté stupide en l'écoutant. Il s'est remis à rire plus haut encore qu'en commençant, et a voulu me prendre la main. J'ai reculé avec horreur.

– L'ami, m'a-t-il dit, tu n'as pas l'air brave. Ne va pas faire le singe devant la carline. Vois-tu, il y a un mauvais moment à passer sur la placarde ; mais cela est sitôt fait ! Je voudrais être là pour te montrer la culbute. Mille dieux ! j'ai envie de ne pas me pourvoir, si l'on veut me faucher aujourd'hui avec toi. Le même prêtre nous servira à tous deux ; ça m'est égal d'avoir tes restes. Tu vois que je suis un bon garçon. Hein ! dis, veux-tu ? d'amitié !

Il a encore fait un pas pour s'approcher de moi.

– Monsieur, lui ai-je répondu en le repoussant, je vous remercie.

Nouveaux éclats de rire à ma réponse.

– Ah ! ah ! monsieur, vousailles êtes un marquis ! c'est un marquis !

Je l'ai interrompu :

– Mon ami, j'ai besoin de me recueillir laissez-moi.

La gravité de ma parole l'a rendu pensif tout à coup. Il a remué sa tête grise et presque chauve ; puis, creusant avec ses ongles sa poitrine velue, qui s'offrait nue sous sa chemise ouverte :

– Je comprends, a-t-il murmuré entre ses dents ; au fait, le sanglier !

Puis, après quelques minutes de silence :

– Tenez, m'a-t-il dit presque timidement, vous êtes un marquis, c'est fort bien ; mais vous avez là une belle redingote qui ne vous servira plus à grand'chose ! Le taule la prendra. Donnez-la-moi, je la vendrai pour avoir du tabac.

J'ai ôté ma redingote et je la lui ai donnée. Il s'est mis à battre des mains avec une joie d'enfant. Puis, voyant que j'étais en chemise et que je grelottais :

– Vous avez froid, monsieur, mettez ceci ; il pleut, et vous seriez mouillé ; et puis il faut être décemment sur la charrette.

En parlant ainsi, il ôtait sa grosse veste de laine grise et la passait dans mes bras. Je le laissais faire.

Alors j'ai été m'appuyer contre le mur et je ne saurais dire quel effet me faisait cet homme. Il s'était mis à examiner la redingote que je lui avais donnée, et poussait à chaque instant des cris de joie.

– Les poches sont toutes neuves ! le collet n'est pas usé ! J'en aurai au moins quinze francs. Quel bonheur ! du tabac pour mes six semaines !

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1 point)**

| Titre de l'œuvre | Nom de l'écrivain | Genre littéraire | Date de parution |
|---|---|---|---|
| | | | |

**2.** Situez ce texte dans l'œuvre en répondant aux questions suivantes: a) Dans quelle prison se trouve le narrateur ? b) Quel événement nous évoque-t-il ici ? **(1 point)**

**3.** Répondez par « Vrai » ou « Faux » et justifiez chaque réponse. a. Le condamné a rencontré un *friauche*. b. La redingote assurera du tabac pour deux jours au *friauche*. **(1 point)**

**4.** a- Le narrateur a-t-il apprécié la présence de l'autre condamné à mort ? b- Relevez dans le texte une phrase qui le montre. **(1 point)**

**5.** L'énoncé suivant : « si l'on veut me faucher aujourd'hui avec toi » (ligne 6), veut dire: Choisissez et recopiez la bonne réponse. **(1 point)**

a- Si l'on veut me libérer.  
b- Si l'on veut me couper la tête.

**6.** Dans l'énoncé suivant : « Du tabac pour mes six semaines ! » (ligne 32) Que veut dire le narrateur par « mes six semaines » ? **(1 point)**

**7.** Relevez dans le texte deux termes ou expressions appartenant à l'argot. **(1 point)**

**8.** a. Identifiez la figure de style exprimée dans l'énoncé suivant: « ….. Il s'est mis à battre des mains avec une joie d'enfant» b. Cette expression veut dire : • Il (*le friauche*) est dans un état de joie comme celle d'un enfant. • Il est en colère et loin de vivre la joie d'un enfant. • Il se moque du condamné comme un enfant. Choisissez et recopiez la bonne réponse. **(1 point)**

**9.** Le *friauche*, misérable de sa condition, n'a jamais accédé à l'école. D'après-vous, qui en est responsable : lui ou la société ? Justifiez votre réponse en deux ou trois lignes. **(1 point)**

**10.** Selon vous, le *friauche* est-il vraiment une mauvaise personne ? Formulez votre réponse en deux ou trois lignes. **(1 point)**

## II. Production écrite (10 points)

__Sujet :__

**Le *friauche* vendra la redingote, un beau vêtement, pour acheter du tabac.**

**Que pensez-vous de certaines addictions, des dépendances à la consommation de certaines matières nocives (tabac, drogue, alcool, etc.), qui poussent certaines personnes à vendre des objets qui leur sont chers ?**

**Rédigez un texte argumentatif dans lequel vous exprimerez votre point de vue en le justifiant par des arguments pertinents et des exemples précis.**

*__Important__ :*

*Lors de la correction, il sera tenu compte des aspects suivants :*

- *Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte ……… (5 points)*
- *Critères d'évaluation de la langue : qualité de la langue (orthographe, syntaxe, vocabulaire, conjugaison) ……… (5 points)*

# Sujet n° 03

## Texte

Tu avais un rendez-vous, hein? Dis non, peut-être.

**ANTIGONE**, *doucement.*

Oui. J'avais un rendez-vous.

**LA NOURRICE**

Tu as un amoureux?

**ANTIGONE**, *étrangement, après un silence.*

Oui, nourrice, oui, le pauvre. J'ai un amoureux.

**LA NOURRICE**, *éclate.*

Ah! c'est du joli ! c'est du propre Toi, la fille d'un roi! Donnez-vous du mal; donnez-vous du mal pour les élever Elles sont toutes les mêmes. Tu n'étais pourtant pas comme les autres, toi, à t'attifer toujours devant ta glace, à te mettre du rouge aux lèvres, à chercher à ce qu'on te remarque. Combien de fois je me suis dit: « Mon Dieu, cette petite, elle n'est pas assez coquette ! Toujours avec la même robe et mal peignée. Les garçons ne verront qu'Ismène avec ses bouclettes et ses rubans et ils me la laisseront sur les bras. Hé bien, tu vois, tu étais comme ta soeur, et pire encore, hypocrite! Qui est-ce? Un voyou, hein, peut-être? Un garçon que tu ne peux pas dire à ta famille: «Voilà, c'est lui que j'aime, je veux l'épouser. » C'est ça, hein, c'est ça? Réponds donc, fanfaronne !

**ANTIGONE**, *a encore un sourire imperceptible.*

Oui, nourrice.

**LA NOURRICE**

Et elle dit oui ! Miséricorde ! Je l'ai eue toute gamine; j'ai promis à sa pauvre mère que j'en ferais une honnête fille, et voilà ! Mais ça ne va pas se passer comme ça, ma petite. Je ne suis que ta nourrice, et tu me traites comme une vieille bête, bon! mais ton oncle, ton oncle Créon saura. Je te le promets !

**ANTIGONE**, *soudain un peu lasse.*

Oui, nourrice, mon oncle Créon saura. Laisse-moi maintenant.

**LA NOURRICE**

Et tu verras ce qu'il dira quand il apprendra que tu te lèves la nuit. Et Hémon? Et ton fiancé? Car elle est fiancée! Elle est fiancée et à quatre heures du matin elle quitte son lit pour aller courir avec un autre. Et ça vous répond qu'on la laisse, ça voudrait qu'on ne dise rien. Tu sais ce que je devrais faire? Te battre comme lorsque tu étais petite.

**ANTIGONE**

Nounou, tu ne devrais pas trop crier. Tu ne devrais pas être trop méchante ce matin.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant. **(1 point)**

| Titre de l'œuvre | Auteur | Date de publication | Genre littéraire |
|---|---|---|---|
| | | | |

**2.** Répondez aux questions suivantes pour situer le passage. a. Pourquoi en réalité Antigone est-elle sortie très tôt le matin ? b. Qui va informer Créon dans la suite des événements ? **(1 point)**

**3.** Répondez par « vrai » ou « faux ». **(1 point)**

| | Vrai | Faux |
|---|---|---|
| a) Antigone est une fille du peuple. | | |
| b) Antigone est sortie à dix heures du matin. | | |
| c) La nourrice a cru qu'Antigone revenait d'un rendez-vous d'amour. | | |
| d) La nourrice menace Antigone d'informer Créon. | | |

**4.** Reliez chaque élément de la colonne A à celui qui lui correspond dans la colonne B : a) Elle s'occupe de l'éducation des enfants d'Œdipe. b) L'une des filles d'Œdipe. c) Le roi et l'oncle de Polynice et Etéocle. d) Le fiancé d'Antigone. **(1 point)**

| Antigone | La nourrice | Hémon | Créon |
|---|---|---|---|
| | | | |

**5.** En traitant Antigone d' « hypocrite », quelle qualité reconnaît indirectement la nourrice à Ismène ? **(1 point)**

**6.** Pourquoi Antigone doit se comporter de manière différente de celle du peuple ? **(1 point)**

**7.** a- Identifiez la figure de style contenue dans cet énoncé. « …et tu me traites comme une vieille bête.» b- Cette figure a-t-elle un effet valorisant ou dévalorisant ? **(1 point)**

**8.** Relevez dans le texte quatre mots du champ lexical de **la féminité** [souligné sur la feuille, en gras ici]. **(1 point)**

**9.** Antigone ne fait rien pour calmer les inquiétudes de sa nourrice. Appréciez-vous cette attitude ? Pourquoi ? Formulez une réponse en deux lignes ou trois lignes. **(1 point)**

**10.** La nourrice rappelle à Antigone certaines règles sociales et familiales. Doit-on à votre avis respecter les règles de sa société et de sa famille ? Pourquoi ? Répondez en deux ou trois lignes. **(1 point)**

## II. Production écrite (10 points)

__Sujet__ :

**« Les femmes sont dans leur droit de se faire belles. », dit-on.**

**Dans quelle mesure partagez-vous cette affirmation ?**

**Développez votre point de vue dans un texte argumentatif dûment construit.**

*Lors de la correction, il sera tenu compte des aspects suivants :*

- *Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte ……… (5 points)*
- *Critères d'évaluation de la langue : qualité de la langue (orthographe, syntaxe, vocabulaire, conjugaison) ……… (5 points)*$sujet$,
  $sujet$## Corrigé et barème

*Éléments de correction et barème de notation. NB : Toute réponse – ou formulation - non prévue est laissée à l'appréciation du professeur correcteur.*

## Sujet n° 01

### I. Étude de texte

**1.** a. *La Boite à merveilles* b. Un roman autobiographique. (0,5x2) **(1 point)**

**2.** **(1 point)**

| 1 | 2 | 3 | 4 |
|---|---|---|---|
| La visite du sanctuaire Sidi Ali Boughaleb ; | La faillite de Moulay Larbi ; | Le malheur de Lalla Aicha à la suite du remariage de Moulay Larbi ; | Le malheur de Lalla Zoubida après le voyage du père. *Tout autre ordre, partiellement adéquat, décalé soit-il, est laissé à l'appréciation du correcteur.* |

**3.** • Sidi Mohamed • Lalla Aicha (0,5x2) **(1 point)**

**4.** Je subissais tout cela avec ma patience coutumière. (1) **(1 point)**

**5.** a - Oraisons, prières et invocations, d - Le pieux délire, la transe. (0,5x2) **(1 point)**

**6.** a. Image d'un lieu de culte. (0,5) b. Mausolée, prières, sacré, etc. (Accepter toute autre proposition pertinente.) (0,25x2) **(1 point)**

**7.** a. La métaphore b. Mettre l'accent sur la majesté de l'objet. (0,5x2) **(1 point)**

**8.** a. Appeler à grands cris, frappait, gémissait, suppliait, vitupérait, etc. (0,25x2) b. Elles sont dans un état de délire. (0,5) **(1 point)**

**9.** - Réaction/prise de position - Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2) **(1 point)**

**10.** - Réaction/prise de position - Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2) **(1 point)**

### II. Production écrite

**Critères d'évaluation et barème**

- **Critères d'évaluation du discours :** (5 points)
    - Respect de la consigne (1 point)
    - Cohérence des idées (2 points)
    - Organisation et progression du texte (2 points)
- **Critères d'évaluation de la langue :** (5 points)
    - Syntaxe (2 points)
    - Orthographe (1 point)
    - Vocabulaire (1 point)
    - Conjugaison (1 point)

## Sujet n° 02

### I. Étude de texte

**1.** **(1 point)**

| Titre de l'œuvre | Nom de l'écrivain | Genre littéraire | Date de parution |
|---|---|---|---|
| *Le dernier jour d'un condamné* | Victor Hugo | Roman à thèse | 1829 |

**2.** a- La conciergerie. b- Le transfert à la conciergerie et la rencontre avec le *friauche*. (0,5x2) **(1 point)**

**3.** a- Vrai, « J'ai ôté ma redingote et je la lui ai donnée. » b- Faux, « Du tabac pour mes six semaines. » (Accepter toute autre proposition correcte.) (0,25x4) **(1 point)**

**4.** a. Non. b. « J'ai reculé avec horreur »/« -Lui ai-je répondu en le repoussant » (0,5x2) **(1 point)**

**5.** b- Si l'on veut me couper la tête. **(1 point)**

**6.** Les six semaines qu'il passera à Bicêtre avant d'être guillotiné. (1) **(1 point)**

**7.** Placarde, culbute, le taule (0,5x2) **(1 point)**

**8.** a. La métaphore b. Il (le friauche) est dans un état de joie comme celle d'un enfant. **(1 point)**

**9.** • Prise de position/choix • Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2) **(1 point)**

**10.** • Prise de position/choix • Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2) **(1 point)**

### II. Production écrite

**Critères d'évaluation et barème**

- **Critères d'évaluation du discours :** (5 points)
    - Respect de la consigne (1 point)
    - Cohérence des idées (2 points)
    - Organisation et progression du texte (2 points)
- **Critères d'évaluation de la langue :** (5 points)
    - Syntaxe (2 points)
    - Orthographe (1 point)
    - Vocabulaire (1 point)
    - Conjugaison (1 point)

## Sujet n° 03

### I. Étude de texte

**1.** **(1 point)**

| Titre de l'œuvre | Auteur | Date de publication | Genre littéraire |
|---|---|---|---|
| *Antigone* | Jean Anouilh | 1942 | Tragédie moderne |

**2.** a. Pour enterrer son frère Polynice. b. Ce sont les gardes qui en informeront Créon. (0,5x2) **(1 point)**

**3.** **(1 point)**

| | |
|---|---|
| a) Antigone est une fille du peuple. | Faux |
| b) Antigone est sortie à dix heures du matin. | Faux |
| c) La nourrice a cru qu'Antigone revenait d'un rendez-vous d'amour. | Vrai |
| d) La nourrice menace Antigone d'informer Créon. | Vrai |

**4.** **(1 point)**

| Antigone | La nourrice | Hémon | Créon |
|---|---|---|---|
| b) L'une des filles d'Œdipe | a) Elle s'occupe de l'éducation des enfants d'Œdipe | d) Le fiancé d'Antigone | c) Le roi et l'oncle de Polynice et Etéocle |

**5.** Honnête, sincère, pas hypocrite … (1) **(1 point)**

**6.** Car elle est fille du roi. (1) **(1 point)**

**7.** a. La comparaison b. Dévalorisant (0,5x2) **(1 point)**

**8.** Rouge aux lèvres, coquette, robe, bouclettes, rubans (0,25x4) **(1 point)**

**9.** - Réaction/prise de position - Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2) **(1 point)**

**10.** - Réaction/prise de position - Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2) **(1 point)**

### II. Production écrite

**Critères d'évaluation et barème**

- **Critères d'évaluation du discours :** (5 points)
    - Respect de la consigne (1 point)
    - Cohérence des idées (2 points)
    - Organisation et progression du texte (2 points)
- **Critères d'évaluation de la langue :** (5 points)
    - Syntaxe (2 points)
    - Orthographe (1 point)
    - Vocabulaire (1 point)
    - Conjugaison (1 point)$sujet$,
  $sujet${"parties": [{"titre": "Sujet n° 01 — I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Nous nous trouvâmes bientôt dans une cour qui me parut immense. Au centre trônaient quatre vaisseaux en terre cuite remplis d'eau. Ma mère trouva un gobelet et me fit boire. Elle se versa un peu de liquide dans le creux de la main, me passa les doigts sur le visage, les yeux, les jointures des mains et sur les chevilles. Tout en procédant à ce rituel, elle marmonnait de vagues prières, des invocations, me recommandait de rester tranquille, rappelait à Lalla Aïcha telle ou telle péripétie de notre promenade. Je subissais tout cela avec ma patience coutumière. Je me tortillais le cou pour regarder une armée de chats qui se livraient à une folle sarabande à l'intérieur de ce temple étrange. Au delà de cette cour s'ouvrait la *Zaouia*. De chaque côté d'une pièce carrée où se dressait le catafalque du Saint, deux portes conduisaient aux chambres des pèlerins. Des gens venus de loin, pour se débarrasser de leurs maux, vivaient là avec leurs enfants, attendant la guérison.\n\nEn arrivant devant le catafalque, Lalla Aïcha et ma mère se mirent à appeler à grands cris le saint à leur secours. L'une ignorant les paroles de l'autre, chacune lui exposait ses petites misères, frappait du plat de la main le bois du catafalque, gémissait, suppliait, vitupérait contre ses ennemis. Les voix montaient, les mains frappaient le bois du catafalque avec plus d'énergie et de passion. Un délire sacré s'était emparé des deux femmes. Elles énuméraient leurs maux, exposaient leurs faiblesses, demandaient protection, réclamaient vengeance, avouaient impuretés, proclamaient la miséricorde de Dieu et la puissance de Sidi Ali Boughaleb, en appelaient à sa pitié. Épuisées par leur ferveur, elles s'arrêtèrent enfin. La gardienne du mausolée vint les complimenter sur leur piété et joindre ses prières aux leurs.\n\n– Vos vœux seront exaucés et vos désirs comblés, dit-elle pour conclure.", "questions": [{"type": "libre", "numero": "1", "points": 1, "enonce": "Ce texte est tiré de l'une des œuvres au programme : a. Laquelle? b. Cette œuvre est: ➡ une tragédie ; ➡ une biographie ; ➡ un roman autobiographique. Choisissez la bonne réponse.", "correction": "a. *La Boite à merveilles* b. Un roman autobiographique. (0,5x2)"}, {"type": "tableau", "numero": "2", "points": 1, "enonce": "D'après votre lecture de l'œuvre, mettez en ordre chronologique les événements suivants selon leur apparition dans l'histoire. Aidez-vous du schéma ci-dessous. a. Le malheur de Lalla Aicha à la suite du remariage de Moulay Larbi ; b. La visite du sanctuaire Sidi Ali Boughaleb ; c. Le malheur de Lalla Zoubida après le voyage du père ; d. La faillite de Moulay Larbi. [Schéma : quatre cases numérotées 1 à 4 le long d'une flèche.]", "champs": [{"libelle": "1", "reponse": "La visite du sanctuaire Sidi Ali Boughaleb ;"}, {"libelle": "2", "reponse": "La faillite de Moulay Larbi ;"}, {"libelle": "3", "reponse": "Le malheur de Lalla Aicha à la suite du remariage de Moulay Larbi ;"}, {"libelle": "4", "reponse": "Le malheur de Lalla Zoubida après le voyage du père. *Tout autre ordre, partiellement adéquat, décalé soit-il, est laissé à l'appréciation du correcteur.*"}]}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Qui a été en compagnie de Lalla Zoubida lors de la visite du sanctuaire de Sidi Ali Boughaleb ?", "correction": "• Sidi Mohamed • Lalla Aicha (0,5x2)"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Le narrateur ne prend pas part aux premiers rituels de son gré ; il adopte une attitude passive. Relevez dans le texte une phrase qui le montre.", "correction": "Je subissais tout cela avec ma patience coutumière. (1)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Choisissez parmi ces quatre propositions des rituels associés à l'univers du mausolée Sidi Ali Boughaleb : a) Oraisons, prières et invocations, b) Sacrifice des animaux, c) Danse aux rythmes d'une musique apaisante, d) Le pieux délire, la transe.", "correction": "a - Oraisons, prières et invocations, d - Le pieux délire, la transe. (0,5x2)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "a. En parlant du sanctuaire et des rituels, quelle image se dégage de la description du mausolée ? b. Relevez dans le texte deux termes appartenant au champ lexical de **la religion** [souligné sur la feuille, en gras ici].", "correction": "a. Image d'un lieu de culte. (0,5) b. Mausolée, prières, sacré, etc. (Accepter toute autre proposition pertinente.) (0,25x2)"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Observez attentivement l'énoncé suivant : « Au centre trônaient quatre vaisseaux en terre cuite remplis d'eau» (lignes 1 et 2) a. De quelle figure de style s'agit-il ? (Choisir la bonne réponse.) ➡ La comparaison ; ➡ La métaphore ; ➡ L'anaphore. b. Quel en est l'effet recherché ?", "correction": "a. La métaphore b. Mettre l'accent sur la majesté de l'objet. (0,5x2)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "En vous référant à ce passage allant de « En arrivant devant le catafalque » jusqu'à « elles s'arrêtèrent enfin » (lignes 12 - 19) a. Citez au moins deux actions des deux femmes (ce qu'elles font) ; b. Dans quel état d'âme se trouvent-elles ? (Choisir la bonne réponse.) ➡ Elles sont dans un état de délire ; ➡ Elles sont passives ; ➡ Elles sont déçues.", "correction": "a. Appeler à grands cris, frappait, gémissait, suppliait, vitupérait, etc. (0,25x2) b. Elles sont dans un état de délire. (0,5)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Lalla Aicha et Lalla Zoubida se trouvent dans l'agitation et le délire. Leur conduite est-elle normale ? Exprimez votre point de vue en deux ou trois lignes.", "correction": "- Réaction/prise de position - Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Au mausolée Sidi Ali Boughaleb, les gens malades viennent de loin pour se faire guérir. Que pensez-vous de ces pratiques ? Pourquoi ?", "correction": "- Réaction/prise de position - Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2)"}]}, {"titre": "Sujet n° 01 — II. Production écrite", "points": 10, "texte": "__Sujet__ :\n\n**Les parents ont-ils raison d'imposer à leurs enfants ce qu'ils n'aiment ou ne comprennent pas ? Pourquoi ?**\n\n**Exposez votre point de vue dans un développement argumenté.**\n\n*Lors de la correction, il sera tenu compte des aspects suivants :*\n\n- *Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte ……… (5 points)*\n- *Critères d'évaluation de la langue : qualité de la langue (orthographe, syntaxe, vocabulaire, conjugaison) ……… (5 points)*", "questions": [], "redaction": true}, {"titre": "Sujet n° 02 — I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "J'étais resté stupide en l'écoutant. Il s'est remis à rire plus haut encore qu'en commençant, et a voulu me prendre la main. J'ai reculé avec horreur.\n\n– L'ami, m'a-t-il dit, tu n'as pas l'air brave. Ne va pas faire le singe devant la carline. Vois-tu, il y a un mauvais moment à passer sur la placarde ; mais cela est sitôt fait ! Je voudrais être là pour te montrer la culbute. Mille dieux ! j'ai envie de ne pas me pourvoir, si l'on veut me faucher aujourd'hui avec toi. Le même prêtre nous servira à tous deux ; ça m'est égal d'avoir tes restes. Tu vois que je suis un bon garçon. Hein ! dis, veux-tu ? d'amitié !\n\nIl a encore fait un pas pour s'approcher de moi.\n\n– Monsieur, lui ai-je répondu en le repoussant, je vous remercie.\n\nNouveaux éclats de rire à ma réponse.\n\n– Ah ! ah ! monsieur, vousailles êtes un marquis ! c'est un marquis !\n\nJe l'ai interrompu :\n\n– Mon ami, j'ai besoin de me recueillir laissez-moi.\n\nLa gravité de ma parole l'a rendu pensif tout à coup. Il a remué sa tête grise et presque chauve ; puis, creusant avec ses ongles sa poitrine velue, qui s'offrait nue sous sa chemise ouverte :\n\n– Je comprends, a-t-il murmuré entre ses dents ; au fait, le sanglier !\n\nPuis, après quelques minutes de silence :\n\n– Tenez, m'a-t-il dit presque timidement, vous êtes un marquis, c'est fort bien ; mais vous avez là une belle redingote qui ne vous servira plus à grand'chose ! Le taule la prendra. Donnez-la-moi, je la vendrai pour avoir du tabac.\n\nJ'ai ôté ma redingote et je la lui ai donnée. Il s'est mis à battre des mains avec une joie d'enfant. Puis, voyant que j'étais en chemise et que je grelottais :\n\n– Vous avez froid, monsieur, mettez ceci ; il pleut, et vous seriez mouillé ; et puis il faut être décemment sur la charrette.\n\nEn parlant ainsi, il ôtait sa grosse veste de laine grise et la passait dans mes bras. Je le laissais faire.\n\nAlors j'ai été m'appuyer contre le mur et je ne saurais dire quel effet me faisait cet homme. Il s'était mis à examiner la redingote que je lui avais donnée, et poussait à chaque instant des cris de joie.\n\n– Les poches sont toutes neuves ! le collet n'est pas usé ! J'en aurai au moins quinze francs. Quel bonheur ! du tabac pour mes six semaines !", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "*Le dernier jour d'un condamné*"}, {"libelle": "Nom de l'écrivain", "reponse": "Victor Hugo"}, {"libelle": "Genre littéraire", "reponse": "Roman à thèse"}, {"libelle": "Date de parution", "reponse": "1829"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Situez ce texte dans l'œuvre en répondant aux questions suivantes: a) Dans quelle prison se trouve le narrateur ? b) Quel événement nous évoque-t-il ici ?", "correction": "a- La conciergerie. b- Le transfert à la conciergerie et la rencontre avec le *friauche*. (0,5x2)"}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Répondez par « Vrai » ou « Faux » et justifiez chaque réponse. a. Le condamné a rencontré un *friauche*. b. La redingote assurera du tabac pour deux jours au *friauche*.", "correction": "a- Vrai, « J'ai ôté ma redingote et je la lui ai donnée. » b- Faux, « Du tabac pour mes six semaines. » (Accepter toute autre proposition correcte.) (0,25x4)"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "a- Le narrateur a-t-il apprécié la présence de l'autre condamné à mort ? b- Relevez dans le texte une phrase qui le montre.", "correction": "a. Non. b. « J'ai reculé avec horreur »/« -Lui ai-je répondu en le repoussant » (0,5x2)"}, {"type": "choix", "numero": "5", "points": 1, "enonce": "L'énoncé suivant : « si l'on veut me faucher aujourd'hui avec toi » (ligne 6), veut dire: Choisissez et recopiez la bonne réponse.", "options": ["Si l'on veut me libérer.", "Si l'on veut me couper la tête."], "bonne": 1}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Dans l'énoncé suivant : « Du tabac pour mes six semaines ! » (ligne 32) Que veut dire le narrateur par « mes six semaines » ?", "correction": "Les six semaines qu'il passera à Bicêtre avant d'être guillotiné. (1)"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez dans le texte deux termes ou expressions appartenant à l'argot.", "correction": "Placarde, culbute, le taule (0,5x2)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "a. Identifiez la figure de style exprimée dans l'énoncé suivant: « ….. Il s'est mis à battre des mains avec une joie d'enfant» b. Cette expression veut dire : • Il (*le friauche*) est dans un état de joie comme celle d'un enfant. • Il est en colère et loin de vivre la joie d'un enfant. • Il se moque du condamné comme un enfant. Choisissez et recopiez la bonne réponse.", "correction": "a. La métaphore b. Il (le friauche) est dans un état de joie comme celle d'un enfant."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Le *friauche*, misérable de sa condition, n'a jamais accédé à l'école. D'après-vous, qui en est responsable : lui ou la société ? Justifiez votre réponse en deux ou trois lignes.", "correction": "• Prise de position/choix • Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Selon vous, le *friauche* est-il vraiment une mauvaise personne ? Formulez votre réponse en deux ou trois lignes.", "correction": "• Prise de position/choix • Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2)"}]}, {"titre": "Sujet n° 02 — II. Production écrite", "points": 10, "texte": "__Sujet :__\n\n**Le *friauche* vendra la redingote, un beau vêtement, pour acheter du tabac.**\n\n**Que pensez-vous de certaines addictions, des dépendances à la consommation de certaines matières nocives (tabac, drogue, alcool, etc.), qui poussent certaines personnes à vendre des objets qui leur sont chers ?**\n\n**Rédigez un texte argumentatif dans lequel vous exprimerez votre point de vue en le justifiant par des arguments pertinents et des exemples précis.**\n\n*__Important__ :*\n\n*Lors de la correction, il sera tenu compte des aspects suivants :*\n\n- *Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte ……… (5 points)*\n- *Critères d'évaluation de la langue : qualité de la langue (orthographe, syntaxe, vocabulaire, conjugaison) ……… (5 points)*", "questions": [], "redaction": true}, {"titre": "Sujet n° 03 — I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Tu avais un rendez-vous, hein? Dis non, peut-être.\n\n**ANTIGONE**, *doucement.*\n\nOui. J'avais un rendez-vous.\n\n**LA NOURRICE**\n\nTu as un amoureux?\n\n**ANTIGONE**, *étrangement, après un silence.*\n\nOui, nourrice, oui, le pauvre. J'ai un amoureux.\n\n**LA NOURRICE**, *éclate.*\n\nAh! c'est du joli ! c'est du propre Toi, la fille d'un roi! Donnez-vous du mal; donnez-vous du mal pour les élever Elles sont toutes les mêmes. Tu n'étais pourtant pas comme les autres, toi, à t'attifer toujours devant ta glace, à te mettre du rouge aux lèvres, à chercher à ce qu'on te remarque. Combien de fois je me suis dit: « Mon Dieu, cette petite, elle n'est pas assez coquette ! Toujours avec la même robe et mal peignée. Les garçons ne verront qu'Ismène avec ses bouclettes et ses rubans et ils me la laisseront sur les bras. Hé bien, tu vois, tu étais comme ta soeur, et pire encore, hypocrite! Qui est-ce? Un voyou, hein, peut-être? Un garçon que tu ne peux pas dire à ta famille: «Voilà, c'est lui que j'aime, je veux l'épouser. » C'est ça, hein, c'est ça? Réponds donc, fanfaronne !\n\n**ANTIGONE**, *a encore un sourire imperceptible.*\n\nOui, nourrice.\n\n**LA NOURRICE**\n\nEt elle dit oui ! Miséricorde ! Je l'ai eue toute gamine; j'ai promis à sa pauvre mère que j'en ferais une honnête fille, et voilà ! Mais ça ne va pas se passer comme ça, ma petite. Je ne suis que ta nourrice, et tu me traites comme une vieille bête, bon! mais ton oncle, ton oncle Créon saura. Je te le promets !\n\n**ANTIGONE**, *soudain un peu lasse.*\n\nOui, nourrice, mon oncle Créon saura. Laisse-moi maintenant.\n\n**LA NOURRICE**\n\nEt tu verras ce qu'il dira quand il apprendra que tu te lèves la nuit. Et Hémon? Et ton fiancé? Car elle est fiancée! Elle est fiancée et à quatre heures du matin elle quitte son lit pour aller courir avec un autre. Et ça vous répond qu'on la laisse, ça voudrait qu'on ne dise rien. Tu sais ce que je devrais faire? Te battre comme lorsque tu étais petite.\n\n**ANTIGONE**\n\nNounou, tu ne devrais pas trop crier. Tu ne devrais pas être trop méchante ce matin.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant.", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "*Antigone*"}, {"libelle": "Auteur", "reponse": "Jean Anouilh"}, {"libelle": "Date de publication", "reponse": "1942"}, {"libelle": "Genre littéraire", "reponse": "Tragédie moderne"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Répondez aux questions suivantes pour situer le passage. a. Pourquoi en réalité Antigone est-elle sortie très tôt le matin ? b. Qui va informer Créon dans la suite des événements ?", "correction": "a. Pour enterrer son frère Polynice. b. Ce sont les gardes qui en informeront Créon. (0,5x2)"}, {"type": "vrai-faux", "numero": "3", "points": 1, "enonce": "Répondez par « vrai » ou « faux ».", "affirmations": [{"texte": "a) Antigone est une fille du peuple.", "vrai": false}, {"texte": "b) Antigone est sortie à dix heures du matin.", "vrai": false}, {"texte": "c) La nourrice a cru qu'Antigone revenait d'un rendez-vous d'amour.", "vrai": true}, {"texte": "d) La nourrice menace Antigone d'informer Créon.", "vrai": true}]}, {"type": "tableau", "numero": "4", "points": 1, "enonce": "Reliez chaque élément de la colonne A à celui qui lui correspond dans la colonne B : a) Elle s'occupe de l'éducation des enfants d'Œdipe. b) L'une des filles d'Œdipe. c) Le roi et l'oncle de Polynice et Etéocle. d) Le fiancé d'Antigone.", "champs": [{"libelle": "Antigone", "reponse": "b) L'une des filles d'Œdipe"}, {"libelle": "La nourrice", "reponse": "a) Elle s'occupe de l'éducation des enfants d'Œdipe"}, {"libelle": "Hémon", "reponse": "d) Le fiancé d'Antigone"}, {"libelle": "Créon", "reponse": "c) Le roi et l'oncle de Polynice et Etéocle"}]}, {"type": "libre", "numero": "5", "points": 1, "enonce": "En traitant Antigone d' « hypocrite », quelle qualité reconnaît indirectement la nourrice à Ismène ?", "correction": "Honnête, sincère, pas hypocrite … (1)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Pourquoi Antigone doit se comporter de manière différente de celle du peuple ?", "correction": "Car elle est fille du roi. (1)"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "a- Identifiez la figure de style contenue dans cet énoncé. « …et tu me traites comme une vieille bête.» b- Cette figure a-t-elle un effet valorisant ou dévalorisant ?", "correction": "a. La comparaison b. Dévalorisant (0,5x2)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Relevez dans le texte quatre mots du champ lexical de **la féminité** [souligné sur la feuille, en gras ici].", "correction": "Rouge aux lèvres, coquette, robe, bouclettes, rubans (0,25x4)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Antigone ne fait rien pour calmer les inquiétudes de sa nourrice. Appréciez-vous cette attitude ? Pourquoi ? Formulez une réponse en deux lignes ou trois lignes.", "correction": "- Réaction/prise de position - Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "La nourrice rappelle à Antigone certaines règles sociales et familiales. Doit-on à votre avis respecter les règles de sa société et de sa famille ? Pourquoi ? Répondez en deux ou trois lignes.", "correction": "- Réaction/prise de position - Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2)"}]}, {"titre": "Sujet n° 03 — II. Production écrite", "points": 10, "texte": "__Sujet__ :\n\n**« Les femmes sont dans leur droit de se faire belles. », dit-on.**\n\n**Dans quelle mesure partagez-vous cette affirmation ?**\n\n**Développez votre point de vue dans un texte argumentatif dûment construit.**\n\n*Lors de la correction, il sera tenu compte des aspects suivants :*\n\n- *Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte ……… (5 points)*\n- *Critères d'évaluation de la langue : qualité de la langue (orthographe, syntaxe, vocabulaire, conjugaison) ……… (5 points)*", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
