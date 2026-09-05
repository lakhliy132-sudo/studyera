import Link from "next/link";

import { IconeFleche, IconeLivreOuvert } from "@/components/icones";
import { libelleUniteChapitre } from "@/lib/uniteChapitre";
import type { OeuvreProgression } from "@/lib/supabase/tableauDeBord";

interface ListeProgrammeOeuvresProps {
  parOeuvre: OeuvreProgression[];
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/**
 * Section "Au programme cette année" du tableau de bord — refonte
 * complète demandée explicitement par l'utilisateur ("change moi le
 * tableau de bord completement fais le de ta part").
 *
 * Reprend les tokens globaux du site plutôt que l'ancien système
 * `--tdb-*` (voir CarteReprise.tsx).
 */
export default function ListeProgrammeOeuvres({ parOeuvre }: ListeProgrammeOeuvresProps) {
  if (parOeuvre.length === 0) return null;

  return (
    <section className="rounded-[24px] border border-border bg-surface p-7 shadow-sm sm:p-8">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
            <IconeLivreOuvert className="size-5" />
          </span>
          <p className="font-serif text-xl font-bold text-ink">Au programme cette année</p>
        </div>
        <Link
          href="/oeuvres"
          className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          Toutes les œuvres
          <IconeFleche className="size-3.5" />
        </Link>
      </div>

      <ul className="flex flex-col divide-y divide-border">
        {parOeuvre.map((oeuvre, index) => {
          const unite = libelleUniteChapitre(oeuvre.slug);
          const pourcentage =
            oeuvre.totalChapitres > 0 ? Math.round((oeuvre.chapitresLus / oeuvre.totalChapitres) * 100) : 0;

          return (
            <li key={oeuvre.slug}>
              <Link
                href={`/oeuvres/${oeuvre.slug}`}
                className="grid grid-cols-[28px_1fr_auto] items-center gap-4 rounded-lg py-4 transition-colors hover:bg-surface-muted sm:grid-cols-[28px_1fr_auto_120px_52px]"
              >
                <span className="font-mono text-xs text-subtle-foreground">{pad(index + 1)}</span>
                <span>
                  <span className="block text-[15px] font-semibold text-ink">{oeuvre.titreFr}</span>
                  <span className="block text-[12.5px] text-muted-foreground">{oeuvre.auteur}</span>
                </span>
                {oeuvre.titreAr && (
                  <span dir="rtl" lang="ar" className="hidden font-arabe text-[15px] text-muted-foreground sm:block">
                    {oeuvre.titreAr}
                  </span>
                )}
                <span
                  role="progressbar"
                  aria-valuenow={oeuvre.chapitresLus}
                  aria-valuemin={0}
                  aria-valuemax={oeuvre.totalChapitres}
                  aria-label={`${oeuvre.titreFr} — ${oeuvre.chapitresLus} sur ${oeuvre.totalChapitres} ${unite.pluriel.toLowerCase()}`}
                  className="hidden h-[3px] overflow-hidden rounded-full bg-surface-muted sm:block"
                >
                  <span className="block h-full rounded-full bg-primary" style={{ width: `${pourcentage}%` }} />
                </span>
                <span className="font-mono text-[12.5px] text-muted-foreground sm:text-right">
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
