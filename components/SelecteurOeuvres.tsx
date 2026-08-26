import Link from "next/link";

import { IconeLivre } from "@/components/icones";
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
 *
 * Fond blanc (comme la nav, pas le bleu pâle de la page) : pilule
 * inactive fondue dans le fond de page (`bg-background`), seule la
 * pilule active tranche en bleu plein — reprend la maquette de
 * référence.
 */
export default function SelecteurOeuvres({ oeuvres, slugActif }: SelecteurOeuvresProps) {
  if (oeuvres.length === 0) return null;

  return (
    <nav aria-label="Choisir une œuvre" className="overflow-x-auto border-b border-border bg-surface">
      <ul className="mx-auto flex w-full max-w-[1180px] min-w-max gap-2 px-6 py-3.5">
        {oeuvres.map((oeuvre) => {
          const actif = oeuvre.slug === slugActif;

          return (
            <li key={oeuvre.id}>
              <Link
                href={`/oeuvres/${oeuvre.slug}`}
                aria-current={actif ? "page" : undefined}
                className={
                  actif
                    ? "flex items-center gap-2.5 rounded-full border border-transparent bg-primary px-5 py-2.5 text-[15px] font-medium whitespace-nowrap text-white"
                    : "flex items-center gap-2.5 rounded-full border border-transparent bg-background px-5 py-2.5 text-[15px] font-medium whitespace-nowrap text-muted-foreground hover:border-border-strong"
                }
              >
                <IconeLivre />
                {oeuvre.titre_fr}
                {oeuvre.auteur && (
                  <span className={actif ? "font-normal text-[#c8d8f8]" : "font-normal text-subtle-foreground"}>
                    · {oeuvre.auteur}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
