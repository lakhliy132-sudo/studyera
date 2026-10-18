import { creerClientServeur } from "@/lib/supabase/server";

/**
 * Lectures du « défi de la semaine » (page Communauté) — voir
 * supabase/migrations/20261103000000_defis.sql.
 *
 * Lectures serveur uniquement (importe `next/headers` via
 * `creerClientServeur`) : les écritures vivent dans les composants
 * client, comme pour le reste de la communauté.
 *
 * Tolérant aux tables absentes : tant que la migration n'est pas
 * lancée, `recupererDefiCourant` renvoie `null` et la page n'affiche
 * pas de défi, au lieu d'une erreur 500.
 */

export interface ReponseDefi {
  id: string;
  auteurId: string;
  auteur: string;
  contenu: string;
  createdAt: string;
  nombreVotes: number;
  /** `true` si la personne connectée a voté pour cette réponse. */
  votePersonnel: boolean;
}

export interface Defi {
  id: string;
  titre: string;
  enonce: string;
  matiere: string | null;
  dateLimite: string;
  corrige: string | null;
  createdAt: string;
  /** La date limite est passée : plus de nouvelle réponse. */
  termine: boolean;
  /** Réponses, la plus votée d'abord (à égalité, la plus ancienne). */
  reponses: ReponseDefi[];
  /** Réponse de la personne connectée, si elle en a envoyé une. */
  maReponse: ReponseDefi | null;
}

/** Même règle que la communauté : le premier mot de
 * `profils.nom_complet`, sinon « Élève » — jamais un pseudo inventé. */
function prenomDe(nomComplet: string | null | undefined): string {
  return (nomComplet ?? "").trim().split(/\s+/)[0] || "Élève";
}

/** Le défi le plus récent, avec ses réponses et leurs votes. */
export async function recupererDefiCourant(): Promise<Defi | null> {
  try {
    const supabase = await creerClientServeur();
    const { data: defi, error } = await supabase
      .from("defis")
      .select("id, titre, enonce, matiere, date_limite, corrige, created_at")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) throw error;
    if (!defi) return null;

    const [{ data: utilisateur }, { data: lignesReponses }] = await Promise.all([
      supabase.auth.getUser(),
      supabase
        .from("defis_reponses")
        .select("id, auteur_id, contenu, created_at")
        .eq("defi_id", defi.id)
        .order("created_at"),
    ]);
    const monId = utilisateur.user?.id ?? null;
    const reponsesBrutes = (lignesReponses ?? []) as {
      id: string;
      auteur_id: string;
      contenu: string;
      created_at: string;
    }[];

    const ids = reponsesBrutes.map((r) => r.id);
    const auteurs = [...new Set(reponsesBrutes.map((r) => r.auteur_id))];
    const [{ data: votes }, { data: profils }] = await Promise.all([
      ids.length
        ? supabase.from("defis_votes").select("reponse_id, auteur_id").in("reponse_id", ids)
        : Promise.resolve({ data: [] }),
      auteurs.length
        ? supabase.from("profils").select("id, nom_complet").in("id", auteurs)
        : Promise.resolve({ data: [] }),
    ]);

    const noms = new Map(
      ((profils ?? []) as { id: string; nom_complet: string | null }[]).map((p) => [p.id, prenomDe(p.nom_complet)]),
    );
    const parReponse = new Map<string, { total: number; mien: boolean }>();
    for (const vote of (votes ?? []) as { reponse_id: string; auteur_id: string }[]) {
      const courant = parReponse.get(vote.reponse_id) ?? { total: 0, mien: false };
      courant.total += 1;
      if (vote.auteur_id === monId) courant.mien = true;
      parReponse.set(vote.reponse_id, courant);
    }

    const reponses: ReponseDefi[] = reponsesBrutes
      .map((r) => ({
        id: r.id,
        auteurId: r.auteur_id,
        auteur: noms.get(r.auteur_id) ?? "Élève",
        contenu: r.contenu,
        createdAt: r.created_at,
        nombreVotes: parReponse.get(r.id)?.total ?? 0,
        votePersonnel: parReponse.get(r.id)?.mien ?? false,
      }))
      // Tri stable : à égalité de votes, l'ordre d'envoi est gardé.
      .sort((a, b) => b.nombreVotes - a.nombreVotes);

    return {
      id: defi.id as string,
      titre: defi.titre as string,
      enonce: defi.enonce as string,
      matiere: defi.matiere as string | null,
      dateLimite: defi.date_limite as string,
      corrige: defi.corrige as string | null,
      createdAt: defi.created_at as string,
      termine: new Date(defi.date_limite as string).getTime() < Date.now(),
      reponses,
      maReponse: reponses.find((r) => r.auteurId === monId) ?? null,
    };
  } catch (erreur) {
    console.error("recupererDefiCourant:", erreur);
    return null;
  }
}

export interface DefiResume {
  id: string;
  titre: string;
  dateLimite: string;
  corrige: string | null;
  nombreReponses: number;
}

/** Les défis publiés, le plus récent d'abord — pour l'espace admin. */
export async function recupererDefisPourAdmin(): Promise<DefiResume[]> {
  try {
    const supabase = await creerClientServeur();
    const { data, error } = await supabase
      .from("defis")
      .select("id, titre, date_limite, corrige, defis_reponses(count)")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return ((data ?? []) as {
      id: string;
      titre: string;
      date_limite: string;
      corrige: string | null;
      defis_reponses: { count: number }[];
    }[]).map((d) => ({
      id: d.id,
      titre: d.titre,
      dateLimite: d.date_limite,
      corrige: d.corrige,
      nombreReponses: d.defis_reponses?.[0]?.count ?? 0,
    }));
  } catch (erreur) {
    console.error("recupererDefisPourAdmin:", erreur);
    return [];
  }
}
