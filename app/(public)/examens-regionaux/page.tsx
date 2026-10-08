import Link from "next/link";

import { IconeFleche } from "@/components/icones";
import {
  IllustrationExamen,
  IllustrationGlobe,
  IllustrationLivre,
  IllustrationLivreOuvert,
  IllustrationMosquee,
} from "@/components/IllustrationsMatieres";
import { accentMatiere } from "@/lib/palette-matieres";
import { compterAnnalesParMatiere } from "@/lib/supabase/annales";

const MATIERES_EXAMEN = [
  { slug: "francais", titre: "Français", Illustration: IllustrationLivre },
  { slug: "arabe", titre: "Arabe", Illustration: IllustrationLivreOuvert },
  {
    slug: "histoire-geo",
    titre: "Histoire-Géographie",
    Illustration: IllustrationGlobe,
  },
  {
    slug: "education-islamique",
    titre: "Éducation islamique",
    Illustration: IllustrationMosquee,
  },
];

/**
 * /examens-regionaux — les quatre matières de l'examen régional.
 *
 * Demandé par l'utilisateur : « il va être 4 matières, après qu'on
 * clique par exemple au français ça doit être ça » (suivi d'une
 * maquette de la liste des sujets). Chaque case ouvre
 * /examens-regionaux/[matiere].
 *
 * Le nombre de sujets vient de la table `annales` : une matière sans
 * sujet reste une case inerte marquée "Bientôt disponible", plutôt
 * qu'un lien vers une page vide.
 */
export default async function PageExamensRegionaux() {
  const comptes = await compterAnnalesParMatiere();

  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-9 px-6 pt-6 pb-10 sm:px-9 lg:px-16 xl:px-24 2xl:px-40 sm:pt-9 sm:pb-16">
        <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <IllustrationExamen className="size-12" />
          <h1 className="mt-4 font-titre text-3xl leading-tight font-bold text-ink sm:text-4xl">
            Examens <span className="text-primary italic">régionaux</span>
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            Les vrais sujets des années précédentes, avec corrigés et mode
            entraînement chronométré.
          </p>
        </section>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-[18px]">
          {MATIERES_EXAMEN.map((matiere) => {
            const accent = accentMatiere(matiere.slug);
            const nombre = comptes[matiere.slug] ?? 0;

            const interieur = (
              <>
                <span
                  style={{
                    backgroundColor: `color-mix(in srgb, ${accent} 16%, var(--color-surface))`,
                  }}
                  className="flex size-[60px] shrink-0 items-center justify-center rounded-full"
                >
                  <matiere.Illustration className="size-9" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-lg font-bold text-ink">
                    {matiere.titre}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {nombre === 0
                      ? "Bientôt disponible"
                      : `${nombre} sujet${nombre > 1 ? "s" : ""}`}
                  </span>
                </span>
                {nombre > 0 && (
                  <span style={{ color: accent }} className="shrink-0">
                    <IconeFleche className="size-5 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </>
            );

            return (
              <li key={matiere.slug}>
                {nombre === 0 ? (
                  <div className="flex h-full items-center gap-4 rounded-[20px] border border-border bg-surface p-5 shadow-sm">
                    {interieur}
                  </div>
                ) : (
                  <Link
                    href={`/examens-regionaux/${matiere.slug}`}
                    className="group flex h-full items-center gap-4 rounded-[20px] border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
                  >
                    {interieur}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
