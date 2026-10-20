"use client";

import { useActionState } from "react";

import { demarrerLive, type EtatLive } from "@/app/(eleve)/live/actions";

/** Le formulaire « Démarrer le live » de l'admin (/live). */
export default function FormulaireLive() {
  const [etat, action, enCours] = useActionState<EtatLive, FormData>(demarrerLive, { erreur: null });
  return (
    <form action={action} className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <label className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="sr-only">Titre du live</span>
        <input
          name="titre"
          required
          maxLength={120}
          placeholder="Titre du live (ex. : la matière ou la leçon du jour)"
          className="w-full rounded-[14px] border border-border bg-surface px-4 py-3 text-[15px] text-foreground outline-none focus:border-primary"
        />
      </label>
      <button
        type="submit"
        disabled={enCours}
        className="flex items-center justify-center gap-2 rounded-[14px] bg-erreur px-6 py-3 text-[15px] font-bold text-white shadow-sm transition-transform hover:-translate-y-px disabled:opacity-60"
      >
        <span aria-hidden="true" className="size-2.5 rounded-full bg-white" />
        {enCours ? "Démarrage…" : "Démarrer le live"}
      </button>
      {etat.erreur && <p className="text-sm font-semibold text-erreur sm:basis-full">{etat.erreur}</p>}
    </form>
  );
}
