import Image from "next/image";
import Link from "next/link";

import { IconeFleche, IconeLivreOuvert } from "@/components/icones";
import { COUVERTURES_OEUVRES } from "@/lib/couvertures";
import { libelleUniteChapitre } from "@/lib/uniteChapitre";
import type { OeuvreProgression } from "@/lib/supabase/tableauDeBord";

interface ListeProgrammeOeuvresProps {
  parOeuvre: OeuvreProgression[];
}

/**
 * Section "Au programme cette année" du tableau de bord.
 *
 * Présentée en cartes avec la couverture du livre, à la demande de
 * l'utilisateur ("j ai pas aimé ce modele comme ca", capture de la
 * liste à l'appui) : la version précédente était une liste de lignes
 * avec un numéro, un filet de progression très fin et un "0/22" en
 * petit — froide, et rien n'y donnait envie d'ouvrir une œuvre.
 *
 * Les couvertures sont les fichiers `public/couvertures/<slug>.webp`,
 * dont le nom correspond au slug de l'œuvre. Une œuvre sans fichier
 * affiche une pastille d'icône à la place : on ne suppose pas
 * l'existence d'une image.
 */
export default function ListeProgrammeOeuvres({
  parOeuvre,
}: ListeProgrammeOeuvresProps) {
  if (parOeuvre.length === 0) return null;

  return (
    <section
      className="overflow-hidden rounded-[24px] border shadow-sm"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--color-matiere-arabe) 7%, var(--color-surface))",
        borderColor:
          "color-mix(in srgb, var(--color-primary) 22%, var(--color-border))",
      }}
    >
      <span
        aria-hidden="true"
        className="block h-1.5 w-full"
        style={{ backgroundColor: "var(--color-matiere-arabe)" }}
      />
      <div className="p-5 sm:p-7 sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
              <IconeLivreOuvert className="size-5" />
            </span>
            <p className="font-serif text-xl font-bold text-ink">
              Au programme cette année
            </p>
          </div>
          <Link
            href="/oeuvres"
            className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Toutes les œuvres
            <IconeFleche className="size-3.5" />
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {parOeuvre.map((oeuvre) => {
            const unite = libelleUniteChapitre(oeuvre.slug);
            const pourcentage =
              oeuvre.totalChapitres > 0
                ? Math.round(
                    (oeuvre.chapitresLus / oeuvre.totalChapitres) * 100,
                  )
                : 0;
            const couverture = COUVERTURES_OEUVRES[oeuvre.slug];

            return (
              <li key={oeuvre.slug}>
                <Link
                  href={`/oeuvres/${oeuvre.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-border bg-surface transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="relative flex h-[190px] items-center justify-center overflow-hidden">
                    {couverture ? (
                      <Image
                        src={couverture}
                        alt=""
                        aria-hidden="true"
                        width={220}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <span className="flex size-12 items-center justify-center rounded-full bg-primary-tint text-primary">
                        <IconeLivreOuvert className="size-6" />
                      </span>
                    )}
                  </span>

                  <span className="flex flex-1 flex-col p-5">
                    <span className="text-[17px] leading-snug font-semibold text-ink">
                      {oeuvre.titreFr}
                    </span>
                    {oeuvre.titreAr && (
                      <span
                        dir="rtl"
                        lang="ar"
                        className="font-arabe mt-1 text-[15px] text-muted-foreground"
                      >
                        {oeuvre.titreAr}
                      </span>
                    )}
                    {oeuvre.auteur && (
                      <span className="mt-1 text-[13px] text-subtle-foreground">
                        {oeuvre.auteur}
                      </span>
                    )}

                    <span className="mt-auto pt-4">
                      <span className="flex items-center justify-between text-[13px] font-semibold text-muted-foreground">
                        <span>
                          {oeuvre.chapitresLus} / {oeuvre.totalChapitres}{" "}
                          {unite.pluriel.toLowerCase()}
                        </span>
                        <span className="text-primary">{pourcentage} %</span>
                      </span>
                      <span
                        role="progressbar"
                        aria-valuenow={oeuvre.chapitresLus}
                        aria-valuemin={0}
                        aria-valuemax={oeuvre.totalChapitres}
                        aria-label={`${oeuvre.titreFr} — ${oeuvre.chapitresLus} sur ${oeuvre.totalChapitres} ${unite.pluriel.toLowerCase()}`}
                        className="mt-2 block h-2 overflow-hidden rounded-full bg-surface-muted"
                      >
                        <span
                          className="block h-full rounded-full bg-primary"
                          style={{ width: `${pourcentage}%` }}
                        />
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
