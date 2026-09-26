import type { ReactElement } from "react";

import { IconeCartes, IconeCible, IconeLivre, IconePlume } from "@/components/icones";

interface TuilesTableauDeBordProps {
  chapitresLus: number;
  totalChapitres: number;
  copiesCorrigees: number;
  /** `null` tant qu'aucune copie n'est corrigée — la tuile affiche
   * alors un tiret plutôt qu'un "0/20" qui se lirait comme une note. */
  noteMoyenne: number | null;
}

/**
 * Bandeau de quatre chiffres clés en haut du tableau de bord, ajouté
 * lors de la refonte ("nouveau design complet") : ils étaient
 * auparavant dispersés dans les cartes plus bas, ce qui obligeait à
 * parcourir la page pour savoir où on en est.
 *
 * Que des données réelles (Supabase), y compris les états vides : une
 * progression à 0 % ou une note absente s'affichent telles quelles.
 */
export default function TuilesTableauDeBord({
  chapitresLus,
  totalChapitres,
  copiesCorrigees,
  noteMoyenne,
}: TuilesTableauDeBordProps) {
  const pourcentage = totalChapitres > 0 ? Math.round((chapitresLus / totalChapitres) * 100) : 0;

  const tuiles: { cle: string; valeur: string; libelle: string; couleur: string; icone: ReactElement }[] = [
    {
      cle: "chapitres",
      valeur: `${chapitresLus}`,
      libelle: totalChapitres > 0 ? `chapitres lus sur ${totalChapitres}` : "chapitre lu",
      couleur: "var(--color-matiere-francais)",
      icone: <IconeLivre className="size-[18px]" />,
    },
    {
      cle: "progression",
      valeur: `${pourcentage} %`,
      libelle: "du programme parcouru",
      couleur: "var(--color-matiere-arabe)",
      icone: <IconeCible className="size-[18px]" />,
    },
    {
      cle: "copies",
      valeur: `${copiesCorrigees}`,
      libelle: `copie${copiesCorrigees > 1 ? "s" : ""} corrigée${copiesCorrigees > 1 ? "s" : ""}`,
      couleur: "var(--color-matiere-islamique)",
      icone: <IconePlume className="size-[18px]" />,
    },
    {
      cle: "note",
      valeur: noteMoyenne === null ? "—" : `${noteMoyenne.toFixed(1)}/20`,
      libelle: noteMoyenne === null ? "pas encore de note" : "note moyenne",
      couleur: "var(--color-matiere-histoire-geo)",
      icone: <IconeCartes className="size-[18px]" />,
    },
  ];

  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
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
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="font-serif text-2xl font-bold text-ink">{tuile.valeur}</span>
            <span className="truncate text-xs text-muted-foreground">{tuile.libelle}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
