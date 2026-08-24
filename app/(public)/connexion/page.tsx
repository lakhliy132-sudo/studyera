import BoutonConnexionGoogle from "@/components/BoutonConnexionGoogle";

/**
 * Page de connexion : /connexion
 *
 * Page publique et minimale : un titre et le bouton de connexion Google.
 * C'est vers cette page que le middleware (middleware.ts) redirige tout
 * utilisateur non authentifié qui tente d'accéder à /tableau-de-bord.
 */
export default function PageConnexion() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">Connexion</h1>
      <BoutonConnexionGoogle />
    </main>
  );
}
