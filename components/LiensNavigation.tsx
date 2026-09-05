"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MATIERES } from "@/lib/matieres";

const LIENS = [
  { href: "/", libelle: "Accueil" },
  { href: "/oeuvres", libelle: "Œuvres" },
  { href: "/matieres", libelle: "Matières" },
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
   * évident. Juste après "Accueil" — ordre repris tel quel dans la
   * demande de retour à une navbar horizontale ("Accueil | Tableau de
   * bord | Œuvres..."), après un aller-retour entretemps (le menu
   * latéral vertical l'avait mis en première position). */
  connecte?: boolean;
}

/**
 * Liste des liens de navigation principale, avec surlignage du lien
 * correspondant à la page courante (texte bleu + trait sous le lien).
 * Version restaurée à l'identique de la navbar horizontale d'origine
 * (texte seul, pas d'icône ni de pastille pleine) — demandé
 * explicitement par l'utilisateur en revenant sur le menu latéral
 * vertical ("Je veux modifier la navigation de STUDYERA pour qu'elle
 * ressemble à la barre de navigation du site Axiom... Ne crée pas une
 * sidebar. Je veux UNIQUEMENT une navbar horizontale en haut"), qui
 * citait explicitement ce style de surbrillance ("comme « Accueil »
 * sur mon ancienne version").
 *
 * Composant client : c'est le seul moyen fiable de connaître l'URL
 * courante ici, `BarreNavigation` étant un Server Component partagé
 * par toutes les pages (contrairement à OngletsOeuvre/OngletsChapitre,
 * qui connaissent leur onglet actif via un prop explicite).
 */
export default function LiensNavigation({ pleineLargeur = false, connecte = false }: LiensNavigationProps) {
  const chemin = usePathname();
  const liens = connecte ? [LIENS[0], LIEN_TABLEAU_DE_BORD, ...LIENS.slice(1)] : LIENS;

  return (
    <>
      {liens.map((lien) => {
        // "Matières" doit aussi rester en surbrillance sur
        // /education-islamique, /arabe, /histoire-geo... : ces pages
        // vivent hors de /matieres (route générique /[matiere], voir
        // lib/matieres.ts), donc un simple `startsWith("/matieres")`
        // ne suffit pas.
        const surUneMatiere = MATIERES.some(
          (matiere) => chemin === `/${matiere.slug}` || chemin.startsWith(`/${matiere.slug}/`),
        );
        const actif =
          lien.href === "/"
            ? chemin === "/"
            : lien.href === "/matieres"
              ? chemin.startsWith(lien.href) || surUneMatiere
              : chemin.startsWith(lien.href);

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
