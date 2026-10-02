"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { IconeCalendrier, IconeFleche } from "@/components/icones";
import { creerClientNavigateur } from "@/lib/supabase/client";

/** Mêmes catégories que lib/supabase/evenements.ts, recopiées ici :
 * ce fichier-là importe `next/headers`, un composant client ne peut
 * donc rien en importer (limite serveur/client de Next.js). */
const CATEGORIES = [
  { cle: "controle", libelle: "Contrôle", couleur: "var(--color-erreur)" },
  {
    cle: "devoir",
    libelle: "Devoir",
    couleur: "var(--color-matiere-francais)",
  },
  {
    cle: "revision",
    libelle: "Révision",
    couleur: "var(--color-matiere-arabe)",
  },
  {
    cle: "rappel",
    libelle: "Rappel",
    couleur: "var(--color-matiere-histoire-geo)",
  },
  { cle: "autre", libelle: "Autre", couleur: "var(--color-matiere-islamique)" },
] as const;

interface EvenementAffiche {
  id: string;
  titre: string;
  date: string;
  categorie: string;
  note: string | null;
}

interface EvenementsEleveProps {
  evenements: EvenementAffiche[];
  /** `false` pour un visiteur non connecté : la carte invite alors à
   * se connecter au lieu d'afficher un formulaire qui échouerait. */
  connecte: boolean;
  /** Date `AAAA-MM-JJ` choisie en cliquant sur une case du mois : le
   * formulaire s'ouvre avec cette date préremplie. */
  dateChoisie?: string | null;
}

function couleur(categorie: string): string {
  return (
    CATEGORIES.find((c) => c.cle === categorie)?.couleur ??
    "var(--color-primary)"
  );
}

function libelle(categorie: string): string {
  return CATEGORIES.find((c) => c.cle === categorie)?.libelle ?? "Autre";
}

/** "lun. 12 octobre" — la date est stockée sans heure, on la découpe
 * donc à la main plutôt que de la faire passer par `new Date(iso)`,
 * qui l'interpréterait en UTC et pourrait reculer d'un jour. */
function dateLisible(date: string): string {
  const [annee, mois, jour] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "short",
    day: "numeric",
    month: "long",
  }).format(new Date(annee, mois - 1, jour));
}

function aujourdHuiIso(): string {
  const maintenant = new Date();
  const mois = String(maintenant.getMonth() + 1).padStart(2, "0");
  const jour = String(maintenant.getDate()).padStart(2, "0");
  return `${maintenant.getFullYear()}-${mois}-${jour}`;
}

/**
 * Carte "Mes événements" de /calendrier : l'élève ajoute ses propres
 * échéances (contrôle, devoir, révision, rappel) et les supprime —
 * demandé par l'utilisateur ("dans la partie de calendrier ou l eleve
 * peut ajouter les enevement principaux de lui").
 *
 * Écriture directe depuis le navigateur, comme les autres formulaires
 * du site ; les policies RLS de `evenements_eleve` garantissent qu'on
 * ne touche qu'à ses propres lignes. `router.refresh()` recharge la
 * page rendue côté serveur, ce qui met aussi à jour les pastilles de
 * la grille du mois.
 *
 * Les événements passés restent affichés, en retrait : ils servent de
 * trace de ce qui a été fait.
 */
