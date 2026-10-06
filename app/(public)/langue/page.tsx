import Link from "next/link";

import {
  IconeBulles,
  IconeCible,
  IconeCitation,
  IconeFleche,
  IconeFlecheDouble,
  IconeFlecheHaut,
  IconeGraphique,
  IconeLien,
  IconeLivreOuvert,
  IconeMasques,
  IconeMoins,
  IconeOpposition,
  IconePlume,
  IconeReseau,
} from "@/components/icones";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { recupererCoursParCategorie } from "@/lib/supabase/contenu";

interface Lecon {
  numero: number;
  slug: string;
  titre: string;
  description: string;
  Icone: (props: { className?: string }) => React.ReactElement;
}

/**
 * Les 12 leçons de langue de la page /langue — plan de cours repris de
 * la maquette de référence fournie par l'utilisateur (deux images
 * "ChatGPT Image..." déposées dans le dépôt), avec `slug`/`Icone`
 * ajoutés pour relier chaque leçon à la table `cours` (voir plus bas)
 * et à une icône du site.
 *
 * Toutes ces leçons ne sont pas encore rédigées : `slug` est déjà fixé
 * pour les 12 (pour ne pas avoir à changer les cartes plus tard), mais
 * seule "L'énonciation" existe réellement dans `cours` pour l'instant
 * (ajoutée à la demande explicite de l'utilisateur, contenu fourni par
 * lui-même — voir data/contenu-plateforme-bac.xlsx, feuille "Cours").
 * Les 11 autres restent des cartes non cliquables tant qu'elles n'ont
 * pas de contenu importé.
 */
const LEÇONS: Lecon[] = [
  { numero: 1, slug: "enonciation", titre: "L'énonciation", description: "Comprendre la situation d'énonciation et ses éléments clés.", Icone: IconeBulles },
  { numero: 2, slug: "champ-lexical", titre: "Le champ lexical", description: "Enrichir son vocabulaire et regrouper les mots par thèmes.", Icone: IconeReseau },
  { numero: 3, slug: "discours-rapporte", titre: "Le discours rapporté", description: "Rapporter les paroles et les pensées avec justesse.", Icone: IconeCitation },
  { numero: 4, slug: "registres-tons-tonalites", titre: "Les registres, tons et tonalités littéraires", description: "Identifier les effets de style et les intentions de l'auteur.", Icone: IconeMasques },
  { numero: 5, slug: "niveaux-langue", titre: "Les niveaux de langue", description: "Adapter son expression selon le contexte et l'interlocuteur.", Icone: IconeGraphique },
  { numero: 6, slug: "connecteurs-logiques", titre: "Les connecteurs logiques", description: "Relier les idées et structurer son discours.", Icone: IconeLien },
  { numero: 7, slug: "figures-analogie", titre: "Figures d'analogie", description: "Comparer pour mieux comprendre et faire image.", Icone: IconePlume },
  { numero: 8, slug: "figures-insistance", titre: "Figures d'insistance", description: "Insister pour convaincre ou frapper les esprits.", Icone: IconeCible },
  { numero: 9, slug: "figures-amplification", titre: "Figures d'amplification", description: "Amplifier pour donner plus de force au propos.", Icone: IconeFlecheHaut },
  { numero: 10, slug: "figures-substitution", titre: "Figures de substitution", description: "Remplacer pour éviter les répétitions.", Icone: IconeFlecheDouble },
  { numero: 11, slug: "figures-attenuation", titre: "Figures d'atténuation", description: "Atténuer pour nuancer ou relativiser.", Icone: IconeMoins },
  { numero: 12, slug: "figures-opposition", titre: "Figures d'opposition", description: "Opposer pour contraster et argumenter.", Icone: IconeOpposition },
];

/**
 * Page publique : /langue — la liste des leçons de langue française
 * ("Cours de langue"), reprise de la maquette de référence : bandeau
 * "FRANÇAIS – 1ÈRE BAC", titre bicolore ("Cours de" en encre, "langue"
 * en bleu italique), sous-titre, puis grille de cartes numérotées
 * (icône + titre + accroche), une par leçon.
 *
 * Chaque leçon dont le `slug` existe dans `cours` (voir
 * `lib/supabase/contenu.ts`) devient une carte cliquable vers
 * /langue/[slug] ; les autres restent des cartes statiques marquées
 * "Bientôt disponible" — mêmes convention et bandeau que le reste du
 * site pour le contenu pas encore prêt.
 */
export default async function PageLangue() {
  const coursDisponibles = await recupererCoursParCategorie("langue", FILIERE_ACTUELLE);
  const slugsDisponibles = new Set(coursDisponibles.map((c) => c.slug));

  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 sm:gap-9 px-6 pt-6 pb-10 sm:pt-9 sm:pb-16">
        <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="flex size-8 items-center justify-center rounded-full border border-primary/20 bg-primary-tint text-primary">
              <IconeLivreOuvert className="size-4" />
            </span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <h1 className="mt-5 font-titre text-3xl sm:text-4xl font-bold text-ink">
            Cours de <span className="text-primary italic">langue</span>
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Maîtrise les notions essentielles de la langue française pour enrichir ton
            expression et réussir tes examens.
          </p>
        </section>

        <div className="flex items-center gap-3 border-b border-border pb-3">
          <IconeLivreOuvert className="size-5 text-primary" />
          <h2 className="font-serif text-lg font-bold text-ink">
            {LEÇONS.length} leçons pour progresser
          </h2>
        </div>

        <ul className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3 sm:gap-[18px]">
          {LEÇONS.map((lecon) => {
            const disponible = slugsDisponibles.has(lecon.slug);
            const contenuCarte = (
              <>
                <div className="flex items-center justify-between">
                  <span className="flex size-[52px] items-center justify-center rounded-full bg-primary-tint text-primary">
                    <lecon.Icone className="size-6" />
                  </span>
                  <span className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-bold text-primary-vif">
                    {String(lecon.numero).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-lg leading-snug font-bold text-ink">
                  {lecon.titre}
                </h3>
                <p className="mt-1.5 font-lecture text-[14.5px] leading-relaxed text-muted-foreground">
                  {lecon.description}
                </p>
                {disponible ? (
                  <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Lire le cours
                    <IconeFleche className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                ) : (
                  <span className="mt-4 inline-flex w-fit rounded-full bg-surface-muted px-2.5 py-1 text-xs font-semibold text-subtle-foreground">
                    Bientôt disponible
                  </span>
                )}
              </>
            );

            return (
              <li key={lecon.slug}>
                {disponible ? (
                  <Link
                    href={`/langue/${lecon.slug}`}
                    className="group flex h-full flex-col rounded-[20px] border border-border bg-surface p-5 sm:p-[26px] shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
                  >
                    {contenuCarte}
                  </Link>
                ) : (
                  <div className="flex h-full flex-col rounded-[20px] border border-border bg-surface p-5 sm:p-[26px] opacity-70">
                    {contenuCarte}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
