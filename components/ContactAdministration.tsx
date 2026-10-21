"use client";

import Link from "next/link";
import { useState } from "react";

import { creerClientNavigateur } from "@/lib/supabase/client";

/**
 * « Un problème ? » dans /communaute (« ajoute une petite partie où
 * l'élève contacte l'administration s'il a un problème ») : l'élève
 * écrit, le message part dans son fil privé avec l'administration
 * (table `messages`, le même que /messages), et la réponse se lit sur
 * /messages. La RLS n'autorise l'élève qu'à écrire dans son propre fil.
 */
export default function ContactAdministration({ reponsesNonLues }: { reponsesNonLues: number }) {
  const [texte, setTexte] = useState("");
  const [enCours, setEnCours] = useState(false);
  const [envoye, setEnvoye] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  async function envoyer(evenement: React.FormEvent) {
    evenement.preventDefault();
    const contenu = texte.trim();
    if (!contenu || enCours) return;
    setEnCours(true);
    setErreur(null);
    const supabase = creerClientNavigateur();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setErreur("Ta session a expiré, reconnecte-toi.");
      setEnCours(false);
      return;
    }
    const { error } = await supabase.from("messages").insert({ eleve_id: user.id, auteur_id: user.id, contenu });
    setEnCours(false);
    if (error) {
      setErreur("Le message n'a pas pu partir. Réessaie dans un instant.");
      return;
    }
    setTexte("");
    setEnvoye(true);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 rotate-3 items-center justify-center rounded-[12px] bg-primary-tint text-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
            <path d="M12 21a9 9 0 1 0-8.1-5.1L3 21l5.1-.9A9 9 0 0 0 12 21M12 8v4M12 16h.01" />
          </svg>
        </span>
        <div className="min-w-0">
          <p className="font-affiche text-xl leading-tight text-ink">Un problème ?</p>
          <p className="text-xs text-muted-foreground">Écris à l&apos;administration, en privé.</p>
        </div>
      </div>

      {envoye ? (
        <p className="rounded-[14px] bg-validation/15 px-4 py-3 text-sm text-ink">
          <span className="font-bold">Message envoyé ✓</span> Tu liras la réponse dans{" "}
          <Link href="/messages" className="font-bold text-primary hover:underline">
            tes messages
          </Link>
          .
        </p>
      ) : (
        <form onSubmit={envoyer} className="flex flex-col gap-2.5">
          <label className="sr-only" htmlFor="message-administration">
            Ton message à l&apos;administration
          </label>
          <textarea
            id="message-administration"
            value={texte}
            onChange={(e) => setTexte(e.target.value)}
            rows={3}
            maxLength={1000}
            placeholder="Compte, accès, une page qui ne marche pas…"
            className="w-full resize-y rounded-[14px] border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-subtle-foreground focus:border-primary focus:outline-none"
          />
          {erreur && <p className="text-xs font-semibold text-erreur">{erreur}</p>}
          <button
            type="submit"
            disabled={enCours || !texte.trim()}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_10px_22px_-12px_var(--color-primary)] transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none"
          >
            {enCours ? "Envoi…" : "Envoyer"}
          </button>
        </form>
      )}

      <Link href="/messages" className="flex items-center justify-between gap-2 text-sm font-semibold text-primary hover:underline">
        Mes messages
        {reponsesNonLues > 0 && (
          <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground tabular-nums">
            {reponsesNonLues} nouvelle{reponsesNonLues > 1 ? "s" : ""} réponse{reponsesNonLues > 1 ? "s" : ""}
          </span>
        )}
      </Link>
    </div>
  );
}
