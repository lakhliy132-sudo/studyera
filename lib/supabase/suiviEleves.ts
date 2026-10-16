import { aujourdhui } from "@/lib/acces";
import { LIBELLES_ACTIVITE } from "@/lib/supabase/activite";
import { creerClientServeur } from "@/lib/supabase/server";
import { creerClientService } from "@/lib/supabase/service";

/**
 * Le suivi des élèves de /administration/eleves (« où je peux voir ce
 * que l'élève a fait dans le site »).
 *
 * Les tables d'élève (`activite`, `progression`, `copies`…) ne sont
 * lisibles par RLS que par leur propriétaire : la lecture passe donc par
 * la clé de service, côté serveur, après avoir vérifié que la personne
 * connectée est admin (`exigerAdmin`, en plus du middleware).
 *
 * Tout ce qui est montré est compté sur la base. Ce que le site
 * n'enregistre pas (temps passé, réponses aux quiz, sujets faits
 * jusqu'au bout) n'apparaît pas.
 */

export type EtatAccesEleve = "attente" | "actif" | "expire" | "admin";

export interface ResumeEleve {
  id: string;
  email: string;
  nom: string | null;
  inscritLe: string;
  etat: EtatAccesEleve;
  fin: string | null;
  derniereVisite: string | null;
  joursActifs: number;
  chapitresOuverts: number;
  chapitresLus: number;
  leconsOuvertes: number;
  sujetsOuverts: number;
  copies: number;
}

export interface EvenementSuivi {
  date: string;
  type: "activite" | "lu" | "copie";
  libelle: string;
  detail: string | null;
  lien: string | null;
}

/** Refuse la page à qui n'est pas admin. Le middleware protège déjà
 * /administration ; la clé de service lisant les données de tous les
 * élèves, on revérifie ici. */
export async function exigerAdmin(): Promise<void> {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Non connecté.");
  const { data: profil } = await supabase.from("profils").select("role").eq("id", user.id).maybeSingle();
  if (profil?.role !== "admin") throw new Error("Réservé aux administrateurs.");
}

function tableAbsente(erreur: { code?: string } | null): boolean {
  return erreur?.code === "PGRST205" || erreur?.code === "42P01";
}

/** Jour (AAAA-MM-JJ) d'un horodatage, heure du Maroc. */
export function jourMaroc(iso: string): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Casablanca" }).format(new Date(iso));
}

async function tousLesComptes(service: ReturnType<typeof creerClientService>) {
  const comptes: { id: string; email?: string; created_at: string }[] = [];
  for (let page = 1; ; page++) {
    const { data, error } = await service.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    comptes.push(...data.users);
    if (data.users.length < 1000) break;
  }
  return comptes;
}

/** Une ligne par compte, les plus récemment actifs d'abord. */
export async function listerEleves(): Promise<ResumeEleve[]> {
  await exigerAdmin();
  const service = creerClientService();
  const [comptes, profils, acces, activite, progression, copies] = await Promise.all([
    tousLesComptes(service),
    service.from("profils").select("id, nom_complet, role"),
    service.from("acces_eleves").select("user_id, fin"),
    service.from("activite").select("user_id, type, ressource_id, created_at"),
    service.from("progression").select("user_id").eq("lu", true),
    service.from("copies").select("user_id"),
  ]);

  const profilParId = new Map((profils.data ?? []).map((p) => [p.id as string, p]));
  const finParId = new Map(tableAbsente(acces.error) ? [] : (acces.data ?? []).map((a) => [a.user_id as string, a.fin as string]));
  const jour = aujourdhui();

  const parEleve = new Map<string, { jours: Set<string>; derniere: string | null; chapitres: Set<string>; lecons: Set<string>; sujets: Set<string> }>();
  for (const a of activite.data ?? []) {
    const e = parEleve.get(a.user_id) ?? { jours: new Set(), derniere: null, chapitres: new Set(), lecons: new Set(), sujets: new Set() };
    e.jours.add(jourMaroc(a.created_at));
    if (!e.derniere || a.created_at > e.derniere) e.derniere = a.created_at;
    const cible = a.type === "consultation_chapitre" ? e.chapitres : a.type === "consultation_lecon" ? e.lecons : a.type === "consultation_sujet" ? e.sujets : null;
    if (cible && a.ressource_id) cible.add(a.ressource_id);
    parEleve.set(a.user_id, e);
  }
  const compter = (lignes: { user_id: string }[] | null) => {
    const m = new Map<string, number>();
    for (const l of lignes ?? []) m.set(l.user_id, (m.get(l.user_id) ?? 0) + 1);
    return m;
  };
  const lus = compter(progression.data);
  const nbCopies = compter(copies.data);

  return comptes
    .map((c) => {
      const profil = profilParId.get(c.id);
      const fin = finParId.get(c.id) ?? null;
      const e = parEleve.get(c.id);
      const etat: EtatAccesEleve = profil?.role === "admin" ? "admin" : !fin ? "attente" : fin >= jour ? "actif" : "expire";
      return {
        id: c.id,
        email: c.email ?? "",
        nom: (profil?.nom_complet as string | null | undefined) ?? null,
        inscritLe: c.created_at,
        etat,
        fin,
        derniereVisite: e?.derniere ?? null,
        joursActifs: e?.jours.size ?? 0,
        chapitresOuverts: e?.chapitres.size ?? 0,
        chapitresLus: lus.get(c.id) ?? 0,
        leconsOuvertes: e?.lecons.size ?? 0,
        sujetsOuverts: e?.sujets.size ?? 0,
        copies: nbCopies.get(c.id) ?? 0,
      };
    })
    .sort((x, y) => (y.derniereVisite ?? "").localeCompare(x.derniereVisite ?? "") || y.inscritLe.localeCompare(x.inscritLe));
}

