import { lireAcces } from "@/lib/acces";

/**
 * Page protégée : /live
 *
 * « On ajoute une nouvelle case qui s'appelle LIVE, affiche juste pour
 * les admins le contenu de cette case, mais pour les élèves juste
 * qu'elle va arriver bientôt. » La case est dans le menu de gauche
 * seulement (choix de l'utilisateur).
 *
 * Le contenu n'est pas encore défini (« page vide pour l'instant ») :
 * l'admin voit donc un espace vide qui le dit, sans exemple inventé,
 * et l'élève voit « Bientôt disponible ». Le contenu viendra se placer
 * dans la branche `admin` ci-dessous.
 */
export default async function PageLive() {
  const { admin } = await lireAcces();

  return (
    <main className="relative flex w-full flex-col gap-8 px-6 pt-16 pb-20 sm:gap-10 sm:px-9 sm:pt-12 lg:px-16 xl:px-24 2xl:px-40">
      <header className="flex flex-col gap-3">
        <p className="flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-bold tracking-[0.18em] text-primary uppercase">
          <span aria-hidden="true" className="relative flex size-2">
            {admin && <span className="absolute inset-0 animate-ping rounded-full bg-erreur opacity-70" />}
            <span className={`relative size-2 rounded-full ${admin ? "bg-erreur" : "bg-border-strong"}`} />
          </span>
          Live
        </p>
        <h1 className="font-affiche text-[40px] leading-[1.05] text-ink sm:text-6xl">Live</h1>
        {admin && (
          <p className="w-fit rounded-full bg-primary-tint px-3 py-1 text-xs font-bold text-primary">
            Visible seulement par les administrateurs
          </p>
        )}
      </header>

      {admin ? (
        <section className="flex min-h-[260px] flex-col items-center justify-center gap-2 rounded-[24px] border-2 border-dashed border-border-strong p-8 text-center">
          <p className="font-titre text-xl text-ink">Rien ici pour l&apos;instant</p>
          <p className="max-w-md text-sm text-muted-foreground">
            Le contenu du Live sera ajouté dans cette page. Les élèves, eux, voient seulement qu&apos;il arrive bientôt.
          </p>
        </section>
      ) : (
        <section className="relative flex min-h-[300px] flex-col items-center justify-center gap-4 overflow-hidden rounded-[28px] border border-border bg-surface p-8 text-center shadow-[0_24px_60px_-34px_rgba(15,23,42,0.4)] sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full opacity-[0.12] blur-3xl"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
          <span className="relative flex size-16 items-center justify-center rounded-2xl bg-primary-tint text-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-8" aria-hidden="true">
              <path d={TRACE_LIVE} />
            </svg>
          </span>
          <p className="relative font-affiche text-3xl text-ink sm:text-4xl">Bientôt disponible</p>
          <p className="relative max-w-md text-base text-muted-foreground">Le Live arrive bientôt sur StudyEra.</p>
        </section>
      )}
    </main>
  );
}

/** Un point entouré d'ondes : la même icône que la case du menu. */
const TRACE_LIVE =
  "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M8.5 15.5a5 5 0 0 1 0-7M15.5 8.5a5 5 0 0 1 0 7M5.6 18.4a9 9 0 0 1 0-12.8M18.4 5.6a9 9 0 0 1 0 12.8";
