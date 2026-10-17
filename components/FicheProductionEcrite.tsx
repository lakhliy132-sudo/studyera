import type { CSSProperties } from "react";

import ContenuMarkdown from "@/components/ContenuMarkdown";
import { IconePlume } from "@/components/icones";
import SommaireHistoireGeo from "@/components/SommaireHistoireGeo";

/**
 * Corps d'une fiche de production écrite (/production-ecrite/[slug]),
 * habillé comme les leçons des autres matières — demandé explicitement
 * par l'utilisateur ("pour les leçons de la production écrite fais le
 * style comme dans les autres matières leçons pas juste placé comme
 * ça"). Avant, le texte était posé directement sur la page, sans cadre
 * ni repères. Il reprend désormais la mise en page "feuille" de
 * l'histoire-géo et de l'éducation islamique ([matiere]/[slug]) :
 * pastille de rubrique, grand titre, feuille ivoire à bandeau de
 * couleur et filigrane, sections numérotées (`ContenuMarkdown
 * styleFeuille`) et sommaire à côté (`SommaireHistoireGeo`).
 *
 * Les blocs propres à la production écrite restent, posés sur la
 * feuille :
 * - les 3 types de plan dans leurs cases ("je veux quelle soit bien
 *   classé chaque plan dans une case pas comme ça") ;
 * - chaque rédaction modèle dans un encadré arrondi, texte en gras et
 *   en noir ("fait la redaction arrondis et c mieux de faire l
 *   ecriture avec noir pas bleu") ;
 * - les expressions en pastilles ("entoure ses expressions
 *   arrondis") et la grille d'auto-évaluation en cases ("fais comme
 *   les modèles dans les cases"), chaque case devenant une section
 *   numérotée du sommaire.
 *
 * `segmenter()` découpe le `contenu_mdx` en base sur 3 marqueurs
 * (`<!-- PLANS -->`, `<!-- REDACTION -->`/`<!-- /REDACTION -->`).
 * Chaque morceau de texte est rendu par son propre `ContenuMarkdown` :
 * `premierNumero` y fait suivre la numérotation des sections d'un
 * morceau à l'autre.
 *
 * ⚠️ Contenu entièrement rédigé par Claude (méthodologie générale de
 * la rédaction argumentative, pas propre à une œuvre précise) — à
 * faire relire par un enseignant avant usage en classe.
 */

const MARQUEUR_PLANS = "<!-- PLANS -->";
const MARQUEUR_REDACTION_DEBUT = "<!-- REDACTION -->";
const MARQUEUR_REDACTION_FIN = "<!-- /REDACTION -->";

/** Même couleur que les feuilles des autres matières : celle de la
 * palette choisie, pas une teinte propre à la rubrique. */
const COULEUR_FEUILLE = "var(--color-primary)";

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

/** Titres des sections (`##`) d'un morceau de texte, dans l'ordre —
 * même règle que `ContenuMarkdown` pour numéroter, afin que le
 * sommaire pointe sur les bonnes ancres. */
