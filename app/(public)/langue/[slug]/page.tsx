import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { IconeFleche, IconeLivreOuvert } from "@/components/icones";
import { recupererCoursParSlug } from "@/lib/supabase/contenu";

interface PagePropsCours {
  params: Promise<{ slug: string }>;
}

/**
 * /langue/[slug] — contenu d'une leçon de langue (table `cours`,
 * catégorie "langue"). Créée pour afficher "L'énonciation", ajoutée à
 * la demande explicite de l'utilisateur (contenu fourni par lui-même,
 * collé intégralement puis transformé en Markdown pour `contenu_mdx` —
 * voir data/contenu-plateforme-bac.xlsx, feuille "Cours").
 *
 * `contenu_mdx` est du Markdown simple, rendu avec `react-markdown`
 * (pas de vrai MDX/JSX exécuté dans le contenu — le nom de la colonne
 * vient de la migration d'origine, mais aucun contenu saisi jusqu'ici
 * n'a besoin de composants React embarqués ; react-markdown suffit et
 * évite d'exécuter du code arbitraire venu des données). Pas de plugin
 * Tailwind Typography : chaque élément Markdown est stylé
 * explicitement via `components`, comme le reste du site qui n'utilise
 * jamais de classes "prose" génériques.
 */
export default async function PageCours({ params }: PagePropsCours) {
  const { slug } = await params;
  const cours = await recupererCoursParSlug(slug);
  if (!cours) notFound();

  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 pt-9 pb-16">
        <Link
          href="/langue"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Retour aux cours de langue
        </Link>

        <div className="flex items-center gap-3.5 text-primary">
          <span className="flex size-11 items-center justify-center rounded-[13px] bg-primary-tint">
            <IconeLivreOuvert className="size-5" />
          </span>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-ink">{cours.titre}</h1>
        </div>

        <div className="rounded-lg border border-border bg-surface p-9 shadow-sm">
          <ReactMarkdown
            components={{
              h2: (props) => (
                <h2
                  className="mt-8 mb-3 font-serif text-2xl font-bold text-ink first:mt-0"
                  {...props}
                />
              ),
              h3: (props) => (
                <h3 className="mt-6 mb-2 font-serif text-lg font-bold text-ink" {...props} />
              ),
              p: (props) => (
                <p
                  className="mb-4 font-lecture text-[16px] leading-relaxed text-foreground"
                  {...props}
                />
              ),
              ul: (props) => <ul className="mb-4 flex flex-col gap-2 pl-1" {...props} />,
              li: ({ children }) => (
                <li className="flex items-start gap-2.5 font-lecture text-[15.5px] leading-relaxed text-foreground">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{children}</span>
                </li>
              ),
              strong: (props) => <strong className="font-semibold text-ink" {...props} />,
              blockquote: (props) => (
                <blockquote
                  className="my-5 rounded-r-md border-l-4 border-primary bg-primary-tint px-5 py-4 font-lecture text-[15.5px] text-ink italic"
                  {...props}
                />
              ),
            }}
          >
            {cours.contenu_mdx ?? ""}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
