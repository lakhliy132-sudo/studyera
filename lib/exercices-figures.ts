export interface ItemExercice {
  texte: string;
  reponse: string;
  correction: string;
}

export interface Exercice {
  numero: number;
  consigne: string;
  items: ItemExercice[];
}

export interface QuestionQuiz {
  question: string;
  options: string[];
  reponse: number;
}

const C = (liste: [string, string, string][]): ItemExercice[] =>
  liste.map(([texte, reponse, correction]) => ({ texte, reponse, correction }));

export const EXERCICES_ANALOGIE: Exercice[] = [
  {
    numero: 1,
    consigne: "Nommez les figures d'analogie utilisées dans les phrases suivantes :",
    items: C([
      ["Le destin empoigne qui il veut, quand il veut.", "personnification", "Personnification — le destin est présenté comme une personne qui « empoigne »."],
      ["C'est très tôt. La ville est encore endormie.", "personnification", "Personnification — la ville « dort » comme un être humain."],
      ["De grands immeubles pareils à des collines qui se dressent dans le quartier.", "comparaison", "Comparaison — « pareils à »."],
      ["Le chemin formait un long ruban.", "métaphore", "Métaphore — le chemin est comparé à un ruban, sans outil."],
      ["La Grande Faucheuse.", "allégorie", "Allégorie — la mort représentée par la faucheuse."],
      ["La cigale alla rendre visite à la fourmi, sa voisine.", "personnification", "Personnification — la cigale et la fourmi agissent comme des personnes."],
      ["Des vagues blondes s'écoulaient sur ses épaules.", "métaphore", "Métaphore — les cheveux sont des « vagues »."],
      ["Ces dauphins sautent comme des carpes.", "comparaison", "Comparaison — « comme »."],
    ]),
  },
  {
    numero: 2,
    consigne: "Identifiez les figures d'analogie dans les phrases suivantes, extraites des œuvres du programme :",
    items: C([
      ["J'ai glissé dans la campagne sans qu'elle s'en aperçoive.", "personnification", "Personnification — la campagne est personnifiée."],
      ["Elle refusa poliment, déclara que ce thé était déjà un véritable printemps.", "métaphore", "Métaphore — le thé = un printemps."],
      ["Elle rit comme une petite fille.", "comparaison", "Comparaison — « comme »."],
      ["C'est beau un jardin qui ne pense pas encore aux hommes.", "personnification", "Personnification — le jardin « pense »."],
      ["Le jardin dormait encore.", "personnification", "Personnification — le jardin « dort »."],
      ["Que t'arrive-t-il, chien galeux.", "métaphore", "Métaphore — l'insulte assimile la personne à un chien."],
      ["La bouilloire chantait.", "personnification", "Personnification — la bouilloire « chante »."],
      ["Prolongeant son rire qui ressemblait à un râle.", "comparaison", "Comparaison — « ressemblait à »."],
      ["Ma mémoire était une cire fraîche.", "métaphore", "Métaphore — la mémoire = une cire fraîche."],
    ]),
  },
  {
    numero: 3,
    consigne: "Identifiez les figures d'analogie dans les phrases suivantes, extraites des œuvres du programme :",
    items: C([
      ["Au milieu de cette ivresse, éclata comme le tonnerre par un beau soleil d'avril.", "comparaison", "Comparaison — « comme »."],
      ["Les petites flammes dansaient.", "personnification", "Personnification — les flammes « dansent »."],
      ["Il faut pourtant qu'il y en ait qui mènent la barque.", "métaphore", "Métaphore — « mener la barque » = diriger."],
      ["Ô tombeau ! Ô lit nuptial ! Ô demeure souterraine !", "métaphore", "Métaphore — le tombeau désigné par d'autres images."],
      ["La vie, c'est un livre qu'on aime, c'est un enfant qui joue à vos pieds, un outil qu'on tient bien dans sa main.", "métaphore", "Métaphore — la vie comparée à un livre, un enfant, un outil."],
      ["Le soleil en robe d'or s'attardait à l'horizon.", "personnification", "Personnification — le soleil porte une « robe »."],
      ["Une jolie petite plante jaune… jouait avec le vent dans une fente de la pierre.", "personnification", "Personnification — la plante « joue »."],
      ["Mal à l'aise au soleil de juillet comme un oiseau de nuit en plein jour.", "comparaison", "Comparaison — « comme »."],
      ["Entre deux masses de peuple murées de soldats.", "métaphore", "Métaphore — le peuple « muré » de soldats."],
      ["Un pigeon disait des mots si jolis.", "personnification", "Personnification — le pigeon « parle »."],
    ]),
  },
];

