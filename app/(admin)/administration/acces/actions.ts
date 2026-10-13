"use server";

import { revalidatePath } from "next/cache";

import { aujourdhui } from "@/lib/acces";
import { creerClientServeur } from "@/lib/supabase/server";
import { creerClientService } from "@/lib/supabase/service";

/** Durée de chaque formule, en mois (lib/abonnement.ts). */
const MOIS: Record<string, number> = { trimestre: 3, annee: 12 };

/** Refuse toute action si la personne n'est pas admin. Le middleware
 * protège déjà la page, mais une action serveur peut être appelée
 * directement : on revérifie ici. */
async function verifierAdmin() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Non connecté.");
  const { data: profil } = await supabase.from("profils").select("role").eq("id", user.id).maybeSingle();
  if (profil?.role !== "admin") throw new Error("Réservé aux administrateurs.");
}

function ajouterMois(iso: string, mois: number): string {
  const [a, m, j] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(a, m - 1 + mois, j));
  return date.toISOString().slice(0, 10);
}

/**
 * Active (ou prolonge) l'accès d'un élève pour une formule, après son
 * paiement sur WhatsApp. Un accès encore en cours est prolongé à partir
 * de sa date de fin, pour qu'un renouvellement anticipé ne fasse pas
 * perdre de jours ; sinon l'accès part d'aujourd'hui.
 */
export async function activerAcces(formData: FormData) {
  await verifierAdmin();
  const userId = String(formData.get("userId") ?? "");
  const formule = String(formData.get("formule") ?? "");
  const mois = MOIS[formule];
  if (!userId || !mois) throw new Error("Formule ou élève inconnu.");

  const service = creerClientService();
  const { data: actuel } = await service.from("acces_eleves").select("fin").eq("user_id", userId).maybeSingle();
  const jour = aujourdhui();
  const depart = actuel?.fin && actuel.fin >= jour ? (actuel.fin as string) : jour;
  const { error } = await service.from("acces_eleves").upsert({
    user_id: userId,
    formule,
    debut: actuel?.fin && actuel.fin >= jour ? undefined : jour,
    fin: ajouterMois(depart, mois),
    modifie_le: new Date().toISOString(),
  });
  if (error) throw error;
  revalidatePath("/administration/acces");
}

/** Retire l'accès d'un élève (erreur d'activation, remboursement…). */
export async function retirerAcces(formData: FormData) {
  await verifierAdmin();
  const userId = String(formData.get("userId") ?? "");
  if (!userId) throw new Error("Élève inconnu.");
  const { error } = await creerClientService().from("acces_eleves").delete().eq("user_id", userId);
  if (error) throw error;
  revalidatePath("/administration/acces");
}
