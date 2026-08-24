import { NextResponse } from "next/server";

import { creerClientServeur } from "@/lib/supabase/server";

/**
 * Route de rappel (callback) OAuth : GET /api/auth/retour
 *
 * Une fois l'utilisateur authentifié auprès de Google, Supabase le
 * redirige ici avec un paramètre `code` dans l'URL. Cette route échange
 * ce code contre une session Supabase (des cookies sont posés), puis
 * redirige vers /tableau-de-bord.
 *
 * Cette URL doit être déclarée dans Supabase :
 * Authentication > URL Configuration > Redirect URLs
 *   http://localhost:3000/api/auth/retour
 *
 * (Ce n'est PAS l'URL à mettre dans Google Cloud : Google redirige vers
 * l'URL de callback de Supabase lui-même, pas directement ici.)
 */
export async function GET(requete: Request) {
  const { searchParams, origin } = new URL(requete.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await creerClientServeur();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(`${origin}/tableau-de-bord`);
    }
  }

  // Code manquant ou invalide : on renvoie vers la page de connexion.
  return NextResponse.redirect(`${origin}/connexion`);
}
