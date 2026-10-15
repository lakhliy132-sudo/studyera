import AccueilEleve from "@/components/AccueilEleve";
import AccueilVisiteur from "@/components/AccueilVisiteur";
import { deriverPrenom } from "@/lib/prenom";
import { creerClientServeur } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { lireAcces } from "@/lib/acces";

/**
 * Page d'accueil : /
 *
 * Pour un visiteur non connecté : présentation de tout le site en
 * darija, avec les prix (AccueilVisiteur). Pour un élève connecté :
 * accueil personnalisé (components/AccueilEleve.tsx) — demandé
 * explicitement par l'utilisateur.
 */
export default async function PageAccueil() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    // Compte créé mais pas encore activé (accès payant, lib/acces.ts) :
    // son accueil est la page qui explique comment l'activer.
    const acces = await lireAcces();
    if (!acces.complet) redirect("/acces");

    const { data: profil } = await supabase
      .from("profils")
      .select("nom_complet")
      .eq("id", user.id)
      .maybeSingle();
    const prenom = deriverPrenom(
      profil?.nom_complet ?? null,
      user.email ?? null,
    );
    return <AccueilEleve prenom={prenom} userId={user.id} />;
  }

  // Visiteur non connecté : la page de présentation en darija, avec
  // les prix (components/AccueilVisiteur.tsx). Elle remplace l'ancienne
  // présentation en français (titre, grille des matières, trois espaces
  // de français, date de l'examen), à la demande de l'utilisateur.
  return <AccueilVisiteur />;
}
