import Link from "next/link";

import { IconeCalendrier } from "@/components/icones";

/**
 * "Aujourd'hui" de l'accueil connecté — reprend la maquette complète
 * envoyée par l'utilisateur ("tu peux faire juste ce qui est sur
 * cette page"), à un écart près assumé : la maquette y montre une
 * liste de tâches horodatées ("Lire le chapitre 2 — 08:00"...), mais
 * aucune table de rappels/tâches personnelles n'existe en base — ces
 * tâches sont des exemples de mise en page dans la maquette, pas de
 * vraies données à reproduire. État honnête "bientôt disponible" en
 * attendant un vrai système de rappels, même principe que "Mes
 * matières" (GrilleMatieresAccueil.tsx) pour les matières sans
 * contenu.
 *
 * Le lien "Voir tout" vers le calendrier, lui, est bien dans la
 * maquette, et la page /calendrier existe : il mène donc à ce qui se
 * rapproche le plus d'un planning réel en attendant les rappels.
 */
export default function CarteAujourdhuiAccueil() {
  return (
    <div className="transition hover:-translate-y-0.5 hover:shadow-md rounded-[24px] border border-border bg-surface p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <IconeCalendrier className="size-4 text-primary" />
          <p className="font-serif text-base font-bold text-ink">Aujourd&apos;hui</p>
        </div>
        <Link href="/calendrier" className="text-xs font-semibold text-primary hover:underline">
          Voir tout
        </Link>
      </div>
      <div className="flex flex-col items-center gap-1.5 py-4 text-center">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary-tint text-primary">
          <IconeCalendrier className="size-5" />
        </span>
        <p className="text-sm font-semibold text-ink">Aucun rappel pour aujourd&apos;hui</p>
        <p className="text-xs text-muted-foreground">Les rappels arrivent bientôt.</p>
      </div>
    </div>
  );
}
