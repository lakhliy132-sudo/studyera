import type { CSSProperties } from "react";

interface LogoStudyeraProps {
  /** Hauteur et couleur du logo, par ex. `h-[52px] text-primary`. */
  className?: string;
}

/**
 * Le logo du site, teinté par la couleur courante.
 *
 * Il était affiché comme une image : un PNG bleu, qui restait donc bleu
 * quelle que soit la palette choisie, au milieu d'une interface qui,
 * elle, changeait de couleur — ce que l'utilisateur n'a pas voulu
 * ("quand on change du theme il reste en bleu ca ne me plait pas"). Il
 * fallait aussi l'éclaircir au filtre en mode sombre, où il se
 * confondait avec le fond.
 *
 * Le fichier est à 77 % transparent et d'une seule teinte : il sert
 * donc ici de masque plutôt que d'image, et c'est `currentColor` qui le
 * remplit. Le logo suit dès lors la palette et le mode sombre comme
 * n'importe quel texte, sans seconde image ni filtre.
 *
 * `aspectRatio` reprend les dimensions du fichier (868 × 568) pour que
 * seule la hauteur ait besoin d'être donnée par l'appelant.
 */
export default function LogoStudyera({ className = "" }: LogoStudyeraProps) {
  const masque: CSSProperties = {
    aspectRatio: "868 / 568",
    backgroundColor: "currentColor",
    maskImage: "url(/logo-studyera.png)",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "contain",
    WebkitMaskImage: "url(/logo-studyera.png)",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "contain",
  };

  return (
    <span
      role="img"
      aria-label="Studyera"
      style={masque}
      className={`block shrink-0 ${className}`}
    />
  );
}
