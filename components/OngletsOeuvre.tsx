import Link from "next/link";

const ONGLETS = [
  { cle: "resume", libelle: "Résumé", icone: "📖" },
  { cle: "personnages", libelle: "Personnages", icone: "👤" },
  { cle: "lexique", libelle: "Lexique", icone: "📖" },
  { cle: "sujets", libelle: "Sujets", icone: "📄" },
  { cle: "biographie", libelle: "Biographie", icone: "✎" },
] as const;

export type CleOnglet = (typeof ONGLETS)[number]["cle"];

const CLES_ONGLETS = ONGLETS.map((o) => o.cle) as readonly string[];

/** Résout une valeur de query param quelconque vers un onglet valide,
 * "resume" par défaut si absente ou inconnue. */
export function versCleOnglet(valeur: string | string[] | undefined): CleOnglet {
  const v = Array.isArray(valeur) ? valeur[0] : valeur;
  return CLES_ONGLETS.includes(v ?? "") ? (v as CleOnglet) : "resume";
}

interface OngletsOeuvreProps {
  slug: string;
  ongletActif: CleOnglet;
}

/**
 * Barre d'onglets de la page d'une œuvre.
 *
 * Composant Serveur volontairement : chaque onglet est un lien classique
 * qui change le query param `onglet` dans l'URL (navigation gérée par
 * Next.js, pas de JavaScript client nécessaire pour ce composant). Le
 * défilement horizontal en mobile est du CSS pur (`overflow-x-auto` +
 * largeur minimale sur la liste, voir `min-w-max`) : si l'onglet actif
 * n'est pas dans les premiers visibles à l'ouverture (ex. lien direct
 * vers `?onglet=biographie`), il reste atteignable en faisant défiler
 * mais n'est pas recentré automatiquement — accepté comme limite plutôt
 * que d'ajouter du JS à ce composant pour un cas rare.
 *
 * `sticky top-0` : reste visible pendant le défilement de la page, comme
 * demandé.
 */
export default function OngletsOeuvre({ slug, ongletActif }: OngletsOeuvreProps) {
  return (
    <nav
      aria-label="Sections de l'œuvre"
      className="sticky top-0 z-10 overflow-x-auto border-b border-border bg-surface-muted"
    >
      <ul className="mx-auto flex min-w-max max-w-4xl gap-1 px-4">
        {ONGLETS.map((onglet) => {
          const actif = onglet.cle === ongletActif;
          const href =
            onglet.cle === "resume"
              ? `/oeuvres/${slug}`
              : `/oeuvres/${slug}?onglet=${onglet.cle}`;

          return (
            <li key={onglet.cle}>
              <Link
                href={href}
                aria-current={actif ? "page" : undefined}
                className={
                  actif
                    ? "flex items-center gap-1.5 border-b-4 border-primary px-3 py-3 text-sm font-medium whitespace-nowrap text-primary"
                    : "flex items-center gap-1.5 border-b-4 border-transparent px-3 py-3 text-sm font-medium whitespace-nowrap text-muted-foreground hover:text-foreground"
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
