interface CarteBilingueProps {
  contenuFr: React.ReactNode;
  contenuAr: React.ReactNode | null;
}

/**
 * Paire de cartes résumé fr/ar (icône + titre + texte), utilisée à la
 * fois dans la bannière d'une œuvre (résumé "essentiel") et dans
 * l'onglet Résumé d'un chapitre (résumé de la fiche) — même habillage
 * visuel dans les deux cas, seul le contenu change. `contenuAr` à
 * `null` masque entièrement la carte arabe plutôt que d'afficher une
 * carte vide.
 *
 * En-tête en petite capitale avec filet (motif éditorial), texte en
 * `text-base`/`leading-relaxed` : c'est le contenu principal de lecture
 * de la page, il mérite un traitement plus soigné qu'un `text-sm` dense
 * comme le reste de l'interface.
 */
export default function CarteBilingue({ contenuFr, contenuAr }: CarteBilingueProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 shadow-sm">
        <p className="flex items-center gap-2 border-b border-border pb-2 text-xs font-semibold tracking-wide text-primary uppercase">
          <span aria-hidden="true">📖</span> Résumé
        </p>
        <div className="whitespace-pre-line text-base leading-relaxed text-foreground">
          {contenuFr}
        </div>
      </div>

      {contenuAr && (
        <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 shadow-sm">
          {/* `dir="rtl"` seulement sur le texte, pas sur toute la carte :
              sinon il inverse aussi la ligne d'en-tête (flex), qui doit
              rester alignée comme celle de la carte française (icône à
              gauche, cohérent visuellement entre les deux cartes). */}
          <p className="flex items-center gap-2 border-b border-border pb-2 text-xs font-semibold tracking-wide text-primary uppercase">
            <span aria-hidden="true">📖</span> ملخص
          </p>
          <div
            dir="rtl"
            lang="ar"
            className="whitespace-pre-line font-arabe text-lg leading-loose text-foreground"
          >
            {contenuAr}
          </div>
        </div>
      )}
    </div>
  );
}
