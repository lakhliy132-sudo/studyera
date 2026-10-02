"use client";

import { useState } from "react";


interface Question {
  question: string;
  options: string[];
  reponse: number;
}

const LETTRES = ["A", "B", "C", "D"] as const;

const QUESTIONS: Question[] = [
  { question: "Combien existe-t-il de niveaux de langue ?", options: ["2", "3", "4", "5"], reponse: 1 },
  {
    question: "Quels sont les trois niveaux de langue ?",
    options: ["Soutenu, courant, familier", "Soutenu, courant, vulgaire", "Élevé, moyen, bas", "Soutenu, courant, populaire"],
    reponse: 0,
  },
  {
    question: "Le niveau soutenu se caractérise par un lexique…",
    options: ["simple et courant", "riche, rare, recherché", "familière et argotique", "vulgaire"],
    reponse: 1,
  },
  {
    question: "On utilise le niveau courant…",
    options: ["entre amis", "en classe, avec des personnes qu'on connaît peu", "uniquement à l'écrit", "dans les discours officiels"],
    reponse: 1,
  },
  {
    question: "Le niveau familier s'entend surtout…",
    options: ["dans des conversations entre amis", "dans un discours officiel", "dans un essai", "dans une lettre administrative"],
    reponse: 0,
  },
  {
    question: "« bagnole » appartient au niveau…",
    options: ["soutenu", "courant", "familier", "standard"],
    reponse: 2,
  },
  {
    question: "« automobile » appartient au niveau…",
    options: ["soutenu", "courant", "familier", "argotique"],
    reponse: 0,
  },
  {
    question: "« voiture » appartient au niveau…",
    options: ["soutenu", "courant", "familier", "vulgaire"],
    reponse: 1,
  },
  {
    question: "« bouffer » appartient au niveau…",
    options: ["soutenu", "courant", "familier", "recherché"],
    reponse: 2,
  },
  {
    question: "« se sustenter » appartient au niveau…",
    options: ["soutenu", "courant", "familier", "populaire"],
    reponse: 0,
  },
  {
    question: "« manger » appartient au niveau…",
    options: ["soutenu", "courant", "familier", "argotique"],
    reponse: 1,
  },
  {
    question: "« demeure » appartient au niveau…",
    options: ["soutenu", "courant", "familier", "vulgaire"],
    reponse: 0,
  },
  {
    question: "« baraque » appartient au niveau…",
    options: ["soutenu", "courant", "familier", "standard"],
    reponse: 2,
  },
  {
    question: "« Ché pas pourquoi il a pété les plombs » : quel niveau ?",
    options: ["Soutenu", "Courant", "Familier", "Littéraire"],
    reponse: 2,
  },
  {
    question: "« Portez discrètement votre regard vers cet homme là-bas » : quel niveau ?",
    options: ["Soutenu", "Courant", "Familier", "Populaire"],
    reponse: 0,
  },
  {
    question: "« Fred a beaucoup de chance. Il a réussi son examen » : quel niveau ?",
    options: ["Soutenu", "Courant", "Familier", "Recherché"],
    reponse: 1,
  },
  {
    question: "« Mes godasses elles brillent » : quel niveau ?",
    options: ["Soutenu", "Courant", "Familier", "Littéraire"],
    reponse: 2,
  },
  {
    question: "Le niveau courant respecte les règles syntaxiques.",
    options: ["Vrai", "Faux", "Seulement à l'oral", "Seulement à l'écrit"],
    reponse: 0,
  },
  {
    question: "Le niveau familier supprime parfois la négation (« ché pas » au lieu de « je ne sais pas »).",
    options: ["Vrai", "Faux", "Jamais", "Seulement au pluriel"],
    reponse: 0,
  },
  {
    question: "Dans « Il crèche dans une super baraque », « crèche » signifie…",
    options: ["Il habite", "Il dort dans une crèche", "Il travaille", "Il cuisine"],
    reponse: 0,
  },
];

export default function QuizNiveauxLangue() {
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
