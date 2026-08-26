interface IllustrationEnfantBoiteProps {
  className?: string;
}

/**
 * Illustration originale au trait — un enfant portant sa "boîte à
 * merveilles" —, PAS une photo ni une image générée par IA : dessinée
 * à la main en SVG, dans le même langage graphique que les icônes du
 * site (trait fin, `currentColor`). Utilisée dans le panneau de
 * couverture de la bannière d'œuvre (BanniereOeuvre), à la place du
 * dégradé nu, sur demande explicite.
 */
export default function IllustrationEnfantBoite({
  className = "size-32",
}: IllustrationEnfantBoiteProps) {
  return (
    <svg viewBox="0 0 160 170" fill="none" className={className} aria-hidden="true">
      {/* étincelles autour de la boîte, pour évoquer les "merveilles" */}
      <path d="M24 118l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="currentColor" opacity="0.55" />
      <path
        d="M137 108l2.4 5.6 5.6 2.4-5.6 2.4-2.4 5.6-2.4-5.6-5.6-2.4 5.6-2.4z"
        fill="currentColor"
        opacity="0.4"
      />
      <path
        d="M18 148l2 4.6 4.6 2-4.6 2-2 4.6-2-4.6-4.6-2 4.6-2z"
        fill="currentColor"
        opacity="0.4"
      />

      {/* tête */}
      <circle cx="80" cy="28" r="17" stroke="currentColor" strokeWidth="2.5" />

      {/* tunique (épaules -> hanches), au-dessus de la boîte, pas dessus */}
      <path
        d="M62 45L51 100h58L98 45"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* bras, repliés pour tenir la boîte devant soi */}
      <path
        d="M62 50c-15 15-18 33-6 60"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M98 50c15 15 18 33 6 60"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* boîte à merveilles, nettement en dessous de la tunique */}
      <rect x="52" y="112" width="56" height="40" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <rect x="48" y="104" width="64" height="11" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M72 109.5l8-4 8 4M72 109.5l8 4 8-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
