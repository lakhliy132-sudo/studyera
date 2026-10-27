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

/* ------------------------------------------------------------------ */
/* C. Les copies d'examen                                              */
/* ------------------------------------------------------------------ */

/** Nom arabe officiel de chaque académie, imprimé sous le nom français :
 * c'est celui que l'élève lit en tête de sa propre feuille d'examen. */
const ACADEMIES_AR: Record<string, string> = {
  "Laâyoune-Sakia El Hamra": "العيون الساقية الحمراء",
  "L'Oriental": "الشرق",
  "Guelmim-Oued Noun": "كلميم واد نون",
  "Tanger-Tétouan-Al Hoceïma": "طنجة تطوان الحسيمة",
  "Drâa-Tafilalet": "درعة تافيلالت",
  "Casablanca-Settat": "الدار البيضاء سطات",
  "Fès-Meknès": "فاس مكناس",
  "Rabat-Salé-Kénitra": "الرباط سلا القنيطرة",
  "Béni Mellal-Khénifra": "بني ملال خنيفرة",
  "Marrakech-Safi": "مراكش آسفي",
  "Souss-Massa": "سوس ماسة",
  "Dakhla-Oued Ed-Dahab": "الداخلة وادي الذهب",
};

function duree(minutes: number | null) {
  if (!minutes) return null;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h === 0 ? `${m} min` : m === 0 ? `${h} h` : `${h} h ${m}`;
}

