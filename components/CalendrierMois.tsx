"use client";

import { useState } from "react";

import { IconeCalendrier, IconeFleche } from "@/components/icones";
import {
  estJourExamenRegional,
  genererGrilleMois,
  JOURS_SEMAINE_COURT,
} from "@/lib/calendrier";

/** Légende des pastilles : mêmes couleurs que les catégories
 * d'événement (voir EvenementsEleve.tsx), recopiées ici — le fichier
 * lib/supabase/evenements.ts importe `next/headers` et ne peut pas
 * être importé par un composant client. */
const LEGENDE = [
  { libelle: "Contrôle", couleur: "var(--color-erreur)" },
  { libelle: "Devoir", couleur: "var(--color-matiere-francais)" },
  { libelle: "Révision", couleur: "var(--color-matiere-arabe)" },
  { libelle: "Rappel", couleur: "var(--color-matiere-histoire-geo)" },
  { libelle: "Autre", couleur: "var(--color-matiere-islamique)" },
];

/** Lundi de la semaine contenant `date` — la semaine commence le
 * lundi dans la grille du mois (JOURS_SEMAINE_COURT), on garde la même
 * convention ici. */
function lundiDe(date: Date): Date {
  const lundi = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const jourSemaine = (lundi.getDay() + 6) % 7;
  lundi.setDate(lundi.getDate() - jourSemaine);
  return lundi;
}

const NOM_MOIS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
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
interface CalendrierMoisProps {
  /** Dates `AAAA-MM-JJ` des événements de l'élève, avec la couleur de
   * leur catégorie — vide pour un visiteur non connecté. */
  evenements?: { date: string; couleur: string; titre?: string }[];
  /** Appelé au clic sur un jour du mois, avec sa date `AAAA-MM-JJ`.
   * Absent pour un visiteur non connecté : les cases restent alors de
   * simples chiffres, pas des boutons qui ne feraient rien. */
  onJourChoisi?: (date: string) => void;
  /** Jour actuellement sélectionné, mis en évidence. */
  jourSelectionne?: string | null;
}

