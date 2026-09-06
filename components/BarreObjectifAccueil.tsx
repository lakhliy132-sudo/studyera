import Link from "next/link";

import { IconeCible, IconeFleche } from "@/components/icones";

/**
 * Bandeau "Objectif : Réussir le Bac !" de l'accueil connecté —
 * reprend la maquette complète envoyée par l'utilisateur ("tu peux
 * faire juste ce qui est sur cette page"). Texte générique (aucune
 * donnée d'élève, contrairement au planning "Aujourd'hui" — voir
 * CarteAujourdhuiAccueil.tsx), donc rien à vérifier côté base de
 * données pour ce bloc.
 */
export default function BarreObjectifAccueil() {
  return (
    <div className="flex flex-col items-start justify-between gap-4 rounded-[24px] border border-border bg-surface p-6 shadow-sm sm:flex-row sm:items-center">
      <div className="flex items-center gap-3.5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
          <IconeCible className="size-5" />
        </span>
        <div>
          <p className="font-serif text-base font-bold text-ink">Objectif : Réussir le Bac !</p>
          <p className="text-sm text-muted-foreground">Chaque effort compte. Continue, tu es sur la bonne voie.</p>
        </div>
      </div>
      <Link
        href="/tableau-de-bord"
        className="flex shrink-0 items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary-tint"
      >
        Voir ma progression
        <IconeFleche className="size-3.5" />
      </Link>
    </div>
  );
}
