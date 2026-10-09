import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import BoutonImprimer from "@/components/BoutonImprimer";
import CopieCorrigee from "@/components/CopieCorrigee";
import { IconeCoche, IconeEtoile, IconeFleche, IconeFlecheHaut, IconeLivreOuvert, IconeTexte } from "@/components/icones";
import type { ErreurCopie } from "@/lib/correcteur";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { recupererCoursParCategorie } from "@/lib/supabase/contenu";
import { creerClientServeur } from "@/lib/supabase/server";
import { estErreurDeLangue, estHorsSujet } from "@/lib/typesErreur";

interface PagePropsCorrection {
  params: Promise<{ id: string }>;
}

/** Les champs `jsonb` reviennent en `unknown[]` : on les retamise ici
 * plutôt que de faire confiance à leur forme. */
function listeDeTextes(valeur: unknown): string[] {
  if (!Array.isArray(valeur)) return [];
  return valeur.filter((v): v is string => typeof v === "string");
}

function listeDErreurs(valeur: unknown): ErreurCopie[] {
  if (!Array.isArray(valeur)) return [];
  return valeur.flatMap((brut) => {
    if (typeof brut !== "object" || brut === null) return [];
    const e = brut as Record<string, unknown>;
    if (typeof e.extrait !== "string") return [];
    return [
      {
        type: typeof e.type === "string" ? e.type : "autre",
        extrait: e.extrait,
        correction: typeof e.correction === "string" ? e.correction : "",
        explication: typeof e.explication === "string" ? e.explication : "",
        ...(typeof e.regle === "string" && e.regle ? { regle: e.regle } : {}),
      },
    ];
  });
}

/** Couleur d'une note selon sa part du barème : rouge sous 40 %, orange
 * sous 60 %, vert au-delà. Couleurs fixes, lisibles dans les deux modes. */
function couleurNote(valeur: number | null, sur: number): string {
  if (valeur === null) return "var(--color-border-strong)";
  const part = valeur / sur;
  if (part < 0.4) return "#e11d48";
  if (part < 0.6) return "#f59e0b";
  return "#10b981";
}

const virgule = (n: number) => String(n).replace(".", ",");

const FORMAT_DATE = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Africa/Casablanca",
});

function BarreNote({ libelle, aide, valeur }: { libelle: string; aide: string; valeur: number | null }) {
  const couleur = couleurNote(valeur, 10);
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-ink">{libelle}</span>
        <span className="font-serif text-lg text-ink tabular-nums">{valeur === null ? "?" : virgule(valeur)} / 10</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-muted">
        <div className="h-full rounded-full" style={{ width: `${((valeur ?? 0) / 10) * 100}%`, backgroundColor: couleur }} />
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{aide}</p>
    </div>
  );
}

