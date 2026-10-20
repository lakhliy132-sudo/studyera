"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { creerClientNavigateur } from "@/lib/supabase/client";

/** « Supprimer » sous une annonce, pour les admins (/annonces). La RLS
 * de `annonces` refuse la suppression à qui n'est pas admin. */
export default function BoutonSupprimerAnnonce({ id }: { id: string }) {
  const router = useRouter();
  const [enCours, setEnCours] = useState(false);
  return (
    <button
      type="button"
      disabled={enCours}
      onClick={async () => {
        if (!window.confirm("Supprimer cette annonce ?")) return;
        setEnCours(true);
        const { error } = await creerClientNavigateur().from("annonces").delete().eq("id", id);
        setEnCours(false);
        if (!error) router.refresh();
      }}
      className="self-start text-sm text-subtle-foreground hover:text-erreur disabled:opacity-50"
    >
      {enCours ? "Suppression…" : "Supprimer"}
    </button>
  );
}
