/**
 * Page publique : /a-propos
 *
 * Destination du lien "À propos" de la nav (BarreNavigation, session
 * design). Contenu minimal pour l'instant.
 */
export default function PageAPropos() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-xl font-semibold text-foreground">À propos</h1>
      <p className="text-muted-foreground">Bientôt disponible.</p>
    </main>
  );
}
