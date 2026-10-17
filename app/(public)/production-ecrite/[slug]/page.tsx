import Link from "next/link";
import { notFound } from "next/navigation";
import { PageVerrouillee } from "@/components/ContenuVerrouille";
import FicheProductionEcrite from "@/components/FicheProductionEcrite";
import { IconeFleche } from "@/components/icones";
import { leconGratuite, lireAcces } from "@/lib/acces";
import { noterActivite } from "@/lib/supabase/activite";
import { FILIERE_ACTUELLE } from "@/lib/filiere";

import { recupererCoursParSlug } from "@/lib/supabase/contenu";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * /production-ecrite/[slug] — contenu d'une partie de la rubrique
 * Production écrite (voir /production-ecrite pour la liste des
 * cartes). Un seul slug a du contenu pour l'instant :
 * "methodologie-redaction".
 *
 * Contenu stocké en base (table `cours`, catégorie
 * "production-ecrite", même mécanisme que "L'énonciation" sur
 * /langue/enonciation) plutôt qu'en dur ici.
 *
 * Cette page ne fait que l'accès, le suivi et le cadre ; la mise en
 * page "feuille" de la fiche (plans en cases, rédactions modèles
 * encadrées, sommaire) est dans `components/FicheProductionEcrite`.
 */

export default async function PageProductionEcriteDetail({ params }: PageProps) {
  const { slug } = await params;
  const cours = await recupererCoursParSlug(slug);
  if (!cours || cours.categorie !== "production-ecrite" || !cours.contenu_mdx) notFound();

  // Accès payant (lib/acces.ts) : sans accès complet, seule la première
  // fiche de production écrite s'ouvre.
  const acces = await lireAcces();
  if (!acces.complet) {
    const gratuit = await leconGratuite("production-ecrite", cours.filiere ?? FILIERE_ACTUELLE);
    if (gratuit?.slug !== cours.slug) {
      return (
        <PageVerrouillee
          retour={{ href: "/production-ecrite", libelle: "Production écrite" }}
          etat={acces}
          ceci="Cette fiche"
          titre={cours.titre}
          gratuit={gratuit ? { href: `/production-ecrite/${gratuit.slug}`, titre: gratuit.titre } : null}
        />
      );
    }
  }

  // Suivi des élèves : fiche ouverte (seulement quand elle s'affiche).
  await noterActivite({ type: "consultation_lecon", ressourceId: cours.id, ressourceTitre: `Français (production écrite) — ${cours.titre}` });

  return (
    // Même cadre que les leçons des autres matières ([matiere]/[slug]) :
    // pleine largeur avec marges, lien de retour fléché, puis la feuille
    // (voir FicheProductionEcrite).
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-6 px-6 pt-6 pb-10 sm:px-9 sm:pt-9 sm:pb-16 lg:px-16 xl:px-24 2xl:px-40">
        <Link
          href="/production-ecrite"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Retour à la production écrite
        </Link>

        <FicheProductionEcrite slug={cours.slug} titre={cours.titre} contenu={cours.contenu_mdx} />
      </div>
    </main>
  );
}
