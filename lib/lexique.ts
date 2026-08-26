import type { EntreeLexique } from "@/types/base-de-donnees";

/**
 * Normalisation d'un mot pour le faire correspondre entre le texte
 * d'un chapitre et une entrée `lexique.mot`. Insensible à la casse.
 * Retire aussi un article de tête, dans deux formes :
 * - élidé et collé ("l'angoisse" -> "angoisse", comme dans la maquette
 *   de référence)
 * - séparé par une espace, tel que saisi dans `lexique.mot` pour la
 *   plupart des entrées réelles ("une chouafa" -> "chouafa", "un fqih"
 *   -> "fqih", "le Msid" -> "msid")
 *
 * Volontairement simple : ne gère pas les expressions à plusieurs mots
 * restantes après retrait de l'article ("le bain maure" -> "bain
 * maure", non trouvable dans un texte token par token) ni les accords
 * (singulier/pluriel, conjugaisons) entre le texte et l'entrée de
 * lexique. Suffisant pour la majorité des entrées, qui sont un article
 * + un nom au singulier. Voir components/MotLexique.tsx et
 * components/FicheChapitre.tsx, les deux appelants.
 */
export function normaliserMot(mot: string): string {
  return mot
    .toLowerCase()
    .trim()
    .replace(/^(une?|les?|des?|du)\s+/i, "")
    .replace(/^[a-zàâäéèêëïîôöùûüç]['’]/i, "")
    .replace(/[^\p{L}-]/gu, "");
}

/** Index des entrées de lexique par mot normalisé, pour un lookup en
 * O(1) lors du découpage d'un texte. */
export function indexerLexique(entrees: EntreeLexique[]): Map<string, EntreeLexique> {
  return new Map(entrees.map((entree) => [normaliserMot(entree.mot), entree]));
}
