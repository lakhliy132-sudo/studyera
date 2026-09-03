import Link from "next/link";

import { IconeFleche, IconeLieu } from "@/components/icones";
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
 *
 * Pastilles "CH. N" transformées en vrais liens vers le chapitre, en
 * petits jetons dégradés — demandé explicitement par l'utilisateur, en
 * deux temps : "dans la partie de lieux ou ecrit chp fais la stylée"
 * (une première version avec juste bordure + flèche a été jugée pas
 * assez "esthétique" : "non je veux qlq chose d estethique"). Dégradé
 * `primary` → `primary-vif` et ombre bleutée, repris à l'identique du
 * bouton "Lire le texte intégral" de cette même page
 * (`shadow-[0_2px_10px_rgba(29,78,216,0.22)]`) plutôt qu'inventés, pour
 * que le jeton ait un vrai rendu "premium" cohérent avec le reste du
 * site plutôt qu'un simple badge à bordure.
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
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {chapitresDuLieu.map((chapitre) => (
                    <Link
                      key={chapitre.id}
                      href={`/oeuvres/${slug}/${chapitre.numero}`}
                      className="group/pastille flex items-center gap-1.5 rounded-[8px] px-3 py-1.5 text-xs font-bold text-white shadow-[0_2px_10px_rgba(29,78,216,0.22)] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(29,78,216,0.32)]"
                      style={{ backgroundImage: "linear-gradient(135deg, var(--color-primary), var(--color-primary-vif))" }}
                    >
                      {libelleChapitreCourt(chapitre, unite)}
                      <IconeFleche className="size-2.5 opacity-70 transition-transform group-hover/pastille:translate-x-0.5 group-hover/pastille:opacity-100" />
                    </Link>
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
