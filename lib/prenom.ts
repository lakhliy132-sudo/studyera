/** Premier prénom déduit de `nom_complet`, avec repli sur la partie
 * locale de l'email — extrait ici (`app/(public)/page.tsx` et
 * `app/(eleve)/tableau-de-bord/page.tsx` la dupliquaient chacun) pour
 * être réutilisé aussi par `app/layout.tsx` (nom affiché à côté de
 * l'avatar dans la barre de navigation, maquette envoyée par
 * l'utilisateur). */
export function deriverPrenom(nomComplet: string | null, email: string | null): string {
  const premierMot = nomComplet?.trim().split(/\s+/)[0];
  if (premierMot) return premierMot;
  const local = email?.split("@")[0];
  return local ? local.charAt(0).toUpperCase() + local.slice(1) : "toi";
}