export const EXERCICES_INSISTANCE: Exercice[] = [
  {
    numero: 1,
    consigne: "Nommez les figures d'insistance utilisées dans les phrases suivantes :",
    items: C([
      ["Refusez d'obéir / Refusez de la faire / N'allez pas à la guerre / Refusez de partir.", "anaphore", "Anaphore — « Refusez » répété en tête."],
      ["Le lait tombe : adieu veau, vache, cochon, couvée.", "énumération", "Énumération — veau, vache, cochon, couvée."],
      ["La terre était grise, le blé était gris, le ciel était gris.", "répétition", "Répétition — « gris » répété."],
      ["Des verres contenaient des liquides rouges, jaunes, verts, bruns.", "énumération", "Énumération — les couleurs énumérées."],
      ["L'automne s'est annoncé. Les espoirs se sont envolés.", "parallélisme", "Parallélisme — deux phrases de même construction."],
      ["Ô triste, triste était mon âme / À cause, à cause d'une femme.", "répétition", "Répétition — « triste » et « à cause » répétés."],
      ["Les femmes le disent, les tests le prouvent.", "parallélisme", "Parallélisme — deux propositions symétriques."],
      ["D'être l'ombre parmi les ombres / D'être cent fois plus ombre que l'ombre…", "anaphore", "Anaphore — « D'être » répété en tête."],
      ["Dans mon jardin, il y a des fraises, des cerises, des pêches et des bananes.", "énumération", "Énumération — les fruits énumérés."],
      ["Il y a des petits ponts épatants / Il y a mon cœur qui bat pour toi…", "anaphore", "Anaphore — « Il y a » répété en tête."],
      ["La chaise, la table, les cahiers, tous les stylos et feutres étaient rangés.", "énumération", "Énumération — les objets énumérés."],
      ["Et elle, elle reste là.", "répétition", "Répétition — « elle » répété."],
    ]),
  },
  {
    numero: 2,
    consigne: "Identifiez les figures d'insistance dans les phrases suivantes, extraites des œuvres du programme :",
    items: C([
      ["Oublie-la, Hémon ; oublie-la, mon petit.", "anaphore", "Anaphore — « Oublie-la » répété en tête."],
      ["Dites, à qui devrait-elle mentir ? à qui sourire ? à qui se vendre ?", "anaphore", "Anaphore — « à qui » répété en tête."],
      ["Quelques jours auparavant, ma mère prépara des gâteaux de semoule fine, des petits pains à l'anis et au sucre, du sellou…", "énumération", "Énumération — les préparations énumérées."],
      ["Des boules de verre, des anneaux de cuivre, un minuscule cadenas sans clef, des clous à tête dorée…", "énumération", "Énumération — les objets énumérés."],
      ["Ils aimaient jouer à la bataille, se prendre à la gorge, crier, s'insulter, commander…", "énumération", "Énumération — les actions énumérées."],
      ["Ma grâce ! Ma grâce ! On me fera peut-être grâce.", "répétition", "Répétition — « grâce » répété."],
    ]),
  },
];

