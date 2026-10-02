"use client";

import { useState } from "react";

import CalendrierMois from "@/components/CalendrierMois";
import EvenementsEleve from "@/components/EvenementsEleve";

interface EspaceCalendrierEleveProps {
  evenements: {
    id: string;
    titre: string;
    date: string;
    categorie: string;
    note: string | null;
  }[];
  connecte: boolean;
}

/**
 * Relie la grille du mois et la carte "Mes événements" : cliquer sur
 * un jour ouvre le formulaire avec cette date déjà remplie — choisi
 * par l'utilisateur parmi plusieurs ajouts possibles au calendrier
 * ("cliquer un jour pour ajouter").
 *
 * L'état vit ici plutôt que dans l'un des deux composants : ils sont
 * voisins dans la page, aucun des deux ne peut donc informer l'autre
 * directement. La page reste un Server Component, qui charge les
 * données et les passe ici.
 */
export default function EspaceCalendrierEleve({
  evenements,
  connecte,
}: EspaceCalendrierEleveProps) {
  const [jourChoisi, setJourChoisi] = useState<string | null>(null);

  const pastilles = evenements.map((evenement) => ({
    date: evenement.date,
    couleur: couleurCategorie(evenement.categorie),
    titre: evenement.titre,
  }));

  return (
    <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1.35fr_1fr]">
      <CalendrierMois
        evenements={pastilles}
        jourSelectionne={jourChoisi}
        onJourChoisi={connecte ? setJourChoisi : undefined}
      />
      <EvenementsEleve
        evenements={evenements}
        connecte={connecte}
        dateChoisie={jourChoisi}
      />
    </div>
  );
}

/** Couleurs des catégories — recopiées de lib/supabase/evenements.ts,
 * qui importe `next/headers` et ne peut donc pas être importé ici. */
function couleurCategorie(categorie: string): string {
  if (categorie === "controle") return "var(--color-erreur)";
  if (categorie === "devoir") return "var(--color-matiere-francais)";
  if (categorie === "revision") return "var(--color-matiere-arabe)";
  if (categorie === "rappel") return "var(--color-matiere-histoire-geo)";
  return "var(--color-matiere-islamique)";
}
