import Link from "next/link";
import { notFound } from "next/navigation";

import CarteListeLecons from "@/components/CarteListeLecons";
import EnTeteMatiere from "@/components/EnTeteMatiere";
import { GrilleLecons } from "@/components/GrilleLeconsMatiere";
import { IconeFleche, IconeGlobe, IconeHorloge } from "@/components/icones";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { recupererMatiereParSlug } from "@/lib/matieres";
import { MODULES_ARABE, prefixeSlugModule } from "@/lib/modules-arabe";
import { leconsDeSection, SECTIONS_ISLAMIQUE, type SectionIslamique } from "@/lib/sections-islamique";
import { recupererCoursParCategorie } from "@/lib/supabase/contenu";
import type { Cours } from "@/types/base-de-donnees";

interface PagePropsMatiere {
  params: Promise<{ matiere: string }>;
}

/** Fond sombre des cartes mises en avant et jaune de leur pastille,
 * comme sur les maquettes de l'utilisateur. Le fond est la couleur du
 * site assombrie avec une valeur fixe, pour rester foncé en mode sombre. */
const FONCE = "color-mix(in srgb, var(--color-primary) 55%, #0a1020)";
const JAUNE = "#f7c948";

/** Nom arabe de chaque matière, posé en filigrane dans l'en-tête. */
const FILIGRANES: Record<string, string> = {
  arabe: "اللغة العربية",
  "histoire-geo": "التاريخ والجغرافيا",
  "education-islamique": "التربية الإسلامية",
};

const ORDINAUX_ARABES = ["الأولى", "الثانية", "الثالثة", "الرابعة"];
const CHIFFRES_ARABES = ["١", "٢", "٣", "٤"];

function nombreLecons(n: number) {
  return n === 0 ? "Bientôt disponible" : `${n} leçon${n > 1 ? "s" : ""}`;
}

/**
 * Les 4 modules d'arabe, d'après la maquette de l'utilisateur : grand
 * chiffre arabe en filigrane, "Module N", nom du module, nombre de
 * leçons. Aucune leçon n'est listée ici — demandé explicitement ("je
 * veux que les lecons du المجزوءة ne s affiche pas au debut jusqu au je
 * clique sur المجزوءة concerné") : un module ouvre sa page
 * /arabe/majzuaa/[numero].
 *
 * Le premier module est la carte sombre, "par défaut le truc bleu pour
 * la première partie et après ça dépend" : sans suivi de lecture en
 * arabe, rien ne permet encore de savoir où en est l'élève, la carte
 * reste donc sur le premier module, marquée "Pour commencer" (et non
 * "En cours", qui supposerait un suivi). Pas de barre de progression,
 * pour la même raison.
 *
 * Un module sans leçon reste une case inerte "Bientôt disponible".
 */
