import Link from "next/link";

import { IconeLieu } from "@/components/icones";
import type { FamilleLieux } from "@/lib/famillesLieux";
import type { Chapitre } from "@/types/base-de-donnees";

/**
 * Onglet "Lieux" d'une œuvre aux lieux nombreux (La Boîte à merveilles :
 * 19 en base), demandé par l'utilisateur ("c est pas tres comprehensible
 * fait que pour elle un truc comprehensible et mieux"). Le bandeau à une
 * couleur par lieu, lisible pour Antigone (2 lieux), devenait un damier
 * de rayures.
 *
 * Deux lectures simples à la place :
 * 1. les grands endroits du roman (lib/famillesLieux.ts), chacun avec sa
 *    couleur, le nombre de chapitres où il revient et les lieux précis
 *    qu'il réunit ;
 * 2. chapitre par chapitre, où se passe l'action : chaque lieu en
 *    pastille, de la couleur de son grand endroit.
 *
 * L'encadré "À retenir" est calculé à partir des décomptes.
 */
const COULEURS = [
  "color-mix(in srgb, var(--color-primary) 72%, #0a1020)",
  "#d39b12",
  "#2f8f83",
  "#b2547a",
  "#6d5bd0",
];
const COULEUR_AUTRES = "#8a93a6";

interface Famille {
  nom: string;
  couleur: string;
  /** Lieux précis de la famille réellement présents en base, chacun
   * avec ses chapitres. */
  lieux: { nom: string; chapitres: Chapitre[] }[];
  chapitres: Chapitre[];
}

