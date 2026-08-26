interface BarreProgressionProps {
  lus: number;
  total: number;
}

/**
 * Barre d'avancement de lecture d'une œuvre ("3 chapitres sur 12"),
 * affichée en haut de /oeuvres/[slug]. N'affiche rien si l'œuvre n'a
 * aucun chapitre en base (rien à mesurer) — l'appelant, lui, ne rend ce
 * composant que pour un utilisateur connecté : un visiteur anonyme n'a
 * pas de progression personnelle à montrer.
 */
export default function BarreProgression({ lus, total }: BarreProgressionProps) {
  if (total === 0) return null;

  const pourcentage = Math.round((lus / total) * 100);

  return (
    <div className="mt-3 flex flex-col gap-1.5">
      <p className="text-sm text-muted-foreground">
        {lus} chapitre{lus > 1 ? "s" : ""} sur {total}
      </p>
      <div
        role="progressbar"
        aria-valuenow={lus}
        aria-valuemin={0}
        aria-valuemax={total}
        className="h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-surface-muted"
      >
        <div
          className="h-full rounded-full bg-primary transition-[width]"
          style={{ width: `${pourcentage}%` }}
        />
      </div>
    </div>
  );
}
