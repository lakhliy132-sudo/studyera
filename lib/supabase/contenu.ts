/**
 * Fonctions de lecture du contenu pédagogique (oeuvres, chapitres, ...)
 * pour les Server Components des pages publiques. Centralisées ici
 * plutôt que dispersées dans chaque page, pour être réutilisées entre
 * /oeuvres, /oeuvres/[slug] et /oeuvres/[slug]/[numero].
 */

import { creerClientServeur } from "@/lib/supabase/server";
import type {
  Chapitre,
  EntreeLexique,
  Fiche,
  Oeuvre,
  Paragraphe,
} from "@/types/base-de-donnees";

export interface OeuvreAvecNombreChapitres extends Oeuvre {
  nombreChapitres: number;
}

/**
 * Oeuvres d'une filière donnée, triées par titre, avec leur nombre de
 * chapitres. Ce nombre n'est pas stocké en base (voir le commentaire
 * dans la migration de création d'`oeuvres`) : on le calcule ici à
 * partir de la table `chapitres`, pour ne jamais se désynchroniser du
 * contenu réel au fil des imports.
 */
export async function recupererOeuvresParFiliere(
  filiere: string,
): Promise<OeuvreAvecNombreChapitres[]> {
  const supabase = await creerClientServeur();

  const { data: oeuvres, error } = await supabase
    .from("oeuvres")
    .select("*")
    .eq("filiere", filiere)
    .order("titre_fr");

  if (error) throw error;
  if (!oeuvres || oeuvres.length === 0) return [];

  const { data: chapitresRows, error: erreurChapitres } = await supabase
    .from("chapitres")
    .select("oeuvre_id")
    .in(
      "oeuvre_id",
      oeuvres.map((o) => o.id),
    );

  if (erreurChapitres) throw erreurChapitres;

  const nombreParOeuvre = new Map<string, number>();
  for (const ligne of chapitresRows ?? []) {
    nombreParOeuvre.set(
      ligne.oeuvre_id,
      (nombreParOeuvre.get(ligne.oeuvre_id) ?? 0) + 1,
    );
  }

  return (oeuvres as Oeuvre[]).map((oeuvre) => ({
    ...oeuvre,
    nombreChapitres: nombreParOeuvre.get(oeuvre.id) ?? 0,
  }));
}

export async function recupererOeuvreParSlug(
  slug: string,
): Promise<Oeuvre | null> {
  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("oeuvres")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return data as Oeuvre | null;
}

/** Chapitres d'une œuvre, triés par numéro. */
export async function recupererChapitresOeuvre(
  oeuvreId: string,
): Promise<Chapitre[]> {
  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("chapitres")
    .select("*")
    .eq("oeuvre_id", oeuvreId)
    .order("numero");

  if (error) throw error;
  return (data as Chapitre[]) ?? [];
}

/** Un chapitre précis d'une œuvre, identifié par son numéro. */
export async function recupererChapitreParNumero(
  oeuvreId: string,
  numero: number,
): Promise<Chapitre | null> {
  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("chapitres")
    .select("*")
    .eq("oeuvre_id", oeuvreId)
    .eq("numero", numero)
    .maybeSingle();

  if (error) throw error;
  return data as Chapitre | null;
}

/**
 * Fiche de synthèse d'un chapitre (résumé, thèmes, points clés).
 * `null` tant qu'aucune fiche n'a été saisie/importée pour ce chapitre
 * (la contrainte unique sur `chapitre_id` garantit qu'il y en a au plus
 * une, jamais plusieurs).
 */
export async function recupererFicheChapitre(
  chapitreId: string,
): Promise<Fiche | null> {
  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("fiches")
    .select("*")
    .eq("chapitre_id", chapitreId)
    .maybeSingle();

  if (error) throw error;
  return data as Fiche | null;
}

/**
 * Texte intégral d'un chapitre, ordonné par paragraphe. Tableau vide
 * tant que cette table n'est pas encore alimentée pour ce chapitre (voir
 * le commentaire dans scripts/importer.ts : le fichier Excel actuel n'a
 * pas de feuille "Paragraphes").
 */
export async function recupererParagraphesChapitre(
  chapitreId: string,
): Promise<Paragraphe[]> {
  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("paragraphes")
    .select("*")
    .eq("chapitre_id", chapitreId)
    .order("ordre");

  if (error) throw error;
  return (data as Paragraphe[]) ?? [];
}

/** Mots de lexique expliqués pour un chapitre, triés alphabétiquement. */
export async function recupererLexiqueChapitre(
  chapitreId: string,
): Promise<EntreeLexique[]> {
  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("lexique")
    .select("*")
    .eq("chapitre_id", chapitreId)
    .order("mot");

  if (error) throw error;
  return (data as EntreeLexique[]) ?? [];
}
