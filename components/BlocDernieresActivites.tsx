import Link from "next/link";

import type { ActiviteAffichable } from "@/lib/supabase/tableauDeBord";

interface BlocDernieresActivitesProps {
  activites: ActiviteAffichable[];
}

function formaterDate(dateIso: string) {
  return new Date(dateIso).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" });
}

/**
 * Quatrième bloc du tableau de bord ("DERNIÈRES ACTIVITÉS") : quelques
 * lignes seulement (voir NOMBRE_ACTIVITES_RECENTES dans la page), pas
 * un journal complet — l'historique complet est sur /activite, atteint
 * via "Tout voir".
 */
export default function BlocDernieresActivites({ activites }: BlocDernieresActivitesProps) {
  return (
    <section className="mt-2 flex flex-col gap-3 rounded-lg border border-border bg-surface p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10.5px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
          Dernières activités
        </span>
        <Link href="/activite" className="text-sm font-medium text-primary hover:underline">
          Tout voir
        </Link>
      </div>

      {activites.length === 0 ? (
        <p className="text-muted-foreground">Tes dernières consultations apparaîtront ici.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-border">
          {activites.map((activite) => {
            const contenu = (
              <>
                <span className="text-sm text-foreground">{activite.titre}</span>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {formaterDate(activite.createdAt)}
                </span>
              </>
            );

            return (
              <li key={activite.id}>
                {activite.url ? (
                  <Link
                    href={activite.url}
                    className="flex items-center justify-between gap-3 py-2 hover:text-primary"
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
