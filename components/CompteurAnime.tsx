"use client";

import { useEffect, useRef, useState } from "react";

import { animationsCoupees } from "@/lib/animations";

/**
 * Un chiffre qui défile de 0 à sa valeur quand il entre à l'écran
 * (accueil visiteur). La valeur elle-même vient de la base, comptée
 * côté serveur : le composant ne fait que l'animer, et le rendu
 * serveur (comme le mode « animations coupées ») affiche directement
 * la valeur finale.
 */
export default function CompteurAnime({ valeur, duree = 1400 }: { valeur: number; duree?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [affiche, setAffiche] = useState(valeur);

  useEffect(() => {
    const element = ref.current;
    if (!element || valeur <= 0 || animationsCoupees() || !("IntersectionObserver" in window)) return;

    let image = 0;
    setAffiche(0);
    const observateur = new IntersectionObserver(([entree]) => {
      if (!entree.isIntersecting) return;
      observateur.disconnect();
      const debut = performance.now();
      const pas = (maintenant: number) => {
        const t = Math.min(1, (maintenant - debut) / duree);
        // Décélération en fin de course (ease-out cubique).
        setAffiche(Math.round(valeur * (1 - (1 - t) ** 3)));
        if (t < 1) image = requestAnimationFrame(pas);
      };
      image = requestAnimationFrame(pas);
    });
    observateur.observe(element);
    return () => {
      observateur.disconnect();
      cancelAnimationFrame(image);
    };
  }, [valeur, duree]);

  return (
    <span ref={ref} className="tabular-nums">
      {affiche}
    </span>
  );
}
