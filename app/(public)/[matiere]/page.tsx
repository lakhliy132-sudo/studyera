import Link from "next/link";
import { notFound } from "next/navigation";

import { GrilleLecons } from "@/components/GrilleLeconsMatiere";
import { IconeFleche, IconeLivre, IconeQuiz } from "@/components/icones";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { recupererMatiereParSlug } from "@/lib/matieres";
import { recupererCoursParCategorie } from "@/lib/supabase/contenu";

interface PagePropsMatiere {
  params: Promise<{ matiere: string }>;
}

/** Les 2 cases du hub histoire-geo ("Cours"/"Flash cards") — mêmes
 * dimensions et style que SECTIONS_FRANCAIS (lib/francais.ts), pas de
 * fichier de données séparé pour seulement 2 entrées propres à cette
 * seule matière. */
const CASES_HISTOIRE_GEO = [
  {
    href: "/histoire-geo/cours",
    titreAvantAccent: "Les ",
    titreAccent: "cours",
    description: "16 leçons d'histoire et de géographie, réparties par thème.",
    Icone: IconeLivre,
  },
  {
    href: "/histoire-geo/flashcards",
    titreAvantAccent: "Flash",
    titreAccent: "cards",
    description: "Révise les notions clés en un coup d'œil.",
    Icone: IconeQuiz,
  },
] as const;

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
 * Histoire-géographie : hub à 2 cases ("Cours"/"Flash cards") au lieu
 * de lister les leçons directement ici — demandé explicitement par
 * l'utilisateur ("je veux que les cours sois dans une cases et la
 * partie de flash cardes dans une autre come francais"), même
 * principe que /francais (Œuvres, Langue, Production écrite,
 * Correcteur IA sont chacune leur propre page, pas listées sur
 * /francais). Les leçons elles-mêmes vivent maintenant sur
 * /histoire-geo/cours (deux grilles Histoire/Géographie, voir ce
 * fichier), les fiches sur /histoire-geo/flashcards. Les 2 autres
 * matières génériques (éducation islamique, arabe) gardent la grille
 * de leçons directement sur /[matiere], inchangée.
 */
export default async function PageMatiereListe({ params }: PagePropsMatiere) {
  const { matiere: slugMatiere } = await params;
  const matiere = recupererMatiereParSlug(slugMatiere);
  if (!matiere) notFound();

  const estHistoireGeo = matiere.slug === "histoire-geo";
  const lecons = estHistoireGeo ? [] : await recupererCoursParCategorie(matiere.slug, FILIERE_ACTUELLE);

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

        {estHistoireGeo ? (
          <ul className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-[18px] sm:grid-cols-2">
            {CASES_HISTOIRE_GEO.map((cas) => (
              <li key={cas.href}>
                <Link
                  href={cas.href}
                  className="group flex h-full flex-col rounded-[20px] border border-border bg-surface p-[26px] shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
                >
                  <span className="flex size-[52px] items-center justify-center rounded-full bg-primary-tint text-primary">
                    <cas.Icone className="size-6" />
                  </span>
                  <h2 className="mt-4 font-serif text-lg leading-snug font-bold text-ink">
                    {cas.titreAvantAccent}
                    <span className="text-primary italic">{cas.titreAccent}</span>
                  </h2>
                  <p className="mt-1.5 font-lecture text-[14.5px] leading-relaxed text-muted-foreground">{cas.description}</p>
                  <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Découvrir
                    <IconeFleche className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : lecons.length === 0 ? (
          <p className="rounded-md border border-dashed border-border-strong bg-background p-12 text-center text-muted-foreground">
            Bientôt disponible.
          </p>
        ) : (
          <GrilleLecons matiereSlug={matiere.slug} lecons={lecons} />
        )}
      </div>
    </main>
  );
}
