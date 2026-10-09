/**
 * Types d'erreur que renvoie le correcteur (lib/correcteur.ts), avec le
 * libellé et la couleur qui les distinguent sur la page de correction.
 *
 * Couleurs fixes, comme celles des catégories d'événements : elles
 * codent une nature d'erreur, pas l'accent du site, et restent les
 * mêmes dans toutes les palettes. Hors sujet en rouge, syntaxe en
 * orange, orthographe en violet, comme sur la maquette de
 * l'utilisateur.
 */
const TYPES: Record<string, { libelle: string; couleur: string }> = {
  "hors sujet": { libelle: "Hors sujet", couleur: "#e11d48" },
  contenu: { libelle: "Contenu", couleur: "#ea580c" },
  "méthode": { libelle: "Méthode", couleur: "#0891b2" },
  syntaxe: { libelle: "Syntaxe", couleur: "#f59e0b" },
  grammaire: { libelle: "Grammaire", couleur: "#2563eb" },
  orthographe: { libelle: "Orthographe", couleur: "#7c3aed" },
  vocabulaire: { libelle: "Vocabulaire", couleur: "#db2777" },
  ponctuation: { libelle: "Ponctuation", couleur: "#0d9488" },
};

const cle = (type: string) => type.trim().toLowerCase().replace(/-/g, " ").replace("methode", "méthode");

export function couleurErreur(type: string): string {
  return TYPES[cle(type)]?.couleur ?? "#64748b";
}

export function libelleErreur(type: string): string {
  const connu = TYPES[cle(type)];
  if (connu) return connu.libelle;
  const t = type.trim();
  return t ? t.charAt(0).toUpperCase() + t.slice(1) : "Autre";
}

export function estHorsSujet(type: string): boolean {
  return cle(type) === "hors sujet";
}

/** Les erreurs de langue, par opposition au fond et à la méthode. */
export function estErreurDeLangue(type: string): boolean {
  return ["orthographe", "grammaire", "syntaxe", "vocabulaire", "ponctuation"].includes(cle(type));
}
