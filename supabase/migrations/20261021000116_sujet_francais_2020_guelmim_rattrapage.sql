-- Sujet de français, examen régional 2020 (session de rattrapage), académie
-- Guelmim-Oued Noun.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2020 جهة كلميم واد نون »).
-- Corrigé et barème officiels recopiés question par question.
--
-- ATTENTION : le fichier est rangé comme rattrapage (2020R), mais toutes les
-- pages portent « الدورة : العادية 2020 » (session normale). À vérifier avant
-- insertion : ce sujet devrait sans doute être enregistré en session normale.
-- Académie de Guelmim-Oued Noun, « الأولى بكالوريا – مترشحون متمدرسون »,
-- « المدة الزمنية : 2 ساعات », « المعامل : 3 أو 4 » : coefficient 4 pour les
-- sciences expérimentales, sc. mathématiques, sciences et technologies,
-- technologies et arts appliqués, 3 pour les sciences économiques et gestion
-- (laissé vide). Trois épreuves au choix (« الموضوع رقم 1/2/3 » : La Boîte à
-- merveilles, Le Dernier Jour d'un condamné, Antigone), pages 1 à 6, suivies
-- de leurs corrigés (pages 7 à 9).
-- Les questions en deux parties notées « 1pt. » sur la feuille restent
-- entières ; la répartition du corrigé est recopiée dans la réponse.
-- Épreuve 1 : la phrase en gras du premier paragraphe l'est aussi sur la
-- feuille ; l'énoncé souligné de la question 7 (« un nid douillet à l'abri
-- du vent ») est rendu en gras italique.
-- Épreuve 3 : la question 8 n'a pas de barème sur la feuille ; le corrigé la
-- note « 1pt. (½pt. x 2) » : 1 point retenu pour que l'étude fasse 10. La
-- question 5 dit « cache plutôt » sur la feuille, « traduit » dans le corrigé.
-- Question 6 : le corrigé commence par « éclataient comme un orage/ Des
-- explosions de colère/ leurs douleurs de pieds que la foule écrasait/ les
-- yeux rouges et de l'écume au coin des lèvres se tenant mutuellement par le
-- collet », expressions absentes de ce texte (corrigé d'un autre passage) :
-- seules les expressions présentes dans le texte sont reportées. Le corrigé
-- donne 1944 comme date de parution d'Antigone ; reporté tel quel.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2020,
  $sujet$rattrapage$sujet$,
  $sujet$Guelmim-Oued Noun$sujet$,
  $sujet$Sciences expérimentales – Sc. mathématiques – Sciences et technologies – Technologies – Arts appliqués / Sciences économiques et gestion$sujet$,
  120,
  $sujet$**Important ! vous traitez au choix l'une des trois épreuves suivantes :**

# Épreuve n° 1

## Texte

Lalla Aïcha habitait dans l'impasse de Zankat Hajjama une maison avec une porte basse. Cette maison rappelait, par certains côtés, Lalla Aïcha elle-même. **Toutes les deux avaient connu des temps meilleurs, toutes les deux en gardaient une attitude guindée, une distinction désuète.**

Lalla Aïcha occupait deux pièces de petites dimensions, au deuxième étage. Un balcon donnant sur le patio, garni d'une balustrade en fer forgé, conduisait à la pièce principale. L'autre chambre s'ouvrait directement sur l'escalier et servait surtout à entreposer les provisions d'hiver. Lalla Aïcha y faisait aussi sa cuisine. La grande pièce avait deux fenêtres, l'une s'ouvrait sur le patio de la maison, l'autre sur les terrasses des maisons voisines et sur les toits d'une petite mosquée de quartier. Cette chambre, deux fois plus longue que large, était d'une propreté méticuleuse. Des cretonnes à grands ramages couvraient les matelas, d'énormes coussins brodés au petit point, enveloppés dans une légère soierie transparente, s'amoncelaient çà et là. Le mur s'ornait de grandes étagères peintes, garnies de bols de faïence européenne, d'assiettes décorées de roses dodues, de verres en forme de gobelets. Une pendule en bois foncé, riche en sculpture, clochetons et pendentifs, occupait sur le mur la place d'honneur. Le sol était couvert d'une natte de jonc. Par-dessus la natte, se déployait une carpette aux couleurs vives.

Cet ensemble baignait dans une atmosphère d'aisance, de quiétude. Ce n'était certes pas le grand luxe mais le confort, ***un nid douillet à l'abri du vent*** *[souligné sur la feuille, en gras italique ici]*.

Dès notre arrivée, Lalla Aïcha nous servit des gâteaux et du thé à la menthe. Elle parla ensuite de ses douleurs de jointures qui la taquinaient de nouveau, d'une rage de dents qui l'avait rendue folle la semaine dernière, de son manque d'appétit. Elle posa mille questions à ma mère qui répondait avec complaisance, s'attardait sur un détail, se lançait dans une longue digression, mimait une scène.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1pt.)**

| Auteur | Titre | Genre littéraire | Siècle |
|---|---|---|---|
| | | | |

