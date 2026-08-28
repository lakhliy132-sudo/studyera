import Link from "next/link";

import { IconeDocument, IconeInfo, IconeLieu, IconeLivre, IconeLivreOuvert, IconePersonne, IconeQuiz } from "@/components/icones";

// Onglet "themes" (Thèmes et enjeux) retiré de cette barre à la
// demande explicite de l'utilisateur ("nonnn la case de theme en jeux
// qui il faut enleber", après une première tentative qui avait
// seulement retiré un bloc similaire à l'intérieur de la Fiche de
// lecture — ce n'était pas ce qui était visé). `OngletThemes.tsx` et
// `recupererFichesOeuvre` (lib/supabase/contenu.ts) restent dans le
// code, juste plus référencés ici ni sur la page — mêmes précédent et
// raisonnement que pour `OngletsChapitre.tsx` retiré de la page
// chapitre : l'utilisateur n'a pas demandé la suppression du code,
// seulement celle de l'onglet dans la navigation.
// Ordre demandé explicitement par l'utilisateur ("remets la fiche de
// lecture la premier et 2 chapitres") : Fiche de lecture avant
// Chapitres. "resume" reste toutefois l'onglet par défaut (URL sans
// `?onglet=`, voir `versCleOnglet`/`href` ci-dessous) — seul l'ordre
// d'affichage dans la barre change, pas ce qui s'affiche par défaut
// à l'arrivée sur /oeuvres/[slug].
const ONGLETS = [
  { cle: "fiche", libelle: "Fiche de lecture", Icone: IconeInfo },
  { cle: "resume", libelle: "Chapitres", Icone: IconeLivre },
  { cle: "personnages", libelle: "Personnages", Icone: IconePersonne },
  { cle: "lexique", libelle: "Lexique", Icone: IconeLivreOuvert },
  { cle: "lieux", libelle: "Lieux", Icone: IconeLieu },
  { cle: "sujets", libelle: "Sujets d'analyse", Icone: IconeDocument },
  { cle: "quiz", libelle: "Quiz", Icone: IconeQuiz },
] as const;

export type CleOnglet = (typeof ONGLETS)[number]["cle"];

const CLES_ONGLETS = ONGLETS.map((o) => o.cle) as readonly string[];

/** Résout une valeur de query param quelconque vers un onglet valide,
 * "resume" par défaut si absente ou inconnue. */
export function versCleOnglet(valeur: string | string[] | undefined): CleOnglet {
  const v = Array.isArray(valeur) ? valeur[0] : valeur;
  return CLES_ONGLETS.includes(v ?? "") ? (v as CleOnglet) : "resume";
}

interface OngletsOeuvreProps {
  slug: string;
  ongletActif: CleOnglet;
}

/**
 * Barre d'onglets de la page d'une œuvre — bandeau `bg-surface-muted`
 * centré, onglet actif en pastille bleue pleine et arrondie (rayon
 * `10px`, ombre bleutée — pas un soulignement) : demandé explicitement
 * par l'utilisateur pour revenir au style pilule d'avant la refonte
 * v2, en gardant sinon le contenu/les libellés actuels des onglets et
 * le même mécanisme de défilement.
 *
 * Composant Serveur volontairement : chaque onglet est un lien
 * classique qui change le query param `onglet` dans l'URL, pas de
 * JavaScript nécessaire. Défilement horizontal en CSS pur sous `md`
 * (voir `min-w-max`) : si l'onglet actif n'est pas visible à
 * l'ouverture, il reste atteignable en faisant défiler mais n'est pas
 * recentré automatiquement — accepté comme limite plutôt que d'ajouter
 * du JS à ce composant pour un cas rare.
 */
export default function OngletsOeuvre({ slug, ongletActif }: OngletsOeuvreProps) {
  return (
    <nav
      aria-label="Sections de l'œuvre"
      className="mx-auto mt-6 w-full max-w-[1240px] overflow-x-auto rounded-md bg-surface-muted p-1.5"
    >
      <ul className="flex min-w-max justify-center gap-0.5">
        {ONGLETS.map(({ cle, libelle, Icone }) => {
          const actif = cle === ongletActif;
          const href = cle === "resume" ? `/oeuvres/${slug}` : `/oeuvres/${slug}?onglet=${cle}`;

          return (
            <li key={cle}>
              <Link
                href={href}
                aria-current={actif ? "page" : undefined}
                className={
                  actif
                    ? "flex items-center gap-2.5 rounded-[10px] bg-primary px-5 py-[15px] text-base font-bold whitespace-nowrap text-white shadow-[0_2px_10px_rgba(29,78,216,0.22)]"
                    : "flex items-center gap-2.5 rounded-[10px] px-5 py-[15px] text-base font-medium whitespace-nowrap text-foreground transition-colors hover:bg-white/70 hover:text-primary"
                }
              >
                <Icone />
                {libelle}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
