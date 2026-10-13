import AccueilVisiteur from "@/components/AccueilVisiteur";
import BandeauBienvenueAccueil from "@/components/BandeauBienvenueAccueil";
import BarreObjectifAccueil from "@/components/BarreObjectifAccueil";
import BoutonModeNuit from "@/components/BoutonModeNuit";
import CarteAVenirAccueil from "@/components/CarteAVenirAccueil";
import CarteMotivationAccueil from "@/components/CarteMotivationAccueil";
import TuilesStatsAccueil from "@/components/TuilesStatsAccueil";
import CompteARebourExamenLive from "@/components/CompteARebourExamenLive";
import GrilleMatieresAccueil from "@/components/GrilleMatieresAccueil";
import { deriverPrenom } from "@/lib/prenom";
import { creerClientServeur } from "@/lib/supabase/server";
import { recupererEvenementsEleve } from "@/lib/supabase/evenements";
import { recupererProgressionParOeuvre } from "@/lib/supabase/tableauDeBord";
import { compterCours } from "@/lib/supabase/contenu";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { MATIERES } from "@/lib/matieres";
import { joursAvant, prochaineSession } from "@/lib/calendrier";
import { redirect } from "next/navigation";
import { lireAcces } from "@/lib/acces";

/**
 * Accueil d'un élève connecté. Dernière refonte d'après une nouvelle
 * maquette complète ("on va essayer ca maintenant") : bandeau de
 * bienvenue avec photo, quatre chiffres, "Mes matières" en cartes à
 * photo, bandeau étroit d'encouragement ; à droite, compte à rebours,
 * citation et "À venir". Deux consignes jointes à la maquette : pas de
 * citation dans le menu de gauche ("enleve la quote de menu a gauche"),
 * et le bandeau du bas en version étroite ("etroit la quote en bas").
 *
 * Avant cela, l'accueil reprenait une maquette complète fournie
 * par l'utilisateur ("j ai ajouté une photo dans le fichier fais la
 * comme ca dans l acuueil") : bandeau de bienvenue, carte "En cours",
 * "Mes matières", compte à rebours avant l'examen régional.
 *
 * Écarts assumés par rapport à la maquette, pour ne rien inventer :
 * "Objectif : Réussir le Bac !" (BarreObjectifAccueil) et "Aujourd'hui"
 * (CarteAujourdhuiAccueil) ajoutés à la demande explicite de
 * l'utilisateur, capture d'écran de la maquette complète à l'appui
 * ("tu peux faire juste ce qui est sur cette page") — reviennent sur
 * le choix précédent de les omettre. "Aujourd'hui" garde toutefois un
 * état honnête "Bientôt disponible" plutôt que la liste de tâches
 * horodatées de la maquette ("Lire le chapitre 2 — 08:00"...) : aucune
 * table de rappels/tâches personnelles n'existe en base, ces tâches
 * sont des exemples de mise en page dans la maquette, pas de vraies
 * données à reproduire. La carte "Aujourd'hui" a depuis été remplacée
 * par "À venir" (CarteAVenirAccueil), qui lit de vraies échéances.
 *
 * Écarts encore assumés par rapport à la maquette, pour ne rien
 * inventer :
 * - Pas de cloche de notifications ni de barre de recherche
 *   fonctionnelle dans la navbar (BarreNavigation.tsx) : aucun système
 *   de notifications ni moteur de recherche du contenu n'existe encore
 *   côté serveur — les ajouter purement visuels, sans rien derrière,
 *   induirait l'élève en erreur (bouton qui ne fait rien).
 * - "Mes matières" : seul le français a un vrai pourcentage
 *   (chapitres lus/total) — les 3 autres matières n'ont pas de suivi,
 *   "Pas encore de suivi" plutôt qu'un chiffre inventé (les maquettes
 *   successives illustraient des pourcentages, aucun n'est réel).
 * - Pas de "Taux de progression" global : remplacé par le nombre de
 *   chapitres lus (TuilesStatsAccueil).
 * - Compte à rebours : cible la vraie date de l'examen régional déjà
 *   sourcée pour /calendrier, pas une date inventée.
 *
 * Pleine largeur (`max-w-5xl` retiré) — demandé explicitement par
 * l'utilisateur ("je veux que l acceuil occupe toute la page"), même
 * principe que /calendrier (pas de centrage/plafond de largeur).
 *
 * Taches de couleur décoratives en fond (grands cercles flous, très
 * faible opacité) — demandé explicitement par l'utilisateur ("ajoute
 * des couleurs sur l acceuil pour donner la vie au site") : sans ça,
 * la page était presque entièrement bleu pâle/blanc (gris en mode
 * nuit), les seules touches de couleur étant les petites pastilles
 * d'icône de "Mes matières". Mêmes couleurs que les 4 matières
 * (tokens `--color-matiere-*`, voir app/globals.css), en fond derrière
 * les cartes plutôt que dessus (toutes les cartes ont un fond opaque
 * `bg-surface`) : même technique que la vague décorative de l'accueil
 * visiteur plus bas (`fixed ... -z-10`), purement décoratif, aucune
 * donnée. Vérifié en mode clair et sombre avant de garder les mêmes
 * opacités dans les deux.
 */