**2.** D'après votre lecture de l'œuvre, choisissez et recopiez les informations qui sont **correctes** : a- La visite de Lalla Aïcha se déroulait à la fin de l'été. b- Lalla Aïcha habite dans trois pièces. c- Le récit dans ce chapitre relate la visite de la mère et son enfant chez Lalla Aïcha. d- Lalla Aïcha va révéler plus tard des problèmes de son mari qui fut escroqué par son associé. **(1pt.)**

**3.** Relevez dans le texte un indice qui montre la propreté du logement de Lalla Aïcha. **(1pt.)**

**4.** Trouvez dans le texte un indice qui montre que les deux femmes ont parlé de beaucoup de sujets. **(1pt.)**

**5.** Quel est le caractère de Lalla Aïcha qui se dégage de la phrase en gras (1er paragraphe) ? **Recopiez la bonne réponse.** **(1pt.)**

a- sévérité  
b- attachement aux prestiges  
c- caractère bizarre  
d- une grande négligence.

**6.** Relevez dans le texte quatre mots appartenant au champ lexical du mobilier (accessoires). **(1pt.)**

**7.** A- Identifiez la figure de style dans l'énoncé souligné dans le texte : a. *une comparaison* ; b. *une métaphore* ; c. *une personnification.* **Recopiez la bonne réponse.** B- Cette figure de style accentue-t-elle une description valorisante ou une description dévalorisante ? **Recopiez la bonne réponse.** **(1pt.)**

**8.** Relevez une subordonnée relative dans le quatrième paragraphe. **(1pt.)**

**9.** Pensez-vous que les rencontres entre femmes ne sont qu'une occasion de dire du mal des autres ? Justifiez votre point de vue. **(1pt.)**

**10.** Croyez-vous que Lalla Aïcha a une bonne manière de vivre ? Justifiez votre point de vue. **(1pt.)**

## II. Production écrite (10 points)

***Sujet*** : Certain(e)s ami (e)s sont plus important (e)s dans notre vie et peuvent remplacer nos frères et nos sœurs.

Êtes-vous d'accord avec cette affirmation ?

Rédigez un texte où vous exprimez votre point de vue en justifiant par des arguments et des exemples pertinents.

***Lors de la rédaction, vous tenez compte des critères suivants :***

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |
| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Respect des règles orthographiques et grammaticales. | |
| | | Conjugaison (emploi des temps verbaux) | |

# Épreuve n° 2

## Texte

Le prêtre est revenu.

Il a des cheveux blancs, l'air très doux, une bonne et respectable figure ; c'est en effet un homme excellent et charitable. Ce matin, je l'ai vu vider sa bourse dans les mains des prisonniers. D'où vient que sa voix n'a rien qui émeuve et qui soit ému ? D'où vient qu'il ne m'a rien dit encore qui m'ait pris par l'intelligence ou par le cœur ?

Ce matin, j'étais égaré. J'ai à peine entendu ce qu'il m'a dit. Cependant ses paroles m'ont semblé inutiles, et je suis resté indifférent ; elles ont glissé comme cette pluie froide sur cette vitre glacée.

Cependant, quand il est rentré tout à l'heure près de moi, sa vue m'a fait du bien. C'est parmi tous ces hommes le seul qui soit encore homme pour moi, me suis-je dit. Et il m'a pris une ardente soif de bonnes et consolantes paroles.

Nous nous sommes assis, lui sur la chaise, moi sur le lit. Il m'a dit : – Mon fils... – Ce mot m'a ouvert le cœur. Il a continué :

– Mon fils, croyez-vous en Dieu ?

– Oui, mon père, lui ai-je répondu.

– Croyez-vous en la sainte église catholique, apostolique et romaine ?

– Volontiers, lui ai-je dit.

– Mon fils, a-t-il repris, vous avez l'air de douter.

Alors il s'est mis à parler. Il a parlé longtemps ; il a dit beaucoup de paroles ; puis, quand il a cru avoir fini, il s'est levé et m'a regardé pour la première fois depuis le commencement de son discours, en m'interrogeant :

– Eh bien ?

Je proteste que je l'avais écouté avec avidité d'abord, puis avec attention, puis avec dévouement. Je me suis levé aussi.

– Monsieur, lui ai-je répondu, laissez-moi seul, je vous prie.

Il m'a demandé :

– Quand reviendrai-je ?

– Je vous le ferai savoir.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1pt.)**

| Auteur | Titre | Genre littéraire | Siècle |
|---|---|---|---|
| | | | |

**2.** A partir des lieux cités ci-dessous, mettez en ordre le parcours du narrateur de ce texte : **La conciergerie (*palais de justice*) ; La place de Grève ; Bicêtre ; L'hôtel de ville.** **(1pt.)**

**3.** Pourquoi le prêtre est-il revenu chez le narrateur ? **(1pt.)**

**4.** Dites si les informations suivantes sont **vraies** ou **fausses,** puis justifiez vos réponses par des éléments du texte : a- Le discours du prêtre était utile au narrateur. b- L'arrivée du prêtre a fait du bien au narrateur. **(1pt.)**

