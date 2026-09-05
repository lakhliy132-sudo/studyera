import { IconeCalendrier } from "@/components/icones";
import { genererGrilleMois, JOURS_SEMAINE_COURT } from "@/lib/calendrier";

const NOM_MOIS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

/**
 * /calendrier — demandé explicitement par l'utilisateur comme nouveau
 * lien de nav ("Ajoute a cote de l acceuil tableau de bord matiere
 * calendrier aussi progres").
 *
 * Affiche pour l'instant uniquement la grille du mois en cours, sans
 * aucun événement dessus : les dates réelles des examens du bac et un
 * éventuel planning de révision n'ont pas été fournies, et ce sont des
 * informations factuelles qu'il serait dangereux d'inventer (un élève
 * pourrait s'y fier pour une vraie date d'examen) — voir le message
 * "Bientôt disponible" plus bas. Rien n'empêche techniquement
 * d'ajouter des événements plus tard (table Supabase à créer) une fois
 * le contenu réel fourni.
 */
export default function PageCalendrier() {
  const aujourdHui = new Date();
  const semaines = genererGrilleMois(aujourdHui);

  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-9 px-6 pt-9 pb-16">
        <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="flex size-8 items-center justify-center rounded-full border border-primary/20 bg-primary-tint text-primary">
              <IconeCalendrier className="size-4" />
            </span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <h1 className="mt-5 font-serif text-4xl font-bold tracking-tight text-ink">
            Le <span className="text-primary italic">calendrier</span>
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Dates d&apos;examens et rappels de révision, bientôt sur cette page.
          </p>
        </section>

        <div className="rounded-[20px] border border-border bg-surface p-6 shadow-sm sm:p-8">
          <p className="mb-5 text-center font-serif text-lg font-bold text-ink">
            {NOM_MOIS[aujourdHui.getMonth()]} {aujourdHui.getFullYear()}
          </p>

          <div className="grid grid-cols-7 gap-1.5 text-center">
            {JOURS_SEMAINE_COURT.map((jour) => (
              <div key={jour} className="py-1.5 text-xs font-semibold text-subtle-foreground">
                {jour}
              </div>
            ))}

            {semaines.flat().map((jour, index) => (
              <div
                key={index}
                className={`flex aspect-square items-center justify-center rounded-lg text-sm ${
                  jour.estAujourdHui
                    ? "bg-primary font-bold text-white"
                    : jour.dansLeMois
                      ? "text-foreground"
                      : "text-subtle-foreground/50"
                }`}
              >
                {jour.date.getDate()}
              </div>
            ))}
          </div>
        </div>

        <p className="rounded-md border border-dashed border-border-strong bg-background p-8 text-center text-muted-foreground">
          Bientôt disponible : dates d&apos;examens et planning de révision.
        </p>
      </div>
    </main>
  );
}
