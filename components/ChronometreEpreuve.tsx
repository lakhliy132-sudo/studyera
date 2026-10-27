"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Le chronomètre de l'épreuve, posé dans le bandeau sombre du sujet
 * comme sur la maquette : le temps restant et un seul bouton.
 *
 * Il décompte à partir de la durée officielle du sujet et ne fait rien
 * d'autre : ni enregistrement du temps passé, ni envoi automatique à
 * la fin. Rien n'est prévu en base pour ça, et un chronomètre qui
 * prétendrait garder une trace sans le faire vaudrait moins que pas de
 * chronomètre du tout.
 *
 * L'intervalle est dans un `useRef` : le remplacer ne doit pas
 * provoquer de rendu.
 */
export default function ChronometreEpreuve({
  dureeMinutes,
  clair = false,
}: {
  dureeMinutes: number;
  /** Posé sur un fond clair (barre de la feuille d'examen,
   * FeuilleExamen) plutôt que sur le bandeau sombre : le cadran garde
   * son fond sombre fixe, sous un texte blanc. */
  clair?: boolean;
}) {
  const total = dureeMinutes * 60;
  const [restant, setRestant] = useState(total);
  const [enMarche, setEnMarche] = useState(false);
  const intervalle = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!enMarche) return;
    intervalle.current = setInterval(() => {
      setRestant((secondes) => {
        if (secondes <= 1) {
          setEnMarche(false);
          return 0;
        }
        return secondes - 1;
      });
    }, 1000);
    return () => {
      if (intervalle.current) clearInterval(intervalle.current);
    };
  }, [enMarche]);

  const heures = Math.floor(restant / 3600);
  const minutes = Math.floor((restant % 3600) / 60);
  const secondes = restant % 60;
  const affichage = `${heures}:${String(minutes).padStart(2, "0")}:${String(secondes).padStart(2, "0")}`;
  const termine = restant === 0;

  // Sur fond clair (feuille d'examen) : une seule capsule sombre, le
  // temps et le bouton à l'intérieur, un point qui bat pendant que le
  // temps tourne.
  if (clair) {
    return (
      <div
        className={`flex shrink-0 items-center gap-3 rounded-full py-1.5 ps-4 pe-1.5 text-white shadow-[0_10px_24px_-14px_rgba(16,23,44,0.8)] ${
          termine ? "bg-erreur" : "bg-[#10172c]"
        }`}
      >
        <span aria-hidden="true" className="relative flex size-2">
          {enMarche && <span className="absolute inset-0 animate-ping rounded-full bg-[#4ade80] opacity-75" />}
          <span className={`relative size-2 rounded-full ${enMarche ? "bg-[#4ade80]" : "bg-white/40"}`} />
        </span>
        <span role="timer" aria-live="off" aria-label="Temps restant" className="font-mono text-lg font-bold tabular-nums">
          {affichage}
        </span>
        <button
          type="button"
          onClick={() => {
            if (termine) {
              setRestant(total);
              setEnMarche(false);
            } else setEnMarche((v) => !v);
          }}
          className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-[#10172c] transition-transform hover:scale-105"
        >
          {termine ? "Recommencer" : enMarche ? "Pause" : restant === total ? "Démarrer" : "Reprendre"}
        </button>
      </div>
    );
  }

  return (
    <div className="flex shrink-0 items-center gap-3">
      <span
        role="timer"
        aria-live="off"
        aria-label="Temps restant"
        className={`rounded-[10px] px-3 py-2 font-mono text-lg font-bold tabular-nums ${
          termine ? "bg-erreur/20 text-erreur" : clair ? "bg-[#10172c] text-white" : "bg-white/10 text-white"
        }`}
      >
        {affichage}
      </span>

      {termine ? (
        <button
          type="button"
          onClick={() => {
            setRestant(total);
            setEnMarche(false);
          }}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            clair ? "border border-border text-ink hover:border-primary" : "bg-white/15 text-white hover:bg-white/25"
          }`}
        >
          Recommencer
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setEnMarche((v) => !v)}
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          {enMarche ? "Pause" : restant === total ? "Démarrer" : "Reprendre"}
        </button>
      )}
    </div>
  );
}
