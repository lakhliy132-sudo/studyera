-- Sujet de français, examen régional 2020 (session normale), académie
-- Casablanca-Settat.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2020 جهة الدار البيضاء سطات »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Casablanca-Settat, en-tête en français : « Examen régional du
-- baccalauréat – Session normale de 2020 », « Durée : 2 heures ». Coefficient
-- non saisi : 04 pour les séries scientifiques, sciences et technologie, arts
-- appliqués, 03 pour sciences économiques. Trois épreuves au choix (1re : La
-- Boîte à merveilles, 2e : Antigone, 3e : Le Dernier Jour d'un condamné),
-- chacune avec son corrigé (pages 7 à 9 du PDF).
-- Barèmes : le sujet fait foi quand le corrigé détaille autrement — 1re
-- épreuve, questions 4 et 5 « 1pt » (corrigé 0.5ptx2) et 7 « 1pt » (corrigé
-- 0.25ptx4) ; 3e épreuve, question 8 « 1pt » (corrigé 0.5ptx2). Le détail du
-- corrigé est gardé entre parenthèses dans la réponse.
-- 3e épreuve : les mots annotés (tapiquer, galères, coire, soulasse, trimar)
-- sont soulignés sur la feuille, en gras ici. La question 8 propose des
-- options mais demande aussi l'effet : gardée en question libre.
-- 1re épreuve, question 1 : le corrigé intitule la dernière colonne « Siècle
-- des événements ».
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2020,
  $sujet$normale$sujet$,
  $sujet$Casablanca-Settat$sujet$,
  $sujet$Séries scientifiques/ sciences /technologie/ arts appliqués/ sc économiques$sujet$,
  120,
  $sujet$**Traitez, au choix, une seule (1) épreuve parmi les trois (3) proposées.**

# 1ère épreuve de français

## Texte

Les voisines faisaient à haute voix des vœux pour que notre bonheur soit durable et notre santé prospère.

Des you-you éclatèrent sur la terrasse. Des femmes venues des maisons mitoyennes manifestaient ainsi, bruyamment, la part qu'elles prenaient à notre joie. Ma mère ne cessait de remercier les unes et les autres.

Driss El Aouad arriva de son atelier. Sa femme le mit au courant du retour de mon père. Il appela :

– Maâlem Abdeslem ! Nous sommes très heureux de te voir de retour parmi les tiens.

– Monte un instant, Driss.

Driss, le fabricant de charrues, avait le même âge que mon père. Tous les deux frisaient la quarantaine. Ils se connaissaient depuis longtemps et s'estimaient beaucoup. Driss El Aouad monta chez nous.

Les deux hommes, après les salutations d'usage, discutèrent familièrement. Ils parlèrent de la qualité des récoltes, des prix des denrées, des amis communs.

Driss dit à mon père :

– Tu viens d'arriver et peut-être même les gens de ta maison ne le savent-ils pas encore. Le divorce entre Moulay Larbi et la fille du coiffeur a été prononcé hier devant notaire.

– Louange à Dieu ! Moulay Larbi va pouvoir enfin retrouver la tranquillité de l'âme, la paix des hommes bénis. Je savais que la folie de Moulay Larbi serait passagère. N'est-ce pas folie de vouloir conduire plusieurs attelages à la fois ? Il est déjà si difficile de s'entendre avec une seule femme, de vivre en harmonie avec les enfants de sa chair. Moulay Larbi a goûté au fruit amer de l'expérience, le voici de nouveau parmi les hommes normaux, il convient d'en louer le Seigneur.

Ma mère m'appela à voix basse :

– Sidi Mohammed ! Viens chercher le plateau.

J'allai la retrouver à la cuisine. Le plateau pesait lourd à mes bras d'enfant. Je m'acquittai de cette fonction avec un certain orgueil. Mon père versa le thé.

La conversation des deux hommes reprit. Elle se transforma peu à peu en ronronnement. La fatigue envahit mes membres. Je me sentis triste et seul. Non ! Je ne voulais pas dormir, je ne voulais pas pleurer. Moi aussi, j'avais des amis. Ils sauraient partager ma joie. Je tirai de dessous le lit ma Boîte à Merveilles. Je l'ouvris religieusement. Toutes les figures de mes rêves m'y attendaient.

Fès, 1952

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(0.25pt x4)**

| Titre | Auteur | Genre littéraire | Siècle |
|---|---|---|---|
| | | | |

**2.** Ce passage se situe : Choisissez la bonne réponse. **(1pt)**

a- au début de l'œuvre.  
b- au milieu de l'œuvre.  
c- à la fin de l'œuvre.

**3.** Recopiez le tableau suivant et dites si les affirmations suivantes sont vraies ou fausses : **(0.25ptx4)**

| | Vrai | Faux |
|---|---|---|
| Driss apprend au père du narrateur la mort du coiffeur. | | |
| Driss apprend au père du narrateur le divorce de la fille du coiffeur. | | |
| Driss apprend au père du narrateur qu'ils ont le même âge. | | |
| Driss apprend au père du narrateur l'augmentation des prix des denrées. | | |

**4.** Dans ce passage, la mère du narrateur n'est présente qu'à travers deux actions, lesquelles ? **(1pt)**

**5.** Relevez, dans le texte, deux arguments du père du narrateur qui appuient la décision de Moulay Larbi ? **(1pt)**

**6.** Pourquoi Sidi Mohammed refusait-il de dormir ? **(1pt)**

**7.** Dégagez du texte **quatre** (4) mots appartenant au champ lexical de **la religion.** [« quatre » souligné sur la feuille, en gras ici] **(1pt)**

**8.** Quelle figure de style reconnaissez-vous dans la phrase suivante ? Et quel en est l'effet recherché ? « *Ils parlèrent de la qualité des récoltes, des prix des denrées, des amis communs.* » **(0.5ptx2)**

**9.** Que pensez-vous de Sidi Mohammed qui se sent seul alors qu'il est entouré de ses parents ? **(1pt)**

**10.** Partagez-vous le jugement que porte le père du narrateur sur le divorce de la fille du coiffeur ? **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

**Maâlem Abdeslam dit :« *Il est déjà si difficile de s'entendre avec une seule femme.* »**

**D'après ce que vous constatez dans la société marocaine, pourquoi est-il difficile, de nos jours, de se marier avec plusieurs femmes à la fois (polygamie) ?**

Rédigez un texte argumentatif où vous développez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.

**Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction.**

| Critère d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |
| Produire un texte argumentatif cohérent. | 4 points. |
| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |

# 2ème épreuve de français

## Texte

*Le chœur disparaît, tandis que les gardes poussent Antigone en scène.*

**LE GARDE**, *qui a repris tout son aplomb.*

Allez, allez, pas d'histoires! Vous vous expliquerez devant le chef. Moi, je ne connais que la consigne. Ce que vous aviez à faire là, je ne veux pas le savoir. Tout le monde a des excuses, tout le monde a quelque chose à objecter. S'il fallait écouter les gens, s'il fallait essayer de comprendre, on serait propres. Allez, allez! Tenez-la, vous autres, et pas d'histoires! Moi, ce qu'elle a à dire, je ne veux pas le savoir!

**ANTIGONE**

Dis-leur de me lâcher, avec leurs sales mains. Ils me font mal.

**LE GARDE**

Leurs sales mains? Vous pourriez être polie, Mademoiselle… Moi, je suis poli.

**ANTIGONE**

Dis-leur de me lâcher. Je suis la fille d'Œdipe, je suis Antigone. Je ne me sauverai pas.

**LE GARDE**

La fille dŒdipe, oui! Les putains qu'on ramasse à la garde de nuit, elles disent aussi de se méfier, qu'elles sont la bonne amie du préfet de police!

*Ils rigolent.*

**ANTIGONE**

Je veux bien mourir, mais pas qu'ils me touchent!

**LE GARDE**

Et les cadavres, dis, et la terre, ça ne te fait pas peur à toucher? Tu dis «leurs sales mains»! Regarde un peu les tiennes.

*Antigone regarde ses mains tenues par les menottes avec un petit sourire. Elles sont pleines de terre.*

**LE GARDE**

On te l'avait prise, ta pelle? Il a fallu que tu refasses ça avec tes ongles, la deuxième fois? Ah! cette audace! Je tourne le dos une seconde, je te demande une chique, et allez, le temps de me la caler dans la joue, le temps de dire merci, elle était là, à gratter comme une petite hyène. Et en plein jour! Et c'est qu'elle se débattait cette garce, quand j'ai voulu la prendre! C'est qu'elle voulait me sauter aux yeux! Elle criait qu'il fallait qu'elle finisse… C'est une folle, oui!

## I. Étude de texte (10 points)

**1.** Complétez l'énoncé suivant par les informations qui manquent : Ce texte est extrait d'une ……… intitulée (titre)……… Elle est écrite par ………, au ……… siècle. **(0.25pt x4)**

**2.** Pour situer le passage par rapport à ce qui précède, répondez à la question suivante : Pourquoi les gardes arrêtent-ils Antigone et la poussent en scène ? **(1pt)**

**3.** Après avoir utilisé la pelle, de quoi se servait Antigone pour creuser la terre ? **(1pt)**

**4.** Quelle phrase dans le texte montre que le garde se moque d'Antigone ? **(1pt)**

**5.** Le garde semble-t-il prêt à écouter Antigone? Justifiez votre réponse. **(1pt)**

**6.** Quel registre de langue (niveau de langue) est utilisé par le garde dans sa dernière tirade ? Choisissez la bonne réponse. **(1pt)**

a- familier.  
b- courant.  
c- soutenu.  
d- argotique

**7.** Relevez, dans le texte, deux indices qui montrent que cet extrait appartient à une tragédie moderne. **(0.5ptx2)**

**8.** De quelle figure de style s'agit-il dans cet énoncé ? Et quel en est l'effet recherché ? «Tout le monde a des excuses, tout le monde a quelque chose à objecter. » **(0.5ptx2)**

**9.** Quel jugement portez-vous sur le comportement du garde envers Antigone ? **(1pt)**

**10.** Pensez-vous qu'on peut avoir de la sympathie pour Antigone ? **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

**Pour une bonne éducation, certains parents pensent qu'il faut pardonner aux enfants leurs fautes et erreurs. D'autres, au contraire, estiment que ces enfants doivent être punis. A qui donneriez-vous raison ?**

Rédigez un texte argumentatif où vous développerez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.

**Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction.**

| Critère d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |
| Produire un texte argumentatif cohérent. | 4 points. |
| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |

# 3ème épreuve de français

## Texte

Mais que les diables soient avec le passeport ! il était jaune, et on avait écrit dessus *forçat libéré*. Il fallait montrer cela partout où je passais et le présenter tous les huit jours au maire du village où l'on me forçait de **tapiquer**⁽¹⁾. La belle recommandation ! un galérien ! Je faisais peur, et les petits enfants se sauvaient, et l'on fermait les portes. Personne ne voulait me donner d'ouvrage. Je mangeai mes soixante-six francs. Et puis, il fallut vivre. Je montrai mes bras bons au travail, on ferma les portes. J'offris ma journée pour quinze sous, pour dix sous, pour cinq sous. Point. Que faire ? Un jour, j'avais faim. Je donnai un coup de coude dans le carreau d'un boulanger ; j'empoignai un pain, et le boulanger m'empoigna ; je ne mangeai pas le pain, et j'eus les **galères**⁽²⁾ à perpétuité, avec trois lettres de feu sur l'épaule. - Je te montrerai, si tu veux. - On appelle cette justice-là *la récidive*. Me voilà donc cheval de retour. On me remit à Toulon ; cette fois avec les bonnets verts. Il fallait m'évader. Pour cela, je n'avais que trois murs à percer, deux chaînes à couper, et j'avais un clou. Je m'évadai. On tira le canon d'alerte ; car, nous autres, nous sommes comme les cardinaux de Rome, habillés de rouge, et on tire le canon quand nous partons. Leur poudre alla aux moineaux. Cette fois, pas de passeport jaune, mais pas d'argent non plus. Je rencontrai des camarades qui avaient aussi fait leur temps ou cassé leur ficelle. Leur **coire**⁽³⁾ me proposa d'être des leurs, on faisait la grande **soulasse**⁽⁴⁾ sur le **trimar**⁽⁵⁾. J'acceptai, et je me mis à tuer pour vivre. C'était tantôt une diligence, tantôt une chaise de poste, tantôt un marchand de bœufs à cheval. On prenait l'argent, on laissait aller au hasard la bête ou la voiture, et l'on enterrait l'homme sous un arbre, en ayant soin que les pieds ne sortissent pas ; et puis on dansait sur la fosse, pour que la terre ne parût pas fraîchement remuée. J'ai vieilli comme cela, gîtant dans les broussailles, dormant aux belles étoiles, traqué de bois en bois, mais du moins libre et à moi.

⁽¹⁾Tapiquer : habiter, demeurer.  
⁽²⁾Galère : prison, travaux forcés.  
⁽³⁾Coire : chef de bande.  
⁽⁴⁾Soulasse : escroquerie, tromperie.  
⁽⁵⁾Trimar : route.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(0.25pt x4)**

| Titre | Auteur | Genre littéraire | Siècle |
|---|---|---|---|
| | | | |

**2.** Pour situer le passage, répondez à la question suivante : combien de temps reste-t-il au narrateur avant son exécution ? **(1pt)**

**3.** Dites si les propositions suivantes sont vraies ou fausses. **(0.25pt x4)**

| | Vrai | Faux |
|---|---|---|
| Le galérien (forçat) faisait peur. | | |
| Le galérien (forçat) était libre d'habiter où il voulait. | | |
| Le galérien (forçat) n'était pas fier de son passeport. | | |
| Le galérien (forçat) n'a jamais tué personne. | | |

**4.** Relevez, dans le texte, une phrase qui montre que le galérien était rejeté par la société. **(1pt)**

**5.** Comment appelle-t-on, dans le langage des prisonniers, un galérien qui retourne en prison ? **(1pt)**

**6.** Pour quel crime le galérien est-il condamné à perpétuité ? **(1pt)**

**7.** Dégagez du texte, quatre (4) mots ou expressions appartenant au champ lexical de **la prison**. **(0.25ptx4)**

**8.** De quelle figure de style s'agit-il dans l'énoncé suivant et quel en est l'effet recherché ? **« J'offris ma journée pour quinze sous, pour dix sous, pour cinq sous. »** a- une métaphore, b- une hyperbole, c- une gradation. d- une métonymie. **(1pt)**

**9.** Voler un pain mérite-t-il une condamnation à perpétuité ? Justifiez votre réponse. **(1pt)**

**10.** D'après votre lecture du texte et de l'oeuvre, quels sentiments éprouvez-vous vis-à-vis du galérien ? **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

**La société continue de rejeter et de marginaliser les délinquants et les criminels même après leurs sorties de la prison.**

**Que pensez-vous de cette attitude ?**

Rédigez un texte argumentatif où vous développerez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.

| Critère d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |
| Produire un texte argumentatif, cohérent et bien structuré. | 4 points. |
| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Le professeur jugera de la validité des réponses non prévues.*

## 1ère épreuve de français

### I. Étude de texte

**1.** **(0.25pt x4)**

| Titre | Auteur | Genre littéraire | Siècle |
|---|---|---|---|
| LA BOÎTE A MERVEILLES | Ahmed SEFRIOUI | Roman autobiographique | 20ème (XX) |

**2.** C- à la fin du roman. **(1pt)**

**3.** **(0.25ptx4)**

| | |
|---|---|
| Driss apprend au père du narrateur la mort du coiffeur. | Faux |
| Driss apprend au père du narrateur le divorce de la fille du coiffeur. | Vrai |
| Driss apprend au père du narrateur qu'ils ont le même âge. | Faux |
| Driss apprend au père du narrateur l'augmentation des prix des denrées. | Faux |

**4.** Elle remercia les femmes venues partager leur joie et elle appela sidi Mohammed. (0.5ptx2) **(1pt)**

**5.** Moulay Larbi va retrouver la tranquillité de l'âme et la paix…/Ce mariage avec la fille du coiffeur était une folie passagère./ Il est difficile de s'entendre avec une seule femme/ … (0.5ptx2) **(1pt)**

**6.** Sidi Mohammed refusait de dormir parce qu'il voulait sortir de sa solitude et partager sa joie avec ses amis, en l'occurrence les figures de ses rêves. **(1pt)**

**7.** Le champ lexical de la religion : Louange, Dieu, l'âme, le seigneur, bénis, louer. (0.25ptx4) **(1pt)**

**8.** Figure de style : une énumération// l'effet recherché : insister sur la diversité et la pluralité des sujets discutés par les deux hommes. **(0.5ptx2)**

**9.** Peut-être qu'il ne sait pas parler le langage des adultes/ Il a un penchant pour la solitude/ Il a son propre univers/ Il veut tenir compagnie aux objets de sa Boîte… (Accepter toute réponse argumentée pour les deux dernières questions) **(1pt)**

**10.** Oui, car la polygamie n'apporte que problèmes et maux de tête. // Non, car si la femme souffre d'une maladie ou si elle est stérile, l'homme doit avoir le droit de se remarier… (Accepter toute réponse argumentée pour les deux dernières questions) **(1pt)**

### II. Production écrite

*Important : Chaque copie sera corrigée à la lumière des critères suivants qu'il s'agit de respecter et de reporter IMPÉRATIVEMENT ainsi détaillés sur la copie de l'élève.*

| Critère d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |
| Produire un texte argumentatif cohérent. | 4 points. |
| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |

## 2ème épreuve de français

### I. Étude de texte

**1.** Ce texte est extrait d'une pièce de théâtre (tragédie moderne) intitulée *Antigone*. Elle est écrite par Jean Anouilh au XXème (20) Siècle. **(0.25pt x4)**

**2.** Les gardes… parce qu'ils l'ont surprise en train de creuser la terre pour enterrer son frère Polynice. **(1pt)**

**3.** Antigone creusait avec ses ongles. **(1pt)**

**4.** "La fille dŒdipe, oui! Les putains qu'on ramasse à la garde de nuit, elles disent aussi de se méfier, qu'elles sont la bonne amie du préfet de police!" **(1pt)**

**5.** Pas du tout, car le garde est quelqu'un de borné qui ne fait qu'appliquer les consignes à la lettre. **(1pt)**

**6.** Le niveau : familier. **(1pt)**

**7.** Les anachronismes (les menottes) / le langage familier : (on te l'avait prise, ta pelle ?) **(0.5ptx2)**

**8.** Une anaphore : pour justifier la sourde oreille qu'il fait aux propos d'Antigone. **(0.5ptx2)**

**9.** Un comportement méchant et à la limite de l'agressivité à l'égard d'une femme. Ou le comportement d'un garde borné qui ne fait qu'appliquer la loi et exécuter les ordres. (Les réponses apportées par le candidat aux dernières questions sont laissées à l'appréciation du correcteur.) **(1pt)**

**10.** Oui, si on met en exergue son devoir fraternel, sa jeunesse et son droit à l'erreur… // ou// non, car elle doit être la première à respecter les lois de Créon et non les transgresser. (Les réponses apportées par le candidat aux dernières questions sont laissées à l'appréciation du correcteur.) **(1pt)**

