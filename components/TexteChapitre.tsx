import type { Paragraphe } from "@/types/base-de-donnees";

interface TexteChapitreProps {
  paragraphes: Paragraphe[];
}

/**
 * Texte intégral du chapitre, un paragraphe fr/ar à la fois (côte à
 * côte en desktop, empilés en mobile — même logique que le reste du
 * site pour le contenu bilingue).
 *
 * Affiche un message de remplacement tant qu'aucun paragraphe n'a été
 * saisi pour ce chapitre : c'est le cas courant pour l'instant, le
 * fichier Excel importé n'a pas encore de feuille "Paragraphes" (voir
 * scripts/importer.ts).
 */
export default function TexteChapitre({ paragraphes }: TexteChapitreProps) {
  if (paragraphes.length === 0) {
    return (
      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-foreground">Texte intégral</h2>
        <p className="text-muted-foreground">Bientôt disponible.</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-lg font-semibold text-foreground">Texte intégral</h2>
      {paragraphes.map((paragraphe) => (
        <div key={paragraphe.id} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <p className="whitespace-pre-line text-foreground">{paragraphe.texte_fr}</p>
          {paragraphe.texte_ar && (
            <p
              dir="rtl"
              lang="ar"
              className="whitespace-pre-line font-arabe text-lg leading-loose text-foreground"
            >
              {paragraphe.texte_ar}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
