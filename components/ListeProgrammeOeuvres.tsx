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
 * Section "Au programme cette année" — n'avait jusqu'ici aucune carte
 * (juste une liste nue sous un en-tête). Encadrée en rectangle arrondi,
 * fond en dégradé bleu → bleu ciel (`--tdb-degrade-bleu`), texte blanc
 * — demandé explicitement par l'utilisateur ("PARTIE DE COMMUNICATION
 * ET AU PROGRAMME DE L ANNée ET DERNIER ACTIVITéS CHANGE LA FORME FAIS
 * LA RECTANGLE ET ARRONDIS AVEC COULEUR BLEU VERS BLEU CIEL"), même
 * traitement que `BlocAnnonces.tsx`/`BlocDernieresActivites.tsx`.
 */
export default function ListeProgrammeOeuvres({ parOeuvre }: ListeProgrammeOeuvresProps) {
  if (parOeuvre.length === 0) return null;

  return (
    <section
      className="mt-11 rounded-[14px] p-7 text-white shadow-[0_10px_30px_-14px_rgba(30,63,216,0.45)]"
      style={{ backgroundImage: "var(--tdb-degrade-bleu)" }}
    >
      <div className="flex items-center justify-between border-b border-white/25 pb-3">
        <span className="[font-family:var(--tdb-font-mono)] text-[10.5px] font-medium tracking-[0.15em] text-white/80 uppercase">
          Au programme cette année
        </span>
        <Link href="/oeuvres" className="flex items-center gap-1.5 text-sm font-medium text-white hover:underline">
          Toutes les œuvres
          <IconeFleche className="size-3.5" />
        </Link>
      </div>

      <ul className="list-none">
        {parOeuvre.map((oeuvre, index) => {
          const unite = libelleUniteChapitre(oeuvre.slug);
          const pourcentage =
            oeuvre.totalChapitres > 0 ? Math.round((oeuvre.chapitresLus / oeuvre.totalChapitres) * 100) : 0;
          const dernier = index === parOeuvre.length - 1;

          return (
            <li key={oeuvre.slug} className={dernier ? "" : "border-b border-white/15"}>
              <Link
                href={`/oeuvres/${oeuvre.slug}`}
                className="grid grid-cols-[34px_1fr_auto] items-center gap-5 rounded-lg py-[17px] transition-colors hover:bg-white/10 sm:grid-cols-[34px_1fr_auto_110px_52px]"
              >
                <span className="[font-family:var(--tdb-font-mono)] text-xs text-white/70">{pad(index + 1)}</span>
                <span>
                  <span className="block text-base font-semibold tracking-tight text-white">{oeuvre.titreFr}</span>
                  <span className="block text-[12.5px] text-white/70">{oeuvre.auteur}</span>
                </span>
                {oeuvre.titreAr && (
                  <span
                    dir="rtl"
                    lang="ar"
                    className="hidden [font-family:var(--tdb-font-arabe)] text-[15px] text-white/70 sm:block"
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
                  className="hidden h-[3px] overflow-hidden rounded-full bg-white/25 sm:block"
                >
                  <span className="block h-full rounded-full bg-white" style={{ width: `${pourcentage}%` }} />
                </span>
                <span className="[font-family:var(--tdb-font-mono)] text-[12.5px] text-white/70 sm:text-right">
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
