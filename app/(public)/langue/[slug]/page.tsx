import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import ExercicesChampLexical from "@/components/ExercicesChampLexical";
import ExercicesConnecteurs from "@/components/ExercicesConnecteurs";
import ExercicesDiscoursRapporte from "@/components/ExercicesDiscoursRapporte";
import ExercicesEnonciation from "@/components/ExercicesEnonciation";
import ExercicesFigures from "@/components/ExercicesFigures";
import ExercicesNiveauxLangue from "@/components/ExercicesNiveauxLangue";
import ExercicesRegistres from "@/components/ExercicesRegistres";
import { IconeCoche, IconeFleche, IconeLivreOuvert } from "@/components/icones";
import OngletsLecon, { versOngletLecon } from "@/components/OngletsLecon";
import QuizAncreCoupe from "@/components/QuizAncreCoupe";
import QuizChampLexical from "@/components/QuizChampLexical";
import QuizConnecteurs from "@/components/QuizConnecteurs";
import QuizDiscoursRapporte from "@/components/QuizDiscoursRapporte";
import QuizNiveauxLangue from "@/components/QuizNiveauxLangue";
import QuizFigures from "@/components/QuizFigures";
import QuizRegistres from "@/components/QuizRegistres";
import { DONNEES_FIGURES } from "@/lib/exercices-figures";
import { recupererCoursParSlug } from "@/lib/supabase/contenu";

interface PagePropsCours {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ onglet?: string | string[] }>;
}

const EXERCICES_PAR_SLUG: Record<string, React.ComponentType> = {
  enonciation: ExercicesEnonciation,
  "champ-lexical": ExercicesChampLexical,
  "discours-rapporte": ExercicesDiscoursRapporte,
  "registres-tons-tonalites": ExercicesRegistres,
  "niveaux-langue": ExercicesNiveauxLangue,
  "connecteurs-logiques": ExercicesConnecteurs,
};

const QUIZ_PAR_SLUG: Record<string, { description: string; Composant: React.ComponentType }> = {
  enonciation: {
    description:
      "Chaque énoncé est-il ancré ou coupé de la situation d'énonciation ? Réponds aux 20 questions pour vérifier que tu as compris.",
    Composant: QuizAncreCoupe,
  },
  "champ-lexical": {
    description:
      "Vérifie que tu sais identifier les champs lexicaux et repérer les intrus, en répondant aux 10 questions.",
    Composant: QuizChampLexical,
  },
  "discours-rapporte": {
    description:
      "Vérifie que tu maîtrises la transformation du discours direct au discours indirect, en répondant aux 20 questions.",
    Composant: QuizDiscoursRapporte,
  },
  "registres-tons-tonalites": {
    description:
      "Vérifie que tu sais reconnaître les registres littéraires (lyrique, tragique, comique…), en répondant aux 20 questions.",
    Composant: QuizRegistres,
  },
  "niveaux-langue": {
    description:
      "Vérifie que tu sais distinguer les niveaux de langue (soutenu, courant, familier), en répondant aux 20 questions.",
    Composant: QuizNiveauxLangue,
  },
  "connecteurs-logiques": {
    description:
      "Vérifie que tu sais reconnaître les connecteurs logiques et leur sens (cause, conséquence, opposition…), en répondant aux 20 questions.",
    Composant: QuizConnecteurs,
  },
};

/**
 * /langue/[slug] — contenu d'une leçon de langue (table `cours`,
 * catégorie "langue"), organisé en trois onglets : Cours / Exercices /
 * Quiz (barre `OngletsLecon`, navigation par query param `onglet`,
 * même mécanisme que la page œuvre).
 *
 * L'onglet "Cours" rend `contenu_mdx` (Markdown simple via
 * `react-markdown`, pas de vrai MDX exécuté — voir le commentaire plus
 * bas). Les onglets "Exercices" et "Quiz" n'ont un contenu réel que
 * pour la leçon "L'énonciation" (fourni par l'utilisateur) ; les autres
 * affichent un message "Bientôt disponible".
 */
