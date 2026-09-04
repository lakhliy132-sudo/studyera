"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IconeBulles, IconeDocument, IconeGraphique, IconeLivre, IconeMaison, IconePlume } from "@/components/icones";

const LIENS = [
  { href: "/", libelle: "Accueil", Icone: IconeMaison },
  { href: "/oeuvres", libelle: "Œuvres", Icone: IconeLivre },
  { href: "/redaction/nouvelle", libelle: "Correcteur IA", Icone: IconeDocument },
  { href: "/langue", libelle: "Langues", Icone: IconeBulles },
  { href: "/production-ecrite", libelle: "Production écrite", Icone: IconePlume },
] as const;

/** Ajouté seulement pour un utilisateur connecté — voir
 * `LiensNavigation` ci-dessous. */
const LIEN_TABLEAU_DE_BORD = { href: "/tableau-de-bord", libelle: "Tableau de bord", Icone: IconeGraphique } as const;

interface LiensNavigationProps {
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
 * correspondant à la page courante. Chaque lien est empilé en pleine
 * largeur avec une icône — seul rendu désormais nécessaire, utilisé à
 * la fois par le menu latéral desktop et le tiroir mobile
 * (`BarreNavigation.tsx`) depuis que la nav est devenue verticale
 * partout (plus de barre horizontale desktop à gérer en plus).
 *
 * Style retravaillé pour plus d'élégance — demandé explicitement par
 * l'utilisateur ("Je veux qu elle soit elegant") une fois le principe
 * et la taille du menu latéral approuvés : icône par lien (au lieu du
 * texte seul) et surbrillance du lien actif en pastille arrondie
 * pleine (fond `primary-tint`, comme un vrai item de menu d'app),
 * plutôt que le simple trait souligné hérité de l'ancienne barre
 * horizontale, qui faisait un peu nu dans une liste verticale.
 *
 * Composant client : c'est le seul moyen fiable de connaître l'URL
 * courante ici, `BarreNavigation` étant un Server Component partagé
 * par toutes les pages (contrairement à OngletsOeuvre/OngletsChapitre,
 * qui connaissent leur onglet actif via un prop explicite).
 */
export default function LiensNavigation({ connecte = false }: LiensNavigationProps) {
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
              "group flex items-center gap-3.5 rounded-[12px] px-4 py-3 text-[15px] whitespace-nowrap transition-colors " +
              (actif
                ? "bg-primary-tint font-semibold text-primary"
                : "font-medium text-foreground hover:bg-surface-muted hover:text-primary")
            }
          >
            <lien.Icone
              className={`size-[19px] shrink-0 ${actif ? "text-primary" : "text-subtle-foreground group-hover:text-primary"}`}
            />
            {lien.libelle}
          </Link>
        );
      })}
    </>
  );
}
