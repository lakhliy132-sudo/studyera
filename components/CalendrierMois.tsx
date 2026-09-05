"use client";

import { useState } from "react";

import { IconeFleche } from "@/components/icones";
import { estJourExamenRegional, genererGrilleMois, JOURS_SEMAINE_COURT } from "@/lib/calendrier";

const NOM_MOIS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

/**
 * Grille du mois avec navigation mois précédent/suivant — la date de
 * l'examen régional vit désormais dans sa propre carte à côté (voir
 * CarteExamenRegional.tsx et app/(public)/calendrier/page.tsx) : un
 * premier essai la mettait dans l'en-tête de cette grille, jugé pas
 * assez "à côté" par l'utilisateur ("nonnn je veux que la partie d
 * examen soit a coté"). Composant client (état du mois affiché)
 * séparé de la page pour garder celle-ci en Composant Serveur.
 *
 * Les jours de l'examen (lib/calendrier.ts) restent surlignés dans la
 * grille en les parcourant.
 */
export default function CalendrierMois() {
  const [moisAffiche, setMoisAffiche] = useState(() => {
    const aujourdHui = new Date();
    return new Date(aujourdHui.getFullYear(), aujourdHui.getMonth(), 1);
  });

  const semaines = genererGrilleMois(moisAffiche);

  return (
    <div className="rounded-[24px] border border-border bg-surface p-7 shadow-sm sm:p-10">
      <div className="mb-7 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => setMoisAffiche((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))}
          aria-label="Mois précédent"
          className="flex size-11 items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
        >
          <IconeFleche className="size-5 rotate-180" />
        </button>
        <p className="w-[240px] text-center font-serif text-2xl font-bold text-ink sm:text-3xl">
          {NOM_MOIS[moisAffiche.getMonth()]} {moisAffiche.getFullYear()}
        </p>
        <button
          type="button"
          onClick={() => setMoisAffiche((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))}
          aria-label="Mois suivant"
          className="flex size-11 items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
        >
          <IconeFleche className="size-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2.5 text-center">
        {JOURS_SEMAINE_COURT.map((jour) => (
          <div key={jour} className="py-2 text-sm font-semibold text-subtle-foreground">
            {jour}
          </div>
        ))}

        {semaines.flat().map((jour, index) => {
          const examen = jour.dansLeMois && estJourExamenRegional(jour.date);

          return (
            <div
              key={index}
              title={examen ? "Examen régional" : undefined}
              className={`flex aspect-square items-center justify-center rounded-xl text-lg ${
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
