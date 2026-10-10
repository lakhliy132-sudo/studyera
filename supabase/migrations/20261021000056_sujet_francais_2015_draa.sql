-- Sujet de français, examen régional 2015 (session normale), académie
-- Drâa-Tafilalet, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2015 جهة درعة تافيلالت »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie « الأكاديمية الجهوية للتربية والتكوين
-- لجهة مكناس تافيلالت » (Meknès-Tafilalet, avant le découpage régional de
-- 2015) ; « الدورة العادية : يونيو 2015 », « خاص بالمترشحين المدرسين »,
-- durée « ساعتان ». Coefficient vide : 3 pour sciences économiques et
-- gestion, 4 pour les autres séries.
-- Les titres d'œuvres, soulignés et en italique sur la feuille, sont en
-- italique ici.
-- Question 7 : la feuille imprime les trois propositions (a, b, c) ;
-- le corrigé donne « a- Je baisse le prix. ».
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2015,
  $sujet$normale$sujet$,
  $sujet$Drâa-Tafilalet$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences économiques et gestion, sciences et technologies électriques, sciences et technologies mécaniques, arts appliqués$sujet$,
  120,
  $sujet$## Texte

Nous nous arrêtâmes devant une dizaine de magasins. Les marchands s'empressaient de nous montrer des piles de gilets de ma taille. (....)

Elle m'enleva la *djellaba*, m'essaya le gilet, me le boutonna jusqu'au cou, s'éloigna pour se rendre compte de l'effet, me fit signe de tourner à droite, puis de tourner à gauche, mit un temps infini à le déboutonner, en fit une boule qu'elle fourra brutalement entre les mains du marchand. Le boutiquier s'informa :

– Cet article te plaît-il ?

– C'est le prix qui en décidera, répondit ma mère.

– Alors, je prépare le paquet ; aux clients sérieux, je consens toujours un rabais. Ce gilet vendu couramment cinq réaux, je te le laisse pour quatre réaux seulement.

– Coupons court à toute discussion, je t'en offre deux réaux.

– Tu ne m'en offres pas le prix de revient, j'en fais le serment ! Je ne le céderai pas à ce prix, devrais-je mendier ce soir pour nourrir mes enfants.

Le marchand avait fini de plier le gilet soigneusement et cherchait un papier pour faire le paquet.

– Ecoute, dit ma mère, je suis mère de famille, je m'occupe de ma maison, je n'ai guère le temps de marchander. Voudrais-tu me laisser ce gilet à deux réaux un quart ? Je fais ce sacrifice pour mon fils qui aimerait tellement porter ce vêtement le jour de l'*Achoura*.

– Ce garçon me plaît, je ferai un effort en sa faveur, donne-moi trois réaux et demi.

Le marchand tendit la main. Il s'attendait à recevoir l'argent. Ma mère lui tourna le dos, me prit par le poignet et m'entraîna quelques pas.

– Viens! me dit-elle, les gilets ne manquent pas à la *Kissaria*. Nous trouverons bien un boutiquier sérieux qui sache parler raisonnablement.

Le marchand se mit à nous rappeler d'un ton pressant.

– Reviens Lalla ! Reviens donc ! Le gilet plaît à cet enfant. Je te l'abandonnerais plutôt que de le priver du plaisir de le porter. Certes, les gilets ne manquent pas dans les boutiques de la *Kissaria*, mais pourras-tu vraiment en trouver de cette qualité ? Admire avec quel soin ont été faites toutes les coutures. Regarde l'exécution des boutons ... Prends ce gilet ; paie-moi le prix que tu estimes raisonnable. Tu me parais être une *chérifa* pleine de baraka, je te demanderai de ne pas m'oublier dans tes prières afin que le Prophète intercède en ma faveur le jour du jugement.

Ma mère perdait la tête quand, d'aventure, quelqu'un la traitait de *chérifa*. Elle fouilla dans ses poches, sortit un chiffon noué plusieurs fois, s'acharna un bon moment à le dénouer. Elle tira deux réaux et demi qu'elle allongea au marchand sans rien dire. Elle ne prit pas le temps d'écouter le boutiquier réclamer un supplément. Elle se saisit du paquet et m'entraîna.

Extrait de « *La Boîte à Merveilles* » d'Ahmed Sefrioui

## I. Étude de texte (10 points)

