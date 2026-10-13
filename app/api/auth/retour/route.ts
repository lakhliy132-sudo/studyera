import { NextResponse } from "next/server";

import { creerClientServeur } from "@/lib/supabase/server";

/**
 * Route de rappel (callback) OAuth : GET /api/auth/retour
 *
 * Une fois l'utilisateur authentifié auprès de Google, Supabase le
 * redirige ici avec un paramètre `code` dans l'URL. Cette route échange
 * ce code contre une session Supabase (des cookies sont posés), puis
 * redirige vers /tableau-de-bord (ou vers `suite`, voir plus bas). Sert
 * aussi au lien de confirmation de l'inscription par e-mail et au lien
 * « mot de passe oublié ».
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
  // Page où aller après l'échange : le lien « mot de passe oublié »
  // passe `?suite=/connexion/nouveau-mot-de-passe`. Seul un chemin du
  // site est accepté (commence par « / » mais pas par « // »), pour
  // qu'un lien forgé ne puisse pas renvoyer vers un autre site.
  const suiteDemandee = searchParams.get("suite");
  const suite = suiteDemandee && /^\/(?!\/)/.test(suiteDemandee) ? suiteDemandee : "/tableau-de-bord";

  if (code) {
    const supabase = await creerClientServeur();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // /tableau-de-bord : le middleware y renvoie vers /acces un compte
      // pas encore activé (accès payant, lib/acces.ts).
      return NextResponse.redirect(`${origin}${suite}`);
    }
  }

  // Code manquant ou invalide : on renvoie vers la page de connexion.
  return NextResponse.redirect(`${origin}/connexion`);
}
