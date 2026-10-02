"use client";

import { useEffect, useState } from "react";

import { IconeCoche, IconeLune, IconeSoleil } from "@/components/icones";
import { CLE_PALETTE, PALETTES } from "@/lib/palettes";

const CLE_THEME = "studyera-theme";

/**
 * Réglages d'apparence : interrupteur de mode sombre et choix d'une
 * palette de couleurs — repris de la maquette fournie par
 * l'utilisateur ("je veux faire comme ses themes de couleur").
 *
 * La palette est posée sur `<html data-palette="...">` et mémorisée en
 * `localStorage`, comme le thème clair/sombre (BoutonModeNuit.tsx) :
 * aucune table n'est nécessaire, et la préférence suit l'élève d'une
 * visite à l'autre sur le même navigateur.
 *
 * L'aperçu est appliqué immédiatement au clic — on voit la couleur
 * changer sur toute la page — et le bouton "Enregistrer" se contente
 * de confirmer : rien ne serait perdu sans lui, mais la maquette le
 * montre et il rassure.
 */
export default function ChoixPalette() {
  const [sombre, setSombre] = useState<boolean | null>(null);
  const [palette, setPalette] = useState<string>("default");
  const [enregistre, setEnregistre] = useState(false);

  useEffect(() => {
    const themeStocke = localStorage.getItem(CLE_THEME);
    setSombre(
      themeStocke
        ? themeStocke === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches,
    );
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

  return (
    <div className="flex flex-col gap-6 rounded-[20px] border border-border bg-surface p-6 shadow-sm sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-serif text-lg font-bold text-ink">Mode sombre</p>
          <p className="text-sm text-muted-foreground">
            Basculer entre le thème clair et sombre.
          </p>
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={sombre === true}
          onClick={() => setSombre((valeur) => !valeur)}
          className={`relative flex h-7 w-12 shrink-0 items-center rounded-full transition-colors ${
            sombre ? "bg-primary" : "bg-surface-muted"
          }`}
        >
          <span
            className={`flex size-5 items-center justify-center rounded-full bg-surface text-subtle-foreground shadow transition-transform ${
              sombre ? "translate-x-6" : "translate-x-1"
            }`}
          >
            {sombre ? (
              <IconeLune className="size-3" />
            ) : (
              <IconeSoleil className="size-3" />
            )}
          </span>
        </button>
      </div>

      <div className="border-t border-border pt-5">
        <p className="font-serif text-lg font-bold text-ink">
          Thème de couleurs
        </p>
        <p className="text-sm text-muted-foreground">
          Choisis une palette de couleurs pour le site.
        </p>

        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PALETTES.map((choix) => {
            const actif = palette === choix.cle;
            return (
              <li key={choix.cle}>
                <button
                  type="button"
                  onClick={() => choisir(choix.cle)}
                  aria-pressed={actif}
                  className={`flex w-full items-center gap-3 rounded-[12px] border px-4 py-3 transition ${
                    actif
                      ? "border-primary bg-primary-tint"
                      : "border-border bg-surface hover:border-border-strong"
                  }`}
                >
                  <span className="flex shrink-0">
                    {choix.apercu.map((couleur, rang) => (
                      <span
                        key={rang}
                        className="size-5 rounded-full ring-2 ring-surface"
                        style={{
                          backgroundColor: couleur,
                          marginLeft: rang === 0 ? 0 : "-0.5rem",
                        }}
                      />
                    ))}
                  </span>
                  <span
                    className={`flex-1 text-left text-sm font-semibold ${actif ? "text-primary" : "text-ink"}`}
                  >
                    {choix.nom}
                  </span>
                  {actif && (
                    <IconeCoche className="size-4 shrink-0 text-primary" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => setEnregistre(true)}
        className="rounded-[12px] bg-primary py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-px"
      >
        {enregistre
          ? "Préférences enregistrées"
          : "Enregistrer les préférences"}
      </button>

      <p className="-mt-3 text-center text-xs text-subtle-foreground">
        Tes préférences sont gardées dans ce navigateur.
      </p>
    </div>
  );
}