**5.** A) Recopiez et complétez le tableau suivant à partir du texte. [Tableau : *Personnage* | *Trait physique* | *Trait moral* — ligne « Le prêtre », deux cases à remplir.] B) S'agit-il d'une description **valorisante, dévalorisante** ou **neutre** ? **Recopiez la bonne réponse.** **(1pt.)**

**6.** "*C'est parmi tous ces hommes le seul* ***qui soit encore homme pour moi*** ". Dans la partie en gras de l'énoncé ci-dessus s'agit-il d'une : **Choisissez et recopiez la bonne réponse.** **(1pt.)**

a- subordonnée complétive  
b- subordonnée relative  
c- subordonnée de temps.

**7.** A) Quelle figure de style reconnaissez-vous dans l'énoncé suivant ? "*Je proteste que je l'avais écouté avec avidité d'abord, puis avec attention, puis avec dévouement.*" **a- Métaphore ; b- antithèse ; c- gradation.** **Recopiez la bonne réponse.** B) Quel est l'effet recherché par l'emploi de cette figure ? **(1pt.)**

**8.** Mettez l'énoncé suivant au discours indirect : *Il m'a demandé : quand reviendrai-je ?* **(1pt.)**

**9.** Pensez-vous que la présence du prêtre à côté d'un condamné à mort, peu de temps avant son exécution (*sa mort*), est nécessaire ? Justifiez votre point de vue par un argument. **(1pt.)**

**10.** A votre avis est-ce que la peine de mort peut être une solution pour combattre la criminalité ? Justifiez votre réponse par un argument. **(1pt.)**

## II. Production écrite (10 points)

***Sujet*** : La prison fait perdre à certains prisonniers la foi (ou la croyance) en Dieu.

Partagez-vous cette affirmation ?

Dans un texte argumentatif cohérent, exprimez votre point de vue en utilisant des arguments pertinents.

***Lors de la rédaction, vous tenez compte des critères suivants :***

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |
| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Respect des règles orthographiques et grammaticales. | |
| | | Conjugaison (emploi des temps verbaux) | |

# Épreuve n° 3

## Texte

**ANTIGONE :**

Vous pouvez seulement me faire mourir.

**CRÉON**

Et si je te fais torturer ?

**ANTIGONE**

Pourquoi ? Pour que je pleure, que je demande grâce, pour que je jure tout ce qu'on voudra, et que je recommence après, quand je n'aurai plus mal ?

**CRÉON** (*lui serre le bras.*)

Écoute-moi bien. J'ai le mauvais rôle, c'est entendu, et tu as le bon. Et tu le sens. Mais n'en profite tout de même pas trop, petite peste... Si j'étais une bonne brute ordinaire de tyran, il y aurait déjà longtemps qu'on t'aurait arraché la langue, tiré les membres aux tenailles, ou jeté dans un trou. Mais tu vois dans mes yeux quelque chose qui hésite, tu vois que je te laisse parler au lieu d'appeler mes soldats ; alors, tu nargues, tu attaques tant que tu peux. Où veux-tu en venir, petite furie ?

**ANTIGONE**

Lâchez-moi. Vous me faites mal au bras avec votre main.

**CRÉON** *(qui serre plus fort).*

Non. Moi, je suis le plus fort comme cela, j'en profite aussi.

**ANTIGONE** *(pousse un petit cri)*

Aïe !

**CRÉON**, *(dont les yeux rient.)*

C'est peut-être ce que je devrais faire après tout, tout simplement, te tordre le poignet, te tirer les cheveux comme on fait aux filles dans les jeux.

## I. Étude de texte (10 points)

**1.** Recopiez et Complétez le tableau suivant : **(1pt.)**

| Titre de l'œuvre | Nom de l'auteur | Genre de l'œuvre | La date de parution |
|---|---|---|---|
| | | | |

**2.** Quel est le crime d'Antigone ? **(1pt.)**

**3.** Quel est le but de Créon dans ce dialogue ? **(1pt.)**

**4.** Relevez dans le texte une phrase qui montre l'entêtement d'Antigone qui ne change pas ses idées malgré les conseils de Créon. **(1pt.)**

**5.** La didascalie *(dont les yeux rient)* cache plutôt : **Recopiez la bonne réponse.** **(1pt.)**

a- le sadisme de Créon  
b- la moquerie de Créon  
c- le caractère plaisant de Créon.

**6.** Relevez dans le texte quatre expressions qui montrent la violence humaine. **(1pt.)**

**7A.** Identifiez la figure de style dans l'énoncé suivant : « *J'ai le mauvais rôle, c'est entendu, et tu as le bon.* » a- une métaphore ; b- une hyperbole ; c- une personnification ; d- une antithèse. **Recopiez la bonne réponse.** **(½ pt.)**

**7B.** Cette figure montre-t-elle l'aveu ou le mensonge de Créon ? **(½ pt.)**

**8.** Recopiez et complétez le tableau suivant : [Énoncé : *Tu vois que je te laisse parler.*]

| Proposition subordonnée | Nature de la proposition subordonnée |
|---|---|
| | |

