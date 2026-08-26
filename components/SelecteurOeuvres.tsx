import Link from "next/link";

import type { Oeuvre } from "@/types/base-de-donnees";

interface SelecteurOeuvresProps {
  oeuvres: Oeuvre[];
  slugActif: string;
}

/**
 * Sélecteur d'œuvre en pilules horizontales, au-dessus de la bannière
 * de /oeuvres/[slug] — permet de passer d'une œuvre à l'autre sans
 * repasser par /oeuvres. Défilement horizontal en dessous de `md`, même
 * mécanisme (CSS pur, pas de JS) que OngletsOeuvre.
 */
export default function SelecteurOeuvres({ oeuvres, slugActif }: SelecteurOeuvresProps) {
  if (oeuvres.length === 0) return null;

  return (
    <nav aria-label="Choisir une œuvre" className="overflow-x-auto border-b border-border bg-surface-muted">
      <ul className="mx-auto flex w-full max-w-4xl min-w-max gap-2 px-4 py-3">
        {oeuvres.map((oeuvre) => {
          const actif = oeuvre.slug === slugActif;

          return (
            <li key={oeuvre.id}>
              <Link
                href={`/oeuvres/${oeuvre.slug}`}
                aria-current={actif ? "page" : undefined}
                className={
                  actif
                    ? "flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium whitespace-nowrap text-primary-foreground"
                    : "flex items-center gap-2 rounded-full bg-primary-tint px-4 py-2 text-sm font-medium whitespace-nowrap text-primary"
                }
              >
                <span aria-hidden="true">📖</span>
                {oeuvre.titre_fr}
                {oeuvre.auteur && <span className="opacity-75">({oeuvre.auteur})</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
