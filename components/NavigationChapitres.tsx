import Link from "next/link";

import { IconeFleche } from "@/components/icones";
import {
  decouperTitreChapitre,
  type LibelleUniteChapitre,
} from "@/lib/uniteChapitre";

interface ChapitreVoisin {
  numero: number;
  titre_fr: string;
}

interface NavigationChapitresProps {
  slug: string;
  unite: LibelleUniteChapitre;
  precedent: ChapitreVoisin | null;
  suivant: ChapitreVoisin | null;
}

/** « Scène 9 » et « Créon donne ses ordres » pour Antigone (le numéro
 * est dans le titre en base), « Chapitre 4 » et le titre du chapitre
 * pour les romans. Une scène sans numéro (Prologue, Mythe d'Œdipe)
 * n'a que son titre : le libellé dit alors seulement le sens. */
function libelles(
  chapitre: ChapitreVoisin,
  unite: LibelleUniteChapitre,
  sens: "precedent" | "suivant",
) {
  if (!unite.numeroDejaDansTitre) {
    return { surTitre: `${unite.singulier} ${chapitre.numero}`, titre: chapitre.titre_fr };
  }
  const { numeroScene, titre } = decouperTitreChapitre(chapitre);
  return {
    surTitre: numeroScene !== null ? `${unite.singulier} ${numeroScene}` : sens === "precedent" ? "Précédent" : "Suivant",
    titre,
  };
}

/**
 * Navigation vers le chapitre (ou la scène) précédent et suivant, en
 * bas de /oeuvres/[slug]/[numero]. D'après la maquette fournie par
 * l'utilisateur (« et ça sur la partie de chapitre de switch d'un chap
 * à l'autre ») : une carte avec un liseré sombre à gauche, un bouton
 * rond fléché de chaque côté, le numéro en petites capitales espacées
 * au-dessus du titre, et un emblème au centre — la colonne entre deux
 * lauriers de la maquette pour Antigone (théâtre antique), un livre
 * entre les mêmes lauriers pour les romans.
 *
 * Couleurs : le liseré va de la couleur de la palette assombrie (mélange
 * avec une valeur fixe, voir CLAUDE.md §3) à la couleur elle-même, pour
 * rester visible en mode sombre ; le reste n'utilise que des jetons de
 * thème.
 */
export default function NavigationChapitres({
  slug,
  unite,
  precedent,
  suivant,
}: NavigationChapitresProps) {
  if (!precedent && !suivant) return null;

  return (
    <nav
      aria-label={`${unite.pluriel} précédent et suivant`}
      // Centrée et moins large que la page : « fais la largeur un peu
      // plus petite ».
      className="relative mx-auto w-full overflow-hidden rounded-[22px] border border-border bg-surface shadow-[0_18px_44px_-22px_rgba(27,58,143,0.35)] sm:max-w-[900px]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 start-0 w-2 sm:w-4"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--color-primary) 55%, #0a1020), var(--color-primary))",
        }}
      />
      {/* Sur téléphone, les deux liens l'un sous l'autre : côte à côte,
          les titres étaient tronqués après deux mots. */}
      <div className="grid grid-cols-1 items-center gap-4 py-5 ps-6 pe-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-6 sm:py-9 sm:ps-12 sm:pe-10">
        {precedent ? (
          <Voisin slug={slug} chapitre={precedent} unite={unite} sens="precedent" />
        ) : (
          <span className="hidden sm:block" />
        )}

        <Embleme theatre={unite.numeroDejaDansTitre} />

        {suivant ? (
          <Voisin slug={slug} chapitre={suivant} unite={unite} sens="suivant" />
        ) : (
          <span className="hidden sm:block" />
        )}
      </div>
    </nav>
  );
}

function Voisin({
  slug,
  chapitre,
  unite,
  sens,
}: {
  slug: string;
  chapitre: ChapitreVoisin;
  unite: LibelleUniteChapitre;
  sens: "precedent" | "suivant";
}) {
  const { surTitre, titre } = libelles(chapitre, unite, sens);
  const suivant = sens === "suivant";
  return (
    <Link
      href={`/oeuvres/${slug}/${chapitre.numero}`}
      rel={suivant ? "next" : "prev"}
      className={`group relative flex min-w-0 items-center gap-3 pb-4 sm:gap-6 sm:pb-5 ${suivant ? "flex-row-reverse text-end" : ""}`}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface text-ink shadow-[0_8px_22px_-8px_rgba(27,58,143,0.4)] ring-1 ring-border transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary sm:size-16">
        <IconeFleche className={`size-5 sm:size-6 ${suivant ? "" : "rotate-180"}`} />
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-bold tracking-[0.22em] text-muted-foreground uppercase sm:text-[13px]">
          {surTitre}
        </span>
        <span className="mt-1 block text-base font-semibold sm:line-clamp-2 text-ink transition-colors group-hover:text-primary sm:mt-1.5 sm:text-xl">
          {titre}
        </span>
      </span>
      {/* Filet dégradé sous chaque côté, comme sur la maquette. */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in srgb, var(--color-primary) 28%, transparent), transparent)",
        }}
      />
    </Link>
  );
}

/** Feuilles de la branche gauche (x, y, inclinaison en degrés), posées
 * de part et d'autre de la tige ; la branche droite en est le miroir. */
const FEUILLES: [number, number, number][] = [
  [19, 41.5, 25], [14, 36, -40], [11, 34, 60], [9.5, 27, -60], [7, 26, 75], [9, 19, -75], [6, 17, 100], [11.5, 12, -95],
];

/** Emblème central, décoratif : deux branches de laurier autour d'une
 * colonne (théâtre) ou d'un livre (roman), entre deux traits fins.
 * Masqué sur téléphone, où la place manque. */
function Embleme({ theatre }: { theatre: boolean }) {
  return (
    <span aria-hidden="true" className="hidden flex-col items-center gap-2 text-primary/30 sm:flex">
      <span className="h-6 w-px bg-border" />
      <svg viewBox="0 0 64 48" className="h-12 w-16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {/* Deux branches de laurier en arc autour du motif. */}
        <path d="M24 42C12 38 7 26 11 12" />
        <path d="M40 42c12-4 17-16 13-30" />
        {FEUILLES.map(([x, y, angle], k) => (
          <g key={k}>
            <ellipse cx={x} cy={y} rx="3.6" ry="1.5" transform={`rotate(${angle} ${x} ${y})`} fill="currentColor" stroke="none" />
            <ellipse cx={64 - x} cy={y} rx="3.6" ry="1.5" transform={`rotate(${180 - angle} ${64 - x} ${y})`} fill="currentColor" stroke="none" />
          </g>
        ))}
        {theatre ? (
          // Colonne : chapiteau, trois cannelures, base.
          <g strokeWidth="2">
            <path d="M23 15h18M25 18h14" />
            <path d="M27 18v16M32 18v16M37 18v16" />
            <path d="M25 34h14M23 37h18" />
          </g>
        ) : (
          // Livre ouvert.
          <g strokeWidth="2">
            <path d="M32 19c-3-2-7-3-10-3v17c3 0 7 1 10 3 3-2 7-3 10-3V16c-3 0-7 1-10 3Z" />
            <path d="M32 19v17" />
          </g>
        )}
      </svg>
      <span className="h-6 w-px bg-border" />
    </span>
  );
}
