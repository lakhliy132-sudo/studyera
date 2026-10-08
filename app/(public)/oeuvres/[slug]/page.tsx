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
import type { FicheLecture } from "@/lib/ficheLectureBoiteAMerveilles";
import { FICHES_LECTURE_PAR_SLUG } from "@/lib/fichesLecture";
import { PERSONNAGES_PAR_CHAPITRE_BOITE_A_MERVEILLES } from "@/lib/personnagesParChapitre";
import { QUIZ_PAR_SCENE_ANTIGONE } from "@/lib/quizAntigone";
import { QUIZ_PAR_CHAPITRE, type QuestionQuiz } from "@/lib/quizBoiteAMerveilles";
import { QUIZ_DERNIER_JOUR_CONDAMNE } from "@/lib/quizDernierJourCondamne";
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
 * Tous les onglets ont désormais un vrai contenu pour les 3 œuvres
 * (Quiz : `QUIZ_PAR_SLUG` ci-dessous, voir lib/quizBoiteAMerveilles.ts,
 * lib/quizAntigone.ts et lib/quizDernierJourCondamne.ts ; Fiche de
 * lecture : `FICHES_LECTURE_PAR_SLUG` ci-dessous, voir
 * lib/ficheLecture*.ts).
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
  // Chapitre par id de chapitre — pour les badges "Chapitre N"/"Scène N"
  // de OngletPersonnages/OngletLexique (voir lib/uniteChapitre.ts).
  const chapitreParId = new Map(chapitres.map((c) => [c.id, c]));

  // Quiz saisi à la main, chapitre/scène par chapitre/scène (voir
  // lib/quizBoiteAMerveilles.ts, lib/quizAntigone.ts et
  // lib/quizDernierJourCondamne.ts).
  const QUIZ_PAR_SLUG: Record<string, Record<number, QuestionQuiz[]>> = {
    "boite-a-merveilles": QUIZ_PAR_CHAPITRE,
    antigone: QUIZ_PAR_SCENE_ANTIGONE,
    "dernier-jour-condamne": QUIZ_DERNIER_JOUR_CONDAMNE,
  };
  const questionsParChapitreQuiz: Record<number, QuestionQuiz[]> = QUIZ_PAR_SLUG[slug] ?? {};

  // Fiches de lecture saisies à la main (lib/fichesLecture.ts).
  const ficheLecture: FicheLecture | null = FICHES_LECTURE_PAR_SLUG[slug] ?? null;

  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-4 px-6 pt-6 pb-16 sm:px-9 lg:px-16 xl:px-24 2xl:px-40">
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
            <OngletResume
              slug={slug}
              chapitres={chapitres}
              chapitresLusIds={chapitresLusIds}
              connecte={Boolean(user)}
              questionsParChapitre={Object.fromEntries(
                Object.entries(questionsParChapitreQuiz).map(([numero, questions]) => [numero, questions.length]),
              )}
              personnagesParChapitre={
                slug === "boite-a-merveilles"
                  ? Object.fromEntries(
                      Object.entries(PERSONNAGES_PAR_CHAPITRE_BOITE_A_MERVEILLES).map(([numero, noms]) => [
                        numero,
                        noms.length,
                      ]),
                    )
                  : undefined
              }
            />
          )}
          {ongletActif === "fiche" && (
            <OngletFicheLecture oeuvre={oeuvre} fiche={ficheLecture} />
          )}
          {ongletActif === "personnages" && (
            <OngletPersonnages slug={slug} personnages={personnages} chapitreParId={chapitreParId} />
          )}
          {ongletActif === "lexique" && (
            <OngletLexique slug={slug} entrees={lexique} chapitreParId={chapitreParId} />
          )}
          {ongletActif === "lieux" && <OngletLieux slug={slug} chapitres={chapitres} />}
          {ongletActif === "sujets" && <OngletSujets sujets={sujets} />}
          {ongletActif === "quiz" && (
            <OngletQuiz slug={slug} chapitres={chapitres} questionsParChapitre={questionsParChapitreQuiz} />
          )}
        </div>
      </div>
    </main>
  );
}
