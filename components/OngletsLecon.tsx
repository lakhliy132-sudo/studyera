import Link from "next/link";

import { IconeCoche, IconeDocument, IconeLivreOuvert } from "@/components/icones";

const ONGLETS = [
  { cle: "cours", libelle: "Cours", Icone: IconeLivreOuvert },
  { cle: "exercices", libelle: "Exercices", Icone: IconeDocument },
  { cle: "quiz", libelle: "Quiz", Icone: IconeCoche },
] as const;

export type OngletLecon = (typeof ONGLETS)[number]["cle"];

const CLES = ONGLETS.map((o) => o.cle) as readonly string[];

/** Résout une valeur de query param vers un onglet valide, "cours" par
 * défaut si absente ou inconnue. */
export function versOngletLecon(valeur: string | string[] | undefined): OngletLecon {
  const v = Array.isArray(valeur) ? valeur[0] : valeur;
  return CLES.includes(v ?? "") ? (v as OngletLecon) : "cours";
}

interface OngletsLeconProps {
  slug: string;
  ongletActif: OngletLecon;
}

/**
 * Barre d'onglets de la page /langue/[slug] : Cours / Exercices / Quiz.
 * Même mécanisme que OngletsOeuvre (liens classiques qui changent le
 * query param `onglet`, pas de JavaScript) et même style de pilule
 * bleue pleine pour l'onglet actif.
 */
export default function OngletsLecon({ slug, ongletActif }: OngletsLeconProps) {
  return (
    <nav
      aria-label="Sections de la leçon"
      className="mx-auto w-full overflow-x-auto rounded-md bg-surface-muted p-1.5"
    >
      <ul className="flex min-w-max justify-center gap-0.5">
        {ONGLETS.map(({ cle, libelle, Icone }) => {
          const actif = cle === ongletActif;
          const href = cle === "cours" ? `/langue/${slug}` : `/langue/${slug}?onglet=${cle}`;

          return (
            <li key={cle}>
              <Link
                href={href}
                aria-current={actif ? "page" : undefined}
                className={
                  actif
                    ? "flex items-center gap-2.5 rounded-[10px] bg-primary px-5 py-3 text-sm font-bold whitespace-nowrap text-white shadow-[0_2px_10px_rgba(29,78,216,0.22)]"
                    : "flex items-center gap-2.5 rounded-[10px] px-5 py-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors hover:bg-white/70 hover:text-primary"
                }
              >
                <Icone />
                {libelle}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
