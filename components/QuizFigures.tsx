"use client";

import { useState } from "react";

import type { QuestionQuiz } from "@/lib/exercices-figures";

const LETTRES = ["A", "B", "C", "D"] as const;

/**
 * Quiz générique (QCM) des leçons de figures de style : questions à
 * choix multiples, correction immédiate, score en temps réel.
 */
export default function QuizFigures({ questions }: { questions: QuestionQuiz[] }) {
  const [reponses, setReponses] = useState<Record<number, number>>({});
  const [corriges, setCorriges] = useState<Record<number, boolean>>({});
  const score = Object.values(corriges).filter(Boolean).length;

  function repondre(index: number, choix: number) {
    if (corriges[index] !== undefined) return;
    setReponses((p) => ({ ...p, [index]: choix }));
    setCorriges((p) => ({ ...p, [index]: choix === questions[index].reponse }));
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between rounded-[10px] border border-border bg-background px-5 py-3.5">
        <p className="text-sm font-semibold text-foreground">
          Question {Object.keys(corriges).length} / {questions.length} répondue
          {Object.keys(corriges).length > 1 ? "s" : ""}
        </p>
        <p className="text-sm font-bold text-primary">
          Score : {score} / {questions.length}
        </p>
      </div>

      <ol className="flex flex-col gap-4">
        {questions.map((question, index) => {
          const choix = reponses[index];
          const correct = corriges[index];
          return (
            <li key={index} className="rounded-[14px] border border-border bg-surface p-5 shadow-sm">
              <p className="mb-1 text-xs font-bold tracking-wide text-subtle-foreground uppercase">
                Question {index + 1}
              </p>
              <p className="mb-4 font-lecture text-base leading-relaxed text-foreground">
                {question.question}
              </p>
              <div className="flex flex-col gap-2.5">
                {question.options.map((option, oi) => {
                  const estChoisi = choix === oi;
                  const estBonne = question.reponse === oi;
                  const estRevele = correct !== undefined;
                  let classe =
                    "flex items-center gap-3 rounded-[10px] border px-4 py-3 text-left text-sm font-medium transition-colors";
                  if (!estRevele) classe += " border-border bg-background text-foreground hover:border-primary hover:bg-surface";
                  else if (estBonne) classe += " border-[#0F6E4C] bg-[#DFF3EA] text-[#0F6E4C] font-semibold";
                  else if (estChoisi) classe += " border-[#C2372F] bg-[#FDF0EF] text-[#C2372F]";
                  else classe += " border-border bg-background text-subtle-foreground opacity-60";
                  return (
                    <button
                      key={oi}
                      type="button"
                      disabled={estRevele}
                      onClick={() => repondre(index, oi)}
                      className={classe}
                    >
                      <span
                        className={
                          "flex size-7 shrink-0 items-center justify-center rounded-full font-serif text-sm font-bold " +
                          (estRevele && estBonne ? "bg-[#0F6E4C] text-white" : "bg-primary-tint text-primary")
                        }
                      >
                        {LETTRES[oi]}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>
              {correct !== undefined && (
                <p className={correct ? "mt-3 text-sm font-semibold text-[#0F6E4C]" : "mt-3 text-sm font-semibold text-[#C2372F]"}>
                  {correct
                    ? "Bonne réponse ✓"
                    : `Non — bonne réponse : ${LETTRES[question.reponse]} · ${question.options[question.reponse]}`}
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
