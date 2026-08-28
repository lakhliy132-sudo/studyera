import Link from "next/link";

import { IconeCoche, IconeFleche } from "@/components/icones";
import { libelleUniteChapitre } from "@/lib/uniteChapitre";
import type { Chapitre } from "@/types/base-de-donnees";

interface SommaireChapitresProps {
  slug: string;
  chapitres: Chapitre[];
  chapitresLusIds: Set<string>;
}

/**
 * Grille de chapitres d'une œuvre (contenu de l'onglet "Chapitres") —
 * reprend la maquette de référence : cartes verticales en grille
 * auto-fill (212px minimum), badge numéroté rond en haut, flèche
 * poussée en bas de carte (`mt-auto`), légère levée + ombre au survol.
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
    return <p className="text-center text-muted-foreground">Bientôt disponible.</p>;
  }

  // "Scène N" pour Antigone plutôt que "Chapitre N" — voir lib/uniteChapitre.ts.
  const unite = libelleUniteChapitre(slug);

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(212px,1fr))] gap-4">
      {chapitres.map((chapitre) => {
        const lu = chapitresLusIds.has(chapitre.id);

        return (
          <li key={chapitre.id}>
            <Link
              href={`/oeuvres/${slug}/${chapitre.numero}`}
              className="group flex min-h-[160px] flex-col rounded-md border border-border bg-background p-[22px] transition-[border-color,box-shadow,transform,background-color] hover:-translate-y-[3px] hover:border-border-strong hover:bg-surface hover:shadow-[0_8px_24px_rgba(27,58,143,0.09)]"
            >
              <div className="mb-2 flex items-center gap-[13px]">
                <span
                  aria-hidden="true"
                  className={
                    lu
                      ? "flex size-10 shrink-0 items-center justify-center rounded-full bg-validation-tint font-bold text-validation"
                      : "flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-tint font-bold text-primary"
                  }
                >
                  {lu ? <IconeCoche className="size-[17px]" /> : String(chapitre.numero).padStart(2, "0")}
                </span>
                <p className="font-serif text-lg font-bold text-ink">
                  {lu && <span className="sr-only">Lu. </span>}
                  {unite.numeroDejaDansTitre ? chapitre.titre_fr : `${unite.singulier} ${chapitre.numero}`}
                </p>
              </div>
              {!unite.numeroDejaDansTitre && (
                <p className="text-[15px] leading-tight text-muted-foreground">{chapitre.titre_fr}</p>
              )}
              <div className="mt-auto pt-4">
                <IconeFleche className="size-5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
