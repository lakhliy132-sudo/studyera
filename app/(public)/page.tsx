import Link from "next/link";

/**
 * Page d'accueil : /
 *
 * Minimale pour l'instant : /oeuvres est aujourd'hui la seule section
 * du site avec du vrai contenu, l'accueil ne fait qu'y renvoyer.
 */
export default function PageAccueil() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold text-foreground">
        Réussis ton français, chapitre par chapitre.
      </h1>
      <p className="max-w-xl text-muted-foreground">
        Résumés, personnages, lexique et sujets pour les œuvres au programme —
        et bientôt un correcteur de copie.
      </p>
      <Link
        href="/oeuvres"
        className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
      >
        Découvrir les œuvres →
      </Link>
    </main>
  );
}
