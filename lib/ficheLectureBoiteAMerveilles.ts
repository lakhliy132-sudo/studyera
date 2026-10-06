/**
 * Fiche de lecture (carte d'identité de l'œuvre, biographie de
 * l'auteur, structure, thèmes, style) de "La Boîte à Merveilles" —
 * demandée explicitement par l'utilisateur : "dans la partie de oeuvre
 * boite a merveilles ajoute moi une partie de fiche de lecture".
 *
 * ⚠️ Contenu entièrement rédigé par Claude, à partir de connaissances
 * générales sur l'œuvre et son auteur (repères de publication, genre,
 * biographie d'Ahmed Sefrioui...), pas fourni par l'utilisateur — à
 * faire relire par un enseignant avant usage en classe, même réserve
 * que le lexique/les sujets/le quiz (pas de colonne `statut` sur ce
 * genre de contenu pour porter l'avertissement, donc uniquement dans
 * ce commentaire et dans ETAT.md).
 *
 * Stocké en dur ici plutôt qu'en base : les colonnes `biographie_fr`/
 * `biographie_ar` existent bien sur `oeuvres` (voir
 * types/base-de-donnees.ts) mais ne couvrent qu'une partie de cette
 * fiche (la biographie de l'auteur) — il n'existe aucune colonne pour
 * le genre, le mouvement, le narrateur, la structure ou le style.
 * Plutôt que de répartir ce contenu entre une base à moitié adaptée et
 * un fichier TypeScript pour le reste, tout est regroupé ici — même
 * contournement, pour la même raison (migration Supabase impossible à
 * appliquer directement dans ce projet), que `lib/personnagesParChapitre.ts`
 * et `lib/quizBoiteAMerveilles.ts`.
 */
export interface FicheIdentite {
  genre: string;
  datePublication: string;
  editeur: string;
  mouvement: string;
  narrateur: string;
  cadreSpatioTemporel: string;
  structure: string;
  registre: string;
}

/**
 * Biographie de l'auteur sous forme de fiche structurée (tableau) —
 * demandé explicitement par l'utilisateur ("FAIS MOI LA BIOGRAPHIE DE
 * L AUTEUR SOUS FORME D UN TABLEU ELEGANT"), à la place du paragraphe
 * continu utilisé jusque-là.
 */
export interface BiographieAuteur {
  nomComplet: string;
  naissance: string;
  deces: string;
  profession: string;
  mouvement: string;
  oeuvresPrincipales: string[];
  distinction: string;
  /** Portrait de l'auteur dans `public/auteurs/`, seulement quand une
   * vraie photo a été fournie. Absent, le médaillon aux initiales prend
   * la place : on ne met jamais un visage qui ne serait pas le sien. */
  photo?: string;
}

export interface FicheLecture {
  identite: FicheIdentite;
  biographieAuteur: BiographieAuteur;
  structureDetail: string;
  /** Plus affiché sur `OngletFicheLecture` (retiré à la demande
   * explicite de l'utilisateur, "enleve la case du theme et enjeux" —
   * ce thème a déjà son propre onglet complet, "Thèmes et enjeux").
   * Gardé ici au cas où ce serait réutilisé ailleurs plus tard. */
  themesPrincipaux: string[];
  styleEcriture: string;
  /** Les quatre points de l'encadré "À retenir pour l'examen", ajouté
   * d'après une maquette de l'utilisateur ("TU PEUX ME FAIRE COMME
   * CA"). Chaque point reprend ce que la fiche dit déjà (identité,
   * structure, style), sans fait nouveau ; les mots entre `**` sont
   * mis en gras. Même réserve que le reste de la fiche : à faire
   * relire par un enseignant. */
  aRetenir: string[];
}

export const FICHE_LECTURE_BOITE_A_MERVEILLES: FicheLecture = {
  identite: {
    genre: "Récit autobiographique (roman d'enfance)",
    datePublication: "1954",
    editeur: "Éditions du Seuil",
    mouvement: "Littérature marocaine d'expression française — œuvre fondatrice du genre",
    narrateur: "Narrateur-personnage adulte, à la première personne (Sidi Mohammed)",
    cadreSpatioTemporel: "La médina de Fès, au début du XXe siècle",
    structure: "12 chapitres, sans titres dans l'édition originale, au découpage épisodique",
    registre: "Lyrique et nostalgique",
  },
  biographieAuteur: {
    nomComplet: "Ahmed Sefrioui",
    naissance: "1915, à Fès",
    deces: "2004, à Rabat",
    profession: "Écrivain, journaliste, conservateur de musée (musée Al Batha de Fès)",
    mouvement: "Pionnier de la littérature marocaine d'expression française",
    oeuvresPrincipales: [
      "La Boîte à Merveilles (1954)",
      "La Maison de servitude (1973)",
      "Le Jardin des sortilèges (1989)",
    ],
    distinction: "Grand Prix littéraire du Maroc (1954), pour La Boîte à Merveilles",
    // Photo fournie par l'utilisateur ("voila ajoute le"), recadrée
    // sur le visage.
    photo: "/auteurs/ahmed-sefrioui.jpg",
  },
  structureDetail:
    "Le roman ne suit pas une intrigue linéaire à proprement parler : il s'organise en une succession de tableaux et de souvenirs d'enfance, souvent rythmés par les événements du quotidien (une dispute, une maladie, une fête religieuse comme l'Achoura, une visite) plutôt que par une action continue. Cette construction épisodique, très proche de la mémoire elle-même, renforce l'impression d'un album de souvenirs feuilleté par le narrateur adulte plutôt que d'une histoire racontée d'un seul tenant.",
  themesPrincipaux: [
    "La solitude de l'enfant unique",
    "L'imaginaire enfantin comme refuge (la boîte à merveilles)",
    "Le monde des femmes et la vie domestique à Dar Chouafa",
    "La religiosité populaire et la superstition",
    "Les difficultés sociales et financières de la famille",
    "La nostalgie d'un Fès traditionnel disparu",
  ],
  styleEcriture:
    "L'écriture de Sefrioui se distingue par sa dimension sensorielle : couleurs, odeurs et bruits de la médina de Fès sont omniprésents, restitués à hauteur d'un regard d'enfant. Le français, langue d'écriture, s'enrichit de mots et d'expressions arabes conservés tels quels (Msid, fqih, haïk, Achoura...), donnant au texte sa couleur locale. Le ton, tour à tour tendre, mélancolique et empreint d'une nostalgie assumée, fait de ce roman un texte autant sensoriel que narratif.",
  aRetenir: [
    "Un **récit autobiographique** : le narrateur adulte se souvient de son enfance à Fès.",
    "Une **construction épisodique** : des tableaux et des souvenirs plutôt qu'une intrigue continue.",
    "Une écriture **sensorielle** : couleurs, odeurs et bruits de la médina, vus à hauteur d'enfant.",
    "Registre **lyrique et nostalgique** ; des mots arabes gardés tels quels (Msid, fqih, Achoura).",
  ],
};
