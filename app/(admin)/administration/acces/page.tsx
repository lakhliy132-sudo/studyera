import Link from "next/link";

import { aujourdhui } from "@/lib/acces";
import { creerClientService } from "@/lib/supabase/service";

import { activerAcces, retirerAcces } from "./actions";

interface PagePropsAcces {
  searchParams: Promise<{ q?: string; filtre?: string }>;
}

type Etat = "attente" | "actif" | "expire" | "admin";

interface Ligne {
  id: string;
  email: string;
  nom: string | null;
  inscritLe: string;
  fournisseur: string;
  etat: Etat;
  fin: string | null;
  formule: string | null;
}

const LIBELLES: Record<Etat, string> = { attente: "En attente", actif: "Actif", expire: "Expiré", admin: "Admin" };
const FILTRES: { cle: string; libelle: string }[] = [
  { cle: "attente", libelle: "En attente" },
  { cle: "actif", libelle: "Actifs" },
  { cle: "expire", libelle: "Expirés" },
  { cle: "tous", libelle: "Tous" },
];

function dateFr(iso: string): string {
  return new Date(iso.length === 10 ? `${iso}T12:00:00` : iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * /administration/acces : activer l'accès des élèves après paiement
 * (« c'est moi qui vais leur donner l'accès quand ils payeront sur
 * WhatsApp »).
 *
 * Le message WhatsApp envoyé depuis /acces contient l'e-mail du compte :
 * on le cherche ici, puis un clic sur la formule payée ouvre (ou
 * prolonge) l'accès pour 3 ou 12 mois. Les comptes en attente sont
 * listés en premier.
 *
 * La liste des comptes vient de l'API d'administration de Supabase Auth
 * et la table `acces_eleves` n'est écrite que par la clé de service :
 * tout se passe côté serveur, la page étant réservée aux admins
 * (middleware, revérifié dans chaque action).
 */
export default async function PageAdministrationAcces({ searchParams }: PagePropsAcces) {
  const { q = "", filtre = "attente" } = await searchParams;
  const service = creerClientService();

  // Tous les comptes, 1000 par page.
  const comptes: { id: string; email?: string; created_at: string; app_metadata: { provider?: string } }[] = [];
  for (let page = 1; ; page++) {
    const { data, error } = await service.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    comptes.push(...data.users);
    if (data.users.length < 1000) break;
  }

  const [{ data: acces, error: erreurAcces }, { data: profils }] = await Promise.all([
    service.from("acces_eleves").select("user_id, fin, formule"),
    service.from("profils").select("id, nom_complet, role"),
  ]);
  const tableAbsente = erreurAcces?.code === "PGRST205" || erreurAcces?.code === "42P01";
  const accesParId = new Map((acces ?? []).map((a) => [a.user_id as string, a]));
  const profilParId = new Map((profils ?? []).map((p) => [p.id as string, p]));
  const jour = aujourdhui();

  const lignes: Ligne[] = comptes.map((c) => {
    const a = accesParId.get(c.id);
    const profil = profilParId.get(c.id);
    const fin = (a?.fin as string | undefined) ?? null;
    const etat: Etat = profil?.role === "admin" ? "admin" : !fin ? "attente" : fin >= jour ? "actif" : "expire";
    return {
      id: c.id,
      email: c.email ?? "",
      nom: (profil?.nom_complet as string | null | undefined) ?? null,
      inscritLe: c.created_at,
      fournisseur: c.app_metadata.provider === "google" ? "Google" : "E-mail",
      etat,
      fin,
      formule: (a?.formule as string | undefined) ?? null,
    };
  });

  const recherche = q.trim().toLowerCase();
  const visibles = lignes
    .filter((l) => filtre === "tous" || l.etat === filtre)
    .filter((l) => !recherche || l.email.toLowerCase().includes(recherche) || (l.nom ?? "").toLowerCase().includes(recherche))
    .sort((x, y) => y.inscritLe.localeCompare(x.inscritLe));
  const compte = (e: Etat) => lignes.filter((l) => l.etat === e).length;

  return (
    <main className="flex w-full flex-col gap-8 px-6 pt-16 pb-20 sm:px-9 sm:pt-10 lg:px-16 xl:px-24 2xl:px-40">
      <header className="flex flex-col gap-2">
        <Link href="/administration" className="text-sm text-muted-foreground hover:text-primary">
          ← Espace administrateur
        </Link>
        <h1 className="font-titre text-3xl text-ink">Accès des élèves</h1>
        <p className="max-w-2xl text-[15px] text-muted-foreground">
          Quand un élève a payé sur WhatsApp, cherche l&apos;e-mail écrit dans son message et clique sur la formule payée.
          Un accès en cours est prolongé à partir de sa date de fin.
        </p>
      </header>

      {tableAbsente && (
        <p className="rounded-2xl border border-erreur/40 bg-erreur/10 p-5 text-[15px] text-ink">
          La table <code>acces_eleves</code> n&apos;existe pas encore : lance la migration{" "}
          <code>supabase/migrations/20261102000000_acces_eleves.sql</code> dans l&apos;éditeur SQL de Supabase. D&apos;ici là,
          le site reste entièrement ouvert et rien ne peut être activé.
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <nav className="flex flex-wrap gap-2" aria-label="Filtrer les comptes">
          {FILTRES.map((f) => (
            <Link
              key={f.cle}
              href={`/administration/acces?filtre=${f.cle}${q ? `&q=${encodeURIComponent(q)}` : ""}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filtre === f.cle ? "bg-primary text-primary-foreground" : "border border-border bg-surface text-ink hover:border-primary"
              }`}
            >
              {f.libelle}
              {f.cle !== "tous" && <span className="ms-1.5 opacity-70">{compte(f.cle as Etat)}</span>}
            </Link>
          ))}
        </nav>
        <form action="/administration/acces" method="get" className="flex gap-2">
          <input type="hidden" name="filtre" value="tous" />
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder="E-mail ou nom…"
            className="w-64 rounded-full border border-border bg-surface px-4 py-2 text-sm focus:border-primary focus:outline-none"
          />
          <button type="submit" className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-surface">
            Chercher
          </button>
        </form>
      </div>

      {visibles.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border-strong p-8 text-center text-muted-foreground">
          Aucun compte ici.
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {visibles.map((l) => (
            <li
              key={l.id}
              className="flex flex-col gap-4 rounded-[22px] border border-border bg-surface p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between"
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-tint font-bold text-primary">
                  {(l.nom || l.email || "?").charAt(0).toUpperCase()}
                </span>
                <div className="flex min-w-0 flex-col">
                  <span className="truncate font-semibold text-ink">{l.nom || l.email}</span>
                  <span className="truncate text-sm text-muted-foreground">
                    {l.nom ? `${l.email} · ` : ""}
                    {l.fournisseur} · inscrit le {dateFr(l.inscritLe)}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    l.etat === "actif"
                      ? "bg-validation/15 text-ink"
                      : l.etat === "expire"
                        ? "bg-erreur/15 text-ink"
                        : l.etat === "admin"
                          ? "bg-primary-tint text-primary"
                          : "bg-surface-muted text-muted-foreground"
                  }`}
                >
                  {LIBELLES[l.etat]}
                  {l.fin && l.etat !== "admin" && ` · ${l.etat === "actif" ? "jusqu'au" : "depuis le"} ${dateFr(l.fin)}`}
                </span>
                {l.etat !== "admin" && !tableAbsente && (
                  <>
                    {(["trimestre", "annee"] as const).map((formule) => (
                      <form key={formule} action={activerAcces}>
                        <input type="hidden" name="userId" value={l.id} />
                        <input type="hidden" name="formule" value={formule} />
                        <button
                          type="submit"
                          className="rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          + {formule === "annee" ? "Année (12 mois)" : "Trimestre (3 mois)"}
                        </button>
                      </form>
                    ))}
                    {l.fin && (
                      <form action={retirerAcces}>
                        <input type="hidden" name="userId" value={l.id} />
                        <button type="submit" className="rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-ink">
                          Retirer
                        </button>
                      </form>
                    )}
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
