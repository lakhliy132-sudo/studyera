import Link from "next/link";
import { notFound } from "next/navigation";

import BoutonMarquerLu from "@/components/BoutonMarquerLu";
import FicheChapitre from "@/components/FicheChapitre";
import FicheChapitreApercu from "@/components/FicheChapitreApercu";
import LexiqueChapitre from "@/components/LexiqueChapitre";
import LieuxChapitre from "@/components/LieuxChapitre";
import OngletPersonnages from "@/components/OngletPersonnages";
import OngletsChapitre, { versCleOngletChapitre } from "@/components/OngletsChapitre";
import SujetsChapitre from "@/components/SujetsChapitre";
import TexteChapitre from "@/components/TexteChapitre";
import { PERSONNAGES_PAR_CHAPITRE_BOITE_A_MERVEILLES } from "@/lib/personnagesParChapitre";
import { enregistrerActivite } from "@/lib/supabase/activite";
import {
  recupererChapitreParNumero,
  recupererChapitresOeuvre,
  recupererFicheChapitre,
  recupererLexiqueChapitre,
  recupererOeuvreParSlug,
  recupererParagraphesChapitre,
  recupererPersonnagesOeuvre,
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
 * visuel que /oeuvres/[slug], même largeur maximale (`max-w-[1240px]`,
 * alignée sur cette page à la demande explicite de l'utilisateur —
 * cette page n'est de toute façon pas couverte par la maquette de
 * référence, qui ne montre que la page œuvre). Un choix précédent de
 * largeur plus étroite (`max-w-3xl`, pour le confort de lecture d'un
 * texte long) rendait les deux cartes résumé fr/ar (CarteBilingue,
 * `md:grid-cols-2`) trop étroites une fois partagées en deux colonnes,
 * avec beaucoup de lignes ; la largeur alignée sur la page œuvre
 * corrige ça sans changer la disposition (toujours côte à côte sur
 * desktop, empilées sur mobile — la grille de CarteBilingue n'a pas
 * bougé, seul le conteneur qui l'entoure est plus large).
 *
 * L'onglet Résumé reste le plus riche : fiche de synthèse (résumé
 * bilingue avec mots de lexique cliquables), texte intégral si
 * disponible, puis la "Fiche du chapitre" (FicheChapitreApercu) —
 * Personnages/Lieux/Sujets liés en 2/3 + 1/3, design repris du fichier
 * de référence fourni par l'utilisateur ("Chapitre 3 — La Boîte à
 * Merveilles"), qui remplace l'ancien aperçu à trois colonnes égales.
 * Chacune de ces trois sections a aussi son propre onglet pour une vue
 * dédiée.
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

  const [tousLesChapitres, fiche, paragraphes, lexique, tousLesPersonnages, sujets, chapitreLu] =
    await Promise.all([
      recupererChapitresOeuvre(oeuvre.id),
      recupererFicheChapitre(chapitre.id),
      recupererParagraphesChapitre(chapitre.id),
      recupererLexiqueChapitre(chapitre.id),
      recupererPersonnagesOeuvre(oeuvre.id),
      recupererSujetsChapitre(chapitre.id),
      recupererProgressionChapitre(user?.id ?? null, chapitre.id),
    ]);
  const numeroParChapitreId = new Map(tousLesChapitres.map((c) => [c.id, c.numero]));

  // Seulement les personnages qui apparaissent réellement dans ce
  // chapitre précis — demandé explicitement par l'utilisateur, en
  // revenant sur le choix précédent d'afficher systématiquement les 27
  // personnages de l'œuvre sur chaque page chapitre. Repose sur une
  // liste saisie à la main (voir lib/personnagesParChapitre.ts, pas de
  // vraie relation en base pour l'instant) ; si l'œuvre n'a pas encore
  // cette liste (Antigone, Le Dernier Jour d'un Condamné), on retombe
  // sur la liste complète plutôt que de tout masquer.
  const nomsDuChapitre = PERSONNAGES_PAR_CHAPITRE_BOITE_A_MERVEILLES[numero];
  const personnages = nomsDuChapitre
    ? tousLesPersonnages.filter((p) => nomsDuChapitre.includes(p.nom))
    : tousLesPersonnages;

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
      <div className="mx-auto w-full max-w-[1240px] px-6 pt-6 text-sm text-muted-foreground">
        <Link href={`/oeuvres/${slug}`} className="hover:text-ink">
          ← {oeuvre.titre_fr}
        </Link>
        <span className="mx-1.5">›</span>
        <span>
          Chapitre {chapitre.numero} : {chapitre.titre_fr}
        </span>
      </div>

      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-6 pb-16">
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

              <FicheChapitreApercu chapitre={chapitre} personnages={personnages} sujets={sujets} />

              <BoutonMarquerLu
                connecte={Boolean(user)}
                chapitreId={chapitre.id}
                luInitial={chapitreLu}
              />
            </>
          )}

          {ongletActif === "personnages" && (
            <OngletPersonnages personnages={personnages} numeroParChapitreId={numeroParChapitreId} />
          )}
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
