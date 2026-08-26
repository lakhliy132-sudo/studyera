import CarteBilingue from "@/components/CarteBilingue";
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
        />
      )}

      {themes.length > 0 && (
        <p className="text-sm text-muted-foreground">Thèmes : {themes.join(", ")}</p>
      )}

      {aDesPointsCles && (
        <ul className="list-disc pl-5 text-sm text-foreground">
          {fiche.points_cles_fr.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
