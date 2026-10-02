"use client";

import { useState } from "react";

import { IconeCoche } from "@/components/icones";

type Reponse = "ancre" | "coupe";

interface QuestionQuiz {
  extrait: string;
  reponse: Reponse;
}

/**
 * Les 20 questions du quiz « ancré / coupé » de la leçon L'énonciation,
 * fournies par l'utilisateur. `reponse` est la bonne réponse :
 * - "ancre" = énoncé ancré dans la situation d'énonciation (je/tu/ici/
 *   maintenant, présent, indices de personne),
 * - "coupe" = énoncé coupé de la situation d'énonciation (3e personne,
 *   passé simple/imparfait, récit).
 */
const QUESTIONS: QuestionQuiz[] = [
  { extrait: "Le boc de Charles s'arrêta devant le perron du milieu.", reponse: "coupe" },
  { extrait: "Que vous seriez bon, Monsieur, de vouloir bien ramasser mon éventail.", reponse: "ancre" },
  { extrait: "Le marquis ouvrit la porte du salon; une des dames se leva.", reponse: "coupe" },
  { extrait: "A sept heures on servit le dîner. Les hommes, plus nombreux, s'assirent à la première table.", reponse: "coupe" },
  { extrait: "Mais tu as perdu la tête. On se moquerait de toi.", reponse: "ancre" },
  { extrait: "Monsieur, sans doute, n'est pas d'ici. Monsieur désire voir les curiosités de l'église ?", reponse: "ancre" },
  { extrait: "Madame Bovary remarqua que plusieurs dames n'avaient jamais mis leurs gants dans leur verre.", reponse: "coupe" },
  { extrait: "Contre tout le monde je me défendrai ! Je suis le dernier des hommes.", reponse: "ancre" },
  { extrait: "Je crois que tout au plus vous allez avoir 26 ou 27 ans.", reponse: "ancre" },
  { extrait: "Les dames, ensuite, montèrent dans leur chambre s'apprêter pour le bal.", reponse: "coupe" },
  { extrait: "Je vous suis obligé, Monsieur, des bontés que vous avez faites pour moi.", reponse: "ancre" },
  { extrait: "Baissez la tête. Respirez. Toussez.", reponse: "ancre" },
  { extrait: "Elle avait une robe de safran pâle, relevée par trois bouquets de roses.", reponse: "coupe" },
  { extrait: "J'aime mieux vous prévenir tout de suite que ce sera long et coûteux.", reponse: "ancre" },
  { extrait: "Je vais vous l'expliquer en une minute au tableau noir.", reponse: "ancre" },
  { extrait: "Après le souper, il y eut beaucoup de vins d'Espagne et de vins du Rhône.", reponse: "coupe" },
  { extrait: "Léon, à pas sérieux, marchait auprès des murs.", reponse: "coupe" },
  { extrait: "Vous n'avez jamais mal ici en vous couchant ?", reponse: "ancre" },
  { extrait: "Jamais la vie ne lui avait paru si bonne.", reponse: "coupe" },
  { extrait: "Tirez la langue. Vous ne devez pas avoir beaucoup d'appétit ?", reponse: "ancre" },
];

/**
 * Quiz interactif « ancré / coupé de la situation d'énonciation » de la
 * leçon L'énonciation. Composant Client : l'état (réponses données,
 * correction) est local, pas de round-trip serveur.
 *
 * Chaque question affiche l'extrait et deux boutons ; après réponse, la
 * bonne réponse est signalée en vert, la mauvaise en rouge, et le score
 * se met à jour. Une question répondue est verrouillée.
 */
export default function QuizAncreCoupe() {
  const [reponses, setReponses] = useState<Record<number, Reponse>>({});
  const [corriges, setCorriges] = useState<Record<number, boolean>>({});

  const score = Object.values(corriges).filter(Boolean).length;

  function repondre(index: number, choix: Reponse) {
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
            <li
              key={index}
              className="rounded-[14px] border border-border bg-surface p-5 shadow-sm"
            >
              <p className="mb-1 text-xs font-bold tracking-wide text-subtle-foreground uppercase">
                Question {index + 1}
              </p>
              <p className="mb-4 font-lecture text-base leading-relaxed text-foreground">
                « {question.extrait} »
              </p>
              <p className="mb-2.5 text-sm text-muted-foreground">
                L&apos;énoncé est-il <strong>ancré</strong> ou <strong>coupé</strong> de la
                situation d&apos;énonciation ?
              </p>

              <div className="flex flex-wrap gap-2.5">
                {(["ancre", "coupe"] as const).map((option) => {
                  const estChoisi = choix === option;
                  const estBonne = question.reponse === option;
                  const estRevele = correct !== undefined;

                  let classe =
                    "flex items-center gap-2 rounded-[10px] border px-5 py-2.5 text-sm font-semibold transition-colors";
                  if (!estRevele) {
                    classe +=
                      " border-border bg-surface text-foreground hover:border-primary hover:text-primary";
                  } else if (estBonne) {
                    classe += " border-[#0F6E4C] bg-[#DFF3EA] text-[#0F6E4C]";
                  } else if (estChoisi) {
                    classe += " border-[#C2372F] bg-[#FDF0EF] text-[#C2372F]";
                  } else {
                    classe += " border-border bg-surface text-subtle-foreground opacity-60";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={estRevele}
                      onClick={() => repondre(index, option)}
                      className={classe}
                    >
                      {estRevele && estBonne && <IconeCoche className="size-4" />}
                      {option === "ancre" ? "Ancré" : "Coupé"}
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
                    : `Non — bonne réponse : ${question.reponse === "ancre" ? "Ancré" : "Coupé"}`}
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
