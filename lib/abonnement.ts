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
export function lienWhatsapp(formule: Formule, email: string | null = null): string {
  // Avec l'e-mail du compte (page /acces) : c'est lui qui dit quel compte
  // activer sur /administration/acces.
  const message =
    `سلام 👋 بغيت نشترك فـ StudyEra — عرض ${formule.nom} (${formule.prix} درهم).` +
    (email ? `\nالإيميل ديال الحساب: ${email}` : "");
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

/** Un « + » d'une formule ; `fort` pour ceux qui la distinguent de
 * l'autre (mis en gras). */
export interface PlusFormule {
  texte: string;
  fort?: boolean;
}

const MOIS_DARIJA = ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر"];

/** « 28 ماي » */
export function dateDarija(date: Date): string {
  return `${date.getDate()} ${MOIS_DARIJA[date.getMonth()]}`;
}

/** Les « + » d'une formule : ce que le site contient (`communs`, comptés
 * par l'appelant), précédés, pour la formule à l'année, de ce qui se
 * calcule (couvre-t-elle l'examen si on la prend aujourd'hui, de
 * combien revient-elle moins cher au mois). */
export function plusFormule(formule: Formule, communs: string[], examen: Date | null): PlusFormule[] {
  const extras: PlusFormule[] = [];
  if (formule.cle === "annee") {
    if (examen && couvreJusqua(formule, examen)) {
      extras.push({ texte: `كيوصلك حتى لنهار الجهوي (${dateDarija(examen)})`, fort: true });
    }
    const autre = FORMULES.find((f) => f.cle !== formule.cle);
    const economie = autre ? economieMensuelle(formule, autre) : 0;
    if (economie > 0) extras.push({ texte: `أرخص بـ ${economie}% فالشهر من التريمستر`, fort: true });
  }
  return [...extras, ...communs.map((texte) => ({ texte }))];
}
