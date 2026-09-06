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

      {/* Grande carte horizontale, photo en grand format en arrière-plan
       * (fondu de gauche à droite pour garder le texte lisible) plutôt
       * qu'une petite photo carrée isolée — demandé explicitement par
       * l'utilisateur, qui a détaillé précisément ce point après un
       * essai à petite photo carrée ("Ne mets surtout pas les petites
       * images carrées minuscules que j'ai actuellement" /
       * "L'image doit être intégrée dans la carte avec un effet
       * légèrement transparent/fondu"). 2 cartes par ligne (`sm:grid-
       * cols-2`), jamais 1 seule par ligne ("Ne mets surtout pas tout
       * sur une seule colonne"). */}
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
            className="group relative flex min-h-[172px] flex-col justify-between overflow-hidden rounded-[16px] border border-border shadow-sm transition-all duration-[250ms] ease-in-out hover:-translate-y-[3px] hover:shadow-[0_12px_28px_var(--halo-matiere)]"
          >
            <Image
              src={carte.photo}
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(100deg, color-mix(in srgb, var(--color-surface) 92%, transparent) 0%, color-mix(in srgb, var(--color-surface) 68%, transparent) 48%, color-mix(in srgb, var(--color-surface) 20%, transparent) 100%)",
              }}
            />

            <div className="relative z-[2] flex items-start justify-between gap-3 p-5">
              <div className="flex items-center gap-3">
                <span
                  style={{ backgroundColor: carte.couleur }}
                  className="flex size-11 shrink-0 items-center justify-center rounded-[12px] text-white"
                >
                  {carte.icone}
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-ink">{carte.titre}</h3>
                  <p className="text-[12px] text-muted-foreground">{carte.etiquette}</p>
                </div>
              </div>
              <IconeFleche className="size-4 shrink-0 text-subtle-foreground" />
            </div>

            <div className="relative z-[2] px-5 pb-5">
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
