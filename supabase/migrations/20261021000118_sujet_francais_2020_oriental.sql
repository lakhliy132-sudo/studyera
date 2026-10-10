-- Sujet de français, examen régional 2020 (session normale), académie
-- L'Oriental.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2020 جهة الشرق »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de l'Oriental (« المركز الجهوي للامتحانات »), « الدورة العادية 2020 »,
-- « الشعب و المسالك العلمية و التقنية », complété à la main sur chaque page du
-- sujet par « عدا علوم الاقتصاد والتدبير » (sauf sciences économiques et
-- gestion), « مدة الإنجاز : ساعتان », « المعامل : 4 ». Page 1 : page de garde
-- (« Important : Le candidat traitera au choix l'une des trois épreuves
-- proposées. » et « على المترشح اختيار موضوع واحد من بين المواضيع الثلاثة
-- المقترحة »). Trois épreuves : 1 La Boîte à merveilles (pages 2-3),
-- 2 Le Dernier Jour d'un condamné (pages 4-5), 3 Antigone (pages 6-7), puis
-- un corrigé d'une page par épreuve (pages 8 à 10), sans phrase d'en-tête.
-- Les questions en a/b notées séparément sur la feuille sont découpées.
-- Épreuve 1, question 1 (texte à trous) saisie en tableau ; le corrigé dit
-- « Ce texte est extrait » là où la feuille dit « tiré ».
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, filiere_libelle, duree_minutes, coefficient, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2020,
  $sujet$normale$sujet$,
  $sujet$L'Oriental$sujet$,
  $sujet$Filières scientifiques et techniques (sauf sciences économiques et gestion)$sujet$,
  120,
  4,
  $sujet$**Important : Le candidat traitera au choix l'une des trois épreuves proposées.**

# Epreuve -1-

## Texte

Papa, d'origine montagnarde comme ma mère, après avoir quitté son village situé à une cinquantaine de kilomètres de la grande ville, avait au début éprouvé des difficultés à gagner sa vie et celle de sa jeune épouse. A Fès, il fallait pour vivre exercer quelque industrie citadine ou monter un petit commerce. Dans notre famille, vendre et acheter a toujours été considéré comme le métier le plus **vil\***. Mon père se souvint avoir été à un moment de sa jeunesse dans l'atelier de l'un de ses oncles maternels, tisserand de couvertures. Il s'acheta donc un minimum de matériel, loua un coin dans un atelier et s'installa tisserand. Il faisait honnêtement son travail, améliorait de jour en jour sa production. Bientôt, ses articles furent très disputés et le ménage jouit d'un certain confort. Mon père avait un vieil ouvrier avec lui sur le métier.

Driss venait deux fois par jour à la maison : le matin acheter les provisions et au milieu du jour chercher le déjeuner de son patron. Mon père mangeait à l'atelier. Il venait seulement le soir après la dernière prière. Le vendredi faisait exception. Ce jour-là, mon père était à son métier jusqu'à midi environ ; il payait ses employés, allait à la Mosquée pour la grande prière et nous déjeunions en famille. Driss revint chargé de son lourd panier. Le teigneux n'avait rien oublié (…). Nous avions de l'huile, du charbon et de la farine pour tout le mois. Les voisines **moins fortunées\*\*** nous jalousaient un peu. Elles n'ignoraient d'ailleurs aucun détail de notre vie domestique. Ma mère, de son côté, connaissait les difficultés de tout le monde, l'état des finances de chaque **ménage\*\*\***.

\***vil** : bas, mal vu.
\*\***moins fortunées** : ici plus ou moins pauvres.
\*\*\***ménage** : famille.

## I. Étude de texte (10 points)

**1.** D'après votre lecture de l'œuvre, recopiez et complétez convenablement ce qui suit : Ce texte est tiré de l'œuvre intitulée ……… de l'écrivain marocain ……… L'histoire de l'œuvre se passe à ……… Le personnage principal est ……… **(1pt)**

| l'œuvre intitulée | l'écrivain marocain | se passe à | Le personnage principal est |
|---|---|---|---|
| | | | |

**2.** D'après votre lecture de l'œuvre, répondez par « **VRAI** » ou « **FAUX** » : **(1pt)**

| | Vrai | Faux |
|---|---|---|
| a. Lalla Zoubida est la mère du narrateur. | | |
| b. La famille du narrateur habite Dar Chouafa. | | |
| c. Zineb est la fille de Fatma Bziouya. | | |
| d. Maâlem Abdeslem est un coiffeur. | | |

**3.** Les parents du narrateur n'ont pas pu facilement s'installer à Fès. – Justifiez votre réponse à partir du texte. **(1pt)**

**4a.** Quel métier a choisi de faire le père du narrateur? **(0.5pt)**

