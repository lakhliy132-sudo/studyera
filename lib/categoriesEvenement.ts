/**
 * Catégories des événements que l'élève ajoute dans son calendrier.
 * Module sans dépendance serveur, pour être lu à la fois par les pages
 * (accueil, "À venir") et par le planning du calendrier, qui est un
 * composant client. Le `cle` doit rester aligné sur la contrainte CHECK
 * de la table (migration 20260929000000_evenements_eleve.sql).
 *
 * Couleurs reprises de la dernière maquette du calendrier ("FAIT MOI CA
 * DEJA") : contrôle en rouge, devoir en orange, révision dans la couleur
 * du site (bleu par défaut). Les deux catégories que la maquette ne
 * montre pas restent lisibles si un événement les utilise déjà.
 */
export const CATEGORIES_EVENEMENT = [
  { cle: "controle", libelle: "Contrôle", couleur: "#e11d48" },
  { cle: "devoir", libelle: "Devoir", couleur: "#f59e0b" },
  { cle: "revision", libelle: "Révision", couleur: "var(--color-primary)" },
  { cle: "rappel", libelle: "Rappel", couleur: "#8b5cf6" },
  { cle: "autre", libelle: "Autre", couleur: "#64748b" },
] as const;

export type CategorieEvenement = (typeof CATEGORIES_EVENEMENT)[number]["cle"];

/** Les trois catégories proposées à la saisie, comme sur la maquette. */
export const CATEGORIES_SAISIE: CategorieEvenement[] = ["controle", "devoir", "revision"];

export function couleurCategorie(categorie: string): string {
  return CATEGORIES_EVENEMENT.find((c) => c.cle === categorie)?.couleur ?? "var(--color-primary)";
}

export function libelleCategorie(categorie: string): string {
  return CATEGORIES_EVENEMENT.find((c) => c.cle === categorie)?.libelle ?? "Autre";
}
