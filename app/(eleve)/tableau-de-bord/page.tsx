import BlocAnnonces from "@/components/BlocAnnonces";
import BlocDernieresActivites from "@/components/BlocDernieresActivites";
import CarteProductionEcrite from "@/components/CarteProductionEcrite";
import CarteProgressionAnneau from "@/components/CarteProgressionAnneau";
import CarteReprise from "@/components/CarteReprise";
import ListeProgrammeOeuvres from "@/components/ListeProgrammeOeuvres";
import { deriverPrenom } from "@/lib/prenom";
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

const NOMBRE_ANNONCES = 1;
const NOMBRE_ACTIVITES_RECENTES = 5;

function joursCourant() {
  return new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
}

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
    ? await supabase.from("profils").select("nom_complet").eq("id", userId).maybeSingle()
    : { data: null };

  const [activitesRecentes, quotaRestant, progressionOeuvres, statsCopies, annonces, reprise, serie] =
    await Promise.all([
      recupererActivitesRecentes(userId, NOMBRE_ACTIVITES_RECENTES),
      recupererQuotaRestant(userId),
      recupererProgressionParOeuvre(userId),
      recupererStatsCopies(userId),
      recupererAnnonces(NOMBRE_ANNONCES),
      recupererRepriseLecture(userId),
      recupererSerieJours(userId),
    ]);

  const prenom = deriverPrenom(profil?.nom_complet ?? null, user?.email ?? null);
  const totalChapitres = progressionOeuvres.parOeuvre.reduce((somme, o) => somme + o.totalChapitres, 0);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10 sm:px-9">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground capitalize">{joursCourant()}</p>
          <h1 className="mt-1 font-serif text-4xl font-bold tracking-tight text-ink">
            Bonjour <span className="text-primary">{prenom}</span> 👋
          </h1>
        </div>
        {serie > 0 && (
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-tint px-4 py-2 text-sm font-semibold text-primary">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            {serie} jour{serie > 1 ? "s" : ""} de suite
          </span>
        )}
      </header>

      {reprise && <CarteReprise reprise={reprise} />}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <CarteProductionEcrite
          quotaRestant={quotaRestant}
          quotaMax={QUOTA_QUOTIDIEN_MAX}
          copiesCorrigees={statsCopies.copiesCorrigees}
          noteMoyenne={statsCopies.noteMoyenne}
        />
        <CarteProgressionAnneau chapitresLus={progressionOeuvres.totalChapitresLus} totalChapitres={totalChapitres} />
      </div>

      <ListeProgrammeOeuvres parOeuvre={progressionOeuvres.parOeuvre} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <BlocDernieresActivites activites={activitesRecentes} />
        <BlocAnnonces annonces={annonces} />
      </div>
    </main>
  );
}
