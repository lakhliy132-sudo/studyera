"use client";

import { useEffect, useState } from "react";

interface CarteProgressionAnneauProps {
  chapitresLus: number;
  totalChapitres: number;
}

const RAYON = 46;
const CIRCONFERENCE = 2 * Math.PI * RAYON;

/**
 * Carte "Progression" — anneau SVG animé, repris fidèlement du modèle
 * fourni par l'utilisateur (`Ring`), palette/police dédiées à cette
 * page (voir CarteReprise.tsx pour le contexte). Remplace
 * `BlocProgression.tsx` (dont les stats "copies corrigées"/"note
 * moyenne" vivent maintenant dans `CarteProductionEcrite.tsx`, plus
 * proche de leur sujet ; la liste détaillée par œuvre vit dans
 * `ListeProgrammeOeuvres.tsx`).
 */
export default function CarteProgressionAnneau({ chapitresLus, totalChapitres }: CarteProgressionAnneauProps) {
  const pourcentage = totalChapitres > 0 ? Math.round((chapitresLus / totalChapitres) * 100) : 0;
  const [valeurAffichee, setValeurAffichee] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setValeurAffichee(pourcentage), 120);
    return () => clearTimeout(t);
  }, [pourcentage]);

  return (
    <section className="flex flex-col items-center rounded-[14px] border border-[var(--tdb-line)] bg-[var(--tdb-card)] p-7">
      <span className="mb-5 self-start [font-family:var(--tdb-font-mono)] text-[10.5px] font-medium tracking-[0.15em] text-[var(--tdb-mute)] uppercase">
        Progression
      </span>

      {chapitresLus === 0 ? (
        <p className="mt-6 mb-2 max-w-[32ch] text-center text-[14.5px] text-[var(--tdb-mute)]">
          Ta progression apparaîtra ici dès que tu auras commencé à lire.
        </p>
      ) : (
        <>
          <div className="relative grid place-items-center">
            <svg viewBox="0 0 110 110" width={118} height={118} className="-rotate-90">
              <circle cx={55} cy={55} r={RAYON} fill="none" strokeWidth={7} stroke="var(--tdb-line)" />
              <circle
                cx={55}
                cy={55}
                r={RAYON}
                fill="none"
                strokeWidth={7}
                strokeLinecap="round"
                stroke="var(--tdb-green)"
                className="transition-[stroke-dashoffset] duration-1000 ease-out"
                strokeDasharray={CIRCONFERENCE}
                strokeDashoffset={CIRCONFERENCE - (CIRCONFERENCE * valeurAffichee) / 100}
              />
            </svg>
            <span className="absolute [font-family:var(--tdb-font-serif)] text-[27px] font-semibold tracking-tight text-[var(--tdb-ink)]">
              {pourcentage}
              <span className="text-sm font-normal text-[var(--tdb-mute)]">%</span>
            </span>
          </div>
          <p className="mt-4 text-center text-[13.5px] text-[var(--tdb-mute)]">
            {chapitresLus} chapitre{chapitresLus > 1 ? "s" : ""} lu{chapitresLus > 1 ? "s" : ""} sur{" "}
            {totalChapitres}.
          </p>
        </>
      )}
    </section>
  );
}
