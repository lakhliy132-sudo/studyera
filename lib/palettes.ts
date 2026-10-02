/** Palettes de couleurs proposées à l'élève — reprend la liste de la
 * maquette fournie par l'utilisateur ("je veux faire comme ses themes
 * de couleur").
 *
 * Une palette ne change que la couleur de marque du site
 * (`--color-primary` et sa variante vive) : les surfaces, le texte et
 * les couleurs de matière restent les mêmes, et le mode sombre
 * continue de fonctionner par-dessus. Les teintes dérivées
 * (`--color-primary-tint`) sont calculées en CSS à partir du fond, pas
 * figées, pour rester correctes dans les deux modes — voir
 * app/globals.css.
 */
export interface Palette {
  /** Valeur posée sur `<html data-palette="...">`. */
  cle: string;
  nom: string;
  /** Les quatre pastilles affichées dans le sélecteur, du plus foncé
   * au plus clair. */
  apercu: [string, string, string, string];
  primaire: string;
  vif: string;
}

export const PALETTES: Palette[] = [
  {
    cle: "default",
    nom: "Default",
    apercu: ["#1d4ed8", "#2e63db", "#60a5fa", "#dbeafe"],
    primaire: "#1d4ed8",
    vif: "#2e63db",
  },
  {
    cle: "glacier",
    nom: "Glacier",
    apercu: ["#1e40af", "#2563eb", "#7dabf8", "#bfdbfe"],
    primaire: "#2563eb",
    vif: "#3b82f6",
  },
  {
    cle: "harvest",
    nom: "Harvest",
    apercu: ["#b45309", "#ea580c", "#f59e0b", "#fde68a"],
    primaire: "#c2610c",
    vif: "#ea580c",
  },
  {
    cle: "lavender",
    nom: "Lavender",
    apercu: ["#6d28d9", "#7c3aed", "#a78bfa", "#ddd6fe"],
    primaire: "#7c3aed",
    vif: "#8b5cf6",
  },
  {
    cle: "brutalist",
    nom: "Brutalist",
    apercu: ["#1f2937", "#374151", "#6b7280", "#d1d5db"],
    primaire: "#1f2937",
    vif: "#374151",
  },
  {
    cle: "obsidian",
    nom: "Obsidian",
    apercu: ["#064e3b", "#047857", "#10b981", "#6ee7b7"],
    primaire: "#047857",
    vif: "#059669",
  },
  {
    cle: "orchid",
    nom: "Orchid",
    apercu: ["#be185d", "#db2777", "#f472b6", "#fbcfe8"],
    primaire: "#db2777",
    vif: "#ec4899",
  },
  {
    cle: "solar",
    nom: "Solar",
    apercu: ["#c2410c", "#ea580c", "#fb923c", "#fed7aa"],
    primaire: "#ea580c",
    vif: "#f97316",
  },
  {
    cle: "tide",
    nom: "Tide",
    apercu: ["#0e7490", "#0891b2", "#22d3ee", "#a5f3fc"],
    primaire: "#0891b2",
    vif: "#06b6d4",
  },
  {
    cle: "verdant",
    nom: "Verdant",
    apercu: ["#15803d", "#16a34a", "#4ade80", "#bbf7d0"],
    primaire: "#16a34a",
    vif: "#22c55e",
  },
  {
    cle: "crimson",
    nom: "Crimson",
    apercu: ["#881337", "#be123c", "#fb7185", "#fecdd3"],
    primaire: "#be123c",
    vif: "#e11d48",
  },
  {
    cle: "indigo",
    nom: "Indigo",
    apercu: ["#312e81", "#4338ca", "#818cf8", "#e0e7ff"],
    primaire: "#4338ca",
    vif: "#4f46e5",
  },
  {
    cle: "mocha",
    nom: "Mocha",
    apercu: ["#451a03", "#78350f", "#b08968", "#ead9c7"],
    primaire: "#78350f",
    vif: "#92400e",
  },
  {
    cle: "plum",
    nom: "Plum",
    apercu: ["#581c87", "#86198f", "#d946ef", "#f5d0fe"],
    primaire: "#86198f",
    vif: "#a21caf",
  },
  {
    cle: "mint",
    nom: "Mint",
    apercu: ["#134e4a", "#0f766e", "#5eead4", "#ccfbf1"],
    primaire: "#0f766e",
    vif: "#14b8a6",
  },
  {
    cle: "midnight",
    nom: "Midnight",
    apercu: ["#172554", "#1e3a8a", "#60a5fa", "#dbeafe"],
    primaire: "#1e3a8a",
    vif: "#1d4ed8",
  },
];

export const CLE_PALETTE = "studyera-palette";
