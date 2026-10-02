import { IconeCroissant, IconeLivreOuvert, IconeTexte } from "@/components/icones";
import type { Cours } from "@/types/base-de-donnees";

/** Les 4 parties du programme d'éducation islamique — demandé
 * explicitement par l'utilisateur ("fais la partie de sourat youssef
 * seul et les cours seuls et les autres qui reste solo", puis "au debut
 * ne l affiche pas juste apres quon click comme francais") : la page
 * /education-islamique ne montre que ces 4 cases, et les leçons d'une
 * partie n'apparaissent qu'une fois la case ouverte.
 *
 * Même mécanique que les modules d'arabe (lib/modules-arabe.ts) : les
 * leçons d'une partie sont reconnues au préfixe de leur `slug`, pas par
 * une colonne dédiée en base. La dernière partie n'a pas de préfixe —
 * elle ramasse tout ce qui n'appartient à aucune autre, pour qu'une
 * leçon ajoutée plus tard apparaisse quelque part plutôt que de
 * disparaître de la page.
 */
export interface SectionIslamique {
  /** Segment d'URL : /education-islamique/partie/[id]. */
  id: string;
  titre: string;
  titreArabe: string;
  description: string;
  Icone: (props: { className?: string }) => React.ReactElement;
  /** `null` pour la partie fourre-tout (voir ci-dessus). */
  prefixe: string | null;
}

export const SECTIONS_ISLAMIQUE: SectionIslamique[] = [
  {
    id: "sourate-youssef",
    titre: "Sourate Youssef",
    titreArabe: "سورة يوسف",
    description: "Les six parties de la sourate : valeurs, règles et exercices.",
    Icone: IconeLivreOuvert,
    prefixe: "islamique-youssef-",
  },
  {
    id: "cours-periode-1",
    titre: "Les cours — 1ʳᵉ période",
    titreArabe: "دروس الدورة الأولى",
    description: "Les dix leçons de la première période, de l'Imân au pardon.",
    Icone: IconeCroissant,
    prefixe: "islamique-dawra1-",
  },
  {
    id: "cours-periode-2",
    titre: "Les cours — 2ᵉ période",
    titreArabe: "دروس الدورة الثانية",
    description: "Les dix leçons de la seconde période, de la philosophie au hadith.",
    Icone: IconeCroissant,
    prefixe: "islamique-dawra2-",
  },
  {
    id: "revision",
    titre: "Révision et méthodologie",
    titreArabe: "المراجعة والمنهجية",
    description: "Textes, concepts clés et méthodes pour l'examen régional.",
    Icone: IconeTexte,
    prefixe: null,
  },
];

export function recupererSectionIslamique(
  id: string,
): SectionIslamique | undefined {
  return SECTIONS_ISLAMIQUE.find((section) => section.id === id);
}

/** Les leçons d'une partie. La partie sans préfixe reçoit celles
 * qu'aucune autre ne réclame. */
export function leconsDeSection(
  lecons: Cours[],
  section: SectionIslamique,
): Cours[] {
  if (section.prefixe) {
    return lecons.filter((cours) => cours.slug.startsWith(section.prefixe!));
  }
  const prefixes = SECTIONS_ISLAMIQUE.map((s) => s.prefixe).filter(
    (p): p is string => p !== null,
  );
  return lecons.filter((cours) => !prefixes.some((p) => cours.slug.startsWith(p)));
}
