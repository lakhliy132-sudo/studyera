import Link from "next/link";

import CouvertureOeuvre from "@/components/CouvertureOeuvre";
import type { Oeuvre } from "@/types/base-de-donnees";

interface CarteOeuvreProps {
  oeuvre: Oeuvre;
  nombreChapitres: number;
}

/** Carte cliquable d'une œuvre, utilisée dans la grille de /oeuvres. */
export default function CarteOeuvre({ oeuvre, nombreChapitres }: CarteOeuvreProps) {
  return (
    <Link
      href={`/oeuvres/${oeuvre.slug}`}
      className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition hover:shadow-md"
    >
      <div className="relative aspect-[3/4] w-full">
        <CouvertureOeuvre url={oeuvre.couverture_url} titre={oeuvre.titre_fr} />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h2 className="text-base font-semibold text-foreground">{oeuvre.titre_fr}</h2>
        {oeuvre.titre_ar && (
          <p dir="rtl" lang="ar" className="font-arabe text-base leading-loose text-foreground">
            {oeuvre.titre_ar}
          </p>
        )}
        {oeuvre.auteur && <p className="text-sm text-muted-foreground">{oeuvre.auteur}</p>}
        <p className="mt-2 text-xs text-muted-foreground">
          {nombreChapitres} chapitre{nombreChapitres > 1 ? "s" : ""}
        </p>
      </div>
    </Link>
  );
}
