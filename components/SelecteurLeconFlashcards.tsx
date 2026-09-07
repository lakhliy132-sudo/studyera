"use client";

import { useRouter } from "next/navigation";

import { IconeGlobe, IconeHorloge } from "@/components/icones";
import type { Cours } from "@/types/base-de-donnees";

interface SelecteurLeconFlashcardsProps {
  leconsHistoire: Cours[];
  leconsGeographie: Cours[];
  /** Slug de la leçon actuellement sélectionnée, `undefined` pour
   * "Toutes les leçons". */
  sluActif: string | undefined;
  /** Nombre total de fiches toutes leçons confondues — affiché sur la
   * puce "Toutes les leçons", jamais codé en dur (peut changer si le
   * contenu des cours change). */
  totalFiches: number;
}

/** Palette cyclique — une couleur par leçon, pas une par matière (une
 * seule couleur pour 16 puces aurait été plate) ; huit teintes bien
 * distinctes qui se répètent au-delà de 8 leçons par groupe plutôt que
 * d'en inventer 16, mêmes teintes pour Histoire et Géographie (la
 * distinction entre les deux groupes vient déjà de l'en-tête, pas
 * besoin d'un deuxième code couleur qui se superposerait au premier). */
const PALETTE = ["#2563eb", "#7c3aed", "#db2777", "#ea580c", "#059669", "#0891b2", "#ca8a04", "#dc2626"];

function PuceLecon({ lecon, numero, actif, onClick }: { lecon: Cours; numero: number; actif: boolean; onClick: () => void }) {
  const couleur = PALETTE[(numero - 1) % PALETTE.length];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={actif ? "true" : undefined}
      style={{
        borderColor: actif ? couleur : `color-mix(in srgb, ${couleur} 35%, transparent)`,
        backgroundColor: actif ? couleur : "transparent",
      }}
      title={lecon.titre}
      className={`flex shrink-0 items-center gap-2.5 rounded-full border-2 py-1.5 pr-4 pl-1.5 text-left text-[13px] font-semibold transition-all ${
        actif ? "text-white shadow-md" : "bg-surface text-ink hover:-translate-y-0.5"
      }`}
    >
      <span
        style={{ backgroundColor: actif ? "rgba(255,255,255,0.25)" : couleur }}
        className="flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
      >
        {numero}
      </span>
      {/* Titre sur une seule ligne, jamais coupé en plein milieu par une
       * colonne étroite : la liste est disposée horizontalement (voir
       * plus bas), donc chaque puce prend la largeur de son titre —
       * demandé explicitement par l'utilisateur après un essai en
       * colonne verticale où les titres étaient tronqués ("j ai pas du
       * tout aimé comme ca" / "la partie du titre de cours fais la
       * aussi horizontalement dans la partie de flash cards"). */}
      <span dir="rtl" className="whitespace-nowrap">
        {lecon.titre}
      </span>
    </button>
  );
}

/**
 * Sélecteur de leçon des flashcards — demandé explicitement par
 * l'utilisateur, qui a corrigé un premier essai posant ce choix sur
 * chaque page de cours ("non dans la partie de flash cards") : le
 * choix de la leçon se fait depuis /histoire-geo/flashcards lui-même.
 *
 * Passé d'un `<select>` natif à des puces colorées cliquables — demandé
 * explicitement par l'utilisateur ("je veux qu il soit trop stylé avec
 * des couleurs") : un `<select>` natif ne peut pas être stylé aussi
 * richement. Une couleur par leçon (voir `PALETTE`), navigue vers
 * `?cours=<slug>` au clic.
 *
 * Disposition horizontale (puces qui s'enchaînent sur toute la largeur
 * de la page, une rangée par groupe qui défile latéralement si besoin)
 * — demandé explicitement par l'utilisateur ("la partie du titre de
 * cours fais la aussi horizontalement dans la partie de flash cards"),
 * après un essai en colonne verticale étroite à côté de la carte, où
 * les titres arabes se retrouvaient tronqués faute de largeur ("j ai
 * pas du tout aimé comme ca"). En pleine largeur, chaque puce prend la
 * place de son titre complet, plus rien n'est coupé.
 *
 * `"use client"` : seul ce sélecteur a besoin de `useRouter`, le reste
 * de la page reste un Composant Serveur.
 */
export default function SelecteurLeconFlashcards({
  leconsHistoire,
  leconsGeographie,
  sluActif,
  totalFiches,
}: SelecteurLeconFlashcardsProps) {
  const router = useRouter();

  function allerA(slug: string | null) {
    router.push(slug ? `/histoire-geo/flashcards?cours=${slug}` : "/histoire-geo/flashcards");
  }

  return (
    <div className="flex w-full flex-col gap-4 rounded-[18px] border border-border bg-surface p-4 shadow-sm">
      <button
        type="button"
        onClick={() => allerA(null)}
        style={{ backgroundColor: "var(--color-primary)" }}
        className={`flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-white shadow-sm transition-opacity ${
          sluActif ? "opacity-50 hover:opacity-100" : ""
        }`}
      >
        Toutes les leçons
        <span className="rounded-full bg-white/25 px-2 py-0.5 text-xs">{totalFiches}</span>
      </button>

      <div className="flex flex-col gap-2">
        <p className="flex items-center gap-1.5 px-1 text-xs font-bold tracking-wide text-subtle-foreground uppercase">
          <IconeHorloge className="size-3.5" />
          Histoire
        </p>
        <div className="flex flex-wrap gap-2">
          {leconsHistoire.map((lecon, index) => (
            <PuceLecon
              key={lecon.slug}
              lecon={lecon}
              numero={index + 1}
              actif={sluActif === lecon.slug}
              onClick={() => allerA(lecon.slug)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="flex items-center gap-1.5 px-1 text-xs font-bold tracking-wide text-subtle-foreground uppercase">
          <IconeGlobe className="size-3.5" />
          Géographie
        </p>
        <div className="flex flex-wrap gap-2">
          {leconsGeographie.map((lecon, index) => (
            <PuceLecon
              key={lecon.slug}
              lecon={lecon}
              numero={leconsHistoire.length + index + 1}
              actif={sluActif === lecon.slug}
              onClick={() => allerA(lecon.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
