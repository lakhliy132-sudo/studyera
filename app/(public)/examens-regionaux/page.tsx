import Link from "next/link";

import {
  IconeCalendrier,
  IconeFleche,
  IconeHorloge,
} from "@/components/icones";
import {
  EXAMEN_REGIONAL_1BAC,
  joursAvant,
  sessionAVenir,
} from "@/lib/calendrier";
import { PREPARATION_PAR_MATIERE } from "@/lib/examens-regionaux";
import { couleurMatiere } from "@/lib/palette-matieres";

const FORMAT_DATE = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/**
 * /examens-regionaux — tout ce qui concerne l'examen régional de 1ère
 * année du baccalauréat : les dates des deux sessions et les
 * ressources du site qui préparent à l'épreuve, matière par matière.
 *
 * Demandé par l'utilisateur comme une cinquième case de /matieres
 * ("fais moi une case qui s'appelle examens regionaux").
 *
 * La page ne contient aucune annale : aucun sujet d'années
 * précédentes n'est en base, et en inventer donnerait à réviser des
 * épreuves qui n'ont jamais existé. La page le dit, plutôt que
 * d'afficher une rubrique vide.
 */
export default function PageExamensRegionaux() {
  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-10 px-6 pt-6 pb-10 sm:px-9 sm:pt-9 sm:pb-16">
        <Link
          href="/matieres"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Retour aux matières
        </Link>

        <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="flex size-10 items-center justify-center rounded-full border border-primary/20 bg-primary-tint text-primary">
            <IconeCalendrier className="size-5" />
          </span>
          <h1 className="mt-4 font-serif text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl">
            Examens <span className="text-primary italic">régionaux</span>
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            Les dates de l&apos;épreuve et tout ce que le site propose pour
            t&apos;y préparer.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-xl font-bold text-ink">
            Les dates de l&apos;épreuve
          </h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-[18px]">
            {EXAMEN_REGIONAL_1BAC.map((session) => {
              const aVenir = sessionAVenir(session);
              const jours = joursAvant(session.debut);
              return (
                <li
                  key={session.libelle}
                  className="flex items-start gap-4 rounded-[18px] border border-border bg-surface p-5 shadow-sm"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[13px] bg-primary-tint text-primary">
                    <IconeHorloge className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-serif text-lg font-bold text-ink">
                      {session.libelle}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      Du {FORMAT_DATE.format(session.debut)} au{" "}
                      {FORMAT_DATE.format(session.fin)}
                    </p>
                    <p className="mt-2 text-xs font-semibold text-primary">
                      {aVenir && jours > 0
                        ? `Dans ${jours} jours`
                        : aVenir
                          ? "C'est maintenant"
                          : "Session passée"}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="text-xs text-subtle-foreground">
            Dates de la session 2027 pour la 1<sup>re</sup> année du
            baccalauréat. Vérifie toujours auprès de ton établissement : le
            calendrier officiel peut être ajusté.
          </p>
        </section>

        <section className="flex flex-col gap-5">
          <h2 className="font-serif text-xl font-bold text-ink">
            Se préparer, matière par matière
          </h2>
          {PREPARATION_PAR_MATIERE.map((bloc) => {
            const couleur = couleurMatiere(bloc.slug);
            return (
              <div key={bloc.slug} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    style={{ backgroundColor: couleur }}
                    className="h-5 w-1 rounded-full"
                  />
                  <h3 className="font-serif text-lg font-bold text-ink">
                    {bloc.matiere}
                  </h3>
                </div>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-[18px]">
                  {bloc.ressources.map((ressource) => (
                    <li key={ressource.href}>
                      <Link
                        href={ressource.href}
                        className="group flex h-full flex-col rounded-[18px] border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
                      >
                        {ressource.titreArabe && (
                          <span
                            dir="rtl"
                            className="font-arabe w-fit text-lg leading-snug font-bold text-ink"
                          >
                            {ressource.titreArabe}
                          </span>
                        )}
                        <span className="font-serif text-base font-bold text-ink">
                          {ressource.titre}
                        </span>
                        <span className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {ressource.description}
                        </span>
                        <span
                          style={{ color: couleur }}
                          className="mt-3 flex items-center gap-1.5 text-sm font-semibold"
                        >
                          Ouvrir
                          <IconeFleche className="size-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-ink">
            Annales des années précédentes
          </h2>
          <p className="rounded-[18px] border border-dashed border-border-strong bg-surface p-5 text-sm text-muted-foreground">
            Aucun sujet d&apos;examen des années précédentes n&apos;est encore
            disponible sur le site. Dès que des annales seront ajoutées, elles
            apparaîtront ici, classées par année et par matière.
          </p>
        </section>
      </div>
    </main>
  );
}
