import Link from "next/link";

const ONGLETS = [
  { cle: "resume", libelle: "Résumé", icone: "📖" },
  { cle: "personnages", libelle: "Personnages", icone: "👤" },
  { cle: "lexique", libelle: "Lexique", icone: "📖" },
  { cle: "lieux", libelle: "Lieux", icone: "📍" },
  { cle: "sujets", libelle: "Sujets liés", icone: "🔗" },
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

/** Barre d'onglets de la page d'un chapitre — même mécanisme que
 * OngletsOeuvre (Server Component, navigation par query param, défilement
 * horizontal en CSS pur sous `md`). */
export default function OngletsChapitre({ slug, numero, ongletActif }: OngletsChapitreProps) {
  return (
    <nav
      aria-label="Sections du chapitre"
      className="sticky top-0 z-10 overflow-x-auto border-b border-border bg-surface"
    >
      <ul className="mx-auto flex min-w-max max-w-3xl gap-1 px-4">
        {ONGLETS.map((onglet) => {
          const actif = onglet.cle === ongletActif;
          const href =
            onglet.cle === "resume"
              ? `/oeuvres/${slug}/${numero}`
              : `/oeuvres/${slug}/${numero}?onglet=${onglet.cle}`;

          return (
            <li key={onglet.cle}>
              <Link
                href={href}
                aria-current={actif ? "page" : undefined}
                className={
                  actif
                    ? "flex items-center gap-1.5 border-b-2 border-primary px-3 py-3 text-sm font-medium whitespace-nowrap text-primary"
                    : "flex items-center gap-1.5 border-b-2 border-transparent px-3 py-3 text-sm font-medium whitespace-nowrap text-muted-foreground hover:text-foreground"
                }
              >
                <span aria-hidden="true">{onglet.icone}</span>
                {onglet.libelle}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
