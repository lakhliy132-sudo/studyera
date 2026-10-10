import { compterQuestions, lireEpreuve } from "@/lib/annales-questions";
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
  academie: string | null;
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
  academie: string | null;
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
    .select("id, matiere, annee, session, oeuvre, academie, duree_minutes, corrige_mdx, questions")
    .eq("matiere", matiere)
    .order("annee", { ascending: false })
    .order("session")
    .order("academie");

  if (tableAbsente(error)) return [];
  if (error) throw error;

  return (data ?? []).map((ligne) => ({
    id: ligne.id,
    matiere: ligne.matiere,
    annee: ligne.annee,
    session: ligne.session,
    oeuvre: ligne.oeuvre,
    academie: ligne.academie,
    duree_minutes: ligne.duree_minutes,
    aCorrige: Boolean(ligne.corrige_mdx),
    aEntrainement: lireEpreuve(ligne.questions) !== null,
  }));
}

/** Ce que les cartes de /examens-regionaux affichent d'une matière :
 * son nombre de sujets et les années couvertes, comptés en base. */
export interface ResumeAnnalesMatiere {
  nombre: number;
  /** Années distinctes, de la plus ancienne à la plus récente. */
  annees: number[];
}

/** Nombre de sujets et années par matière, en une seule requête plutôt
 * qu'une par matière. Une matière sans sujet n'a pas d'entrée. */
export async function resumerAnnalesParMatiere(): Promise<
  Record<string, ResumeAnnalesMatiere>
> {
  const supabase = await creerClientServeur();
  const { data, error } = await supabase.from("annales").select("matiere, annee");
  if (tableAbsente(error)) return {};
  if (error) throw error;

  const resumes: Record<string, ResumeAnnalesMatiere> = {};
  for (const ligne of data ?? []) {
    const r = (resumes[ligne.matiere] ??= { nombre: 0, annees: [] });
    r.nombre += 1;
    if (!r.annees.includes(ligne.annee)) r.annees.push(ligne.annee);
  }
  for (const r of Object.values(resumes)) r.annees.sort((x, y) => x - y);
  return resumes;
}

/** Une vraie question d'un vrai sujet, pour l'aperçu « Comment ça
 * marche » de /examens-regionaux : la maquette y montrait une question
 * inventée, on prend à la place la troisième question (la première si
 * le sujet en a moins) du sujet le plus récent qui a un mode
 * entraînement. */
export interface ApercuEntrainement {
  id: string;
  annee: number;
  session: "normale" | "rattrapage";
  academie: string | null;
  duree_minutes: number | null;
  numero: string;
  enonce: string;
  /** Rang de la question dans l'épreuve (à partir de 1) et nombre total
   * de questions, pour la barre d'avancement. */
  rang: number;
  total: number;
}

export async function recupererApercuEntrainement(
  matiere: string,
): Promise<ApercuEntrainement | null> {
  const supabase = await creerClientServeur();
  const { data, error } = await supabase
    .from("annales")
    .select("id, annee, session, academie, duree_minutes, questions")
    .eq("matiere", matiere)
    .order("annee", { ascending: false })
    .order("session")
    .order("academie")
    .limit(5);

  if (tableAbsente(error)) return null;
  if (error) throw error;

  for (const ligne of data ?? []) {
    const epreuve = lireEpreuve(ligne.questions);
    const questions = epreuve?.parties.find((p) => p.questions.length > 0)?.questions;
    if (!epreuve || !questions) continue;
    const index = questions.length >= 3 ? 2 : 0;
    return {
      id: ligne.id,
      annee: ligne.annee,
      session: ligne.session,
      academie: ligne.academie,
      duree_minutes: ligne.duree_minutes,
      numero: questions[index].numero,
      enonce: questions[index].enonce,
      rang: index + 1,
      total: compterQuestions(epreuve),
    };
  }
  return null;
}

export async function recupererAnnaleParId(
  id: string,
): Promise<Annale | null> {
  const supabase = await creerClientServeur();
  const { data, error } = await supabase
    .from("annales")
    .select(
      "id, matiere, annee, session, oeuvre, academie, duree_minutes, enonce_mdx, corrige_mdx, filiere_libelle, coefficient, questions",
    )
    .eq("id", id)
    .maybeSingle<Annale>();

  if (tableAbsente(error)) return null;
  if (error) throw error;
  return data;
}
