"use client";

import { useEffect, useState } from "react";

import { IconeTexte } from "@/components/icones";

interface SommaireHistoireGeoProps {
  /** Titres des sections (`##`) du cours affiché, dans l'ordre du
   * document — mêmes textes que les pastilles numérotées de
   * `ContenuMarkdown` (`styleFeuille`), reliées ici par ancre
   * (`#section-N`, posé sur chaque `h2` par ContenuMarkdown). */
  titresSections: string[];
}

/** Même rouge que les pastilles numérotées des `h2` dans
 * ContenuMarkdown (`COULEUR_GRAND_TITRE`) — pas exporté de là (module
 * dédié au rendu Markdown), redéfini ici à l'identique pour que les
 * numéros du sommaire soient visuellement la même couleur que les
 * numéros des sections qu'ils pointent. */
const COULEUR_GRAND_TITRE = "#dc2626";

/**
 * Sommaire du cours affiché — habillage aligné sur la "feuille" du
 * cours (bandeau de couleur en haut, ombre marquée, pastilles
 * numérotées) plutôt qu'une carte grise nue, demandé explicitement par
 * l'utilisateur après une première version jugée trop plate ("oui c
 * bien mais je veux quelle soit stylé"). Liste reliée par une ligne
 * verticale (façon frise chronologique) entre les pastilles, numéros
 * dans le même rouge que les titres de section qu'ils pointent — pour
 * que le lien visuel avec le contenu soit immédiat.
 *
 * Section active suivie au défilement (`IntersectionObserver`) —
 * demandé explicitement par l'utilisateur pour aller plus loin sur
 * l'élégance ("si tu peux le sommaire dans les cours d une maniere
 * elegante") : la pastille et le titre de la section actuellement lue
 * se distinguent du reste, comme un sommaire de documentation
 * premium, plutôt qu'une simple liste de liens statique. Composant
 * client (nécessaire pour l'observer) — le reste du cours autour
 * (page, ContenuMarkdown) reste rendu côté serveur.
 */
export default function SommaireHistoireGeo({ titresSections }: SommaireHistoireGeoProps) {
  const [sectionActive, setSectionActive] = useState(1);

  useEffect(() => {
    const sections = titresSections
      .map((_, index) => document.getElementById(`section-${index + 1}`))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observateur = new IntersectionObserver(
      (entrees) => {
        // Parmi les titres actuellement visibles, retient le plus haut
        // dans le document (le premier de `sections` qui intersecte) —
        // évite qu'une section très courte tout en bas ne "gagne"
        // simplement parce qu'elle est entrée en dernier.
        const visibles = entrees.filter((e) => e.isIntersecting).map((e) => e.target.id);
        if (visibles.length === 0) return;
        const premier = sections.find((s) => visibles.includes(s.id));
        if (premier) setSectionActive(Number(premier.id.replace("section-", "")));
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );

    sections.forEach((s) => observateur.observe(s));
    return () => observateur.disconnect();
  }, [titresSections]);

  if (titresSections.length === 0) return null;

  return (
    <aside className="sticky top-24 w-full overflow-hidden rounded-[22px] border border-border bg-surface shadow-[0_24px_50px_-20px_rgba(20,30,60,0.25)]">
      <div aria-hidden="true" style={{ backgroundColor: COULEUR_GRAND_TITRE }} className="h-1.5 w-full" />
      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-center gap-2">
          <span
            style={{ backgroundColor: `color-mix(in srgb, ${COULEUR_GRAND_TITRE} 12%, transparent)`, color: COULEUR_GRAND_TITRE }}
            className="flex size-7 shrink-0 items-center justify-center rounded-full"
          >
            <IconeTexte className="size-3.5" />
          </span>
          <p className="font-serif text-base font-bold text-ink">Sommaire</p>
        </div>

        <ul className="relative flex flex-col gap-0.5">
          {/* Ligne verticale reliant les pastilles, façon frise —
           * alignée sur leur centre (left de la pastille + moitié de sa
           * largeur, size-6 → 12px). */}
          <span
            aria-hidden="true"
            style={{ backgroundColor: `color-mix(in srgb, ${COULEUR_GRAND_TITRE} 20%, transparent)` }}
            className="absolute top-3 bottom-3 left-3 w-px"
          />
          {titresSections.map((titre, index) => {
            const numero = index + 1;
            const actif = numero === sectionActive;
            return (
              <li key={index} className="relative">
                <a
                  href={`#section-${numero}`}
                  aria-current={actif ? "location" : undefined}
                  style={actif ? { backgroundColor: `color-mix(in srgb, ${COULEUR_GRAND_TITRE} 10%, transparent)` } : undefined}
                  className={`group flex items-start gap-3 rounded-[10px] px-2 py-2 text-[13px] leading-snug transition-colors ${
                    actif ? "text-ink" : "text-muted-foreground hover:bg-surface-muted hover:text-ink"
                  }`}
                >
                  <span
                    style={{ backgroundColor: COULEUR_GRAND_TITRE }}
                    className={`relative z-[1] flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white shadow-sm transition-transform ${
                      actif ? "scale-[1.2]" : "group-hover:scale-110"
                    }`}
                  >
                    {numero}
                  </span>
                  <span className={`line-clamp-2 pt-0.5 ${actif ? "font-bold" : "font-medium"}`}>{titre}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
