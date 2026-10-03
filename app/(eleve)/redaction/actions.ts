"use server";

import { redirect } from "next/navigation";

import { corrigerCopie } from "@/lib/correcteur";
import { QUOTA_QUOTIDIEN_MAX } from "@/lib/quota";
import { creerClientServeur } from "@/lib/supabase/server";
import { creerClientService } from "@/lib/supabase/service";
import { recupererQuotaRestant } from "@/lib/supabase/tableauDeBord";

export interface EtatCorrection {
  erreur: string | null;
}

/** Longueurs acceptées pour une copie : en dessous, il n'y a rien à
 * corriger ; au-dessus, c'est plus long qu'une rédaction d'examen et
 * l'appel au modèle coûterait cher pour rien. */
const LONGUEUR_MIN = 200;
const LONGUEUR_MAX = 12000;

/**
 * Corrige la copie envoyée par l'élève et l'enregistre, puis l'emmène
 * sur sa correction.
 *
 * Tout se passe côté serveur : la clé du modèle n'est pas exposée, et
 * surtout c'est le serveur qui écrit la note. L'élève peut créer sa
 * copie (policy RLS `un eleve cree ses propres copies`) mais n'a aucune
 * policy UPDATE : sans ce détour, il suffirait d'un appel direct à
 * l'API Supabase depuis le navigateur pour s'attribuer la note de son
 * choix.
 *
 * L'identité vient de la session, jamais du formulaire, et le quota est
 * revérifié ici : un formulaire peut être rejoué, un contrôle fait
 * seulement à l'affichage ne protège rien.
 */
export async function corrigerEtEnregistrer(
  _etatPrecedent: EtatCorrection,
  donnees: FormData,
): Promise<EtatCorrection> {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { erreur: "Il faut être connecté pour envoyer une copie." };

  const sujetId = String(donnees.get("sujet_id") ?? "").trim();
  const texte = String(donnees.get("texte") ?? "").trim();

  if (!sujetId) return { erreur: "Choisis un sujet avant d'envoyer ta copie." };
  if (texte.length < LONGUEUR_MIN) {
    return {
      erreur: `Ta copie est trop courte pour être corrigée (${texte.length} caractères sur ${LONGUEUR_MIN} minimum).`,
    };
  }
  if (texte.length > LONGUEUR_MAX) {
    return {
      erreur: `Ta copie dépasse ${LONGUEUR_MAX} caractères. Envoie-la en deux fois.`,
    };
  }

  const restant = await recupererQuotaRestant(user.id);
  if (restant <= 0) {
    return {
      erreur: `Tu as déjà utilisé tes ${QUOTA_QUOTIDIEN_MAX} corrections du jour. Reviens demain.`,
    };
  }

  const { data: sujet } = await supabase
    .from("sujets")
    .select("id, consigne, type")
    .eq("id", sujetId)
    .maybeSingle();
  if (!sujet) return { erreur: "Ce sujet n'existe pas." };

  let correction;
  try {
    correction = await corrigerCopie({
      consigne: sujet.consigne,
      typeSujet: sujet.type,
      texte,
    });
  } catch (erreur) {
    // Le détail technique reste dans les journaux du serveur ; l'élève
    // reçoit une phrase utile plutôt qu'un message d'API.
    console.error("Correction impossible :", erreur);
    return {
      erreur:
        "La correction n'a pas abouti. Ta copie n'a pas été enregistrée, tu peux réessayer.",
    };
  }

  const service = creerClientService();
  const { data: copie, error } = await service
    .from("copies")
    .insert({
      user_id: user.id,
      sujet_id: sujet.id,
      transcription: texte,
      note_forme: correction.noteForme,
      note_fond: correction.noteFond,
      note_total: correction.noteTotal,
      erreurs: correction.erreurs,
      points_forts: correction.pointsForts,
      axes: correction.axes,
      commentaire: correction.commentaire,
      cout_tokens: correction.coutTokens,
    })
    .select("id")
    .single();

  if (error || !copie) {
    console.error("Enregistrement de la copie impossible :", error);
    return {
      erreur: "La correction a réussi mais l'enregistrement a échoué.",
    };
  }

  redirect(`/redaction/${copie.id}`);
}
