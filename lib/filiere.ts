/**
 * Filière de l'élève, codée en dur pour l'instant : `profils.filiere`
 * n'existe pas encore en base (voir ETAT.md, section "manques"). Toutes
 * les pages qui doivent filtrer du contenu par filière (/oeuvres,
 * /tableau-de-bord, ...) importent cette constante plutôt que de
 * répéter la valeur littérale chacune de leur côté : le jour où
 * `profils.filiere` existera, il n'y aura qu'un seul endroit à changer
 * (et le typage forcera à mettre à jour tous les appelants).
 */
export const FILIERE_ACTUELLE = "1bac";
