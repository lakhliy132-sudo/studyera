import type { ReactNode } from "react";

import Link from "next/link";

import CourbeCopies from "@/components/CourbeCopies";
import { IconeFleche } from "@/components/icones";
import { joursAvant, prochaineSession } from "@/lib/calendrier";
import { creerClientServeur } from "@/lib/supabase/server";
import {
  recupererActiviteParJour,
  recupererHistoriqueCopies,
  recupererProgressionParOeuvre,
  recupererSerieJours,
  recupererStatsCopies,
} from "@/lib/supabase/tableauDeBord";

/** Objectif de note affiché sur la barre — la valeur de la maquette.
 * Fixe pour l'instant : aucun champ ne permet encore à l'élève de
 * choisir le sien. */
const OBJECTIF = 15;

const SEMAINES_REGULARITE = 12;
const JOURS_REGULARITE = SEMAINES_REGULARITE * 7;

/** Couleur d'accent par œuvre, celles déjà utilisées sur le tableau de
 * bord (lib/couvertures.ts) — gardées cohérentes d'une page à l'autre. */
const COULEURS_OEUVRES: Record<string, string> = {
  antigone: "var(--color-matiere-histoire-geo)",
  "boite-a-merveilles": "var(--color-matiere-arabe)",
  "dernier-jour-condamne": "var(--color-matiere-islamique)",
};

const fr = (nombre: number) => nombre.toLocaleString("fr-FR");

function Carte({
  valeur,
  libelle,
  couleur,
}: {
  valeur: string;
  libelle: string;
  couleur: string;
}) {
  return (
    <div className="flex flex-col justify-center rounded-[20px] border border-border bg-surface p-5 shadow-sm">
      <p
        className="font-serif text-3xl font-bold tabular-nums"
        style={{ color: couleur }}
      >
        {valeur}
      </p>
      <p className="text-sm text-muted-foreground">{libelle}</p>
    </div>
  );
}

function Bloc({
  titre,
  sous,
  children,
}: {
  titre: string;
  sous: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[20px] border border-border bg-surface p-5 shadow-sm">
      <h2 className="font-serif text-lg font-bold text-ink">{titre}</h2>
      <p className="mb-4 text-sm text-muted-foreground">{sous}</p>
      {children}
    </section>
  );
}