export default function EvenementsEleve({
  evenements,
  connecte,
  dateChoisie,
}: EvenementsEleveProps) {
  const router = useRouter();
  const [titre, setTitre] = useState("");
  const [date, setDate] = useState(aujourdHuiIso());
  const [categorie, setCategorie] = useState<string>("controle");
  const [ouvert, setOuvert] = useState(false);
  const [envoi, setEnvoi] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  const aujourdHui = aujourdHuiIso();

  // Un clic sur une case du mois ouvre le formulaire sur cette date.
  useEffect(() => {
    if (!dateChoisie) return;
    setDate(dateChoisie);
    setOuvert(true);
  }, [dateChoisie]);

  async function ajouter(evenement: React.FormEvent) {
    evenement.preventDefault();
    const texte = titre.trim();
    if (!texte || !date || envoi) return;

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

    if (error) {
      setErreur(error.message);
      setEnvoi(false);
      return;
    }

    setTitre("");
    setEnvoi(false);
    setOuvert(false);
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

  return (
    <section className="flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-surface shadow-[0_14px_34px_-26px_rgba(20,30,60,0.45)] transition-shadow hover:shadow-[0_20px_44px_-26px_rgba(20,30,60,0.5)]">
      <div
        className="flex flex-wrap items-center justify-between gap-3 p-5 text-white"
        style={{
          background:
            "linear-gradient(115deg, var(--color-matiere-islamique) 0%, var(--color-primary) 100%)",
        }}
      >
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
            <IconeCalendrier className="size-5" />
          </span>
          <div>
            <p className="font-serif text-lg font-bold text-white">
              Mes événements
            </p>
            <p className="text-xs text-white/80">
              Tes contrôles, devoirs et révisions.
            </p>
          </div>
        </div>

        {connecte && (
          <button
            type="button"
            onClick={() => setOuvert(!ouvert)}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm transition-all hover:-translate-y-px"
          >
            {ouvert ? "Annuler" : "Ajouter"}
            {!ouvert && <IconeFleche className="size-3.5" />}
          </button>
        )}
      </div>

      {connecte && ouvert && (
        <form
          onSubmit={ajouter}
          className="flex flex-col gap-3 border-b border-border bg-surface-muted/50 p-5"
        >
          <label className="flex flex-col gap-1.5 text-xs font-semibold text-muted-foreground">
            Intitulé
            <input
              type="text"
              value={titre}
              onChange={(evenement) => setTitre(evenement.target.value)}
              maxLength={120}
              required
              placeholder="Contrôle de français, chapitre 3…"
              className="rounded-[10px] border border-border bg-surface px-3 py-2 text-sm font-normal text-foreground focus:border-primary focus:outline-none"
            />
          </label>

          <div className="flex flex-wrap gap-3">
            <label className="flex flex-col gap-1.5 text-xs font-semibold text-muted-foreground">
              Date
              <input
                type="date"
                value={date}
                onChange={(evenement) => setDate(evenement.target.value)}
                required
                className="rounded-[10px] border border-border bg-surface px-3 py-2 text-sm font-normal text-foreground focus:border-primary focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-xs font-semibold text-muted-foreground">
              Catégorie
              <select
                value={categorie}
                onChange={(evenement) => setCategorie(evenement.target.value)}
                className="rounded-[10px] border border-border bg-surface px-3 py-2 text-sm font-normal text-foreground focus:border-primary focus:outline-none"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.cle} value={c.cle}>
                    {c.libelle}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {erreur && (
            <p className="text-xs font-semibold text-erreur">{erreur}</p>
          )}

          <button
            type="submit"
            disabled={envoi || titre.trim().length === 0}
            className="w-fit rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50"
          >
            {envoi ? "Enregistrement…" : "Enregistrer"}
          </button>
        </form>
      )}

      <div className="flex flex-1 flex-col p-5">
        {!connecte ? (
          <p className="text-sm text-muted-foreground">
            Connecte-toi pour ajouter tes propres événements à ce calendrier.
          </p>
        ) : evenements.length === 0 ? (
          <p className="flex flex-1 items-center justify-center rounded-[12px] border border-dashed border-border-strong p-6 text-center text-sm text-muted-foreground">
            Aucun événement pour l&apos;instant. Ajoute ton prochain contrôle !
          </p>
        ) : (
          <ul className="flex flex-col gap-2.5">
            {evenements.map((evenement) => {
              const passe = evenement.date < aujourdHui;
              return (
                <li
                  key={evenement.id}
                  className={`group flex items-center gap-3 rounded-[12px] border border-border px-4 py-3 transition-colors hover:bg-surface-muted ${
                    passe ? "opacity-55" : ""
                  }`}
                  style={{
                    borderLeft: `3px solid ${couleur(evenement.categorie)}`,
                  }}
                >
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-sm font-semibold text-ink">
                      {evenement.titre}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {dateLisible(evenement.date)} ·{" "}
                      {libelle(evenement.categorie)}
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => supprimer(evenement.id)}
                    className="shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold text-subtle-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:text-erreur focus-visible:opacity-100"
                    aria-label={`Supprimer ${evenement.titre}`}
                  >
                    Supprimer
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
