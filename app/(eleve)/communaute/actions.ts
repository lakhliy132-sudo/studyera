"use server";

import { creerClientServeur } from "@/lib/supabase/server";
import { creerClientService } from "@/lib/supabase/service";

/** Espace de stockage public des photos de la communauté, créé par
 * supabase/migrations/20261101000000_communaute_photos.sql. */
const BUCKET = "communaute";
/** Le navigateur réduit la photo avant l'envoi (1600 px, JPEG) ; cette
 * borne protège contre un envoi qui contournerait le formulaire. */
const TAILLE_MAX = 3.5 * 1024 * 1024;
const TYPES_ACCEPTES = new Set(["image/jpeg", "image/png", "image/webp"]);

/** Vérifie que la publication existe et appartient à l'élève connecté :
 * le stockage s'écrit avec la clé de service, c'est donc ici, et pas
 * dans une policy, que se joue le contrôle d'accès. */
async function publicationDeLEleve(messageId: string): Promise<boolean> {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user || !/^[0-9a-f-]{36}$/i.test(messageId)) return false;
  const { data } = await supabase
    .from("communaute_messages")
    .select("auteur_id")
    .eq("id", messageId)
    .maybeSingle();
  return data?.auteur_id === user.id;
}

/** Joint une photo à une publication que l'élève vient de créer
 * (« ajoute pour ajouter une photo avec le message »). */
export async function ajouterPhotoPublication(donnees: FormData): Promise<{ erreur?: string }> {
  const messageId = String(donnees.get("message_id") ?? "");
  const photo = donnees.get("photo");
  if (!(photo instanceof File) || photo.size === 0) return { erreur: "Aucune photo reçue." };
  if (!TYPES_ACCEPTES.has(photo.type)) return { erreur: "Seules les photos (JPEG, PNG, WebP) sont acceptées." };
  if (photo.size > TAILLE_MAX) return { erreur: "La photo est trop lourde." };
  if (!(await publicationDeLEleve(messageId))) return { erreur: "Cette publication n'est pas la tienne." };

  const { error } = await creerClientService()
    .storage.from(BUCKET)
    .upload(`${messageId}.jpg`, photo, { contentType: photo.type, upsert: true });
  if (error) {
    console.error("ajouterPhotoPublication:", error.message);
    return { erreur: "La photo n'a pas pu être enregistrée." };
  }
  return {};
}

/** Retire la photo d'une publication avant sa suppression, pour ne pas
 * laisser d'image orpheline dans le stockage. */
export async function supprimerPhotoPublication(messageId: string): Promise<void> {
  if (!(await publicationDeLEleve(messageId))) return;
  await creerClientService().storage.from(BUCKET).remove([`${messageId}.jpg`]);
}
