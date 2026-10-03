import { createClient } from "@supabase/supabase-js";

/**
 * Client Supabase à clé `service_role`, qui contourne entièrement RLS.
 *
 * Réservé aux écritures que l'élève ne doit pas pouvoir faire lui-même.
 * La table `copies` est conçue ainsi (voir
 * supabase/migrations/20260826000400_copies.sql) : l'élève peut créer
 * sa copie, mais aucune policy UPDATE ne lui permet d'en toucher la
 * note — sans quoi n'importe qui pourrait s'attribuer un 20/20 en
 * appelant l'API depuis son navigateur. C'est donc le serveur, et lui
 * seul, qui écrit le résultat de la correction.
 *
 * À n'importer que depuis du code serveur (actions, routes). La clé
 * n'est pas préfixée `NEXT_PUBLIC_`, elle n'est donc jamais envoyée au
 * navigateur ; l'importer dans un composant client ferait échouer la
 * compilation plutôt que de fuiter la clé.
 */
export function creerClientService() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const cle = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !cle) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY sont nécessaires pour écrire une correction.",
    );
  }
  return createClient(url, cle, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