/** La fiche d'un élève : son résumé, ses jours d'activité et son
 * historique (pages ouvertes, chapitres marqués lus, copies), du plus
 * récent au plus ancien. */
export async function lireSuiviEleve(id: string): Promise<{
  eleve: ResumeEleve;
  activiteParJour: Record<string, number>;
  evenements: EvenementSuivi[];
} | null> {
  const eleves = await listerEleves();
  const eleve = eleves.find((e) => e.id === id);
  if (!eleve) return null;

  const service = creerClientService();
  const [activite, progression, copies] = await Promise.all([
    service.from("activite").select("type, ressource_id, ressource_titre, created_at").eq("user_id", id).order("created_at", { ascending: false }).limit(500),
    service.from("progression").select("chapitre_id, termine_le").eq("user_id", id).eq("lu", true),
    service.from("copies").select("id, note_total, created_at, sujets(titre)").eq("user_id", id).order("created_at", { ascending: false }),
  ]);

  // Chapitres marqués lus : leur titre et leur œuvre.
  const idsChapitres = (progression.data ?? []).map((p) => p.chapitre_id as string);
  const chapitres = idsChapitres.length
    ? (await service.from("chapitres").select("id, numero, titre_fr, oeuvres(titre_fr, slug)").in("id", idsChapitres)).data ?? []
    : [];
  const chapitreParId = new Map(chapitres.map((c) => [c.id as string, c]));

  const activiteParJour: Record<string, number> = {};
  for (const a of activite.data ?? []) {
    const j = jourMaroc(a.created_at);
    activiteParJour[j] = (activiteParJour[j] ?? 0) + 1;
  }

  const evenements: EvenementSuivi[] = [
    ...(activite.data ?? []).map((a) => ({
      date: a.created_at as string,
      type: "activite" as const,
      libelle: LIBELLES_ACTIVITE[a.type] ?? a.type,
      detail: (a.ressource_titre as string | null) ?? null,
      lien: null,
    })),
    ...(progression.data ?? [])
      .filter((p) => p.termine_le)
      .map((p) => {
        const c = chapitreParId.get(p.chapitre_id) as
          | { numero: number; titre_fr: string; oeuvres: { titre_fr: string; slug: string } | { titre_fr: string; slug: string }[] | null }
          | undefined;
        const oeuvre = Array.isArray(c?.oeuvres) ? c?.oeuvres[0] : c?.oeuvres;
        return {
          date: p.termine_le as string,
          type: "lu" as const,
          libelle: "A marqué un chapitre comme lu",
          detail: c ? `${oeuvre?.titre_fr ?? ""} — ${c.titre_fr}` : null,
          lien: c && oeuvre ? `/oeuvres/${oeuvre.slug}/${c.numero}` : null,
        };
      }),
    ...(copies.data ?? []).map((c) => {
      const sujet = Array.isArray(c.sujets) ? c.sujets[0] : (c.sujets as { titre: string } | null);
      return {
        date: c.created_at as string,
        type: "copie" as const,
        libelle: c.note_total !== null ? `A envoyé une copie : ${String(c.note_total).replace(".", ",")}/20` : "A envoyé une copie (pas encore notée)",
        detail: sujet?.titre ?? null,
        // Pas de lien : la page d'une copie n'est lisible que par son
        // auteur (RLS) ; les copies se consultent sur /administration.
        lien: null,
      };
    }),
  ].sort((x, y) => y.date.localeCompare(x.date));

  return { eleve, activiteParJour, evenements };
}
