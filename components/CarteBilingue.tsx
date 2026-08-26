import { IconeLivre } from "@/components/icones";

interface CarteBilingueProps {
  contenuFr: React.ReactNode;
  contenuAr: React.ReactNode | null;
}

/**
 * Paire de cartes résumé fr/ar, utilisée à la fois dans la bannière
 * d'une œuvre (résumé "essentiel") et dans l'onglet Résumé d'un
 * chapitre (résumé de la fiche) — même habillage visuel dans les deux
 * cas, seul le contenu change. `contenuAr` à `null` masque entièrement
 * la carte arabe plutôt que d'afficher une carte vide.
 *
 * Fond `--color-background` (pas blanc) : ces cartes sont un niveau "en
 * retrait" par rapport à la carte englobante (la bannière ou la fiche
 * de chapitre, elles blanches) — reprend la maquette de référence.
 * Texte en `font-lecture` (Spectral, serif de labeur) : c'est le
 * contenu principal de lecture de la page.
 *
 * En-tête arabe en `flex-row-reverse` (pas `dir="rtl"` sur l'en-tête) :
 * mirroir visuel correct sans faire hériter le sens RTL à la ligne
 * flex, ce qui la ferait déborder du côté opposé (bug déjà rencontré
 * et corrigé une fois sur ce composant).
 */
export default function CarteBilingue({ contenuFr, contenuAr }: CarteBilingueProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="rounded-md border border-border bg-background p-5">
        <p className="mb-2.5 flex items-center gap-2 text-sm font-bold text-primary">
          <IconeLivre />
          Résumé
        </p>
        <div className="font-lecture text-[15px] leading-[1.7] whitespace-pre-line text-foreground">
          {contenuFr}
        </div>
      </div>

      {contenuAr && (
        <div className="rounded-md border border-border bg-background p-5">
          <p className="mb-2.5 flex flex-row-reverse items-center justify-end gap-2 text-sm font-bold text-primary">
            <IconeLivre />
            ملخص
          </p>
          <div
            dir="rtl"
            lang="ar"
            className="font-arabe text-base leading-[1.7] whitespace-pre-line text-foreground"
          >
            {contenuAr}
          </div>
        </div>
      )}
    </div>
  );
}
