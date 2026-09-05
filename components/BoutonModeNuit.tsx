"use client";

import { useEffect, useState } from "react";

import { IconeLune, IconeSoleil } from "@/components/icones";

const CLE_STOCKAGE = "studyera-theme";

/**
 * Bouton de bascule mode clair/sombre — demandé explicitement par
 * l'utilisateur ("FAIS MOI LE MODE DE NUIT"), placé dans
 * `BarreNavigation.tsx` à côté de "Se déconnecter" ("a cote de la
 * partie de se deconnecter").
 *
 * Pose `data-theme="light"`/`"dark"` sur `<html>`, lu par les
 * dégradés de tokens `--color-*` dans app/globals.css (voir le
 * commentaire à côté de `[data-theme="dark"]` là-bas). Préférence
 * mémorisée en `localStorage` pour persister d'une visite à l'autre.
 *
 * Tant que la préférence n'a pas été lue côté client (premier rendu,
 * avant l'effet), le bouton n'affiche rien plutôt qu'une icône
 * potentiellement fausse (évite un clignotement lune→soleil ou
 * l'inverse au chargement) — la couleur du site, elle, est déjà
 * correcte dès le premier rendu grâce à la préférence système
 * (`prefers-color-scheme`) gérée en CSS pur, sans dépendre de ce
 * composant.
 */
export default function BoutonModeNuit() {
  const [sombre, setSombre] = useState<boolean | null>(null);

  useEffect(() => {
    const stocke = localStorage.getItem(CLE_STOCKAGE);
    const preferenceSysteme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setSombre(stocke ? stocke === "dark" : preferenceSysteme);
  }, []);

  useEffect(() => {
    if (sombre === null) return;
    document.documentElement.dataset.theme = sombre ? "dark" : "light";
    localStorage.setItem(CLE_STOCKAGE, sombre ? "dark" : "light");
  }, [sombre]);

  if (sombre === null) {
    return <span className="size-9 shrink-0" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={() => setSombre((valeur) => !valeur)}
      aria-label={sombre ? "Passer au mode clair" : "Passer au mode sombre"}
      title={sombre ? "Passer au mode clair" : "Passer au mode sombre"}
      className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-surface-muted hover:text-primary"
    >
      {sombre ? <IconeSoleil className="size-[18px]" /> : <IconeLune className="size-[18px]" />}
    </button>
  );
}
