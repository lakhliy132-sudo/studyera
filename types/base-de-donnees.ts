/**
 * Types correspondant au schéma Supabase.
 *
 * Écrits à la main pour l'instant, en miroir de
 * supabase/migrations/20260825120000_creation_profils.sql. Une fois la
 * CLI Supabase installée et liée au projet, ce fichier pourra être
 * régénéré automatiquement (et gardé à jour à chaque migration) avec :
 *
 *   npx supabase gen types typescript --project-id <reference-du-projet> \
 *     > types/base-de-donnees.ts
 */

export type RoleUtilisateur = "eleve" | "admin";

export interface Profil {
  id: string;
  email: string;
  nom_complet: string | null;
  role: RoleUtilisateur;
  date_creation: string;
}
