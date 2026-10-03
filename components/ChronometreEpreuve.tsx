"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Le chronomètre du mode entraînement : l'élève se met dans les
 * conditions de l'épreuve, avec le temps officiel du sujet.
 *
 * Il compte à rebours à partir de `dureeMinutes` et ne fait rien
 * d'autre : pas d'envoi, pas d'enregistrement du temps passé. Rien
 * n'est prévu en base pour ça, et un chronomètre qui prétendrait
 * garder une trace sans le faire serait pire que pas de chronomètre.
 *
 * `useRef` pour l'intervalle plutôt qu'un state : le changer ne doit
 * pas provoquer de rendu.
 */
export default function ChronometreEpreuve({
  dureeMinutes,
}: {
  dureeMinutes: number;
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
  const affichage = [heures, minutes, secondes]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");
  const ecoule = total > 0 ? ((total - restant) / total) * 100 : 0;
  const termine = restant === 0;

  return (
    <section className="flex flex-col gap-3 rounded-[18px] border border-border bg-surface p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-muted-foreground">
            Mode entraînement
          </span>
          <span
            className={`font-mono text-[32px] leading-none font-bold tabular-nums ${termine ? "text-erreur" : "text-ink"}`}
            role="timer"
            aria-live="off"
          >
            {affichage}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setEnMarche((v) => !v)}
            disabled={termine}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {enMarche ? "Pause" : restant === total ? "Démarrer" : "Reprendre"}
          </button>
          <button
            type="button"
            onClick={() => {
              setEnMarche(false);
              setRestant(total);
            }}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-border-strong"
          >
            Remettre à zéro
          </button>
        </div>
      </div>

      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-surface-muted"
        role="progressbar"
        aria-valuenow={Math.round(ecoule)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Temps écoulé"
      >
        <div
          style={{ width: `${ecoule}%` }}
          className={`h-full rounded-full transition-[width] duration-1000 ease-linear ${termine ? "bg-erreur" : "bg-primary"}`}
        />
      </div>

      {termine && (
        <p className="text-sm font-semibold text-erreur">
          Temps écoulé. À l&apos;examen, tu aurais dû rendre ta copie.
        </p>
      )}
    </section>
  );
}
