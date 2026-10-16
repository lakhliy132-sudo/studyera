import Link from "next/link";

import { listerEleves, type EtatAccesEleve } from "@/lib/supabase/suiviEleves";

const LIBELLES: Record<EtatAccesEleve, string> = { attente: "En attente", actif: "Actif", expire: "Expiré", admin: "Admin" };

function depuis(iso: string | null): string {
  if (!iso) return "Jamais";
  const minutes = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (minutes < 60) return `Il y a ${Math.max(1, minutes)} min`;
  const heures = Math.round(minutes / 60);
  if (heures < 24) return `Il y a ${heures} h`;
  const jours = Math.round(heures / 24);
  if (jours < 30) return `Il y a ${jours} j`;
  return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
}

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

/**
 * /administration/eleves : ce que chaque élève a fait sur le site
 * (« où je peux voir ce que l'élève a fait dans le site »).
 *
 * Une ligne par compte, les plus récemment actifs d'abord : dernière
 * visite, jours de révision, chapitres ouverts et lus, leçons et sujets
 * régionaux ouverts, copies envoyées. Tout est compté sur la base
 * (lib/supabase/suiviEleves.ts) ; un clic ouvre la fiche de l'élève.
 *
 * Les leçons et les sujets régionaux ne sont enregistrés que depuis
 * l'ajout de ce suivi : avant, seuls les chapitres d'œuvres l'étaient.
 */
export default async function PageSuiviEleves({ searchParams }: PageProps) {
  const { q = "" } = await searchParams;
  const tous = await listerEleves();
  const recherche = q.trim().toLowerCase();
  const eleves = tous.filter((e) => !recherche || e.email.toLowerCase().includes(recherche) || (e.nom ?? "").toLowerCase().includes(recherche));
  const actifs7j = tous.filter((e) => e.derniereVisite && Date.now() - new Date(e.derniereVisite).getTime() < 7 * 86400000).length;

  return (
    <main className="flex w-full flex-col gap-8 px-6 pt-16 pb-20 sm:px-9 sm:pt-10 lg:px-16 xl:px-24 2xl:px-40">
      <header className="flex flex-col gap-2">
        <Link href="/administration" className="text-sm text-muted-foreground hover:text-primary">
          ← Espace administrateur
        </Link>
        <h1 className="font-titre text-3xl text-ink">Suivi des élèves</h1>
        <p className="max-w-2xl text-[15px] text-muted-foreground">
          Ce que chaque élève a fait sur le site : pages ouvertes, chapitres lus, copies envoyées. Clique sur un élève pour voir
          son historique jour par jour.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { n: tous.length, l: "comptes" },
          { n: tous.filter((e) => e.etat === "actif").length, l: "accès actifs" },
          { n: actifs7j, l: "venus ces 7 derniers jours" },
          { n: tous.filter((e) => !e.derniereVisite).length, l: "jamais venus réviser" },
        ].map((c) => (
          <div key={c.l} className="rounded-[20px] border border-border bg-surface p-4">
            <p className="font-titre text-3xl text-ink tabular-nums">{c.n}</p>
            <p className="text-sm text-muted-foreground">{c.l}</p>
          </div>
        ))}
      </div>

      <form action="/administration/eleves" method="get" className="flex gap-2">
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="E-mail ou nom…"
          className="w-full max-w-sm rounded-full border border-border bg-surface px-4 py-2 text-sm focus:border-primary focus:outline-none"
        />
        <button type="submit" className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-surface">
          Chercher
        </button>
      </form>

      {eleves.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border-strong p-8 text-center text-muted-foreground">Aucun compte ici.</p>
      ) : (
        <div className="overflow-x-auto rounded-[22px] border border-border bg-surface">
          <table className="w-full min-w-[860px] text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs font-bold tracking-wide text-muted-foreground uppercase">
                <th className="px-5 py-3">Élève</th>
                <th className="px-3 py-3">Accès</th>
                <th className="px-3 py-3">Dernière visite</th>
                <th className="px-3 py-3 text-right">Jours</th>
                <th className="px-3 py-3 text-right">Chapitres lus</th>
                <th className="px-3 py-3 text-right">Leçons</th>
                <th className="px-3 py-3 text-right">Sujets</th>
                <th className="px-5 py-3 text-right">Copies</th>
              </tr>
            </thead>
            <tbody>
              {eleves.map((e) => (
                <tr key={e.id} className="border-b border-border last:border-0 hover:bg-surface-muted">
                  <td className="px-5 py-3">
                    <Link href={`/administration/eleves/${e.id}`} className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-tint font-bold text-primary">
                        {(e.nom || e.email || "?").charAt(0).toUpperCase()}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate font-semibold text-ink hover:text-primary">{e.nom || e.email}</span>
                        {e.nom && <span className="block truncate text-xs text-muted-foreground">{e.email}</span>}
                      </span>
                    </Link>
                  </td>
                  <td className="px-3 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                        e.etat === "actif"
                          ? "bg-validation/15 text-ink"
                          : e.etat === "expire"
                            ? "bg-erreur/15 text-ink"
                            : e.etat === "admin"
                              ? "bg-primary-tint text-primary"
                              : "bg-surface-muted text-muted-foreground"
                      }`}
                    >
                      {LIBELLES[e.etat]}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">{depuis(e.derniereVisite)}</td>
                  <td className="px-3 py-3 text-right font-semibold text-ink tabular-nums">{e.joursActifs}</td>
                  <td className="px-3 py-3 text-right text-ink tabular-nums">{e.chapitresLus}</td>
                  <td className="px-3 py-3 text-right text-ink tabular-nums">{e.leconsOuvertes}</td>
                  <td className="px-3 py-3 text-right text-ink tabular-nums">{e.sujetsOuverts}</td>
                  <td className="px-5 py-3 text-right text-ink tabular-nums">{e.copies}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="text-xs text-muted-foreground">
        « Leçons » et « Sujets » : pages ouvertes, comptées depuis la mise en place de ce suivi. Le temps passé et les réponses
        aux quiz ne sont pas enregistrés.
      </p>
    </main>
  );
}
