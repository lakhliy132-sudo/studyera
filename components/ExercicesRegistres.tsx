"use client";

import { useState } from "react";

import ChampReponse from "@/components/ChampReponse";
import { IconeCoche, IconeDocument } from "@/components/icones";

const LETTRES = ["A", "B", "C", "D", "E"] as const;

interface QCM {
  question: string;
  options: string[];
  correct: number;
}

const QCM_EX1: QCM[] = [
  {
    question: "Qu'appelle-t-on un registre littéraire ?",
    options: [
      "Le nom donné aux différentes manières d'exprimer un message : le registre familier, courant et soutenu.",
      "L'ensemble des caractéristiques d'un texte qui provoquent des effets particuliers (émotionnels ou intellectuels) sur le lecteur ou le spectateur.",
      "Les catégories dans lesquelles on classe les œuvres littéraires ayant des points communs (le roman, la poésie, etc.).",
    ],
    correct: 1,
  },
  {
    question: "Si le narrateur évoque ses sentiments personnels, ses états d'âme (joie, tristesse, chagrin…), de quel registre s'agit-il ?",
    options: ["Le registre comique.", "Le registre épique.", "Le registre lyrique.", "Le registre ironique."],
    correct: 2,
  },
  {
    question: "Lorsqu'un texte cherche à faire rire le lecteur, quel est son registre ?",
    options: ["Le registre épique.", "Le registre tragique.", "Le registre pathétique.", "Le registre comique."],
    correct: 3,
  },
  {
    question: "Quel est le registre d'un texte où des événements étranges et inexplicables font irruption dans un univers réaliste ?",
    options: ["Le registre fantastique.", "Le registre bizarre.", "Le registre incroyable.", "Le registre épique."],
    correct: 0,
  },
];

const QCM_EX2: QCM[] = [
  {
    question: "Quel registre cherche à provoquer l'admiration et l'enthousiasme en louant les exploits de héros ?",
    options: ["Le registre tragique.", "Le registre épique.", "Le registre oratoire.", "Le registre fantastique."],
    correct: 1,
  },
  {
    question: "Quel registre cherche à susciter la pitié, la compassion ?",
    options: ["Le registre lyrique.", "Le registre oratoire.", "Le registre pathétique.", "Le registre burlesque."],
    correct: 2,
  },
  {
    question: "Quel registre présente des personnages tourmentés par de fortes passions ou un dilemme, qui ne peuvent éviter un dénouement malheureux ?",
    options: ["Le registre didactique.", "Le registre merveilleux.", "Le registre tragique.", "Le registre lyrique."],
    correct: 2,
  },
  {
    question: "Quel registre s'attaque à des idées et dénonce violemment une situation ?",
    options: ["Le registre polémique.", "Le registre didactique.", "Le registre ironique.", "Le registre satirique."],
    correct: 0,
  },
  {
    question: "Quel registre évoque un sujet noble ou héroïque de manière familière ou vulgaire ?",
    options: ["Le registre burlesque.", "Le registre comique.", "Le registre satirique.", "Le registre épique."],
    correct: 0,
  },
];

