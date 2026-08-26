import Link from "next/link";

import type { Chapitre } from "@/types/base-de-donnees";

interface SommaireChapitresProps {
  slug: string;
  chapitres: Chapitre[];
  chapitresLusIds: Set<string>;
}

/**
 * Liste des chapitres d'une œuvre (contenu de l'onglet Résumé).
 *
 * Badge numéroté rond (style repris de la maquette de référence) : un
 * chapitre lu (session 4) affiche une coche à la place du numéro plutôt
 * qu'une case séparée. Pas cliquable en tant que tel : le seul endroit
 * où on marque un chapitre comme lu est sa propre page (BoutonMarquerLu),
 * pour éviter de cocher un chapitre qu'on n'a pas encore ouvert. Pour un
 * visiteur non connecté, `chapitresLusIds` est toujours vide (voir
 * lib/supabase/progression.ts) : tous les badges affichent donc
 * naturellement leur numéro, sans état spécial à gérer ici.
 */
export default function SommaireChapitres({
  slug,
  chapitres,
  chapitresLusIds,
}: SommaireChapitresProps) {
  if (chapitres.length === 0) {
    return <p className="text-muted-foreground">Bientôt disponible.</p>;
  }

  return (
    <ul className="flex flex-col gap-3">
      {chapitres.map((chapitre) => {
        const lu = chapitresLusIds.has(chapitre.id);

        return (
          <li key={chapitre.id}>
            <Link
              href={`/oeuvres/${slug}/${chapitre.numero}`}
              className="flex items-center gap-4 rounded-lg border border-border bg-surface p-4 hover:shadow-md"
            >
              <span
                aria-hidden="true"
                className={
                  lu
                    ? "flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground"
                    : "flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-tint font-semibold text-primary"
                }
              >
                {lu ? (
                  <svg viewBox="0 0 16 16" className="size-4" fill="none">
                    <path
                      d="M3 8l3 3 7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  String(chapitre.numero).padStart(2, "0")
                )}
              </span>
              <span className="flex flex-1 flex-col gap-0.5">
                <span className="font-medium text-foreground">
                  {lu && <span className="sr-only">Lu. </span>}
                  Chapitre {chapitre.numero} — {chapitre.titre_fr}
                </span>
                {chapitre.resume_court && (
                  <span className="line-clamp-2 text-sm text-muted-foreground">
                    {chapitre.resume_court}
                  </span>
                )}
              </span>
              <span aria-hidden="true" className="shrink-0 text-primary">
                →
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
