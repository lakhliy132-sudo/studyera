import { CATEGORIES_EVENEMENT, CATEGORIES_SAISIE } from "@/lib/categoriesEvenement";

/**
 * Bannière d'en-tête de /calendrier, refaite d'après la dernière
 * maquette de l'utilisateur ("FAIT MOI CA DEJA") : sur-titre "Mon
 * calendrier", titre sur deux lignes (la seconde en italique dans la
 * couleur du site), sous-titre, puis la légende des trois catégories
 * d'événement, avec les couleurs qu'elles ont dans le calendrier.
 *
 * Historique : une première maquette (pastille, quadrillage diagonal,
 * titre en dégradé) avait été raccourcie à la demande de l'utilisateur
 * ("elle est trop long") ; celle-ci la remplace.
 */
export default function EnteteCalendrier() {
  const legende = CATEGORIES_EVENEMENT.filter((c) => CATEGORIES_SAISIE.includes(c.cle));

  return (
    <div
      className="relative h-full overflow-hidden rounded-[28px] border border-border p-6 shadow-sm sm:p-10"
      style={{
        background:
          "linear-gradient(120deg, var(--color-primary-tint) 0%, var(--color-surface) 55%, color-mix(in srgb, #f472b6 10%, var(--color-surface)) 100%)",
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-16 size-56 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="relative">
        <p className="text-sm font-bold text-primary">Mon calendrier</p>
        <h1 className="mt-4 font-titre text-[30px] leading-[1.1] font-bold text-ink sm:text-[44px]">
          Tes examens et rappels,
          <br />
          <span className="text-primary italic">en un seul endroit.</span>
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Ne manque plus aucune échéance et organise ton temps.
        </p>

        <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Catégories d'événements">
          {legende.map((categorie) => (
            <li
              key={categorie.cle}
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink shadow-sm"
            >
              <span aria-hidden="true" className="size-2.5 rounded-full" style={{ backgroundColor: categorie.couleur }} />
              {categorie.libelle}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
