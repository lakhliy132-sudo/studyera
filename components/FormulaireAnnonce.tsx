"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { creerClientNavigateur } from "@/lib/supabase/client";

/** Publication d'une annonce — réservé aux admins côté RLS (la policy
 * rejette silencieusement l'écriture d'un non-admin). Directement ici
 * (pas dans lib/supabase/communication.ts, réservé aux lectures
 * serveur) : un Client Component qui importe ne serait-ce qu'une
 * fonction d'un fichier qui importe aussi `next/headers` (via
 * `creerClientServeur`) fait planter toute la page — bogue réel
 * rencontré en vérifiant avec une vraie session, voir le commentaire
 * en tête de lib/supabase/communication.ts. */
async function publierAnnonce(titre: string, contenu: string) {
  const supabase = creerClientNavigateur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Non connecté.");

  const { error } = await supabase.from("annonces").insert({
    titre,
    contenu,
    auteur_id: user.id,
  });
  if (error) throw error;
}

/**
 * Formulaire de publication d'une annonce, dans l'espace admin —
 * demandé explicitement par l'utilisateur ("moi ceo of the site talk
 * avec les eleves"). La RLS de `annonces` refuse l'écriture à qui
 * n'est pas admin (voir la migration
 * 20260901020000_communication_annonces_messages.sql), donc pas besoin
 * de revérifier le rôle ici — cette page n'est de toute façon
 * accessible qu'aux admins (middleware.ts, CHEMINS_ADMIN).
 *
 * `router.refresh()` après publication : relit la liste depuis le
 * Server Component parent, même principe que BoutonDeconnexion.tsx.
 */
export default function FormulaireAnnonce() {
  const router = useRouter();
  const [titre, setTitre] = useState("");
  const [contenu, setContenu] = useState("");
  const [enCours, setEnCours] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  async function publier(evenement: React.FormEvent) {
    evenement.preventDefault();
    if (!titre.trim() || !contenu.trim() || enCours) return;

    setEnCours(true);
    setErreur(null);
    try {
      await publierAnnonce(titre.trim(), contenu.trim());
      setTitre("");
      setContenu("");
      router.refresh();
    } catch {
      setErreur("La publication a échoué. Réessaie.");
    } finally {
      setEnCours(false);
    }
  }

  return (
    <form onSubmit={publier} className="flex flex-col gap-3 rounded-lg border border-border bg-surface-muted p-5">
      <input
        type="text"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        placeholder="Titre de l'annonce"
        className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
      />
      <textarea
        value={contenu}
        onChange={(e) => setContenu(e.target.value)}
        rows={3}
        placeholder="Contenu de l'annonce"
        className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
      />
      {erreur && <p className="text-sm text-erreur">{erreur}</p>}
      <button
        type="submit"
        disabled={enCours || !titre.trim() || !contenu.trim()}
        className="self-start rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
      >
        {enCours ? "Publication..." : "Publier"}
      </button>
    </form>
  );
}
