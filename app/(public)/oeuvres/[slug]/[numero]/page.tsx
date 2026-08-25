import Link from "next/link";
import { notFound } from "next/navigation";

import FicheChapitre from "@/components/FicheChapitre";
import LexiqueChapitre from "@/components/LexiqueChapitre";
import TexteChapitre from "@/components/TexteChapitre";
import {
  recupererChapitreParNumero,
  recupererChapitresOeuvre,
  recupererFicheChapitre,
  recupererLexiqueChapitre,
  recupererOeuvreParSlug,
  recupererParagraphesChapitre,
} from "@/lib/supabase/contenu";

interface PagePropsChapitre {
  params: Promise<{ slug: string; numero: string }>;
}

/**
 * /oeuvres/[slug]/[numero] — lecture d'un chapitre : texte intégral (si
 * disponible), fiche de synthèse, lexique du chapitre. Lien atteint
 * depuis le sommaire des chapitres (SommaireChapitres, onglet Résumé de
 * /oeuvres/[slug]).
 */
export default async function PageChapitre({ params }: PagePropsChapitre) {
  const { slug, numero: numeroBrut } = await params;
  const numero = Number(numeroBrut);
  if (!Number.isInteger(numero)) notFound();

  const oeuvre = await recupererOeuvreParSlug(slug);
  if (!oeuvre) notFound();

  const chapitre = await recupererChapitreParNumero(oeuvre.id, numero);
  if (!chapitre) notFound();

  const [tousLesChapitres, fiche, paragraphes, lexique] = await Promise.all([
    recupererChapitresOeuvre(oeuvre.id),
    recupererFicheChapitre(chapitre.id),
    recupererParagraphesChapitre(chapitre.id),
    recupererLexiqueChapitre(chapitre.id),
  ]);

  const indexActuel = tousLesChapitres.findIndex((c) => c.id === chapitre.id);
  const chapitrePrecedent = indexActuel > 0 ? tousLesChapitres[indexActuel - 1] : null;
  const chapitreSuivant =
    indexActuel >= 0 && indexActuel < tousLesChapitres.length - 1
      ? tousLesChapitres[indexActuel + 1]
      : null;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 py-8">
      <Link
        href={`/oeuvres/${slug}`}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Retour à {oeuvre.titre_fr}
      </Link>

      <header className="flex flex-col gap-1">
        <p className="text-sm font-medium text-primary">Chapitre {chapitre.numero}</p>
        <h1 className="text-2xl font-semibold text-foreground">{chapitre.titre_fr}</h1>
        {chapitre.titre_ar && (
          <p dir="rtl" lang="ar" className="font-arabe text-lg leading-loose text-foreground">
            {chapitre.titre_ar}
          </p>
        )}
        {chapitre.lieux.length > 0 && (
          <p className="mt-2 text-sm text-muted-foreground">
            Lieux : {chapitre.lieux.join(", ")}
          </p>
        )}
      </header>

      <TexteChapitre paragraphes={paragraphes} />

      <FicheChapitre fiche={fiche} />

      <LexiqueChapitre entrees={lexique} />

      <nav
        aria-label="Chapitres précédent et suivant"
        className="flex items-center justify-between gap-4 border-t border-border pt-6"
      >
        {chapitrePrecedent ? (
          <Link
            href={`/oeuvres/${slug}/${chapitrePrecedent.numero}`}
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            ← Chapitre {chapitrePrecedent.numero}
          </Link>
        ) : (
          <span />
        )}
        {chapitreSuivant && (
          <Link
            href={`/oeuvres/${slug}/${chapitreSuivant.numero}`}
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            Chapitre {chapitreSuivant.numero} →
          </Link>
        )}
      </nav>
    </main>
  );
}
