"use client";

import { useMemo, useState } from "react";

import { IconeFleche, IconeGlobe, IconeMelanger } from "@/components/icones";
import type { Flashcard } from "@/lib/flashcards";

interface FlashcardsHistoireGeoProps {
  cartes: Flashcard[];
}

/** Mélange Fisher-Yates — copie `cartes`, ne modifie pas le tableau
 * reçu (utilisé aussi tel quel côté serveur pour l'ordre initial). */
function melanger<T>(items: T[]): T[] {
  const copie = [...items];
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

/**
 * Visionneuse de fiches (question/réponse) — carte qui se retourne au
 * clic, navigation précédent/suivant, mélange. Demandé explicitement
 * par l'utilisateur ("fais moi une case qui s appelle flash cards"),
 * contenu réel extrait des cours (voir lib/flashcards.ts), rien
 * d'inventé. `"use client"` : retournement et navigation au clic,
 * pas de sens sans interaction.
 *
 * Effet de pile ("deck") derrière la carte + flèches circulaires sur
 * les côtés + formes décoratives dans les coins — reprend une
 * maquette envoyée par l'utilisateur ("je veux comme ca"). La barre
 * latérale visible sur cette même maquette n'est, elle, pas reprise :
 * confirmé explicitement par l'utilisateur que la navigation
 * horizontale actuelle (choix déjà fait plus tôt dans le projet)
 * reste inchangée.
 */
export default function FlashcardsHistoireGeo({ cartes: cartesInitiales }: FlashcardsHistoireGeoProps) {
  const [cartes, setCartes] = useState(cartesInitiales);
  const [index, setIndex] = useState(0);
  const [retournee, setRetournee] = useState(false);

  const carte = cartes[index];
  const progression = useMemo(() => `${index + 1} / ${cartes.length}`, [index, cartes.length]);

  function allerA(nouvelIndex: number) {
    setIndex((nouvelIndex + cartes.length) % cartes.length);
    setRetournee(false);
  }

  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-6">
      <div className="flex w-full max-w-xl items-center justify-between">
        <span className="rounded-full bg-primary-tint px-3.5 py-1.5 text-sm font-semibold text-primary">{progression}</span>
        <button
          type="button"
          onClick={() => {
            setCartes(melanger(cartesInitiales));
            setIndex(0);
            setRetournee(false);
          }}
          className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-primary-tint"
        >
          <IconeMelanger className="size-4" />
          Mélanger
        </button>
      </div>

      <div className="flex w-full items-center justify-center gap-4 sm:gap-6">
        <button
          type="button"
          onClick={() => allerA(index - 1)}
          aria-label="Fiche précédente"
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-ink shadow-sm transition-colors hover:bg-surface-muted"
        >
          <IconeFleche className="size-4 rotate-180" />
        </button>

        {/* Pile de cartes : deux échos décalés/tournés derrière la
         * carte active, façon jeu de cartes — purement visuel
         * (`aria-hidden`), leur contenu ne change jamais. */}
        <div className="relative w-full max-w-xl [perspective:1200px]">
          <div
            aria-hidden="true"
            className="absolute inset-2 -z-10 translate-y-2 -rotate-2 rounded-[22px] border border-border bg-primary-tint/60"
          />
          <div
            aria-hidden="true"
            className="absolute inset-1 -z-10 translate-y-1 rotate-1 rounded-[22px] border border-border bg-surface-muted"
          />

          <button
            type="button"
            onClick={() => setRetournee((r) => !r)}
            aria-label={retournee ? "Voir la question" : "Voir la réponse"}
            className="block w-full"
          >
            <div
              className={`relative h-96 w-full transition-transform duration-500 [transform-style:preserve-3d] ${retournee ? "[transform:rotateY(180deg)]" : ""}`}
            >
              {/* Face avant — la question. */}
              <div className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-[22px] border border-border bg-surface shadow-[0_24px_50px_-20px_rgba(20,30,60,0.25)] [backface-visibility:hidden]">
                <FormesDecoratives />
                <div className="relative flex flex-1 flex-col items-center justify-center gap-5 overflow-y-auto p-8 text-center">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
                    <IconeGlobe className="size-5" />
                  </span>
                  <span className="w-fit max-w-[85%] rounded-full bg-primary-tint px-3.5 py-1.5 text-xs font-semibold text-primary">
                    {carte.leconTitre}
                  </span>
                  <span aria-hidden="true" className="h-px w-16 bg-border-strong" />
                  <p className="font-serif text-[26px] leading-snug font-bold text-ink">{carte.question}</p>
                </div>
                <p className="relative shrink-0 border-t border-border bg-background py-2.5 text-center text-xs font-semibold text-subtle-foreground">
                  Clique pour voir la réponse
                </p>
              </div>

              {/* Face arrière — la réponse. Contenu défilable
               * (`overflow-y-auto`) : la hauteur de la carte est fixe
               * (les deux faces sont en `absolute`, elles ne peuvent
               * pas l'agrandir selon leur contenu), certaines réponses
               * sont plus longues que d'autres. */}
              <div className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-[22px] border border-border bg-surface shadow-[0_24px_50px_-20px_rgba(20,30,60,0.25)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <FormesDecoratives />
                <div className="relative flex flex-1 flex-col gap-3 overflow-y-auto p-8">
                  <span className="w-fit rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">Réponse</span>
                  <p className="font-lecture text-[17px] leading-relaxed font-bold text-foreground">{carte.reponse}</p>
                </div>
              </div>
            </div>
          </button>
        </div>

        <button
          type="button"
          onClick={() => allerA(index + 1)}
          aria-label="Fiche suivante"
          style={{ backgroundColor: "var(--color-primary)" }}
          className="flex size-11 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-opacity hover:opacity-90"
        >
          <IconeFleche className="size-4" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => allerA(index - 1)}
          className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-surface-muted"
        >
          <IconeFleche className="size-4 rotate-180" />
          Précédent
        </button>
        <button
          type="button"
          onClick={() => allerA(index + 1)}
          style={{ backgroundColor: "var(--color-primary)" }}
          className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Suivant
          <IconeFleche className="size-4" />
        </button>
      </div>
    </div>
  );
}

/** Deux triangles dégradés dans les coins opposés de la carte, très
 * discrets — purement décoratifs, reprend la maquette envoyée par
 * l'utilisateur. `-z-[1]` relatif à la face de la carte (positionnée),
 * pas à toute la pile de cartes derrière. */
function FormesDecoratives() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[1] overflow-hidden rounded-[22px]">
      <div
        className="absolute -top-10 -left-10 size-32 rotate-45"
        style={{ background: "linear-gradient(135deg, var(--color-primary-tint) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -right-10 -bottom-10 size-32 rotate-45"
        style={{ background: "linear-gradient(-45deg, var(--color-primary-tint) 0%, transparent 70%)" }}
      />
    </div>
  );
}
