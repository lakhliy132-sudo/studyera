import Link from "next/link";

import { IconeChevronBas, IconeFleche, IconeLivreOuvert } from "@/components/icones";
import { decouperTitreChapitre, type LibelleUniteChapitre } from "@/lib/uniteChapitre";

interface FilArianeChapitreProps {
  slug: string;
  titreOeuvre: string;
  chapitre: { numero: number; titre_fr: string };
  unite: LibelleUniteChapitre;
}

/**
 * Fil d'Ariane en haut de /oeuvres/[slug]/[numero], d'après la maquette
 * fournie par l'utilisateur (« fais-la comme ça ») : une carte à liseré
 * coloré, une pastille avec un livre ouvert, puis « ← l'œuvre ›
 * Chapitre 2 › titre du chapitre », le numéro dans la couleur de la
 * palette et le titre en gris.
 *
 * Pour Antigone, le numéro de scène est lu dans le titre (« Scène 11 :
 * Antigone devant Créon ») ; une scène sans numéro (Prologue, Mythe
 * d'Œdipe) n'affiche que son titre.
 */
export default function FilArianeChapitre({ slug, titreOeuvre, chapitre, unite }: FilArianeChapitreProps) {
  const { numeroScene, titre } = decouperTitreChapitre(chapitre);
  const numero = unite.numeroDejaDansTitre
    ? numeroScene !== null
      ? `${unite.singulier} ${numeroScene}`
      : null
    : `${unite.singulier} ${chapitre.numero}`;

  return (
    <nav
      aria-label="Fil d'Ariane"
      className="relative overflow-hidden rounded-[18px] border border-border bg-surface shadow-[0_12px_32px_-20px_rgba(27,58,143,0.35)]"
    >
      <span aria-hidden="true" className="absolute inset-y-0 start-0 w-1 bg-primary" />
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-1.5 py-3.5 ps-5 pe-4 text-[15px] sm:gap-x-4 sm:py-5 sm:ps-7 sm:pe-6 sm:text-lg">
        <li aria-hidden="true" className="hidden sm:block">
          <span className="flex size-12 items-center justify-center rounded-[12px] border border-border bg-surface text-primary shadow-sm">
            <IconeLivreOuvert className="size-6" />
          </span>
        </li>
        <li>
          <Link href={`/oeuvres/${slug}`} className="flex items-center gap-2.5 text-ink transition-colors hover:text-primary">
            <IconeFleche className="size-4 shrink-0 rotate-180" />
            {titreOeuvre}
          </Link>
        </li>
        {numero && (
          <li className="flex items-center gap-3 text-primary sm:gap-4">
            <IconeChevronBas className="size-4 -rotate-90 text-muted-foreground" />
            {numero}
          </li>
        )}
        <li aria-current="page" className="flex min-w-0 items-center gap-3 text-muted-foreground sm:gap-4">
          <IconeChevronBas className="size-4 shrink-0 -rotate-90" />
          {titre}
        </li>
      </ol>
    </nav>
  );
}