**4b.** A-t-il réussi son projet ? Relevez dans le texte une phrase qui le montre. **(0.5pt)**

**5.** Dans la famille du narrateur, le métier de commerçant n'est pas bien apprécié. – Relevez dans le texte une phrase qui le montre. **(1pt)**

**6.** Complétez le tableau suivant à partir du texte. [Deux lignes 1) et 2) à remplir dans chaque colonne.] **(1pt)**

| Deux activités quotidiennes de Driss le teigneux | Deux activités du père le jour du vendredi |
|---|---|
| | |

**7.** « Notre ménage jouit d'un certain confort », affirma l'enfant. – Réécrivez cette phrase au discours indirect. **(1pt)**

**8.** « Bientôt, ses articles furent très **disputés** [souligné sur la feuille, en gras ici] », le mot souligné veut dire : – Recopiez la bonne proposition. **(1pt)**

a- Bien vendus.  
b- De mauvaise qualité.  
c- Très chers.

**9.** D'après le texte, pour réussir un projet professionnel, il faut faire honnêtement son travail. – Dites, en une ou deux phrases, ce que vous en pensez. **(1pt)**

**10.** A votre avis, pourquoi les voisines moins fortunées étaient jalouses de la famille du narrateur ? – Justifiez votre réponse en une ou deux phrases. **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

Maâlem Abdeslem a quitté la campagne et s'est installé en ville. De votre côté, aimeriez-vous vivre en ville ou plutôt à la campagne ?

– Rédigez un texte dans lequel vous justifierez votre choix à l'aide d'arguments et d'exemples.

# Epreuve -2-

## Texte

Encore si je savais comment cela est fait, et de quelle façon on meurt là-dessus ! mais c'est horrible, je ne le sais pas.

Le nom de la chose est effroyable, et je ne comprends point comment j'ai pu jusqu'à présent l'écrire et le prononcer.

La combinaison de ces dix lettres, leur aspect, leur physionomie est bien faite pour réveiller une idée épouvantable (…). L'image que j'y attache, à ce mot hideux, est vague, indéterminée, et d'autant plus sinistre.

(…) Mais il est affreux de ne savoir ce que c'est, ni comment s'y prendre. Il paraît qu'il y a une bascule et qu'on vous couche sur le ventre…

– Ah ! Mes cheveux blanchiront avant que ma tête ne tombe !

Je l'ai cependant entrevue une fois.

Je passais sur la place de Grève, en voiture, un jour, vers onze heures du matin. Tout à coup, la voiture s'arrêta.

Il y avait foule sur la place. Je mis la tête à la portière. Une populace encombrait la Grève et le quai, et des femmes, des hommes, des enfants étaient debout sur le parapet. Au-dessus des têtes, on voyait une espèce d'estrade en bois rouge que trois hommes échafaudaient.

Un condamné devait être exécuté le jour même, et l'on bâtissait la machine.

Je détournai la tête avant d'avoir vu. À côté de la voiture, il y avait une femme qui disait à un enfant :

– Tiens, regarde ! le couteau coule mal, ils vont graisser la rainure avec un bout de chandelle.

C'est probablement là qu'ils en sont aujourd'hui. Onze heures viennent de sonner. Ils graissent sans doute la rainure.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant: **(1pt)**

| Titre de l'œuvre d'où est tiré ce texte | Auteur de l'œuvre | Genre de l'œuvre | Personnage principal de l'œuvre |
|---|---|---|---|
| | | | |

**2.** D'après votre lecture de l'œuvre, répondez par « **Vrai** » ou « **Faux** » : **(1pt)**

| | Vrai | Faux |
|---|---|---|
| a. Le condamné est célibataire. | | |
| b. Victor Hugo est contre la peine de mort. | | |
| c. Bicêtre est une prison à Paris. | | |
| d. Le condamné est gracié à la fin de l'œuvre. | | |

**3a.** « Le nom de la chose est effroyable ». – Cette « chose » est : Le fusil / La guillotine / La chaise électrique. Recopiez la bonne proposition. **(0.5pt)**

a- Le fusil  
b- La guillotine  
c- La chaise électrique.

**3b.** Justifiez votre réponse par un indice tiré du texte. **(0.5pt)**

**4a.** Le narrateur avait déjà vu cette « chose » dans le passé. Dites combien de fois. **(0.5pt)**

**4b.** Dites où l'avait-il déjà vue. **(0.5pt)**

**5.** « Il y avait foule sur la place » pour : – Recopiez la bonne proposition. **(1pt)**

a- réclamer la libération du condamné.  
b- assister au spectacle de l'exécution.  
c- dénoncer la peine de mort.

**6.** Relevez dans le texte deux adjectifs employés pour décrire **la peur** du condamné. **(1pt)**

**7.** « Je l'ai cependant entrevue une fois », affirma le condamné. – Réécrivez cette phrase au discours indirect. **(1pt)**

