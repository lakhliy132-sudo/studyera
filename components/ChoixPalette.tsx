"use client";

import { useEffect, useState } from "react";

import { IconeCoche, IconeLune, IconeSoleil } from "@/components/icones";
import { CLE_PALETTE, PALETTES } from "@/lib/palettes";

const CLE_THEME = "studyera-theme";

/**
 * Réglages d'apparence : mode clair ou sombre, et choix d'une palette
 * de couleurs — repris de la maquette fournie par l'utilisateur (« je
 * veux faire comme ses thèmes de couleur »), puis refait plus stylé
 * (« style-la ») :
 *
 * - un aperçu du site à gauche, dessiné avec les jetons de couleur : il
 *   change en direct avec la palette et le mode choisis ;
 * - le mode en deux grandes cartes (Clair / Sombre) au lieu d'un petit
 *   interrupteur ;
 * - les palettes en tuiles, avec une bande de leurs quatre couleurs.
 *
 * Puis « style-la encore plus » : l'aperçu dans une fenêtre de
 * navigateur avec un halo, les étapes numérotées, un ciel de jour et un
 * ciel de nuit pour le mode, une pastille dégradée sur chaque palette.
 *
 * La palette est posée sur `<html data-palette="...">` et mémorisée en
 * `localStorage`, comme le thème clair/sombre (BoutonModeNuit.tsx) :
 * aucune table n'est nécessaire, et la préférence suit l'élève d'une
 * visite à l'autre sur le même navigateur. Le choix s'applique au clic ;
 * le bouton « Enregistrer » de la maquette se contente de confirmer.
 */
