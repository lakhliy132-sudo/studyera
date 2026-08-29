import Link from "next/link";

import type { Annonce } from "@/types/base-de-donnees";

function formaterDate(dateIso: string) {
  return new Date(dateIso).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" });
}

interface BlocAnnoncesProps {
  annonces: Annonce[];
}

/**
 * Bloc "Communication" du tableau de bord : la dernière annonce
 * publiée par l'administration, plus un lien vers la messagerie
 * privée — demandé explicitement par l'utilisateur ("je veux ajouter
 * une case de la comminucation... moi ceo of the site talk avec les
 * eleves qui sont dans la plateforme").
 *
 * Même style de carte que les autres blocs du tableau de bord (voir
 * BlocReprendre.tsx) : jamais de bloc vide, un message neutre
 * remplace l'annonce quand il n'y en a aucune.
 */
export default function BlocAnnonces({ annonces }: BlocAnnoncesProps) {
  const derniere = annonces[0] ?? null;

  return (
    <section className="flex flex-col gap-3 rounded-lg border border-border bg-surface-muted p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-muted-foreground">Communication</p>
        <Link href="/messages" className="text-sm font-medium text-primary hover:underline">
          Écrire à l&apos;administration →
        </Link>
      </div>

      {derniere ? (
        <div>
          <p className="text-lg font-semibold text-foreground">{derniere.titre}</p>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{derniere.contenu}</p>
          <p className="mt-2 text-xs text-subtle-foreground">{formaterDate(derniere.created_at)}</p>
        </div>
      ) : (
        <p className="text-muted-foreground">Aucune annonce pour le moment.</p>
      )}
    </section>
  );
}
