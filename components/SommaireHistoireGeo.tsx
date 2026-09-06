import Link from "next/link";

import { IconeGlobe, IconeHorloge } from "@/components/icones";
import type { Cours } from "@/types/base-de-donnees";

interface SommaireHistoireGeoProps {
  leconsHistoire: Cours[];
  leconsGeographie: Cours[];
  /** Slug du cours affiché, pour le mettre en évidence dans la liste. */
  sluCourant: string;
}

function GroupeSommaire({
  titre,
  icone,
  lecons,
  numeroDepart,
  sluCourant,
}: {
  titre: string;
  icone: React.ReactNode;
  lecons: Cours[];
  numeroDepart: number;
  sluCourant: string;
}) {
  if (lecons.length === 0) return null;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5 px-1 text-xs font-bold tracking-wide text-subtle-foreground uppercase">
        {icone}
        {titre}
      </div>
      <ul className="flex flex-col gap-0.5">
        {lecons.map((cours, index) => {
          const actif = cours.slug === sluCourant;
          return (
            <li key={cours.id}>
              <Link
                href={`/histoire-geo/${cours.slug}`}
                aria-current={actif ? "page" : undefined}
                className={`flex items-start gap-2.5 rounded-[10px] px-2.5 py-2 text-[13px] leading-snug transition-colors ${
                  actif
                    ? "bg-primary-tint font-semibold text-ink"
                    : "text-muted-foreground hover:bg-surface-muted hover:text-ink"
                }`}
              >
                <span
                  className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-[10.5px] font-bold ${
                    actif ? "bg-primary text-white" : "bg-surface-muted text-subtle-foreground"
                  }`}
                >
                  {numeroDepart + index}
                </span>
                <span className="line-clamp-2">{cours.titre}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Sommaire "à côté" des cours d'histoire-géo — demandé explicitement
 * par l'utilisateur ("ajoute a coté sommaire des cours stylée") :
 * liste stylée des 16 leçons, groupées Histoire/Géographie comme sur
 * la page /histoire-geo, leçon affichée mise en évidence. `sticky` :
 * reste visible au défilement du cours (souvent long), comme
 * BarreNavigation.tsx en haut de page.
 */
export default function SommaireHistoireGeo({ leconsHistoire, leconsGeographie, sluCourant }: SommaireHistoireGeoProps) {
  return (
    <aside className="sticky top-24 flex max-h-[calc(100vh-7rem)] w-full flex-col gap-5 overflow-y-auto rounded-[18px] border border-border bg-surface p-5 shadow-sm">
      <p className="font-serif text-base font-bold text-ink">Sommaire</p>
      <GroupeSommaire
        titre="Histoire"
        icone={<IconeHorloge className="size-3.5" />}
        lecons={leconsHistoire}
        numeroDepart={1}
        sluCourant={sluCourant}
      />
      <GroupeSommaire
        titre="Géographie"
        icone={<IconeGlobe className="size-3.5" />}
        lecons={leconsGeographie}
        numeroDepart={leconsHistoire.length + 1}
        sluCourant={sluCourant}
      />
    </aside>
  );
}
