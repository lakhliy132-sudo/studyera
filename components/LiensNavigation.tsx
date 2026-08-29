"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LIENS = [
  { href: "/", libelle: "Accueil" },
  { href: "/oeuvres", libelle: "Œuvres" },
  { href: "/redaction/nouvelle", libelle: "Correcteur IA" },
  { href: "/langue", libelle: "Langues" },
] as const;

interface LiensNavigationProps {
  /** `true` pour le tiroir mobile (liens empilés, pleine largeur) plutôt
   * que la nav horizontale desktop. */
  pleineLargeur?: boolean;
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
export default function LiensNavigation({ pleineLargeur = false }: LiensNavigationProps) {
  const chemin = usePathname();

  return (
    <>
      {LIENS.map((lien) => {
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
              ` relative px-3.5 py-2.5 text-base ${pleineLargeur ? "block" : ""}`
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
