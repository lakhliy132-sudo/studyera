/**
 * Fonctions de lecture/agrégation spécifiques à /tableau-de-bord (et à
 * /activite, "Tout voir" du bloc Dernières activités). Distinctes de
 * lib/supabase/progression.ts et activite.ts (lecture/écriture brutes
 * d'une seule table) : ici, on assemble plusieurs tables pour produire
 * directement ce que les composants du tableau de bord ont besoin
 * d'afficher (chiffres, liens résolus...).
 *
 * Toutes les fonctions prennent `userId` en paramètre (voir la même
 * remarque dans progression.ts) et renvoient un résultat "vide" sans
 * requête si `userId` est `null` : aucune de ces données n'a de sens
 * pour un visiteur non connecté, et /tableau-de-bord est de toute façon
 * une route protégée par le middleware.
 */

import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { QUOTA_QUOTIDIEN_MAX } from "@/lib/quota";
import {
  recupererChapitresOeuvre,
  recupererOeuvresParFiliere,
} from "@/lib/supabase/contenu";
import { creerClientServeur } from "@/lib/supabase/server";
import type { Activite } from "@/types/base-de-donnees";

type ClientServeur = Awaited<ReturnType<typeof creerClientServeur>>;

export interface ActiviteAffichable {
  id: string;
  titre: string;
  /** `null` si la ressource visée n'a pas pu être résolue en URL (ex.
   * chapitre supprimé depuis) : affichée alors comme texte simple, pas
   * comme lien mort. */
  url: string | null;
  createdAt: string;
}

/**
 * Résout une liste de lignes `activite` brutes en liens cliquables.
 * Ne connaît aujourd'hui que le type `consultation_chapitre` (le seul
 * écrit par l'application, voir lib/supabase/activite.ts) ; un type
 * inconnu reste affichable mais sans lien. Requêtes groupées (deux
 * `in()`, pas une par ligne) pour éviter le N+1 quel que soit le nombre
 * de lignes à résoudre.
 */
async function resoudreActivites(
  supabase: ClientServeur,
  lignes: Activite[],
): Promise<ActiviteAffichable[]> {
  const idsChapitres = [
    ...new Set(
      lignes
        .filter((ligne) => ligne.type === "consultation_chapitre" && ligne.ressource_id)
        .map((ligne) => ligne.ressource_id as string),
    ),
  ];

  const chapitreParId = new Map<string, { numero: number; oeuvre_id: string }>();
  if (idsChapitres.length > 0) {
    const { data } = await supabase
      .from("chapitres")
      .select("id, numero, oeuvre_id")
      .in("id", idsChapitres);
    for (const c of data ?? []) {
      chapitreParId.set(c.id, { numero: c.numero, oeuvre_id: c.oeuvre_id });
    }
  }

  const idsOeuvres = [...new Set([...chapitreParId.values()].map((c) => c.oeuvre_id))];
  const slugParOeuvreId = new Map<string, string>();
  if (idsOeuvres.length > 0) {
    const { data } = await supabase.from("oeuvres").select("id, slug").in("id", idsOeuvres);
    for (const o of data ?? []) slugParOeuvreId.set(o.id, o.slug);
  }

  return lignes.map((ligne) => {
    const chapitre = ligne.ressource_id ? chapitreParId.get(ligne.ressource_id) : undefined;
    const slug = chapitre ? slugParOeuvreId.get(chapitre.oeuvre_id) : undefined;

    return {
      id: ligne.id,
      titre: ligne.ressource_titre ?? "Activité",
      url: chapitre && slug ? `/oeuvres/${slug}/${chapitre.numero}` : null,
      createdAt: ligne.created_at,
    };
  });
}

/** Les `limite` activités les plus récentes de l'élève, résolues en
 * liens. Utilisée à la fois pour le bloc "Dernières activités" (limite
 * courte) et pour /activite ("Tout voir", limite large). */
export async function recupererActivitesRecentes(
  userId: string | null,
  limite: number,
): Promise<ActiviteAffichable[]> {
  if (!userId) return [];

  const supabase = await creerClientServeur();
  const { data, error } = await supabase
    .from("activite")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(limite);

  if (error) throw error;
  if (!data || data.length === 0) return [];

  return resoudreActivites(supabase, data as Activite[]);
}

export interface ChapitreRecommande {
  url: string;
  titreOeuvre: string;
  numeroChapitre: number;
}

/**
 * Premier chapitre de la première œuvre (par ordre alphabétique, même
 * tri que /oeuvres) ayant au moins un chapitre en base, pour la filière
 * courante. Utilisé par le bloc "Reprendre" quand l'élève n'a encore
 * rien consulté. `null` si aucune œuvre de la filière n'a le moindre
 * chapitre importé (rien à recommander pour l'instant).
 */
