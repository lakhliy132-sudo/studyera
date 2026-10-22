import BoutonSupprimerAnnonce from "@/components/BoutonSupprimerAnnonce";
import FormulaireAnnonce from "@/components/FormulaireAnnonce";
import LogoStudyera from "@/components/LogoStudyera";
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
 * Mise en forme « fais-la stylée » : la plus récente à la une dans la
 * carte sombre de l'accueil, les précédentes sur une frise, chacune avec
 * sa date en pastille.
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

/** Un porte-voix, la même icône que la case du menu. */
function PorteVoix({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1M15 9a4 4 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11" />
    </svg>
  );
}

function jourMois(iso: string) {
  const d = new Date(iso);
  return {
    jour: d.toLocaleDateString("fr-FR", { timeZone: "Africa/Casablanca", day: "numeric" }),
    mois: d.toLocaleDateString("fr-FR", { timeZone: "Africa/Casablanca", month: "short" }).replace(".", ""),
  };
}

export default async function PageAnnonces() {
  const [{ admin }, annonces] = await Promise.all([lireAcces(), lireAnnonces()]);
  const maintenant = Date.now();
  const [une, ...autres] = annonces ?? [];
  const estNouveau = (a: Annonce) => maintenant - new Date(a.created_at).getTime() < NOUVEAU_JOURS * 86400000;

  return (
    <main className="relative flex w-full flex-col gap-10 overflow-x-clip px-6 pt-16 pb-20 sm:gap-12 sm:px-9 sm:pt-12 lg:px-16 xl:px-24 2xl:px-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse 60% 70% at 20% 20%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 20% 20%, black 20%, transparent 75%)",
        }}
      />

      <header className="animate-entree-carte flex flex-col gap-3">
        <p className="flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-bold tracking-[0.18em] text-primary uppercase">
          <PorteVoix className="size-4" />
          Annonces
        </p>
        <h1 className="font-affiche text-[40px] leading-[1.05] text-ink sm:text-6xl">
          Les nouvelles de{" "}
          <span className="relative inline-block">
            StudyEra
            <svg aria-hidden="true" viewBox="0 0 300 24" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-2 h-4 w-full text-[var(--color-consigne)]">
              <path className="trace-main" pathLength={1} d="M4 16C60 6 120 4 180 9s90 8 116-2" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <p dir="rtl" lang="ar" className="w-fit font-ruqaa text-2xl text-[var(--color-consigne)] sm:text-3xl">
          آخر الأخبار
        </p>
      </header>

      {/* Le formulaire reste replié derrière un bouton : la page de
       * l'admin ressemble ainsi à celle des élèves (« fais-la stylée
       * plus »). */}
      {admin && (
        <details className="group rounded-[28px] border border-border bg-surface shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] open:p-6 sm:open:p-8">
          <summary className="flex cursor-pointer list-none items-center gap-3 p-4 group-open:mb-5 group-open:p-0 sm:p-5 [&::-webkit-details-marker]:hidden">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_10px_24px_-12px_var(--color-primary)]">
              <span aria-hidden="true" className="text-2xl leading-none transition-transform group-open:rotate-45">+</span>
            </span>
            <span className="font-affiche text-xl text-ink sm:text-2xl">Nouvelle annonce</span>
            <span className="rounded-full bg-primary-tint px-3 py-1 text-xs font-bold text-primary">Espace administrateur</span>
          </summary>
          {annonces === null ? (
            <p className="text-[15px] text-muted-foreground">
              Lance d&apos;abord la migration{" "}
              <code className="rounded bg-surface-muted px-1.5 py-0.5 text-[13px]">20261104000001_annonces.sql</code> dans
              l&apos;éditeur SQL de Supabase.
            </p>
          ) : (
            <FormulaireAnnonce />
          )}
        </details>
      )}

      {!une ? (
        <section className="flex flex-col items-center gap-3 rounded-[28px] border border-dashed border-border-strong px-6 py-16 text-center">
          <span className="flex size-16 items-center justify-center rounded-[22px] bg-primary-tint text-primary">
            <PorteVoix className="size-8" />
          </span>
          <p className="font-affiche text-2xl text-ink sm:text-3xl">Pas encore d&apos;annonce</p>
          <p className="max-w-sm text-[15px] text-muted-foreground">Les nouvelles de l&apos;équipe StudyEra s&apos;afficheront ici.</p>
        </section>
      ) : (
        <>
          {/* La plus récente, à la une : la carte sombre de l'accueil,
           * avec à droite sa date en grand chiffre détouré, un reflet qui
           * passe, et la signature de l'équipe. Resserrée ensuite (« fais-la
           * comme au début, juste un peu petite »), après trois styles
           * clairs refusés. */}
          <article
            className="animate-entree-carte relative overflow-hidden rounded-[26px] text-white shadow-[0_28px_56px_-32px_rgba(10,16,32,0.7)]"
            style={{ background: "linear-gradient(150deg, var(--fond-sombre-actif) 0%, var(--fond-sombre-haut) 50%, var(--fond-sombre-bas) 100%)" }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />
            <div
              aria-hidden="true"
              className="animate-brillance pointer-events-none absolute inset-0"
              style={{
                backgroundImage: "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.09) 50%, transparent 65%)",
                backgroundSize: "200% 100%",
              }}
            />
            <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 size-80 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid gap-6 p-6 sm:px-8 sm:py-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="flex min-w-0 flex-col gap-3.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className="flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-bold tracking-[0.14em] uppercase"
                    style={{ color: "var(--fond-sombre-haut)" }}
                  >
                    {estNouveau(une) && (
                      <span aria-hidden="true" className="relative flex size-2">
                        <span className="absolute inset-0 animate-ping rounded-full bg-erreur opacity-70" />
                        <span className="relative size-2 rounded-full bg-erreur" />
                      </span>
                    )}
                    {estNouveau(une) ? "Nouveau" : "La dernière"}
                  </span>
                  <span className="text-sm font-semibold text-white/70 first-letter:uppercase lg:hidden">{dateLongue(une.created_at)}</span>
                </div>
                <h2 className="max-w-[900px] font-affiche text-[28px] leading-[1.05] break-words sm:text-[40px]">{une.titre}</h2>
                <svg aria-hidden="true" viewBox="0 0 300 24" preserveAspectRatio="none" className="-mt-2 h-3 w-24 text-[#f2b35c] sm:w-32">
                  <path className="trace-main" pathLength={1} d="M4 16C60 6 120 4 180 9s90 8 116-2" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
                {/* Le texte en gras (« je veux que ça soit en gras »). */}
                <p className="max-w-[760px] text-[15px] leading-relaxed font-bold whitespace-pre-line text-white sm:text-base">{une.contenu}</p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 pt-4">
                  <span className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-white" style={{ color: "var(--fond-sombre-haut)" }}>
                      <LogoStudyera className="h-4" />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="text-sm font-bold">L&apos;équipe StudyEra</span>
                      <span className="text-xs text-white/60">Annonce officielle</span>
                    </span>
                  </span>
                  {admin && (
                    <span className="ms-auto [&_button]:text-white/60 [&_button:hover]:text-white">
                      <BoutonSupprimerAnnonce id={une.id} />
                    </span>
                  )}
                </div>
              </div>

              {/* La date en grand, sur ordinateur. */}
              <div aria-hidden="true" className="relative hidden flex-col items-center gap-1 pe-4 lg:flex">
                <span
                  className="font-affiche text-[96px] leading-[0.85] text-transparent"
                  style={{ WebkitTextStroke: "2px rgba(255,255,255,0.85)" }}
                >
                  {jourMois(une.created_at).jour}
                </span>
                <span className="font-affiche text-lg tracking-[0.2em] uppercase">{jourMois(une.created_at).mois}</span>
                <span className="text-sm text-white/60 first-letter:uppercase">
                  {new Date(une.created_at).toLocaleDateString("fr-FR", { timeZone: "Africa/Casablanca", weekday: "long" })}
                </span>
                {estNouveau(une) && (
                  <span dir="rtl" lang="ar" className="mt-1 -rotate-6 font-ruqaa text-2xl text-[#f2b35c]">
                    جديد
                  </span>
                )}
              </div>
            </div>
          </article>

          {autres.length > 0 && (
            <section className="flex flex-col gap-5">
              <h2 className="font-affiche text-2xl text-ink sm:text-3xl">Les précédentes</h2>
              <ol className="relative flex flex-col gap-4 ps-8 sm:ps-10">
                <span aria-hidden="true" className="absolute top-2 bottom-2 start-[11px] w-0.5 rounded-full bg-border sm:start-[15px]" />
                {autres.map((a, i) => {
                  const { jour, mois } = jourMois(a.created_at);
                  return (
                    <li key={a.id} className="animate-entree-carte relative" style={{ animationDelay: `${120 + Math.min(i, 6) * 60}ms` }}>
                      <span
                        aria-hidden="true"
                        className={`absolute top-7 -start-8 size-[10px] translate-x-[7px] rounded-full ring-4 ring-[var(--color-background)] sm:-start-10 sm:translate-x-[11px] ${estNouveau(a) ? "bg-primary" : "bg-border-strong"}`}
                      />
                      <article className="flex gap-4 rounded-[22px] border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_40px_-30px_rgba(15,23,42,0.5)] sm:gap-6 sm:p-6">
                        <span className="flex w-14 shrink-0 flex-col items-center justify-center self-start rounded-[16px] bg-primary-tint py-2 text-primary sm:w-16">
                          <span className="font-affiche text-2xl leading-none sm:text-3xl">{jour}</span>
                          <span className="text-xs font-bold uppercase">{mois}</span>
                        </span>
                        <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                          {estNouveau(a) && (
                            <span className="w-fit rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-bold text-primary-foreground">Nouveau</span>
                          )}
                          <span className="font-affiche text-xl leading-snug text-ink sm:text-2xl">{a.titre}</span>
                          <span className="text-[15px] leading-relaxed font-bold whitespace-pre-line text-foreground">{a.contenu}</span>
                          {admin && <BoutonSupprimerAnnonce id={a.id} />}
                        </span>
                      </article>
                    </li>
                  );
                })}
              </ol>
            </section>
          )}
        </>
      )}
    </main>
  );
}
