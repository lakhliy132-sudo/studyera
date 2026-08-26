import type { EntreeLexique } from "@/types/base-de-donnees";

interface LexiqueChapitreProps {
  entrees: EntreeLexique[];
}

/**
 * Mots de vocabulaire expliqués pour ce chapitre. N'affiche rien si la
 * liste est vide (contenu complémentaire, pas un onglet à part entière
 * ici — voir le futur onglet Lexique de /oeuvres/[slug] pour la vue par
 * œuvre entière).
 */
export default function LexiqueChapitre({ entrees }: LexiqueChapitreProps) {
  if (entrees.length === 0) return null;

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold text-foreground">Lexique</h2>
      <dl className="divide-y divide-border rounded-lg border border-border bg-surface shadow-sm">
        {entrees.map((entree) => (
          <div key={entree.id} className="flex flex-col gap-1 p-4">
            <dt className="font-medium text-foreground">
              {entree.mot}
              {entree.nature && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({entree.nature})
                </span>
              )}
            </dt>
            <dd className="flex flex-col gap-1">
              {entree.sens_ar && (
                <span
                  dir="rtl"
                  lang="ar"
                  className="font-arabe text-base leading-loose text-foreground"
                >
                  {entree.sens_ar}
                </span>
              )}
              {entree.note && (
                <span className="text-sm text-muted-foreground">{entree.note}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
