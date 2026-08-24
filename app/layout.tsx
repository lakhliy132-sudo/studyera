import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MADRASTI",
  description: "MADRASTI",
};

/**
 * Layout racine : s'applique à toutes les pages, quel que soit leur
 * groupe de routes ((public), (eleve), (admin)). Reste volontairement
 * minimal pour cette session (pas de navigation, pas de design).
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
