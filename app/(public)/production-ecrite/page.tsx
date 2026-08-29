/**
 * Page publique : /production-ecrite
 *
 * Destination du nouveau lien "Production écrite" de la nav — demandé
 * explicitement par l'utilisateur ("ajoute partie s appelle
 * production écrite"). Contenu pas encore précisé par l'utilisateur :
 * page d'attente pour l'instant, même format que /ressources (aucun
 * contenu réel inventé faute de brief), avec juste une phrase
 * d'intention en plus pour situer ce que cette partie couvrira
 * (sujets et méthode de rédaction — distinct du Correcteur IA, qui
 * corrige un texte déjà écrit).
 */
export default function PageProductionEcrite() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-xl font-semibold text-foreground">Production écrite</h1>
      <p className="max-w-md text-muted-foreground">
        Sujets et méthode pour réussir tes rédactions. Bientôt disponible.
      </p>
    </main>
  );
}