export const EXERCICES_AMPLIFICATION: Exercice[] = [
  {
    numero: 1,
    consigne: "Nommez les figures d'amplification utilisées dans les phrases suivantes :",
    items: C([
      ["Et tu gouvernes tout et ne réponds de rien.", "hyperbole", "Hyperbole — « gouverner tout » exagéré."],
      ["Va, cours, vole et nous venge.", "gradation", "Gradation — va → cours → vole (intensité croissante)."],
      ["Elle me confia son sac. Il pesait au moins une tonne !", "hyperbole", "Hyperbole — « une tonne » exagéré."],
      ["C'est un roc, c'est un pic, c'est une péninsule.", "gradation", "Gradation — roc → pic → péninsule."],
      ["J'ai mille choses à faire.", "hyperbole", "Hyperbole — « mille » exagéré."],
      ["J'ai couru pendant une heure, je suis mort.", "hyperbole", "Hyperbole — « je suis mort » exagéré."],
      ["Marchez, courez, volez où l'honneur vous appelle.", "gradation", "Gradation — marchez → courez → volez."],
      ["Vous ne donnez qu'un jour, qu'une heure, qu'un moment !", "gradation", "Gradation décroissante — jour → heure → moment."],
      ["Ne portaient que des morts aux mers épouvantées.", "hyperbole", "Hyperbole — « mers épouvantées » exagéré."],
      ["Le feu a brûlé des arbustes, des champs, puis la colline entière.", "gradation", "Gradation — arbustes → champs → colline entière."],
    ]),
  },
  {
    numero: 2,
    consigne: "Identifiez les figures d'amplification dans les phrases suivantes, extraites des œuvres du programme :",
    items: C([
      ["Je vais, me dit-elle, te donner à manger, tu dois mourir de faim.", "hyperbole", "Hyperbole — « mourir de faim » exagéré."],
      ["Des torrents de larmes inondèrent le visage.", "hyperbole", "Hyperbole — « torrents de larmes »."],
      ["J'ai six ans, l'année prochaine j'en aurai sept et puis huit, neuf et dix.", "gradation", "Gradation — six → sept → huit → neuf → dix."],
      ["Les cris des enfants s'étaient transformés en torrent, en cataracte, en bruit de rafale.", "gradation", "Gradation — torrent → cataracte → bruit de rafale."],
      ["Des siècles passèrent.", "hyperbole", "Hyperbole — « des siècles » exagéré."],
      ["Les femmes continuaient leurs éternels voyages.", "hyperbole", "Hyperbole — « éternels » exagéré."],
      ["On voyait naître le drame, on le voyait se développer, atteindre son paroxysme et finir dans les larmes.", "gradation", "Gradation — naître → se développer → paroxysme."],
      ["C'était une tempête, un tremblement de terre, le déchaînement des forces obscures, l'écroulement du monde.", "gradation", "Gradation — intensité croissante."],
      ["J'étais ivre, stupide, insensé.", "gradation", "Gradation — ivre → stupide → insensé."],
      ["Elle posait mille questions à ma mère.", "hyperbole", "Hyperbole — « mille questions »."],
    ]),
  },
  {
    numero: 3,
    consigne: "Identifiez les figures d'amplification dans les phrases suivantes, extraites des œuvres du programme :",
    items: C([
      ["Les cris de Lalla Zoubida transperçaient les murs.", "hyperbole", "Hyperbole — « transpercer les murs » exagéré."],
      ["Ma mère poussait des cris à se déchirer le gosier.", "hyperbole", "Hyperbole — « se déchirer le gosier » exagéré."],
      ["Elle pleurerait pendant des jours et pendant des nuits.", "hyperbole", "Hyperbole — « des jours et des nuits » exagéré."],
      ["Nous sommes de ceux qui lui sautent dessus… votre espoir, votre cher espoir, votre sale espoir !", "gradation", "Gradation — espoir → cher espoir → sale espoir."],
      ["Elle posa mille questions à ma mère qui répondait avec complaisance.", "hyperbole", "Hyperbole — « mille questions »."],
      ["Il avait mille fois raison : rien ne peut détruire, effacer ou altérer la vérité.", "hyperbole", "Hyperbole — « mille fois raison »."],
      ["Je lui tenais de longs discours, lui posais mille questions auxquelles il répondait rarement.", "hyperbole", "Hyperbole — « mille questions »."],
    ]),
  },
];

