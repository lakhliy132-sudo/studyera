import Link from "next/link";

import { IconeCoche, IconeFleche } from "@/components/icones";
import { libelleUniteChapitre, type LibelleUniteChapitre } from "@/lib/uniteChapitre";
import type { Chapitre } from "@/types/base-de-donnees";

interface SommaireChapitresProps {
  slug: string;
  chapitres: Chapitre[];
  chapitresLusIds: Set<string>;
}

/** Les trois parties du *Dernier Jour d'un Condamné*, chacune dans sa
 * case : Bicêtre (chapitres 1 à 21), La Conciergerie (22 à 47) et
 * L'Hôtel de Ville (48 à 49). */
const PARTIES_DERNIER_JOUR = [
  { titre: "Bicêtre", numeroMin: 1, numeroMax: 21 },
  { titre: "La Conciergerie", numeroMin: 22, numeroMax: 47 },
  { titre: "L'Hôtel de Ville", numeroMin: 48, numeroMax: 49 },
];

/** Carte d'un chapitre (badge numéroté rond, titre, flèche poussée en
 * bas) — extraite pour être réutilisée dans le sommaire plat et dans le
 * sommaire groupé par parties. */
function CarteChapitre({
  slug,
  chapitre,
  lu,
  unite,
}: {
  slug: string;
  chapitre: Chapitre;
  lu: boolean;
  unite: LibelleUniteChapitre;
}) {
  return (
    <Link
      href={`/oeuvres/${slug}/${chapitre.numero}`}
      className="group flex min-h-[160px] flex-col rounded-md border border-border bg-background p-[22px] transition-[border-color,box-shadow,transform,background-color] hover:-translate-y-[3px] hover:border-border-strong hover:bg-surface hover:shadow-[0_8px_24px_rgba(27,58,143,0.09)]"
    >
      <div className="mb-2 flex items-center gap-[13px]">
        <span
          aria-hidden="true"
          className={
            lu
              ? "flex size-10 shrink-0 items-center justify-center rounded-full bg-validation-tint font-bold text-validation"
              : "flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-tint font-bold text-primary"
          }
        >
          {lu ? <IconeCoche className="size-[17px]" /> : String(chapitre.numero).padStart(2, "0")}
        </span>
        <p className="font-serif text-lg font-bold text-ink">
          {lu && <span className="sr-only">Lu. </span>}
          {unite.numeroDejaDansTitre ? chapitre.titre_fr : `${unite.singulier} ${chapitre.numero}`}
        </p>
      </div>
      {!unite.numeroDejaDansTitre && (
        <p className="text-[15px] leading-tight text-muted-foreground">{chapitre.titre_fr}</p>
      )}
      <div className="mt-auto pt-4">
        <IconeFleche className="size-5 text-primary transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

/** Sommaire groupé en 3 cases repliables (une par lieu du roman) pour
 * *Le Dernier Jour d'un Condamné* — demandé explicitement par
 * l'utilisateur ("3 cases, 1 case Bicêtre à l'intérieur les 21
 * chapitres", puis "les chapitres n'apparaissent pas tant que je
 * n'entre pas dans Bicêtre"). Chaque case est un `<details>` natif :
 * fermée par défaut, on clique sur le titre pour révéler les chapitres. */
function SommaireParParties({ slug, chapitres, chapitresLusIds }: SommaireChapitresProps) {
  const unite = libelleUniteChapitre(slug);

  return (
    <div className="flex flex-col gap-6">
      {PARTIES_DERNIER_JOUR.map((partie) => {
        const chapitresPartie = chapitres.filter(
          (c) => c.numero >= partie.numeroMin && c.numero <= partie.numeroMax,
        );
        return (
          <details key={partie.titre} className="group rounded-lg border border-border bg-surface shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 [&::-webkit-details-marker]:hidden">
              <h3 className="font-serif text-xl font-bold text-ink">{partie.titre}</h3>
              <span className="flex items-center gap-3">
                {chapitresPartie.length > 0 ? (
                  <span className="rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
                    {chapitresPartie.length} {unite.pluriel.toLowerCase()}
                  </span>
                ) : null}
                <IconeFleche className="size-5 shrink-0 text-primary transition-transform duration-200 rotate-90 group-open:-rotate-90" />
              </span>
            </summary>
            <div className="border-t border-border p-5 pt-4">
              {chapitresPartie.length > 0 ? (
                <ul className="grid grid-cols-[repeat(auto-fill,minmax(212px,1fr))] gap-4">
                  {chapitresPartie.map((chapitre) => (
                    <li key={chapitre.id}>
                      <CarteChapitre
                        slug={slug}
                        chapitre={chapitre}
                        lu={chapitresLusIds.has(chapitre.id)}
                        unite={unite}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="py-4 text-center text-muted-foreground">Bientôt disponible.</p>
              )}
            </div>
          </details>
        );
      })}
    </div>
  );
}

export default function SommaireChapitres({
  slug,
  chapitres,
  chapitresLusIds,
}: SommaireChapitresProps) {
  if (chapitres.length === 0) {
    return <p className="text-center text-muted-foreground">Bientôt disponible.</p>;
  }

  if (slug === "dernier-jour-condamne") {
    return <SommaireParParties slug={slug} chapitres={chapitres} chapitresLusIds={chapitresLusIds} />;
  }

  const unite = libelleUniteChapitre(slug);

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(212px,1fr))] gap-4">
      {chapitres.map((chapitre) => (
        <li key={chapitre.id}>
          <CarteChapitre
            slug={slug}
            chapitre={chapitre}
            lu={chapitresLusIds.has(chapitre.id)}
            unite={unite}
          />
        </li>
      ))}
    </ul>
  );
}
