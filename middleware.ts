import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Chemins protégés : ceux du groupe de routes `app/(eleve)/`.
 *
 * ATTENTION : les groupes de routes Next.js entre parenthèses, comme
 * `(eleve)` ou `(admin)`, n'apparaissent JAMAIS dans l'URL réelle. Ce
 * middleware ne voit donc que le chemin final (ex. `/tableau-de-bord`),
 * jamais `(eleve)`. Il faut donc lister ici, à la main, chaque chemin
 * créé dans `app/(eleve)/` pour qu'il reste protégé.
 */
const CHEMINS_PROTEGES = ["/tableau-de-bord"];

function estCheminProtege(chemin: string) {
  return CHEMINS_PROTEGES.some(
    (cheminProtege) =>
      chemin === cheminProtege || chemin.startsWith(`${cheminProtege}/`),
  );
}

/**
 * Ce middleware s'exécute avant chaque requête correspondant au
 * `matcher` défini plus bas. Il a deux rôles :
 *
 * 1. Rafraîchir la session Supabase à chaque requête (le jeton d'accès
 *    expire régulièrement ; sans ce rafraîchissement, un utilisateur
 *    actif finirait par être déconnecté).
 * 2. Rediriger vers /connexion toute personne non authentifiée qui
 *    tente d'accéder à un chemin protégé (voir CHEMINS_PROTEGES).
 */
export async function middleware(requete: NextRequest) {
  let reponse = NextResponse.next({ request: requete });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return requete.cookies.getAll();
        },
        setAll(cookiesAPoser) {
          cookiesAPoser.forEach(({ name, value }) =>
            requete.cookies.set(name, value),
          );
          reponse = NextResponse.next({ request: requete });
          cookiesAPoser.forEach(({ name, value, options }) =>
            reponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // IMPORTANT (recommandation Supabase) : ne rien insérer entre
  // createServerClient() et getUser(). getUser() revalide le jeton
  // auprès du serveur Supabase à chaque appel ; c'est ce qui permet de
  // faire confiance à la valeur retournée dans un middleware.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && estCheminProtege(requete.nextUrl.pathname)) {
    const urlConnexion = requete.nextUrl.clone();
    urlConnexion.pathname = "/connexion";
    return NextResponse.redirect(urlConnexion);
  }

  return reponse;
}

export const config = {
  matcher: [
    /*
     * Le middleware s'applique à toutes les routes sauf :
     * - les fichiers statiques internes à Next.js (_next/static, _next/image)
     * - le favicon
     * - les fichiers d'images courants
     * (Inutile de rafraîchir la session pour ces requêtes-là.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
