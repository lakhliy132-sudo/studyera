import { notFound } from "next/navigation";

import CarteListeLecons from "@/components/CarteListeLecons";
import EnTeteMatiere from "@/components/EnTeteMatiere";
import { IconeLivre } from "@/components/icones";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { recupererModuleArabe, prefixeSlugModule } from "@/lib/modules-arabe";
import { recupererCoursParCategorie } from "@/lib/supabase/contenu";

/** "المجزوءة الأولى"… comme sur la page de l'arabe. */
const ORDINAUX_ARABES = ["الأولى", "الثانية", "الثالثة", "الرابعة"];

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

  const index = majzuaa.numero - 1;
  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-8 px-6 pt-6 pb-10 sm:gap-10 sm:px-9 lg:px-16 xl:px-24 2xl:px-40 sm:pt-9 sm:pb-16">
        <EnTeteMatiere
          retour={{ href: "/arabe", libelle: "Retour à l'arabe" }}
          surTitre="Cours d'arabe"
          titreAvant="Module "
          titreAccent={String(majzuaa.numero)}
          description={`${lecons.length} leçon${lecons.length > 1 ? "s" : ""}, de « ${lecons[0].titre} » à « ${lecons[lecons.length - 1].titre} ».`}
          filigrane={`المجزوءة ${ORDINAUX_ARABES[index] ?? majzuaa.numero}`}
        />
        <CarteListeLecons
          Icone={IconeLivre}
          titre={`Les leçons du module ${majzuaa.numero}`}
          titreArabe={`المجزوءة ${ORDINAUX_ARABES[index] ?? majzuaa.numero}`}
          lecons={lecons}
          hrefLecon={(cours) => `/arabe/${cours.slug}`}
        />
      </div>
    </main>
  );
}
