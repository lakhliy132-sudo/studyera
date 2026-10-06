/**
 * Apparence dessinée de chaque personnage d'œuvre, pour
 * `components/AvatarPersonnage.tsx` — demandé par l'utilisateur ("pour
 * tout les personnages met des trucs dans leurs photos, des filles des
 * garcon les gardes tout tout tout").
 *
 * Saisie à la main, par nom exact de la table `personnages` (comme
 * `lib/personnagesParChapitre.ts`) : la table n'a pas de colonne pour
 * l'âge ou le sexe, et une migration ne s'applique qu'à la main. Un
 * personnage absent d'ici garde son médaillon aux initiales.
 *
 * Ce qui est dessiné vient du texte ou de la fiche du personnage, rien
 * d'autre : Ismène est blonde et Créon a les cheveux blancs parce que
 * le Prologue d'Anouilh le dit, Marie est une petite fille de trois ans,
 * Sidi El Arafi est aveugle, la peau de Pepa est brune. Quand le texte
 * ne dit rien (couleur des cheveux d'un voisin, par exemple), le dessin
 * reste neutre plutôt que d'inventer un trait : pas de barbe ni de
 * moustache sans raison. Les coiffes suivent l'époque et le lieu de
 * chaque œuvre : chéchia, turban et foulard dans le Fès des années
 * 1920, casque antique pour les gardes de Thèbes, bicorne pour le
 * gendarme parisien de 1829.
 *
 * Les personnages collectifs (le Chœur, la foule, les geôliers…) sont
 * dessinés en groupe de silhouettes sans visage.
 */
export type Peau = "claire" | "mate";
export type CouleurCheveux = "noirs" | "bruns" | "blonds" | "gris";

export interface Apparence {
  age: "enfant" | "adulte";
  peau: Peau;
  cheveux: CouleurCheveux;
  coiffure: "courts" | "longs" | "chignon" | "nattes" | "aucune";
  coiffe?: "foulard" | "chechia" | "turban" | "couronne" | "casque" | "bicorne";
  couleurCoiffe?: string;
  barbe?: "barbe" | "moustache";
  /** Couleur du vêtement. */
  habit: string;
  col?: "pretre" | "uniforme";
  yeuxFermes?: boolean;
  groupe?: boolean;
}

// Fès, années 1920 : peau mate, chéchia ou turban pour les hommes,
// foulard pour les femmes.
const fesHomme = (habit: string, coiffe: "chechia" | "turban" = "chechia"): Apparence => ({
  age: "adulte",
  peau: "mate",
  cheveux: "noirs",
  coiffure: "courts",
  coiffe,
  habit,
});
const fesFemme = (habit: string, couleurCoiffe: string): Apparence => ({
  age: "adulte",
  peau: "mate",
  cheveux: "noirs",
  coiffure: "longs",
  coiffe: "foulard",
  couleurCoiffe,
  habit,
});
const homme = (habit: string, cheveux: CouleurCheveux = "bruns", peau: Peau = "claire"): Apparence => ({
  age: "adulte",
  peau,
  cheveux,
  coiffure: "courts",
  habit,
});
const groupe = (habit: string): Apparence => ({
  age: "adulte",
  peau: "claire",
  cheveux: "bruns",
  coiffure: "aucune",
  habit,
  groupe: true,
});

