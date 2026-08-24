import { creerClientServeur } from "@/lib/supabase/server";

/**
 * Page protégée : /tableau-de-bord
 *
 * L'accès est garanti par le middleware (middleware.ts), qui redirige
 * vers /connexion toute personne non authentifiée avant même que cette
 * page ne s'exécute. On peut donc supposer ici qu'un utilisateur existe.
 *
 * Contenu strictement minimal pour cette session : l'email de
 * l'utilisateur connecté, rien de plus.
 */
export default async function PageTableauDeBord() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">Tableau de bord</h1>
      <p>Connecté en tant que : {user?.email}</p>
    </main>
  );
}
