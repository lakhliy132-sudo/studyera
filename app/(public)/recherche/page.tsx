import Link from "next/link";

import { IconeFleche, IconeRecherche } from "@/components/icones";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { MATIERES, recupererMatiereParSlug } from "@/lib/matieres";
import { rechercherCours } from "@/lib/supabase/contenu";

interface PagePropsRecherche {
  searchParams: Promise<{ q?: string }>;
}

/** Libellé de la matière d'un cours à partir de sa catégorie. Les
 * catégories qui ne sont pas des matières listées (`langue`,
 * `production-ecrite`...) gardent leur nom tel quel, en lisible. */
function libelleCategorie(categorie: string | null): string {
  const matiere = categorie ? recupererMatiereParSlug(categorie) : undefined;
  if (matiere) return `${matiere.titreAvantAccent}${matiere.titreAccent}`;
  if (categorie === "langue") return "Langue";
  if (categorie === "production-ecrite") return "Production écrite";
  return categorie ?? "Cours";
}

/** Adresse d'un cours selon sa catégorie : les matières génériques
 * vivent sous /[matiere]/[slug], les deux catégories historiques ont
 * leurs propres routes. */
function lienCours(categorie: string | null, slug: string): string {
  return categorie ? `/${categorie}/${slug}` : `/${slug}`;
}

/**
 * /recherche — résultats du champ de recherche de la barre de
 * navigation, rendu fonctionnel à la demande de l'utilisateur : le
 * champ existait déjà dans la maquette mais n'envoyait nulle part.
 *
 * Recherche sur le titre des cours (`rechercherCours`) et sur le nom
 * des matières, rien d'autre : le contenu des leçons n'est pas
 * indexé, et promettre une recherche plein texte qui ne marcherait
 * qu'à moitié serait pire que de l'annoncer clairement.
 */
export default async function PageRecherche({ searchParams }: PagePropsRecherche) {
  const { q } = await searchParams;
  const terme = (q ?? "").trim();
  const cours = terme.length >= 2 ? await rechercherCours(terme, FILIERE_ACTUELLE) : [];
  const matieres =
    terme.length >= 2
      ? MATIERES.filter((m) =>
          `${m.titreAvantAccent}${m.titreAccent}`.toLowerCase().includes(terme.toLowerCase()),
        )
      : [];
  const total = cours.length + matieres.length;

  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-[900px] flex-col gap-7 px-6 pt-6 pb-10 sm:pt-9 sm:pb-16">
        <div className="flex items-center gap-3.5">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-[13px] bg-primary-tint text-primary">
            <IconeRecherche className="size-5" />
          </span>
          <div>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-ink">Recherche</h1>
            <p className="text-sm text-muted-foreground">
              {terme.length < 2
                ? "Tape au moins deux lettres dans la barre de recherche."
                : `${total} résultat${total > 1 ? "s" : ""} pour « ${terme} ».`}
            </p>
          </div>
        </div>

        {matieres.length > 0 && (
          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-lg font-bold text-ink">Matières</h2>
            <ul className="flex flex-wrap gap-2.5">
              {matieres.map((matiere) => (
                <li key={matiere.slug}>
                  <Link
                    href={`/${matiere.slug}`}
                    className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
                  >
                    {matiere.titreAvantAccent}
                    {matiere.titreAccent}
                    <IconeFleche className="size-3.5 text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {cours.length > 0 && (
          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-lg font-bold text-ink">Cours</h2>
            <ul className="flex flex-col gap-2.5">
              {cours.map((lecon) => (
                <li key={lecon.id}>
                  <Link
                    href={lienCours(lecon.categorie, lecon.slug)}
                    className="group flex items-center justify-between gap-4 rounded-[14px] border border-border bg-surface px-5 py-3.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="flex min-w-0 flex-col">
                      <span dir="auto" className="truncate font-semibold text-ink">
                        {lecon.titre}
                      </span>
                      <span className="text-xs text-muted-foreground">{libelleCategorie(lecon.categorie)}</span>
                    </span>
                    <IconeFleche className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {terme.length >= 2 && total === 0 && (
          <p className="rounded-[14px] border border-dashed border-border-strong bg-surface p-5 sm:p-8 text-center text-sm text-muted-foreground">
            Aucun cours ne correspond à « {terme} ». La recherche porte sur le titre des cours et le nom des matières.
          </p>
        )}
      </div>
    </main>
  );
}
