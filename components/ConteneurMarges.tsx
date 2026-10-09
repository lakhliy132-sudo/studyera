"use client";

import { usePathname } from "next/navigation";

/** Pages qui gardent les marges d'origine (px-6 sm:px-9), sans les
 * marges larges du reste du site : demandé pour l'accueil, le tableau
 * de bord et le calendrier ("pour accueil tableau de bord et calendrier
 * laisse les tailles comme avant cad sans marge"). */
export const PAGES_SANS_MARGES = ["/", "/tableau-de-bord", "/calendrier"];

const MARGES_LARGES = "lg:px-16 xl:px-24 2xl:px-40";

/**
 * Conteneur de la barre du haut et du pied de page : il reprend les
 * marges de la page affichée, pour que logo, contenu et pied restent
 * alignés (CLAUDE.md §4). Composant client parce que seul
 * `usePathname` connaît la page en cours ; la barre et le pied restent
 * des composants serveur.
 */
export default function ConteneurMarges({ className, children }: { className: string; children: React.ReactNode }) {
  const chemin = usePathname();
  const sansMarges = PAGES_SANS_MARGES.includes(chemin);
  return <div className={sansMarges ? className : `${className} ${MARGES_LARGES}`}>{children}</div>;
}
