import Link from "next/link";

import { creerClientServeur } from "@/lib/supabase/server";
import { recupererActivitesRecentes } from "@/lib/supabase/tableauDeBord";

/** Limite haute plutôt qu'une vraie pagination : suffisant pour
 * l'instant, à revoir si l'historique d'un élève actif devient long. */
const NOMBRE_MAX_ACTIVITES = 200;

function formaterDate(dateIso: string) {
  return new Date(dateIso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

/**
 * Page protégée : /activite
 *
 * Historique complet des activités de l'élève connecté, atteint depuis
 * le lien "Tout voir" du bloc "Dernières activités" du tableau de bord
 * (BlocDernieresActivites, session 5).
 */
export default async function PageActivite() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const activites = await recupererActivitesRecentes(user?.id ?? null, NOMBRE_MAX_ACTIVITES);

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-4 px-4 py-8">
      <Link
        href="/tableau-de-bord"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Retour au tableau de bord
      </Link>
      <h1 className="text-xl font-semibold text-foreground">Mon activité</h1>

      {activites.length === 0 ? (
        <p className="text-muted-foreground">Aucune activité pour l&apos;instant.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-border rounded-lg border border-border">
          {activites.map((activite) => {
            const contenu = (
              <>
                <span className="text-sm text-foreground">{activite.titre}</span>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {formaterDate(activite.createdAt)}
                </span>
              </>
            );

            return (
              <li key={activite.id}>
                {activite.url ? (
                  <Link
                    href={activite.url}
                    className="flex items-center justify-between gap-3 p-4 hover:bg-surface-muted"
                  >
                    {contenu}
                  </Link>
                ) : (
                  <div className="flex items-center justify-between gap-3 p-4">{contenu}</div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
