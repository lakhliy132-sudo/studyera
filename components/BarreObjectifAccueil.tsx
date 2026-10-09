import Link from "next/link";

import { IconeCible, IconeFleche } from "@/components/icones";

/** Fond sombre du bandeau : jetons `--fond-sombre-*` (app/globals.css),
 * qui suivent la palette et restent foncés dans les deux modes. */
const FONCE = "linear-gradient(100deg, var(--fond-sombre-bas) 0%, var(--fond-sombre-haut) 100%)";

/**
 * Bandeau d'encouragement en bas de l'accueil connecté, d'après la
 * dernière maquette ("Petit à petit, tu avances."), en version étroite
 * comme demandé ("etroit la quote en bas") : une seule ligne de hauteur
 * sur ordinateur au lieu du grand bandeau photo de la maquette.
 *
 * Texte générique, aucune donnée d'élève. Le bouton de la maquette
 * ("Voir mes objectifs") mène à /progres : il n'existe pas de page
 * d'objectifs, et un lien vers rien serait trompeur.
 */
export default function BarreObjectifAccueil() {
  return (
    <div
      className="flex flex-col items-start gap-3 rounded-[18px] px-5 py-3.5 text-white shadow-sm sm:flex-row sm:items-center sm:justify-between"
      style={{ background: FONCE }}
    >
      <div className="flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/12 ring-1 ring-white/25">
          <IconeCible className="size-[18px]" />
        </span>
        <p className="text-sm">
          <span className="font-bold">Petit à petit, tu avances.</span>{" "}
          <span className="text-white/70">La régularité est la clé de la réussite.</span>
        </p>
      </div>
      <Link
        href="/progres"
        className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/40 px-4 py-1.5 text-[13px] font-semibold transition-colors hover:bg-white/10"
      >
        Voir ma progression
        <IconeFleche className="size-3.5" />
      </Link>
    </div>
  );
}