const TEXTES_EX3 = [
  {
    texte: "Le soir, quand tous dorment, les riches dans leurs chaudes couvertures, les pauvres sur les marches des boutiques ou sous les porches des palais, moi je ne dors pas. Je songe à ma solitude et j'en sens tout le poids. Ma solitude ne date pas d'hier. Je vois, au fond d'une impasse que le soleil ne visite jamais, un petit garçon de six ans, dresser un piège pour attraper un moineau mais le moineau ne vient jamais […]. (Extrait du chap.1, La Boîte à Merveilles) – A. SEFRIOUI",
    reponse: "lyrique",
    correction: "Lyrique — expression des sentiments intimes (« je », solitude, mélancolie).",
  },
  {
    texte: "Sous cette toile il y avait quatre ou cinq noms parfaitement lisibles […]. – DAUTUN, 1815. – POULAIN, 1818. – JEAN MARTIN, 1821. – CASTAING, 1823. J'ai lu ces noms, et de lugubres souvenirs me sont venus : Dautun, celui qui a coupé son frère en quartiers […]. (Extrait du chap.12, Le dernier jour d'un condamné) – V. HUGO",
    reponse: "tragique",
    correction: "Tragique — évocation de la mort, de l'horreur, souvenirs lugubres.",
  },
  {
    texte: "ISMENE : Je ne veux pas mourir. / ANTIGONE, doucement : Moi aussi j'aurais bien voulu ne pas mourir. […] ISMENE : D'abord c'est horrible, bien sûr, et j'ai pitié moi aussi de mon frère, mais je comprends un peu notre oncle […]. (Extrait de la scène 4, Antigone) – J. ANOUILH",
    reponse: "tragique",
    correction: "Tragique — la mort, le destin, le dilemme inévitable.",
  },
  {
    texte: "Et puis il m'a paru que le cachot était plein d'hommes, d'hommes étranges qui portaient leur tête dans leur main gauche, et la portaient par la bouche, parce qu'il n'y avait pas de chevelure. Tous me montraient le poing, excepté le parricide. […] – Ô les épouvantables spectres ! (Extrait du chap.12, Le dernier jour d'un condamné) – V. HUGO",
    reponse: "fantastique",
    correction: "Fantastique — événements étranges et inexplicables, spectres, hésitation entre réel et surnaturel.",
  },
  {
    texte: "J'eus la sensation que nous étions abandonnés, que nous étions devenus orphelins. Tout le monde dans le quartier devait être au courant de nos ennuis matériels et du départ de mon père. Ils manifesteraient à notre égard une pitié ostentatoire plus humiliante que le pire mépris. (Extrait du chap.9, La Boîte à Merveilles) – A. SEFRIOUI",
    reponse: "pathétique",
    correction: "Pathétique — sentiment d'abandon, pitié, émotion suscitée chez le lecteur.",
  },
];

const TEXTES_EX4 = [
  {
    texte: "Rien d'autre ne compte. Et tu allais le gaspiller ! […] Marie-toi vite, Antigone, sois heureuse. La vie n'est pas ce que tu crois. C'est une eau que les jeunes gens laissent couler sans le savoir […]. Ferme tes mains, ferme tes mains, vite. Retiens-la. (Extrait de la scène 11, Antigone) – J. ANOUILH",
    reponse: "didactique",
    correction: "Didactique — conseils, leçon de vie, ton du professeur qui veut faire apprendre.",
  },
  {
    texte: "ISMENE : Il nous ferait mourir. / ANTIGONE : Bien sûr. À chacun son rôle. Lui, il doit nous faire mourir, et nous, nous devons aller enterrer notre frère. C'est comme ça que ç'a été distribué. (Extrait de la scène 4, Antigone) – J. ANOUILH",
    reponse: "tragique",
    correction: "Tragique — la mort inéluctable, le destin, le rôle imposé.",
  },
  {
    texte: "J'ai gardé un vif souvenir de cette femme, plus large que haute, avec une tête qui reposait directement sur le tronc, des bras courts qui s'agitaient constamment. Son visage lisse et rond m'inspirait un certain dégoût. Je n'aimais pas qu'elle m'embrassât. (Extrait du chap.2, La Boîte à Merveilles) – A. SEFRIOUI",
    reponse: "satirique",
    correction: "Satirique — caricature, moquerie, tourne le personnage en ridicule.",
  },
  {
    texte: "Il entra, puis la porte se rouvrit presque immédiatement, la rose s'écrasa sous ses pieds, puis, le turban de Si Othman vint la rejoindre suivi d'un Si Othman pâle et défait. […] Nous riions à nous tordre. (Extrait du chap.6, La Boîte à Merveilles) – A. SEFRIOUI",
    reponse: "comique",
    correction: "Comique — situation cocasse, décalage, rire.",
  },
  {
    texte: "Condamné à mort ! Voilà cinq semaines que j'habite avec cette pensée, toujours seul avec elle, toujours glacé de sa présence, toujours courbé sous son poids ! […]. (Extrait du chap.1, Le dernier jour d'un condamné) – V. HUGO",
    reponse: "pathétique",
    correction: "Pathétique — angoisse, souffrance, compassion suscitée chez le lecteur.",
  },
  {
    texte: "Pauvre petite ! Ton père qui t'aimait tant, ton père qui baisait ton petit cou blanc et parfumé, qui passait la main sans cesse dans les boucles de tes cheveux comme sur de la soie […]. (Extrait du chap.26, Le dernier jour d'un condamné) – V. HUGO",
    reponse: "pathétique",
    correction: "Pathétique — attendrissement, pitié, émotion suscitée par la séparation.",
  },
];

