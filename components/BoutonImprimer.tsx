"use client";

/**
 * "Télécharger en PDF" de la page de correction : ouvre la fenêtre
 * d'impression du navigateur, où l'élève choisit "Enregistrer en PDF".
 * Pas de génération de PDF côté serveur : le navigateur le fait déjà
 * très bien, et la page masque à l'impression ce qui ne sert qu'à
 * l'écran (menu, boutons).
 */
export default function BoutonImprimer({ className }: { className?: string }) {
  return (
    <button type="button" onClick={() => window.print()} className={className}>
      Télécharger en PDF
    </button>
  );
}
