import ChoixPalette from "@/components/ChoixPalette";
import { IconePalette } from "@/components/icones";

/**
 * /parametres — réglages d'apparence de l'élève, d'après la maquette
 * fournie par l'utilisateur ("je veux faire comme ses themes de
 * couleur") : mode clair/sombre et choix d'une palette. Refaite ensuite
 * plus stylée (« style-la ») : titre Lalezar souligné à la main, note
 * en ruqʿa, aperçu en direct à côté des réglages (ChoixPalette).
 *
 * La maquette montre aussi des onglets "Profil académique",
 * "Paramètres de l'application" et "Billing" : ils ne sont pas repris,
 * aucun de ces réglages n'existe sur le site (et il n'y a pas de
 * facturation). Ajouter des onglets vides ferait croire à des
 * fonctionnalités absentes.
 */
export default function PageParametres() {
  return (
    <main className="relative flex w-full flex-col gap-8 overflow-x-clip px-6 pt-16 pb-20 sm:px-9 sm:pt-12 lg:px-16 xl:px-24 2xl:px-40">
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

      <header className="animate-entree-carte flex flex-col gap-3">
        <p className="flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-bold tracking-[0.18em] text-primary uppercase">
          <IconePalette className="size-4" />
          Paramètres
        </p>
        <h1 className="font-affiche text-[40px] leading-[1.05] text-ink sm:text-6xl">
          Ton site,{" "}
          <span className="relative inline-block">
            tes couleurs
            <svg aria-hidden="true" viewBox="0 0 300 24" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-2 h-4 w-full text-[var(--color-consigne)]">
              <path className="trace-main" pathLength={1} d="M4 16C60 6 120 4 180 9s90 8 116-2" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <p dir="rtl" lang="ar" className="w-fit font-ruqaa text-2xl text-[var(--color-consigne)] sm:text-3xl">
          ختار اللون اللي كيعجبك
        </p>
      </header>

      <ChoixPalette />
    </main>
  );
}
