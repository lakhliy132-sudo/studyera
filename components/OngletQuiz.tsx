"use client";

import { useMemo, useState } from "react";

import { IconeCoche, IconeQuiz } from "@/components/icones";
import type { QuestionQuiz } from "@/lib/quizBoiteAMerveilles";
import type { Chapitre } from "@/types/base-de-donnees";

interface OngletQuizProps {
  chapitres: Chapitre[];
  /** Questions du quiz, groupées par numéro de chapitre — vide pour une
   * œuvre qui n'a pas encore de quiz saisi (voir `lib/quizBoiteAMerveilles.ts`). */
  questionsParChapitre: Record<number, QuestionQuiz[]>;
}

/**
 * Contenu de l'onglet "Quiz" de /oeuvres/[slug] — organisé chapitre par
 * chapitre, demandé explicitement par l'utilisateur en deux temps :
 * d'abord "tu peux le quiz tu le fais chap par chap faire 5 qst dans
 * chaque chapter" (5 questions/chapitre), puis "15 qst dans chaque
 * chapter" (15 questions/chapitre, voir `lib/quizBoiteAMerveilles.ts`).
 * Le nombre de questions par chapitre n'est pas codé en dur ici — le
 * badge de score et le rendu s'adaptent à `questionsParChapitre[n].length`,
 * quel que soit ce nombre.
 *
 * Une pastille par chapitre (même style que la barre d'onglets/les
 * pastilles de rôle) sélectionne les questions affichées ; un badge
 * "x / total" apparaît sous une pastille dès qu'on a répondu à au
 * moins une question de ce chapitre. Composant Client : sélection de
 * chapitre et réponses sont de l'état d'interface pur, jamais
 * persisté (voir la réserve dans `lib/quizBoiteAMerveilles.ts` sur
 * l'absence de table dédiée) — perdu si la page est rechargée.
 *
 * Une réponse par question, définitive une fois cliquée : bonne
 * réponse en vert `--color-validation`, mauvaise en rouge
 * `--color-erreur`/`bg-[#FDF0EF]` — mêmes couleurs que le correcteur de
 * copie (`OngletSujets`), jamais utilisées pour la navigation normale.
 */
