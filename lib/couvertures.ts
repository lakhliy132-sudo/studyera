/** Couverture de chaque œuvre : les fichiers de `public/couvertures`,
 * dont le nom reprend le slug de l'œuvre. Partagé par la carte
 * "Reprends ta lecture" et par le bloc "Au programme cette année" du
 * tableau de bord, refaits ensemble à la demande de l'utilisateur ("j
 * ai pas aimé ce modele comme ca").
 *
 * Table explicite plutôt qu'un chemin déduit du slug : une œuvre sans
 * fichier retombe ainsi sur une icône, au lieu d'afficher une image
 * cassée. */
export const COUVERTURES_OEUVRES: Record<string, string> = {
  antigone: "/couvertures/antigone.png",
  "boite-a-merveilles": "/couvertures/boite-a-merveilles.png",
  "dernier-jour-condamne": "/couvertures/dernier-jour-condamne.png",
};

/** Couleur d'accent de chaque œuvre — filet de la carte, barre de
 * progression et pastille du tableau de bord. Ajoutée à la demande de
 * l'utilisateur ("ajoute un peunn de couleur") : les trois œuvres se
 * distinguent d'un coup d'œil au lieu d'être trois cartes bleues
 * identiques. Une œuvre absente retombe sur le bleu du site. */
export const COULEURS_OEUVRES: Record<string, string> = {
  antigone: "var(--color-matiere-histoire-geo)",
  "boite-a-merveilles": "var(--color-matiere-arabe)",
  "dernier-jour-condamne": "var(--color-matiere-islamique)",
};

export function couleurOeuvre(slug: string): string {
  return COULEURS_OEUVRES[slug] ?? "var(--color-primary)";
}
