import { creerClientServeur } from "@/lib/supabase/server";

import type { CategorieEvenement } from "@/lib/categoriesEvenement";

// Catégories et couleurs : lib/categoriesEvenement.ts, sans dépendance
// serveur, pour servir aussi au planning client du calendrier.
export { CATEGORIES_EVENEMENT, couleurCategorie, libelleCategorie, type CategorieEvenement } from "@/lib/categoriesEvenement";

export interface EvenementEleve {
  id: string;
  titre: string;
  /** Jour de l'événement au format `AAAA-MM-JJ`, tel qu'en base : pas
   * un `Date`, pour éviter tout décalage de fuseau entre le serveur et
   * le navigateur sur une date sans heure. */
  date: string;
  categorie: CategorieEvenement;
  note: string | null;
}

/**
 * Les événements personnels de l'élève connecté, du plus proche au
 * plus lointain — demandés par l'utilisateur pour la page
 * /calendrier ("ou l eleve peut ajouter les enevement principaux de
 * lui").
 *
 * Lecture serveur uniquement (ce fichier importe `next/headers` via
 * `creerClientServeur`) ; l'ajout et la suppression se font depuis le
 * composant client `EvenementsEleve.tsx`.
 *
 * Renvoie une liste vide pour un visiteur non connecté, et journalise
 * sans planter si la table n'existe pas encore : la page calendrier
 * est publique et doit rester consultable dans tous les cas.
 */
export async function recupererEvenementsEleve(): Promise<EvenementEleve[]> {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from("evenements_eleve")
    .select("id, titre, date, categorie, note")
    .eq("eleve_id", user.id)
    .order("date");

  if (error) {
    console.error("recupererEvenementsEleve:", error.message);
    return [];
  }

  return (data ?? []) as EvenementEleve[];
}
