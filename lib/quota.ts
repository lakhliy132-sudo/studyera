/**
 * Nombre maximal de corrections de copie gratuites par élève et par
 * jour. Valeur provisoire codée en dur : aucune table de configuration
 * n'existe encore pour la rendre ajustable (par offre, par période...).
 * Même logique que FILIERE_ACTUELLE (lib/filiere.ts) : centralisée ici
 * pour n'avoir qu'un seul endroit à changer plus tard.
 */
export const QUOTA_QUOTIDIEN_MAX = 3;
