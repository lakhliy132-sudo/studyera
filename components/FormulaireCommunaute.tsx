"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { IconeFleche } from "@/components/icones";
import { creerClientNavigateur } from "@/lib/supabase/client";

const LONGUEUR_MAX = 1000;

/**
 * Champ de publication du fil de communauté.
 *
 * Écriture directe depuis le navigateur (`creerClientNavigateur`),
 * comme les autres formulaires du site : la policy RLS
 * `communaute_publication` garantit qu'on ne peut publier que sous sa
 * propre identité, l'`auteur_id` n'est donc pas à vérifier côté
 * client.
 *
 * `router.refresh()` après l'envoi : le fil est rendu côté serveur,
 * c'est ce qui le fait réapparaître avec le nouveau message sans
 * recharger la page à la main.
 */
export default function FormulaireCommunaute() {
  const router = useRouter();
  const [contenu, setContenu] = useState("");
  const [envoi, setEnvoi] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  async function publier(evenement: React.FormEvent) {
    evenement.preventDefault();
    const texte = contenu.trim();
    if (!texte || envoi) return;

    setEnvoi(true);
    setErreur(null);

    const supabase = creerClientNavigateur();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setErreur("Ta session a expiré, reconnecte-toi pour publier.");
      setEnvoi(false);
      return;
    }

    const { error } = await supabase.from("communaute_messages").insert({ auteur_id: user.id, contenu: texte });

    if (error) {
      setErreur(
        error.message.includes("communaute_messages")
          ? "Le fil n'est pas encore activé sur la base de données."
          : error.message,
      );
      setEnvoi(false);
      return;
    }

    setContenu("");
    setEnvoi(false);
    router.refresh();
  }

  return (
    <form onSubmit={publier} className="flex flex-col gap-2">
      <label htmlFor="message-communaute" className="sr-only">
        Ton message
      </label>
      <textarea
        id="message-communaute"
        value={contenu}
        onChange={(evenement) => setContenu(evenement.target.value)}
        maxLength={LONGUEUR_MAX}
        rows={3}
        placeholder="Pose une question, partage un conseil de révision…"
        className="w-full resize-none rounded-[14px] border border-border bg-surface p-3.5 text-sm text-foreground transition-colors placeholder:text-subtle-foreground focus:border-primary focus:outline-none"
      />
      {erreur && <p className="text-xs font-semibold text-erreur">{erreur}</p>}
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs text-subtle-foreground">
          {contenu.trim().length}/{LONGUEUR_MAX}
        </span>
        <button
          type="submit"
          disabled={envoi || contenu.trim().length === 0}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50"
        >
          {envoi ? "Envoi…" : "Publier"}
          <IconeFleche className="size-3.5" />
        </button>
      </div>
    </form>
  );
}
