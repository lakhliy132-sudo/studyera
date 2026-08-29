import BlocAnnonces from "@/components/BlocAnnonces";
import BlocDernieresActivites from "@/components/BlocDernieresActivites";
import BlocProgression from "@/components/BlocProgression";
import BlocRedaction from "@/components/BlocRedaction";
import BlocReprendre from "@/components/BlocReprendre";
import { recupererAnnonces } from "@/lib/supabase/communication";
import { creerClientServeur } from "@/lib/supabase/server";
import {
  recupererActivitesRecentes,
  recupererChapitreRecommande,
  recupererProgressionParOeuvre,
  recupererQuotaRestant,
  recupererStatsCopies,
} from "@/lib/supabase/tableauDeBord";

/** Nombre d'annonces gardées pour le tableau de bord : seulement la
 * plus récente est affichée par `BlocAnnonces`, 1 suffit donc à
 * charger. */
const NOMBRE_ANNONCES_TABLEAU_DE_BORD = 1;

/** Nombre de lignes affichées dans le bloc "Dernières activités" (pas
 * plus, sinon la page devient un journal — voir /activite pour la
 * liste complète). */
const NOMBRE_ACTIVITES_RECENTES = 4;

/**
 * Page protégée : /tableau-de-bord
 *
 * L'accès est garanti par le middleware (middleware.ts), qui redirige
 * vers /connexion toute personne non authentifiée avant même que cette
 * page ne s'exécute. On peut donc supposer ici qu'un utilisateur existe.
 *
 * Session 5 : blocs empilés dans un ordre fixe (mobile d'abord, pas de
 * réagencement en grille au-delà d'un certain écran) — l'action la
 * plus probable en premier, les chiffres en dernier. Voir ETAT.md pour
 * le détail de la règle "aucun bloc vide" appliquée à chacun.
 * `BlocAnnonces` (communication CEO/élèves) ajouté en session
 * ultérieure, entre Rédaction et Progression.
 */
export default async function PageTableauDeBord() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id ?? null;

  const [activitesRecentes, quotaRestant, progressionOeuvres, statsCopies, annonces] = await Promise.all([
    recupererActivitesRecentes(userId, NOMBRE_ACTIVITES_RECENTES),
    recupererQuotaRestant(userId),
    recupererProgressionParOeuvre(userId),
    recupererStatsCopies(userId),
    recupererAnnonces(NOMBRE_ANNONCES_TABLEAU_DE_BORD),
  ]);

  const derniereActivite = activitesRecentes[0] ?? null;
  const dernierChapitre = derniereActivite?.url
    ? { url: derniereActivite.url, titre: derniereActivite.titre }
    : null;
  // Recommandation calculée seulement si nécessaire : évite une requête
  // supplémentaire pour un élève qui a déjà un chapitre à reprendre.
  const recommandation = dernierChapitre ? null : await recupererChapitreRecommande();

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-8">
      <h1 className="text-xl font-semibold text-foreground">Tableau de bord</h1>

      <BlocReprendre dernierChapitre={dernierChapitre} recommandation={recommandation} />
      <BlocRedaction quotaRestant={quotaRestant} />
      <BlocAnnonces annonces={annonces} />
      <BlocProgression
        chapitresLus={progressionOeuvres.totalChapitresLus}
        copiesCorrigees={statsCopies.copiesCorrigees}
        noteMoyenne={statsCopies.noteMoyenne}
        parOeuvre={progressionOeuvres.parOeuvre}
      />
      <BlocDernieresActivites activites={activitesRecentes} />
    </main>
  );
}
