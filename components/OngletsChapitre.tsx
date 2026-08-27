import Link from "next/link";

import { IconeLien, IconeLieu, IconeLivre, IconeLivreOuvert, IconePersonne } from "@/components/icones";

const ONGLETS = [
  { cle: "resume", libelle: "Résumé", Icone: IconeLivre },
  { cle: "personnages", libelle: "Personnages", Icone: IconePersonne },
  { cle: "lexique", libelle: "Lexique", Icone: IconeLivreOuvert },
  { cle: "lieux", libelle: "Lieux", Icone: IconeLieu },
  { cle: "sujets", libelle: "Sujets liés", Icone: IconeLien },
] as const;

export type CleOngletChapitre = (typeof ONGLETS)[number]["cle"];

const CLES_ONGLETS = ONGLETS.map((o) => o.cle) as readonly string[];

/** Résout une valeur de query param quelconque vers un onglet valide,
 * "resume" par défaut si absente ou inconnue — même logique que
 * OngletsOeuvre/versCleOnglet. */
export function versCleOngletChapitre(
  valeur: string | string[] | undefined,
): CleOngletChapitre {
  const v = Array.isArray(valeur) ? valeur[0] : valeur;
  return CLES_ONGLETS.includes(v ?? "") ? (v as CleOngletChapitre) : "resume";
}

interface OngletsChapitreProps {
  slug: string;
  numero: number;
  ongletActif: CleOngletChapitre;
}

/** Barre d'onglets de la page d'un chapitre — même bandeau
 * `bg-surface-muted` et même pastille bleue pleine et arrondie que
 * OngletsOeuvre (style pilule demandé par l'utilisateur, plutôt que le
 * soulignement de la refonte v2 — voir OngletsOeuvre pour le détail).
 * Server Component, navigation par query param, défilement horizontal
 * en CSS pur sous `md`, sticky sous la nav — 88px de haut. */
export default function OngletsChapitre({ slug, numero, ongletActif }: OngletsChapitreProps) {
  return (
    <nav
      aria-label="Sections du chapitre"
      className="sticky top-[88px] z-10 mx-auto w-full max-w-3xl overflow-x-auto rounded-md bg-surface-muted p-1"
    >
      <ul className="flex min-w-max justify-center gap-0.5">
        {ONGLETS.map(({ cle, libelle, Icone }) => {
          const actif = cle === ongletActif;
          const href =
            cle === "resume"
              ? `/oeuvres/${slug}/${numero}`
              : `/oeuvres/${slug}/${numero}?onglet=${cle}`;

          return (
            <li key={cle}>
              <Link
                href={href}
                aria-current={actif ? "page" : undefined}
                className={
                  actif
                    ? "flex items-center gap-2 rounded-[10px] bg-primary px-4 py-3 text-[15px] font-bold whitespace-nowrap text-white shadow-[0_2px_10px_rgba(29,78,216,0.22)]"
                    : "flex items-center gap-2 rounded-[10px] px-4 py-3 text-[15px] font-medium whitespace-nowrap text-foreground transition-colors hover:bg-white/70 hover:text-primary"
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