async function AccueilConnecte({
  prenom,
  userId,
}: {
  prenom: string;
  userId: string;
}) {
  const [progression, nombreCours, evenements] = await Promise.all([
    recupererProgressionParOeuvre(userId),
    compterCours(FILIERE_ACTUELLE),
    recupererEvenementsEleve(),
  ]);
  const session = prochaineSession();

  const totalChapitres = progression.parOeuvre.reduce(
    (somme, o) => somme + o.totalChapitres,
    0,
  );

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute -top-24 -left-24 size-[420px] rounded-full opacity-[0.16] blur-3xl"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
        <div
          className="absolute top-32 -right-32 size-[380px] rounded-full opacity-[0.14] blur-3xl"
          style={{ backgroundColor: "var(--color-matiere-arabe)" }}
        />
        <div
          className="absolute bottom-[-160px] left-1/3 size-[460px] rounded-full opacity-[0.12] blur-3xl"
          style={{ backgroundColor: "var(--color-matiere-histoire-geo)" }}
        />
      </div>

      {/* Marges d'origine (px-6 sm:px-9), sans les marges larges du
       * reste du site : demandé pour l'accueil, le tableau de bord et le
       * calendrier ("laisse les tailles comme avant cad sans marge"). */}
      <main className="flex w-full flex-col px-6 pt-16 pb-6 sm:px-9 sm:pb-8 xl:pt-8">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="flex min-w-0 flex-col gap-6">
            {/* Entrée échelonnée des blocs au chargement — demandé par
             * l'utilisateur parmi plusieurs propositions d'élégance. Même
             * animation que les cartes de /oeuvres
             * (`animate-entree-carte`, app/globals.css), avec un décalage
             * croissant. Le délai est en style inline parce qu'il change
             * d'un bloc à l'autre — une classe Tailwind construite à
             * l'exécution ne serait pas générée. */}
            <div className="animate-entree-carte">
              <BandeauBienvenueAccueil prenom={prenom} />
            </div>
            <div className="animate-entree-carte" style={{ animationDelay: "60ms" }}>
              <TuilesStatsAccueil
                nombreCours={nombreCours}
                // +1 pour le français : `MATIERES` ne contient que les trois
                // matières ajoutées après coup (arabe, histoire-géographie,
                // éducation islamique), le français ayant ses propres pages.
                nombreMatieres={MATIERES.length + 1}
                joursAvantExamen={session ? joursAvant(session.debut) : null}
                chapitresLus={progression.totalChapitresLus}
                totalChapitres={totalChapitres}
              />
            </div>
            <div className="animate-entree-carte" style={{ animationDelay: "120ms" }}>
              <GrilleMatieresAccueil chapitresLus={progression.totalChapitresLus} totalChapitres={totalChapitres} />
            </div>
            <div className="animate-entree-carte" style={{ animationDelay: "180ms" }}>
              <BarreObjectifAccueil />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Pas de cloche de notifications (voir plus haut) : seul le
             * bouton jour/nuit de la maquette est repris. */}
            <div className="hidden justify-end xl:flex">
              <BoutonModeNuit />
            </div>
            <div className="animate-entree-carte" style={{ animationDelay: "150ms" }}>
              <CompteARebourExamenLive />
            </div>
            <div className="animate-entree-carte" style={{ animationDelay: "210ms" }}>
              <CarteMotivationAccueil />
            </div>
            <div className="animate-entree-carte" style={{ animationDelay: "270ms" }}>
              <CarteAVenirAccueil evenements={evenements} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

/**
 * Page d'accueil : /
 *
 * Pour un visiteur non connecté : présentation de tout le site en
 * darija, avec les prix (AccueilVisiteur). Pour un élève connecté :
 * accueil personnalisé (AccueilConnecte ci-dessus) — demandé
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
    return <AccueilConnecte prenom={prenom} userId={user.id} />;
  }

  // Visiteur non connecté : la page de présentation en darija, avec
  // les prix (components/AccueilVisiteur.tsx). Elle remplace l'ancienne
  // présentation en français (titre, grille des matières, trois espaces
  // de français, date de l'examen), à la demande de l'utilisateur.
  return <AccueilVisiteur />;
}
