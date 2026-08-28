import type { QuestionQuiz } from "@/lib/quizBoiteAMerveilles";

/**
 * Questions du quiz d'*Antigone*, organisées scène par scène — demandé
 * explicitement par l'utilisateur ("FAIS LES QUIZS DANS TOUTS LES
 * SCENES"), une fois le vrai texte scène par scène disponible (voir
 * les résumés en base, fournis par l'utilisateur). 5 questions par
 * scène (numero 2 à 22, "Scène 1" à "Scène 21"), 105 au total — pas de
 * quiz pour "Le mythe d'Œdipe" (numero=1) : ce n'est pas une scène de
 * la pièce (voir RecitContexte.tsx/ETAT.md), donc hors du périmètre
 * "toutes les scènes".
 *
 * ⚠️ Contenu entièrement rédigé par Claude — chaque question est
 * ancrée dans le résumé de la scène correspondante (fourni par
 * l'utilisateur, non modifié sur le fond) et/ou son lexique déjà en
 * base, mais la formulation des questions/réponses elle-même n'a pas
 * été fournie par l'utilisateur : à faire relire par un enseignant
 * avant usage en classe (même réserve que le quiz de La Boîte à
 * Merveilles, `lib/quizBoiteAMerveilles.ts`).
 *
 * Stocké en dur ici plutôt qu'en base, même contournement que
 * `lib/quizBoiteAMerveilles.ts` (pas de table quiz dédiée, pas de
 * connexion Postgres pour créer une migration).
 */
