import type { ReactElement } from "react";

import Link from "next/link";

import ChiffresEnTete from "@/components/ChiffresEnTete";
import EnTeteMatiere from "@/components/EnTeteMatiere";
import { IconeCroissant, IconeFleche, IconeGlobe, IconeLivre, IconeLivreOuvert } from "@/components/icones";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { MODULES_ARABE, prefixeSlugModule } from "@/lib/modules-arabe";
import { leconsDeSection, SECTIONS_ISLAMIQUE } from "@/lib/sections-islamique";
import { recupererCoursParCategorie, recupererOeuvresParFiliere } from "@/lib/supabase/contenu";

/** Fond sombre des pastilles et des boutons : la couleur du site
 * assombrie avec une valeur fixe, pour rester foncée en mode sombre. */
const FONCE = "color-mix(in srgb, var(--color-primary) 55%, #0a1020)";

interface CarteMatierePage {
  href: string;
  titreAvant: string;
  titreAccent: string;
  titreArabe: string;
  description: string;
  Icone: (props: { className?: string }) => ReactElement;
  /** Ce que contient la matière, compté en base ; vide = "Bientôt
   * disponible". */
  contenu: string[];
}

function pluriel(n: number, mot: string) {
  return `${n} ${mot}${n > 1 ? "s" : ""}`;
}

/**
 * /matieres — les quatre matières, y compris le français ("NON FAIS LA
 * DANS LA PARTIE DE MATIERE" : /francais s'ouvre depuis une carte ici).
 *
 * Refaite d'après une maquette de l'utilisateur ("CHANGE MOI CETTE
 * PARTIE AUSSI"), dans la suite des pages de matière : en-tête à gauche
 * avec chiffres à droite, puis 2 × 2 cartes blanches — pastille d'icône
 * foncée, nom arabe en filigrane, titre avec un mot en accent,
 * description, et en pied ce que contient la matière avec "Découvrir".
 *
 * Toutes les cartes suivent la palette, comme sur la maquette : les
 * couleurs propres à chaque matière (bleu, violet, orange, vert) ne
 * restent que sur la grille de l'accueil.
 *
 * Écarts avec la maquette, faute de donnée (CLAUDE.md) :
 * - pas de pastille "Coef. N" ni de "coefficient total" : aucun
 *   coefficient n'est connu en base. Le second chiffre de l'en-tête est
 *   le nombre de leçons, compté ;
 * - les pieds de carte ("3 œuvres, 12 notions", "4 modules"…) sont
 *   comptés sur la table `cours` et les œuvres, pas recopiés.
 */
