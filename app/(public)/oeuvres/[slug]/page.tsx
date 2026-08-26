import Link from "next/link";
import { notFound } from "next/navigation";

import BarreProgression from "@/components/BarreProgression";
import CarteBilingue from "@/components/CarteBilingue";
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
 * contenu de l'onglet actif.
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

      <header className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-4 pt-8 pb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground md:text-3xl">
            {oeuvre.titre_fr}
          </h1>
          {oeuvre.titre_ar && (
            <p dir="rtl" lang="ar" className="font-arabe text-lg leading-loose text-foreground">
              {oeuvre.titre_ar}
            </p>
          )}
          {oeuvre.auteur && (
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-sm font-medium text-primary">
              <span aria-hidden="true">✎</span> {oeuvre.auteur}
            </p>
          )}
        </div>

        {/* Pas de progression personnelle à montrer à un visiteur non
            connecté : le bloc n'apparaît que pour un utilisateur
            authentifié (voir aussi BarreProgression, qui se masque déjà
            elle-même si l'œuvre n'a aucun chapitre). */}
        {user && <BarreProgression lus={chapitresLusIds.size} total={chapitres.length} />}

        <CarteBilingue
          contenuFr={oeuvre.essentiel_fr ?? "Bientôt disponible."}
          contenuAr={oeuvre.essentiel_ar ?? "قريبًا."}
        />

        {premierChapitre && (
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href={`/oeuvres/${slug}/${premierChapitre.numero}`}
              className="rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Lire le texte intégral →
            </Link>
            <Link
              href={`/oeuvres/${slug}/${premierChapitre.numero}`}
              className="rounded-md border border-primary px-4 py-2 text-center text-sm font-medium text-primary hover:bg-primary-tint"
            >
              Lecteur bilingue →
            </Link>
          </div>
        )}
      </header>

      <OngletsOeuvre slug={slug} ongletActif={ongletActif} />

      <div className="mx-auto w-full max-w-4xl px-4 py-8">
        {ongletActif === "resume" ? (
          <OngletResume slug={slug} chapitres={chapitres} chapitresLusIds={chapitresLusIds} />
        ) : (
          <p className="text-muted-foreground">Bientôt disponible.</p>
        )}
      </div>
    </main>
  );
}
