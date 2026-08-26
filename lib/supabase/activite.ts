/**
 * Écriture dans le journal d'activité (table `activite`), depuis un
 * contexte serveur (Server Component), à chaque consultation d'une
 * ressource pédagogique.
 */

import { creerClientServeur } from "@/lib/supabase/server";

const FENETRE_DEDUPLICATION_MS = 60_000;

interface ParametresActivite {
  type: string;
  ressourceId: string;
  ressourceTitre: string;
}

/**
 * Enregistre une entrée d'activité pour l'utilisateur connecté, sauf :
 *
 * - si personne n'est connecté (`userId` null) : rien à enregistrer,
 *   `activite.user_id` est `not null` et référence `auth.users` — un
 *   visiteur anonyme n'a pas de ligne possible dans cette table, et la
 *   policy RLS "un eleve enregistre sa propre activite" refuserait de
 *   toute façon l'insertion.
 * - si la dernière entrée du même type sur la même ressource, pour ce
 *   même élève, date de moins d'une minute : évite de remplir le
 *   journal à chaque rechargement de la page pendant que l'élève lit.
 *
 * Volontairement non bloquante : une erreur ici (lecture ou écriture)
 * est journalisée sur le serveur mais n'interrompt jamais le rendu de
 * la page. Rater une entrée d'activité est sans conséquence pour
 * l'élève ; lui afficher une erreur à cause du journal d'activité
 * serait pire que de la perdre.
 */
export async function enregistrerActivite(
  userId: string | null,
  { type, ressourceId, ressourceTitre }: ParametresActivite,
): Promise<void> {
  if (!userId) return;

  const supabase = await creerClientServeur();

  const { data: derniere, error: erreurLecture } = await supabase
    .from("activite")
    .select("created_at")
    .eq("user_id", userId)
    .eq("type", type)
    .eq("ressource_id", ressourceId)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (erreurLecture) {
    console.error("[activite] lecture impossible :", erreurLecture.message);
    return;
  }

  if (derniere) {
    const ecouleMs = Date.now() - new Date(derniere.created_at).getTime();
    if (ecouleMs < FENETRE_DEDUPLICATION_MS) return;
  }

  const { error: erreurEcriture } = await supabase.from("activite").insert({
    user_id: userId,
    type,
    ressource_id: ressourceId,
    ressource_titre: ressourceTitre,
  });

  if (erreurEcriture) {
    console.error("[activite] écriture impossible :", erreurEcriture.message);
  }
}
