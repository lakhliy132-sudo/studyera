import Link from "next/link";

import type { OeuvreProgression } from "@/lib/supabase/tableauDeBord";

/** Réutilisé par /progres (app/(eleve)/progres/page.tsx) — n'était
 * plus utilisé depuis aucune page depuis la refonte du tableau de
 * bord (remplacé là-bas par CarteProgressionAnneau.tsx (total) +
 * ListeProgrammeOeuvres.tsx (par œuvre)), mais correspond exactement
 * au détail complet voulu sur une page dédiée à la progression. */
interface BlocProgressionProps {
  chapitresLus: number;
  copiesCorrigees: number;
  noteMoyenne: number | null;
  parOeuvre: OeuvreProgression[];
}

/**
 * Troisième bloc du tableau de bord ("PROGRESSION") : trois chiffres
 * puis une barre d'avancement par œuvre.
 *
 * Le bloc entier bascule en message d'invitation si l'élève n'a
 * *strictement rien* fait (ni chapitre lu, ni copie corrigée) : c'est
 * le cas "nouvel élève, zéro partout" explicitement visé par la règle
 * "aucun bloc vide". Dès qu'il y a la moindre donnée, on affiche les
 * vrais chiffres tels quels (y compris un 0 individuel, ex. "0 copie
 * corrigée" alors que des chapitres sont lus : ce n'est plus le cas
 * "tout est vide", juste une statistique normale).
 */
export default function BlocProgression({
  chapitresLus,
  copiesCorrigees,
  noteMoyenne,
  parOeuvre,
}: BlocProgressionProps) {
  const aDesDonnees = chapitresLus > 0 || copiesCorrigees > 0;

  return (
    <section className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6">
      <p className="text-sm font-medium text-muted-foreground">Progression</p>

      {!aDesDonnees ? (
        <p className="text-muted-foreground">
          Ta progression apparaîtra ici dès que tu auras commencé à lire ou à
          t&apos;entraîner.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-semibold text-foreground">{chapitresLus}</p>
              <p className="text-xs text-muted-foreground">chapitres lus</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">{copiesCorrigees}</p>
              <p className="text-xs text-muted-foreground">copies corrigées</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">
                {noteMoyenne !== null ? noteMoyenne.toFixed(1) : "—"}
              </p>
              <p className="text-xs text-muted-foreground">note moyenne</p>
            </div>
          </div>

          {parOeuvre.length > 0 && (
            <div className="flex flex-col gap-3">
              {parOeuvre.map((oeuvre) => {
                const pourcentage = Math.round(
                  (oeuvre.chapitresLus / oeuvre.totalChapitres) * 100,
                );

                return (
                  <Link
                    key={oeuvre.slug}
                    href={`/oeuvres/${oeuvre.slug}`}
                    className="flex flex-col gap-1"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{oeuvre.titreFr}</span>
                      <span className="text-muted-foreground">
                        {oeuvre.chapitresLus}/{oeuvre.totalChapitres}
                      </span>
                    </div>
                    <div
                      role="progressbar"
                      aria-valuenow={oeuvre.chapitresLus}
                      aria-valuemin={0}
                      aria-valuemax={oeuvre.totalChapitres}
                      aria-label={oeuvre.titreFr}
                      className="h-1.5 w-full overflow-hidden rounded-full bg-surface-muted"
                    >
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${pourcentage}%` }}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      )}
    </section>
  );
}
