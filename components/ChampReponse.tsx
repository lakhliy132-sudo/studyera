"use client";

import { useState } from "react";

import { IconeCoche } from "@/components/icones";

/** Minuscules, sans accents : pour comparer la réponse saisie au mot-clé
 * attendu sans être gêné par les majuscules/accents. */
function normaliser(texte: string): string {
  return texte
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/**
 * Champ de réponse d'un exercice : zone d'écriture + bouton "Confirmer".
 * Au clic sur "Confirmer", la saisie est comparée au mot-clé attendu
 * (`reponse`) : on affiche "Vrai ✓" (vert) ou "Faux ✗" (rouge), puis la
 * correction complète en dessous.
 *
 * La vérification est volontairement simple (la saisie contient-elle le
 * mot-clé attendu ?) : suffisante pour les réponses courtes (un niveau
 * de langue, un connecteur, un registre…), pas pour noter une phrase
 * entière — l'élève peut alors se corriger lui-même en lisant la
 * correction.
 */
export default function ChampReponse({
  reponse,
  correction,
  libelle,
  rows = 2,
}: {
  /** Mot-clé attendu dans la réponse (ex. "familier", "tandis que"). */
  reponse: string;
  /** Correction complète affichée après confirmation. */
  correction: string;
  libelle?: string;
  rows?: number;
}) {
  const [saisie, setSaisie] = useState("");
  const [confirme, setConfirme] = useState(false);

  const correct = normaliser(saisie).includes(normaliser(reponse));

  return (
    <div className="flex flex-col gap-2">
      <textarea
        rows={rows}
        value={saisie}
        onChange={(e) => setSaisie(e.target.value)}
        placeholder="Écris ta réponse ici…"
        aria-label={libelle ?? "Ta réponse"}
        className="w-full resize-y rounded-[10px] border border-border bg-background px-4 py-3 font-lecture text-[15px] text-foreground placeholder:text-subtle-foreground focus:border-primary focus:ring-3 focus:ring-primary-tint focus:outline-none"
      />

      {!confirme ? (
        <button
          type="button"
          onClick={() => setConfirme(true)}
          className="flex w-fit items-center gap-2 rounded-[10px] bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_2px_10px_rgba(29,78,216,0.22)] transition-colors hover:bg-ink"
        >
          <IconeCoche className="size-4" />
          Confirmer
        </button>
      ) : (
        <>
          <p
            className={
              correct
                ? "text-sm font-bold text-[#0F6E4C]"
                : "text-sm font-bold text-[#C2372F]"
            }
          >
            {correct ? "Vrai ✓" : "Faux ✗"}
          </p>
          <p className="rounded-r-md border-l-4 border-[#0F6E4C] bg-[#DFF3EA] px-4 py-3 font-lecture text-[14.5px] leading-relaxed text-foreground">
            <span className="font-bold text-[#0F6E4C]">Correction : </span>
            {correction}
          </p>
        </>
      )}
    </div>
  );
}
