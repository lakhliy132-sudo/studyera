"use client";

import { useMemo, useRef, useState } from "react";

import { IconeFleche, IconeIdee } from "@/components/icones";
import type { ErreurCopie } from "@/lib/correcteur";
import { couleurErreur, libelleErreur } from "@/lib/typesErreur";

const NB_VISIBLES = 2;

interface Plage {
  debut: number;
  fin: number;
  index: number;
}

/** Place chaque erreur dans le texte : première occurrence de son
 * extrait qui ne chevauche pas une erreur déjà placée. Une erreur dont
 * l'extrait n'est pas retrouvé tel quel reste dans la liste, sans
 * soulignement. */
function placerErreurs(texte: string, erreurs: ErreurCopie[]): Plage[] {
  const plages: Plage[] = [];
  erreurs.forEach((erreur, index) => {
    const extrait = erreur.extrait.trim();
    if (!extrait) return;
    let depart = 0;
    while (depart <= texte.length) {
      const debut = texte.indexOf(extrait, depart);
      if (debut === -1) return;
      const fin = debut + extrait.length;
      if (!plages.some((p) => debut < p.fin && fin > p.debut)) {
        plages.push({ debut, fin, index });
        return;
      }
      depart = debut + 1;
    }
  });
  return plages.sort((a, b) => a.debut - b.debut);
}

/**
 * "Ta copie corrigée", d'après la maquette de l'utilisateur : à gauche
 * la copie sur une feuille lignée, chaque erreur soulignée de la couleur
 * de son type avec son numéro ; à droite les remarques, chacune avec le
 * passage barré, sa correction, l'explication et, quand le correcteur
 * en donne une, la règle à retenir. Cliquer une erreur dans le texte
 * ouvre et met en avant sa remarque.
 *
 * Les deux premières remarques sont visibles, les autres derrière "Voir
 * les N autres remarques", comme sur la maquette.
 */
