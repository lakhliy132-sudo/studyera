import { libelleUniteChapitre } from "@/lib/uniteChapitre";

interface BarreProgressionProps {
  slug: string;
  lus: number;
  total: number;
}

/**
 * Barre d'avancement de lecture d'une œuvre, affichée dans la bannière
 * de /oeuvres/[slug]. N'affiche rien si l'œuvre n'a aucun chapitre en
 * base (rien à mesurer) — l'appelant, lui, ne rend ce composant que
 * pour un utilisateur connecté : un visiteur anonyme n'a pas de
 * progression personnelle à montrer.
 *
 * "Scène"/"Chapitre" selon l'œuvre (voir lib/uniteChapitre.ts) —
 * demandé explicitement par l'utilisateur, qui voyait encore
 * "chapitre" affiché ici sur Antigone.
 *
 * Modèle revu (carte + pourcentage en grand) — demandé explicitement
 * par l'utilisateur ("change le modele de la progression de
 * chapitre") : l'ancienne version (une simple ligne de texte fine
 * au-dessus d'une barre de 1.5px) passait presque inaperçue sur la
 * page. Reprend le langage visuel déjà utilisé partout ailleurs sur
 * le site pour un bloc autonome (carte bordée, coins arrondis, ombre
 * légère), avec le pourcentage comme élément visuel principal et le
 * décompte "X sur Y" relégué en légende.
 */
export default function BarreProgression({ slug, lus, total }: BarreProgressionProps) {
  if (total === 0) return null;

  const unite = libelleUniteChapitre(slug);
  const pourcentage = Math.round((lus / total) * 100);

  return (
    <div className="w-full rounded-[14px] border border-border bg-surface p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-ink">Ta progression</span>
        <span className="font-serif text-2xl font-bold text-primary">{pourcentage}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={lus}
        aria-valuemin={0}
        aria-valuemax={total}
        className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-primary-tint"
      >
        <div className="h-full rounded-full bg-primary transition-[width]" style={{ width: `${pourcentage}%` }} />
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        {lus} {(lus > 1 ? unite.pluriel : unite.singulier).toLowerCase()} sur {total} lus
      </p>
    </div>
  );
}
