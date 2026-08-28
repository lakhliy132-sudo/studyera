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

export interface FicheLecture {
  identite: FicheIdentite;
  biographieAuteur: string;
  structureDetail: string;
  /** Plus affiché sur `OngletFicheLecture` (retiré à la demande
   * explicite de l'utilisateur, "enleve la case du theme et enjeux" —
   * ce thème a déjà son propre onglet complet, "Thèmes et enjeux").
   * Gardé ici au cas où ce serait réutilisé ailleurs plus tard. */
  themesPrincipaux: string[];
  styleEcriture: string;
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
  biographieAuteur:
    "Ahmed Sefrioui naît à Fès en 1915 et meurt à Rabat en 2004. Considéré comme le pionnier de la littérature marocaine d'expression française, il publie La Boîte à Merveilles en 1954, pour lequel il reçoit le Grand Prix littéraire du Maroc. Il est aussi l'auteur du Jardin des sortilèges (1989) et de La Maison de servitude (1973). Journaliste puis conservateur de musée (notamment au musée Al Batha de Fès), Sefrioui puise dans ses souvenirs d'enfance fassie la matière de son œuvre la plus connue, restée depuis un texte de référence dans les programmes scolaires marocains.",
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
};
