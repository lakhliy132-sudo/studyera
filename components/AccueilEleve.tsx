import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import CompteurAnime from "@/components/CompteurAnime";
import RevelerAuDefilement from "@/components/RevelerAuDefilement";
import { IconeCoche, IconePlume } from "@/components/icones";
import { joursAvant, prochaineSession } from "@/lib/calendrier";
import { couleurCategorie, libelleCategorie } from "@/lib/categoriesEvenement";
import { cleCorrecteurPresente } from "@/lib/correcteur";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { couleurMatiere } from "@/lib/palette-matieres";
import { QUOTA_QUOTIDIEN_MAX } from "@/lib/quota";
import { resumerAnnalesParMatiere } from "@/lib/supabase/annales";
import { compterCoursParCategorie } from "@/lib/supabase/contenu";
import { recupererEvenementsEleve } from "@/lib/supabase/evenements";
import {
  recupererActiviteParJour,
  recupererProgressionParOeuvre,
  recupererQuotaRestant,
  recupererRepriseLecture,
} from "@/lib/supabase/tableauDeBord";

const FUSEAU = "Africa/Casablanca";

/** « 2026-10-15 » à l'heure du Maroc. */
function jourIso(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: FUSEAU }).format(date);
}

function delai(ms: number): CSSProperties {
  return { "--delai": `${ms}ms` } as CSSProperties;
}

/** Les sept jours de la semaine en cours (lundi → dimanche), au format
 * AAAA-MM-JJ. */
function semaineEnCours(): string[] {
  const aujourdhui = new Date(`${jourIso(new Date())}T12:00:00`);
  const decalage = (aujourdhui.getDay() + 6) % 7; // lundi = 0
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(aujourdhui);
    d.setDate(aujourdhui.getDate() - decalage + i);
    return jourIso(d);
  });
}

const MOIS_COURTS = ["JAN", "FÉV", "MAR", "AVR", "MAI", "JUIN", "JUIL", "AOÛT", "SEP", "OCT", "NOV", "DÉC"];

/**
 * Accueil d'un élève connecté (et dont l'accès est actif).
 *
 * D'après la maquette proposée à l'utilisateur, « inspirée de la
 * première page du site », qu'il a validée (« vas-y, mets-moi la même
 * chose ») : même écriture que l'accueil visiteur (quadrillage de
 * cahier, titres Lalezar, notes en ruqʿa, carte sombre du compte à
 * rebours, cartes arrondies en grille).
 *
 * De haut en bas :
 * - bonjour et « Reprendre la lecture » : le dernier chapitre ouvert
 *   (table `activite`), ou le premier chapitre si l'élève n'a encore
 *   rien lu, avec l'avancement réel dans cette œuvre ;
 * - le compte à rebours de l'examen régional, avec la part de l'année
 *   écoulée depuis la rentrée ;
 * - les quatre matières : seul le français a un suivi (chapitres lus) ;
 *   les autres disent « Pas encore de suivi » (CLAUDE.md §9) ;
 * - les sujets régionaux par matière et par année, comptés en base ;
 * - le correcteur et les corrections qui restent aujourd'hui, ou
 *   « Bientôt disponible » sans clé d'API ;
 * - les trois prochaines échéances du calendrier de l'élève ;
 * - « Ta semaine » : les jours de la semaine en cours où l'élève a
 *   une activité enregistrée (lecture, quiz, copie…).
 *
 * Seules les notes en ruqʿa sont des encouragements écrits ; tout le
 * reste est compté sur la base de l'élève. Les marges restent celles
 * d'origine de l'accueil (`px-6 sm:px-9`, CLAUDE.md §4).
 */
