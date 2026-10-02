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
    question: "Qu'est-ce qu'un connecteur logique ?",
    options: [
      "Un mot de liaison qui relie les propositions, les phrases ou les paragraphes",
      "Une figure de style",
      "Un type de phrase",
      "Un niveau de langue",
    ],
    reponse: 0,
  },
  {
    question: "« car », « parce que », « puisque » expriment…",
    options: ["la cause", "la conséquence", "l'opposition", "le but"],
    reponse: 0,
  },
  {
    question: "« donc », « par conséquent », « c'est pourquoi » expriment…",
    options: ["la cause", "la conséquence", "la condition", "la concession"],
    reponse: 1,
  },
  {
    question: "« mais », « cependant », « pourtant » expriment…",
    options: ["l'addition", "la cause", "l'opposition", "la conclusion"],
    reponse: 2,
  },
  {
    question: "« bien que », « malgré », « quoique » expriment…",
    options: ["la concession", "la cause", "le but", "l'addition"],
    reponse: 0,
  },
  {
    question: "« si », « au cas où », « à condition que » expriment…",
    options: ["la cause", "la condition", "la conséquence", "l'explication"],
    reponse: 1,
  },
  {
    question: "« pour », « afin de », « en vue de » expriment…",
    options: ["le but", "la cause", "l'opposition", "la conclusion"],
    reponse: 0,
  },
  {
    question: "« par exemple », « à titre d'exemple » expriment…",
    options: ["l'explication", "l'exemplification", "l'addition", "la cause"],
    reponse: 1,
  },
  {
    question: "« c'est-à-dire », « autrement dit » expriment…",
    options: ["l'explication", "l'opposition", "la conséquence", "la concession"],
    reponse: 0,
  },
  {
    question: "« et », « de plus », « en outre » expriment…",
    options: ["l'addition", "la cause", "le but", "la conclusion"],
    reponse: 0,
  },
  {
    question: "« en conclusion », « en somme », « bref » expriment…",
    options: ["la cause", "l'opposition", "la conclusion", "l'exemplification"],
    reponse: 2,
  },
  {
    question: "« d'une part… d'autre part » expriment…",
    options: ["l'énumération", "la cause", "le but", "la concession"],
    reponse: 0,
  },
  {
    question: "« tandis que » exprime…",
    options: ["l'opposition", "la cause", "le but", "la conclusion"],
    reponse: 0,
  },
  {
    question: "« faute de » exprime…",
    options: ["la cause (le manque)", "la conséquence", "le but", "l'addition"],
    reponse: 0,
  },
  {
    question: "« à moins que » exprime…",
    options: ["la condition (la restriction)", "la cause", "l'addition", "la conclusion"],
    reponse: 0,
  },
  {
    question: "« si bien que » exprime…",
    options: ["la cause", "la conséquence", "l'opposition", "la concession"],
    reponse: 1,
  },
  {
    question: "« Bien qu'il soit jeune, il est sérieux. » — « Bien que » exprime…",
    options: ["la cause", "le but", "la concession", "l'addition"],
    reponse: 2,
  },
  {
    question: "« Non seulement il étudie, mais en plus il écoute de la musique ! » — exprime…",
    options: ["l'addition", "l'opposition", "la cause", "la conclusion"],
    reponse: 0,
  },
  {
    question: "« En un mot, tu es un enfant difficile. » — « En un mot » exprime…",
    options: ["la cause", "la conclusion", "l'opposition", "le but"],
    reponse: 1,
  },
  {
    question: "« Il a réussi grâce à son travail. » — « grâce à » exprime…",
    options: ["la cause", "la conséquence", "le but", "la concession"],
    reponse: 0,
  },
];

export default function QuizConnecteurs() {
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
        <p className="text-sm font-bold text-primary">Score : {score} / {QUESTIONS.length}</p>
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
              <p className="mb-4 font-lecture text-base leading-relaxed text-foreground">{question.question}</p>
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
                    <button key={oi} type="button" disabled={estRevele} onClick={() => repondre(index, oi)} className={classe}>
                      <span className={"flex size-7 shrink-0 items-center justify-center rounded-full font-serif text-sm font-bold " + (estRevele && estBonne ? "bg-[#0F6E4C] text-white" : "bg-primary-tint text-primary")}>
                        {LETTRES[oi]}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>
              {correct !== undefined && (
                <p className={correct ? "mt-3 text-sm font-semibold text-[#0F6E4C]" : "mt-3 text-sm font-semibold text-[#C2372F]"}>
                  {correct ? "Bonne réponse ✓" : `Non — bonne réponse : ${LETTRES[question.reponse]} · ${question.options[question.reponse]}`}
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
