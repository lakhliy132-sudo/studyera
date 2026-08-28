import { notFound } from "next/navigation";

import BanniereOeuvre from "@/components/BanniereOeuvre";
import OngletLexique from "@/components/OngletLexique";
import OngletLieux from "@/components/OngletLieux";
import OngletPersonnages from "@/components/OngletPersonnages";
import OngletQuiz from "@/components/OngletQuiz";
import OngletResume from "@/components/OngletResume";
import OngletSujets from "@/components/OngletSujets";
import OngletThemes from "@/components/OngletThemes";
import OngletsOeuvre, { versCleOnglet } from "@/components/OngletsOeuvre";
import { QUIZ_BOITE_A_MERVEILLES } from "@/lib/quizBoiteAMerveilles";
import {
  recupererChapitresOeuvre,
  recupererFichesOeuvre,
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
 * Tous les onglets ont un vrai contenu. Le Quiz est réservé à La Boîte
 * à Merveilles pour l'instant (voir lib/quizBoiteAMerveilles.ts) — les
 * deux autres œuvres affichent "Bientôt disponible" sur cet onglet.
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
  const fiches = ongletActif === "themes" ? await recupererFichesOeuvre(chapitres.map((c) => c.id)) : [];
  const numeroParChapitreId = new Map(chapitres.map((c) => [c.id, c.numero]));

  // Quiz saisi à la main pour La Boîte à Merveilles uniquement (voir
  // lib/quizBoiteAMerveilles.ts) : pas de contenu pour Antigone/Le
  // Dernier Jour d'un Condamné pour l'instant, message "Bientôt
  // disponible" affiché dans ce cas via le tableau vide.
  const questionsQuiz = slug === "boite-a-merveilles" ? QUIZ_BOITE_A_MERVEILLES : [];

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
          // trouvait superflu une fois sur Personnages/Lexique/Lieux/
          // Thèmes et enjeux/Sujets d'analyse (seule l'image reste).
          afficherResume={ongletActif === "resume"}
        />

        <OngletsOeuvre slug={slug} ongletActif={ongletActif} />

        <div className="py-2">
          {ongletActif === "resume" && (
            <OngletResume slug={slug} chapitres={chapitres} chapitresLusIds={chapitresLusIds} />
          )}
          {ongletActif === "personnages" && (
            <OngletPersonnages personnages={personnages} numeroParChapitreId={numeroParChapitreId} />
          )}
          {ongletActif === "lexique" && (
            <OngletLexique entrees={lexique} numeroParChapitreId={numeroParChapitreId} />
          )}
          {ongletActif === "lieux" && <OngletLieux chapitres={chapitres} />}
          {ongletActif === "sujets" && <OngletSujets sujets={sujets} />}
          {ongletActif === "themes" && (
            <OngletThemes fiches={fiches} numeroParChapitreId={numeroParChapitreId} />
          )}
          {ongletActif === "quiz" && <OngletQuiz questions={questionsQuiz} />}
        </div>
      </div>
    </main>
  );
}
