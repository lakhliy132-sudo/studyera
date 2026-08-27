import { useId } from "react";

import { IconeLivre } from "@/components/icones";

interface CarteBilingueProps {
  contenuFr: React.ReactNode;
  contenuAr: React.ReactNode | null;
  /**
   * Résumé long (résumé de chapitre) : la carte s'affiche repliée sur
   * quelques lignes avec un bouton "Lire la suite", au lieu de pousser
   * toute la hauteur de la page — demandé explicitement par
   * l'utilisateur ("le résumé... ne soit pas longue comme ça"). Un
   * résumé court (résumé "essentiel" d'une œuvre) n'a pas besoin de ce
   * traitement : `false` par défaut affiche tout, sans repli ni bouton.
   */
  long?: boolean;
}

/**
 * Paire de cartes résumé fr/ar, utilisée à la fois dans la bannière
 * d'une œuvre (résumé "essentiel") et dans l'onglet Résumé d'un
 * chapitre (résumé de la fiche) — même habillage visuel dans les deux
 * cas, seul le contenu (et `long`, voir plus haut) change. `contenuAr`
 * à `null` masque entièrement la carte arabe plutôt que d'afficher une
 * carte vide.
 *
 * Fond blanc (pas teinté) : ces cartes sont au même niveau que la
 * bannière, pas "en retrait" par rapport à elle — reprend la maquette
 * de référence. Texte en `font-lecture` (Lora, serif de labeur), assez
 * grand (18px, interligne généreux) : c'est le contenu principal de
 * lecture de la page.
 *
 * En-tête arabe en `flex-row-reverse` (pas `dir="rtl"` sur l'en-tête) :
 * mirroir visuel correct sans faire hériter le sens RTL à la ligne
 * flex, ce qui la ferait déborder du côté opposé (bug déjà rencontré
 * et corrigé une fois sur ce composant).
 *
 * Repli en CSS pur (case à cocher masquée + `peer`), pas de JS : chaque
 * langue se replie/déplie indépendamment (leurs longueurs de traduction
 * ne correspondent pas forcément ligne à ligne). `useId()` est
 * utilisable ici même si ce composant reste un Server Component — pas
 * besoin de `"use client"` pour un simple repli CSS.
 */
export default function CarteBilingue({ contenuFr, contenuAr, long = false }: CarteBilingueProps) {
  const idFr = useId();
  const idAr = useId();

  return (
    <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
      <div className="rounded-lg border border-border bg-surface p-[34px] px-[38px] shadow-sm transition-shadow hover:shadow-[0_4px_28px_rgba(27,58,143,0.09)]">
        <p className="mb-[18px] flex items-center gap-[11px] font-serif text-lg font-bold text-primary">
          <IconeLivre className="size-[22px]" />
          Résumé
        </p>
        {long ? (
          <PanneauRepliable id={idFr}>
            <div className="font-lecture text-lg leading-[1.95] whitespace-pre-line text-foreground">
              {contenuFr}
            </div>
          </PanneauRepliable>
        ) : (
          <div className="font-lecture text-lg leading-[1.95] whitespace-pre-line text-foreground">
            {contenuFr}
          </div>
        )}
      </div>

      {contenuAr && (
        <div className="rounded-lg border border-border bg-surface p-[34px] px-[38px] shadow-sm transition-shadow hover:shadow-[0_4px_28px_rgba(27,58,143,0.09)]">
          <p className="mb-[18px] flex flex-row-reverse items-center justify-end gap-[11px] font-serif text-lg font-bold text-primary">
            <IconeLivre className="size-[22px]" />
            ملخص
          </p>
          {long ? (
            <PanneauRepliable id={idAr}>
              <div
                dir="rtl"
                lang="ar"
                className="font-arabe text-lg leading-[2.3] whitespace-pre-line text-foreground"
              >
                {contenuAr}
              </div>
            </PanneauRepliable>
          ) : (
            <div
              dir="rtl"
              lang="ar"
              className="font-arabe text-lg leading-[2.3] whitespace-pre-line text-foreground"
            >
              {contenuAr}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Repli CSS pur (case à cocher `sr-only` + variantes `peer-checked:`) :
 * 6 lignes visibles par défaut avec un dégradé de fondu, un bouton
 * "Lire la suite" déplie en hauteur libre et bascule vers "Réduire".
 * Les deux `<label>` (repliable/dépliable) sont chacun un frère direct
 * de la case à cocher : `peer-checked:` de Tailwind ne cible que des
 * frères, pas des descendants plus profonds, d'où cette structure à
 * plat plutôt que deux `<span>` imbriqués dans un seul `<label>`.
 */
function PanneauRepliable({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="relative">
      <input type="checkbox" id={id} className="peer sr-only" />
      <div className="line-clamp-6 peer-checked:line-clamp-none">{children}</div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-8 h-10 bg-gradient-to-t from-surface to-transparent peer-checked:hidden"
      />
      <label
        htmlFor={id}
        className="relative z-10 mt-2 inline-block cursor-pointer text-sm font-semibold text-primary hover:underline peer-checked:hidden"
      >
        Lire la suite ↓
      </label>
      <label
        htmlFor={id}
        className="relative z-10 mt-2 hidden cursor-pointer text-sm font-semibold text-primary hover:underline peer-checked:inline-block"
      >
        Réduire ↑
      </label>
    </div>
  );
}
