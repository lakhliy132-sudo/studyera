import type { Metadata } from "next";
import { Amiri } from "next/font/google";
import "./globals.css";

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
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={amiri.variable}>
      <body>{children}</body>
    </html>
  );
}