export const EXERCICES_SUBSTITUTION: Exercice[] = [
  {
    numero: 1,
    consigne: "Nommez les figures de substitution utilisées dans les phrases suivantes :",
    items: C([
      ["Que tu viennes du ciel ou de l'enfer, qu'importe, Ô Beauté !", "métonymie", "Métonymie — « ciel » et « enfer » pour le bien et le mal."],
      ["Si ton œil, ton souris, ton pied m'ouvrent la porte d'un infini que j'aime…", "synecdoque", "Synecdoque — « œil, souris, pied » (parties) pour la personne."],
      ["Puis-je espérer que vous accepterez un cœur qui vous adore.", "synecdoque", "Synecdoque — « un cœur » (partie) pour la personne."],
      ["L'homme portait un manteau de vison.", "métonymie", "Métonymie — le vison (matière) pour le manteau."],
      ["L'enfant a mis son nez dehors.", "synecdoque", "Synecdoque — « le nez » (partie) pour la personne."],
      ["Je viens de voir l'astre du jour se lever.", "périphrase", "Périphrase — « l'astre du jour » pour le soleil."],
      ["Ma passion est le septième art.", "périphrase", "Périphrase — « le septième art » pour le cinéma."],
      ["Hier, j'ai escaladé le toit du Monde.", "périphrase", "Périphrase — « le toit du Monde » pour l'Everest/Himalaya."],
      ["Enfin avec le flux nous fait voir trente voiles.", "synecdoque", "Synecdoque — « trente voiles » (partie) pour trente bateaux."],
    ]),
  },
  {
    numero: 2,
    consigne: "Identifiez les figures de substitution dans les phrases suivantes, extraites des œuvres du programme :",
    items: C([
      ["À peine arrivé, des mains de fer s'emparèrent de moi.", "synecdoque", "Synecdoque — « des mains » (partie) pour les gardiens."],
      ["Tout Bicêtre semblait rire, chanter, courir, danser.", "métonymie", "Métonymie — « Bicêtre » (lieu) pour ses prisonniers."],
      ["En cet instant je m'aperçus que j'étais sans fer.", "métonymie", "Métonymie — « fer » (matière) pour l'arme."],
      ["Une mer de têtes sur la place.", "synecdoque", "Synecdoque — « têtes » (partie) pour les personnes."],
      ["J'attendais un moment avant de voir surgir de la foule les deux haïks.", "métonymie", "Métonymie — « les haïks » (vêtement) pour les femmes."],
    ]),
  },
  {
    numero: 3,
    consigne: "Identifiez les figures de substitution dans les phrases suivantes, extraites des œuvres du programme :",
    items: C([
      ["J'étais seul au milieu d'un grouillement de têtes rasées, de nez humides.", "synecdoque", "Synecdoque — « têtes, nez » (parties) pour les personnes."],
      ["Toute la maison dormait encore.", "métonymie", "Métonymie — « la maison » (lieu) pour ses habitants."],
      ["J'alertai ma mère, demandai secours à… Zineb, la propriétaire de ce démon quadrupède.", "périphrase", "Périphrase — « ce démon quadrupède » pour le chat."],
      ["Et tu risques la mort… ce passeport dérisoire, ce bredouillage en série sur sa dépouille, cette pantomime…", "périphrase", "Périphrase — la cérémonie désignée par d'autres termes."],
      ["Tout Thèbes sait ce qu'elle a fait.", "métonymie", "Métonymie — « Thèbes » (ville) pour ses habitants."],
    ]),
  },
];

export const EXERCICES_ATTENUATION: Exercice[] = [
  {
    numero: 1,
    consigne: "Nommez les figures d'atténuation utilisées dans les phrases suivantes :",
    items: C([
      ["Il dort dans le soleil… Il a deux trous rouges au côté droit.", "euphémisme", "Euphémisme — « deux trous rouges » pour la mort, adoucie."],
      ["Elle nous a quittés hier.", "euphémisme", "Euphémisme — « nous a quittés » pour « est morte »."],
      ["Ce n'est pas une très bonne idée qu'il a eue là.", "litote", "Litote — « pas une très bonne idée » pour « mauvaise idée »."],
      ["Elle ne va pas très bien.", "litote", "Litote — « ne va pas très bien » pour « va mal »."],
      ["Non seulement cet homme ne brille pas par son intelligence…", "litote", "Litote — « ne brille pas par son intelligence » pour « il est bête »."],
      ["Je ne suis pas très content ! Ce n'est pas mal ! Ça ne sent pas la rose !", "litote", "Litote — la situation atténuée / détournée."],
      ["Il a du tempérament.", "euphémisme", "Euphémisme — « du tempérament » pour un caractère difficile."],
      ["Il est très prudent.", "euphémisme", "Euphémisme — « prudent » pour « peureux »."],
      ["Je vais au petit coin.", "euphémisme", "Euphémisme — « le petit coin » pour les toilettes."],
      ["Va ! Je ne te hais point !", "litote", "Litote — « je ne te hais point » pour « je t'aime »."],
      ["L'époux d'une jeune beauté partait pour l'autre monde.", "euphémisme", "Euphémisme — « l'autre monde » pour la mort."],
    ]),
  },
];

