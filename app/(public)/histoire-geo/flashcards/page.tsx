import Link from "next/link";

import FlashcardsHistoireGeo from "@/components/FlashcardsHistoireGeo";
import { IconeCartes, IconeFleche } from "@/components/icones";
import SelecteurLeconFlashcards from "@/components/SelecteurLeconFlashcards";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { extraireFlashcards } from "@/lib/flashcards";
import { recupererCoursParCategorie } from "@/lib/supabase/contenu";

interface PagePropsFlashcards {
  searchParams: Promise<{ cours?: string }>;
}

/**
 * /histoire-geo/flashcards — fiches de révision (question/réponse)
 * demandées explicitement par l'utilisateur ("fais moi une case qui
 * s appelle flash cards"). Route statique, priment sur la route
 * générique /[matiere]/[slug] pour ce chemin précis (Next.js résout
 * les segments statiques avant les segments dynamiques du même
 * niveau) : /histoire-geo/flashcards n'entre donc jamais en conflit
 * avec un futur cours dont le slug serait "flashcards".
 *
 * Contenu réel extrait des 16 cours (voir lib/flashcards.ts), rien
 * d'inventé : chaque fiche vient d'un motif `**Terme**: description`
 * déjà présent dans `contenu_mdx`.
 *
 * `?cours=<slug>` limite les fiches à une seule leçon — demandé
 * explicitement par l'utilisateur ("je veux que chaque cours a ces
 * flashcardes"). Posé par `SelecteurLeconFlashcards` (un premier essai
 * posait ce choix comme une case sur chaque page de cours, revenu en
 * arrière sur demande explicite : "non dans la partie de flash
 * cards"). Paramètre d'URL plutôt qu'une route dédiée par leçon
 * (`/histoire-geo/flashcards/[slug]`) : même visionneuse, mêmes
 * boutons "Mélanger"/navigation, seul l'ensemble de départ change.
 *
 * Sélecteur de leçon à côté de la carte (deux colonnes), pas empilé
 * au-dessus — corrige un malentendu ("je veux les noms de cours et
 * les questions du flashcards sur la meme ligne" / "NOOOO LA LISTE DE
 * COURS") : l'utilisateur voulait la liste des leçons sur la même
 * ligne/rangée que la carte, pas au-dessus. Même mise en page à deux
 * colonnes que app/(public)/[matiere]/[slug]/page.tsx (cours +
 * sommaire).
 */
export default async function PageFlashcardsHistoireGeo({ searchParams }: PagePropsFlashcards) {
  const { cours: sluFiltre } = await searchParams;
  const lecons = await recupererCoursParCategorie("histoire-geo", FILIERE_ACTUELLE);
  const leconsHistoire = lecons.filter((c) => c.slug.startsWith("histoire-"));
  const leconsGeographie = lecons.filter((c) => c.slug.startsWith("geographie-"));

  const leconFiltree = sluFiltre ? lecons.find((l) => l.slug === sluFiltre) : undefined;
  const toutesLesFiches = lecons.flatMap((lecon) => extraireFlashcards(lecon.contenu_mdx, lecon.titre, lecon.slug));
  const cartes = leconFiltree ? toutesLesFiches.filter((c) => c.leconSlug === leconFiltree.slug) : toutesLesFiches;

  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-6 px-6 pt-9 pb-16 sm:px-9">
        <div className="flex w-full flex-col gap-2">
          <Link
            href="/histoire-geo"
            className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <IconeFleche className="size-4 rotate-180" />
            Retour histoire-géographie
          </Link>
          <h1 className="flex items-center gap-3 font-serif text-[32px] leading-tight font-bold tracking-tight text-ink">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-[13px] bg-primary-tint text-primary">
              <IconeCartes className="size-5" />
            </span>
            Flash<span className="text-primary italic">cards</span>
          </h1>
          <p className="text-muted-foreground">
            {leconFiltree ? (
              <>
                {cartes.length} fiches de la leçon <strong className="font-semibold text-ink">{leconFiltree.titre}</strong>.
              </>
            ) : (
              `${toutesLesFiches.length} fiches tirées des cours d'histoire et de géographie.`
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_300px]">
          <div className="flex w-full flex-col items-center">
            {cartes.length === 0 ? (
              <p className="w-full max-w-xl rounded-md border border-dashed border-border-strong bg-background p-12 text-center text-muted-foreground">
                Bientôt disponible.
              </p>
            ) : (
              <FlashcardsHistoireGeo key={sluFiltre ?? "toutes"} cartes={cartes} />
            )}
          </div>

          <SelecteurLeconFlashcards
            leconsHistoire={leconsHistoire}
            leconsGeographie={leconsGeographie}
            sluActif={leconFiltree?.slug}
            totalFiches={toutesLesFiches.length}
          />
        </div>
      </div>
    </main>
  );
}
