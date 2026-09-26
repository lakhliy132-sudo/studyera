import Image from "next/image";
import Link from "next/link";

import { IconeFleche, IconeLivre } from "@/components/icones";
import { COUVERTURES_OEUVRES } from "@/lib/couvertures";
import { libelleChapitre, libelleUniteChapitre } from "@/lib/uniteChapitre";
import type { RepriseLecture } from "@/lib/supabase/tableauDeBord";

interface CarteRepriseProps {
  reprise: RepriseLecture;
}

/**
 * Carte "Reprendre" du tableau de bord — refonte complète demandée
 * explicitement par l'utilisateur ("change moi le tableau de bord
 * completement fais le de ta part"), confirmée malgré des
 * modifications non enregistrées d'une autre session sur cette page
 * (l'utilisateur a explicitement autorisé à les écraser).
 *
 * Reprend les tokens globaux du site (`--color-*`) plutôt que l'ancien
 * système `--tdb-*` propre à cette page : unifie le tableau de bord
 * avec le reste du site (même style de carte que /calendrier,
 * /matieres...) et corrige au passage un gap déjà documenté (la
 * palette `--tdb-*` ne s'adaptait pas au mode nuit).
 *
 * Le texte sous le titre reste un RÉSUMÉ (`chapitre.resume_court`),
 * pas une citation littérale du texte intégral (rarement rempli en
 * base) — comportement conservé de l'ancienne version.
 */
export default function CarteReprise({ reprise }: CarteRepriseProps) {
  const unite = libelleUniteChapitre(reprise.oeuvreSlug);
  const libelleChap = libelleChapitre(
    { numero: reprise.chapitreNumero, titre_fr: reprise.chapitreTitreFr },
    unite,
  );

  const couverture = COUVERTURES_OEUVRES[reprise.oeuvreSlug];

  return (
    <section
      className="overflow-hidden rounded-[24px] border shadow-sm"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--color-matiere-arabe) 7%, var(--color-surface))",
        borderColor:
          "color-mix(in srgb, var(--color-matiere-arabe) 24%, var(--color-border))",
      }}
    >
      <span
        aria-hidden="true"
        className="block h-1.5 w-full"
        style={{ backgroundColor: "var(--color-matiere-arabe)" }}
      />
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:p-5">
        <span
          className="relative hidden h-[148px] w-[104px] shrink-0 overflow-hidden rounded-[12px] sm:block"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-matiere-arabe) 16%, var(--color-surface))",
          }}
        >
          {couverture ? (
            <Image
              src={couverture}
              alt=""
              aria-hidden="true"
              width={264}
              height={380}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="flex h-full items-center justify-center text-primary">
              <IconeLivre className="size-8" />
            </span>
          )}
        </span>

        <div className="flex min-w-0 flex-col">
          <span
            className="flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-bold text-white"
            style={{ backgroundColor: "var(--color-matiere-arabe)" }}
          >
            <IconeLivre className="size-3.5" />
            {reprise.estRecommandation ? "À découvrir" : "Reprends ta lecture"}
          </span>

          <div className="mt-3 flex flex-wrap items-baseline gap-3">
            <h2 className="font-serif text-[22px] leading-tight font-bold tracking-tight text-ink">
              {reprise.oeuvreTitreFr}
            </h2>
            {reprise.oeuvreTitreAr && (
              <span
                dir="rtl"
                lang="ar"
                className="font-arabe text-lg text-primary-vif"
              >
                {reprise.oeuvreTitreAr}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {reprise.auteur ? `${reprise.auteur} — ` : ""}
            {unite.numeroDejaDansTitre ? reprise.chapitreTitreFr : libelleChap}
          </p>

          {reprise.resumeCourt && (
            <p className="mt-2.5 max-w-2xl font-lecture text-[14.5px] leading-relaxed text-foreground">
              {reprise.resumeCourt}
            </p>
          )}

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
            <Link
              href={reprise.url}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13.5px] font-semibold text-white shadow-sm transition-all hover:-translate-y-px"
              style={{ backgroundColor: "var(--color-matiere-arabe)" }}
            >
              {reprise.estRecommandation
                ? "Commencer la lecture"
                : "Continuer la lecture"}
              <IconeFleche className="size-4" />
            </Link>
            <Link
              href={`/oeuvres/${reprise.oeuvreSlug}`}
              className="rounded-full px-3 py-2 text-[13.5px] font-semibold text-muted-foreground transition-colors hover:bg-surface-muted hover:text-ink"
            >
              Voir la fiche de l&apos;œuvre
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
