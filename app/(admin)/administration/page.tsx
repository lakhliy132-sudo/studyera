import { creerClientServeur } from "@/lib/supabase/server";

/**
 * Page admin minimale : /administration
 *
 * L'accès est garanti par le middleware (middleware.ts), qui vérifie
 * pour ce chemin non seulement l'authentification, mais aussi que
 * `profils.role = 'admin'` pour l'utilisateur connecté. Cette page peut
 * donc supposer que les deux conditions sont déjà réunies.
 *
 * Contenu strictement minimal pour cette session : confirme l'accès et
 * affiche l'email de l'admin connecté, rien de plus.
 */
export default async function PageAdministration() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">Espace administrateur</h1>
      <p>Connecté en tant que : {user?.email}</p>
    </main>
  );
}
