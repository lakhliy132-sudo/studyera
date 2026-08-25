/**
 * Fonctions de lecture réservées à l'espace admin (app/(admin)/...).
 *
 * Distinctes de lib/supabase/contenu.ts, qui ne concerne que le contenu
 * pédagogique public : ici, données élève (copies) accessibles
 * uniquement grâce aux policies RLS "les admins voient ..." (voir
 * supabase/migrations/20260826000400_copies.sql et
 * 20260829000000_lecture_admin_profils.sql). Ces fonctions ne doivent
 * être appelées que depuis des pages déjà protégées par le middleware
 * (CHEMINS_ADMIN, middleware.ts) : elles ne revérifient pas le rôle
 * elles-mêmes, la RLS s'en charge de toute façon côté base.
 */

import { creerClientServeur } from "@/lib/supabase/server";
import type { Copie } from "@/types/base-de-donnees";

export interface CopieAvecDetails extends Copie {
  sujetTitre: string | null;
  eleveEmail: string | null;
  eleveNomComplet: string | null;
}

/** Ligne brute renvoyée par la requête `copies` avec le sujet imbriqué
 * (relation directe copies.sujet_id -> sujets.id, PostgREST peut donc
 * l'imbriquer automatiquement). */
interface LigneCopieBrute extends Copie {
  sujets: { titre: string } | null;
}

/**
 * Toutes les copies déposées, les plus récentes d'abord, avec le titre
 * du sujet et l'identité de l'élève. `profils` n'a pas de relation
 * directe avec `copies` au niveau du schéma (copies.user_id référence
 * auth.users, pas public.profils) : PostgREST ne peut donc pas
 * l'imbriquer automatiquement, d'où la seconde requête séparée.
 */
export async function recupererCopiesPourAdmin(): Promise<CopieAvecDetails[]> {
  const supabase = await creerClientServeur();

  const { data: copies, error } = await supabase
    .from("copies")
    .select("*, sujets(titre)")
    .order("created_at", { ascending: false });

  if (error) throw error;
  if (!copies || copies.length === 0) return [];

  const lignes = copies as unknown as LigneCopieBrute[];
  const idsEleves = [...new Set(lignes.map((ligne) => ligne.user_id))];

  const { data: profils, error: erreurProfils } = await supabase
    .from("profils")
    .select("id, email, nom_complet")
    .in("id", idsEleves);

  if (erreurProfils) throw erreurProfils;

  const profilParId = new Map(
    (profils ?? []).map((profil) => [profil.id, profil]),
  );

  return lignes.map((ligne) => {
    const { sujets, ...copie } = ligne;
    const profil = profilParId.get(ligne.user_id);

    return {
      ...copie,
      sujetTitre: sujets?.titre ?? null,
      eleveEmail: profil?.email ?? null,
      eleveNomComplet: profil?.nom_complet ?? null,
    };
  });
}
