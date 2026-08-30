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
 * Fond en dégradé bleu → bleu ciel, texte blanc — demandé explicitement
 * par l'utilisateur, avec "Communication" et "Au programme cette
 * année" (même traitement, voir BlocAnnonces.tsx).
 */
export default function BlocDernieresActivites({ activites }: BlocDernieresActivitesProps) {
  return (
    <section
      className="mt-4 flex flex-col gap-3 rounded-[14px] p-7 text-white shadow-[0_10px_30px_-14px_rgba(30,63,216,0.45)]"
      style={{ backgroundImage: "var(--tdb-degrade-bleu)" }}
    >
      <div className="flex items-center justify-between">
        <span className="[font-family:var(--tdb-font-mono)] text-[10.5px] font-medium tracking-[0.15em] text-white/80 uppercase">
          Dernières activités
        </span>
        <Link href="/activite" className="text-sm font-medium text-white hover:underline">
          Tout voir
        </Link>
      </div>

      {activites.length === 0 ? (
        <p className="text-white/85">Tes dernières consultations apparaîtront ici.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-white/15">
          {activites.map((activite) => {
            const contenu = (
              <>
                <span className="text-sm text-white">{activite.titre}</span>
                <span className="shrink-0 text-xs text-white/70">{formaterDate(activite.createdAt)}</span>
              </>
            );

            return (
              <li key={activite.id}>
                {activite.url ? (
                  <Link href={activite.url} className="flex items-center justify-between gap-3 py-2 hover:opacity-80">
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