export default function ExercicesRegistres() {
  const [visibles, setVisibles] = useState<Record<string, boolean>>({});
  function basculer(id: string) {
    setVisibles((p) => ({ ...p, [id]: !p[id] }));
  }

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <IconeDocument className="size-6 text-primary" />
        <h2 className="font-serif text-2xl font-bold text-ink">Exercices</h2>
      </div>

      <ExerciceQCM numero={1} questions={QCM_EX1} visible={!!visibles.ex1} onToggle={() => basculer("ex1")} />
      <ExerciceQCM numero={2} questions={QCM_EX2} visible={!!visibles.ex2} onToggle={() => basculer("ex2")} />

      <ExerciceTextes numero={3} textes={TEXTES_EX3} />
      <ExerciceTextes numero={4} textes={TEXTES_EX4} />
    </section>
  );
}

function ExerciceQCM({
  numero,
  questions,
  visible,
  onToggle,
}: {
  numero: number;
  questions: QCM[];
  visible: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="rounded-[14px] border border-border bg-surface p-6 shadow-sm">
      <h3 className="font-serif text-lg font-bold text-ink">Exercice {numero}</h3>
      <p className="mt-2 mb-4 font-lecture text-[15px] text-muted-foreground">
        Choisissez la bonne réponse :
      </p>

      <div className="flex flex-col gap-6">
        {questions.map((q, qi) => (
          <div key={qi}>
            <p className="mb-2.5 font-lecture text-[15px] leading-relaxed text-foreground">
              <span className="font-bold text-ink">{LETTRES[qi]}.</span> {q.question}
            </p>
            <ul className="flex list-disc flex-col gap-1.5 pl-6 marker:text-primary">
              {q.options.map((option, oi) => (
                <li key={oi} className="font-lecture text-[15px] leading-relaxed text-foreground">
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={visible}
        className="mt-4 flex w-fit items-center gap-2 rounded-[10px] border border-border bg-background px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary"
      >
        <IconeCoche className="size-4" />
        {visible ? "Masquer la correction" : "Voir la correction"}
      </button>
      {visible && (
        <div className="mt-4 rounded-r-md border-l-4 border-[#0F6E4C] bg-[#DFF3EA] px-5 py-4 text-[14.5px] leading-relaxed text-foreground">
          <p className="mb-2 text-xs font-bold tracking-wide text-[#0F6E4C] uppercase">Correction</p>
          <ol>
            {questions.map((q, qi) => (
              <li key={qi}>
                <strong>{LETTRES[qi]}</strong> : {LETTRES[q.correct]}. {q.options[q.correct]}
              </li>
            ))}
          </ol>
        </div>
      )}
    </article>
  );
}

function ExerciceTextes({
  numero,
  textes,
}: {
  numero: number;
  textes: { texte: string; reponse: string; correction: string }[];
}) {
  return (
    <article className="rounded-[14px] border border-border bg-surface p-6 shadow-sm">
      <h3 className="font-serif text-lg font-bold text-ink">Exercice {numero}</h3>
      <p className="mt-2 mb-4 font-lecture text-[15px] text-muted-foreground">
        Déterminez la tonalité (ou le registre) de chacun des textes suivants en justifiant la réponse :
      </p>

      <ol className="flex flex-col gap-5">
        {textes.map((t, index) => (
          <li key={index} className="flex flex-col gap-2">
            <p className="mb-1 text-xs font-bold tracking-wide text-subtle-foreground uppercase">
              Texte {index + 1}
            </p>
            <p className="font-lecture text-[14.5px] leading-relaxed text-foreground">{t.texte}</p>
            <ChampReponse
              reponse={t.reponse}
              correction={t.correction}
              libelle={`Réponse ${index + 1}`}
            />
          </li>
        ))}
      </ol>
    </article>
  );
}
