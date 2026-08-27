import type { Personnage } from "@/types/base-de-donnees";

interface PersonnagesChapitreProps {
  personnages: Personnage[];
}

/** Liste compacte (nom + rôle) de tous les personnages de l'œuvre —
 * utilisée pour l'aperçu "Personnages" en 1/3 de colonne sous le
 * résumé d'un chapitre (/oeuvres/[slug]/[numero]). Volontairement pas
 * filtrée par chapitre de première apparition : la plupart des
 * personnages apparaissent dès le chapitre 1, un filtre par première
 * apparition laissait cet aperçu vide sur presque tous les autres
 * chapitres. Voir OngletPersonnages pour la vue complète (cartes
 * détaillées), utilisée par l'onglet Personnages dédié de cette même
 * page et par /oeuvres/[slug]. */
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
