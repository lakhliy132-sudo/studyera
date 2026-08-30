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
 * fond blanc avec un liséré en dégradé bleu → bleu ciel sur le côté
 * gauche (`--tdb-degrade-bleu`) — demandé explicitement par
 * l'utilisateur, corrigé après un premier essai en dégradé plein fond
 * ("Non au fond le blanc mais a coté le bleu") : voir
 * `BlocAnnonces.tsx` pour le même choix, et
 * `CarteProductionEcrite.tsx` pour le même principe côté haut plutôt
 * que côté gauche.
 */
export default function ListeProgrammeOeuvres({ parOeuvre }: ListeProgrammeOeuvresProps) {
  if (parOeuvre.length === 0) return null;

  return (
    <section className="relative mt-11 overflow-hidden rounded-[14px] border border-[var(--tdb-line)] bg-[var(--tdb-card)] p-7 pl-9">
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[5px]"
        style={{ backgroundImage: "var(--tdb-degrade-bleu)" }}
      />
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
          const dernier = index === parOeuvre.length - 1;

          return (
            <li key={oeuvre.slug} className={dernier ? "" : "border-b border-[var(--tdb-line)]"}>
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
