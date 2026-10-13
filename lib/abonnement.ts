/**
 * Les deux formules d'abonnement affichées en bas de l'accueil
 * visiteur, et le lien WhatsApp par lequel se fait le paiement.
 *
 * Prix et numéro donnés par l'utilisateur : « 199dhs tout l'année et
 * 130dhs par trimestre », « le paiement se fait par wtsp, le bouton
 * ils envoient directement au numéro +33609527898 ». Tout le reste
 * (prix au mois, écart entre les deux) est calculé à partir de ces
 * deux prix, jamais écrit à côté.
 */

/** Numéro WhatsApp au format international sans « + » ni espaces,
 * comme l'attend wa.me. */
export const NUMERO_WHATSAPP = "33609527898";

export interface Formule {
  cle: "trimestre" | "annee";
  /** Nom en darija, affiché sur la carte. */
  nom: string;
  prix: number;
  /** Durée couverte, en mois : sert au prix mensuel et à savoir si la
   * formule va jusqu'à l'examen. */
  mois: number;
  /** « par … », sous le prix. */
  periode: string;
}

export const FORMULES: Formule[] = [
  { cle: "trimestre", nom: "التريمستر", prix: 130, mois: 3, periode: "لـ 3 شهور" },
  { cle: "annee", nom: "العام كامل", prix: 199, mois: 12, periode: "للعام كامل" },
];

/** Prix ramené au mois, arrondi au dixième (16.6, 43.3). */
export function prixParMois(formule: Formule): number {
  return Math.round((formule.prix / formule.mois) * 10) / 10;
}

/** De combien la formule `moinsChere` revient moins cher au mois que
 * `reference`, en pourcentage entier. */
export function economieMensuelle(moinsChere: Formule, reference: Formule): number {
  const a = moinsChere.prix / moinsChere.mois;
  const b = reference.prix / reference.mois;
  return Math.round((1 - a / b) * 100);
}

/** `true` si une formule prise aujourd'hui court encore le jour de
 * `date` (le premier jour de l'examen régional, en pratique). */
export function couvreJusqua(formule: Formule, date: Date): boolean {
  const fin = new Date();
  fin.setMonth(fin.getMonth() + formule.mois);
  return fin >= date;
}

/** Lien wa.me qui ouvre WhatsApp sur une conversation avec le numéro
 * de paiement, le message déjà écrit (la formule choisie et son prix),
 * pour que l'élève n'ait plus qu'à l'envoyer. */
export function lienWhatsapp(formule: Formule): string {
  const message = `سلام 👋 بغيت نشترك فـ StudyEra — عرض ${formule.nom} (${formule.prix} درهم).`;
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(message)}`;
}
