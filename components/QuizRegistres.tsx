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
    question: "Qu'est-ce qu'un registre littéraire ?",
    options: [
      "La manière de s'exprimer pour produire un effet sur le lecteur (rire, angoisse, pitié…)",
      "Le niveau de langue (familier, courant, soutenu)",
      "La catégorie d'œuvre (roman, poésie, théâtre)",
      "La figure de style principale du texte",
    ],
    reponse: 0,
  },
  {
    question: "Quel registre exprime des sentiments intimes (joie, tristesse, chagrin) ?",
    options: ["Le lyrique", "L'épique", "Le comique", "L'ironique"],
    reponse: 0,
  },
  {
    question: "Quel registre cherche à susciter la pitié et la compassion ?",
    options: ["Le tragique", "Le pathétique", "Le polémique", "Le satirique"],
    reponse: 1,
  },
  {
    question: "Quel registre traite de la mort, du destin et de la fatalité ?",
    options: ["Le lyrique", "Le comique", "Le tragique", "Le laudatif"],
    reponse: 2,
  },
  {
    question: "Quel registre fait la louange, emploie un lexique mélioratif ?",
    options: ["Le satirique", "Le laudatif", "L'ironique", "Le polémique"],
    reponse: 1,
  },
  {
    question: "Quel registre critique une personne en s'en moquant et en la ridiculisant ?",
    options: ["Le lyrique", "Le laudatif", "Le satirique", "Le didactique"],
    reponse: 2,
  },
  {
    question: "Quel registre dit le contraire de ce qu'on pense pour se moquer ?",
    options: ["L'ironique", "Le comique", "Le tragique", "Le pathétique"],
    reponse: 0,
  },
  {
    question: "Quel registre déclenche le rire ?",
    options: ["Le tragique", "Le comique", "Le pathétique", "Le polémique"],
    reponse: 1,
  },
  {
    question: "Quel registre défend un point de vue pour convaincre ou persuader ?",
    options: ["Le didactique", "Le lyrique", "Le polémique", "Le fantastique"],
    reponse: 2,
  },
  {
    question:
      "Quel registre fait irruption d'événements étranges et inexplicables dans un univers réaliste ?",
    options: ["Le fantastique", "Le merveilleux", "Le burlesque", "Le réaliste"],
    reponse: 0,
  },
  {
    question: "Quel registre cherche à être au plus près de la réalité concrète ?",
    options: ["Le fantastique", "Le réaliste", "L'épique", "Le lyrique"],
    reponse: 1,
  },
  {
    question: "Quel registre emprunte le ton du professeur qui veut expliquer et faire apprendre ?",
    options: ["Le polémique", "Le satirique", "Le didactique", "Le comique"],
    reponse: 2,
  },
  {
    question: "Quel registre loue les exploits de héros et provoque l'admiration ?",
    options: ["Le tragique", "L'épique", "Le lyrique", "L'ironique"],
    reponse: 1,
  },
  {
    question: "Quel registre traite un sujet noble de manière familière ou vulgaire ?",
    options: ["Le burlesque", "Le comique", "Le satirique", "Le pathétique"],
    reponse: 0,
  },
  {
    question:
      "« Je l'ai vu sans qu'il s'en doute. C'est beau un jardin qui ne pense pas encore aux hommes. » — quel registre ?",
    options: ["Le lyrique", "Le tragique", "Le satirique", "Le comique"],
    reponse: 0,
  },
  {
    question:
      "« Condamné à mort ! Voilà cinq semaines que j'habite cette pensée, toujours glacé de sa présence… » — quel registre ?",
    options: ["Le comique", "Le pathétique", "L'ironique", "Le laudatif"],
    reponse: 1,
  },
  {
    question:
      "« Sa haute taille, sa force, son silence… la peau blanche légèrement dorée, les lèvres rouge corail, tout en lui me plaisait. » — quel registre ?",
    options: ["Le satirique", "Le laudatif", "Le tragique", "L'ironique"],
    reponse: 1,
  },
  {
    question:
      "« Plus large que haute, avec une tête qui reposait directement sur le tronc, des bras courts… » — quel registre ?",
    options: ["Le lyrique", "Le pathétique", "Le satirique", "Le didactique"],
    reponse: 2,
  },
  {
    question:
      "« Mon pourvoi sera rejeté, parce que tout est en règle ; les témoins ont bien témoigné, les juges ont bien jugé… » — quel registre ?",
    options: ["L'ironique", "Le comique", "Le tragique", "Le pathétique"],
    reponse: 0,
  },
  {
    question:
      "« À chacun son rôle. Lui, il doit nous faire mourir, et nous, nous devons aller enterrer notre frère. » — quel registre ?",
    options: ["Le comique", "Le lyrique", "Le tragique", "Le polémique"],
    reponse: 2,
  },
];

/**
 * Quiz interactif de la leçon "Les registres littéraires" : 20 questions
 * à choix multiples, correction immédiate, score en temps réel.
 */
export default function QuizRegistres() {
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
