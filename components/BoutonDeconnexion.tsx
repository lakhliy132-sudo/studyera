"use client";

import { useRouter } from "next/navigation";

import { creerClientNavigateur } from "@/lib/supabase/client";

/** Bouton de déconnexion affiché dans BarreNavigation pour un
 * utilisateur connecté. Redirige vers l'accueil une fois déconnecté ;
 * `router.refresh()` force le rendu serveur à relire l'état "non
 * connecté" (sinon la nav resterait affichée comme connectée jusqu'au
 * prochain changement de page).
 *
 * `pleineLargeur` : bouton assorti au reste du menu latéral/tiroir
 * mobile (pleine largeur, coins plus arrondis) — demandé explicitement
 * par l'utilisateur ("fait la partie de email et deconnter stylé"),
 * qui trouvait le petit bouton à bordure plate d'origine trop nu.
 */
export default function BoutonDeconnexion({ pleineLargeur = false }: { pleineLargeur?: boolean }) {
  const router = useRouter();

  async function seDeconnecter() {
    const supabase = creerClientNavigateur();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={seDeconnecter}
      className={
        "rounded-[10px] border border-border-strong text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-surface hover:text-primary " +
        (pleineLargeur ? "w-full px-4 py-2.5" : "px-4 py-2 font-medium")
      }
    >
      Se déconnecter
    </button>
  );
}
