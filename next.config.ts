import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Un package-lock.json traîne dans le dossier personnel de
  // l'utilisateur (C:Usershp), et Next le prenait pour la racine de
  // l'espace de travail — d'où un avertissement à chaque build. On
  // désigne explicitement ce dossier-ci.
  outputFileTracingRoot: __dirname,

  experimental: {
    serverActions: {
      // Photos d'une copie envoyées au correcteur (jusqu'à 4 pages,
      // réduites dans le navigateur à ~0,5 Mo chacune). La limite par
      // défaut est de 1 Mo ; on reste sous les 4,5 Mo qu'accepte une
      // fonction Vercel.
      bodySizeLimit: "4mb",
    },
  },

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
