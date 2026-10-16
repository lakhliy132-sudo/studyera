import Link from "next/link";
import { notFound } from "next/navigation";

import { jourMaroc, lireSuiviEleve, type EvenementSuivi } from "@/lib/supabase/suiviEleves";

const SEMAINES = 12;

function heure(iso: string): string {
  return new Intl.DateTimeFormat("fr-FR", { timeZone: "Africa/Casablanca", hour: "2-digit", minute: "2-digit" }).format(new Date(iso));
}

function jourLong(cle: string): string {
  return new Date(`${cle}T12:00:00`).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

const PASTILLES: Record<EvenementSuivi["type"], string> = {
  activite: "bg-primary-tint text-primary",
  lu: "bg-validation/15 text-ink",
  copie: "bg-surface-muted text-ink",
};
const ICONES: Record<EvenementSuivi["type"], string> = { activite: "👁", lu: "✓", copie: "✎" };

interface PageProps {
  params: Promise<{ id: string }>;
}

/**
 * /administration/eleves/[id] : la fiche d'un élève. Ses chiffres, ses
 * jours d'activité sur 12 semaines, puis son historique jour par jour
 * (pages ouvertes, chapitres marqués lus, copies), tel qu'il est
 * enregistré en base (lib/supabase/suiviEleves.ts).
 */
export default async function PageFicheEleve({ params }: PageProps) {
  const { id } = await params;
  const suivi = await lireSuiviEleve(id);
  if (!suivi) notFound();
  const { eleve, activiteParJour, evenements } = suivi;

  // Grille de 12 semaines, lundi → dimanche.
  const auj = new Date(`${jourMaroc(new Date().toISOString())}T12:00:00`);
  const debut = new Date(auj);
  debut.setDate(auj.getDate() - (SEMAINES * 7 - 1));
  debut.setDate(debut.getDate() - ((debut.getDay() + 6) % 7));
  const cases = Array.from({ length: SEMAINES * 7 }, (_, i) => {
    const d = new Date(debut);
    d.setDate(debut.getDate() + i);
    return { cle: jourMaroc(d.toISOString()), futur: d > auj };
  });

  const parJour = new Map<string, EvenementSuivi[]>();
  for (const e of evenements) {
    const j = jourMaroc(e.date);
    parJour.set(j, [...(parJour.get(j) ?? []), e]);
  }

  return (
    <main className="flex w-full flex-col gap-8 px-6 pt-16 pb-20 sm:px-9 sm:pt-10 lg:px-16 xl:px-24 2xl:px-40">
      <header className="flex flex-col gap-3">
        <Link href="/administration/eleves" className="text-sm text-muted-foreground hover:text-primary">
          ← Suivi des élèves
        </Link>
        <div className="flex items-center gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary font-titre text-2xl text-primary-foreground">
            {(eleve.nom || eleve.email || "?").charAt(0).toUpperCase()}
          </span>
          <div className="min-w-0">
            <h1 className="truncate font-titre text-3xl text-ink">{eleve.nom || eleve.email}</h1>
            <p className="truncate text-sm text-muted-foreground">
              {eleve.email} · inscrit le {new Date(eleve.inscritLe).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
              {eleve.fin && eleve.etat !== "admin" && ` · accès ${eleve.etat === "actif" ? "jusqu'au" : "terminé le"} ${new Date(`${eleve.fin}T12:00:00`).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}`}
              {eleve.etat === "attente" && " · accès pas encore activé"}
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {[
          { n: eleve.joursActifs, l: "jours de révision" },
          { n: eleve.chapitresOuverts, l: "chapitres ouverts" },
          { n: eleve.chapitresLus, l: "chapitres lus" },
          { n: eleve.leconsOuvertes, l: "leçons ouvertes" },
          { n: eleve.sujetsOuverts, l: "sujets régionaux ouverts" },
          { n: eleve.copies, l: "copies envoyées" },
        ].map((c) => (
          <div key={c.l} className="rounded-[20px] border border-border bg-surface p-4">
            <p className="font-titre text-3xl text-ink tabular-nums">{c.n}</p>
            <p className="text-sm text-muted-foreground">{c.l}</p>
          </div>
        ))}
      </div>

      <section className="flex flex-col gap-3 rounded-[22px] border border-border bg-surface p-5 sm:p-6">
        <h2 className="font-titre text-xl text-ink">Ses jours d&apos;activité</h2>
        <div className="grid w-fit max-w-full grid-flow-col grid-rows-7 gap-1 overflow-x-auto">
          {cases.map(({ cle, futur }) => {
            const n = activiteParJour[cle] ?? 0;
            const intensite = n === 0 ? 0 : n < 3 ? 35 : n < 6 ? 65 : 100;
            return (
              <span
                key={cle}
                title={`${jourLong(cle)} : ${n} page${n > 1 ? "s" : ""} ouverte${n > 1 ? "s" : ""}`}
                className="size-4 rounded-[4px] sm:size-5"
                style={{
                  opacity: futur ? 0.35 : 1,
                  backgroundColor: intensite === 0 ? "var(--color-surface-muted)" : `color-mix(in srgb, var(--color-primary) ${intensite}%, var(--color-surface))`,
                }}
              />
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground">{SEMAINES} dernières semaines. Plus la case est foncée, plus il a ouvert de pages ce jour-là.</p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-titre text-xl text-ink">Son historique</h2>
        {parJour.size === 0 ? (
          <p className="rounded-2xl border border-dashed border-border-strong p-8 text-center text-muted-foreground">
            Rien d&apos;enregistré pour l&apos;instant : cet élève n&apos;a encore ouvert ni chapitre, ni leçon, ni sujet.
          </p>
        ) : (
          [...parJour.entries()].map(([jour, liste]) => (
            <div key={jour} className="flex flex-col gap-2">
              <h3 className="text-sm font-bold text-muted-foreground first-letter:uppercase">{jourLong(jour)}</h3>
              <ul className="flex flex-col overflow-hidden rounded-[18px] border border-border bg-surface">
                {liste.map((e, i) => (
                  <li key={`${e.date}-${i}`} className="flex items-start gap-3 border-b border-border px-4 py-3 last:border-0">
                    <span className="w-12 shrink-0 pt-0.5 text-xs font-semibold text-muted-foreground tabular-nums">{heure(e.date)}</span>
                    <span className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${PASTILLES[e.type]}`} aria-hidden="true">
                      {ICONES[e.type]}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-ink">{e.libelle}</span>
                      {e.detail &&
                        (e.lien ? (
                          <Link href={e.lien} className="block truncate text-sm text-primary hover:underline">
                            {e.detail}
                          </Link>
                        ) : (
                          <span className="block truncate text-sm text-muted-foreground">{e.detail}</span>
                        ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
        {evenements.length >= 500 && <p className="text-xs text-muted-foreground">Seules les 500 dernières pages ouvertes sont affichées.</p>}
      </section>
    </main>
  );
}
