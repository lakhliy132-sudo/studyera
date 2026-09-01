import Link from "next/link";

import BarreProgression from "@/components/BarreProgression";
import CarteBilingue from "@/components/CarteBilingue";
import { IconeAuteur, IconeLivre } from "@/components/icones";
import type { Chapitre, Oeuvre } from "@/types/base-de-donnees";

interface BanniereOeuvreProps {
  slug: string;
  oeuvre: Oeuvre;
  premierChapitre: Chapitre | null;
  /** `null` pour un visiteur non connecté (pas de progression
   * personnelle à montrer) — voir l'appelant, /oeuvres/[slug]/page.tsx. */
  progression: { lus: number; total: number } | null;
  /** Affiche la carte résumé "essentiel" fr/ar sous l'image. `true` par
   * défaut. Mis à `false` par la page appelante quand l'onglet actif
   * n'est pas "Chapitres" — demandé explicitement par l'utilisateur : le
   * résumé n'a plus lieu d'être une fois qu'on consulte Personnages/
   * Lexique/Lieux/Thèmes et enjeux/Sujets d'analyse, seule l'image
   * (Hero) doit rester visible dans ce cas. */
  afficherResume?: boolean;
}

/**
 * Bannière d'une œuvre : carte blanche unique (bordure, ombre, coins
 * très arrondis), photo de couverture en fondu à droite (si définie),
 * titre superposé à gauche — reprend la maquette de référence
 * (page-oeuvre (2).html).
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
  afficherResume = true,
}: BanniereOeuvreProps) {
  return (
    <>
      <Hero oeuvre={oeuvre} />

      {afficherResume && (
        <div className="mt-6">
          {/* `long` : replie le résumé "essentiel" au-delà de 6 lignes
           * avec un bouton "Lire la suite", comme le résumé d'un
           * chapitre — demandé explicitement par l'utilisateur pour le
           * résumé d'Antigone (10 phrases, une par ligne). */}
          <CarteBilingue
            contenuFr={oeuvre.essentiel_fr ?? "Bientôt disponible."}
            contenuAr={oeuvre.essentiel_ar ?? "قريبًا."}
            long
          />
        </div>
      )}

      {oeuvre.mode === "texte_integral" && premierChapitre && (
        <div className="mt-[22px] flex flex-wrap justify-center gap-3.5">
          <Link
            href={`/oeuvres/${slug}/${premierChapitre.numero}`}
            className="flex items-center gap-2 rounded-[10px] bg-primary px-7 py-4 text-base font-semibold text-white shadow-[0_2px_10px_rgba(29,78,216,0.22)] transition-all hover:-translate-y-px hover:bg-ink hover:shadow-[0_4px_16px_rgba(29,78,216,0.3)]"
          >
            <IconeLivre className="size-[18px]" />
            Lire le texte intégral →
          </Link>
          <Link
            href={`/oeuvres/${slug}/${premierChapitre.numero}`}
            className="flex items-center gap-2 rounded-[10px] border border-border-strong bg-surface px-7 py-4 text-base font-semibold text-primary transition-colors hover:bg-surface-muted"
          >
            <IconeLivre className="size-[18px]" />
            Lecteur bilingue →
          </Link>
        </div>
      )}

      {progression && (
        <div className="mt-[22px] flex justify-center">
          <BarreProgression slug={slug} lus={progression.lus} total={progression.total} />
        </div>
      )}
    </>
  );
}

/**
 * Bandeau titre : sur desktop, une photo de couverture (si définie)
 * occupe le côté droit et se fond en blanc vers la gauche (masque CSS
 * + dégradé blanc superposé) pour laisser le titre lisible par-dessus.
 * Sans couverture, la carte reste simplement blanche avec le titre.
 *
 * Sur mobile, l'effet de fondu est abandonné (illisible en dessous de
 * ~640px) : la photo redevient une simple bande pleine largeur
 * au-dessus du titre, sans masque.
 */
