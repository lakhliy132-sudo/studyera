import Link from "next/link";

import { IconeFleche } from "@/components/icones";
import { libelleUniteChapitre } from "@/lib/uniteChapitre";
import type { OeuvreProgression } from "@/lib/supabase/tableauDeBord";

interface ListeProgrammeOeuvresProps {
  parOeuvre: OeuvreProgression[];
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/**
 * Section "Au programme cette année" — reprise fidèlement du modèle
 * fourni par l'utilisateur (une ligne par œuvre : numéro, titre
 * arabe, auteur, barre d'avancement), palette/police dédiées à cette
 * page (voir CarteReprise.tsx pour le contexte). Remplace la partie
 * "liste par œuvre" de l'ancien `BlocProgression.tsx`.
 */
export default function ListeProgrammeOeuvres({ parOeuvre }: ListeProgrammeOeuvresProps) {
  if (parOeuvre.length === 0) return null;

  return (
    <section className="mt-11">
      <div className="flex items-center justify-between border-b border-[var(--tdb-line)] pb-3">
        <span className="[font-family:var(--tdb-font-mono)] text-[10.5px] font-medium tracking-[0.15em] text-[var(--tdb-mute)] uppercase">
          Au programme cette année
        </span>
        <Link
          href="/oeuvres"
          className="flex items-center gap-1.5 text-sm font-medium text-[var(--tdb-blue)] hover:underline"
        >
          Toutes les œuvres
          <IconeFleche className="size-3.5" />
        </Link>
      </div>

      <ul className="list-none">
        {parOeuvre.map((oeuvre, index) => {
          const unite = libelleUniteChapitre(oeuvre.slug);
          const pourcentage =
            oeuvre.totalChapitres > 0 ? Math.round((oeuvre.chapitresLus / oeuvre.totalChapitres) * 100) : 0;

          return (
            <li key={oeuvre.slug} className="border-b border-[var(--tdb-line)]">
              <Link
                href={`/oeuvres/${oeuvre.slug}`}
                className="grid grid-cols-[34px_1fr_auto] items-center gap-5 rounded-lg py-[17px] transition-colors hover:bg-black/[0.03] sm:grid-cols-[34px_1fr_auto_110px_52px]"
              >
                <span className="[font-family:var(--tdb-font-mono)] text-xs text-[var(--tdb-mute)]">
                  {pad(index + 1)}
                </span>
                <span>
                  <span className="block text-base font-semibold tracking-tight text-[var(--tdb-ink)]">
                    {oeuvre.titreFr}
                  </span>
                  <span className="block text-[12.5px] text-[var(--tdb-mute)]">{oeuvre.auteur}</span>
                </span>
                {oeuvre.titreAr && (
                  <span
                    dir="rtl"
                    lang="ar"
                    className="hidden [font-family:var(--tdb-font-arabe)] text-[15px] text-[var(--tdb-mute)] sm:block"
                  >
                    {oeuvre.titreAr}
                  </span>
                )}
                <span
                  role="progressbar"
                  aria-valuenow={oeuvre.chapitresLus}
                  aria-valuemin={0}
                  aria-valuemax={oeuvre.totalChapitres}
                  aria-label={`${oeuvre.titreFr} — ${oeuvre.chapitresLus} sur ${oeuvre.totalChapitres} ${unite.pluriel.toLowerCase()}`}
                  className="hidden h-[3px] overflow-hidden rounded-full bg-[var(--tdb-line)] sm:block"
                >
                  <span
                    className="block h-full rounded-full"
                    style={{ width: `${pourcentage}%`, backgroundColor: "var(--tdb-green)" }}
                  />
                </span>
                <span className="[font-family:var(--tdb-font-mono)] text-[12.5px] text-[var(--tdb-mute)] sm:text-right">
                  {oeuvre.chapitresLus}/{oeuvre.totalChapitres}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
