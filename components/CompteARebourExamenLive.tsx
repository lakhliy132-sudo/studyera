"use client";

import { useEffect, useState } from "react";

import { IconeEtoile } from "@/components/icones";
import { prochaineSession } from "@/lib/calendrier";

interface Decompte {
  jours: number;
  heures: number;
  minutes: number;
  secondes: number;
}

function calculerDecompte(cible: Date): Decompte {
  const diff = Math.max(0, cible.getTime() - Date.now());
  return {
    jours: Math.floor(diff / 86_400_000),
    heures: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    secondes: Math.floor((diff % 60_000) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/**
 * Compte à rebours "en direct" (secondes qui défilent) avant la
 * prochaine session de l'examen régional — reprend une maquette
 * fournie par l'utilisateur ("j ai ajouté une photo dans le fichier
 * fais la comme ca dans l acuueil"), affiché sur l'accueil pour un
 * élève connecté.
 *
 * Cible réelle : `prochaineSession()` (lib/calendrier.ts, déjà sourcée
 * pour /calendrier — 28-29 mai 2027, session ordinaire) — rien
 * d'inventé, même date que partout ailleurs sur le site. Composant
 * client : `setInterval` pour l'effet "secondes qui défilent" de la
 * maquette, impossible à rendre côté serveur.
 *
 * Disparaît silencieusement si aucune session à venir (comme sur
 * /calendrier) plutôt que d'afficher un décompte négatif absurde.
 *
 * État initial toujours `null` (calculé nulle part avant l'effet) :
 * calculer `calculerDecompte(...)` dès le rendu (côté serveur pendant
 * le SSR, puis à nouveau côté client à l'hydratation) produisait deux
 * instants différents — le nombre de secondes rendu par le serveur ne
 * correspondait plus à celui du client une fois hydraté, provoquant
 * une erreur d'hydratation React. Repéré en vérifiant la console du
 * navigateur après capture d'écran (badge "1 Issue" du serveur dev).
 * Même principe déjà en place dans BoutonModeNuit.tsx (placeholder
 * jusqu'à l'effet, qui seul lit une valeur dépendante de l'horloge).
 */
export default function CompteARebourExamenLive() {
  const session = prochaineSession();
  const [decompte, setDecompte] = useState<Decompte | null>(null);

  useEffect(() => {
    if (!session) return;
    setDecompte(calculerDecompte(session.debut));
    const intervalle = setInterval(() => setDecompte(calculerDecompte(session.debut)), 1000);
    return () => clearInterval(intervalle);
  }, [session]);

  if (!session || !decompte) return null;

  return (
    <div className="rounded-[24px] border border-border bg-surface p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
          <IconeEtoile className="size-5" />
        </span>
        <div>
          <p className="font-serif text-lg font-bold text-ink">Bac {session.debut.getFullYear()}</p>
          <p className="text-xs text-muted-foreground">Il te reste encore du temps !</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 text-center">
        {[
          { valeur: decompte.jours, libelle: "jours" },
          { valeur: decompte.heures, libelle: "heures" },
          { valeur: decompte.minutes, libelle: "min" },
          { valeur: decompte.secondes, libelle: "sec" },
        ].map((unite) => (
          <div key={unite.libelle} className="rounded-[12px] bg-background py-2.5">
            <p className="font-serif text-xl font-bold tabular-nums text-ink">{pad(unite.valeur)}</p>
            <p className="text-[10px] font-semibold tracking-wide text-subtle-foreground uppercase">
              {unite.libelle}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">Tu peux le faire ! 💙</p>
    </div>
  );
}