export const QUIZ_PAR_SCENE_ANTIGONE: Record<number, QuestionQuiz[]> = {
  // Scène 1 : Le Prologue
  2: [
    {
      id: "s1-q1",
      question: "Quel est le rôle du Prologue dans cette première scène ?",
      choix: [
        "Il raconte la jeunesse d'Antigone",
        "Il présente tous les personnages de la pièce",
        "Il annonce le mariage d'Antigone et d'Hémon",
        "Il juge Créon",
      ],
      reponseCorrecte: 1,
      explication: "Le Prologue présente tous les personnages de la pièce : Antigone, Ismène, Créon, Hémon, la Nourrice, le Chœur et les Gardes.",
    },
    {
      id: "s1-q2",
      question: "Que le Prologue annonce-t-il en plus des personnages ?",
      choix: [
        "Que l'histoire aura une fin heureuse",
        "Que les personnages vont vers un destin inévitable",
        "Que Créon va gracier Antigone",
        "Que Polynice va revenir vivant",
      ],
      reponseCorrecte: 1,
      explication: "Il annonce que l'histoire sera une tragédie et que les personnages vont vers un destin inévitable.",
    },
    {
      id: "s1-q3",
      question: "Le mot « tragédie » (lexique de la scène) désigne :",
      choix: [
        "Une pièce à la fin nécessairement malheureuse",
        "Une comédie légère",
        "Un simple débat politique",
        "Un poème d'amour",
      ],
      reponseCorrecte: 0,
      explication: "Une tragédie est une pièce de théâtre dont l'issue est fatale — annoncée dès le Prologue.",
    },
    {
      id: "s1-q4",
      question: "Dans le lexique de cette scène, que signifie « la fatalité » ?",
      choix: [
        "La chance",
        "Le destin inévitable auquel on ne peut échapper",
        "Un décret royal",
        "Un lieu de la pièce",
      ],
      reponseCorrecte: 1,
      explication: "La fatalité, c'est le caractère de ce qui est fixé d'avance et inévitable — exactement ce que le Prologue annonce.",
    },
    {
      id: "s1-q5",
      question: "Parmi ces personnages, lequel N'EST PAS présenté dans le Prologue ?",
      choix: ["Hémon", "La Nourrice", "Le Messager", "Le Chœur"],
      reponseCorrecte: 2,
      explication: "Le Messager n'apparaît que bien plus tard, pour annoncer le dénouement — il n'est pas cité parmi les personnages du Prologue.",
    },
  ],
  // Scène 2 : Antigone et la Nourrice
  3: [
    {
      id: "s2-q1",
      question: "À quel moment de la journée Antigone rentre-t-elle chez elle ?",
      choix: ["En pleine nuit", "À l'aube", "À midi", "Au coucher du soleil"],
      reponseCorrecte: 1,
      explication: "Antigone rentre chez elle à l'aube.",
    },
    {
      id: "s2-q2",
      question: "Que demande la Nourrice à Antigone ?",
      choix: ["Pourquoi elle pleure", "D'où elle vient", "Si elle a faim", "Où est Ismène"],
      reponseCorrecte: 1,
      explication: "La Nourrice lui demande d'où elle vient.",
    },
    {
      id: "s2-q3",
      question: "Antigone dit-elle la vérité à la Nourrice sur sa sortie ?",
      choix: ["Oui, immédiatement", "Non, elle ne lui dit pas la vérité", "Elle ment à moitié", "Elle refuse de répondre"],
      reponseCorrecte: 1,
      explication: "Antigone ne lui dit pas la vérité, alors qu'elle était sortie pour un motif grave.",
    },
    {
      id: "s2-q4",
      question: "Pourquoi Antigone était-elle réellement sortie ?",
      choix: [
        "Pour retrouver Hémon en secret",
        "Pour accomplir son projet d'enterrer son frère Polynice",
        "Pour parler à Créon",
        "Pour se promener",
      ],
      reponseCorrecte: 1,
      explication: "Elle était sortie pour accomplir son projet : enterrer son frère Polynice.",
    },
    {
      id: "s2-q5",
      question: "Le mot « une escapade » (lexique de la scène) désigne ici :",
      choix: [
        "Une sortie secrète et risquée",
        "Un long voyage officiel",
        "Une fête organisée par la Nourrice",
        "Un exercice militaire",
      ],
      reponseCorrecte: 0,
      explication: "Une escapade est une sortie furtive, sans autorisation — celle qu'a faite Antigone à l'aube.",
    },
  ],
  // Scène 3 : Antigone et Ismène
  4: [
    {
      id: "s3-q1",
      question: "Que cherche à faire Ismène dans cette scène ?",
      choix: [
        "Convaincre Antigone de désobéir davantage",
        "Convaincre Antigone de ne pas désobéir à Créon",
        "Dénoncer Antigone à Créon",
        "Partir avec Hémon",
      ],
      reponseCorrecte: 1,
      explication: "Ismène essaie de convaincre Antigone de ne pas désobéir à Créon.",
    },
    {
      id: "s3-q2",
      question: "Quelle est la principale crainte d'Ismène ?",
      choix: ["La pauvreté", "La mort", "La solitude", "Le déshonneur de la famille"],
      reponseCorrecte: 1,
      explication: "Elle a peur de la mort.",
    },
    {
      id: "s3-q3",
      question: "Que pense Ismène des deux sœurs face à Créon ?",
      choix: [
        "Qu'elles sont assez fortes pour le vaincre",
        "Qu'elles sont trop faibles pour lutter contre le roi",
        "Que Créon les soutient en secret",
        "Que Créon a déjà pardonné",
      ],
      reponseCorrecte: 1,
      explication: "Elle pense que les deux sœurs sont trop faibles pour lutter contre le roi.",
    },
    {
      id: "s3-q4",
      question: "Face aux arguments d'Ismène, quelle est la réaction d'Antigone ?",
      choix: [
        "Elle abandonne son projet",
        "Elle refuse d'abandonner son projet",
        "Elle demande l'avis de Créon",
        "Elle hésite sans se décider",
      ],
      reponseCorrecte: 1,
      explication: "Antigone refuse d'abandonner son projet, malgré les mises en garde de sa sœur.",
    },
    {
      id: "s3-q5",
      question: "Le mot « raisonnable » (lexique de la scène) qualifie plutôt :",
      choix: ["Antigone", "Ismène", "Le Messager", "Eurydice"],
      reponseCorrecte: 1,
      explication: "Ismène, qui plaide la prudence et la soumission à la loi, incarne l'attitude « raisonnable » face à l'intransigeance d'Antigone.",
    },
  ],
  // Scène 4 : Antigone et la Nourrice
  5: [
    {
      id: "s4-q1",
      question: "Sur quel ton Antigone parle-t-elle à sa Nourrice dans cette scène ?",
      choix: ["Avec colère", "Avec affection", "Avec indifférence", "Avec moquerie"],
      reponseCorrecte: 1,
      explication: "Antigone parle avec affection à sa Nourrice.",
    },
    {
      id: "s4-q2",
      question: "Que demande Antigone à la Nourrice ?",
      choix: [
        "De partir loin de Thèbes",
        "De prendre soin d'elle",
        "De convaincre Créon",
        "De prévenir Hémon",
      ],
      reponseCorrecte: 1,
      explication: "Elle lui demande de prendre soin d'elle.",
    },
    {
      id: "s4-q3",
      question: "Que semble faire Antigone sans le dire clairement ?",
      choix: [
        "Ses adieux à la Nourrice",
        "Une demande en mariage",
        "Un reproche à la Nourrice",
        "Une plaisanterie",
      ],
      reponseCorrecte: 0,
      explication: "Elle semble lui faire ses adieux sans lui révéler qu'elle risque de mourir.",
    },
    {
      id: "s4-q4",
      question: "Que cache Antigone à la Nourrice dans cette scène ?",
      choix: [
        "Son amour pour Hémon",
        "Qu'elle risque de mourir",
        "Qu'elle a peur du noir",
        "Qu'elle a déjà été arrêtée",
      ],
      reponseCorrecte: 1,
      explication: "Elle ne révèle pas à la Nourrice qu'elle risque de mourir.",
    },
    {
      id: "s4-q5",
      question: "Le mot « tendrement » (lexique de la scène) décrit surtout :",
      choix: [
        "La manière dont Antigone parle à sa Nourrice",
        "La manière dont Créon parle à Antigone",
        "La manière dont le Chœur s'exprime",
        "La manière dont les Gardes jouent aux cartes",
      ],
      reponseCorrecte: 0,
      explication: "« Tendrement » correspond bien au ton affectueux d'Antigone envers sa Nourrice dans cette scène.",
    },
  ],
  // Scène 5 : Antigone et Hémon
  6: [
    {
      id: "s5-q1",
      question: "Qui est Hémon pour Antigone ?",
      choix: ["Son frère", "Son fiancé", "Son cousin éloigné", "Un garde"],
      reponseCorrecte: 1,
      explication: "Antigone parle avec Hémon, son fiancé.",
    },
    {
      id: "s5-q2",
      question: "De quoi Antigone et Hémon parlent-ils principalement ?",
      choix: [
        "De la mort de Polynice",
        "De leur amour et de leur futur mariage",
        "De la politique de Créon",
        "Du Chœur",
      ],
      reponseCorrecte: 1,
      explication: "Ils évoquent leur amour et leur futur mariage.",
    },
    {
      id: "s5-q3",
      question: "Pourquoi Antigone est-elle émue pendant cette scène ?",
      choix: [
        "Parce qu'Hémon la quitte",
        "Parce qu'elle sait qu'elle ne pourra probablement pas vivre ce bonheur",
        "Parce que Créon les a séparés",
        "Parce qu'elle a peur d'Ismène",
      ],
      reponseCorrecte: 1,
      explication: "Elle est émue, car elle sait qu'elle ne pourra probablement pas vivre ce bonheur promis.",
    },
    {
      id: "s5-q4",
      question: "Le mot « un serment » (lexique de la scène) désigne :",
      choix: [
        "Une promesse solennelle",
        "Un décret royal",
        "Un lieu sacré",
        "Une punition",
      ],
      reponseCorrecte: 0,
      explication: "Un serment est une promesse solennelle — celle qu'échangent Antigone et Hémon en évoquant leur mariage.",
    },
    {
      id: "s5-q5",
      question: "Quelle scène précède directement « Antigone et Hémon » ?",
      choix: [
        "Scène 3 : Antigone et Ismène",
        "Scène 4 : Antigone et la Nourrice",
        "Scène 6 : Antigone se prépare",
        "Scène 1 : Le Prologue",
      ],
      reponseCorrecte: 1,
      explication: "La Scène 4 (Antigone et la Nourrice) précède directement la Scène 5 (Antigone et Hémon).",
    },
  ],
  // Scène 6 : Antigone se prépare
  7: [
    {
      id: "s6-q1",
      question: "Antigone est-elle seule dans cette scène ?",
      choix: ["Oui, elle est seule", "Non, avec Hémon", "Non, avec Ismène", "Non, avec Créon"],
      reponseCorrecte: 0,
      explication: "Antigone est seule et pense à son destin.",
    },
    {
      id: "s6-q2",
      question: "À quoi pense Antigone dans cette scène ?",
      choix: ["À son mariage", "À son destin", "À sa Nourrice", "Au Chœur"],
      reponseCorrecte: 1,
      explication: "Elle pense à son destin.",
    },
    {
      id: "s6-q3",
      question: "Malgré sa peur, quelle est l'attitude d'Antigone ?",
      choix: [
        "Elle renonce à son projet",
        "Elle reste décidée à accomplir son devoir envers son frère",
        "Elle demande de l'aide à Créon",
        "Elle s'enfuit de Thèbes",
      ],
      reponseCorrecte: 1,
      explication: "Malgré sa peur, elle reste décidée à accomplir son devoir envers son frère.",
    },
    {
      id: "s6-q4",
      question: "Le mot « le devoir » (lexique de la scène) renvoie ici :",
      choix: [
        "À une obligation qu'Antigone s'impose envers Polynice",
        "À une tâche donnée par Créon",
        "À un exercice scolaire",
        "À une dette financière",
      ],
      reponseCorrecte: 0,
      explication: "Le devoir d'Antigone envers son frère est justement ce qui la pousse à agir malgré le danger.",
    },
    {
      id: "s6-q5",
      question: "Quelle scène suit directement « Antigone se prépare » ?",
      choix: [
        "Scène 7 : Créon et le Garde",
        "Scène 5 : Antigone et Hémon",
        "Scène 10 : Antigone est arrêtée",
        "Scène 8 : Le Chœur",
      ],
      reponseCorrecte: 0,
      explication: "La Scène 7 (Créon et le Garde) suit directement la Scène 6.",
    },
  ],
  // Scène 7 : Créon et le Garde
  8: [
    {
      id: "s7-q1",
      question: "Que vient annoncer le Garde à Créon ?",
      choix: [
        "Qu'Antigone s'est enfuie",
        "Que quelqu'un a recouvert le corps de Polynice avec de la terre",
        "Qu'Ismène est absente",
        "Qu'Hémon veut le voir",
      ],
      reponseCorrecte: 1,
      explication: "Un Garde informe Créon que quelqu'un a recouvert le corps de Polynice avec de la terre, malgré son interdiction.",
    },
    {
      id: "s7-q2",
      question: "Comment réagit Créon à cette nouvelle ?",
      choix: ["Il est indifférent", "Il est très en colère", "Il en rit", "Il est soulagé"],
      reponseCorrecte: 1,
      explication: "Créon est très en colère.",
    },
    {
      id: "s7-q3",
      question: "Qu'ordonne Créon après cette annonce ?",
      choix: [
        "De relâcher la surveillance",
        "De trouver le coupable",
        "D'enterrer Polynice officiellement",
        "De convoquer Hémon",
      ],
      reponseCorrecte: 1,
      explication: "Créon ordonne de trouver le coupable.",
    },
    {
      id: "s7-q4",
      question: "Le mot « un guet » (lexique de la scène) désigne :",
      choix: [
        "Une surveillance discrète",
        "Un jugement royal",
        "Un enterrement",
        "Une prière",
      ],
      reponseCorrecte: 0,
      explication: "Le guet est une surveillance discrète — exactement ce que Créon va ordonner pour surprendre le coupable.",
    },
    {
      id: "s7-q5",
      question: "Qui a en réalité recouvert le corps de Polynice ?",
      choix: ["Ismène", "Antigone", "La Nourrice", "Le Chœur"],
      reponseCorrecte: 1,
      explication: "C'est Antigone qui, dans les scènes précédentes, avait annoncé son intention d'enterrer son frère.",
    },
  ],
  // Scène 8 : Le Chœur
  9: [
    {
      id: "s8-q1",
      question: "Qui intervient dans cette scène ?",
      choix: ["Le Messager", "Le Chœur", "La Nourrice", "Eurydice"],
      reponseCorrecte: 1,
      explication: "Le Chœur intervient dans cette scène.",
    },
    {
      id: "s8-q2",
      question: "Que dit le Chœur du conflit entre Antigone et Créon ?",
      choix: [
        "Qu'il peut encore être évité",
        "Qu'il est désormais inévitable",
        "Qu'il est déjà terminé",
        "Qu'il ne concerne qu'Ismène",
      ],
      reponseCorrecte: 1,
      explication: "Le Chœur explique que le conflit entre Antigone et Créon est désormais inévitable.",
    },
    {
      id: "s8-q3",
      question: "Que rappelle le Chœur dans cette intervention ?",
      choix: [
        "Le caractère comique de la situation",
        "Le caractère tragique de la situation",
        "Les lois de la cité",
        "L'enfance d'Antigone",
      ],
      reponseCorrecte: 1,
      explication: "Il rappelle le caractère tragique de la situation.",
    },
    {
      id: "s8-q4",
      question: "Le mot « le Chœur » (lexique de la Scène 1) désigne :",
      choix: [
        "Un simple garde du palais",
        "Le narrateur de la pièce, qui commente l'action",
        "La femme de Créon",
        "Le juge du procès d'Antigone",
      ],
      reponseCorrecte: 1,
      explication: "Le Chœur est le narrateur de la pièce (voir la fiche Personnages), qui commente et éclaire l'action pour le public.",
    },
    {
      id: "s8-q5",
      question: "Quelle fonction cette intervention du Chœur remplit-elle dans la construction de la pièce ?",
      choix: [
        "Elle fait avancer l'intrigue par un dialogue entre personnages",
        "Elle met en pause l'action pour souligner la fatalité tragique",
        "Elle annonce un dénouement heureux",
        "Elle introduit un nouveau personnage",
      ],
      reponseCorrecte: 1,
      explication: "Comme au théâtre antique, le Chœur suspend l'action pour commenter et souligner la fatalité qui pèse sur les personnages.",
    },
  ],
  // Scène 9 : Créon donne ses ordres
  10: [
    {
      id: "s9-q1",
      question: "Que demande Créon aux Gardes dans cette scène ?",
      choix: [
        "De libérer Antigone",
        "De surveiller le corps de Polynice",
        "De convoquer Ismène",
        "D'annoncer la nouvelle à Eurydice",
      ],
      reponseCorrecte: 1,
      explication: "Créon ordonne aux Gardes de surveiller le corps de Polynice.",
    },
    {
      id: "s9-q2",
      question: "Quel second ordre donne Créon aux Gardes ?",
      choix: [
        "Découvrir l'identité de la personne qui a désobéi",
        "Enterrer Polynice discrètement",
        "Arrêter Hémon",
        "Fermer les portes de Thèbes",
      ],
      reponseCorrecte: 0,
      explication: "Il leur ordonne de découvrir l'identité de la personne qui a osé désobéir.",
    },
    {
      id: "s9-q3",
      question: "Le mot « méconnaissable » (lexique de la scène) pourrait qualifier :",
      choix: [
        "Un corps abîmé, difficile à reconnaître",
        "Un décret bien connu de tous",
        "Un vêtement neuf",
        "Une chanson populaire",
      ],
      reponseCorrecte: 0,
      explication: "« Méconnaissable » qualifie ce qui a changé au point de ne plus être reconnaissable — ici, en lien avec le corps de Polynice exposé.",
    },
    {
      id: "s9-q4",
      question: "Le mot « arbitraire » (lexique de la scène) signifie :",
      choix: [
        "Fondé sur la seule volonté, sans justification objective",
        "Décidé par un vote démocratique",
        "Approuvé par le Chœur",
        "Écrit noir sur blanc dans la loi",
      ],
      reponseCorrecte: 0,
      explication: "Arbitraire qualifie une décision qui dépend du bon vouloir d'une seule personne — une critique possible du pouvoir de Créon.",
    },
    {
      id: "s9-q5",
      question: "Pourquoi Créon tient-il tant à retrouver le coupable ?",
      choix: [
        "Pour le récompenser",
        "Parce que désobéir à son décret revient à défier son autorité de roi",
        "Parce qu'il soupçonne Hémon",
        "Par simple curiosité",
      ],
      reponseCorrecte: 1,
      explication: "En tant que roi, Créon ne peut tolérer que son décret soit bravé sans réagir : c'est son autorité même qui est en jeu.",
    },
  ],
  // Scène 10 : Antigone est arrêtée
  11: [
    {
      id: "s10-q1",
      question: "Pourquoi Antigone retourne-t-elle près du corps de son frère ?",
      choix: [
        "Pour pleurer une dernière fois",
        "Pour terminer l'enterrement",
        "Pour parler aux Gardes",
        "Pour prévenir Créon elle-même",
      ],
      reponseCorrecte: 1,
      explication: "Antigone retourne près du corps de son frère pour terminer l'enterrement.",
    },
    {
      id: "s10-q2",
      question: "Que font les Gardes à ce moment-là ?",
      choix: ["Ils la laissent faire", "Ils la surprennent et l'arrêtent", "Ils s'enfuient", "Ils préviennent Ismène"],
      reponseCorrecte: 1,
      explication: "Les Gardes la surprennent et l'arrêtent.",
    },
    {
      id: "s10-q3",
      question: "Comment réagit Antigone face à son arrestation ?",
      choix: [
        "Elle cherche à fuir",
        "Elle ne cherche pas à fuir",
        "Elle se bat contre les Gardes",
        "Elle nie toute implication",
      ],
      reponseCorrecte: 1,
      explication: "Elle ne cherche pas à fuir.",
    },
    {
      id: "s10-q4",
      question: "Le mot « appréhender » (lexique de la scène) signifie ici :",
      choix: ["Comprendre", "Arrêter quelqu'un", "Craindre en secret", "Pardonner"],
      reponseCorrecte: 1,
      explication: "Dans ce contexte, appréhender signifie arrêter, capturer quelqu'un — ce que font les Gardes.",
    },
    {
      id: "s10-q5",
      question: "Cette arrestation confirme-t-elle les ordres donnés par Créon à la scène précédente ?",
      choix: [
        "Oui, les Gardes appliquent directement sa consigne de surveillance",
        "Non, elle a lieu sans lien avec Créon",
        "Non, Créon avait annulé son ordre",
        "Oui, mais uniquement par hasard",
      ],
      reponseCorrecte: 0,
      explication: "C'est bien la surveillance ordonnée par Créon (Scène 9) qui permet aux Gardes de surprendre Antigone.",
    },
  ],
  // Scène 11 : Antigone devant Créon
  12: [
    {
      id: "s11-q1",
      question: "Devant qui Antigone est-elle conduite dans cette scène ?",
      choix: ["Devant le Chœur", "Devant Créon", "Devant Ismène", "Devant Eurydice"],
      reponseCorrecte: 1,
      explication: "Antigone est conduite devant Créon.",
    },
    {
      id: "s11-q2",
      question: "Que reconnaît immédiatement Antigone ?",
      choix: [
        "Qu'elle s'est trompée de personne",
        "Avoir enterré Polynice",
        "Qu'elle regrette son geste",
        "Qu'Ismène l'a aidée",
      ],
      reponseCorrecte: 1,
      explication: "Elle reconnaît immédiatement avoir enterré Polynice.",
    },
    {
      id: "s11-q3",
      question: "Quelle attitude Antigone montre-t-elle après cet aveu ?",
      choix: ["Elle montre du regret", "Elle ne montre aucun regret", "Elle pleure sans parler", "Elle accuse Ismène"],
      reponseCorrecte: 1,
      explication: "Elle ne montre aucun regret.",
    },
    {
      id: "s11-q4",
      question: "Le mot « un aveu » (lexique de la Scène 2) désigne :",
      choix: [
        "Une reconnaissance de sa faute",
        "Un refus catégorique",
        "Une prière",
        "Un serment de mariage",
      ],
      reponseCorrecte: 0,
      explication: "Un aveu, c'est le fait de reconnaître une faute ou un acte — exactement ce que fait Antigone devant Créon.",
    },
    {
      id: "s11-q5",
      question: "Quel contraste cette scène installe-t-elle entre Antigone et le décret de Créon ?",
      choix: [
        "Antigone nie tout, en accord avec le décret",
        "Antigone assume ouvertement avoir désobéi au décret",
        "Antigone accuse Créon d'avoir menti",
        "Antigone ignore l'existence du décret",
      ],
      reponseCorrecte: 1,
      explication: "En avouant sans détour, Antigone assume pleinement sa désobéissance au décret royal, sans chercher à se disculper.",
    },
  ],
  // Scène 12 : Créon essaie de sauver Antigone
  13: [
    {
      id: "s12-q1",
      question: "Que tente Créon dans cette scène ?",
      choix: [
        "De convaincre Antigone de nier son acte",
        "De la condamner immédiatement",
        "De convoquer Hémon pour l'accuser aussi",
        "De faire intervenir le Chœur",
      ],
      reponseCorrecte: 0,
      explication: "Créon tente de convaincre Antigone de nier son acte.",
    },
    {
      id: "s12-q2",
      question: "Pourquoi Créon cherche-t-il à sauver Antigone ?",
      choix: [
        "Parce qu'il l'aime en secret",
        "Parce qu'elle est la fiancée de son fils Hémon",
        "Parce qu'Eurydice le lui demande",
        "Parce que le Chœur l'exige",
      ],
      reponseCorrecte: 1,
      explication: "Comme elle est la fiancée de son fils Hémon, il veut éviter de la condamner à mort.",
    },
    {
      id: "s12-q3",
      question: "Que veut éviter Créon en agissant ainsi ?",
      choix: [
        "De perdre la confiance du Chœur",
        "De la condamner à mort",
        "De devoir affronter Ismène",
        "De perdre son trône",
      ],
      reponseCorrecte: 1,
      explication: "Il veut éviter de la condamner à mort.",
    },
    {
      id: "s12-q4",
      question: "Le mot « la clémence » (lexique de la scène) désigne :",
      choix: [
        "L'indulgence, le pardon accordé par une autorité",
        "La colère du roi",
        "Une punition sévère",
        "Un mensonge",
      ],
      reponseCorrecte: 0,
      explication: "La clémence est l'indulgence dont Créon voudrait ici faire preuve envers Antigone, malgré son propre décret.",
    },
    {
      id: "s12-q5",
      question: "Cette tentative de Créon révèle-t-elle un roi entièrement inflexible ?",
      choix: [
        "Oui, il refuse tout compromis dès le début",
        "Non, il cherche d'abord une issue qui épargnerait Antigone",
        "Non, il abandonne aussitôt son décret",
        "Oui, il condamne Antigone sans lui parler",
      ],
      reponseCorrecte: 1,
      explication: "Avant d'appliquer la loi jusqu'au bout, Créon cherche une porte de sortie pour épargner Antigone — signe qu'il n'est pas un simple tyran sans nuance.",
    },
  ],
  // Scène 13 : Le grand débat entre Antigone et Créon
  14: [
    {
      id: "s13-q1",
      question: "Quel argument Créon avance-t-il pour justifier ses décisions ?",
      choix: [
        "Qu'un roi doit parfois prendre des décisions difficiles pour l'ordre de la cité",
        "Qu'il n'a aucun pouvoir réel",
        "Que les dieux lui dictent tout",
        "Que le peuple l'a élu",
      ],
      reponseCorrecte: 0,
      explication: "Créon explique qu'un roi doit parfois prendre des décisions difficiles pour maintenir l'ordre dans la cité.",
    },
    {
      id: "s13-q2",
      question: "Comment Antigone répond-elle à cette logique ?",
      choix: [
        "Elle l'accepte finalement",
        "Elle refuse cette logique",
        "Elle demande à en discuter avec Ismène",
        "Elle change de sujet",
      ],
      reponseCorrecte: 1,
      explication: "Antigone refuse cette logique.",
    },
    {
      id: "s13-q3",
      question: "Que refuse Antigone en particulier ?",
      choix: [
        "De vivre en acceptant des compromis",
        "De reconnaître Créon comme roi",
        "De parler à Créon",
        "De pleurer son frère",
      ],
      reponseCorrecte: 0,
      explication: "Elle affirme qu'elle ne veut pas vivre en acceptant des compromis.",
    },
    {
      id: "s13-q4",
      question: "Le mot « un compromis » (lexique de la scène) désigne :",
      choix: [
        "Un accord obtenu en renonçant à une part de ses exigences",
        "Une victoire totale et sans concession",
        "Une condamnation à mort",
        "Un serment de mariage",
      ],
      reponseCorrecte: 0,
      explication: "Un compromis suppose de renoncer à une partie de ses principes — exactement ce qu'Antigone refuse ici.",
    },
    {
      id: "s13-q5",
      question: "Ce débat oppose deux logiques : lesquelles ?",
      choix: [
        "La raison d'État de Créon contre l'absolu moral d'Antigone",
        "La richesse contre la pauvreté",
        "La jeunesse contre la vieillesse",
        "La ville contre la campagne",
      ],
      reponseCorrecte: 0,
      explication: "C'est le cœur du débat : la raison d'État défendue par Créon face à l'exigence morale absolue d'Antigone, qui refuse tout compromis.",
    },
  ],
  // Scène 14 : Antigone apprend la vérité
  15: [
    {
      id: "s14-q1",
      question: "Que révèle Créon à Antigone dans cette scène ?",
      choix: [
        "Qu'Ismène l'a trahie",
        "Que les deux frères n'étaient pas aussi différents qu'on le disait",
        "Qu'Hémon ne l'aime plus",
        "Qu'il va gracier Antigone",
      ],
      reponseCorrecte: 1,
      explication: "Créon révèle à Antigone que les deux frères, Étéocle et Polynice, n'étaient pas aussi différents qu'on le disait.",
    },
    {
      id: "s14-q2",
      question: "Qui sont « les deux frères » évoqués dans cette scène ?",
      choix: ["Créon et Hémon", "Étéocle et Polynice", "Le Prologue et le Messager", "Aucun garde nommé"],
      reponseCorrecte: 1,
      explication: "Il s'agit d'Étéocle et Polynice, les frères d'Antigone.",
    },
    {
      id: "s14-q3",
      question: "Cette révélation change-t-elle la décision d'Antigone ?",
      choix: [
        "Oui, elle change complètement d'avis",
        "Non, elle refuse toujours de changer d'avis",
        "Elle hésite sans se décider",
        "Elle demande un délai",
      ],
      reponseCorrecte: 1,
      explication: "Malgré cela, Antigone refuse toujours de changer d'avis.",
    },
    {
      id: "s14-q4",
      question: "En quoi cette révélation fragilise-t-elle la légitimité du décret de Créon ?",
      choix: [
        "Elle ne la fragilise pas du tout",
        "Elle montre que la distinction héros/traître entre les deux frères était arbitraire",
        "Elle prouve que Polynice était innocent de tout",
        "Elle prouve qu'Étéocle était le vrai traître",
      ],
      reponseCorrecte: 1,
      explication: "Si les deux frères se valaient moralement, le décret qui honore l'un et interdit d'enterrer l'autre perd une partie de sa justification.",
    },
    {
      id: "s14-q5",
      question: "Que montre le refus d'Antigone malgré cette vérité troublante ?",
      choix: [
        "Que son geste dépasse la seule question de la culpabilité de Polynice",
        "Qu'elle n'avait pas compris ce que Créon lui disait",
        "Qu'elle regrette déjà son acte",
        "Qu'elle veut maintenant accuser Étéocle",
      ],
      reponseCorrecte: 0,
      explication: "Antigone ne fonde pas son geste sur l'innocence de Polynice mais sur un devoir et une conviction personnelle, plus forts qu'un simple fait nouveau.",
    },
  ],
  // Scène 15 : Ismène veut partager la faute
  16: [
    {
      id: "s15-q1",
      question: "Que vient faire Ismène dans cette scène ?",
      choix: [
        "Elle vient supplier Créon de pardonner",
        "Elle vient et veut mourir avec sa sœur",
        "Elle vient accuser Antigone",
        "Elle vient chercher Hémon",
      ],
      reponseCorrecte: 1,
      explication: "Ismène arrive et veut mourir avec sa sœur.",
    },
    {
      id: "s15-q2",
      question: "Que prétend Ismène pour partager le sort d'Antigone ?",
      choix: [
        "Qu'elle a participé à l'acte",
        "Qu'elle est innocente",
        "Que c'est elle la coupable, seule",
        "Qu'elle a supplié Créon en vain",
      ],
      reponseCorrecte: 0,
      explication: "Elle affirme qu'elle a participé à l'acte.",
    },
    {
      id: "s15-q3",
      question: "Pourquoi Antigone refuse-t-elle qu'Ismène meure avec elle ?",
      choix: [
        "Parce qu'Ismène n'a pas eu le courage de l'aider quand elle en avait besoin",
        "Parce qu'elle déteste sa sœur",
        "Parce que Créon l'interdit",
        "Parce qu'Ismène est déjà condamnée pour autre chose",
      ],
      reponseCorrecte: 0,
      explication: "Antigone refuse, car Ismène n'a pas eu le courage de l'aider lorsqu'elle en avait besoin.",
    },
    {
      id: "s15-q4",
      question: "Le mot « intransigeant » (lexique de la scène) pourrait qualifier :",
      choix: [
        "L'attitude d'Antigone, qui refuse tout compromis, même avec sa sœur",
        "L'attitude bienveillante de la Nourrice",
        "L'attitude hésitante d'Ismène au début de la pièce",
        "L'attitude neutre du Chœur",
      ],
      reponseCorrecte: 0,
      explication: "Intransigeant qualifie quelqu'un qui ne cède sur rien — ici, Antigone refuse même le sacrifice tardif de sa sœur.",
    },
    {
      id: "s15-q5",
      question: "Ce refus d'Antigone confirme quel trait de son caractère déjà vu à la Scène 3 ?",
      choix: [
        "Sa dépendance à l'avis d'Ismène",
        "Sa cohérence : elle agit seule, comme elle l'avait annoncé à Ismène",
        "Son indifférence envers sa sœur",
        "Son désir de partager toutes les responsabilités",
      ],
      reponseCorrecte: 1,
      explication: "Dès la Scène 3, Antigone avait refusé l'aide d'Ismène ; elle reste fidèle à ce choix en refusant qu'elle meure à ses côtés maintenant.",
    },
  ],
  // Scène 16 : Hémon et Créon
  17: [
    {
      id: "s16-q1",
      question: "Que fait Hémon en apprenant la condamnation d'Antigone ?",
      choix: [
        "Il accepte la décision sans réagir",
        "Il supplie son père de la sauver",
        "Il s'enfuit avec elle",
        "Il attaque un Garde",
      ],
      reponseCorrecte: 1,
      explication: "Hémon apprend la condamnation d'Antigone et supplie son père de la sauver.",
    },
    {
      id: "s16-q2",
      question: "Comment Créon répond-il à la supplique de son fils ?",
      choix: ["Il accepte de céder", "Il refuse de céder", "Il demande un délai", "Il consulte le Chœur"],
      reponseCorrecte: 1,
      explication: "Créon refuse de céder.",
    },
    {
      id: "s16-q3",
      question: "Dans quel état Hémon quitte-t-il son père ?",
      choix: ["Calme et résigné", "Désespéré et en colère", "Indifférent", "Joyeux"],
      reponseCorrecte: 1,
      explication: "Hémon quitte son père désespéré et en colère.",
    },
    {
      id: "s16-q4",
      question: "Le mot « supplier » (lexique de la Scène 15) illustre bien l'attitude de qui, ici ?",
      choix: ["De Créon envers Hémon", "D'Hémon envers Créon", "Du Chœur envers Créon", "D'Antigone envers Ismène"],
      reponseCorrecte: 1,
      explication: "C'est Hémon qui supplie son père Créon d'épargner Antigone.",
    },
    {
      id: "s16-q5",
      question: "Cette scène annonce surtout :",
      choix: [
        "Une réconciliation prochaine entre père et fils",
        "Une rupture profonde entre Créon et Hémon",
        "Le pardon accordé à Antigone",
        "Le retour d'Ismène auprès de Créon",
      ],
      reponseCorrecte: 1,
      explication: "Le refus de Créon et la colère désespérée d'Hémon annoncent une rupture qui aura des conséquences tragiques.",
    },
  ],
  // Scène 17 : Antigone et le Garde
  18: [
    {
      id: "s17-q1",
      question: "Qu'attend Antigone dans cette scène ?",
      choix: ["Le pardon de Créon", "Son destin", "Le retour d'Hémon", "Un jugement du Chœur"],
      reponseCorrecte: 1,
      explication: "Antigone attend son destin et parle avec le Garde.",
    },
    {
      id: "s17-q2",
      question: "Comment le Garde se comporte-t-il face à la situation tragique d'Antigone ?",
      choix: [
        "Il est bouleversé et compatissant",
        "Il reste simple et indifférent",
        "Il tente de la libérer",
        "Il pleure avec elle",
      ],
      reponseCorrecte: 1,
      explication: "Celui-ci reste simple et indifférent à la tragédie.",
    },
    {
      id: "s17-q3",
      question: "Que montre cette scène chez Antigone ?",
      choix: ["Sa colère", "Sa solitude", "Sa joie", "Son indécision"],
      reponseCorrecte: 1,
      explication: "Cette scène montre la solitude d'Antigone.",
    },
    {
      id: "s17-q4",
      question: "Le mot « indifférent » (lexique de la Scène 21) décrit ici surtout :",
      choix: ["Antigone", "Le Garde", "Hémon", "Ismène"],
      reponseCorrecte: 1,
      explication: "C'est le Garde qui reste indifférent, contrastant avec la détresse d'Antigone dans cette scène.",
    },
    {
      id: "s17-q5",
      question: "Pourquoi ce contraste entre l'indifférence du Garde et le drame d'Antigone est-il marquant ?",
      choix: [
        "Il souligne l'isolement d'Antigone jusque dans ses derniers instants de liberté",
        "Il montre que le Garde est en réalité très proche d'Antigone",
        "Il annonce que le Garde va la libérer",
        "Il prouve que le Garde connaît bien Créon",
      ],
      reponseCorrecte: 0,
      explication: "Ce décalage renforce la solitude d'Antigone, seule face à son destin, même entourée d'un gardien qui ne la comprend pas.",
    },
  ],
  // Scène 18 : Le Chœur et Créon
  19: [
    {
      id: "s18-q1",
      question: "Que tente encore le Chœur dans cette scène ?",
      choix: [
        "De condamner Antigone lui-même",
        "De faire réfléchir Créon",
        "De convaincre Hémon de partir",
        "De prévenir Eurydice",
      ],
      reponseCorrecte: 1,
      explication: "Le Chœur essaie encore de faire réfléchir Créon.",
    },
    {
      id: "s18-q2",
      question: "Quelle question le Chœur pose-t-il à Créon ?",
      choix: [
        "S'il est possible de sauver Antigone",
        "S'il regrette d'être roi",
        "S'il aime encore Eurydice",
        "S'il doit convoquer Ismène",
      ],
      reponseCorrecte: 0,
      explication: "Il lui demande s'il est possible de sauver Antigone.",
    },
    {
      id: "s18-q3",
      question: "Que répond Créon à cette question ?",
      choix: [
        "Qu'il va la gracier",
        "Qu'il est désormais trop tard",
        "Qu'il va demander l'avis d'Hémon",
        "Qu'il ne sait pas encore",
      ],
      reponseCorrecte: 1,
      explication: "Créon répond qu'il est désormais trop tard.",
    },
    {
      id: "s18-q4",
      question: "Le mot « implacable » (lexique de la scène) qualifie ici surtout :",
      choix: [
        "L'engrenage tragique qui entraîne les personnages vers la mort",
        "La joie du dénouement",
        "La bonté d'Antigone",
        "La jeunesse d'Hémon",
      ],
      reponseCorrecte: 0,
      explication: "Implacable, comme « un engrenage » (autre mot du lexique de la scène), décrit la mécanique tragique désormais impossible à arrêter.",
    },
    {
      id: "s18-q5",
      question: "Cette scène marque un tournant : lequel ?",
      choix: [
        "Le moment où tout espoir de sauver Antigone disparaît",
        "Le moment où Créon change d'avis",
        "Le moment où Antigone est libérée",
        "Le moment où le Chœur abandonne son rôle de narrateur",
      ],
      reponseCorrecte: 0,
      explication: "En affirmant qu'il est trop tard, Créon ferme la dernière porte de sortie évoquée par le Chœur : le sort d'Antigone est scellé.",
    },
  ],
  // Scène 19 : Antigone part vers la mort
  20: [
    {
      id: "s19-q1",
      question: "Vers quel lieu Antigone est-elle conduite ?",
      choix: ["Le palais de Créon", "La grotte", "Le Msid", "Le sanctuaire de Delphes"],
      reponseCorrecte: 1,
      explication: "Antigone est conduite vers la grotte où elle doit être enfermée vivante.",
    },
    {
      id: "s19-q2",
      question: "Que doit-il advenir d'Antigone dans cette grotte ?",
      choix: [
        "Elle doit y être enfermée vivante",
        "Elle doit y être exécutée publiquement",
        "Elle doit y attendre sa libération",
        "Elle doit y rencontrer Créon en secret",
      ],
      reponseCorrecte: 0,
      explication: "Elle doit être enfermée vivante dans la grotte.",
    },
    {
      id: "s19-q3",
      question: "Comment Antigone accueille-t-elle son destin dans cette scène ?",
      choix: [
        "Elle le refuse jusqu'au bout",
        "Elle fait ses adieux et l'accepte courageusement",
        "Elle supplie qu'on la libère",
        "Elle accuse Créon violemment",
      ],
      reponseCorrecte: 1,
      explication: "Elle fait ses adieux et accepte courageusement son destin.",
    },
    {
      id: "s19-q4",
      question: "Le mot « emmurer » (lexique de la scène) signifie :",
      choix: [
        "Enfermer quelqu'un derrière un mur, sans issue",
        "Construire une nouvelle maison",
        "Décorer un mur",
        "Détruire une prison",
      ],
      reponseCorrecte: 0,
      explication: "Emmurer, c'est enfermer derrière un mur sans possibilité de sortir — le sort réservé à Antigone dans la grotte.",
    },
    {
      id: "s19-q5",
      question: "Le lieu « la grotte » associé à cette scène est-il cohérent avec l'unité de lieu classique de la tragédie ?",
      choix: [
        "Oui : la pièce se limite essentiellement au palais de Créon et à ce lieu proche",
        "Non : l'action se déplace dans toute la Grèce",
        "Non : chaque scène a un décor totalement différent",
        "Oui, mais uniquement parce que le Chœur voyage beaucoup",
      ],
      reponseCorrecte: 0,
      explication: "Antigone respecte la tradition classique de l'unité de lieu : l'action reste concentrée autour du palais de Créon, jusqu'à cette grotte toute proche.",
    },
  ],
  // Scène 20 : Le Messager
  21: [
    {
      id: "s20-q1",
      question: "Qu'annonce le Messager dans cette scène ?",
      choix: [
        "Qu'Antigone a été libérée",
        "Qu'Antigone s'est suicidée dans sa prison",
        "Que Créon a changé d'avis trop tard",
        "Qu'Hémon a fui la ville",
      ],
      reponseCorrecte: 1,
      explication: "Le Messager annonce qu'Antigone s'est suicidée dans sa prison.",
    },
    {
      id: "s20-q2",
      question: "Que fait Hémon en découvrant le corps d'Antigone ?",
      choix: [
        "Il reste silencieux et s'en va",
        "Il tente d'attaquer Créon",
        "Il accuse le Chœur",
        "Il part chercher Ismène",
      ],
      reponseCorrecte: 1,
      explication: "Hémon, en découvrant son corps, tente d'attaquer Créon.",
    },
    {
      id: "s20-q3",
      question: "Que fait Hémon ensuite ?",
      choix: [
        "Il se suicide à son tour",
        "Il s'enfuit de Thèbes",
        "Il se rend aux Gardes",
        "Il demande pardon à Créon",
      ],
      reponseCorrecte: 0,
      explication: "Il se suicide à son tour.",
    },
    {
      id: "s20-q4",
      question: "Le mot « se poignarder » (lexique de la scène) décrit ici le geste de qui ?",
      choix: ["De Créon", "D'Hémon", "Du Messager", "Du Chœur"],
      reponseCorrecte: 1,
      explication: "C'est Hémon qui se poignarde après avoir découvert la mort d'Antigone.",
    },
    {
      id: "s20-q5",
      question: "Quel est le rôle traditionnel du Messager dans une tragédie, illustré ici ?",
      choix: [
        "Il raconte hors scène les événements les plus violents",
        "Il prend les décisions à la place du roi",
        "Il juge les personnages",
        "Il remplace le Chœur pour toute la pièce",
      ],
      reponseCorrecte: 0,
      explication: "Comme dans la tragédie antique, le Messager rapporte au public des événements violents (mort d'Antigone, geste d'Hémon) survenus hors de la scène.",
    },
  ],
  // Scène 21 : L'Épilogue
  22: [
    {
      id: "s21-q1",
      question: "Quelle autre mort Créon apprend-il dans l'Épilogue ?",
      choix: ["Celle d'Ismène", "Celle de sa femme Eurydice", "Celle du Chœur", "Celle du Garde"],
      reponseCorrecte: 1,
      explication: "Créon apprend également que sa femme Eurydice s'est suicidée après la mort de leur fils.",
    },
    {
      id: "s21-q2",
      question: "Pourquoi Eurydice se suicide-t-elle ?",
      choix: [
        "Après la mort de leur fils Hémon",
        "Après la mort d'Antigone uniquement",
        "Par peur de Créon",
        "Après une dispute avec Ismène",
      ],
      reponseCorrecte: 0,
      explication: "Elle se suicide après la mort de leur fils.",
    },
    {
      id: "s21-q3",
      question: "Dans quel état Créon reste-t-il à la fin de la pièce ?",
      choix: [
        "Seul et malheureux, mais il doit continuer à gouverner",
        "Vengé et satisfait",
        "Il abdique aussitôt",
        "Réconcilié avec Hémon",
      ],
      reponseCorrecte: 0,
      explication: "Créon reste seul et malheureux, mais il doit continuer à gouverner.",
    },
    {
      id: "s21-q4",
      question: "Le mot « un épilogue » (lexique de la scène) désigne :",
      choix: [
        "L'introduction d'une pièce",
        "La partie finale d'une œuvre, qui referme l'histoire",
        "Un personnage secondaire",
        "Un lieu de la pièce",
      ],
      reponseCorrecte: 1,
      explication: "Un épilogue est la partie finale d'une œuvre, qui referme l'histoire après le dénouement — exactement cette dernière scène.",
    },
    {
      id: "s21-q5",
      question: "Que suggère la formule finale « la tragédie est terminée » sur le sort de Créon ?",
      choix: [
        "Que lui aussi meurt à la fin",
        "Qu'il survit à tous les siens, condamné à continuer de vivre et de régner malgré son deuil",
        "Qu'il est finalement pardonné par les dieux",
        "Qu'il quitte définitivement le pouvoir",
      ],
      reponseCorrecte: 1,
      explication: "Contrairement à Antigone, Hémon et Eurydice, Créon survit — mais seul, dans un deuil total, condamné à continuer de « gouverner » : une fin tragique à sa manière.",
    },
  ],
};
