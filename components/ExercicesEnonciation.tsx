"use client";

import ChampReponse from "@/components/ChampReponse";
import { IconeDocument } from "@/components/icones";

const PHRASES_EX3 = [
  {
    texte: "Le mois dernier, nous avons organisé, à la maison, une soirée musicale où tous nos amis ont dû jouer, bien ou mal, d'un instrument.",
    reponse: "ancré",
    correction: "Ancré — « nous », passé composé, « à la maison ».",
  },
  {
    texte: "Le voyageur aperçut au loin un rhinocéros qui semblait paisible, mais il préféra cependant grimper sur un arbre.",
    reponse: "coupé",
    correction: "Coupé — passé simple, 3e personne (récit).",
  },
  {
    texte: "Le passage au troisième millénaire fut l'occasion de fêtes délirantes.",
    reponse: "coupé",
    correction: "Coupé — passé simple, récit historique détaché de l'énonciation.",
  },
  {
    texte: "Quelqu'un a téléphoné pour toi hier soir.",
    reponse: "ancré",
    correction: "Ancré — passé composé, « pour toi », « hier soir ».",
  },
  {
    texte: "L'ouvrit, le cœur battant, mais elle ne contenait que quelques trombones.",
    reponse: "coupé",
    correction: "Coupé — imparfait, 3e personne (récit).",
  },
  {
    texte: "Viens t'asseoir près de moi, je vais te montrer mes photos de vacances. Tu me feras voir les tiennes après.",
    reponse: "ancré",
    correction: "Ancré — impératif, « je/tu/me/te », présent et futur.",
  },
];

export default function ExercicesEnonciation() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <IconeDocument className="size-6 text-primary" />
        <h2 className="font-serif text-2xl font-bold text-ink">Exercices</h2>
      </div>

      {/* Ex1 */}
      <article className="rounded-[14px] border border-border bg-surface p-6 shadow-sm">
        <h3 className="font-serif text-lg font-bold text-ink">Exercice 1</h3>
        <p className="mt-2 font-lecture text-[15px] leading-relaxed text-muted-foreground">
          Relevez des indices énonciatifs dans le texte suivant et précisez leur nature grammaticale :
        </p>
        <blockquote className="mt-3 rounded-r-md border-l-4 border-primary bg-primary-tint px-5 py-4 font-lecture text-[15px] leading-relaxed text-foreground italic">
          « J&apos;ai bien relu votre proposition de contrat de la semaine dernière, mais il y a quelques détails qui n&apos;ont pas été évoqués lors de notre rencontre. D&apos;abord, je constate qu&apos;au lieu de votre prétendu « tarif privilégié », vous allez en réalité me faire payer le prix fort. Ensuite, il y a ce texte en petits caractères là en bas, qui apporte de sacrées restrictions. Regardez-moi ces clauses : avec ça, je me retrouve pieds et poings liés ! »
        </blockquote>
        <div className="mt-4">
          <ChampReponse
            reponse="je"
            correction="Indices énonciatifs : « J'ai » (pronom personnel 1re pers.), « votre » (déterminant possessif 2e pers.), « la semaine dernière » (déictique temporel), « là en bas » (déictique spatial), « Regardez-moi » (impératif 2e pers.), « ces clauses » (démonstratif)…"
            rows={3}
          />
        </div>
      </article>

      {/* Ex2 */}
      <article className="rounded-[14px] border border-border bg-surface p-6 shadow-sm">
        <h3 className="font-serif text-lg font-bold text-ink">Exercice 2</h3>
        <p className="mt-2 font-lecture text-[15px] leading-relaxed text-muted-foreground">
          Identifiez la situation d&apos;énonciation dans le chapitre 1 du roman à thèse « Le Dernier Jour d&apos;un condamné ».
        </p>
        <div className="mt-4">
          <ChampReponse
            reponse="condamné"
            correction="Qui parle ? le condamné à mort, narrateur à la 1re personne (« je »). À qui ? à lui-même et au lecteur (journal intime). Quand ? dans les semaines qui précèdent son exécution. Où ? dans sa cellule (Bicêtre). Dans quel but ? témoigner de son angoisse et dénoncer la peine de mort."
            rows={3}
          />
        </div>
      </article>

      {/* Ex3 */}
      <article className="rounded-[14px] border border-border bg-surface p-6 shadow-sm">
        <h3 className="font-serif text-lg font-bold text-ink">Exercice 3</h3>
        <p className="mt-2 mb-4 font-lecture text-[15px] leading-relaxed text-muted-foreground">
          Ces expressions sont-elles ancrées dans la situation d&apos;énonciation ou coupées de la situation d&apos;énonciation ?
        </p>
        <ol className="flex flex-col gap-4">
          {PHRASES_EX3.map((p, index) => (
            <li key={index} className="flex flex-col gap-2">
              <p className="font-lecture text-[15px] leading-relaxed text-foreground">{p.texte}</p>
              <ChampReponse
                reponse={p.reponse}
                correction={p.correction}
                libelle={`Réponse ${index + 1}`}
              />
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
}
