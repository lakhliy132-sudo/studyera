import Link from "next/link";
import { notFound } from "next/navigation";

import BoutonMarquerLu from "@/components/BoutonMarquerLu";
import FicheChapitre from "@/components/FicheChapitre";
import { IconeDocument, IconeLieu, IconePersonne } from "@/components/icones";
import LexiqueChapitre from "@/components/LexiqueChapitre";
import LieuxChapitre from "@/components/LieuxChapitre";
import OngletsChapitre, { versCleOngletChapitre } from "@/components/OngletsChapitre";
import PersonnagesChapitre from "@/components/PersonnagesChapitre";
import SujetsChapitre from "@/components/SujetsChapitre";
import TexteChapitre from "@/components/TexteChapitre";
import { enregistrerActivite } from "@/lib/supabase/activite";
import {
  recupererChapitreParNumero,
  recupererChapitresOeuvre,
  recupererFicheChapitre,
  recupererLexiqueChapitre,
  recupererOeuvreParSlug,
  recupererParagraphesChapitre,
  recupererPersonnagesChapitre,
  recupererSujetsChapitre,
} from "@/lib/supabase/contenu";
import { recupererProgressionChapitre } from "@/lib/supabase/progression";
import { creerClientServeur } from "@/lib/supabase/server";

interface PagePropsChapitre {
  params: Promise<{ slug: string; numero: string }>;
  searchParams: Promise<{ onglet?: string | string[] }>;
}

/**
 * /oeuvres/[slug]/[numero] — fil d'Ariane, en-tête, barre d'onglets
 * (Résumé / Personnages / Lexique / Lieux / Sujets liés). Même système
 * visuel que /oeuvres/[slug] (tokens, polices, cartes), largeur de
 * lecture plus étroite (max-w-3xl) : cette page n'est pas couverte par
 * la maquette de référence (qui ne montre que la page œuvre), le choix
 * de largeur est délibéré pour le confort de lecture d'un texte long.
 *
 * L'onglet Résumé reste le plus riche : fiche de synthèse (résumé
 * bilingue avec mots de lexique cliquables), texte intégral si
 * disponible, puis un aperçu Personnages/Lieux/Sujets liés en trois
 * colonnes — chacune de ces trois sections a aussi son propre onglet
 * pour une vue dédiée.
 */
export default async function PageChapitre({ params, searchParams }: PagePropsChapitre) {
  const { slug, numero: numeroBrut } = await params;
  const { onglet } = await searchParams;
  const numero = Number(numeroBrut);
  if (!Number.isInteger(numero)) notFound();
  const ongletActif = versCleOngletChapitre(onglet);

  const oeuvre = await recupererOeuvreParSlug(slug);
  if (!oeuvre) notFound();

  const chapitre = await recupererChapitreParNumero(oeuvre.id, numero);
  if (!chapitre) notFound();

  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [tousLesChapitres, fiche, paragraphes, lexique, personnages, sujets, chapitreLu] =
    await Promise.all([
      recupererChapitresOeuvre(oeuvre.id),
      recupererFicheChapitre(chapitre.id),
      recupererParagraphesChapitre(chapitre.id),
      recupererLexiqueChapitre(chapitre.id),
      recupererPersonnagesChapitre(chapitre.id),
      recupererSujetsChapitre(chapitre.id),
      recupererProgressionChapitre(user?.id ?? null, chapitre.id),
    ]);

  // Journalisation de la consultation (session 4) : ne bloque jamais le
  // rendu de la page en cas d'erreur, et n'écrit rien pour un visiteur
  // non connecté — voir les commentaires dans lib/supabase/activite.ts.
  await enregistrerActivite(user?.id ?? null, {
    type: "consultation_chapitre",
    ressourceId: chapitre.id,
    ressourceTitre: `${oeuvre.titre_fr} — ${chapitre.titre_fr}`,
  });

  const indexActuel = tousLesChapitres.findIndex((c) => c.id === chapitre.id);
  const chapitrePrecedent = indexActuel > 0 ? tousLesChapitres[indexActuel - 1] : null;
  const chapitreSuivant =
    indexActuel >= 0 && indexActuel < tousLesChapitres.length - 1
      ? tousLesChapitres[indexActuel + 1]
      : null;

  return (
    <main className="flex flex-col">
      <div className="mx-auto w-full max-w-3xl px-6 pt-6 text-sm text-muted-foreground">
        <Link href={`/oeuvres/${slug}`} className="hover:text-ink">
          ← {oeuvre.titre_fr}
        </Link>
        <span className="mx-1.5">›</span>
        <span>
          Chapitre {chapitre.numero} : {chapitre.titre_fr}
        </span>
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 pb-16">
        <header className="flex flex-col gap-1 rounded-lg border border-border bg-surface p-7 shadow-sm">
          <p className="inline-flex w-fit items-center rounded-full bg-primary-tint px-3.5 py-1.5 text-sm font-medium text-primary">
            Chapitre {chapitre.numero}
          </p>
          <h1 className="mt-2 font-serif text-2xl font-semibold text-ink md:text-4xl">
            {chapitre.titre_fr}
          </h1>
          {chapitre.titre_ar && (
            // `w-fit` : garde ce titre arabe aligné à gauche avec le h1
            // au-dessus (voir le même correctif sur les pages du site).
            <p dir="rtl" lang="ar" className="w-fit font-arabe text-lg text-primary">
              {chapitre.titre_ar}
            </p>
          )}
          {chapitre.resume_court && (
            <p className="mt-1 text-muted-foreground">{chapitre.resume_court}</p>
          )}
        </header>

        <OngletsChapitre slug={slug} numero={numero} ongletActif={ongletActif} />

        <div className="flex flex-col gap-8 py-2">
          {ongletActif === "resume" && (
            <>
              <FicheChapitre fiche={fiche} lexique={lexique} />
              <TexteChapitre paragraphes={paragraphes} />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <BlocApercu titre="Personnages" Icone={IconePersonne}>
                  <PersonnagesChapitre personnages={personnages} />
                </BlocApercu>
                <BlocApercu titre="Lieux" Icone={IconeLieu}>
                  <LieuxChapitre lieux={chapitre.lieux} />
                </BlocApercu>
                <BlocApercu titre="Sujets liés" Icone={IconeDocument}>
                  <SujetsChapitre sujets={sujets} />
                </BlocApercu>
              </div>

              <BoutonMarquerLu
                connecte={Boolean(user)}
                chapitreId={chapitre.id}
                luInitial={chapitreLu}
              />
            </>
          )}

          {ongletActif === "personnages" && <PersonnagesChapitre personnages={personnages} />}
          {ongletActif === "lexique" && <LexiqueChapitre entrees={lexique} />}
          {ongletActif === "lieux" && <LieuxChapitre lieux={chapitre.lieux} />}
          {ongletActif === "sujets" && <SujetsChapitre sujets={sujets} />}

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
        </div>
      </div>
    </main>
  );
}

/** Colonne du bloc d'aperçu (Personnages/Lieux/Sujets liés) affiché
 * sous le résumé, sur l'onglet Résumé uniquement — même habillage que
 * les cartes de résumé (fond `--color-background`, pas blanc : contenu
 * "en retrait" par rapport à la carte englobante). */
function BlocApercu({
  titre,
  Icone,
  children,
}: {
  titre: string;
  Icone: (props: { className?: string }) => React.ReactElement;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2.5 rounded-md border border-border bg-background p-5">
      <p className="flex items-center gap-2 text-sm font-bold text-primary">
        <Icone />
        {titre}
      </p>
      {children}
    </div>
  );
}
