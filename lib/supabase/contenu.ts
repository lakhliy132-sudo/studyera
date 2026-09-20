/**
 * Fonctions de lecture du contenu pédagogique (oeuvres, chapitres, ...)
 * pour les Server Components des pages publiques. Centralisées ici
 * plutôt que dispersées dans chaque page, pour être réutilisées entre
 * /oeuvres, /oeuvres/[slug] et /oeuvres/[slug]/[numero].
 */

import { creerClientServeur } from "@/lib/supabase/server";
import type {
  Chapitre,
  Cours,
  EntreeLexique,
  Fiche,
  Oeuvre,
  Paragraphe,
  Personnage,
  Sujet,
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

/** ⚠️ Plus appelée depuis aucune page : servait à l'onglet "Thèmes et
 * enjeux" de /oeuvres/[slug], retiré à la demande explicite de
 * l'utilisateur (voir OngletThemes.tsx). Gardée, pas supprimée, au cas
 * où réutilisée plus tard.
 *
 * Toutes les fiches (résumé, thèmes, points clés) des chapitres d'une
 * œuvre — agrège les thèmes de chaque fiche plutôt que d'avoir sa
 * propre table. Même limite que `recupererLexiqueOeuvre` : pas de
 * colonne `oeuvre_id` directe sur `fiches`, on passe par la liste des
 * chapitres déjà récupérée par la page appelante. */
export async function recupererFichesOeuvre(chapitreIds: string[]): Promise<Fiche[]> {
  if (chapitreIds.length === 0) return [];

  const supabase = await creerClientServeur();

  const { data, error } = await supabase.from("fiches").select("*").in("chapitre_id", chapitreIds);

  if (error) throw error;
  return (data as Fiche[]) ?? [];
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

/** Tous les mots de lexique de l'œuvre, tous chapitres confondus, triés
 * alphabétiquement (onglet Lexique de /oeuvres/[slug]). `lexique` n'a
 * pas de colonne `oeuvre_id` directe (seulement `chapitre_id`) : on
 * passe donc par la liste des chapitres de l'œuvre, déjà récupérée par
 * la page appelante. Un tableau vide de `chapitreIds` renvoie
 * directement `[]` sans requête — évite un `.in("chapitre_id", [])`
 * qui, selon la version de PostgREST, peut se comporter différemment
 * d'un filtre "aucune ligne". */
export async function recupererLexiqueOeuvre(chapitreIds: string[]): Promise<EntreeLexique[]> {
  if (chapitreIds.length === 0) return [];

  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("lexique")
    .select("*")
    .in("chapitre_id", chapitreIds)
    .order("mot");

  if (error) throw error;
  return (data as EntreeLexique[]) ?? [];
}

/** Tous les personnages d'une œuvre, quel que soit leur chapitre
 * d'apparition — utilisée à la fois par l'onglet Personnages de
 * /oeuvres/[slug] (fiche complète du roman) et par celui de
 * /oeuvres/[slug]/[numero] (même liste complète sur chaque chapitre,
 * demandé explicitement par l'utilisateur plutôt qu'un filtrage par
 * première apparition qui laissait la plupart des chapitres vides).
 * Triés par nom : pas de distinction principal/secondaire en base pour
 * l'instant (aucune colonne dédiée), voir ETAT.md. */
export async function recupererPersonnagesOeuvre(oeuvreId: string): Promise<Personnage[]> {
  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("personnages")
    .select("*")
    .eq("oeuvre_id", oeuvreId)
    .order("nom");

  if (error) throw error;
  return (data as Personnage[]) ?? [];
}

/** Sujets d'exercice rattachés à un chapitre précis (onglet "Sujets
 * liés" de /oeuvres/[slug]/[numero], session design). */
export async function recupererSujetsChapitre(chapitreId: string): Promise<Sujet[]> {
  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("sujets")
    .select("*")
    .eq("chapitre_id", chapitreId)
    .order("titre");

  if (error) throw error;
  return (data as Sujet[]) ?? [];
}

/** Tous les sujets d'exercice rattachés à une œuvre entière (onglet
 * "Sujets d'analyse" de /oeuvres/[slug]), quel que soit leur chapitre.
 * `sujets.oeuvre_id` est renseigné par le script d'import pour les
 * sujets liés à une œuvre précise (voir scripts/importer.ts). */
export async function recupererSujetsOeuvre(oeuvreId: string): Promise<Sujet[]> {
  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("sujets")
    .select("*")
    .eq("oeuvre_id", oeuvreId)
    .order("titre");

  if (error) throw error;
  return (data as Sujet[]) ?? [];
}

/** Cours d'une catégorie (ex. "langue") et d'une filière, triés par
 * `ordre` — page /langue, qui liste les fiches de cours autonomes (pas
 * rattachées à une œuvre) de cette catégorie. Même filtrage par
 * filière que `recupererOeuvresParFiliere` (voir lib/filiere.ts). */
export async function recupererCoursParCategorie(
  categorie: string,
  filiere: string,
): Promise<Cours[]> {
  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("cours")
    .select("*")
    .eq("categorie", categorie)
    .eq("filiere", filiere)
    .order("ordre");

  if (error) throw error;
  return (data as Cours[]) ?? [];
}

/** Un cours précis, identifié par son slug — page /langue/[slug]. */
export async function recupererCoursParSlug(slug: string): Promise<Cours | null> {
  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("cours")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return data as Cours | null;
}

/** Cours dont le titre contient `terme`, toutes catégories confondues,
 * pour une filière donnée — page /recherche, alimentée par le champ de
 * recherche de la barre de navigation (qui n'était jusque-là qu'un
 * décor). `ilike` : insensible à la casse et aux accents absents du
 * terme saisi n'est pas géré par Postgres ici, mais les titres du site
 * sont en français accentué ou en arabe, et la recherche porte sur ce
 * que la personne voit à l'écran. Limité à 40 résultats, largement au
 *-dessus du nombre de cours par matière aujourd'hui. */
export async function rechercherCours(terme: string, filiere: string): Promise<Cours[]> {
  const recherche = terme.trim();
  if (recherche.length < 2) return [];

  const supabase = await creerClientServeur();

  const { data, error } = await supabase
    .from("cours")
    .select("*")
    .eq("filiere", filiere)
    .ilike("titre", `%${recherche}%`)
    .order("categorie")
    .order("ordre")
    .limit(40);

  if (error) throw error;
  return (data as Cours[]) ?? [];
}

/** Nombre de cours disponibles pour une filière, toutes matières
 * confondues — tuile "cours disponibles" de l'accueil. `head: true` :
 * seul le compte est demandé, aucune ligne n'est transférée. */
export async function compterCours(filiere: string): Promise<number> {
  const supabase = await creerClientServeur();

  const { count, error } = await supabase
    .from("cours")
    .select("*", { count: "exact", head: true })
    .eq("filiere", filiere);

  if (error) throw error;
  return count ?? 0;
}
