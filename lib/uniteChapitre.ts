/**
 * Antigone est structurée en "scènes" plutôt qu'en "chapitres" —
 * demandé explicitement par l'utilisateur ("dans antigone change le
 * nom de chapitre par scene"). La table `chapitres` et toutes les
 * routes (`/oeuvres/[slug]/[numero]`, `recupererChapitresOeuvre`...)
 * continuent d'utiliser "chapitre" comme terme générique/technique —
 * seul le libellé AFFICHÉ change selon l'œuvre, via cette fonction.
 *
 * Pas de colonne dédiée en base pour porter cette distinction (même
 * limite déjà documentée pour `ROLES_PRINCIPAUX` dans
 * `OngletPersonnages.tsx`) : mappage codé en dur par slug, à étendre
 * si une 3e œuvre a un jour besoin d'un autre terme encore (« partie »,
 * « acte »...).
 */
const SLUGS_EN_SCENES = new Set(["antigone"]);

export interface LibelleUniteChapitre {
  singulier: string;
  pluriel: string;
  /** "du chapitre" / "de la scène" — contraction déjà accordée en
   * genre, pour des phrases du type "Fiche {duUnite}" sans avoir à
   * gérer l'accord "du"/"de la" à chaque appel. */
  duUnite: string;
  /** `true` quand `chapitres.titre_fr` contient déjà l'ordinal (ex.
   * "Scène 1", "Prologue") : les cartes/badges qui affichent
   * normalement "{singulier} {numero}" à côté du titre doivent alors
   * n'afficher QUE le titre, sous peine de doublon incohérent (ex.
   * badge "Scène 3" à côté du titre "Scène 1", le numéro d'ordre en
   * base ne correspondant plus au numéro de la scène elle-même à
   * cause du Prologue/Mythe d'Œdipe qui précèdent). Voir
   * `SommaireChapitres.tsx`. */
  numeroDejaDansTitre: boolean;
}

export function libelleUniteChapitre(slug: string): LibelleUniteChapitre {
  return SLUGS_EN_SCENES.has(slug)
    ? { singulier: "Scène", pluriel: "Scènes", duUnite: "de la scène", numeroDejaDansTitre: true }
    : { singulier: "Chapitre", pluriel: "Chapitres", duUnite: "du chapitre", numeroDejaDansTitre: false };
}
