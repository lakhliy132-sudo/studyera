/**
 * Questions du quiz "La Boîte à Merveilles" — demandé explicitement par
 * l'utilisateur ("ajoute... une partie de quiz dans la barre").
 *
 * ⚠️ Contenu entièrement rédigé par Claude, à partir des résumés et
 * fiches de chapitres déjà écrits cette session — pas fourni par
 * l'utilisateur, à faire relire par un enseignant avant usage en
 * classe (même réserve que les résumés/lexique/sujets ajoutés
 * précédemment). Stocké en dur ici plutôt qu'en base : contrairement
 * aux résumés/personnages/lexique/sujets (qui passent par le pipeline
 * Excel), un vrai quiz aurait besoin d'une nouvelle table Supabase
 * (questions, choix, bonne réponse), ce qui demande une migration à
 * appliquer manuellement dans ce projet (voir l'avertissement en tête
 * d'ETAT.md pour la migration admin, toujours en attente des jours
 * plus tard) — pas un chemin fiable pour un besoin "tout de suite".
 * Mêmes contournement et logique que `personnagesParChapitre.ts`.
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

export const QUIZ_BOITE_A_MERVEILLES: QuestionQuiz[] = [
  {
    id: "narrateur",
    question: "Qui est le narrateur de La Boîte à Merveilles ?",
    choix: ["Sidi Mohammed", "Maâlem Abdeslem", "Le fqih", "Driss El Aouad"],
    reponseCorrecte: 0,
    explication:
      "Sidi Mohammed, devenu adulte, raconte les souvenirs de son enfance solitaire à Fès.",
  },
  {
    id: "metier-pere",
    question: "Quel est le métier du père, Maâlem Abdeslem ?",
    choix: ["Coiffeur", "Tisserand", "Épicier", "Voyant"],
    reponseCorrecte: 1,
    explication: "Maâlem Abdeslem est tisserand, d'origine montagnarde.",
  },
  {
    id: "voyante",
    question: "Comment s'appelle la voyante qui habite au rez-de-chaussée de Dar Chouafa ?",
    choix: ["Lalla Aïcha", "La Chouafa (tante Kenza)", "Lalla Fatoum", "Rahma"],
    reponseCorrecte: 1,
    explication:
      "C'est elle qui donne son nom à la maison, en organisant chaque mois un rituel qui trouble l'enfant.",
  },
  {
    id: "fin-chapitre-1",
    question: "Quel événement clôt le premier chapitre ?",
    choix: [
      "La mort du coiffeur",
      "Une dispute entre Lalla Zoubida et Rahma à propos de la lessive",
      "Le mariage de Moulay Larbi",
      "La disparition de Zineb",
    ],
    reponseCorrecte: 1,
    explication:
      "La dispute autour du jour de lessive dégénère en bagarre, et l'enfant s'évanouit devant cette violence.",
  },
  {
    id: "pelerinage",
    question: "Où Lalla Zoubida et Lalla Aïcha se rendent-elles en pèlerinage au chapitre 2 ?",
    choix: [
      "Au sanctuaire de Sidi Ali Boughaleb",
      "À la Kissaria",
      "Au souk des bijoutiers",
      "Chez le voyant Sidi El Arafi",
    ],
    reponseCorrecte: 0,
    explication:
      "Elles s'y rendent pour que Lalla Zoubida se débarrasse de sa migraine — Sidi Mohammed s'y fait griffer par un chat.",
  },
  {
    id: "zineb-perdue",
    question: "Qui perd sa fille Zineb, avant de la retrouver dans un asile ?",
    choix: ["Lalla Zoubida", "Rahma", "Fatma Bziouya", "Lalla Aïcha"],
    reponseCorrecte: 1,
    explication:
      "Rahma perd un temps sa fille en se rendant chez sa sœur Khadija, avant de la retrouver à Dar Kitoun.",
  },
  {
    id: "lampe-petrole",
    question: "Quel objet Lalla Zoubida découvre-t-elle avec émerveillement chez Fatma Bziouya ?",
    choix: ["Un bracelet", "Une lampe à pétrole", "Un panier", "Une chaînette en or"],
    reponseCorrecte: 1,
    explication:
      "Éblouie par cette lampe, elle finit par convaincre son mari que les bougies ne sont plus utiles.",
  },
  {
    id: "achoura",
    question: "Quelle fête religieuse est célébrée aux chapitres 6 et 7 ?",
    choix: ["L'Aïd al-Fitr", "L'Achoura", "Le Mawlid", "Le Ramadan"],
    reponseCorrecte: 1,
    explication:
      "Les préparatifs mobilisent tout le Msid et la famille, avant la journée de fête elle-même.",
  },
  {
    id: "mort-coiffeur",
    question: "Qui meurt et bouleverse profondément le narrateur au chapitre 5 ?",
    choix: ["Le fqih", "Sidi Mohammed Ben Taher, le coiffeur", "Maâlem Abdeslem", "L'oncle Othmane"],
    reponseCorrecte: 1,
    explication:
      "Après avoir assisté à ses honneurs funèbres, Sidi Mohammed fait des cauchemars et développe une peur de la mort.",
  },
  {
    id: "faillite",
    question: "Que fait Maâlem Abdeslem après avoir fait faillite ?",
    choix: [
      "Il ouvre une nouvelle boutique",
      "Il part travailler comme moissonneur",
      "Il consulte un voyant",
      "Il quitte définitivement la famille",
    ],
    reponseCorrecte: 1,
    explication: "Il part travailler comme moissonneur aux environs de Fès pour redresser la situation.",
  },
  {
    id: "voyant",
    question: "Qui aide Lalla Zoubida et Lalla Aïcha à se réconforter au chapitre 10 ?",
    choix: ["Le fqih", "Sidi El Arafi, le voyant aveugle", "Salama, la marieuse", "Abdellah l'épicier"],
    reponseCorrecte: 1,
    explication:
      "Ses paroles, données à travers des objets tirés d'un panier, bouleversent et rassurent profondément les deux femmes.",
  },
  {
    id: "fin-roman",
    question: "Sur quoi se referme le roman, à la toute fin du chapitre 12 ?",
    choix: [
      "Le retour du père de son voyage",
      "Le retour du narrateur à sa boîte à merveilles",
      "Le mariage de Moulay Larbi",
      "La mort de La Chouafa",
    ],
    reponseCorrecte: 1,
    explication:
      "Après le retour du père, le roman s'achève sur le geste du narrateur retournant à sa boîte à merveilles.",
  },
];
