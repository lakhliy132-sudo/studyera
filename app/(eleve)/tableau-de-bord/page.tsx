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
 * Reconstruite sur un modèle complet fourni par l'utilisateur ("fais
 * moi comme ca mais ajoute des modif bien"), puis REPRISE FIDÈLEMENT
 * (palette "papier", police Fraunces, ligne rouge en marge) après un
 * premier essai jugé trop éloigné du modèle fourni ("tu peux modifier
 * le design j ai pas aimé comme ca" / "tout") — la première version
 * adaptait la palette/police aux tokens déjà en place ailleurs sur le
 * site, celle-ci reprend directement les couleurs/police du modèle
 * fourni, mais dans un espace de tokens à part (`.tableau-de-bord`,
 * voir app/globals.css) qui ne change RIEN à l'apparence des autres
 * pages du site.
 *
 * Toutes les données restent réelles (Supabase), rien n'est laissé en
 * donnée fictive : pas d'"extrait" littéral du texte (jamais rempli en
 * base, présenté comme un résumé, voir CarteReprise.tsx), pas de
 * "dernière correction" inventée (remplacée par la note moyenne
 * réelle), la "série de jours" est calculée depuis `activite` (voir
 * `recupererSerieJours`), pas codée en dur.
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
    <div className="tableau-de-bord min-h-screen">
      <main className="relative mx-auto max-w-[1000px] px-6 pt-[52px] pb-28 sm:px-9">
        {/* Ligne verticale rouge en fondu, en marge — décoration reprise
         * telle quelle du modèle fourni ("stu-rule"). */}
        <span
          aria-hidden="true"
          className="absolute top-[34px] bottom-[60px] left-3.5 hidden w-px opacity-40 sm:block"
          style={{ backgroundImage: "linear-gradient(var(--tdb-red), rgba(200,64,44,0) 92%)" }}
        />

        <div className="flex flex-col gap-2 sm:pl-[54px]">
          <p className="mb-4 flex items-center gap-2 [font-family:var(--tdb-font-mono)] text-[11px] tracking-[0.14em] text-[var(--tdb-mute)] uppercase">
            <span
              className="size-1.5 rounded-full"
              style={{ backgroundColor: "var(--tdb-green)", boxShadow: "0 0 0 3px rgba(29,122,94,0.16)" }}
            />
            {joursCourant()}
            {serie > 0 && ` · ${serie} jour${serie > 1 ? "s" : ""} de suite`}
          </p>
          <h1 className="mb-11 [font-family:var(--tdb-font-serif)] text-[clamp(32px,5.2vw,54px)] leading-[1.06] font-semibold tracking-tight text-[var(--tdb-ink)]">
            Bonjour {prenom}.
            {reprise && (
              <>
                <br />
                <em className="text-[var(--tdb-blue)] italic">
                  {reprise.estRecommandation ? "Découvrons" : "Reprenons"} {reprise.oeuvreTitreFr}.
                </em>
              </>
            )}
          </h1>

          {reprise && <CarteReprise reprise={reprise} />}

          <div className="mt-[18px] grid grid-cols-1 gap-[18px] sm:grid-cols-[1.5fr_1fr]">
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
        </div>
      </main>
    </div>
  );
}
