import Link from "next/link";

import type { ChapitreRecommande } from "@/lib/supabase/tableauDeBord";

/** ⚠️ Plus utilisé depuis aucune page : /tableau-de-bord a été
 * reconstruit sur un modèle fourni par l'utilisateur, ce bloc est
 * remplacé par CarteReprise.tsx (plus riche : titre arabe, auteur,
 * résumé). Gardé tel quel plutôt que supprimé, même précédent que
 * OngletThemes.tsx. */
interface BlocReprendreProps {
  /** Dernier chapitre réellement consulté par l'élève (résolu depuis
   * `activite`), s'il existe. */
  dernierChapitre: { url: string; titre: string } | null;
  /** Chapitre suggéré quand l'élève n'a encore rien consulté. N'est
   * utilisé par le composant que si `dernierChapitre` est `null`. */
  recommandation: ChapitreRecommande | null;
}

/**
 * Premier bloc du tableau de bord ("REPRENDRE") : l'action la plus
 * probable pour l'élève à cet instant. Trois états possibles, jamais de
 * bloc vide :
 * - a déjà consulté un chapitre -> "Reprendre" + lien vers ce chapitre
 * - n'a jamais rien consulté -> suggestion explicite du premier
 *   chapitre disponible ("Commence par le chapitre 1 de ...")
 * - aucun contenu du tout en base pour la filière -> message neutre
 *   (cas transitoire, avant le premier import de contenu)
 */
export default function BlocReprendre({ dernierChapitre, recommandation }: BlocReprendreProps) {
  if (dernierChapitre) {
    return (
      <section className="flex flex-col gap-3 rounded-lg border border-border bg-surface-muted p-6">
        <p className="text-sm font-medium text-muted-foreground">Reprendre</p>
        <p className="text-lg font-semibold text-foreground">{dernierChapitre.titre}</p>
        <Link
          href={dernierChapitre.url}
          className="self-start rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Continuer la lecture →
        </Link>
      </section>
    );
  }

  if (recommandation) {
    return (
      <section className="flex flex-col gap-3 rounded-lg border border-border bg-surface-muted p-6">
        <p className="text-lg font-semibold text-foreground">
          Commence par le chapitre {recommandation.numeroChapitre} de{" "}
          {recommandation.titreOeuvre}
        </p>
        <Link
          href={recommandation.url}
          className="self-start rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Commencer →
        </Link>
      </section>
    );
  }

  return (
    <section className="rounded-lg border border-border bg-surface-muted p-6">
      <p className="text-muted-foreground">Le contenu arrive bientôt.</p>
    </section>
  );
}