export default function LieuxParFamilles({
  slug,
  chapitres,
  familles: definitions,
}: {
  slug: string;
  chapitres: Chapitre[];
  familles: FamilleLieux[];
}) {
  const avecLieu = chapitres.filter((c) => c.lieux.length > 0);

  const familleDe = (lieu: string) => definitions.findIndex((f) => f.lieux.includes(lieu));
  const toutesFamilles = [...definitions, { nom: "Autres lieux", lieux: [] as string[] }];

  const familles: Famille[] = toutesFamilles
    .map((definition, i) => {
      const lieux = new Map<string, Chapitre[]>();
      for (const chapitre of avecLieu) {
        for (const lieu of chapitre.lieux) {
          const index = familleDe(lieu);
          const ici = index === -1 ? i === definitions.length : index === i;
          if (ici) lieux.set(lieu, [...(lieux.get(lieu) ?? []), chapitre]);
        }
      }
      const chapitresFamille = avecLieu.filter((c) => c.lieux.some((l) => lieux.has(l)));
      return {
        nom: definition.nom,
        couleur: i < definitions.length ? COULEURS[i % COULEURS.length] : COULEUR_AUTRES,
        lieux: [...lieux.entries()].map(([nom, liste]) => ({ nom, chapitres: liste })),
        chapitres: chapitresFamille,
      };
    })
    .filter((f) => f.chapitres.length > 0)
    .sort((a, b) => b.chapitres.length - a.chapitres.length);

  const couleurDuLieu = (lieu: string) => familles.find((f) => f.lieux.some((l) => l.nom === lieu))?.couleur ?? COULEUR_AUTRES;

  const total = avecLieu.length;
  const [premiere, seconde] = familles;
  const aRetenir = premiere
    ? `« ${premiere.nom} » revient dans ${premiere.chapitres.length} chapitres sur ${total}${
        seconde ? `, « ${seconde.nom} » dans ${seconde.chapitres.length}` : ""
      }. ${familles.reduce((n, f) => n + f.lieux.length, 0)} lieux précis en tout.`
    : null;

  return (
    <section className="rounded-lg border border-border bg-surface p-5 pb-10 shadow-sm sm:p-9">
      <div className="mb-2 flex items-center justify-center gap-3.5 text-primary">
        <IconeLieu className="size-[30px]" />
        <h2 className="font-serif text-[31px] font-bold tracking-tight text-ink">Les lieux</h2>
      </div>
      <p className="mb-[30px] text-center text-base text-muted-foreground">
        Les grands endroits du roman, puis où se passe chaque chapitre.
      </p>

      {familles.length === 0 ? (
        <p className="text-center text-muted-foreground">Bientôt disponible.</p>
      ) : (
        <>
          <h3 className="mb-4 font-serif text-xl font-bold text-ink sm:text-2xl">Les grands lieux du roman</h3>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {familles.map((famille) => (
              <li
                key={famille.nom}
                className="overflow-hidden rounded-[20px] border bg-background"
                style={{ borderColor: `color-mix(in srgb, ${famille.couleur} 35%, transparent)` }}
              >
                <div className="h-1.5" style={{ background: famille.couleur }} />
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex size-10 shrink-0 items-center justify-center rounded-[12px] text-white"
                      style={{ background: famille.couleur }}
                    >
                      <IconeLieu className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-serif text-lg leading-tight font-bold text-ink">{famille.nom}</p>
                      <p className="text-sm text-muted-foreground">
                        {famille.chapitres.length} {famille.chapitres.length > 1 ? "chapitres" : "chapitre"} sur{" "}
                        {total}
                      </p>
                    </div>
                  </div>
                  {/* Les chapitres de ce grand lieu, d'un coup d'œil. */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {avecLieu.map((chapitre) => {
                      const present = famille.chapitres.includes(chapitre);
                      return (
                        <Link
                          key={chapitre.id}
                          href={`/oeuvres/${slug}/${chapitre.numero}`}
                          title={chapitre.titre_fr}
                          className={`flex size-7 items-center justify-center rounded-full text-xs font-bold transition-transform hover:-translate-y-0.5 ${
                            present ? "text-white" : "border border-border text-subtle-foreground"
                          }`}
                          style={present ? { background: famille.couleur } : undefined}
                        >
                          {chapitre.numero}
                        </Link>
                      );
                    })}
                  </div>
                  {(famille.lieux.length > 1 || famille.lieux[0]?.nom !== famille.nom) && (
                    <ul className="mt-4 flex flex-col gap-1.5 border-t border-border pt-3.5">
                      {famille.lieux.map((lieu) => (
                        <li key={lieu.nom} className="flex items-baseline justify-between gap-3 text-[14.5px]">
                          <span className="text-foreground">{lieu.nom}</span>
                          <span className="shrink-0 text-xs text-muted-foreground">
                            ch. {lieu.chapitres.map((c) => c.numero).join(", ")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 mb-4 font-serif text-xl font-bold text-ink sm:text-2xl">Chapitre par chapitre</h3>
          <ol className="flex flex-col divide-y divide-border overflow-hidden rounded-[20px] border border-border bg-background">
            {avecLieu.map((chapitre) => (
              <li key={chapitre.id} className="flex flex-col gap-2.5 px-4 py-3.5 sm:flex-row sm:items-center sm:gap-5 sm:px-5">
                <Link
                  href={`/oeuvres/${slug}/${chapitre.numero}`}
                  className="flex min-w-0 items-center gap-3 sm:w-[300px] sm:shrink-0"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-muted text-sm font-bold text-ink">
                    {chapitre.numero}
                  </span>
                  <span className="text-[15px] font-semibold text-ink hover:text-primary">{chapitre.titre_fr}</span>
                </Link>
                <ul className="flex flex-wrap gap-1.5 ps-11 sm:ps-0">
                  {chapitre.lieux.map((lieu) => {
                    const couleur = couleurDuLieu(lieu);
                    return (
                      <li
                        key={lieu}
                        className="flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[13px] text-foreground"
                        style={{
                          borderColor: `color-mix(in srgb, ${couleur} 40%, transparent)`,
                          background: `color-mix(in srgb, ${couleur} 10%, transparent)`,
                        }}
                      >
                        <span className="size-2 shrink-0 rounded-full" style={{ background: couleur }} />
                        {lieu}
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ol>

          {aRetenir && (
            <p className="mt-6 border-s-[3px] border-[#d39b12] ps-4 font-lecture text-[15px] leading-relaxed text-muted-foreground italic">
              <span className="font-semibold not-italic text-ink">À retenir : </span>
              {aRetenir}
            </p>
          )}
        </>
      )}
    </section>
  );
}
