import { createBrowserClient } from "@supabase/ssr";

/**
 * Crée un client Supabase utilisable dans le navigateur : composants
 * clients ("use client"), gestionnaires d'événements (ex. le clic sur
 * le bouton de connexion Google).
 *
 * Les variables lues ici sont préfixées par NEXT_PUBLIC_ car ce code
 * s'exécute côté navigateur : leur valeur est donc publique par
 * construction (voir le commentaire dans .env.example).
 *
 * On crée un nouveau client à chaque appel plutôt que d'exporter une
 * instance unique : c'est la façon recommandée par Supabase pour Next.js
 * (App Router avec rendu serveur + navigateur mélangés).
 */
export function creerClientNavigateur() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
