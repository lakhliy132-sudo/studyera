import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Crée un client Supabase utilisable côté serveur : Server Components,
 * Route Handlers (app/api/.../route.ts), Server Actions.
 *
 * Contrairement au client navigateur, celui-ci lit et écrit les cookies
 * de la requête HTTP en cours pour connaître et maintenir la session de
 * l'utilisateur connecté. Il doit donc être recréé à chaque requête :
 * ne jamais mettre en cache ou réutiliser une instance entre requêtes.
 */
export async function creerClientServeur() {
  const magasinCookies = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return magasinCookies.getAll();
        },
        setAll(cookiesAPoser) {
          try {
            cookiesAPoser.forEach(({ name, value, options }) =>
              magasinCookies.set(name, value, options),
            );
          } catch {
            // `setAll` a été appelé depuis un Server Component, qui ne
            // peut pas écrire de cookies directement. Sans conséquence
            // ici car le middleware (middleware.ts) se charge déjà de
            // rafraîchir la session à chaque requête.
          }
        },
      },
    },
  );
}
