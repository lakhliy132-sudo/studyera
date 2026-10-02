import Link from "next/link";
import { notFound } from "next/navigation";

import { EnTeteSection, GrilleLecons } from "@/components/GrilleLeconsMatiere";
import { IconeFleche } from "@/components/icones";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import {
  leconsDeSection,
  recupererSectionIslamique,
} from "@/lib/sections-islamique";
import { recupererCoursParCategorie } from "@/lib/supabase/contenu";

interface PagePropsPartieIslamique {
  params: Promise<{ matiere: string; id: string }>;
}

/**
 * /education-islamique/partie/[id] — les leçons d'une des 4 parties du
 * programme, une case par leçon. Demandé explicitement par
 * l'utilisateur ("au debut ne l affiche pas juste apres quon click
 * comme francais") : la page de la matière ne montre que les 4 cases,
 * et c'est ici qu'on voit le détail de celle qu'on a choisie — même
 * principe que /arabe/majzuaa/[numero].
 *
 * Route sous `[matiere]` mais réservée à l'éducation islamique
 * (`notFound()` sinon). Trois segments, donc aucun conflit avec
 * `[matiere]/[slug]` qui n'en a que deux.
 */
export default async function PagePartieIslamique({
  params,
}: PagePropsPartieIslamique) {
  const { matiere: slugMatiere, id } = await params;
  if (slugMatiere !== "education-islamique") notFound();

  const section = recupererSectionIslamique(id);
  if (!section) notFound();

  const lecons = leconsDeSection(
    await recupererCoursParCategorie(slugMatiere, FILIERE_ACTUELLE),
    section,
  );
  if (lecons.length === 0) notFound();

  // Couleur du site, comme le reste de l'interface (voir la page de
  // la matière pour le détail).
  const couleur = "var(--color-primary)";

  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-6 sm:gap-9 px-6 pt-6 pb-10 sm:pt-9 sm:pb-16 sm:px-9">
        <Link
          href={`/${slugMatiere}`}
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Retour éducation islamique
        </Link>

        <div className="flex flex-col gap-2">
          {/* `w-fit` : sans ça, le bloc en `dir="rtl"` occupe toute la
           * largeur et son texte part se coller à droite, loin du titre
           * français juste en dessous. */}
          <p
            dir="rtl"
            className="font-arabe w-fit text-2xl leading-snug font-bold"
            style={{ color: couleur }}
          >
            {section.titreArabe}
          </p>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-ink">
            {section.titre}
          </h1>
          <p className="max-w-xl text-base text-muted-foreground">
            {section.description}
          </p>
        </div>

        <section className="flex flex-col gap-6">
          <EnTeteSection
            icone={<section.Icone className="size-5" />}
            titre="Les leçons"
            nombre={lecons.length}
            couleur={couleur}
          />
          <GrilleLecons
            matiereSlug={slugMatiere}
            lecons={lecons}
            couleur={couleur}
          />
        </section>
      </div>
    </main>
  );
}
