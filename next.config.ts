import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Un package-lock.json traîne dans le dossier personnel de
  // l'utilisateur (C:Usershp), et Next le prenait pour la racine de
  // l'espace de travail — d'où un avertissement à chaque build. On
  // désigne explicitement ce dossier-ci.
  outputFileTracingRoot: __dirname,

  images: {
    // Autorise next/image à afficher les couvertures d'œuvres,
    // typiquement hébergées sur Supabase Storage (bucket public).
    // Motif large (tout projet .supabase.co) plutôt que le sous-domaine
    // exact : évite de devoir modifier ce fichier si le projet Supabase
    // change un jour.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
