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
 * Seul le symbole est affiché, sans le mot "Studyera" — demandé par
 * l'utilisateur ("enleve studyera laisse juste le symbole et fais le un
 * peu plus grand"). Le symbole a été découpé du fichier d'origine dans
 * `public/logo-symbole-studyera.png` plutôt que masqué par un cadrage :
 * un fichier à ses propres dimensions se dimensionne simplement par sa
 * hauteur, sans calcul de décalage.
 *
 * `aspectRatio` reprend les dimensions du fichier (318 × 362) pour que
 * seule la hauteur ait besoin d'être donnée par l'appelant.
 */
export default function LogoStudyera({ className = "" }: LogoStudyeraProps) {
  const masque: CSSProperties = {
    aspectRatio: "318 / 362",
    backgroundColor: "currentColor",
    maskImage: "url(/logo-symbole-studyera.png)",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "contain",
    WebkitMaskImage: "url(/logo-symbole-studyera.png)",
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
