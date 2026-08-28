"use client";

import { useMemo, useState } from "react";

import { IconeCoche, IconeQuiz } from "@/components/icones";
import type { QuestionQuiz } from "@/lib/quizBoiteAMerveilles";

interface OngletQuizProps {
  questions: QuestionQuiz[];
}

/**
 * Contenu de l'onglet "Quiz" de /oeuvres/[slug] — demandé explicitement
 * par l'utilisateur ("ajoute... une partie de quiz dans la barre").
 *
 * Composant Client : la sélection d'une réponse, le score en direct et
 * le bouton "Recommencer" sont de l'état d'interface pur, jamais
 * persisté (pas de table dédiée en base, voir le commentaire en tête de
 * `lib/quizBoiteAMerveilles.ts`) — perdu si la page est rechargée,
 * assumé comme un quiz d'entraînement rapide plutôt qu'un test noté.
 *
 * Une réponse par question, définitive une fois cliquée (pas de
 * changement d'avis) : la bonne réponse et l'explication s'affichent
 * immédiatement, avec le vert `--color-validation` si la réponse était
 * juste et le rouge `--color-erreur` si elle était fausse — même
 * logique de couleurs que le correcteur de copie (`OngletSujets`),
 * jamais utilisée ailleurs dans la navigation du site.
 */
export default function OngletQuiz({ questions }: OngletQuizProps) {
  const [reponses, setReponses] = useState<Record<string, number>>({});

  const nombreRepondues = Object.keys(reponses).length;
  const score = useMemo(
    () =>
      questions.reduce(
        (total, q) => total + (reponses[q.id] === q.reponseCorrecte ? 1 : 0),
        0,
      ),
    [questions, reponses],
  );
  const termine = nombreRepondues === questions.length && questions.length > 0;

  function choisir(questionId: string, indexChoix: number) {
    setReponses((precedent) => {
      if (questionId in precedent) return precedent; // réponse déjà figée
      return { ...precedent, [questionId]: indexChoix };
    });
  }

  function recommencer() {
    setReponses({});
  }

  return (
    <section className="rounded-lg border border-border bg-surface p-9 pb-10 shadow-sm">
      <div className="mb-2 flex items-center justify-center gap-3.5 text-primary">
        <IconeQuiz className="size-[30px]" />
        <h2 className="font-serif text-[31px] font-bold tracking-tight text-ink">Quiz</h2>
      </div>
      <p className="mb-[30px] text-center text-base text-muted-foreground">
        Teste ta mémoire de l&apos;œuvre, une question à la fois.
      </p>

      {questions.length === 0 ? (
        <p className="text-center text-muted-foreground">Bientôt disponible.</p>
      ) : (
        <>
          <div className="mx-auto mb-8 flex w-fit items-center gap-4 rounded-full border border-border bg-surface-muted px-6 py-3">
            <span className="text-sm font-semibold text-foreground">
              {nombreRepondues} / {questions.length} question{questions.length > 1 ? "s" : ""}
            </span>
            <span
              className={
                termine
                  ? "rounded-full bg-validation-tint px-3 py-1 text-sm font-bold text-validation"
                  : "rounded-full bg-primary-tint px-3 py-1 text-sm font-bold text-primary"
              }
            >
              Score : {score} / {questions.length}
            </span>
            {nombreRepondues > 0 && (
              <button
                type="button"
                onClick={recommencer}
                className="text-sm font-semibold text-muted-foreground underline decoration-dotted underline-offset-4 transition-colors hover:text-primary"
              >
                Recommencer
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

          {termine && (
            <p className="mt-8 text-center font-serif text-xl font-bold text-ink">
              Quiz terminé — {score} / {questions.length} bonnes réponses.
            </p>
          )}
        </>
      )}
    </section>
  );
}