export async function recupererChapitreRecommande(): Promise<ChapitreRecommande | null> {
  const oeuvres = await recupererOeuvresParFiliere(FILIERE_ACTUELLE);
  const oeuvre = oeuvres.find((o) => o.nombreChapitres > 0);
  if (!oeuvre) return null;

  const chapitres = await recupererChapitresOeuvre(oeuvre.id);
  const premier = chapitres[0];
  if (!premier) return null;

  return {
    url: `/oeuvres/${oeuvre.slug}/${premier.numero}`,
    titreOeuvre: oeuvre.titre_fr,
    numeroChapitre: premier.numero,
  };
}

export interface OeuvreProgression {
  slug: string;
  titreFr: string;
  chapitresLus: number;
  totalChapitres: number;
}

/**
 * Progression de lecture par œuvre (pour les barres d'avancement du
 * bloc Progression) et nombre total de chapitres lus tous œuvres
 * confondues, pour la filière courante. Seules les œuvres ayant au
 * moins un chapitre apparaissent (une barre à "0 sur 0" n'aurait pas de
 * sens).
 */
export async function recupererProgressionParOeuvre(
  userId: string | null,
): Promise<{ parOeuvre: OeuvreProgression[]; totalChapitresLus: number }> {
  const oeuvres = await recupererOeuvresParFiliere(FILIERE_ACTUELLE);
  const oeuvresAvecChapitres = oeuvres.filter((o) => o.nombreChapitres > 0);

  const parOeuvreVide = oeuvresAvecChapitres.map((o) => ({
    slug: o.slug,
    titreFr: o.titre_fr,
    chapitresLus: 0,
    totalChapitres: o.nombreChapitres,
  }));

  if (!userId || oeuvresAvecChapitres.length === 0) {
    return { parOeuvre: parOeuvreVide, totalChapitresLus: 0 };
  }

  const supabase = await creerClientServeur();

  const { data: chapitresRows, error: erreurChapitres } = await supabase
    .from("chapitres")
    .select("id, oeuvre_id")
    .in(
      "oeuvre_id",
      oeuvresAvecChapitres.map((o) => o.id),
    );
  if (erreurChapitres) throw erreurChapitres;

  const { data: progressionRows, error: erreurProgression } = await supabase
    .from("progression")
    .select("chapitre_id")
    .eq("user_id", userId)
    .eq("lu", true)
    .in(
      "chapitre_id",
      (chapitresRows ?? []).map((c) => c.id),
    );
  if (erreurProgression) throw erreurProgression;

  const chapitreIdsLus = new Set((progressionRows ?? []).map((p) => p.chapitre_id as string));
  const oeuvreIdParChapitreId = new Map(
    (chapitresRows ?? []).map((c) => [c.id as string, c.oeuvre_id as string]),
  );

  const lusParOeuvre = new Map<string, number>();
  for (const chapitreId of chapitreIdsLus) {
    const oeuvreId = oeuvreIdParChapitreId.get(chapitreId);
    if (oeuvreId) lusParOeuvre.set(oeuvreId, (lusParOeuvre.get(oeuvreId) ?? 0) + 1);
  }

  const parOeuvre = oeuvresAvecChapitres.map((o) => ({
    slug: o.slug,
    titreFr: o.titre_fr,
    chapitresLus: lusParOeuvre.get(o.id) ?? 0,
    totalChapitres: o.nombreChapitres,
  }));

  return { parOeuvre, totalChapitresLus: chapitreIdsLus.size };
}

/** Nombre de copies corrigées (note_total renseignée) et note moyenne
 * associée. `noteMoyenne` vaut `null` tant qu'aucune copie n'est
 * corrigée (pas de division par zéro à masquer côté appelant). */
export async function recupererStatsCopies(
  userId: string | null,
): Promise<{ copiesCorrigees: number; noteMoyenne: number | null }> {
  if (!userId) return { copiesCorrigees: 0, noteMoyenne: null };

  const supabase = await creerClientServeur();
  const { data, error } = await supabase
    .from("copies")
    .select("note_total")
    .eq("user_id", userId)
    .not("note_total", "is", null);

  if (error) throw error;

  const notes = (data ?? []).map((ligne) => ligne.note_total as number);
  if (notes.length === 0) return { copiesCorrigees: 0, noteMoyenne: null };

  const moyenne = notes.reduce((somme, note) => somme + note, 0) / notes.length;
  return { copiesCorrigees: notes.length, noteMoyenne: moyenne };
}

/** Nombre de corrections encore disponibles aujourd'hui pour l'élève
 * (voir lib/quota.ts). Un visiteur non connecté n'a pas de quota
 * entamé : on renvoie le maximum plutôt que 0, par cohérence avec
 * l'idée qu'il n'a encore rien consommé. */
export async function recupererQuotaRestant(userId: string | null): Promise<number> {
  if (!userId) return QUOTA_QUOTIDIEN_MAX;

  const supabase = await creerClientServeur();
  const aujourdHui = new Date().toISOString().slice(0, 10);

  const { data, error } = await supabase
    .from("quota_jour")
    .select("corrections_utilisees")
    .eq("user_id", userId)
    .eq("date", aujourdHui)
    .maybeSingle();

  if (error) throw error;

  const utilisees = data?.corrections_utilisees ?? 0;
  return Math.max(0, QUOTA_QUOTIDIEN_MAX - utilisees);
}
