import Link from "next/link";
import { notFound } from "next/navigation";

import { EnTeteSection, GrilleLecons } from "@/components/GrilleLeconsMatiere";
import { IconeFleche, IconeGlobe, IconeHorloge } from "@/components/icones";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { recupererMatiereParSlug } from "@/lib/matieres";
import { couleurMatiere } from "@/lib/palette-matieres";
import { MODULES_ARABE, prefixeSlugModule } from "@/lib/modules-arabe";
import { recupererCoursParCategorie } from "@/lib/supabase/contenu";
import type { Cours } from "@/types/base-de-donnees";

interface PagePropsMatiere {
  params: Promise<{ matiere: string }>;
}

/** Les 4 cases des modules d'arabe. Aucune leçon n'est listée ici —
 * demandé explicitement par l'utilisateur ("je veux que les lecons du
 * المجزوءة ne s affiche pas au debut jusqu au je clique sur المجزوءة
 * concerné", puis "quand on clique on voit chaque cours dans une
 * case") : cliquer sur un module ouvre sa page
 * /arabe/majzuaa/[numero], où chaque leçon a sa propre case. Un
 * premier essai dépliait la liste sur place, écarté par l'utilisateur.
 *
 * Un module sans leçon reste une case inerte marquée "Bientôt
 * disponible", plutôt qu'un lien qui mènerait à une page vide. */