**8a.** « Ah ! **Mes cheveux blanchiront** [souligné sur la feuille, en gras ici] avant que ma tête ne tombe ! » Quelle est la figure de style soulignée dans cet énoncé ? **(0.5pt)**

**8b.** Cette figure renforce : – Recopiez la bonne proposition. **(0.5pt)**

a- La peur du condamné  
b- La joie du condamné  
c- le courage du condamné.

**9.** Dans le texte, les enfants, eux aussi, assistent à l'exécution des condamnés à mort. – Dites, en une ou deux phrases, ce que vous en pensez. **(1pt)**

**10.** Dites, en une ou deux phrases, ce que vous pensez de cette façon de faire mourir les condamnés. **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

Certains pensent que la peine de mort est le moyen le plus efficace pour mettre fin au crime.

– Partagez-vous cette idée ?

– Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.

# Epreuve -3-

## Texte

**CRÉON**, *entre avec son page.* Je les ai fait coucher l'un près de l'autre, enfin! Ils sont lavés, maintenant, reposés. Ils sont seulement un peu pâles, mais si calmes. Deux amants au lendemain de la première nuit. Ils ont fini, eux.

**LE CHŒUR :** Pas toi, Créon. Il te reste encore quelque chose à apprendre. Eurydice, la reine, ta femme…

**CRÉON :** Une bonne femme parlant toujours de son jardin, de ses confitures, de ses tricots, de ses éternels tricots pour les pauvres. C'est drôle comme les pauvres ont éternellement besoin de tricots. On dirait qu'ils n'ont besoin que de tricots…

**LE CHŒUR :** Les pauvres de Thèbes auront froid, cet hiver, Créon. En apprenant la mort de son fils, la reine a posé ses aiguilles, sagement, après avoir terminé son rang, posément, comme tout ce qu'elle fait, un peu plus tranquillement peut-être que d'habitude. Et puis elle est passée dans sa chambre, sa chambre à l'odeur de lavande, aux petits napperons brodés et aux cadres de peluche, pour s'y couper la gorge, Créon. Elle est étendue maintenant sur un des petits lits jumeaux démodés, à la même place où tu l'as vue jeune fille un soir, et avec le même sourire, à peine un peu plus triste. Et s'il n'y avait pas cette large tache rouge sur les linges autour de son cou, on pourrait croire qu'elle dort.

**CRÉON :** Elle aussi. Ils dorment tous. C'est bien. La journée a été rude. *(Un temps. Il dit sourdement)* Cela doit être bon de dormir.

**LE CHŒUR :** Et tu es tout seul maintenant, Créon

