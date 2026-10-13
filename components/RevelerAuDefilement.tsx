"use client";

import { useEffect } from "react";

import { animationsCoupees } from "@/lib/animations";

/**
 * Fait apparaître en glissant, au fil du défilement, les éléments de la
 * page qui portent `data-reveler` (accueil visiteur : « mets des
 * animations très belles, des trucs qui bougent »). Ne rend rien.
 *
 * Seuls les éléments encore sous l'écran au chargement sont cachés
 * (`data-reveler="cache"`), puis montrés (`"vu"`) quand ils entrent
 * dans la fenêtre : ce qui est déjà visible ne clignote pas, et sans
 * JavaScript tout reste affiché. Le décalage d'un élément à l'autre
 * vient de la variable `--delai` posée sur l'élément (app/globals.css).
 */
export default function RevelerAuDefilement() {
  useEffect(() => {
    if (animationsCoupees() || !("IntersectionObserver" in window)) return;

    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          if (!entree.isIntersecting) continue;
          entree.target.setAttribute("data-reveler", "vu");
          observateur.unobserve(entree.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const element of document.querySelectorAll<HTMLElement>("[data-reveler]")) {
      if (element.getBoundingClientRect().top < window.innerHeight) continue;
      element.setAttribute("data-reveler", "cache");
      observateur.observe(element);
    }
    return () => observateur.disconnect();
  }, []);

  return null;
}
