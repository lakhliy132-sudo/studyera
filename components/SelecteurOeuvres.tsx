import Link from "next/link";

import { IconeLivre, IconeMaison, IconeMasques } from "@/components/icones";
import type { Oeuvre } from "@/types/base-de-donnees";

interface SelecteurOeuvresProps {
  oeuvres: Oeuvre[];
  slugActif: string;
}

/**
 * Icône par œuvre : livre par défaut, maison pour un roman à
 * l'atmosphère domestique, masques pour une pièce de théâtre. Basé sur
 * le `slug` plutôt qu'une colonne dédiée : purement décoratif, ne
 * mérite pas une colonne en base pour 3 œuvres au catalogue — à revoir
 * si le catalogue grandit significativement.
 */
function iconePourOeuvre(slug: string) {
  if (slug === "boite-a-merveilles") return IconeMaison;
  if (slug === "antigone") return IconeMasques;
  return IconeLivre;
}

/**
 * Sélecteur d'œuvre en pilules horizontales, au-dessus de la bannière
 * de /oeuvres/[slug] — permet de passer d'une œuvre à l'autre sans
 * repasser par /oeuvres. Défilement horizontal en dessous de `md`, même
 * mécanisme (CSS pur, pas de JS) que OngletsOeuvre.
 *
 * Reprend la maquette de référence : bandeau `bg-surface-muted`,
 * pilules de largeur égale (`flex-1`), pilule active pleine largeur
 * bleue avec ombre.
 */
export default function SelecteurOeuvres({ oeuvres, slugActif }: SelecteurOeuvresProps) {
  if (oeuvres.length === 0) return null;

  return (
    <nav
      aria-label="Choisir une œuvre"
      className="mx-auto mt-6 flex w-full max-w-[1240px] gap-1 overflow-x-auto rounded-md bg-surface-muted p-1.5 px-6"
    >
      {oeuvres.map((oeuvre) => {
        const actif = oeuvre.slug === slugActif;
        const Icone = iconePourOeuvre(oeuvre.slug);

        return (
          <Link
            key={oeuvre.id}
            href={`/oeuvres/${oeuvre.slug}`}
            aria-current={actif ? "page" : undefined}
            className={
              actif
                ? "flex flex-1 items-center justify-center gap-2.5 rounded-[10px] bg-primary px-[22px] py-[15px] text-base font-semibold whitespace-nowrap text-white shadow-[0_2px_10px_rgba(29,78,216,0.22)]"
                : "flex flex-1 items-center justify-center gap-2.5 rounded-[10px] px-[22px] py-[15px] text-base font-semibold whitespace-nowrap text-ink transition-colors hover:bg-white/75"
            }
          >
            <Icone className="size-[19px]" />
            {oeuvre.titre_fr}
            {oeuvre.auteur && (
              <em className={actif ? "font-normal text-[#bdd2f8] not-italic" : "font-normal text-muted-foreground not-italic"}>
                ({oeuvre.auteur})
              </em>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