function Hero({ oeuvre }: { oeuvre: Oeuvre }) {
  const aUnePhoto = Boolean(oeuvre.couverture_url);

  // Le Dernier Jour d'un Condamné : avec le traitement plein cadre
  // ci-dessous (bandeau nettement plus large que haut), la photo
  // fournie par l'utilisateur — cadrage large 3:2, sujet au centre —
  // se retrouvait presque entièrement recadrée, ne laissant qu'une
  // fine bande visible. Demandé explicitement par l'utilisateur :
  // "la photo fais la petite pour toute view y regardent dans la
  // photo" — une vignette plus petite, en object-contain, pour que la
  // photo entière reste visible sur tous les écrans, plutôt que le
  // cadrage plein largeur utilisé par les deux autres œuvres.
  if (aUnePhoto && oeuvre.slug === "dernier-jour-condamne") {
    return (
      <section className="relative flex flex-col-reverse items-center gap-5 overflow-hidden rounded-lg border border-border bg-surface p-6 shadow-sm sm:flex-row sm:justify-between sm:gap-8 sm:p-8">
        <TitreOeuvre oeuvre={oeuvre} />
        <div className="flex h-[130px] w-[195px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#0f1524] sm:h-[150px] sm:w-[225px]">
          {/* eslint-disable-next-line @next/next/no-img-element -- image
              locale simple, object-contain : pas besoin de next/image ici. */}
          <img
            src={oeuvre.couverture_url ?? undefined}
            alt={oeuvre.titre_fr ? `Illustration : ${oeuvre.titre_fr}` : "Illustration de l'œuvre"}
            className="h-full w-full object-contain"
          />
        </div>
      </section>
    );
  }

  return (
    <section
      className={
        aUnePhoto
          ? "relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-sm sm:h-[250px] sm:flex-row sm:items-center"
          : "relative flex items-center overflow-hidden rounded-lg border border-border bg-surface p-7 shadow-sm sm:h-[250px] sm:p-0"
      }
    >
      {aUnePhoto && (
        <>
          {/* Bande photo pleine largeur en mobile, sans masque. */}
          <div
            aria-hidden="true"
            className="h-[160px] w-full bg-cover bg-[center_74%] sm:hidden"
            style={{ backgroundImage: `url(${oeuvre.couverture_url})` }}
          />
          {/* Photo en fondu, desktop uniquement : masquée à gauche,
              pleine à droite, puis un dégradé blanc par-dessus pour
              garder le titre lisible côté gauche. */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 top-0 right-0 left-[22%] hidden bg-cover bg-[center_74%] sm:block md:left-[30%]"
            style={{
              backgroundImage: `url(${oeuvre.couverture_url})`,
              maskImage:
                "linear-gradient(100deg, transparent 0%, rgba(0,0,0,.55) 22%, #000 48%)",
              WebkitMaskImage:
                "linear-gradient(100deg, transparent 0%, rgba(0,0,0,.55) 22%, #000 48%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-[linear-gradient(95deg,#fff_0%,rgba(255,255,255,.93)_34%,rgba(255,255,255,.18)_62%,transparent_78%)] sm:block"
          />
        </>
      )}

      <TitreOeuvre oeuvre={oeuvre} />
    </section>
  );
}

/** Titre + titre arabe + badge auteur, partagés par les deux mises en
 * forme du Hero ci-dessus (cadrage plein largeur et vignette réduite). */
function TitreOeuvre({ oeuvre }: { oeuvre: Oeuvre }) {
  return (
    <div className="relative max-w-[660px] px-7 py-6 sm:px-[30px] sm:py-0 md:px-[46px]">
      <h1 className="font-serif text-[27px] leading-[1.06] font-bold tracking-tight text-ink sm:text-4xl md:text-[52px]">
        {oeuvre.titre_fr}
      </h1>
      {oeuvre.titre_ar && (
        // `w-fit` : garde ce titre aligné à gauche avec le h1
        // au-dessus (un bloc RTL pleine largeur alignerait son texte
        // à droite de TOUTE la largeur, pas de son propre contenu).
        <p dir="rtl" lang="ar" className="mt-2.5 w-fit font-arabe text-lg font-medium text-primary-vif sm:text-xl md:text-2xl">
          {oeuvre.titre_ar}
        </p>
      )}
      {oeuvre.auteur && (
        <p className="mt-[18px] inline-flex w-fit items-center gap-2.5 rounded-full bg-primary-tint px-[18px] py-2.5 text-[15px] font-semibold text-primary">
          <IconeAuteur />
          {oeuvre.auteur}
        </p>
      )}
    </div>
  );
}
