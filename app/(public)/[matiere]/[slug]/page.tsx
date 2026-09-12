import type { CSSProperties } from "react";

import Link from "next/link";
import { notFound } from "next/navigation";

import ContenuMarkdown from "@/components/ContenuMarkdown";
import FlashcardsHistoireGeo from "@/components/FlashcardsHistoireGeo";
import { IconeCartes, IconeFleche, IconeGlobe, IconeHorloge } from "@/components/icones";
import SommaireHistoireGeo from "@/components/SommaireHistoireGeo";
import { extraireFlashcards } from "@/lib/flashcards";
import { recupererMatiereParSlug } from "@/lib/matieres";
import { recupererCoursParSlug } from "@/lib/supabase/contenu";

interface PagePropsCoursMatiere {
  params: Promise<{ matiere: string; slug: string }>;
}

/** Titres des sections (`##`) d'un cours, dans l'ordre du document —
 * même source que la numérotation de `ContenuMarkdown` (`styleFeuille`),
 * pour construire le sommaire à côté du cours sans reparser le Markdown
 * dans ContenuMarkdown lui-même (qui ne renvoie rien à son parent). */
function extraireTitresSections(contenuMdx: string | null): string[] {
  if (!contenuMdx) return [];
  return contenuMdx
    .split("\n")
    .filter((ligne) => ligne.startsWith("## "))
    .map((ligne) => ligne.slice(3).trim());
}

/**
 * /[matiere]/[slug] — contenu d'un cours d'une nouvelle matière
 * (table `cours`, catégorie = `matiere`). Version simplifiée de
 * /langue/[slug] : un seul contenu (le cours, en Markdown via
 * `ContenuMarkdown`), pas d'onglets Exercices/Quiz — aucun de ces
 * deux types de contenu n'existe encore pour ces matières.
 *
 * Vérifie que `cours.categorie` correspond bien à la matière de l'URL
 * (même garde que /production-ecrite/[slug]) : évite qu'un slug de
 * cours existant dans une autre matière ne s'affiche sous la mauvaise
 * URL.
 *
 * Habillage "feuille" pour histoire-geo (kicker Histoire/Géographie,
 * titre plus grand, bandeau de couleur + pastille en filigrane, sections
 * numérotées via `ContenuMarkdown styleFeuille`) — demandé explicitement
 * par l'utilisateur ("dans la partie de histoire geo les cours fais les
 * comme dans une feuille chic et stylée"). Les autres matières gardent
 * la présentation simple d'origine, inchangée.
 *
 * Sommaire à côté du cours (histoire-geo uniquement) — demandé
 * explicitement par l'utilisateur ("ajoute a coté sommaire des cours
 * stylée"). Un premier essai listait les 16 leçons de la matière,
 * corrigé sur demande explicite ("non du chaque cours") : le sommaire
 * liste les sections (`##`) du cours affiché, pas les autres leçons —
 * liens d'ancrage vers chaque section (`#section-N`, posé par
 * ContenuMarkdown).
 *
 * Flashcards de la leçon directement en bas de la page (histoire-geo)
 * — demandé explicitement par l'utilisateur ("enleve cette partie de
 * flash cards et ajoute la dans chaque cours") : la page dédiée
 * /histoire-geo/flashcards, avec son sélecteur de leçon, a été
 * supprimée au profit de fiches propres à chaque cours, juste sous
 * son contenu. Fiches extraites du cours affiché (voir
 * lib/flashcards.ts), section masquée si la leçon n'en produit
 * aucune.
 */