export default async function AccueilEleve({ prenom, userId }: { prenom: string; userId: string }) {
  const semaine = semaineEnCours();
  const [progression, reprise, cours, annales, evenements, quotaRestant, activite] = await Promise.all([
    recupererProgressionParOeuvre(userId),
    recupererRepriseLecture(userId),
    compterCoursParCategorie(FILIERE_ACTUELLE),
    resumerAnnalesParMatiere(),
    recupererEvenementsEleve(),
    recupererQuotaRestant(userId),
    recupererActiviteParJour(userId, 8),
  ]);

  const session = prochaineSession();
  const jours = session ? joursAvant(session.debut) : null;
  let progressionAnnee = 0;
  if (session) {
    const rentree = new Date(session.debut.getFullYear() - 1, 8, 1);
    const total = joursAvant(session.debut) - joursAvant(rentree);
    progressionAnnee = total > 0 ? Math.min(100, Math.max(0, Math.round((-joursAvant(rentree) / total) * 100))) : 0;
  }

  const aujourdhui = jourIso(new Date());
  const dateDuJour = new Intl.DateTimeFormat("fr-FR", { timeZone: FUSEAU, weekday: "long", day: "numeric", month: "long" }).format(new Date());

  const totalChapitres = progression.parOeuvre.reduce((s, o) => s + o.totalChapitres, 0);
  const oeuvreReprise = reprise ? progression.parOeuvre.find((o) => o.slug === reprise.oeuvreSlug) : undefined;
  const pctReprise = oeuvreReprise && oeuvreReprise.totalChapitres > 0 ? Math.round((oeuvreReprise.chapitresLus / oeuvreReprise.totalChapitres) * 100) : 0;

  const francais = (cours["langue"] ?? 0) + (cours["production-ecrite"] ?? 0);
  const matieres = [
    { slug: "francais", href: "/francais", nom: "Français", photo: "/francais-matiere.jpg", lecons: francais, suivi: totalChapitres > 0 ? { lus: progression.totalChapitresLus, total: totalChapitres } : null },
    { slug: "arabe", href: "/arabe", nom: "Arabe", photo: "/arabe-matiere.jpg", lecons: cours["arabe"] ?? 0, suivi: null },
    { slug: "histoire-geo", href: "/histoire-geo", nom: "Histoire-Géo", photo: "/histoire-geo-matiere.jpg", lecons: cours["histoire-geo"] ?? 0, suivi: null },
    { slug: "education-islamique", href: "/education-islamique", nom: "Éducation islamique", photo: "/education-islamique-matiere.jpg", lecons: cours["education-islamique"] ?? 0, suivi: null },
  ];

  const sujets = [
    { nom: "Français", n: annales["francais"]?.nombre ?? 0 },
    { nom: "Arabe", n: annales["arabe"]?.nombre ?? 0 },
    { nom: "Éduc. islamique", n: annales["education-islamique"]?.nombre ?? 0 },
  ].filter((s) => s.n > 0);
  const parAnnee: Record<number, number> = {};
  for (const r of Object.values(annales)) for (const [a, n] of Object.entries(r.parAnnee)) parAnnee[Number(a)] = (parAnnee[Number(a)] ?? 0) + n;
  const anneesConnues = Object.keys(parAnnee).map(Number);
  const annees = anneesConnues.length
    ? Array.from({ length: Math.max(...anneesConnues) - Math.min(...anneesConnues) + 1 }, (_, i) => Math.min(...anneesConnues) + i)
    : [];
  const maxAnnee = Math.max(1, ...Object.values(parAnnee));

  const correcteur = cleCorrecteurPresente();
  const utilisees = QUOTA_QUOTIDIEN_MAX - quotaRestant;

  const aVenir = evenements.filter((e) => e.date >= aujourdhui).slice(0, 3);

  const joursActifs = semaine.filter((j) => (activite[j] ?? 0) > 0).length;
  const noteSemaine = joursActifs >= 3 ? "كمل هكا!" : joursActifs > 0 ? "مزيان، زيد!" : "ياله نبداو!";

  const carte = "rounded-[28px] border border-border bg-surface shadow-[0_20px_44px_-30px_rgba(15,23,42,0.35)]";

  return (
    <>
      <RevelerAuDefilement />
      <main className="relative flex w-full flex-col gap-8 overflow-x-clip px-6 pt-16 pb-12 sm:px-9 xl:pt-8">
        {/* Quadrillage de cahier, comme la première page. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage: "radial-gradient(ellipse 70% 70% at 30% 20%, black 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 30% 20%, black 20%, transparent 75%)",
          }}
        />

        {/* ——— Bonjour, reprise, compte à rebours ——— */}
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-6">
            <div className="animate-entree-carte flex flex-col gap-2">
              <p className="flex items-center gap-3 text-sm font-semibold text-muted-foreground first-letter:uppercase">
                <span className="h-0.5 w-10 rounded-full bg-primary" />
                <span className="first-letter:uppercase">{dateDuJour}</span>
              </p>
              <h1 className="font-affiche text-[38px] leading-[1.08] text-ink sm:text-6xl">
                Salut {prenom},
                <br />
                {reprise && !reprise.estRecommandation ? "on reprend " : "on commence "}
                <span className="relative inline-block">
                  {reprise && !reprise.estRecommandation ? "où tu en étais" : "par une lecture"}
                  <svg aria-hidden="true" viewBox="0 0 300 24" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-2 h-4 w-full text-[var(--color-consigne)]">
                    <path className="trace-main" pathLength={1} d="M4 16C60 6 120 4 180 9s90 8 116-2" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                ?
              </h1>
            </div>

            {reprise && (
              <Link
                href={reprise.url}
                className={`animate-entree-carte group relative flex items-center gap-4 overflow-visible p-4 transition-transform hover:-translate-y-0.5 sm:gap-5 sm:p-5 sm:pe-6 ${carte}`}
                style={{ animationDelay: "100ms" }}
              >
                <span className="relative h-24 w-[68px] shrink-0 overflow-hidden rounded-xl shadow-md sm:h-28 sm:w-20">
                  <Image src={`/couvertures/${reprise.oeuvreSlug}.webp`} alt="" fill sizes="80px" className="object-cover" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span className="text-[11px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                    {reprise.estRecommandation ? "Pour commencer" : "Reprendre la lecture"}
                  </span>
                  <span className="truncate font-titre text-lg text-ink sm:text-xl">{reprise.oeuvreTitreFr}</span>
                  <span className="truncate text-sm text-muted-foreground">
                    {reprise.chapitreTitreFr.startsWith("Scène") || reprise.chapitreTitreFr.startsWith("Chapitre")
                      ? reprise.chapitreTitreFr
                      : `Chapitre ${reprise.chapitreNumero} · ${reprise.chapitreTitreFr}`}
                  </span>
                  {oeuvreReprise && (
                    <span className="mt-1 flex items-center gap-3">
                      <span className="h-2 flex-1 overflow-hidden rounded-full bg-surface-muted">
                        <span className="barre-croit block h-full rounded-full bg-primary" style={{ width: `${pctReprise}%`, transformOrigin: "left" }} />
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground tabular-nums">
                        {oeuvreReprise.chapitresLus}/{oeuvreReprise.totalChapitres}
                      </span>
                    </span>
                  )}
                </span>
                <span className="hidden shrink-0 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-[0_12px_26px_-12px_var(--color-primary)] transition-transform group-hover:translate-x-0.5 sm:block">
                  {reprise.estRecommandation ? "Commencer →" : "Continuer →"}
                </span>
                <span dir="rtl" className="absolute -top-3 right-6 hidden font-ruqaa text-xl text-[var(--color-consigne)] lg:block" style={{ transform: "rotate(-4deg)" }}>
                  خمس دقايق برك!
                </span>
              </Link>
            )}
          </div>

          {/* Compte à rebours : la carte sombre de la première page. */}
          {session && jours !== null && jours >= 0 && (
            <div
              className="animate-entree-carte relative flex flex-col justify-between gap-8 overflow-hidden rounded-[28px] p-7 text-white sm:p-8"
              style={{ animationDelay: "150ms", background: "linear-gradient(150deg, var(--fond-sombre-actif) 0%, var(--fond-sombre-haut) 55%, var(--fond-sombre-bas) 100%)" }}
            >
              <svg aria-hidden="true" viewBox="0 0 200 200" className="pointer-events-none absolute -bottom-24 -left-24 size-80 text-white/10">
                {[96, 74, 52].map((r) => (
                  <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="1" />
                ))}
              </svg>
              <div className="relative flex items-center justify-between gap-3 text-sm font-semibold text-white/75">
                <span className="flex items-center gap-2.5">
                  <span className="relative flex size-2">
                    <span className="absolute inset-0 rounded-full bg-white animate-ping-doux" />
                    <span className="relative size-2 rounded-full bg-white" />
                  </span>
                  {session.titre}
                </span>
                <span>{new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(session.debut)}</span>
              </div>
              <div className="relative">
                <span className="block font-affiche text-[96px] leading-[0.85] sm:text-[110px]">
                  <CompteurAnime valeur={jours} />
                </span>
                <span className="mt-2 block text-lg font-bold">{jours > 1 ? "jours pour être prêt·e" : "jour pour être prêt·e"}</span>
              </div>
              <div className="relative flex flex-col gap-2">
                <div className="h-2 overflow-hidden rounded-full bg-white/15">
                  <div className="barre-croit h-full rounded-full bg-white" style={{ width: `${progressionAnnee}%`, transformOrigin: "left" }} />
                </div>
                <div className="flex justify-between text-[13px] text-white/70">
                  <span>Rentrée</span>
                  <span>{progressionAnnee} % de l&apos;année écoulée</span>
                  <span>Examen</span>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ——— Mes matières ——— */}
        <section className="flex flex-col gap-4">
          <div className="flex items-end justify-between">
            <h2 className="font-affiche text-3xl text-ink sm:text-4xl">Mes matières</h2>
            <Link href="/matieres" className="text-sm font-semibold text-primary hover:underline">
              Tout voir →
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {matieres.map((m, i) => {
              const couleur = couleurMatiere(m.slug);
              const pct = m.suivi && m.suivi.total > 0 ? Math.round((m.suivi.lus / m.suivi.total) * 100) : 0;
              return (
                <li key={m.slug} data-reveler="" style={delai(i * 80)}>
                  <Link href={m.href} className="group block h-full overflow-hidden rounded-[24px] border border-border bg-surface shadow-sm transition-transform hover:-translate-y-1">
                    <span className="relative block h-28 overflow-hidden">
                      <Image
                        src={m.photo}
                        alt=""
                        fill
                        quality={90}
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute inset-0" style={{ background: `linear-gradient(to top, color-mix(in srgb, ${couleur} 75%, transparent), transparent 75%)` }} />
                      <span className="absolute bottom-3 left-4 font-affiche text-2xl text-white drop-shadow">{m.nom}</span>
                    </span>
                    <span className="flex flex-col gap-2 p-4">
                      {m.suivi ? (
                        <>
                          <span className="flex justify-between gap-2 text-sm">
                            <span className="text-muted-foreground">
                              {m.suivi.lus} chapitre{m.suivi.lus > 1 ? "s" : ""} lu{m.suivi.lus > 1 ? "s" : ""} sur {m.suivi.total}
                            </span>
                            <span className="font-bold text-ink tabular-nums">{pct} %</span>
                          </span>
                          <span className="h-1.5 overflow-hidden rounded-full bg-surface-muted">
                            <span className="barre-croit block h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: couleur, transformOrigin: "left" }} />
                          </span>
                        </>
                      ) : (
                        <span className="text-sm text-muted-foreground">Pas encore de suivi</span>
                      )}
                      {m.lecons > 0 && (
                        <span className="text-xs font-semibold" style={{ color: couleur }}>
                          {m.lecons} leçon{m.lecons > 1 ? "s" : ""}
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ——— Outils ——— */}
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Sujets régionaux */}
          <div data-reveler="" className={`flex flex-col gap-6 p-6 sm:p-7 lg:col-span-7 ${carte}`}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-affiche text-[28px] leading-tight text-ink sm:text-3xl">Entraîne-toi au chrono</h3>
                <p className="text-sm text-muted-foreground">Les vrais sujets régionaux, par académie et par année.</p>
              </div>
              <Link href="/examens-regionaux" className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
                Lancer un sujet
              </Link>
            </div>
            {sujets.length > 0 ? (
              <>
                <div className="grid grid-cols-3 gap-3">
                  {sujets.map((s) => (
                    <div key={s.nom} className="rounded-2xl bg-surface-muted px-3 py-3 sm:px-4">
                      <span className="block font-affiche text-3xl text-ink sm:text-4xl">
                        <CompteurAnime valeur={s.n} />
                      </span>
                      <span className="text-xs text-muted-foreground sm:text-sm">{s.nom}</span>
                    </div>
                  ))}
                </div>
                {annees.length > 1 && (
                  <div>
                    <div className="flex h-16 items-end gap-[3px]">
                      {annees.map((a, i) => (
                        <span
                          key={a}
                          title={`${a} : ${parAnnee[a] ?? 0} sujet${(parAnnee[a] ?? 0) > 1 ? "s" : ""}`}
                          className="barre-croit-y flex-1 rounded-t-[4px] bg-primary/80"
                          style={{ height: `${((parAnnee[a] ?? 0) / maxAnnee) * 100}%`, "--delai-barre": `${i * 30}ms` } as CSSProperties}
                        />
                      ))}
                    </div>
                    <div className="mt-1.5 flex justify-between text-xs text-muted-foreground tabular-nums">
                      <span>{annees[0]}</span>
                      <span>{annees[annees.length - 1]}</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p className="text-sm text-muted-foreground">Bientôt disponible.</p>
            )}
          </div>

          {/* Correcteur */}
          <Link href="/redaction/nouvelle" data-reveler="" style={delai(80)} className={`group relative flex flex-col justify-between gap-6 overflow-hidden p-6 sm:p-7 lg:col-span-5 ${carte}`}>
            <span className="flex items-start justify-between gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-tint text-primary transition-transform group-hover:-rotate-6">
                <IconePlume className="size-6" />
              </span>
              <span dir="rtl" className="font-ruqaa text-xl text-[var(--color-consigne)]">
                صور الورقة وصيفطها
              </span>
            </span>
            <span>
              <span className="block font-affiche text-[28px] leading-tight text-ink sm:text-3xl">Corrige ta rédaction</span>
              <span className="mt-1 block text-sm text-muted-foreground">
                Tape ton texte ou envoie une photo : note sur 20, fautes corrigées, points à travailler.
              </span>
            </span>
            {correcteur ? (
              <span className="flex items-center gap-4">
                <span className="flex gap-1.5">
                  {Array.from({ length: QUOTA_QUOTIDIEN_MAX }, (_, i) => (
                    <span key={i} className={`h-2.5 w-8 rounded-full ${i < utilisees ? "bg-primary" : "bg-surface-muted"}`} />
                  ))}
                </span>
                <span className="text-sm text-muted-foreground">
                  {quotaRestant > 0
                    ? `Encore ${quotaRestant} correction${quotaRestant > 1 ? "s" : ""} aujourd'hui`
                    : "Plus de correction aujourd'hui, reviens demain"}
                </span>
              </span>
            ) : (
              <span className="text-sm font-semibold text-muted-foreground">Bientôt disponible</span>
            )}
          </Link>

          {/* À venir */}
          <div data-reveler="" className={`flex flex-col gap-4 p-6 sm:p-7 lg:col-span-5 ${carte}`}>
            <div className="flex items-center justify-between">
              <h3 className="font-affiche text-[28px] leading-tight text-ink sm:text-3xl">À venir</h3>
              <Link href="/calendrier" className="text-sm font-semibold text-primary hover:underline">
                + Ajouter
              </Link>
            </div>
            {aVenir.length > 0 ? (
              <ul className="flex flex-col gap-2.5">
                {aVenir.map((e) => {
                  const [, mois, jour] = e.date.split("-").map(Number);
                  const couleur = couleurCategorie(e.categorie);
                  return (
                    <li key={e.id} className="flex items-center gap-4 rounded-2xl border border-border p-3">
                      <span className="flex w-12 shrink-0 flex-col items-center rounded-xl bg-surface-muted py-1.5">
                        <span className="font-affiche text-xl leading-none text-ink">{String(jour).padStart(2, "0")}</span>
                        <span className="text-[10px] font-bold tracking-wider text-muted-foreground">{MOIS_COURTS[mois - 1]}</span>
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span className="flex items-center gap-1.5 text-xs font-bold" style={{ color: couleur }}>
                          <span className="size-1.5 rounded-full" style={{ backgroundColor: couleur }} />
                          {libelleCategorie(e.categorie)}
                        </span>
                        <span className="truncate text-sm font-semibold text-ink">{e.titre}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <Link href="/calendrier" className="rounded-2xl border border-dashed border-border-strong p-5 text-sm leading-relaxed text-muted-foreground hover:border-primary">
                Rien de prévu pour l&apos;instant. Ajoute tes contrôles, devoirs et révisions dans ton calendrier.
              </Link>
            )}
          </div>

          {/* Ta semaine */}
          <div data-reveler="" style={delai(80)} className={`relative flex flex-col gap-5 overflow-hidden p-6 sm:p-7 lg:col-span-7 ${carte}`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-affiche text-[28px] leading-tight text-ink sm:text-3xl">Ta semaine</h3>
                <p className="text-sm text-muted-foreground">Les jours où tu as révisé sur StudyEra.</p>
              </div>
              <span dir="rtl" className="font-ruqaa text-xl text-[var(--color-consigne)]">
                {noteSemaine}
              </span>
            </div>
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
              {semaine.map((j, i) => {
                const actif = (activite[j] ?? 0) > 0;
                const estAujourdhui = j === aujourdhui;
                return (
                  <div key={j} className="flex flex-col items-center gap-2">
                    <span
                      title={actif ? `${activite[j]} activité${activite[j] > 1 ? "s" : ""}` : undefined}
                      className={`flex aspect-square w-full items-center justify-center rounded-xl sm:rounded-2xl ${
                        actif
                          ? "bg-primary text-primary-foreground"
                          : estAujourdhui
                            ? "border-2 border-dashed border-primary"
                            : "bg-surface-muted"
                      }`}
                    >
                      {actif && <IconeCoche className="size-4 sm:size-5" />}
                    </span>
                    <span className={`text-xs font-semibold ${estAujourdhui ? "text-primary" : "text-muted-foreground"}`}>
                      {["L", "M", "M", "J", "V", "S", "D"][i]}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              {joursActifs > 0
                ? `${joursActifs} jour${joursActifs > 1 ? "s" : ""} de révision cette semaine.`
                : "Pas encore de révision cette semaine."}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