export const EXERCICES_OPPOSITION: Exercice[] = [
  {
    numero: 1,
    consigne: "Nommez les figures d'opposition utilisées dans les phrases suivantes :",
    items: C([
      ["Une nuit claire enveloppait la campagne.", "oxymore", "Oxymore — « nuit claire » (termes contraires)."],
      ["On est en deuil, on est en fête.", "antithèse", "Antithèse — deuil / fête."],
      ["Bravo ! C'est du joli.", "antiphrase", "Antiphrase — « du joli » pour du désordre."],
      ["Quelques hameaux flambaient ; au loin brûlaient les chaumes.", "chiasme", "Chiasme — construction en symétrie croisée."],
      ["Les haricots étaient froids et le poisson n'était pas cuit : un vrai festin !", "antiphrase", "Antiphrase — « un vrai festin » ironique."],
      ["5/20 en français : joli travail.", "antiphrase", "Antiphrase — « joli travail » ironique."],
      ["J'embrasse mon rival, mais c'est pour mieux l'étouffer.", "antithèse", "Antithèse — embrasse / étouffer."],
      ["Cette vieille veste déchirée te met en valeur : tu es très élégante !", "antiphrase", "Antiphrase — « très élégante » ironique."],
      ["Ici c'était le paradis, ailleurs l'enfer.", "antithèse", "Antithèse — paradis / enfer."],
      ["Cette obscure clarté qui tombe des étoiles.", "oxymore", "Oxymore — « obscure clarté »."],
      ["N'est-ce pas toi qui pleures et Méduse qui rit ?", "antithèse", "Antithèse — pleures / rit."],
    ]),
  },
  {
    numero: 2,
    consigne: "Identifiez les figures d'opposition dans les phrases suivantes, extraites des œuvres du programme :",
    items: C([
      ["Pour y renaître, il fallait d'abord mourir.", "antithèse", "Antithèse — renaître / mourir."],
      ["Une voisine poussa un cri de joie ou un gémissement de douleur.", "antithèse", "Antithèse — joie / douleur."],
      ["Ma mère m'aspergea alternativement d'eau bouillante et d'eau glacée.", "antithèse", "Antithèse — bouillante / glacée."],
      ["Ah ! C'est du joli ! C'est du propre !", "antiphrase", "Antiphrase — ironie."],
      ["Je suis noire et maigre. Ismène est rose et dorée comme un fruit.", "antithèse", "Antithèse — noire / rose, maigre / dorée."],
      ["C'est vous qui êtes laids, même les plus beaux.", "antithèse", "Antithèse — laids / beaux."],
      ["Tu as choisi la vie et moi la mort.", "antithèse", "Antithèse — vie / mort."],
    ]),
  },
  {
    numero: 3,
    consigne: "Identifiez les figures d'opposition dans les phrases suivantes, extraites des œuvres du programme :",
    items: C([
      ["J'espère que ma mort lui va faire grand plaisir.", "antiphrase", "Antiphrase — « grand plaisir » ironique."],
      ["On entendait ouvrir et fermer les lourdes portes.", "antithèse", "Antithèse — ouvrir / fermer."],
      ["Ceux-ci en rient, ceux-là en pleurent.", "antithèse", "Antithèse — rient / pleurent."],
      ["Maintenant, Dieu merci, je n'espère plus.", "antiphrase", "Antiphrase — « Dieu merci » ironique."],
      ["Un rire amer sur le visage.", "oxymore", "Oxymore — « rire amer »."],
      ["Il a peu de clients, mais beaucoup d'amis.", "antithèse", "Antithèse — peu / beaucoup."],
    ]),
  },
];

