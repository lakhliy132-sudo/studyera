import type { CSSProperties } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ContenuMarkdownProps {
  texte: string | null;
  /** Section (`##`) numérotée dans une pastille pleine couleur au lieu
   * du simple liseré — demandé explicitement par l'utilisateur pour
   * les cours d'histoire-géo ("fais les comme dans une feuille chic et
   * stylée"). Reprend la numérotation ❶❷❸ des schémas du document
   * source plutôt qu'un style générique. `false` par défaut : /langue
   * (déjà en place) garde le liseré simple, inchangé. */
  styleFeuille?: boolean;
  /** Couleur des titres (`h3`), du bandeau/filigrane posés par la page
   * appelante — un token `--color-matiere-*` (app/globals.css). Sans
   * effet si `styleFeuille` est `false`. */
  couleurAccent?: string;
  /** Texte nettement plus grand (paragraphes, listes, titres) —
   * demandé explicitement par l'utilisateur pour les cours d'arabe
   * ("je veux l ecriture taille soit encore plus dans les cours d
   * arabe"). L'arabe se lit mal à la taille prévue pour le français :
   * pas de hampes/jambages, beaucoup de signes distinctifs (points,
   * hamza, chadda) qui demandent plus de corps pour rester nets. */
  grandeTaille?: boolean;
  /** Jeu de couleurs des cours d'arabe, demandé pièce par pièce par
   * l'utilisateur : grands titres (`##`) en rouge et petits titres
   * (`###`) en vert ("I- ca fais les avec le rouge et 1 2 3 avec le
   * vert"), puces/numéros de liste et mots en gras en bleu ciel ("les
   * phrases ou les chiffres qui sont en bleu remplace la couleur avec
   * le bleu ciel" — ils étaient au bleu primaire du site, trop proche
   * du reste de l'interface). Pas de pastilles numérotées ni de texte
   * entièrement en gras, contrairement à `styleFeuille` : les titres
   * des cours d'arabe portent déjà leur propre numérotation ("I-",
   * "1-1/"...), une pastille en plus ferait doublon. */
  schemaCouleursArabe?: boolean;
}

/** Grands titres (`h2`) entièrement en rouge, petits titres (`h3`)
 * entièrement en vert — demandé explicitement par l'utilisateur, qui a
 * d'abord précisé les numéros seuls ("LES GRAND NUMERO 1 2 3 en rouge
 * et les petits nmr 1 2 3 en vert") puis corrigé pour la phrase
 * entière ("nn pour les grand titre en rouge et pour les petits titre
 * en verts toute phrase") : la couleur s'applique au titre au complet
 * (texte + pastille pour `h2`), pas seulement au numéro. Valeurs
 * fixes, pas de token dans app/globals.css : distinction propre à ce
 * style de feuille, pas une couleur de marque à réutiliser ailleurs. */
const COULEUR_GRAND_TITRE = "#dc2626";
const COULEUR_PETIT_TITRE = "#16a34a";

/** Bleu ciel des puces/numéros de liste et des mots en gras dans les
 * cours d'arabe (`schemaCouleursArabe`) — assez soutenu pour rester
 * lisible sur fond blanc, contrairement à un bleu ciel très pâle. */
const COULEUR_BLEU_CIEL = "#0ea5e9";

/** Noir soutenu des passages qui étaient entre parenthèses dans les
 * cours d'arabe — demandé explicitement par l'utilisateur ("enleve )
 * dans toutes les phrases et fais les phrases qui sont entouré par ca
 * plus foncé noir") : les parenthèses ont été retirées du contenu en
 * base et remplacées par de l'emphase Markdown (`*...*`), rendue ici
 * en noir appuyé plutôt qu'en italique — l'italique se lit mal en
 * arabe. */
