import Link from "next/link";

import { IconeFleche, IconeLivre } from "@/components/icones";
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

  return (
    <section className="overflow-hidden rounded-[24px] border border-border bg-surface shadow-sm">
      <div className="flex items-center gap-3 bg-gradient-to-r from-primary to-ink px-7 py-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
          <IconeLivre className="size-5" />
        </span>
        <p className="text-sm font-semibold text-white">
          {reprise.estRecommandation ? "À découvrir" : "Reprends ta lecture"}
        </p>
      </div>

      <div className="p-7 sm:p-8">
        <div className="flex flex-wrap items-baseline gap-3">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-ink">{reprise.oeuvreTitreFr}</h2>
          {reprise.oeuvreTitreAr && (
            <span dir="rtl" lang="ar" className="font-arabe text-lg text-primary-vif">
              {reprise.oeuvreTitreAr}
            </span>
          )}
        </div>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {reprise.auteur ? `${reprise.auteur} — ` : ""}
          {unite.numeroDejaDansTitre ? reprise.chapitreTitreFr : libelleChap}
        </p>

        {reprise.resumeCourt && (
          <p className="mt-4 max-w-2xl border-l-2 border-primary/40 py-0.5 pl-4 font-lecture text-[15px] leading-relaxed text-foreground">
            {reprise.resumeCourt}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={reprise.url}
            className="inline-flex items-center gap-2 rounded-[10px] bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_10px_rgba(29,78,216,0.22)] transition-all hover:-translate-y-px hover:bg-ink"
          >
            {reprise.estRecommandation ? "Commencer la lecture" : "Continuer la lecture"}
            <IconeFleche className="size-4" />
          </Link>
          <Link
            href={`/oeuvres/${reprise.oeuvreSlug}`}
            className="rounded-[10px] px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-surface-muted hover:text-ink"
          >
            Voir la fiche de l&apos;œuvre
          </Link>
        </div>
      </div>
    </section>
  );
}