export const QUIZ_ANALOGIE: QuestionQuiz[] = [
  { question: "Quelle figure rapproche deux éléments par un outil de comparaison (comme, pareil à) ?", options: ["La comparaison", "La métaphore", "La personnification", "L'allégorie"], reponse: 0 },
  { question: "Quelle figure est une comparaison sans outil grammatical ?", options: ["La comparaison", "La métaphore", "L'hyperbole", "La litote"], reponse: 1 },
  { question: "Quelle figure attribue des caractéristiques humaines à un objet ou un animal ?", options: ["La métonymie", "La personnification", "L'antithèse", "La gradation"], reponse: 1 },
  { question: "Quelle figure représente une valeur abstraite par une image concrète ?", options: ["L'allégorie", "La synecdoque", "L'oxymore", "Le chiasme"], reponse: 0 },
  { question: "« La ville est endormie » → quelle figure ?", options: ["La métaphore", "La personnification", "La comparaison", "L'euphémisme"], reponse: 1 },
  { question: "« Il a un cœur d'acier » → quelle figure ?", options: ["La comparaison", "La métaphore", "La personnification", "L'allégorie"], reponse: 1 },
  { question: "« Il est fort comme un bœuf » → quelle figure ?", options: ["La métaphore", "La comparaison", "La personnification", "L'hyperbole"], reponse: 1 },
  { question: "« La Grande Faucheuse » (la mort) → quelle figure ?", options: ["L'allégorie", "La métonymie", "L'antithèse", "La litote"], reponse: 0 },
  { question: "« Le chemin formait un long ruban » → quelle figure ?", options: ["La comparaison", "La personnification", "La métaphore", "L'oxymore"], reponse: 2 },
  { question: "« Ma mémoire était une cire fraîche » → quelle figure ?", options: ["La comparaison", "La métaphore", "L'allégorie", "La synecdoque"], reponse: 1 },
];

export const QUIZ_INSISTANCE: QuestionQuiz[] = [
  { question: "Reprise d'un mot ou d'un groupe de mots dans une phrase → ?", options: ["La répétition", "L'anaphore", "L'énumération", "Le parallélisme"], reponse: 0 },
  { question: "Répétition d'un mot en tête de phrase → ?", options: ["La répétition", "L'anaphore", "L'énumération", "Le chiasme"], reponse: 1 },
  { question: "Énoncer les différentes parties d'un tout → ?", options: ["L'anaphore", "La gradation", "L'énumération", "L'antithèse"], reponse: 2 },
  { question: "Construction syntaxique identique dans deux phrases → ?", options: ["Le parallélisme", "L'anaphore", "La répétition", "L'oxymore"], reponse: 0 },
  { question: "« La terre était grise, le blé était gris, le ciel était gris » → ?", options: ["L'anaphore", "L'énumération", "La répétition", "Le parallélisme"], reponse: 2 },
  { question: "« Refusez… Refusez… Refusez » → ?", options: ["La répétition", "L'anaphore", "L'énumération", "Le parallélisme"], reponse: 1 },
  { question: "« veau, vache, cochon, couvée » → ?", options: ["L'anaphore", "La répétition", "L'énumération", "Le parallélisme"], reponse: 2 },
  { question: "« Il n'avait pas de fange… Il n'avait pas d'enfer… » → ?", options: ["Le parallélisme", "L'anaphore", "L'énumération", "La répétition"], reponse: 0 },
  { question: "« Il y a des ponts / Il y a mon cœur / Il y a une femme » → ?", options: ["L'anaphore", "L'énumération", "La répétition", "Le chiasme"], reponse: 0 },
  { question: "« des fraises, des cerises, des pêches » → ?", options: ["L'anaphore", "La répétition", "L'énumération", "La gradation"], reponse: 2 },
];

