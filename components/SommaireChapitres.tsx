import Link from "next/link";

import { IconeCoche, IconeFleche } from "@/components/icones";
import type { Chapitre } from "@/types/base-de-donnees";

interface SommaireChapitresProps {
  slug: string;
  chapitres: Chapitre[];
  chapitresLusIds: Set<string>;
}

/**
 * Liste des chapitres d'une œuvre (contenu de l'onglet Résumé) —
 * reprend la maquette de référence : badge numéroté rond, titre en
 * Playfair Display, flèche à droite, léger effet de levée au survol.
 *
 * Badge : un chapitre lu (session 4) affiche une coche verte à la
 * place du numéro. Pas cliquable en tant que tel : le seul endroit où
 * on marque un chapitre comme lu est sa propre page (BoutonMarquerLu),
 * pour éviter de cocher un chapitre qu'on n'a pas encore ouvert. Pour
 * un visiteur non connecté, `chapitresLusIds` est toujours vide (voir
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
    <ul className="flex flex-col gap-2.5">
      {chapitres.map((chapitre) => {
        const lu = chapitresLusIds.has(chapitre.id);

        return (
          <li key={chapitre.id}>
            <Link
              href={`/oeuvres/${slug}/${chapitre.numero}`}
              className="group flex items-center gap-[18px] rounded-md border border-border bg-surface px-6 py-5 transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-border-strong"
            >
              <span
                aria-hidden="true"
                className={
                  lu
                    ? "flex size-[46px] shrink-0 items-center justify-center rounded-full bg-validation-tint font-bold text-validation"
                    : "flex size-[46px] shrink-0 items-center justify-center rounded-full bg-primary-tint font-bold text-primary"
                }
              >
                {lu ? <IconeCoche className="size-[19px]" /> : String(chapitre.numero).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-serif text-[19px] font-semibold text-ink">
                  {lu && <span className="sr-only">Lu. </span>}
                  Chapitre {chapitre.numero} — {chapitre.titre_fr}
                </span>
                {chapitre.resume_court && (
                  <span className="block truncate text-[14.5px] text-muted-foreground">
                    {chapitre.resume_court}
                  </span>
                )}
              </span>
              <IconeFleche className="size-5 shrink-0 text-border-strong group-hover:text-primary" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
