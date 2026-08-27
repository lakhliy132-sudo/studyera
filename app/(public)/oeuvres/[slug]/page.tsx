import { notFound } from "next/navigation";

import BanniereOeuvre from "@/components/BanniereOeuvre";
import OngletLexique from "@/components/OngletLexique";
import OngletLieux from "@/components/OngletLieux";
import OngletPersonnages from "@/components/OngletPersonnages";
import OngletResume from "@/components/OngletResume";
import OngletSujets from "@/components/OngletSujets";
import OngletsOeuvre, { versCleOnglet } from "@/components/OngletsOeuvre";
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
 * /oeuvres/[slug] — bannière (résumé bilingue toujours visible, quel
 * que soit l'onglet actif), barre d'onglets, contenu de l'onglet
 * actif. Reprend la maquette de référence (page-oeuvre.html) : fond de
 * page bleu pâle, bannière et onglets en cartes blanches posées
 * dessus, contenu centré à 1180px maximum.
 *
 * Pas de sélecteur des 3 œuvres ici (retiré à la demande explicite de
 * l'utilisateur une fois sur la page d'une œuvre précise) — pour
 * changer d'œuvre, retour à /oeuvres via le fil d'Ariane/la nav.
 *
 * Onglets Résumé, Personnages et Lexique ont un vrai contenu ; Thèmes
 * et enjeux/Sujets d'analyse affichent encore un message temporaire.
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
            <p className="rounded-md border border-dashed border-border-strong bg-background p-12 text-center text-muted-foreground">
              Bientôt disponible.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
