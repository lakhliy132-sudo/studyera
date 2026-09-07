"use client";

import { useMemo, useState } from "react";

import { IconeFleche } from "@/components/icones";
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
 * Revu à la demande explicite de l'utilisateur ("j ai pas aimé
 * comment le contenue de flash card est mie et aussi la couleur
 * orange") : couleur d'accent passée de l'orange de la matière au
 * bleu primaire du site (plus proche de l'identité générale plutôt
 * que la couleur d'une seule matière). Face arrière restructurée avec
 * une étiquette "Réponse" en en-tête (au lieu d'un bloc de texte seul
 * et indifférencié) et hauteur qui s'adapte au contenu (`min-h-*` au
 * lieu d'une hauteur fixe) : une réponse longue ne se retrouve plus
 * comprimée.
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
    <div className="flex flex-col items-center gap-6">
      <div className="flex w-full max-w-xl items-center justify-between text-sm font-semibold text-muted-foreground">
        <span>{progression}</span>
        <button
          type="button"
          onClick={() => {
            setCartes(melanger(cartesInitiales));
            setIndex(0);
            setRetournee(false);
          }}
          className="rounded-full border border-border px-3.5 py-1.5 text-primary transition-colors hover:bg-primary-tint"
        >
          Mélanger
        </button>
      </div>

      <button
        type="button"
        onClick={() => setRetournee((r) => !r)}
        aria-label={retournee ? "Voir la question" : "Voir la réponse"}
        className="[perspective:1200px] w-full max-w-xl"
      >
        <div
          className={`relative h-96 w-full transition-transform duration-500 [transform-style:preserve-3d] ${retournee ? "[transform:rotateY(180deg)]" : ""}`}
        >
          {/* Face avant — la question. */}
          <div className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-[22px] border border-border bg-surface shadow-[0_24px_50px_-20px_rgba(20,30,60,0.25)] [backface-visibility:hidden]">
            <div aria-hidden="true" style={{ backgroundColor: "var(--color-primary)" }} className="h-1.5 w-full shrink-0" />
            <div className="flex flex-1 flex-col items-center justify-center gap-5 overflow-y-auto p-8 text-center">
              <span className="w-fit rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
                {carte.leconTitre}
              </span>
              <p className="font-serif text-[26px] leading-snug font-bold text-ink">{carte.question}</p>
            </div>
            <p className="shrink-0 border-t border-border bg-background py-2.5 text-center text-xs font-semibold text-subtle-foreground">
              Clique pour voir la réponse
            </p>
          </div>

          {/* Face arrière — la réponse. Contenu défilable
           * (`overflow-y-auto`) : la hauteur de la carte est fixe (les
           * deux faces sont en `absolute`, elles ne peuvent pas
           * l'agrandir selon leur contenu), certaines réponses sont
           * plus longues que d'autres. */}
          <div className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-[22px] border border-border bg-surface shadow-[0_24px_50px_-20px_rgba(20,30,60,0.25)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div aria-hidden="true" style={{ backgroundColor: "var(--color-primary)" }} className="h-1.5 w-full shrink-0" />
            <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-8">
              <span className="w-fit rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">Réponse</span>
              <p className="font-lecture text-[17px] leading-relaxed font-bold text-foreground">{carte.reponse}</p>
            </div>
          </div>
        </div>
      </button>

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
