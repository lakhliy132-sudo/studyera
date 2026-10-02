"use client";

import { useMemo, useState } from "react";

import { IconeLivreOuvert, IconeOeil, IconeRecherche } from "@/components/icones";
import { libelleChapitreCourt, libelleUniteChapitre } from "@/lib/uniteChapitre";
import type { Chapitre, EntreeLexique } from "@/types/base-de-donnees";

interface OngletLexiqueProps {
  slug: string;
  entrees: EntreeLexique[];
  /** Chapitre par id de chapitre — pour le badge de chaque carte
   * ("CH. 4" ou, pour Antigone, "SCÈNE 3"/"PROLOGUE" en majuscules,
   * voir `libelleChapitreCourt` dans lib/uniteChapitre.ts), sans
   * requête dédiée (même mécanisme que dans OngletPersonnages). */
  chapitreParId: Map<string, Chapitre>;
}

/** Minuscules, sans accents : "boite" doit retrouver "boîte" en
 * recherche, pas seulement une correspondance caractère pour
 * caractère — repéré en testant la recherche avant de considérer
 * l'onglet terminé (une recherche non trouvée sur un mot qui existe
 * bel et bien dans le lexique aurait été un vrai bug silencieux). */
function normaliser(texte: string): string {
  return texte
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
    .toLowerCase();
}

/**
 * Contenu de l'onglet "Lexique" de /oeuvres/[slug] : tous les mots de
 * vocabulaire de l'œuvre, tous chapitres confondus (contrairement à
 * `LexiqueChapitre`, qui n'affiche que ceux d'un chapitre précis).
 *
 * Design et interactions repris du fichier de référence fourni par
 * l'utilisateur ("Rubriques — Le Dernier Jour d'un Condamné") : carte
 * mot/nature/définition à gauche, traduction arabe sur fond crème à
 * droite avec un badge de chapitre (adapté par œuvre — "CH. N" ou,
 * pour Antigone, le titre de la scène — voir lib/uniteChapitre.ts) ;
 * recherche par mot ou définition ;
 * "Mode révision" qui floute les traductions par défaut (révélées au
 * survol, ou définitivement par clic — utile pour s'entraîner à
 * deviner le sens avant de vérifier). Composant Client : recherche et
 * mode révision sont un état local, pas de round-trip serveur pour un
 * simple filtrage/flou.
 *
 * Même accent doré local (pas de token global, voir OngletPersonnages)
 * que le reste des cartes issues de cette maquette de référence.
 */
export default function OngletLexique({ slug, entrees, chapitreParId }: OngletLexiqueProps) {
  // "SCÈNE N" pour Antigone plutôt que "CH. N" — voir lib/uniteChapitre.ts.
  const unite = libelleUniteChapitre(slug);
  const [recherche, setRecherche] = useState("");
  const [modeRevision, setModeRevision] = useState(false);
  const [motsReveles, setMotsReveles] = useState<Set<string>>(new Set());

  const filtrees = useMemo(() => {
    const q = normaliser(recherche);
    if (!q) return entrees;
    return entrees.filter(
      (e) => normaliser(e.mot).includes(q) || normaliser(e.note ?? "").includes(q),
    );
  }, [recherche, entrees]);

  function basculerRevele(id: string) {
    setMotsReveles((precedent) => {
      const suivant = new Set(precedent);
      if (suivant.has(id)) suivant.delete(id);
      else suivant.add(id);
      return suivant;
    });
  }

  return (
    <section className="rounded-lg border border-border bg-surface p-5 sm:p-9 pb-10 shadow-sm">
      <div className="mb-2 flex items-center justify-center gap-3.5 text-primary">
        <IconeLivreOuvert className="size-[30px]" />
        <h2 className="font-serif text-[31px] font-bold tracking-tight text-ink">
          Le lexique de l&apos;œuvre
        </h2>
      </div>
      <p className="mb-[30px] text-center text-base text-muted-foreground">
        Chaque mot difficile avec son sens en arabe, sa nature et son emploi dans le texte.
      </p>

      {entrees.length === 0 ? (
        <p className="text-center text-muted-foreground">Bientôt disponible.</p>
      ) : (
        <>
          <div className="mb-[22px] flex flex-wrap items-center justify-center gap-3">
            <div className="relative min-w-[230px] max-w-[400px] flex-1">
              <IconeRecherche className="pointer-events-none absolute top-1/2 left-4 size-[19px] -translate-y-1/2 text-subtle-foreground" />
              <input
                type="search"
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
                placeholder="Chercher un mot…"
                aria-label="Chercher un mot"
                className="w-full rounded-[10px] border border-border bg-surface py-3.5 pr-4 pl-[46px] text-[15.5px] text-foreground transition-colors focus:border-primary focus:ring-3 focus:ring-primary-tint focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => setModeRevision((v) => !v)}
              aria-pressed={modeRevision}
              className={
                modeRevision
                  ? "flex items-center gap-2.5 rounded-[10px] border border-[#E8D5AC] bg-[#FAF3E4] px-5 py-3.5 text-sm font-bold text-[#B08636] transition-colors"
                  : "flex items-center gap-2.5 rounded-[10px] border border-border bg-surface px-5 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:border-border-strong"
              }
            >
              <IconeOeil className="size-[18px]" />
              Mode révision
            </button>
          </div>

          {filtrees.length === 0 ? (
            <p className="rounded-md border border-dashed border-border-strong bg-background p-12 text-center text-muted-foreground">
              Aucun mot ne correspond à ta recherche.
            </p>
          ) : (
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-4">
              {filtrees.map((entree) => {
                const chapitreDeLEntree = chapitreParId.get(entree.chapitre_id);
                const revele = motsReveles.has(entree.id);
                const flouter = modeRevision && !revele;

                return (
                  <li
                    key={entree.id}
                    className="group flex overflow-hidden rounded-md border border-border bg-surface shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#E8D5AC] hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
                  >
                    <div className="min-w-0 flex-1 p-5">
                      <p className="inline-block border-b-2 border-dotted border-[#B08636] pb-0.5 font-serif text-xl font-bold text-ink">
                        {entree.mot}
                      </p>
                      {entree.nature && (
                        <span className="mt-2.5 block text-[11px] font-semibold tracking-wide text-subtle-foreground uppercase">
                          {entree.nature}
                        </span>
                      )}
                      {entree.note && (
                        <p className="mt-3 font-lecture text-sm leading-relaxed text-muted-foreground">
                          {entree.note}
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => modeRevision && basculerRevele(entree.id)}
                      aria-label={
                        modeRevision
                          ? revele
                            ? `Masquer la traduction de « ${entree.mot} »`
                            : `Révéler la traduction de « ${entree.mot} »`
                          : undefined
                      }
                      className="relative flex w-[132px] shrink-0 flex-col items-center justify-center gap-1 border-l border-[#E8D5AC] bg-[#FAF7F0] p-3 text-center"
                    >
                      {chapitreDeLEntree !== undefined && (
                        <span className="absolute top-2 right-2.5 text-[10px] font-bold text-subtle-foreground">
                          {libelleChapitreCourt(chapitreDeLEntree, unite)}
                        </span>
                      )}
                      {entree.sens_ar && (
                        <span
                          dir="rtl"
                          lang="ar"
                          className={
                            flouter
                              ? "font-arabe text-lg leading-[1.9] font-medium text-ink opacity-55 blur-[7px] transition-all group-hover:opacity-100 group-hover:blur-none"
                              : "font-arabe text-lg leading-[1.9] font-medium text-ink transition-all"
                          }
                        >
                          {entree.sens_ar}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </section>
  );
}