export default function ChoixPalette() {
  const [sombre, setSombre] = useState<boolean | null>(null);
  const [palette, setPalette] = useState<string>("default");
  const [enregistre, setEnregistre] = useState(false);

  useEffect(() => {
    const themeStocke = localStorage.getItem(CLE_THEME);
    setSombre(themeStocke ? themeStocke === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
    setPalette(localStorage.getItem(CLE_PALETTE) ?? "default");
  }, []);

  useEffect(() => {
    if (sombre === null) return;
    document.documentElement.dataset.theme = sombre ? "dark" : "light";
    localStorage.setItem(CLE_THEME, sombre ? "dark" : "light");
  }, [sombre]);

  function choisir(cle: string) {
    setPalette(cle);
    setEnregistre(false);
    if (cle === "default") delete document.documentElement.dataset.palette;
    else document.documentElement.dataset.palette = cle;
    localStorage.setItem(CLE_PALETTE, cle);
  }

  const nomPalette = PALETTES.find((p) => p.cle === palette)?.nom ?? "Default";
  const carte = "rounded-[24px] border border-border bg-surface p-5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] sm:p-7";

  return (
    <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      {/* ——— Aperçu en direct ——— */}
      <section aria-label="Aperçu" className={`animate-entree-carte flex flex-col gap-4 xl:sticky xl:top-6 ${carte}`}>
        <div className="flex items-center justify-between gap-3">
          <p className="font-affiche text-2xl text-ink">Aperçu</p>
          <span className="rounded-full bg-primary-tint px-3 py-1 text-xs font-bold text-primary">
            {nomPalette} · {sombre ? "Sombre" : "Clair"}
          </span>
        </div>
        <div aria-hidden="true" className="relative">
        <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[32px] opacity-30 blur-2xl" style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-consigne))" }} />
        <div className="overflow-hidden rounded-[18px] border border-border bg-background shadow-[0_30px_60px_-30px_rgba(15,23,42,0.55)]">
        <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-2.5">
          <span className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="flex-1 truncate rounded-full bg-surface-muted px-3 py-1 text-center text-[11px] font-semibold text-muted-foreground">studyeraprod.vercel.app</span>
        </div>
        <div className="flex h-[280px] sm:h-[320px]">
          <div
            className="flex w-14 shrink-0 flex-col items-center gap-3 py-4 sm:w-16"
            style={{ background: "linear-gradient(180deg, var(--fond-sombre-haut), var(--fond-sombre-bas))" }}
          >
            <span className="size-6 rounded-lg bg-white/90" />
            <span className="mt-2 h-2 w-7 rounded-full bg-white/25" />
            <span className="flex h-7 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: "var(--fond-sombre-actif)" }}>
              <span className="h-2 w-4 rounded-full bg-white/90" />
            </span>
            <span className="h-2 w-7 rounded-full bg-white/25" />
            <span className="h-2 w-7 rounded-full bg-white/25" />
            <span className="h-2 w-7 rounded-full bg-white/25" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-3 p-4 sm:p-5">
            <span className="w-fit rounded-full bg-primary-tint px-2.5 py-1 text-[10px] font-bold text-primary">Français</span>
            <span className="font-affiche text-2xl leading-none text-ink sm:text-3xl">Antigone</span>
            <span className="h-1.5 w-20 rounded-full bg-[var(--color-consigne)]" />
            <span className="h-2 w-[85%] rounded-full bg-surface-muted" />
            <span className="h-2 w-[65%] rounded-full bg-surface-muted" />
            <div className="mt-auto grid grid-cols-2 gap-2.5">
              <span className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-3">
                <span className="size-6 rounded-lg bg-primary" />
                <span className="h-1.5 w-[70%] rounded-full bg-border-strong" />
              </span>
              <span className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-3">
                <span className="size-6 rounded-lg bg-primary-tint" />
                <span className="h-1.5 w-[55%] rounded-full bg-border-strong" />
              </span>
            </div>
            <span className="flex h-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">Commencer</span>
          </div>
        </div>
        </div>
        </div>
        <p className="text-sm text-muted-foreground">Le site entier change en même temps que cet aperçu.</p>
      </section>

      <div className="flex min-w-0 flex-col gap-6">
        {/* ——— Mode ——— */}
        <section aria-label="Mode" className={`animate-entree-carte ${carte}`} style={{ animationDelay: "80ms" }}>
          <p className="flex items-center gap-3 font-affiche text-2xl text-ink"><span className="flex size-8 items-center justify-center rounded-full bg-primary font-sans text-sm font-bold text-primary-foreground">1</span>Mode</p>
          <p className="text-sm text-muted-foreground">Clair le jour, sombre le soir : à toi de voir.</p>
          <div role="radiogroup" aria-label="Mode" className="mt-4 grid grid-cols-2 gap-3">
            {[
              { valeur: false, nom: "Clair", Icone: IconeSoleil },
              { valeur: true, nom: "Sombre", Icone: IconeLune },
            ].map(({ valeur, nom, Icone }) => {
              const actif = sombre === valeur;
              return (
                <button
                  key={nom}
                  type="button"
                  role="radio"
                  aria-checked={actif}
                  onClick={() => setSombre(valeur)}
                  className={`group flex flex-col gap-3 rounded-[18px] border-2 p-3 text-left transition-all hover:-translate-y-0.5 ${
                    actif ? "border-primary shadow-[0_12px_28px_-16px_var(--color-primary)]" : "border-border hover:border-border-strong"
                  }`}
                >
                  {/* Vignette aux couleurs fixes du mode (un ciel de jour,
                      un ciel de nuit), pour qu'on voie ce qu'on choisit
                      quel que soit le mode actuel. */}
                  <span
                    aria-hidden="true"
                    className="relative flex h-24 overflow-hidden rounded-xl sm:h-28"
                    style={{ background: valeur ? "linear-gradient(160deg, #1e1b4b 0%, #0f172a 70%)" : "linear-gradient(160deg, #bfdbfe 0%, #fef3c7 100%)" }}
                  >
                    {valeur ? (
                      <>
                        <span className="absolute top-4 right-6 size-9 rounded-full bg-[#e5e7f5] shadow-[0_0_24px_6px_rgba(229,231,245,0.35)]" />
                        <span className="absolute top-3 right-[18px] size-8 rounded-full bg-[#1a1840]" />
                        {[[18, 22], [40, 60], [28, 110], [62, 34], [12, 150], [50, 170]].map(([t, l]) => (
                          <span key={`${t}-${l}`} className="absolute size-1 rounded-full bg-white/80" style={{ top: t, left: l }} />
                        ))}
                      </>
                    ) : (
                      <>
                        <span className="absolute top-4 right-6 size-10 rounded-full bg-[#fbbf24] shadow-[0_0_30px_10px_rgba(251,191,36,0.45)]" />
                        <span className="absolute bottom-3 left-4 h-4 w-16 rounded-full bg-white/80" />
                        <span className="absolute bottom-6 left-9 h-4 w-10 rounded-full bg-white/80" />
                      </>
                    )}
                    <span className="absolute inset-x-3 bottom-3 ms-auto h-5 w-14 rounded-full bg-primary" />
                  </span>
                  <span className="flex items-center gap-2 px-1">
                    <Icone className={`size-4 ${actif ? "text-primary" : "text-muted-foreground"}`} />
                    <span className={`flex-1 font-bold ${actif ? "text-primary" : "text-ink"}`}>{nom}</span>
                    {actif && (
                      <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <IconeCoche className="size-3" />
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ——— Palettes ——— */}
        <section aria-label="Thème de couleurs" className={`animate-entree-carte ${carte}`} style={{ animationDelay: "160ms" }}>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="flex items-center gap-3 font-affiche text-2xl text-ink"><span className="flex size-8 items-center justify-center rounded-full bg-primary font-sans text-sm font-bold text-primary-foreground">2</span>Thème de couleurs</p>
            <span className="text-sm text-muted-foreground">{PALETTES.length} palettes</span>
          </div>
          <p className="text-sm text-muted-foreground">Choisis la couleur de ton site.</p>

          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 2xl:grid-cols-4">
            {PALETTES.map((choix) => {
              const actif = palette === choix.cle;
              return (
                <li key={choix.cle}>
                  <button
                    type="button"
                    onClick={() => choisir(choix.cle)}
                    aria-pressed={actif}
                    className={`flex w-full flex-col overflow-hidden rounded-[16px] border-2 bg-surface text-left transition-all hover:-translate-y-1 hover:shadow-[0_16px_30px_-20px_rgba(15,23,42,0.5)] ${
                      actif ? "border-primary ring-4 ring-primary/20 shadow-[0_14px_30px_-16px_var(--color-primary)]" : "border-border hover:border-border-strong"
                    }`}
                  >
                    <span className="relative p-1.5 pb-0" aria-hidden="true">
                      <span className="flex h-14 overflow-hidden rounded-[11px]">
                        {choix.apercu.map((couleur, rang) => (
                          <span key={rang} className="flex-1" style={{ backgroundColor: couleur }} />
                        ))}
                      </span>
                      <span
                        className="absolute -bottom-4 left-4 size-8 rounded-full ring-4 ring-surface"
                        style={{ background: `linear-gradient(135deg, ${choix.vif}, ${choix.primaire})` }}
                      />
                    </span>
                    <span className="flex items-center gap-2 bg-surface px-3 pt-5 pb-3">
                      <span className={`flex-1 truncate text-sm font-bold ${actif ? "text-primary" : "text-ink"}`}>{choix.nom}</span>
                      {actif && (
                        <span className="flex shrink-0 items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[11px] font-bold text-primary-foreground">
                          <IconeCoche className="size-3" />
                          <span className="hidden sm:inline">Choisi</span>
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 flex flex-col items-center gap-2 border-t border-border pt-5 sm:flex-row sm:justify-between">
            <p className="text-xs text-subtle-foreground">Tes préférences sont gardées dans ce navigateur.</p>
            <button
              type="button"
              onClick={() => setEnregistre(true)}
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_10px_22px_-12px_var(--color-primary)] transition-transform hover:-translate-y-0.5"
            >
              {enregistre && <IconeCoche className="size-4" />}
              {enregistre ? "Préférences enregistrées" : "Enregistrer les préférences"}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
