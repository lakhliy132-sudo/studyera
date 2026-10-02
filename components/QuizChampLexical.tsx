"use client";

import { useState } from "react";


interface Question {
  question: string;
  options: string[];
  reponse: number;
}

const LETTRES = ["A", "B", "C", "D"] as const;

const QUESTIONS: Question[] = [
  {
    question: "Qu'est-ce qu'un champ lexical ?",
    options: [
      "L'ensemble des mots appartenant à un même thème ou une même notion",
      "Une figure de style",
      "Un type de phrase",
      "Une règle d'orthographe",
    ],
    reponse: 0,
  },
  {
    question: "À quel champ lexical appartiennent : « arôme, parfum, sentir, flairer » ?",
    options: ["L'odorat", "Le goût", "La vue", "Le toucher"],
    reponse: 0,
  },
  {
    question: "Trouvez l'intrus : « montagnes, rivière, arbres, ordinateur ».",
    options: ["montagnes", "rivière", "arbres", "ordinateur"],
    reponse: 3,
  },
  {
    question: "« amour, jalousie, attachement, haine » appartiennent au champ lexical de…",
    options: ["La nature", "Les sentiments", "La nourriture", "Le voyage"],
    reponse: 1,
  },
  {
    question: "Trouvez l'intrus : « sentir, arôme, odeurs, murmure ».",
    options: ["sentir", "arôme", "odeurs", "murmure"],
    reponse: 3,
  },
  {
    question: "« feuilles, tronc, branche, verdoyant » appartiennent au champ lexical de…",
    options: ["La mer", "La végétation", "La ville", "Le corps"],
    reponse: 1,
  },
  {
    question: "« le visage, les mains, le dos, la tête » appartiennent au champ lexical de…",
    options: ["La nature", "Le corps", "Les vêtements", "La maison"],
    reponse: 1,
  },
  {
    question: "Trouvez l'intrus : « compact, dense, nombreux, successif ».",
    options: ["compact", "dense", "nombreux", "successif"],
    reponse: 3,
  },
  {
    question: "« poulets, œufs, beurre, huile, olives » appartiennent au champ lexical de…",
    options: ["La nourriture", "La nature", "Le commerce", "La fête"],
    reponse: 0,
  },
  {
    question: "« gueuse, dégoûtante, pouilleuse, grossière » appartiennent au champ lexical de…",
    options: ["L'insulte", "La peur", "La joie", "La tristesse"],
    reponse: 0,
  },
];

/**
 * Quiz interactif de la leçon "Le champ lexical" : questions à choix
 * multiples (4 options), correction immédiate, score en temps réel.
 */
export default function QuizChampLexical() {
  const [reponses, setReponses] = useState<Record<number, number>>({});
  const [corriges, setCorriges] = useState<Record<number, boolean>>({});

  const score = Object.values(corriges).filter(Boolean).length;

  function repondre(index: number, choix: number) {
    if (corriges[index] !== undefined) return;
    setReponses((p) => ({ ...p, [index]: choix }));
    setCorriges((p) => ({ ...p, [index]: choix === QUESTIONS[index].reponse }));
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between rounded-[10px] border border-border bg-background px-5 py-3.5">
        <p className="text-sm font-semibold text-foreground">
          Question {Object.keys(corriges).length} / {QUESTIONS.length} répondue
          {Object.keys(corriges).length > 1 ? "s" : ""}
        </p>
        <p className="text-sm font-bold text-primary">
          Score : {score} / {QUESTIONS.length}
        </p>
      </div>

      <ol className="flex flex-col gap-4">
        {QUESTIONS.map((question, index) => {
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
                {question.options.map((option, optionIndex) => {
                  const estChoisi = choix === optionIndex;
                  const estBonne = question.reponse === optionIndex;
                  const estRevele = correct !== undefined;

                  let classe =
                    "flex items-center gap-3 rounded-[10px] border px-4 py-3 text-left text-sm font-medium transition-colors";
                  if (!estRevele) {
                    classe += " border-border bg-background text-foreground hover:border-primary hover:bg-surface";
                  } else if (estBonne) {
                    classe += " border-[#0F6E4C] bg-[#DFF3EA] text-[#0F6E4C] font-semibold";
                  } else if (estChoisi) {
                    classe += " border-[#C2372F] bg-[#FDF0EF] text-[#C2372F]";
                  } else {
                    classe += " border-border bg-background text-subtle-foreground opacity-60";
                  }

                  return (
                    <button
                      key={optionIndex}
                      type="button"
                      disabled={estRevele}
                      onClick={() => repondre(index, optionIndex)}
                      className={classe}
                    >
                      <span
                        className={
                          "flex size-7 shrink-0 items-center justify-center rounded-full font-serif text-sm font-bold " +
                          (estRevele && estBonne
                            ? "bg-[#0F6E4C] text-white"
                            : "bg-primary-tint text-primary")
                        }
                      >
                        {LETTRES[optionIndex]}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>

              {correct !== undefined && (
                <p
                  className={
                    correct
                      ? "mt-3 text-sm font-semibold text-[#0F6E4C]"
                      : "mt-3 text-sm font-semibold text-[#C2372F]"
                  }
                >
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