**CRÉON :** Tout seul, oui. *(Un silence. Il pose sa main sur l'épaule de son page.)* Petit…

**LE PAGE :** Monsieur ?

**CRÉON :** Je vais te dire, à toi. Ils ne savent pas, les autres; on est là, devant l'ouvrage, on ne peut pourtant pas se croiser les bras. Ils disent que c'est une sale besogne, mais si on ne la fait pas, qui la fera ?

**LE PAGE :** Je ne sais pas, monsieur

**CRÉON :** Bien sûr, tu ne sais pas. Tu en as de la chance ! Ce qu'il faudrait, c'est ne jamais savoir.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant: **(1pt)**

| Titre de l'œuvre d'où est tiré ce texte | Auteur de l'œuvre | Genre de l'œuvre | Personnage principal de l'œuvre |
|---|---|---|---|
| | | | |

**2.** D'après votre lecture de l'œuvre, répondez par « **Vrai** » ou « **Faux** ». **(1pt)**

| | Vrai | Faux |
|---|---|---|
| a. Créon est le roi de Thèbes. | | |
| b. Antigone est la sœur d'Ismène. | | |
| c. Ismène est la fiancée d'Hémon. | | |
| d. Hémon est le frère de Polynice. | | |

**3.** Quelle nouvelle annonce le Chœur à Créon ? **(1pt)**

**4a.** Créon fait-il une description valorisante ou dévalorisante de sa femme ? **(0.5pt)**

**4b.** Justifiez votre réponse à partir du texte. **(0.5pt)**

**5.** Pourquoi la reine décide-t-elle de mettre fin à sa vie ? **(1pt)**

**6.** Qu'est-ce qui prouve au Chœur que la reine s'est effectivement donné la mort ? **(1pt)**

**7.** Dans le texte « Ils dorment tous » veut dire : – Recopiez la bonne proposition. **(1pt)**

a- Ils font tous une sieste.  
b- Ils sont tous morts.  
c- Ils sont tous dans un sommeil profond.

**8.** « Je ne sais pas », affirma le page. – Réécrivez cet énoncé au discours indirect. **(1pt)**

**9.** Malgré la mort de ses proches, Créon continue de jouer son rôle de roi – Dites, en une ou deux phrases, ce que vous pensez de cette attitude. **(1pt)**

**10.** « Ce qu'il faudrait, c'est ne jamais savoir », dit Créon à son Page. – Dites, en une ou deux phrases, ce que vous pensez de cette affirmation. **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

La reine Eurydice s'est coupé la gorge en apprenant la mort de son fils Hémon.

– Croyez-vous que le suicide soit la bonne solution aux problèmes de la vie ?

– Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.$sujet$,
  $sujet$## Corrigé et barème

*Corrigé et barème de l'académie.*

## Epreuve -1-

### I. Étude de texte

**1.** **(1pt)**

| l'œuvre intitulée | l'écrivain marocain | se passe à | Le personnage principal est |
|---|---|---|---|
| La Boîte à merveilles | Ahmed SEFRIOUI | Fès | un enfant de six ans |

**2.** **(1pt)**

| | |
|---|---|
| a. Lalla Zoubida est la mère du narrateur. | Vrai |
| b. La famille du narrateur habite Dar Chouafa. | Vrai |
| c. Zineb est la fille de Fatma Bziouya. | Faux |
| d. Maâlem Abdeslem est un coiffeur. | Faux |

**3.** …avait au début éprouvé des difficultés à gagner sa vie et celle de sa jeune épouse. **(1pt)**

**4a.** Tisserand / tisserand de couvertures. **(0.5pt)**

**4b.** Oui. / améliorait de jour en jour sa production / ses articles furent très disputés / le ménage jouit d'un certain confort **(0.5pt)**

**5.** Dans notre famille, vendre et acheter a toujours été considéré comme le métier le plus vil. **(1pt)**

**6.** **(1pt)**

| Deux activités quotidiennes de Driss le teigneux | Deux activités du père le jour du vendredi |
|---|---|
| 1. Acheter les provisions. 2. Chercher le déjeuner de son patron. | 1. Il payait ses employés 2. Il allait à la Mosquée (Accepter également : nous déjeunions en famille) |

**7.** L'enfant affirma que leur ménage jouissait d'un certain confort. (+) ponctuation. (0.25pt*4) **(1pt)**

**8.** a. Bien vendus **(1pt)**

**9.** Accepter toute réponse convenable, correctement formulée. **(1pt)**

**10.** Accepter toute réponse convenable, correctement formulée. **(1pt)**

### II. Production écrite

| | |
|---|---|
| **CRITERES D'EVALUATION DU DISCOURS** | **5 points** |
| - Conformité de la production à la consigne d'écriture | 2pts |
| - Cohérence de l'argumentation | 2pts |
| - Structure du texte (organisation et progression du texte) | 1pt |
| **CRITERES D'EVALUATION DE LA LANGUE** | **5 points** |
| - Vocabulaire. | 1pt |
| - Syntaxe | 1pt |
| - Ponctuation | 1pt |
| - Orthographe | 1pt |
| - Conjugaison | 1pt |

## Epreuve -2-

### I. Étude de texte

**1.** **(1pt)**

| Titre de l'œuvre d'où est tiré ce texte | Auteur de l'œuvre | Genre de l'œuvre | Personnage principal de l'œuvre |
|---|---|---|---|
| Le Dernier jour d'un condamné | Victor HUGO | Roman OU Roman à thèse | Le condamné à mort |

**2.** **(1pt)**

| | |
|---|---|
| a. Le condamné est célibataire. | Faux |
| b. Victor Hugo est contre la peine de mort. | Vrai |
| c. Bicêtre est une prison à Paris. | Vrai |
| d. Le condamné est gracié à la fin de l'œuvre. | Faux |

**3a.** La guillotine. **(0.5pt)**

**3b.** La combinaison de ces lettres / il paraît qu'il y a une bascule et qu'on vous couche sur le ventre / on bâtissait la machine. (Accepter toute réponse allant dans ce sens) **(0.5pt)**

**4a.** Une fois. **(0.5pt)**

**4b.** Sur la place de grève. **(0.5pt)**

**5.** b. Assister au spectacle de l'exécution. **(1pt)**

**6.** Effroyable – Epouvantable – Affreux (Accepter deux réponses de cette liste) (0.5pt*2) **(1pt)**

**7.** Le condamné affirma qu'il l'avait entrevue une fois. (+) ponctuation. (0.25pt*4) **(1pt)**

**8a.** Une hyperbole. **(0.5pt)**

**8b.** La peur du condamné. **(0.5pt)**

**9.** Accepter toute réponse appropriée, correctement formulée. **(1pt)**

**10.** Accepter toute réponse appropriée, correctement formulée. **(1pt)**

### II. Production écrite

| | |
|---|---|
| **CRITERES D'EVALUATION DU DISCOURS** | **5 points** |
| - Conformité de la production à la consigne d'écriture. | 2pts |
| - Cohérence de l'argumentation. | 2pts |
| - Structure du texte. | 1pt |
| **CRITERES D'EVALUATION DE LA LANGUE** | **5 points** |
| - Vocabulaire. | 1pt |
| - Syntaxe. | 1pt |
| - Ponctuation. | 1pt |
| - Orthographe. | 1pt |
| - Conjugaison. | 1pt |

## Epreuve -3-

### I. Étude de texte

**1.** **(1pt)**

| Titre de l'œuvre d'où est tiré ce texte | Auteur de l'œuvre | Genre de l'œuvre | Personnage principal de l'œuvre |
|---|---|---|---|
| Antigone | Jean Anouilh | Pièce de théâtre OU Tragédie moderne | Antigone |

**2.** **(1pt)**

| | |
|---|---|
| a. Créon est le roi de Thèbes. | Vrai |
| b. Antigone est la sœur d'Ismène. | Vrai |
| c. Ismène est la fiancée d'Hémon. | Faux |
| d. Hémon est le frère de Polynice. | Faux |

**3.** La mort d'Eurydice / de la reine. OU Le suicide d'Eurydice / de la reine. **(1pt)**

**4a.** Une description valorisante. **(0.5pt)**

**4b.** « Une bonne femme. » [Accepter également « Une bonne femme …les pauvres »] **(0.5pt)**

**5.** Parce qu'elle a appris la mort de son fils. **(1pt)**

**6.** « Et s'il n'y avait pas cette large tache rouge… dort. » / « la tache rouge sur les linges autour de son cou. » / « pour s'y couper la gorge. » **(1pt)**

**7.** b. Ils sont tous morts. **(1pt)**

**8.** Le page affirma qu'il ne savait pas. (+) la ponctuation (0.25pt*4) **(1pt)**

**9.** Accepter toute réponse appropriée, correctement formulée. **(1pt)**

**10.** Accepter toute réponse appropriée, correctement formulée. **(1pt)**

### II. Production écrite

| | |
|---|---|
| **CRITERES D'EVALUATION DU DISCOURS** | **5 points** |
| - Conformité de la production à la consigne d'écriture. | 2pts |
| - Cohérence de l'argumentation. | 2pts |
| - Structure du texte. | 1pt |
| **CRITERES D'EVALUATION DE LA LANGUE** | **5 points** |
| - Vocabulaire. | 1pt |
| - Syntaxe. | 1pt |
| - Ponctuation. | 1pt |
| - Orthographe. | 1pt |
| - Conjugaison. | 1pt |$sujet$,
  $sujet${"parties": [{"titre": "Epreuve -1- — I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Papa, d'origine montagnarde comme ma mère, après avoir quitté son village situé à une cinquantaine de kilomètres de la grande ville, avait au début éprouvé des difficultés à gagner sa vie et celle de sa jeune épouse. A Fès, il fallait pour vivre exercer quelque industrie citadine ou monter un petit commerce. Dans notre famille, vendre et acheter a toujours été considéré comme le métier le plus **vil\\***. Mon père se souvint avoir été à un moment de sa jeunesse dans l'atelier de l'un de ses oncles maternels, tisserand de couvertures. Il s'acheta donc un minimum de matériel, loua un coin dans un atelier et s'installa tisserand. Il faisait honnêtement son travail, améliorait de jour en jour sa production. Bientôt, ses articles furent très disputés et le ménage jouit d'un certain confort. Mon père avait un vieil ouvrier avec lui sur le métier.\n\nDriss venait deux fois par jour à la maison : le matin acheter les provisions et au milieu du jour chercher le déjeuner de son patron. Mon père mangeait à l'atelier. Il venait seulement le soir après la dernière prière. Le vendredi faisait exception. Ce jour-là, mon père était à son métier jusqu'à midi environ ; il payait ses employés, allait à la Mosquée pour la grande prière et nous déjeunions en famille. Driss revint chargé de son lourd panier. Le teigneux n'avait rien oublié (…). Nous avions de l'huile, du charbon et de la farine pour tout le mois. Les voisines **moins fortunées\\*\\*** nous jalousaient un peu. Elles n'ignoraient d'ailleurs aucun détail de notre vie domestique. Ma mère, de son côté, connaissait les difficultés de tout le monde, l'état des finances de chaque **ménage\\*\\*\\***.\n\n\\***vil** : bas, mal vu.\n\\*\\***moins fortunées** : ici plus ou moins pauvres.\n\\*\\*\\***ménage** : famille.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "D'après votre lecture de l'œuvre, recopiez et complétez convenablement ce qui suit : Ce texte est tiré de l'œuvre intitulée ……… de l'écrivain marocain ……… L'histoire de l'œuvre se passe à ……… Le personnage principal est ………", "champs": [{"libelle": "l'œuvre intitulée", "reponse": "La Boîte à merveilles"}, {"libelle": "l'écrivain marocain", "reponse": "Ahmed SEFRIOUI"}, {"libelle": "se passe à", "reponse": "Fès"}, {"libelle": "Le personnage principal est", "reponse": "un enfant de six ans"}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "D'après votre lecture de l'œuvre, répondez par « **VRAI** » ou « **FAUX** » :", "affirmations": [{"texte": "a. Lalla Zoubida est la mère du narrateur.", "vrai": true}, {"texte": "b. La famille du narrateur habite Dar Chouafa.", "vrai": true}, {"texte": "c. Zineb est la fille de Fatma Bziouya.", "vrai": false}, {"texte": "d. Maâlem Abdeslem est un coiffeur.", "vrai": false}]}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Les parents du narrateur n'ont pas pu facilement s'installer à Fès. – Justifiez votre réponse à partir du texte.", "correction": "…avait au début éprouvé des difficultés à gagner sa vie et celle de sa jeune épouse."}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Quel métier a choisi de faire le père du narrateur?", "correction": "Tisserand / tisserand de couvertures."}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "A-t-il réussi son projet ? Relevez dans le texte une phrase qui le montre.", "correction": "Oui. / améliorait de jour en jour sa production / ses articles furent très disputés / le ménage jouit d'un certain confort"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Dans la famille du narrateur, le métier de commerçant n'est pas bien apprécié. – Relevez dans le texte une phrase qui le montre.", "correction": "Dans notre famille, vendre et acheter a toujours été considéré comme le métier le plus vil."}, {"type": "tableau", "numero": "6", "points": 1, "enonce": "Complétez le tableau suivant à partir du texte. [Deux lignes 1) et 2) à remplir dans chaque colonne.]", "champs": [{"libelle": "Deux activités quotidiennes de Driss le teigneux", "reponse": "1. Acheter les provisions. 2. Chercher le déjeuner de son patron."}, {"libelle": "Deux activités du père le jour du vendredi", "reponse": "1. Il payait ses employés 2. Il allait à la Mosquée (Accepter également : nous déjeunions en famille)"}]}, {"type": "libre", "numero": "7", "points": 1, "enonce": "« Notre ménage jouit d'un certain confort », affirma l'enfant. – Réécrivez cette phrase au discours indirect.", "correction": "L'enfant affirma que leur ménage jouissait d'un certain confort. (+) ponctuation. (0.25pt*4)"}, {"type": "choix", "numero": "8", "points": 1, "enonce": "« Bientôt, ses articles furent très **disputés** [souligné sur la feuille, en gras ici] », le mot souligné veut dire : – Recopiez la bonne proposition.", "options": ["Bien vendus.", "De mauvaise qualité.", "Très chers."], "bonne": 0}, {"type": "libre", "numero": "9", "points": 1, "enonce": "D'après le texte, pour réussir un projet professionnel, il faut faire honnêtement son travail. – Dites, en une ou deux phrases, ce que vous en pensez.", "correction": "Accepter toute réponse convenable, correctement formulée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "A votre avis, pourquoi les voisines moins fortunées étaient jalouses de la famille du narrateur ? – Justifiez votre réponse en une ou deux phrases.", "correction": "Accepter toute réponse convenable, correctement formulée."}]}, {"titre": "Epreuve -1- — II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nMaâlem Abdeslem a quitté la campagne et s'est installé en ville. De votre côté, aimeriez-vous vivre en ville ou plutôt à la campagne ?\n\n– Rédigez un texte dans lequel vous justifierez votre choix à l'aide d'arguments et d'exemples.", "questions": [], "redaction": true}, {"titre": "Epreuve -2- — I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Encore si je savais comment cela est fait, et de quelle façon on meurt là-dessus ! mais c'est horrible, je ne le sais pas.\n\nLe nom de la chose est effroyable, et je ne comprends point comment j'ai pu jusqu'à présent l'écrire et le prononcer.\n\nLa combinaison de ces dix lettres, leur aspect, leur physionomie est bien faite pour réveiller une idée épouvantable (…). L'image que j'y attache, à ce mot hideux, est vague, indéterminée, et d'autant plus sinistre.\n\n(…) Mais il est affreux de ne savoir ce que c'est, ni comment s'y prendre. Il paraît qu'il y a une bascule et qu'on vous couche sur le ventre…\n\n– Ah ! Mes cheveux blanchiront avant que ma tête ne tombe !\n\nJe l'ai cependant entrevue une fois.\n\nJe passais sur la place de Grève, en voiture, un jour, vers onze heures du matin. Tout à coup, la voiture s'arrêta.\n\nIl y avait foule sur la place. Je mis la tête à la portière. Une populace encombrait la Grève et le quai, et des femmes, des hommes, des enfants étaient debout sur le parapet. Au-dessus des têtes, on voyait une espèce d'estrade en bois rouge que trois hommes échafaudaient.\n\nUn condamné devait être exécuté le jour même, et l'on bâtissait la machine.\n\nJe détournai la tête avant d'avoir vu. À côté de la voiture, il y avait une femme qui disait à un enfant :\n\n– Tiens, regarde ! le couteau coule mal, ils vont graisser la rainure avec un bout de chandelle.\n\nC'est probablement là qu'ils en sont aujourd'hui. Onze heures viennent de sonner. Ils graissent sans doute la rainure.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant:", "champs": [{"libelle": "Titre de l'œuvre d'où est tiré ce texte", "reponse": "Le Dernier jour d'un condamné"}, {"libelle": "Auteur de l'œuvre", "reponse": "Victor HUGO"}, {"libelle": "Genre de l'œuvre", "reponse": "Roman OU Roman à thèse"}, {"libelle": "Personnage principal de l'œuvre", "reponse": "Le condamné à mort"}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "D'après votre lecture de l'œuvre, répondez par « **Vrai** » ou « **Faux** » :", "affirmations": [{"texte": "a. Le condamné est célibataire.", "vrai": false}, {"texte": "b. Victor Hugo est contre la peine de mort.", "vrai": true}, {"texte": "c. Bicêtre est une prison à Paris.", "vrai": true}, {"texte": "d. Le condamné est gracié à la fin de l'œuvre.", "vrai": false}]}, {"type": "choix", "numero": "3a", "points": 0.5, "enonce": "« Le nom de la chose est effroyable ». – Cette « chose » est : Le fusil / La guillotine / La chaise électrique. Recopiez la bonne proposition.", "options": ["Le fusil", "La guillotine", "La chaise électrique."], "bonne": 1}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Justifiez votre réponse par un indice tiré du texte.", "correction": "La combinaison de ces lettres / il paraît qu'il y a une bascule et qu'on vous couche sur le ventre / on bâtissait la machine. (Accepter toute réponse allant dans ce sens)"}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Le narrateur avait déjà vu cette « chose » dans le passé. Dites combien de fois.", "correction": "Une fois."}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "Dites où l'avait-il déjà vue.", "correction": "Sur la place de grève."}, {"type": "choix", "numero": "5", "points": 1, "enonce": "« Il y avait foule sur la place » pour : – Recopiez la bonne proposition.", "options": ["réclamer la libération du condamné.", "assister au spectacle de l'exécution.", "dénoncer la peine de mort."], "bonne": 1}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez dans le texte deux adjectifs employés pour décrire **la peur** du condamné.", "correction": "Effroyable – Epouvantable – Affreux (Accepter deux réponses de cette liste) (0.5pt*2)"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "« Je l'ai cependant entrevue une fois », affirma le condamné. – Réécrivez cette phrase au discours indirect.", "correction": "Le condamné affirma qu'il l'avait entrevue une fois. (+) ponctuation. (0.25pt*4)"}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "« Ah ! **Mes cheveux blanchiront** [souligné sur la feuille, en gras ici] avant que ma tête ne tombe ! » Quelle est la figure de style soulignée dans cet énoncé ?", "correction": "Une hyperbole."}, {"type": "choix", "numero": "8b", "points": 0.5, "enonce": "Cette figure renforce : – Recopiez la bonne proposition.", "options": ["La peur du condamné", "La joie du condamné", "le courage du condamné."], "bonne": 0}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Dans le texte, les enfants, eux aussi, assistent à l'exécution des condamnés à mort. – Dites, en une ou deux phrases, ce que vous en pensez.", "correction": "Accepter toute réponse appropriée, correctement formulée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Dites, en une ou deux phrases, ce que vous pensez de cette façon de faire mourir les condamnés.", "correction": "Accepter toute réponse appropriée, correctement formulée."}]}, {"titre": "Epreuve -2- — II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nCertains pensent que la peine de mort est le moyen le plus efficace pour mettre fin au crime.\n\n– Partagez-vous cette idée ?\n\n– Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.", "questions": [], "redaction": true}, {"titre": "Epreuve -3- — I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**CRÉON**, *entre avec son page.* Je les ai fait coucher l'un près de l'autre, enfin! Ils sont lavés, maintenant, reposés. Ils sont seulement un peu pâles, mais si calmes. Deux amants au lendemain de la première nuit. Ils ont fini, eux.\n\n**LE CHŒUR :** Pas toi, Créon. Il te reste encore quelque chose à apprendre. Eurydice, la reine, ta femme…\n\n**CRÉON :** Une bonne femme parlant toujours de son jardin, de ses confitures, de ses tricots, de ses éternels tricots pour les pauvres. C'est drôle comme les pauvres ont éternellement besoin de tricots. On dirait qu'ils n'ont besoin que de tricots…\n\n**LE CHŒUR :** Les pauvres de Thèbes auront froid, cet hiver, Créon. En apprenant la mort de son fils, la reine a posé ses aiguilles, sagement, après avoir terminé son rang, posément, comme tout ce qu'elle fait, un peu plus tranquillement peut-être que d'habitude. Et puis elle est passée dans sa chambre, sa chambre à l'odeur de lavande, aux petits napperons brodés et aux cadres de peluche, pour s'y couper la gorge, Créon. Elle est étendue maintenant sur un des petits lits jumeaux démodés, à la même place où tu l'as vue jeune fille un soir, et avec le même sourire, à peine un peu plus triste. Et s'il n'y avait pas cette large tache rouge sur les linges autour de son cou, on pourrait croire qu'elle dort.\n\n**CRÉON :** Elle aussi. Ils dorment tous. C'est bien. La journée a été rude. *(Un temps. Il dit sourdement)* Cela doit être bon de dormir.\n\n**LE CHŒUR :** Et tu es tout seul maintenant, Créon\n\n**CRÉON :** Tout seul, oui. *(Un silence. Il pose sa main sur l'épaule de son page.)* Petit…\n\n**LE PAGE :** Monsieur ?\n\n**CRÉON :** Je vais te dire, à toi. Ils ne savent pas, les autres; on est là, devant l'ouvrage, on ne peut pourtant pas se croiser les bras. Ils disent que c'est une sale besogne, mais si on ne la fait pas, qui la fera ?\n\n**LE PAGE :** Je ne sais pas, monsieur\n\n**CRÉON :** Bien sûr, tu ne sais pas. Tu en as de la chance ! Ce qu'il faudrait, c'est ne jamais savoir.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant:", "champs": [{"libelle": "Titre de l'œuvre d'où est tiré ce texte", "reponse": "Antigone"}, {"libelle": "Auteur de l'œuvre", "reponse": "Jean Anouilh"}, {"libelle": "Genre de l'œuvre", "reponse": "Pièce de théâtre OU Tragédie moderne"}, {"libelle": "Personnage principal de l'œuvre", "reponse": "Antigone"}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "D'après votre lecture de l'œuvre, répondez par « **Vrai** » ou « **Faux** ».", "affirmations": [{"texte": "a. Créon est le roi de Thèbes.", "vrai": true}, {"texte": "b. Antigone est la sœur d'Ismène.", "vrai": true}, {"texte": "c. Ismène est la fiancée d'Hémon.", "vrai": false}, {"texte": "d. Hémon est le frère de Polynice.", "vrai": false}]}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Quelle nouvelle annonce le Chœur à Créon ?", "correction": "La mort d'Eurydice / de la reine. OU Le suicide d'Eurydice / de la reine."}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Créon fait-il une description valorisante ou dévalorisante de sa femme ?", "correction": "Une description valorisante."}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "Justifiez votre réponse à partir du texte.", "correction": "« Une bonne femme. » [Accepter également « Une bonne femme …les pauvres »]"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Pourquoi la reine décide-t-elle de mettre fin à sa vie ?", "correction": "Parce qu'elle a appris la mort de son fils."}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Qu'est-ce qui prouve au Chœur que la reine s'est effectivement donné la mort ?", "correction": "« Et s'il n'y avait pas cette large tache rouge… dort. » / « la tache rouge sur les linges autour de son cou. » / « pour s'y couper la gorge. »"}, {"type": "choix", "numero": "7", "points": 1, "enonce": "Dans le texte « Ils dorment tous » veut dire : – Recopiez la bonne proposition.", "options": ["Ils font tous une sieste.", "Ils sont tous morts.", "Ils sont tous dans un sommeil profond."], "bonne": 1}, {"type": "libre", "numero": "8", "points": 1, "enonce": "« Je ne sais pas », affirma le page. – Réécrivez cet énoncé au discours indirect.", "correction": "Le page affirma qu'il ne savait pas. (+) la ponctuation (0.25pt*4)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Malgré la mort de ses proches, Créon continue de jouer son rôle de roi – Dites, en une ou deux phrases, ce que vous pensez de cette attitude.", "correction": "Accepter toute réponse appropriée, correctement formulée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "« Ce qu'il faudrait, c'est ne jamais savoir », dit Créon à son Page. – Dites, en une ou deux phrases, ce que vous pensez de cette affirmation.", "correction": "Accepter toute réponse appropriée, correctement formulée."}]}, {"titre": "Epreuve -3- — II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nLa reine Eurydice s'est coupé la gorge en apprenant la mort de son fils Hémon.\n\n– Croyez-vous que le suicide soit la bonne solution aux problèmes de la vie ?\n\n– Rédigez un texte dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples.", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  coefficient = excluded.coefficient,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
