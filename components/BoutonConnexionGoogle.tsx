"use client";

import { creerClientNavigateur } from "@/lib/supabase/client";

/**
 * Bouton qui déclenche la connexion via Google (OAuth) avec Supabase Auth.
 *
 * Au clic : l'utilisateur est redirigé vers l'écran de consentement
 * Google, puis Google redirige vers Supabase, qui redirige enfin vers
 * /api/auth/retour une fois la session créée.
 */
export default function BoutonConnexionGoogle() {
  async function seConnecterAvecGoogle() {
    const supabase = creerClientNavigateur();

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/api/auth/retour`,
      },
    });
  }

  return (
    <button
      type="button"
      onClick={seConnecterAvecGoogle}
      className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
    >
      Se connecter avec Google
    </button>
  );
}
