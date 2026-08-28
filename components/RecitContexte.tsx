export interface MotCle {
  terme: string;
  explication: string;
}

interface RecitContexteProps {
  texte: string;
  /** Mots-clés et explications à la suite du récit — demandé
   * explicitement par l'utilisateur ("avec des mots cles et des
   * explicatif pour le mythe d oedipe"), pour ce chapitre qui n'a plus
   * de "Fiche de la scène" (voir plus bas) où ce genre de contenu
   * vivrait habituellement. */
  motsCles?: MotCle[];
}

/**
 * Bloc de texte en prose, français uniquement, volontairement DIFFÉRENT
 * du format "Résumé"/"ملخص" bilingue de `CarteBilingue` (via
 * `FicheChapitre`) — demandé explicitement par l'utilisateur pour "Le
 * mythe d'Œdipe" : "le mythe c pas comme un resumé et en plus fais le
 * juste en francais et avec unee autre forme different de resumé parce
 * que c est pas un resumé". Un premier essai avait mis ce texte dans
 * `fiches.resume_fr`/`resume_ar` rendu via `FicheChapitre`
 * (deux colonnes Résumé/ملخص, "Lire la suite") — rejeté par
 * l'utilisateur : ce texte n'est pas le résumé d'une scène, c'est un
 * rappel de contexte mythologique avant la pièce elle-même.
 *
 * Le texte reste stocké dans `fiches.resume_fr` (pas de colonne dédiée
 * pour ce genre de contenu, voir la réserve habituelle sur les
 * migrations manquantes) — seul le RENDU change : simples paragraphes
 * de lecture, pas de carte bilingue, pas de troncature "Lire la
 * suite", pas de mots de lexique cliquables (aucun mot de lexique
 * n'est de toute façon rattaché à ce chapitre). `resume_ar` n'est
 * délibérément plus rempli pour ce chapitre (contenu français
 * uniquement, demandé explicitement).
 *
 * Encadré à bordure noire — demandé explicitement par l'utilisateur
 * ("encadre le mythe d oedipe comme rectangle et ajoute des tres
 * [traits] noir", précisé juste après par "pas forcement rectangle
 * mais arrondis" : coins arrondis comme le reste du site, seule la
 * bordure noire est une exception volontaire), pour un effet "encadré"
 * de manuel scolaire (rubrique de contexte mise à part visuellement)
 * plutôt que les bordures bleu pâle utilisées ailleurs sur le site.
 * `border-black` est isolé à la palette de tokens du reste du site
 * (voir le commentaire de tête d'app/globals.css) : un noir franc
 * demandé explicitement, pas une nouvelle couleur de marque à
 * généraliser ailleurs.
 */
export default function RecitContexte({ texte, motsCles }: RecitContexteProps) {
  const paragraphes = texte.split(/\n{2,}/);

  return (
    <section className="rounded-lg border-2 border-black bg-surface p-8">
      <div className="flex flex-col gap-4">
        {paragraphes.map((paragraphe, index) => (
          <p key={index} className="font-lecture text-[16px] leading-relaxed text-foreground">
            {paragraphe}
          </p>
        ))}
      </div>

      {motsCles && motsCles.length > 0 && (
        <div className="mt-7 border-t-2 border-black pt-6">
          <h3 className="mb-4 font-serif text-lg font-bold text-ink">Mots-clés</h3>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {motsCles.map((mc) => (
              <div key={mc.terme}>
                <dt className="font-serif text-base font-bold text-primary">{mc.terme}</dt>
                <dd className="mt-1 font-lecture text-[15px] leading-relaxed text-muted-foreground">
                  {mc.explication}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </section>
  );
}
