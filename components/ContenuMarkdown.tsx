import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ContenuMarkdownProps {
  texte: string | null;
}

/** Vrai si `texte` contient au moins un caractère arabe — heuristique
 * simple pour détecter automatiquement le sens de lecture (aucune
 * colonne `langue` sur `cours` pour l'instant). */
function contientArabe(texte: string): boolean {
  return /[؀-ۿ]/.test(texte);
}

/**
 * Rendu Markdown stylé d'un contenu de cours (`cours.contenu_mdx`) —
 * extrait de app/(public)/langue/[slug]/page.tsx (onglet "Cours") pour
 * être réutilisé tel quel par les nouvelles matières génériques
 * (app/(public)/[matiere]/[slug]/page.tsx), plutôt que de dupliquer ce
 * mapping de composants à chaque nouvelle page de contenu. Simple
 * Markdown via `react-markdown`, pas de vrai MDX exécuté (pas besoin
 * de composants interactifs dans le texte de cours).
 *
 * Sens de lecture automatique (`dir`) + propriétés CSS "logiques"
 * (`ps-*`/`border-s-*`, qui suivent `dir` au lieu d'être toujours à
 * gauche) — corrige un défaut signalé explicitement par l'utilisateur
 * sur les leçons d'histoire-géo en arabe ("les points et les chiffres
 * ... ils ne sont pas bien mises") : les puces, numéros et le liseré
 * des titres restaient plaqués à gauche (`pl-*`/`border-l-*` fixes)
 * alors que le texte arabe se lit de droite à gauche, ce qui décalait
 * visuellement puces/numéros du texte qu'ils accompagnent. Le
 * français (déjà utilisé par /langue) garde `dir="ltr"`, inchangé.
 */
export default function ContenuMarkdown({ texte }: ContenuMarkdownProps) {
  const sensDeLecture = texte && contientArabe(texte) ? "rtl" : "ltr";

  return (
    <div dir={sensDeLecture}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: (props) => (
            <h2
              className="mt-10 mb-4 border-s-4 border-primary ps-4 font-serif text-[24px] font-bold text-ink first:mt-0"
              {...props}
            />
          ),
          h3: (props) => (
            <h3 className="mt-7 mb-2 font-serif text-lg font-bold text-primary" {...props} />
          ),
          p: (props) => (
            <p className="mb-4 font-lecture text-[16px] leading-relaxed text-foreground" {...props} />
          ),
          ul: (props) => (
            <ul className="mb-4 flex list-disc flex-col gap-2 ps-5 marker:text-primary" {...props} />
          ),
          ol: (props) => (
            <ol
              className="mb-4 flex list-decimal flex-col gap-2 ps-5 marker:font-semibold marker:text-primary"
              {...props}
            />
          ),
          li: (props) => (
            <li className="ps-1 font-lecture text-[15.5px] leading-relaxed text-foreground" {...props} />
          ),
          strong: (props) => <strong className="font-semibold text-ink" {...props} />,
          blockquote: (props) => (
            <blockquote
              className="my-5 rounded-lg border border-border bg-background p-4 ps-5 font-lecture text-[15.5px] text-foreground"
              {...props}
            />
          ),
          table: (props) => (
            <div className="my-5 overflow-x-auto rounded-[10px] border border-border">
              <table className="w-full border-collapse text-start" {...props} />
            </div>
          ),
          th: (props) => (
            <th
              className="border-b border-border bg-primary-tint px-4 py-2.5 text-start text-sm font-semibold text-ink"
              {...props}
            />
          ),
          td: (props) => (
            <td className="border-b border-border px-4 py-2 text-start font-lecture text-[15px] text-foreground" {...props} />
          ),
        }}
      >
        {texte ?? ""}
      </ReactMarkdown>
    </div>
  );
}
