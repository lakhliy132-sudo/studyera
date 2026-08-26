/**
 * Lecture de la progression de lecture (table `progression`).
 *
 * Toutes les fonctions ici prennent `userId` en paramètre plutôt que
 * d'appeler `supabase.auth.getUser()` elles-mêmes : `getUser()` revalide
 * le jeton auprès du serveur Supabase à chaque appel (voir le
 * commentaire dans middleware.ts), donc coûte une requête réseau
 * supplémentaire. Les pages qui utilisent ces fonctions récupèrent déjà
 * l'utilisateur une seule fois pour leurs propres besoins (afficher
 * l'email, etc.) : autant réutiliser ce résultat plutôt que de le
 * redemander à chaque fonction.
 *
 * `userId === null` (visiteur non connecté) est un cas normal, pas une
 * erreur : la progression est une donnée par élève, un visiteur anonyme
 * n'en a simplement pas. Toutes les fonctions renvoient alors un
 * résultat "vide" sans effectuer de requête.
 */

import { creerClientServeur } from "@/lib/supabase/server";

/** Ensemble des chapitres marqués "lu", parmi une liste de chapitres
 * donnée (typiquement tous les chapitres d'une œuvre). */
export async function recupererProgressionOeuvre(
  userId: string | null,
  chapitreIds: string[],
): Promise<Set<string>> {
  if (!userId || chapitreIds.length === 0) return new Set();

  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("progression")
    .select("chapitre_id")
    .eq("user_id", userId)
    .eq("lu", true)
    .in("chapitre_id", chapitreIds);

  if (error) throw error;
  return new Set((data ?? []).map((ligne) => ligne.chapitre_id as string));
}

/** État de lecture d'un chapitre précis. `false` si personne n'est
 * connecté ou si aucune ligne n'existe encore pour ce chapitre (les
 * deux cas se traitent pareil côté affichage : bouton "Marquer comme
 * lu" non coché). */
export async function recupererProgressionChapitre(
  userId: string | null,
  chapitreId: string,
): Promise<boolean> {
  if (!userId) return false;

  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("progression")
    .select("lu")
    .eq("user_id", userId)
    .eq("chapitre_id", chapitreId)
    .maybeSingle();

  if (error) throw error;
  return data?.lu ?? false;
}
