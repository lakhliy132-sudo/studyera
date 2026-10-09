"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";

import { IconeCalendrier, IconeChevronBas } from "@/components/icones";
import {
  CATEGORIES_SAISIE,
  couleurCategorie,
  libelleCategorie,
  type CategorieEvenement,
} from "@/lib/categoriesEvenement";
import { creerClientNavigateur } from "@/lib/supabase/client";

interface EvenementPlanning {
  id: string;
  titre: string;
  /** `AAAA-MM-JJ`, tel qu'en base. */
  date: string;
  categorie: string;
}

interface PlanningAgendaProps {
  evenements: EvenementPlanning[];
  connecte: boolean;
  /** Sessions de l'examen régional (lib/calendrier.ts), en clés
   * `AAAA-MM-JJ`, pour les repérer dans la grille du mois. */
  examens: { titre: string; debut: string; fin: string }[];
  /** Bloc affiché sous "À venir" (la carte "Examens officiels"). */
  children?: React.ReactNode;
}

const JOURS_COURTS = ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"];
const ENTETES = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const NB_A_VENIR = 4;

const versCle = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const depuisCle = (cle: string) => {
  const [annee, mois, jour] = cle.split("-").map(Number);
  return new Date(annee, mois - 1, jour);
};

const ajouterJours = (date: Date, nombre: number) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + nombre);

const ecartJours = (depuis: Date, jusqua: Date) => Math.round((jusqua.getTime() - depuis.getTime()) / 86400000);

function relatif(nombre: number): string {
  if (nombre === 0) return "Aujourd'hui";
  if (nombre === 1) return "Demain";
  if (nombre < 0) return `Il y a ${-nombre} jour${nombre < -1 ? "s" : ""}`;
  if (nombre === 7) return "Dans 1 semaine";
  if (nombre === 14) return "Dans 2 semaines";
  return `Dans ${nombre} jours`;
}

/** Semaines (lundi → dimanche) qui couvrent le mois de `mois`. */
function semainesDuMois(mois: Date): Date[][] {
  const premier = new Date(mois.getFullYear(), mois.getMonth(), 1);
  const dernier = new Date(mois.getFullYear(), mois.getMonth() + 1, 0);
  let jour = ajouterJours(premier, -((premier.getDay() + 6) % 7));
  const semaines: Date[][] = [];
  while (jour <= dernier) {
    semaines.push(Array.from({ length: 7 }, (_, i) => ajouterJours(jour, i)));
    jour = ajouterJours(jour, 7);
  }
  return semaines;
}

/**
 * Planning de /calendrier, refait d'après la dernière maquette de
 * l'utilisateur ("FAIT MOI CA DEJA") : barre de saisie sur une ligne
 * (intitulé, date, catégorie, "Ajouter"), grille du mois avec les
 * événements en pastilles, et à droite "À venir", suivi de la carte
 * "Examens officiels" passée en `children`.
 *
 * Tout vient de la base : les événements de la table `evenements_eleve`
 * (lus par la page, écrits et supprimés ici), les dates d'examen de
 * lib/calendrier.ts. Les lignes de la maquette ("Contrôle de français",
 * "Réviser Antigone"…) sont des exemples : un élève qui n'a rien ajouté
 * voit une liste vide qui l'invite à le faire.
 *
 * Cliquer un jour de la grille le choisit comme date de saisie et
 * n'affiche que ses événements dans la colonne de droite. Les couleurs
 * passent par des valeurs en ligne : une classe Tailwind construite à
 * l'exécution ne serait pas générée (CLAUDE.md §3).
 */
