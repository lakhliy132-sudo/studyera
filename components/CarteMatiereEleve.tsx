import type { ReactElement } from "react";

import Link from "next/link";

export interface MatiereEleve {
  href: string;
  titre: string;
  description: string;
  slug: string;
  Illustration: (props: { className?: string }) => ReactElement;
  /** Nombre de leçons (ou de chapitres pour le français) réellement en
   * base pour cette matière. */
  total: number;
  /** Unité affichée : "leçon" ou "chapitre". */
  unite: string;
  /** Leçons déjà lues, ou `null` si la matière n'a pas encore de suivi
   * de lecture (voir le commentaire du composant). */
  faits: number | null;
  /** Date de la dernière activité de l'élève dans cette matière,
   * `null` s'il n'y en a aucune. */
  derniereActivite: string | null;
}

/** "il y a 3 jours", "hier", "aujourd'hui" — le temps écoulé plutôt
 * qu'une date brute, comme dans la maquette. */
function tempsEcoule(iso: string): string {
  const jours = Math.floor(
    (Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24),
  );
  if (jours <= 0) return "aujourd'hui";
  if (jours === 1) return "hier";
  if (jours < 7) return `il y a ${jours} jours`;
  if (jours < 30) {
    const semaines = Math.floor(jours / 7);
    return `il y a ${semaines} semaine${semaines > 1 ? "s" : ""}`;
  }
  const mois = Math.floor(jours / 30);
  return `il y a ${mois} mois`;
}

/**
 * Carte d'une matière pour un élève connecté, d'après la maquette
 * fournie par l'utilisateur : illustration, titre, description,
 * décompte, barre de progression, date de la dernière visite et bouton
 * "Continuer".
 *
 * Trois écarts assumés par rapport à la maquette, faute de données :
 *
 * - Pas de badge « Coef. 4 » : aucun coefficient d'examen n'est
 *   enregistré, et les inventer tromperait l'élève sur une information
 *   qui compte pour son barème.
 * - Pas de compteurs « exercices » ni « annales » : il n'existe ni
 *   table d'exercices ni table d'annales. Seul le nombre de leçons est
 *   réel, c'est donc le seul affiché.
 * - La progression n'est connue que pour le français (table
 *   `progression`, qui ne suit que les chapitres d'œuvres). Les autres
 *   matières affichent "Pas encore de suivi" plutôt qu'une barre à
 *   zéro, qui laisserait croire que l'élève n'a rien lu.
 */
export default function CarteMatiereEleve({
  matiere,
  accent,
}: {
  matiere: MatiereEleve;
  accent: string;
}) {
  const { faits, total } = matiere;
  const pourcentage =
    faits !== null && total > 0 ? Math.round((100 * faits) / total) : null;
  const commence = faits !== null && faits > 0;

  return (
    <li>
      <div className="flex h-full flex-col gap-4 rounded-[20px] border border-border bg-surface p-5 shadow-sm sm:p-[26px]">
        <div className="flex items-start gap-4">
          <span
            style={{
              backgroundColor: `color-mix(in srgb, ${accent} 14%, var(--color-surface))`,
              color: accent,
            }}
            className="flex size-12 shrink-0 items-center justify-center rounded-[14px]"
          >
            <matiere.Illustration className="size-7" />
          </span>
          <div className="min-w-0">
            <h3 className="font-serif text-lg leading-snug font-bold text-ink">
              {matiere.titre}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {matiere.description}
            </p>
          </div>
        </div>

        <p className="text-2xl font-bold text-ink">
          {matiere.total}{" "}
          <span className="text-sm font-semibold text-muted-foreground">
            {matiere.unite}
            {matiere.total > 1 ? "s" : ""}
          </span>
        </p>

        {pourcentage !== null ? (
          <div className="flex flex-col gap-1.5">
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-surface-muted"
              role="progressbar"
              aria-valuenow={pourcentage}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Progression en ${matiere.titre}`}
            >
              <div
                style={{ width: `${pourcentage}%`, backgroundColor: accent }}
                className="h-full rounded-full"
              />
            </div>
            <span className="text-xs text-muted-foreground">
              {faits} / {total} {matiere.unite}
              {total > 1 ? "s" : ""}
            </span>
          </div>
        ) : (
          <span className="text-xs text-subtle-foreground">
            Pas encore de suivi de lecture pour cette matière.
          </span>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-1">
          <span className="min-w-0 truncate text-xs text-muted-foreground">
            {matiere.derniereActivite
              ? `Dernière fois : ${tempsEcoule(matiere.derniereActivite)}`
              : "Pas encore commencé"}
          </span>
          <Link
            href={matiere.href}
            style={{ backgroundColor: accent }}
            className="shrink-0 rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {commence ? "Continuer" : "Commencer"}
          </Link>
        </div>
      </div>
    </li>
  );
}
