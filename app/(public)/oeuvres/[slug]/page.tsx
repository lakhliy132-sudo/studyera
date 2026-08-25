import { notFound } from "next/navigation";

import OngletResume from "@/components/OngletResume";
import OngletsOeuvre, { versCleOnglet } from "@/components/OngletsOeuvre";
import {
  recupererChapitresOeuvre,
  recupererOeuvreParSlug,
} from "@/lib/supabase/contenu";

interface PagePropsOeuvre {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ onglet?: string | string[] }>;
}

/**
 * /oeuvres/[slug] — en-tête de l'œuvre, barre d'onglets, contenu de
 * l'onglet actif (lu depuis le query param `onglet`).
 *
 * Seul l'onglet Résumé a un vrai contenu pour l'instant (étape 1 de la
 * session) : les autres affichent un message temporaire, remplacé à
 * l'étape 4.
 */
export default async function PageOeuvre({ params, searchParams }: PagePropsOeuvre) {
  const { slug } = await params;
  const { onglet } = await searchParams;
  const ongletActif = versCleOnglet(onglet);

  const oeuvre = await recupererOeuvreParSlug(slug);
  if (!oeuvre) notFound();

  const chapitres = await recupererChapitresOeuvre(oeuvre.id);

  return (
    <main className="flex flex-col">
      <header className="mx-auto w-full max-w-4xl px-4 pt-8 pb-4">
        <h1 className="text-2xl font-semibold text-foreground">{oeuvre.titre_fr}</h1>
        {oeuvre.titre_ar && (
          <p dir="rtl" lang="ar" className="font-arabe text-lg leading-loose text-foreground">
            {oeuvre.titre_ar}
          </p>
        )}
        {oeuvre.auteur && <p className="mt-1 text-muted-foreground">{oeuvre.auteur}</p>}
      </header>

      <OngletsOeuvre slug={slug} ongletActif={ongletActif} />

      <div className="mx-auto w-full max-w-4xl px-4 py-8">
        {ongletActif === "resume" ? (
          <OngletResume oeuvre={oeuvre} chapitres={chapitres} />
        ) : (
          <p className="text-muted-foreground">Bientôt disponible.</p>
        )}
      </div>
    </main>
  );
}
