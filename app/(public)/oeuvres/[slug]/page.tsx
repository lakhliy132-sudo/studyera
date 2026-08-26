import { notFound } from "next/navigation";

import BanniereOeuvre from "@/components/BanniereOeuvre";
import OngletResume from "@/components/OngletResume";
import OngletsOeuvre, { versCleOnglet } from "@/components/OngletsOeuvre";
import SelecteurOeuvres from "@/components/SelecteurOeuvres";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import {
  recupererChapitresOeuvre,
  recupererOeuvreParSlug,
  recupererOeuvresParFiliere,
} from "@/lib/supabase/contenu";
import { recupererProgressionOeuvre } from "@/lib/supabase/progression";
import { creerClientServeur } from "@/lib/supabase/server";

interface PagePropsOeuvre {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ onglet?: string | string[] }>;
}

/**
 * /oeuvres/[slug] — sélecteur d'œuvre, bannière (résumé bilingue
 * toujours visible, quel que soit l'onglet actif), barre d'onglets,
 * contenu de l'onglet actif. Reprend la maquette de référence
 * (page-oeuvre.html) : fond de page bleu pâle, bannière et onglets en
 * cartes blanches posées dessus, contenu centré à 1180px maximum.
 *
 * Seul l'onglet Résumé a un vrai contenu pour l'instant : les autres
 * affichent un message temporaire.
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

  const [oeuvresFiliere, chapitres] = await Promise.all([
    recupererOeuvresParFiliere(FILIERE_ACTUELLE),
    recupererChapitresOeuvre(oeuvre.id),
  ]);
  const chapitresLusIds = await recupererProgressionOeuvre(
    user?.id ?? null,
    chapitres.map((c) => c.id),
  );

  const premierChapitre = chapitres[0] ?? null;

  return (
    <main className="flex flex-col">
      <SelecteurOeuvres oeuvres={oeuvresFiliere} slugActif={slug} />

      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-4 px-6 pb-16">
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
          {ongletActif === "resume" ? (
            <OngletResume slug={slug} chapitres={chapitres} chapitresLusIds={chapitresLusIds} />
          ) : (
            <p className="rounded-md border border-dashed border-border-strong bg-surface p-11 text-center text-muted-foreground">
              Bientôt disponible.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
