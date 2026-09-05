import PiedDePage from "@/components/PiedDePage";

/**
 * Layout du groupe (public) : ajoute le pied de page (voir
 * components/PiedDePage.tsx) à toutes les pages publiques, sans
 * toucher au layout racine (app/layout.tsx) — donc sans l'appliquer
 * aux pages "app" du groupe (eleve) (tableau de bord, progrès,
 * correcteur, activité, messages) ni (admin), qui n'ont pas vocation à
 * en avoir un.
 *
 * `flex min-h-screen flex-col` + `flex-1` sur le conteneur des pages :
 * le pied de page reste en bas de l'écran même quand le contenu d'une
 * page est court (ex. /a-propos, /calendrier), plutôt que de coller
 * juste sous le contenu.
 */
export default function LayoutPublic({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">{children}</div>
      <PiedDePage />
    </div>
  );
}
