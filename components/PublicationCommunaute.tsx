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

/** Une réponse (commentaire) sous une publication. */
interface Commentaire {
  id: string;
  auteurId: string;
  auteur: string;
  contenu: string;
  createdAt: string;
}

/** Même limite que les publications (contrainte de
 * communaute_messages) : un commentaire reste court. */
const LONGUEUR_MAX = 1000;

function depuis(iso: string): string {
  const minutes = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (minutes < 1) return "à l'instant";
  if (minutes < 60) return `il y a ${minutes} min`;
  const heures = Math.round(minutes / 60);
  if (heures < 24) return `il y a ${heures} h`;
  const jours = Math.round(heures / 24);
  if (jours === 1) return "hier";
  if (jours < 7) return `il y a ${jours} jours`;
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long" }).format(new Date(iso));
}

/**
 * Barre d'actions sous une publication : "j'aime", commentaires,
 * suppression — les compteurs que montre la maquette sous chaque
 * message.
 *
 * Commentaires (« je peux pas faire des commentaires sur les
 * publications des gens… ajoute-le ») : le compteur de réponses devient
 * un bouton « Commenter » qui déplie les réponses (chargées à
 * l'ouverture seulement, pour ne pas les lire toutes avec le fil) et un
 * champ pour en écrire une. La table `communaute_reponses` existait
 * déjà en base avec ses règles (lecture par tout élève connecté,
 * écriture et suppression par l'auteur) : il ne manquait que l'écran.
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
  const [ouvert, setOuvert] = useState(false);
  const [commentaires, setCommentaires] = useState<Commentaire[] | null>(null);
  const [nombre, setNombre] = useState(nombreReponses);
  const [moi, setMoi] = useState<string | null>(null);
  const [texte, setTexte] = useState("");
  const [envoi, setEnvoi] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  /** Prénom affiché : le premier mot de `profils.nom_complet`, sinon
   * « Élève » (même règle que lib/supabase/communaute.ts). */
  async function prenoms(ids: string[]): Promise<Map<string, string>> {
    if (ids.length === 0) return new Map();
    const supabase = creerClientNavigateur();
    const { data } = await supabase.from("profils").select("id, nom_complet").in("id", [...new Set(ids)]);
    return new Map(
      (data ?? []).map((p) => [p.id as string, ((p.nom_complet as string | null) ?? "").trim().split(/\s+/)[0] || "Élève"]),
    );
  }

  async function chargerCommentaires() {
    const supabase = creerClientNavigateur();
    const [{ data: lignes, error }, { data: session }] = await Promise.all([
      supabase
        .from("communaute_reponses")
        .select("id, auteur_id, contenu, created_at")
        .eq("message_id", messageId)
        .order("created_at"),
      supabase.auth.getUser(),
    ]);
    setMoi(session.user?.id ?? null);
    if (error) {
      setErreur("Les commentaires n'ont pas pu être chargés.");
      setCommentaires([]);
      return;
    }
    const liste = (lignes ?? []) as { id: string; auteur_id: string; contenu: string; created_at: string }[];
    const noms = await prenoms(liste.map((l) => l.auteur_id));
    setCommentaires(
      liste.map((l) => ({
        id: l.id,
        auteurId: l.auteur_id,
        auteur: noms.get(l.auteur_id) ?? "Élève",
        contenu: l.contenu,
        createdAt: l.created_at,
      })),
    );
    setNombre(liste.length);
  }

  function basculerCommentaires() {
    const suivant = !ouvert;
    setOuvert(suivant);
    if (suivant && commentaires === null) void chargerCommentaires();
  }

  async function publierCommentaire(e: React.FormEvent) {
    e.preventDefault();
    const contenu = texte.trim();
    if (!contenu || envoi) return;
    if (contenu.length > LONGUEUR_MAX) {
      setErreur(`Ton commentaire dépasse ${LONGUEUR_MAX} caractères.`);
      return;
    }
    setEnvoi(true);
    setErreur(null);
    const supabase = creerClientNavigateur();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setEnvoi(false);
      setErreur("Connecte-toi pour commenter.");
      return;
    }
    const { data, error } = await supabase
      .from("communaute_reponses")
      .insert({ message_id: messageId, auteur_id: user.id, contenu })
      .select("id, created_at")
      .single();
    setEnvoi(false);
    if (error || !data) {
      setErreur("Ton commentaire n'a pas pu être publié, réessaie.");
      return;
    }
    const noms = await prenoms([user.id]);
    setCommentaires((liste) => [
      ...(liste ?? []),
      { id: data.id, auteurId: user.id, auteur: noms.get(user.id) ?? "Élève", contenu, createdAt: data.created_at },
    ]);
    setNombre((n) => n + 1);
    setMoi(user.id);
    setTexte("");
  }

  async function supprimerCommentaire(id: string) {
    const supabase = creerClientNavigateur();
    const { error } = await supabase.from("communaute_reponses").delete().eq("id", id);
    if (error) {
      setErreur("Le commentaire n'a pas pu être supprimé.");
      return;
    }
    setCommentaires((liste) => (liste ?? []).filter((c) => c.id !== id));
    setNombre((n) => Math.max(0, n - 1));
  }

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
    <div className="mt-3 border-t border-border pt-3">
      <div className="flex items-center gap-4">
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

        <button
          type="button"
          onClick={basculerCommentaires}
          aria-expanded={ouvert}
          className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
            ouvert ? "text-primary" : "text-subtle-foreground hover:text-primary"
          }`}
        >
          <IconeBulles className="size-4" />
          {nombre}
          <span className="font-medium">{nombre === 0 ? "Commenter" : nombre === 1 ? "commentaire" : "commentaires"}</span>
        </button>

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

      {ouvert && (
        <div className="mt-3 flex flex-col gap-3">
          {commentaires === null ? (
            <p className="text-sm text-subtle-foreground">Chargement des commentaires…</p>
          ) : commentaires.length === 0 ? (
            <p className="text-sm text-subtle-foreground">Aucun commentaire pour l&apos;instant : sois le premier à répondre.</p>
          ) : (
            <ul className="flex flex-col gap-2.5">
              {commentaires.map((c) => (
                <li key={c.id} className="flex items-start gap-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-tint text-xs font-bold text-primary">
                    {c.auteur.charAt(0).toUpperCase()}
                  </span>
                  <div className="min-w-0 flex-1 rounded-[14px] bg-surface-muted px-3.5 py-2.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-ink">{c.auteur}</span>
                      <span className="text-xs text-subtle-foreground">{depuis(c.createdAt)}</span>
                      {moi === c.auteurId && (
                        <button
                          type="button"
                          onClick={() => supprimerCommentaire(c.id)}
                          className="ms-auto text-xs font-semibold text-subtle-foreground transition-colors hover:text-erreur"
                        >
                          Supprimer
                        </button>
                      )}
                    </div>
                    <p className="mt-1 font-lecture text-[14.5px] leading-relaxed whitespace-pre-line text-foreground">{c.contenu}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <form onSubmit={publierCommentaire} className="flex items-end gap-2">
            <label htmlFor={`commentaire-${messageId}`} className="sr-only">
              Écrire un commentaire
            </label>
            <textarea
              id={`commentaire-${messageId}`}
              value={texte}
              onChange={(e) => setTexte(e.target.value)}
              onKeyDown={(e) => {
                // Entrée publie, Maj + Entrée passe à la ligne.
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  e.currentTarget.form?.requestSubmit();
                }
              }}
              rows={1}
              maxLength={LONGUEUR_MAX}
              placeholder="Écris un commentaire…"
              className="min-h-[42px] flex-1 resize-y rounded-[14px] border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-subtle-foreground focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              disabled={envoi || texte.trim().length === 0}
              className="h-[42px] shrink-0 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              {envoi ? "Envoi…" : "Publier"}
            </button>
          </form>
          {erreur && <p className="text-sm text-erreur">{erreur}</p>}
        </div>
      )}
    </div>
  );
}
