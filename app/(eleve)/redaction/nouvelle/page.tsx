/**
 * Page protégée : /redaction/nouvelle
 *
 * Destination du bouton "Corriger une copie" du tableau de bord
 * (BlocRedaction, session 5). Contenu strictement minimal pour
 * l'instant : la fonctionnalité de correction (dépôt de photo,
 * transcription, notation) reste à construire — voir ETAT.md.
 */
export default function PageNouvelleRedaction() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-xl font-semibold text-foreground">Corriger une copie</h1>
      <p className="text-muted-foreground">Bientôt disponible.</p>
    </main>
  );
}
