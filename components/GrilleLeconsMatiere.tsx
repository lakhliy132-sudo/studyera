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
function CarteLecon({
  matiereSlug,
  cours,
  numero,
  couleur,
}: {
  matiereSlug: string;
  cours: Cours;
  numero: number;
  couleur: string;
}) {
  return (
    <li>
      {/* Deux mises en page dans un seul composant : une ligne compacte
       * sur téléphone, la carte habituelle à partir de `sm`. Demandé
       * par l'utilisateur, qui trouvait le site trop long à faire
       * défiler, surtout sur téléphone ; en pleine carte, une liste de
       * 16 leçons y occupait près de cinq écrans. La ligne compacte
       * garde le numéro et le titre, et remplace le libellé "Lire le
       * cours" par la seule flèche. */}
      <Link
        href={`/${matiereSlug}/${cours.slug}`}
        className="group flex h-full items-center gap-3 rounded-[16px] border border-border bg-surface p-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)] sm:flex-col sm:items-stretch sm:gap-0 sm:rounded-[20px] sm:p-[26px]"
      >
        <span className="flex shrink-0 items-center gap-3 sm:w-full sm:justify-between">
          <span
            style={{
              backgroundColor: `color-mix(in srgb, ${couleur} 14%, var(--color-surface))`,
              color: couleur,
            }}
            className="flex size-9 items-center justify-center rounded-full sm:size-[52px]"
          >
            <IconeFlecheHaut className="size-5 sm:size-6" />
          </span>
          <span
            style={{ color: couleur }}
            className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-bold"
          >
            {String(numero).padStart(2, "0")}
          </span>
        </span>
        <h3 className="min-w-0 flex-1 font-serif text-[15px] leading-snug font-bold text-ink sm:mt-4 sm:text-lg">
          {cours.titre}
        </h3>
        <span
          style={{ color: couleur }}
          className="flex shrink-0 items-center gap-1.5 text-sm font-semibold sm:mt-4"
        >
          <span className="hidden sm:inline">Lire le cours</span>
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
export function EnTeteSection({
  icone,
  titre,
  nombre,
  couleur,
}: {
  icone: ReactElement;
  titre: string;
  nombre: number;
  couleur: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        style={{
          backgroundColor: `color-mix(in srgb, ${couleur} 14%, var(--color-surface))`,
          color: couleur,
        }}
        className="flex size-11 shrink-0 items-center justify-center rounded-full"
      >
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
  couleur,
}: {
  matiereSlug: string;
  lecons: Cours[];
  numeroDepart?: number;
  couleur: string;
}) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3 sm:gap-[18px]">
      {lecons.map((cours, index) => (
        <CarteLecon
          key={cours.id}
          matiereSlug={matiereSlug}
          cours={cours}
          numero={numeroDepart + index}
          couleur={couleur}
        />
      ))}
    </ul>
  );
}
