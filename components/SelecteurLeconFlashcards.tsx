"use client";

import { useRouter } from "next/navigation";

import type { Cours } from "@/types/base-de-donnees";

interface SelecteurLeconFlashcardsProps {
  leconsHistoire: Cours[];
  leconsGeographie: Cours[];
  /** Slug de la leçon actuellement sélectionnée, `undefined` pour
   * "Toutes les leçons". */
  sluActif: string | undefined;
  /** Nombre total de fiches toutes leçons confondues — affiché dans
   * l'option "Toutes les leçons", jamais codé en dur (peut changer si
   * le contenu des cours change). */
  totalFiches: number;
}

/**
 * Sélecteur de leçon des flashcards — demandé explicitement par
 * l'utilisateur, qui a corrigé un premier essai posant ce choix sur
 * chaque page de cours ("non dans la partie de flash cards") : le
 * choix de la leçon se fait depuis /histoire-geo/flashcards lui-même.
 * `<select>` natif groupé Histoire/Géographie (accessible, pas de menu
 * personnalisé à construire pour 16 options) — navigue vers
 * `?cours=<slug>` (ou retire le paramètre pour "Toutes les leçons")
 * au changement, lu par app/(public)/histoire-geo/flashcards/page.tsx.
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

  return (
    <label className="flex w-full max-w-xl flex-col gap-1.5 text-sm font-semibold text-ink">
      Choisir une leçon
      <select
        value={sluActif ?? "toutes"}
        onChange={(e) => {
          const valeur = e.target.value;
          router.push(valeur === "toutes" ? "/histoire-geo/flashcards" : `/histoire-geo/flashcards?cours=${valeur}`);
        }}
        className="rounded-[12px] border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-ink shadow-sm focus:border-primary focus:outline-none"
      >
        <option value="toutes">Toutes les leçons ({totalFiches} fiches)</option>
        <optgroup label="Histoire">
          {leconsHistoire.map((lecon) => (
            <option key={lecon.slug} value={lecon.slug}>
              {lecon.titre}
            </option>
          ))}
        </optgroup>
        <optgroup label="Géographie">
          {leconsGeographie.map((lecon) => (
            <option key={lecon.slug} value={lecon.slug}>
              {lecon.titre}
            </option>
          ))}
        </optgroup>
      </select>
    </label>
  );
}
