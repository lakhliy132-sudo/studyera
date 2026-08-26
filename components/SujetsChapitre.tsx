import type { Sujet } from "@/types/base-de-donnees";

interface SujetsChapitreProps {
  sujets: Sujet[];
}

/** Sujets d'exercice rattachés à ce chapitre (onglet "Sujets liés" de
 * /oeuvres/[slug]/[numero]). */
export default function SujetsChapitre({ sujets }: SujetsChapitreProps) {
  if (sujets.length === 0) {
    return <p className="text-muted-foreground">Bientôt disponible.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {sujets.map((sujet) => (
        <li key={sujet.id} className="text-foreground">
          {sujet.titre}
        </li>
      ))}
    </ul>
  );
}
