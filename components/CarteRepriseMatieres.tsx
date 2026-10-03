import Link from "next/link";

import { IconeLivre } from "@/components/icones";
import type { RepriseLecture } from "@/lib/supabase/tableauDeBord";

interface CarteRepriseMatieresProps {
  reprise: RepriseLecture;
  chapitresLus: number;
  totalChapitres: number;
}

/**
 * Bandeau « Reprendre là où tu t'es arrêté » de /matieres, repris de la
 * maquette fournie par l'utilisateur.
 *
 * La maquette affiche « 65 % de la leçon », c'est-à-dire l'avancement
 * *à l'intérieur* d'un chapitre. Rien de tel n'est enregistré : la
 * table `progression` ne retient qu'un chapitre lu ou non lu. La barre
 * montre donc l'avancement dans l'œuvre (chapitres lus sur le total),
 * qui est une donnée réelle, et le libellé le dit.
 *
 * `estRecommandation` distingue une vraie reprise d'une suggestion de
 * premier chapitre pour un élève qui n'a encore rien lu — le titre du
 * bandeau change en conséquence, pour ne pas prétendre qu'il reprend
 * quelque chose qu'il n'a jamais commencé.
 */
export default function CarteRepriseMatieres({
  reprise,
  chapitresLus,
  totalChapitres,
}: CarteRepriseMatieresProps) {
  const pourcentage =
    totalChapitres > 0 ? Math.round((100 * chapitresLus) / totalChapitres) : 0;

  return (
    <section className="flex flex-col gap-4 rounded-[18px] border border-border bg-surface p-4 shadow-sm sm:flex-row sm:items-center sm:gap-5 sm:p-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-[13px] bg-primary-tint text-primary">
        <IconeLivre className="size-5" />
      </span>

      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <p className="text-xs font-semibold text-muted-foreground">
          {reprise.estRecommandation
            ? "Commence par là · Français"
            : "Reprendre là où tu t'es arrêté · Français"}
        </p>
        <p className="truncate font-serif text-base font-bold text-ink">
          Chapitre {reprise.chapitreNumero} : {reprise.chapitreTitreFr}
        </p>
        <div className="flex items-center gap-3">
          <div
            className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-surface-muted"
            role="progressbar"
            aria-valuenow={pourcentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Avancement dans ${reprise.oeuvreTitreFr}`}
          >
            <div
              style={{ width: `${pourcentage}%` }}
              className="h-full rounded-full bg-primary"
            />
          </div>
          <span className="shrink-0 text-xs text-muted-foreground">
            {chapitresLus}/{totalChapitres} chapitres de {reprise.oeuvreTitreFr}
          </span>
        </div>
      </div>

      <Link
        href={reprise.url}
        className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        {reprise.estRecommandation ? "Commencer" : "Continuer la lecture"}
      </Link>
    </section>
  );
}
