import Link from "next/link";

import { IconeFleche } from "@/components/icones";
import type { Cours } from "@/types/base-de-donnees";

/** Fond sombre des pastilles : la couleur du site assombrie avec une
 * valeur fixe, pour rester foncée en mode sombre. */
const FONCE = "color-mix(in srgb, var(--color-primary) 55%, #0a1020)";

/**
 * Carte d'une liste de leçons aux titres arabes, d'après la maquette
 * d'histoire-géographie de l'utilisateur : pastille d'icône, titre,
 * titre arabe pâle, puis une ligne par leçon (numéro, titre en arabe,
 * flèche), de droite à gauche comme le texte. Sert aussi aux modules
 * d'arabe et aux parties d'éducation islamique.
 *
 * Écart avec la maquette : pas de "3 / 8 leçons lues" ni de coches. Le
 * suivi de lecture n'existe que pour les œuvres de français ; ici, le
 * nombre de leçons seulement.
 */
export default function CarteListeLecons({
  Icone,
  titre,
  titreArabe,
  lecons,
  hrefLecon,
  numeroDepart = 1,
}: {
  Icone: (props: { className?: string }) => React.ReactElement;
  titre: string;
  titreArabe?: string;
  lecons: Cours[];
  hrefLecon: (cours: Cours) => string;
  numeroDepart?: number;
}) {
  return (
    <section className="rounded-[24px] border border-border bg-surface p-5 shadow-sm sm:p-8">
      <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
        <div className="flex items-center gap-4">
          <span
            className="flex size-12 shrink-0 items-center justify-center rounded-[14px] text-white sm:size-14"
            style={{ background: FONCE }}
          >
            <Icone className="size-6" />
          </span>
          <div>
            <h2 className="font-serif text-2xl font-bold text-ink sm:text-[28px]">{titre}</h2>
            <p className="text-sm text-muted-foreground">
              {lecons.length} leçon{lecons.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>
        {titreArabe && (
          <p dir="rtl" lang="ar" className="hidden font-arabe text-2xl font-bold text-primary/25 sm:block">
            {titreArabe}
          </p>
        )}
      </div>

      <ol className="divide-y divide-border">
        {lecons.map((cours, index) => (
          <li key={cours.id}>
            <Link
              href={hrefLecon(cours)}
              dir="rtl"
              className="group flex items-center gap-4 py-4 sm:gap-5"
            >
              <span className="w-9 shrink-0 font-serif text-xl font-bold text-ink tabular-nums sm:text-2xl">
                {String(numeroDepart + index).padStart(2, "0")}
              </span>
              <span lang="ar" className="flex-1 font-arabe text-[17px] leading-relaxed text-ink group-hover:text-primary sm:text-[19px]">
                {cours.titre}
              </span>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                <IconeFleche className="size-4 rotate-180" />
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
