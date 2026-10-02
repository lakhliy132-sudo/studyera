import ChoixPalette from "@/components/ChoixPalette";
import { IconePalette } from "@/components/icones";

/**
 * /parametres — réglages d'apparence de l'élève, d'après la maquette
 * fournie par l'utilisateur ("je veux faire comme ses themes de
 * couleur") : interrupteur de mode sombre et choix d'une palette.
 *
 * La maquette montre aussi des onglets "Profil académique",
 * "Paramètres de l'application" et "Billing" : ils ne sont pas repris,
 * aucun de ces réglages n'existe sur le site (et il n'y a pas de
 * facturation). Ajouter des onglets vides ferait croire à des
 * fonctionnalités absentes.
 */
export default function PageParametres() {
  return (
    <main className="flex w-full flex-col gap-6 px-6 py-8 sm:px-9">
      <div className="flex items-center gap-3.5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-[13px] bg-primary-tint text-primary">
          <IconePalette className="size-5" />
        </span>
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-ink">
            Apparence
          </h1>
          <p className="text-sm text-muted-foreground">
            Règle le thème et les couleurs du site.
          </p>
        </div>
      </div>

      <div className="max-w-3xl">
        <ChoixPalette />
      </div>
    </main>
  );
}
