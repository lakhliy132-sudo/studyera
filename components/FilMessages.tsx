"use client";

import { useEffect, useRef, useState } from "react";

import { envoyerMessage, marquerMessagesLus } from "@/lib/supabase/communication";
import type { Message } from "@/types/base-de-donnees";

function formaterHeure(dateIso: string) {
  return new Date(dateIso).toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

interface FilMessagesProps {
  /** Le fil concerné — toujours l'élève, jamais un admin (voir
   * types/base-de-donnees.ts, Message.eleve_id). */
  eleveId: string;
  messagesInitiaux: Message[];
  /** id de l'utilisateur connecté (élève ou admin), pour distinguer
   * "mes messages" des messages de l'autre — voir `envoyerMessage`. */
  idUtilisateurConnecte: string;
}

/**
 * Fil de discussion + formulaire d'envoi, partagé entre la messagerie
 * élève (/messages) et la messagerie admin (/administration/messages/
 * [eleveId]) — demandé explicitement par l'utilisateur ("je veux
 * ajouter une case de la comminucation... moi ceo of the site talk
 * avec les eleves qui sont dans la plateforme").
 *
 * Composant client : envoi de message et marquage "lu" se font
 * directement depuis le navigateur (RLS de `messages` garantit qu'on
 * ne peut agir que dans le fil autorisé — même principe que
 * BoutonMarquerLu.tsx), pas de rafraîchissement temps réel (pas de
 * websocket/polling) : un envoi met juste à jour l'état local
 * (optimiste), il faut recharger la page pour voir une nouvelle
 * réponse de l'autre côté — volontairement simple pour une première
 * version.
 */
export default function FilMessages({ eleveId, messagesInitiaux, idUtilisateurConnecte }: FilMessagesProps) {
  const [messages, setMessages] = useState(messagesInitiaux);
  const [brouillon, setBrouillon] = useState("");
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);
  const dejaMarqueLu = useRef(false);

  // Marque une seule fois par affichage les messages de l'autre partie
  // comme lus (n'a aucun effet si `messages` ne changera plus vraiment
  // le contenu du fil, uniquement le statut `lu`).
  useEffect(() => {
    if (dejaMarqueLu.current) return;
    dejaMarqueLu.current = true;
    const aDesMessagesNonLus = messagesInitiaux.some(
      (m) => !m.lu && m.auteur_id !== idUtilisateurConnecte,
    );
    if (aDesMessagesNonLus) {
      marquerMessagesLus(eleveId, idUtilisateurConnecte).catch((e) =>
        console.error("marquerMessagesLus:", e),
      );
    }
  }, [eleveId, idUtilisateurConnecte, messagesInitiaux]);

  async function envoyer(evenement: React.FormEvent) {
    evenement.preventDefault();
    const contenu = brouillon.trim();
    if (!contenu || envoiEnCours) return;

    setEnvoiEnCours(true);
    setErreur(null);
    try {
      await envoyerMessage(eleveId, contenu);
      // Mise à jour optimiste : pas besoin de relire la base, on
      // connaît déjà l'auteur (l'utilisateur connecté) et le contenu.
      setMessages((precedent) => [
        ...precedent,
        {
          id: `local-${Date.now()}`,
          eleve_id: eleveId,
          auteur_id: idUtilisateurConnecte,
          contenu,
          lu: false,
          created_at: new Date().toISOString(),
        },
      ]);
      setBrouillon("");
    } catch {
      setErreur("Le message n'a pas pu être envoyé. Réessaie.");
    } finally {
      setEnvoiEnCours(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-col gap-3">
        {messages.length === 0 && (
          <li className="rounded-lg border border-border bg-surface-muted p-4 text-center text-muted-foreground">
            Aucun message pour le moment. Écris le premier ci-dessous.
          </li>
        )}
        {messages.map((message) => {
          const estDeMoi = message.auteur_id === idUtilisateurConnecte;
          return (
            <li key={message.id} className={`flex ${estDeMoi ? "justify-end" : "justify-start"}`}>
              <div
                className={
                  estDeMoi
                    ? "max-w-[80%] rounded-lg bg-primary px-4 py-2.5 text-primary-foreground"
                    : "max-w-[80%] rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground"
                }
              >
                <p className="text-[15px] leading-relaxed whitespace-pre-line">{message.contenu}</p>
                <p className={estDeMoi ? "mt-1 text-xs text-white/70" : "mt-1 text-xs text-muted-foreground"}>
                  {formaterHeure(message.created_at)}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <form onSubmit={envoyer} className="flex flex-col gap-2">
        <textarea
          value={brouillon}
          onChange={(e) => setBrouillon(e.target.value)}
          rows={3}
          placeholder="Écris ton message..."
          className="w-full rounded-lg border border-border bg-surface p-3 text-[15px] text-foreground focus:border-primary focus:outline-none"
        />
        {erreur && <p className="text-sm text-erreur">{erreur}</p>}
        <button
          type="submit"
          disabled={envoiEnCours || !brouillon.trim()}
          className="self-end rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
        >
          {envoiEnCours ? "Envoi..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
}
