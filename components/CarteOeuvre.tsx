import Link from "next/link";

import CouvertureOeuvre from "@/components/CouvertureOeuvre";
import { libelleUniteChapitre } from "@/lib/uniteChapitre";
import type { Oeuvre } from "@/types/base-de-donnees";

interface CarteOeuvreProps {
  oeuvre: Oeuvre;
  nombreChapitres: number;
  /** Rang de la carte dans la grille (0, 1, 2…) — décale son animation
   * d'entrée pour que les cartes apparaissent l'une après l'autre au
   * chargement de /oeuvres, plutôt que toutes en même temps. */
  indexAnimation?: number;
}

/**
 * Carte cliquable d'une œuvre, utilisée dans la grille de /oeuvres.
 *
 * Deux mouvements demandés explicitement par l'utilisateur ("je veux
 * les 3 cases du roman bougee un peu") : une animation d'entrée
 * échelonnée au chargement de la page (`animate-entree-carte`, voir
 * app/globals.css) et un léger soulèvement au survol
 * (`hover:-translate-y-1`) — `transition` (sans suffixe) couvre déjà
 * `transform` par défaut dans Tailwind, donc `hover:shadow-md` et
 * `hover:-translate-y-1` s'animent tous les deux au même rythme.
 */
export default function CarteOeuvre({ oeuvre, nombreChapitres, indexAnimation = 0 }: CarteOeuvreProps) {
  // "N scènes" pour Antigone plutôt que "N chapitres" — voir lib/uniteChapitre.ts.
  const unite = libelleUniteChapitre(oeuvre.slug);

  return (
    <Link
      href={`/oeuvres/${oeuvre.slug}`}
      style={{ animationDelay: `${indexAnimation * 100}ms` }}
      className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-md animate-entree-carte"
    >
      <div className="relative aspect-[3/4] w-full">
        <CouvertureOeuvre url={oeuvre.couverture_url} titre={oeuvre.titre_fr} />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h2 className="text-base font-semibold text-foreground">{oeuvre.titre_fr}</h2>
        {oeuvre.titre_ar && (
          // `w-fit` : garde ce titre aligné à gauche avec le h2
          // au-dessus (voir le même correctif sur les pages œuvre et
          // chapitre).
          <p dir="rtl" lang="ar" className="w-fit font-arabe text-base leading-loose text-foreground">
            {oeuvre.titre_ar}
          </p>
        )}
        {oeuvre.auteur && <p className="text-sm text-muted-foreground">{oeuvre.auteur}</p>}
        <p className="mt-2 text-xs text-muted-foreground">
          {nombreChapitres} {(nombreChapitres > 1 ? unite.pluriel : unite.singulier).toLowerCase()}
        </p>
      </div>
    </Link>
  );
}
