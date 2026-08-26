import type { Personnage } from "@/types/base-de-donnees";

interface PersonnagesChapitreProps {
  personnages: Personnage[];
}

/** Personnages qui apparaissent pour la première fois dans ce chapitre
 * (onglet Personnages de /oeuvres/[slug]/[numero]). */
export default function PersonnagesChapitre({ personnages }: PersonnagesChapitreProps) {
  if (personnages.length === 0) {
    return <p className="text-muted-foreground">Bientôt disponible.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {personnages.map((personnage) => (
        <li key={personnage.id} className="text-foreground">
          <span className="font-medium">{personnage.nom}</span>
          {personnage.role && <span className="text-muted-foreground"> — {personnage.role}</span>}
        </li>
      ))}
    </ul>
  );
}
