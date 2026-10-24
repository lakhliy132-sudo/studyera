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
      <section aria-label="Aperçu" className={`flex flex-col gap-4 xl:sticky xl:top-6 ${carte}`}>
        <div className="flex items-center justify-between gap-3">
          <p className="font-affiche text-2xl text-ink">Aperçu</p>
          <span className="rounded-full bg-primary-tint px-3 py-1 text-xs font-bold text-primary">
            {nomPalette} · {sombre ? "Sombre" : "Clair"}
          </span>
        </div>
        <div aria-hidden="true" className="flex h-[300px] overflow-hidden rounded-[18px] border border-border bg-background sm:h-[340px]">
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
        <p className="text-sm text-muted-foreground">Le site entier change en même temps que cet aperçu.</p>
      </section>

      <div className="flex min-w-0 flex-col gap-6">
        {/* ——— Mode ——— */}
        <section aria-label="Mode" className={carte}>
          <p className="font-affiche text-2xl text-ink">Mode</p>
          <p className="text-sm text-muted-foreground">Clair le jour, sombre le soir : à toi de voir.</p>
          <div role="radiogroup" aria-label="Mode" className="mt-4 grid grid-cols-2 gap-3">
            {[
              { valeur: false, nom: "Clair", Icone: IconeSoleil, fond: "#f6f8fc", trait: "#d9e0ee", encre: "#14213d" },
              { valeur: true, nom: "Sombre", Icone: IconeLune, fond: "#12141c", trait: "#2a2f3d", encre: "#e8ebf5" },
            ].map(({ valeur, nom, Icone, fond, trait, encre }) => {
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
                  {/* Vignette aux couleurs fixes du mode, pour qu'on voie
                      ce qu'on choisit quel que soit le mode actuel. */}
                  <span className="flex h-20 flex-col gap-1.5 rounded-xl p-3" style={{ backgroundColor: fond }} aria-hidden="true">
                    <span className="h-2 w-1/2 rounded-full" style={{ backgroundColor: encre }} />
                    <span className="h-1.5 w-3/4 rounded-full" style={{ backgroundColor: trait }} />
                    <span className="h-1.5 w-2/3 rounded-full" style={{ backgroundColor: trait }} />
                    <span className="mt-auto h-3 w-10 rounded-full bg-primary" />
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
        <section aria-label="Thème de couleurs" className={carte}>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-affiche text-2xl text-ink">Thème de couleurs</p>
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
                    className={`flex w-full flex-col overflow-hidden rounded-[16px] border-2 text-left transition-all hover:-translate-y-0.5 ${
                      actif ? "border-primary shadow-[0_12px_28px_-16px_var(--color-primary)]" : "border-border hover:border-border-strong"
                    }`}
                  >
                    <span className="flex h-12" aria-hidden="true">
                      {choix.apercu.map((couleur, rang) => (
                        <span key={rang} className="flex-1" style={{ backgroundColor: couleur }} />
                      ))}
                    </span>
                    <span className="flex items-center gap-2 bg-surface px-3 py-2.5">
                      <span className={`flex-1 truncate text-sm font-bold ${actif ? "text-primary" : "text-ink"}`}>{choix.nom}</span>
                      {actif && (
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <IconeCoche className="size-3" />
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
