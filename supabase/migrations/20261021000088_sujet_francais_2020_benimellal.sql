-- Sujet de français, examen régional 2020 (session normale), académie
-- Béni Mellal-Khénifra.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2020 جهة بني ملال خنيفرة »).
-- Le PDF ne contient pas de corrigé : aucune réponse n'est saisie.
--
-- Académie de Béni Mellal-Khénifra, « الدورة العادية 2020 », « جميع الشعب
-- العلمية والتقنية », « مدة الإنجاز : 2 ساعات », coefficient « 4/3 » (laissé
-- vide : deux valeurs selon la série). Trois épreuves au choix, une par
-- œuvre : 1 La Boîte à merveilles, 2 Le Dernier Jour d'un condamné,
-- 3 Antigone ; le PDF les donne dans l'ordre 3, 1, 2 (5 pages chacune, la
-- dernière étant une feuille de réponse lignée), remises ici dans l'ordre
-- de leurs numéros. Un code manuscrit (« LIB… 55 ») figure sur chaque page.
-- Pas de corrigé dans le PDF.
-- Les questions dont les parties a et b partagent un seul barème sont
-- gardées en une seule question (aucune répartition des points inventée).
-- La police grasse du scan donne des « e » qui ressemblent à des « o »
-- (« couchor », « pour » pour « peur ») : lus comme « e ».
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, filiere_libelle, duree_minutes, enonce_mdx, questions)
values (
  $sujet$francais$sujet$,
  2020,
  $sujet$normale$sujet$,
  $sujet$Béni Mellal-Khénifra$sujet$,
  $sujet$Toutes les filières scientifiques et techniques$sujet$,
  120,
  $sujet$**Attention : vous choisissez une seule épreuve parmi les trois proposées**

# Épreuve 1

## Texte

Elle m'enleva la djellaba, m'essaya le gilet, me le boutonna jusqu'au cou, s'éloigna pour se rendre compte de l'effet, me fit signe de tourner à droite, puis de tourner à gauche, mit un temps infini à le déboutonner, en fit une boule qu'elle fourra brusquement entre les mains du marchand.

Le boutiquier s'informa :

– Cet article te plait-il ?

– C'est le prix qui en décidera, répondit ma mère.

– Alors, je prépare le paquet ; aux clients sérieux, je consens toujours un rabais. Ce gilet vendu couramment cinq réaux, je te le laisse pour quatre réaux seulement.

– Coupons court à toute discussion, je t'en offre deux réaux.

– Tu ne m'en offres pas le prix de revient, j'en fais le serment ! Je ne le céderai pas à ce prix, devrais-je mendier ce soir pour nourrir mes enfants.

(…)

– Écoute, dit ma mère, je suis mère de famille, je m'occupe de ma maison, je n'ai guère le temps de marchander. Voudrais-tu me laisser ce gilet à deux réaux un quart ? Je fais sacrifice pour mon fils qui aimerait porter ce vêtement le jour de l'Achoura.

– Ce garçon me plait, je ferai un effort en son faveur, donne-moi trois réaux et demi.

Le marchand tendit la main. Il s'attendait à recevoir l'argent. Ma mère lui tourna le dos, me prit par le poignet et m'entraina quelques pas.

– Viens Lalla ! Reviens donc ! Le gilet plaît à cet enfant. je te l'abandonnerai plutôt que de le priver du plaisir de le porter. certes, les gilets ne manquent pas dans les boutiques de la *Kissaria*, mais pourras-tu vraiment en trouver de cette qualité ? Admire avec quel soin ont été faites toutes les coutures. alla l'exécution des boutons …Prends ce gilet ; paie-moi le prix que tu estimes raisonnable. (…)

Elle fouilla dans ces poches, sortit un chiffon noué plusieurs fois, s'acharna un bon moment à le dénouer. Elle tira deux réaux et demi qu'elle allongea au marchand sans rien dire. Elle ne prit pas le temps d'écouter le boutiquier réclamer un supplément. Elle se saisit du paquet et m'entraina.

## I. Étude de texte (10 points)

**1.** Contextualiser (2 points) — Remplissez ce tableau en vous référant à l'œuvre dont est extrait ce texte : **(1 pt)**

| Titre de l'œuvre | Auteur de l'œuvre | Nationalité | siècle |
|---|---|---|---|
| | | | |

**2.** Lequel des événements suivants situe bien le texte ? (Cochez ☒ la bonne réponse) **(1 pt)**

a- L'enfant et sa mère rendent visite à Lalla aicha ;  
b- L'enfant accompagne sa mère au souk des bijoutiers ;  
c- L'enfant et sa mère se trouvent à la kissaria à l'occasion de Achoura,

**3.** Analyser (6 points) — Lisez le premier paragraphe et remettez en ordre les actions suivantes de la mère : a- La mère prend du temps à juger le gilet ; b- La mère essaye le gilet sur l'enfant ; c- La mère remet le gilet au vendeur ; d- La mère débarrasse l'enfant de son habit pour en essayer un autre. **(1 pt)**

**4.** a- Quel premier prix propose le marchand à la mère? b- La mère accepte-t-elle ce prix ? Justifiez. **(1 pt)**

**5.** « Je ne le céderai pas à ce prix, devrais-je mendier ce soir pour nourrir mes enfants. » Cela signifie : (Cochez ☒ la bonne réponse) **(1pt)**

a- Je ne te le vends pas à ce prix.  
b- J'accepte ton prix.  
c- Ce prix me permet de nourrir mes enfants.

**6.** « …je suis mère de famille, je m'occupe de ma maison, je n'ai guère le temps de marchander. » a- Dans cet énoncé, la figure de style est : L'antithèse / La personnification / L'énumération (Cochez ☒ la bonne réponse) b- Cette figure de style met-elle en valeur l'**habileté** ou la **maladresse** de la mère ? **(1pt)**

**7.** Lisez le passage de : « -Viens Lalla » à « …raisonnable. » Le but du marchand est (Cochez ☒ la bonne réponse) **(1pt)**

a- de décrire uniquement son gilet.  
b- de montrer les qualités de sa marchandise.  
c- d'obliger la mère à acheter un autre gilet de la même marque.

**8.** a- La mère finit-elle par acheter le gilet à son enfant ? Oui / non (Cochez ☒ la bonne réponse) b- Justifiez votre réponse à partir du texte. **(1pt)**

**9.** Réagir (2 points) — À votre avis, la mère possède-t-elle le savoir-faire d'acheter à bon prix ? Justifiez votre réponse. **(1pt)**

**10.** C'est la mère qui choisit ce gilet pour son enfant. Selon vous, doit-elle agir ainsi ou lui demander son avis ? justifiez votre réponse. **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

Sur un forum Internet dont le thème est : **«Goûts vestimentaires »**, un jeune a posté le message suivant :

**« Je suis très passionné par les jeans avec des trous au niveau des cuisses et des genoux. »**

Partagez-vous ce choix ?

**Rédigez un texte argumentatif dans lequel vous dites votre point de vue justifié à l'aide d'arguments et d'exemples pertinents.**

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Barème de notation | | |
|---|---|---|
| **Critères d'évaluation du discours :** | | **…/5points** |
| - Conformité de la production à la consigne d'écriture. | 2 pts | |
| - Cohérence de l'argumentation. | 1,5 pts | |
| - Structure du texte (organisation et progression du texte). | 1,5 pts | |
| **Critères d'évaluation de la langue :** | | **…/5points** |
| - Syntaxe (construction de phrases correctes) | 1 pt | |
| - Vocabulaire (usage de termes précis et variés) | 1 pt | |
| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |
| - Conjugaison (emploi des temps) | 1 pt | |
| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |

# Épreuve 2

## Texte

**Texte 1 :Chapitre2**

Cependant, mon avocat arriva. On l'attendait. Il venait de déjeuner copieusement et de bon appétit. Parvenu à sa place, il se pencha vers moi avec un sourire.

– J'espère, me dit-il.

– N'est-ce pas ? répondis-je, léger et souriant aussi.

– Oui, reprit-il ; je ne sais rien encore de leur déclaration, mais ils auront sans doute écarté la préméditation, et alors ce ne sera que les travaux forcés à perpétuité.

– Que dites-vous là, monsieur ? répliquai-je indigné ; plutôt cent fois la mort.

Oui, la mort ! –Et d'ailleurs, me répétait je ne sais quelle voix intérieure, qu'est-ce que je risque çà dire cela ? A-t-on jamais prononcé sentence de mort autrement qu'à minuit, aux flambeaux, dans une salle sombre et noire, et par une froide nuit de pluie et d'hiver ? Mais au mois d'aout, à huit heures du matin, un si beau jour, ces bons jurés, c'est impossible !

**Texte 2 : Chapitre 49**

– Ma grâce ! ma grâce ! ai-je répété, ou par pitié, cinq minutes encore !

Qui sait ? elle viendra peut-être ! Cela est si horrible, à mon âge, de mourir ainsi ! Des grâces qui arrivent au dernier moment, on l'a vu souvent. Et à qui fera-t-on grâce, monsieur, si n'est à moi ?

Cet exécrable bourreau ! il s'est approché du juge pour lui dire que l'exécution devait être faite à une certaine heure, que cette heure approchait, qu'il était responsable, que d'ailleurs il pleut, et que cela risque de se rouiller.

– Eh, par pitié ! une minute pour attendre ma grâce ! ou je me défends ! je mords !

## I. Étude de texte (10 points)

**1.** Contextualiser (2 points) — Complétez le tableau suivant : **(1 pt)**

| Titre de l'œuvre | Genre littéraire | Auteur | siècle |
|---|---|---|---|
| | | | |

**2.** Remettez en ordre les événements suivants selon leur déroulement logique dans l'œuvre : a- Le narrateur est conduit à l'hôtel de ville afin de le préparer au moment de l'exécution. b- Le narrateur est transféré à Bicêtre. c- Le narrateur est condamné à mort par un tribunal de Paris d- Le narrateur est placé dans la conciergerie après le rejet de son pourvoi en cassation. **(1pt)**

**3.** Analyser (6 points) — Questions sur le texte 1 — Lisez de : « Cependant… » à « …et souriant aussi. » l'avocat parait : (Cochez ☒ la bonne réponse) **(1pt)**

a- confiant  
b- inquiet  
c- nerveux.

**4.** « *L'avocat annonce au narrateur que celui-ci serait condamné à la prison à vie.* » a- Cette affirmation est-elle vraie ou fausse ? b- Justifiez en recopiant une phrase du texte. **(1 pt)**

**5.** Observez le passage suivant : « ..plutôt cent fois la mort » a- La figure de style dont il s'agit ici est-elle une **hyperbole** ou une **métaphore**. ? b- Le narrateur accepte-t-il le jugement suggéré par l'avocat ? **(1pt)**

**6.** Questions sur le texte 2 — Lisez le passage suivant : « **elle** viendra peut-être » [« elle » souligné sur la feuille, en gras ici] a- À quoi renvoie le pronom souligné ? b- Dans ce passage le narrateur parle d'une action : certaine / possible / impossible (Cochez ☒ la bonne réponse) **(1pt)**

**7.** Le narrateur a l'espoir d'être sauvé de la condamnation à mort. Relevez une phrase dans le texte qui montre cette idée. **(1pt)**

**8.** Lisez de « -Eh , par pitié.. » à la fin du texte . a- Quel est le type de phrase employé dans cet énoncé ? b- Ce type de phrase traduit chez le narrateur un sentiment de **sécurité** ou de **peur** ? **(1pt)**

**9.** Réagir (2 points) — Le condamné demande sa grâce. Son attitude attire-t-elle votre pitié ? Justifiez votre réponse **(1pt)**

**10.** Pensez-vous qu'on peut accorder la grâce au condamné à mort ? justifiez. **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

Un avocat célèbre a déclaré à la presse :

**« Au lieu de la mise à mort d'un criminel, il vaut mieux le condamner à la prison à vie. »**

Qu'en pensez-vous ? Rédigez un écrit argumentatif dans lequel vous exprimez votre opinion appuyée par des arguments et des exemples appropriés.

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Barème de notation | | |
|---|---|---|
| **Critères d'évaluation du discours :** | | **…/5points** |
| - Conformité de la production à la consigne d'écriture. | 2 pts | |
| - Cohérence de l'argumentation. | 1,5 pts | |
| - Structure du texte (organisation et progression du texte). | 1,5 pts | |
| **Critères d'évaluation de la langue :** | | **…/5points** |
| - Syntaxe (construction de phrases correctes) | 1 pt | |
| - Vocabulaire (usage de termes précis et variés) | 1 pt | |
| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |
| - Conjugaison (emploi des temps) | 1 pt | |
| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |

# Épreuve 3

## Texte

**CRÉON**, *entre avec son page.*

Je les ai fait coucher l'un près de l'autre, enfin ! Ils sont lavés, maintenant, reposés. Ils sont seulement un peu pâles, mais si calmes. Deux amants au lendemain de la première nuit. Ils ont fini eux.

**LE CHŒUR**

Pas toi Créon. Il te reste encore quelque chose à apprendre. Eurydice, la reine, ta femme…

**CRÉON**

Une bonne femme parlant toujours de son jardin, de ses tricots, de ses éternels tricots pour les pauvres. C'est drôle comme les pauvres ont éternellement besoin de tricots. On dirait qu'ils n'ont besoin que de tricots…

**LE CHŒUR**

Les pauvres de Thèbes auront froid cet hiver, Créon. En apprenant la mort de son fils, la reine a posé ses aiguilles, sagement, après avoir terminé son rang, posément, comme tout ce qu'elle fait, un peu plus tranquillement peut-être que d'habitude. Et puis, elle est passée dans sa chambre, sa chambre à l'odeur de lavande, aux petits napperons brodés et aux cadres de peluche, pour s'y couper la gorge, Créon. Elle est étendue maintenant sur un des petits lits jumeaux démodés, à la même place où tu l'as vue jeune fille un soir, et avec le même sourire, à peine un peu plus triste. Et s'il n'y avait pas cette large tache rouge sur les linges autour de son cou, on pourrait croire qu'elle dort.

**CRÉON**

Elle aussi. Ils dorment tous. C'est bien. La journée a été rude. *(Un temps. Il dit sourdement.)* Cela doit être bon de dormir.

## I. Étude de texte (10 points)

**1.** Contextualiser (2 points) — Complétez le texte avec les mots de la *liste* : Liste : **(Bordeaux , Jean Anouilh , 1910, dramaturge)** « ……… est un ……… français né en ………à ……… » **(1 pt)**

**2.** Cette scène est tirée de/du : **(Recopiez la bonne réponse)** **(1 pt)**

a- début de la pièce.  
b- milieu de la pièce.  
c- la fin de la pièce.

**3.** Analyser (6 points) — Lisez la première réplique de Créon : de **« Je les ai fait coucher.. »** à **« Ils ont fini, eux »** a- Dans cette réplique, Créon parle d' : Antigone et Ismène / Antigone et Eurydice / Antigone et Hémon. (Cochez ☒ la bonne réponse) b- Justifiez votre réponse. **(1 pt)**

**4.** Le chœur annonce à Créon un événement : a. terrible. b. ordinaire c. tragique d. Heureux **(Recopiez deux bonnes réponses)** [« deux » souligné sur la feuille] **(1 pt)**

**5.** Dites si ces deux propositions sont vraies ou fausses en mettant une croix (X) : **(1 pt)**

| | Vrai | Faux |
|---|---|---|
| a- La reine de Thèbes fait des tricots pour les enfants de riches. | | |
| b- Eurydice est trouvée morte dans sa chambre. | | |

**6.** **« Une bonne femme parlant toujours de son jardin, de ses tricots, de ses éternels tricots pour les pauvres. »** La figure de style ici est : (Cochez ☒ la bonne réponse) **(1 pt)**

a- la personnification  
b- la métaphore  
c- l'énumération

**7.** a- La reine est décédée : d'une mort naturelle. / en se donnant la mort. / par accident. (Cochez ☒ la bonne réponse) b- Justifiez votre réponse. **(1 pt)**

**8.** Dans cette scène Créon s'exprime d'une manière : (Cochez ☒ la bonne réponse) **(1 pt)**

a- violente  
b- tranquille  
c- agitée.

**9.** Réagir (2 points) — La réaction de Créon face à la mort de ses proches vous parait-elle raisonnable ? Justifiez **(1 pt)**

**10.** Créon sous-estime (déprécie) le soutien qu'offre Eurydice aux pauvres. Qu'en pensez-vous ? **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

Sur un forum Internet, un membre d'une association a publié le message suivant :

*« Actuellement, venir en aide aux personnes se trouvant dans des situations délicates (difficiles) est devenu une qualité très rare. »*

**Rédigez un texte argumentatif dans lequel vous donnez votre point de vue justifié par des arguments et des exemples précis.**

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Barème de notation | | |
|---|---|---|
| **Critères d'évaluation du discours :** | | **…/5points** |
| - Conformité de la production à la consigne d'écriture. | 2 pts | |
| - Cohérence de l'argumentation. | 1,5 pts | |
| - Structure du texte (organisation et progression du texte). | 1,5 pts | |
| **Critères d'évaluation de la langue :** | | **…/5points** |
| - Syntaxe (construction de phrases correctes) | 1 pt | |
| - Vocabulaire (usage de termes précis et variés) | 1 pt | |
| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |
| - Conjugaison (emploi des temps) | 1 pt | |
| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |$sujet$,
  $sujet${"parties": [{"titre": "Épreuve 1 — I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions suivantes:", "texte": "Elle m'enleva la djellaba, m'essaya le gilet, me le boutonna jusqu'au cou, s'éloigna pour se rendre compte de l'effet, me fit signe de tourner à droite, puis de tourner à gauche, mit un temps infini à le déboutonner, en fit une boule qu'elle fourra brusquement entre les mains du marchand.\n\nLe boutiquier s'informa :\n\n– Cet article te plait-il ?\n\n– C'est le prix qui en décidera, répondit ma mère.\n\n– Alors, je prépare le paquet ; aux clients sérieux, je consens toujours un rabais. Ce gilet vendu couramment cinq réaux, je te le laisse pour quatre réaux seulement.\n\n– Coupons court à toute discussion, je t'en offre deux réaux.\n\n– Tu ne m'en offres pas le prix de revient, j'en fais le serment ! Je ne le céderai pas à ce prix, devrais-je mendier ce soir pour nourrir mes enfants.\n\n(…)\n\n– Écoute, dit ma mère, je suis mère de famille, je m'occupe de ma maison, je n'ai guère le temps de marchander. Voudrais-tu me laisser ce gilet à deux réaux un quart ? Je fais sacrifice pour mon fils qui aimerait porter ce vêtement le jour de l'Achoura.\n\n– Ce garçon me plait, je ferai un effort en son faveur, donne-moi trois réaux et demi.\n\nLe marchand tendit la main. Il s'attendait à recevoir l'argent. Ma mère lui tourna le dos, me prit par le poignet et m'entraina quelques pas.\n\n– Viens Lalla ! Reviens donc ! Le gilet plaît à cet enfant. je te l'abandonnerai plutôt que de le priver du plaisir de le porter. certes, les gilets ne manquent pas dans les boutiques de la *Kissaria*, mais pourras-tu vraiment en trouver de cette qualité ? Admire avec quel soin ont été faites toutes les coutures. alla l'exécution des boutons …Prends ce gilet ; paie-moi le prix que tu estimes raisonnable. (…)\n\nElle fouilla dans ces poches, sortit un chiffon noué plusieurs fois, s'acharna un bon moment à le dénouer. Elle tira deux réaux et demi qu'elle allongea au marchand sans rien dire. Elle ne prit pas le temps d'écouter le boutiquier réclamer un supplément. Elle se saisit du paquet et m'entraina.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Contextualiser (2 points) — Remplissez ce tableau en vous référant à l'œuvre dont est extrait ce texte :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": ""}, {"libelle": "Auteur de l'œuvre", "reponse": ""}, {"libelle": "Nationalité", "reponse": ""}, {"libelle": "siècle", "reponse": ""}]}, {"type": "choix", "numero": "2", "points": 1, "enonce": "Lequel des événements suivants situe bien le texte ? (Cochez ☒ la bonne réponse)", "options": ["L'enfant et sa mère rendent visite à Lalla aicha ;", "L'enfant accompagne sa mère au souk des bijoutiers ;", "L'enfant et sa mère se trouvent à la kissaria à l'occasion de Achoura,"], "bonne": null}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Analyser (6 points) — Lisez le premier paragraphe et remettez en ordre les actions suivantes de la mère : a- La mère prend du temps à juger le gilet ; b- La mère essaye le gilet sur l'enfant ; c- La mère remet le gilet au vendeur ; d- La mère débarrasse l'enfant de son habit pour en essayer un autre.", "correction": ""}, {"type": "libre", "numero": "4", "points": 1, "enonce": "a- Quel premier prix propose le marchand à la mère? b- La mère accepte-t-elle ce prix ? Justifiez.", "correction": ""}, {"type": "choix", "numero": "5", "points": 1, "enonce": "« Je ne le céderai pas à ce prix, devrais-je mendier ce soir pour nourrir mes enfants. » Cela signifie : (Cochez ☒ la bonne réponse)", "options": ["Je ne te le vends pas à ce prix.", "J'accepte ton prix.", "Ce prix me permet de nourrir mes enfants."], "bonne": null}, {"type": "libre", "numero": "6", "points": 1, "enonce": "« …je suis mère de famille, je m'occupe de ma maison, je n'ai guère le temps de marchander. » a- Dans cet énoncé, la figure de style est : L'antithèse / La personnification / L'énumération (Cochez ☒ la bonne réponse) b- Cette figure de style met-elle en valeur l'**habileté** ou la **maladresse** de la mère ?", "correction": ""}, {"type": "choix", "numero": "7", "points": 1, "enonce": "Lisez le passage de : « -Viens Lalla » à « …raisonnable. » Le but du marchand est (Cochez ☒ la bonne réponse)", "options": ["de décrire uniquement son gilet.", "de montrer les qualités de sa marchandise.", "d'obliger la mère à acheter un autre gilet de la même marque."], "bonne": null}, {"type": "libre", "numero": "8", "points": 1, "enonce": "a- La mère finit-elle par acheter le gilet à son enfant ? Oui / non (Cochez ☒ la bonne réponse) b- Justifiez votre réponse à partir du texte.", "correction": ""}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Réagir (2 points) — À votre avis, la mère possède-t-elle le savoir-faire d'acheter à bon prix ? Justifiez votre réponse.", "correction": ""}, {"type": "libre", "numero": "10", "points": 1, "enonce": "C'est la mère qui choisit ce gilet pour son enfant. Selon vous, doit-elle agir ainsi ou lui demander son avis ? justifiez votre réponse.", "correction": ""}]}, {"titre": "Épreuve 1 — II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nSur un forum Internet dont le thème est : **«Goûts vestimentaires »**, un jeune a posté le message suivant :\n\n**« Je suis très passionné par les jeans avec des trous au niveau des cuisses et des genoux. »**\n\nPartagez-vous ce choix ?\n\n**Rédigez un texte argumentatif dans lequel vous dites votre point de vue justifié à l'aide d'arguments et d'exemples pertinents.**\n\n**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**\n\n| Barème de notation | | |\n|---|---|---|\n| **Critères d'évaluation du discours :** | | **…/5points** |\n| - Conformité de la production à la consigne d'écriture. | 2 pts | |\n| - Cohérence de l'argumentation. | 1,5 pts | |\n| - Structure du texte (organisation et progression du texte). | 1,5 pts | |\n| **Critères d'évaluation de la langue :** | | **…/5points** |\n| - Syntaxe (construction de phrases correctes) | 1 pt | |\n| - Vocabulaire (usage de termes précis et variés) | 1 pt | |\n| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |\n| - Conjugaison (emploi des temps) | 1 pt | |\n| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |", "questions": [], "redaction": true}, {"titre": "Épreuve 2 — I. Étude de texte", "points": 10, "consigne": "Lisez attentivement les deux textes et répondez aux questions suivantes:", "texte": "**Texte 1 :Chapitre2**\n\nCependant, mon avocat arriva. On l'attendait. Il venait de déjeuner copieusement et de bon appétit. Parvenu à sa place, il se pencha vers moi avec un sourire.\n\n– J'espère, me dit-il.\n\n– N'est-ce pas ? répondis-je, léger et souriant aussi.\n\n– Oui, reprit-il ; je ne sais rien encore de leur déclaration, mais ils auront sans doute écarté la préméditation, et alors ce ne sera que les travaux forcés à perpétuité.\n\n– Que dites-vous là, monsieur ? répliquai-je indigné ; plutôt cent fois la mort.\n\nOui, la mort ! –Et d'ailleurs, me répétait je ne sais quelle voix intérieure, qu'est-ce que je risque çà dire cela ? A-t-on jamais prononcé sentence de mort autrement qu'à minuit, aux flambeaux, dans une salle sombre et noire, et par une froide nuit de pluie et d'hiver ? Mais au mois d'aout, à huit heures du matin, un si beau jour, ces bons jurés, c'est impossible !\n\n**Texte 2 : Chapitre 49**\n\n– Ma grâce ! ma grâce ! ai-je répété, ou par pitié, cinq minutes encore !\n\nQui sait ? elle viendra peut-être ! Cela est si horrible, à mon âge, de mourir ainsi ! Des grâces qui arrivent au dernier moment, on l'a vu souvent. Et à qui fera-t-on grâce, monsieur, si n'est à moi ?\n\nCet exécrable bourreau ! il s'est approché du juge pour lui dire que l'exécution devait être faite à une certaine heure, que cette heure approchait, qu'il était responsable, que d'ailleurs il pleut, et que cela risque de se rouiller.\n\n– Eh, par pitié ! une minute pour attendre ma grâce ! ou je me défends ! je mords !", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Contextualiser (2 points) — Complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": ""}, {"libelle": "Genre littéraire", "reponse": ""}, {"libelle": "Auteur", "reponse": ""}, {"libelle": "siècle", "reponse": ""}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Remettez en ordre les événements suivants selon leur déroulement logique dans l'œuvre : a- Le narrateur est conduit à l'hôtel de ville afin de le préparer au moment de l'exécution. b- Le narrateur est transféré à Bicêtre. c- Le narrateur est condamné à mort par un tribunal de Paris d- Le narrateur est placé dans la conciergerie après le rejet de son pourvoi en cassation.", "correction": ""}, {"type": "choix", "numero": "3", "points": 1, "enonce": "Analyser (6 points) — Questions sur le texte 1 — Lisez de : « Cependant… » à « …et souriant aussi. » l'avocat parait : (Cochez ☒ la bonne réponse)", "options": ["confiant", "inquiet", "nerveux."], "bonne": null}, {"type": "libre", "numero": "4", "points": 1, "enonce": "« *L'avocat annonce au narrateur que celui-ci serait condamné à la prison à vie.* » a- Cette affirmation est-elle vraie ou fausse ? b- Justifiez en recopiant une phrase du texte.", "correction": ""}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Observez le passage suivant : « ..plutôt cent fois la mort » a- La figure de style dont il s'agit ici est-elle une **hyperbole** ou une **métaphore**. ? b- Le narrateur accepte-t-il le jugement suggéré par l'avocat ?", "correction": ""}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Questions sur le texte 2 — Lisez le passage suivant : « **elle** viendra peut-être » [« elle » souligné sur la feuille, en gras ici] a- À quoi renvoie le pronom souligné ? b- Dans ce passage le narrateur parle d'une action : certaine / possible / impossible (Cochez ☒ la bonne réponse)", "correction": ""}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Le narrateur a l'espoir d'être sauvé de la condamnation à mort. Relevez une phrase dans le texte qui montre cette idée.", "correction": ""}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Lisez de « -Eh , par pitié.. » à la fin du texte . a- Quel est le type de phrase employé dans cet énoncé ? b- Ce type de phrase traduit chez le narrateur un sentiment de **sécurité** ou de **peur** ?", "correction": ""}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Réagir (2 points) — Le condamné demande sa grâce. Son attitude attire-t-elle votre pitié ? Justifiez votre réponse", "correction": ""}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Pensez-vous qu'on peut accorder la grâce au condamné à mort ? justifiez.", "correction": ""}]}, {"titre": "Épreuve 2 — II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nUn avocat célèbre a déclaré à la presse :\n\n**« Au lieu de la mise à mort d'un criminel, il vaut mieux le condamner à la prison à vie. »**\n\nQu'en pensez-vous ? Rédigez un écrit argumentatif dans lequel vous exprimez votre opinion appuyée par des arguments et des exemples appropriés.\n\n**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**\n\n| Barème de notation | | |\n|---|---|---|\n| **Critères d'évaluation du discours :** | | **…/5points** |\n| - Conformité de la production à la consigne d'écriture. | 2 pts | |\n| - Cohérence de l'argumentation. | 1,5 pts | |\n| - Structure du texte (organisation et progression du texte). | 1,5 pts | |\n| **Critères d'évaluation de la langue :** | | **…/5points** |\n| - Syntaxe (construction de phrases correctes) | 1 pt | |\n| - Vocabulaire (usage de termes précis et variés) | 1 pt | |\n| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |\n| - Conjugaison (emploi des temps) | 1 pt | |\n| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |", "questions": [], "redaction": true}, {"titre": "Épreuve 3 — I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions suivantes:", "texte": "**CRÉON**, *entre avec son page.*\n\nJe les ai fait coucher l'un près de l'autre, enfin ! Ils sont lavés, maintenant, reposés. Ils sont seulement un peu pâles, mais si calmes. Deux amants au lendemain de la première nuit. Ils ont fini eux.\n\n**LE CHŒUR**\n\nPas toi Créon. Il te reste encore quelque chose à apprendre. Eurydice, la reine, ta femme…\n\n**CRÉON**\n\nUne bonne femme parlant toujours de son jardin, de ses tricots, de ses éternels tricots pour les pauvres. C'est drôle comme les pauvres ont éternellement besoin de tricots. On dirait qu'ils n'ont besoin que de tricots…\n\n**LE CHŒUR**\n\nLes pauvres de Thèbes auront froid cet hiver, Créon. En apprenant la mort de son fils, la reine a posé ses aiguilles, sagement, après avoir terminé son rang, posément, comme tout ce qu'elle fait, un peu plus tranquillement peut-être que d'habitude. Et puis, elle est passée dans sa chambre, sa chambre à l'odeur de lavande, aux petits napperons brodés et aux cadres de peluche, pour s'y couper la gorge, Créon. Elle est étendue maintenant sur un des petits lits jumeaux démodés, à la même place où tu l'as vue jeune fille un soir, et avec le même sourire, à peine un peu plus triste. Et s'il n'y avait pas cette large tache rouge sur les linges autour de son cou, on pourrait croire qu'elle dort.\n\n**CRÉON**\n\nElle aussi. Ils dorment tous. C'est bien. La journée a été rude. *(Un temps. Il dit sourdement.)* Cela doit être bon de dormir.", "questions": [{"type": "libre", "numero": "1", "points": 1, "enonce": "Contextualiser (2 points) — Complétez le texte avec les mots de la *liste* : Liste : **(Bordeaux , Jean Anouilh , 1910, dramaturge)** « ……… est un ……… français né en ………à ……… »", "correction": ""}, {"type": "choix", "numero": "2", "points": 1, "enonce": "Cette scène est tirée de/du : **(Recopiez la bonne réponse)**", "options": ["début de la pièce.", "milieu de la pièce.", "la fin de la pièce."], "bonne": null}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Analyser (6 points) — Lisez la première réplique de Créon : de **« Je les ai fait coucher.. »** à **« Ils ont fini, eux »** a- Dans cette réplique, Créon parle d' : Antigone et Ismène / Antigone et Eurydice / Antigone et Hémon. (Cochez ☒ la bonne réponse) b- Justifiez votre réponse.", "correction": ""}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Le chœur annonce à Créon un événement : a. terrible. b. ordinaire c. tragique d. Heureux **(Recopiez deux bonnes réponses)** [« deux » souligné sur la feuille]", "correction": ""}, {"type": "vrai-faux", "numero": "5", "points": 1, "enonce": "Dites si ces deux propositions sont vraies ou fausses en mettant une croix (X) :", "affirmations": [{"texte": "a- La reine de Thèbes fait des tricots pour les enfants de riches.", "vrai": null}, {"texte": "b- Eurydice est trouvée morte dans sa chambre.", "vrai": null}]}, {"type": "choix", "numero": "6", "points": 1, "enonce": "**« Une bonne femme parlant toujours de son jardin, de ses tricots, de ses éternels tricots pour les pauvres. »** La figure de style ici est : (Cochez ☒ la bonne réponse)", "options": ["la personnification", "la métaphore", "l'énumération"], "bonne": null}, {"type": "libre", "numero": "7", "points": 1, "enonce": "a- La reine est décédée : d'une mort naturelle. / en se donnant la mort. / par accident. (Cochez ☒ la bonne réponse) b- Justifiez votre réponse.", "correction": ""}, {"type": "choix", "numero": "8", "points": 1, "enonce": "Dans cette scène Créon s'exprime d'une manière : (Cochez ☒ la bonne réponse)", "options": ["violente", "tranquille", "agitée."], "bonne": null}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Réagir (2 points) — La réaction de Créon face à la mort de ses proches vous parait-elle raisonnable ? Justifiez", "correction": ""}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Créon sous-estime (déprécie) le soutien qu'offre Eurydice aux pauvres. Qu'en pensez-vous ?", "correction": ""}]}, {"titre": "Épreuve 3 — II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nSur un forum Internet, un membre d'une association a publié le message suivant :\n\n*« Actuellement, venir en aide aux personnes se trouvant dans des situations délicates (difficiles) est devenu une qualité très rare. »*\n\n**Rédigez un texte argumentatif dans lequel vous donnez votre point de vue justifié par des arguments et des exemples précis.**\n\n**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**\n\n| Barème de notation | | |\n|---|---|---|\n| **Critères d'évaluation du discours :** | | **…/5points** |\n| - Conformité de la production à la consigne d'écriture. | 2 pts | |\n| - Cohérence de l'argumentation. | 1,5 pts | |\n| - Structure du texte (organisation et progression du texte). | 1,5 pts | |\n| **Critères d'évaluation de la langue :** | | **…/5points** |\n| - Syntaxe (construction de phrases correctes) | 1 pt | |\n| - Vocabulaire (usage de termes précis et variés) | 1 pt | |\n| Orthographe d'usage et grammaticale (respect des règles) | 1 pt | |\n| - Conjugaison (emploi des temps) | 1 pt | |\n| - Ponctuation (usage d'une ponctuation adéquate) | 1 pt | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  questions = excluded.questions;
