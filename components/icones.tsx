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
