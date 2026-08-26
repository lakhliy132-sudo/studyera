import Link from "next/link";

import BarreProgression from "@/components/BarreProgression";
import CarteBilingue from "@/components/CarteBilingue";
import { IconeAuteur } from "@/components/icones";
import IllustrationEnfantBoite from "@/components/IllustrationEnfantBoite";
import type { Chapitre, Oeuvre } from "@/types/base-de-donnees";

interface BanniereOeuvreProps {
  slug: string;
  oeuvre: Oeuvre;
  premierChapitre: Chapitre | null;
  /** `null` pour un visiteur non connecté (pas de progression
   * personnelle à montrer) — voir l'appelant, /oeuvres/[slug]/page.tsx. */
  progression: { lus: number; total: number } | null;
}

/**
 * Bannière d'une œuvre : carte blanche unique (bordure, ombre, coins
 * très arrondis) posée sur le fond bleu pâle de la page, deux colonnes
 * en desktop — contenu à gauche, panneau de couverture à droite.
 * Reprend la maquette de référence (page-oeuvre.html).
 *
 * "Lire le texte intégral" / "Lecteur bilingue" n'apparaissent QUE si
 * `oeuvre.mode === "texte_integral"` : les œuvres en `accompagnement`
 * (la majorité du catalogue actuel) n'ont pas de texte intégral à
 * lire, ces boutons n'auraient donc aucune destination valable.
 */
export default function BanniereOeuvre({
  slug,
  oeuvre,
  premierChapitre,
  progression,
}: BanniereOeuvreProps) {
  return (
    <section className="my-6 grid overflow-hidden rounded-lg border border-border bg-surface shadow-sm md:grid-cols-[1fr_380px]">
      <div className="flex flex-col gap-5 p-7 pb-8 md:p-11 md:pb-9">
        <div>
          <h1 className="font-serif text-3xl leading-[1.05] font-semibold tracking-tight text-ink md:text-[52px]">
            {oeuvre.titre_fr}
          </h1>
          {oeuvre.titre_ar && (
            // `w-fit` : garde ce titre aligné à gauche avec le h1
            // au-dessus (un bloc RTL pleine largeur alignerait son texte
            // à droite de TOUTE la largeur, pas de son propre contenu).
            <p dir="rtl" lang="ar" className="mt-2.5 w-fit font-arabe text-2xl text-primary">
              {oeuvre.titre_ar}
            </p>
          )}
          {oeuvre.auteur && (
            <p className="mt-[18px] inline-flex w-fit items-center gap-2 rounded-full bg-primary-tint px-4 py-2 text-[14.5px] font-medium text-primary">
              <IconeAuteur />
              {oeuvre.auteur}
            </p>
          )}
        </div>

        {progression && <BarreProgression lus={progression.lus} total={progression.total} />}

        <CarteBilingue
          contenuFr={oeuvre.essentiel_fr ?? "Bientôt disponible."}
          contenuAr={oeuvre.essentiel_ar ?? "قريبًا."}
        />

        {oeuvre.mode === "texte_integral" && premierChapitre && (
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
      </div>

      <CouverturePanneau oeuvre={oeuvre} />
    </section>
  );
}

/**
 * Panneau de couverture : dégradé bleu + illustration au trait d'un
 * enfant portant sa boîte à merveilles (IllustrationEnfantBoite) — pas
 * une photo ni une image générée par IA, un dessin original dans le
 * même langage graphique que les icônes du site. Deux cercles
 * décoratifs en bordure fine reproduisent les pseudo-éléments
 * `::before`/`::after` de la maquette d'origine (non disponibles
 * directement en JSX).
 *
 * Le titre n'est volontairement pas répété ici (il l'est déjà, en
 * grand, dans la colonne de gauche) : l'illustration devient le
 * centre d'attention du panneau plutôt que du texte redondant.
 */
function CouverturePanneau({ oeuvre }: { oeuvre: Oeuvre }) {
  return (
    <div className="relative order-first flex min-h-[260px] flex-col items-center overflow-hidden bg-[linear-gradient(150deg,#1b3a8f,#16307b_55%,#0f1f4f)] px-7 py-8 text-center text-white md:order-none md:min-h-0 md:px-9 md:py-11">
      <div
        aria-hidden="true"
        className="absolute -top-[40%] -right-[30%] size-[340px] rounded-full border border-white/[0.13]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-[35%] -left-[25%] size-[280px] rounded-full border border-white/10"
      />

      <p className="relative text-[11px] font-medium tracking-[0.24em] text-[#9db6ec] uppercase">
        Œuvre au programme
      </p>

      <div className="relative flex flex-1 items-center justify-center py-4">
        <IllustrationEnfantBoite className="size-36 text-[#bacdf4] md:size-40" />
      </div>

      <p className="relative font-serif text-lg font-semibold">{oeuvre.titre_fr}</p>
      <p className="relative mt-1 text-sm text-[#9db6ec]">{oeuvre.auteur}</p>
    </div>
  );
}
