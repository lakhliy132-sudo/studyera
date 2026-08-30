import Link from "next/link";

import { IconeFleche } from "@/components/icones";
import { libelleChapitre, libelleUniteChapitre } from "@/lib/uniteChapitre";
import type { RepriseLecture } from "@/lib/supabase/tableauDeBord";

interface CarteRepriseProps {
  reprise: RepriseLecture;
}

/**
 * Carte "Reprendre" du tableau de bord — reprise fidèlement du modèle
 * fourni par l'utilisateur (fausse page de cahier : lignes horizontales
 * en fondu, citation en marge bleue), avec la palette/police dédiées à
 * cette page (`.tableau-de-bord`, voir app/globals.css) plutôt que les
 * tokens globaux du site — demandé explicitement après un premier essai
 * jugé trop éloigné ("tu peux modifier le design j ai pas aimé comme
 * ca" / "tout"). Remplace `BlocReprendre.tsx`.
 *
 * Le texte sous le titre est un RÉSUMÉ (`chapitre.resume_court`), pas
 * une citation littérale du texte intégral — le modèle fourni
 * affichait un "extrait" entre guillemets, mais le texte intégral des
 * œuvres n'est pratiquement jamais rempli en base (table
 * `paragraphes`, voir scripts/importer.ts) : présenté honnêtement
 * comme "En bref", pas comme une citation.
 *
 * "Chapitre"/"Scène" et la numérotation suivent `lib/uniteChapitre.ts`
 * (Antigone numérote différemment) plutôt que d'être codés en dur.
 */
export default function CarteReprise({ reprise }: CarteRepriseProps) {
  const unite = libelleUniteChapitre(reprise.oeuvreSlug);
  const libelleChap = libelleChapitre(
    { numero: reprise.chapitreNumero, titre_fr: reprise.chapitreTitreFr },
    unite,
  );
  const etiquetteCourte = unite.numeroDejaDansTitre
    ? (reprise.chapitreTitreFr.split(" : ")[0] ?? reprise.chapitreTitreFr)
    : libelleChap;

  return (
    <section className="relative overflow-hidden rounded-[14px] border border-[var(--tdb-line)] bg-[var(--tdb-card)] shadow-[0_1px_2px_rgba(21,26,36,0.04),0_18px_40px_-28px_rgba(21,26,36,0.42)]">
      {/* Lignes de cahier en fondu, purement décoratives — reprend le
       * dégradé du modèle fourni tel quel. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "repeating-linear-gradient(to bottom, transparent 0 33px, var(--tdb-line) 33px 34px)",
          opacity: 0.5,
          maskImage: "linear-gradient(to bottom, transparent 46%, #000 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 46%, #000 100%)",
        }}
      />

      <div className="relative flex flex-col gap-5 p-8 sm:p-10">
        <span className="[font-family:var(--tdb-font-mono)] text-[10.5px] font-medium tracking-[0.15em] text-[var(--tdb-mute)] uppercase">
          {etiquetteCourte}
        </span>

        <div>
          <div className="flex flex-wrap items-baseline gap-4">
            <h2 className="[font-family:var(--tdb-font-serif)] text-[clamp(30px,4.4vw,44px)] leading-none font-semibold tracking-tight text-[var(--tdb-ink)]">
              {reprise.oeuvreTitreFr}
            </h2>
            {reprise.oeuvreTitreAr && (
              <span dir="rtl" lang="ar" className="[font-family:var(--tdb-font-arabe)] text-[19px] text-[var(--tdb-mute)]">
                {reprise.oeuvreTitreAr}
              </span>
            )}
          </div>
          <p className="mt-1.5 text-[14.5px] text-[var(--tdb-ink-2)]">
            {reprise.auteur ? `${reprise.auteur} — ` : ""}
            {unite.numeroDejaDansTitre ? reprise.chapitreTitreFr : libelleChap}
          </p>
        </div>

        {reprise.resumeCourt && (
          <div>
            <p className="mb-1.5 [font-family:var(--tdb-font-mono)] text-[10px] font-medium tracking-[0.15em] text-[var(--tdb-mute)] uppercase">
              En bref
            </p>
            <blockquote className="max-w-[58ch] border-l-2 border-[var(--tdb-red)] py-0.5 pl-5 [font-family:var(--tdb-font-serif)] text-[17.5px] leading-[1.6] text-[var(--tdb-ink-2)]">
              {reprise.resumeCourt}
            </blockquote>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link
            href={reprise.url}
            className="inline-flex items-center gap-3 rounded-full bg-[var(--tdb-ink)] px-6 py-3.5 text-[15px] font-medium text-[var(--tdb-paper)] transition-all hover:-translate-y-px hover:bg-[var(--tdb-blue)]"
          >
            {reprise.estRecommandation ? "Commencer la lecture" : "Continuer la lecture"}
            <IconeFleche className="size-4" />
          </Link>
          <Link
            href={`/oeuvres/${reprise.oeuvreSlug}`}
            className="rounded-full px-5 py-3.5 text-[14.5px] text-[var(--tdb-ink-2)] transition-colors hover:bg-black/[0.04] hover:text-[var(--tdb-ink)]"
          >
            Voir la fiche de l&apos;œuvre
          </Link>
        </div>
      </div>
    </section>
  );
}
