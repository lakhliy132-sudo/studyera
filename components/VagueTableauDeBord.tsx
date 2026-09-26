"use client";

import { useEffect, useState } from "react";

/** Hauteur de la vague au chargement, en pixels — la taille d'origine,
 * que l'utilisateur voulait conserver. */
const HAUTEUR_DEPART = 340;
/** Hauteur maximale atteinte en défilant : au-delà, la vague
 * couvrirait toute la fenêtre. */
const HAUTEUR_MAX = 820;
/** Pixels gagnés par la vague pour un pixel défilé. */
const FACTEUR = 0.6;

/**
 * Vague décorative en haut du tableau de bord, qui s'agrandit à mesure
 * qu'on descend dans la page — demandé explicitement par l'utilisateur
 * ("laisse la taille comme le debut mais quand on skipe elle grande").
 * Une version simplement plus haute avait été essayée avant et
 * écartée : c'est bien le mouvement au défilement qui était voulu.
 *
 * Composant client (le seul de cette page) parce qu'il écoute le
 * défilement. Les mesures passent par `requestAnimationFrame` pour ne
 * pas recalculer à chaque événement, et l'écouteur est `passive` afin
 * de ne pas retarder le défilement lui-même.
 *
 * La hauteur de départ est rendue telle quelle côté serveur : aucun
 * décalage d'hydratation, la page s'affiche avec la vague d'origine
 * même avant que le JavaScript ne prenne la main.
 */
export default function VagueTableauDeBord() {
  const [hauteur, setHauteur] = useState(HAUTEUR_DEPART);

  useEffect(() => {
    let image = 0;

    const auDefilement = () => {
      if (image) return;
      image = requestAnimationFrame(() => {
        image = 0;
        setHauteur(
          Math.min(HAUTEUR_DEPART + window.scrollY * FACTEUR, HAUTEUR_MAX),
        );
      });
    };

    window.addEventListener("scroll", auDefilement, { passive: true });
    auDefilement();
    return () => {
      window.removeEventListener("scroll", auDefilement);
      if (image) cancelAnimationFrame(image);
    };
  }, []);

  return (
    <svg
      viewBox="0 0 1440 420"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-x-0 top-0 w-full"
      style={{ height: `${hauteur}px` }}
    >
      <defs>
        <linearGradient
          id="degrade-vague-tableau-de-bord"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor="color-mix(in srgb, var(--color-matiere-arabe) 16%, var(--color-background))"
          />
          <stop
            offset="55%"
            stopColor="color-mix(in srgb, var(--color-primary) 18%, var(--color-background))"
          />
          <stop offset="100%" stopColor="var(--color-background)" />
        </linearGradient>
      </defs>
      <path
        d="M0,0 H1440 V210 C1290,268 1120,196 930,238 C700,288 520,352 300,330 C170,317 70,282 0,250 Z"
        fill="url(#degrade-vague-tableau-de-bord)"
      />
    </svg>
  );
}
