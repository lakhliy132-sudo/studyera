"use client";

import { useState } from "react";

import { IconeCalendrier, IconeFleche } from "@/components/icones";
import { estJourExamenRegional, genererGrilleMois, JOURS_SEMAINE_COURT } from "@/lib/calendrier";

const NOM_MOIS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

/**
 * Carte "Mois" — grille du calendrier avec navigation mois précédent/
 * suivant — reprend la maquette fournie par l'utilisateur ("regarde
 * la photo que je mis dans le fichier fais la comme ca") : en-tête
 * icône+titre+sous-titre à gauche, switch de mois à droite.
 *
 * La liste "Événements à venir", qui vivait à côté de la grille, a été
 * retirée à la demande explicite de l'utilisateur ("dans la partie de
 * mois enleve la partie evenements a venir") : ces événements restent
 * consultables dans le panneau "Examens" à côté (voir
 * CarteExamenRegional.tsx), qui reste inchangé.
 *
 * Les jours de l'examen régional (lib/calendrier.ts) restent surlignés
 * dans la grille en les parcourant.
 */
export default function CalendrierMois() {
  const [moisAffiche, setMoisAffiche] = useState(() => {
    const aujourdHui = new Date();
    return new Date(aujourdHui.getFullYear(), aujourdHui.getMonth(), 1);
  });

  const semaines = genererGrilleMois(moisAffiche);

  return (
    <div className="rounded-[24px] border border-border bg-surface p-7 shadow-sm sm:p-8">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
            <IconeCalendrier className="size-5" />
          </span>
          <div>
            <p className="font-serif text-xl font-bold text-ink">Mois</p>
            <p className="text-[13px] text-muted-foreground">
              Visualise tes dates importantes et planifie ta révision.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMoisAffiche((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))}
            aria-label="Mois précédent"
            className="flex size-9 items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
          >
            <IconeFleche className="size-4 rotate-180" />
          </button>
          <p className="w-[150px] text-center font-serif text-lg font-bold text-ink">
            {NOM_MOIS[moisAffiche.getMonth()]} {moisAffiche.getFullYear()}
          </p>
          <button
            type="button"
            onClick={() => setMoisAffiche((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))}
            aria-label="Mois suivant"
            className="flex size-9 items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
          >
            <IconeFleche className="size-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {JOURS_SEMAINE_COURT.map((jour) => (
          <div key={jour} className="py-1.5 text-sm font-semibold text-subtle-foreground">
            {jour}
          </div>
        ))}

        {semaines.flat().map((jour, index) => {
          const examen = jour.dansLeMois && estJourExamenRegional(jour.date);

          return (
            <div
              key={index}
              title={examen ? "Examen régional" : undefined}
              className={`flex aspect-square items-center justify-center rounded-xl text-base font-medium ${
                jour.estAujourdHui
                  ? "bg-primary font-bold text-white"
                  : examen
                    ? "bg-primary/10 font-semibold text-primary ring-1 ring-inset ring-primary/40"
                    : jour.dansLeMois
                      ? "text-foreground"
                      : "text-subtle-foreground/50"
              }`}
            >
              {jour.date.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
}
