import Image from "next/image";
import Link from "next/link";

import { IconeFleche } from "@/components/icones";
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
 * CarteReprise.tsx (tableau de bord).
 *
 * Miniature photo (plutôt qu'une icône) — demandé explicitement par
 * l'utilisateur ("ajoute les photo dans la case de francais... comme
 * je t ai envoyé sur l image dans le fichier") : réutilise la même
 * photo bureau/livres que le bandeau de bienvenue
 * (public/accueil-bureau.jpg), aucune couverture par œuvre n'existant
 * réellement en base.
 */
export default function CarteEnCours({ reprise, pourcentage }: CarteEnCoursProps) {
  const unite = libelleUniteChapitre(reprise.oeuvreSlug);
  const libelleChap = libelleChapitre(
    { numero: reprise.chapitreNumero, titre_fr: reprise.chapitreTitreFr },
    unite,
  );

  return (
    <div className="flex flex-col gap-4 rounded-[24px] border border-border bg-surface p-5 shadow-sm sm:flex-row sm:items-center sm:p-6">
      <Image
        src="/accueil-bureau.jpg"
        alt=""
        aria-hidden="true"
        width={380}
        height={175}
        className="h-16 w-20 shrink-0 rounded-[16px] object-cover"
      />

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
