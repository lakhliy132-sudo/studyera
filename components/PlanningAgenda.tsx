"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

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
  /** Date de la prochaine session d'examen (`lib/calendrier.ts`), au
   * format `AAAA-MM-JJ` — `null` si aucune session à venir. */
  dateExamen: string | null;
  /** Début de l'année scolaire, pour la barre de progression. */
  debutAnnee: string;
}

/** Catégories et leurs couleurs, reprises du composant fourni par
 * l'utilisateur, complétées des deux catégories que la base accepte
 * déjà (`rappel`, `autre`) pour ne pas perdre les événements existants. */
const CATEGORIES: Record<string, { libelle: string; couleur: string }> = {
  controle: { libelle: "Contrôle", couleur: "#f43f5e" },
  devoir: { libelle: "Devoir", couleur: "#f59e0b" },
  revision: { libelle: "Révision", couleur: "#10b981" },
  rappel: { libelle: "Rappel", couleur: "#6366f1" },
  autre: { libelle: "Autre", couleur: "#64748b" },
};

/** Les trois catégories proposées à la saisie rapide, comme dans le
 * composant fourni ; les deux autres restent lisibles si un événement
 * les utilise déjà. */
const CATEGORIES_RAPIDES = ["controle", "devoir", "revision"] as const;

const JOURS = ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"];

const versCle = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const depuisCle = (cle: string) => {
  const [annee, mois, jour] = cle.split("-").map(Number);
  return new Date(annee, mois - 1, jour);
};

const ajouterJours = (date: Date, nombre: number) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + nombre);

const ecartJours = (depuis: Date, jusqua: Date) =>
  Math.round((jusqua.getTime() - depuis.getTime()) / 86400000);

/** Lundi de la semaine contenant `date`. */
const debutSemaine = (date: Date) =>
  ajouterJours(date, -((date.getDay() + 6) % 7));

function relatif(nombre: number): string {
  if (nombre === 0) return "aujourd'hui";
  if (nombre === 1) return "demain";
  if (nombre < 0) return `il y a ${-nombre} j`;
  return `dans ${nombre} jours`;
}

/**
 * Planning du calendrier : compte à rebours avec barre de progression,
 * saisie rapide en une ligne, ruban de deux semaines et agenda groupé
 * par jour.
 *
 * Reprend le composant `PlanningAgenda.jsx` fourni par l'utilisateur
 * ("AJOUTE CA"), à trois différences près, toutes pour éviter de
 * montrer de fausses données :
 *
 * - les événements viennent de la table `evenements_eleve` (props) et
 *   y sont écrits, au lieu d'une liste d'exemples en mémoire qui
 *   disparaîtrait au rechargement ;
 * - la date d'examen et le début d'année arrivent aussi en props,
 *   depuis `lib/calendrier.ts` (dates sourcées) plutôt qu'écrites en
 *   dur dans le composant ;
 * - les couleurs passent par des valeurs explicites plutôt que par des
 *   classes Tailwind construites à l'exécution (`bg-${...}`), que le
 *   scanner de Tailwind ne verrait pas.
 */
