"use client";

import Link from "next/link";
import { useState } from "react";

import { creerClientNavigateur } from "@/lib/supabase/client";

interface BoutonMarquerLuProps {
  connecte: boolean;
  chapitreId: string;
  luInitial: boolean;
}

/**
 * Bouton "Marquer comme lu" / "Lu ✓" en bas de la page d'un chapitre.
 *
 * Mise à jour optimiste : l'état visuel change dès le clic, avant même
 * l'appel réseau. En cas d'échec de l'écriture (RLS, réseau...), on
 * revient à l'état précédent — l'élève voit alors le bouton "sauter"
 * brièvement, préférable à un état incohérent avec la base.
 *
 * Écrit directement dans Supabase depuis le navigateur (comme
 * BoutonConnexionGoogle) : la RLS ("un eleve gere sa propre
 * progression", migration progression_activite_quota) garantit qu'un
 * élève ne peut écrire que sa propre ligne, donc pas de contexte
 * serveur de confiance nécessaire ici.
 */
export default function BoutonMarquerLu({
  connecte,
  chapitreId,
  luInitial,
}: BoutonMarquerLuProps) {
  const [lu, setLu] = useState(luInitial);
  const [enCours, setEnCours] = useState(false);

  if (!connecte) {
    return (
      <p className="text-sm text-muted-foreground">
        <Link href="/connexion" className="font-medium text-primary hover:underline">
          Connecte-toi
        </Link>{" "}
        pour suivre ta progression de lecture.
      </p>
    );
  }

  async function basculer() {
    const nouvelEtat = !lu;
    setLu(nouvelEtat);
    setEnCours(true);

    const supabase = creerClientNavigateur();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Ne devrait pas arriver (la page est accessible sans être connecté,
    // mais `connecte` vient d'un `getUser()` côté serveur juste avant le
    // rendu) : garde défensive plutôt qu'un plantage silencieux.
    if (!user) {
      setLu(!nouvelEtat);
      setEnCours(false);
      return;
    }

    const { error } = await supabase.from("progression").upsert(
      {
        user_id: user.id,
        chapitre_id: chapitreId,
        lu: nouvelEtat,
        termine_le: nouvelEtat ? new Date().toISOString() : null,
      },
      { onConflict: "user_id,chapitre_id" },
    );

    if (error) {
      setLu(!nouvelEtat); // annule la mise à jour optimiste
      console.error("Impossible d'enregistrer la progression :", error.message);
    }

    setEnCours(false);
  }

  return (
    <button
      type="button"
      onClick={basculer}
      disabled={enCours}
      aria-pressed={lu}
      className={
        lu
          ? "self-start rounded-md border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60"
          : "self-start rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-muted disabled:opacity-60"
      }
    >
      {lu ? "Lu ✓" : "Marquer comme lu"}
    </button>
  );
}
