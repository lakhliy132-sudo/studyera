"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { IconeCoeur, IconeFleche } from "@/components/icones";
import { creerClientNavigateur } from "@/lib/supabase/client";

/**
 * Les gestes de l'élève sur le défi de la semaine : envoyer sa réponse,
 * la retirer, voter pour celle d'un autre. Écriture directe depuis le
 * navigateur ; les règles (une réponse par élève, avant la date limite,
 * pas de vote pour soi) sont tenues par les policies RLS de
 * supabase/migrations/20261103000000_defis.sql, pas seulement ici.
 * `router.refresh()` relit le défi rendu côté serveur.
 */

const LONGUEUR_MAX = 2000;

export function FormulaireReponseDefi({ defiId }: { defiId: string }) {
  const router = useRouter();
  const [contenu, setContenu] = useState("");
  const [envoi, setEnvoi] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  async function envoyer(evenement: React.FormEvent) {
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
      setErreur("Ta session a expiré, reconnecte-toi pour répondre.");
      setEnvoi(false);
      return;
    }

    const { error } = await supabase.from("defis_reponses").insert({ defi_id: defiId, auteur_id: user.id, contenu: texte });
    if (error) {
      setErreur(
        error.code === "23505"
          ? "Tu as déjà envoyé une réponse à ce défi."
          : "Ta réponse n'a pas pu être envoyée. Le défi est peut-être terminé.",
      );
      setEnvoi(false);
      return;
    }
    setContenu("");
    setEnvoi(false);
    router.refresh();
  }

  return (
    <form onSubmit={envoyer} className="flex flex-col gap-3">
      <label htmlFor="reponse-defi" className="text-sm font-bold text-ink">
        Ta réponse
      </label>
      <textarea
        id="reponse-defi"
        value={contenu}
        onChange={(e) => setContenu(e.target.value)}
        maxLength={LONGUEUR_MAX}
        rows={5}
        placeholder="Rédige ta réponse comme le jour de l'examen…"
        className="w-full resize-y rounded-[14px] border border-border bg-surface p-3.5 font-lecture text-[15px] leading-relaxed text-foreground placeholder:text-subtle-foreground focus:border-primary focus:outline-none"
      />
      {erreur && <p className="text-xs font-semibold text-erreur">{erreur}</p>}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs text-subtle-foreground">
          {contenu.trim().length}/{LONGUEUR_MAX} · une seule réponse par élève
        </span>
        <button
          type="submit"
          disabled={envoi || contenu.trim().length === 0}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-primary-foreground shadow-sm transition-all hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50"
        >
          {envoi ? "Envoi…" : "Envoyer ma réponse"}
          <IconeFleche className="size-3.5" />
        </button>
      </div>
    </form>
  );
}

/** Retirer sa réponse pour la réécrire, tant que le défi est ouvert. */
export function BoutonRetirerReponse({ reponseId }: { reponseId: string }) {
  const router = useRouter();
  const [confirmer, setConfirmer] = useState(false);
  const [enCours, setEnCours] = useState(false);

  async function retirer() {
    setEnCours(true);
    await creerClientNavigateur().from("defis_reponses").delete().eq("id", reponseId);
    setEnCours(false);
    setConfirmer(false);
    router.refresh();
  }

  if (!confirmer) {
    return (
      <button type="button" onClick={() => setConfirmer(true)} className="text-xs font-semibold text-subtle-foreground hover:text-erreur">
        Retirer ma réponse
      </button>
    );
  }
  return (
    <span className="flex items-center gap-2 text-xs font-semibold">
      <span className="text-muted-foreground">Retirer ta réponse et ses votes ?</span>
      <button type="button" disabled={enCours} onClick={retirer} className="text-erreur hover:underline">
        Oui, retirer
      </button>
      <button type="button" onClick={() => setConfirmer(false)} className="text-muted-foreground hover:underline">
        Annuler
      </button>
    </span>
  );
}

/** Vote pour une réponse (ou retrait du vote). Désactivé sur sa propre
 * réponse : la policy le refuserait de toute façon. */
export function BoutonVoteDefi({
  reponseId,
  nombreVotes,
  votePersonnel,
  estAuteur,
}: {
  reponseId: string;
  nombreVotes: number;
  votePersonnel: boolean;
  estAuteur: boolean;
}) {
  const router = useRouter();
  const [vote, setVote] = useState(votePersonnel);
  const [total, setTotal] = useState(nombreVotes);
  const [enCours, setEnCours] = useState(false);

  async function basculer() {
    if (estAuteur || enCours) return;
    setEnCours(true);
    const supabase = creerClientNavigateur();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setEnCours(false);
      return;
    }
    const { error } = vote
      ? await supabase.from("defis_votes").delete().eq("reponse_id", reponseId).eq("auteur_id", user.id)
      : await supabase.from("defis_votes").insert({ reponse_id: reponseId, auteur_id: user.id });
    if (!error) {
      setTotal((t) => t + (vote ? -1 : 1));
      setVote(!vote);
      router.refresh();
    }
    setEnCours(false);
  }

  return (
    <button
      type="button"
      onClick={basculer}
      disabled={estAuteur || enCours}
      aria-pressed={vote}
      title={estAuteur ? "Tu ne peux pas voter pour ta propre réponse" : vote ? "Retirer mon vote" : "Voter pour cette réponse"}
      className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-bold tabular-nums transition-colors disabled:cursor-not-allowed ${
        vote
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-surface text-muted-foreground enabled:hover:border-primary enabled:hover:text-primary"
      }`}
    >
      <IconeCoeur className="size-4" />
      {total}
      <span className="sr-only">vote{total > 1 ? "s" : ""}</span>
    </button>
  );
}
