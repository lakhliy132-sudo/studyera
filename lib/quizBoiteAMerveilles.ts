/**
 * Questions du quiz "La Boîte à Merveilles", organisées chapitre par
 * chapitre — demandé explicitement par l'utilisateur après une
 * première version à 12 questions générales sur toute l'œuvre : "tu
 * peux le quiz tu le fais chap par chap faire 5 qst dans chaque
 * chapter". 5 questions par chapitre (1 à 12), 60 au total.
 *
 * ⚠️ Contenu entièrement rédigé par Claude, à partir des résumés et
 * points clés déjà présents en base (table `fiches`, remplie les
 * sessions précédentes à partir des points fournis par l'utilisateur)
 * — chaque question est vérifiable dans le résumé du chapitre
 * correspondant, mais la formulation des questions/réponses elle-même
 * n'a pas été fournie par l'utilisateur : à faire relire par un
 * enseignant avant usage en classe (même réserve que le lexique/les
 * sujets, qui n'ont pas non plus de colonne `statut`).
 *
 * Stocké en dur ici plutôt qu'en base : un vrai quiz demanderait une
 * nouvelle table Supabase (questions/choix/bonne réponse), donc une
 * migration, impossible à appliquer directement dans ce projet (pas de
 * connexion Postgres, seulement les clés REST anon/service_role). Même
 * contournement que `lib/personnagesParChapitre.ts`.
 */
export interface QuestionQuiz {
  id: string;
  question: string;
  choix: string[];
  /** Index dans `choix` de la bonne réponse. */
  reponseCorrecte: number;
  /** Courte explication affichée après la réponse, pour justifier la
   * bonne réponse (pédagogique, pas juste "correct/incorrect"). */
  explication: string;
}