function CartesModulesArabe({ lecons }: { lecons: Cours[] }) {
  return (
    <ul className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
      {MODULES_ARABE.map((module) => {
        const nombre = lecons.filter((c) =>
          c.slug.startsWith(prefixeSlugModule(module.numero)),
        ).length;

        const interieur = (
          <>
            <div
              aria-hidden="true"
              style={{ backgroundColor: module.couleur }}
              className="h-1.5 w-full"
            />
            <div className="flex flex-1 flex-col p-[26px]">
              <span className="flex items-center justify-between gap-3">
                <span
                  style={{ backgroundColor: module.couleur }}
                  className="flex size-[52px] shrink-0 items-center justify-center rounded-full text-xl font-bold text-white"
                >
                  {module.numero}
                </span>
                {nombre > 0 && (
                  <IconeFleche className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                )}
              </span>
              <span
                dir="rtl"
                className="font-arabe mt-4 block text-2xl leading-snug font-bold text-ink"
              >
                {module.titre}
              </span>
              {module.sousTitre && (
                <span
                  dir="rtl"
                  className="font-arabe mt-1.5 block text-sm leading-snug text-muted-foreground"
                >
                  {module.sousTitre}
                </span>
              )}
              <span className="mt-3 w-fit rounded-full bg-surface-muted px-2.5 py-1 text-xs font-semibold text-subtle-foreground">
                {nombre === 0
                  ? "Bientôt disponible"
                  : `${nombre} leçon${nombre > 1 ? "s" : ""}`}
              </span>
            </div>
          </>
        );

        return (
          <li key={module.numero}>
            {nombre === 0 ? (
              <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-surface shadow-sm">
                {interieur}
              </div>
            ) : (
              <Link
                href={`/arabe/majzuaa/${module.numero}`}
                className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-surface shadow-sm transition-shadow hover:shadow-md"
              >
                {interieur}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/**
 * /[matiere] — page de liste d'une matière ajoutée à la demande de
 * l'utilisateur (éducation islamique, arabe, histoire-géographie —
 * voir lib/matieres.ts). Générique et paramétrée par `matiere.slug`
 * plutôt qu'un dossier par matière : même principe que /langue et
 * /production-ecrite (une catégorie de la table `cours` chacune), mais
 * sans dupliquer la page pour chaque nouvelle matière.
 *
 * `notFound()` si le segment d'URL ne correspond à aucune matière
 * connue (`MATIERES`) — évite qu'une route générique n'avale n'importe
 * quelle URL au premier niveau du site.
 *
 * Contrairement à /langue (12 leçons listées en dur, la plupart
 * "Bientôt disponible"), rien n'est inventé ici : aucun plan de cours
 * ne nous a été fourni pour ces 3 matières, donc la page affiche
 * directement ce qui existe dans `cours` — un message "Bientôt
 * disponible" tant que rien n'a été importé, comme /oeuvres avant
 * son premier contenu.
 *
 * Histoire-géographie : deux grilles séparées ("Histoire" /
 * "Géographie"), distinguées par le préfixe du `slug` (`histoire-*` /
 * `geographie-*`) plutôt qu'une colonne dédiée en base. Un hub à 2
 * cases ("Cours"/"Flash cards", à la manière de /francais) a existé
 * entretemps, retiré quand les flashcards sont passées dans chaque
 * page de cours ("enleve cette partie de flash cards et ajoute la
 * dans chaque cours") : avec une seule case restante, l'étape
 * intermédiaire n'apportait plus qu'un clic de plus.
 */
export default async function PageMatiereListe({ params }: PagePropsMatiere) {
  const { matiere: slugMatiere } = await params;
  const matiere = recupererMatiereParSlug(slugMatiere);
  if (!matiere) notFound();

  const lecons = await recupererCoursParCategorie(
    matiere.slug,
    FILIERE_ACTUELLE,
  );
  // Même teinte que les pages de cours de la matière, pour que la
  // couleur ne change pas d'un clic à l'autre.
  const couleur = couleurMatiere(matiere.slug);
  const estHistoireGeo = matiere.slug === "histoire-geo";
  const estArabe = matiere.slug === "arabe";
  const leconsHistoire = estHistoireGeo
    ? lecons.filter((c) => c.slug.startsWith("histoire-"))
    : [];
  const leconsGeographie = estHistoireGeo
    ? lecons.filter((c) => c.slug.startsWith("geographie-"))
    : [];

  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-9 px-6 pt-9 pb-16">
        <Link
          href="/matieres"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Retour aux matières
        </Link>

        <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3">
            <span
              style={{ backgroundImage: `linear-gradient(to right, transparent, color-mix(in srgb, ${couleur} 40%, transparent))` }}
              className="h-px w-16"
            />
            <span
              style={{
                backgroundColor: `color-mix(in srgb, ${couleur} 14%, var(--color-surface))`,
                borderColor: `color-mix(in srgb, ${couleur} 24%, transparent)`,
                color: couleur,
              }}
              className="flex size-8 items-center justify-center rounded-full border"
            >
              <matiere.Icone className="size-4" />
            </span>
            <span
              style={{ backgroundImage: `linear-gradient(to left, transparent, color-mix(in srgb, ${couleur} 40%, transparent))` }}
              className="h-px w-16"
            />
          </div>
          <h1 className="mt-5 font-serif text-4xl font-bold tracking-tight text-ink">
            {matiere.titreAvantAccent}
            <span style={{ color: couleur }} className="italic">
              {matiere.titreAccent}
            </span>
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            {matiere.description}
          </p>
        </section>

        {estArabe ? (
          <CartesModulesArabe lecons={lecons} />
        ) : lecons.length === 0 ? (
          <p className="rounded-md border border-dashed border-border-strong bg-background p-12 text-center text-muted-foreground">
            Bientôt disponible.
          </p>
        ) : estHistoireGeo ? (
          <div className="flex flex-col gap-12">
            {leconsHistoire.length > 0 && (
              <section className="flex flex-col gap-6">
                <EnTeteSection
                  icone={<IconeHorloge className="size-5" />}
                  titre="Histoire"
                  nombre={leconsHistoire.length}
                  couleur={couleur}
                />
                <GrilleLecons
                  matiereSlug={matiere.slug}
                  lecons={leconsHistoire}
                  couleur={couleur}
                />
              </section>
            )}
            {leconsGeographie.length > 0 && (
              <section className="flex flex-col gap-6">
                <EnTeteSection
                  icone={<IconeGlobe className="size-5" />}
                  titre="Géographie"
                  nombre={leconsGeographie.length}
                  couleur={couleur}
                />
                <GrilleLecons
                  matiereSlug={matiere.slug}
                  lecons={leconsGeographie}
                  numeroDepart={leconsHistoire.length + 1}
                  couleur={couleur}
                />
              </section>
            )}
          </div>
        ) : (
          <GrilleLecons
            matiereSlug={matiere.slug}
            lecons={lecons}
            couleur={couleur}
          />
        )}
      </div>
    </main>
  );
}
