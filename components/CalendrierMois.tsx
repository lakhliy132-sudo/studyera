"use client";

import { useState } from "react";

import { IconeFleche } from "@/components/icones";
import { EXAMEN_REGIONAL_1BAC, estJourExamenRegional, genererGrilleMois, JOURS_SEMAINE_COURT } from "@/lib/calendrier";

const NOM_MOIS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

function formaterPeriode(debut: Date, fin: Date) {
  const jourDebut = debut.getDate();
  const jourFin = fin.getDate();
  const mois = NOM_MOIS[fin.getMonth()].toLowerCase();
  return `${jourDebut}-${jourFin} ${mois} ${fin.getFullYear()}`;
}

/**
 * Grille du mois avec navigation mois précédent/suivant, et date de
 * l'examen régional (1ère bac) juste à côté du switch — demandé
 * explicitement par l'utilisateur ("fais le switch des mois et juste
 * a cote fais la date d examen regional au maroc"). Composant client
 * (état du mois affiché) séparé de la page pour garder celle-ci en
 * Composant Serveur.
 *
 * Les dates de l'examen régional viennent de `lib/calendrier.ts` —
 * voir son commentaire pour la source et l'avertissement "à
 * revérifier chaque année". Un lien "Source" pointe vers la page des
 * notes officielles du ministère plutôt que d'affirmer sans recours :
 * un élève peut vérifier lui-même avant de s'y fier.
 */
export default function CalendrierMois() {
  const [moisAffiche, setMoisAffiche] = useState(() => {
    const aujourdHui = new Date();
    return new Date(aujourdHui.getFullYear(), aujourdHui.getMonth(), 1);
  });

  const semaines = genererGrilleMois(moisAffiche);

  return (
    <div className="rounded-[20px] border border-border bg-surface p-6 shadow-sm sm:p-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMoisAffiche((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))}
            aria-label="Mois précédent"
            className="flex size-8 items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
          >
            <IconeFleche className="size-3.5 rotate-180" />
          </button>
          <p className="w-[168px] text-center font-serif text-lg font-bold text-ink">
            {NOM_MOIS[moisAffiche.getMonth()]} {moisAffiche.getFullYear()}
          </p>
          <button
            type="button"
            onClick={() => setMoisAffiche((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))}
            aria-label="Mois suivant"
            className="flex size-8 items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
          >
            <IconeFleche className="size-3.5" />
          </button>
        </div>

        <div className="flex flex-col items-start gap-1 rounded-[12px] border border-border-strong bg-primary-tint px-3.5 py-2 sm:items-end">
          <p className="text-xs font-semibold text-primary">Examen régional — 1ère bac</p>
          {EXAMEN_REGIONAL_1BAC.map((session) => (
            <p key={session.libelle} className="text-[13px] text-ink">
              {session.libelle} : {formaterPeriode(session.debut, session.fin)}
            </p>
          ))}
          <a
            href="https://www.men.gov.ma/index.php/fr/notes"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] text-muted-foreground underline hover:text-primary"
          >
            Source : ministère de l&apos;Éducation nationale
          </a>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1.5 text-center">
        {JOURS_SEMAINE_COURT.map((jour) => (
          <div key={jour} className="py-1.5 text-xs font-semibold text-subtle-foreground">
            {jour}
          </div>
        ))}

        {semaines.flat().map((jour, index) => {
          const examen = jour.dansLeMois && estJourExamenRegional(jour.date);

          return (
            <div
              key={index}
              title={examen ? "Examen régional" : undefined}
              className={`flex aspect-square items-center justify-center rounded-lg text-sm ${
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
