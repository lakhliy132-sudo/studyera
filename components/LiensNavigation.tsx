"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LIENS = [
  { href: "/", libelle: "Accueil" },
  { href: "/oeuvres", libelle: "Œuvres" },
  { href: "/langue", libelle: "Langue" },
  { href: "/redaction/nouvelle", libelle: "Rédaction" },
] as const;

interface LiensNavigationProps {
  /** `true` pour le tiroir mobile (liens empilés, pleine largeur) plutôt
   * que la nav horizontale desktop. */
  pleineLargeur?: boolean;
}

/**
 * Liste des liens de navigation principale, avec surlignage du lien
 * correspondant à la page courante (pilule bleu pâle, comme dans la
 * maquette de référence).
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
              actif
                ? `rounded-sm bg-primary-tint px-3.5 py-2 text-[15px] font-medium text-primary ${pleineLargeur ? "block" : ""}`
                : `rounded-sm px-3.5 py-2 text-[15px] font-medium text-muted-foreground hover:bg-background hover:text-ink ${pleineLargeur ? "block" : ""}`
            }
          >
            {lien.libelle}
          </Link>
        );
      })}
    </>
  );
}
