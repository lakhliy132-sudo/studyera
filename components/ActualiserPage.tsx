"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/** Recharge les données de la page à intervalle régulier, sans rien
 * afficher : sur /live, l'élève qui attend voit le live apparaître sans
 * avoir à recharger lui-même. */
export default function ActualiserPage({ secondes }: { secondes: number }) {
  const router = useRouter();
  useEffect(() => {
    const minuteur = setInterval(() => router.refresh(), secondes * 1000);
    return () => clearInterval(minuteur);
  }, [router, secondes]);
  return null;
}
