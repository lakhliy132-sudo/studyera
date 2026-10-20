"use server";

import { revalidatePath } from "next/cache";

import { lireAcces } from "@/lib/acces";
import { creerSalle, lireLiveEnCours, liveConfigure, supprimerSalle } from "@/lib/live";
import { creerClientServeur } from "@/lib/supabase/server";
import { creerClientService } from "@/lib/supabase/service";

export interface EtatLive {
  erreur: string | null;
}

/** Démarre un live : crée sa salle Daily et l'enregistre. Réservé aux
 * admins, revérifié ici (une action serveur peut être appelée
 * directement). Un seul live à la fois. */
export async function demarrerLive(_etat: EtatLive, donnees: FormData): Promise<EtatLive> {
  const { admin } = await lireAcces();
  if (!admin) return { erreur: "Réservé aux administrateurs." };
  if (!liveConfigure()) return { erreur: "DAILY_API_KEY manque sur le serveur." };

  const titre = String(donnees.get("titre") ?? "").trim().slice(0, 120);
  if (!titre) return { erreur: "Donne un titre au live." };
  if (await lireLiveEnCours()) return { erreur: "Un live est déjà en cours." };

  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  try {
    const salle = await creerSalle();
    const { error } = await creerClientService()
      .from("lives")
      .insert({ titre, salle_nom: salle.name, salle_url: salle.url, cree_par: user?.id ?? null });
    if (error) {
      await supprimerSalle(salle.name).catch(() => {});
      return { erreur: error.message };
    }
  } catch (e) {
    return { erreur: e instanceof Error ? e.message : "Le live n'a pas pu démarrer." };
  }
  revalidatePath("/live");
  return { erreur: null };
}

/** Termine le live en cours : sa salle est supprimée chez Daily, ce qui
 * coupe tout le monde, puis sa fin est notée. */
export async function terminerLive(): Promise<void> {
  const { admin } = await lireAcces();
  if (!admin) return;
  const live = await lireLiveEnCours();
  if (!live) return;
  await supprimerSalle(live.salleNom).catch(() => {});
  await creerClientService().from("lives").update({ fin: new Date().toISOString() }).eq("id", live.id);
  revalidatePath("/live");
}
