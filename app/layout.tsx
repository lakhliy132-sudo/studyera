import type { Metadata } from "next";
import { Amiri } from "next/font/google";
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
 * Layout racine : s'applique à toutes les pages, quel que soit leur
 * groupe de routes ((public), (eleve), (admin)).
 *
 * Session design : affiche BarreNavigation partout, avec l'état de
 * connexion résolu une seule fois ici (plutôt que de le refaire dans
 * chaque page) et transmis en props. Rend chaque page dynamique (plus
 * de rendu statique pur), acceptable pour une nav qui doit refléter la
 * vraie session de l'utilisateur.
 */
export default async function RootLayout({ children }: LayoutProps<"/">) {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="fr" className={amiri.variable}>
      <body>
        <BarreNavigation connecte={Boolean(user)} email={user?.email ?? null} />
        {children}
      </body>
    </html>
  );
}
