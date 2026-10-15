import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import CompteurAnime from "@/components/CompteurAnime";
import CourbeCopies from "@/components/CourbeCopies";
import RevelerAuDefilement from "@/components/RevelerAuDefilement";
import { IconeCoche, IconePlume } from "@/components/icones";
import { joursAvant, prochaineSession } from "@/lib/calendrier";
import { deriverPrenom } from "@/lib/prenom";
import { creerClientServeur } from "@/lib/supabase/server";
import {
  recupererActiviteParJour,
  recupererHistoriqueCopies,
  recupererProgressionParOeuvre,
  recupererSerieJours,
} from "@/lib/supabase/tableauDeBord";

const FUSEAU = "Africa/Casablanca";
const SEMAINES = 14;

function jourIso(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: FUSEAU }).format(date);
}
function cleLocale(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function delai(ms: number): CSSProperties {
  return { "--delai": `${ms}ms` } as CSSProperties;
}
const fr = (n: number) => n.toLocaleString("fr-FR", { maximumFractionDigits: 1 });

/**
 * Page protégée : /progres
 *
 * Refaite d'après une maquette proposée à l'utilisateur (« propose-moi
 * quelque chose pour le progrès »), qu'il a validée (« vas-y, mets-le ») :
 * même écriture que l'accueil élève (quadrillage, titres Lalezar, notes
 * en ruqʿa, carte sombre).
 *
 * De haut en bas :
 * - trois chiffres : série de jours d'affilée, jours révisés ce mois-ci,
 *   chapitres lus ;
 * - « Ton parcours » : sept étapes sur un chemin, chacune comptée sur la
 *   base (chapitres lus, jours d'activité, œuvres finies, copies) ;
 * - les trois œuvres, avec l'anneau de chapitres lus ;
 * - la régularité sur 14 semaines (entrées de `activite` par jour : la
 *   base n'enregistre pas de durée, donc pas de minutes) ;
 * - les rédactions corrigées : moyenne, courbe, forme et fond.
 *
 * Retirés de l'ancienne version, faute de données :
 * - « Examens régionaux blancs » : aucune tentative n'est enregistrée ;
 * - « À retravailler » : les scores des quiz ne sont pas enregistrés ;
 * - l'objectif fixe de 15/20, écrit en dur et non choisi par l'élève.
 * Les trois matières sans suivi le disent en bas de page (CLAUDE.md §9).
 */
export default async function PageProgres() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id ?? null;
  const { data: profil } = user ? await supabase.from("profils").select("nom_complet").eq("id", user.id).maybeSingle() : { data: null };
  const prenom = deriverPrenom(profil?.nom_complet ?? null, user?.email ?? null);

  const session = prochaineSession();
  const rentree = session ? new Date(session.debut.getFullYear() - 1, 8, 1) : new Date(new Date().getFullYear(), 8, 1);
  const joursDepuisRentree = Math.max(1, -joursAvant(rentree) + 1);

  const [progression, copies, serie, activite] = await Promise.all([
    recupererProgressionParOeuvre(userId),
    recupererHistoriqueCopies(userId),
    recupererSerieJours(userId),
    recupererActiviteParJour(userId, Math.max(joursDepuisRentree, SEMAINES * 7)),
  ]);

  const totalChapitres = progression.parOeuvre.reduce((s, o) => s + o.totalChapitres, 0);
  const lus = progression.totalChapitresLus;
  const joursActifs = Object.keys(activite).length;
  const moisCourant = jourIso(new Date()).slice(0, 7);
  const joursCeMois = Object.keys(activite).filter((j) => j.startsWith(moisCourant)).length;
  const oeuvresFinies = progression.parOeuvre.filter((o) => o.totalChapitres > 0 && o.chapitresLus >= o.totalChapitres).length;

  // ——— Les jalons : chacun compté sur la base. ———
  const jalons = [
    { titre: "Premier chapitre", detail: "Lire un chapitre", fait: lus, cible: 1 },
    { titre: "3 jours", detail: "Réviser 3 jours", fait: joursActifs, cible: 3 },
    { titre: "10 chapitres", detail: "Lire 10 chapitres", fait: lus, cible: 10 },
    { titre: "Une œuvre finie", detail: "Finir une œuvre", fait: oeuvresFinies, cible: 1 },
    { titre: "Première copie", detail: "Faire corriger une rédaction", fait: copies.length, cible: 1 },
    { titre: "30 jours", detail: "Réviser 30 jours", fait: joursActifs, cible: 30 },
    { titre: "Programme lu", detail: "Finir les trois œuvres", fait: oeuvresFinies, cible: progression.parOeuvre.length },
  ].map((j) => ({ ...j, atteint: j.fait >= j.cible }));
  const atteints = jalons.filter((j) => j.atteint).length;
  const prochain = jalons.findIndex((j) => !j.atteint);

  // ——— Régularité : 14 semaines, lundi → dimanche. ———
  const auj = new Date();
  const debut = new Date(auj);
  debut.setDate(auj.getDate() - (SEMAINES * 7 - 1));
  debut.setDate(debut.getDate() - ((debut.getDay() + 6) % 7));
  const cases = Array.from({ length: SEMAINES * 7 }, (_, i) => {
    const d = new Date(debut);
    d.setDate(debut.getDate() + i);
    return d;
  });
  const cleAuj = cleLocale(auj);

  // ——— Copies ———
  const trois = copies.slice(-3);
  const moy = (v: (number | null)[]) => {
    const k = v.filter((x): x is number => x !== null);
    return k.length ? k.reduce((a, b) => a + b, 0) / k.length : null;
  };
  const moyenne = copies.length ? copies.reduce((a, c) => a + c.note, 0) / copies.length : null;
  const ecart = copies.length > 1 ? copies[copies.length - 1].note - copies[0].note : null;
  const criteres = [
    { nom: "Forme", sous: "langue, orthographe", note: moy(trois.map((c) => c.forme)) },
    { nom: "Fond", sous: "idées, organisation", note: moy(trois.map((c) => c.fond)) },
  ];

  const carte = "rounded-[28px] border border-border bg-surface shadow-[0_20px_44px_-30px_rgba(15,23,42,0.35)]";

  // Tracé du chemin : une vague qui passe par les 7 stations.
  const W = 1000;
  const pts = jalons.map((_, i) => ({ x: 60 + (i * (W - 120)) / (jalons.length - 1), y: i % 2 === 0 ? 70 : 150 }));
  const chemin = pts.reduce((d, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const a = pts[i - 1];
    const mx = (a.x + p.x) / 2;
    return `${d} C ${mx} ${a.y}, ${mx} ${p.y}, ${p.x} ${p.y}`;
  }, "");
  const partFaite = prochain === -1 ? 1 : prochain === 0 ? 0 : (prochain - 0.5) / (jalons.length - 1);

  return (
    <>
      <RevelerAuDefilement />
      <main className="relative flex w-full flex-col gap-10 overflow-x-clip px-6 pt-16 pb-16 sm:px-9 lg:px-16 xl:px-24 xl:pt-10 2xl:px-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage: "radial-gradient(ellipse 70% 70% at 30% 20%, black 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 30% 20%, black 20%, transparent 75%)",
          }}
        />

        {/* ——— En-tête et trois chiffres ——— */}
        <section className="grid grid-cols-1 items-end gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="animate-entree-carte flex flex-col gap-2">
            <p className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
              <span className="h-0.5 w-10 rounded-full bg-primary" />
              Depuis la rentrée · {joursDepuisRentree} jours
            </p>
            <h1 className="font-affiche text-[38px] leading-[1.08] text-ink sm:text-6xl">
              Regarde le chemin,
              <br />
              <span className="relative inline-block">
                {prenom}
                <svg aria-hidden="true" viewBox="0 0 300 24" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-2 h-4 w-full text-[var(--color-consigne)]">
                  <path className="trace-main" pathLength={1} d="M4 16C60 6 120 4 180 9s90 8 116-2" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>{" "}
              !
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { valeur: serie, libelle: serie > 1 ? "jours d'affilée" : "jour d'affilée", icone: "🔥", sombre: true },
              { valeur: joursCeMois, libelle: "jours révisés ce mois-ci", icone: null, sombre: false },
              { valeur: lus, libelle: `chapitres lus sur ${totalChapitres}`, icone: null, sombre: false },
            ].map((c, i) => (
              <div
                key={c.libelle}
                className={`animate-entree-carte relative flex flex-col justify-between gap-3 overflow-hidden p-4 sm:p-5 ${c.sombre ? "rounded-[24px] text-white" : `${carte} rounded-[24px]`}`}
                style={{
                  animationDelay: `${100 + i * 70}ms`,
                  ...(c.sombre ? { background: "linear-gradient(150deg, var(--fond-sombre-actif) 0%, var(--fond-sombre-haut) 55%, var(--fond-sombre-bas) 100%)" } : {}),
                }}
              >
                {c.icone && <span className="absolute top-3 right-4 text-2xl">{c.icone}</span>}
                <span className={`font-affiche text-5xl leading-none sm:text-6xl ${c.sombre ? "" : "text-ink"}`}>
                  <CompteurAnime valeur={c.valeur} />
                </span>
                <span className={`text-[13px] leading-snug font-semibold sm:text-sm ${c.sombre ? "text-white/75" : "text-muted-foreground"}`}>{c.libelle}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ——— Le parcours : les jalons ——— */}
        <section data-reveler="" className={`relative flex flex-col gap-4 overflow-hidden p-6 sm:p-8 ${carte}`}>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-affiche text-3xl text-ink sm:text-4xl">Ton parcours</h2>
              <p className="text-sm text-muted-foreground">
                {atteints} étape{atteints > 1 ? "s" : ""} franchie{atteints > 1 ? "s" : ""} sur {jalons.length}
              </p>
            </div>
            {prochain !== -1 && (
              <p className="rounded-full bg-primary-tint px-4 py-2 text-sm font-semibold text-primary">
                Prochaine étape : {jalons[prochain].detail.toLowerCase()} · {jalons[prochain].fait}/{jalons[prochain].cible}
              </p>
            )}
          </div>

          {/* Grand écran : le chemin qui serpente. */}
          <div className="relative hidden md:block">
            <svg viewBox={`0 0 ${W} 220`} className="h-auto w-full overflow-visible">
              <path d={chemin} fill="none" stroke="var(--color-border)" strokeWidth="10" strokeLinecap="round" strokeDasharray="2 16" />
              <path
                d={chemin}
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="10"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray={`${partFaite} 1`}
              />
            </svg>
            {jalons.map((j, i) => {
              const p = pts[i];
              const courant = i === prochain;
              return (
                <div
                  key={j.titre}
                  className="absolute flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 text-center"
                  style={{ left: `${(p.x / W) * 100}%`, top: `${(p.y / 220) * 100}%` }}
                >
                  <span className="relative flex size-14 items-center justify-center">
                    {courant && <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping-doux" />}
                    <span
                      className={`relative flex size-14 items-center justify-center rounded-full font-affiche text-xl ${
                        j.atteint
                          ? "bg-primary text-primary-foreground shadow-[0_10px_24px_-10px_var(--color-primary)]"
                          : courant
                            ? "border-[3px] border-primary bg-surface text-primary"
                            : "border-2 border-dashed border-border bg-surface text-muted-foreground"
                      }`}
                    >
                      {j.atteint ? <IconeCoche className="size-6" /> : i + 1}
                    </span>
                  </span>
                  <span className={`text-sm leading-tight font-bold ${j.atteint || courant ? "text-ink" : "text-muted-foreground"}`}>{j.titre}</span>
                  {!j.atteint && (
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {Math.min(j.fait, j.cible)}/{j.cible}
                    </span>
                  )}
                  {courant && (
                    <span dir="rtl" className="font-ruqaa text-lg text-[var(--color-consigne)]" style={{ transform: "rotate(-4deg)" }}>
                      قربتي!
                    </span>
                  )}
                </div>
              );
            })}
            <div className="h-10" />
          </div>

          {/* Téléphone : la même chose en liste verticale. */}
          <ol className="relative flex flex-col gap-4 md:hidden">
            <span aria-hidden="true" className="absolute top-3 bottom-3 left-[19px] w-1 rounded-full bg-border" />
            {jalons.map((j, i) => {
              const courant = i === prochain;
              return (
                <li key={j.titre} className="relative flex items-center gap-4">
                  <span
                    className={`relative flex size-10 shrink-0 items-center justify-center rounded-full font-affiche ${
                      j.atteint ? "bg-primary text-primary-foreground" : courant ? "border-[3px] border-primary bg-surface text-primary" : "border-2 border-dashed border-border bg-surface text-muted-foreground"
                    }`}
                  >
                    {j.atteint ? <IconeCoche className="size-5" /> : i + 1}
                  </span>
                  <span className="flex flex-1 flex-col">
                    <span className={`font-bold ${j.atteint || courant ? "text-ink" : "text-muted-foreground"}`}>{j.titre}</span>
                    <span className="text-xs text-muted-foreground">{j.detail}</span>
                  </span>
                  {!j.atteint && <span className="text-sm font-semibold text-muted-foreground tabular-nums">{Math.min(j.fait, j.cible)}/{j.cible}</span>}
                </li>
              );
            })}
          </ol>
        </section>

        {/* ——— Les œuvres ——— */}
        <section className="flex flex-col gap-4">
          <h2 className="font-affiche text-3xl text-ink sm:text-4xl">Tes lectures</h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {progression.parOeuvre.map((o, i) => {
              const pct = o.totalChapitres > 0 ? Math.round((o.chapitresLus / o.totalChapitres) * 100) : 0;
              const fini = pct === 100;
              const R = 30;
              const C = 2 * Math.PI * R;
              return (
                <li key={o.slug} data-reveler="" style={delai(i * 90)}>
                  <Link href={`/oeuvres/${o.slug}`} className={`group flex h-full items-center gap-5 p-5 transition-transform hover:-translate-y-1 ${carte}`}>
                    <span className="relative h-32 w-[90px] shrink-0 overflow-hidden rounded-xl shadow-lg transition-transform group-hover:-rotate-3">
                      <Image src={`/couvertures/${o.slug}.webp`} alt="" fill sizes="90px" className="object-cover" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-3">
                      <span className="font-titre text-lg leading-tight text-ink">{o.titreFr}</span>
                      <span className="flex items-center gap-3">
                        <svg viewBox="0 0 76 76" className="size-[76px] shrink-0 -rotate-90">
                          <circle cx="38" cy="38" r={R} fill="none" stroke="var(--color-surface-muted)" strokeWidth="8" />
                          <circle
                            cx="38"
                            cy="38"
                            r={R}
                            fill="none"
                            stroke={fini ? "var(--color-validation)" : "var(--color-primary)"}
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={`${(pct / 100) * C} ${C}`}
                          />
                          <text x="38" y="38" transform="rotate(90 38 38)" textAnchor="middle" dominantBaseline="central" className="fill-[var(--color-ink)] font-affiche text-[17px]">
                            {pct}%
                          </text>
                        </svg>
                        <span className="flex flex-col text-sm">
                          <span className="font-bold text-ink tabular-nums">
                            {o.chapitresLus}/{o.totalChapitres}
                          </span>
                          <span className="text-muted-foreground">chapitres</span>
                          {fini ? (
                            <span dir="rtl" className="font-ruqaa text-lg text-[var(--color-validation)]">ساليتيه!</span>
                          ) : (
                            <span className="mt-1 text-xs font-bold text-primary">
                              {o.chapitresLus === 0 ? "Commencer" : "Continuer"} →
                            </span>
                          )}
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ——— Régularité et rédactions ——— */}
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div data-reveler="" className={`flex flex-col gap-5 p-6 sm:p-8 ${carte}`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-affiche text-3xl text-ink">Ta régularité</h2>
                <p className="text-sm text-muted-foreground">
                  {joursActifs} jour{joursActifs > 1 ? "s" : ""} de révision depuis la rentrée
                </p>
              </div>
              <span dir="rtl" className="font-ruqaa text-xl text-[var(--color-consigne)]" style={{ transform: "rotate(-4deg)" }}>
                شوية كل نهار
              </span>
            </div>
            <div>
              <div className="grid w-full auto-cols-fr grid-flow-col grid-rows-7 gap-1 sm:gap-1.5">
                {cases.map((d) => {
                  const cle = cleLocale(d);
                  const n = activite[cle] ?? 0;
                  const futur = d > auj;
                  const intensite = n === 0 ? 0 : n < 3 ? 35 : n < 6 ? 65 : 100;
                  return (
                    <span
                      key={cle}
                      title={`${d.toLocaleDateString("fr-FR", { day: "numeric", month: "long" })} : ${n} activité${n > 1 ? "s" : ""}`}
                      className={`aspect-square w-full rounded-[4px] sm:rounded-[6px] ${cle === cleAuj ? "ring-2 ring-ink ring-offset-2 ring-offset-[var(--color-surface)]" : ""}`}
                      style={{
                        opacity: futur ? 0.35 : 1,
                        backgroundColor: intensite === 0 ? "var(--color-surface-muted)" : `color-mix(in srgb, var(--color-primary) ${intensite}%, var(--color-surface))`,
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              Moins
              {[0, 35, 65, 100].map((v) => (
                <span key={v} className="size-3 rounded-[4px]" style={{ backgroundColor: v === 0 ? "var(--color-surface-muted)" : `color-mix(in srgb, var(--color-primary) ${v}%, var(--color-surface))` }} />
              ))}
              Plus
            </div>
          </div>

          <div data-reveler="" style={delai(100)} className={`flex flex-col gap-4 p-6 sm:p-8 ${carte}`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-affiche text-3xl text-ink">Tes rédactions</h2>
                <p className="text-sm text-muted-foreground">
                  {copies.length === 0 ? "Aucune copie corrigée pour l'instant" : `${copies.length} copie${copies.length > 1 ? "s" : ""} corrigée${copies.length > 1 ? "s" : ""}`}
                </p>
              </div>
              {moyenne !== null && (
                <span className="text-end">
                  <span className="font-affiche text-5xl leading-none text-ink">{fr(moyenne)}</span>
                  <span className="text-lg text-muted-foreground">/20</span>
                  <span className="block text-xs text-muted-foreground">moyenne</span>
                </span>
              )}
            </div>
            {copies.length === 0 ? (
              <Link href="/redaction/nouvelle" className="flex flex-1 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border p-8 text-center transition-colors hover:border-primary">
                <IconePlume className="size-8 text-primary" />
                <span className="text-sm text-muted-foreground">Ta première copie corrigée fera apparaître ta courbe ici.</span>
                <span className="text-sm font-bold text-primary">Écrire une rédaction →</span>
              </Link>
            ) : (
              <>
                <CourbeCopies valeurs={copies.map((c) => c.note)} max={20} />
                {ecart !== null && (
                  <p className="text-sm font-semibold" style={{ color: ecart >= 0 ? "var(--color-validation)" : "var(--color-erreur)" }}>
                    {ecart >= 0 ? "▲ +" : "▼ "}
                    {fr(ecart)} point{Math.abs(ecart) > 1 ? "s" : ""} depuis ta première copie
                  </p>
                )}
                <div className="grid grid-cols-2 gap-3">
                  {criteres.map((c) =>
                    c.note === null ? null : (
                      <div key={c.nom} className="rounded-2xl bg-surface-muted p-4">
                        <span className="flex items-baseline justify-between">
                          <span className="font-bold text-ink">{c.nom}</span>
                          <span className="font-affiche text-2xl text-ink">
                            {fr(c.note)}
                            <span className="text-sm text-muted-foreground">/10</span>
                          </span>
                        </span>
                        <span className="text-xs text-muted-foreground">{c.sous}</span>
                        <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-surface">
                          <span className="barre-croit block h-full rounded-full bg-primary" style={{ width: `${c.note * 10}%`, transformOrigin: "left" }} />
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </>
            )}
          </div>
        </section>

        {/* ——— Les matières sans suivi : dit honnêtement ——— */}
        <section data-reveler="" className="flex flex-col items-start gap-4 rounded-[28px] border-2 border-dashed border-border p-6 sm:flex-row sm:items-center sm:p-7">
          <span className="flex -space-x-3">
            {["arabe", "histoire-geo", "education-islamique"].map((m) => (
              <span key={m} className="relative size-12 overflow-hidden rounded-full border-[3px] border-[var(--color-background)]">
                <Image src={`/${m}-matiere.jpg`} alt="" fill sizes="48px" className="object-cover" />
              </span>
            ))}
          </span>
          <span className="flex-1 text-sm text-muted-foreground">
            <span className="block font-bold text-ink">Arabe, histoire-géo, éducation islamique</span>
            Pas encore de suivi : seules les lectures d&apos;œuvres et les rédactions sont enregistrées pour l&apos;instant.
          </span>
        </section>
      </main>
    </>
  );
}
