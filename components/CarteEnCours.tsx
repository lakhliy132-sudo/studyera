import Link from "next/link";

import { IconeFleche, IconeLivre } from "@/components/icones";
import { libelleChapitre, libelleUniteChapitre } from "@/lib/uniteChapitre";
import type { RepriseLecture } from "@/lib/supabase/tableauDeBord";

interface CarteEnCoursProps {
  reprise: RepriseLecture;
  /** Pourcentage de l'œuvre déjà lu (chapitresLus/totalChapitres),
   * `null` si l'œuvre n'a pas encore de chapitre importé. */
  pourcentage: number | null;
}

/**
 * Carte compacte "En cours" de l'accueil (élève connecté) — reprend
 * une maquette fournie par l'utilisateur ("j ai ajouté une photo dans
 * le fichier fais la comme ca dans l acuueil"). Version courte de
 * CarteReprise.tsx (tableau de bord) : une icône plutôt qu'une
 * miniature-photo par œuvre (aucune couverture réelle en base à
 * afficher, pas de photo inventée par œuvre).
 */
export default function CarteEnCours({ reprise, pourcentage }: CarteEnCoursProps) {
  const unite = libelleUniteChapitre(reprise.oeuvreSlug);
  const libelleChap = libelleChapitre(
    { numero: reprise.chapitreNumero, titre_fr: reprise.chapitreTitreFr },
    unite,
  );

  return (
    <div className="flex flex-col gap-4 rounded-[24px] border border-border bg-surface p-5 shadow-sm sm:flex-row sm:items-center sm:p-6">
      <span className="flex size-16 shrink-0 items-center justify-center rounded-[16px] bg-primary-tint text-primary">
        <IconeLivre className="size-7" />
      </span>

      <div className="min-w-0 flex-1">
        <span className="mb-1 inline-block rounded-full bg-primary-tint px-2.5 py-0.5 text-[11px] font-semibold text-primary">
          {reprise.estRecommandation ? "À découvrir" : "En cours"}
        </span>
        <p className="truncate font-serif text-lg font-bold text-ink">{reprise.oeuvreTitreFr}</p>
        <p className="truncate text-sm text-muted-foreground">
          {unite.numeroDejaDansTitre ? reprise.chapitreTitreFr : libelleChap}
          {pourcentage !== null && ` · ${pourcentage}% terminé`}
        </p>
        {pourcentage !== null && (
          <div className="mt-2 h-1.5 max-w-xs overflow-hidden rounded-full bg-surface-muted">
            <div className="h-full rounded-full bg-primary" style={{ width: `${pourcentage}%` }} />
          </div>
        )}
      </div>

      <Link
        href={reprise.url}
        className="flex shrink-0 items-center gap-2 rounded-[10px] bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_2px_10px_rgba(29,78,216,0.22)] transition-all hover:-translate-y-px hover:bg-ink"
      >
        {reprise.estRecommandation ? "Commencer" : "Continuer"}
        <IconeFleche className="size-4" />
      </Link>
    </div>
  );
}
