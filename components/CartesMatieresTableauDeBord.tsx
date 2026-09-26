import Link from "next/link";

import { IconeFleche } from "@/components/icones";
import { MATIERES } from "@/lib/matieres";

interface CartesMatieresTableauDeBordProps {
  /** Nombre de cours par `cours.categorie`
   * (`compterCoursParCategorie`). Une matière absente du tableau vaut
   * 0 — aucun chiffre n'est supposé. */
  coursParMatiere: Record<string, number>;
}

/** Couleur d'accent de chaque matière : les tokens déjà utilisés
 * partout sur le site (accueil, barres de progression). */
const COULEURS: Record<string, string> = {
  "education-islamique": "var(--color-matiere-islamique)",
  arabe: "var(--color-matiere-arabe)",
  "histoire-geo": "var(--color-matiere-histoire-geo)",
};

/**
 * Bandeau des matières du tableau de bord, ajouté lors de la deuxième
 * passe de la refonte ("change encoreee").
 *
 * Il comble le vrai manque de cette page : jusque-là elle ne parlait
 * que du français (œuvres, chapitres, copies corrigées), alors que
 * l'arabe, l'histoire-géo et l'éducation islamique concentrent
 * désormais l'essentiel du contenu du site. Chaque carte mène
 * directement à la matière.
 *
 * Le nombre de cours vient de la base ; une matière encore vide
 * affiche "Bientôt disponible" au lieu d'un "0 cours" sec.
 */
export default function CartesMatieresTableauDeBord({
  coursParMatiere,
}: CartesMatieresTableauDeBordProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-serif text-xl font-bold text-ink">Mes matières</h2>
        <Link
          href="/matieres"
          className="text-xs font-semibold text-primary hover:underline"
        >
          Voir tout
        </Link>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MATIERES.map((matiere) => {
          const nombre = coursParMatiere[matiere.slug] ?? 0;
          const couleur = COULEURS[matiere.slug] ?? "var(--color-primary)";

          return (
            <li key={matiere.slug}>
              <Link
                href={`/${matiere.slug}`}
                className="group flex h-full items-center gap-4 rounded-[14px] border border-border bg-surface py-4 pr-4 pl-5 shadow-sm transition-colors hover:border-border-strong hover:bg-surface-muted"
                style={{ borderLeft: `3px solid ${couleur}` }}
              >
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-[15px] font-semibold text-ink">
                    {matiere.titreAvantAccent}
                    {matiere.titreAccent}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {nombre === 0
                      ? "Bientôt disponible"
                      : `${nombre} cours disponible${nombre > 1 ? "s" : ""}`}
                  </span>
                </span>
                <IconeFleche className="size-4 shrink-0 text-subtle-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