export default async function PageCoursMatiere({ params }: PagePropsCoursMatiere) {
  const { matiere: slugMatiere, slug } = await params;
  const matiere = recupererMatiereParSlug(slugMatiere);
  if (!matiere) notFound();

  const cours = await recupererCoursParSlug(slug);
  if (!cours || cours.categorie !== matiere.slug) notFound();

  const estHistoireGeo = matiere.slug === "histoire-geo";
  const estHistoire = cours.slug.startsWith("histoire-");
  const IconeSection = estHistoire ? IconeHorloge : IconeGlobe;
  const titresSections = estHistoireGeo ? extraireTitresSections(cours.contenu_mdx) : [];
  const flashcards = estHistoireGeo ? extraireFlashcards(cours.contenu_mdx, cours.titre, cours.slug) : [];

  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-6 px-6 pt-9 pb-16 sm:px-9">
        <Link
          href={`/${matiere.slug}`}
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Retour {matiere.titreAvantAccent.toLowerCase()}
          {matiere.titreAccent.toLowerCase()}
        </Link>

        {estHistoireGeo ? (
          <>
            <span
              style={{ backgroundColor: "var(--color-matiere-histoire-geo)" }}
              className="flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white"
            >
              <IconeSection className="size-3.5" />
              {estHistoire ? "Histoire" : "Géographie"}
            </span>
            <h1 className="font-serif text-[38px] leading-tight font-bold tracking-tight text-ink">{cours.titre}</h1>

            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_270px]">
              <div className="relative overflow-hidden rounded-[22px] border border-border bg-surface shadow-[0_24px_50px_-20px_rgba(20,30,60,0.25)]">
                <div aria-hidden="true" style={{ backgroundColor: "var(--color-matiere-histoire-geo)" }} className="h-2 w-full" />
                {/* Pastille en filigrane, purement décorative — même
                 * technique que les taches de couleur de l'accueil.
                 * `IconeProps` ne prend pas de `style` : la couleur passe
                 * par un `<span>` englobant (`currentColor` du SVG). */}
                <span
                  aria-hidden="true"
                  style={{ color: "var(--color-matiere-histoire-geo)" } as CSSProperties}
                  className="pointer-events-none absolute -top-6 -right-6 opacity-[0.05]"
                >
                  <IconeSection className="size-40" />
                </span>
                <div className="relative p-9 sm:p-12">
                  <ContenuMarkdown texte={cours.contenu_mdx} styleFeuille couleurAccent="var(--color-matiere-histoire-geo)" />
                </div>
              </div>

              <SommaireHistoireGeo titresSections={titresSections} />
            </div>

            {flashcards.length > 0 && (
              <section className="mt-6 flex flex-col gap-6 rounded-[22px] border border-border bg-surface p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[13px] bg-primary-tint text-primary">
                    <IconeCartes className="size-5" />
                  </span>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-ink">
                      Flash<span className="text-primary italic">cards</span>
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {flashcards.length} fiche{flashcards.length > 1 ? "s" : ""} tirée
                      {flashcards.length > 1 ? "s" : ""} de cette leçon.
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center">
                  <FlashcardsHistoireGeo cartes={flashcards} />
                </div>
              </section>
            )}
          </>
        ) : (
          <>
            <div className="flex items-center gap-3.5 text-primary">
              <span className="flex size-11 items-center justify-center rounded-[13px] bg-primary-tint">
                <matiere.Icone className="size-5" />
              </span>
              <h1 className="font-serif text-3xl font-bold tracking-tight text-ink">{cours.titre}</h1>
            </div>

            {/* Pour l'arabe : texte plus grand ("je veux l ecriture
             * taille soit encore plus dans les cours d arabe" —
             * l'écriture arabe demande plus de corps que le français
             * pour rester lisible) et titres colorés, rouge pour les
             * "I-/II-/III-" et vert pour les "1-1/, 2-1/..." ("I- ca
             * fais les avec le rouge et 1 2 3 avec le vert"). */}
            <div className="rounded-lg border border-border bg-surface p-9 shadow-sm">
              <ContenuMarkdown
                texte={cours.contenu_mdx}
                grandeTaille={matiere.slug === "arabe"}
                schemaCouleursArabe={matiere.slug === "arabe"}
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
