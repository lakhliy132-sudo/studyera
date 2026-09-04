"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LIENS = [
  { href: "/", libelle: "Accueil" },
  { href: "/oeuvres", libelle: "Œuvres" },
  { href: "/redaction/nouvelle", libelle: "Correcteur IA" },
  { href: "/langue", libelle: "Langues" },
  { href: "/production-ecrite", libelle: "Production écrite" },
] as const;

/** Ajouté seulement pour un utilisateur connecté — voir
 * `LiensNavigation` ci-dessous. */
const LIEN_TABLEAU_DE_BORD = { href: "/tableau-de-bord", libelle: "Tableau de bord" } as const;

interface LiensNavigationProps {
  /** `true` pour le tiroir mobile (liens empilés, pleine largeur) plutôt
   * que la nav horizontale desktop. */
  pleineLargeur?: boolean;
  /** Ajoute "Tableau de bord" à la liste quand `true` — demandé
   * explicitement par l'utilisateur, qui ne trouvait pas ce lien
   * suffisamment visible ("il faut que on le trouve tjrs c pas que
   * juste quans on se connecte") : avant, la seule façon d'y accéder
   * était de cliquer sur l'avatar/email en haut à droite, pas assez
   * évident. En première position, avant "Accueil" — demandé
   * explicitement par l'utilisateur ("fait le tableau de bord avant
   * acceuil"), qui l'avait initialement placé juste après. */
  connecte?: boolean;
}

/**
 * Liste des liens de navigation principale, avec surlignage du lien
 * correspondant à la page courante (texte bleu + trait sous le lien,
 * comme dans la maquette de référence — un `<span>` positionné plutôt
 * qu'un pseudo-élément `::after`, non disponible directement en JSX).
 *
 * Composant client : c'est le seul moyen fiable de connaître l'URL
 * courante ici, `BarreNavigation` étant un Server Component partagé
 * par toutes les pages (contrairement à OngletsOeuvre/OngletsChapitre,
 * qui connaissent leur onglet actif via un prop explicite).
 */
export default function LiensNavigation({ pleineLargeur = false, connecte = false }: LiensNavigationProps) {
  const chemin = usePathname();
  const liens = connecte ? [LIEN_TABLEAU_DE_BORD, ...LIENS] : LIENS;

  return (
    <>
      {liens.map((lien) => {
        const actif = lien.href === "/" ? chemin === "/" : chemin.startsWith(lien.href);

        return (
          <Link
            key={lien.href}
            href={lien.href}
            aria-current={actif ? "page" : undefined}
            className={
              (actif
                ? "text-primary font-semibold"
                : "text-foreground hover:text-primary") +
              ` relative px-3.5 py-2.5 text-base whitespace-nowrap ${pleineLargeur ? "block" : ""}`
            }
          >
            {lien.libelle}
            {actif && (
              <span
                aria-hidden="true"
                className="absolute inset-x-3.5 bottom-0.5 h-[2.5px] rounded-full bg-primary"
              />
            )}
          </Link>
        );
      })}
    </>
  );
}