export default function CalendrierMois({
  evenements = [],
  onJourChoisi,
  jourSelectionne,
}: CalendrierMoisProps) {
  const [vue, setVue] = useState<"mois" | "semaine">("mois");
  const [moisAffiche, setMoisAffiche] = useState(() => {
    const aujourdHui = new Date();
    return new Date(aujourdHui.getFullYear(), aujourdHui.getMonth(), 1);
  });

  const [lundiAffiche, setLundiAffiche] = useState(() => lundiDe(new Date()));

  const semaines = genererGrilleMois(moisAffiche);
  const joursSemaine = Array.from({ length: 7 }, (_, decalage) => {
    const jour = new Date(lundiAffiche);
    jour.setDate(lundiAffiche.getDate() + decalage);
    return jour;
  });

  const maintenant = new Date();
  const estMoisCourant =
    moisAffiche.getFullYear() === maintenant.getFullYear() &&
    moisAffiche.getMonth() === maintenant.getMonth();

  // Événements tombant dans le mois affiché, pour le compteur de
  // l'en-tête.
  const prefixeMois = `${moisAffiche.getFullYear()}-${String(moisAffiche.getMonth() + 1).padStart(2, "0")}`;
  const nombreDuMois = evenements.filter((evenement) =>
    evenement.date.startsWith(prefixeMois),
  ).length;

  // Regroupe les couleurs par jour : un même jour peut porter
  // plusieurs événements (au plus trois pastilles affichées).
  const parJour = new Map<string, string[]>();
  for (const evenement of evenements) {
    const couleurs = parJour.get(evenement.date) ?? [];
    couleurs.push(evenement.couleur);
    parJour.set(evenement.date, couleurs);
  }

  /** Clé `AAAA-MM-JJ` d'une date locale, sans passer par l'UTC. */
  const cleDe = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  return (
    <div className="overflow-hidden rounded-[20px] border border-border bg-surface shadow-[0_14px_34px_-26px_rgba(20,30,60,0.45)] transition-shadow hover:shadow-[0_20px_44px_-26px_rgba(20,30,60,0.5)]">
      <div
        className="p-5 text-white"
        style={{
          background:
            "linear-gradient(115deg, var(--color-primary) 0%, var(--color-matiere-arabe) 100%)",
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
              <IconeCalendrier className="size-5" />
            </span>
            <div>
              <p className="font-serif text-lg font-bold text-white">
                {vue === "mois" ? "Mois" : "Semaine"}
              </p>
              <p className="text-[12.5px] text-white/80">
                {nombreDuMois === 0
                  ? "Visualise tes dates importantes et planifie ta révision."
                  : `${nombreDuMois} événement${nombreDuMois > 1 ? "s" : ""} ce mois-ci.`}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Bascule entre les deux vues. */}
            <div className="flex items-center gap-1 rounded-full bg-white/15 p-1">
              {(["semaine", "mois"] as const).map((choix) => (
                <button
                  key={choix}
                  type="button"
                  onClick={() => setVue(choix)}
                  aria-pressed={vue === choix}
                  className={`rounded-full px-3 py-1 text-xs font-semibold capitalize transition-colors ${
                    vue === choix
                      ? "bg-white text-primary"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {choix}
                </button>
              ))}
            </div>

            {vue === "mois" && !estMoisCourant && (
              <button
                type="button"
                onClick={() => {
                  const maintenantLocal = new Date();
                  setMoisAffiche(
                    new Date(
                      maintenantLocal.getFullYear(),
                      maintenantLocal.getMonth(),
                      1,
                    ),
                  );
                }}
                className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/25"
              >
                Aujourd&apos;hui
              </button>
            )}
            <button
              type="button"
              onClick={() =>
                vue === "mois"
                  ? setMoisAffiche(
                      (m) => new Date(m.getFullYear(), m.getMonth() - 1, 1),
                    )
                  : setLundiAffiche((l) => {
                      const precedent = new Date(l);
                      precedent.setDate(l.getDate() - 7);
                      return precedent;
                    })
              }
              aria-label={
                vue === "mois" ? "Mois précédent" : "Semaine précédente"
              }
              className="flex size-8 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
            >
              <IconeFleche className="size-4 rotate-180" />
            </button>
            <p className="w-[170px] text-center font-serif text-lg font-bold text-white">
              {vue === "mois" ? (
                <>
                  {NOM_MOIS[moisAffiche.getMonth()]}{" "}
                  <span className="text-white/70">
                    {moisAffiche.getFullYear()}
                  </span>
                </>
              ) : (
                <span className="text-[15px]">
                  {joursSemaine[0].getDate()} – {joursSemaine[6].getDate()}{" "}
                  <span className="text-white/70">
                    {NOM_MOIS[joursSemaine[6].getMonth()].toLowerCase()}
                  </span>
                </span>
              )}
            </p>
            <button
              type="button"
              onClick={() =>
                vue === "mois"
                  ? setMoisAffiche(
                      (m) => new Date(m.getFullYear(), m.getMonth() + 1, 1),
                    )
                  : setLundiAffiche((l) => {
                      const suivant = new Date(l);
                      suivant.setDate(l.getDate() + 7);
                      return suivant;
                    })
              }
              aria-label={vue === "mois" ? "Mois suivant" : "Semaine suivante"}
              className="flex size-8 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
            >
              <IconeFleche className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {vue === "semaine" ? (
        <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-4 sm:p-5 lg:grid-cols-7">
          {joursSemaine.map((jour) => {
            const cle = cleDe(jour);
            const couleurs = parJour.get(cle) ?? [];
            const titres = evenements.filter(
              (evenement) => evenement.date === cle,
            );
            const estAujourdHui = cle === cleDe(new Date());
            const selectionne = jourSelectionne === cle;

            const contenu = (
              <>
                <span className="flex items-baseline justify-between gap-1">
                  <span className="text-[10px] font-bold tracking-[0.1em] text-subtle-foreground uppercase">
                    {JOURS_SEMAINE_COURT[(jour.getDay() + 6) % 7]}
                  </span>
                  <span
                    className={`font-serif text-lg font-bold ${estAujourdHui ? "text-primary" : "text-ink"}`}
                  >
                    {jour.getDate()}
                  </span>
                </span>

                <span className="mt-2 flex flex-col gap-1">
                  {titres.length === 0 ? (
                    <span className="text-[11px] text-subtle-foreground">
                      —
                    </span>
                  ) : (
                    titres.slice(0, 3).map((evenement, rang) => (
                      <span
                        key={rang}
                        className="truncate rounded-[6px] px-1.5 py-0.5 text-left text-[11px] font-semibold"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${evenement.couleur} 16%, var(--color-surface))`,
                          color: evenement.couleur,
                        }}
                      >
                        {evenement.titre ?? "Événement"}
                      </span>
                    ))
                  )}
                  {titres.length > 3 && (
                    <span className="text-[10px] text-subtle-foreground">
                      +{titres.length - 3}
                    </span>
                  )}
                </span>
              </>
            );

            const classes = `flex min-h-[112px] flex-col rounded-[12px] border p-2.5 text-left transition-colors ${
              estAujourdHui
                ? "border-primary bg-primary-tint/50"
                : selectionne
                  ? "border-primary bg-primary-tint/30"
                  : "border-border bg-background hover:bg-surface-muted"
            } ${couleurs.length > 0 ? "shadow-sm" : ""}`;

            return onJourChoisi ? (
              <button
                key={cle}
                type="button"
                onClick={() => onJourChoisi(cle)}
                className={classes}
              >
                {contenu}
              </button>
            ) : (
              <div key={cle} className={classes}>
                {contenu}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-7 gap-1.5 p-4 text-center sm:p-5">
          {JOURS_SEMAINE_COURT.map((jour, rang) => (
            <div
              key={jour}
              className={`pb-1 text-[10px] font-bold tracking-[0.1em] uppercase ${
                rang >= 5 ? "text-primary/60" : "text-subtle-foreground"
              }`}
            >
              {jour}
            </div>
          ))}

          {semaines.flat().map((jour, index) => {
            const examen = jour.dansLeMois && estJourExamenRegional(jour.date);
            const couleurs = jour.dansLeMois
              ? (parJour.get(cleDe(jour.date)) ?? [])
              : [];

            const cle = cleDe(jour.date);
            const selectionne = jourSelectionne === cle && jour.dansLeMois;
            const classes = `relative flex h-10 flex-col items-center justify-center rounded-[10px] text-[14px] font-semibold ${
              jour.estAujourdHui
                ? "bg-primary text-white shadow-[0_6px_14px_-6px_var(--color-primary)]"
                : selectionne
                  ? "bg-primary-tint text-primary ring-2 ring-primary"
                  : examen
                    ? "bg-primary/10 text-primary"
                    : jour.dansLeMois
                      ? "text-foreground"
                      : "text-subtle-foreground/50"
            } ${onJourChoisi && jour.dansLeMois && !jour.estAujourdHui ? "cursor-pointer transition-all hover:scale-[1.08] hover:bg-primary-tint hover:text-primary" : ""}`;

            const contenu = (
              <>
                {jour.date.getDate()}
                {couleurs.length > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1 flex gap-0.5"
                  >
                    {couleurs.slice(0, 3).map((couleur, rang) => (
                      <span
                        key={rang}
                        className="size-1.5 rounded-full"
                        style={{ backgroundColor: couleur }}
                      />
                    ))}
                  </span>
                )}
              </>
            );

            const infobulle = examen
              ? "Examen régional"
              : couleurs.length > 0
                ? "Tu as un événement ce jour"
                : onJourChoisi && jour.dansLeMois
                  ? "Ajouter un événement ce jour"
                  : undefined;

            return onJourChoisi && jour.dansLeMois ? (
              <button
                key={index}
                type="button"
                title={infobulle}
                onClick={() => onJourChoisi(cle)}
                className={classes}
              >
                {contenu}
              </button>
            ) : (
              <div key={index} title={infobulle} className={classes}>
                {contenu}
              </div>
            );
          })}
        </div>
      )}

      {evenements.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-border px-4 py-2.5 sm:px-5">
          {LEGENDE.map((entree) => (
            <span
              key={entree.libelle}
              className="flex items-center gap-1.5 text-[11.5px] text-muted-foreground"
            >
              <span
                aria-hidden="true"
                className="size-2 rounded-full"
                style={{ backgroundColor: entree.couleur }}
              />
              {entree.libelle}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
