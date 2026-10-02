import { creerClientServeur } from "@/lib/supabase/server";

/** Catégories de publication de la maquette : les onglets du fil
 * ("Tout / Questions / Astuces / Objectifs / Ressources"). */
export const TYPES_PUBLICATION = [
  { cle: "question", libelle: "Question", pluriel: "Questions" },
  { cle: "astuce", libelle: "Astuce", pluriel: "Astuces" },
  { cle: "objectif", libelle: "Objectif", pluriel: "Objectifs" },
  { cle: "ressource", libelle: "Ressource", pluriel: "Ressources" },
  { cle: "discussion", libelle: "Discussion", pluriel: "Discussions" },
] as const;

export type TypePublication = (typeof TYPES_PUBLICATION)[number]["cle"];

export interface MessageCommunaute {
  id: string;
  auteurId: string;
  auteur: string;
  contenu: string;
  type: TypePublication;
  /** Slug de matière (`arabe`, `histoire-geo`…) ou `null`. */
  matiere: string | null;
  createdAt: string;
  nombreReactions: number;
  nombreReponses: number;
  /** `true` si la personne connectée a déjà réagi. */
  reactionPersonnelle: boolean;
}

export interface ReponseCommunaute {
  id: string;
  auteurId: string;
  auteur: string;
  contenu: string;
  createdAt: string;
}

/** Prénom affiché : le premier mot de `profils.nom_complet`, sinon
 * "Élève" — jamais un pseudo inventé. */
function prenomDe(nomComplet: string | null | undefined): string {
  return (nomComplet ?? "").trim().split(/\s+/)[0] || "Élève";
}

async function nomsDesAuteurs(
  supabase: Awaited<ReturnType<typeof creerClientServeur>>,
  ids: string[],
): Promise<Map<string, string>> {
  if (ids.length === 0) return new Map();
  const { data } = await supabase.from("profils").select("id, nom_complet").in("id", [...new Set(ids)]);
  return new Map((data ?? []).map((p) => [p.id as string, prenomDe(p.nom_complet as string | null)]));
}

/**
 * Le fil de communauté, le plus récent d'abord, avec pour chaque
 * publication son nombre de "j'aime" et de réponses.
 *
 * Lectures serveur uniquement (ce fichier importe `next/headers` via
 * `creerClientServeur`) : les écritures vivent dans les composants
 * client, voir la note de lib/supabase/communication.ts.
 *
 * Tolérant aux tables absentes : tant que la migration
 * 20260928000000_communaute_v2.sql n'est pas appliquée, les compteurs
 * valent 0 et le fil s'affiche quand même.
 */
export async function recupererMessagesCommunaute(
  limite: number,
  options?: { type?: TypePublication; matiere?: string },
): Promise<MessageCommunaute[]> {
  const supabase = await creerClientServeur();

  let requete = supabase
    .from("communaute_messages")
    .select("id, auteur_id, contenu, created_at, type, matiere")
    .order("created_at", { ascending: false })
    .limit(limite);

  if (options?.type) requete = requete.eq("type", options.type);
  if (options?.matiere) requete = requete.eq("matiere", options.matiere);

  const { data, error } = await requete;
  if (error) {
    console.error("recupererMessagesCommunaute:", error.message);
    return [];
  }

  const lignes = (data ?? []) as {
    id: string;
    auteur_id: string;
    contenu: string;
    created_at: string;
    type: TypePublication | null;
    matiere: string | null;
  }[];
  if (lignes.length === 0) return [];

  const ids = lignes.map((l) => l.id);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [noms, reactions, reponses] = await Promise.all([
    nomsDesAuteurs(
      supabase,
      lignes.map((l) => l.auteur_id),
    ),
    supabase.from("communaute_reactions").select("message_id, auteur_id").in("message_id", ids),
    supabase.from("communaute_reponses").select("message_id").in("message_id", ids),
  ]);

  const parMessage = new Map<string, { total: number; sienne: boolean }>();
  for (const ligne of (reactions.data ?? []) as { message_id: string; auteur_id: string }[]) {
    const courant = parMessage.get(ligne.message_id) ?? { total: 0, sienne: false };
    courant.total += 1;
    if (user && ligne.auteur_id === user.id) courant.sienne = true;
    parMessage.set(ligne.message_id, courant);
  }

  const comptesReponses = new Map<string, number>();
  for (const ligne of (reponses.data ?? []) as { message_id: string }[]) {
    comptesReponses.set(ligne.message_id, (comptesReponses.get(ligne.message_id) ?? 0) + 1);
  }

  return lignes.map((ligne) => ({
    id: ligne.id,
    auteurId: ligne.auteur_id,
    auteur: noms.get(ligne.auteur_id) ?? "Élève",
    contenu: ligne.contenu,
    type: (ligne.type ?? "discussion") as TypePublication,
    matiere: ligne.matiere,
    createdAt: ligne.created_at,
    nombreReactions: parMessage.get(ligne.id)?.total ?? 0,
    nombreReponses: comptesReponses.get(ligne.id) ?? 0,
    reactionPersonnelle: parMessage.get(ligne.id)?.sienne ?? false,
  }));
}

