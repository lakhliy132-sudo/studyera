import Link from "next/link";

import { IconeFleche } from "@/components/icones";

/**
 * En-tête des pages de matière et de leurs sous-parties, d'après les
 * maquettes fournies par l'utilisateur pour le français, l'arabe,
 * l'histoire-géographie et l'éducation islamique ("fait moi ca a la
 * place de francais […] et touche aussi au sous partie") : lien de
 * retour, sur-titre en petites capitales, grand titre aligné à gauche
 * avec un mot en accent, description, et à droite soit un encart
 * (chiffres du français), soit le nom arabe en filigrane.
 *
 * Écart avec les maquettes : le sur-titre y annonce un coefficient
 * ("Examen régional, coefficient 4") ; aucun coefficient n'est connu
 * en base, il est retiré (voir CLAUDE.md).
 */
export default function EnTeteMatiere({
  retour,
  surTitre,
  titreAvant,
  titreAccent,
  titreApres,
  description,
  filigrane,
  aside,
}: {
  retour: { href: string; libelle: string };
  surTitre: string;
  titreAvant?: string;
  titreAccent: string;
  titreApres?: string;
  description?: string;
  /** Texte arabe affiché en grand et très pâle à droite. */
  filigrane?: string;
  /** Encart à droite, à la place du filigrane. */
  aside?: React.ReactNode;
}) {
  return (
    <header className="flex flex-col gap-6">
      <Link
        href={retour.href}
        className="flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:underline sm:text-base"
      >
        <IconeFleche className="size-4 rotate-180" />
        {retour.libelle}
      </Link>

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase sm:text-[13px]">
            {surTitre}
          </p>
          <h1 className="mt-3 font-titre text-[34px] leading-[1.05] font-bold text-ink sm:text-5xl lg:text-[64px]">
            {titreAvant}
            <span className="text-primary italic">{titreAccent}</span>
            {titreApres}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </div>

        {aside ? (
          <div className="relative z-10 shrink-0">{aside}</div>
        ) : (
          filigrane && (
            <p
              aria-hidden="true"
              dir="rtl"
              lang="ar"
              className="pointer-events-none hidden font-arabe text-[64px] leading-none font-bold text-primary/10 select-none lg:block xl:text-[88px]"
            >
              {filigrane}
            </p>
          )
        )}
      </div>
    </header>
  );
}
