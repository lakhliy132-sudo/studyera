import Link from "next/link";
import type { CSSProperties } from "react";

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
 * et l'élève voit « Bientôt disponible », dans une carte sombre faite
 * belle à la demande (« la partie bientôt disponible, fais-la belle ») :
 * le panneau « En direct » encore éteint, entouré d'ondes. Le contenu viendra se placer
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
        <section
          className="animate-entree-carte relative grid overflow-hidden rounded-[32px] text-white shadow-[0_34px_70px_-34px_rgba(10,16,32,0.75)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
          style={{ background: "linear-gradient(150deg, var(--fond-sombre-actif) 0%, var(--fond-sombre-haut) 50%, var(--fond-sombre-bas) 100%)" }}
        >
          {/* Quadrillage de cahier, comme l'accueil, en blanc très léger. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />

          <div className="relative flex flex-col items-start gap-5 p-8 sm:p-12 lg:py-16">
            <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-[0.18em] uppercase">
              <span aria-hidden="true" className="size-2 rounded-full bg-white/40" />
              Bientôt disponible
            </span>
            <h2 className="font-affiche text-[42px] leading-[1.02] sm:text-6xl">
              Le Live
              <br />
              <span className="relative inline-block">
                arrive bientôt
                <svg aria-hidden="true" viewBox="0 0 300 24" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-2 h-4 w-full text-[#f2b35c]">
                  <path className="trace-main" pathLength={1} d="M4 16C60 6 120 4 180 9s90 8 116-2" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p dir="rtl" lang="ar" className="font-ruqaa text-2xl text-[#f2b35c] sm:text-3xl">
              قريبا إن شاء الله
            </p>
            <p className="max-w-[420px] text-base leading-relaxed text-white/75 sm:text-lg">
              Cette page s&apos;allumera très bientôt. En attendant, continue tes révisions.
            </p>
            <Link
              href="/matieres"
              className="mt-1 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-bold transition-transform hover:-translate-y-0.5"
              style={{ color: "var(--fond-sombre-haut)" }}
            >
              Continuer à réviser <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Le panneau « En direct », encore éteint, et ses ondes. */}
          <div aria-hidden="true" className="relative flex min-h-[280px] items-center justify-center pb-10 lg:min-h-0 lg:pb-0">
            {[0, 1200, 2400].map((d) => (
              <span
                key={d}
                className="onde-live absolute size-[280px] rounded-full border-2 border-white/40 sm:size-[360px]"
                style={{ "--delai": `${d}ms` } as CSSProperties}
              />
            ))}
            <span className="absolute size-40 rounded-full bg-white/[0.06] blur-xl" />
            <span className="relative flex flex-col items-center gap-4">
              <span className="flex size-24 items-center justify-center rounded-[28px] border border-white/25 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-12">
                  <path d={TRACE_LIVE} />
                </svg>
              </span>
              <span className="flex items-center gap-2 rounded-[10px] border-2 border-white/25 px-4 py-1.5 font-affiche text-lg tracking-[0.2em] text-white/45">
                <span className="size-2.5 rounded-full bg-white/30" />
                EN DIRECT
              </span>
            </span>
          </div>
        </section>
      )}
    </main>
  );
}

/** Un point entouré d'ondes : la même icône que la case du menu. */
const TRACE_LIVE =
  "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M8.5 15.5a5 5 0 0 1 0-7M15.5 8.5a5 5 0 0 1 0 7M5.6 18.4a9 9 0 0 1 0-12.8M18.4 5.6a9 9 0 0 1 0 12.8";
