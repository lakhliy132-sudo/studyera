import CarteProductionEcrite from "@/components/CarteProductionEcrite";
import CarteProgressionAnneau from "@/components/CarteProgressionAnneau";
import CarteReprise from "@/components/CarteReprise";
import CartesMatieresTableauDeBord from "@/components/CartesMatieresTableauDeBord";
import CaseCommunaute from "@/components/CaseCommunaute";
import EnTeteTableauDeBord from "@/components/EnTeteTableauDeBord";
import TuilesTableauDeBord from "@/components/TuilesTableauDeBord";
import VagueTableauDeBord from "@/components/VagueTableauDeBord";
import ListeProgrammeOeuvres from "@/components/ListeProgrammeOeuvres";
import { deriverPrenom } from "@/lib/prenom";
import { QUOTA_QUOTIDIEN_MAX } from "@/lib/quota";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { recupererMessagesCommunaute } from "@/lib/supabase/communaute";
import { compterCoursParCategorie } from "@/lib/supabase/contenu";
import { creerClientServeur } from "@/lib/supabase/server";
import {
  recupererProgressionParOeuvre,
  recupererQuotaRestant,
  recupererRepriseLecture,
  recupererSerieJours,
  recupererStatsCopies,
} from "@/lib/supabase/tableauDeBord";

/**
 * Page protégée : /tableau-de-bord
 *
 * L'accès est garanti par le middleware (middleware.ts).
 *
 * Refonte complète demandée explicitement par l'utilisateur ("change
 * moi le tableau de bord completement fais le de ta part"), confirmée
 * malgré des modifications non enregistrées d'une autre session sur
 * cette même page (autorisation explicite obtenue avant d'écraser ce
 * travail en cours).
 *
 * Remplace l'ancien design "papier" (police Fraunces, palette dédiée
 * `.tableau-de-bord`/`--tdb-*` dans app/globals.css, reprise fidèle
 * d'un modèle fourni par l'utilisateur lors d'une session précédente)
 * par le langage visuel déjà en place sur le reste du site depuis les
 * refontes récentes (/calendrier, /matieres, /francais...) : cartes
 * `rounded-[24px]` / `shadow-sm` / badges `bg-primary-tint`, police
 * serif Playfair déjà utilisée partout ailleurs. Choix fait librement
 * ("fais le de ta part") plutôt que d'après un nouveau modèle fourni.
 *
 * Unifie au passage le tableau de bord avec le reste du site : la
 * palette `--tdb-*` séparée était un gap documenté à plusieurs
 * reprises (ne s'adaptait pas au mode nuit) — en repartant des tokens
 * globaux (`--color-*`), le tableau de bord bascule désormais
 * correctement en mode sombre comme toutes les autres pages.
 *
 * Toutes les données restent réelles (Supabase), rien n'est laissé en
 * donnée fictive : la "série de jours" est calculée depuis `activite`
 * (`recupererSerieJours`), la note moyenne est réelle plutôt qu'une
 * "dernière correction" inventée.
 */
export default async function PageTableauDeBord() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id ?? null;

  const { data: profil } = userId
    ? await supabase
        .from("profils")
        .select("nom_complet")
        .eq("id", userId)
        .maybeSingle()
    : { data: null };

  const [
    quotaRestant,
    progressionOeuvres,
    statsCopies,
    reprise,
    serie,
    coursParMatiere,
    messagesCommunaute,
  ] = await Promise.all([
    recupererQuotaRestant(userId),
    recupererProgressionParOeuvre(userId),
    recupererStatsCopies(userId),
    recupererRepriseLecture(userId),
    recupererSerieJours(userId),
    compterCoursParCategorie(FILIERE_ACTUELLE),
    recupererMessagesCommunaute(3),
  ]);

  const prenom = deriverPrenom(
    profil?.nom_complet ?? null,
    user?.email ?? null,
  );
  const totalChapitres = progressionOeuvres.parOeuvre.reduce(
    (somme, o) => somme + o.totalChapitres,
    0,
  );

  return (
    <>
      {/* Fond coloré de la page — demandé par l'utilisateur ("dans le
       * tableau de bord fais l arriere plan du couleur") : un voile
       * violet très pâle, assorti aux cadres de la page, avec deux
       * halos diffus. Construit sur les tokens du site, donc il suit le
       * mode nuit au lieu de plaquer un pastel fixe. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--color-background) 0%, color-mix(in srgb, var(--color-matiere-islamique) 8%, var(--color-background)) 100%)",
        }}
      >
        <div
          className="absolute -top-28 -left-28 size-[420px] rounded-full opacity-[0.16] blur-3xl"
          style={{ backgroundColor: "var(--color-matiere-islamique)" }}
        />
        <div
          className="absolute top-1/3 -right-32 size-[440px] rounded-full opacity-[0.12] blur-3xl"
          style={{ backgroundColor: "var(--color-matiere-histoire-geo)" }}
        />

        {/* Vague en haut de page, qui grandit au défilement — voir
         * components/VagueTableauDeBord.tsx. */}
        <VagueTableauDeBord />
      </div>

      {/* Pleine largeur, comme l accueil : une colonne centree laissait
       * de larges bandes vides sur les cotes. */}
      <main className="flex w-full flex-col gap-6 px-6 py-10 sm:px-9">
        <EnTeteTableauDeBord prenom={prenom} serie={serie} />

        {reprise && <CarteReprise reprise={reprise} />}

        <CartesMatieresTableauDeBord coursParMatiere={coursParMatiere} />

        <TuilesTableauDeBord
          chapitresLus={progressionOeuvres.totalChapitresLus}
          totalChapitres={totalChapitres}
          copiesCorrigees={statsCopies.copiesCorrigees}
          noteMoyenne={statsCopies.noteMoyenne}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ListeProgrammeOeuvres parOeuvre={progressionOeuvres.parOeuvre} />
          </div>
          <div className="flex flex-col gap-6">
            <CarteProgressionAnneau
              chapitresLus={progressionOeuvres.totalChapitresLus}
              totalChapitres={totalChapitres}
            />
            <CarteProductionEcrite
              quotaRestant={quotaRestant}
              quotaMax={QUOTA_QUOTIDIEN_MAX}
              copiesCorrigees={statsCopies.copiesCorrigees}
              noteMoyenne={statsCopies.noteMoyenne}
            />
            <CaseCommunaute messages={messagesCommunaute} />
          </div>
        </div>
      </main>
    </>
  );
}
