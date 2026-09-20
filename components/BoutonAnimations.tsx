"use client";

import { useEffect, useState } from "react";

import { IconeEclair, IconeEclairBarre } from "@/components/icones";

const CLE_STOCKAGE = "studyera-animations";

/**
 * Bouton qui coupe (ou rallume) les animations du site — demandé
 * explicitement par l'utilisateur ("ouiii ajoute sur le site"), après
 * avoir appris que la réduction des animations n'existait jusque-là
 * qu'en réglage système (`prefers-reduced-motion`).
 *
 * Même structure que BoutonModeNuit : préférence posée sur `<html>`
 * (`data-animations="off"`), lue par une règle CSS d'app/globals.css,
 * et mémorisée en `localStorage`. Par défaut les animations sont
 * actives, sauf si le système en demande déjà moins — dans ce cas le
 * bouton part sur "coupées", pour refléter ce que la personne voit
 * réellement.
 *
 * Un espace de la même taille est affiché tant que la préférence n'a
 * pas été lue côté client, pour éviter que la barre de navigation ne
 * sursaute au chargement.
 */
export default function BoutonAnimations() {
  const [animations, setAnimations] = useState<boolean | null>(null);

  useEffect(() => {
    const stocke = localStorage.getItem(CLE_STOCKAGE);
    const systemeReduit = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setAnimations(stocke ? stocke === "on" : !systemeReduit);
  }, []);

  useEffect(() => {
    if (animations === null) return;
    if (animations) {
      delete document.documentElement.dataset.animations;
    } else {
      document.documentElement.dataset.animations = "off";
    }
    localStorage.setItem(CLE_STOCKAGE, animations ? "on" : "off");
  }, [animations]);

  if (animations === null) {
    return <span className="size-9 shrink-0" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={() => setAnimations((valeur) => !valeur)}
      aria-label={
        animations ? "Couper les animations" : "Réactiver les animations"
      }
      title={animations ? "Couper les animations" : "Réactiver les animations"}
      className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-surface-muted hover:text-primary"
    >
      {animations ? (
        <IconeEclair className="size-[18px]" />
      ) : (
        <IconeEclairBarre className="size-[18px]" />
      )}
    </button>
  );
}
