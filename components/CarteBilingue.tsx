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
 * Fond blanc (pas teinté) : ces cartes sont au même niveau que la
 * bannière, pas "en retrait" par rapport à elle — reprend la maquette
 * de référence. Texte en `font-lecture` (Lora, serif de labeur), assez
 * grand (18px, interligne généreux) : c'est le contenu principal de
 * lecture de la page.
 *
 * En-tête arabe en `flex-row-reverse` (pas `dir="rtl"` sur l'en-tête) :
 * mirroir visuel correct sans faire hériter le sens RTL à la ligne
 * flex, ce qui la ferait déborder du côté opposé (bug déjà rencontré
 * et corrigé une fois sur ce composant).
 */
export default function CarteBilingue({ contenuFr, contenuAr }: CarteBilingueProps) {
  return (
    <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
      <div className="rounded-lg border border-border bg-surface p-[34px] px-[38px] shadow-sm transition-shadow hover:shadow-[0_4px_28px_rgba(27,58,143,0.09)]">
        <p className="mb-[18px] flex items-center gap-[11px] font-serif text-lg font-bold text-primary">
          <IconeLivre className="size-[22px]" />
          Résumé
        </p>
        <div className="font-lecture text-lg leading-[1.95] whitespace-pre-line text-foreground">
          {contenuFr}
        </div>
      </div>

      {contenuAr && (
        <div className="rounded-lg border border-border bg-surface p-[34px] px-[38px] shadow-sm transition-shadow hover:shadow-[0_4px_28px_rgba(27,58,143,0.09)]">
          <p className="mb-[18px] flex flex-row-reverse items-center justify-end gap-[11px] font-serif text-lg font-bold text-primary">
            <IconeLivre className="size-[22px]" />
            ملخص
          </p>
          <div
            dir="rtl"
            lang="ar"
            className="font-arabe text-lg leading-[2.3] whitespace-pre-line text-foreground"
          >
            {contenuAr}
          </div>
        </div>
      )}
    </div>
  );
}
