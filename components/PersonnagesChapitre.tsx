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
    <ul className="flex flex-col gap-3">
      {personnages.map((personnage) => (
        <li key={personnage.id} className="flex flex-col">
          <span className="font-semibold text-foreground">{personnage.nom}</span>
          {personnage.role && (
            <span className="text-sm text-muted-foreground">{personnage.role}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
