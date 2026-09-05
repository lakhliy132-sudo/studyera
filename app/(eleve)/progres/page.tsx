import Link from "next/link";

import BlocProgression from "@/components/BlocProgression";
import { creerClientServeur } from "@/lib/supabase/server";
import {
  recupererProgressionParOeuvre,
  recupererSerieJours,
  recupererStatsCopies,
} from "@/lib/supabase/tableauDeBord";

/**
 * Page protégée : /progres (voir CHEMINS_PROTEGES dans middleware.ts)
 *
 * Détail de la progression de l'élève — demandé explicitement par
 * l'utilisateur comme nouveau lien de nav à part entière ("Ajoute a
 * cote de l acceuil tableau de bord matiere calendrier aussi
 * progres"), distinct du tableau de bord qui n'affiche qu'un résumé
 * condensé (anneau global, voir CarteProgressionAnneau.tsx).
 *
 * Réutilise BlocProgression (chapitres lus par œuvre, copies
 * corrigées, note moyenne) : mêmes données réelles que le tableau de
 * bord (lib/supabase/tableauDeBord.ts), rien d'inventé — la série de
 * jours vient de `recupererSerieJours`, calculée depuis les vraies
 * entrées d'`activite`.
 */
export default async function PageProgres() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id ?? null;

  const [progression, statsCopies, serie] = await Promise.all([
    recupererProgressionParOeuvre(userId),
    recupererStatsCopies(userId),
    recupererSerieJours(userId),
  ]);

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-4 px-4 py-8">
      <Link href="/tableau-de-bord" className="text-sm text-muted-foreground hover:text-foreground">
        ← Retour au tableau de bord
      </Link>

      <div className="flex items-center justify-between gap-3">
        <h1 className="text-xl font-semibold text-foreground">Ma progression</h1>
        {serie > 0 && (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
            {serie} jour{serie > 1 ? "s" : ""} de suite
          </span>
        )}
      </div>

      <BlocProgression
        chapitresLus={progression.totalChapitresLus}
        copiesCorrigees={statsCopies.copiesCorrigees}
        noteMoyenne={statsCopies.noteMoyenne}
        parOeuvre={progression.parOeuvre}
      />
    </main>
  );
}