export const QUIZ_AMPLIFICATION: QuestionQuiz[] = [
  { question: "Énumération des éléments en ordre croissant ou décroissant → ?", options: ["La gradation", "L'hyperbole", "L'énumération", "L'antithèse"], reponse: 0 },
  { question: "Synonyme d'exagération → ?", options: ["La gradation", "L'hyperbole", "La litote", "L'euphémisme"], reponse: 1 },
  { question: "« Va, cours, vole et nous venge » → ?", options: ["L'hyperbole", "La gradation", "L'énumération", "L'antithèse"], reponse: 1 },
  { question: "« J'ai mille choses à faire » → ?", options: ["La gradation", "L'hyperbole", "La litote", "L'oxymore"], reponse: 1 },
  { question: "« un jour, qu'une heure, qu'un moment » → ?", options: ["La gradation", "L'hyperbole", "La répétition", "L'anaphore"], reponse: 0 },
  { question: "« Des torrents de larmes » → ?", options: ["La gradation", "L'hyperbole", "La métaphore", "La comparaison"], reponse: 1 },
  { question: "« Marchez, courez, volez » → ?", options: ["L'hyperbole", "La gradation", "L'énumération", "Le parallélisme"], reponse: 1 },
  { question: "« Il pesait au moins une tonne » → ?", options: ["L'hyperbole", "La gradation", "La litote", "L'euphémisme"], reponse: 0 },
  { question: "Les préfixes « archi-, super-, hyper- » servent à exprimer → ?", options: ["L'hyperbole", "La gradation", "La litote", "L'antithèse"], reponse: 0 },
  { question: "« une tempête, un tremblement de terre, l'écroulement du monde » → ?", options: ["La gradation", "L'hyperbole", "L'énumération", "L'anaphore"], reponse: 0 },
];

export const QUIZ_SUBSTITUTION: QuestionQuiz[] = [
  { question: "Désigner un objet/idée par un mot associé (le contenant pour le contenu) → ?", options: ["La métonymie", "La synecdoque", "La périphrase", "La métaphore"], reponse: 0 },
  { question: "La partie pour le tout → ?", options: ["La métonymie", "La synecdoque", "La périphrase", "L'antithèse"], reponse: 1 },
  { question: "Remplacer un mot par un groupe de mots → ?", options: ["La métonymie", "La synecdoque", "La périphrase", "L'euphémisme"], reponse: 2 },
  { question: "« Boire un verre » → ?", options: ["La synecdoque", "La périphrase", "La métonymie", "La métaphore"], reponse: 2 },
  { question: "« J'ai quitté les murs » (pour la maison) → ?", options: ["La métonymie", "La synecdoque", "La périphrase", "L'allégorie"], reponse: 1 },
  { question: "« L'astre du jour » (pour le soleil) → ?", options: ["La métonymie", "La synecdoque", "La périphrase", "La métaphore"], reponse: 2 },
  { question: "« Trente voiles » (pour trente bateaux) → ?", options: ["La métonymie", "La synecdoque", "La périphrase", "L'oxymore"], reponse: 1 },
  { question: "« Tout Bicêtre semblait rire » → ?", options: ["La synecdoque", "La métonymie", "La périphrase", "L'allégorie"], reponse: 1 },
  { question: "« Le septième art » (pour le cinéma) → ?", options: ["La métonymie", "La synecdoque", "La périphrase", "L'euphémisme"], reponse: 2 },
  { question: "« Une mer de têtes » → ?", options: ["La métonymie", "La synecdoque", "La périphrase", "La métaphore"], reponse: 1 },
];

export const QUIZ_ATTENUATION: QuestionQuiz[] = [
  { question: "Remplacer un mot violent par un terme qui atténue la réalité → ?", options: ["L'euphémisme", "La litote", "L'antiphrase", "La métonymie"], reponse: 0 },
  { question: "Dire le moins pour faire comprendre le plus → ?", options: ["L'euphémisme", "La litote", "L'oxymore", "L'antithèse"], reponse: 1 },
  { question: "« Elle nous a quittés » (pour « elle est morte ») → ?", options: ["La litote", "L'euphémisme", "L'antiphrase", "La périphrase"], reponse: 1 },
  { question: "« Tu n'es pas courageux » (pour « tu es peureux ») → ?", options: ["L'euphémisme", "La litote", "L'antithèse", "L'oxymore"], reponse: 1 },
  { question: "« Il a deux trous rouges au côté droit » (Le Dormeur du val) → ?", options: ["La litote", "L'antiphrase", "L'euphémisme", "La métonymie"], reponse: 2 },
  { question: "« Va ! Je ne te hais point ! » (Corneille) → ?", options: ["La litote", "L'euphémisme", "L'antithèse", "L'oxymore"], reponse: 0 },
  { question: "« Il est très prudent » (pour « il est peureux ») → ?", options: ["La litote", "L'euphémisme", "L'antiphrase", "La périphrase"], reponse: 1 },
  { question: "« Je vais au petit coin » → ?", options: ["La litote", "L'euphémisme", "L'antithèse", "La synecdoque"], reponse: 1 },
  { question: "« Ce n'est pas une très bonne idée » → ?", options: ["L'euphémisme", "La litote", "L'antiphrase", "L'oxymore"], reponse: 1 },
  { question: "« Partir pour l'autre monde » (pour mourir) → ?", options: ["La litote", "L'euphémisme", "L'antithèse", "La métaphore"], reponse: 1 },
];

