import { IconeLieu } from "@/components/icones";
import { libelleChapitreCourt, libelleUniteChapitre } from "@/lib/uniteChapitre";
import type { Chapitre } from "@/types/base-de-donnees";

interface OngletLieuxProps {
  slug: string;
  chapitres: Chapitre[];
}

/**
 * Contenu de l'onglet "Lieux" de /oeuvres/[slug] : tous les lieux de
 * l'œuvre, agrégés depuis `chapitres.lieux` (une liste de noms par
 * chapitre, sans description ni nom arabe en base — voir les
 * migrations). Chaque lieu devient une carte avec son nom et les
 * numéros de chapitres où il apparaît.
 *
 * Dédoublonnage par nom exact uniquement : des variantes comme
 * "Le Msid" et "Le Msid (porte de Derb Noualla)" restent des entrées
 * distinctes (ce sont bien des lieux différents), assumé tel quel.
 *
 * Design repris du fichier de référence fourni par l'utilisateur
 * (rubriques (3).html, section "Lieux"), adapté à la donnée disponible
 * (pas de description/arabe : seuls nom + chapitres sont affichés).
 */
export default function OngletLieux({ slug, chapitres }: OngletLieuxProps) {
  // "Scène N"/"Prologue" pour Antigone plutôt que "Ch. N" — voir lib/uniteChapitre.ts.
  const unite = libelleUniteChapitre(slug);

  const lieuxVersChapitres = new Map<string, Chapitre[]>();
  for (const chapitre of chapitres) {
    for (const lieu of chapitre.lieux) {
      const chapitresDuLieu = lieuxVersChapitres.get(lieu) ?? [];
      chapitresDuLieu.push(chapitre);
      lieuxVersChapitres.set(lieu, chapitresDuLieu);
    }
  }
  const lieux = [...lieuxVersChapitres.entries()].sort((a, b) =>
    a[0].localeCompare(b[0], "fr"),
  );

  return (
    <section className="rounded-lg border border-border bg-surface p-9 pb-10 shadow-sm">
      <div className="mb-2 flex items-center justify-center gap-3.5 text-primary">
        <IconeLieu className="size-[30px]" />
        <h2 className="font-serif text-[31px] font-bold tracking-tight text-ink">
          Les lieux de l&apos;œuvre
        </h2>
      </div>
      <p className="mb-[30px] text-center text-base text-muted-foreground">
        Les lieux où se déroule le récit, chapitre par chapitre.
      </p>

      {lieux.length === 0 ? (
        <p className="text-center text-muted-foreground">Bientôt disponible.</p>
      ) : (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[18px]">
          {lieux.map(([lieu, chapitresDuLieu]) => (
            <li
              key={lieu}
              className="flex gap-5 rounded-[20px] border border-border bg-surface p-[26px] shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
            >
              <span className="flex size-[66px] shrink-0 items-center justify-center rounded-[14px] border border-border bg-primary-tint text-primary">
                <IconeLieu className="size-[30px]" />
              </span>
              <div className="min-w-0">
                <h3 className="font-serif text-lg font-bold text-ink">{lieu}</h3>
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {chapitresDuLieu.map((chapitre) => (
                    <span
                      key={chapitre.id}
                      className="rounded-full bg-primary-tint px-2.5 py-1 text-xs font-semibold text-primary"
                    >
                      {libelleChapitreCourt(chapitre, unite)}
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
