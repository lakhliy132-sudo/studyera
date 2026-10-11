import CarteBilingue from "@/components/CarteBilingue";
import { IconeIdee, IconeLivreOuvert } from "@/components/icones";
import MotLexique from "@/components/MotLexique";
import { indexerLexique, normaliserMot } from "@/lib/lexique";
import type { EntreeLexique, Fiche } from "@/types/base-de-donnees";

interface FicheChapitreProps {
  fiche: Fiche | null;
  lexique: EntreeLexique[];
}

/**
 * Découpe un texte en morceaux de texte / mots cliquables, en
 * n'accrochant chaque mot du lexique qu'à sa PREMIÈRE occurrence dans
 * le texte — évite de rendre cliquable chaque répétition d'un mot
 * courant (comme dans la maquette de référence, où un seul mot est
 * surligné dans le résumé).
 */
function decouperAvecLexique(
  texte: string,
  parMot: Map<string, EntreeLexique>,
  dejaMontres: Set<string>,
): React.ReactNode[] {
  return texte.split(/(\s+)/).map((morceau, index) => {
    const cle = normaliserMot(morceau);
    const entree = cle ? parMot.get(cle) : undefined;

    if (entree && !dejaMontres.has(cle)) {
      dejaMontres.add(cle);
      return (
        <MotLexique key={index} entree={entree}>
          {morceau}
        </MotLexique>
      );
    }

    return morceau;
  });
}

/**
 * Fiche de synthèse d'un chapitre : résumé bilingue (le résumé français
 * a ses mots de lexique cliquables, voir decouperAvecLexique), thèmes
 * (principal + secondaires), points clés bilingues. N'affiche rien tant
 * qu'aucune fiche n'existe pour ce chapitre.
 */
export default function FicheChapitre({ fiche, lexique }: FicheChapitreProps) {
  if (!fiche) return null;

  const themes = [fiche.themes.principal, ...fiche.themes.secondaires].filter(
    (theme): theme is string => Boolean(theme),
  );

  const aUnResume = Boolean(fiche.resume_fr || fiche.resume_ar);
  const aDesPointsCles = fiche.points_cles_fr.length > 0;

  if (!aUnResume && themes.length === 0 && !aDesPointsCles) return null;

  const parMot = indexerLexique(lexique);
  const dejaMontres = new Set<string>();

  return (
    <section className="flex flex-col gap-4">
      {aUnResume && (
        <CarteBilingue
          contenuFr={
            fiche.resume_fr ? decouperAvecLexique(fiche.resume_fr, parMot, dejaMontres) : null
          }
          contenuAr={fiche.resume_ar}
          long
        />
      )}

      {/* Thèmes du chapitre en carte (« change ça, fais-la stylée ») :
          un en-tête avec une ampoule et le nombre de thèmes, puis des
          pastilles numérotées au lieu d'une simple ligne de mots-clés. */}
      {themes.length > 0 && (
        <div className="relative overflow-hidden rounded-[18px] border border-border bg-surface p-5 shadow-[0_12px_32px_-22px_rgba(27,58,143,0.35)] sm:p-6">
          <span aria-hidden="true" className="absolute inset-y-0 start-0 w-1 bg-primary" />
          <div className="flex items-center justify-between gap-3">
            <p className="flex items-center gap-3 font-serif text-lg font-bold text-ink">
              <span className="flex size-10 items-center justify-center rounded-[12px] bg-primary text-primary-foreground shadow-sm">
                <IconeIdee className="size-5" />
              </span>
              Thèmes du chapitre
            </p>
            <span className="shrink-0 rounded-full bg-primary-tint px-3 py-1 text-xs font-bold whitespace-nowrap text-primary">
              {themes.length} thème{themes.length > 1 ? "s" : ""}
            </span>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {themes.map((theme, index) => (
              <li
                key={theme}
                className="flex items-center gap-2.5 rounded-[16px] border sm:rounded-full border-border bg-surface py-1.5 ps-1.5 pe-4 text-sm font-medium text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md sm:text-[15px]"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-tint text-xs font-bold text-primary tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {theme}
              </li>
            ))}
          </ul>
        </div>
      )}

      {aDesPointsCles && (
        <div className="flex flex-col gap-2.5 rounded-md border border-border bg-surface-muted p-5">
          <p className="flex items-center gap-2 text-sm font-bold text-primary">
            <IconeLivreOuvert />
            Points clés
          </p>
          <ul className="flex flex-col gap-2">
            {fiche.points_cles_fr.map((point) => (
              <li key={point} className="flex gap-2 font-lecture text-[15px] leading-relaxed text-foreground">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