export const APPARENCES_PERSONNAGES: Record<string, Record<string, Apparence>> = {
  antigone: {
    // « la petite maigre » (le Prologue), brune face à la blonde Ismène.
    Antigone: { age: "adulte", peau: "claire", cheveux: "noirs", coiffure: "longs", habit: "#3f4f74" },
    // « Ismène, la blonde, la belle Ismène » (le Prologue).
    Ismène: { age: "adulte", peau: "claire", cheveux: "blonds", coiffure: "longs", habit: "#c27d93" },
    // « Cet homme robuste, aux cheveux blancs » (le Prologue).
    Créon: { age: "adulte", peau: "claire", cheveux: "gris", coiffure: "courts", coiffe: "couronne", habit: "#6e2436" },
    // « cette vieille dame qui tricote » (le Prologue).
    Eurydice: { age: "adulte", peau: "claire", cheveux: "gris", coiffure: "longs", coiffe: "couronne", habit: "#5c4a7d" },
    Hémon: homme("#2f5f7f"),
    "La Nourrice": { age: "adulte", peau: "claire", cheveux: "gris", coiffure: "chignon", habit: "#7b6a55" },
    "Le Chœur": groupe("#4a4f63"),
    "Le Garde (Jonas)": { ...homme("#5c603c"), coiffe: "casque" },
    "Le Messager": homme("#6b6b6b"),
    "Le Prologue": homme("#454c5e"),
    Polynice: homme("#7d4a2f"),
    Étéocle: homme("#2f5d4a"),
  },
  "boite-a-merveilles": {
    Abdelkader: fesHomme("#5b4636"),
    Abdellah: fesHomme("#4f6b5a"),
    "Abderrahman le coiffeur": fesHomme("#3e5a6b"),
    Allal: fesHomme("#5f6b3a"),
    "Driss El Aouad": fesHomme("#7a5a3a"),
    "Fatma Bziouya": fesFemme("#8a6a4a", "#a0522d"),
    // Camarade de Msid de Sidi Mohammed.
    Hamoussa: { age: "enfant", peau: "mate", cheveux: "noirs", coiffure: "courts", habit: "#c2a66e" },
    "Khadija (sœur de Rahma)": fesFemme("#6a7f5a", "#557a4a"),
    "L'oncle Othmane": fesHomme("#6a5a7a", "turban"),
    "La Chouafa (tante Kenza)": fesFemme("#3b2f4a", "#2d2238"),
    "La femme de Sidi El Arafi": fesFemme("#7a6450", "#5e4a3a"),
    "La fille du coiffeur": fesFemme("#b0607a", "#c8789a"),
    "Lalla Aïcha": fesFemme("#4a6a8a", "#2f6f8f"),
    "Lalla Fatoum": fesFemme("#8a7a5a", "#9a7b3a"),
    "Lalla Khadija (épouse de l'oncle Othmane)": fesFemme("#6a5a7a", "#7a5a9a"),
    // « une jeune femme de vingt-deux ans » (fiche du personnage).
    "Lalla Zoubida": fesFemme("#7a4e8c", "#9a5aa8"),
    "Le courtier malhonnête": fesHomme("#6b4a3a"),
    // Vieil homme qui dirige le Msid.
    "Le fqih": { ...fesHomme("#e6e0d0", "turban"), cheveux: "gris", barbe: "barbe" },
    "Maalem Abdeslam": fesHomme("#8a6a3a", "turban"),
    "Moulay Larbi": fesHomme("#3a4f6b"),
    Rahma: fesFemme("#b5654a", "#d4785a"),
    Salama: fesFemme("#5a5a3a", "#6a6a2a"),
    // « Le voyant aveugle ».
    "Sidi El Arafi": { ...fesHomme("#6a5a4a", "turban"), yeuxFermes: true },
    // Le narrateur, enfant.
    "Sidi Mohammed": { age: "enfant", peau: "mate", cheveux: "noirs", coiffure: "courts", habit: "#3f6fa0" },
    "Sidi Mohammed Ben Taher": fesHomme("#4a4a4a"),
    Zhour: fesFemme("#6a8a7a", "#3f8f7a"),
    // Fille de Rahma, un peu plus âgée que Sidi Mohammed.
    Zineb: { age: "enfant", peau: "mate", cheveux: "noirs", coiffure: "nattes", habit: "#c0567a" },
  },
  "dernier-jour-condamne": {
    // « Fille à la peau brune, aux cheveux longs » (fiche du personnage).
    "L'Espagnole (Pepa)": { age: "adulte", peau: "mate", cheveux: "noirs", coiffure: "longs", habit: "#a8323e" },
    "L'huissier": homme("#25252d"),
    "La foule": groupe("#5a5a66"),
    // « environ cinquante-cinq ans […] ridé et voûté ».
    "Le Friauche": homme("#6b5d4f", "gris"),
    "Le bourreau": homme("#3a2a2a"),
    "Le condamné à mort": homme("#8c919b"),
    "Le nouveau gendarme de la Conciergerie": { ...homme("#2c3e66"), coiffe: "bicorne", col: "uniforme" },
    "Le prêtre": { ...homme("#1f1f26"), col: "pretre" },
    "Le sous-architecte": homme("#4a5a6a"),
    "Les geôliers": groupe("#3d4a3a"),
    "Les représentants de la société": groupe("#24242c"),
    // « Âgée de trois ans, belle, rose et fraîche ».
    Marie: { age: "enfant", peau: "claire", cheveux: "bruns", coiffure: "nattes", habit: "#e08aa0" },
    "Sa femme et sa mère": groupe("#5a4a5a"),
  },
};

export function apparencePersonnage(slugOeuvre: string, nom: string): Apparence | undefined {
  return APPARENCES_PERSONNAGES[slugOeuvre]?.[nom];
}
