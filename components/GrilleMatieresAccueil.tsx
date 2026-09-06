import type { CSSProperties, ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import { IconeCroissant, IconeFleche, IconeGlobe, IconeLivre } from "@/components/icones";

interface GrilleMatieresAccueilProps {
  chapitresLus: number;
  totalChapitres: number;
}

interface CarteMatiere {
  slug: string;
  href: string;
  titre: string;
  etiquette: string;
  photo: string;
  /** Référence à un token `--color-matiere-*` (app/globals.css) —
   * fond plein de la pastille d'icône (icône en blanc dessus) et
   * couleur de la barre de progression. */
  couleur: string;
  icone: ReactElement;
}

/**
 * Une carte par matière — structure, dimensions et couleurs reprises
 * du code HTML/CSS fourni directement par l'utilisateur (`.subjects`,
 * `.subject-card`...), après plusieurs essais jugés trop éloignés de
 * la maquette. Icônes emoji du code d'origine (📖 ☪ ض 🌍) remplacées
 * par les icônes SVG déjà en place sur le site (aucune icône du site
 * n'est un emoji, voir components/icones.tsx) ; "ض" (lettre arabe, pas
 * un emoji) gardée telle quelle, en vraie police arabe.
 *
 * Trois couleurs "de confort" du code fourni (texte du
 * titre/étiquette/pourcentage, fond de la barre de progression) sont
 * remplacées par les tokens du site (`text-ink`/`text-muted-foreground`,
 * `bg-surface-muted`) plutôt que les valeurs littérales exactes :
 * visuellement identiques en mode clair, mais ces valeurs fixes
 * resteraient illisibles en mode sombre. Les couleurs d'accent propres
 * à chaque matière (icône, barre de progression) restent, elles,
 * exactement celles fournies (voir les tokens `--color-matiere-*` dans
 * app/globals.css).
 *
 * Halo de survol teinté par matière — demandé explicitement par
 * l'utilisateur ("la partie de chaque matiere ... fais la avec une
 * couleur differente de l autre") : avant, les 4 cartes partageaient
 * exactement le même halo bleu au survol, seule la petite pastille
 * d'icône changeait de couleur.
 *
 * Carte réorganisée (icône pleine couleur + titre/étiquette + petite
 * photo carrée + chevron sur une ligne, barre de progression en
 * dessous) pour coller exactement à une maquette envoyée par
 * l'utilisateur ("je veux comme ca a 100 pour 100") — remplace un
 * essai précédent où la photo occupait toute la carte en fond, jugé
 * peu lisible une fois les cartes réduites en taille.
 */
const CARTES_MATIERES: CarteMatiere[] = [
  {
    slug: "francais",
    href: "/francais",
    titre: "Français",
    etiquette: "Lecture · Écriture · Expression",
    photo: "/francais-livre-ouvert.jpg",
    couleur: "var(--color-matiere-francais)",
    icone: <IconeLivre className="size-5" />,
  },
  {
    slug: "education-islamique",
    href: "/education-islamique",
    titre: "Éducation islamique",
    etiquette: "Foi · Valeurs · Citoyenneté",
    photo: "/education-islamique-cours.jpg",
    couleur: "var(--color-matiere-islamique)",
    icone: <IconeCroissant className="size-5" />,
  },
  {
    slug: "arabe",
    href: "/arabe",
    titre: "Arabe",
    etiquette: "Grammaire · Lecture · Expression",
    photo: "/arabe-cours.jpg",
    couleur: "var(--color-matiere-arabe)",
    icone: (
      <span className="font-arabe text-[20px] font-bold" aria-hidden="true">
        ض
      </span>
    ),
  },
  {
    slug: "histoire-geo",
    href: "/histoire-geo",
    titre: "Histoire - Géographie",
    etiquette: "Histoire · Géographie · EMC",
    photo: "/histoire-geo-cours.jpg",
    couleur: "var(--color-matiere-histoire-geo)",
    icone: <IconeGlobe className="size-5" />,
  },
];

/**
 * "Mes matières" de l'accueil (élève connecté). Seul le français a
 * une vraie progression (chapitres lus/total, déjà calculée pour le
 * tableau de bord) : les 3 autres matières n'ont encore aucun contenu
 * importé, leur carte affiche "Bientôt disponible" à la place d'un
 * pourcentage inventé — le code fourni illustrait un pourcentage pour
 * les 4, mais seul celui du français correspond à une vraie donnée.
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

      {/* Carte horizontale (icône pleine couleur + titre/étiquette +
       * petite photo carrée + chevron, barre de progression en pleine
       * largeur en bas) — reprend exactement la maquette envoyée par
       * l'utilisateur ("je veux comme ca a 100 pour 100"), à la place
       * de la photo en fond de carte des essais précédents. */}
      <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
        {CARTES_MATIERES.map((carte) => (
          <Link
            key={carte.slug}
            href={carte.href}
            style={
              {
                // Halo de survol propre à la matière, lu par `hover:shadow-[...]` ci-dessous.
                "--halo-matiere": `color-mix(in srgb, ${carte.couleur} 26%, transparent)`,
              } as CSSProperties
            }
            className="group flex flex-col gap-3 rounded-[16px] border border-border bg-surface p-4 shadow-sm transition-all duration-[250ms] ease-in-out hover:-translate-y-[3px] hover:shadow-[0_12px_28px_var(--halo-matiere)]"
          >
            <div className="flex items-center gap-3">
              <span
                style={{ backgroundColor: carte.couleur }}
                className="flex size-11 shrink-0 items-center justify-center rounded-[12px] text-white"
              >
                {carte.icone}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-[15px] font-bold text-ink">{carte.titre}</h3>
                <p className="truncate text-[12px] text-muted-foreground">{carte.etiquette}</p>
              </div>

              <div className="relative size-14 shrink-0 overflow-hidden rounded-[12px]">
                <Image
                  src={carte.photo}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="56px"
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.08]"
                />
              </div>

              <IconeFleche className="size-4 shrink-0 text-subtle-foreground" />
            </div>

            {carte.slug === "francais" ? (
              <div className="flex items-center gap-2">
                <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-surface-muted">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pourcentageFrancais}%`, backgroundColor: carte.couleur }}
                  />
                </div>
                <span className="text-[11px] font-semibold text-muted-foreground">{pourcentageFrancais}%</span>
              </div>
            ) : (
              <span className="w-fit rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-semibold text-subtle-foreground">
                Bientôt disponible
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
