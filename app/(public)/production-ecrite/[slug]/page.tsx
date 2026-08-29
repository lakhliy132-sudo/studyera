import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { recupererCoursParSlug } from "@/lib/supabase/contenu";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * /production-ecrite/[slug] — contenu d'une partie de la rubrique
 * Production écrite (voir /production-ecrite pour la liste des
 * cartes). Un seul slug a du contenu pour l'instant :
 * "methodologie-redaction".
 *
 * Contenu stocké en base (table `cours`, catégorie
 * "production-ecrite", même mécanisme que "L'énonciation" sur
 * /langue/enonciation) plutôt qu'en dur ici. Rendu via
 * `react-markdown` (pas de MDX/JSX exécuté), stylé via le prop
 * `components` plutôt qu'un plugin Typography.
 *
 * Les 3 types de plan (simple/dialectique/analytique) sortent
 * volontairement du flux markdown — demandé explicitement par
 * l'utilisateur ("je veux quelle soit bien classé chaque plan dans
 * une case pas comme ça"). Le corps de chaque rédaction modèle en
 * sort aussi, pour un traitement visuel dédié (encadré arrondi, texte
 * en gras et en noir plutôt qu'en bleu — demandé explicitement :
 * "fait la redaction arrondis et c mieux de faire l ecriture avec
 * noir pas bleu"). `segmenter()` découpe le `contenu_mdx` en base sur
 * 3 marqueurs (`<!-- PLANS -->`, `<!-- REDACTION -->`/
 * `<!-- /REDACTION -->`) et rend chaque morceau avec le composant
 * adapté ; le texte markdown normal (hors marqueurs) passe par
 * `ReactMarkdown`/`COMPOSANTS_MARKDOWN` comme avant.
 *
 * ⚠️ Contenu entièrement rédigé par Claude (méthodologie générale de
 * la rédaction argumentative, pas propre à une œuvre précise) — à
 * faire relire par un enseignant avant usage en classe.
 */

const MARQUEUR_PLANS = "<!-- PLANS -->";
const MARQUEUR_REDACTION_DEBUT = "<!-- REDACTION -->";
const MARQUEUR_REDACTION_FIN = "<!-- /REDACTION -->";

type Segment =
  | { type: "markdown"; texte: string }
  | { type: "plans" }
  | { type: "redaction"; texte: string };

/** Découpe `contenu_mdx` sur les marqueurs spéciaux, en gardant les
 * délimiteurs (regex à groupe capturant) pour savoir quel segment
 * appartient à quelle zone. Générique : marche pour 0, 1 ou plusieurs
 * blocs `<!-- REDACTION -->`. */
function segmenter(contenu: string): Segment[] {
  const morceaux = contenu.split(
    /(<!-- PLANS -->|<!-- REDACTION -->|<!-- \/REDACTION -->)/,
  );
  const segments: Segment[] = [];
  let dansRedaction = false;
  let tamponRedaction = "";

  for (const morceau of morceaux) {
    if (morceau === MARQUEUR_PLANS) {
      segments.push({ type: "plans" });
    } else if (morceau === MARQUEUR_REDACTION_DEBUT) {
      dansRedaction = true;
      tamponRedaction = "";
    } else if (morceau === MARQUEUR_REDACTION_FIN) {
      dansRedaction = false;
      segments.push({ type: "redaction", texte: tamponRedaction });
    } else if (morceau) {
      if (dansRedaction) tamponRedaction += morceau;
      else segments.push({ type: "markdown", texte: morceau });
    }
  }
  return segments;
}

interface Plan {
  titre: string;
  quand: string;
  etapes: { libelle: string; detail: string }[];
}

// Parenthèse fermante isolée en bout de phrase ("»).") retirée sur la
// carte "plan dialectique" — demandé explicitement par l'utilisateur
// ("enleve ) ca dans l ecriture") : les deux exemples de sujets sont
// maintenant introduits par un tiret, sans parenthèses englobantes.
const PLANS: Plan[] = [
  {
    titre: "Le plan simple",
    quand:
      "Quand le sujet demande d'expliquer ou de développer une seule idée, sans opposer de points de vue. Le développement s'organise en plusieurs parties qui abordent chacune un aspect différent du même thème.",
    etapes: [
      { libelle: "I.", detail: "Premier aspect du sujet" },
      { libelle: "II.", detail: "Deuxième aspect du sujet" },
      { libelle: "III.", detail: "Troisième aspect du sujet" },
    ],
  },
  {
    titre: "Le plan dialectique",
    quand:
      "Pour un sujet qui invite à débattre, à peser le pour et le contre — « Êtes-vous d'accord avec... », « Faut-il... ».",
    etapes: [
      { libelle: "Thèse", detail: "Les arguments qui vont dans le sens de l'affirmation proposée par le sujet." },
      { libelle: "Antithèse", detail: "Les arguments qui la contredisent ou la nuancent." },
      {
        libelle: "Synthèse",
        detail:
          "Un dépassement de l'opposition — une réponse personnelle et nuancée, qui ne se contente pas de juxtaposer les deux points de vue.",
      },
    ],
  },
  {
    titre: "Le plan analytique",
    quand: "Pour un sujet qui invite à analyser un problème. Il suit une progression logique.",
    etapes: [
      { libelle: "Causes", detail: "Pourquoi ce problème existe-t-il ?" },
      { libelle: "Conséquences", detail: "Quels sont ses effets ?" },
      { libelle: "Solutions", detail: "Comment y remédier ?" },
    ],
  },
];

/** Composants de style partagés par tous les segments markdown
 * "normaux" produits par `segmenter()` (hors `GrillePlans`/
 * `BlocRedaction`, qui ont leur propre habillage). */
const COMPOSANTS_MARKDOWN = {
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="mt-8 mb-3 font-serif text-xl font-bold text-ink first:mt-0">{children}</h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="mt-5 mb-2 font-serif text-lg font-semibold text-primary">{children}</h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="font-lecture text-[17px] leading-relaxed text-foreground">{children}</p>
  ),
  /** Encadré "Sujet" / "Le plan choisi" en tête d'un modèle de
   * rédaction — voir le cours "modeles-corriges" (blockquote markdown,
   * `> **Sujet :** ...`). */
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="rounded-lg border border-border bg-surface-muted px-5 py-4 font-lecture text-[16px] leading-relaxed text-foreground [&_p]:my-1">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-2 border-t border-border" />,
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="list-disc space-y-1.5 pl-6 font-lecture text-[17px] leading-relaxed text-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="list-decimal space-y-1.5 pl-6 font-lecture text-[17px] leading-relaxed text-foreground">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => <li>{children}</li>,
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-ink">{children}</strong>
  ),
  table: ({ children }: { children?: React.ReactNode }) => (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-left text-[15px]">{children}</table>
    </div>
  ),
  thead: ({ children }: { children?: React.ReactNode }) => <thead className="bg-surface-muted">{children}</thead>,
  th: ({ children }: { children?: React.ReactNode }) => (
    <th className="border-b border-border px-4 py-2.5 font-semibold text-ink">{children}</th>
  ),
  td: ({ children }: { children?: React.ReactNode }) => (
    <td className="border-b border-border px-4 py-2.5 text-foreground [&:not(:first-child)]:text-muted-foreground">
      {children}
    </td>
  ),
};