export default function OngletQuiz({ chapitres, questionsParChapitre }: OngletQuizProps) {
  const chapitresAvecQuiz = chapitres.filter((c) => (questionsParChapitre[c.numero]?.length ?? 0) > 0);

  const [chapitreSelectionne, setChapitreSelectionne] = useState<number | null>(
    chapitresAvecQuiz[0]?.numero ?? null,
  );
  const [reponses, setReponses] = useState<Record<string, number>>({});

  const questions = chapitreSelectionne !== null ? (questionsParChapitre[chapitreSelectionne] ?? []) : [];

  const scoreParChapitre = useMemo(() => {
    const scores = new Map<number, { repondues: number; correctes: number; total: number }>();
    for (const c of chapitresAvecQuiz) {
      const qs = questionsParChapitre[c.numero] ?? [];
      let repondues = 0;
      let correctes = 0;
      for (const q of qs) {
        if (q.id in reponses) {
          repondues += 1;
          if (reponses[q.id] === q.reponseCorrecte) correctes += 1;
        }
      }
      scores.set(c.numero, { repondues, correctes, total: qs.length });
    }
    return scores;
  }, [chapitresAvecQuiz, questionsParChapitre, reponses]);

  function choisir(questionId: string, indexChoix: number) {
    setReponses((precedent) => {
      if (questionId in precedent) return precedent; // réponse déjà figée
      return { ...precedent, [questionId]: indexChoix };
    });
  }

  const scoreDuChapitre = chapitreSelectionne !== null ? scoreParChapitre.get(chapitreSelectionne) : undefined;
  const chapitreActif = chapitresAvecQuiz.find((c) => c.numero === chapitreSelectionne);

  function recommencerChapitre() {
    if (chapitreSelectionne === null) return;
    setReponses((precedent) => {
      const suivant = { ...precedent };
      for (const q of questionsParChapitre[chapitreSelectionne] ?? []) delete suivant[q.id];
      return suivant;
    });
  }

  return (
    <section className="rounded-lg border border-border bg-surface p-9 pb-10 shadow-sm">
      <div className="mb-2 flex items-center justify-center gap-3.5 text-primary">
        <IconeQuiz className="size-[30px]" />
        <h2 className="font-serif text-[31px] font-bold tracking-tight text-ink">Quiz</h2>
      </div>
      <p className="mb-[30px] text-center text-base text-muted-foreground">
        Teste ta mémoire de l&apos;œuvre, chapitre par chapitre.
      </p>

      {chapitresAvecQuiz.length === 0 || chapitreSelectionne === null ? (
        <p className="text-center text-muted-foreground">Bientôt disponible.</p>
      ) : (
        <>
          <ul className="mb-8 flex flex-wrap justify-center gap-2">
            {chapitresAvecQuiz.map((c) => {
              const actif = c.numero === chapitreSelectionne;
              const score = scoreParChapitre.get(c.numero);
              return (
                <li key={c.numero}>
                  <button
                    type="button"
                    onClick={() => setChapitreSelectionne(c.numero)}
                    className={
                      actif
                        ? "flex flex-col items-center gap-0.5 rounded-[10px] bg-primary px-4 py-2 text-sm font-bold whitespace-nowrap text-white shadow-[0_2px_10px_rgba(29,78,216,0.22)]"
                        : "flex flex-col items-center gap-0.5 rounded-[10px] border border-border px-4 py-2 text-sm font-medium whitespace-nowrap text-foreground transition-colors hover:border-primary hover:bg-primary-tint hover:text-primary"
                    }
                  >
                    Ch. {c.numero}
                    {score && score.repondues > 0 && (
                      <span className={actif ? "text-xs font-semibold text-white/85" : "text-xs font-semibold text-muted-foreground"}>
                        {score.correctes} / {score.total}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mb-6 flex items-center justify-center gap-4">
            <h3 className="font-serif text-xl font-bold text-ink">
              Chapitre {chapitreSelectionne}
              {chapitreActif ? ` — ${chapitreActif.titre_fr}` : ""}
            </h3>
            {scoreDuChapitre && scoreDuChapitre.repondues > 0 && (
              <button
                type="button"
                onClick={recommencerChapitre}
                className="text-sm font-semibold text-muted-foreground underline decoration-dotted underline-offset-4 transition-colors hover:text-primary"
              >
                Recommencer ce chapitre
              </button>
            )}
          </div>

          <ol className="flex flex-col gap-5">
            {questions.map((q, indexQuestion) => {
              const reponseDonnee = reponses[q.id];
              const aRepondu = reponseDonnee !== undefined;
              const estCorrect = reponseDonnee === q.reponseCorrecte;

              return (
                <li
                  key={q.id}
                  className="rounded-[20px] border border-border bg-surface p-[26px] shadow-sm"
                >
                  <p className="mb-4 flex gap-3 font-serif text-lg font-bold text-ink">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-tint text-sm text-primary">
                      {indexQuestion + 1}
                    </span>
                    <span className="pt-0.5">{q.question}</span>
                  </p>

                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {q.choix.map((choix, indexChoix) => {
                      const estLaBonneReponse = indexChoix === q.reponseCorrecte;
                      const estChoisi = reponseDonnee === indexChoix;

                      let classe =
                        "flex items-center gap-2.5 rounded-[10px] border px-4 py-3 text-left text-sm font-medium transition-all";
                      if (!aRepondu) {
                        classe += " border-border text-foreground hover:border-primary hover:bg-primary-tint";
                      } else if (estLaBonneReponse) {
                        classe += " border-validation bg-validation-tint text-validation";
                      } else if (estChoisi) {
                        classe += " border-erreur bg-[#FDF0EF] text-erreur";
                      } else {
                        classe += " border-border text-muted-foreground opacity-60";
                      }

                      return (
                        <button
                          key={choix}
                          type="button"
                          disabled={aRepondu}
                          onClick={() => choisir(q.id, indexChoix)}
                          className={classe}
                        >
                          {aRepondu && estLaBonneReponse && (
                            <IconeCoche className="size-4 shrink-0" />
                          )}
                          {choix}
                        </button>
                      );
                    })}
                  </div>

                  {aRepondu && (
                    <p
                      className={
                        estCorrect
                          ? "mt-4 rounded-md bg-validation-tint p-3.5 text-sm text-validation"
                          : "mt-4 rounded-md bg-[#FDF0EF] p-3.5 text-sm text-erreur"
                      }
                    >
                      <span className="font-bold">{estCorrect ? "Bonne réponse ! " : "Pas tout à fait. "}</span>
                      {q.explication}
                    </p>
                  )}
                </li>
              );
            })}
          </ol>

          {scoreDuChapitre && scoreDuChapitre.repondues === scoreDuChapitre.total && (
            <p className="mt-8 text-center font-serif text-xl font-bold text-ink">
              Chapitre {chapitreSelectionne} terminé — {scoreDuChapitre.correctes} / {scoreDuChapitre.total} bonnes
              réponses.
            </p>
          )}
        </>
      )}
    </section>
  );
}
