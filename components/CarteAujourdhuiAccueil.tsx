import { IconeCalendrier } from "@/components/icones";

/**
 * "Aujourd'hui" de l'accueil connecté — reprend la maquette complète
 * envoyée par l'utilisateur ("tu peux faire juste ce qui est sur
 * cette page"), à un écart près assumé : la maquette y montre une
 * liste de tâches horodatées ("Lire le chapitre 2 — 08:00"...), mais
 * aucune table de rappels/tâches personnelles n'existe en base — ces
 * tâches sont des exemples de mise en page dans la maquette, pas de
 * vraies données à reproduire. État honnête "Bientôt disponible" en
 * attendant un vrai système de rappels, même principe que "Mes
 * matières" (GrilleMatieresAccueil.tsx) pour les matières sans
 * contenu.
 */
export default function CarteAujourdhuiAccueil() {
  return (
    <div className="rounded-[24px] border border-border bg-surface p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <IconeCalendrier className="size-4 text-primary" />
        <p className="font-serif text-base font-bold text-ink">Aujourd&apos;hui</p>
      </div>
      <p className="rounded-md border border-dashed border-border-strong bg-background p-6 text-center text-sm text-muted-foreground">
        Pas encore de rappels — bientôt disponible.
      </p>
    </div>
  );
}
