import Link from "next/link";

import type { Chapitre } from "@/types/base-de-donnees";

interface SommaireChapitresProps {
  slug: string;
  chapitres: Chapitre[];
}

/**
 * Liste des chapitres d'une œuvre (bloc du bas de l'onglet Résumé).
 *
 * Chaque ligne réserve un emplacement pour une coche de progression
 * (case vide, non cochable) : elle sera branchée à la table
 * `progression` (déjà en base depuis la session 2) dans une prochaine
 * session — l'espace est déjà prévu ici pour ne pas avoir à retoucher
 * la mise en page à ce moment-là.
 */
export default function SommaireChapitres({ slug, chapitres }: SommaireChapitresProps) {
  if (chapitres.length === 0) {
    return <p className="text-muted-foreground">Bientôt disponible.</p>;
  }

  return (
    <ul className="divide-y divide-border rounded-lg border border-border">
      {chapitres.map((chapitre) => (
        <li key={chapitre.id}>
          <Link
            href={`/oeuvres/${slug}/${chapitre.numero}`}
            className="flex items-start gap-3 p-4 hover:bg-surface-muted"
          >
            <span
              aria-hidden="true"
              className="mt-1 size-4 shrink-0 rounded-sm border border-border"
            />
            <span className="w-6 shrink-0 font-medium text-foreground">
              {chapitre.numero}.
            </span>
            <span className="flex flex-col gap-1">
              <span className="font-medium text-foreground">{chapitre.titre_fr}</span>
              {chapitre.resume_court && (
                <span className="line-clamp-2 text-sm text-muted-foreground">
                  {chapitre.resume_court}
                </span>
              )}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
