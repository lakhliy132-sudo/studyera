import type { ReactElement } from "react";

import Link from "next/link";

import { IconeFleche, IconeFlecheHaut } from "@/components/icones";
import type { Cours } from "@/types/base-de-donnees";

/** Une carte de leçon — extraite de app/(public)/[matiere]/page.tsx
 * pour être réutilisée aussi par app/(public)/histoire-geo/cours
 * (histoire-geo a sa propre page de leçons depuis que /histoire-geo
 * est devenue un hub à 2 cases "Cours"/"Flash cards", comme /francais
 * — demandé explicitement par l'utilisateur : "je veux que les cours
 * sois dans une cases et la partie de flash cardes dans une autre
 * come francais"). `numero` séparé de l'index du tableau : pour les
 * deux grilles Histoire/Géographie, la numérotation de "Géographie"
 * doit repartir après celle d'"Histoire", pas de 1. */
function CarteLecon({ matiereSlug, cours, numero }: { matiereSlug: string; cours: Cours; numero: number }) {
  return (
    <li>
      <Link
        href={`/${matiereSlug}/${cours.slug}`}
        className="group flex h-full flex-col rounded-[20px] border border-border bg-surface p-[26px] shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
      >
        <div className="flex items-center justify-between">
          <span className="flex size-[52px] items-center justify-center rounded-full bg-primary-tint text-primary">
            <IconeFlecheHaut className="size-6" />
          </span>
          <span className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-bold text-primary-vif">
            {String(numero).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mt-4 font-serif text-lg leading-snug font-bold text-ink">{cours.titre}</h3>
        <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
          Lire le cours
          <IconeFleche className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </li>
  );
}

/** En-tête d'une section ("Histoire"/"Géographie") — pastille d'icône
 * + titre serif + décompte + filet en dégradé qui prend le reste de
 * la largeur, repris du même motif que l'en-tête de la page (icône
 * entourée de traits en dégradé) plutôt qu'un simple `<h2>` nu — plus
 * "chic" (demandé explicitement par l'utilisateur : "fais la d une
 * maniere chic") sans introduire de nouveau langage visuel. */
export function EnTeteSection({ icone, titre, nombre }: { icone: ReactElement; titre: string; nombre: number }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
        {icone}
      </span>
      <div className="flex shrink-0 flex-col">
        <h2 className="font-serif text-2xl font-bold text-ink">{titre}</h2>
        <p className="text-sm text-muted-foreground">
          {nombre} leçon{nombre > 1 ? "s" : ""}
        </p>
      </div>
      <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-border-strong to-transparent" />
    </div>
  );
}

export function GrilleLecons({
  matiereSlug,
  lecons,
  numeroDepart = 1,
}: {
  matiereSlug: string;
  lecons: Cours[];
  numeroDepart?: number;
}) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[18px]">
      {lecons.map((cours, index) => (
        <CarteLecon key={cours.id} matiereSlug={matiereSlug} cours={cours} numero={numeroDepart + index} />
      ))}
    </ul>
  );
}
