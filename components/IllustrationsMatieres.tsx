interface IllustrationProps {
  className?: string;
}

/** Contour commun à toutes les illustrations : le bleu nuit des
 * titres de la maquette. */
const TRAIT = "#1e2a6b";

/**
 * Petites illustrations plates des cartes de /matieres, dessinées
 * d'après la maquette fournie par l'utilisateur ("comme ca", vue
 * rapprochée de la carte Français) : objet dessiné en aplats de
 * couleur avec un contour bleu nuit, plutôt que l'icône au trait
 * utilisée ailleurs sur le site.
 *
 * SVG inline et non des images : la maquette n'a été fournie qu'en
 * capture de chat, il n'y a aucun fichier à découper, et des dessins
 * vectoriels restent nets à toutes les tailles sans alourdir la page.
 * Elles ne servent qu'ici — les icônes de components/icones.tsx
 * restent la règle partout ailleurs.
 */
export function IllustrationLivre({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M12 9h20a4 4 0 0 1 4 4v26H16a4 4 0 0 1-4-4V9Z"
        fill="#5b5bd6"
        stroke={TRAIT}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M12 35a4 4 0 0 1 4-4h20v8H16a4 4 0 0 1-4-4Z"
        fill="#c9c6f7"
        stroke={TRAIT}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <rect
        x="19"
        y="15"
        width="8"
        height="11"
        rx="1.5"
        fill="#f9d2e4"
        stroke={TRAIT}
        strokeWidth="2.2"
      />
    </svg>
  );
}

export function IllustrationLivreOuvert({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 14c-4-3-9-4-14-4v22c5 0 10 1 14 4V14Z"
        fill="#c9c6f7"
        stroke={TRAIT}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M24 14c4-3 9-4 14-4v22c-5 0-10 1-14 4V14Z"
        fill="#5b5bd6"
        stroke={TRAIT}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M10 36h28"
        stroke={TRAIT}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IllustrationGlobe({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle
        cx="24"
        cy="21"
        r="13"
        fill="#7dc4f0"
        stroke={TRAIT}
        strokeWidth="2.4"
      />
      <path
        d="M24 8c4 4 4 22 0 26M24 8c-4 4-4 22 0 26M11 21h26"
        stroke={TRAIT}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M24 34v6M18 40h12"
        stroke={TRAIT}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IllustrationMosquee({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M13 38V23c0-6 5-9 11-9s11 3 11 9v15H13Z"
        fill="#7fd9c8"
        stroke={TRAIT}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M21 38V29a3 3 0 0 1 6 0v9"
        fill="#eafaf6"
        stroke={TRAIT}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M9 38V22M39 38V22"
        stroke={TRAIT}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M24 9v4"
        stroke={TRAIT}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
