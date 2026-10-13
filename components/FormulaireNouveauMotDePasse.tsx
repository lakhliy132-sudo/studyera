"use client";

import { useState } from "react";

import { creerClientNavigateur } from "@/lib/supabase/client";

/**
 * Choix d'un nouveau mot de passe, après le lien « mot de passe
 * oublié » (la route /api/auth/retour a déjà ouvert la session). Deux
 * saisies identiques, 6 caractères au moins (minimum de Supabase).
 */
export default function FormulaireNouveauMotDePasse() {
  const [motDePasse, setMotDePasse] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [enCours, setEnCours] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  async function envoyer(evenement: React.FormEvent) {
    evenement.preventDefault();
    if (motDePasse !== confirmation) {
      setErreur("Les deux mots de passe ne sont pas identiques.");
      return;
    }
    setEnCours(true);
    setErreur(null);
    const { error } = await creerClientNavigateur().auth.updateUser({ password: motDePasse });
    if (error) {
      setErreur(
        error.code === "same_password"
          ? "C'est déjà ton mot de passe actuel : choisis-en un autre."
          : error.code === "weak_password"
            ? "Mot de passe trop faible : au moins 6 caractères."
            : "Ça n'a pas marché. Redemande un lien depuis la page de connexion.",
      );
      setEnCours(false);
      return;
    }
    window.location.assign("/tableau-de-bord");
  }

  const classeChamp =
    "w-full rounded-2xl border border-border bg-surface px-4 py-3.5 text-[15px] text-foreground transition-colors placeholder:text-subtle-foreground focus:border-primary focus:ring-4 focus:ring-primary/15 focus:outline-none";

  return (
    <form onSubmit={envoyer} className="flex flex-col gap-4">
      <label htmlFor="nouveau" className="text-sm font-semibold text-ink">
        Nouveau mot de passe
      </label>
      <input id="nouveau" type="password" required minLength={6} autoComplete="new-password" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} className={classeChamp} placeholder="6 caractères minimum" />
      <label htmlFor="confirmation" className="text-sm font-semibold text-ink">
        Encore une fois
      </label>
      <input id="confirmation" type="password" required minLength={6} autoComplete="new-password" value={confirmation} onChange={(e) => setConfirmation(e.target.value)} className={classeChamp} />
      {erreur && (
        <p role="alert" className="rounded-2xl border border-erreur/40 bg-erreur/10 px-4 py-3 text-sm text-ink">
          {erreur}
        </p>
      )}
      <button
        type="submit"
        disabled={enCours}
        className="mt-1 rounded-2xl bg-primary px-5 py-4 text-[15px] font-bold text-primary-foreground shadow-[0_14px_30px_-14px_var(--color-primary)] transition-all hover:-translate-y-px disabled:opacity-60"
      >
        {enCours ? "Un instant…" : "Enregistrer"}
      </button>
    </form>
  );
}