**1.** Ahmed Sefrioui est un écrivain marocain. a- Quand et où est-il né ? (0,25pt×2). b- Citez une de ses œuvres autre que « *La Boîte à Merveilles* ». (0,75pt) c- Quand est-il mort ? (0,25pt). Pour répondre, **vous pouvez choisir** [souligné sur la feuille, en gras ici] parmi les informations suivantes : 1905, 1915, 2000, 2004, à Fès, à Rabat, « *La Maison de Servitude* », « *La Civilisation ma mère* ». **(1.5pt)**

**2.** Quel est le genre littéraire de « *La Boîte à Merveilles* » d'Ahmed Sefrioui ? Justifiez votre réponse. **(1pt)**

**3.** Situez le texte en répondant aux questions suivantes : a- Où se trouvent la mère et son fils? b- A quelle occasion la mère souhaite-t-elle acheter un gilet à son fils ? **(1pt)**

**4.** Relevez deux arguments du boutiquier pour convaincre la mère d'acheter le gilet. **(1pt)**

**5.** Quel est l'argument principal qui a pu convaincre la mère d'acheter le gilet ? **(1pt)**

**6.** Relevez dans le texte deux mots ou expressions du champ lexical du « **commerce** ». **(1pt)**

**7.** L'expression « ***…je consens toujours un rabais***. » veut-elle dire : (Recopiez la bonne réponse.) **(0.5pt)**

a- Je baisse le prix ?  
b- Je garde le même prix ?  
c- J'augmente le prix ?

**8.** « ...***mit*** ***un temps infini*** ***à le déboutonner*** » [« un temps infini » souligné sur la feuille, en gras ici] S'agit-il d'une comparaison, d'une hyperbole ou d'une personnification? Justifiez votre réponse. **(1pt)**

**9.** A votre avis, lequel des deux sait-il discuter le prix : la mère ou le boutiquier ? Justifiez votre réponse. **(1pt)**

**10.** La mère a-t-elle raison de discuter le prix avec le boutiquier ? Justifiez votre réponse. **(1pt)**

## II. Production écrite (10 points)

**SUJET :**

Certains parents choisissent tout à la place de leurs filles et de leurs fils (vêtements, amis, études...).

Qu'en pensez-vous ?

A partir de vos lectures et de votre expérience personnelle, rédigez un texte dans lequel vous exprimez votre point de vue en vous appuyant sur des arguments convaincants.

