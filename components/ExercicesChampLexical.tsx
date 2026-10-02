"use client";

import ChampReponse from "@/components/ChampReponse";
import { IconeDocument } from "@/components/icones";

const SERIES = [
  {
    mots: "sentir – arôme – odeurs – exhaler – odorant – parfum – flairer – murmure – fermenter",
    reponse: "odorat",
    correction: "champ lexical de l'odorat ; intrus = « murmure ».",
  },
  {
    mots: "feuilles – cueillir – champs – plantes – violettes – arbres – verdoyant – flore – tronc – branche – germe – nourriture – naissant",
    reponse: "nature",
    correction: "champ lexical de la nature / la végétation ; intrus = « nourriture ».",
  },
  {
    mots: "se révolter – amour – jalousie – attachement – dégoût – haineux – recherche",
    reponse: "sentiment",
    correction: "champ lexical des sentiments ; intrus = « recherche ».",
  },
  {
    mots: "compact – dense – successif – entasser – multitude – nombreux – grouiller – prolifération",
    reponse: "quantité",
    correction: "champ lexical de la quantité / la densité ; intrus = « successif ».",
  },
];

export default function ExercicesChampLexical() {
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
          À quel champ lexical appartiennent les mots du paragraphe suivant ? Relevez-en quatre mots :
        </p>
        <blockquote className="mt-3 rounded-r-md border-l-4 border-primary bg-primary-tint px-5 py-4 font-lecture text-[15px] leading-relaxed text-foreground italic">
          […] Ma mère sortit de sa torpeur. Elle rit comme une petite fille, s&apos;empara des poulets pour les emporter à la cuisine, revint aider mon père à vider son capuchon qui contenait des œufs, sortit d&apos;un sac de doum un pot de beurre, une bouteille d&apos;huile, un paquet d&apos;olives, un morceau de galette paysanne en grosse semoule. Prise d&apos;une fièvre d&apos;activité, elle rangeait nos richesses, soufflait sur le feu, allait, venait d&apos;un pas pressé sans s&apos;arrêter de parler, de poser des questions, de me gourmander gentiment […].
          <span className="mt-2 block text-xs font-semibold text-muted-foreground not-italic">
            Ahmed SEFRIOUI, La Boîte à Merveilles (chapitre 12)
          </span>
        </blockquote>
        <div className="mt-4">
          <ChampReponse
            reponse="nourriture"
            correction="Champ lexical de la nourriture (les aliments) : « poulets », « œufs », « beurre », « huile », « olives », « galette »…"
            rows={3}
          />
        </div>
      </article>

      {/* Ex2 : séries */}
      <article className="rounded-[14px] border border-border bg-surface p-6 shadow-sm">
        <h3 className="font-serif text-lg font-bold text-ink">Exercice 2</h3>
        <p className="mt-2 mb-4 font-lecture text-[15px] leading-relaxed text-muted-foreground">
          Identifiez le champ lexical auquel appartient chaque série de mots et repérez un intrus dans chacune d&apos;elles.
        </p>
        <ol className="flex flex-col gap-4">
          {SERIES.map((serie, index) => (
            <li key={index} className="flex flex-col gap-2">
              <p className="font-lecture text-[15px] leading-relaxed text-foreground">{serie.mots}.</p>
              <ChampReponse
                reponse={serie.reponse}
                correction={serie.correction}
                libelle={`Réponse ${index + 1}`}
              />
            </li>
          ))}
        </ol>
      </article>

      {/* Ex3 */}
      <article className="rounded-[14px] border border-border bg-surface p-6 shadow-sm">
        <h3 className="font-serif text-lg font-bold text-ink">Exercice 3</h3>
        <p className="mt-2 font-lecture text-[15px] leading-relaxed text-muted-foreground">
          Relevez du texte quatre mots appartenant au champ lexical de l&apos;insulte.
        </p>
        <blockquote className="mt-3 rounded-r-md border-l-4 border-primary bg-primary-tint px-5 py-4 font-lecture text-[15px] leading-relaxed text-foreground italic">
          Mais avec la gueuse du premier étage, la femme du fabricant de charrues ! Cette dégoûtante créature a souillé mon linge propre avec ses guenilles qui sentent l&apos;étable. Elle ne se lave jamais d&apos;ordinaire, elle garde ses vêtements trois mois, mais pour provoquer une querelle […]. Les gens qui nous provoquent par des paroles grossières perdent leur temps. Nous savons conserver notre calme et garder notre dignité. Il a fallu cette pouilleuse […]
        </blockquote>
        <div className="mt-4">
          <ChampReponse
            reponse="insulte"
            correction="Champ lexical de l'insulte : « gueuse », « dégoûtante », « pouilleuse », « grossières »."
            rows={3}
          />
        </div>
      </article>
    </section>
  );
}
