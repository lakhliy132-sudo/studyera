/** `true` quand l'élève a coupé les animations, depuis le site
 * (BoutonAnimations, mémorisé en localStorage et posé sur <html>) ou
 * depuis son système (`prefers-reduced-motion`). Les effets pilotés en
 * JavaScript (apparition au défilement, compteurs) s'en abstiennent
 * alors : la règle CSS d'app/globals.css ne neutralise que les
 * animations et transitions CSS. À n'appeler que côté navigateur. */
export function animationsCoupees(): boolean {
  if (document.documentElement.dataset.animations === "off") return true;
  try {
    const choix = localStorage.getItem("studyera-animations");
    if (choix) return choix === "off";
  } catch {
    // localStorage indisponible (navigation privée stricte) : on s'en
    // remet au réglage du système.
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
