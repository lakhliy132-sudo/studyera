import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { recupererCoursParSlug } from "@/lib/supabase/contenu";

/**
 * Page publique : /production-ecrite
 *
 * Destination du lien "Production écrite" de la nav — demandé
 * explicitement par l'utilisateur ("ajoute partie s appelle
 * production écrite"). Premier contenu réel : la méthodologie de la
 * rédaction (plan simple, plan dialectique, plan analytique —
 * précisé explicitement par l'utilisateur), choisie comme point de
 * départ parmi plusieurs options proposées ("Sujets de rédaction",
 * "Grille d'auto-évaluation"...) — celles-ci pourront s'ajouter
 * plus tard, sous forme d'autres entrées `cours` de même catégorie.
 *
 * Contenu stocké en base (table `cours`, catégorie
 * "production-ecrite", même mécanisme que "L'énonciation" sur
 * /langue/enonciation) plutôt qu'en dur ici : cohérent avec le reste
 * du site, où le contenu éditorial passe par le pipeline Excel →
 * Supabase plutôt que d'être codé dans la page. Rendu via
 * `react-markdown` (pas de MDX/JSX exécuté : évite d'exécuter du code
 * arbitraire venu des données), stylé via le prop `components` plutôt
 * qu'un plugin Typography — même choix que /langue/[slug].
 *
 * ⚠️ Contenu entièrement rédigé par Claude (méthodologie générale de
 * la rédaction argumentative, pas propre à une œuvre précise) — à
 * faire relire par un enseignant avant usage en classe.
 */
export default async function PageProductionEcrite() {
  const cours = await recupererCoursParSlug("methodologie-redaction");

  if (!cours || !cours.contenu_mdx) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-xl font-semibold text-foreground">Production écrite</h1>
        <p className="max-w-md text-muted-foreground">
          Sujets et méthode pour réussir tes rédactions. Bientôt disponible.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10">
      <p className="mb-1.5 inline-flex items-center rounded-full bg-primary-tint px-3.5 py-1.5 text-sm font-medium text-primary">
        Production écrite
      </p>
      <h1 className="mb-8 font-serif text-3xl font-bold text-ink">{cours.titre}</h1>

      <div className="flex flex-col gap-4">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <h2 className="mt-8 mb-3 font-serif text-xl font-bold text-ink first:mt-0">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-5 mb-2 font-serif text-lg font-semibold text-primary">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="font-lecture text-[17px] leading-relaxed text-foreground">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc space-y-1.5 pl-6 font-lecture text-[17px] leading-relaxed text-foreground">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal space-y-1.5 pl-6 font-lecture text-[17px] leading-relaxed text-foreground">
                {children}
              </ol>
            ),
            li: ({ children }) => <li>{children}</li>,
            strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
            table: ({ children }) => (
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full border-collapse text-left text-[15px]">{children}</table>
              </div>
            ),
            thead: ({ children }) => <thead className="bg-surface-muted">{children}</thead>,
            th: ({ children }) => (
              <th className="border-b border-border px-4 py-2.5 font-semibold text-ink">{children}</th>
            ),
            td: ({ children }) => (
              <td className="border-b border-border px-4 py-2.5 text-foreground [&:not(:first-child)]:text-muted-foreground">
                {children}
              </td>
            ),
          }}
        >
          {cours.contenu_mdx}
        </ReactMarkdown>
      </div>
    </main>
  );
}
