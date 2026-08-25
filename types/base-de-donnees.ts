/**
 * Types correspondant au schéma Supabase.
 *
 * Écrits à la main pour l'instant, en miroir des migrations dans
 * supabase/migrations/. Une fois la CLI Supabase installée et liée au
 * projet, ce fichier pourra être régénéré automatiquement (et gardé à
 * jour à chaque migration) avec :
 *
 *   npx supabase gen types typescript --project-id <reference-du-projet> \
 *     > types/base-de-donnees.ts
 */

export type RoleUtilisateur = "eleve" | "admin";
export type ModeOeuvre = "texte_integral" | "accompagnement";

export interface Profil {
  id: string;
  email: string;
  nom_complet: string | null;
  role: RoleUtilisateur;
  date_creation: string;
}

// --- Contenu (lecture publique, écriture admin) ---

export interface Oeuvre {
  id: string;
  slug: string;
  titre_fr: string;
  titre_ar: string | null;
  auteur: string | null;
  filiere: string | null;
  mode: ModeOeuvre;
  created_at: string;
}

export interface Chapitre {
  id: string;
  oeuvre_id: string;
  numero: number;
  titre_fr: string;
  titre_ar: string | null;
  resume_court: string | null;
  created_at: string;
}

export interface Paragraphe {
  id: string;
  chapitre_id: string;
  ordre: number;
  texte_fr: string;
  texte_ar: string | null;
  created_at: string;
}

export interface Fiche {
  id: string;
  chapitre_id: string;
  resume_fr: string | null;
  resume_ar: string | null;
  personnages: unknown[];
  themes: unknown[];
  points_cles: unknown[];
  created_at: string;
}

export interface EntreeLexique {
  id: string;
  chapitre_id: string;
  mot: string;
  sens_ar: string | null;
  nature: string | null;
  note: string | null;
  created_at: string;
}

export interface Cours {
  id: string;
  slug: string;
  titre: string;
  categorie: string | null;
  contenu_mdx: string | null;
  filiere: string | null;
  ordre: number;
  created_at: string;
}

export interface Sujet {
  id: string;
  oeuvre_id: string | null;
  titre: string;
  consigne: string | null;
  type: string | null;
  created_at: string;
}

// --- Données élève (chacun ne voit/n'écrit que les siennes) ---

export interface Copie {
  id: string;
  user_id: string;
  sujet_id: string;
  image_url: string | null;
  transcription: string | null;
  note_forme: number | null;
  note_fond: number | null;
  note_total: number | null;
  erreurs: unknown[];
  points_forts: unknown[];
  axes: unknown[];
  commentaire: string | null;
  cout_tokens: number | null;
  created_at: string;
}

export interface Progression {
  user_id: string;
  chapitre_id: string;
  lu: boolean;
  termine_le: string | null;
}

export interface Activite {
  id: string;
  user_id: string;
  type: string;
  ressource_id: string | null;
  ressource_titre: string | null;
  created_at: string;
}

export interface QuotaJour {
  user_id: string;
  date: string;
  corrections_utilisees: number;
}
