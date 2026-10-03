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
}

/** Les sujets d'une matière, les plus récents d'abord. */
export async function recupererAnnalesParMatiere(
  matiere: string,
): Promise<AnnaleResumee[]> {
  const supabase = await creerClientServeur();
  const { data, error } = await supabase
    .from("annales")
    .select("id, matiere, annee, session, oeuvre, duree_minutes, corrige_mdx")
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
      "id, matiere, annee, session, oeuvre, duree_minutes, enonce_mdx, corrige_mdx",
    )
    .eq("id", id)
    .maybeSingle<Annale>();

  if (tableAbsente(error)) return null;
  if (error) throw error;
  return data;
}
