import type { FicheLecture } from "@/lib/ficheLectureBoiteAMerveilles";

/**
 * Fiche de lecture d'"Antigone" (Jean Anouilh) — demandée explicitement
 * par l'utilisateur ("fais moi fiche de lecture et personnage lexique
 * d antigone"). Même structure que
 * `lib/ficheLectureBoiteAMerveilles.ts` (voir ce fichier pour le détail
 * des réserves : contenu entièrement rédigé par Claude à partir de
 * connaissances générales sur l'œuvre et son auteur, à faire relire par
 * un enseignant avant usage en classe, stocké en dur pour la même
 * raison — pas de colonne en base pour le genre/mouvement/narrateur/
 * structure/style).
 */
export const FICHE_LECTURE_ANTIGONE: FicheLecture = {
  identite: {
    genre: "Tragédie moderne (réécriture d'un mythe antique)",
    datePublication: "1944",
    editeur: "Éditions de la Table Ronde",
    mouvement: "Théâtre du XXe siècle, inspiré de la tragédie grecque antique",
    narrateur: "Théâtre : pas de narrateur, mais un Prologue et un Chœur qui commentent l'action",
    cadreSpatioTemporel: "Thèbes antique, dans une mise en scène volontairement intemporelle",
    structure: "Pièce en un acte, sans découpage en actes ni en scènes",
    registre: "Tragique, teinté d'ironie et de désinvolture propres au style d'Anouilh",
  },
  biographieAuteur: {
    nomComplet: "Jean Anouilh",
    naissance: "1910, à Bordeaux",
    deces: "1987, à Lausanne (Suisse)",
    profession: "Dramaturge, metteur en scène",
    mouvement: "Théâtre du XXe siècle",
    oeuvresPrincipales: [
      "Antigone (1944)",
      "Le Voyageur sans bagage (1937)",
      "L'Alouette (1953)",
    ],
    distinction: "L'une des pièces françaises du XXe siècle les plus jouées dans le monde",
    // Photo fournie par l'utilisateur ("ajouter cette photo de jean
    // anouil").
    photo: "/auteurs/jean-anouilh.jpg",
  },
  structureDetail:
    "Écrite et créée en pleine Occupation allemande (1944), la pièce reprend le mythe antique de Sophocle mais l'inscrit dans une mise en scène volontairement intemporelle : costumes de cour antiques et objets modernes (les gardes jouent aux cartes, fument, parlent argot) se côtoient. Sans découpage en actes ni en scènes, l'action se déroule en continu, encadrée par les interventions du Prologue à l'ouverture et du Chœur à plusieurs reprises, qui commentent l'inéluctabilité de la tragédie en train de se jouer.",
  themesPrincipaux: [
    "Le conflit entre la loi individuelle et la raison d'État",
    "La fatalité tragique",
    "La révolte face au pouvoir",
    "Le choix entre le bonheur et la fidélité à soi-même",
    "La solitude du héros tragique",
  ],
  styleEcriture:
    "Anouilh mêle le grandiose du mythe antique à un langage résolument moderne et parfois familier (les gardes échangent des propos triviaux), créant un contraste qui accentue la dimension intemporelle de la tragédie. Les dialogues, vifs et incisifs, alternent avec les interventions plus lyriques du Chœur, dans un style dépouillé qui va à l'essentiel de l'affrontement entre Antigone et Créon.",
  aRetenir: [
    "Une **réécriture moderne** du mythe de Sophocle, créée en pleine Occupation (1944).",
    "Une pièce **en un seul acte**, encadrée par le Prologue et le Chœur qui la commentent.",
    "Un **contraste** voulu : le mythe grandiose, dit dans une langue moderne et parfois familière.",
    "Registre **tragique**, teinté d'ironie ; au cœur, l'affrontement entre Antigone et Créon.",
  ],
};
