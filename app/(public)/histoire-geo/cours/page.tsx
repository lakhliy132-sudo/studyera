import Link from "next/link";
import { notFound } from "next/navigation";

import { EnTeteSection, GrilleLecons } from "@/components/GrilleLeconsMatiere";
import { IconeFleche, IconeGlobe, IconeHorloge } from "@/components/icones";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { recupererMatiereParSlug } from "@/lib/matieres";
import { recupererCoursParCategorie } from "@/lib/supabase/contenu";

/**
 * /histoire-geo/cours — les 16 leçons (Histoire/Géographie), sorties
 * de /histoire-geo pour en faire une case à part entière, comme
 * /francais (Œuvres, Langue, Production écrite, Correcteur IA sont
 * chacune leur propre page, pas listées sur /francais lui-même) —
 * demandé explicitement par l'utilisateur ("je veux que les cours
 * sois dans une cases et la partie de flash cardes dans une autre
 * come francais"). Route statique, prime sur /[matiere]/[slug] pour
 * ce chemin précis (même raisonnement que /histoire-geo/flashcards).
 */
export default async function PageCoursHistoireGeo() {
  const matiere = recupererMatiereParSlug("histoire-geo");
  if (!matiere) notFound();
  const lecons = await recupererCoursParCategorie("histoire-geo", FILIERE_ACTUELLE);
  const leconsHistoire = lecons.filter((c) => c.slug.startsWith("histoire-"));
  const leconsGeographie = lecons.filter((c) => c.slug.startsWith("geographie-"));

  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-9 px-6 pt-9 pb-16">
        <Link
          href="/histoire-geo"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Retour histoire-géographie
        </Link>

        <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="flex size-8 items-center justify-center rounded-full border border-primary/20 bg-primary-tint text-primary">
              <matiere.Icone className="size-4" />
            </span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <h1 className="mt-5 font-serif text-4xl font-bold tracking-tight text-ink">
            Les <span className="text-primary italic">cours</span>
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">{matiere.description}</p>
        </section>

        {lecons.length === 0 ? (
          <p className="rounded-md border border-dashed border-border-strong bg-background p-12 text-center text-muted-foreground">
            Bientôt disponible.
          </p>
        ) : (
          <div className="flex flex-col gap-12">
            {leconsHistoire.length > 0 && (
              <section className="flex flex-col gap-6">
                <EnTeteSection icone={<IconeHorloge className="size-5" />} titre="Histoire" nombre={leconsHistoire.length} />
                <GrilleLecons matiereSlug={matiere.slug} lecons={leconsHistoire} />
              </section>
            )}
            {leconsGeographie.length > 0 && (
              <section className="flex flex-col gap-6">
                <EnTeteSection icone={<IconeGlobe className="size-5" />} titre="Géographie" nombre={leconsGeographie.length} />
                <GrilleLecons matiereSlug={matiere.slug} lecons={leconsGeographie} numeroDepart={leconsHistoire.length + 1} />
              </section>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
