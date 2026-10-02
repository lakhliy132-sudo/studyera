"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { IconeBulles, IconeCoeur } from "@/components/icones";
import { creerClientNavigateur } from "@/lib/supabase/client";

interface PublicationCommunauteProps {
  messageId: string;
  nombreReactions: number;
  reactionPersonnelle: boolean;
  nombreReponses: number;
  /** `true` si la personne connectée est l'auteur : elle seule voit le
   * bouton de suppression (la policy RLS refuse les autres). */
  estAuteur: boolean;
}

/**
 * Barre d'actions sous une publication : "j'aime", nombre de réponses,
 * suppression — les compteurs que montre la maquette sous chaque
 * message.
 *
 * L'état du "j'aime" est mis à jour tout de suite à l'écran, avant la
 * réponse du serveur : sans ça, chaque clic attendrait un aller-retour
 * réseau. En cas d'échec, l'affichage revient à son état précédent.
 */
export default function PublicationCommunaute({
  messageId,
  nombreReactions,
  reactionPersonnelle,
  nombreReponses,
  estAuteur,
}: PublicationCommunauteProps) {
  const router = useRouter();
  const [aime, setAime] = useState(reactionPersonnelle);
  const [total, setTotal] = useState(nombreReactions);
  const [confirmeSuppression, setConfirmeSuppression] = useState(false);

  async function basculerReaction() {
    const avant = { aime, total };
    setAime(!aime);
    setTotal(total + (aime ? -1 : 1));

    const supabase = creerClientNavigateur();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setAime(avant.aime);
      setTotal(avant.total);
      return;
    }

    const { error } = avant.aime
      ? await supabase.from("communaute_reactions").delete().eq("message_id", messageId).eq("auteur_id", user.id)
      : await supabase.from("communaute_reactions").insert({ message_id: messageId, auteur_id: user.id });

    if (error) {
      setAime(avant.aime);
      setTotal(avant.total);
    }
  }

  async function supprimer() {
    if (!confirmeSuppression) {
      setConfirmeSuppression(true);
      return;
    }
    const supabase = creerClientNavigateur();
    const { error } = await supabase.from("communaute_messages").delete().eq("id", messageId);
    if (!error) router.refresh();
    else setConfirmeSuppression(false);
  }

  return (
    <div className="mt-3 flex items-center gap-4 border-t border-border pt-3">
      <button
        type="button"
        onClick={basculerReaction}
        aria-pressed={aime}
        className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
          aime ? "text-erreur" : "text-subtle-foreground hover:text-erreur"
        }`}
      >
        <IconeCoeur className="size-4" />
        {total}
      </button>

      <span className="flex items-center gap-1.5 text-sm font-semibold text-subtle-foreground">
        <IconeBulles className="size-4" />
        {nombreReponses}
      </span>

      {estAuteur && (
        <button
          type="button"
          onClick={supprimer}
          className="ms-auto rounded-full px-2.5 py-1 text-xs font-semibold text-subtle-foreground transition-colors hover:bg-surface-muted hover:text-erreur"
        >
          {confirmeSuppression ? "Confirmer ?" : "Supprimer"}
        </button>
      )}
    </div>
  );
}
