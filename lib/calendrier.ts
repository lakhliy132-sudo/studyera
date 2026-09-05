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

export interface SessionExamen {
  /** Nom de l'événement, affiché dans la liste "Événements à venir"
   * (ex. "Examen régional", "Session de rattrapage"). */
  titre: string;
  /** Précision affichée dans le panneau "Examens" (ex. "Session
   * ordinaire") — distinct de `titre` : la maquette de référence
   * affiche les deux avec des libellés légèrement différents selon
   * l'endroit. */
  libelle: string;
  debut: Date;
  fin: Date;
}

/**
 * Examen régional de la 1ère année du bac (matière/filière ciblée par
 * tout le site, voir FILIERE_ACTUELLE dans lib/filiere.ts — les élèves
 * de 1ère bac passent le régional, pas le national, qui concerne la
 * 2ème année) — demandé explicitement par l'utilisateur ("juste a cote
 * fais la date d examen regional au maroc").
 *
 * Dates de la session 2026-2027 (les seules disponibles à l'heure où
 * ceci est écrit — l'année scolaire courante), sourcées via recherche
 * web plutôt qu'inventées (voir la consigne du projet sur les
 * informations factuelles) : rapportées par 9rayti.com comme venant
 * de la note ministérielle relative à l'organisation de l'année
 * scolaire 2026-2027 (session ordinaire 28-29 mai 2027, rattrapage
 * 28-29 juin 2027) — https://www.9rayti.com/actualite/calendrier-examens-scolaires-maroc.
 * Une seule source trouvée pour cette année précise (les autres sites
 * consultés ne couvraient encore que la session 2025-2026, déjà
 * passée) : à re-vérifier auprès du ministère à l'approche de la date
 * si une note plus récente la modifie — voir le lien "Source" affiché
 * sur la page /calendrier, pointant vers men.gov.ma.
 *
 * ⚠️ Cette date change chaque année scolaire : à mettre à jour l'année
 * prochaine (et idéalement à sourcer depuis men.gov.ma directement,
 * pas seulement un site tiers, si une note officielle plus précise est
 * retrouvée).
 */
export const EXAMEN_REGIONAL_1BAC: SessionExamen[] = [
  {
    titre: "Examen régional",
    libelle: "Session ordinaire",
    debut: new Date(2027, 4, 28),
    fin: new Date(2027, 4, 29),
  },
  {
    titre: "Session de rattrapage",
    libelle: "Session de rattrapage",
    debut: new Date(2027, 5, 28),
    fin: new Date(2027, 5, 29),
  },
];

/** `true` si la session est déjà terminée (comparé à aujourd'hui) —
 * utilisé pour la pastille "À venir"/"Passé", calculée plutôt
 * qu'écrite en dur (reste correcte au fil du temps). */
export function sessionAVenir(session: SessionExamen): boolean {
  return session.fin.getTime() >= new Date().setHours(0, 0, 0, 0);
}

/** `true` si `date` tombe dans l'une des sessions de l'examen
 * régional — utilisé pour repérer ces jours dans la grille du mois. */
export function estJourExamenRegional(date: Date): boolean {
  return EXAMEN_REGIONAL_1BAC.some(
    (session) => date >= session.debut && date <= session.fin,
  );
}
