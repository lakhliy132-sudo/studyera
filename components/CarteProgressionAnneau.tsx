"use client";

import { useEffect, useState } from "react";

import { IconeGraphique } from "@/components/icones";

interface CarteProgressionAnneauProps {
  chapitresLus: number;
  totalChapitres: number;
}

const RAYON = 46;
const CIRCONFERENCE = 2 * Math.PI * RAYON;

/**
 * Carte "Progression" (anneau) du tableau de bord — refonte complète
 * demandée explicitement par l'utilisateur ("change moi le tableau de
 * bord completement fais le de ta part").
 *
 * Reprend les tokens globaux du site plutôt que l'ancien système
 * `--tdb-*` (voir CarteReprise.tsx pour le même choix et sa
 * justification) — même animation d'anneau que la version précédente
 * (léger délai avant de jouer la transition, pour un effet de
 * "remplissage").
 */
export default function CarteProgressionAnneau({
  chapitresLus,
  totalChapitres,
}: CarteProgressionAnneauProps) {
  const pourcentage =
    totalChapitres > 0 ? Math.round((chapitresLus / totalChapitres) * 100) : 0;
  const [valeurAffichee, setValeurAffichee] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setValeurAffichee(pourcentage), 120);
    return () => clearTimeout(t);
  }, [pourcentage]);

  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-[24px] border shadow-sm"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--color-matiere-francais) 7%, var(--color-surface))",
        borderColor:
          "color-mix(in srgb, var(--color-matiere-francais) 24%, var(--color-border))",
      }}
    >
      <span
        aria-hidden="true"
        className="block h-1.5 w-full shrink-0"
        style={{ backgroundColor: "var(--color-matiere-francais)" }}
      />
      <div className="flex h-full flex-col items-center p-5 sm:p-7 text-center">
        <div className="mb-5 flex items-center gap-3 self-start">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
            <IconeGraphique className="size-5" />
          </span>
          <p className="font-serif text-xl font-bold text-ink">Progression</p>
        </div>

        {chapitresLus === 0 ? (
          <p className="mt-6 mb-2 max-w-[30ch] text-center text-[14.5px] text-muted-foreground">
            Ta progression apparaîtra ici dès que tu auras commencé à lire.
          </p>
        ) : (
          <>
            <div className="relative grid place-items-center">
              <svg
                viewBox="0 0 110 110"
                width={130}
                height={130}
                className="-rotate-90"
              >
                <circle
                  cx={55}
                  cy={55}
                  r={RAYON}
                  fill="none"
                  strokeWidth={8}
                  stroke="var(--color-surface-muted)"
                />
                <circle
                  cx={55}
                  cy={55}
                  r={RAYON}
                  fill="none"
                  strokeWidth={8}
                  strokeLinecap="round"
                  stroke="var(--color-primary)"
                  className="transition-[stroke-dashoffset] duration-1000 ease-out"
                  strokeDasharray={CIRCONFERENCE}
                  strokeDashoffset={
                    CIRCONFERENCE - (CIRCONFERENCE * valeurAffichee) / 100
                  }
                />
              </svg>
              <span className="absolute font-serif text-[28px] font-bold tracking-tight text-ink">
                {pourcentage}
                <span className="text-sm font-normal text-muted-foreground">
                  %
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {chapitresLus} chapitre{chapitresLus > 1 ? "s" : ""} lu
              {chapitresLus > 1 ? "s" : ""} sur {totalChapitres}.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
