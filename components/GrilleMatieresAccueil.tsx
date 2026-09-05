import type { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import { IconeFleche, IconeLivre } from "@/components/icones";
import { MATIERES } from "@/lib/matieres";

interface GrilleMatieresAccueilProps {
  chapitresLus: number;
  totalChapitres: number;
}

interface CarteMatiereAffichage {
  slug: string;
  href: string;
  titre: string;
  etiquette: string;
  photo: string;
  couleur: string;
  Icone: (props: { className?: string }) => ReactElement;
}

/**
 * Français + les 3 matières de lib/matieres.ts, avec tout ce qu'il
 * faut pour reprendre la maquette au pixel près ("bien mais pas comme
 * la photo que je t ai envoyé") : pastille d'icône colorée (couleur
 * échantillonnée directement sur la maquette, voir les tokens
 * `--color-matiere-*` dans app/globals.css — le français reprend
 * `--color-primary`, déjà la même teinte que la maquette), photo en
 * fondu à droite, étiquette courte.
 */
const CARTES_MATIERES: CarteMatiereAffichage[] = [
  {
    slug: "francais",
    href: "/francais",
    titre: "Français",
    etiquette: "Lecture · Écriture · Expression",
    photo: "/francais-cours.jpg",
    couleur: "var(--color-primary)",
    Icone: IconeLivre,
  },
  ...MATIERES.map((matiere) => {
    const PAR_SLUG: Record<string, { etiquette: string; photo: string; couleur: string }> = {
      "education-islamique": {
        etiquette: "Foi · Valeurs · Citoyenneté",
        photo: "/education-islamique-cours.jpg",
        couleur: "var(--color-matiere-islamique)",
      },
      arabe: {
        etiquette: "Grammaire · Lecture · Expression",
        photo: "/arabe-cours.jpg",
        couleur: "var(--color-matiere-arabe)",
      },
      "histoire-geo": {
        etiquette: "Histoire · Géographie · EMC",
        photo: "/histoire-geo-cours.jpg",
        couleur: "var(--color-matiere-histoire-geo)",
      },
    };
    const infos = PAR_SLUG[matiere.slug];

    return {
      slug: matiere.slug,
      href: `/${matiere.slug}`,
      titre: `${matiere.titreAvantAccent}${matiere.titreAccent}`,
      etiquette: infos.etiquette,
      photo: infos.photo,
      couleur: infos.couleur,
      Icone: matiere.Icone,
    };
  }),
];

/**
 * "Mes matières" de l'accueil (élève connecté) — reprend une maquette
 * fournie par l'utilisateur ("j ai ajouté une photo dans le fichier
 * fais la comme ca dans l acuueil"). La maquette illustrait un
 * pourcentage pour chaque matière (68%, 54%, 72%, 49%) : seul celui du
 * français est réel (chapitres lus/total, déjà calculé pour le
 * tableau de bord) — les 3 autres matières n'ont encore aucun contenu
 * importé, leur carte affiche "Bientôt disponible" plutôt qu'un
 * chiffre inventé.
 *
 * Après plusieurs allers-retours pour se rapprocher de la maquette
 * (icône seule → une seule matière avec photo → 4 photos sans icône)
 * — "bien mais pas comme la photo que je t ai envoyé" — cette version
 * reprend les 3 éléments ensemble : pastille d'icône colorée (une
 * couleur par matière), photo en fondu à droite, étiquette courte.
 */
export default function GrilleMatieresAccueil({ chapitresLus, totalChapitres }: GrilleMatieresAccueilProps) {
  const pourcentageFrancais = totalChapitres > 0 ? Math.round((chapitresLus / totalChapitres) * 100) : 0;

  return (
    <div className="rounded-[24px] border border-border bg-surface p-6 shadow-sm sm:p-7">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="font-serif text-xl font-bold text-ink">Mes matières</p>
        <Link href="/matieres" className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
          Voir tout
          <IconeFleche className="size-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CARTES_MATIERES.map((carte) => (
          <Link
            key={carte.slug}
            href={carte.href}
            className="group relative flex flex-col overflow-hidden rounded-[14px] border border-border p-4 transition-colors hover:border-border-strong"
          >
            <Image
              src={carte.photo}
              alt=""
              aria-hidden="true"
              fill
              sizes="280px"
              className="pointer-events-none absolute inset-0 z-0 object-cover opacity-90 [mask-image:linear-gradient(to_right,white,white_38%,transparent)]"
            />

            <div className="relative z-10 flex flex-1 flex-col">
              <div className="flex items-start justify-between gap-2">
                <span
                  style={{ backgroundColor: carte.couleur }}
                  className="flex size-9 shrink-0 items-center justify-center rounded-[10px] text-white"
                >
                  <carte.Icone className="size-[18px]" />
                </span>
                <IconeFleche className="mt-1.5 size-3.5 shrink-0 text-ink/70 transition-transform group-hover:translate-x-0.5" />
              </div>
              <p className="mt-2.5 text-sm font-semibold text-ink">{carte.titre}</p>
              <p className="text-xs text-ink/70">{carte.etiquette}</p>

              {carte.slug === "francais" ? (
                <div className="mt-auto pt-3.5">
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/60">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${pourcentageFrancais}%` }} />
                  </div>
                  <p className="mt-1.5 text-right text-xs font-semibold text-primary">{pourcentageFrancais}%</p>
                </div>
              ) : (
                <p className="mt-auto w-fit rounded-full bg-surface-muted px-2.5 py-1 text-xs font-semibold text-subtle-foreground">
                  Bientôt disponible
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
