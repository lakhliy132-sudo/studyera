"use client";

import ChampReponse from "@/components/ChampReponse";
import { IconeDocument } from "@/components/icones";

const MOTS_EX1 = [
  "Automobile – voiture – bagnole",
  "livre – ouvrage – bouquin",
  "gaffe – erreur – bévue",
  "manger – bouffer – se sustenter",
  "demeure – maison – baraque",
];

const PHRASES_EX2 = [
  { texte: "Ché pas pourquoi il a pété les plombs.", reponse: "familier" },
  { texte: "Se restaurer était son obsession.", reponse: "soutenu" },
  { texte: "Faisons vite sinon elle manquera son train.", reponse: "courant" },
  { texte: "Fred a beaucoup de chance. Il a réussi son examen.", reponse: "courant" },
  { texte: "Mes godasses elles brillent. Faut dire que j'les ai bien cirées.", reponse: "familier" },
  { texte: "J'ai un pote qui est fou de mangas.", reponse: "familier" },
  { texte: "Portez discrètement votre regard vers cet homme là-bas. Ne dirait-on pas qu'il arbore un postiche sur le crâne ?", reponse: "soutenu" },
  { texte: "Mes chaussures brillent parce que je les ai cirées avec soin.", reponse: "courant" },
  { texte: "Faisons diligence afin qu'elle ne manque pas son train.", reponse: "soutenu" },
  { texte: "Toute la journée y pensait qu'à s'goinfrer.", reponse: "familier" },
];

const PHRASES_EX3 = [
  { texte: "Faut se grouiller sinon elle rate le train.", reponse: "familier" },
  { texte: "Mes souliers luisent parce que je les ai cirés soigneusement.", reponse: "soutenu" },
  { texte: "J'ai un ami qui apprécie particulièrement les mangas.", reponse: "courant" },
  { texte: "Je ne sais absolument pas pourquoi il s'est mis en colère !", reponse: "courant" },
  { texte: "La fortune a souri à Fred car il a passé son examen avec succès.", reponse: "soutenu" },
  { texte: "J'ignore la raison pour laquelle cet individu a perdu le contrôle de lui-même.", reponse: "soutenu" },
  { texte: "Il ne pensait qu'à manger du matin au soir.", reponse: "courant" },
  { texte: "Ce qu'il est veinard, ce Fred. Il a réussi son exam.", reponse: "familier" },
];

const CORRECTION_EX1 =
  "Soutenu : automobile, ouvrage, bévue, se sustenter, demeure. Courant : voiture, livre, erreur, manger, maison. Familier : bagnole, bouquin, gaffe, bouffer, baraque.";

export default function ExercicesNiveauxLangue() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <IconeDocument className="size-6 text-primary" />
        <h2 className="font-serif text-2xl font-bold text-ink">Exercices</h2>
      </div>

      {/* Ex1 : classement */}
      <article className="rounded-[14px] border border-border bg-surface p-6 shadow-sm">
        <h3 className="font-serif text-lg font-bold text-ink">Exercice 1</h3>
        <p className="mt-2 mb-4 font-lecture text-[15px] text-muted-foreground">
          Classez les mots selon leur niveau de langue :
        </p>
        <ul className="mb-4 flex list-disc flex-col gap-1.5 pl-6 marker:text-primary">
          {MOTS_EX1.map((m, i) => (
            <li key={i} className="font-lecture text-[15px] text-foreground">{m}</li>
          ))}
        </ul>
        <ChampReponse reponse="soutenu" correction={CORRECTION_EX1} rows={3} />
      </article>

      {/* Ex2, Ex3 : phrases */}
      <ExercicePhrases numero={2} consigne="À quel niveau de langue appartiennent les phrases suivantes ?" phrases={PHRASES_EX2} />
      <ExercicePhrases numero={3} consigne="À quel niveau de langue appartiennent les phrases suivantes ?" phrases={PHRASES_EX3} />
    </section>
  );
}

function ExercicePhrases({
  numero,
  consigne,
  phrases,
}: {
  numero: number;
  consigne: string;
  phrases: { texte: string; reponse: string }[];
}) {
  return (
    <article className="rounded-[14px] border border-border bg-surface p-6 shadow-sm">
      <h3 className="font-serif text-lg font-bold text-ink">Exercice {numero}</h3>
      <p className="mt-2 mb-4 font-lecture text-[15px] text-muted-foreground">{consigne}</p>
      <ol className="flex flex-col gap-4">
        {phrases.map((p, index) => (
          <li key={index} className="flex flex-col gap-2">
            <p className="font-lecture text-[15px] leading-relaxed text-foreground">{p.texte}</p>
            <ChampReponse
              reponse={p.reponse}
              correction={`Niveau ${p.reponse}`}
              libelle={`Réponse ${index + 1}`}
            />
          </li>
        ))}
      </ol>
    </article>
  );
}
