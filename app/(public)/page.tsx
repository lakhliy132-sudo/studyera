import Link from "next/link";

/**
 * Page d'accueil : /
 *
 * Minimale pour l'instant : /oeuvres est aujourd'hui la seule section
 * du site avec du vrai contenu, l'accueil ne fait qu'y renvoyer.
 *
 * Fond décoratif "vague" (dégradé bleu clair → lavande pâle → blanc,
 * façon Axiom) déplacé ici depuis app/layout.tsx — demandé
 * explicitement par l'utilisateur ("FAIS LA JUSTE SUR L ACCEUIL") :
 * n'apparaissait que sur cette page dans l'esprit de la demande
 * d'origine ("grand dégradé pastel EN HAUT" d'une page d'accueil),
 * mais s'appliquait en réalité à tout le site puisque posé dans le
 * layout racine, partagé par toutes les pages. Historique complet
 * (itérations de taille/forme) dans ETAT.md.
 *
 * Légère animation de "respiration" (translation + zoom très doux, va-
 * et-vient continu) — demandé explicitement par l'utilisateur ("LA
 * VAGUE FAIS LA IL JOUE") : la vague était jusque-là figée. Amplitude
 * volontairement faible (14px, 1.5% d'échelle) et durée longue (10s)
 * pour rester discrète — cohérent avec l'aspect "premium, moderne et
 * aérien" déjà demandé lors de la création de cette vague, pas une
 * animation qui distrairait du contenu. `<style>` en JSX plutôt que
 * app/globals.css (qui a des changements en cours d'une autre session,
 * voir ETAT.md) : garde ce `@keyframes` propre à cette page.
 */
export default function PageAccueil() {
  return (
    <>
      <style>{`
        @keyframes vague-accueil-respire {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(14px) scale(1.015); }
        }
      `}</style>
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 -z-10 w-full">
        <svg
          viewBox="0 0 1440 620"
          preserveAspectRatio="none"
          className="h-[88vh] w-full"
          style={{ animation: "vague-accueil-respire 10s ease-in-out infinite" }}
        >
          <defs>
            <linearGradient id="dégradé-vague-accueil" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="color-mix(in srgb, var(--color-primary) 14%, white)" />
              <stop offset="55%" stopColor="#e2e1f5" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 H1440 V220 C1300,260 1160,180 980,220 C740,270 560,360 340,340 C180,326 60,290 0,260 Z"
            fill="url(#dégradé-vague-accueil)"
          />
        </svg>
      </div>

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
    </>
  );
}
