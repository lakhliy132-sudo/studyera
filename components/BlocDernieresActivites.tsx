import Link from "next/link";

import type { ActiviteAffichable } from "@/lib/supabase/tableauDeBord";

interface BlocDernieresActivitesProps {
  activites: ActiviteAffichable[];
}

function formaterDate(dateIso: string) {
  return new Date(dateIso).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" });
}

/**
 * Dernier bloc du tableau de bord ("DERNIÈRES ACTIVITÉS") : quelques
 * lignes seulement (voir NOMBRE_ACTIVITES_RECENTES dans la page), pas
 * un journal complet — l'historique complet est sur /activite, atteint
 * via "Tout voir".
 *
 * Fond blanc, dégradé bleu → bleu ciel en liséré sur le côté gauche —
 * demandé explicitement par l'utilisateur, corrigé après un premier
 * essai en dégradé plein fond ("Non au fond le blanc mais a coté le
 * bleu"), même traitement que `BlocAnnonces.tsx`.
 */
export default function BlocDernieresActivites({ activites }: BlocDernieresActivitesProps) {
  return (
    <section className="relative mt-4 flex flex-col gap-3 overflow-hidden rounded-[14px] border border-[var(--tdb-line)] bg-[var(--tdb-card)] p-7 pl-9">
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[5px]"
        style={{ backgroundImage: "var(--tdb-degrade-bleu)" }}
      />
      <div className="flex items-center justify-between">
        <span className="[font-family:var(--tdb-font-mono)] text-[10.5px] font-medium tracking-[0.15em] text-[var(--tdb-mute)] uppercase">
          Dernières activités
        </span>
        <Link href="/activite" className="text-sm font-medium text-[var(--tdb-blue)] hover:underline">
          Tout voir
        </Link>
      </div>

      {activites.length === 0 ? (
        <p className="text-[var(--tdb-mute)]">Tes dernières consultations apparaîtront ici.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-[var(--tdb-line)]">
          {activites.map((activite) => {
            const contenu = (
              <>
                <span className="text-sm text-[var(--tdb-ink)]">{activite.titre}</span>
                <span className="shrink-0 text-xs text-[var(--tdb-mute)]">{formaterDate(activite.createdAt)}</span>
              </>
            );

            return (
              <li key={activite.id}>
                {activite.url ? (
                  <Link
                    href={activite.url}
                    className="flex items-center justify-between gap-3 py-2 hover:text-[var(--tdb-blue)]"
                  >
                    {contenu}
                  </Link>
                ) : (
                  <div className="flex items-center justify-between gap-3 py-2">{contenu}</div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
