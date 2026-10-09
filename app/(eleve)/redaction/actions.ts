"use server";

import { redirect } from "next/navigation";

import { corrigerCopie, transcrireCopie, type PageCopie } from "@/lib/correcteur";
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
  if (texte.includes("[?]")) {
    return {
      erreur: "Il reste des mots illisibles, marqués [?]. Remplace-les par ce que tu as écrit avant l'envoi.",
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

  await compterCorrection(user.id);

  redirect(`/redaction/${copie.id}`);
}

/**
 * Ajoute une correction au compteur du jour (`quota_jour`).
 *
 * Il manquait : le quota était lu avant chaque correction mais jamais
 * augmenté après, si bien que la limite de QUOTA_QUOTIDIEN_MAX
 * corrections par jour ne bloquait rien. L'élève n'a pas le droit
 * d'écrire dans cette table (voir la migration) : on passe par la clé
 * de service, côté serveur.
 *
 * Même jour que celui lu par `recupererQuotaRestant` (date UTC). Un
 * échec ici est journalisé sans faire échouer l'envoi : la copie est
 * déjà corrigée et enregistrée.
 */
async function compterCorrection(userId: string) {
  const service = creerClientService();
  const date = new Date().toISOString().slice(0, 10);
  const { data: ligne } = await service
    .from("quota_jour")
    .select("corrections_utilisees")
    .eq("user_id", userId)
    .eq("date", date)
    .maybeSingle();
  const { error } = await service
    .from("quota_jour")
    .upsert({ user_id: userId, date, corrections_utilisees: (ligne?.corrections_utilisees ?? 0) + 1 });
  if (error) console.error("Mise à jour du quota impossible :", error);
}

export interface EtatTranscription {
  erreur: string | null;
  texte: string | null;
  incertains: string[];
}

const TYPES_IMAGE = ["image/jpeg", "image/png", "image/webp"];
const PAGES_MAX = 4;
/** Par page : le navigateur réduit déjà les photos (FormulaireCopie),
 * cette limite rattrape un envoi qui ne passerait pas par lui. */
const TAILLE_PAGE_MAX = 1.5 * 1024 * 1024;

/**
 * Lit les photos d'une copie manuscrite et renvoie le texte à l'élève,
 * pour qu'il le relise et corrige la lecture avant la correction
 * ("pour une première partie ça lui donne ce que l'IA a pu lire [...]
 * et après ça lui donne accès de changer ou pas des mots").
 *
 * Mêmes garde-fous que la correction : session, clé côté serveur, et
 * quota du jour. La lecture ne consomme pas de correction, mais elle
 * n'est permise que s'il en reste une : sinon un élève sans correction
 * disponible pourrait faire lire des photos sans fin. Rien n'est
 * enregistré : ni les photos, ni le texte.
 */
export async function transcrirePhotos(
  _etatPrecedent: EtatTranscription,
  donnees: FormData,
): Promise<EtatTranscription> {
  const echec = (erreur: string): EtatTranscription => ({ erreur, texte: null, incertains: [] });

  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return echec("Il faut être connecté pour envoyer une copie.");

  const fichiers = donnees.getAll("pages").filter((f): f is File => f instanceof File && f.size > 0);
  if (fichiers.length === 0) return echec("Ajoute au moins une photo de ta copie.");
  if (fichiers.length > PAGES_MAX) return echec(`${PAGES_MAX} pages au plus par copie.`);
  for (const fichier of fichiers) {
    if (!TYPES_IMAGE.includes(fichier.type)) return echec("Seules les photos JPEG, PNG ou WebP sont acceptées.");
    if (fichier.size > TAILLE_PAGE_MAX) return echec("Une des photos est trop lourde. Reprends-la ou réduis-la.");
  }

  const restant = await recupererQuotaRestant(user.id);
  if (restant <= 0) {
    return echec(`Tu as déjà utilisé tes ${QUOTA_QUOTIDIEN_MAX} corrections du jour. Reviens demain.`);
  }

  const pages: PageCopie[] = await Promise.all(
    fichiers.map(async (fichier) => ({
      typeMime: fichier.type,
      base64: Buffer.from(await fichier.arrayBuffer()).toString("base64"),
    })),
  );

  try {
    const lecture = await transcrireCopie(pages);
    if (!lecture.texte) {
      return echec("Aucun texte n'a pu être lu sur ces photos. Vérifie qu'elles sont nettes et bien éclairées.");
    }
    return { erreur: null, texte: lecture.texte, incertains: lecture.incertains };
  } catch (erreur) {
    console.error("Lecture des photos impossible :", erreur);
    return echec("La lecture de tes photos n'a pas abouti. Tu peux réessayer.");
  }
}
