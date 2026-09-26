import { creerClientServeur } from "@/lib/supabase/server";

export interface MessageCommunaute {
  id: string;
  auteurId: string;
  /** Prénom affiché, dérivé de `profils.nom_complet` quand il existe. */
  auteur: string;
  contenu: string;
  createdAt: string;
}

/**
 * Lectures du fil de communauté (Server Components uniquement — ce
 * fichier importe `creerClientServeur`, donc `next/headers`). Les
 * écritures vivent dans le composant client
 * `FormulaireCommunaute.tsx`, jamais ici : un Client Component qui
 * importerait ne serait-ce qu'une fonction de ce fichier ferait
 * planter la page (même limite que lib/supabase/communication.ts).
 *
 * ⚠️ La table `communaute_messages` vient de la migration
 * supabase/migrations/20260927000000_communaute.sql, à exécuter
 * manuellement dans l'éditeur SQL de Supabase : cet environnement n'a
 * que les clés REST, qui ne permettent pas de créer des tables. Tant
 * qu'elle n'existe pas, la lecture renvoie une liste vide au lieu de
 * faire planter le tableau de bord — le message d'erreur est
 * simplement journalisé côté serveur.
 */
export async function recupererMessagesCommunaute(limite: number): Promise<MessageCommunaute[]> {
  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("communaute_messages")
    .select("id, auteur_id, contenu, created_at")
    .order("created_at", { ascending: false })
    .limit(limite);

  if (error) {
    console.error("recupererMessagesCommunaute:", error.message);
    return [];
  }

  const lignes = (data ?? []) as {
    id: string;
    auteur_id: string;
    contenu: string;
    created_at: string;
  }[];
  if (lignes.length === 0) return [];

  // Les noms viennent de `profils`, table distincte : une jointure
  // PostgREST supposerait une clé étrangère déclarée entre les deux,
  // ce qui n'est pas le cas ici.
  const { data: profils } = await supabase
    .from("profils")
    .select("id, nom_complet")
    .in(
      "id",
      lignes.map((ligne) => ligne.auteur_id),
    );

  const noms = new Map((profils ?? []).map((p) => [p.id as string, p.nom_complet as string | null]));

  return lignes.map((ligne) => ({
    id: ligne.id,
    auteurId: ligne.auteur_id,
    auteur: (noms.get(ligne.auteur_id) ?? "").trim().split(/\s+/)[0] || "Élève",
    contenu: ligne.contenu,
    createdAt: ligne.created_at,
  }));
}