export default async function PageMatieres() {
  const [oeuvres, langue, production, arabe, histoireGeo, islamique] = await Promise.all([
    recupererOeuvresParFiliere(FILIERE_ACTUELLE),
    recupererCoursParCategorie("langue", FILIERE_ACTUELLE),
    recupererCoursParCategorie("production-ecrite", FILIERE_ACTUELLE),
    recupererCoursParCategorie("arabe", FILIERE_ACTUELLE),
    recupererCoursParCategorie("histoire-geo", FILIERE_ACTUELLE),
    recupererCoursParCategorie("education-islamique", FILIERE_ACTUELLE),
  ]);

  const modulesArabe = MODULES_ARABE.filter((m) => arabe.some((c) => c.slug.startsWith(prefixeSlugModule(m.numero))));
  const sourate = SECTIONS_ISLAMIQUE.find((s) => s.id === "sourate-youssef");
  const avecSourate = sourate && leconsDeSection(islamique, sourate).length > 0;

  const cartes: CarteMatierePage[] = [
    {
      href: "/francais",
      titreAvant: "Le ",
      titreAccent: "français",
      titreArabe: "الفرنسية",
      description: "Étudie la langue française, la littérature, la production écrite et la correction.",
      Icone: IconeLivre,
      contenu: [
        oeuvres.length > 0 ? pluriel(oeuvres.length, "œuvre") : "",
        langue.length > 0 ? pluriel(langue.length, "notion") : "",
      ],
    },
    {
      href: "/arabe",
      titreAvant: "L'",
      titreAccent: "arabe",
      titreArabe: "العربية",
      description: "Textes, grammaire et expression pour renforcer tes compétences en langue arabe.",
      Icone: IconeLivreOuvert,
      contenu: [
        modulesArabe.length > 0 ? pluriel(modulesArabe.length, "module") : "",
        arabe.length > 0 ? pluriel(arabe.length, "leçon") : "",
      ],
    },
    {
      href: "/histoire-geo",
      titreAvant: "Histoire-",
      titreAccent: "Géographie",
      titreArabe: "التاريخ والجغرافيا",
      description: "Comprends le passé, explore le monde et analyse les sociétés.",
      Icone: IconeGlobe,
      contenu: [histoireGeo.length > 0 ? pluriel(histoireGeo.length, "leçon") : ""],
    },
    {
      href: "/education-islamique",
      titreAvant: "Éducation ",
      titreAccent: "islamique",
      titreArabe: "التربية الإسلامية",
      description: "Cours, notions clés et repères pour l'examen d'éducation islamique.",
      Icone: IconeCroissant,
      contenu: [avecSourate ? sourate.titre : "", islamique.length > 0 ? pluriel(islamique.length, "leçon") : ""],
    },
  ];

  const totalLecons = langue.length + production.length + arabe.length + histoireGeo.length + islamique.length;

  return (
    <main className="relative flex flex-col overflow-hidden">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/3 -z-10 size-[520px] rounded-full bg-primary/10 blur-3xl"
      />
      <div className="flex w-full flex-col gap-8 px-6 pt-8 pb-12 sm:gap-10 sm:px-9 lg:px-16 xl:px-24 2xl:px-40 sm:pt-12 sm:pb-16">
        <EnTeteMatiere
          surTitre="1ʳᵉ année bac · Examen régional"
          titreAvant="Les "
          titreAccent="matières"
          description="Explore toutes les matières de ton parcours et progresse à ton rythme."
          aside={
            <ChiffresEnTete
              chiffres={[
                { valeur: cartes.length, libelle: "matières" },
                { valeur: totalLecons, libelle: "leçons en ligne" },
              ]}
            />
          }
        />

        <ul className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
          {cartes.map((carte) => {
            const contenu = carte.contenu.filter(Boolean);
            return (
              <li key={carte.href}>
                <Link
                  href={carte.href}
                  className="group flex h-full flex-col rounded-[28px] border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-9"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="flex size-14 shrink-0 items-center justify-center rounded-[16px] text-white sm:size-16"
                      style={{ background: FONCE }}
                    >
                      <carte.Icone className="size-6 sm:size-7" />
                    </span>
                    <span
                      aria-hidden="true"
                      dir="rtl"
                      lang="ar"
                      className="font-arabe text-[26px] leading-none font-bold text-primary/15 select-none sm:text-[40px]"
                    >
                      {carte.titreArabe}
                    </span>
                  </div>

                  <h2 className="mt-7 font-serif text-[28px] leading-tight font-bold text-ink sm:mt-9 sm:text-[34px]">
                    {carte.titreAvant}
                    <span className="text-primary italic">{carte.titreAccent}</span>
                  </h2>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {carte.description}
                  </p>

                  <div className="mt-auto pt-7 sm:pt-9">
                    <div className="flex items-center justify-between gap-4 border-t border-border pt-5 sm:pt-6">
                      <span className="text-sm text-muted-foreground sm:text-base">
                        {contenu.length > 0 ? contenu.join(" · ") : "Bientôt disponible"}
                      </span>
                      <span className="flex shrink-0 items-center gap-3 font-bold text-ink">
                        Découvrir
                        <span
                          className="flex size-11 items-center justify-center rounded-full text-white transition-transform group-hover:translate-x-1 sm:size-12"
                          style={{ background: FONCE }}
                        >
                          <IconeFleche className="size-5" />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
