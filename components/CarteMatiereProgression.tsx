import Link from "next/link";

interface CarteMatiereProgressionProps {
  href: string;
  titre: string;
  /** Étiquette courte (2-3 mots-clés), ex. "3 œuvres · correcteur IA". */
  description: string;
  /** Référence à un token `--color-matiere-*` (app/globals.css). */
  couleur: string;
  /** `null` quand aucun contenu (donc aucune progression) n'existe
   * encore pour cette matière — carte "Bientôt disponible" plutôt
   * qu'une fraction ou une barre à 0 qui laisserait croire qu'il y a
   * quelque chose à suivre. */
  progression: { fait: number; total: number } | null;
}

/**
 * Carte compacte d'une matière avec sa progression — reprend une
 * maquette HTML fournie par l'utilisateur ("fais ca") pour la refonte
 * de /matieres : bordure de couleur à gauche (une par matière, voir
 * lib/matieres.ts), fraction + barre de progression, étiquette
 * courte. Couleurs et structure de la maquette reprises telles
 * quelles, mais rédigées avec les tokens du projet
 * (`bg-surface`/`text-muted-foreground`/...) plutôt que les variables
 * CSS génériques de la maquette (`--surface-1`, `--text-secondary`...),
 * qui n'existent pas dans ce projet — voir le commentaire en tête de
 * app/globals.css sur la convention "toujours un token nommé".
 *
 * `progression` vient de vraies données Supabase (voir
 * app/(public)/matieres/page.tsx) : jamais un chiffre inventé. Pour
 * les 3 nouvelles matières (éducation islamique, arabe,
 * histoire-géo), qui n'ont encore aucun contenu importé, `progression`
 * vaut `null` et la carte affiche "Bientôt disponible" à la place
 * d'une fraction — la maquette fournie illustrait des fractions
 * (2/9, 0/8, 5/9) pour ces matières, mais ce sont des exemples de
 * démonstration, pas de vraies données : aucun chiffre n'a été
 * inventé pour les reproduire.
 */
export default function CarteMatiereProgression({
  href,
  titre,
  description,
  couleur,
  progression,
}: CarteMatiereProgressionProps) {
  const pourcentage = progression && progression.total > 0 ? Math.round((progression.fait / progression.total) * 100) : 0;

  return (
    <Link
      href={href}
      style={{ borderLeftColor: couleur }}
      className="flex flex-col gap-2.5 rounded-[10px] border border-border border-l-[3px] bg-surface p-3.5 transition-colors hover:border-border-strong hover:bg-surface-muted"
    >
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-sm font-semibold text-ink">{titre}</p>
        {progression ? (
          <span className="shrink-0 text-xs text-muted-foreground">
            {progression.fait}/{progression.total}
          </span>
        ) : (
          <span className="shrink-0 rounded-full bg-surface-muted px-2 py-0.5 text-[11px] font-semibold text-subtle-foreground">
            Bientôt
          </span>
        )}
      </div>

      <div className="h-[3px] w-full overflow-hidden rounded-full bg-surface-muted">
        {progression && (
          <div className="h-full rounded-full" style={{ width: `${pourcentage}%`, backgroundColor: couleur }} />
        )}
      </div>

      <p className="text-xs text-muted-foreground">{description}</p>
    </Link>
  );
}