export default function CopieCorrigee({ texte, erreurs }: { texte: string; erreurs: ErreurCopie[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [toutes, setToutes] = useState(false);
  const refsCartes = useRef<(HTMLLIElement | null)[]>([]);

  const plages = useMemo(() => placerErreurs(texte, erreurs), [texte, erreurs]);
  const types = useMemo(() => [...new Set(erreurs.map((e) => e.type))], [erreurs]);
  const mots = texte.trim() ? texte.trim().split(/\s+/).length : 0;
  const visibles = toutes || (active !== null && active >= NB_VISIBLES) ? erreurs : erreurs.slice(0, NB_VISIBLES);

  function choisir(index: number) {
    setActive(index);
    if (index >= NB_VISIBLES) setToutes(true);
    // Après le rendu de la carte, si elle était repliée.
    requestAnimationFrame(() =>
      refsCartes.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest" }),
    );
  }

  // Le texte découpé en morceaux : du texte simple, ou une erreur.
  const morceaux: { texte: string; index: number | null }[] = [];
  let curseur = 0;
  for (const plage of plages) {
    if (plage.debut > curseur) morceaux.push({ texte: texte.slice(curseur, plage.debut), index: null });
    morceaux.push({ texte: texte.slice(plage.debut, plage.fin), index: plage.index });
    curseur = plage.fin;
  }
  if (curseur < texte.length) morceaux.push({ texte: texte.slice(curseur), index: null });

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
      {/* La copie */}
      <div className="h-fit overflow-hidden rounded-[22px] border border-border bg-surface shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-3.5">
          <p className="text-sm text-muted-foreground">
            Ta copie · {mots} mot{mots > 1 ? "s" : ""}
          </p>
          {types.length > 0 && (
            <ul className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {types.map((type) => (
                <li key={type} className="flex items-center gap-1.5">
                  <span aria-hidden="true" className="size-2.5 rounded-[3px]" style={{ backgroundColor: couleurErreur(type) }} />
                  {libelleErreur(type)}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Feuille lignée : une ligne tous les 36 px, marge rouge. Les
         * deux couleurs de papier sont fixes, comme une photo, pour que
         * la feuille reste une feuille en mode sombre aussi. */}
        <div
          className="relative py-4 ps-10 pe-5 font-serif text-[17px] leading-[36px] whitespace-pre-wrap text-[#1d2340] sm:ps-16 sm:text-[18px]"
          style={{
            backgroundColor: "#fffdf7",
            backgroundImage: "repeating-linear-gradient(to bottom, transparent 0, transparent 35px, #e3e8f2 35px, #e3e8f2 36px)",
            backgroundPosition: "0 16px",
          }}
        >
          <span aria-hidden="true" className="absolute inset-y-0 left-6 w-px bg-[#f2a7b0] sm:left-11" />
          {morceaux.map((morceau, i) => {
            if (morceau.index === null) return <span key={i}>{morceau.texte}</span>;
            const index = morceau.index;
            const couleur = couleurErreur(erreurs[index].type);
            const choisie = active === index;
            return (
              // Un <span> et non un <button> : un bouton ne se coupe pas
              // en fin de ligne, et un long passage fautif sautait
              // entier à la ligne suivante.
              <span
                key={i}
                role="button"
                tabIndex={0}
                onClick={() => choisir(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    choisir(index);
                  }
                }}
                className="cursor-pointer rounded-[4px] px-0.5 transition [box-decoration-break:clone] focus-visible:outline-2 focus-visible:outline-primary"
                style={{
                  textDecoration: `underline wavy ${couleur}`,
                  textUnderlineOffset: "5px",
                  textDecorationThickness: "1.5px",
                  backgroundColor: `color-mix(in srgb, ${couleur} ${choisie ? 24 : 10}%, transparent)`,
                  boxShadow: choisie ? `0 0 0 1.5px ${couleur}` : undefined,
                }}
              >
                {morceau.texte}
                <sup
                  className="ms-0.5 inline-flex size-4 items-center justify-center rounded-full align-super font-sans text-[10px] leading-none font-bold text-white no-underline"
                  style={{ backgroundColor: couleur }}
                >
                  {index + 1}
                </sup>
              </span>
            );
          })}
        </div>
      </div>

      {/* Les remarques */}
      <div className="flex flex-col gap-4">
        {erreurs.length === 0 ? (
          <p className="rounded-[20px] border border-border bg-surface p-6 text-sm text-muted-foreground">
            Le correcteur n&apos;a relevé aucune erreur dans cette copie.
          </p>
        ) : (
          <ul className="flex flex-col gap-4">
            {visibles.map((erreur, index) => {
              const couleur = couleurErreur(erreur.type);
              const choisie = active === index;
              return (
                <li
                  key={index}
                  ref={(el) => {
                    refsCartes.current[index] = el;
                  }}
                  onClick={() => setActive(index)}
                  className="cursor-pointer rounded-[20px] border bg-surface p-5 shadow-sm transition"
                  style={{
                    borderColor: choisie ? couleur : "var(--color-border)",
                    boxShadow: choisie ? `0 14px 30px -18px ${couleur}` : undefined,
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex size-6 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: couleur }}
                    >
                      {index + 1}
                    </span>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-bold"
                      style={{ color: couleur, backgroundColor: `color-mix(in srgb, ${couleur} 13%, var(--color-surface))` }}
                    >
                      {libelleErreur(erreur.type)}
                    </span>
                  </div>
                  <p className="mt-3 font-serif text-[15px] text-[#e11d48] line-through decoration-[#e11d48]/70">{erreur.extrait}</p>
                  {erreur.correction && (
                    <p className="mt-1 flex gap-2 font-serif text-[15px] font-semibold text-validation">
                      <IconeFleche className="mt-1 size-3.5 shrink-0" />
                      {erreur.correction}
                    </p>
                  )}
                  {erreur.explication && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{erreur.explication}</p>}
                  {erreur.regle && (
                    <div className="mt-3 flex gap-3 rounded-[14px] bg-surface-muted p-3.5">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f7c948]/30 text-[#a16207]">
                        <IconeIdee className="size-4" />
                      </span>
                      <p className="text-sm text-foreground">
                        <span className="block font-bold text-ink">{/hors|méthode|contenu/i.test(erreur.type) ? "Méthode" : "Règle à retenir"}</span>
                        {erreur.regle}
                      </p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
        {erreurs.length > NB_VISIBLES && (
          <button
            type="button"
            onClick={() => setToutes(!toutes)}
            className="self-center text-sm font-bold text-primary hover:underline"
          >
            {toutes
              ? "Réduire"
              : `Voir ${erreurs.length - NB_VISIBLES > 1 ? `les ${erreurs.length - NB_VISIBLES} autres remarques` : "l'autre remarque"} ↓`}
          </button>
        )}
      </div>
    </div>
  );
}