const COULEUR_NOIR_APPUYE = "#0b1020";

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
export default function ContenuMarkdown({
  texte,
  styleFeuille = false,
  couleurAccent = "var(--color-primary)",
  grandeTaille = false,
  schemaCouleursArabe = false,
}: ContenuMarkdownProps) {
  const sensDeLecture = texte && contientArabe(texte) ? "rtl" : "ltr";
  // Incrémenté à chaque `##` rencontré par ReactMarkdown, dans l'ordre
  // du document — simple variable de fermeture (pas un state React,
  // recalculée à chaque rendu de la fonction), pas de compteur CSS.
  let compteurSection = 0;

  return (
    // `--couleur-feuille` posée ici (plutôt qu'une classe Tailwind
    // générée dynamiquement type `marker:text-[${couleurAccent}]`) :
    // Tailwind scanne le code source à la recherche de classes
    // écrites littéralement, une classe construite à l'exécution comme
    // ça n'est jamais vue par le scanner et ne génère donc aucun CSS.
    // `marker:text-[var(--couleur-feuille)]` ci-dessous reste lui une
    // chaîne littérale (seule la valeur de la variable change), donc
    // bien repéré par Tailwind.
    <div dir={sensDeLecture} style={{ "--couleur-feuille": couleurAccent } as CSSProperties}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: (props) => {
            if (!styleFeuille) {
              return (
                <h2
                  style={schemaCouleursArabe ? { color: COULEUR_GRAND_TITRE, borderColor: COULEUR_GRAND_TITRE } : undefined}
                  className={`mt-10 mb-4 border-s-4 ps-4 font-serif font-bold first:mt-0 ${schemaCouleursArabe ? "" : "border-primary text-ink"} ${grandeTaille ? "text-[30px]" : "text-[24px]"}`}
                  {...props}
                />
              );
            }
            compteurSection += 1;
            return (
              <h2
                id={`section-${compteurSection}`}
                style={{ color: COULEUR_GRAND_TITRE, scrollMarginTop: "6rem" }}
                className={`mt-11 mb-5 flex items-center gap-3.5 font-serif font-bold first:mt-0 ${grandeTaille ? "text-[28px]" : "text-[22px]"}`}
              >
                <span
                  style={{ backgroundColor: COULEUR_GRAND_TITRE }}
                  className={`flex shrink-0 items-center justify-center rounded-full font-bold text-white shadow-sm ${grandeTaille ? "size-11 text-[17px]" : "size-9 text-[14px]"}`}
                >
                  {compteurSection}
                </span>
                <span className="pt-0.5">{props.children}</span>
              </h2>
            );
          },
          h3: (props) =>
            styleFeuille ? (
              <h3
                style={{ color: COULEUR_PETIT_TITRE }}
                className={`mt-7 mb-2 font-serif font-bold ${grandeTaille ? "text-[22px]" : "text-lg"}`}
                {...props}
              />
            ) : (
              <h3
                style={schemaCouleursArabe ? { color: COULEUR_PETIT_TITRE } : undefined}
                className={`mt-7 mb-2 font-serif font-bold ${schemaCouleursArabe ? "" : "text-primary"} ${grandeTaille ? "text-[23px]" : "text-lg"}`}
                {...props}
              />
            ),
          // Texte du cours en gras en styleFeuille (paragraphes, listes,
          // citations) — demandé explicitement par l'utilisateur
          // ("L ECRITURE DU COURS EN GRAS SLP"). /langue (styleFeuille
          // à `false`) garde le texte normal, inchangé.
          p: (props) => (
            <p
              className={`mb-4 font-lecture leading-relaxed text-foreground ${grandeTaille ? "text-[20px]" : "text-[16px]"} ${styleFeuille ? "font-bold" : ""}`}
              {...props}
            />
          ),
          ul: (props) => (
            <ul
              className={`mb-4 flex list-disc flex-col gap-2 ps-5 ${styleFeuille ? "marker:text-[var(--couleur-feuille)]" : schemaCouleursArabe ? "marker:text-[#0ea5e9]" : "marker:text-primary"}`}
              {...props}
            />
          ),
          ol: (props) => (
            <ol
              className={`mb-4 flex list-decimal flex-col gap-2 ps-5 marker:font-semibold ${styleFeuille ? "marker:text-[var(--couleur-feuille)]" : schemaCouleursArabe ? "marker:text-[#0ea5e9]" : "marker:text-primary"}`}
              {...props}
            />
          ),
          li: (props) => (
            <li
              className={`ps-1 font-lecture leading-relaxed text-foreground ${grandeTaille ? "text-[19.5px]" : "text-[15.5px]"} ${styleFeuille ? "font-bold" : ""}`}
              {...props}
            />
          ),
          strong: (props) =>
            schemaCouleursArabe ? (
              <strong style={{ color: COULEUR_BLEU_CIEL }} className="font-bold" {...props} />
            ) : (
              <strong className="font-semibold text-ink" {...props} />
            ),
          em: (props) =>
            schemaCouleursArabe ? (
              // Ex-parenthèses des cours d'arabe : noir appuyé, et pas
              // d'italique (illisible en écriture arabe).
              <em style={{ color: COULEUR_NOIR_APPUYE }} className="font-semibold not-italic" {...props} />
            ) : (
              <em {...props} />
            ),
          blockquote: (props) => (
            <blockquote
              className={`my-5 rounded-lg border border-border bg-background p-4 ps-5 font-lecture text-foreground ${grandeTaille ? "text-[19.5px]" : "text-[15.5px]"} ${styleFeuille ? "font-bold" : ""}`}
              {...props}
            />
          ),
          // Image d'un cours (`![légende](/fichier.jpg)` dans
          // `contenu_mdx`) — balise `<img>` volontairement, pas
          // `next/image` : `react-markdown` ne fournit que `src`/`alt`,
          // sans les dimensions dont `next/image` a besoin. Cadrée
          // comme les autres blocs du cours (coins arrondis, bordure,
          // centrée, jamais plus large que la colonne de texte).
          //
          // `<span>` mis en `block` plutôt que `<figure>`/`<figcaption>` :
          // Markdown place une image seule dans un paragraphe, et un
          // `<figure>` dans un `<p>` est un imbriquement invalide que le
          // navigateur corrige de lui-même — ce qui cassait l'hydratation
          // React (le DOM rendu ne correspondait plus au HTML serveur).
          img: ({ src, alt }) => (
            <span className="my-6 flex flex-col items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={typeof src === "string" ? src : ""}
                alt={alt ?? ""}
                className="h-auto max-w-full rounded-[14px] border border-border shadow-sm"
              />
              {alt && <span className="block text-center text-sm text-muted-foreground">{alt}</span>}
            </span>
          ),
          table: (props) => (
            <div className="my-5 overflow-x-auto rounded-[10px] border border-border">
              <table className="w-full border-collapse text-start" {...props} />
            </div>
          ),
          th: (props) => (
            <th
              className={`border-b border-border bg-primary-tint px-4 py-2.5 text-start font-semibold text-ink ${grandeTaille ? "text-[17px]" : "text-sm"}`}
              {...props}
            />
          ),
          td: (props) => (
            <td
              className={`border-b border-border px-4 py-2 text-start font-lecture text-foreground ${grandeTaille ? "text-[18px]" : "text-[15px]"}`}
              {...props}
            />
          ),
        }}
      >
        {texte ?? ""}
      </ReactMarkdown>
    </div>
  );
}
