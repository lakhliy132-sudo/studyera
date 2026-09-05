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
 * Pas de fond décoratif sur `<body>` — un dégradé bleu façon peinture
 * y avait été ajouté puis retiré à la demande explicite de
 * l'utilisateur ("enleve l arriere plan que t a fais"). Le fond reste
 * la simple couleur `--color-background` posée par `body` dans
 * app/globals.css.
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
        <BarreNavigation connecte={Boolean(user)} email={user?.email ?? null} />
        {children}
      </body>
    </html>
  );
}
