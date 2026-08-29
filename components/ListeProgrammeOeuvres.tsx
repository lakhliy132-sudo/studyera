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
 * Section "Au programme cette année" du tableau de bord — reconstruite
 * sur le modèle fourni par l'utilisateur ("fais moi comme ca mais
 * ajoute des modif bien") : une ligne par œuvre avec son titre arabe,
 * son auteur et une barre d'avancement, plutôt que les barres
 * compactes de l'ancien `BlocProgression.tsx`. Remplace la partie
 * "liste par œuvre" de ce composant (le total global reste dans
 * `CarteProgressionAnneau.tsx`).
 */
export default function ListeProgrammeOeuvres({ parOeuvre }: ListeProgrammeOeuvresProps) {
  if (parOeuvre.length === 0) return null;

  return (
    <section className="mt-2">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="font-mono text-[10.5px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
          Au programme cette année
        </span>
        <Link href="/oeuvres" className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
          Toutes les œuvres
          <IconeFleche className="size-3.5" />
        </Link>
      </div>

      <ul className="flex flex-col">
        {parOeuvre.map((oeuvre, index) => {
          const unite = libelleUniteChapitre(oeuvre.slug);
          const pourcentage =
            oeuvre.totalChapitres > 0 ? Math.round((oeuvre.chapitresLus / oeuvre.totalChapitres) * 100) : 0;

          return (
            <li key={oeuvre.slug} className="border-b border-border">
              <Link
                href={`/oeuvres/${oeuvre.slug}`}
                className="grid grid-cols-[34px_1fr_auto] items-center gap-5 rounded-md py-4 transition-colors hover:bg-surface-muted sm:grid-cols-[34px_1fr_auto_110px_52px]"
              >
                <span className="font-mono text-xs text-muted-foreground">{pad(index + 1)}</span>
                <span>
                  <span className="block text-base font-semibold tracking-tight text-foreground">
                    {oeuvre.titreFr}
                  </span>
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
                  className="hidden h-[3px] overflow-hidden rounded-full bg-border sm:block"
                >
                  <span
                    className="block h-full rounded-full bg-validation"
                    style={{ width: `${pourcentage}%` }}
                  />
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
