import type { ReactElement } from "react";

import Link from "next/link";

import { IconeFleche, IconeLivre } from "@/components/icones";
import {
  ENCRE_MATIERE,
  ENCRE_MATIERE_DOUCE,
  PALETTE_MATIERES,
} from "@/lib/palette-matieres";
import {
  IllustrationGlobe,
  IllustrationLivre,
  IllustrationLivreOuvert,
  IllustrationMosquee,
} from "@/components/IllustrationsMatieres";

interface CarteMatierePage {
  href: string;
  /** Début du titre, en gras — la partie en italique suit. */
  titre: string;
  titreItalique?: string;
  description: string;
  /** Couleurs relevées sur la maquette : fond et bordure de la
   * carte, pastille pâle derrière l'icône, et bouton "Découvrir".
   * Valeurs fixes et non des tokens `--color-matiere-*` : la maquette
   * donne un français rose et une histoire-géo jaune, là où le site
   * les traite en bleu et en orange. La carte reste donc claire même
   * en mode sombre — ses textes sont fixés en conséquence. */
  fond: string;
  bordure: string;
  pastille: string;
  bouton: string;
  Illustration: (props: { className?: string }) => ReactElement;
}

/**
 * Les 4 cartes de /matieres, dans l'ordre de la maquette fournie par
 * l'utilisateur ("Fais ca dans partie de matiere") : Français, Arabe,
 * Histoire-Géographie, Éducation islamique.
 *
 * Titres et descriptions repris mot pour mot de cette maquette
 * (l'ancienne page disait par exemple "Cours d'arabe" et "Œuvres au
 * programme, cours de langue..."). Les libellés de `lib/matieres.ts`
 * ne sont pas touchés : ils servent ailleurs, notamment au lien
 * "Retour cours d'arabe" des pages de leçon.
 *
 * Les couleurs sont celles déjà attribuées à chaque matière sur le
 * site (`--color-matiere-*`), pas celles de la maquette : la maquette
 * montre un français rose, mais le français est bleu partout ailleurs
 * (accueil, barres de progression) — le changer ici seulement aurait
 * désaccordé les deux pages.
 */
const CARTES: CarteMatierePage[] = [
  {
    href: "/francais",
    titre: "Français",
    description:
      "Étudie la langue française, la littérature, la production écrite et la correction.",
    ...PALETTE_MATIERES.francais,
    Illustration: IllustrationLivre,
  },
  {
    href: "/arabe",
    titre: "Arabe",
    description:
      "Textes, grammaire et expression pour renforcer tes compétences en langue arabe.",
    ...PALETTE_MATIERES.arabe,
    Illustration: IllustrationLivreOuvert,
  },
  {
    href: "/histoire-geo",
    titre: "Histoire - ",
    titreItalique: "Géographie",
    description:
      "Comprends le passé, explore le monde et analyse les sociétés.",
    ...PALETTE_MATIERES["histoire-geo"],
    Illustration: IllustrationGlobe,
  },
  {
    href: "/education-islamique",
    titre: "Éducation ",
    titreItalique: "islamique",
    description:
      "Cours, notions clés et repères pour l'examen d'éducation islamique.",
    ...PALETTE_MATIERES["education-islamique"],
    Illustration: IllustrationMosquee,
  },
];

/**
 * /matieres — page d'accueil de toutes les matières, y compris le
 * français. Le français avait d'abord sa propre page hub (/francais)
 * et son propre lien de nav, séparé de "Matières" — corrigé à la
 * demande explicite de l'utilisateur ("NON FAIS LA DANS LA PARTIE DE
 * MATIERE") : /francais existe toujours, mais on y accède par une
 * carte ici.
 *
 * Mise en page refaite d'après une maquette fournie par l'utilisateur
 * ("Fais ca dans partie de matiere") : titre centré sous un livre,
 * grille de 2 colonnes de cartes larges, chacune teintée de la
 * couleur de sa matière, avec pastille d'icône ronde et bouton plein
 * "Découvrir". Auparavant : 3 colonnes de cartes carrées, toutes
 * bleues.
 *
 * Les teintes de fond passent par `color-mix` sur le token de la
 * matière plutôt que par des couleurs pastel fixes : en mode sombre,
 * un pastel figé deviendrait illisible.
 */
export default function PageMatieres() {
  return (
    <main className="relative flex flex-col overflow-hidden">
      {/* Fond propre à cette page — repris de la maquette : un blanc
       * très légèrement lavande, avec de grandes taches pastel floues
       * dans les coins. Valeurs fixes plutôt que les tokens du site :
       * les cartes de la page sont elles aussi en couleurs fixes
       * (voir CARTES), un fond qui basculerait en sombre les
       * laisserait flotter sur du noir. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #fbf9ff 45%, #f6f1fd 100%)",
        }}
      >
        <div
          className="absolute -top-28 -left-32 size-[420px] rounded-full opacity-70 blur-3xl"
          style={{ backgroundColor: "#e8defc" }}
        />
        <div
          className="absolute top-24 -right-36 size-[460px] rounded-full opacity-60 blur-3xl"
          style={{ backgroundColor: "#fde4ef" }}
        />
        <div
          className="absolute -bottom-32 left-1/3 size-[420px] rounded-full opacity-50 blur-3xl"
          style={{ backgroundColor: "#fdf3d9" }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 px-6 pt-12 pb-16">
        <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="text-primary">
            <IconeLivre className="size-10" />
          </span>
          <h1
            className="mt-4 font-serif text-[42px] leading-tight font-bold tracking-tight"
            style={{ color: ENCRE_MATIERE }}
          >
            Les{" "}
            <span className="text-primary italic">matières</span>
          </h1>
          <p
            className="mt-3 max-w-xl text-[15px]"
            style={{ color: ENCRE_MATIERE_DOUCE }}
          >
            Explore toutes les matières de ton parcours et progresse à ton
            rythme.
          </p>
          <span
            aria-hidden="true"
            className="mt-5 block h-1 w-20 rounded-full bg-primary"
          />
        </section>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-9">
          {CARTES.map((carte) => (
            <li key={carte.href}>
              <Link
                href={carte.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  backgroundColor: carte.fond,
                  borderColor: carte.bordure,
                }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -bottom-8 size-32 rounded-full opacity-60"
                  style={{ backgroundColor: carte.pastille }}
                />
                <div className="relative flex items-start gap-5">
                  <span className="relative shrink-0">
                    <span
                      className="flex size-[72px] items-center justify-center rounded-full"
                      style={{ backgroundColor: carte.pastille }}
                    >
                      <carte.Illustration className="size-11" />
                    </span>
                    {/* Les trois petits traits d'éclat de la maquette. */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 22"
                      className="absolute -top-1 -right-2 h-6 w-5"
                      style={{ color: carte.bouton }}
                    >
                      <path
                        d="M3 6 8 2M9 11h6M5 17l6-3"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <h2
                      className="font-serif text-[22px] leading-snug font-bold"
                      style={{ color: ENCRE_MATIERE }}
                    >
                      {carte.titre}
                      {carte.titreItalique && (
                        <span className="italic">{carte.titreItalique}</span>
                      )}
                    </h2>
                    <p
                      className="mt-1.5 font-lecture text-[14.5px] leading-relaxed"
                      style={{ color: ENCRE_MATIERE_DOUCE }}
                    >
                      {carte.description}
                    </p>
                  </div>
                </div>

                <span
                  className="relative mt-6 flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
                  style={{ backgroundColor: carte.bouton }}
                >
                  Découvrir
                  <IconeFleche className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
