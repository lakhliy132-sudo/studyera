interface LieuxChapitreProps {
  lieux: string[];
}

/** Lieux évoqués dans ce chapitre (`chapitres.lieux`, onglet Lieux de
 * /oeuvres/[slug]/[numero]). */
export default function LieuxChapitre({ lieux }: LieuxChapitreProps) {
  if (lieux.length === 0) {
    return <p className="text-muted-foreground">Bientôt disponible.</p>;
  }

  return (
    <ul className="flex flex-col gap-3">
      {lieux.map((lieu) => (
        <li key={lieu} className="flex items-center gap-2 text-foreground">
          <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-primary" />
          {lieu}
        </li>
      ))}
    </ul>
  );
}
