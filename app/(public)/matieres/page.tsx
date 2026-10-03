import type { ReactElement } from "react";

import Link from "next/link";

import BandeauProgrammeMatieres from "@/components/BandeauProgrammeMatieres";
import CarteMatiereEleve, {
  type MatiereEleve,
} from "@/components/CarteMatiereEleve";
import CarteRepriseMatieres from "@/components/CarteRepriseMatieres";
import { IconeFleche, IconeLivre } from "@/components/icones";
import { joursAvant, prochaineSession } from "@/lib/calendrier";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { creerClientServeur } from "@/lib/supabase/server";
import { compterCoursParCategorie } from "@/lib/supabase/contenu";
import {
  recupererActivitesRecentes,
  recupererProgressionParOeuvre,
  recupererRepriseLecture,
} from "@/lib/supabase/tableauDeBord";
import {
  accentMatiere,
  bordureMatiere,
  fondMatiere,
  pastilleMatiere,
} from "@/lib/palette-matieres";
import {
  IllustrationGlobe,
  IllustrationLivre,
  IllustrationLivreOuvert,
  IllustrationMosquee,
} from "@/components/IllustrationsMatieres";

interface CarteMatierePage {
  href: string;
  /** Début du titre, en gras — la partie en italique suit. */
  titre: string;
  titreItalique?: string;
  description: string;
  /** Slug de la matière : l'accent et les teintes qui en découlent
   * sont calculés au rendu (lib/palette-matieres.ts), pour suivre le
   * mode clair ou sombre. */
  slug: string;
  Illustration: (props: { className?: string }) => ReactElement;
}

/**
 * Les 4 cartes de /matieres, dans l'ordre de la maquette fournie par
 * l'utilisateur ("Fais ca dans partie de matiere") : Français, Arabe,
 * Histoire-Géographie, Éducation islamique.
 *
 * Titres et descriptions repris mot pour mot de cette maquette
 * (l'ancienne page disait par exemple "Cours d'arabe" et "Œuvres au
 * programme, cours de langue..."). Les libellés de `lib/matieres.ts`
 * ne sont pas touchés : ils servent ailleurs, notamment au lien
 * "Retour cours d'arabe" des pages de leçon.
 *
 * Les couleurs sont celles déjà attribuées à chaque matière sur le
 * site (`--color-matiere-*`), pas celles de la maquette : la maquette
 * montre un français rose, mais le français est bleu partout ailleurs
 * (accueil, barres de progression) — le changer ici seulement aurait
 * désaccordé les deux pages.
 */
const CARTES: CarteMatierePage[] = [
  {
    href: "/francais",
    titre: "Français",
    description:
      "Étudie la langue française, la littérature, la production écrite et la correction.",
    slug: "francais",
    Illustration: IllustrationLivre,
  },
  {
    href: "/arabe",
    titre: "Arabe",
    description:
      "Textes, grammaire et expression pour renforcer tes compétences en langue arabe.",
    slug: "arabe",
    Illustration: IllustrationLivreOuvert,
  },
  {
    href: "/histoire-geo",
    titre: "Histoire - ",
    titreItalique: "Géographie",
    description:
      "Comprends le passé, explore le monde et analyse les sociétés.",
    slug: "histoire-geo",
    Illustration: IllustrationGlobe,
  },
  {
    href: "/education-islamique",
    titre: "Éducation ",
    titreItalique: "islamique",
    description:
      "Cours, notions clés et repères pour l'examen d'éducation islamique.",
    slug: "education-islamique",
    Illustration: IllustrationMosquee,
  },
];

/**
 * /matieres — page d'accueil de toutes les matières, y compris le
 * français. Le français avait d'abord sa propre page hub (/francais)
 * et son propre lien de nav, séparé de "Matières" — corrigé à la
 * demande explicite de l'utilisateur ("NON FAIS LA DANS LA PARTIE DE
 * MATIERE") : /francais existe toujours, mais on y accède par une
 * carte ici.
 *
 * Mise en page refaite d'après une maquette fournie par l'utilisateur
 * ("Fais ca dans partie de matiere") : titre centré sous un livre,
 * grille de 2 colonnes de cartes larges, chacune teintée de la
 * couleur de sa matière, avec pastille d'icône ronde et bouton plein
 * "Découvrir". Auparavant : 3 colonnes de cartes carrées, toutes
 * bleues.
 *
 * Les teintes de fond passent par `color-mix` sur le token de la
 * matière plutôt que par des couleurs pastel fixes : en mode sombre,
 * un pastel figé deviendrait illisible.
 */
