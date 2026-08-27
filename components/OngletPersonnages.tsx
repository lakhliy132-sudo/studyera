import { IconePersonne } from "@/components/icones";
import type { Personnage } from "@/types/base-de-donnees";

interface OngletPersonnagesProps {
  personnages: Personnage[];
  /** numéro de chapitre par id de chapitre — pour afficher "Chapitre N"
   * en pied de carte à partir de `chapitre_apparition_id`, sans requête
   * dédiée : la page appelante a déjà la liste complète des chapitres. */
  numeroParChapitreId: Map<string, number>;
}

/**
 * Initiales pour le médaillon d'une carte personnage (2 lettres,
 * ex. "Sidi Mohammed" -> "SM"). Le contenu entre parenthèses est
 * ignoré (ex. "La Chouafa (tante Kenza)" -> "LC", pas "L(") : c'est un
 * surnom/complément, pas le nom principal.
 */
function initiales(nom: string): string {
  const motsPrincipaux = nom.replace(/\(.*?\)/g, "").trim().split(/\s+/);
  return motsPrincipaux
    .slice(0, 2)
    .map((mot) => mot[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * Contenu de l'onglet "Personnages" de /oeuvres/[slug] : fiche complète
 * des personnages du roman (tous, pas seulement ceux d'un chapitre —
 * voir PersonnagesChapitre pour la version filtrée par chapitre).
 *
 * Design repris du fichier de référence fourni par l'utilisateur
 * ("Rubriques — Le Dernier Jour d'un Condamné") : médaillon d'initiales,
 * nom en Playfair, nom arabe, pastille de rôle dorée, description en
 * Lora, pied de carte avec le chapitre de première apparition. Réutilise
 * un accent doré (`--or`) dédié à cet onglet — volontairement en
 * couleurs arbitraires locales plutôt qu'un token global : la palette
 * v2 du reste du site n'a pas d'accent doré (retiré lors de la refonte),
 * seule cette maquette-ci en demande un.
 */
export default function OngletPersonnages({ personnages, numeroParChapitreId }: OngletPersonnagesProps) {
  return (
    <section className="rounded-lg border border-border bg-surface p-9 pb-10 shadow-sm">
      <div className="mb-2 flex items-center justify-center gap-3.5 text-primary">
        <IconePersonne className="size-[30px]" />
        <h2 className="font-serif text-[31px] font-bold tracking-tight text-ink">
          Les personnages de l&apos;œuvre
        </h2>
      </div>
      <p className="mb-[30px] text-center text-base text-muted-foreground">
        Qui traverse le récit — le trombinoscope complet du roman.
      </p>

      {personnages.length === 0 ? (
        <p className="text-center text-muted-foreground">Bientôt disponible.</p>
      ) : (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[18px]">
          {personnages.map((personnage) => {
            const numero = personnage.chapitre_apparition_id
              ? numeroParChapitreId.get(personnage.chapitre_apparition_id)
              : undefined;

            return (
              <li
                key={personnage.id}
                className="relative overflow-hidden rounded-[20px] border border-border bg-surface p-[26px] pt-[30px] text-center shadow-sm transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-primary),#B08636)]"
                />
                <span
                  aria-hidden="true"
                  className="mx-auto mb-4 flex size-[82px] items-center justify-center rounded-full border-2 border-[#E8D5AC] bg-[linear-gradient(150deg,var(--color-primary-tint),#F4F8FF)] font-serif text-[27px] font-bold text-ink shadow-[inset_0_0_0_5px_var(--color-surface)]"
                >
                  {initiales(personnage.nom)}
                </span>
                <p className="font-serif text-xl font-bold text-ink">{personnage.nom}</p>
                {personnage.nom_ar && (
                  <p dir="rtl" lang="ar" className="mt-1 font-arabe text-[17px] font-medium text-primary-vif">
                    {personnage.nom_ar}
                  </p>
                )}
                {personnage.role && (
                  <span className="my-3.5 inline-block rounded-full border border-[#E8D5AC] bg-[#FAF3E4] px-3.5 py-1.5 text-xs font-bold tracking-wide text-[#B08636] uppercase">
                    {personnage.role}
                  </span>
                )}
                {personnage.description_fr && (
                  <p className="font-lecture text-[15.5px] leading-[1.75] text-muted-foreground">
                    {personnage.description_fr}
                  </p>
                )}
                {numero !== undefined && (
                  <p className="mt-[18px] border-t border-dashed border-border-strong pt-[15px] text-xs text-subtle-foreground">
                    Apparition : Chapitre {numero}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
