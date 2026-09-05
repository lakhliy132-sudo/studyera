import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans_Arabic, Inter, Lora, Playfair_Display } from "next/font/google";
import "./globals.css";

import BarreNavigation from "@/components/BarreNavigation";
import { creerClientServeur } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "STUDYERA",
  description: "STUDYERA",
};

/**
 * Police arabe (IBM Plex Sans Arabic), chargée et auto-hébergée par
 * Next.js au build (pas de requête vers Google au chargement de la
 * page). Exposée comme variable CSS `--font-ibm-plex-arabic`, reprise
 * par le token `font-arabe` défini dans app/globals.css : les
 * composants utilisent `font-arabe`, jamais la variable directement.
 */
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-arabic",
});

/**
 * Police serif des grands titres (titre d'une œuvre, d'un chapitre),
 * reprise de la maquette de référence. Exposée comme `--font-playfair`,
 * reprise par le token `font-serif` dans app/globals.css.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

/**
 * Police du texte de lecture longue (résumés bilingues) — distincte de
 * la police d'interface : un serif de labeur (Lora), plus confortable
 * à lire sur plusieurs paragraphes qu'un sans-serif d'interface. Exposée
 * comme `--font-lora`, reprise par le token `font-lecture`.
 */
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

/**
 * Police de tout le texte d'interface (nav, boutons, listes, labels).
 * Exposée comme `--font-inter`, reprise par le token `--font-sans`
 * (l'utilitaire Tailwind par défaut, donc aussi le corps de page, sans
 * classe à ajouter nulle part).
 */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

/**
 * Police à chasse fixe pour les petits libellés "étiquette" en
 * capitales (ex. "CHAPITRE 01", "PRODUCTION ÉCRITE" sur le tableau de
 * bord) — ajoutée pour le tableau de bord réécrit sur un modèle fourni
 * par l'utilisateur ("fais moi comme ca mais ajoute des modif bien").
 * Même famille IBM Plex que la police arabe déjà en place, cohérent
 * avec le reste du système typographique plutôt qu'une police
 * supplémentaire sans rapport. Exposée comme `--font-ibm-plex-mono`,
 * reprise par le token `font-mono` dans app/globals.css.
 */
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
});

/**
 * Police serif éditoriale, réservée à /tableau-de-bord — demandé
 * explicitement par l'utilisateur, qui n'aimait pas le premier rendu
 * ("tu peux modifier le design j ai pas aimé comme ca" / "tout") après
 * un premier essai qui adaptait son modèle fourni aux polices déjà en
 * place (Playfair Display) plutôt que de le reprendre tel quel. Cette
 * fois, la police du modèle fourni (Fraunces) est reprise directement,
 * dans un espace de tokens dédié à cette seule page (voir
 * `.tableau-de-bord` dans app/globals.css) — n'affecte aucune autre
 * page du site.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

/**
 * Layout racine : s'applique à toutes les pages, quel que soit leur
 * groupe de routes ((public), (eleve), (admin)).
 *
 * Affiche BarreNavigation partout, avec l'état de connexion résolu une
 * seule fois ici (plutôt que de le refaire dans chaque page) et
 * transmis en props. Rend chaque page dynamique (plus de rendu
 * statique pur), acceptable pour une nav qui doit refléter la vraie
 * session de l'utilisateur.
 *
 * Plus de menu latéral ni de padding compensatoire ici — après un
 * aller-retour (menu vertical fixe puis retour à une navbar
 * horizontale, demandé explicitement par l'utilisateur avec la
 * référence du site Axiom), `BarreNavigation` est de nouveau une
 * simple barre en haut, dans le flux normal du document.
 *
 * Fond décoratif "vague" en haut de page — deuxième version, ajustée
 * sur la vraie capture du site Axiom (axiom-platforms.com/how-it-works)
 * fournie par l'utilisateur ("regarde la photo que je viens de mettre
 * au fichier axiom mets la comme ca") : la première tentative (une
 * ellipse floue symétrique, en dôme) était trop ronde et trop colorée
 * comparée à la vraie référence, qui est une vague *asymétrique* — un
 * seul tracé fluide, plus creux vers le centre-gauche que sur les
 * bords — et une teinte beaucoup plus discrète (gris-bleu très pâle,
 * presque neutre). Remplacé par un vrai tracé SVG (`<path>`, une seule
 * courbe de Bézier) plutôt qu'une forme CSS floue : donne un contrôle
 * précis sur l'asymétrie de la vague, impossible à obtenir avec un
 * dégradé radial + `blur`.
 *
 * `fixed`, `-z-10`, `pointer-events-none` : purement décoratif, hors
 * du flux, ne touche ni la navbar (qui garde son propre fond opaque
 * par-dessus), ni le contenu, ni les cartes, ni les boutons — comme
 * demandé explicitement lors de la première version. Le violet/lavande
 * n'existe dans aucun token `--color-*` du site (uniquement des
 * bleus) : une seule couleur brute ponctuelle (`#e2e1f5`, un
 * gris-lavande très pâle) est donc utilisée ici, pour cet effet précis
 * seulement, plutôt que d'inventer un token global pour une teinte qui
 * ne sert qu'à ce dégradé.
 */

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html
      lang="fr"
      className={`${ibmPlexArabic.variable} ${playfair.variable} ${lora.variable} ${inter.variable} ${ibmPlexMono.variable} ${fraunces.variable}`}
    >
      <body className="font-sans">
        <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 -z-10 w-full">
          <svg viewBox="0 0 1440 620" preserveAspectRatio="none" className="h-[75vh] w-full">
            <defs>
              <linearGradient id="dégradé-vague-accueil" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="color-mix(in srgb, var(--color-primary) 14%, white)" />
                <stop offset="55%" stopColor="#e2e1f5" />
                <stop offset="100%" stopColor="white" />
              </linearGradient>
            </defs>
            <path
              d="M0,0 H1440 V60 C1220,150 1040,260 800,300 C560,340 340,300 160,260 C90,244 30,232 0,224 Z"
              fill="url(#dégradé-vague-accueil)"
            />
          </svg>
        </div>
        <BarreNavigation connecte={Boolean(user)} email={user?.email ?? null} />
        {children}
      </body>
    </html>
  );
}
