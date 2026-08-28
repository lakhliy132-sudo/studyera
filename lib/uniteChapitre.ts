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
  /** "CH." — abrégé utilisé sur les petits badges (lexique, lieux...).
   * Sans effet quand `numeroDejaDansTitre` est vrai : `libelleChapitreCourt`
   * utilise alors directement `titre_fr`, voir plus bas. */
  abrege: string;
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
   * `SommaireChapitres.tsx`, `libelleChapitre` et `libelleChapitreCourt`
   * ci-dessous. */
  numeroDejaDansTitre: boolean;
}

export function libelleUniteChapitre(slug: string): LibelleUniteChapitre {
  return SLUGS_EN_SCENES.has(slug)
    ? { singulier: "Scène", pluriel: "Scènes", abrege: "SC.", duUnite: "de la scène", numeroDejaDansTitre: true }
    : { singulier: "Chapitre", pluriel: "Chapitres", abrege: "CH.", duUnite: "du chapitre", numeroDejaDansTitre: false };
}

interface ChapitreMinimal {
  numero: number;
  titre_fr: string;
}

/** Libellé complet d'un chapitre pour un lien/une navigation ("Chapitre
 * 4" ou, pour Antigone, directement son titre puisqu'il contient déjà
 * l'ordinal — "Scène 3", "Prologue"...). Centralise la logique déjà
 * répétée dans `/oeuvres/[slug]/[numero]/page.tsx` pour éviter les
 * divergences entre appels. */
export function libelleChapitre(chapitre: ChapitreMinimal, unite: LibelleUniteChapitre): string {
  return unite.numeroDejaDansTitre ? chapitre.titre_fr : `${unite.singulier} ${chapitre.numero}`;
}

/** Version courte pour un petit badge de carte ("CH. 4" ou, pour
 * Antigone, "SCÈNE 3"/"PROLOGUE" en majuscules à partir du titre —
 * jamais "SC. {numero}", qui redonnerait le même doublon incohérent
 * que `numeroDejaDansTitre` documente : le numéro de rangée en base
 * (1-23) ne correspond pas au numéro de la scène elle-même. Utilisé
 * par `OngletLexique.tsx`/`OngletLieux.tsx` pour le badge de chaque
 * mot/lieu. */
export function libelleChapitreCourt(chapitre: ChapitreMinimal, unite: LibelleUniteChapitre): string {
  return unite.numeroDejaDansTitre ? chapitre.titre_fr.toUpperCase() : `${unite.abrege} ${chapitre.numero}`;
}
