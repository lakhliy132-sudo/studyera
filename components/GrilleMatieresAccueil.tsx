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
 * Grande photo en arrière-plan de chaque carte (icône + titre/étiquette
 * + chevron par-dessus, dans le fondu opaque à gauche) — demandé
 * explicitement et en détail par l'utilisateur après un essai à petite
 * photo carrée isolée ("Ne mets surtout pas les petites images carrées
 * minuscules que j'ai actuellement" / "L'image doit être intégrée dans
 * la carte avec un effet légèrement transparent/fondu").
 *
 * `francais-matiere.jpg`, `education-islamique-matiere.jpg`,
 * `arabe-matiere.jpg`, `histoire-geo-matiere.jpg` : recadrés à haute
 * résolution (×3, JPEG qualité 92) directement depuis l'image de la
 * maquette envoyée par l'utilisateur (1672px de large), sur la zone
 * strictement photographique de chaque carte (ni icône, ni texte, ni
 * pourcentage/chevron d'origine) — les anciennes photos utilisées ici
 * (`*-cours.jpg`, `francais-livre-ouvert.jpg`) faisaient 46 à 95px de
 * haut, bien trop petites pour cette carte agrandie sans devenir
 * floues à l'agrandissement.
 */
const CARTES_MATIERES: CarteMatiere[] = [
  {
    slug: "francais",
    href: "/francais",
    titre: "Français",
    etiquette: "Lecture · Écriture · Expression",
    photo: "/francais-matiere.jpg",
    couleur: "var(--color-matiere-francais)",
    icone: <IconeLivre className="size-5" />,
  },
  {
    slug: "education-islamique",
    href: "/education-islamique",
    titre: "Éducation islamique",
    etiquette: "Foi · Valeurs · Citoyenneté",
    photo: "/education-islamique-matiere.jpg",
    couleur: "var(--color-matiere-islamique)",
    icone: <IconeCroissant className="size-5" />,
  },
  {
    slug: "arabe",
    href: "/arabe",
    titre: "Arabe",
    etiquette: "Grammaire · Lecture · Expression",
    photo: "/arabe-matiere.jpg",
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
    photo: "/histoire-geo-matiere.jpg",
    couleur: "var(--color-matiere-histoire-geo)",
    icone: <IconeGlobe className="size-5" />,
  },
];

/**
 * "Mes matières" de l'accueil (élève connecté), refait d'après la
 * dernière maquette de l'utilisateur ("on va essayer ca maintenant") :
 * chaque carte porte sa photo en bandeau, coupée en bas par une vague,
 * la pastille d'icône de la matière posée dessus, puis le titre,
 * l'étiquette, la progression et une flèche.
 *
 * Seul le français a une vraie progression (chapitres lus/total) : les
 * trois autres matières affichent "Pas encore de suivi" à la place des
 * pourcentages de la maquette (18 %, 35 %, 50 %), qui seraient inventés
 * (CLAUDE.md §1 et §9).
 */
export default function GrilleMatieresAccueil({ chapitresLus, totalChapitres }: GrilleMatieresAccueilProps) {
  const pourcentageFrancais = totalChapitres > 0 ? Math.round((chapitresLus / totalChapitres) * 100) : 0;

  return (
    <section className="rounded-[24px] border border-border bg-surface p-5 shadow-sm sm:p-7">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-primary-tint text-primary">
            <IconeLivre className="size-5" />
          </span>
          <div>
            <h2 className="font-serif text-2xl font-bold text-ink sm:text-[28px]">Mes matières</h2>
            <p className="text-sm text-muted-foreground">Accède à tes cours, révise et progresse à ton rythme.</p>
          </div>
        </div>
        <Link href="/matieres" className="mt-1 flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
          Voir tout
          <IconeFleche className="size-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
            className="group relative flex flex-col overflow-hidden rounded-[18px] border border-border bg-surface shadow-sm transition-all duration-[250ms] ease-in-out hover:-translate-y-[3px] hover:shadow-[0_14px_30px_var(--halo-matiere)]"
          >
            <div className="relative h-[96px] overflow-hidden sm:h-[108px]">
              <Image
                src={carte.photo}
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
              />
              {/* Vague qui coupe le bas de la photo, comme sur la maquette. */}
              <svg
                aria-hidden="true"
                viewBox="0 0 400 40"
                preserveAspectRatio="none"
                className="absolute inset-x-0 -bottom-px h-[34px] w-full"
              >
                <path d="M0 26 C 70 6, 150 2, 220 16 S 340 34, 400 8 V40 H0 Z" fill="var(--color-surface)" />
              </svg>
              <span
                style={{ backgroundColor: carte.couleur }}
                className="absolute top-3.5 left-4 flex size-12 items-center justify-center rounded-full text-white shadow-lg ring-4 ring-white/40"
              >
                {carte.icone}
              </span>
            </div>

            <div className="flex flex-1 flex-col px-5 pt-1 pb-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-serif text-xl leading-snug font-bold text-ink">{carte.titre}</h3>
                  <p className="text-[13px] text-muted-foreground">{carte.etiquette}</p>
                </div>
                <span
                  className="-mt-5 flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface shadow-md transition-transform group-hover:translate-x-0.5"
                  style={{ color: carte.couleur }}
                >
                  <IconeFleche className="size-4" />
                </span>
              </div>

              {carte.slug === "francais" ? (
                <div className="mt-3.5 flex items-center gap-3">
                  <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-surface-muted">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${pourcentageFrancais}%`, backgroundColor: carte.couleur }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground tabular-nums">{pourcentageFrancais}%</span>
                </div>
              ) : (
                <p className="mt-3.5 text-xs text-subtle-foreground">Pas encore de suivi</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