function CartesModulesArabe({ lecons }: { lecons: Cours[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
      {MODULES_ARABE.map((module, i) => {
        const nombre = lecons.filter((c) => c.slug.startsWith(prefixeSlugModule(module.numero))).length;
        const sombre = i === 0;

        const interieur = (
          <>
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute top-16 left-6 font-arabe text-[110px] leading-none font-bold select-none ${
                sombre ? "text-white/10" : "text-primary/10"
              }`}
            >
              {CHIFFRES_ARABES[i]}
            </span>
            <div className="relative flex items-center justify-between gap-3">
              {sombre ? (
                <span className="rounded-full px-3.5 py-1 text-sm font-bold text-[#1d2340]" style={{ background: JAUNE }}>
                  Pour commencer
                </span>
              ) : (
                <span />
              )}
              <span className={`text-sm font-bold ${sombre ? "text-white/80" : "text-muted-foreground"}`}>
                Module {module.numero}
              </span>
            </div>
            <p
              dir="rtl"
              lang="ar"
              className={`relative mt-16 font-arabe text-[34px] leading-tight font-bold sm:text-[38px] ${
                sombre ? "text-white" : "text-ink"
              }`}
            >
              المجزوءة {ORDINAUX_ARABES[i]}
            </p>
            <div className={`relative mt-6 h-px ${sombre ? "bg-white/20" : "bg-border"}`} />
            <div className="relative mt-5 flex items-center justify-between">
              <span className={sombre ? "text-white/80" : "text-muted-foreground"}>{nombreLecons(nombre)}</span>
              {nombre > 0 && (
                <span
                  className={`flex size-11 items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5 ${
                    sombre ? "text-[#1d2340]" : "border border-border text-ink"
                  }`}
                  style={sombre ? { background: JAUNE } : undefined}
                >
                  <IconeFleche className="size-5" />
                </span>
              )}
            </div>
          </>
        );

        const classes = `group relative flex h-full flex-col overflow-hidden rounded-[26px] p-6 sm:p-8 ${
          sombre ? "text-white shadow-[0_20px_50px_-20px_rgba(10,16,32,0.55)]" : "border border-border bg-surface shadow-sm"
        }`;
        return (
          <li key={module.numero}>
            {nombre === 0 ? (
              <div className={classes} style={sombre ? { background: FONCE } : undefined}>
                {interieur}
              </div>
            ) : (
              <Link
                href={`/arabe/majzuaa/${module.numero}`}
                className={`${classes} transition-transform hover:-translate-y-1`}
                style={sombre ? { background: FONCE } : undefined}
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

/** Motif d'étoiles à huit branches, très pâle, en fond de la grande
 * carte d'éducation islamique (la maquette en a un). Décoratif. */
const MOTIF = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'><g fill='none' stroke='#ffffff' stroke-opacity='0.07' stroke-width='1.4'><rect x='34' y='34' width='28' height='28'/><rect x='34' y='34' width='28' height='28' transform='rotate(45 48 48)'/></g></svg>",
)}")`;

/**
 * Les parties d'éducation islamique, d'après la maquette de
 * l'utilisateur : Sourate Youssef dans la grande carte sombre, ses six
 * parties en segments ; les deux périodes de cours côte à côte ; la
 * révision en bandeau. Aucune leçon listée ici (voir
 * /education-islamique/partie/[id]). Pas de "2 / 6 parties" lues : pas
 * de suivi de lecture pour cette matière.
 */
function CartesPartiesIslamique({ lecons }: { lecons: Cours[] }) {
  const [youssef, ...autres] = SECTIONS_ISLAMIQUE;
  const revision = autres.find((s) => s.prefixe === null);
  const periodes = autres.filter((s) => s.prefixe !== null);
  const nombre = (section: SectionIslamique) => leconsDeSection(lecons, section).length;
  const lien = (section: SectionIslamique) => `/education-islamique/partie/${section.id}`;

  const nbYoussef = nombre(youssef);
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
      <CarteOuInerte
        href={nbYoussef > 0 ? lien(youssef) : null}
        className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[26px] p-7 text-white shadow-[0_20px_50px_-20px_rgba(10,16,32,0.55)] sm:p-9"
        style={{ backgroundColor: FONCE, backgroundImage: MOTIF }}
      >
        <span className="w-fit rounded-full px-3.5 py-1 text-sm font-bold text-[#1d2340]" style={{ background: JAUNE }}>
          Au programme
        </span>
        <p dir="rtl" lang="ar" className="mt-10 font-arabe text-[56px] leading-tight font-bold sm:text-[68px]">
          {youssef.titreArabe}
        </p>
        <p className="mt-2 text-end font-serif text-2xl font-bold sm:text-[28px]">{youssef.titre}</p>
        <p className="mt-2 text-end text-base leading-relaxed text-white/80">{youssef.description}</p>
        {nbYoussef > 0 && (
          <div className="mt-8 flex gap-2" aria-hidden="true">
            {Array.from({ length: nbYoussef }, (_, i) => (
              <span key={i} className="h-1.5 flex-1 rounded-full bg-white/25" />
            ))}
          </div>
        )}
        <div className="mt-auto flex items-center justify-between pt-8">
          <span className="text-white/80">
            {nbYoussef === 0 ? "Bientôt disponible" : `${nbYoussef} partie${nbYoussef > 1 ? "s" : ""}`}
          </span>
          {nbYoussef > 0 && (
            <span className="flex size-12 items-center justify-center rounded-full text-[#1d2340]" style={{ background: JAUNE }}>
              <IconeFleche className="size-5" />
            </span>
          )}
        </div>
      </CarteOuInerte>

      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {periodes.map((section, i) => {
            const n = nombre(section);
            return (
              <CarteOuInerte
                key={section.id}
                href={n > 0 ? lien(section) : null}
                className="group flex flex-col rounded-[26px] border border-border bg-surface p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-[14px] bg-primary-tint text-primary">
                    <section.Icone className="size-6" />
                  </span>
                  <span className="rounded-full bg-primary-tint px-3.5 py-1 text-sm font-bold text-primary">
                    {i + 1}
                    <sup>{i === 0 ? "re" : "e"}</sup> période
                  </span>
                </div>
                <p dir="rtl" lang="ar" className="mt-6 font-arabe text-[30px] leading-tight font-bold text-ink">
                  {section.titreArabe}
                </p>
                <p className="mt-1 font-serif text-xl font-bold text-ink">{section.titre}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{section.description}</p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="text-muted-foreground">{nombreLecons(n)}</span>
                  {n > 0 && (
                    <span className="flex size-11 items-center justify-center rounded-full border border-border text-ink">
                      <IconeFleche className="size-5" />
                    </span>
                  )}
                </div>
              </CarteOuInerte>
            );
          })}
        </div>

        {revision && (
          <CarteOuInerte
            href={nombre(revision) > 0 ? lien(revision) : null}
            className="group flex flex-col gap-4 rounded-[26px] border border-border bg-surface p-6 shadow-sm sm:flex-row sm:items-center sm:gap-6 sm:p-8"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-primary-tint text-primary">
              <revision.Icone className="size-6" />
            </span>
            <div className="flex-1">
              <p className="font-serif text-xl font-bold text-ink">{revision.titre}</p>
              <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{revision.description}</p>
            </div>
            <div className="sm:text-end">
              <p dir="rtl" lang="ar" className="font-arabe text-[28px] leading-tight font-bold text-ink">
                {revision.titreArabe}
              </p>
              <p className="text-muted-foreground">{nombreLecons(nombre(revision))}</p>
            </div>
            {nombre(revision) > 0 && (
              <span className="hidden size-11 shrink-0 items-center justify-center rounded-full border border-border text-ink sm:flex">
                <IconeFleche className="size-5" />
              </span>
            )}
          </CarteOuInerte>
        )}
      </div>
    </div>
  );
}

/** Un lien quand la partie a des leçons, une case inerte sinon. */
function CarteOuInerte({
  href,
  className,
  style,
  children,
}: {
  href: string | null;
  className: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return href ? (
    <Link href={href} className={`${className} transition-transform hover:-translate-y-1`} style={style}>
      {children}
    </Link>
  ) : (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

/**
 * /[matiere] — page d'une matière (éducation islamique, arabe,
 * histoire-géographie, voir lib/matieres.ts), refaite d'après les
 * maquettes de l'utilisateur ("fait moi ca a la place de francais […]
 * et touche aussi au sous partie") : en-tête à gauche avec le nom arabe
 * en filigrane, puis une mise en page propre à chaque matière.
 *
 * Générique et paramétrée par `matiere.slug` ; `notFound()` si le
 * segment d'URL ne correspond à aucune matière connue. Rien n'est
 * inventé : la page affiche ce qui existe dans `cours`.
 *
 * Histoire-géographie : deux listes côte à côte, "Histoire" et
 * "Géographie", distinguées par le préfixe du `slug` (`histoire-*` /
 * `geographie-*`). Les flashcards sont dans chaque page de cours ("enleve
 * cette partie de flash cards et ajoute la dans chaque cours").
 */
export default async function PageMatiereListe({ params }: PagePropsMatiere) {
  const { matiere: slugMatiere } = await params;
  const matiere = recupererMatiereParSlug(slugMatiere);
  if (!matiere) notFound();

  const lecons = await recupererCoursParCategorie(matiere.slug, FILIERE_ACTUELLE);
  const leconsHistoire = lecons.filter((c) => c.slug.startsWith("histoire-"));
  const leconsGeographie = lecons.filter((c) => c.slug.startsWith("geographie-"));

  const description =
    matiere.slug === "histoire-geo" && lecons.length > 0
      ? `Les ${lecons.length} leçons d'histoire et de géographie au programme du bac.`
      : matiere.description;

  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-8 px-6 pt-6 pb-10 sm:gap-10 sm:px-9 lg:px-16 xl:px-24 2xl:px-40 sm:pt-9 sm:pb-16">
        <EnTeteMatiere
          retour={{ href: "/matieres", libelle: "Retour aux matières" }}
          surTitre="1ʳᵉ année bac · Examen régional"
          titreAvant={matiere.titreAvantAccent}
          titreAccent={matiere.titreAccent}
          description={description}
          filigrane={FILIGRANES[matiere.slug]}
        />

        {matiere.slug === "arabe" ? (
          <CartesModulesArabe lecons={lecons} />
        ) : lecons.length === 0 ? (
          <p className="rounded-md border border-dashed border-border-strong bg-background p-12 text-center text-muted-foreground">
            Bientôt disponible.
          </p>
        ) : matiere.slug === "education-islamique" ? (
          <CartesPartiesIslamique lecons={lecons} />
        ) : matiere.slug === "histoire-geo" ? (
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-6 xl:grid-cols-2">
            {leconsHistoire.length > 0 && (
              <CarteListeLecons
                Icone={IconeHorloge}
                titre="Histoire"
                titreArabe="التاريخ"
                lecons={leconsHistoire}
                hrefLecon={(c) => `/${matiere.slug}/${c.slug}`}
              />
            )}
            {leconsGeographie.length > 0 && (
              <CarteListeLecons
                Icone={IconeGlobe}
                titre="Géographie"
                titreArabe="الجغرافيا"
                lecons={leconsGeographie}
                hrefLecon={(c) => `/${matiere.slug}/${c.slug}`}
                numeroDepart={leconsHistoire.length + 1}
              />
            )}
          </div>
        ) : (
          <GrilleLecons matiereSlug={matiere.slug} lecons={lecons} couleur="var(--color-primary)" />
        )}
      </div>
    </main>
  );
}
