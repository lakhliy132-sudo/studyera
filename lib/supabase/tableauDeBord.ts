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
 * courante. `null` si aucune œuvre de la filière n'a le moindre
 * chapitre importé (rien à recommander pour l'instant).
 *
 * ⚠️ Plus appelée directement par /tableau-de-bord (voir
 * `recupererRepriseLecture` ci-dessous, qui l'utilise en interne comme
 * repli) — gardée exportée telle quelle, un appelant futur pourrait en
 * avoir besoin indépendamment.
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

export interface RepriseLecture {
  url: string;
  oeuvreSlug: string;
  oeuvreTitreFr: string;
  oeuvreTitreAr: string | null;
  auteur: string | null;
  chapitreNumero: number;
  chapitreTitreFr: string;
  /** Court résumé du chapitre, utilisé comme aperçu sur la carte
   * "Reprendre" — pas un extrait littéral du texte intégral (le texte
   * intégral, table `paragraphes`, n'est pratiquement jamais rempli,
   * voir scripts/importer.ts) : présenté comme un résumé, pas comme
   * une citation, pour rester honnête sur ce que c'est vraiment. */
  resumeCourt: string | null;
  /** `true` si c'est une suggestion de premier chapitre (l'élève n'a
   * encore rien consulté), `false` si c'est vraiment une reprise du
   * dernier chapitre réellement consulté. */
  estRecommandation: boolean;
}

/**
 * Version enrichie de "quoi proposer à l'élève pour reprendre sa
 * lecture" — construite pour la carte "Reprendre" du tableau de bord
 * réécrit sur un modèle fourni par l'utilisateur ("fais moi comme ca
 * mais ajoute des modif bien"), qui a besoin de plus que juste une URL
 * et un titre (titre arabe, auteur, résumé). Remplace la combinaison
 * `recupererActivitesRecentes(...)[0]` + `recupererChapitreRecommande()`
 * utilisée par l'ancien bloc "Reprendre", qui n'avait pas ces
 * informations.
 */
export async function recupererRepriseLecture(userId: string | null): Promise<RepriseLecture | null> {
  const supabase = await creerClientServeur();

  // 1. Dernier chapitre réellement consulté (le plus récent
  // `consultation_chapitre` dans `activite`), s'il y en a un.
  if (userId) {
    const { data: activites, error: erreurActivites } = await supabase
      .from("activite")
      .select("ressource_id")
      .eq("user_id", userId)
      .eq("type", "consultation_chapitre")
      .order("created_at", { ascending: false })
      .limit(1);
    if (erreurActivites) throw erreurActivites;

    const chapitreId = activites?.[0]?.ressource_id;
    if (chapitreId) {
      const { data: chapitre } = await supabase
        .from("chapitres")
        .select("id, oeuvre_id, numero, titre_fr, resume_court")
        .eq("id", chapitreId)
        .maybeSingle();

      if (chapitre) {
        const { data: oeuvre } = await supabase
          .from("oeuvres")
          .select("slug, titre_fr, titre_ar, auteur")
          .eq("id", chapitre.oeuvre_id)
          .maybeSingle();

        if (oeuvre) {
          return {
            url: `/oeuvres/${oeuvre.slug}/${chapitre.numero}`,
            oeuvreSlug: oeuvre.slug,
            oeuvreTitreFr: oeuvre.titre_fr,
            oeuvreTitreAr: oeuvre.titre_ar,
            auteur: oeuvre.auteur,
            chapitreNumero: chapitre.numero,
            chapitreTitreFr: chapitre.titre_fr,
            resumeCourt: chapitre.resume_court,
            estRecommandation: false,
          };
        }
      }
    }
  }

  // 2. Rien consulté (ou visiteur non connecté) : suggère le premier
  // chapitre de la première œuvre qui en a, même logique que
  // `recupererChapitreRecommande` mais enrichie.
  const oeuvres = await recupererOeuvresParFiliere(FILIERE_ACTUELLE);
  const oeuvre = oeuvres.find((o) => o.nombreChapitres > 0);
  if (!oeuvre) return null;

  const chapitres = await recupererChapitresOeuvre(oeuvre.id);
  const premier = chapitres[0];
  if (!premier) return null;

  return {
    url: `/oeuvres/${oeuvre.slug}/${premier.numero}`,
    oeuvreSlug: oeuvre.slug,
    oeuvreTitreFr: oeuvre.titre_fr,
    oeuvreTitreAr: oeuvre.titre_ar,
    auteur: oeuvre.auteur,
    chapitreNumero: premier.numero,
    chapitreTitreFr: premier.titre_fr,
    resumeCourt: premier.resume_court,
    estRecommandation: true,
  };
}

export interface OeuvreProgression {
  slug: string;
  titreFr: string;
  titreAr: string | null;
  auteur: string | null;
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
    titreAr: o.titre_ar,
    auteur: o.auteur,
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
    titreAr: o.titre_ar,
    auteur: o.auteur,
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

/**
 * Nombre de jours consécutifs (jusqu'à aujourd'hui inclus, ou hier si
 * l'élève n'a encore rien fait aujourd'hui) avec au moins une entrée
 * dans `activite` — la "série" affichée sur le tableau de bord réécrit
 * sur un modèle fourni par l'utilisateur ("fais moi comme ca mais
 * ajoute des modif bien"). Calculée à partir de vraies données
 * (`activite.created_at`), pas inventée : 0 pour un élève qui n'a
 * jamais rien consulté.
 *
 * Une fenêtre de 60 jours suffit largement (au-delà, une série
 * continue tous les jours pendant deux mois est de toute façon un cas
 * limite qu'on peut sous-compter sans conséquence pratique) et évite
 * de charger tout l'historique d'un élève actif depuis longtemps.
 */
export async function recupererSerieJours(userId: string | null): Promise<number> {
  if (!userId) return 0;

  const supabase = await creerClientServeur();
  const depuis = new Date();
  depuis.setDate(depuis.getDate() - 60);

  const { data, error } = await supabase
    .from("activite")
    .select("created_at")
    .eq("user_id", userId)
    .gte("created_at", depuis.toISOString());

  if (error) throw error;
  if (!data || data.length === 0) return 0;

  const joursAvecActivite = new Set(
    data.map((ligne) => (ligne.created_at as string).slice(0, 10)),
  );

  const curseur = new Date();
  // Si rien aujourd'hui, la série peut quand même être "en cours"
  // jusqu'à hier (l'élève a jusqu'à la fin de la journée pour la
  // continuer) — seulement 2 sauts en arrière autorisés avant de
  // considérer la série interrompue.
  if (!joursAvecActivite.has(curseur.toISOString().slice(0, 10))) {
    curseur.setDate(curseur.getDate() - 1);
  }

  let serie = 0;
  while (joursAvecActivite.has(curseur.toISOString().slice(0, 10))) {
    serie += 1;
    curseur.setDate(curseur.getDate() - 1);
  }

  return serie;
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

/** Notes des copies corrigées, de la plus ancienne à la plus récente,
 * avec le détail forme/fond — alimente la courbe et les barres par
 * critère de la page /progres. */
export async function recupererHistoriqueCopies(
  userId: string | null,
): Promise<{ note: number; forme: number | null; fond: number | null; date: string }[]> {
  if (!userId) return [];

  const supabase = await creerClientServeur();
  const { data, error } = await supabase
    .from("copies")
    .select("note_total, note_forme, note_fond, created_at")
    .eq("user_id", userId)
    .not("note_total", "is", null)
    .order("created_at");

  if (error) {
    console.error("recupererHistoriqueCopies:", error.message);
    return [];
  }

  return (data ?? []).map((ligne) => ({
    note: ligne.note_total as number,
    forme: (ligne.note_forme as number | null) ?? null,
    fond: (ligne.note_fond as number | null) ?? null,
    date: ligne.created_at as string,
  }));
}

/** Nombre d'entrées dans `activite` par jour sur les `jours` derniers
 * jours — carte de régularité de /progres. La base n'enregistre pas de
 * durée de révision : c'est donc un nombre d'activités, pas des
 * minutes. */
export async function recupererActiviteParJour(
  userId: string | null,
  jours: number,
): Promise<Record<string, number>> {
  if (!userId) return {};

  const supabase = await creerClientServeur();
  const depuis = new Date();
  depuis.setDate(depuis.getDate() - jours);

  const { data, error } = await supabase
    .from("activite")
    .select("created_at")
    .eq("user_id", userId)
    .gte("created_at", depuis.toISOString());

  if (error) {
    console.error("recupererActiviteParJour:", error.message);
    return {};
  }

  const comptes: Record<string, number> = {};
  for (const ligne of data ?? []) {
    const date = new Date(ligne.created_at as string);
    const cle = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    comptes[cle] = (comptes[cle] ?? 0) + 1;
  }
  return comptes;
}
