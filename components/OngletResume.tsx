import SommaireChapitres from "@/components/SommaireChapitres";
import type { Chapitre } from "@/types/base-de-donnees";

interface OngletResumeProps {
  slug: string;
  chapitres: Chapitre[];
  chapitresLusIds: Set<string>;
}

/**
 * Contenu de l'onglet Résumé : le sommaire des chapitres.
 *
 * Le résumé "essentiel" bilingue de l'œuvre (essentiel_fr/ar) n'est
 * plus affiché ici : il est monté dans la bannière persistante de
 * /oeuvres/[slug] (BanniereOeuvre), visible quel que soit l'onglet
 * actif, comme dans la maquette de référence.
 */
export default function OngletResume({ slug, chapitres, chapitresLusIds }: OngletResumeProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="mb-1 font-serif text-[30px] font-semibold text-ink">Résumé par chapitre</h2>
        <p className="mb-2 text-[15.5px] text-muted-foreground">
          Découvre chaque chapitre et accède facilement à son contenu.
        </p>
      </div>

      <SommaireChapitres slug={slug} chapitres={chapitres} chapitresLusIds={chapitresLusIds} />
    </div>
  );
}
