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
  /** Référence à un token `--color-matiere-*` (app/globals.css). */
  couleur: string;
  /** Fond de la pastille d'icône — reprend exactement les valeurs
   * rgba du code fourni (teinte très claire de la couleur d'accent) ;
   * gardée en valeur littérale plutôt qu'un token, propre à cet usage. */
  teinte: string;
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
 * Liseré du haut + halo au survol teintés par matière — demandé
 * explicitement par l'utilisateur ("la partie de chaque matiere ...
 * fais la avec une couleur differente de l autre") : avant, les 4
 * cartes partageaient exactement la même bordure grise et le même
 * halo bleu au survol, seule la petite pastille d'icône changeait de
 * couleur. Un premier essai teintait la bordure entière très
 * légèrement (26 % de mélange) : trop discret pour se voir comme "une
 * couleur différente" au premier coup d'œil. Un bandeau plein de 4px
 * en haut de chaque carte (`carte.couleur` exacte) rend la différence
 * évidente sans repeindre toute la carte.
 */
const CARTES_MATIERES: CarteMatiere[] = [
  {
    slug: "francais",
    href: "/francais",
    titre: "Français",
    etiquette: "Lecture · Écriture · Expression",
    photo: "/francais-livre-ouvert.jpg",
    couleur: "var(--color-matiere-francais)",
    teinte: "rgba(224,238,255,.95)",
    icone: <IconeLivre className="size-5" />,
  },
  {
    slug: "education-islamique",
    href: "/education-islamique",
    titre: "Éducation islamique",
    etiquette: "Foi · Valeurs · Citoyenneté",
    photo: "/education-islamique-cours.jpg",
    couleur: "var(--color-matiere-islamique)",
    teinte: "rgba(225,248,242,.95)",
    icone: <IconeCroissant className="size-5" />,
  },
  {
    slug: "arabe",
    href: "/arabe",
    titre: "Arabe",
    etiquette: "Grammaire · Lecture · Expression",
    photo: "/arabe-cours.jpg",
    couleur: "var(--color-matiere-arabe)",
    teinte: "rgba(238,230,255,.95)",
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
    teinte: "rgba(255,239,218,.95)",
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

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        {CARTES_MATIERES.map((carte) => (
          <Link
            key={carte.slug}
            href={carte.href}
            style={
              {
                borderTopColor: carte.couleur,
                borderTopWidth: "4px",
                // Halo de survol propre à la matière, lu par `hover:shadow-[...]` ci-dessous.
                "--halo-matiere": `color-mix(in srgb, ${carte.couleur} 26%, transparent)`,
              } as CSSProperties
            }
            className="group relative h-[142px] overflow-hidden rounded-[16px] border border-border bg-surface transition-all duration-[250ms] ease-in-out hover:-translate-y-[3px] hover:shadow-[0_12px_28px_var(--halo-matiere)]"
          >
            <Image
              src={carte.photo}
              alt=""
              aria-hidden="true"
              fill
              sizes="280px"
              className="absolute inset-0 object-cover opacity-[0.72] transition-transform duration-300 ease-in-out group-hover:scale-[1.04]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, color-mix(in srgb, var(--color-surface) 98%, transparent) 0%, color-mix(in srgb, var(--color-surface) 91%, transparent) 42%, color-mix(in srgb, var(--color-surface) 30%, transparent) 100%)",
              }}
            />

            <div className="relative z-[2] flex h-full items-start gap-3.5 p-[18px]">
              <span
                style={{ backgroundColor: carte.teinte, color: carte.couleur }}
                className="flex size-12 shrink-0 items-center justify-center rounded-[13px] backdrop-blur-[5px]"
              >
                {carte.icone}
              </span>

              <div className="pt-[3px]">
                <h3 className="mb-[5px] text-[15px] font-bold text-ink">{carte.titre}</h3>
                <p className="text-[11px] text-muted-foreground">{carte.etiquette}</p>
              </div>

              <IconeFleche className="relative z-[3] ml-auto size-5 shrink-0 text-subtle-foreground" />
            </div>

            <div className="absolute right-[18px] bottom-[17px] left-[18px] z-[4] flex items-center gap-2">
              {carte.slug === "francais" ? (
                <>
                  <div className="h-[7px] flex-1 overflow-hidden rounded-full bg-surface-muted">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${pourcentageFrancais}%`, backgroundColor: carte.couleur }}
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-muted-foreground">{pourcentageFrancais}%</span>
                </>
              ) : (
                <span className="rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-semibold text-subtle-foreground">
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
