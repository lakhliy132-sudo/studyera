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
    question: "Le discours rapporté est une forme de narration qui permet :",
    options: [
      "d'énoncer des paroles prononcées",
      "de décrire un paysage",
      "de raconter une action",
      "d'exprimer des sentiments",
    ],
    reponse: 0,
  },
  {
    question: "Combien de formes peut prendre le discours rapporté ?",
    options: ["2", "3", "4", "5"],
    reponse: 2,
  },
  {
    question: "Quels sont les temps du discours direct ?",
    options: [
      "Présent, passé composé, futur simple, impératif",
      "Imparfait, plus-que-parfait, conditionnel",
      "Passé simple, imparfait, futur antérieur",
      "Subjonctif, conditionnel, impératif",
    ],
    reponse: 0,
  },
  {
    question: "Au discours indirect, le présent de l'indicatif devient :",
    options: ["L'imparfait", "Le passé composé", "Le plus-que-parfait", "Le conditionnel"],
    reponse: 0,
  },
  {
    question: "Au discours indirect, le passé composé devient :",
    options: ["L'imparfait", "Le plus-que-parfait", "Le passé simple", "Le présent"],
    reponse: 1,
  },
  {
    question: "Au discours indirect, le futur simple devient :",
    options: [
      "Le conditionnel présent",
      "Le futur antérieur",
      "L'imparfait",
      "Le présent",
    ],
    reponse: 0,
  },
  {
    question: "Au discours indirect, l'impératif devient :",
    options: ["De + infinitif", "Que + subjonctif", "L'imparfait", "Le conditionnel"],
    reponse: 0,
  },
  {
    question: "Au discours indirect, « hier » devient :",
    options: ["La veille", "Le lendemain", "Ce jour-là", "Le surlendemain"],
    reponse: 0,
  },
  {
    question: "Au discours indirect, « demain » devient :",
    options: ["La veille", "Le lendemain", "Ce jour-là", "Ce soir-là"],
    reponse: 1,
  },
  {
    question: "Au discours indirect, « ici » devient :",
    options: ["Là-bas (ou là)", "Ici-même", "Ailleurs", "En bas"],
    reponse: 0,
  },
  {
    question: "Une question inversée au discours direct est introduite au discours indirect par :",
    options: ["« si »", "« que »", "« ce que »", "« qui »"],
    reponse: 0,
  },
  {
    question: "« Est-ce que » au discours direct devient au discours indirect :",
    options: ["« si »", "« que »", "« ce que »", "« ce qui »"],
    reponse: 0,
  },
  {
    question: "« Qu'est-ce que » devient au discours indirect :",
    options: ["« ce que »", "« ce qui »", "« si »", "« que »"],
    reponse: 0,
  },
  {
    question: "« Qu'est-ce qui » devient au discours indirect :",
    options: ["« ce qui »", "« ce que »", "« si »", "« qui »"],
    reponse: 0,
  },
  {
    question: "Le discours indirect libre se caractérise par :",
    options: [
      "L'absence du verbe introducteur",
      "La présence de guillemets",
      "L'usage du présent",
      "La présence de deux points",
    ],
    reponse: 0,
  },
  {
    question: "Transformez : « Il a dit : “Je viens demain.” »",
    options: [
      "Il a dit qu'il venait le lendemain.",
      "Il a dit qu'il viendra le lendemain.",
      "Il a dit qu'il venait demain.",
      "Il a dit qu'il vient demain.",
    ],
    reponse: 0,
  },
  {
    question: "Transformez : « Elle m'a demandé : “Quand viens-tu ?” »",
    options: [
      "Elle m'a demandé quand je venais.",
      "Elle m'a demandé quand je viens.",
      "Elle m'a demandé quand viens-tu.",
      "Elle m'a demandé que je vienne.",
    ],
    reponse: 0,
  },
  {
    question: "Au discours indirect, « le mois dernier » devient :",
    options: ["Le mois précédent", "Le mois suivant", "Ce mois-là", "Le mois prochain"],
    reponse: 0,
  },
  {
    question: "Au discours indirect, « le lendemain » devient :",
    options: ["Le surlendemain", "La veille", "Le jour suivant", "Ce jour-là"],
    reponse: 0,
  },
  {
    question: "Le discours indirect libre associe :",
    options: [
      "L'intonation du discours direct et la forme grammaticale du discours indirect",
      "Les guillemets du direct et les deux points",
      "Le présent et le passé simple",
      "Le verbe introducteur et le subordonnant",
    ],
    reponse: 0,
  },
];

/**
 * Quiz interactif de la leçon "Le discours rapporté" : 20 questions à
 * choix multiples, correction immédiate, score en temps réel.
 */
export default function QuizDiscoursRapporte() {
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
