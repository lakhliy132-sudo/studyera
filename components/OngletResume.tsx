import { IconeLivre } from "@/components/icones";
import SommaireChapitres from "@/components/SommaireChapitres";
import { libelleUniteChapitre } from "@/lib/uniteChapitre";
import type { Chapitre } from "@/types/base-de-donnees";

interface OngletResumeProps {
  slug: string;
  chapitres: Chapitre[];
  chapitresLusIds: Set<string>;
}

/**
 * Contenu de l'onglet "Chapitres" : le sommaire des chapitres, dans une
 * carte blanche à en-tête centré (icône + titre sur une ligne, sous-
 * titre en dessous) — reprend la maquette de référence
 * (page-oeuvre (2).html, `.card`).
 *
 * Le résumé "essentiel" bilingue de l'œuvre (essentiel_fr/ar) n'est
 * pas affiché ici : il est monté dans la bannière persistante de
 * /oeuvres/[slug] (BanniereOeuvre), visible quel que soit l'onglet
 * actif.
 *
 * Reste au tutoiement ("Découvre", pas "Découvrez") : cohérent avec le
 * reste du site (BarreProgression "Ta progression", BoutonMarquerLu
 * "Connecte-toi"...), la maquette de référence elle-même vouvoie mais
 * cette page-là n'a pas ce choix de ton figé, contrairement au reste
 * de l'application.
 */
export default function OngletResume({ slug, chapitres, chapitresLusIds }: OngletResumeProps) {
  // "Scènes" pour Antigone plutôt que "Chapitres" — voir lib/uniteChapitre.ts.
  const unite = libelleUniteChapitre(slug);

  return (
    <section className="rounded-lg border border-border bg-surface p-9 pb-10 shadow-sm">
      <div className="mb-2 flex items-center justify-center gap-3.5 text-primary">
        <IconeLivre className="size-[30px]" />
        <h2 className="font-serif text-[31px] font-bold tracking-tight text-ink">
          Les {unite.pluriel.toLowerCase()} de l&apos;œuvre
        </h2>
      </div>
      <p className="mb-[30px] text-center text-base text-muted-foreground">
        Découvre chaque {unite.singulier.toLowerCase()} et accède facilement à son contenu.
      </p>

      <SommaireChapitres slug={slug} chapitres={chapitres} chapitresLusIds={chapitresLusIds} />
    </section>
  );
}
