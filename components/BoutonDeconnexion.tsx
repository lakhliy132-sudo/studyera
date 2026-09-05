"use client";

import { useRouter } from "next/navigation";

import { creerClientNavigateur } from "@/lib/supabase/client";

/** Bouton de déconnexion affiché dans BarreNavigation pour un
 * utilisateur connecté. Redirige vers l'accueil une fois déconnecté ;
 * `router.refresh()` force le rendu serveur à relire l'état "non
 * connecté" (sinon la nav resterait affichée comme connectée jusqu'au
 * prochain changement de page).
 *
 * Style simple (bordure fine, pas de pleine largeur) restauré en
 * revenant à la navbar horizontale d'origine — demandé explicitement
 * par l'utilisateur ("le cercle avec l'initiale S + bouton Se
 * déconnecter", style Axiom minimaliste), après le passage temporaire
 * par un bouton pleine largeur pensé pour le pied du menu latéral
 * vertical, aujourd'hui retiré.
 */
export default function BoutonDeconnexion() {
  const router = useRouter();

  async function seDeconnecter() {
    const supabase = creerClientNavigateur();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={seDeconnecter}
      className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-muted"
    >
      Se déconnecter
    </button>
  );
}
