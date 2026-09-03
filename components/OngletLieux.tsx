import Link from "next/link";

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
 *
 * Pastilles "CH. N" transformées en vrais liens vers le chapitre —
 * demandé explicitement par l'utilisateur, affiné en plusieurs passes :
 * "dans la partie de lieux ou ecrit chp fais la stylée" (une première
 * version avec juste bordure + flèche jugée pas assez "esthétique" :
 * "non je veux qlq chose d estethique") ; un dégradé `primary` →
 * `primary-vif` plein avec flèche, jugé "trop long" ("non pas comme je
 * veux pas quelle soit comme ca long") — corrigé en jeton compact
 * `rounded-full`, sans flèche ; puis "change de couleur je veux qlq
 * chose de transparente ou bleu ciel" : le fond dégradé plein remplacé
 * par un fond `primary/10` translucide (laisse deviner la carte
 * blanche en dessous) + bordure `primary/20` + texte `primary` — reste
 * dans les tokens `--color-*` existants (pas de nouvelle couleur
 * "bleu ciel" ajoutée hors du système de tokens du site, voir l'en-tête
 * de app/globals.css) tout en donnant l'effet clair et transparent
 * demandé.
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
                      className="flex min-w-[30px] items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-center text-[11px] font-bold text-primary backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/20"
                    >
                      {libelleChapitreCourt(chapitre, unite)}
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
