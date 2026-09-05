"use client";

import { useState } from "react";

import { IconeCalendrier, IconeFleche } from "@/components/icones";
import { EXAMEN_REGIONAL_1BAC, estJourExamenRegional, genererGrilleMois, JOURS_SEMAINE_COURT } from "@/lib/calendrier";

const NOM_MOIS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

function formaterPeriodeCourte(debut: Date, fin: Date) {
  return `${debut.getDate()} – ${fin.getDate()} ${NOM_MOIS[fin.getMonth()].toLowerCase()} ${fin.getFullYear()}`;
}

/**
 * Carte "Mois" — grille du calendrier avec navigation mois précédent/
 * suivant, et liste "Événements à venir" à côté d'elle — reprend la
 * maquette fournie par l'utilisateur ("regarde la photo que je mis
 * dans le fichier fais la comme ca") : en-tête icône+titre+sous-titre
 * à gauche, switch de mois à droite (repositionné, avant centré seul
 * en haut de la grille) ; grille et liste d'événements côte à côte,
 * empilées sur mobile.
 *
 * La liste ne montre que les 2 sessions réelles de l'examen régional
 * (lib/calendrier.ts) : contrairement à la maquette, qui illustre
 * 4 événements factices ("Contrôle Français", "Épreuve d'Histoire-
 * Géo"...), aucune date n'a été inventée pour ceux-là — voir le
 * commentaire de EXAMEN_REGIONAL_1BAC. Pas de bouton "Voir tous les
 * événements" : avec seulement 2 événements, tous deux déjà affichés,
 * ce bouton n'aurait aucune destination utile.
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

      <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_240px]">
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

        <div className="flex flex-col gap-3 border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-7">
          <p className="flex items-center gap-2 text-sm font-bold text-ink">
            <IconeCalendrier className="size-4 text-primary" />
            Événements à venir
          </p>

          <ul className="flex flex-col gap-2.5">
            {EXAMEN_REGIONAL_1BAC.map((session, index) => (
              <li key={session.titre}>
                <div className="flex items-center gap-2.5 rounded-[12px] bg-background px-3 py-2.5 shadow-sm">
                  <span
                    aria-hidden="true"
                    className={`size-2 shrink-0 rounded-full ${index === 0 ? "bg-primary" : "bg-primary-vif"}`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm leading-snug font-semibold text-ink">{session.titre}</p>
                    <p className="text-xs text-muted-foreground">
                      {formaterPeriodeCourte(session.debut, session.fin)}
                    </p>
                  </div>
                  <IconeFleche className="size-3.5 shrink-0 text-subtle-foreground" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
