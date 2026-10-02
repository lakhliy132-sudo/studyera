"use client";

import { useEffect, useMemo, useState } from "react";

import type { Flashcard } from "@/lib/flashcards";

interface FlashcardsHistoireGeoProps {
  cartes: Flashcard[];
}

type Resultat = "su" | "revoir";

/** Catégorie déduite de la réponse : une réponse qui tient dans une
 * date (une année, éventuellement un jour et un mois) est étiquetée
 * "Date", le reste est une "Notion". Déduction volontairement simple
 * et lisible : les cartes sont extraites automatiquement du cours
 * (lib/flashcards.ts), aucune catégorie n'est saisie à la main. */
function categorieDe(reponse: string): "Date" | "Notion" {
  return /^[^.]{0,40}\b(1[0-9]{3}|20[0-9]{2})\b[^.]{0,20}$/.test(reponse.trim())
    ? "Date"
    : "Notion";
}

const COULEUR_CATEGORIE: Record<string, string> = {
  Date: "var(--color-matiere-histoire-geo)",
  Notion: "var(--color-matiere-arabe)",
};

/**
 * Jeu de flashcards affiché en bas de chaque leçon d'histoire-géo —
 * refondu d'après le composant `Flashcards.jsx` fourni par
 * l'utilisateur ("remplace les flashcards de histoire geo par ça") :
 * carte qui se retourne en 3D, boutons "À revoir" / "Je savais",
 * barre de progression en deux couleurs, écran de fin avec le score et
 * la reprise des erreurs, mélange, et raccourcis clavier (Espace pour
 * retourner, ← et → pour répondre).
 *
 * Trois différences avec le fichier fourni, toutes pour coller aux
 * données réelles :
 *
 * - les cartes ne sont pas une liste écrite en dur : elles sont
 *   extraites du cours affiché (voir lib/flashcards.ts), donc une
 *   carte a une question, une réponse et la leçon d'origine — pas de
 *   champ "détail" séparé ;
 * - le filtre par chapitre n'apparaît que si les cartes viennent de
 *   plusieurs leçons (sur une page de leçon, il n'y en a qu'une) ;
 * - les couleurs passent par les tokens du site, pour suivre le thème
 *   et le mode sombre.
 */