### II. Production écrite

*Important : Chaque copie sera corrigée à la lumière des critères suivants qu'il importe de respecter et de reporter ainsi détaillés sur la copie de l'élève.*

| Critère d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |
| Produire un texte argumentatif cohérent. | 4 points. |
| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |

## 3ème épreuve de français

### I. Étude de texte

**1.** **(0.25pt x4)**

| Titre | Auteur | Genre littéraire | Siècle |
|---|---|---|---|
| Le dernier jour d'un condamné. | Victor HUGO | Roman (à thèse). | 19ème. (XIXème) |

**2.** Quelques heures/ (six heures plus précisément) / le jour même. **(1pt)**

**3.** **(0.25pt x4)**

| | |
|---|---|
| Le galérien (forçat) faisait peur. | Vrai |
| Le galérien (forçat) était libre d'habiter où il voulait. | Faux |
| Le galérien (forçat) n'était pas fier de son passeport. | Vrai |
| Le galérien (forçat) n'a jamais tué personne. | Faux |

**4.** "les petits enfants se sauvaient", "l'on fermait les portes." "Personne ne voulait me donner d'ouvrage." **(1pt)**

**5.** Un cheval de retour. **(1pt)**

**6.** Pour avoir volé un pain. **(1pt)**

**7.** Le champ lexical de la prison : galérien, galères, forçat, perpétuité, s'évader, canon d'alerte… **(0.25ptx4)**

