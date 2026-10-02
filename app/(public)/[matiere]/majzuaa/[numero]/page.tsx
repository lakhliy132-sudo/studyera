import Link from "next/link";
import { notFound } from "next/navigation";

import { IconeFleche, IconeLivre } from "@/components/icones";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { recupererModuleArabe, prefixeSlugModule } from "@/lib/modules-arabe";
import { recupererCoursParCategorie } from "@/lib/supabase/contenu";

interface PagePropsModuleArabe {
  params: Promise<{ matiere: string; numero: string }>;
}

/**
 * /arabe/majzuaa/[numero] — les leçons d'un module d'arabe, une case
 * par leçon. Demandé explicitement par l'utilisateur ("je veux que les
 * lecons du المجزوءة ne s affiche pas au debut jusqu au je clique sur
 * المجزوءة concerné" puis "quand on clique on voit chaque cours dans
 * une case") : la page /arabe ne montre que les 4 modules, et c'est
 * ici qu'on voit le détail de celui qu'on a choisi.
 *
 * Route sous `[matiere]` mais réservée à l'arabe (`notFound()` sinon) :
 * les modules n'existent que pour cette matière. Trois segments
 * (`/arabe/majzuaa/2`), donc aucun conflit avec `[matiere]/[slug]` qui
 * n'en a que deux.
 */
export default async function PageModuleArabe({
  params,
}: PagePropsModuleArabe) {
  const { matiere: slugMatiere, numero } = await params;
  if (slugMatiere !== "arabe") notFound();

  const majzuaa = recupererModuleArabe(numero);
  if (!majzuaa) notFound();

  const lecons = (
    await recupererCoursParCategorie("arabe", FILIERE_ACTUELLE)
  ).filter((cours) => cours.slug.startsWith(prefixeSlugModule(majzuaa.numero)));
  if (lecons.length === 0) notFound();

  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-6 sm:gap-9 px-6 pt-6 pb-10 sm:pt-9 sm:pb-16 sm:px-9">
        <Link
          href="/arabe"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Retour arabe
        </Link>

        <div className="flex items-center gap-4">
          <span
            style={{ backgroundColor: majzuaa.couleur }}
            className="flex size-[58px] shrink-0 items-center justify-center rounded-full text-2xl font-bold text-white"
          >
            {majzuaa.numero}
          </span>
          <div className="flex flex-col gap-1">
            <h1
              dir="rtl"
              className="font-arabe text-3xl leading-snug font-bold text-ink"
            >
              {majzuaa.titre}
            </h1>
            {majzuaa.sousTitre && (
              <p
                dir="rtl"
                className="font-arabe text-base leading-snug text-muted-foreground"
              >
                {majzuaa.sousTitre}
              </p>
            )}
            <p className="text-sm text-muted-foreground">
              {lecons.length} leçon{lecons.length > 1 ? "s" : ""} disponible
              {lecons.length > 1 ? "s" : ""}.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {lecons.map((cours, index) => (
            <li key={cours.id}>
              <Link
                href={`/arabe/${cours.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-surface shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  aria-hidden="true"
                  style={{ backgroundColor: majzuaa.couleur }}
                  className="h-1.5 w-full"
                />
                <div className="flex flex-1 flex-col p-5 sm:p-[26px]">
                  <span className="flex items-center justify-between gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-primary-tint text-primary">
                      <IconeLivre className="size-5" />
                    </span>
                    <span className="text-xs font-semibold text-subtle-foreground">
                      Leçon {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span
                    dir="rtl"
                    className="font-arabe mt-4 block text-xl leading-snug font-bold text-ink"
                  >
                    {cours.titre}
                  </span>
                  <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
                    Ouvrir la leçon
                    <IconeFleche className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
