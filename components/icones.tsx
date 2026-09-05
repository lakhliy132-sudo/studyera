/**
 * Icônes en ligne (SVG, trait `currentColor`), reprises telles quelles
 * de la maquette de référence (page-oeuvre.html) : plus aucune icône
 * du site ne doit être un emoji (📖, 👤, ✎...) depuis cette session —
 * un seul jeu d'icônes cohérent, ici, réutilisé partout où une icône
 * est nécessaire.
 */

interface IconeProps {
  className?: string;
}

const TAILLE_PAR_DEFAUT = "size-4";

export function IconeLivre({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M4 5a2 2 0 012-2h5v18H6a2 2 0 01-2-2V5zM20 5a2 2 0 00-2-2h-5v18h5a2 2 0 002-2V5z" />
    </svg>
  );
}

/** Variante "livre ouvert" — réservée au Lexique, pour le distinguer
 * visuellement du Résumé qui utilise IconeLivre. */
export function IconeLivreOuvert({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M3 5h7a3 3 0 013 3v11a3 3 0 00-3-2H3V5zM21 5h-7a3 3 0 00-3 3v11a3 3 0 013-2h7V5z" />
    </svg>
  );
}

export function IconeAuteur({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

export function IconePersonne({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
    </svg>
  );
}

export function IconeDocument({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  );
}

export function IconeInfo({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16v-4M12 8h.01" strokeLinecap="round" />
    </svg>
  );
}

export function IconeLieu({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M12 21s7-7.58 7-12a7 7 0 10-14 0c0 4.42 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function IconeLien({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M10 13a5 5 0 007.07 0l1.93-1.93a5 5 0 00-7.07-7.07L10.5 5.5" />
      <path d="M14 11a5 5 0 00-7.07 0L5 12.93a5 5 0 007.07 7.07L13.5 18.5" />
    </svg>
  );
}

export function IconeMenu({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconeCoche({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function IconeFleche({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** Ampoule — onglet "Thèmes et enjeux". */
export function IconeIdee({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" />
    </svg>
  );
}

/** Masques de théâtre — pilule de sélection d'œuvre pour une pièce
 * (ex. Antigone). */
export function IconeMasques({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M4 5h7v6a3.5 3.5 0 01-7 0V5zM13 5h7v6a3.5 3.5 0 01-7 0V5z" />
      <path d="M6.5 14.5c.8.8 1.7.8 2.5 0M15 14.5c.8.8 1.7.8 2.5 0" />
    </svg>
  );
}

/** Maison — pilule de sélection d'œuvre pour un roman (ex. La Boîte à
 * Merveilles). */
export function IconeMaison({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className} aria-hidden="true">
      <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
    </svg>
  );
}

/** Loupe — champ de recherche (onglet Lexique). */
export function IconeRecherche({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

/** Œil — bascule "Mode révision" de l'onglet Lexique. */
export function IconeOeil({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/** Horloge — métadonnée "25 min" d'un sujet. */
export function IconeHorloge({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

/** Étoile — métadonnée "Noté sur 10" d'un sujet. */
export function IconeEtoile({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2l2.9 6.3 6.6.8-4.9 4.6 1.3 6.8L12 17.3 6.1 20.5l1.3-6.8L2.5 9.1l6.6-.8z" />
    </svg>
  );
}

/** Texte (lignes) — métadonnée "≈ 150 mots" d'un sujet. */
export function IconeTexte({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h11" />
    </svg>
  );
}

/** Point d'interrogation — onglet "Quiz". */
export function IconeQuiz({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 014.9.8c0 1.7-2.4 2-2.4 3.7" />
      <path d="M12 17h.01" />
    </svg>
  );
}

/**
 * Icônes des 12 leçons de la page /langue — une par carte, reprises
 * (en version trait, cohérente avec le reste du site) de la maquette
 * de référence fournie par l'utilisateur pour cette page.
 */

/** Bulles de dialogue — leçon "L'énonciation". */
export function IconeBulles({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 5h11v7H9l-3 3v-3H4V5z" />
      <path d="M13 9h7v6h-3v3l-3-3" />
    </svg>
  );
}

/** Réseau de nœuds — leçon "Le champ lexical". */
export function IconeReseau({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M7.5 7.3L11 16M16.5 7.3L13 16M8 6h8" />
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
    </svg>
  );
}

/** Guillemets — leçon "Le discours rapporté". */
export function IconeCitation({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 8c-2 0-3 1.6-3 3.5S5 15 7 15M7 8v4c0 1.6-1 2.6-2.2 3.2" />
      <path d="M17 8c-2 0-3 1.6-3 3.5S15 15 17 15M17 8v4c0 1.6-1 2.6-2.2 3.2" />
    </svg>
  );
}

/** Barres ascendantes — leçon "Les niveaux de langue". */
export function IconeGraphique({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 20h18" />
      <path d="M6 20v-5M12 20V9M18 20v-9" />
    </svg>
  );
}

/** Plume — leçon "Figures d'analogie". */
export function IconePlume({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 4c-6.5 0-12.5 4-14.5 10.5-1 3.3 0.5 5.5 2.5 5.5 2-6.5 6.5-10.5 13-11.5" />
      <path d="M6 20l3.5-3.5" />
    </svg>
  );
}

/** Cible — leçon "Figures d'insistance". */
export function IconeCible({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Flèche montante — leçon "Figures d'amplification". */
export function IconeFlecheHaut({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

/** Double flèche horizontale — leçon "Figures de substitution". */
export function IconeFlecheDouble({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 12h18M3 12l4-4M3 12l4 4M21 12l-4-4M21 12l-4 4" />
    </svg>
  );
}

/** Cercle moins — leçon "Figures d'atténuation". */
export function IconeMoins({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8" />
    </svg>
  );
}

/** Cercle croix — leçon "Figures d'opposition". */
export function IconeOpposition({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5l5 5M14.5 9.5l-5 5" />
    </svg>
  );
}

/** Soleil — bouton de mode nuit (`BoutonModeNuit.tsx`), affiché quand
 * le thème actif est clair (cliquer bascule vers le mode sombre). */
export function IconeSoleil({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12h2.5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
    </svg>
  );
}

/** Lune — bouton de mode nuit (`BoutonModeNuit.tsx`), affiché quand le
 * thème actif est sombre (cliquer bascule vers le mode clair). */
export function IconeLune({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z" />
    </svg>
  );
}

/** Croissant et étoile — badge de la matière "Éducation islamique"
 * (page /matieres et /education-islamique). */
export function IconeCroissant({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M14.5 4.5A8 8 0 1019 17a7 7 0 01-4.5-12.5z" />
      <path d="M19.5 8.5l.6 1.3 1.4.2-1 1 .3 1.4-1.3-.7-1.3.7.3-1.4-1-1 1.4-.2z" />
    </svg>
  );
}

/** Globe — badge de la matière "Histoire-Géographie" (page /matieres
 * et /histoire-geo). */
export function IconeGlobe({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
    </svg>
  );
}

/** Calendrier — page /calendrier. */
export function IconeCalendrier({ className = TAILLE_PAR_DEFAUT }: IconeProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="16" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v3M16 3v3" />
    </svg>
  );
}