**9.** A votre avis, y a-t-il des situations dans la vie où l'on doit être têtu jusqu'au bout ? Justifiez votre réponse par un argument. **(1pt.)**

**10.** Appréciez-vous le comportement violent de Créon dans cette scène ? Justifiez votre opinion. **(1pt.)**

## II. Production écrite (10 points)

***Sujet*** : Quand les parents utilisent la force contre leurs enfants, c'est juste parce qu'ils aiment ces derniers et leur veulent du bien.

Partagez-vous cet avis ?

Rédigez un texte où vous exprimez votre point de vue en justifiant par des arguments et des exemples pertinents.

***Lors de la rédaction, vous tenez compte des critères suivants :***

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |
| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Respect des règles orthographiques et grammaticales. | |
| | | Conjugaison (emploi des temps verbaux) | |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute réponse non prévue est laissée à l'appréciation du professeur correcteur.*

## Épreuve n° 1

### I. Étude de texte

**1.** **(1pt.)**

| Auteur | Titre | Genre littéraire | Siècle |
|---|---|---|---|
| Ahmed Sefrioui | *La Boîte à merveilles* | Roman autobiographique | 20ème |

**2.** Les informations correctes : c et d (½ pt.x2) **(1pt.)**

**3.** Indice de la propreté du logement de Lalla Aïcha : « *propreté méticuleuse* » **(1pt.)**

**4.** Indice : « *Elle posa mille questions à ma mère qui répondait avec complaisance, s'attardait sur un détail, se lançait dans une longue digression….* ». **(1pt.)**

**5.** Réponse (b) : attachement aux prestiges. **(1pt.)**

**6.** Quatre mots appartenant au champ lexical du mobilier : [coussins brodés ; soierie ; bols de faïence ; assiettes ; verres ; pendule ; nattes…] (¼ pt.x4) **(1pt.)**

**7.** A. une métaphore ; B. Elle accentue une description valorisante. (½ pt.x2) **(1pt.)**

**8.** Une subordonnée relative dans le 4e paragraphe : [*qui la taquinaient de nouveau*] ; [*qui l'avait rendue folle*] ; [*qui répondait avec complaisance*] **(1pt.)**

**9.** Accepter toute formulation adéquate où le candidat exprime son point de vue en le justifiant. (½ x 2) **(1pt.)**

**10.** Accepter toute formulation adéquate où le candidat exprime son point de vue en le justifiant. (½ x 2) **(1pt.)**

### II. Production écrite

***__IMPORTANT__ : Lors de la correction, tenir impérativement compte des critères spécifiés en accordant la note finale sur la base des notes partielles attribuées et __dûment reportées sur la copie__ du candidat ou de la candidate.***

***Lors de la correction, vous tenez compte des critères suivants :***

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |
| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Respect des règles orthographiques et grammaticales. | |
| | | Conjugaison (emploi des temps verbaux) | |

## Épreuve n° 2

### I. Étude de texte

**1.** **(1pt.)**

| Auteur | Titre | Genre littéraire | Siècle |
|---|---|---|---|
| Victor Hugo | *Le Dernier jour d'un condamné* | Roman à thèse | 19ème |

**2.** L'ordre du parcours du narrateur dans l'œuvre : a- Bicêtre ; b- la conciergerie (*palais de justice*) ; c- l'hôtel de ville ; d- la place de Grève. (¼ pt.x4) **(1pt.)**

**3.** Pour le soutenir, l'assister, le consoler le préparer à la mort ... **(1pt.)**

**4.** a- **faux** : ses paroles m'ont semblé inutiles, je suis resté indifférent. b- **vrai** : Sa vue m'a fait du bien. (¼ pt.x4) **(1pt.)**

**5.** A) Le prêtre — Trait physique : -cheveux blancs ; Trait moral : -l'air très doux-bonne et respectable figure -homme excellent et charitable (½ pt. (¼ pt.x4)) B) description valorisante. (½ pt.) **(1pt.)**

**6.** Une subordonnée relative. **(1pt.)**

**7.** A) Gradation. (½ pt.) B) Le grand regret d'avoir écouté les paroles du prêtre ... (intensité du regret) (½ pt.) **(1pt.)**

**8.** Le discours indirect : Il m'a demandé *quand il reviendrait.* Sous barème : le maintien de quand (0,25) ; suppression de la ponctuation (0,25) ; il (0,25) ; reviendrait (0,25). **(1pt.)**

**9.** Accepter toute formulation adéquate où le candidat exprime son point de vue justifié. (½ x 2) **(1pt.)**

**10.** Accepter toute formulation adéquate où le candidat exprime son point de vue justifié. (½ x 2) **(1pt.)**

### II. Production écrite

***__IMPORTANT__ : Lors de la correction, tenir impérativement compte des critères spécifiés en accordant la note finale sur la base des notes partielles attribuées et __dûment reportées sur la copie__ du candidat ou de la candidate.***

***Lors de la correction, vous tenez compte des critères suivants :***

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |
| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Respect des règles orthographiques et grammaticales. | |
| | | Conjugaison (emploi des temps verbaux) | |

