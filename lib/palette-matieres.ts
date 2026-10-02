/** Couleur d'accent de chaque matière, relevée sur la maquette fournie
 * par l'utilisateur pour /matieres : rose pour le français, violet pour
 * l'arabe, jaune pour l'histoire-géo, vert d'eau pour l'éducation
 * islamique.
 *
 * Distinctes des tokens `--color-matiere-*` (app/globals.css), qui
 * traitent le français en bleu et l'histoire-géo en orange et servent
 * au reste du site.
 *
 * Seul l'accent est une valeur fixe : fonds, bordures et pastilles en
 * sont dérivés par `color-mix` avec les tokens du thème, pour que la
 * page suive le mode sombre au lieu de rester claire.
 */
export const ACCENTS_MATIERES: Record<string, string> = {
  francais: "#e8447f",
  arabe: "#7c3aed",
  "histoire-geo": "#e0a413",
  "education-islamique": "#0fb39b",
};

export function accentMatiere(slug: string): string {
  return ACCENTS_MATIERES[slug] ?? "var(--color-primary)";
}

/** Fond d'une carte de matière : la surface du thème, juste teintée. */
export function fondMatiere(accent: string): string {
  return `color-mix(in srgb, ${accent} 9%, var(--color-surface))`;
}

export function bordureMatiere(accent: string): string {
  return `color-mix(in srgb, ${accent} 26%, var(--color-border))`;
}

/** Pastille pâle derrière l'illustration, et taches décoratives. */
export function pastilleMatiere(accent: string): string {
  return `color-mix(in srgb, ${accent} 22%, var(--color-surface))`;
}

/** Couleur de matière utilisée hors de /matieres : les tokens
 * `--color-matiere-*` d'app/globals.css, c'est-à-dire la teinte que
 * porte déjà la page d'un cours (bandeau, titres de section,
 * sommaire). Une page de liste de matière et les cours qu'elle ouvre
 * partagent ainsi la même couleur, au lieu de passer du bleu générique
 * à la couleur de la matière d'un clic à l'autre. */
export function couleurMatiere(slug: string): string {
  const tokens: Record<string, string> = {
    francais: "var(--color-matiere-francais)",
    arabe: "var(--color-matiere-arabe)",
    "histoire-geo": "var(--color-matiere-histoire-geo)",
    "education-islamique": "var(--color-matiere-islamique)",
  };
  return tokens[slug] ?? "var(--color-primary)";
}
