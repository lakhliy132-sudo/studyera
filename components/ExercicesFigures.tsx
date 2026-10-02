"use client";

import ChampReponse from "@/components/ChampReponse";
import { IconeDocument } from "@/components/icones";
import type { Exercice } from "@/lib/exercices-figures";

/**
 * Rendu générique des exercices des leçons de figures de style (7-12) :
 * liste d'exercices, chacun avec ses items (énoncé + zone d'écriture +
 * "Confirmer" → Vrai/Faux + correction via ChampReponse).
 */
export default function ExercicesFigures({ exercices }: { exercices: Exercice[] }) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <IconeDocument className="size-6 text-primary" />
        <h2 className="font-serif text-2xl font-bold text-ink">Exercices</h2>
      </div>

      {exercices.map((exercice) => (
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
