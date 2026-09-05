import type { ReactElement } from "react";

import { IconeCoche, IconeLivre, IconeLivreOuvert, IconePlume } from "@/components/icones";

export interface SectionFrancais {
  href: string;
  titreAvantAccent: string;
  titreAccent: string;
  description: string;
  Icone: (props: { className?: string }) => ReactElement;
}

/**
 * Les 4 sections françaises, regroupées sous /francais — demandé
 * explicitement par l'utilisateur ("fais aussi barre de francais et
 * liste maintenant la barre de oeuvres langue production ecrite
 * correcteur IA sur la barre du francais") : ces 4 liens, jusque-là au
 * premier niveau de la nav (voir git history de
 * components/LiensNavigation.tsx), sont retirés de la barre
 * horizontale et déplacés dans une page hub /francais, sur le même
 * principe que /matieres pour les autres matières.
 *
 * Exporte aussi `PREFIXES_FRANCAIS` : chemins d'URL utilisés par
 * `LiensNavigation` pour garder le lien "Français" en surbrillance
 * quand on est sur une de ces sections (et pas seulement sur
 * /francais lui-même).
 */
export const SECTIONS_FRANCAIS: SectionFrancais[] = [
  {
    href: "/oeuvres",
    titreAvantAccent: "",
    titreAccent: "Œuvres",
    description: "Résumés, personnages, lexique et sujets pour les œuvres au programme.",
    Icone: IconeLivre,
  },
  {
    href: "/langue",
    titreAvantAccent: "Cours de ",
    titreAccent: "langue",
    description: "Les notions de langue française essentielles pour l'examen.",
    Icone: IconeLivreOuvert,
  },
  {
    href: "/production-ecrite",
    titreAvantAccent: "Production ",
    titreAccent: "écrite",
    description: "Méthode, sujets et outils pour réussir tes rédactions.",
    Icone: IconePlume,
  },
  {
    href: "/redaction/nouvelle",
    titreAvantAccent: "Correcteur ",
    titreAccent: "IA",
    description: "Fais corriger et noter ta rédaction automatiquement.",
    Icone: IconeCoche,
  },
];

export const PREFIXES_FRANCAIS = ["/oeuvres", "/langue", "/production-ecrite", "/redaction"];