/** Clé `AAAA-MM-JJ` d'une date locale. */
function cleDe(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

/**
 * Page protégée : /progres
 *
 * Reprend la maquette `Progression.jsx` fournie par l'utilisateur
 * ("AJOUTE CA") : bandeau de note, cartes de série et de compte à
 * rebours, courbe des expressions écrites, détail par critère, lecture
 * des œuvres et carte de régularité.
 *
 * Les blocs de la maquette qui reposaient sur des données inexistantes
 * ne sont pas repris plutôt que remplis d'exemples :
 *
 * - "Note estimée au régional" et son objectif : aucune estimation
 *   n'est calculée nulle part, et afficher un pronostic inventé
 *   tromperait l'élève. Le bandeau montre donc la vraie moyenne des
 *   copies corrigées ;
 * - "Examens régionaux blancs" : aucun examen blanc n'existe en base ;
 * - "À retravailler" (taux de réussite par thème) : les quiz ne sont
 *   pas encore enregistrés, ces pourcentages seraient inventés.
 *
 * La carte de régularité compte les entrées de la table `activite` par
 * jour : la base n'enregistre aucune durée, elle n'affiche donc pas de
 * minutes comme la maquette.
 */
export default async function PageProgres() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id ?? null;

  const [progression, statsCopies, serie, copies, activite] = await Promise.all(
    [
      recupererProgressionParOeuvre(userId),
      recupererStatsCopies(userId),
      recupererSerieJours(userId),
      recupererHistoriqueCopies(userId),
      recupererActiviteParJour(userId, JOURS_REGULARITE),
    ],
  );

  const session = prochaineSession();
  const joursRestants = session ? joursAvant(session.debut) : null;

  // Moyennes forme/fond sur les trois dernières copies, quand elles
  // sont renseignées.
  const troisDernieres = copies.slice(-3);
  const moyenne = (valeurs: (number | null)[]) => {
    const connues = valeurs.filter(
      (valeur): valeur is number => valeur !== null,
    );
    return connues.length === 0
      ? null
      : connues.reduce((somme, valeur) => somme + valeur, 0) / connues.length;
  };
  const criteres = [
    {
      nom: "Forme (langue, orthographe)",
      note: moyenne(troisDernieres.map((copie) => copie.forme)),
    },
    {
      nom: "Fond (idées, organisation)",
      note: moyenne(troisDernieres.map((copie) => copie.fond)),
    },
  ].filter((critere) => critere.note !== null) as {
    nom: string;
    note: number;
  }[];

  // Grille de régularité : 12 semaines, du lundi au dimanche.
  const aujourdHui = new Date();
  const debut = new Date(aujourdHui);
  debut.setDate(aujourdHui.getDate() - (JOURS_REGULARITE - 1));
  debut.setDate(debut.getDate() - ((debut.getDay() + 6) % 7));
  const joursRegularite = Array.from(
    { length: JOURS_REGULARITE },
    (_, decalage) => {
      const jour = new Date(debut);
      jour.setDate(debut.getDate() + decalage);
      return jour;
    },
  );

  const progressionCopies =
    copies.length > 1 ? copies[copies.length - 1].note - copies[0].note : null;

  return (
    <main className="flex w-full flex-col gap-5 px-6 py-8 sm:px-9">
      <div>
        <Link
          href="/tableau-de-bord"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Retour au tableau de bord
        </Link>
        <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-ink">
          Ma progression
        </h1>
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        <div
          className="rounded-[20px] p-6 text-white shadow-sm lg:col-span-2"
          style={{
            background:
              "linear-gradient(120deg, #131b33 0%, color-mix(in srgb, var(--color-primary) 42%, #131b33) 100%)",
          }}
        >
          <p className="text-sm text-white/70">
            Moyenne de tes expressions écrites corrigées
          </p>
          <p className="mt-1 font-serif text-5xl font-bold tabular-nums">
            {statsCopies.noteMoyenne === null
              ? "—"
              : fr(Number(statsCopies.noteMoyenne.toFixed(1)))}
            <span className="text-2xl text-white/60">/20</span>
          </p>

          <div className="relative mt-6 h-3 rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-white"
              style={{
                width: `${((statsCopies.noteMoyenne ?? 0) / 20) * 100}%`,
              }}
            />
            {/* Repère d'objectif, à la position de la maquette. */}
            <div
              aria-hidden="true"
              className="absolute -top-1.5 h-6 w-0.5 bg-validation"
              style={{ left: `${(OBJECTIF / 20) * 100}%` }}
            />
            <span
              className="absolute top-6 -translate-x-1/2 text-xs text-validation"
              style={{ left: `${(OBJECTIF / 20) * 100}%` }}
            >
              Objectif {OBJECTIF}
            </span>
          </div>

          <p className="mt-9 text-sm text-white/80">
            {statsCopies.noteMoyenne === null
              ? "Envoie une première expression écrite pour voir ta moyenne apparaître ici."
              : statsCopies.noteMoyenne >= OBJECTIF
                ? `Objectif atteint, sur ${statsCopies.copiesCorrigees} copie${statsCopies.copiesCorrigees > 1 ? "s" : ""} corrigée${statsCopies.copiesCorrigees > 1 ? "s" : ""}. Continue comme ça.`
                : `Encore ${fr(Number((OBJECTIF - statsCopies.noteMoyenne).toFixed(1)))} points à gagner, sur ${statsCopies.copiesCorrigees} copie${statsCopies.copiesCorrigees > 1 ? "s" : ""} corrigée${statsCopies.copiesCorrigees > 1 ? "s" : ""}.`}
          </p>
        </div>

        <div className="grid grid-rows-2 gap-4">
          <Carte
            valeur={`${serie} jour${serie > 1 ? "s" : ""}`}
            libelle="de révision d'affilée"
            couleur="var(--color-matiere-histoire-geo)"
          />
          <Carte
            valeur={joursRestants === null ? "—" : `${joursRestants} jours`}
            libelle="avant l'examen régional"
            couleur="var(--color-primary)"
          />
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Bloc
          titre="Mes expressions écrites"
          sous={`${copies.length} copie${copies.length > 1 ? "s" : ""} corrigée${copies.length > 1 ? "s" : ""}`}
        >
          {copies.length === 0 ? (
            <p className="rounded-[12px] bg-surface-muted py-8 text-center text-sm text-muted-foreground">
              Aucune copie corrigée pour l&apos;instant.
            </p>
          ) : (
            <>
              <CourbeCopies
                valeurs={copies.map((copie) => copie.note)}
                max={20}
              />
              {progressionCopies !== null && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {progressionCopies >= 0 ? "+" : ""}
                  {fr(Number(progressionCopies.toFixed(1)))} point
                  {Math.abs(progressionCopies) > 1 ? "s" : ""} depuis ta
                  première copie.
                </p>
              )}
            </>
          )}
        </Bloc>

        <Bloc
          titre="Détail par critère"
          sous="Moyenne sur tes 3 dernières copies"
        >
          {criteres.length === 0 ? (
            <p className="rounded-[12px] bg-surface-muted py-8 text-center text-sm text-muted-foreground">
              Le détail apparaîtra dès qu&apos;une copie aura été notée par
              critère.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {criteres.map((critere) => (
                <div key={critere.nom}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-foreground">{critere.nom}</span>
                    <span className="font-semibold tabular-nums text-ink">
                      {fr(Number(critere.note.toFixed(1)))}/10
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-surface-muted">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${critere.note * 10}%`,
                        backgroundColor:
                          critere.note < 5
                            ? "var(--color-erreur)"
                            : critere.note < 7
                              ? "var(--color-matiere-histoire-geo)"
                              : "var(--color-validation)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </Bloc>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Bloc
          titre="Examens régionaux blancs"
          sous="Tes derniers entraînements"
        >
          <p className="rounded-[12px] bg-surface-muted px-4 py-8 text-center text-sm text-muted-foreground">
            Aucun examen blanc pour l&apos;instant. Cette liste se remplira
            quand les sujets d&apos;examens régionaux seront ajoutés au site.
          </p>
        </Bloc>

        <Bloc
          titre="À retravailler"
          sous="Questions où tu perds le plus de points"
        >
          <p className="rounded-[12px] bg-surface-muted px-4 py-8 text-center text-sm text-muted-foreground">
            Rien à signaler pour l&apos;instant. Les thèmes à revoir
            apparaîtront quand tes résultats de quiz seront enregistrés.
          </p>
        </Bloc>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Bloc titre="Lecture des œuvres" sous="Chapitres lus">
          {progression.parOeuvre.length === 0 ? (
            <p className="rounded-[12px] bg-surface-muted py-8 text-center text-sm text-muted-foreground">
              Aucune œuvre au programme pour l&apos;instant.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {progression.parOeuvre.map((oeuvre) => (
                <div key={oeuvre.slug}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-medium text-ink">
                      {oeuvre.titreFr}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {oeuvre.chapitresLus}/{oeuvre.totalChapitres}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-surface-muted">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${oeuvre.totalChapitres > 0 ? (oeuvre.chapitresLus / oeuvre.totalChapitres) * 100 : 0}%`,
                        backgroundColor:
                          COULEURS_OEUVRES[oeuvre.slug] ??
                          "var(--color-primary)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </Bloc>

        <Bloc
          titre="Ma régularité"
          sous={`${SEMAINES_REGULARITE} dernières semaines`}
        >
          <div className="grid w-fit grid-flow-col grid-rows-7 gap-1.5">
            {joursRegularite.map((jour) => {
              const nombre = activite[cleDe(jour)] ?? 0;
              const opacite =
                nombre === 0 ? 0 : nombre < 3 ? 0.3 : nombre < 6 ? 0.6 : 1;
              return (
                <div
                  key={cleDe(jour)}
                  title={`${jour.toLocaleDateString("fr-FR", { day: "numeric", month: "long" })} — ${nombre} activité${nombre > 1 ? "s" : ""}`}
                  className="size-5 rounded-[5px]"
                  style={{
                    backgroundColor:
                      opacite === 0
                        ? "var(--color-surface-muted)"
                        : `color-mix(in srgb, var(--color-primary) ${opacite * 100}%, var(--color-surface))`,
                  }}
                />
              );
            })}
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            Moins
            {[0, 0.3, 0.6, 1].map((opacite) => (
              <span
                key={opacite}
                className="size-3 rounded-[4px]"
                style={{
                  backgroundColor:
                    opacite === 0
                      ? "var(--color-surface-muted)"
                      : `color-mix(in srgb, var(--color-primary) ${opacite * 100}%, var(--color-surface))`,
                }}
              />
            ))}
            Plus
          </div>
        </Bloc>
      </section>
    </main>
  );
}
