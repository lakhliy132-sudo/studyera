import Link from "next/link";
import { notFound } from "next/navigation";

import { EnTeteSection, GrilleLecons } from "@/components/GrilleLeconsMatiere";
import { IconeFleche, IconeGlobe, IconeHorloge } from "@/components/icones";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { recupererMatiereParSlug } from "@/lib/matieres";
import { recupererCoursParCategorie } from "@/lib/supabase/contenu";

interface PagePropsMatiere {
  params: Promise<{ matiere: string }>;
}

/** Les 4 modules du programme d'arabe — demandé explicitement par
 * l'utilisateur ("dans la partie d arabe fais 4 case المجزوءة 1 et 2 et
 * 3 et 4"). Une couleur par module, comme les puces de leçons ailleurs
 * sur le site. Aucun contenu de cours d'arabe n'a encore été fourni :
 * les cases affichent "Bientôt disponible" plutôt qu'un lien qui
 * mènerait à une page vide (même principe que le reste du site). */
const MODULES_ARABE = [
  { numero: 1, titre: "المجزوءة 1", couleur: "#2563eb" },
  { numero: 2, titre: "المجزوءة 2", couleur: "#7c3aed" },
  { numero: 3, titre: "المجزوءة 3", couleur: "#059669" },
  { numero: 4, titre: "المجزوءة 4", couleur: "#ea580c" },
] as const;

function CartesModulesArabe() {
  return (
    <ul className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
      {MODULES_ARABE.map((module) => (
        <li key={module.numero}>
          <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-surface shadow-sm">
            <div aria-hidden="true" style={{ backgroundColor: module.couleur }} className="h-1.5 w-full" />
            <div className="flex flex-1 flex-col p-[26px]">
              <span
                style={{ backgroundColor: module.couleur }}
                className="flex size-[52px] items-center justify-center rounded-full text-xl font-bold text-white"
              >
                {module.numero}
              </span>
              <h2 dir="rtl" className="font-arabe mt-4 text-2xl leading-snug font-bold text-ink">
                {module.titre}
              </h2>
              <span className="mt-4 w-fit rounded-full bg-surface-muted px-2.5 py-1 text-xs font-semibold text-subtle-foreground">
                Bientôt disponible
              </span>
            </div>
          </div>
        </li>
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

  const lecons = await recupererCoursParCategorie(matiere.slug, FILIERE_ACTUELLE);
  const estHistoireGeo = matiere.slug === "histoire-geo";
  const estArabe = matiere.slug === "arabe";
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

        {estArabe ? (
          <CartesModulesArabe />
        ) : lecons.length === 0 ? (
          <p className="rounded-md border border-dashed border-border-strong bg-background p-12 text-center text-muted-foreground">
            Bientôt disponible.
          </p>
        ) : estHistoireGeo ? (
          <div className="flex flex-col gap-12">
            {leconsHistoire.length > 0 && (
              <section className="flex flex-col gap-6">
                <EnTeteSection icone={<IconeHorloge className="size-5" />} titre="Histoire" nombre={leconsHistoire.length} />
                <GrilleLecons matiereSlug={matiere.slug} lecons={leconsHistoire} />
              </section>
            )}
            {leconsGeographie.length > 0 && (
              <section className="flex flex-col gap-6">
                <EnTeteSection icone={<IconeGlobe className="size-5" />} titre="Géographie" nombre={leconsGeographie.length} />
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