## Épreuve n° 3

### I. Étude de texte

**1.** **(1pt.)**

| Titre de l'œuvre | Nom de l'auteur | Genre de l'œuvre | La date de parution |
|---|---|---|---|
| *Antigone* | Jean Anouilh | Tragédie moderne | 1944 |

**2.** Le crime d'Antigone : elle a osé enterrer le cadavre de son frère Polynice, en bravant la loi de Créon qui l'avait interdit… (accepter toute formulation pertinente) **(1pt.)**

**3.** Le but de Créon dans ce dialogue est de sauver Antigone qui n'avait pas respecté cette interdiction. **(1pt.)**

**4.** Une phrase qui montre l'entêtement d'Antigone : « *…que je demande grâce, pour que je jure tout ce qu'on voudra, et que je recommence après, quand je n'aurai plus mal.* » **(1pt.)**

**5.** La didascalie *(dont les yeux rient)* traduit : **c)** le caractère plaisant de Créon. **(1pt.)**

**6.** *si je te fais torturer/lui serre le bras/ te tordre le poignet, te tirer les cheveux…* (¼ x4) [Note StudyEra : le corrigé cite d'abord quatre autres expressions qui ne figurent pas dans ce texte ; elles sont omises ici.] **(1pt.)**

**7A.** d- une antithèse. **(½ pt.)**

**7B.** elle montre l'aveu de Créon. **(½ pt.)**

**8.** 

| Proposition subordonnée | Nature de la proposition subordonnée |
|---|---|
| [*que je te laisse parler.*] | Complétive |

**9.** Accepter toute formulation adéquate où le candidat exprime son point de vue en le justifiant. (½pt. x 2) **(1pt.)**

**10.** Accepter toute formulation adéquate où le candidat exprime son point de vue en le justifiant. (½pt. x 2) **(1pt.)**

### II. Production écrite

***__IMPORTANT__ : Lors de la correction, tenir impérativement compte des critères spécifiés en accordant la note finale sur la base des notes partielles attribuées et __dûment reportées sur la copie__ du candidat ou de la candidate.***

***Lors de la correction, vous tenez compte des critères suivants :***

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |
| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Respect des règles orthographiques et grammaticales. | |
| | | Conjugaison (emploi des temps verbaux) | |$sujet$,
  $sujet${"parties": [{"titre": "Épreuve n° 1 — I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Lalla Aïcha habitait dans l'impasse de Zankat Hajjama une maison avec une porte basse. Cette maison rappelait, par certains côtés, Lalla Aïcha elle-même. **Toutes les deux avaient connu des temps meilleurs, toutes les deux en gardaient une attitude guindée, une distinction désuète.**\n\nLalla Aïcha occupait deux pièces de petites dimensions, au deuxième étage. Un balcon donnant sur le patio, garni d'une balustrade en fer forgé, conduisait à la pièce principale. L'autre chambre s'ouvrait directement sur l'escalier et servait surtout à entreposer les provisions d'hiver. Lalla Aïcha y faisait aussi sa cuisine. La grande pièce avait deux fenêtres, l'une s'ouvrait sur le patio de la maison, l'autre sur les terrasses des maisons voisines et sur les toits d'une petite mosquée de quartier. Cette chambre, deux fois plus longue que large, était d'une propreté méticuleuse. Des cretonnes à grands ramages couvraient les matelas, d'énormes coussins brodés au petit point, enveloppés dans une légère soierie transparente, s'amoncelaient çà et là. Le mur s'ornait de grandes étagères peintes, garnies de bols de faïence européenne, d'assiettes décorées de roses dodues, de verres en forme de gobelets. Une pendule en bois foncé, riche en sculpture, clochetons et pendentifs, occupait sur le mur la place d'honneur. Le sol était couvert d'une natte de jonc. Par-dessus la natte, se déployait une carpette aux couleurs vives.\n\nCet ensemble baignait dans une atmosphère d'aisance, de quiétude. Ce n'était certes pas le grand luxe mais le confort, ***un nid douillet à l'abri du vent*** *[souligné sur la feuille, en gras italique ici]*.\n\nDès notre arrivée, Lalla Aïcha nous servit des gâteaux et du thé à la menthe. Elle parla ensuite de ses douleurs de jointures qui la taquinaient de nouveau, d'une rage de dents qui l'avait rendue folle la semaine dernière, de son manque d'appétit. Elle posa mille questions à ma mère qui répondait avec complaisance, s'attardait sur un détail, se lançait dans une longue digression, mimait une scène.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Titre", "reponse": "*La Boîte à merveilles*"}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Siècle", "reponse": "20ème"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "D'après votre lecture de l'œuvre, choisissez et recopiez les informations qui sont **correctes** : a- La visite de Lalla Aïcha se déroulait à la fin de l'été. b- Lalla Aïcha habite dans trois pièces. c- Le récit dans ce chapitre relate la visite de la mère et son enfant chez Lalla Aïcha. d- Lalla Aïcha va révéler plus tard des problèmes de son mari qui fut escroqué par son associé.", "correction": "Les informations correctes : c et d (½ pt.x2)"}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Relevez dans le texte un indice qui montre la propreté du logement de Lalla Aïcha.", "correction": "Indice de la propreté du logement de Lalla Aïcha : « *propreté méticuleuse* »"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Trouvez dans le texte un indice qui montre que les deux femmes ont parlé de beaucoup de sujets.", "correction": "Indice : « *Elle posa mille questions à ma mère qui répondait avec complaisance, s'attardait sur un détail, se lançait dans une longue digression….* »."}, {"type": "choix", "numero": "5", "points": 1, "enonce": "Quel est le caractère de Lalla Aïcha qui se dégage de la phrase en gras (1er paragraphe) ? **Recopiez la bonne réponse.**", "options": ["sévérité", "attachement aux prestiges", "caractère bizarre", "une grande négligence."], "bonne": 1}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez dans le texte quatre mots appartenant au champ lexical du mobilier (accessoires).", "correction": "Quatre mots appartenant au champ lexical du mobilier : [coussins brodés ; soierie ; bols de faïence ; assiettes ; verres ; pendule ; nattes…] (¼ pt.x4)"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "A- Identifiez la figure de style dans l'énoncé souligné dans le texte : a. *une comparaison* ; b. *une métaphore* ; c. *une personnification.* **Recopiez la bonne réponse.** B- Cette figure de style accentue-t-elle une description valorisante ou une description dévalorisante ? **Recopiez la bonne réponse.**", "correction": "A. une métaphore ; B. Elle accentue une description valorisante. (½ pt.x2)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Relevez une subordonnée relative dans le quatrième paragraphe.", "correction": "Une subordonnée relative dans le 4e paragraphe : [*qui la taquinaient de nouveau*] ; [*qui l'avait rendue folle*] ; [*qui répondait avec complaisance*]"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Pensez-vous que les rencontres entre femmes ne sont qu'une occasion de dire du mal des autres ? Justifiez votre point de vue.", "correction": "Accepter toute formulation adéquate où le candidat exprime son point de vue en le justifiant. (½ x 2)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Croyez-vous que Lalla Aïcha a une bonne manière de vivre ? Justifiez votre point de vue.", "correction": "Accepter toute formulation adéquate où le candidat exprime son point de vue en le justifiant. (½ x 2)"}]}, {"titre": "Épreuve n° 1 — II. Production écrite", "points": 10, "texte": "***Sujet*** : Certain(e)s ami (e)s sont plus important (e)s dans notre vie et peuvent remplacer nos frères et nos sœurs.\n\nÊtes-vous d'accord avec cette affirmation ?\n\nRédigez un texte où vous exprimez votre point de vue en justifiant par des arguments et des exemples pertinents.\n\n***Lors de la rédaction, vous tenez compte des critères suivants :***\n\n| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |\n|---|---|---|---|\n| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |\n| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |\n| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |\n| | | Respect des règles orthographiques et grammaticales. | |\n| | | Conjugaison (emploi des temps verbaux) | |", "questions": [], "redaction": true}, {"titre": "Épreuve n° 2 — I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Le prêtre est revenu.\n\nIl a des cheveux blancs, l'air très doux, une bonne et respectable figure ; c'est en effet un homme excellent et charitable. Ce matin, je l'ai vu vider sa bourse dans les mains des prisonniers. D'où vient que sa voix n'a rien qui émeuve et qui soit ému ? D'où vient qu'il ne m'a rien dit encore qui m'ait pris par l'intelligence ou par le cœur ?\n\nCe matin, j'étais égaré. J'ai à peine entendu ce qu'il m'a dit. Cependant ses paroles m'ont semblé inutiles, et je suis resté indifférent ; elles ont glissé comme cette pluie froide sur cette vitre glacée.\n\nCependant, quand il est rentré tout à l'heure près de moi, sa vue m'a fait du bien. C'est parmi tous ces hommes le seul qui soit encore homme pour moi, me suis-je dit. Et il m'a pris une ardente soif de bonnes et consolantes paroles.\n\nNous nous sommes assis, lui sur la chaise, moi sur le lit. Il m'a dit : – Mon fils... – Ce mot m'a ouvert le cœur. Il a continué :\n\n– Mon fils, croyez-vous en Dieu ?\n\n– Oui, mon père, lui ai-je répondu.\n\n– Croyez-vous en la sainte église catholique, apostolique et romaine ?\n\n– Volontiers, lui ai-je dit.\n\n– Mon fils, a-t-il repris, vous avez l'air de douter.\n\nAlors il s'est mis à parler. Il a parlé longtemps ; il a dit beaucoup de paroles ; puis, quand il a cru avoir fini, il s'est levé et m'a regardé pour la première fois depuis le commencement de son discours, en m'interrogeant :\n\n– Eh bien ?\n\nJe proteste que je l'avais écouté avec avidité d'abord, puis avec attention, puis avec dévouement. Je me suis levé aussi.\n\n– Monsieur, lui ai-je répondu, laissez-moi seul, je vous prie.\n\nIl m'a demandé :\n\n– Quand reviendrai-je ?\n\n– Je vous le ferai savoir.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Auteur", "reponse": "Victor Hugo"}, {"libelle": "Titre", "reponse": "*Le Dernier jour d'un condamné*"}, {"libelle": "Genre littéraire", "reponse": "Roman à thèse"}, {"libelle": "Siècle", "reponse": "19ème"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "A partir des lieux cités ci-dessous, mettez en ordre le parcours du narrateur de ce texte : **La conciergerie (*palais de justice*) ; La place de Grève ; Bicêtre ; L'hôtel de ville.**", "correction": "L'ordre du parcours du narrateur dans l'œuvre : a- Bicêtre ; b- la conciergerie (*palais de justice*) ; c- l'hôtel de ville ; d- la place de Grève. (¼ pt.x4)"}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Pourquoi le prêtre est-il revenu chez le narrateur ?", "correction": "Pour le soutenir, l'assister, le consoler le préparer à la mort ..."}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Dites si les informations suivantes sont **vraies** ou **fausses,** puis justifiez vos réponses par des éléments du texte : a- Le discours du prêtre était utile au narrateur. b- L'arrivée du prêtre a fait du bien au narrateur.", "correction": "a- **faux** : ses paroles m'ont semblé inutiles, je suis resté indifférent. b- **vrai** : Sa vue m'a fait du bien. (¼ pt.x4)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "A) Recopiez et complétez le tableau suivant à partir du texte. [Tableau : *Personnage* | *Trait physique* | *Trait moral* — ligne « Le prêtre », deux cases à remplir.] B) S'agit-il d'une description **valorisante, dévalorisante** ou **neutre** ? **Recopiez la bonne réponse.**", "correction": "A) Le prêtre — Trait physique : -cheveux blancs ; Trait moral : -l'air très doux-bonne et respectable figure -homme excellent et charitable (½ pt. (¼ pt.x4)) B) description valorisante. (½ pt.)"}, {"type": "choix", "numero": "6", "points": 1, "enonce": "\"*C'est parmi tous ces hommes le seul* ***qui soit encore homme pour moi*** \". Dans la partie en gras de l'énoncé ci-dessus s'agit-il d'une : **Choisissez et recopiez la bonne réponse.**", "options": ["subordonnée complétive", "subordonnée relative", "subordonnée de temps."], "bonne": 1}, {"type": "libre", "numero": "7", "points": 1, "enonce": "A) Quelle figure de style reconnaissez-vous dans l'énoncé suivant ? \"*Je proteste que je l'avais écouté avec avidité d'abord, puis avec attention, puis avec dévouement.*\" **a- Métaphore ; b- antithèse ; c- gradation.** **Recopiez la bonne réponse.** B) Quel est l'effet recherché par l'emploi de cette figure ?", "correction": "A) Gradation. (½ pt.) B) Le grand regret d'avoir écouté les paroles du prêtre ... (intensité du regret) (½ pt.)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Mettez l'énoncé suivant au discours indirect : *Il m'a demandé : quand reviendrai-je ?*", "correction": "Le discours indirect : Il m'a demandé *quand il reviendrait.* Sous barème : le maintien de quand (0,25) ; suppression de la ponctuation (0,25) ; il (0,25) ; reviendrait (0,25)."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Pensez-vous que la présence du prêtre à côté d'un condamné à mort, peu de temps avant son exécution (*sa mort*), est nécessaire ? Justifiez votre point de vue par un argument.", "correction": "Accepter toute formulation adéquate où le candidat exprime son point de vue justifié. (½ x 2)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "A votre avis est-ce que la peine de mort peut être une solution pour combattre la criminalité ? Justifiez votre réponse par un argument.", "correction": "Accepter toute formulation adéquate où le candidat exprime son point de vue justifié. (½ x 2)"}]}, {"titre": "Épreuve n° 2 — II. Production écrite", "points": 10, "texte": "***Sujet*** : La prison fait perdre à certains prisonniers la foi (ou la croyance) en Dieu.\n\nPartagez-vous cette affirmation ?\n\nDans un texte argumentatif cohérent, exprimez votre point de vue en utilisant des arguments pertinents.\n\n***Lors de la rédaction, vous tenez compte des critères suivants :***\n\n| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |\n|---|---|---|---|\n| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |\n| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |\n| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |\n| | | Respect des règles orthographiques et grammaticales. | |\n| | | Conjugaison (emploi des temps verbaux) | |", "questions": [], "redaction": true}, {"titre": "Épreuve n° 3 — I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**ANTIGONE :**\n\nVous pouvez seulement me faire mourir.\n\n**CRÉON**\n\nEt si je te fais torturer ?\n\n**ANTIGONE**\n\nPourquoi ? Pour que je pleure, que je demande grâce, pour que je jure tout ce qu'on voudra, et que je recommence après, quand je n'aurai plus mal ?\n\n**CRÉON** (*lui serre le bras.*)\n\nÉcoute-moi bien. J'ai le mauvais rôle, c'est entendu, et tu as le bon. Et tu le sens. Mais n'en profite tout de même pas trop, petite peste... Si j'étais une bonne brute ordinaire de tyran, il y aurait déjà longtemps qu'on t'aurait arraché la langue, tiré les membres aux tenailles, ou jeté dans un trou. Mais tu vois dans mes yeux quelque chose qui hésite, tu vois que je te laisse parler au lieu d'appeler mes soldats ; alors, tu nargues, tu attaques tant que tu peux. Où veux-tu en venir, petite furie ?\n\n**ANTIGONE**\n\nLâchez-moi. Vous me faites mal au bras avec votre main.\n\n**CRÉON** *(qui serre plus fort).*\n\nNon. Moi, je suis le plus fort comme cela, j'en profite aussi.\n\n**ANTIGONE** *(pousse un petit cri)*\n\nAïe !\n\n**CRÉON**, *(dont les yeux rient.)*\n\nC'est peut-être ce que je devrais faire après tout, tout simplement, te tordre le poignet, te tirer les cheveux comme on fait aux filles dans les jeux.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et Complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "*Antigone*"}, {"libelle": "Nom de l'auteur", "reponse": "Jean Anouilh"}, {"libelle": "Genre de l'œuvre", "reponse": "Tragédie moderne"}, {"libelle": "La date de parution", "reponse": "1944"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Quel est le crime d'Antigone ?", "correction": "Le crime d'Antigone : elle a osé enterrer le cadavre de son frère Polynice, en bravant la loi de Créon qui l'avait interdit… (accepter toute formulation pertinente)"}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Quel est le but de Créon dans ce dialogue ?", "correction": "Le but de Créon dans ce dialogue est de sauver Antigone qui n'avait pas respecté cette interdiction."}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Relevez dans le texte une phrase qui montre l'entêtement d'Antigone qui ne change pas ses idées malgré les conseils de Créon.", "correction": "Une phrase qui montre l'entêtement d'Antigone : « *…que je demande grâce, pour que je jure tout ce qu'on voudra, et que je recommence après, quand je n'aurai plus mal.* »"}, {"type": "choix", "numero": "5", "points": 1, "enonce": "La didascalie *(dont les yeux rient)* cache plutôt : **Recopiez la bonne réponse.**", "options": ["le sadisme de Créon", "la moquerie de Créon", "le caractère plaisant de Créon."], "bonne": 2}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez dans le texte quatre expressions qui montrent la violence humaine.", "correction": "*si je te fais torturer/lui serre le bras/ te tordre le poignet, te tirer les cheveux…* (¼ x4) [Note StudyEra : le corrigé cite d'abord quatre autres expressions qui ne figurent pas dans ce texte ; elles sont omises ici.]"}, {"type": "libre", "numero": "7A", "points": 0.5, "enonce": "Identifiez la figure de style dans l'énoncé suivant : « *J'ai le mauvais rôle, c'est entendu, et tu as le bon.* » a- une métaphore ; b- une hyperbole ; c- une personnification ; d- une antithèse. **Recopiez la bonne réponse.**", "correction": "d- une antithèse."}, {"type": "libre", "numero": "7B", "points": 0.5, "enonce": "Cette figure montre-t-elle l'aveu ou le mensonge de Créon ?", "correction": "elle montre l'aveu de Créon."}, {"type": "tableau", "numero": "8", "points": 1, "enonce": "Recopiez et complétez le tableau suivant : [Énoncé : *Tu vois que je te laisse parler.*]", "champs": [{"libelle": "Proposition subordonnée", "reponse": "[*que je te laisse parler.*]"}, {"libelle": "Nature de la proposition subordonnée", "reponse": "Complétive"}]}, {"type": "libre", "numero": "9", "points": 1, "enonce": "A votre avis, y a-t-il des situations dans la vie où l'on doit être têtu jusqu'au bout ? Justifiez votre réponse par un argument.", "correction": "Accepter toute formulation adéquate où le candidat exprime son point de vue en le justifiant. (½pt. x 2)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Appréciez-vous le comportement violent de Créon dans cette scène ? Justifiez votre opinion.", "correction": "Accepter toute formulation adéquate où le candidat exprime son point de vue en le justifiant. (½pt. x 2)"}]}, {"titre": "Épreuve n° 3 — II. Production écrite", "points": 10, "texte": "***Sujet*** : Quand les parents utilisent la force contre leurs enfants, c'est juste parce qu'ils aiment ces derniers et leur veulent du bien.\n\nPartagez-vous cet avis ?\n\nRédigez un texte où vous exprimez votre point de vue en justifiant par des arguments et des exemples pertinents.\n\n***Lors de la rédaction, vous tenez compte des critères suivants :***\n\n| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |\n|---|---|---|---|\n| Conformité de la production à la consigne d'écriture | 5 pts | Vocabulaire (usage de termes précis et variés) | 5 pts |\n| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |\n| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |\n| | | Respect des règles orthographiques et grammaticales. | |\n| | | Conjugaison (emploi des temps verbaux) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