export default function PlanningAgenda({ evenements, connecte, examens, children }: PlanningAgendaProps) {
  const router = useRouter();
  const refDate = useRef<HTMLInputElement>(null);

  const maintenant = new Date();
  const aujourdHui = new Date(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate());
  const cleAujourdHui = versCle(aujourdHui);

  const [titre, setTitre] = useState("");
  const [date, setDate] = useState(cleAujourdHui);
  const [categorie, setCategorie] = useState<CategorieEvenement>("controle");
  const [mois, setMois] = useState(() => new Date(aujourdHui.getFullYear(), aujourdHui.getMonth(), 1));
  const [jourChoisi, setJourChoisi] = useState<string | null>(null);
  const [toutVoir, setToutVoir] = useState(false);
  const [envoi, setEnvoi] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  const parDate = useMemo(() => {
    const carte: Record<string, EvenementPlanning[]> = {};
    for (const evenement of evenements) (carte[evenement.date] ??= []).push(evenement);
    return carte;
  }, [evenements]);

  const examenDuJour = (cle: string) => examens.find((examen) => cle >= examen.debut && cle <= examen.fin);

  const liste = useMemo(() => {
    const triee = [...evenements].sort((a, b) => a.date.localeCompare(b.date));
    return jourChoisi ? triee.filter((e) => e.date === jourChoisi) : triee.filter((e) => e.date >= cleAujourdHui);
  }, [evenements, jourChoisi, cleAujourdHui]);
  const visibles = toutVoir || jourChoisi ? liste : liste.slice(0, NB_A_VENIR);

  async function ajouter() {
    const texte = titre.trim();
    if (!texte || envoi) return;
    setEnvoi(true);
    setErreur(null);

    const supabase = creerClientNavigateur();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setErreur("Ta session a expiré, reconnecte-toi.");
      setEnvoi(false);
      return;
    }

    const { error } = await supabase.from("evenements_eleve").insert({ eleve_id: user.id, titre: texte, date, categorie });
    setEnvoi(false);
    if (error) {
      setErreur(error.message);
      return;
    }
    setTitre("");
    router.refresh();
  }

  async function supprimer(id: string) {
    const supabase = creerClientNavigateur();
    const { error } = await supabase.from("evenements_eleve").delete().eq("id", id);
    if (!error) router.refresh();
  }

  const dateCourte = depuisCle(date).toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short" });
  const libelleDate = dateCourte.charAt(0).toUpperCase() + dateCourte.slice(1);
  const nomMois = mois.toLocaleDateString("fr-FR", { month: "long" });

  return (
    <div className="flex flex-col gap-6">
      {/* Saisie rapide */}
      <section className="rounded-[24px] border border-border bg-surface p-3 shadow-sm">
        {connecte ? (
          <>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <label className="flex min-w-0 flex-1 items-center gap-3 px-2">
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-tint text-lg leading-none text-primary"
                >
                  +
                </span>
                <span className="sr-only">Intitulé de l&apos;événement</span>
                <input
                  value={titre}
                  onChange={(e) => setTitre(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") ajouter();
                  }}
                  maxLength={120}
                  placeholder="Ajoute un contrôle, un devoir ou une révision…"
                  className="min-w-0 flex-1 bg-transparent py-2 text-[15px] text-foreground outline-none placeholder:text-subtle-foreground"
                />
              </label>

              <div className="flex flex-wrap items-center gap-2.5">
                {/* Le sélecteur natif reste dans le DOM (accessible au
                 * clavier) ; le bouton affiche la date en clair. */}
                <label className="relative flex items-center gap-2 rounded-[14px] border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-ink">
                  <IconeCalendrier className="size-4 text-muted-foreground" />
                  {libelleDate}
                  <input
                    ref={refDate}
                    type="date"
                    value={date}
                    onChange={(e) => e.target.value && setDate(e.target.value)}
                    onClick={() => refDate.current?.showPicker?.()}
                    aria-label="Date"
                    className="absolute inset-0 cursor-pointer opacity-0"
                  />
                </label>

                <div role="radiogroup" aria-label="Catégorie" className="flex rounded-[14px] bg-surface-muted p-1">
                  {CATEGORIES_SAISIE.map((cle) => {
                    const choisie = categorie === cle;
                    return (
                      <button
                        key={cle}
                        type="button"
                        role="radio"
                        aria-checked={choisie}
                        onClick={() => setCategorie(cle)}
                        className={`flex items-center gap-2 rounded-[10px] px-3 py-1.5 text-sm transition ${
                          choisie ? "bg-surface font-bold text-ink shadow-sm" : "text-muted-foreground hover:text-ink"
                        }`}
                      >
                        <span aria-hidden="true" className="size-2 rounded-full" style={{ backgroundColor: couleurCategorie(cle) }} />
                        {libelleCategorie(cle)}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={ajouter}
                  disabled={envoi || titre.trim().length === 0}
                  className="rounded-[14px] bg-primary px-6 py-2.5 text-[15px] font-bold text-white shadow-sm transition-all hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {envoi ? "Ajout…" : "Ajouter"}
                </button>
              </div>
            </div>
            {erreur && <p className="mt-2 px-2 text-xs font-semibold text-erreur">{erreur}</p>}
          </>
        ) : (
          <p className="px-3 py-2 text-sm text-muted-foreground">
            <Link href="/connexion" className="font-semibold text-primary hover:underline">
              Connecte-toi
            </Link>{" "}
            pour ajouter tes contrôles, devoirs et révisions à ce calendrier.
          </p>
        )}
      </section>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_340px] 2xl:grid-cols-[minmax(0,1fr)_400px]">
        {/* Grille du mois */}
        <section className="rounded-[28px] border border-border bg-surface p-4 shadow-sm sm:p-7">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-serif text-2xl font-bold text-ink sm:text-[30px]">
              <span className="capitalize">{nomMois}</span>{" "}
              <span className="font-normal text-muted-foreground">{mois.getFullYear()}</span>
            </h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMois(new Date(mois.getFullYear(), mois.getMonth() - 1, 1))}
                aria-label="Mois précédent"
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-surface-muted hover:text-ink"
              >
                <IconeChevronBas className="size-4 rotate-90" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setMois(new Date(aujourdHui.getFullYear(), aujourdHui.getMonth(), 1));
                  setJourChoisi(null);
                  setDate(cleAujourdHui);
                }}
                className="rounded-full bg-primary-tint px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Aujourd&apos;hui
              </button>
              <button
                type="button"
                onClick={() => setMois(new Date(mois.getFullYear(), mois.getMonth() + 1, 1))}
                aria-label="Mois suivant"
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-surface-muted hover:text-ink"
              >
                <IconeChevronBas className="size-4 -rotate-90" />
              </button>
            </div>
          </div>

          {/* Grille en vrai calendrier ("j'ai pas aimé ça" devant les
           * cases bleues séparées) : une seule feuille, des filets fins
           * entre les jours (l'écart de 1 px laisse voir le fond de la
           * bordure), le week-end teinté, les jours passés atténués. */}
          <div className="overflow-hidden rounded-[18px] border border-border">
            <div className="grid grid-cols-7 border-b border-border bg-surface-muted">
              {ENTETES.map((jour, i) => (
                <p
                  key={jour}
                  className={`py-2.5 text-center text-[11px] font-bold tracking-[0.08em] uppercase sm:text-xs ${
                    i >= 5 ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {jour}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-px bg-border">
              {semainesDuMois(mois)
                .flat()
                .map((jour, i) => {
                  const cle = versCle(jour);
                  const horsMois = jour.getMonth() !== mois.getMonth();
                  const estAujourdHui = cle === cleAujourdHui;
                  const passe = jour < aujourdHui;
                  const weekEnd = i % 7 >= 5;
                  const choisi = cle === jourChoisi;
                  const duJour = parDate[cle] ?? [];
                  const examen = examenDuJour(cle);
                  const pastilles = [
                    ...(examen ? [{ id: `examen-${cle}`, titre: examen.titre, couleur: "var(--color-primary)" }] : []),
                    ...duJour.map((e) => ({ id: e.id, titre: e.titre, couleur: couleurCategorie(e.categorie) })),
                  ];

                  return (
                    <button
                      key={cle}
                      type="button"
                      onClick={() => {
                        setJourChoisi(choisi ? null : cle);
                        setDate(cle);
                      }}
                      aria-pressed={choisi}
                      aria-label={jour.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                      className={`relative flex min-h-[60px] flex-col items-start gap-1 overflow-hidden p-1.5 text-left transition-colors sm:min-h-[96px] sm:p-2.5 ${
                        estAujourdHui
                          ? "bg-primary-tint"
                          : weekEnd || horsMois
                            ? "bg-surface-muted hover:bg-primary-tint/60"
                            : "bg-surface hover:bg-primary-tint/60"
                      } ${choisi ? "z-10 ring-2 ring-primary ring-inset" : ""}`}
                    >
                      <span
                        className={`flex items-center justify-center text-xs tabular-nums sm:text-sm ${
                          estAujourdHui
                            ? "size-6 rounded-full bg-primary font-bold text-white sm:size-7"
                            : horsMois
                              ? "text-subtle-foreground/50"
                              : passe
                                ? "text-subtle-foreground"
                                : "font-semibold text-ink"
                        }`}
                      >
                        {jour.getDate()}
                      </span>
                      {/* Téléphone : un point par événement. Ordinateur :
                       * l'intitulé en pastille, deux au plus. */}
                      <span className="flex gap-1 sm:hidden">
                        {pastilles.slice(0, 3).map((p) => (
                          <span key={p.id} className="size-1.5 rounded-full" style={{ backgroundColor: p.couleur }} />
                        ))}
                      </span>
                      <span className="hidden w-full flex-col gap-1 sm:flex">
                        {pastilles.slice(0, 2).map((p) => (
                          <span
                            key={p.id}
                            className="flex w-full items-center gap-1.5 truncate rounded-[8px] px-2 py-1 text-xs font-medium"
                            style={{ color: p.couleur, backgroundColor: `color-mix(in srgb, ${p.couleur} 13%, var(--color-surface))` }}
                          >
                            <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full" style={{ backgroundColor: p.couleur }} />
                            <span className="truncate">{p.titre}</span>
                          </span>
                        ))}
                        {pastilles.length > 2 && <span className="px-2 text-[11px] text-muted-foreground">+{pastilles.length - 2}</span>}
                      </span>
                    </button>
                  );
                })}
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-6">
          {/* À venir, ou les événements du jour choisi */}
          <section className="rounded-[28px] border border-border bg-surface p-6 shadow-sm sm:p-7">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="font-serif text-2xl font-bold text-ink">
                {jourChoisi ? (
                  <span className="capitalize">
                    {depuisCle(jourChoisi).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                  </span>
                ) : (
                  "À venir"
                )}
              </h2>
              {jourChoisi ? (
                <button type="button" onClick={() => setJourChoisi(null)} className="text-sm font-bold text-primary hover:underline">
                  Tout afficher
                </button>
              ) : (
                liste.length > NB_A_VENIR && (
                  <button type="button" onClick={() => setToutVoir(!toutVoir)} className="text-sm font-bold text-primary hover:underline">
                    {toutVoir ? "Réduire" : "Tout voir"}
                  </button>
                )
              )}
            </div>

            {visibles.length === 0 ? (
              <p className="rounded-[16px] bg-surface-muted px-4 py-8 text-center text-sm text-muted-foreground">
                {jourChoisi
                  ? "Rien de prévu ce jour-là."
                  : connecte
                    ? "Rien de prévu. Ajoute ton prochain contrôle en haut."
                    : "Tes contrôles, devoirs et révisions s'afficheront ici."}
              </p>
            ) : (
              <ul className="flex flex-col divide-y divide-border">
                {visibles.map((evenement) => {
                  const jour = depuisCle(evenement.date);
                  const couleur = couleurCategorie(evenement.categorie);
                  return (
                    <li key={evenement.id} className="group flex items-center gap-4 py-4">
                      <span className="flex w-14 shrink-0 flex-col items-center rounded-[14px] bg-surface-muted py-2">
                        <span className="text-xs text-muted-foreground">{JOURS_COURTS[jour.getDay()]}</span>
                        <span className="font-serif text-2xl leading-tight font-bold text-ink tabular-nums">{jour.getDate()}</span>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="line-clamp-2 block leading-snug font-bold text-ink">{evenement.titre}</span>
                        <span className="block text-sm text-muted-foreground">{relatif(ecartJours(aujourdHui, jour))}</span>
                        {connecte && (
                          <button
                            type="button"
                            onClick={() => supprimer(evenement.id)}
                            className="text-xs text-subtle-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:text-erreur focus-visible:opacity-100"
                          >
                            Supprimer
                          </button>
                        )}
                      </span>
                      <span
                        className="shrink-0 rounded-full px-3 py-1 text-xs font-bold"
                        style={{ color: couleur, backgroundColor: `color-mix(in srgb, ${couleur} 13%, var(--color-surface))` }}
                      >
                        {libelleCategorie(evenement.categorie)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          {children}
        </div>
      </div>
    </div>
  );
}
