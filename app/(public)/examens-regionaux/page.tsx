import type { ReactNode } from "react";

import Link from "next/link";

import {
  IconeCoche,
  IconeCroissant,
  IconeDocument,
  IconeFleche,
  IconeGlobe,
  IconeHorloge,
  IconeLivre,
} from "@/components/icones";
import {
  IllustrationGlobe,
  IllustrationLivre,
  IllustrationLivreOuvert,
  IllustrationMosquee,
} from "@/components/IllustrationsMatieres";
import {
  recupererApercuEntrainement,
  resumerAnnalesParMatiere,
} from "@/lib/supabase/annales";

/** Haut des cartes de matière : la couleur du site en dégradé, assombrie
 * avec une valeur fixe (et non un jeton de thème, voir CLAUDE.md §3)
 * pour garder du relief en mode sombre, où --color-primary s'éclaircit. */
const DEGRADE_CARTE =
  "linear-gradient(150deg, color-mix(in srgb, var(--color-primary) 30%, #ffffff) 0%, color-mix(in srgb, var(--color-primary) 72%, #0a1020) 100%)";

const MATIERES_EXAMEN: {
  slug: string;
  titre: string;
  /** Pastille de la carte, comme sur la maquette : un symbole par
   * matière (le « ض » pour l'arabe). */
  pastille: ReactNode;
  Illustration: (props: { className?: string }) => ReactNode;
}[] = [
  {
    slug: "francais",
    titre: "Français",
    pastille: <IconeLivre className="size-6" />,
    Illustration: IllustrationLivre,
  },
  {
    slug: "arabe",
    titre: "Arabe",
    pastille: (
      <span lang="ar" className="font-arabe text-2xl leading-none font-bold">
        ض
      </span>
    ),
    Illustration: IllustrationLivreOuvert,
  },
  {
    slug: "histoire-geo",
    titre: "Histoire-Géographie",
    pastille: <IconeGlobe className="size-6" />,
    Illustration: IllustrationGlobe,
  },
  {
    slug: "education-islamique",
    titre: "Éducation islamique",
    pastille: <IconeCroissant className="size-6" />,
    Illustration: IllustrationMosquee,
  },
];

/** Nombre d'années affichées en pastilles sur une carte : les plus
 * récentes, la plus ancienne étant rappelée dans la ligne du dessous. */
const ANNEES_AFFICHEES = 6;

const ATOUTS = [
  { titre: "Vrais sujets", detail: "Des sessions passées", Icone: IconeDocument },
  { titre: "Corrigés officiels", detail: "Quand ils sont publiés", Icone: IconeCoche },
  { titre: "Mode chrono", detail: "En conditions réelles", Icone: IconeHorloge },
];

const ETAPES = [
  { titre: "Choisis un sujet", detail: "Par matière et par année" },
  { titre: "Compose avec le chrono", detail: "Le temps officiel de l'épreuve" },
  { titre: "Compare avec le corrigé", detail: "Question par question" },
];

