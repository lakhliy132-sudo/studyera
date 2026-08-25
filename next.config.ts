import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
