import { creerClientServeur } from "@/lib/supabase/server";

/** Catégories d'événement proposées à l'élève. Le `cle` doit rester
 * aligné sur la contrainte CHECK de la table (migration
 * 20260929000000_evenements_eleve.sql). */
export const CATEGORIES_EVENEMENT = [
  { cle: "controle", libelle: "Contrôle", couleur: "var(--color-erreur)" },
  { cle: "devoir", libelle: "Devoir", couleur: "var(--color-matiere-francais)" },
  { cle: "revision", libelle: "Révision", couleur: "var(--color-matiere-arabe)" },
  { cle: "rappel", libelle: "Rappel", couleur: "var(--color-matiere-histoire-geo)" },
  { cle: "autre", libelle: "Autre", couleur: "var(--color-matiere-islamique)" },
] as const;

export type CategorieEvenement = (typeof CATEGORIES_EVENEMENT)[number]["cle"];

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

export function couleurCategorie(categorie: string): string {
  return CATEGORIES_EVENEMENT.find((c) => c.cle === categorie)?.couleur ?? "var(--color-primary)";
}

export function libelleCategorie(categorie: string): string {
  return CATEGORIES_EVENEMENT.find((c) => c.cle === categorie)?.libelle ?? "Autre";
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
