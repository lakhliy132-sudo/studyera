"use client";

import { useState } from "react";

/** Copie un texte (l'e-mail du compte sur /acces) et le dit deux
 * secondes. Sans presse-papiers disponible, le bouton ne fait rien de
 * plus : le texte reste sélectionnable à côté. */
export default function BoutonCopier({ texte, libelle, copie }: { texte: string; libelle: string; copie: string }) {
  const [fait, setFait] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(texte);
          setFait(true);
          setTimeout(() => setFait(false), 2000);
        } catch {
          // Presse-papiers refusé (contexte non sécurisé) : rien à faire.
        }
      }}
      className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white transition-colors hover:bg-white/25"
    >
      {fait ? copie : libelle}
    </button>
  );
}
