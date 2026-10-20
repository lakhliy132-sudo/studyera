import BoutonSupprimerAnnonce from "@/components/BoutonSupprimerAnnonce";
import FormulaireAnnonce from "@/components/FormulaireAnnonce";
import { lireAcces } from "@/lib/acces";
import { creerClientServeur } from "@/lib/supabase/server";
import type { Annonce } from "@/types/base-de-donnees";

const NOUVEAU_JOURS = 3;

function dateLongue(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", { timeZone: "Africa/Casablanca", weekday: "long", day: "numeric", month: "long" });
}

/**
 * Page protégée : /annonces
 *
 * « Ajoute une autre case qui s'appelle Annonce » (menu de gauche, à
 * côté de Live) : les admins publient un message, les élèves le lisent
 * ici. Les annonces de moins de trois jours portent « Nouveau ». Sans
 * annonce, la page le dit simplement.
 *
 * Même table que le bloc d'annonces de /communaute et le formulaire de
 * /administration (`annonces`, écriture réservée aux admins par RLS).
 */
async function lireAnnonces(): Promise<Annonce[] | null> {
  const supabase = await creerClientServeur();
  const { data, error } = await supabase.from("annonces").select("*").order("created_at", { ascending: false });
  // Table pas encore créée (migration 20261104000001_annonces.sql) :
  // `null`, pour que la page le dise à l'admin au lieu d'échouer.
  if (error?.code === "PGRST205" || error?.code === "42P01") return null;
  if (error) throw error;
  return (data as Annonce[]) ?? [];
}

export default async function PageAnnonces() {
  const [{ admin }, annonces] = await Promise.all([lireAcces(), lireAnnonces()]);
  const maintenant = Date.now();

  return (
    <main className="relative flex w-full flex-col gap-8 px-6 pt-16 pb-20 sm:gap-10 sm:px-9 sm:pt-12 lg:px-16 xl:px-24 2xl:px-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse 60% 70% at 20% 20%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 20% 20%, black 20%, transparent 75%)",
        }}
      />
      <header className="flex flex-col gap-3">
        <h1 className="font-affiche text-[40px] leading-[1.05] text-ink sm:text-6xl">Annonces</h1>
        <p className="max-w-[560px] text-base text-muted-foreground sm:text-lg">Les nouvelles de StudyEra, à lire en premier.</p>
      </header>

      {admin && (
        <section className="flex flex-col gap-4 rounded-[24px] border border-border bg-surface p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-titre text-xl text-ink">Nouvelle annonce</p>
            <span className="rounded-full bg-primary-tint px-3 py-1 text-xs font-bold text-primary">Espace administrateur</span>
          </div>
          {annonces === null ? (
            <p className="text-[15px] text-muted-foreground">
              Lance d&apos;abord la migration{" "}
              <code className="rounded bg-surface-muted px-1.5 py-0.5 text-[13px]">20261104000001_annonces.sql</code> dans
              l&apos;éditeur SQL de Supabase.
            </p>
          ) : (
            <FormulaireAnnonce />
          )}
        </section>
      )}

      {!annonces || annonces.length === 0 ? (
        <p className="rounded-[24px] border border-dashed border-border-strong px-6 py-14 text-center text-muted-foreground">
          Pas encore d&apos;annonce.
        </p>
      ) : (
        <ol className="flex flex-col gap-4">
          {annonces.map((a, i) => {
            const nouveau = maintenant - new Date(a.created_at).getTime() < NOUVEAU_JOURS * 86400000;
            return (
              <li
                key={a.id}
                className="animate-entree-carte relative flex flex-col gap-3 overflow-hidden rounded-[24px] border border-border bg-surface p-6 ps-7 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.5)] sm:p-8 sm:ps-9"
                style={{ animationDelay: `${Math.min(i, 6) * 60}ms` }}
              >
                <span aria-hidden="true" className={`absolute inset-y-0 start-0 w-1.5 ${nouveau ? "bg-primary" : "bg-border"}`} />
                <div className="flex flex-wrap items-center gap-2.5">
                  {nouveau && (
                    <span className="rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">Nouveau</span>
                  )}
                  <span className="text-sm font-semibold text-muted-foreground first-letter:uppercase">{dateLongue(a.created_at)}</span>
                </div>
                <h2 className="font-titre text-xl leading-snug text-ink sm:text-2xl">{a.titre}</h2>
                <p className="text-[15px] leading-relaxed whitespace-pre-line text-foreground sm:text-base">{a.contenu}</p>
                {admin && (
                  <BoutonSupprimerAnnonce id={a.id} />
                )}
              </li>
            );
          })}
        </ol>
      )}
    </main>
  );
}