( **NB :** Lors de la correction, il sera tenu compte des éléments suivants : le respect de la consigne (**2pts**), la cohérence textuelle (**3pts**), la présentation (**1pt**) et la correction de la langue (**4pts**).$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponse (à titre indicatif) et barème.*

### I. Étude de texte

**1.** a- Il est né en 1915 (0.25pt) à Fès (0.25pt) b- Une de ses œuvres : « *La Maison de Servitude* » ou autre (0,75pt) c- Il est mort en 2004 (0.25pt) **(1.5pt)**

**2.** Un roman autobiographique ou récit autobiographique ; … (0,5pt) car : - Ahmed Sefrioui raconte ses souvenirs d'enfance à l'âge de six ans - Ou Il y a mélange d'éléments de fiction et de réalité - Ou Il utilise la première personne « je, me, mon, moi…… » qui représente à la fois l'auteur, le narrateur et le personnage principal. (Accepter toute réponse valable). (0,5pt) **(1pt)**

**3.** a- à la kissaria. (0,5pt) b- L'Achoura. (0,5pt) **(1pt)**

**4.** Deux arguments du boutiquier : (0,5ptx2) - « ….aux clients sérieux, je consens toujours un rabais » - « Ce gilet vendu couramment cinq réaux, je te le laisse pour quatre réaux seulement » - « Ce garçon me plaît, je ferai un effort en sa faveur….. » - « Admire avec quel soin ont été faites toutes les coutures. » - « Regarde l'exécution des boutons » - … (Accepter toute réponse valable) **(1pt)**

**5.** L'argument principal : « Tu me parais être une chérifa pleine de baraka » (1pt) **(1pt)**

**6.** Deux mots ou expressions du champ lexical du « commerce » : (0,5ptx2) « les marchands » ; « cet article »; « le prix » ; « clients » ; « marchander »…. (Accepter toute réponse valable) **(1pt)**

**7.** L'expression veut dire : a- Je baisse le prix. (0,5pt) **(0.5pt)**

**8.** Il s'agit d'une hyperbole. (0,5pt) car le narrateur exagère en employant l'expression : « *temps infini* ». (0,5pt) (Accepter toute réponse valable) **(1pt)**

**9.** La mère ou le boutiquier (0,5pt) + la justification (0,5pt) (Accepter toute réponse correctement argumentée) **(1pt)**

**10.** Oui / non (0,5pt) + la justification (0,5pt) (Accepter toute réponse correctement argumentée) **(1pt)**

### II. Production écrite

*Critères de correction* : lors de la correction, il sera tenu compte des éléments suivants :

- Le respect de la consigne (2pts)
- La cohérence textuelle (3pts)
- La présentation du texte (1pt)
- La correction de la langue (4pts)$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Relisez le texte et répondez aux questions suivantes :", "texte": "Nous nous arrêtâmes devant une dizaine de magasins. Les marchands s'empressaient de nous montrer des piles de gilets de ma taille. (....)\n\nElle m'enleva la *djellaba*, m'essaya le gilet, me le boutonna jusqu'au cou, s'éloigna pour se rendre compte de l'effet, me fit signe de tourner à droite, puis de tourner à gauche, mit un temps infini à le déboutonner, en fit une boule qu'elle fourra brutalement entre les mains du marchand. Le boutiquier s'informa :\n\n– Cet article te plaît-il ?\n\n– C'est le prix qui en décidera, répondit ma mère.\n\n– Alors, je prépare le paquet ; aux clients sérieux, je consens toujours un rabais. Ce gilet vendu couramment cinq réaux, je te le laisse pour quatre réaux seulement.\n\n– Coupons court à toute discussion, je t'en offre deux réaux.\n\n– Tu ne m'en offres pas le prix de revient, j'en fais le serment ! Je ne le céderai pas à ce prix, devrais-je mendier ce soir pour nourrir mes enfants.\n\nLe marchand avait fini de plier le gilet soigneusement et cherchait un papier pour faire le paquet.\n\n– Ecoute, dit ma mère, je suis mère de famille, je m'occupe de ma maison, je n'ai guère le temps de marchander. Voudrais-tu me laisser ce gilet à deux réaux un quart ? Je fais ce sacrifice pour mon fils qui aimerait tellement porter ce vêtement le jour de l'*Achoura*.\n\n– Ce garçon me plaît, je ferai un effort en sa faveur, donne-moi trois réaux et demi.\n\nLe marchand tendit la main. Il s'attendait à recevoir l'argent. Ma mère lui tourna le dos, me prit par le poignet et m'entraîna quelques pas.\n\n– Viens! me dit-elle, les gilets ne manquent pas à la *Kissaria*. Nous trouverons bien un boutiquier sérieux qui sache parler raisonnablement.\n\nLe marchand se mit à nous rappeler d'un ton pressant.\n\n– Reviens Lalla ! Reviens donc ! Le gilet plaît à cet enfant. Je te l'abandonnerais plutôt que de le priver du plaisir de le porter. Certes, les gilets ne manquent pas dans les boutiques de la *Kissaria*, mais pourras-tu vraiment en trouver de cette qualité ? Admire avec quel soin ont été faites toutes les coutures. Regarde l'exécution des boutons ... Prends ce gilet ; paie-moi le prix que tu estimes raisonnable. Tu me parais être une *chérifa* pleine de baraka, je te demanderai de ne pas m'oublier dans tes prières afin que le Prophète intercède en ma faveur le jour du jugement.\n\nMa mère perdait la tête quand, d'aventure, quelqu'un la traitait de *chérifa*. Elle fouilla dans ses poches, sortit un chiffon noué plusieurs fois, s'acharna un bon moment à le dénouer. Elle tira deux réaux et demi qu'elle allongea au marchand sans rien dire. Elle ne prit pas le temps d'écouter le boutiquier réclamer un supplément. Elle se saisit du paquet et m'entraîna.\n\nExtrait de « *La Boîte à Merveilles* » d'Ahmed Sefrioui", "questions": [{"type": "libre", "numero": "1", "points": 1.5, "enonce": "Ahmed Sefrioui est un écrivain marocain. a- Quand et où est-il né ? (0,25pt×2). b- Citez une de ses œuvres autre que « *La Boîte à Merveilles* ». (0,75pt) c- Quand est-il mort ? (0,25pt). Pour répondre, **vous pouvez choisir** [souligné sur la feuille, en gras ici] parmi les informations suivantes : 1905, 1915, 2000, 2004, à Fès, à Rabat, « *La Maison de Servitude* », « *La Civilisation ma mère* ».", "correction": "a- Il est né en 1915 (0.25pt) à Fès (0.25pt) b- Une de ses œuvres : « *La Maison de Servitude* » ou autre (0,75pt) c- Il est mort en 2004 (0.25pt)"}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Quel est le genre littéraire de « *La Boîte à Merveilles* » d'Ahmed Sefrioui ? Justifiez votre réponse.", "correction": "Un roman autobiographique ou récit autobiographique ; … (0,5pt) car : - Ahmed Sefrioui raconte ses souvenirs d'enfance à l'âge de six ans - Ou Il y a mélange d'éléments de fiction et de réalité - Ou Il utilise la première personne « je, me, mon, moi…… » qui représente à la fois l'auteur, le narrateur et le personnage principal. (Accepter toute réponse valable). (0,5pt)"}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Situez le texte en répondant aux questions suivantes : a- Où se trouvent la mère et son fils? b- A quelle occasion la mère souhaite-t-elle acheter un gilet à son fils ?", "correction": "a- à la kissaria. (0,5pt) b- L'Achoura. (0,5pt)"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Relevez deux arguments du boutiquier pour convaincre la mère d'acheter le gilet.", "correction": "Deux arguments du boutiquier : (0,5ptx2) - « ….aux clients sérieux, je consens toujours un rabais » - « Ce gilet vendu couramment cinq réaux, je te le laisse pour quatre réaux seulement » - « Ce garçon me plaît, je ferai un effort en sa faveur….. » - « Admire avec quel soin ont été faites toutes les coutures. » - « Regarde l'exécution des boutons » - … (Accepter toute réponse valable)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Quel est l'argument principal qui a pu convaincre la mère d'acheter le gilet ?", "correction": "L'argument principal : « Tu me parais être une chérifa pleine de baraka » (1pt)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez dans le texte deux mots ou expressions du champ lexical du « **commerce** ».", "correction": "Deux mots ou expressions du champ lexical du « commerce » : (0,5ptx2) « les marchands » ; « cet article »; « le prix » ; « clients » ; « marchander »…. (Accepter toute réponse valable)"}, {"type": "choix", "numero": "7", "points": 0.5, "enonce": "L'expression « ***…je consens toujours un rabais***. » veut-elle dire : (Recopiez la bonne réponse.)", "options": ["Je baisse le prix ?", "Je garde le même prix ?", "J'augmente le prix ?"], "bonne": 0}, {"type": "libre", "numero": "8", "points": 1, "enonce": "« ...***mit*** ***un temps infini*** ***à le déboutonner*** » [« un temps infini » souligné sur la feuille, en gras ici] S'agit-il d'une comparaison, d'une hyperbole ou d'une personnification? Justifiez votre réponse.", "correction": "Il s'agit d'une hyperbole. (0,5pt) car le narrateur exagère en employant l'expression : « *temps infini* ». (0,5pt) (Accepter toute réponse valable)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "A votre avis, lequel des deux sait-il discuter le prix : la mère ou le boutiquier ? Justifiez votre réponse.", "correction": "La mère ou le boutiquier (0,5pt) + la justification (0,5pt) (Accepter toute réponse correctement argumentée)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "La mère a-t-elle raison de discuter le prix avec le boutiquier ? Justifiez votre réponse.", "correction": "Oui / non (0,5pt) + la justification (0,5pt) (Accepter toute réponse correctement argumentée)"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**SUJET :**\n\nCertains parents choisissent tout à la place de leurs filles et de leurs fils (vêtements, amis, études...).\n\nQu'en pensez-vous ?\n\nA partir de vos lectures et de votre expérience personnelle, rédigez un texte dans lequel vous exprimez votre point de vue en vous appuyant sur des arguments convaincants.\n\n( **NB :** Lors de la correction, il sera tenu compte des éléments suivants : le respect de la consigne (**2pts**), la cohérence textuelle (**3pts**), la présentation (**1pt**) et la correction de la langue (**4pts**).", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
