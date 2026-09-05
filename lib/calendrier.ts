/**
 * Génération d'une grille de calendrier mensuel — utilisée par
 * /calendrier (app/(public)/calendrier/page.tsx). Pure fonction de
 * date, aucune donnée Supabase : la page n'affiche pour l'instant
 * aucun événement (voir le commentaire de la page), seulement la
 * grille du mois avec le jour courant repéré.
 */

export interface JourCalendrier {
  date: Date;
  /** `false` pour les cases de remplissage avant le 1er ou après le
   * dernier jour du mois (semaine toujours complète, 7 colonnes). */
  dansLeMois: boolean;
  estAujourdHui: boolean;
}

/** Grille du mois de `date`, semaines de 7 jours (lundi → dimanche,
 * convention française), en semaines complètes incluant les jours du
 * mois précédent/suivant nécessaires pour compléter la première et la
 * dernière semaine. */
export function genererGrilleMois(date: Date): JourCalendrier[][] {
  const annee = date.getFullYear();
  const mois = date.getMonth();

  const premierJourMois = new Date(annee, mois, 1);
  // getDay() : 0 = dimanche ... 6 = samedi. Convertit en index
  // "lundi = 0 ... dimanche = 6" pour une semaine à la française.
  const decalageDebut = (premierJourMois.getDay() + 6) % 7;

  const dernierJourMois = new Date(annee, mois + 1, 0);
  const decalageFin = (7 - ((dernierJourMois.getDay() + 6) % 7) - 1) % 7;

  const debutGrille = new Date(annee, mois, 1 - decalageDebut);
  const nombreJours = decalageDebut + dernierJourMois.getDate() + decalageFin;

  const aujourdHui = new Date();
  const jours: JourCalendrier[] = [];

  for (let i = 0; i < nombreJours; i++) {
    const jourDate = new Date(debutGrille);
    jourDate.setDate(debutGrille.getDate() + i);

    jours.push({
      date: jourDate,
      dansLeMois: jourDate.getMonth() === mois,
      estAujourdHui:
        jourDate.getFullYear() === aujourdHui.getFullYear() &&
        jourDate.getMonth() === aujourdHui.getMonth() &&
        jourDate.getDate() === aujourdHui.getDate(),
    });
  }

  const semaines: JourCalendrier[][] = [];
  for (let i = 0; i < jours.length; i += 7) {
    semaines.push(jours.slice(i, i + 7));
  }
  return semaines;
}

export const JOURS_SEMAINE_COURT = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
