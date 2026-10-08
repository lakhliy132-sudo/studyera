import CarteExamenRegional from "@/components/CarteExamenRegional";
import EnteteCalendrier from "@/components/EnteteCalendrier";
import PlanningAgenda from "@/components/PlanningAgenda";
import { IconeCoche } from "@/components/icones";
import { prochaineSession } from "@/lib/calendrier";
import { recupererEvenementsEleve } from "@/lib/supabase/evenements";
import { creerClientServeur } from "@/lib/supabase/server";

/**
 * /calendrier — demandé explicitement par l'utilisateur comme nouveau
 * lien de nav ("Ajoute a cote de l acceuil tableau de bord matiere
 * calendrier aussi progres"), enrichie du switch de mois et de la date
 * de l'examen régional, réagencée en 2 colonnes, puis agrandie (voir
 * l'historique dans ETAT.md) — et enfin reprise sur une maquette
 * complète fournie par l'utilisateur ("regarde la photo que je mis
 * dans le fichier fais la comme ca") : bannière d'en-tête
 * (EnteteCalendrier.tsx), carte "Mois" avec liste d'événements
 * (CalendrierMois.tsx), carte "Examens" (CarteExamenRegional.tsx),
 * signature en pied de page — mise en page propre à cette page, pas
 * le gabarit centré/pastille utilisé par /matieres, /francais, etc.
 *
 * Cartes "Mois"/"Examens" collées au bord gauche, pas centrées —
 * demandé explicitement par l'utilisateur ("Je veux que les sections
 * « Mois » et « Examens » soient placées au début de la ligne,
 * complètement à gauche, et non au centre de la page... aucun
 * centrage horizontal"). `mx-auto` retiré (`w-full` seul) sur ce
 * conteneur : plus de centrage. `max-w-5xl` remis juste après (sans
 * `mx-auto`, donc toujours collé à gauche) — un essai sans aucune
 * limite de largeur avait rendu les cartes bien trop grandes sur les
 * grands écrans ("la forme du mois et examens est trop grande") ;
 * un 2ᵉ essai (`max-w-4xl`) rétrécissait trop la carte "Mois", au
 * point de tasser sa grille interne (colonne "Événements à venir" à
 * largeur fixe, voir CalendrierMois.tsx) — `max-w-5xl` retrouve
 * l'équilibre déjà validé lors de la reprise de la maquette.
 * Même changement sur EnteteCalendrier.tsx pour que le texte de la
 * bannière reste aligné au même bord gauche que les cartes en dessous.
 *
 * Bandeau CompteARebours ajouté au-dessus du reste, à la demande
 * explicite de l'utilisateur ("ajoute autre chose dans la partie de
 * calendrier") : jours restants avant la prochaine session de
 * l'examen régional, calculé (pas inventé) — voir son commentaire.
 */
export default async function PageCalendrier() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const evenements = await recupererEvenementsEleve();

  // Date de la prochaine session d'examen et début de l'année
  // scolaire, passés au planning : il ne les écrit pas en dur.
  const session = prochaineSession();
  const versCle = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  const dateExamen = session ? versCle(session.debut) : null;
  const anneeRentree = session
    ? session.debut.getFullYear() - 1
    : new Date().getFullYear();
  const debutAnnee = `${anneeRentree}-09-01`;

  return (
    <main className="relative flex flex-col">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--color-background) 0%, color-mix(in srgb, var(--color-primary) 6%, var(--color-background)) 100%)",
        }}
      />

      <div className="animate-entree-carte">
        <EnteteCalendrier />
      </div>

      <div className="flex w-full flex-col gap-4 px-6 py-6 sm:px-9 lg:px-16 xl:px-24 2xl:px-40">
        <div
          className="animate-entree-carte"
          style={{ animationDelay: "80ms" }}
        >
          <PlanningAgenda
            evenements={evenements}
            connecte={Boolean(user)}
            dateExamen={dateExamen}
            debutAnnee={debutAnnee}
          />
        </div>

        <div
          className="animate-entree-carte"
          style={{ animationDelay: "240ms" }}
        >
          <CarteExamenRegional />
        </div>

        <p className="flex items-center justify-center gap-2.5 text-sm text-muted-foreground">
          <span aria-hidden="true" className="h-px w-10 bg-border" />
          <IconeCoche className="size-4 text-primary" />
          Studyera, ton espace pour progresser.
          <span aria-hidden="true" className="h-px w-10 bg-border" />
        </p>
      </div>
    </main>
  );
}
