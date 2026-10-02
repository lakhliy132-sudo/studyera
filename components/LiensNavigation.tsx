"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { PREFIXES_FRANCAIS } from "@/lib/francais";
import { MATIERES } from "@/lib/matieres";

/** "Français" n'a pas de lien de nav à part : c'est une carte de plus
 * sur /matieres (app/(public)/matieres/page.tsx), au même niveau que
 * les autres matières — demandé explicitement par l'utilisateur après
 * un premier essai avec un lien "Français" séparé ("NON FAIS LA DANS
 * LA PARTIE DE MATIERE"). /francais (page hub Œuvres / Langues /
 * Production écrite / Correcteur IA) existe toujours, seulement
 * accessible via cette carte plutôt que par la nav. */
const LIENS = [
  { href: "/", libelle: "Accueil" },
  { href: "/matieres", libelle: "Matières" },
  { href: "/calendrier", libelle: "Calendrier" },
] as const;

/** Ajoutés seulement pour un utilisateur connecté — voir
 * `LiensNavigation` ci-dessous. "Tableau de bord" juste après
 * "Accueil", "Progrès" tout à la fin — ordre demandé explicitement par
 * l'utilisateur ("Ajoute a cote de l acceuil tableau de bord matiere
 * calendrier aussi progres"). "Progrès" n'a pas de sens pour un
 * visiteur non connecté (page protégée, voir middleware.ts), donc
 * absent sinon — même logique que "Tableau de bord". */
const LIEN_TABLEAU_DE_BORD = {
  href: "/tableau-de-bord",
  libelle: "Tableau de bord",
} as const;
const LIEN_COMMUNAUTE = { href: "/communaute", libelle: "Communauté" } as const;
const LIEN_PROGRES = { href: "/progres", libelle: "Progrès" } as const;

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
export default function LiensNavigation({
  pleineLargeur = false,
  connecte = false,
}: LiensNavigationProps) {
  const chemin = usePathname();
  const liens = connecte
    ? [
        LIENS[0],
        LIEN_TABLEAU_DE_BORD,
        ...LIENS.slice(1),
        LIEN_COMMUNAUTE,
        LIEN_PROGRES,
      ]
    : LIENS;

  return (
    <>
      {liens.map((lien) => {
        // "Matières" doit aussi rester en surbrillance sur
        // /education-islamique, /arabe, /histoire-geo... : ces pages
        // vivent hors de /matieres (route générique /[matiere], voir
        // lib/matieres.ts), donc un simple `startsWith("/matieres")`
        // ne suffit pas.
        const surUneMatiere = MATIERES.some(
          (matiere) =>
            chemin === `/${matiere.slug}` ||
            chemin.startsWith(`/${matiere.slug}/`),
        );
        // "Matières" doit aussi rester en surbrillance sur la carte
        // "Français" et ses 4 sections (/francais, /oeuvres, /langue,
        // /production-ecrite, /redaction/nouvelle) : elles vivent hors
        // de /matieres mais y sont accessibles uniquement par cette
        // carte, plus par un lien de nav séparé.
        const surFrancais =
          chemin === "/francais" ||
          chemin.startsWith("/francais/") ||
          PREFIXES_FRANCAIS.some(
            (prefixe) => chemin === prefixe || chemin.startsWith(`${prefixe}/`),
          );
        const actif =
          lien.href === "/"
            ? chemin === "/"
            : lien.href === "/matieres"
              ? chemin.startsWith(lien.href) || surUneMatiere || surFrancais
              : chemin.startsWith(lien.href);

        return (
          <Link
            key={lien.href}
            href={lien.href}
            aria-current={actif ? "page" : undefined}
            className={
              (actif
                ? pleineLargeur
                  ? "bg-primary-tint text-primary font-semibold"
                  : "text-primary font-semibold"
                : "text-muted-foreground hover:text-primary" +
                  (pleineLargeur ? " hover:bg-surface-muted" : "")) +
              ` relative text-[15px] whitespace-nowrap transition-colors ${
                pleineLargeur
                  ? "block rounded-[10px] px-3.5 py-2.5"
                  : "px-3.5 py-2.5"
              }`
            }
          >
            {lien.libelle}
            {actif && !pleineLargeur && (
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 mx-auto block size-1 rounded-full bg-primary"
              />
            )}
          </Link>
        );
      })}
    </>
  );
}