**8.** c- une gradation (ou gradation décroissante) qui insiste sur la volonté du forçat d'offrir ses services à n'importe quel prix, pourvu qu'il travaille. (0.5ptx2) **(1pt)**

**9.** Oui, si les lois de la société l'exigent. /Non, c'est dur comme jugement car si la société était bien faite, le galérien n'aurait pas cherché à voler du pain pour survivre. (Les réponses apportées par le candidat aux dernières questions sont laissées à l'appréciation du correcteur) **(1pt)**

**10.** Un sentiment de compassion pour quelqu'un qui n'a volé que pour survivre ou un sentiment de condamnation pour quelqu'un qui a récidivé pour tuer les autres hommes. (Les réponses apportées par le candidat aux dernières questions sont laissées à l'appréciation du correcteur) **(1pt)**

### II. Production écrite

*Important : chaque copie sera corrigée à la lumière des critères suivants qu'il importe de respecter et de reporter ainsi détaillés sur la copie à corriger.*

| Critère d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |
| Produire un texte argumentatif, cohérent et bien structuré. | 4 points. |
| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |$sujet$,
  $sujet${"parties": [{"titre": "1ère épreuve de français — I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Les voisines faisaient à haute voix des vœux pour que notre bonheur soit durable et notre santé prospère.\n\nDes you-you éclatèrent sur la terrasse. Des femmes venues des maisons mitoyennes manifestaient ainsi, bruyamment, la part qu'elles prenaient à notre joie. Ma mère ne cessait de remercier les unes et les autres.\n\nDriss El Aouad arriva de son atelier. Sa femme le mit au courant du retour de mon père. Il appela :\n\n– Maâlem Abdeslem ! Nous sommes très heureux de te voir de retour parmi les tiens.\n\n– Monte un instant, Driss.\n\nDriss, le fabricant de charrues, avait le même âge que mon père. Tous les deux frisaient la quarantaine. Ils se connaissaient depuis longtemps et s'estimaient beaucoup. Driss El Aouad monta chez nous.\n\nLes deux hommes, après les salutations d'usage, discutèrent familièrement. Ils parlèrent de la qualité des récoltes, des prix des denrées, des amis communs.\n\nDriss dit à mon père :\n\n– Tu viens d'arriver et peut-être même les gens de ta maison ne le savent-ils pas encore. Le divorce entre Moulay Larbi et la fille du coiffeur a été prononcé hier devant notaire.\n\n– Louange à Dieu ! Moulay Larbi va pouvoir enfin retrouver la tranquillité de l'âme, la paix des hommes bénis. Je savais que la folie de Moulay Larbi serait passagère. N'est-ce pas folie de vouloir conduire plusieurs attelages à la fois ? Il est déjà si difficile de s'entendre avec une seule femme, de vivre en harmonie avec les enfants de sa chair. Moulay Larbi a goûté au fruit amer de l'expérience, le voici de nouveau parmi les hommes normaux, il convient d'en louer le Seigneur.\n\nMa mère m'appela à voix basse :\n\n– Sidi Mohammed ! Viens chercher le plateau.\n\nJ'allai la retrouver à la cuisine. Le plateau pesait lourd à mes bras d'enfant. Je m'acquittai de cette fonction avec un certain orgueil. Mon père versa le thé.\n\nLa conversation des deux hommes reprit. Elle se transforma peu à peu en ronronnement. La fatigue envahit mes membres. Je me sentis triste et seul. Non ! Je ne voulais pas dormir, je ne voulais pas pleurer. Moi aussi, j'avais des amis. Ils sauraient partager ma joie. Je tirai de dessous le lit ma Boîte à Merveilles. Je l'ouvris religieusement. Toutes les figures de mes rêves m'y attendaient.\n\nFès, 1952", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre", "reponse": "LA BOÎTE A MERVEILLES"}, {"libelle": "Auteur", "reponse": "Ahmed SEFRIOUI"}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Siècle", "reponse": "20ème (XX)"}]}, {"type": "choix", "numero": "2", "points": 1, "enonce": "Ce passage se situe : Choisissez la bonne réponse.", "options": ["au début de l'œuvre.", "au milieu de l'œuvre.", "à la fin de l'œuvre."], "bonne": 2}, {"type": "vrai-faux", "numero": "3", "points": 1, "enonce": "Recopiez le tableau suivant et dites si les affirmations suivantes sont vraies ou fausses :", "affirmations": [{"texte": "Driss apprend au père du narrateur la mort du coiffeur.", "vrai": false}, {"texte": "Driss apprend au père du narrateur le divorce de la fille du coiffeur.", "vrai": true}, {"texte": "Driss apprend au père du narrateur qu'ils ont le même âge.", "vrai": false}, {"texte": "Driss apprend au père du narrateur l'augmentation des prix des denrées.", "vrai": false}]}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Dans ce passage, la mère du narrateur n'est présente qu'à travers deux actions, lesquelles ?", "correction": "Elle remercia les femmes venues partager leur joie et elle appela sidi Mohammed. (0.5ptx2)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Relevez, dans le texte, deux arguments du père du narrateur qui appuient la décision de Moulay Larbi ?", "correction": "Moulay Larbi va retrouver la tranquillité de l'âme et la paix…/Ce mariage avec la fille du coiffeur était une folie passagère./ Il est difficile de s'entendre avec une seule femme/ … (0.5ptx2)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Pourquoi Sidi Mohammed refusait-il de dormir ?", "correction": "Sidi Mohammed refusait de dormir parce qu'il voulait sortir de sa solitude et partager sa joie avec ses amis, en l'occurrence les figures de ses rêves."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Dégagez du texte **quatre** (4) mots appartenant au champ lexical de **la religion.** [« quatre » souligné sur la feuille, en gras ici]", "correction": "Le champ lexical de la religion : Louange, Dieu, l'âme, le seigneur, bénis, louer. (0.25ptx4)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Quelle figure de style reconnaissez-vous dans la phrase suivante ? Et quel en est l'effet recherché ? « *Ils parlèrent de la qualité des récoltes, des prix des denrées, des amis communs.* »", "correction": "Figure de style : une énumération// l'effet recherché : insister sur la diversité et la pluralité des sujets discutés par les deux hommes."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Que pensez-vous de Sidi Mohammed qui se sent seul alors qu'il est entouré de ses parents ?", "correction": "Peut-être qu'il ne sait pas parler le langage des adultes/ Il a un penchant pour la solitude/ Il a son propre univers/ Il veut tenir compagnie aux objets de sa Boîte… (Accepter toute réponse argumentée pour les deux dernières questions)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Partagez-vous le jugement que porte le père du narrateur sur le divorce de la fille du coiffeur ?", "correction": "Oui, car la polygamie n'apporte que problèmes et maux de tête. // Non, car si la femme souffre d'une maladie ou si elle est stérile, l'homme doit avoir le droit de se remarier… (Accepter toute réponse argumentée pour les deux dernières questions)"}]}, {"titre": "1ère épreuve de français — II. Production écrite", "points": 10, "texte": "**Sujet :**\n\n**Maâlem Abdeslam dit :« *Il est déjà si difficile de s'entendre avec une seule femme.* »**\n\n**D'après ce que vous constatez dans la société marocaine, pourquoi est-il difficile, de nos jours, de se marier avec plusieurs femmes à la fois (polygamie) ?**\n\nRédigez un texte argumentatif où vous développez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.\n\n**Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction.**\n\n| Critère d'évaluation | Note à accorder |\n|---|---|\n| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |\n| Produire un texte argumentatif cohérent. | 4 points. |\n| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |", "questions": [], "redaction": true}, {"titre": "2ème épreuve de français — I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "*Le chœur disparaît, tandis que les gardes poussent Antigone en scène.*\n\n**LE GARDE**, *qui a repris tout son aplomb.*\n\nAllez, allez, pas d'histoires! Vous vous expliquerez devant le chef. Moi, je ne connais que la consigne. Ce que vous aviez à faire là, je ne veux pas le savoir. Tout le monde a des excuses, tout le monde a quelque chose à objecter. S'il fallait écouter les gens, s'il fallait essayer de comprendre, on serait propres. Allez, allez! Tenez-la, vous autres, et pas d'histoires! Moi, ce qu'elle a à dire, je ne veux pas le savoir!\n\n**ANTIGONE**\n\nDis-leur de me lâcher, avec leurs sales mains. Ils me font mal.\n\n**LE GARDE**\n\nLeurs sales mains? Vous pourriez être polie, Mademoiselle… Moi, je suis poli.\n\n**ANTIGONE**\n\nDis-leur de me lâcher. Je suis la fille d'Œdipe, je suis Antigone. Je ne me sauverai pas.\n\n**LE GARDE**\n\nLa fille dŒdipe, oui! Les putains qu'on ramasse à la garde de nuit, elles disent aussi de se méfier, qu'elles sont la bonne amie du préfet de police!\n\n*Ils rigolent.*\n\n**ANTIGONE**\n\nJe veux bien mourir, mais pas qu'ils me touchent!\n\n**LE GARDE**\n\nEt les cadavres, dis, et la terre, ça ne te fait pas peur à toucher? Tu dis «leurs sales mains»! Regarde un peu les tiennes.\n\n*Antigone regarde ses mains tenues par les menottes avec un petit sourire. Elles sont pleines de terre.*\n\n**LE GARDE**\n\nOn te l'avait prise, ta pelle? Il a fallu que tu refasses ça avec tes ongles, la deuxième fois? Ah! cette audace! Je tourne le dos une seconde, je te demande une chique, et allez, le temps de me la caler dans la joue, le temps de dire merci, elle était là, à gratter comme une petite hyène. Et en plein jour! Et c'est qu'elle se débattait cette garce, quand j'ai voulu la prendre! C'est qu'elle voulait me sauter aux yeux! Elle criait qu'il fallait qu'elle finisse… C'est une folle, oui!", "questions": [{"type": "libre", "numero": "1", "points": 1, "enonce": "Complétez l'énoncé suivant par les informations qui manquent : Ce texte est extrait d'une ……… intitulée (titre)……… Elle est écrite par ………, au ……… siècle.", "correction": "Ce texte est extrait d'une pièce de théâtre (tragédie moderne) intitulée *Antigone*. Elle est écrite par Jean Anouilh au XXème (20) Siècle."}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Pour situer le passage par rapport à ce qui précède, répondez à la question suivante : Pourquoi les gardes arrêtent-ils Antigone et la poussent en scène ?", "correction": "Les gardes… parce qu'ils l'ont surprise en train de creuser la terre pour enterrer son frère Polynice."}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Après avoir utilisé la pelle, de quoi se servait Antigone pour creuser la terre ?", "correction": "Antigone creusait avec ses ongles."}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Quelle phrase dans le texte montre que le garde se moque d'Antigone ?", "correction": "\"La fille dŒdipe, oui! Les putains qu'on ramasse à la garde de nuit, elles disent aussi de se méfier, qu'elles sont la bonne amie du préfet de police!\""}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Le garde semble-t-il prêt à écouter Antigone? Justifiez votre réponse.", "correction": "Pas du tout, car le garde est quelqu'un de borné qui ne fait qu'appliquer les consignes à la lettre."}, {"type": "choix", "numero": "6", "points": 1, "enonce": "Quel registre de langue (niveau de langue) est utilisé par le garde dans sa dernière tirade ? Choisissez la bonne réponse.", "options": ["familier.", "courant.", "soutenu.", "argotique"], "bonne": 0}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez, dans le texte, deux indices qui montrent que cet extrait appartient à une tragédie moderne.", "correction": "Les anachronismes (les menottes) / le langage familier : (on te l'avait prise, ta pelle ?)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "De quelle figure de style s'agit-il dans cet énoncé ? Et quel en est l'effet recherché ? «Tout le monde a des excuses, tout le monde a quelque chose à objecter. »", "correction": "Une anaphore : pour justifier la sourde oreille qu'il fait aux propos d'Antigone."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Quel jugement portez-vous sur le comportement du garde envers Antigone ?", "correction": "Un comportement méchant et à la limite de l'agressivité à l'égard d'une femme. Ou le comportement d'un garde borné qui ne fait qu'appliquer la loi et exécuter les ordres. (Les réponses apportées par le candidat aux dernières questions sont laissées à l'appréciation du correcteur.)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Pensez-vous qu'on peut avoir de la sympathie pour Antigone ?", "correction": "Oui, si on met en exergue son devoir fraternel, sa jeunesse et son droit à l'erreur… // ou// non, car elle doit être la première à respecter les lois de Créon et non les transgresser. (Les réponses apportées par le candidat aux dernières questions sont laissées à l'appréciation du correcteur.)"}]}, {"titre": "2ème épreuve de français — II. Production écrite", "points": 10, "texte": "**Sujet :**\n\n**Pour une bonne éducation, certains parents pensent qu'il faut pardonner aux enfants leurs fautes et erreurs. D'autres, au contraire, estiment que ces enfants doivent être punis. A qui donneriez-vous raison ?**\n\nRédigez un texte argumentatif où vous développerez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.\n\n**Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction.**\n\n| Critère d'évaluation | Note à accorder |\n|---|---|\n| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |\n| Produire un texte argumentatif cohérent. | 4 points. |\n| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |", "questions": [], "redaction": true}, {"titre": "3ème épreuve de français — I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Mais que les diables soient avec le passeport ! il était jaune, et on avait écrit dessus *forçat libéré*. Il fallait montrer cela partout où je passais et le présenter tous les huit jours au maire du village où l'on me forçait de **tapiquer**⁽¹⁾. La belle recommandation ! un galérien ! Je faisais peur, et les petits enfants se sauvaient, et l'on fermait les portes. Personne ne voulait me donner d'ouvrage. Je mangeai mes soixante-six francs. Et puis, il fallut vivre. Je montrai mes bras bons au travail, on ferma les portes. J'offris ma journée pour quinze sous, pour dix sous, pour cinq sous. Point. Que faire ? Un jour, j'avais faim. Je donnai un coup de coude dans le carreau d'un boulanger ; j'empoignai un pain, et le boulanger m'empoigna ; je ne mangeai pas le pain, et j'eus les **galères**⁽²⁾ à perpétuité, avec trois lettres de feu sur l'épaule. - Je te montrerai, si tu veux. - On appelle cette justice-là *la récidive*. Me voilà donc cheval de retour. On me remit à Toulon ; cette fois avec les bonnets verts. Il fallait m'évader. Pour cela, je n'avais que trois murs à percer, deux chaînes à couper, et j'avais un clou. Je m'évadai. On tira le canon d'alerte ; car, nous autres, nous sommes comme les cardinaux de Rome, habillés de rouge, et on tire le canon quand nous partons. Leur poudre alla aux moineaux. Cette fois, pas de passeport jaune, mais pas d'argent non plus. Je rencontrai des camarades qui avaient aussi fait leur temps ou cassé leur ficelle. Leur **coire**⁽³⁾ me proposa d'être des leurs, on faisait la grande **soulasse**⁽⁴⁾ sur le **trimar**⁽⁵⁾. J'acceptai, et je me mis à tuer pour vivre. C'était tantôt une diligence, tantôt une chaise de poste, tantôt un marchand de bœufs à cheval. On prenait l'argent, on laissait aller au hasard la bête ou la voiture, et l'on enterrait l'homme sous un arbre, en ayant soin que les pieds ne sortissent pas ; et puis on dansait sur la fosse, pour que la terre ne parût pas fraîchement remuée. J'ai vieilli comme cela, gîtant dans les broussailles, dormant aux belles étoiles, traqué de bois en bois, mais du moins libre et à moi.\n\n⁽¹⁾Tapiquer : habiter, demeurer.  \n⁽²⁾Galère : prison, travaux forcés.  \n⁽³⁾Coire : chef de bande.  \n⁽⁴⁾Soulasse : escroquerie, tromperie.  \n⁽⁵⁾Trimar : route.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre", "reponse": "Le dernier jour d'un condamné."}, {"libelle": "Auteur", "reponse": "Victor HUGO"}, {"libelle": "Genre littéraire", "reponse": "Roman (à thèse)."}, {"libelle": "Siècle", "reponse": "19ème. (XIXème)"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Pour situer le passage, répondez à la question suivante : combien de temps reste-t-il au narrateur avant son exécution ?", "correction": "Quelques heures/ (six heures plus précisément) / le jour même."}, {"type": "vrai-faux", "numero": "3", "points": 1, "enonce": "Dites si les propositions suivantes sont vraies ou fausses.", "affirmations": [{"texte": "Le galérien (forçat) faisait peur.", "vrai": true}, {"texte": "Le galérien (forçat) était libre d'habiter où il voulait.", "vrai": false}, {"texte": "Le galérien (forçat) n'était pas fier de son passeport.", "vrai": true}, {"texte": "Le galérien (forçat) n'a jamais tué personne.", "vrai": false}]}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Relevez, dans le texte, une phrase qui montre que le galérien était rejeté par la société.", "correction": "\"les petits enfants se sauvaient\", \"l'on fermait les portes.\" \"Personne ne voulait me donner d'ouvrage.\""}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Comment appelle-t-on, dans le langage des prisonniers, un galérien qui retourne en prison ?", "correction": "Un cheval de retour."}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Pour quel crime le galérien est-il condamné à perpétuité ?", "correction": "Pour avoir volé un pain."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Dégagez du texte, quatre (4) mots ou expressions appartenant au champ lexical de **la prison**.", "correction": "Le champ lexical de la prison : galérien, galères, forçat, perpétuité, s'évader, canon d'alerte…"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "De quelle figure de style s'agit-il dans l'énoncé suivant et quel en est l'effet recherché ? **« J'offris ma journée pour quinze sous, pour dix sous, pour cinq sous. »** a- une métaphore, b- une hyperbole, c- une gradation. d- une métonymie.", "correction": "c- une gradation (ou gradation décroissante) qui insiste sur la volonté du forçat d'offrir ses services à n'importe quel prix, pourvu qu'il travaille. (0.5ptx2)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Voler un pain mérite-t-il une condamnation à perpétuité ? Justifiez votre réponse.", "correction": "Oui, si les lois de la société l'exigent. /Non, c'est dur comme jugement car si la société était bien faite, le galérien n'aurait pas cherché à voler du pain pour survivre. (Les réponses apportées par le candidat aux dernières questions sont laissées à l'appréciation du correcteur)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "D'après votre lecture du texte et de l'oeuvre, quels sentiments éprouvez-vous vis-à-vis du galérien ?", "correction": "Un sentiment de compassion pour quelqu'un qui n'a volé que pour survivre ou un sentiment de condamnation pour quelqu'un qui a récidivé pour tuer les autres hommes. (Les réponses apportées par le candidat aux dernières questions sont laissées à l'appréciation du correcteur)"}]}, {"titre": "3ème épreuve de français — II. Production écrite", "points": 10, "texte": "**Sujet :**\n\n**La société continue de rejeter et de marginaliser les délinquants et les criminels même après leurs sorties de la prison.**\n\n**Que pensez-vous de cette attitude ?**\n\nRédigez un texte argumentatif où vous développerez votre réflexion en vous appuyant sur des arguments pertinents et des exemples précis.\n\n| Critère d'évaluation | Note à accorder |\n|---|---|\n| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |\n| Produire un texte argumentatif, cohérent et bien structuré. | 4 points. |\n| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
