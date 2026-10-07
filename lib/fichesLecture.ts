import { FICHE_LECTURE_ANTIGONE } from "@/lib/ficheLectureAntigone";
import { FICHE_LECTURE_BOITE_A_MERVEILLES, type FicheLecture } from "@/lib/ficheLectureBoiteAMerveilles";
import { FICHE_LECTURE_DERNIER_JOUR_CONDAMNE } from "@/lib/ficheLectureDernierJourCondamne";

/** Fiches de lecture saisies à la main, une par œuvre (voir
 * lib/ficheLecture*.ts). Partagé par la page de l'œuvre (onglet Fiche
 * de lecture) et par la page /francais, qui y prend le genre, l'année et
 * la photo de l'auteur. */
export const FICHES_LECTURE_PAR_SLUG: Record<string, FicheLecture> = {
  "boite-a-merveilles": FICHE_LECTURE_BOITE_A_MERVEILLES,
  antigone: FICHE_LECTURE_ANTIGONE,
  "dernier-jour-condamne": FICHE_LECTURE_DERNIER_JOUR_CONDAMNE,
};
