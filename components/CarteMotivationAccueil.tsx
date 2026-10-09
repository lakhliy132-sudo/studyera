/**
 * Carte de citation de la colonne de droite de l'accueil connecté,
 * d'après la dernière maquette de l'utilisateur : une phrase
 * d'encouragement posée sur un ciel brumeux, avec des montagnes en bas.
 *
 * Couleurs fixes, exception assumée à la règle des jetons (CLAUDE.md
 * §3) : c'est une illustration (ciel, montagnes), qui doit rester la
 * même en mode clair et en mode sombre, comme une photo. Le texte est
 * foncé sur un ciel clair dans les deux modes, donc toujours lisible.
 * Les montagnes sont dessinées en SVG plutôt que recadrées depuis la
 * maquette, où la citation est écrite par-dessus la photo.
 *
 * Texte générique, aucune donnée.
 */
export default function CarteMotivationAccueil() {
  return (
    <figure
      className="relative flex min-h-[176px] flex-col overflow-hidden rounded-[24px] p-6 shadow-sm"
      style={{ background: "linear-gradient(180deg, #e8ecf6 0%, #d3dbec 55%, #b9c5de 100%)" }}
    >
      <blockquote className="relative z-10 max-w-[230px] font-serif text-[17px] leading-snug text-[#1d2340] italic">
        Les grandes réussites commencent souvent par de petits efforts répétés.
      </blockquote>
      <span aria-hidden="true" className="relative z-10 mt-3 block h-[2px] w-12 rounded-full bg-[#1d2340]/50" />

      <svg
        aria-hidden="true"
        viewBox="0 0 320 110"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[92px] w-full"
      >
        <path d="M0 110 L0 62 L46 40 L82 58 L132 22 L176 54 L214 34 L262 60 L320 38 L320 110 Z" fill="#9aa8c8" />
        <path d="M0 110 L0 80 L60 56 L104 76 L150 48 L206 82 L252 62 L320 78 L320 110 Z" fill="#6878a0" />
        <path d="M0 110 L0 96 L38 84 L58 92 L86 80 L120 94 L176 86 L230 98 L276 88 L320 96 L320 110 Z" fill="#33406a" />
      </svg>
    </figure>
  );
}
