import Link from "next/link";

import { IconeDocument, IconeIdee, IconeLivre, IconeLivreOuvert, IconePersonne } from "@/components/icones";

const ONGLETS = [
  { cle: "resume", libelle: "Chapitres", Icone: IconeLivre },
  { cle: "personnages", libelle: "Personnages", Icone: IconePersonne },
  { cle: "lexique", libelle: "Lexique", Icone: IconeLivreOuvert },
  { cle: "themes", libelle: "Thèmes et enjeux", Icone: IconeIdee },
  { cle: "sujets", libelle: "Sujets d'analyse", Icone: IconeDocument },
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
 * Barre d'onglets de la page d'une œuvre — bandeau `bg-surface-muted`
 * centré, onglet actif en texte bleu + trait souligné (pas de pastille
 * pleine) : reprend la maquette de référence (page-oeuvre (2).html).
 *
 * Composant Serveur volontairement : chaque onglet est un lien
 * classique qui change le query param `onglet` dans l'URL, pas de
 * JavaScript nécessaire. Défilement horizontal en CSS pur sous `md`
 * (voir `min-w-max`) : si l'onglet actif n'est pas visible à
 * l'ouverture, il reste atteignable en faisant défiler mais n'est pas
 * recentré automatiquement — accepté comme limite plutôt que d'ajouter
 * du JS à ce composant pour un cas rare.
 */
export default function OngletsOeuvre({ slug, ongletActif }: OngletsOeuvreProps) {
  return (
    <nav
      aria-label="Sections de l'œuvre"
      className="mx-auto mt-6 w-full max-w-[1240px] overflow-x-auto rounded-md bg-surface-muted px-3"
    >
      <ul className="flex min-w-max justify-center gap-0.5">
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
                    ? "flex items-center gap-2.5 border-b-[3px] border-primary px-6 py-[21px] text-base font-bold whitespace-nowrap text-primary"
                    : "flex items-center gap-2.5 border-b-[3px] border-transparent px-6 py-[21px] text-base font-medium whitespace-nowrap text-foreground hover:text-primary"
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
