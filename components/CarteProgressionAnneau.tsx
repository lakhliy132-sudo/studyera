"use client";

import { useEffect, useState } from "react";

interface CarteProgressionAnneauProps {
  chapitresLus: number;
  totalChapitres: number;
}

const RAYON = 46;
const CIRCONFERENCE = 2 * Math.PI * RAYON;

/**
 * Carte "Progression" du tableau de bord — anneau SVG animé plutôt que
 * les trois chiffres alignés de l'ancien `BlocProgression.tsx`
 * (reconstruite sur le modèle fourni par l'utilisateur, "fais moi
 * comme ca mais ajoute des modif bien"). Les stats "copies corrigées"/
 * "note moyenne" de l'ancien bloc vivent maintenant dans
 * `CarteProductionEcrite.tsx` (plus proche de leur sujet) ; la liste
 * détaillée par œuvre vit dans `ListeProgrammeOeuvres.tsx` (section à
 * part, sous la grille) — ce composant-ci ne montre que le total.
 *
 * Composant client : l'animation d'entrée de l'anneau (de 0 au
 * pourcentage réel) a besoin d'un `useEffect`/`useState`, comme le
 * `Ring` du modèle fourni.
 */
export default function CarteProgressionAnneau({ chapitresLus, totalChapitres }: CarteProgressionAnneauProps) {
  const pourcentage = totalChapitres > 0 ? Math.round((chapitresLus / totalChapitres) * 100) : 0;
  const [valeurAffichee, setValeurAffichee] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setValeurAffichee(pourcentage), 120);
    return () => clearTimeout(t);
  }, [pourcentage]);

  return (
    <section className="flex flex-col items-center rounded-lg border border-border bg-surface p-7">
      <span className="mb-5 self-start font-mono text-[10.5px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
        Progression
      </span>

      {chapitresLus === 0 ? (
        <p className="mt-6 mb-2 max-w-[32ch] text-center text-[14.5px] text-muted-foreground">
          Ta progression apparaîtra ici dès que tu auras commencé à lire.
        </p>
      ) : (
        <>
          <div className="relative grid place-items-center">
            <svg viewBox="0 0 110 110" width={118} height={118} className="-rotate-90">
              <circle cx={55} cy={55} r={RAYON} fill="none" strokeWidth={7} className="stroke-border" />
              <circle
                cx={55}
                cy={55}
                r={RAYON}
                fill="none"
                strokeWidth={7}
                strokeLinecap="round"
                className="stroke-validation transition-[stroke-dashoffset] duration-1000 ease-out"
                strokeDasharray={CIRCONFERENCE}
                strokeDashoffset={CIRCONFERENCE - (CIRCONFERENCE * valeurAffichee) / 100}
              />
            </svg>
            <span className="absolute font-serif text-[27px] font-bold tracking-tight text-ink">
              {pourcentage}
              <span className="text-sm font-normal text-muted-foreground">%</span>
            </span>
          </div>
          <p className="mt-4 text-center text-[13.5px] text-muted-foreground">
            {chapitresLus} chapitre{chapitresLus > 1 ? "s" : ""} lu{chapitresLus > 1 ? "s" : ""} sur{" "}
            {totalChapitres}.
          </p>
        </>
      )}
    </section>
  );
}
