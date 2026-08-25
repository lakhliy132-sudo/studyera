import type { Fiche } from "@/types/base-de-donnees";

interface FicheChapitreProps {
  fiche: Fiche | null;
}

/**
 * Fiche de synthèse d'un chapitre : résumé bilingue, thèmes (principal +
 * secondaires), points clés bilingues. N'affiche rien tant qu'aucune
 * fiche n'existe pour ce chapitre (contrairement à `TexteChapitre`, pas
 * de message "Bientôt disponible" ici : la fiche est un complément, pas
 * le contenu principal de la page).
 */
export default function FicheChapitre({ fiche }: FicheChapitreProps) {
  if (!fiche) return null;

  const themes = [fiche.themes.principal, ...fiche.themes.secondaires].filter(
    (theme): theme is string => Boolean(theme),
  );

  const aUnResume = Boolean(fiche.resume_fr || fiche.resume_ar);
  const aDesPointsCles = fiche.points_cles_fr.length > 0;

  if (!aUnResume && themes.length === 0 && !aDesPointsCles) return null;

  return (
    <section className="flex flex-col gap-4 rounded-lg border border-border bg-surface-muted p-4">
      <h2 className="text-lg font-semibold text-foreground">Fiche de synthèse</h2>

      {aUnResume && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {fiche.resume_fr && (
            <p className="whitespace-pre-line text-foreground">{fiche.resume_fr}</p>
          )}
          {fiche.resume_ar && (
            <p
              dir="rtl"
              lang="ar"
              className="whitespace-pre-line font-arabe text-lg leading-loose text-foreground"
            >
              {fiche.resume_ar}
            </p>
          )}
        </div>
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