export default function PlanningAgenda({
  evenements,
  connecte,
  dateExamen,
  debutAnnee,
}: PlanningAgendaProps) {
  const router = useRouter();

  const maintenant = new Date();
  const aujourdHui = new Date(
    maintenant.getFullYear(),
    maintenant.getMonth(),
    maintenant.getDate(),
  );
  const cleAujourdHui = versCle(aujourdHui);

  const [titre, setTitre] = useState("");
  const [date, setDate] = useState(cleAujourdHui);
  const [categorie, setCategorie] = useState<string>("controle");
  const [debutRuban, setDebutRuban] = useState(() => debutSemaine(aujourdHui));
  const [jourChoisi, setJourChoisi] = useState<string | null>(null);
  const [envoi, setEnvoi] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  const joursRestants = dateExamen
    ? ecartJours(aujourdHui, depuisCle(dateExamen))
    : null;
  const progression =
    dateExamen && debutAnnee
      ? Math.min(
          100,
          Math.max(
            0,
            (ecartJours(depuisCle(debutAnnee), aujourdHui) /
              ecartJours(depuisCle(debutAnnee), depuisCle(dateExamen))) *
              100,
          ),
        )
      : 0;

  const jours = Array.from({ length: 14 }, (_, decalage) =>
    ajouterJours(debutRuban, decalage),
  );

  const parDate = useMemo(() => {
    const carte: Record<string, EvenementPlanning[]> = {};
    for (const evenement of evenements) {
      (carte[evenement.date] ??= []).push(evenement);
    }
    return carte;
  }, [evenements]);

  const agenda = useMemo(() => {
    let liste = [...evenements].sort((a, b) => a.date.localeCompare(b.date));
    liste = jourChoisi
      ? liste.filter((evenement) => evenement.date === jourChoisi)
      : liste.filter((evenement) => evenement.date >= cleAujourdHui);

    const groupes: { date: string; items: EvenementPlanning[] }[] = [];
    for (const evenement of liste) {
      const dernier = groupes[groupes.length - 1];
      if (dernier && dernier.date === evenement.date)
        dernier.items.push(evenement);
      else groupes.push({ date: evenement.date, items: [evenement] });
    }
    return groupes;
  }, [evenements, jourChoisi, cleAujourdHui]);

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

    const { error } = await supabase
      .from("evenements_eleve")
      .insert({ eleve_id: user.id, titre: texte, date, categorie });

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
    const { error } = await supabase
      .from("evenements_eleve")
      .delete()
      .eq("id", id);
    if (!error) router.refresh();
  }

  const libelleMois = (date: Date) =>
    date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

  return (
    <div className="flex flex-col gap-5">
      {/* Compte à rebours et progression de l'année */}
      {joursRestants !== null && (
        <section className="rounded-[20px] border border-border bg-surface p-5 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <p className="text-lg text-foreground">
              <span className="font-serif text-3xl font-bold text-primary tabular-nums">
                {joursRestants}
              </span>{" "}
              jours avant l&apos;examen régional
            </p>
            <p className="text-sm text-muted-foreground">
              Session ordinaire,{" "}
              {depuisCle(dateExamen!).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-surface-muted">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${progression}%` }}
            />
          </div>
          <div className="mt-1 flex justify-between text-xs text-subtle-foreground">
            <span>Rentrée</span>
            <span>{Math.round(progression)} % de l&apos;année écoulée</span>
            <span>Examen</span>
          </div>
        </section>
      )}

      {/* Saisie rapide */}
      <section className="rounded-[20px] border border-border bg-surface p-4 shadow-sm">
        {connecte ? (
          <>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <label htmlFor="titre-evenement" className="sr-only">
                Intitulé de l&apos;événement
              </label>
              <input
                id="titre-evenement"
                value={titre}
                onChange={(evenement) => setTitre(evenement.target.value)}
                onKeyDown={(evenement) => {
                  if (evenement.key === "Enter") ajouter();
                }}
                maxLength={120}
                placeholder="Ajoute un contrôle, un devoir ou une révision…"
                className="min-w-0 flex-1 rounded-[12px] border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
              />
              <label htmlFor="date-evenement" className="sr-only">
                Date
              </label>
              <input
                id="date-evenement"
                type="date"
                value={date}
                onChange={(evenement) => setDate(evenement.target.value)}
                className="rounded-[12px] border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary"
              />

              <div className="flex gap-1.5">
                {CATEGORIES_RAPIDES.map((cle) => {
                  const choisie = categorie === cle;
                  return (
                    <button
                      key={cle}
                      type="button"
                      onClick={() => setCategorie(cle)}
                      aria-pressed={choisie}
                      className="rounded-full px-3 py-1.5 text-sm font-semibold ring-1 transition"
                      style={
                        choisie
                          ? {
                              backgroundColor: `color-mix(in srgb, ${CATEGORIES[cle].couleur} 14%, var(--color-surface))`,
                              color: CATEGORIES[cle].couleur,
                              borderColor: "transparent",
                              boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${CATEGORIES[cle].couleur} 35%, transparent)`,
                            }
                          : {
                              backgroundColor: "var(--color-surface)",
                              color: "var(--color-muted-foreground)",
                              boxShadow: "inset 0 0 0 1px var(--color-border)",
                            }
                      }
                    >
                      {CATEGORIES[cle].libelle}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={ajouter}
                disabled={envoi || titre.trim().length === 0}
                className="rounded-[12px] bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50"
              >
                {envoi ? "Ajout…" : "Ajouter"}
              </button>
            </div>
            {erreur && (
              <p className="mt-2 text-xs font-semibold text-erreur">{erreur}</p>
            )}
          </>
        ) : (
          <p className="text-sm text-muted-foreground">
            Connecte-toi pour ajouter tes contrôles, devoirs et révisions à ce
            planning.
          </p>
        )}
      </section>

      {/* Ruban de deux semaines */}
      <section className="rounded-[20px] border border-border bg-surface p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-serif text-lg font-bold text-ink capitalize">
            {libelleMois(debutRuban)}
          </h2>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setDebutRuban(ajouterJours(debutRuban, -7))}
              aria-label="Semaine précédente"
              className="rounded-[10px] px-2.5 py-1 text-muted-foreground transition-colors hover:bg-surface-muted"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => {
                setDebutRuban(debutSemaine(aujourdHui));
                setJourChoisi(null);
              }}
              className="rounded-[10px] px-3 py-1 text-sm font-semibold text-primary transition-colors hover:bg-primary-tint"
            >
              Aujourd&apos;hui
            </button>
            <button
              type="button"
              onClick={() => setDebutRuban(ajouterJours(debutRuban, 7))}
              aria-label="Semaine suivante"
              className="rounded-[10px] px-2.5 py-1 text-muted-foreground transition-colors hover:bg-surface-muted"
            >
              ›
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {jours.map((jour) => {
            const cle = versCle(jour);
            const estAujourdHui = cle === cleAujourdHui;
            const choisi = cle === jourChoisi;
            const duJour = parDate[cle] ?? [];

            return (
              <button
                key={cle}
                type="button"
                onClick={() => {
                  setJourChoisi(choisi ? null : cle);
                  setDate(cle);
                }}
                className={`flex flex-col items-center rounded-[12px] py-2 transition ${
                  choisi
                    ? "bg-primary text-white"
                    : estAujourdHui
                      ? "bg-primary-tint text-primary ring-1 ring-primary/40"
                      : "text-foreground hover:bg-surface-muted"
                } ${jour.getDay() === 0 && !choisi ? "text-subtle-foreground" : ""}`}
              >
                <span className="text-xs">{JOURS[jour.getDay()]}</span>
                <span className="text-lg font-semibold tabular-nums">
                  {jour.getDate()}
                </span>
                <span className="mt-1 flex h-2 gap-0.5">
                  {duJour.slice(0, 3).map((evenement) => (
                    <span
                      key={evenement.id}
                      className="size-1.5 rounded-full"
                      style={{
                        backgroundColor: choisi
                          ? "#ffffff"
                          : (CATEGORIES[evenement.categorie]?.couleur ??
                            "var(--color-primary)"),
                      }}
                    />
                  ))}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Agenda */}
      <section className="rounded-[20px] border border-border bg-surface p-4 shadow-sm sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-lg font-bold text-ink">
            {jourChoisi
              ? depuisCle(jourChoisi).toLocaleDateString("fr-FR", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })
              : "À venir"}
          </h2>
          {jourChoisi && (
            <button
              type="button"
              onClick={() => setJourChoisi(null)}
              className="text-sm font-semibold text-primary hover:underline"
            >
              Tout afficher
            </button>
          )}
        </div>

        {agenda.length === 0 ? (
          <p className="rounded-[12px] bg-surface-muted py-8 text-center text-sm text-muted-foreground">
            {jourChoisi
              ? "Rien de prévu ce jour-là."
              : "Rien de prévu. Ajoute ton prochain contrôle en haut."}
          </p>
        ) : (
          <div className="flex flex-col gap-5">
            {agenda.map((groupe) => {
              const jour = depuisCle(groupe.date);
              return (
                <div key={groupe.date} className="flex gap-4">
                  <div className="w-14 shrink-0 text-center">
                    <p className="text-xs text-subtle-foreground">
                      {JOURS[jour.getDay()]}
                    </p>
                    <p className="font-serif text-2xl font-bold text-ink tabular-nums">
                      {jour.getDate()}
                    </p>
                    <p className="text-xs text-subtle-foreground">
                      {relatif(ecartJours(aujourdHui, jour))}
                    </p>
                  </div>

                  <ul className="flex flex-1 flex-col gap-2">
                    {groupe.items.map((evenement) => (
                      <li
                        key={evenement.id}
                        className="group flex items-center justify-between gap-3 rounded-[12px] bg-surface-muted px-4 py-3"
                        style={{
                          borderLeft: `4px solid ${CATEGORIES[evenement.categorie]?.couleur ?? "var(--color-primary)"}`,
                        }}
                      >
                        <div className="min-w-0">
                          <p className="truncate font-medium text-ink">
                            {evenement.titre}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {CATEGORIES[evenement.categorie]?.libelle ??
                              "Autre"}
                          </p>
                        </div>
                        {connecte && (
                          <button
                            type="button"
                            onClick={() => supprimer(evenement.id)}
                            className="shrink-0 rounded-[10px] px-2 py-1 text-sm text-subtle-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:text-erreur focus-visible:opacity-100"
                          >
                            Supprimer
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
