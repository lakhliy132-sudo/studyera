import Link from "next/link";

import { IconeAuteur, IconeDocument, IconeLivre, IconeLivreOuvert, IconePersonne } from "@/components/icones";

const ONGLETS = [
  { cle: "resume", libelle: "Résumé", Icone: IconeLivre },
  { cle: "personnages", libelle: "Personnages", Icone: IconePersonne },
  { cle: "lexique", libelle: "Lexique", Icone: IconeLivreOuvert },
  { cle: "sujets", libelle: "Sujets", Icone: IconeDocument },
  { cle: "biographie", libelle: "Biographie", Icone: IconeAuteur },
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
 * Barre d'onglets de la page d'une œuvre, en carte de pilules (reprend
 * la maquette de référence) : conteneur blanc arrondi avec ombre,
 * onglet actif en pastille bleu plein — remplace le style précédent à
 * soulignement.
 *
 * Composant Serveur volontairement : chaque onglet est un lien
 * classique qui change le query param `onglet` dans l'URL, pas de
 * JavaScript nécessaire. Défilement horizontal en CSS pur sous `md`
 * (voir `min-w-max`) : si l'onglet actif n'est pas visible à
 * l'ouverture, il reste atteignable en faisant défiler mais n'est pas
 * recentré automatiquement — accepté comme limite plutôt que d'ajouter
 * du JS à ce composant pour un cas rare.
 *
 * `sticky` sous la nav (`top-[74px]`, la nav fait 74px de haut) :
 * reste visible pendant le défilement de la page, comme demandé.
 */
export default function OngletsOeuvre({ slug, ongletActif }: OngletsOeuvreProps) {
  return (
    <nav
      aria-label="Sections de l'œuvre"
      className="sticky top-[74px] z-10 mx-auto w-full max-w-[1180px] overflow-x-auto rounded-lg border border-border bg-surface p-1.5 shadow-sm"
    >
      <ul className="flex min-w-max gap-0.5">
        {ONGLETS.map(({ cle, libelle, Icone }) => {
          const actif = cle === ongletActif;
          const href = cle === "resume" ? `/oeuvres/${slug}` : `/oeuvres/${slug}?onglet=${cle}`;

          return (
            <li key={cle}>
              <Link
                href={href}
                aria-current={actif ? "page" : undefined}
                className={
                  actif
                    ? "flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-[15px] font-medium whitespace-nowrap text-white"
                    : "flex items-center gap-2 rounded-md px-5 py-3 text-[15px] font-medium whitespace-nowrap text-muted-foreground hover:bg-background hover:text-ink"
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
