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
  "/live",
  "/annonces",
  "/parametres",
  "/acces",
];
/** Chemins élève ouverts à un compte connecté mais pas encore activé
 * (accès payant, lib/acces.ts) : la page qui explique comment activer
 * son accès, et les paramètres du compte. Tous les autres chemins de
 * CHEMINS_PROTEGES renvoient un tel compte vers /acces. */
const CHEMINS_SANS_ACCES = ["/acces", "/parametres"];
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
 *    et le rediriger vers l'accueil sinon.
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
      urlTableauDeBord.pathname = "/";
      return NextResponse.redirect(urlTableauDeBord);
    }
  }

  if (user && cheminEleve && !cheminCorrespond(pathname, CHEMINS_SANS_ACCES)) {
    // Accès payant (lib/acces.ts, même règle) : admin, ou ligne
    // d'acces_eleves qui court encore. Table absente (migration pas
    // encore lancée) : pas de verrou.
    const [{ data: profil }, { data: ligne, error }] = await Promise.all([
      supabase.from("profils").select("role").eq("id", user.id).maybeSingle(),
      supabase.from("acces_eleves").select("fin").eq("user_id", user.id).maybeSingle(),
    ]);
    const tableAbsente = error?.code === "PGRST205" || error?.code === "42P01";
    const aujourdhui = new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Casablanca" }).format(new Date());
    const actif = tableAbsente || profil?.role === "admin" || (ligne?.fin != null && ligne.fin >= aujourdhui);
    if (!actif) {
      const urlAcces = requete.nextUrl.clone();
      urlAcces.pathname = "/acces";
      urlAcces.search = "";
      return NextResponse.redirect(urlAcces);
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