export function VueCopies({
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
  const oeuvres = useMemo(
    () => [...new Set(annales.map((a) => a.oeuvre).filter((a): a is string => Boolean(a)))].sort((a, b) => a.localeCompare(b, "fr")),
    [annales],
  );
  // On ouvre sur l'année la plus récente qui a vraiment de quoi
  // s'entraîner (au moins trois sujets) : en français, 2026 n'en compte
  // qu'un, et ouvrir la page sur une seule carte la faisait paraître vide.
  const anneeDepart = (annees.find(([, n]) => n >= 3) ?? annees[0])?.[0];
  const [annee, setAnnee] = useState<number | "toutes">(anneeDepart ?? "toutes");
  const [academie, setAcademie] = useState("toutes");
  const [oeuvre, setOeuvre] = useState("toutes");

  const visibles = annales.filter(
    (a) =>
      (annee === "toutes" || a.annee === annee) &&
      (academie === "toutes" || a.academie === academie) &&
      (oeuvre === "toutes" || a.oeuvre === oeuvre),
  );

  const selectClasse =
    "appearance-none rounded-full border border-border bg-surface bg-[length:14px] bg-[right_14px_center] bg-no-repeat py-2.5 ps-4 pe-10 text-sm font-semibold text-ink shadow-sm focus:border-primary focus:outline-none";
  const chevron = {
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
  };

  return (
    <div className="flex flex-col gap-8">
      {/* La frise des années : un trait, un point par année. */}
      <div className="flex flex-col gap-5 rounded-[24px] border border-border bg-surface p-5 shadow-sm sm:p-7">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase">Choisis ton année</p>
            <p className="font-titre text-xl font-bold text-ink sm:text-2xl">
              {annee === "toutes" ? "Toutes les années" : `Examens ${annee}`}
              <span className="ms-2 text-base font-normal text-muted-foreground">
                · {visibles.length} {visibles.length > 1 ? "sujets" : "sujet"}
              </span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {academies.length > 1 && (
              <select aria-label="Académie" value={academie} onChange={(e) => setAcademie(e.target.value)} className={selectClasse} style={chevron}>
                <option value="toutes">Toutes les académies</option>
                {academies.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            )}
            {oeuvres.length > 1 && (
              <select aria-label="Œuvre" value={oeuvre} onChange={(e) => setOeuvre(e.target.value)} className={selectClasse} style={chevron}>
                <option value="toutes">Toutes les œuvres</option>
                {oeuvres.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            )}
          </div>
        </div>

        <div className="-mx-5 overflow-x-auto px-5 sm:-mx-7 sm:px-7">
          <div role="tablist" aria-label="Année" className="relative flex min-w-max items-start pt-1">
            <span aria-hidden="true" className="absolute inset-x-6 top-[17px] h-[2px] rounded-full bg-border" />
            {[["toutes", annales.length] as const, ...annees].map(([a, n]) => {
              const actif = annee === a;
              return (
                <button
                  key={a}
                  type="button"
                  role="tab"
                  aria-selected={actif}
                  onClick={() => setAnnee(a)}
                  className="group relative flex w-[76px] shrink-0 flex-col items-center gap-2 sm:w-[88px]"
                >
                  <span
                    className={`flex items-center justify-center rounded-full transition-all ${
                      actif
                        ? "size-8 bg-primary ring-4 ring-primary/20"
                        : "mt-2 size-4 border-2 border-border-strong bg-surface group-hover:border-primary"
                    }`}
                  >
                    {actif && <span className="size-2 rounded-full bg-white" />}
                  </span>
                  <span className={`font-serif leading-none font-bold transition-colors ${actif ? "text-xl text-primary" : "text-base text-ink group-hover:text-primary"}`}>
                    {a === "toutes" ? "Tout" : a}
                  </span>
                  <span className="text-[11px] text-muted-foreground">{n}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {visibles.length === 0 ? (
        <p className="rounded-[18px] border border-dashed border-border-strong bg-surface p-8 text-center text-sm text-muted-foreground">
          Aucun sujet pour ce choix.
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {visibles.map((annale) => {
            const ar = annale.academie ? ACADEMIES_AR[annale.academie] : undefined;
            const temps = duree(annale.duree_minutes);
            return (
              <li key={annale.id}>
                <Link
                  href={`/examens-regionaux/${matiereSlug}/${annale.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-border bg-[var(--color-feuille)] shadow-[0_2px_0_var(--color-border),0_8px_24px_rgba(16,23,44,0.06)] transition-all duration-300 hover:-translate-y-1 hover:-rotate-[0.6deg] hover:shadow-[0_2px_0_var(--color-border),0_22px_44px_rgba(27,58,143,0.16)]"
                >
                  {/* Les lignes et la marge d'une copie double. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-70"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, transparent 0 31px, var(--color-border) 31px 32px)",
                      backgroundPosition: "0 86px",
                      maskImage: "linear-gradient(to bottom, transparent 70px, black 110px)",
                      WebkitMaskImage: "linear-gradient(to bottom, transparent 70px, black 110px)",
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 start-12 w-px"
                    style={{ background: "color-mix(in srgb, var(--color-primary) 30%, transparent)" }}
                  />

                  <span className="relative flex items-center justify-between gap-3 border-b border-border bg-surface/70 px-5 py-3 backdrop-blur-sm">
                    <span className="text-[11px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                      Session {annale.session}
                    </span>
                    <span dir="rtl" lang="ar" className="font-arabe text-xs text-muted-foreground">
                      الامتحان الجهوي الموحد
                    </span>
                  </span>

                  <span className="relative flex flex-1 flex-col gap-1 ps-16 pe-5 pt-5 pb-5">
                    <span className="font-affiche text-[56px] leading-[0.9] text-primary">{annale.annee}</span>
                    <span className="mt-2 pe-16 font-titre text-lg leading-snug font-bold text-ink">
                      {annale.academie ?? "Examen régional"}
                    </span>
                    {ar && (
                      <span dir="rtl" lang="ar" className="w-fit font-arabe text-[15px] text-muted-foreground">
                        {ar}
                      </span>
                    )}
                    {annale.oeuvre && (
                      <span className="mt-2 w-fit rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-semibold text-ink">
                        {annale.oeuvre}
                      </span>
                    )}

                    {/* Le tampon : seulement si le corrigé existe. */}
                    {annale.aCorrige && (
                      <span
                        aria-label="Avec corrigé"
                        className="absolute top-4 end-4 flex size-[66px] rotate-[-14deg] sm:top-5 sm:end-5 sm:size-[74px] flex-col items-center justify-center rounded-full border-2 border-dashed text-center transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-105"
                        style={{
                          borderColor: "color-mix(in srgb, var(--color-validation) 70%, transparent)",
                          color: "var(--color-validation)",
                        }}
                      >
                        <span className="text-lg leading-none font-black">✓</span>
                        <span className="mt-0.5 text-[10px] font-black tracking-[0.12em] uppercase">Corrigé</span>
                      </span>
                    )}

                    <span className="mt-auto flex items-center justify-between gap-3 pt-6">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-muted-foreground">
                        {temps && <span>⏱ {temps}</span>}
                        {annale.aEntrainement && <span>Entraînement chronométré</span>}
                      </span>
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_18px_rgba(27,58,143,0.25)] transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                        <IconeFleche className="size-4" />
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
