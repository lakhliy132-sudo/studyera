"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { creerClientNavigateur } from "@/lib/supabase/client";

interface BoutonSupprimerMessageProps {
  messageId: string;
}

/**
 * Supprime un message du fil de communauté. Affiché uniquement sur ses
 * propres messages (voir app/(eleve)/communaute/page.tsx) ; la policy
 * RLS `communaute_suppression` refuse de toute façon la suppression
 * d'un message écrit par quelqu'un d'autre.
 *
 * Deux temps : un premier clic demande confirmation, le second
 * supprime — pas de `window.confirm`, qui bloque la page et jure avec
 * le reste du site.
 */
export default function BoutonSupprimerMessage({
  messageId,
}: BoutonSupprimerMessageProps) {
  const router = useRouter();
  const [confirme, setConfirme] = useState(false);
  const [suppression, setSuppression] = useState(false);

  async function supprimer() {
    if (!confirme) {
      setConfirme(true);
      return;
    }

    setSuppression(true);
    const supabase = creerClientNavigateur();
    const { error } = await supabase
      .from("communaute_messages")
      .delete()
      .eq("id", messageId);

    if (error) {
      setSuppression(false);
      setConfirme(false);
      return;
    }
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={supprimer}
      disabled={suppression}
      className="shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold text-subtle-foreground transition-colors hover:bg-surface-muted hover:text-erreur disabled:opacity-50"
    >
      {suppression ? "Suppression…" : confirme ? "Confirmer ?" : "Supprimer"}
    </button>
  );
}
