import Link from "next/link";
import { notFound } from "next/navigation";

import ContenuMarkdown from "@/components/ContenuMarkdown";
import { IconeFleche } from "@/components/icones";
import { recupererMatiereParSlug } from "@/lib/matieres";
import { recupererCoursParSlug } from "@/lib/supabase/contenu";

interface PagePropsCoursMatiere {
  params: Promise<{ matiere: string; slug: string }>;
}

/**
 * /[matiere]/[slug] — contenu d'un cours d'une nouvelle matière
 * (table `cours`, catégorie = `matiere`). Version simplifiée de
 * /langue/[slug] : un seul contenu (le cours, en Markdown via
 * `ContenuMarkdown`), pas d'onglets Exercices/Quiz — aucun de ces
 * deux types de contenu n'existe encore pour ces matières.
 *
 * Vérifie que `cours.categorie` correspond bien à la matière de l'URL
 * (même garde que /production-ecrite/[slug]) : évite qu'un slug de
 * cours existant dans une autre matière ne s'affiche sous la mauvaise
 * URL.
 */
export default async function PageCoursMatiere({ params }: PagePropsCoursMatiere) {
  const { matiere: slugMatiere, slug } = await params;
  const matiere = recupererMatiereParSlug(slugMatiere);
  if (!matiere) notFound();

  const cours = await recupererCoursParSlug(slug);
  if (!cours || cours.categorie !== matiere.slug) notFound();

  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-6 px-6 pt-9 pb-16 sm:px-9">
        <Link
          href={`/${matiere.slug}`}
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Retour {matiere.titreAvantAccent.toLowerCase()}
          {matiere.titreAccent.toLowerCase()}
        </Link>

        <div className="flex items-center gap-3.5 text-primary">
          <span className="flex size-11 items-center justify-center rounded-[13px] bg-primary-tint">
            <matiere.Icone className="size-5" />
          </span>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-ink">{cours.titre}</h1>
        </div>

        <div className="rounded-lg border border-border bg-surface p-9 shadow-sm">
          <ContenuMarkdown texte={cours.contenu_mdx} />
        </div>
      </div>
    </main>
  );
}
