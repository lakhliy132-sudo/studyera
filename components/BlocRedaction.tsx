import Link from "next/link";

interface BlocRedactionProps {
  quotaRestant: number;
}

/**
 * Deuxième bloc du tableau de bord ("RÉDACTION") : accès à la
 * correction de copie. Le quota est affiché discrètement (petit texte
 * sous le bouton), pas comme un chiffre séparé — c'est une information
 * de contexte, pas un indicateur de progression comme le bloc suivant.
 *
 * /redaction/nouvelle existe (page minimale, la fonctionnalité de
 * correction elle-même reste à construire) : le lien ne mène donc pas
 * à un 404.
 */
export default function BlocRedaction({ quotaRestant }: BlocRedactionProps) {
  return (
    <section className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-6">
      <p className="text-sm font-medium text-muted-foreground">Rédaction</p>
      <Link
        href="/redaction/nouvelle"
        className="self-start rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-surface-muted"
      >
        Corriger une copie
      </Link>
      <p className="text-xs text-muted-foreground">
        {quotaRestant > 0
          ? `${quotaRestant} correction${quotaRestant > 1 ? "s" : ""} restante${quotaRestant > 1 ? "s" : ""} aujourd'hui`
          : "Quota atteint pour aujourd'hui"}
      </p>
    </section>
  );
}
