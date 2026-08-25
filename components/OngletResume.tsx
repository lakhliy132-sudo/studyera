import CouvertureOeuvre from "@/components/CouvertureOeuvre";
import SommaireChapitres from "@/components/SommaireChapitres";
import type { Chapitre, Oeuvre } from "@/types/base-de-donnees";

interface OngletResumeProps {
  oeuvre: Oeuvre;
  chapitres: Chapitre[];
}

/**
 * Contenu de l'onglet Résumé : le résumé global de l'œuvre (bloc du
 * haut) puis le sommaire des chapitres (bloc du bas).
 *
 * Bloc du haut, ordre d'affichage :
 * - mobile : couverture (hauteur réduite) → français → arabe, empilés
 * - desktop : français + arabe côte à côte à gauche, couverture à
 *   largeur fixe (~200px) à droite (obtenu avec `md:order-2` sur la
 *   couverture, qui apparaît pourtant en premier dans le DOM pour le
 *   mobile)
 */
export default function OngletResume({ oeuvre, chapitres }: OngletResumeProps) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
        <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg md:order-2 md:h-auto md:w-[200px] md:aspect-[3/4]">
          <CouvertureOeuvre url={oeuvre.couverture_url} titre={oeuvre.titre_fr} />
        </div>

        <div className="grid grid-cols-1 gap-6 md:order-1 md:flex-1 md:grid-cols-2">
          <p className="whitespace-pre-line text-foreground">
            {oeuvre.essentiel_fr ?? "Bientôt disponible."}
          </p>
          <p
            dir="rtl"
            lang="ar"
            className="whitespace-pre-line font-arabe text-lg leading-loose text-foreground"
          >
            {oeuvre.essentiel_ar ?? "قريبًا."}
          </p>
        </div>
      </div>

      <SommaireChapitres slug={oeuvre.slug} chapitres={chapitres} />
    </div>
  );
}