export default async function PageCours({ params, searchParams }: PagePropsCours) {
  const { slug } = await params;
  const { onglet } = await searchParams;
  const ongletActif = versOngletLecon(onglet);

  const cours = await recupererCoursParSlug(slug);
  if (!cours) notFound();

  const Exercices = EXERCICES_PAR_SLUG[cours.slug];
  const Quiz = QUIZ_PAR_SLUG[cours.slug];
  const donneesFigures = DONNEES_FIGURES[cours.slug];

  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 pt-6 pb-10 sm:pt-9 sm:pb-16">
        <Link
          href="/langue"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Retour aux cours de langue
        </Link>

        <div className="flex items-center gap-3.5 text-primary">
          <span className="flex size-11 items-center justify-center rounded-[13px] bg-primary-tint">
            <IconeLivreOuvert className="size-5" />
          </span>
          <h1 className="font-titre text-3xl font-bold text-ink">{cours.titre}</h1>
        </div>

        <OngletsLecon slug={slug} ongletActif={ongletActif} />

        {ongletActif === "cours" && (
          <div className="rounded-lg border border-border bg-surface p-5 sm:p-9 shadow-sm">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: (props) => (
                  <h2
                    className="mt-10 mb-4 border-l-4 border-primary pl-4 font-serif text-[24px] font-bold text-ink first:mt-0"
                    {...props}
                  />
                ),
                h3: (props) => (
                  <h3 className="mt-7 mb-2 font-serif text-lg font-bold text-primary" {...props} />
                ),
                p: (props) => (
                  <p
                    className="mb-4 font-lecture text-[16px] leading-relaxed text-foreground"
                    {...props}
                  />
                ),
                ul: (props) => (
                  <ul className="mb-4 flex list-disc flex-col gap-2 pl-5 marker:text-primary" {...props} />
                ),
                ol: (props) => (
                  <ol
                    className="mb-4 flex list-decimal flex-col gap-2 pl-5 marker:font-semibold marker:text-primary"
                    {...props}
                  />
                ),
                li: (props) => (
                  <li
                    className="pl-1 font-lecture text-[15.5px] leading-relaxed text-foreground"
                    {...props}
                  />
                ),
                strong: (props) => <strong className="font-semibold text-ink" {...props} />,
                blockquote: (props) => (
                  <blockquote
                    className="my-5 rounded-lg border border-border bg-background p-4 pl-5 font-lecture text-[15.5px] text-foreground"
                    {...props}
                  />
                ),
                table: (props) => (
                  <div className="my-5 overflow-x-auto rounded-[10px] border border-border">
                    <table className="w-full border-collapse text-left" {...props} />
                  </div>
                ),
                th: (props) => (
                  <th
                    className="border-b border-border bg-primary-tint px-4 py-2.5 text-sm font-semibold text-ink"
                    {...props}
                  />
                ),
                td: (props) => (
                  <td
                    className="border-b border-border px-4 py-2 font-lecture text-[15px] text-foreground"
                    {...props}
                  />
                ),
              }}
            >
              {cours.contenu_mdx ?? ""}
            </ReactMarkdown>
          </div>
        )}

        {ongletActif === "exercices" &&
          (Exercices ? (
            <Exercices />
          ) : donneesFigures ? (
            <ExercicesFigures exercices={donneesFigures.exercices} />
          ) : (
            <p className="rounded-md border border-dashed border-border-strong bg-background p-12 text-center text-muted-foreground">
              Bientôt disponible.
            </p>
          ))}

        {ongletActif === "quiz" &&
          (Quiz || donneesFigures ? (
            <section className="rounded-lg border border-border bg-surface p-6 pb-8 shadow-sm">
              <div className="mb-1 flex items-center gap-2.5">
                <IconeCoche className="size-6 text-primary" />
                <h2 className="font-serif text-2xl font-bold text-ink">Quiz</h2>
              </div>
              <p className="mb-5 text-sm text-muted-foreground">
                {Quiz ? Quiz.description : donneesFigures.description}
              </p>
              {Quiz ? <Quiz.Composant /> : <QuizFigures questions={donneesFigures.questions} />}
            </section>
          ) : (
            <p className="rounded-md border border-dashed border-border-strong bg-background p-12 text-center text-muted-foreground">
              Bientôt disponible.
            </p>
          ))}
      </div>
    </main>
  );
}
