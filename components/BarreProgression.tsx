interface BarreProgressionProps {
  lus: number;
  total: number;
}

/**
 * Barre d'avancement de lecture d'une œuvre, affichée dans la bannière
 * de /oeuvres/[slug]. N'affiche rien si l'œuvre n'a aucun chapitre en
 * base (rien à mesurer) — l'appelant, lui, ne rend ce composant que
 * pour un utilisateur connecté : un visiteur anonyme n'a pas de
 * progression personnelle à montrer.
 */
export default function BarreProgression({ lus, total }: BarreProgressionProps) {
  if (total === 0) return null;

  const pourcentage = Math.round((lus / total) * 100);

  return (
    <div className="max-w-[420px]">
      <div className="mb-1.5 flex items-center justify-between text-[13px] text-muted-foreground">
        <span>Ta progression</span>
        <strong className="font-semibold text-foreground">
          {lus} chapitre{lus > 1 ? "s" : ""} sur {total}
        </strong>
      </div>
      <div
        role="progressbar"
        aria-valuenow={lus}
        aria-valuemin={0}
        aria-valuemax={total}
        className="h-1.5 w-full overflow-hidden rounded-full bg-primary-tint"
      >
        <div className="h-full rounded-full bg-primary transition-[width]" style={{ width: `${pourcentage}%` }} />
      </div>
    </div>
  );
}