/** « 120 » → « 02:00:00 », l'affichage du chrono de l'épreuve. */
function formaterDuree(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:00`;
}

/**
 * /examens-regionaux — les quatre matières de l'examen régional.
 *
 * Refaite d'après la maquette fournie par l'utilisateur, sans la carte
 * du calendrier (« ENLEVE JUSTE LA PARTIE CALENDRIER ») : le bandeau
 * de présentation prend donc toute la largeur. Chaque carte ouvre
 * /examens-regionaux/[matiere].
 *
 * Écarts avec la maquette, faute de donnée (CLAUDE.md) :
 * - pas de pastille « Coef. N » : aucun coefficient n'est connu en base
 *   (et il varie selon la série) ;
 * - les années d'une carte sont celles des sujets en base ; une matière
 *   sans sujet n'en montre aucune au lieu de 2019–2024 ;
 * - pas de bouton « Me prévenir » : aucune notification n'existe ;
 * - « Corrigés détaillés, étape par étape » devient « Corrigés
 *   officiels » : ce sont les éléments de réponse des académies, et
 *   certains sujets n'en ont pas ;
 * - l'aperçu « Comment ça marche » montre une vraie question du sujet de
 *   français le plus récent, avec la durée officielle de l'épreuve, et
 *   ni note « 14/20 » ni « note de l'IA » : les réponses d'une annale ne
 *   sont pas notées (voir EpreuveInteractive).
 */
export default async function PageExamensRegionaux() {
  const [resumes, apercu] = await Promise.all([
    resumerAnnalesParMatiere(),
    recupererApercuEntrainement("francais"),
  ]);
  const matiereSansSujet = MATIERES_EXAMEN.some((m) => !resumes[m.slug]);

  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-10 px-6 pt-6 pb-12 sm:gap-12 sm:px-9 lg:px-16 xl:px-24 2xl:px-40 sm:pt-9 sm:pb-16">
        <section className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-6 sm:p-10 lg:p-12">
          <span aria-hidden="true" className="pointer-events-none absolute -top-24 right-[12%] size-[340px] rounded-full bg-primary/15 blur-3xl" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 size-[300px] rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-bold text-primary">
              1<sup>re</sup> année bac
            </p>
            <h1 className="mt-3 font-serif text-[40px] leading-[1.05] font-bold text-ink sm:text-6xl">
              Examens <span className="text-primary italic">régionaux</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Les vrais sujets des années précédentes, avec leurs corrigés et
              un mode entraînement chronométré, comme le jour J.
            </p>
            <ul className="mt-7 flex flex-wrap gap-3 sm:gap-4">
              {ATOUTS.map(({ titre, detail, Icone }) => (
                <li
                  key={titre}
                  className="flex items-center gap-3 rounded-[16px] border border-border bg-surface px-4 py-3 shadow-sm"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-primary text-primary-foreground">
                    <Icone className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink">{titre}</span>
                    <span className="block text-[13px] text-muted-foreground">{detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
              Choisis ta matière
            </h2>
            {matiereSansSujet && (
              <p className="text-sm text-muted-foreground">
                Les autres matières arrivent bientôt
              </p>
            )}
          </div>

          <ul className="grid grid-cols-1 gap-5 sm:gap-6 sm:max-[1399px]:grid-cols-2 min-[1400px]:grid-cols-4">
            {MATIERES_EXAMEN.map((matiere) => {
              const resume = resumes[matiere.slug];
              const annees = resume?.annees.slice(-ANNEES_AFFICHEES) ?? [];

              const carte = (
                <>
                  <div
                    className="relative flex h-[96px] items-center justify-end overflow-hidden px-6 sm:h-[150px]"
                    style={{ background: DEGRADE_CARTE }}
                  >
                    <span aria-hidden="true" className="pointer-events-none absolute -top-16 -left-10 size-48 rounded-full bg-white/15 blur-2xl" />
                    <matiere.Illustration className="relative size-16 opacity-90 transition-transform duration-300 group-hover:scale-105 sm:size-24" />
                  </div>
                  <div className="flex flex-1 flex-col px-6 pb-5">
                    <span className="relative z-10 -mt-7 flex size-14 items-center justify-center rounded-[16px] border-4 border-surface bg-primary text-primary-foreground shadow-md">
                      {matiere.pastille}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl leading-tight font-bold text-ink">
                      {matiere.titre}
                    </h3>
                    {annees.length > 0 && (
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {annees.map((annee) => (
                          <li
                            key={annee}
                            className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground"
                          >
                            {annee}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className="mt-3 mb-4 text-sm text-muted-foreground">
                      {resume
                        ? `${resume.nombre} sujet${resume.nombre > 1 ? "s" : ""}${
                            resume.annees.length > 1
                              ? ` · ${resume.annees[0]} – ${resume.annees[resume.annees.length - 1]}`
                              : ` · ${resume.annees[0]}`
                          }`
                        : "Sujets en préparation"}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
                      {resume ? (
                        <>
                          <span className="rounded-full bg-primary-tint px-3 py-1 text-xs font-bold text-primary">
                            Disponible
                          </span>
                          <span className="flex items-center gap-1.5 text-sm font-bold text-primary">
                            Voir les sujets
                            <IconeFleche className="size-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </>
                      ) : (
                        <span className="rounded-full bg-surface-muted px-3 py-1 text-xs font-bold text-muted-foreground">
                          Bientôt
                        </span>
                      )}
                    </div>
                  </div>
                </>
              );

              const classes =
                "group flex h-full flex-col overflow-hidden rounded-[24px] border border-border bg-surface shadow-sm";
              return (
                <li key={matiere.slug}>
                  {resume ? (
                    <Link
                      href={`/examens-regionaux/${matiere.slug}`}
                      className={`${classes} sm:min-h-[300px] transition-all hover:-translate-y-1 hover:shadow-xl`}
                    >
                      {carte}
                    </Link>
                  ) : (
                    <div className={`${classes} sm:min-h-[300px]`}>{carte}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="grid grid-cols-1 overflow-hidden rounded-[28px] border border-border bg-surface lg:grid-cols-2">
          <div className="flex flex-col p-6 sm:p-10 lg:p-12">
            <p className="text-sm font-bold text-primary">Comment ça marche</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight font-bold text-ink sm:text-4xl">
              Entraîne-toi comme
              <br />
              <span className="text-primary italic">le jour de l&apos;examen</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Le mode examen te met dans les vraies conditions : un sujet
              officiel, un chrono, puis le corrigé.
            </p>
            <ol className="mt-7 flex flex-col gap-5">
              {ETAPES.map((etape, index) => (
                <li key={etape.titre} className="flex items-start gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-tint text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-bold text-ink">{etape.titre}</span>
                    <span className="block text-sm text-muted-foreground">{etape.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {apercu && (
            <div className="flex items-center justify-center bg-primary-tint/50 p-6 sm:p-10 lg:p-12">
              <Link
                href={`/examens-regionaux/francais/${apercu.id}`}
                className="w-full max-w-md overflow-hidden rounded-[20px] border border-border bg-surface shadow-xl transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3 border-b border-border p-5">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Français · Session {apercu.annee}
                      {apercu.session === "rattrapage" && " (rattrapage)"}
                    </p>
                    <p className="mt-1 font-serif text-lg font-bold text-ink">
                      Sujet officiel
                    </p>
                  </div>
                  {apercu.duree_minutes && (
                    <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1.5 text-sm font-bold text-primary tabular-nums">
                      <IconeHorloge className="size-4" />
                      {formaterDuree(apercu.duree_minutes)}
                    </span>
                  )}
                </div>
                <p className="p-5 font-serif text-base leading-relaxed text-ink">
                  Question {apercu.numero}. {apercu.enonce.replace(/\*+/g, "")}
                </p>
                <div className="flex items-center gap-4 border-t border-border px-5 py-4">
                  <span className="shrink-0 text-xs text-muted-foreground">
                    Question {apercu.rang} / {apercu.total}
                  </span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-muted">
                    <span
                      className="block h-full rounded-full bg-primary"
                      style={{ width: `${(apercu.rang / apercu.total) * 100}%` }}
                    />
                  </span>
                  <span className="shrink-0 rounded-[10px] bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
                    Essayer
                  </span>
                </div>
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