/**
 * /matieres pour un élève connecté — d'après la maquette fournie par
 * l'utilisateur ("fais ce changement sur la partie les matieres") :
 * bandeau de compte à rebours, reprise de lecture, puis une carte par
 * matière avec décompte, progression et dernière visite.
 *
 * La version visiteur (plus bas) ne change pas : un bandeau de
 * progression n'aurait aucun sens pour quelqu'un qui n'a pas de compte.
 *
 * Deux blocs de la maquette ne sont pas repris tels quels :
 * - « 4 matières, coefficient total 10 » : les coefficients ne sont pas
 *   en base (voir CarteMatiereEleve).
 * - « À revoir en priorité », qui s'appuie sur « tes dernières copies
 *   corrigées » : la table `copies` est vide et le correcteur n'existe
 *   pas encore. Le bloc est affiché avec un état honnête plutôt que
 *   rempli d'exemples inventés.
 */
async function VueEleve({ userId }: { userId: string }) {
  const [progression, reprise, coursParCategorie, activites] =
    await Promise.all([
      recupererProgressionParOeuvre(userId),
      recupererRepriseLecture(userId),
      compterCoursParCategorie(FILIERE_ACTUELLE),
      recupererActivitesRecentes(userId, 1),
    ]);

  const totalChapitres = progression.parOeuvre.reduce(
    (somme, o) => somme + o.totalChapitres,
    0,
  );
  const session = prochaineSession();
  const jours = session ? joursAvant(session.debut) : null;

  // Seul le français a un suivi de lecture (table `progression`) et des
  // activités enregistrées : les autres matières passent `faits` et
  // `derniereActivite` à `null`, et la carte le dit explicitement.
  const matieres: MatiereEleve[] = CARTES.map((carte) => {
    const estFrancais = carte.slug === "francais";
    return {
      href: carte.href,
      titre: `${carte.titre}${carte.titreItalique ?? ""}`,
      description: carte.description,
      slug: carte.slug,
      Illustration: carte.Illustration,
      total: estFrancais ? totalChapitres : (coursParCategorie[carte.slug] ?? 0),
      unite: estFrancais ? "chapitre" : "leçon",
      faits: estFrancais ? progression.totalChapitresLus : null,
      derniereActivite: estFrancais ? (activites[0]?.createdAt ?? null) : null,
    };
  });

  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-6 px-6 pt-6 pb-10 sm:px-9 sm:pt-9 sm:pb-16">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Toutes tes matières de l&apos;examen régional, au même endroit.
          </h1>
          <span className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-muted-foreground">
            1<sup>re</sup> année du baccalauréat
          </span>
        </div>

        <BandeauProgrammeMatieres
          joursAvantExamen={jours}
          chapitresLus={progression.totalChapitresLus}
          totalChapitres={totalChapitres}
        />

        {reprise && (
          <CarteRepriseMatieres
            reprise={reprise}
            chapitresLus={
              progression.parOeuvre.find((o) => o.slug === reprise.oeuvreSlug)
                ?.chapitresLus ?? 0
            }
            totalChapitres={
              progression.parOeuvre.find((o) => o.slug === reprise.oeuvreSlug)
                ?.totalChapitres ?? 0
            }
          />
        )}

        <section className="flex flex-col gap-5">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-xl font-bold text-ink">
              Mes matières
            </h2>
            <span className="shrink-0 text-sm text-muted-foreground">
              {matieres.length} matières
            </span>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:gap-[18px] lg:grid-cols-2">
            {matieres.map((matiere) => (
              <CarteMatiereEleve
                key={matiere.href}
                matiere={matiere}
                accent={accentMatiere(matiere.slug)}
              />
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-ink">
            À revoir en priorité
          </h2>
          <p className="rounded-[18px] border border-dashed border-border-strong bg-surface p-5 text-sm text-muted-foreground">
            Cette liste se remplira à partir de tes copies corrigées et de tes
            résultats aux quiz. Rien n&apos;a encore été corrigé, donc rien à
            te signaler pour l&apos;instant.
          </p>
        </section>
      </div>
    </main>
  );
}

/** Page vue par un visiteur non connecté — inchangée. */
function VueVisiteur() {
  return (
    <main className="relative flex flex-col overflow-hidden">
      {/* Fond propre à cette page — repris de la maquette : un blanc
       * très légèrement lavande, avec de grandes taches pastel floues
       * dans les coins. Valeurs fixes plutôt que les tokens du site :
       * les cartes de la page sont elles aussi en couleurs fixes
       * (voir CARTES), un fond qui basculerait en sombre les
       * laisserait flotter sur du noir. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--color-background) 0%, color-mix(in srgb, var(--color-matiere-arabe) 7%, var(--color-background)) 100%)",
        }}
      >
        <div
          className="absolute -top-28 -left-32 size-[420px] rounded-full opacity-[0.14] blur-3xl"
          style={{ backgroundColor: "var(--color-matiere-arabe)" }}
        />
        <div
          className="absolute top-24 -right-36 size-[460px] rounded-full opacity-[0.12] blur-3xl"
          style={{ backgroundColor: "var(--color-matiere-francais)" }}
        />
        <div
          className="absolute -bottom-32 left-1/3 size-[420px] rounded-full opacity-[0.10] blur-3xl"
          style={{ backgroundColor: "var(--color-matiere-histoire-geo)" }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 px-6 pt-12 pb-16">
        <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="text-primary">
            <IconeLivre className="size-10" />
          </span>
          <h1
            className="mt-4 font-serif text-[42px] leading-tight font-bold tracking-tight"
            style={{ color: "var(--color-ink)" }}
          >
            Les <span className="text-primary italic">matières</span>
          </h1>
          <p
            className="mt-3 max-w-xl text-[15px]"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            Explore toutes les matières de ton parcours et progresse à ton
            rythme.
          </p>
          <span
            aria-hidden="true"
            className="mt-5 block h-1 w-20 rounded-full bg-primary"
          />
        </section>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-9">
          {CARTES.map((carte) => {
            const accent = accentMatiere(carte.slug);
            return (
              <li key={carte.href}>
                <Link
                  href={carte.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border p-5 sm:p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    backgroundColor: fondMatiere(accent),
                    borderColor: bordureMatiere(accent),
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -bottom-8 size-32 rounded-full opacity-60"
                    style={{ backgroundColor: pastilleMatiere(accent) }}
                  />
                  <div className="relative flex items-start gap-5">
                    <span className="relative shrink-0">
                      <span
                        className="flex size-[72px] items-center justify-center rounded-full"
                        style={{ backgroundColor: pastilleMatiere(accent) }}
                      >
                        <carte.Illustration className="size-11" />
                      </span>
                      {/* Les trois petits traits d'éclat de la maquette. */}
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 22"
                        className="absolute -top-1 -right-2 h-6 w-5"
                        style={{ color: accent }}
                      >
                        <path
                          d="M3 6 8 2M9 11h6M5 17l6-3"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <h2
                        className="font-serif text-[22px] leading-snug font-bold"
                        style={{ color: "var(--color-ink)" }}
                      >
                        {carte.titre}
                        {carte.titreItalique && (
                          <span className="italic">{carte.titreItalique}</span>
                        )}
                      </h2>
                      <p
                        className="mt-1.5 font-lecture text-[14.5px] leading-relaxed"
                        style={{ color: "var(--color-muted-foreground)" }}
                      >
                        {carte.description}
                      </p>
                    </div>
                  </div>

                  <span
                    className="relative mt-6 flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
                    style={{ backgroundColor: accent }}
                  >
                    Découvrir
                    <IconeFleche className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

/**
 * /matieres — aiguillage entre la vue d'un élève connecté (tableau de
 * ses matières, de sa progression et de son examen) et la vue d'un
 * visiteur (présentation des quatre matières).
 */
export default async function PageMatieres() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? <VueEleve userId={user.id} /> : <VueVisiteur />;
}
