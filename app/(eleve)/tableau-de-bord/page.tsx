import BlocAnnonces from "@/components/BlocAnnonces";
import BlocDernieresActivites from "@/components/BlocDernieresActivites";
import CarteProductionEcrite from "@/components/CarteProductionEcrite";
import CarteProgressionAnneau from "@/components/CarteProgressionAnneau";
import CarteReprise from "@/components/CarteReprise";
import ListeProgrammeOeuvres from "@/components/ListeProgrammeOeuvres";
import { QUOTA_QUOTIDIEN_MAX } from "@/lib/quota";
import { recupererAnnonces } from "@/lib/supabase/communication";
import { creerClientServeur } from "@/lib/supabase/server";
import {
  recupererActivitesRecentes,
  recupererProgressionParOeuvre,
  recupererQuotaRestant,
  recupererRepriseLecture,
  recupererSerieJours,
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

function joursCourant() {
  return new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
}

/** Premier prénom déduit de `nom_complet` (premier mot), avec repli sur
 * la partie locale de l'email si `nom_complet` est vide — arrive pour
 * un compte Google dont les métadonnées n'ont pas encore été
 * propagées vers `profils`, voir la policy de la migration
 * 20260825120000_creation_profils.sql. Jamais de "Bonjour undefined". */
function deriverPrenom(nomComplet: string | null, email: string | null): string {
  const premierMot = nomComplet?.trim().split(/\s+/)[0];
  if (premierMot) return premierMot;
  const local = email?.split("@")[0];
  return local ? local.charAt(0).toUpperCase() + local.slice(1) : "toi";
}

/**
 * Page protégée : /tableau-de-bord
 *
 * L'accès est garanti par le middleware (middleware.ts), qui redirige
 * vers /connexion toute personne non authentifiée avant même que cette
 * page ne s'exécute. On peut donc supposer ici qu'un utilisateur existe.
 *
 * Réécrite sur un modèle complet fourni par l'utilisateur ("fais moi
 * comme ca mais ajoute des modif bien") : structure et esprit repris
 * (accroche du jour + série, "page de cahier" pour la reprise de
 * lecture, carte focus rouge pour la correction, anneau de
 * progression, liste du programme, communication), mais adaptée au
 * système de design existant du site plutôt qu'un système parallèle :
 * les tokens de couleur déjà en place (--color-ink/--color-primary/
 * --color-erreur/--color-validation) au lieu d'une palette "papier"
 * séparée, la police serif déjà en place (Playfair Display) au lieu
 * d'en ajouter une seconde, uniquement `--font-mono` (IBM Plex Mono)
 * ajouté pour les petites étiquettes en capitales — cohérent avec la
 * police arabe déjà de la même famille. Toutes les données sont
 * réelles (Supabase), rien n'est laissé en donnée fictive : pas
 * d'"extrait" littéral du texte (jamais rempli en base, présenté comme
 * un résumé, voir CarteReprise.tsx), pas de "dernière correction"
 * inventée (remplacée par la note moyenne réelle, voir
 * CarteProductionEcrite.tsx), la "série de jours" est calculée depuis
 * `activite` (voir `recupererSerieJours`), pas codée en dur.
 */
export default async function PageTableauDeBord() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id ?? null;

  const { data: profil } = userId
    ? await supabase.from("profils").select("nom_complet").eq("id", userId).maybeSingle()
    : { data: null };

  const [activitesRecentes, quotaRestant, progressionOeuvres, statsCopies, annonces, reprise, serie] =
    await Promise.all([
      recupererActivitesRecentes(userId, NOMBRE_ACTIVITES_RECENTES),
      recupererQuotaRestant(userId),
      recupererProgressionParOeuvre(userId),
      recupererStatsCopies(userId),
      recupererAnnonces(NOMBRE_ANNONCES_TABLEAU_DE_BORD),
      recupererRepriseLecture(userId),
      recupererSerieJours(userId),
    ]);

  const prenom = deriverPrenom(profil?.nom_complet ?? null, user?.email ?? null);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-4 py-10 sm:px-6">
      <p className="mb-4 flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
        <span className="size-1.5 rounded-full bg-validation shadow-[0_0_0_3px_rgba(15,122,87,0.16)]" />
        {joursCourant()}
        {serie > 0 && ` · ${serie} jour${serie > 1 ? "s" : ""} de suite`}
      </p>
      <h1 className="mb-6 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-[52px]">
        Bonjour {prenom}.
        {reprise && (
          <>
            <br />
            <em className="text-primary italic">
              {reprise.estRecommandation ? "Découvrons" : "Reprenons"} {reprise.oeuvreTitreFr}.
            </em>
          </>
        )}
      </h1>

      {reprise && <CarteReprise reprise={reprise} />}

      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-[1.5fr_1fr]">
        <CarteProductionEcrite
          quotaRestant={quotaRestant}
          quotaMax={QUOTA_QUOTIDIEN_MAX}
          copiesCorrigees={statsCopies.copiesCorrigees}
          noteMoyenne={statsCopies.noteMoyenne}
        />
        <CarteProgressionAnneau
          chapitresLus={progressionOeuvres.totalChapitresLus}
          totalChapitres={progressionOeuvres.parOeuvre.reduce((somme, o) => somme + o.totalChapitres, 0)}
        />
      </div>

      <ListeProgrammeOeuvres parOeuvre={progressionOeuvres.parOeuvre} />
      <BlocAnnonces annonces={annonces} />
      <BlocDernieresActivites activites={activitesRecentes} />
    </main>
  );
}