/** Réponses d'une publication, de la plus ancienne à la plus récente. */
export async function recupererReponsesCommunaute(messageId: string): Promise<ReponseCommunaute[]> {
  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("communaute_reponses")
    .select("id, auteur_id, contenu, created_at")
    .eq("message_id", messageId)
    .order("created_at");

  if (error) {
    console.error("recupererReponsesCommunaute:", error.message);
    return [];
  }

  const lignes = (data ?? []) as { id: string; auteur_id: string; contenu: string; created_at: string }[];
  const noms = await nomsDesAuteurs(
    supabase,
    lignes.map((l) => l.auteur_id),
  );

  return lignes.map((ligne) => ({
    id: ligne.id,
    auteurId: ligne.auteur_id,
    auteur: noms.get(ligne.auteur_id) ?? "Élève",
    contenu: ligne.contenu,
    createdAt: ligne.created_at,
  }));
}

export interface StatistiquesCommunaute {
  /** Nombre de publications par matière — alimente les "groupes par
   * matière" de la maquette, sans inventer de nombre de membres. */
  publicationsParMatiere: Record<string, number>;
  /** Élèves les plus actifs (nombre de publications), pour le
   * classement de la maquette — un classement réel, pas des profils
   * fictifs. */
  classement: { auteurId: string; auteur: string; publications: number }[];
  total: number;
}

export async function recupererStatistiquesCommunaute(limiteClassement: number): Promise<StatistiquesCommunaute> {
  const supabase = await creerClientServeur();

  const { data, error } = await supabase.from("communaute_messages").select("auteur_id, matiere");
  if (error) {
    console.error("recupererStatistiquesCommunaute:", error.message);
    return { publicationsParMatiere: {}, classement: [], total: 0 };
  }

  const lignes = (data ?? []) as { auteur_id: string; matiere: string | null }[];
  const publicationsParMatiere: Record<string, number> = {};
  const parAuteur = new Map<string, number>();

  for (const ligne of lignes) {
    if (ligne.matiere) publicationsParMatiere[ligne.matiere] = (publicationsParMatiere[ligne.matiere] ?? 0) + 1;
    parAuteur.set(ligne.auteur_id, (parAuteur.get(ligne.auteur_id) ?? 0) + 1);
  }

  const noms = await nomsDesAuteurs(supabase, [...parAuteur.keys()]);
  const classement = [...parAuteur.entries()]
    .map(([auteurId, publications]) => ({ auteurId, auteur: noms.get(auteurId) ?? "Élève", publications }))
    .sort((a, b) => b.publications - a.publications)
    .slice(0, limiteClassement);

  return { publicationsParMatiere, classement, total: lignes.length };
}
