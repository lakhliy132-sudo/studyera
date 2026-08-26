import Link from "next/link";

import type { Chapitre } from "@/types/base-de-donnees";

interface SommaireChapitresProps {
  slug: string;
  chapitres: Chapitre[];
  chapitresLusIds: Set<string>;
}

/**
 * Liste des chapitres d'une œuvre (bloc du bas de l'onglet Résumé).
 *
 * La coche de progression (session 4) reflète `chapitresLusIds` mais
 * n'est pas cliquable ici : le seul endroit où on marque un chapitre
 * comme lu est sa propre page (bouton BoutonMarquerLu), pour éviter de
 * pouvoir cocher un chapitre qu'on n'a pas encore ouvert. Pour un
 * visiteur non connecté, `chapitresLusIds` est toujours vide (voir
 * lib/supabase/progression.ts) : toutes les cases apparaissent donc
 * naturellement décochées, sans état spécial à gérer ici.
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
    <ul className="divide-y divide-border rounded-lg border border-border">
      {chapitres.map((chapitre) => {
        const lu = chapitresLusIds.has(chapitre.id);

        return (
          <li key={chapitre.id}>
            <Link
              href={`/oeuvres/${slug}/${chapitre.numero}`}
              className="flex items-start gap-3 p-4 hover:bg-surface-muted"
            >
              <span
                aria-hidden="true"
                className={
                  lu
                    ? "mt-1 flex size-4 shrink-0 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground"
                    : "mt-1 size-4 shrink-0 rounded-sm border border-border"
                }
              >
                {lu && (
                  <svg viewBox="0 0 16 16" className="size-3" fill="none">
                    <path
                      d="M3 8l3 3 7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span className="w-6 shrink-0 font-medium text-foreground">
                {chapitre.numero}.
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-medium text-foreground">
                  {lu && <span className="sr-only">Lu. </span>}
                  {chapitre.titre_fr}
                </span>
                {chapitre.resume_court && (
                  <span className="line-clamp-2 text-sm text-muted-foreground">
                    {chapitre.resume_court}
                  </span>
                )}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
