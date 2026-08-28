import { notFound } from "next/navigation";

import BanniereOeuvre from "@/components/BanniereOeuvre";
import OngletFicheLecture from "@/components/OngletFicheLecture";
import OngletLexique from "@/components/OngletLexique";
import OngletLieux from "@/components/OngletLieux";
import OngletPersonnages from "@/components/OngletPersonnages";
import OngletQuiz from "@/components/OngletQuiz";
import OngletResume from "@/components/OngletResume";
import OngletSujets from "@/components/OngletSujets";
import OngletsOeuvre, { versCleOnglet } from "@/components/OngletsOeuvre";
import { FICHE_LECTURE_BOITE_A_MERVEILLES, type FicheLecture } from "@/lib/ficheLectureBoiteAMerveilles";
import { QUIZ_PAR_CHAPITRE, type QuestionQuiz } from "@/lib/quizBoiteAMerveilles";
import {
  recupererChapitresOeuvre,
  recupererLexiqueOeuvre,
  recupererOeuvreParSlug,
  recupererPersonnagesOeuvre,
  recupererSujetsOeuvre,
} from "@/lib/supabase/contenu";
import { recupererProgressionOeuvre } from "@/lib/supabase/progression";
import { creerClientServeur } from "@/lib/supabase/server";

interface PagePropsOeuvre {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ onglet?: string | string[] }>;
}

/**
 * /oeuvres/[slug] — bannière, barre d'onglets, contenu de l'onglet
 * actif. Reprend la maquette de référence (page-oeuvre.html) : fond de
 * page bleu pâle, bannière et onglets en cartes blanches posées
 * dessus, contenu centré à 1180px maximum.
 *
 * Le résumé bilingue de la bannière ne s'affiche que sur l'onglet
 * Chapitres (`BanniereOeuvre` prop `afficherResume`) — demandé
 * explicitement par l'utilisateur : sur les autres onglets, seule
 * l'image de la bannière reste visible.
 *
 * Pas de sélecteur des 3 œuvres ici (retiré à la demande explicite de
 * l'utilisateur une fois sur la page d'une œuvre précise) — pour
 * changer d'œuvre, retour à /oeuvres via le fil d'Ariane/la nav.
 *
 * Tous les onglets ont un vrai contenu. Le Quiz et la Fiche de lecture
 * sont réservés à La Boîte à Merveilles pour l'instant (voir
 * lib/quizBoiteAMerveilles.ts et lib/ficheLectureBoiteAMerveilles.ts)
 * — les deux autres œuvres affichent "Bientôt disponible" sur ces
 * onglets.
 *
 * Pas d'onglet "Thèmes et enjeux" ici : retiré à la demande explicite
 * de l'utilisateur. `OngletThemes.tsx` et `recupererFichesOeuvre`
 * (lib/supabase/contenu.ts) restent dans le code, juste plus
 * référencés depuis cette page.
 */
export default async function PageOeuvre({ params, searchParams }: PagePropsOeuvre) {
  const { slug } = await params;
  const { onglet } = await searchParams;
  const ongletActif = versCleOnglet(onglet);

  const oeuvre = await recupererOeuvreParSlug(slug);
  if (!oeuvre) notFound();

  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const chapitres = await recupererChapitresOeuvre(oeuvre.id);
  const chapitresLusIds = await recupererProgressionOeuvre(
    user?.id ?? null,
    chapitres.map((c) => c.id),
  );

  const premierChapitre = chapitres[0] ?? null;

  // Chargés seulement pour l'onglet actif : aucune raison d'interroger
  // `personnages`/`lexique` quand un visiteur consulte l'onglet Chapitres.
  const personnages = ongletActif === "personnages" ? await recupererPersonnagesOeuvre(oeuvre.id) : [];
  const lexique =
    ongletActif === "lexique" ? await recupererLexiqueOeuvre(chapitres.map((c) => c.id)) : [];
  const sujets = ongletActif === "sujets" ? await recupererSujetsOeuvre(oeuvre.id) : [];
  const numeroParChapitreId = new Map(chapitres.map((c) => [c.id, c.numero]));

  // Quiz saisi à la main pour La Boîte à Merveilles uniquement, 5
  // questions par chapitre (voir lib/quizBoiteAMerveilles.ts) : pas de
  // contenu pour Antigone/Le Dernier Jour d'un Condamné pour l'instant,
  // message "Bientôt disponible" affiché dans ce cas via l'objet vide.
  const questionsParChapitreQuiz: Record<number, QuestionQuiz[]> =
    slug === "boite-a-merveilles" ? QUIZ_PAR_CHAPITRE : {};

  // Fiche de lecture saisie à la main pour La Boîte à Merveilles
  // uniquement (voir lib/ficheLectureBoiteAMerveilles.ts) : même
  // logique que le quiz, "Bientôt disponible" pour les deux autres
  // œuvres via `null`.
  const ficheLecture: FicheLecture | null =
    slug === "boite-a-merveilles" ? FICHE_LECTURE_BOITE_A_MERVEILLES : null;

  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-6 pt-6 pb-16">
        <BanniereOeuvre
          slug={slug}
          oeuvre={oeuvre}
          premierChapitre={premierChapitre}
          // Pas de progression personnelle à montrer à un visiteur non
          // connecté (BarreProgression se masque de toute façon si
          // l'œuvre n'a aucun chapitre).
          progression={user ? { lus: chapitresLusIds.size, total: chapitres.length } : null}
          // Le résumé essentiel fr/ar ne s'affiche que sur l'onglet
          // Chapitres — demandé explicitement par l'utilisateur, qui le
          // trouvait superflu une fois sur les autres onglets (seule
          // l'image reste).
          afficherResume={ongletActif === "resume"}
        />

        <OngletsOeuvre slug={slug} ongletActif={ongletActif} />

        <div className="py-2">
          {ongletActif === "resume" && (
            <OngletResume slug={slug} chapitres={chapitres} chapitresLusIds={chapitresLusIds} />
          )}
          {ongletActif === "fiche" && (
            <OngletFicheLecture oeuvre={oeuvre} fiche={ficheLecture} />
          )}
          {ongletActif === "personnages" && (
            <OngletPersonnages personnages={personnages} numeroParChapitreId={numeroParChapitreId} />
          )}
          {ongletActif === "lexique" && (
            <OngletLexique entrees={lexique} numeroParChapitreId={numeroParChapitreId} />
          )}
          {ongletActif === "lieux" && <OngletLieux chapitres={chapitres} />}
          {ongletActif === "sujets" && <OngletSujets sujets={sujets} />}
          {ongletActif === "quiz" && (
            <OngletQuiz chapitres={chapitres} questionsParChapitre={questionsParChapitreQuiz} />
          )}
        </div>
      </div>
    </main>
  );
}
