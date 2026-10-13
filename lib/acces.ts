import { cache } from "react";

import { creerClientServeur } from "@/lib/supabase/server";

/**
 * L'accès payant (« quand il s'inscrit, c'est moi qui vais lui donner
 * l'accès quand il payera sur WhatsApp »).
 *
 * Un élève a accès à tout si une ligne de `acces_eleves` court encore
 * aujourd'hui (activée à la main sur /administration/acces), ou s'il est
 * admin. Sinon il n'a que l'aperçu gratuit (voir plus bas) : c'est le
 * choix de l'utilisateur parmi trois (« un aperçu gratuit » plutôt que
 * « tout fermé » ou « cours libres, outils payants »).
 *
 * Tant que la migration 20261102000000_acces_eleves.sql n'est pas
 * lancée, la table n'existe pas : le verrou est alors inactif et tout
 * reste ouvert comme avant, plutôt que de fermer le site à tout le monde
 * (y compris à l'admin) le temps de lancer le SQL.
 *
 * Le verrou est posé sur les pages. La lecture publique des tables de
 * contenu (RLS) n'a pas changé : les listes de leçons et de sujets
 * restent visibles, et l'API REST de Supabase donne toujours le texte à
 * qui sait l'interroger directement.
 */
export interface EtatAcces {
  /** `false` tant que la table n'existe pas : tout est ouvert. */
  verrouActif: boolean;
  connecte: boolean;
  email: string | null;
  admin: boolean;
  /** Accès complet (compte activé et pas expiré, ou admin, ou verrou
   * inactif). */
  complet: boolean;
  /** Date de fin (AAAA-MM-JJ) de l'accès, échu ou non ; `null` si le
   * compte n'a jamais été activé. */
  fin: string | null;
  formule: string | null;
}

function tableAbsente(erreur: { code?: string } | null): boolean {
  return erreur?.code === "PGRST205" || erreur?.code === "42P01";
}

/** Date du jour (AAAA-MM-JJ), heure du Maroc, pour comparer à `fin`. */
export function aujourdhui(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Casablanca" }).format(new Date());
}

/** État d'accès de la personne qui fait la requête. Mémorisé pour la
 * durée de la requête (une page en a souvent besoin plusieurs fois). */
export const lireAcces = cache(async (): Promise<EtatAcces> => {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Sans compte, on vérifie quand même que la table existe : c'est ce
  // qui dit si le verrou est actif. `limit(0)` : aucune ligne n'est lue.
  if (!user) {
    const { error } = await supabase.from("acces_eleves").select("user_id").limit(0);
    const verrouActif = !tableAbsente(error);
    return { verrouActif, connecte: false, email: null, admin: false, complet: !verrouActif, fin: null, formule: null };
  }

  const [{ data: profil }, { data: ligne, error }] = await Promise.all([
    supabase.from("profils").select("role").eq("id", user.id).maybeSingle(),
    supabase.from("acces_eleves").select("fin, formule").eq("user_id", user.id).maybeSingle(),
  ]);
  const verrouActif = !tableAbsente(error);
  const admin = profil?.role === "admin";
  const fin = (ligne?.fin as string | undefined) ?? null;
  const enCours = fin !== null && fin >= aujourdhui();
  return {
    verrouActif,
    connecte: true,
    email: user.email ?? null,
    admin,
    complet: !verrouActif || admin || enCours,
    fin,
    formule: (ligne?.formule as string | undefined) ?? null,
  };
});

// ——— Aperçu gratuit ———
// « Le visiteur peut ouvrir la première leçon de chaque matière et un
// sujet régional ; tout le reste est réservé. » Concrètement : la
// première leçon (ordre du programme) de chaque catégorie de `cours`, le
// premier chapitre de chaque œuvre, et le sujet le plus récent de chaque
// matière (le premier de sa liste). Calculé à chaque fois plutôt que
// marqué en base : l'aperçu suit le contenu quand il change.

/** La leçon gratuite d'une catégorie de `cours`. */
export const leconGratuite = cache(async (categorie: string, filiere: string): Promise<{ slug: string; titre: string } | null> => {
  const supabase = await creerClientServeur();
  const { data } = await supabase
    .from("cours")
    .select("slug, titre")
    .eq("categorie", categorie)
    .eq("filiere", filiere)
    .order("ordre")
    .limit(1)
    .maybeSingle();
  return data ? { slug: data.slug as string, titre: data.titre as string } : null;
});

/** Le chapitre gratuit d'une œuvre (son premier). */
export const chapitreGratuit = cache(async (oeuvreId: string): Promise<{ numero: number; titre: string } | null> => {
  const supabase = await creerClientServeur();
  const { data } = await supabase
    .from("chapitres")
    .select("numero, titre_fr")
    .eq("oeuvre_id", oeuvreId)
    .order("numero")
    .limit(1)
    .maybeSingle();
  return data ? { numero: data.numero as number, titre: data.titre_fr as string } : null;
});

/** Le sujet régional gratuit d'une matière : le premier de sa liste
 * sur /examens-regionaux/[matiere] (le plus récent). */
export const annaleGratuite = cache(async (matiere: string): Promise<{ id: string; titre: string } | null> => {
  const supabase = await creerClientServeur();
  const { data, error } = await supabase
    .from("annales")
    .select("id, annee, session, academie")
    .eq("matiere", matiere)
    .order("annee", { ascending: false })
    .order("session")
    .order("academie")
    .limit(1)
    .maybeSingle();
  if (error || !data) return null;
  const titre = [`Régional ${data.annee}`, data.academie, data.session === "rattrapage" ? "rattrapage" : null]
    .filter(Boolean)
    .join(" · ");
  return { id: data.id as string, titre };
});
