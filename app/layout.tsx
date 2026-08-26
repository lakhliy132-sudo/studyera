import type { Metadata } from "next";
import { Amiri, DM_Sans, Playfair_Display, Spectral } from "next/font/google";
import "./globals.css";

import BarreNavigation from "@/components/BarreNavigation";
import { creerClientServeur } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "MADRASTI",
  description: "MADRASTI",
};

/**
 * Police arabe (Amiri), chargée et auto-hébergée par Next.js au build
 * (pas de requête vers Google au chargement de la page). Exposée comme
 * variable CSS `--font-amiri` sur <html>, reprise par le token
 * `font-arabe` défini dans app/globals.css : les composants utilisent
 * `font-arabe`, jamais `--font-amiri` directement.
 */
const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

/**
 * Police serif des grands titres (titre d'une œuvre, d'un chapitre),
 * reprise de la maquette de référence. Exposée comme `--font-playfair`,
 * reprise par le token `font-serif` dans app/globals.css.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

/**
 * Police du texte de lecture longue (résumés bilingues) — distincte de
 * la police d'interface : un serif de labeur (Spectral), plus confortable
 * à lire sur plusieurs paragraphes qu'un sans-serif d'interface. Exposée
 * comme `--font-spectral`, reprise par le token `font-lecture`.
 */
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
});

/**
 * Police de tout le texte d'interface (nav, boutons, listes, labels).
 * Exposée comme `--font-dm-sans`, reprise par le token `--font-sans`
 * (l'utilitaire Tailwind par défaut, donc aussi le corps de page, sans
 * classe à ajouter nulle part).
 */
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
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
 */
export default async function RootLayout({ children }: LayoutProps<"/">) {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html
      lang="fr"
      className={`${amiri.variable} ${playfair.variable} ${spectral.variable} ${dmSans.variable}`}
    >
      <body className="font-sans">
        <BarreNavigation connecte={Boolean(user)} email={user?.email ?? null} />
        {children}
      </body>
    </html>
  );
}
