"use client";

import { useState } from "react";

import type { EntreeLexique } from "@/types/base-de-donnees";

interface MotLexiqueProps {
  entree: EntreeLexique;
  children: React.ReactNode;
}

/**
 * Mot cliquable dans un texte fr, ouvrant sa définition (table
 * `lexique`) : traduction arabe, nature grammaticale, explication.
 *
 * Deux présentations selon la largeur d'écran plutôt qu'une seule
 * popover flottante partout : à 380px, une popover ancrée au mot
 * risquerait de déborder de l'écran si le mot est proche du bord (pas
 * de librairie de positionnement dans ce projet pour la recaler
 * automatiquement). En dessous de `md`, la définition s'ouvre donc en
 * feuille pleine largeur depuis le bas ; au-dessus, en popover ancrée
 * sous le mot.
 */
export default function MotLexique({ entree, children }: MotLexiqueProps) {
  const [ouvert, setOuvert] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setOuvert((v) => !v)}
        aria-expanded={ouvert}
        className="rounded-sm px-0.5 text-foreground underline decoration-or decoration-dotted underline-offset-2"
      >
        {children}
      </button>

      {ouvert && (
        <>
          <div className="absolute top-full left-0 z-30 mt-2 hidden w-72 flex-col gap-1 rounded-lg border border-border bg-surface p-4 text-sm shadow-lg md:flex">
            <ContenuLexique entree={entree} />
          </div>

          <div
            aria-hidden="true"
            onClick={() => setOuvert(false)}
            className="fixed inset-0 z-30 bg-foreground/20 md:hidden"
          />
          <div className="fixed inset-x-0 bottom-0 z-40 flex flex-col gap-2 rounded-t-lg border-t border-border bg-surface p-4 shadow-lg md:hidden">
            <ContenuLexique entree={entree} />
            <button
              type="button"
              onClick={() => setOuvert(false)}
              className="mt-2 self-center text-sm text-muted-foreground"
            >
              Fermer
            </button>
          </div>
        </>
      )}
    </span>
  );
}

function ContenuLexique({ entree }: { entree: EntreeLexique }) {
  return (
    <>
      <p className="font-semibold text-foreground">{entree.mot}</p>
      {entree.sens_ar && (
        <p dir="rtl" lang="ar" className="font-arabe text-base leading-loose text-foreground">
          {entree.sens_ar}
        </p>
      )}
      {entree.nature && (
        <p className="text-sm text-muted-foreground">Nature grammaticale : {entree.nature}</p>
      )}
      {entree.note && <p className="text-sm text-muted-foreground">Explication : {entree.note}</p>}
    </>
  );
}
