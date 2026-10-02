import { IconeIdee } from "@/components/icones";
import type { Fiche } from "@/types/base-de-donnees";

interface OngletThemesProps {
  fiches: Fiche[];
  numeroParChapitreId: Map<string, number>;
}

/**
 * ⚠️ Plus utilisé : l'onglet "Thèmes et enjeux" a été retiré de
 * `OngletsOeuvre.tsx`/`/oeuvres/[slug]/page.tsx` à la demande explicite
 * de l'utilisateur. Ce composant reste dans le code (pas supprimé,
 * l'utilisateur n'a pas demandé sa suppression, seulement celle de
 * l'onglet dans la navigation) au cas où il serait réutilisé plus tard
 * — voir aussi `recupererFichesOeuvre` dans lib/supabase/contenu.ts,
 * orpheline pour la même raison.
 *
 * Contenu original de l'onglet "Thèmes et enjeux" de /oeuvres/[slug] :
 * tous les thèmes de l'œuvre, agrégés depuis `fiches.themes` (principal
 * + secondaires) de chaque chapitre — pas de table dédiée, comme
 * `OngletLieux` agrège `chapitres.lieux`. Un même thème peut apparaître
 * dans plusieurs chapitres (ex. "La solitude") ; dédupliqué par texte
 * exact, avec la liste des chapitres où il apparaît.
 *
 * Thème "principal" d'un chapitre et thème "secondaire" d'un autre
 * comptent comme la même entrée s'ils ont le même texte — aucune
 * distinction affichée entre les deux, ce n'est pas une hiérarchie au
 * niveau de l'œuvre entière, seulement au niveau d'un chapitre donné.
 *
 * Design cohérent avec `OngletLieux`/`OngletPersonnages` (carte à
 * icône + badges de chapitre), pas issu d'un fichier de référence
 * spécifique pour cet onglet.
 */
export default function OngletThemes({ fiches, numeroParChapitreId }: OngletThemesProps) {
  const themesVersChapitres = new Map<string, number[]>();
  for (const fiche of fiches) {
    const numero = numeroParChapitreId.get(fiche.chapitre_id);
    if (numero === undefined) continue;

    const themesDeLaFiche = [fiche.themes.principal, ...fiche.themes.secondaires].filter(
      (theme): theme is string => Boolean(theme),
    );
    for (const theme of themesDeLaFiche) {
      const numeros = themesVersChapitres.get(theme) ?? [];
      if (!numeros.includes(numero)) numeros.push(numero);
      themesVersChapitres.set(theme, numeros);
    }
  }
  const themes = [...themesVersChapitres.entries()]
    .map(([theme, numeros]) => [theme, numeros.sort((a, b) => a - b)] as const)
    .sort((a, b) => a[0].localeCompare(b[0], "fr"));

  return (
    <section className="rounded-lg border border-border bg-surface p-5 sm:p-9 pb-10 shadow-sm">
      <div className="mb-2 flex items-center justify-center gap-3.5 text-primary">
        <IconeIdee className="size-[30px]" />
        <h2 className="font-serif text-[31px] font-bold tracking-tight text-ink">
          Thèmes et enjeux
        </h2>
      </div>
      <p className="mb-[30px] text-center text-base text-muted-foreground">
        Les grands thèmes du roman, chapitre par chapitre.
      </p>

      {themes.length === 0 ? (
        <p className="text-center text-muted-foreground">Bientôt disponible.</p>
      ) : (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3 sm:gap-[18px]">
          {themes.map(([theme, numeros]) => (
            <li
              key={theme}
              className="flex gap-5 rounded-[20px] border border-border bg-surface p-5 sm:p-[26px] shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
            >
              <span className="flex size-[54px] shrink-0 items-center justify-center rounded-[14px] border border-border bg-primary-tint text-primary">
                <IconeIdee className="size-[26px]" />
              </span>
              <div className="min-w-0">
                <h3 className="font-serif text-lg font-bold text-ink">{theme}</h3>
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {numeros.map((numero) => (
                    <span
                      key={numero}
                      className="rounded-full bg-primary-tint px-2.5 py-1 text-xs font-semibold text-primary"
                    >
                      Ch. {numero}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
