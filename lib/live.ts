import { creerClientService } from "@/lib/supabase/service";

/**
 * Le live de /live, diffusé par Daily (« un bouton Démarrer le live dans
 * le site » ; Daily choisi pour ses 10 000 minutes gratuites par mois).
 *
 * - La clé se met dans `.env.local` (et sur Vercel) sous `DAILY_API_KEY`,
 *   sans préfixe `NEXT_PUBLIC_` : elle ne quitte jamais le serveur. Sans
 *   elle, la page le dit à l'admin et reste sur « Bientôt disponible »
 *   pour les élèves.
 * - Chaque live a sa salle, **privée** : on n'y entre qu'avec un jeton,
 *   créé ici pour l'admin (propriétaire) ou pour un élève dont l'accès
 *   est complet. Copier l'adresse de la salle ne suffit donc pas.
 * - `owner_only_broadcast` : seul le propriétaire (l'admin) envoie image
 *   et son ; les élèves regardent et écrivent dans le chat.
 * - Terminer le live supprime la salle : les jetons déjà donnés ne
 *   servent plus à rien.
 */

const API = "https://api.daily.co/v1";
/** Durée de vie d'une salle et d'un jeton : un live ne dépasse pas ça. */
const DUREE_MAX_S = 5 * 3600;

export interface LiveEnCours {
  id: string;
  titre: string;
  salleNom: string;
  salleUrl: string;
  debut: string;
}

export function liveConfigure(): boolean {
  return Boolean(process.env.DAILY_API_KEY);
}

async function daily<T>(chemin: string, methode: "GET" | "POST" | "DELETE", corps?: unknown): Promise<T> {
  const cle = process.env.DAILY_API_KEY;
  if (!cle) throw new Error("DAILY_API_KEY absente.");
  const reponse = await fetch(`${API}${chemin}`, {
    method: methode,
    headers: { Authorization: `Bearer ${cle}`, "Content-Type": "application/json" },
    body: corps === undefined ? undefined : JSON.stringify(corps),
    cache: "no-store",
  });
  if (!reponse.ok && !(methode === "DELETE" && reponse.status === 404)) {
    const detail = await reponse.text().catch(() => "");
    throw new Error(`Daily a refusé la demande (${reponse.status}). ${detail.slice(0, 200)}`);
  }
  return (await reponse.json().catch(() => ({}))) as T;
}

function tableAbsente(erreur: { code?: string } | null): boolean {
  return erreur?.code === "PGRST205" || erreur?.code === "42P01";
}

/** Le live en cours, ou `null` (aucun live, ou table pas encore créée). */
export async function lireLiveEnCours(): Promise<LiveEnCours | null> {
  const service = creerClientService();
  const { data, error } = await service
    .from("lives")
    .select("id, titre, salle_nom, salle_url, debut")
    .is("fin", null)
    .order("debut", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (tableAbsente(error)) return null;
  if (error) throw error;
  return data ? { id: data.id, titre: data.titre, salleNom: data.salle_nom, salleUrl: data.salle_url, debut: data.debut } : null;
}

/** La table `lives` existe-t-elle ? (migration 20261104000000_lives.sql) */
export async function tableLivesPrete(): Promise<boolean> {
  const { error } = await creerClientService().from("lives").select("id").limit(0);
  return !tableAbsente(error);
}

export async function creerSalle(): Promise<{ name: string; url: string }> {
  const fin = Math.floor(Date.now() / 1000) + DUREE_MAX_S;
  return daily<{ name: string; url: string }>("/rooms", "POST", {
    privacy: "private",
    properties: { exp: fin, enable_chat: true, owner_only_broadcast: true, lang: "fr" },
  });
}

export async function supprimerSalle(nom: string): Promise<void> {
  await daily(`/rooms/${encodeURIComponent(nom)}`, "DELETE");
}

/** Jeton d'entrée dans la salle : propriétaire pour l'admin (il diffuse),
 * spectateur pour l'élève (caméra et micro coupés au départ). */
export async function jetonSalle(salleNom: string, options: { proprietaire: boolean; nom: string }): Promise<string> {
  const { token } = await daily<{ token: string }>("/meeting-tokens", "POST", {
    properties: {
      room_name: salleNom,
      is_owner: options.proprietaire,
      user_name: options.nom.slice(0, 60),
      exp: Math.floor(Date.now() / 1000) + DUREE_MAX_S,
      start_video_off: !options.proprietaire,
      start_audio_off: !options.proprietaire,
    },
  });
  return token;
}
