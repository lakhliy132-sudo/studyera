import Link from "next/link";

import { IconeHorloge } from "@/components/icones";
import type { ActiviteAffichable } from "@/lib/supabase/tableauDeBord";

interface BlocDernieresActivitesProps {
  activites: ActiviteAffichable[];
}

function formaterDate(dateIso: string) {
  return new Date(dateIso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
  });
}

/**
 * Bloc "Dernières activités" du tableau de bord — refonte complète
 * demandée explicitement par l'utilisateur ("change moi le tableau de
 * bord completement fais le de ta part"). Reprend les tokens globaux
 * du site plutôt que l'ancien système `--tdb-*` (voir CarteReprise.tsx).
 * Quelques lignes seulement (voir NOMBRE_ACTIVITES_RECENTES dans la
 * page) : l'historique complet reste sur /activite, via "Tout voir".
 */
export default function BlocDernieresActivites({
  activites,
}: BlocDernieresActivitesProps) {
  return (
    <section
      className="flex h-full flex-col overflow-hidden rounded-[24px] border shadow-sm"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--color-matiere-histoire-geo) 7%, var(--color-surface))",
        borderColor:
          "color-mix(in srgb, var(--color-matiere-histoire-geo) 24%, var(--color-border))",
      }}
    >
      <span
        aria-hidden="true"
        className="block h-1.5 w-full shrink-0"
        style={{ backgroundColor: "var(--color-matiere-histoire-geo)" }}
      />
      <div className="flex h-full flex-col gap-4 p-5 sm:p-7 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
              <IconeHorloge className="size-5" />
            </span>
            <p className="font-serif text-xl font-bold text-ink">
              Dernières activités
            </p>
          </div>
          <Link
            href="/activite"
            className="shrink-0 text-sm font-semibold text-primary hover:underline"
          >
            Tout voir
          </Link>
        </div>

        {activites.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Tes dernières consultations apparaîtront ici.
          </p>
        ) : (
          <ul className="flex flex-col divide-y divide-border">
            {activites.map((activite) => {
              const contenu = (
                <>
                  <span className="truncate text-sm text-foreground">
                    {activite.titre}
                  </span>
                  <span className="shrink-0 text-xs text-subtle-foreground">
                    {formaterDate(activite.createdAt)}
                  </span>
                </>
              );

              return (
                <li key={activite.id}>
                  {activite.url ? (
                    <Link
                      href={activite.url}
                      className="flex items-center justify-between gap-3 py-2.5 hover:text-primary"
                    >
                      {contenu}
                    </Link>
                  ) : (
                    <div className="flex items-center justify-between gap-3 py-2.5">
                      {contenu}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
