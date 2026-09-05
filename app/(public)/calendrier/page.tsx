import CalendrierMois from "@/components/CalendrierMois";
import CarteExamenRegional from "@/components/CarteExamenRegional";
import { IconeCalendrier } from "@/components/icones";

/**
 * /calendrier — demandé explicitement par l'utilisateur comme nouveau
 * lien de nav ("Ajoute a cote de l acceuil tableau de bord matiere
 * calendrier aussi progres"), enrichie du switch de mois et de la date
 * de l'examen régional ("fais le switch des mois et juste a cote fais
 * la date d examen regional au maroc"), puis réagencée en 2 colonnes
 * pour que la carte examen soit vraiment à côté de la grille, pas dans
 * son en-tête ("nonnn je veux que la partie d examen soit a coté") —
 * voir CalendrierMois.tsx et CarteExamenRegional.tsx. Les deux cartes
 * agrandies ensuite ("je veux la taille des mois grand et aussi de
 * examen") : conteneur élargi une 2ᵉ fois (max-w-3xl → max-w-4xl) pour
 * laisser respirer les 2 colonnes désormais plus grandes ; empilées
 * sur mobile (grid-cols-1).
 */
export default function PageCalendrier() {
  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-9 px-6 pt-9 pb-16">
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
            Dates d&apos;examens et rappels de révision.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_320px]">
          <CalendrierMois />
          <CarteExamenRegional />
        </div>

        <p className="rounded-md border border-dashed border-border-strong bg-background p-8 text-center text-muted-foreground">
          D&apos;autres échéances (rappels de révision...) seront ajoutées ici.
        </p>
      </div>
    </main>
  );
}
