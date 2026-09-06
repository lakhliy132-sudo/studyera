import Link from "next/link";
import { notFound } from "next/navigation";

import { IconeFleche, IconeFlecheHaut } from "@/components/icones";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { recupererMatiereParSlug } from "@/lib/matieres";
import { recupererCoursParCategorie } from "@/lib/supabase/contenu";
import type { Cours } from "@/types/base-de-donnees";

interface PagePropsMatiere {
  params: Promise<{ matiere: string }>;
}

/** Une carte de leçon — extrait pour être réutilisé tel quel par la
 * grille unique (la plupart des matières) et par les deux grilles
 * "Histoire"/"Géographie" (histoire-geo, voir plus bas). `numero`
 * séparé de l'index du tableau : dans le rendu à deux grilles, la
 * numérotation de "Géographie" doit repartir après celle d'"Histoire",
 * pas de 1. */
function CarteLecon({ matiereSlug, cours, numero }: { matiereSlug: string; cours: Cours; numero: number }) {
  return (
    <li>
      <Link
        href={`/${matiereSlug}/${cours.slug}`}
        className="group flex h-full flex-col rounded-[20px] border border-border bg-surface p-[26px] shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
      >
        <div className="flex items-center justify-between">
          <span className="flex size-[52px] items-center justify-center rounded-full bg-primary-tint text-primary">
            <IconeFlecheHaut className="size-6" />
          </span>
          <span className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-bold text-primary-vif">
            {String(numero).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mt-4 font-serif text-lg leading-snug font-bold text-ink">{cours.titre}</h3>
        <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
          Lire le cours
          <IconeFleche className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </li>
  );
}

function GrilleLecons({ matiereSlug, lecons, numeroDepart = 1 }: { matiereSlug: string; lecons: Cours[]; numeroDepart?: number }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[18px]">
      {lecons.map((cours, index) => (
        <CarteLecon key={cours.id} matiereSlug={matiereSlug} cours={cours} numero={numeroDepart + index} />
      ))}
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
 * "Géographie") au lieu d'une seule — demandé explicitement par
 * l'utilisateur ("fais moi une partie de histoire et une partie de
 * geo"). Distinguées par le préfixe du `slug` (`histoire-*` /
 * `geographie-*`, voir l'insertion des 16 leçons dans `cours`) plutôt
 * qu'une colonne dédiée en base — propre à cette matière, les 2
 * autres (éducation islamique, arabe) gardent la grille unique.
 */
export default async function PageMatiereListe({ params }: PagePropsMatiere) {
  const { matiere: slugMatiere } = await params;
  const matiere = recupererMatiereParSlug(slugMatiere);
  if (!matiere) notFound();

  const lecons = await recupererCoursParCategorie(matiere.slug, FILIERE_ACTUELLE);
  const estHistoireGeo = matiere.slug === "histoire-geo";
  const leconsHistoire = estHistoireGeo ? lecons.filter((c) => c.slug.startsWith("histoire-")) : [];
  const leconsGeographie = estHistoireGeo ? lecons.filter((c) => c.slug.startsWith("geographie-")) : [];

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
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="flex size-8 items-center justify-center rounded-full border border-primary/20 bg-primary-tint text-primary">
              <matiere.Icone className="size-4" />
            </span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <h1 className="mt-5 font-serif text-4xl font-bold tracking-tight text-ink">
            {matiere.titreAvantAccent}
            <span className="text-primary italic">{matiere.titreAccent}</span>
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">{matiere.description}</p>
        </section>

        {lecons.length === 0 ? (
          <p className="rounded-md border border-dashed border-border-strong bg-background p-12 text-center text-muted-foreground">
            Bientôt disponible.
          </p>
        ) : estHistoireGeo ? (
          <div className="flex flex-col gap-12">
            {leconsHistoire.length > 0 && (
              <section className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">Histoire</h2>
                <GrilleLecons matiereSlug={matiere.slug} lecons={leconsHistoire} />
              </section>
            )}
            {leconsGeographie.length > 0 && (
              <section className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">Géographie</h2>
                <GrilleLecons matiereSlug={matiere.slug} lecons={leconsGeographie} numeroDepart={leconsHistoire.length + 1} />
              </section>
            )}
          </div>
        ) : (
          <GrilleLecons matiereSlug={matiere.slug} lecons={lecons} />
        )}
      </div>
    </main>
  );
}
