"use client";

import ChampReponse from "@/components/ChampReponse";
import { IconeDocument } from "@/components/icones";

interface Phrase {
  enonce: string;
  reponse: string;
  correction: string;
}

interface Exercice {
  numero: number;
  consigne: string;
  phrases: Phrase[];
}

const EXERCICES: Exercice[] = [
  {
    numero: 1,
    consigne: "Transformez les phrases au discours indirect :",
    phrases: [
      { enonce: "Toujours hoquetant, je répondis : « Je ne veux pas aller en Enfer. »", reponse: "ne voulais pas", correction: "Toujours hoquetant, je répondis que je ne voulais pas aller en Enfer." },
      { enonce: "Ma mère me demandait : « Ta tête ne te fait-elle pas trop souffrir ? Ton sommeil a-t-il été paisible ? »", reponse: "si", correction: "Ma mère me demandait si ma tête ne me faisait pas trop souffrir et si mon sommeil avait été paisible." },
      { enonce: "La Chouafa demanda à ma mère : « Comment te sens-tu ce matin ? »", reponse: "se sentait", correction: "La Chouafa demanda à ma mère comment elle se sentait ce matin-là." },
      { enonce: "Lalla Aïcha proposa à ma mère : « Montons tous les trois cet après-midi à Sidi Ali Boughaleb. »", reponse: "monter", correction: "Lalla Aïcha proposa à ma mère de monter tous les trois cet après-midi-là à Sidi Ali Boughaleb." },
      { enonce: "« Donne-moi la main », m'ordonna ma mère.", reponse: "lui donner", correction: "Ma mère m'ordonna de lui donner la main." },
      { enonce: "Mon père conseilla à ma mère : « Ne l'envoie pas au Msid, il semble bien fatigué. »", reponse: "ne pas l'envoyer", correction: "Mon père conseilla à ma mère de ne pas l'envoyer au Msid, car il semblait bien fatigué." },
      { enonce: "Créon demandait à Antigone : « Avais-tu parlé de ton projet à quelqu'un ? »", reponse: "avait parlé", correction: "Créon demandait à Antigone si elle avait parlé de son projet à quelqu'un." },
      { enonce: "Antigone ordonna à Ismène : « Laisse-moi ! Ne me caresse pas ! »", reponse: "la laisser", correction: "Antigone ordonna à Ismène de la laisser et de ne pas la caresser." },
      { enonce: "Ismène a dit à Antigone : « Polynice est mort et il ne t'aimait pas. »", reponse: "était mort", correction: "Ismène a dit à Antigone que Polynice était mort et qu'il ne l'aimait pas." },
    ],
  },
  {
    numero: 2,
    consigne: "Transformez les phrases au discours indirect :",
    phrases: [
      { enonce: "Antigone demanda à Ismène : « Où iras-tu avec moi ? »", reponse: "irait", correction: "Antigone demanda à Ismène où elle irait avec elle." },
      { enonce: "La Nourrice demanda à Antigone : « Qu'est-ce que tu veux que je fasse ? »", reponse: "fît", correction: "La Nourrice demanda à Antigone ce qu'elle voulait qu'elle fît." },
      { enonce: "Ma mère demanda à notre voisine : « Tu célèbres un mariage ? Pourquoi fais-tu brûler plusieurs bougies ? »", reponse: "célébrait", correction: "Ma mère demanda à notre voisine si elle célébrait un mariage et pourquoi elle faisait brûler plusieurs bougies." },
      { enonce: "Le condamné s'interrogea : « Qu'y a-t-il donc de si changé à ma situation ? »", reponse: "ce qu'il y avait", correction: "Le condamné s'interrogea sur ce qu'il y avait donc de si changé à sa situation." },
      { enonce: "Mon fils, m'a-t-il dit, êtes-vous préparé ? Je lui ai répondu d'une voix faible : « Je ne suis pas préparé, mais je suis prêt. »", reponse: "préparé", correction: "Il m'a demandé si j'étais préparé. Je lui ai répondu d'une voix faible que je n'étais pas préparé, mais que j'étais prêt." },
      { enonce: "Monsieur, m'a-t-il dit avec un sourire de courtoisie, je suis huissier près la cour royale de Paris. J'ai l'honneur de vous apporter un message de la part de monsieur le procureur général.", reponse: "huissier", correction: "Il m'a dit avec un sourire de courtoisie qu'il était huissier près la cour royale de Paris et qu'il avait l'honneur de m'apporter un message de la part de monsieur le procureur général." },
      { enonce: "Ma mère me demandait : « Ta tête ne te fait-elle pas trop souffrir ? Ton sommeil a-t-il été paisible ? »", reponse: "si", correction: "Ma mère me demandait si ma tête ne me faisait pas trop souffrir et si mon sommeil avait été paisible." },
      { enonce: "Mon cher monsieur, aurez-vous l'extrême bonté de me suivre ?", reponse: "suivre", correction: "Il me demanda si j'aurais l'extrême bonté de le suivre." },
      { enonce: "« Oh ! est-il bien vrai que je vais mourir avant la fin du jour ? Est-il bien vrai que c'est moi ? Ce bruit sourd de cris que j'entends au dehors. »", reponse: "mourir", correction: "Il se demandait s'il était bien vrai qu'il allait mourir avant la fin du jour, si c'était bien lui — ce bruit sourd de cris qu'il entendait au dehors." },
    ],
  },
  {
    numero: 3,
    consigne: "Transformez les discours indirects en discours direct :",
    phrases: [
      { enonce: "Tristan déclara à Iseult qu'il l'aimait depuis l'avant-veille.", reponse: "t'aime", correction: "Tristan déclara à Iseult : « Je t'aime depuis avant-hier. »" },
      { enonce: "Iseult répondit à Tristan que la raison de leur amour était le philtre.", reponse: "philtre", correction: "Iseult répondit à Tristan : « La raison de notre amour est le philtre. »" },
      { enonce: "Tristan demanda qu'Iseult lui avouât ce qu'elle désirait à ce moment-là.", reponse: "avoue", correction: "Tristan demanda : « Iseult, avoue-moi ce que tu désires en ce moment. »" },
      { enonce: "Iseult lui dit que le lendemain, elle devait se rendre chez son futur mari.", reponse: "demain", correction: "Iseult lui dit : « Demain, je dois me rendre chez mon futur mari. »" },
      { enonce: "Tristan la supplia alors de rester à ses côtés.", reponse: "reste", correction: "Tristan la supplia alors : « Reste à mes côtés ! »" },
      { enonce: "Iseult lui dit qu'elle n'aurait pas le choix, le lendemain, de se rendre chez le roi.", reponse: "choix", correction: "Iseult lui dit : « Je n'aurai pas le choix, demain, de me rendre chez le roi. »" },
      { enonce: "Tristan s'écria qu'ils iraient trois jours plus tard retrouver Marc.", reponse: "irons", correction: "Tristan s'écria : « Dans trois jours, nous irons retrouver Marc ! »" },
    ],
  },
  {
    numero: 4,
    consigne: "Transformez les discours indirects en discours direct :",
    phrases: [
      { enonce: "Iseult raconta que trois jours avant, elle était encore avec ses parents.", reponse: "il y a trois jours", correction: "Iseult raconta : « Il y a trois jours, j'étais encore avec mes parents. »" },
      { enonce: "L'enseignant demanda à l'élève ce qu'il souhaitait faire trois jours plus tard.", reponse: "souhaites", correction: "L'enseignant demanda à l'élève : « Que souhaites-tu faire dans trois jours ? »" },
      { enonce: "L'enseignant chercha à savoir si l'élève avait déjà calculé sa moyenne.", reponse: "calculé", correction: "L'enseignant chercha à savoir : « As-tu déjà calculé ta moyenne ? »" },
      { enonce: "L'élève demanda à son enseignant quel élève avait été le plus sympathique la veille.", reponse: "hier", correction: "L'élève demanda à son enseignant : « Quel élève a été le plus sympathique hier ? »" },
      { enonce: "L'enseignant se demanda s'il avait bien expliqué ça à ses élèves trois jours auparavant.", reponse: "expliqué", correction: "L'enseignant se demanda : « Ai-je bien expliqué ça à mes élèves il y a trois jours ? »" },
      { enonce: "Il demanda au garçon pourquoi il n'avait pas fait ses devoirs ce jour-là.", reponse: "aujourd'hui", correction: "Il demanda au garçon : « Pourquoi n'as-tu pas fait tes devoirs aujourd'hui ? »" },
    ],
  },
];

export default function ExercicesDiscoursRapporte() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <IconeDocument className="size-6 text-primary" />
        <h2 className="font-serif text-2xl font-bold text-ink">Exercices</h2>
      </div>

      {EXERCICES.map((exercice) => (
        <article
          key={exercice.numero}
          className="rounded-[14px] border border-border bg-surface p-6 shadow-sm"
        >
          <h3 className="font-serif text-lg font-bold text-ink">Exercice {exercice.numero}</h3>
          <p className="mt-2 mb-4 font-lecture text-[15px] leading-relaxed text-muted-foreground">
            {exercice.consigne}
          </p>

          <ol className="flex flex-col gap-5">
            {exercice.phrases.map((phrase, index) => (
              <li key={index} className="flex flex-col gap-2">
                <p className="font-lecture text-[15px] leading-relaxed text-foreground">
                  {phrase.enonce}
                </p>
                <ChampReponse
                  reponse={phrase.reponse}
                  correction={phrase.correction}
                  libelle={`Réponse ${index + 1}`}
                />
              </li>
            ))}
          </ol>
        </article>
      ))}
    </section>
  );
}
