import { lireEpreuve } from "@/lib/annales-questions";
import { creerClientServeur } from "@/lib/supabase/server";

/** La table est créée par supabase/migrations/20261003000000_annales.sql,
 * que l'on applique à la main dans l'éditeur SQL de Supabase. Tant que
 * ce n'est pas fait, PostgREST répond "table inconnue" : on traite ce
 * cas comme une absence de sujets, pour que les pages affichent
 * "Bientôt disponible" au lieu d'une erreur 500. Toute autre erreur
 * remonte normalement. */
function tableAbsente(erreur: { code?: string } | null): boolean {
  return erreur?.code === "PGRST205" || erreur?.code === "42P01";
}

export interface Annale {
  id: string;
  matiere: string;
  annee: number;
  session: "normale" | "rattrapage";
  oeuvre: string | null;
  duree_minutes: number | null;
  enonce_mdx: string;
  corrige_mdx: string | null;
  filiere_libelle: string | null;
  coefficient: number | null;
  /** Les parties et questions de l'épreuve, relues par `lireEpreuve`
   * (lib/annales-questions.ts) — `null` pour un sujet dont on n'a que
   * l'énoncé brut. */
  questions: unknown;
}

/** Les champs listés dans la grille, sans les textes : un énoncé fait
 * plusieurs milliers de caractères, inutile de les transporter tous
 * pour afficher des cartes. `aCorrige` dit seulement s'il y en a un. */
export interface AnnaleResumee {
  id: string;
  matiere: string;
  annee: number;
  session: "normale" | "rattrapage";
  oeuvre: string | null;
  duree_minutes: number | null;
  aCorrige: boolean;
  /** Vrai si le sujet est découpé en questions (colonne `questions`
   * lisible) : c'est ce qui ouvre le mode entraînement. Un sujet dont on
   * n'a que l'énoncé brut s'affiche, mais sans entraînement. */
  aEntrainement: boolean;
}

/** Les sujets d'une matière, les plus récents d'abord. */
export async function recupererAnnalesParMatiere(
  matiere: string,
): Promise<AnnaleResumee[]> {
  const supabase = await creerClientServeur();
  const { data, error } = await supabase
    .from("annales")
    .select("id, matiere, annee, session, oeuvre, duree_minutes, corrige_mdx, questions")
    .eq("matiere", matiere)
    .order("annee", { ascending: false })
    .order("session");

  if (tableAbsente(error)) return [];
  if (error) throw error;

  return (data ?? []).map((ligne) => ({
    id: ligne.id,
    matiere: ligne.matiere,
    annee: ligne.annee,
    session: ligne.session,
    oeuvre: ligne.oeuvre,
    duree_minutes: ligne.duree_minutes,
    aCorrige: Boolean(ligne.corrige_mdx),
    aEntrainement: lireEpreuve(ligne.questions) !== null,
  }));
}

/** Nombre de sujets par matière, pour les cartes de /examens-regionaux.
 * Une seule requête plutôt qu'une par matière. */
export async function compterAnnalesParMatiere(): Promise<
  Record<string, number>
> {
  const supabase = await creerClientServeur();
  const { data, error } = await supabase.from("annales").select("matiere");
  if (tableAbsente(error)) return {};
  if (error) throw error;

  const comptes: Record<string, number> = {};
  for (const ligne of data ?? []) {
    comptes[ligne.matiere] = (comptes[ligne.matiere] ?? 0) + 1;
  }
  return comptes;
}

export async function recupererAnnaleParId(
  id: string,
): Promise<Annale | null> {
  const supabase = await creerClientServeur();
  const { data, error } = await supabase
    .from("annales")
    .select(
      "id, matiere, annee, session, oeuvre, duree_minutes, enonce_mdx, corrige_mdx, filiere_libelle, coefficient, questions",
    )
    .eq("id", id)
    .maybeSingle<Annale>();

  if (tableAbsente(error)) return null;
  if (error) throw error;
  return data;
}
