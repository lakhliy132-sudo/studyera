"use client";

import Link from "next/link";
import { Fragment, useMemo, useState } from "react";

import { IconeFleche } from "@/components/icones";
import type { AnnaleResumee } from "@/lib/supabase/annales";

/* Deux propositions de composition, à montrer à l'utilisateur après
 * « j'ai pas trop aimé comme ça la composition ». Celle qu'il ne
 * retiendra pas sera supprimée. */

function compter<T>(valeurs: (T | null)[]) {
  const comptes = new Map<T, number>();
  for (const v of valeurs) if (v !== null && v !== "") comptes.set(v, (comptes.get(v) ?? 0) + 1);
  return comptes;
}

function Pastille({ actif }: { actif: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`size-1.5 shrink-0 rounded-full ${actif ? "bg-validation" : "bg-border-strong"}`}
    />
  );
}

/* ------------------------------------------------------------------ */
/* A. Onglets d'années + liste en lignes                               */
/* ------------------------------------------------------------------ */

export function VueAnnees({
  annales,
  matiereSlug,
}: {
  annales: AnnaleResumee[];
  matiereSlug: string;
}) {
  const annees = useMemo(
    () => [...compter(annales.map((a) => a.annee)).entries()].sort((a, b) => b[0] - a[0]),
    [annales],
  );
  const academies = useMemo(
    () => [...new Set(annales.map((a) => a.academie).filter((a): a is string => Boolean(a)))].sort((a, b) => a.localeCompare(b, "fr")),
    [annales],
  );
  const [annee, setAnnee] = useState<number | "toutes">(annees[0]?.[0] ?? "toutes");
  const [academie, setAcademie] = useState("toutes");

  const visibles = annales.filter(
    (a) => (annee === "toutes" || a.annee === annee) && (academie === "toutes" || a.academie === academie),
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Les années en grands onglets : c'est le premier choix de l'élève. */}
      <div role="tablist" aria-label="Année" className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-1 sm:mx-0 sm:px-0">
        {[["toutes", annales.length] as const, ...annees].map(([a, n]) => {
          const actif = annee === a;
          return (
            <button
              key={a}
              type="button"
              role="tab"
              aria-selected={actif}
              onClick={() => setAnnee(a)}
              className={`flex min-w-[118px] shrink-0 flex-col items-start rounded-[16px] border px-5 py-3 transition-colors ${
                actif
                  ? "border-primary bg-primary text-white shadow-[0_10px_24px_rgba(27,58,143,0.2)]"
                  : "border-border bg-surface text-ink hover:border-border-strong"
              }`}
            >
              <span className="font-serif text-[28px] leading-none font-bold">
                {a === "toutes" ? "Tout" : a}
              </span>
              <span className={`mt-1 text-xs ${actif ? "text-white/75" : "text-muted-foreground"}`}>
                {n} {n > 1 ? "sujets" : "sujet"}
              </span>
            </button>
          );
        })}
      </div>

      {academies.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {["toutes", ...academies].map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setAcademie(a)}
              aria-pressed={academie === a}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                academie === a
                  ? "border-ink bg-ink font-semibold text-white"
                  : "border-border bg-surface text-foreground hover:border-border-strong"
              }`}
            >
              {a === "toutes" ? "Toutes les académies" : a}
            </button>
          ))}
        </div>
      )}

      {visibles.length === 0 ? (
        <p className="rounded-[18px] border border-dashed border-border-strong bg-surface p-8 text-center text-sm text-muted-foreground">
          Aucun sujet pour cette académie cette année-là.
        </p>
      ) : (
        <ul className="overflow-hidden rounded-[20px] border border-border bg-surface shadow-sm">
          {visibles.map((annale, i) => (
            <li key={annale.id} className={i > 0 ? "border-t border-border" : ""}>
              <Link
                href={`/examens-regionaux/${matiereSlug}/${annale.id}`}
                className="group flex items-center gap-4 px-4 py-4 transition-colors hover:bg-surface-muted sm:gap-6 sm:px-6"
              >
                <span className="flex size-14 shrink-0 flex-col items-center justify-center rounded-[14px] bg-primary-tint text-primary">
                  <span className="font-serif text-lg leading-none font-bold">{annale.annee}</span>
                  <span className="mt-0.5 text-[10px] font-bold tracking-wide uppercase">
                    {annale.session === "normale" ? "Normale" : "Rattr."}
                  </span>
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="font-titre text-base leading-snug font-bold text-ink sm:text-lg">
                    {annale.academie ?? "Examen régional"}
                  </span>
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    {annale.oeuvre && <span className="font-medium text-ink">{annale.oeuvre}</span>}
                    <span className="flex items-center gap-1.5">
                      <Pastille actif={annale.aCorrige} />
                      {annale.aCorrige ? "Corrigé" : "Sans corrigé"}
                    </span>
                    {annale.aEntrainement && (
                      <span className="flex items-center gap-1.5">
                        <Pastille actif />
                        Entraînement
                      </span>
                    )}
                  </span>
                </span>
                <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-bold text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:flex">
                  Commencer
                  <IconeFleche className="size-4" />
                </span>
                <IconeFleche className="size-4 shrink-0 text-primary sm:hidden" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* B. Grille académie × année                                          */
/* ------------------------------------------------------------------ */

export function VueGrille({
  annales,
  matiereSlug,
}: {
  annales: AnnaleResumee[];
  matiereSlug: string;
}) {
  const annees = useMemo(
    () => [...new Set(annales.map((a) => a.annee))].sort((a, b) => b - a),
    [annales],
  );
  // Les sujets sans académie (anciens sujets nationaux) forment leur
  // propre ligne plutôt que de disparaître.
  const lignes = useMemo(() => {
    const parAcademie = new Map<string, AnnaleResumee[]>();
    for (const a of annales) {
      const cle = a.academie ?? "Sans académie";
      parAcademie.set(cle, [...(parAcademie.get(cle) ?? []), a]);
    }
    return [...parAcademie.entries()].sort((a, b) => a[0].localeCompare(b[0], "fr"));
  }, [annales]);

  const cellule = (sujets: AnnaleResumee[]) =>
    sujets.map((s) => (
      <Link
        key={s.id}
        href={`/examens-regionaux/${matiereSlug}/${s.id}`}
        className="group flex items-center justify-between gap-2 rounded-[12px] border border-border bg-surface px-3 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
      >
        <span className="flex items-center gap-2">
          <Pastille actif={s.aCorrige} />
          {s.session === "normale" ? "Sujet" : "Rattrapage"}
          {s.oeuvre && <span className="font-normal opacity-70">· {s.oeuvre}</span>}
        </span>
        <IconeFleche className="size-3.5 opacity-60 group-hover:opacity-100" />
      </Link>
    ));

  return (
    <div className="flex flex-col gap-4">
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <Pastille actif /> avec corrigé · choisis ton académie et l&apos;année
      </p>

      {/* Bureau : un vrai tableau, une ligne par académie. */}
      <div
        className="hidden overflow-hidden rounded-[20px] border border-border bg-surface shadow-sm md:grid"
        style={{ gridTemplateColumns: `minmax(220px,1.4fr) repeat(${annees.length}, minmax(0,1fr))` }}
      >
        <div className="border-b border-border bg-surface-muted px-5 py-3 text-xs font-bold tracking-[0.14em] text-subtle-foreground uppercase">
          Académie
        </div>
        {annees.map((a) => (
          <div key={a} className="border-b border-s border-border bg-surface-muted px-4 py-3 font-serif text-xl font-bold text-ink">
            {a}
          </div>
        ))}
        {lignes.map(([academie, sujets], i) => (
          <Fragment key={academie}>
            <div className={`flex items-center px-5 py-3 font-titre font-bold text-ink ${i > 0 ? "border-t border-border" : ""}`}>
              {academie}
            </div>
            {annees.map((annee) => {
              const ici = sujets.filter((s) => s.annee === annee);
              return (
                <div key={annee} className={`flex flex-col justify-center gap-1.5 border-s border-border p-2 ${i > 0 ? "border-t" : ""}`}>
                  {ici.length > 0 ? (
                    cellule(ici)
                  ) : (
                    <span className="px-3 text-xs text-subtle-foreground/60">Pas de sujet</span>
                  )}
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>

      {/* Téléphone : une carte par académie, ses années en boutons. */}
      <ul className="flex flex-col gap-3 md:hidden">
        {lignes.map(([academie, sujets]) => (
          <li key={academie} className="flex flex-col gap-3 rounded-[18px] border border-border bg-surface p-4 shadow-sm">
            <span className="font-titre text-base font-bold text-ink">{academie}</span>
            <div className="flex flex-wrap gap-2">
              {[...sujets]
                .sort((a, b) => b.annee - a.annee)
                .map((s) => (
                  <Link
                    key={s.id}
                    href={`/examens-regionaux/${matiereSlug}/${s.id}`}
                    className="flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm font-semibold text-ink hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <Pastille actif={s.aCorrige} />
                    {s.annee}
                    {s.session === "rattrapage" && " · rattr."}
                  </Link>
                ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
