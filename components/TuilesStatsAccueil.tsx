import { IconeCalendrier, IconeLivre, IconeReseau } from "@/components/icones";

interface TuilesStatsAccueilProps {
  nombreCours: number;
  nombreMatieres: number;
  joursAvantExamen: number | null;
}

/**
 * Trois chiffres clés sous le bandeau de l'accueil — demandés par
 * l'utilisateur parmi plusieurs propositions ("on ajoute quoi sur l
 * aceuil").
 *
 * Que des données réelles : le nombre de cours vient de la table
 * `cours` (compterCours), les matières de lib/matieres.ts, et les
 * jours de la vraie date de l'examen régional (lib/calendrier.ts).
 * La tuile des jours disparaît si aucune session n'est à venir,
 * comme le compte à rebours de la colonne de droite.
 */
export default function TuilesStatsAccueil({
  nombreCours,
  nombreMatieres,
  joursAvantExamen,
}: TuilesStatsAccueilProps) {
  const tuiles = [
    {
      cle: "cours",
      valeur: nombreCours,
      libelle: `cours disponible${nombreCours > 1 ? "s" : ""}`,
      couleur: "var(--color-matiere-francais)",
      icone: <IconeLivre className="size-[18px]" />,
    },
    {
      cle: "matieres",
      valeur: nombreMatieres,
      libelle: `matière${nombreMatieres > 1 ? "s" : ""}`,
      couleur: "var(--color-matiere-arabe)",
      icone: <IconeReseau className="size-[18px]" />,
    },
    ...(joursAvantExamen === null
      ? []
      : [
          {
            cle: "jours",
            valeur: joursAvantExamen,
            libelle: "jours avant le 1Bac",
            couleur: "var(--color-matiere-histoire-geo)",
            icone: <IconeCalendrier className="size-[18px]" />,
          },
        ]),
  ];

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {tuiles.map((tuile) => (
        <li
          key={tuile.cle}
          className="flex items-center gap-3.5 rounded-[18px] border border-border bg-surface px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: tuile.couleur }}
          >
            {tuile.icone}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-2xl font-bold text-ink">
              {tuile.valeur}
            </span>
            <span className="text-xs text-muted-foreground">
              {tuile.libelle}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