function AnneauNote({ valeur }: { valeur: number | null }) {
  const rayon = 52;
  const tour = 2 * Math.PI * rayon;
  const couleur = couleurNote(valeur, 20);
  return (
    <div className="relative size-[120px] shrink-0 sm:size-[136px]">
      <svg viewBox="0 0 130 130" className="absolute inset-0 size-full -rotate-90" aria-hidden="true">
        <circle cx="65" cy="65" r={rayon} fill="none" stroke="var(--color-surface-muted)" strokeWidth="8" />
        {valeur !== null && (
          <circle
            cx="65"
            cy="65"
            r={rayon}
            fill="none"
            stroke={couleur}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${tour * Math.min(1, valeur / 20)} ${tour}`}
          />
        )}
      </svg>
      <p className="absolute inset-0 flex items-center justify-center font-serif">
        <span className="text-[44px] leading-none font-bold tabular-nums" style={{ color: couleur }}>
          {valeur === null ? "?" : virgule(valeur)}
        </span>
        <span className="mt-4 text-lg text-muted-foreground">/20</span>
      </p>
    </div>
  );
}

/**
 * /redaction/[id] — la correction d'une copie, refaite d'après la
 * maquette de l'utilisateur :
 * - en-tête : sujet, date, nombre de remarques, alerte "Copie hors
 *   sujet" quand le correcteur l'a relevé, et la note dans un anneau
 *   avec la forme et le fond en barres ;
 * - "L'avis du correcteur", puis "Ce que tu as réussi" et "À travailler
 *   en priorité" ;
 * - "Ta copie corrigée" : la copie avec ses erreurs soulignées, et les
 *   remarques à côté (CopieCorrigee) ;
 * - "Pour progresser" : des pages du site choisies d'après les erreurs ;
 * - un bandeau pour réécrire sa copie ou l'enregistrer en PDF.
 *
 * Écarts avec la maquette (CLAUDE.md §1) : les durées et nombres de
 * questions des cartes "Pour progresser" ("6 min", "5 questions")
 * n'existent pas en base et ne sont pas affichés ; les cartes renvoient
 * vers de vraies pages, choisies d'après les types d'erreurs, et non
 * vers une leçon ou un exercice précis qu'on ne sait pas relier à une
 * faute. "Prête à retenter ?" devient "Envie de retenter ?", qui ne
 * suppose pas le genre de l'élève.
 *
 * Lecture passée par le client de session : la policy RLS « un eleve
 * voit ses propres copies » suffit à garantir qu'on ne lit pas la copie
 * d'un autre, sans contrôle à réécrire ici.
 */
export default async function PageCorrection({ params }: PagePropsCorrection) {
  const { id } = await params;
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const [{ data: copie }, coursProduction, coursLangue] = await Promise.all([
    supabase
      .from("copies")
      .select(
        "id, sujet_id, transcription, note_forme, note_fond, note_total, erreurs, points_forts, axes, commentaire, created_at, sujets(titre, consigne, type, oeuvres(titre_fr, slug), chapitres(numero, titre_fr))",
      )
      .eq("id", id)
      .maybeSingle<{
        id: string;
        sujet_id: string | null;
        transcription: string | null;
        note_forme: number | null;
        note_fond: number | null;
        note_total: number | null;
        erreurs: unknown;
        points_forts: unknown;
        axes: unknown;
        commentaire: string | null;
        created_at: string;
        sujets: {
          titre: string;
          consigne: string;
          type: string;
          oeuvres: { titre_fr: string; slug: string } | null;
          chapitres: { numero: number; titre_fr: string } | null;
        } | null;
      }>(),
    recupererCoursParCategorie("production-ecrite", FILIERE_ACTUELLE),
    recupererCoursParCategorie("langue", FILIERE_ACTUELLE),
  ]);

  if (!copie) notFound();

  const erreurs = listeDErreurs(copie.erreurs);
  const pointsForts = listeDeTextes(copie.points_forts);
  const axes = listeDeTextes(copie.axes);
  const sujet = copie.sujets;
  const horsSujet = erreurs.some((e) => estHorsSujet(e.type));
  const noteForme = copie.note_forme === null ? null : Number(copie.note_forme);
  const noteFond = copie.note_fond === null ? null : Number(copie.note_fond);
  const noteTotal = copie.note_total === null ? null : Number(copie.note_total);

  // "Pour progresser" : des pages qui existent, choisies d'après les
  // erreurs relevées.
  const methodologie = coursProduction[0] ?? null;
  const progresser = [
    ...(methodologie && (horsSujet || erreurs.some((e) => !estErreurDeLangue(e.type)) || erreurs.length === 0)
      ? [
          {
            href: `/production-ecrite/${methodologie.slug}`,
            sur: "Production écrite",
            titre: methodologie.titre,
            genre: "Leçon",
            Icone: IconeCoche,
            couleur: "#e11d48",
          },
        ]
      : []),
    ...(erreurs.some((e) => estErreurDeLangue(e.type)) && coursLangue.length > 0
      ? [
          {
            href: "/langue",
            sur: `Langue · ${coursLangue.length} notions`,
            titre: "Revoir les cours de langue",
            genre: "Cours",
            Icone: IconeTexte,
            couleur: "#f59e0b",
          },
        ]
      : []),
    ...(sujet?.oeuvres
      ? [
          {
            href: sujet.chapitres
              ? `/oeuvres/${sujet.oeuvres.slug}/${sujet.chapitres.numero}`
              : `/oeuvres/${sujet.oeuvres.slug}`,
            sur: sujet.chapitres
              ? `${sujet.oeuvres.titre_fr} · Chapitre ${sujet.chapitres.numero}`
              : sujet.oeuvres.titre_fr,
            titre: sujet.chapitres ? `Relire « ${sujet.chapitres.titre_fr} »` : `Relire ${sujet.oeuvres.titre_fr}`,
            genre: "Œuvre",
            Icone: IconeLivreOuvert,
            couleur: "#7c3aed",
          },
        ]
      : []),
  ];

  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-6 px-6 pt-16 pb-10 sm:px-9 lg:px-16 xl:px-24 xl:pt-9 2xl:px-40 sm:pb-16 print:p-0">
        <Link
          href="/redaction/nouvelle"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline print:hidden"
        >
          <IconeFleche className="size-4 rotate-180" />
          Corriger une autre copie
        </Link>

        {/* En-tête */}
        <section
          className="relative grid grid-cols-1 items-center gap-6 overflow-hidden rounded-[28px] border border-border p-6 shadow-sm sm:p-9 lg:grid-cols-[minmax(0,1fr)_auto]"
          style={{
            background:
              "linear-gradient(115deg, var(--color-primary-tint) 0%, var(--color-surface) 60%, color-mix(in srgb, #f472b6 9%, var(--color-surface)) 100%)",
          }}
        >
          <div className="relative min-w-0">
            <p className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-bold text-primary">Correction</span>
              {sujet?.oeuvres && <span className="text-muted-foreground">· {sujet.oeuvres.titre_fr}</span>}
              {sujet?.type && (
                <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-bold text-primary capitalize">
                  {sujet.type}
                </span>
              )}
            </p>
            <h1 className="mt-3 font-titre text-[28px] leading-tight font-bold text-ink sm:text-[40px]">
              {sujet?.titre ?? "Ta rédaction"}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Corrigée le {FORMAT_DATE.format(new Date(copie.created_at))} ·{" "}
              {erreurs.length} remarque{erreurs.length > 1 ? "s" : ""}
            </p>
            {horsSujet && (
              <div className="mt-5 flex w-fit items-start gap-3 rounded-[16px] border border-[#e11d48]/20 bg-surface px-4 py-3 shadow-sm">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-[#e11d48]/10 text-lg leading-none font-bold text-[#e11d48]">
                  !
                </span>
                <div>
                  <p className="font-bold text-[#e11d48]">Copie hors sujet</p>
                  <p className="text-sm text-muted-foreground">
                    C&apos;est la première chose à corriger : relis bien la consigne.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="relative flex flex-col items-center gap-6 rounded-[24px] bg-surface p-6 shadow-[0_18px_40px_-24px_rgba(20,40,120,0.4)] sm:flex-row sm:p-7">
            <AnneauNote valeur={noteTotal} />
            <div className="flex w-full min-w-[220px] flex-col gap-5">
              <BarreNote libelle="Forme" aide="Phrases et orthographe" valeur={noteForme} />
              <BarreNote libelle="Fond" aide="Respect du sujet, idées" valeur={noteFond} />
            </div>
          </div>
        </section>

        {copie.commentaire && (
          <section className="flex gap-4 rounded-[24px] border border-border bg-surface p-6 shadow-sm sm:gap-5 sm:p-8">
            <span
              className="flex size-12 shrink-0 items-center justify-center rounded-[14px] text-white"
              style={{ background: "linear-gradient(145deg, #6366f1, var(--fond-sombre-actif))" }}
            >
              <IconeEtoile className="size-5" />
            </span>
            <div>
              <h2 className="font-serif text-2xl text-ink">L&apos;avis du correcteur</h2>
              <p className="mt-2 font-serif text-[17px] leading-relaxed text-foreground">{copie.commentaire}</p>
            </div>
          </section>
        )}

        {(pointsForts.length > 0 || axes.length > 0) && (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {pointsForts.length > 0 && (
              <ListeConseils
                titre="Ce que tu as réussi"
                elements={pointsForts}
                fond="color-mix(in srgb, #10b981 9%, var(--color-surface))"
                couleur="#10b981"
                Icone={IconeCoche}
              />
            )}
            {axes.length > 0 && (
              <ListeConseils
                titre="À travailler en priorité"
                elements={axes}
                fond="var(--color-primary-tint)"
                couleur="var(--color-primary)"
                Icone={IconeFlecheHaut}
              />
            )}
          </div>
        )}

        {copie.transcription && (
          <section className="flex flex-col gap-4">
            <h2 className="flex flex-wrap items-baseline gap-x-3 font-serif text-[28px] text-ink">
              Ta copie corrigée
              <span className="font-sans text-sm text-muted-foreground print:hidden">
                Clique sur une erreur pour voir l&apos;explication
              </span>
            </h2>
            <CopieCorrigee texte={copie.transcription} erreurs={erreurs} />
          </section>
        )}

        {progresser.length > 0 && (
          <section className="flex flex-col gap-4 print:hidden">
            <h2 className="flex flex-wrap items-baseline gap-x-3 font-serif text-[28px] text-ink">
              Pour progresser
              <span className="font-sans text-sm text-muted-foreground">Choisis d&apos;après tes erreurs</span>
            </h2>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {progresser.map((carte) => (
                <li key={carte.href}>
                  <Link
                    href={carte.href}
                    className="group flex h-full flex-col rounded-[22px] border border-border bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span
                      className="flex size-11 items-center justify-center rounded-[12px] text-white"
                      style={{ backgroundColor: carte.couleur }}
                    >
                      <carte.Icone className="size-5" />
                    </span>
                    <span className="mt-5 text-xs text-muted-foreground">{carte.sur}</span>
                    <span className="mt-1 font-serif text-xl leading-snug text-ink">{carte.titre}</span>
                    <span className="mt-auto flex items-center justify-between pt-6 text-sm text-muted-foreground">
                      {carte.genre}
                      <span className="flex size-9 items-center justify-center rounded-full border border-border text-primary transition-transform group-hover:translate-x-0.5">
                        <IconeFleche className="size-4" />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section
          className="flex flex-col items-start gap-5 rounded-[24px] px-6 py-6 text-white shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 print:hidden"
          style={{ background: "linear-gradient(100deg, var(--fond-sombre-actif) 0%, var(--fond-sombre-haut) 100%)" }}
        >
          <div>
            <p className="font-serif text-2xl">Envie de retenter ?</p>
            <p className="mt-1 text-sm text-white/80">Réécris ta copie avec ces conseils et compare ta nouvelle note.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <BoutonImprimer className="rounded-[14px] border border-white/40 px-5 py-3 text-sm font-bold transition-colors hover:bg-white/10" />
            <Link
              href={copie.sujet_id ? `/redaction/nouvelle?sujet=${copie.sujet_id}` : "/redaction/nouvelle"}
              className="flex items-center gap-2 rounded-[14px] bg-white px-5 py-3 text-sm font-bold text-[#1d2340] transition hover:-translate-y-px"
            >
              Réécrire ma copie
              <IconeFleche className="size-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function ListeConseils({
  titre,
  elements,
  fond,
  couleur,
  Icone,
}: {
  titre: string;
  elements: string[];
  fond: string;
  couleur: string;
  Icone: (props: { className?: string }) => React.ReactElement;
}) {
  return (
    <section className="rounded-[24px] border border-border p-6 shadow-sm sm:p-7" style={{ background: fond }}>
      <h2 className="flex items-center gap-3 font-serif text-2xl text-ink">
        <span className="flex size-8 items-center justify-center rounded-full text-white" style={{ backgroundColor: couleur }}>
          <Icone className="size-4" />
        </span>
        {titre}
      </h2>
      <ol className="mt-4 flex flex-col divide-y divide-border/70">
        {elements.map((element, i) => (
          <li key={i} className="flex gap-3 py-3 text-[15px] leading-relaxed text-foreground">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-surface text-xs font-bold text-ink shadow-sm">
              {i + 1}
            </span>
            {element}
          </li>
        ))}
      </ol>
    </section>
  );
}
