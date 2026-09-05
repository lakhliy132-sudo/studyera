import CalendrierMois from "@/components/CalendrierMois";
import CarteExamenRegional from "@/components/CarteExamenRegional";
import EnteteCalendrier from "@/components/EnteteCalendrier";
import { IconeCoche } from "@/components/icones";

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
 * centrage horizontal"). `mx-auto max-w-5xl` retiré (remplacé par
 * `w-full`) sur ce conteneur : les cartes s'étendent maintenant sur
 * toute la largeur disponible plutôt que d'être bornées et centrées.
 * Même changement sur EnteteCalendrier.tsx pour que le texte de la
 * bannière reste aligné au même bord gauche que les cartes en dessous.
 */
export default function PageCalendrier() {
  return (
    <main className="flex flex-col">
      <EnteteCalendrier />

      <div className="flex w-full flex-col gap-10 px-6 py-12 sm:px-9">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.7fr_1fr]">
          <CalendrierMois />
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
