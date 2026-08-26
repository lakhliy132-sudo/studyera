/**
 * Page publique : /ressources
 *
 * Destination du lien "Ressources" de la nav (BarreNavigation, session
 * design). Contenu minimal pour l'instant — table `cours` déjà en base
 * mais rien encore côté UI pour la présenter ici.
 */
export default function PageRessources() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-xl font-semibold text-foreground">Ressources</h1>
      <p className="text-muted-foreground">Bientôt disponible.</p>
    </main>
  );
}
