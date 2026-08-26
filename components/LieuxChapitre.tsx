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
    <ul className="flex flex-col gap-2">
      {lieux.map((lieu) => (
        <li key={lieu} className="text-foreground">
          {lieu}
        </li>
      ))}
    </ul>
  );
}
