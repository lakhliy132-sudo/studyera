"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { IconeFleche } from "@/components/icones";
import type { AnnaleResumee } from "@/lib/supabase/annales";

const SESSIONS = [
  { cle: "toutes", libelle: "Toutes sessions" },
  { cle: "normale", libelle: "Normale" },
  { cle: "rattrapage", libelle: "Rattrapage" },
] as const;

type CleSession = (typeof SESSIONS)[number]["cle"];

/** Pastille d'état : verte et pleine si la ressource existe, grise et
 * éteinte sinon — l'élève voit d'un coup d'œil ce qu'il trouvera. */
function Etat({ actif, libelle }: { actif: boolean; libelle: string }) {
  return (
    <span
      className={`flex items-center gap-1.5 text-xs ${actif ? "font-semibold text-validation" : "text-subtle-foreground"}`}
    >
      <span
        aria-hidden="true"
        className={`size-1.5 rounded-full ${actif ? "bg-validation" : "bg-border-strong"}`}
      />
      {libelle}
    </span>
  );
}

/**
 * La liste filtrable des sujets d'une matière, d'après la maquette
 * fournie par l'utilisateur : recherche, bascule de session, choix de
 * l'œuvre, puis une carte par sujet.
 *
 * Composant client : les trois filtres agissent sans aller-retour
 * serveur. La liste complète d'une matière tient largement en mémoire
 * (quelques dizaines de sujets au plus), inutile de repasser par une
 * requête à chaque frappe.
 *
 * Le menu des œuvres ne propose que celles qui apparaissent vraiment
 * dans les sujets, et disparaît si aucun sujet n'en porte — en arabe et
 * en histoire-géographie, il n'y a pas d'œuvre au programme.
 */
export default function ListeAnnales({
  annales,
  matiereSlug,
  titreMatiere,
}: {
  annales: AnnaleResumee[];
  matiereSlug: string;
  titreMatiere: string;
}) {
  const [recherche, setRecherche] = useState("");
  const [session, setSession] = useState<CleSession>("toutes");
  const [oeuvre, setOeuvre] = useState("toutes");

  const oeuvres = useMemo(
    () =>
      [...new Set(annales.map((a) => a.oeuvre).filter((o): o is string => Boolean(o)))].sort(),
    [annales],
  );

  const visibles = useMemo(() => {
    const termes = recherche.trim().toLowerCase();
    return annales.filter((annale) => {
      if (session !== "toutes" && annale.session !== session) return false;
      if (oeuvre !== "toutes" && annale.oeuvre !== oeuvre) return false;
      if (!termes) return true;
      const texte =
        `${annale.annee} ${annale.session} ${annale.oeuvre ?? ""}`.toLowerCase();
      return termes.split(/\s+/).every((mot) => texte.includes(mot));
    });
  }, [annales, recherche, session, oeuvre]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 rounded-[18px] border border-border bg-surface p-3 sm:flex-row sm:items-center sm:p-4">
        <label htmlFor="recherche-annales" className="sr-only">
          Rechercher un sujet
        </label>
        <input
          id="recherche-annales"
          type="search"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          placeholder="2022, Antigone…"
          className="min-w-0 flex-1 rounded-[12px] border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-subtle-foreground focus:border-primary focus:outline-none"
        />

        <div
          role="group"
          aria-label="Filtrer par session"
          className="flex shrink-0 rounded-[12px] bg-surface-muted p-1"
        >
          {SESSIONS.map((s) => (
            <button
              key={s.cle}
              type="button"
              onClick={() => setSession(s.cle)}
              aria-pressed={session === s.cle}
              className={`rounded-[9px] px-3 py-1.5 text-sm font-semibold transition-colors ${
                session === s.cle
                  ? "bg-surface text-ink shadow-sm"
                  : "text-muted-foreground hover:text-ink"
              }`}
            >
              {s.libelle}
            </button>
          ))}
        </div>

        {oeuvres.length > 0 && (
          <>
            <label htmlFor="oeuvre-annales" className="sr-only">
              Filtrer par œuvre
            </label>
            <select
              id="oeuvre-annales"
              value={oeuvre}
              onChange={(e) => setOeuvre(e.target.value)}
              className="shrink-0 rounded-[12px] border border-border bg-surface px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
            >
              <option value="toutes">Toutes les œuvres</option>
              {oeuvres.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </>
        )}
      </div>

      {visibles.length === 0 ? (
        <p className="rounded-[18px] border border-dashed border-border-strong bg-surface p-8 text-center text-sm text-muted-foreground">
          Aucun sujet ne correspond à cette recherche.
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-[18px] lg:grid-cols-3">
          {visibles.map((annale) => (
            <li key={annale.id}>
              <Link
                href={`/examens-regionaux/${matiereSlug}/${annale.id}`}
                className="group flex h-full flex-col gap-3 rounded-[18px] border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-serif text-[32px] leading-none font-bold text-ink">
                    {annale.annee}
                  </span>
                  {/* La matière, comme sur la maquette (« Français »),
                   * et non plus la durée, déjà donnée dans le bandeau. */}
                  <span className="shrink-0 rounded-full bg-primary-tint px-2.5 py-1 text-xs font-bold text-primary">
                    {titreMatiere}
                  </span>
                </div>

                <span className="text-sm text-muted-foreground">
                  Session {annale.session}
                </span>

                {annale.oeuvre && (
                  <span className="w-fit rounded-full border border-border px-2.5 py-1 text-xs font-medium text-ink">
                    {annale.oeuvre}
                  </span>
                )}

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-3">
                  <span className="flex items-center gap-3">
                    <Etat actif={annale.aCorrige} libelle="Corrigé" />
                    <Etat actif={annale.aEntrainement} libelle="Entraînement" />
                  </span>
                  <span className="flex items-center gap-1 text-sm font-bold text-primary">
                    Ouvrir
                    <IconeFleche className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
