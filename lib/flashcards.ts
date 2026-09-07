export interface Flashcard {
  question: string;
  reponse: string;
  /** Titre du cours d'où vient la carte — affiché comme contexte,
   * beaucoup de termes (« سياسيا », « داخل أوربا »...) n'ont pas de
   * sens isolés du cours qui les contient. */
  leconTitre: string;
  leconSlug: string;
}

/**
 * Extrait des fiches (question/réponse) directement depuis le contenu
 * réel des cours — motif `**Terme**: description` déjà très présent
 * dans les 16 leçons d'histoire-géo (`**الصناعة**: تمثلت مظاهر...`),
 * pas de contenu inventé pour la fonctionnalité "Flash cards" demandée
 * explicitement par l'utilisateur ("fais moi une case qui s appelle
 * flash cards"). Une carte par occurrence du motif dans `contenu_mdx`.
 *
 * Regex volontairement bornée en longueur (2-70 caractères pour le
 * terme, 5-260 pour la réponse) : évite qu'un `**...**` utilisé
 * ailleurs dans un très long paragraphe ne produise une carte
 * illisible ou ne capture par erreur plusieurs phrases à la fois.
 */
export function extraireFlashcards(contenuMdx: string | null, leconTitre: string, leconSlug: string): Flashcard[] {
  if (!contenuMdx) return [];

  const cartes: Flashcard[] = [];
  const regex = /\*\*([^*\n]{2,70})\*\*\s*:\s*([^\n]{5,260})/g;
  let correspondance: RegExpExecArray | null;

  while ((correspondance = regex.exec(contenuMdx)) !== null) {
    cartes.push({
      question: correspondance[1].trim(),
      reponse: correspondance[2].trim().replace(/[.:]\s*$/, ""),
      leconTitre,
      leconSlug,
    });
  }

  return cartes;
}