/** Paragraphes d'une rédaction modèle : gras et en `text-foreground`
 * (noir, pas la couleur bleue de `--color-ink` utilisée par `strong`
 * ailleurs sur la page) — demandé explicitement par l'utilisateur. */
const COMPOSANTS_REDACTION = {
  ...COMPOSANTS_MARKDOWN,
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="font-lecture text-[17px] leading-relaxed font-bold text-foreground">{children}</p>
  ),
};

/** Encadré arrondi autour du texte d'une rédaction modèle — demandé
 * explicitement par l'utilisateur ("fait la redaction arrondis"). */
function BlocRedaction({ texte }: { texte: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={COMPOSANTS_REDACTION}>
        {texte}
      </ReactMarkdown>
    </div>
  );
}

function GrillePlans() {
  return (
    <div className="my-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {PLANS.map((plan) => (
        <div key={plan.titre} className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 shadow-sm">
          <h3 className="font-serif text-base font-bold text-primary">{plan.titre}</h3>
          <p className="font-lecture text-sm leading-relaxed text-muted-foreground">{plan.quand}</p>
          <dl className="mt-1 flex flex-col gap-2 border-t border-border pt-3">
            {plan.etapes.map((etape) => (
              <div key={etape.libelle}>
                <dt className="font-serif text-sm font-bold text-ink">{etape.libelle}</dt>
                <dd className="font-lecture text-sm leading-relaxed text-foreground">{etape.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}

export default async function PageProductionEcriteDetail({ params }: PageProps) {
  const { slug } = await params;
  const cours = await recupererCoursParSlug(slug);
  if (!cours || cours.categorie !== "production-ecrite" || !cours.contenu_mdx) notFound();

  const segments = segmenter(cours.contenu_mdx);

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10">
      <Link href="/production-ecrite" className="text-sm text-muted-foreground hover:text-primary">
        ← Production écrite
      </Link>
      <p className="mt-4 mb-1.5 inline-flex items-center rounded-full bg-primary-tint px-3.5 py-1.5 text-sm font-medium text-primary">
        Production écrite
      </p>
      <h1 className="mb-8 font-serif text-3xl font-bold text-ink">{cours.titre}</h1>

      <div className="flex flex-col gap-4">
        {segments.map((segment, index) => {
          if (segment.type === "plans") return <GrillePlans key={index} />;
          if (segment.type === "redaction") return <BlocRedaction key={index} texte={segment.texte} />;
          return (
            <ReactMarkdown key={index} remarkPlugins={[remarkGfm]} components={COMPOSANTS_MARKDOWN}>
              {segment.texte}
            </ReactMarkdown>
          );
        })}
      </div>
    </main>
  );
}