export default function FlashcardsHistoireGeo({
  cartes,
}: FlashcardsHistoireGeoProps) {
  const lecons = useMemo(
    () => [...new Set(cartes.map((carte) => carte.leconTitre))],
    [cartes],
  );
  const [lecon, setLecon] = useState("Tout");
  const [ordre, setOrdre] = useState(() => cartes.map((_, index) => index));
  const [index, setIndex] = useState(0);
  const [retournee, setRetournee] = useState(false);
  const [resultats, setResultats] = useState<Record<number, Resultat>>({});

  const paquet = useMemo(
    () =>
      ordre
        .map((rang) => ({ rang, carte: cartes[rang] }))
        .filter(({ carte }) => lecon === "Tout" || carte.leconTitre === lecon),
    [cartes, ordre, lecon],
  );

  const fini = index >= paquet.length;
  const courante = paquet[index];
  const nbSu = paquet.filter(({ rang }) => resultats[rang] === "su").length;
  const nbRevoir = paquet.filter(
    ({ rang }) => resultats[rang] === "revoir",
  ).length;

  function repondre(valeur: Resultat) {
    if (!courante) return;
    setResultats({ ...resultats, [courante.rang]: valeur });
    setRetournee(false);
    setIndex(index + 1);
  }

  function recommencer() {
    setIndex(0);
    setRetournee(false);
    setResultats({});
  }

  function melanger() {
    const copie = [...ordre];
    for (let i = copie.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copie[i], copie[j]] = [copie[j], copie[i]];
    }
    setOrdre(copie);
    recommencer();
  }

  function revoirErreurs() {
    const erreurs = paquet
      .filter(({ rang }) => resultats[rang] === "revoir")
      .map(({ rang }) => rang);
    setOrdre([...erreurs, ...ordre.filter((rang) => !erreurs.includes(rang))]);
    setLecon("Tout");
    recommencer();
  }

  // Espace retourne la carte, ← et → répondent une fois retournée.
  useEffect(() => {
    const auClavier = (evenement: KeyboardEvent) => {
      if (fini) return;
      if (evenement.code === "Space") {
        evenement.preventDefault();
        setRetournee((valeur) => !valeur);
      }
      if (retournee && evenement.key === "ArrowRight") repondre("su");
      if (retournee && evenement.key === "ArrowLeft") repondre("revoir");
    };
    window.addEventListener("keydown", auClavier);
    return () => window.removeEventListener("keydown", auClavier);
  });

  if (cartes.length === 0) return null;

  return (
    <div className="flex w-full max-w-3xl flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm text-muted-foreground">
          {paquet.length} carte{paquet.length > 1 ? "s" : ""} dans ce paquet
        </span>
        <button
          type="button"
          onClick={melanger}
          className="rounded-[12px] border border-border bg-surface px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
        >
          Mélanger
        </button>
      </div>

      {lecons.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {["Tout", ...lecons].map((choix) => (
            <button
              key={choix}
              type="button"
              onClick={() => {
                setLecon(choix);
                setIndex(0);
                setRetournee(false);
              }}
              className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                lecon === choix
                  ? "bg-ink text-white"
                  : "bg-surface text-muted-foreground ring-1 ring-border hover:ring-border-strong"
              }`}
            >
              {choix}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3 text-sm">
        <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-surface-muted">
          <div
            className="bg-validation"
            style={{ width: `${(nbSu / paquet.length) * 100}%` }}
          />
          <div
            className="bg-erreur"
            style={{ width: `${(nbRevoir / paquet.length) * 100}%` }}
          />
        </div>
        <span className="tabular-nums text-muted-foreground">
          {Math.min(index + 1, paquet.length)}/{paquet.length}
        </span>
      </div>

      {fini ? (
        <section className="rounded-[24px] border border-border bg-surface p-10 text-center shadow-sm">
          <p className="font-serif text-5xl font-bold tabular-nums text-ink">
            {nbSu}/{paquet.length}
          </p>
          <p className="mt-2 text-muted-foreground">
            cartes sues du premier coup
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {nbRevoir > 0 && (
              <button
                type="button"
                onClick={revoirErreurs}
                className="rounded-[12px] bg-primary px-5 py-2.5 font-semibold text-white shadow-sm transition-all hover:-translate-y-px"
              >
                Revoir mes {nbRevoir} erreur{nbRevoir > 1 ? "s" : ""}
              </button>
            )}
            <button
              type="button"
              onClick={recommencer}
              className="rounded-[12px] border border-border px-5 py-2.5 font-semibold text-ink transition-colors hover:bg-surface-muted"
            >
              Recommencer
            </button>
          </div>
        </section>
      ) : (
        courante && (
          <>
            <button
              type="button"
              onClick={() => setRetournee(!retournee)}
              aria-label="Retourner la carte"
              className="block w-full [perspective:1200px]"
            >
              <div
                className={`relative h-80 w-full transition-transform duration-500 [transform-style:preserve-3d] ${
                  retournee ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                <div className="absolute inset-0 flex flex-col rounded-[24px] border border-border bg-surface p-6 shadow-sm [backface-visibility:hidden]">
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${COULEUR_CATEGORIE[categorieDe(courante.carte.reponse)]} 15%, var(--color-surface))`,
                        color:
                          COULEUR_CATEGORIE[
                            categorieDe(courante.carte.reponse)
                          ],
                      }}
                    >
                      {categorieDe(courante.carte.reponse)}
                    </span>
                    <span
                      dir="rtl"
                      className="font-arabe max-w-[55%] truncate text-xs text-subtle-foreground"
                    >
                      {courante.carte.leconTitre}
                    </span>
                  </div>

                  <p
                    dir="auto"
                    className="font-arabe flex flex-1 items-center justify-center overflow-y-auto px-2 text-center text-[26px] leading-snug font-bold text-ink"
                  >
                    {courante.carte.question}
                  </p>
                  <p className="text-center text-sm text-subtle-foreground">
                    Clique ou appuie sur Espace pour retourner
                  </p>
                </div>

                <div
                  className="absolute inset-0 flex flex-col rounded-[24px] p-6 text-white shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)]"
                  style={{ backgroundColor: "#131b33" }}
                >
                  <p
                    dir="auto"
                    className="font-arabe truncate text-sm text-white/60"
                  >
                    {courante.carte.question}
                  </p>
                  <div className="flex flex-1 items-center justify-center overflow-y-auto text-center">
                    <p
                      dir="auto"
                      className="font-arabe text-[24px] leading-relaxed font-bold"
                      style={{ color: "var(--color-matiere-histoire-geo)" }}
                    >
                      {courante.carte.reponse}
                    </p>
                  </div>
                  <p className="text-center text-xs text-white/50">
                    ← à revoir · je savais →
                  </p>
                </div>
              </div>
            </button>

            <div
              className={`grid grid-cols-2 gap-3 transition-opacity ${
                retournee ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <button
                type="button"
                onClick={() => repondre("revoir")}
                className="rounded-[18px] bg-erreur/10 py-4 font-semibold text-erreur ring-1 ring-erreur/25 transition-colors hover:bg-erreur/15"
              >
                À revoir{" "}
                <span className="ml-1 text-xs font-normal opacity-70">←</span>
              </button>
              <button
                type="button"
                onClick={() => repondre("su")}
                className="rounded-[18px] bg-validation/10 py-4 font-semibold text-validation ring-1 ring-validation/25 transition-colors hover:bg-validation/15"
              >
                Je savais{" "}
                <span className="ml-1 text-xs font-normal opacity-70">→</span>
              </button>
            </div>
          </>
        )
      )}
    </div>
  );
}
