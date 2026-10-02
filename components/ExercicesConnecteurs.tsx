"use client";

import ChampReponse from "@/components/ChampReponse";
import { IconeDocument } from "@/components/icones";

interface Item {
  texte: string;
  reponse: string;
  correction: string;
}

interface Exercice {
  numero: number;
  consigne: string;
  items: Item[];
}

const EXERCICES: Exercice[] = [
  {
    numero: 1,
    consigne:
      "Mettez les connecteurs logiques suivants dans ce qui convient : (à moins que – pour que – faute de – tandis que – par conséquent – si – parce que – pour)",
    items: [
      { texte: "Marie est une fillette très sérieuse …………… son frère aime bien s'amuser.", reponse: "tandis que", correction: "« tandis que » → l'opposition" },
      { texte: "Il est hospitalisé depuis hier, …………… la cérémonie est annulée.", reponse: "par conséquent", correction: "« par conséquent » → la conséquence" },
      { texte: "Elle va tous les jours à la piscine …………… se maintenir en forme.", reponse: "pour", correction: "« pour » → le but" },
      { texte: "…………… elles gagnent ce match, notre club sera qualifié pour la finale.", reponse: "si", correction: "« Si » → la condition" },
      { texte: "Nous devons refaire notre catalogue …………… le rendre plus attractif pour la clientèle.", reponse: "pour", correction: "« pour » → le but" },
      { texte: "Je ne pars plus aux États-Unis …………… j'ai perdu mon passeport.", reponse: "parce que", correction: "« parce que » → la cause" },
      { texte: "Viens près de moi …………… je te montre comment faire ce point de tricot.", reponse: "pour que", correction: "« pour que » → le but" },
      { texte: "Il ne peut pas se faire soigner …………… argent.", reponse: "faute", correction: "« faute d' » → la cause (le manque)" },
      { texte: "Nous aurons bientôt les pieds dans l'eau …………… la pluie ne cesse.", reponse: "à moins que", correction: "« à moins que » → la condition (la restriction)" },
    ],
  },
  {
    numero: 2,
    consigne: "Relevez les connecteurs logiques et précisez ce qu'ils expriment :",
    items: [
      { texte: "Malgré ses problèmes familiaux, Jean obtient des bonnes notes.", reponse: "malgré", correction: "« Malgré » → la concession" },
      { texte: "L'argent ne fait pas le bonheur, mais il permet de mieux vivre.", reponse: "mais", correction: "« mais » → l'opposition" },
      { texte: "La lecture permet, en premier lieu, la maîtrise de la langue. En second lieu, elle enrichit la culture. Enfin, elle est un excellent moyen d'instruction.", reponse: "en premier lieu", correction: "« en premier lieu / en second lieu / enfin » → l'énumération" },
      { texte: "Même si tu ne viens pas, nous nous amuserons.", reponse: "même si", correction: "« Même si » → la concession" },
    ],
  },
  {
    numero: 3,
    consigne: "Relevez les connecteurs logiques et précisez ce qu'ils expriment :",
    items: [
      { texte: "En général, je ne le crois pas car il ne dit que rarement la vérité.", reponse: "car", correction: "« car » → la cause" },
      { texte: "Je pense venir demain sur le temps de midi, mais plutôt vers 13 heures.", reponse: "mais", correction: "« mais » → l'opposition" },
      { texte: "Je redoute la chaleur, si bien que je pars en vacances plutôt en hiver.", reponse: "si bien que", correction: "« si bien que » → la conséquence" },
      { texte: "J'aime le cinéma, quoique je préfère le théâtre.", reponse: "quoique", correction: "« quoique » → la concession" },
      { texte: "Il mange une pomme et une orange.", reponse: "et", correction: "« et » → l'addition" },
      { texte: "Vraiment, tu exagères ! En un mot, tu es un enfant difficile.", reponse: "en un mot", correction: "« En un mot » → la conclusion" },
      { texte: "Non seulement il étudie sa leçon, mais en plus, il écoute de la musique !", reponse: "non seulement", correction: "« Non seulement… mais en plus » → l'addition" },
      { texte: "L'enfant pleure parce qu'il a perdu son jouet.", reponse: "parce que", correction: "« parce que » → la cause" },
      { texte: "L'enfant a perdu son jouet, c'est pourquoi il pleure.", reponse: "c'est pourquoi", correction: "« c'est pourquoi » → la conséquence" },
      { texte: "Bien qu'il soit jeune, cet adolescent est sérieux.", reponse: "bien que", correction: "« Bien que » → la concession" },
    ],
  },
];

export default function ExercicesConnecteurs() {
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
            {exercice.items.map((item, index) => (
              <li key={index} className="flex flex-col gap-2">
                <p className="font-lecture text-[15px] leading-relaxed text-foreground">
                  {item.texte}
                </p>
                <ChampReponse
                  reponse={item.reponse}
                  correction={item.correction}
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