export const QUIZ_OPPOSITION: QuestionQuiz[] = [
  { question: "Coexistence de deux termes de sens opposés → ?", options: ["L'antithèse", "L'oxymore", "L'antiphrase", "Le chiasme"], reponse: 0 },
  { question: "Juxtaposition de termes contraires (ex. « obscure clarté ») → ?", options: ["L'antithèse", "L'oxymore", "L'antiphrase", "Le chiasme"], reponse: 1 },
  { question: "Exprimer le contraire de ce qu'on pense → ?", options: ["L'antithèse", "L'oxymore", "L'antiphrase", "Le chiasme"], reponse: 2 },
  { question: "Opposition en symétrie → ?", options: ["L'antithèse", "L'oxymore", "L'antiphrase", "Le chiasme"], reponse: 3 },
  { question: "« J'ai le mauvais rôle et tu as le bon » → ?", options: ["L'antithèse", "L'oxymore", "L'antiphrase", "Le chiasme"], reponse: 0 },
  { question: "« Cette obscure clarté » → ?", options: ["L'antithèse", "L'oxymore", "L'antiphrase", "Le chiasme"], reponse: 1 },
  { question: "« Bravo ! C'est du joli ! » → ?", options: ["L'antithèse", "L'oxymore", "L'antiphrase", "Le chiasme"], reponse: 2 },
  { question: "« Je les ai vus arriver le matin, le soir ils m'ont vu partir » → ?", options: ["L'antithèse", "L'oxymore", "L'antiphrase", "Le chiasme"], reponse: 3 },
  { question: "« On est en deuil, on est en fête » → ?", options: ["L'antithèse", "L'oxymore", "L'antiphrase", "Le chiasme"], reponse: 0 },
  { question: "« Un rire amer » → ?", options: ["L'antithèse", "L'oxymore", "L'antiphrase", "Le chiasme"], reponse: 1 },
];

export interface DonneesFigures {
  description: string;
  exercices: Exercice[];
  questions: QuestionQuiz[];
}

export const DONNEES_FIGURES: Record<string, DonneesFigures> = {
  "figures-analogie": { description: "Vérifie que tu sais reconnaître la comparaison, la métaphore, la personnification et l'allégorie.", exercices: EXERCICES_ANALOGIE, questions: QUIZ_ANALOGIE },
  "figures-insistance": { description: "Vérifie que tu sais reconnaître la répétition, l'anaphore, l'énumération et le parallélisme.", exercices: EXERCICES_INSISTANCE, questions: QUIZ_INSISTANCE },
  "figures-amplification": { description: "Vérifie que tu sais reconnaître la gradation et l'hyperbole.", exercices: EXERCICES_AMPLIFICATION, questions: QUIZ_AMPLIFICATION },
  "figures-substitution": { description: "Vérifie que tu sais reconnaître la métonymie, la synecdoque et la périphrase.", exercices: EXERCICES_SUBSTITUTION, questions: QUIZ_SUBSTITUTION },
  "figures-attenuation": { description: "Vérifie que tu sais reconnaître l'euphémisme et la litote.", exercices: EXERCICES_ATTENUATION, questions: QUIZ_ATTENUATION },
  "figures-opposition": { description: "Vérifie que tu sais reconnaître l'antithèse, l'oxymore, l'antiphrase et le chiasme.", exercices: EXERCICES_OPPOSITION, questions: QUIZ_OPPOSITION },
};