export const QUIZ_PAR_CHAPITRE: Record<number, QuestionQuiz[]> = {
  1: [
    {
      id: "c1-q1",
      question: "Pourquoi la maison où vit le narrateur s'appelle-t-elle « Dar Chouafa » ?",
      choix: [
        "Parce qu'elle appartient à une riche famille de ce nom",
        "Parce qu'une voyante habite au rez-de-chaussée et y organise un rituel mensuel",
        "Parce qu'elle est voisine du Msid",
        "Parce que son propriétaire s'appelle Chouafa",
      ],
      reponseCorrecte: 1,
      explication:
        "La Chouafa (tante Kenza), voyante, occupe le rez-de-chaussée et y organise chaque mois un rituel qui trouble l'enfant.",
    },
    {
      id: "c1-q2",
      question: "En quoi le narrateur enfant se distingue-t-il des autres écoliers du Msid ?",
      choix: [
        "Il est plus doué qu'eux en récitation",
        "Il refuse d'aller au Msid",
        "Il vit dans le rêve et l'imagination, quand eux restent tournés vers le réel",
        "Il est le plus âgé de la classe",
      ],
      reponseCorrecte: 2,
      explication:
        "Le narrateur oppose son goût pour le rêve et l'imaginaire au reste des écoliers, tournés vers le monde réel.",
    },
    {
      id: "c1-q3",
      question: "Comment l'enfant vit-il les séances au bain maure ?",
      choix: ["Comme un moment de jeu agréable", "Avec indifférence", "Comme une fête", "Comme un enfer qu'il redoute"],
      reponseCorrecte: 3,
      explication: "Le bain maure est décrit comme un véritable enfer que l'enfant redoute à chaque fois.",
    },
    {
      id: "c1-q4",
      question: "Qu'est-ce qui déclenche la dispute entre Lalla Zoubida et Rahma à la fin du chapitre ?",
      choix: [
        "Le partage de la boîte à merveilles",
        "Le jour de la lessive, le lundi",
        "Un vol d'argent",
        "Une histoire racontée par le fqih",
      ],
      reponseCorrecte: 1,
      explication: "La dispute porte sur le lundi, jour de lessive, avant de s'envenimer le soir même en bagarre.",
    },
    {
      id: "c1-q5",
      question: "Comment l'enfant réagit-il devant la violence de la bagarre qui referme le chapitre ?",
      choix: ["Il se met à crier", "Il va chercher son père", "Il s'évanouit", "Il se réfugie chez la voisine"],
      reponseCorrecte: 2,
      explication: "Incapable de supporter la violence de la scène, l'enfant s'évanouit.",
    },
  ],
  2: [
    {
      id: "c2-q1",
      question: "Pourquoi Lalla Zoubida se rend-elle au sanctuaire de Sidi Ali Boughaleb ?",
      choix: [
        "Pour assister à un mariage",
        "Conseillée par Lalla Aïcha, pour se délivrer de sa migraine et de ses malheurs",
        "Pour acheter des vêtements neufs",
        "Pour accompagner son mari en voyage",
      ],
      reponseCorrecte: 1,
      explication: "Terrassée par une migraine, elle suit le conseil de Lalla Aïcha de se rendre au mausolée.",
    },
    {
      id: "c2-q2",
      question: "Que subit Sidi Mohammed lors de la visite au mausolée ?",
      choix: ["Il se perd dans la foule", "Il se fait griffer par un chat", "Il tombe malade", "Il casse un objet sacré"],
      reponseCorrecte: 1,
      explication: "Le mausolée est infesté de chats, et l'enfant se fait griffer par un matou.",
    },
    {
      id: "c2-q3",
      question: "Combien de jours de repos la blessure du chat vaut-elle au narrateur ?",
      choix: ["Un jour", "Deux jours et demi", "Une semaine", "Aucun, il reste au Msid"],
      reponseCorrecte: 1,
      explication: "Sa blessure lui vaut deux jours et demi de repos à la maison.",
    },
    {
      id: "c2-q4",
      question: "Qui offre un cabochon de verre à Sidi Mohammed pendant sa convalescence ?",
      choix: ["Fatma Bziouya", "Lalla Aïcha", "Rahma", "La Chouafa"],
      reponseCorrecte: 2,
      explication: "Rahma lui offre un cabochon de verre, et Fatma Bziouya deux beignets.",
    },
    {
      id: "c2-q5",
      question: "Quel jour de la semaine le Msid consacre-t-il à la révision et à la récitation du Coran ?",
      choix: ["Le lundi", "Le mardi", "Le jeudi", "Le vendredi"],
      reponseCorrecte: 1,
      explication: "Le chapitre s'ouvre sur le souvenir du mardi, jour de révision et de récitation.",
    },
  ],
  3: [
    {
      id: "c3-q1",
      question: "Quel objet émerveille Lalla Zoubida chez Fatma Bziouya ?",
      choix: ["Un miroir", "Une lampe à pétrole", "Un tapis", "Un bijou en or"],
      reponseCorrecte: 1,
      explication:
        "Éblouie par la lampe à pétrole de sa voisine, elle finit par convaincre son mari que les bougies ne servent plus à rien.",
    },
    {
      id: "c3-q2",
      question: "Où Rahma se rendait-elle quand elle a perdu sa fille Zineb ?",
      choix: [
        "Au souk pour faire des courses",
        "Chez sa sœur Khadija, pour le baptême de son enfant",
        "Au sanctuaire de Sidi Ali Boughaleb",
        "Chez Lalla Aïcha",
      ],
      reponseCorrecte: 1,
      explication: "Rahma perd Zineb en se rendant chez sa sœur Khadija pour le baptême de son enfant.",
    },
    {
      id: "c3-q3",
      question: "Où Zineb est-elle finalement retrouvée ?",
      choix: [
        "Dans un asile, la maison des Idrissides à Dar Kitoun",
        "Chez le fqih",
        "Au bain maure",
        "Chez Fatma Bziouya",
      ],
      reponseCorrecte: 0,
      explication: "Après une longue recherche dans la médina, Lalla Zoubida la retrouve à Dar Kitoun.",
    },
    {
      id: "c3-q4",
      question: "Que fait Rahma pour remercier Dieu d'avoir retrouvé sa fille ?",
      choix: [
        "Elle offre un cadeau à Lalla Zoubida",
        "Elle organise un repas pour les pauvres et les mendiants aveugles",
        "Elle se rend en pèlerinage",
        "Elle achète une lampe à pétrole",
      ],
      reponseCorrecte: 1,
      explication: "Toutes les femmes s'entraident pour préparer ce repas de remerciement.",
    },
    {
      id: "c3-q5",
      question: "Comment se comportent les objets de la boîte à merveilles à la toute fin du chapitre ?",
      choix: [
        "Ils brillent plus que jamais",
        "Ils restent maussades et refusent de parler à l'enfant",
        "L'enfant en perd un",
        "Le père y ajoute un nouvel objet",
      ],
      reponseCorrecte: 1,
      explication: "Ce jour-là, exceptionnellement, les objets de la boîte restent silencieux.",
    },
  ],
  4: [
    {
      id: "c4-q1",
      question: "À quelle saison se déroule la visite chez Lalla Aïcha ?",
      choix: ["L'hiver", "Le printemps", "L'été", "L'automne"],
      reponseCorrecte: 1,
      explication: "Le chapitre s'ouvre sur le début de la saison du printemps.",
    },
    {
      id: "c4-q2",
      question: "À quel jeu les enfants jouent-ils, qui se termine en dispute ?",
      choix: ["Le jeu de la mariée", "Le jeu du fqih", "Le jeu du marchand", "Le jeu de cache-cache"],
      reponseCorrecte: 0,
      explication: "Le jeu de la mariée, auquel participe le narrateur, se termine par une dispute entre enfants.",
    },
    {
      id: "c4-q3",
      question: "Qui a escroqué Moulay Larbi, le mari de Lalla Aïcha ?",
      choix: ["Le fqih", "Son associé Abdelkader", "Le coiffeur", "Un marchand du souk"],
      reponseCorrecte: 1,
      explication: "Moulay Larbi a été escroqué par son associé Abdelkader.",
    },
    {
      id: "c4-q4",
      question: "Le soir, quelles histoires le père raconte-t-il à son fils ?",
      choix: [
        "Les histoires fabuleuses d'Abdellah l'épicier",
        "Sa propre enfance",
        "L'histoire du sanctuaire de Sidi Ali Boughaleb",
        "Les malheurs de Moulay Larbi",
      ],
      reponseCorrecte: 0,
      explication: "Maâlem Abdeslem raconte à son fils les histoires fabuleuses d'Abdellah l'épicier.",
    },
    {
      id: "c4-q5",
      question: "Que fait Lalla Zoubida le lendemain, malgré la confidence demandée par Lalla Aïcha ?",
      choix: [
        "Elle garde le secret",
        "Elle raconte les malheurs de Lalla Aïcha à son propre mari",
        "Elle rend visite au voyant",
        "Elle part chez Rahma",
      ],
      reponseCorrecte: 1,
      explication: "Lalla Zoubida ne résiste pas à raconter l'histoire à Maâlem Abdeslem.",
    },
  ],
  5: [
    {
      id: "c5-q1",
      question: "Qui meurt dans ce chapitre et bouleverse profondément le narrateur ?",
      choix: ["Le fqih", "Sidi Mohammed Ben Taher, le coiffeur", "L'oncle Othmane", "Maâlem Abdeslem"],
      reponseCorrecte: 1,
      explication: "La mort du coiffeur Sidi Mohammed Ben Taher plonge tout le quartier dans le deuil.",
    },
    {
      id: "c5-q2",
      question: "Quel effet cette mort a-t-elle sur l'enfant ?",
      choix: [
        "Il l'oublie très vite",
        "Il fait des cauchemars et devient peureux face à la mort",
        "Il refuse de retourner au Msid",
        "Il tombe malade physiquement",
      ],
      reponseCorrecte: 1,
      explication: "Pour avoir assisté aux honneurs funèbres, le narrateur fait des cauchemars et redoute la mort.",
    },
    {
      id: "c5-q3",
      question: "Quel cadeau Lalla Zoubida offre-t-elle à son fils pour le réconforter ?",
      choix: ["Un cabochon de verre", "Une chaînette en or", "Un jouet", "Un livre"],
      reponseCorrecte: 1,
      explication: "Cette chaînette en or fascine beaucoup le petit garçon de six ans.",
    },
    {
      id: "c5-q4",
      question: "Qu'est-ce qui déclenche la bagarre entre Sidi Mohammed et Zineb à la fin du chapitre ?",
      choix: [
        "Le chat de Zineb vole la chaîne en or de Sidi Mohammed",
        "Un désaccord sur un jeu",
        "Zineb casse un objet de la boîte à merveilles",
        "Une dispute au Msid",
      ],
      reponseCorrecte: 0,
      explication: "Le chat de Zineb dérobe la chaîne, provoquant une violente bagarre entre les deux enfants.",
    },
    {
      id: "c5-q5",
      question: "Quelle fête le fqih annonce-t-il à ses écoliers, visiblement heureux, au début du chapitre ?",
      choix: ["Le Mawlid", "L'Achoura", "L'Aïd al-Fitr", "Le mariage d'un voisin"],
      reponseCorrecte: 1,
      explication: "Deux semaines avant l'Achoura, le fqih annonce ses projets pour cette fête religieuse annuelle.",
    },
  ],
  6: [
    {
      id: "c6-q1",
      question: "Où Lalla Zoubida emmène-t-elle son fils pour lui acheter des vêtements neufs ?",
      choix: ["Au souk des bijoutiers", "À la Kissaria", "Chez le voyant", "Au mausolée"],
      reponseCorrecte: 1,
      explication: "Sidi Mohammed accompagne sa mère à la Kissaria pour l'Achoura.",
    },
    {
      id: "c6-q2",
      question: "Que réussit à faire Lalla Zoubida au souk grâce à son habileté ?",
      choix: [
        "Obtenir un gilet gratuitement",
        "Marchander et acheter un gilet au prix qui lui convient",
        "Échanger la lampe à pétrole",
        "Convaincre un marchand de la suivre à la maison",
      ],
      reponseCorrecte: 1,
      explication: "Les marchands présentent plusieurs gilets, et elle en obtient un au prix voulu.",
    },
    {
      id: "c6-q3",
      question: "Pourquoi Lalla Zoubida se met-elle en colère contre les deux enfants ?",
      choix: [
        "Ils ont sali leurs habits neufs",
        "Ils se sont perdus au souk",
        "Ils échangent des grimaces horribles",
        "Ils ont cassé un objet de la boîte à merveilles",
      ],
      reponseCorrecte: 2,
      explication: "Les grimaces horribles échangées entre les enfants provoquent la colère de la mère.",
    },
    {
      id: "c6-q4",
      question: "Quelle histoire Rahma raconte-t-elle aux voisines à la fin du chapitre ?",
      choix: [
        "Celle du voyant Sidi El Arafi",
        "Celle de l'oncle Othmane et de son épouse Lalla Khadija",
        "Celle du coiffeur défunt",
        "Celle de Moulay Larbi",
      ],
      reponseCorrecte: 1,
      explication: "Ce récit captive toutes les femmes réunies.",
    },
    {
      id: "c6-q5",
      question: "Pourquoi le fqih forme-t-il de nouvelles équipes au Msid ?",
      choix: [
        "Pour préparer un examen",
        "Pour organiser les festivités et mettre fin au désordre",
        "Pour punir les élèves indisciplinés",
        "Pour accueillir de nouveaux écoliers",
      ],
      reponseCorrecte: 1,
      explication: "Huit jours avant l'Achoura, le tumulte des préparatifs pousse le fqih à s'organiser.",
    },
  ],
  7: [
    {
      id: "c7-q1",
      question: "Qui informe Sidi Mohammed qu'il doit rejoindre ses camarades au Msid ?",
      choix: ["Le fqih en personne", "Hamoussa, un élève de petite taille", "Son père", "Zineb"],
      reponseCorrecte: 1,
      explication: "Hamoussa vient le prévenir des derniers préparatifs de l'Achoura.",
    },
    {
      id: "c7-q2",
      question: "Où le père emmène-t-il son fils après lui avoir acheté des jouets ?",
      choix: ["Au souk des bijoutiers", "Chez le coiffeur", "Au sanctuaire", "Chez Lalla Aïcha"],
      reponseCorrecte: 1,
      explication: "Le narrateur s'ennuie devant les conversations des adultes chez le coiffeur.",
    },
    {
      id: "c7-q3",
      question: "Que font les écoliers le jour de l'Achoura au Msid ?",
      choix: [
        "Ils partent en pèlerinage",
        "Ils récitent le Coran, chantent des cantiques et font des invocations",
        "Ils reçoivent des cadeaux du fqih",
        "Ils jouent toute la journée",
      ],
      reponseCorrecte: 1,
      explication: "C'est une journée exceptionnelle célébrée collectivement au Msid.",
    },
    {
      id: "c7-q4",
      question: "Qui rend une visite surprise à Lalla Zoubida l'après-midi de l'Achoura ?",
      choix: ["Rahma", "Fatma Bziouya", "Lalla Aïcha", "La Chouafa"],
      reponseCorrecte: 2,
      explication: "Les deux amies passent alors la journée à bavarder.",
    },
    {
      id: "c7-q5",
      question: "Où se rassemblent les femmes le soir de l'Achoura pour chanter ?",
      choix: ["Au Msid", "Sur les terrasses", "Au souk", "Dans la rue"],
      reponseCorrecte: 1,
      explication: "Toutes les terrasses se remplissent de femmes qui chantent, avant que l'enfant ne retrouve sa boîte.",
    },
  ],
  8: [
    {
      id: "c8-q1",
      question: "Pourquoi le Msid change-t-il de lieu d'apprentissage dans ce chapitre ?",
      choix: [
        "Le Msid habituel est en travaux",
        "La chaleur pousse le fqih à déplacer la classe vers un vaste mausolée",
        "Le fqih déménage",
        "Trop d'élèves se sont inscrits",
      ],
      reponseCorrecte: 1,
      explication: "Ce nouveau lieu a un effet presque magique sur la mémoire du narrateur.",
    },
    {
      id: "c8-q2",
      question: "Pourquoi Maâlem Abdeslem se bat-il avec un courtier au souk des bijoutiers ?",
      choix: [
        "Le courtier l'insulte",
        "Le courtier tente de l'escroquer en changeant le prix des bracelets à la hausse",
        "Le courtier vole Fatma Bziouya",
        "Le courtier refuse de le servir",
      ],
      reponseCorrecte: 1,
      explication: "Cette malhonnêteté déclenche une bagarre qui chagrine profondément Lalla Zoubida.",
    },
    {
      id: "c8-q3",
      question: "Pourquoi Lalla Zoubida refuse-t-elle finalement les bracelets que son mari lui rapporte ?",
      choix: [
        "Ils ne lui plaisent pas",
        "Elle craint qu'ils portent malheur à la maison",
        "Ils sont trop chers",
        "Elle préfère une lampe à pétrole",
      ],
      reponseCorrecte: 1,
      explication: "Après la bagarre du souk, elle refuse les bracelets par superstition.",
    },
    {
      id: "c8-q4",
      question: "Qui accompagne Lalla Zoubida et son mari au souk des bijoutiers ?",
      choix: ["Rahma", "Fatma Bziouya", "Lalla Aïcha", "La Chouafa"],
      reponseCorrecte: 1,
      explication: "Fatma Bziouya rentre elle aussi chagrinée par la bagarre.",
    },
    {
      id: "c8-q5",
      question: "Qu'apprend Lalla Aïcha à Lalla Zoubida à la toute fin du chapitre ?",
      choix: [
        "Elle attend un enfant",
        "Son mari Moulay Larbi l'a abandonnée pour la fille d'Abderrahman le coiffeur",
        "Elle part vivre à la campagne",
        "Elle a retrouvé un travail",
      ],
      reponseCorrecte: 1,
      explication: "Ce nouveau malheur de Lalla Aïcha annonce le sujet du chapitre 11.",
    },
  ],
  9: [
    {
      id: "c9-q1",
      question: "Que fait Maâlem Abdeslem après avoir perdu tout son capital au souk ?",
      choix: [
        "Il emprunte de l'argent à un voisin",
        "Il part travailler comme moissonneur aux environs de Fès",
        "Il ouvre aussitôt une nouvelle boutique",
        "Il consulte un voyant",
      ],
      reponseCorrecte: 1,
      explication: "Après sa faillite, il décide d'aller moissonner pour redresser la situation familiale.",
    },
    {
      id: "c9-q2",
      question: "Qui aide à préparer des remèdes pendant que Sidi Mohammed est malade ?",
      choix: ["Le fqih", "Les voisines", "Le voyant Sidi El Arafi", "Driss El Aouad"],
      reponseCorrecte: 1,
      explication: "Inquiètes, les voisines n'hésitent pas à préparer des remèdes pour sa guérison.",
    },
    {
      id: "c9-q3",
      question: "Chez qui Lalla Zoubida se rend-elle un après-midi, laissant son fils seul à la maison ?",
      choix: ["Chez Rahma", "Chez Fatma Bziouya", "Chez Lalla Aïcha", "Chez la Chouafa"],
      reponseCorrecte: 2,
      explication: "Le narrateur passe alors des moments affreux à attendre son retour.",
    },
    {
      id: "c9-q4",
      question: "Que propose Lalla Aïcha à son amie pour se débarrasser de leurs ennuis ?",
      choix: [
        "Un pèlerinage à Sidi Ali Boughaleb",
        "Consulter le voyant Sidi El Arafi",
        "Aller voir le fqih",
        "Organiser un repas pour les pauvres",
      ],
      reponseCorrecte: 1,
      explication: "Cette proposition annonce la visite au voyant du chapitre suivant.",
    },
    {
      id: "c9-q5",
      question: "Sur quoi le narrateur s'attarde-t-il en évoquant l'absence de son père ?",
      choix: [
        "La valeur et l'importance d'un père dans une famille",
        "Les dangers de la campagne",
        "Le prix du blé",
        "La colère de sa mère",
      ],
      reponseCorrecte: 0,
      explication: "L'absence de Maâlem Abdeslem laisse un vide qui pousse l'enfant à cette réflexion.",
    },
  ],
  10: [
    {
      id: "c10-q1",
      question: "À quoi Sidi Mohammed compare-t-il le panier du voyant Sidi El Arafi ?",
      choix: ["À un coffre au trésor", "À sa propre boîte à merveilles", "À un sac du marché", "À rien de particulier"],
      reponseCorrecte: 1,
      explication: "Cette comparaison lui fait retrouver le sourire, malgré sa peur initiale.",
    },
    {
      id: "c10-q2",
      question: "Comment le voyant engage-t-il la discussion avec ses visiteurs ?",
      choix: [
        "Il lit dans une boule de cristal",
        "Il leur fait tirer un objet du panier",
        "Il leur pose directement des questions",
        "Il récite des versets du Coran",
      ],
      reponseCorrecte: 1,
      explication: "Chaque objet tiré du panier sert de point de départ à ses paroles rassurantes.",
    },
    {
      id: "c10-q3",
      question: "Qui se met à pleurer pendant la consultation, avant d'être réconfortée par le voyant ?",
      choix: ["Lalla Zoubida", "Lalla Aïcha", "Rahma", "Fatma Bziouya"],
      reponseCorrecte: 1,
      explication: "Lalla Aïcha pleure au fil du discours de l'aveugle, qui la réconforte.",
    },
    {
      id: "c10-q4",
      question: "Pourquoi Sidi Mohammed se cache-t-il dans le haïk de sa mère, dans la rue ?",
      choix: [
        "Il a peur d'un chien",
        "Il aperçoit le fqih et prend peur",
        "Il pleut soudainement",
        "Il voit un mendiant",
      ],
      reponseCorrecte: 1,
      explication: "Sa mère lui reproche alors son attitude, alors qu'il dansait un instant plus tôt.",
    },
    {
      id: "c10-q5",
      question: "Qu'apporte le messager envoyé par Maâlem Abdeslem à la fin du chapitre ?",
      choix: [
        "L'annonce de son retour immédiat",
        "Des nouvelles, des pièces de monnaie et des provisions",
        "Une lettre du fqih",
        "Un cadeau pour Sidi Mohammed",
      ],
      reponseCorrecte: 1,
      explication: "Ces nouvelles rendent Lalla Zoubida toute heureuse et excitée.",
    },
  ],
  11: [
    {
      id: "c11-q1",
      question: "Qui est Salama, qui arrive chez Lalla Aïcha ?",
      choix: [
        "Une voisine venue se plaindre",
        "La marieuse professionnelle qui avait organisé le mariage de Moulay Larbi",
        "La sœur de Lalla Aïcha",
        "Une mendiante",
      ],
      reponseCorrecte: 1,
      explication: "Sidi Mohammed fait d'elle un portrait dévalorisant, à la voix d'homme.",
    },
    {
      id: "c11-q2",
      question: "Pourquoi Salama vient-elle demander pardon à Lalla Aïcha ?",
      choix: [
        "Elle a médit d'elle",
        "C'est elle qui a organisé le mariage raté de Moulay Larbi avec la fille du coiffeur",
        "Elle a emprunté de l'argent sans le rendre",
        "Elle a cassé un objet chez elle",
      ],
      reponseCorrecte: 1,
      explication: "Elle reconnaît son erreur dans le choix de cette union malheureuse.",
    },
    {
      id: "c11-q3",
      question: "Que reproche-t-on surtout à la belle-mère de Moulay Larbi ?",
      choix: [
        "Elle vole de l'argent",
        "Elle se mêle des affaires de sa fille et l'incite à être trop exigeante",
        "Elle refuse de recevoir Moulay Larbi",
        "Elle insulte les voisines",
      ],
      reponseCorrecte: 1,
      explication: "Cette ingérence rend la vie de Moulay Larbi insupportable.",
    },
    {
      id: "c11-q4",
      question: "Qui confirme les propos de Salama en qualifiant la fille du coiffeur de « folle » ?",
      choix: ["Fatma Bziouya", "Zhour", "Rahma", "La Chouafa"],
      reponseCorrecte: 1,
      explication: "Zhour raconte à son tour les difficultés quotidiennes subies par Moulay Larbi.",
    },
    {
      id: "c11-q5",
      question: "Pourquoi une dispute éclate-t-elle entre Sidi Mohammed et une voisine ?",
      choix: [
        "Il a cassé un objet",
        "Il a oublié de fermer la porte des toilettes",
        "Il a insulté son fils",
        "Il a renversé le thé",
      ],
      reponseCorrecte: 1,
      explication: "La voisine lui adresse alors des épithètes dépréciatifs.",
    },
  ],
  12: [
    {
      id: "c12-q1",
      question: "Qui annonce à la famille, tout excitée, avoir vu Maâlem Abdeslem dans la rue ?",
      choix: ["Fatma Bziouya", "Zineb", "Lalla Aïcha", "Le fqih"],
      reponseCorrecte: 1,
      explication: "Zineb, partie faire une course, revient précipitamment porter la bonne nouvelle.",
    },
    {
      id: "c12-q2",
      question: "Que rapporte le père à son retour de voyage ?",
      choix: [
        "De l'argent uniquement",
        "Deux poulets, des œufs, du beurre, de l'huile et des olives",
        "Un cadeau pour son fils seulement",
        "Rien, il rentre les mains vides",
      ],
      reponseCorrecte: 1,
      explication: "Ce retour chargé de provisions comble de joie toute la maisonnée.",
    },
    {
      id: "c12-q3",
      question: "Qui monte voir Maâlem Abdeslem pour parler de la séparation de Moulay Larbi ?",
      choix: ["Le fqih", "Driss El Aouad", "Abdellah l'épicier", "Le voyant Sidi El Arafi"],
      reponseCorrecte: 1,
      explication: "Les deux hommes s'entretiennent de cette séparation entamée au chapitre 8.",
    },
    {
      id: "c12-q4",
      question: "Que décide de faire Sidi Mohammed en écoutant les chants des femmes de Dar Chouafa ?",
      choix: [
        "Apprendre à jouer du bendir",
        "Composer ses propres chansons",
        "Rejoindre le Msid plus tôt",
        "Écrire une lettre à son père",
      ],
      reponseCorrecte: 1,
      explication: "Il intègre même le nom d'une femme à son propre chant.",
    },
    {
      id: "c12-q5",
      question: "Sur quel geste le roman se referme-t-il, à la toute dernière ligne ?",
      choix: [
        "Le mariage de Moulay Larbi",
        "Le retour du narrateur à sa boîte à merveilles",
        "Le départ du fqih",
        "La mort de la Chouafa",
      ],
      reponseCorrecte: 1,
      explication: "Après le retour du père, le récit se clôt sur ce geste symbolique de l'enfant.",
    },
  ],
};
