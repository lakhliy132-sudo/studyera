import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Chemins protégés du groupe `app/(eleve)/` : accessibles à tout
 * utilisateur connecté, quel que soit son rôle.
 *
 * Chemins protégés du groupe `app/(admin)/` : accessibles uniquement aux
 * utilisateurs connectés dont `profils.role = 'admin'`.
 *
 * ATTENTION : les groupes de routes Next.js entre parenthèses, comme
 * `(eleve)` ou `(admin)`, n'apparaissent JAMAIS dans l'URL réelle. Ce
 * middleware ne voit donc que le chemin final (ex. `/administration`),
 * jamais `(admin)`. Il faut donc lister ici, à la main, chaque chemin
 * créé dans ces deux groupes pour qu'il reste protégé.
 */
const CHEMINS_PROTEGES = [
  "/tableau-de-bord",
  "/redaction",
  "/activite",
  "/messages",
  "/progres",
  "/communaute",
  "/parametres",
];
const CHEMINS_ADMIN = ["/administration"];

function cheminCorrespond(chemin: string, liste: string[]) {
  return liste.some(
    (cheminRef) => chemin === cheminRef || chemin.startsWith(`${cheminRef}/`),
  );
}

/**
 * Ce middleware s'exécute avant chaque requête correspondant au
 * `matcher` défini plus bas. Il a trois rôles :
 *
 * 1. Rafraîchir la session Supabase à chaque requête (le jeton d'accès
 *    expire régulièrement ; sans ce rafraîchissement, un utilisateur
 *    actif finirait par être déconnecté).
 * 2. Rediriger vers /connexion toute personne non authentifiée qui
 *    tente d'accéder à un chemin protégé (CHEMINS_PROTEGES ou
 *    CHEMINS_ADMIN).
 * 3. Pour les chemins de CHEMINS_ADMIN, vérifier en plus que
 *    l'utilisateur connecté a bien le rôle 'admin' (table `profils`),
 *    et le rediriger vers /tableau-de-bord sinon.
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

  const { pathname } = requete.nextUrl;
  const cheminEleve = cheminCorrespond(pathname, CHEMINS_PROTEGES);
  const cheminAdmin = cheminCorrespond(pathname, CHEMINS_ADMIN);

  if (!user && (cheminEleve || cheminAdmin)) {
    const urlConnexion = requete.nextUrl.clone();
    urlConnexion.pathname = "/connexion";
    return NextResponse.redirect(urlConnexion);
  }

  if (user && cheminAdmin) {
    // La policy RLS "les utilisateurs voient leur propre profil" permet
    // à l'utilisateur connecté de lire uniquement sa propre ligne : cette
    // requête ne peut donc pas servir à consulter le rôle de quelqu'un
    // d'autre.
    const { data: profil } = await supabase
      .from("profils")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profil?.role !== "admin") {
      const urlTableauDeBord = requete.nextUrl.clone();
      urlTableauDeBord.pathname = "/tableau-de-bord";
      return NextResponse.redirect(urlTableauDeBord);
    }
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
