import Link from "next/link";

import { IconeFleche } from "@/components/icones";
import { libelleChapitre, libelleUniteChapitre } from "@/lib/uniteChapitre";
import type { RepriseLecture } from "@/lib/supabase/tableauDeBord";

interface CarteRepriseProps {
  reprise: RepriseLecture;
}

/**
 * Carte "Reprendre" du tableau de bord — reconstruite sur le modèle
 * fourni par l'utilisateur ("fais moi comme ca mais ajoute des modif
 * bien") : une fausse page de cahier (lignes horizontales en fondu,
 * citation) plutôt qu'un simple encart avec un bouton. Remplace
 * `BlocReprendre.tsx`.
 *
 * Le texte sous le titre est un RÉSUMÉ (`chapitre.resume_court`), pas
 * une citation littérale du texte intégral — le modèle fourni
 * affichait un "extrait" entre guillemets, mais le texte intégral des
 * œuvres n'est pratiquement jamais rempli en base (table
 * `paragraphes`, voir scripts/importer.ts) : présenté honnêtement
 * comme "En bref", pas comme une citation, pour ne pas laisser croire
 * à un extrait qu'on n'a pas réellement.
 *
 * "Chapitre"/"Scène" et la numérotation suivent `lib/uniteChapitre.ts`
 * (Antigone numérote différemment, voir ce fichier) plutôt que d'être
 * codés en dur comme dans le modèle fourni.
 */
export default function CarteReprise({ reprise }: CarteRepriseProps) {
  const unite = libelleUniteChapitre(reprise.oeuvreSlug);
  const libelleChap = libelleChapitre(
    { numero: reprise.chapitreNumero, titre_fr: reprise.chapitreTitreFr },
    unite,
  );
  // Pour l'étiquette compacte en haut de carte : juste "Scène 1" (pas
  // le titre complet "Scène 1 : Le Prologue", trop long pour une
  // étiquette) quand le numéro est déjà dans le titre — même extraction
  // que les pastilles du Quiz, voir OngletQuiz.tsx.
  const etiquetteCourte = unite.numeroDejaDansTitre
    ? (reprise.chapitreTitreFr.split(" : ")[0] ?? reprise.chapitreTitreFr)
    : libelleChap;

  return (
    <section className="relative overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
      {/* Lignes de cahier en fondu, purement décoratives — dégradé sur
       * les tokens de bordure existants, pas de couleur brute. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0 33px, var(--color-border) 33px 34px)",
          opacity: 0.5,
          maskImage: "linear-gradient(to bottom, transparent 46%, #000 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 46%, #000 100%)",
        }}
      />

      <div className="relative flex flex-col gap-5 p-8 sm:p-10">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
            {etiquetteCourte}
          </span>
        </div>

        <div>
          <div className="flex flex-wrap items-baseline gap-3">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {reprise.oeuvreTitreFr}
            </h2>
            {reprise.oeuvreTitreAr && (
              <span dir="rtl" lang="ar" className="font-arabe text-lg text-muted-foreground">
                {reprise.oeuvreTitreAr}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {reprise.auteur ? `${reprise.auteur} — ` : ""}
            {unite.numeroDejaDansTitre ? reprise.chapitreTitreFr : libelleChap}
          </p>
        </div>

        {reprise.resumeCourt && (
          <div>
            <p className="mb-1.5 font-mono text-[10.5px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
              En bref
            </p>
            <blockquote className="max-w-[58ch] border-l-2 border-primary py-0.5 pl-5 font-lecture text-base leading-relaxed text-foreground">
              {reprise.resumeCourt}
            </blockquote>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link
            href={reprise.url}
            className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-white transition-all hover:bg-primary hover:-translate-y-px"
          >
            {reprise.estRecommandation ? "Commencer la lecture" : "Continuer la lecture"}
            <IconeFleche className="size-4" />
          </Link>
          <Link
            href={`/oeuvres/${reprise.oeuvreSlug}`}
            className="rounded-full px-5 py-3.5 text-sm text-foreground transition-colors hover:bg-surface-muted"
          >
            Voir la fiche de l&apos;œuvre
          </Link>
        </div>
      </div>
    </section>
  );
}
