import Link from "next/link";

import { IconeInfo } from "@/components/icones";
import type { Annonce } from "@/types/base-de-donnees";

function formaterDate(dateIso: string) {
  return new Date(dateIso).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" });
}

interface BlocAnnoncesProps {
  annonces: Annonce[];
}

/**
 * Bloc "Communication" du tableau de bord — refonte complète demandée
 * explicitement par l'utilisateur ("change moi le tableau de bord
 * completement fais le de ta part"). Reprend les tokens globaux du
 * site plutôt que l'ancien système `--tdb-*` (voir CarteReprise.tsx).
 * Jamais de bloc vide : un message neutre invite à écrire quand il n'y
 * a aucune annonce — comportement conservé de l'ancienne version.
 */
export default function BlocAnnonces({ annonces }: BlocAnnoncesProps) {
  const derniere = annonces[0] ?? null;

  return (
    <section className="flex h-full flex-col justify-between gap-5 rounded-[24px] border border-border bg-surface p-7 shadow-sm sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
          <IconeInfo className="size-5" />
        </span>
        <p className="font-serif text-xl font-bold text-ink">Communication</p>
      </div>

      {derniere ? (
        <div>
          <p className="text-[15px] font-semibold text-ink">{derniere.titre}</p>
          <p className="mt-1 line-clamp-2 max-w-[56ch] text-sm text-muted-foreground">{derniere.contenu}</p>
          <p className="mt-1.5 text-xs text-subtle-foreground">{formaterDate(derniere.created_at)}</p>
        </div>
      ) : (
        <p className="max-w-[56ch] text-sm text-muted-foreground">
          Rien de nouveau. Une question sur un chapitre ou sur ton compte ? Écris-nous.
        </p>
      )}

      <Link href="/messages" className="w-fit text-sm font-semibold text-primary hover:underline">
        Écrire à l&apos;administration →
      </Link>
    </section>
  );
}