function titresSections(texte: string): string[] {
  return texte
    .split("\n")
    .filter((ligne) => ligne.startsWith("## "))
    .map((ligne) => ligne.slice(3).trim());
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

/** Les 3 plans, une case chacun, posées sur la feuille ivoire : fond
 * blanc pour qu'elles s'en détachent. */
function GrillePlans() {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
      {PLANS.map((plan) => (
        <div key={plan.titre} className="flex flex-col gap-3 rounded-[14px] border border-border bg-surface p-5 shadow-sm">
          <h3 className="font-serif text-lg font-bold text-primary">{plan.titre}</h3>
          <p className="font-lecture text-[15px] leading-relaxed text-muted-foreground">{plan.quand}</p>
          <dl className="mt-1 flex flex-col gap-2.5 border-t border-border pt-3">
            {plan.etapes.map((etape) => (
              <div key={etape.libelle}>
                <dt className="font-serif text-[15px] font-bold text-ink">{etape.libelle}</dt>
                <dd className="font-lecture text-[15px] leading-relaxed font-bold text-foreground">{etape.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}

/** Encadré arrondi autour d'une rédaction modèle (blanc sur la feuille
 * ivoire). Le texte de `styleFeuille` est déjà en gras et en noir,
 * comme demandé pour les rédactions. */
function BlocRedaction({ texte, premierNumero }: { texte: string; premierNumero: number }) {
  return (
    <div className="mb-6 rounded-[14px] border border-border bg-surface p-5 shadow-sm sm:p-7 [&_p:last-child]:mb-0">
      <ContenuMarkdown texte={texte} styleFeuille couleurAccent={COULEUR_FEUILLE} premierNumero={premierNumero} />
    </div>
  );
}

/** Titre de case numéroté, mêmes pastille et ancre que les titres de
 * section de `ContenuMarkdown styleFeuille`, pour que le sommaire y
 * mène. */
function TitreCaseNumerote({ numero, titre }: { numero: number; titre: string }) {
  return (
    <h2
      id={`section-${numero}`}
      style={{ color: COULEUR_FEUILLE, scrollMarginTop: "6rem" }}
      className="flex items-center gap-3 font-serif text-[20px] font-bold"
    >
      <span
        style={{ backgroundColor: COULEUR_FEUILLE }}
        className="flex size-8 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white shadow-sm"
      >
        {numero}
      </span>
      <span className="pt-0.5">{titre}</span>
    </h2>
  );
}

/** Découpe le contenu "aide-expression" (markdown "## catégorie" suivi
 * de lignes "- expression") en [{ titre, phrases }]. */
function parseExpressions(contenu: string): { titre: string; phrases: string[] }[] {
  const categories: { titre: string; phrases: string[] }[] = [];
  let courante: { titre: string; phrases: string[] } | null = null;
  for (const ligne of contenu.split("\n")) {
    const titre = ligne.match(/^##\s+(.+)$/);
    if (titre) {
      courante = { titre: titre[1].trim(), phrases: [] };
      categories.push(courante);
    } else if (courante) {
      const phrase = ligne.match(/^\s*[-*]\s+(.+)$/);
      if (phrase) courante.phrases.push(phrase[1].trim());
    }
  }
  return categories;
}

/** Une catégorie d'expressions = une case : titre numéroté + pastilles. */
function GrilleExpressions({ categories }: { categories: { titre: string; phrases: string[] }[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
      {categories.map((cat, index) => (
        <div key={cat.titre} className="flex flex-col gap-4 rounded-[14px] border border-border bg-surface p-5 shadow-sm">
          <TitreCaseNumerote numero={index + 1} titre={cat.titre} />
          <ul className="flex flex-wrap gap-2">
            {cat.phrases.map((phrase) => (
              <li
                key={phrase}
                className="rounded-full border border-border bg-feuille px-3.5 py-1.5 font-lecture text-[15px] leading-relaxed font-bold text-foreground"
              >
                {phrase}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Découpe le contenu "grille-auto-evaluation" (paragraphe d'intro puis
 * sections "## titre" avec lignes "- critère") en { intro, sections }. */
function parseGrille(contenu: string): { intro: string; sections: { titre: string; criteres: string[] }[] } {
  const sections: { titre: string; criteres: string[] }[] = [];
  let courante: { titre: string; criteres: string[] } | null = null;
  const introLignes: string[] = [];
  for (const ligne of contenu.split("\n")) {
    const titre = ligne.match(/^##\s+(.+)$/);
    if (titre) {
      courante = { titre: titre[1].trim(), criteres: [] };
      sections.push(courante);
    } else if (courante) {
      const critere = ligne.match(/^\s*[-*]\s+(.+)$/);
      if (critere) courante.criteres.push(critere[1].trim());
    } else if (ligne.trim()) {
      introLignes.push(ligne.trim());
    }
  }
  return { intro: introLignes.join("\n"), sections };
}

/** Chaque rubrique de la grille d'auto-évaluation = une case : titre
 * numéroté + critères. */
function GrilleAutoEvaluation({ grille }: { grille: ReturnType<typeof parseGrille> }) {
  return (
    <div className="flex flex-col gap-4">
      {grille.intro ? (
        <div className="[&_p:last-child]:mb-0">
          <ContenuMarkdown texte={grille.intro} styleFeuille couleurAccent={COULEUR_FEUILLE} />
        </div>
      ) : null}
      {grille.sections.map((section, index) => (
        <div key={section.titre} className="flex flex-col gap-4 rounded-[14px] border border-border bg-surface p-5 shadow-sm sm:p-6">
          <TitreCaseNumerote numero={index + 1} titre={section.titre} />
          <ul className="flex flex-col gap-2">
            {section.criteres.map((critere) => (
              <li key={critere} className="flex items-start gap-2.5 font-lecture text-[15.5px] leading-relaxed font-bold text-foreground">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>{critere}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

interface FicheProductionEcriteProps {
  slug: string;
  titre: string;
  contenu: string;
}

export default function FicheProductionEcrite({ slug, titre, contenu }: FicheProductionEcriteProps) {
  let corps: React.ReactNode;
  let sommaire: string[];

  if (slug === "aide-expression") {
    const categories = parseExpressions(contenu);
    sommaire = categories.map((c) => c.titre);
    corps = <GrilleExpressions categories={categories} />;
  } else if (slug === "grille-auto-evaluation") {
    const grille = parseGrille(contenu);
    sommaire = grille.sections.map((s) => s.titre);
    corps = <GrilleAutoEvaluation grille={grille} />;
  } else {
    // Numérotation continue d'un morceau à l'autre : chaque texte part
    // du nombre de sections déjà rencontrées.
    sommaire = [];
    corps = segmenter(contenu).map((segment, index) => {
      if (segment.type === "plans") return <GrillePlans key={index} />;
      const premierNumero = sommaire.length + 1;
      sommaire.push(...titresSections(segment.texte));
      if (segment.type === "redaction") {
        return <BlocRedaction key={index} texte={segment.texte} premierNumero={premierNumero} />;
      }
      return (
        <ContenuMarkdown
          key={index}
          texte={segment.texte}
          styleFeuille
          couleurAccent={COULEUR_FEUILLE}
          premierNumero={premierNumero}
        />
      );
    });
  }

  return (
    <>
      <span
        style={{ backgroundColor: COULEUR_FEUILLE }}
        className="flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white"
      >
        <IconePlume className="size-3.5" />
        Production écrite
      </span>
      <h1 className="font-titre text-[28px] leading-tight font-bold text-ink sm:text-[38px]">{titre}</h1>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_270px]">
        <div className="relative overflow-hidden rounded-[22px] border border-border bg-feuille shadow-[0_24px_50px_-20px_rgba(20,30,60,0.25)]">
          <div aria-hidden="true" style={{ backgroundColor: COULEUR_FEUILLE }} className="h-2 w-full" />
          {/* Plume en filigrane, purement décorative — même pastille
           * que les feuilles d'histoire-géo (horloge, globe) et
           * d'éducation islamique (croissant). */}
          <span
            aria-hidden="true"
            style={{ color: COULEUR_FEUILLE } as CSSProperties}
            className="pointer-events-none absolute -top-6 -right-6 opacity-[0.05]"
          >
            <IconePlume className="size-40" />
          </span>
          <div className="relative p-5 sm:p-9 lg:p-12">{corps}</div>
        </div>

        <SommaireHistoireGeo titresSections={sommaire} couleur={COULEUR_FEUILLE} />
      </div>
    </>
  );
}
