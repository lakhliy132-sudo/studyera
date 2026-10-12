import { isValidElement, type ReactNode } from "react";

/** Texte brut d'un nœud React (un titre Markdown rendu), pour
 * reconnaître par exemple les titres « Exercice N ». */
export function texteDe(noeud: ReactNode): string {
  if (typeof noeud === "string" || typeof noeud === "number") return String(noeud);
  if (Array.isArray(noeud)) return noeud.map(texteDe).join("");
  if (isValidElement<{ children?: ReactNode }>(noeud)) return texteDe(noeud.props.children);
  return "";
}

/** Classes du conteneur d'un cours : la consigne d'un exercice (le
 * paragraphe juste après un titre « Exercice N », marqué
 * `data-exercice`) dans une autre couleur que le cours — « les
 * consignes d'exercices avec autre couleur ». `--color-consigne` est
 * dérivée de la palette, voir app/globals.css. */
export const CLASSES_CONSIGNES =
  "[&_h3[data-exercice]+p]:font-semibold [&_h3[data-exercice]+p]:text-[var(--color-consigne)]";

export function estTitreExercice(enfants: ReactNode): boolean {
  return /^exercice\b/i.test(texteDe(enfants).trim());
}
