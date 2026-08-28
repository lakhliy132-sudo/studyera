/**
 * Page publique : /langue
 *
 * Destination du lien "Langues" de la nav principale (LiensNavigation)
 * — ajouté explicitement par l'utilisateur, à côté d'Accueil/Œuvres/
 * Correcteur IA. Contenu minimal pour l'instant.
 */
export default function PageLangue() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-xl font-semibold text-foreground">Langues</h1>
      <p className="text-muted-foreground">Bientôt disponible.</p>
    </main>
  );
}
