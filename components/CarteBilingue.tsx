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
 */
export default function CarteBilingue({ contenuFr, contenuAr }: CarteBilingueProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex flex-col gap-2 rounded-lg border border-border bg-surface p-4 shadow-sm">
        <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <span aria-hidden="true">📖</span> Résumé
        </p>
        <div className="whitespace-pre-line text-sm text-foreground">{contenuFr}</div>
      </div>

      {contenuAr && (
        <div className="flex flex-col gap-2 rounded-lg border border-border bg-surface p-4 shadow-sm">
          {/* `dir="rtl"` seulement sur le texte, pas sur toute la carte :
              sinon il inverse aussi la ligne d'en-tête (flex), qui doit
              rester alignée comme celle de la carte française (icône à
              gauche, cohérent visuellement entre les deux cartes). */}
          <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <span aria-hidden="true">📖</span> ملخص
          </p>
          <div
            dir="rtl"
            lang="ar"
            className="whitespace-pre-line font-arabe text-base leading-loose text-foreground"
          >
            {contenuAr}
          </div>
        </div>
      )}
    </div>
  );
}
