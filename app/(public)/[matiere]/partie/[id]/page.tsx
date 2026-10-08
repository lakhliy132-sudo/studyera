import { notFound } from "next/navigation";

import CarteListeLecons from "@/components/CarteListeLecons";
import EnTeteMatiere from "@/components/EnTeteMatiere";
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

  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-8 px-6 pt-6 pb-10 sm:gap-10 sm:px-9 lg:px-16 xl:px-24 2xl:px-40 sm:pt-9 sm:pb-16">
        <EnTeteMatiere
          retour={{ href: `/${slugMatiere}`, libelle: "Retour à l'éducation islamique" }}
          surTitre="Éducation islamique"
          titreAccent={section.titre}
          description={section.description}
          filigrane={section.titreArabe}
        />
        <CarteListeLecons
          Icone={section.Icone}
          titre="Les leçons"
          titreArabe={section.titreArabe}
          lecons={lecons}
          hrefLecon={(cours) => `/${slugMatiere}/${cours.slug}`}
        />
      </div>
    </main>
  );
}
