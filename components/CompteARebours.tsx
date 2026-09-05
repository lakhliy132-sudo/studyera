import { IconeHorloge } from "@/components/icones";
import { joursAvant, prochaineSession } from "@/lib/calendrier";

function formaterDate(date: Date) {
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

/**
 * Bandeau "compte à rebours" avant l'examen régional le plus proche —
 * ajouté à la demande explicite de l'utilisateur ("ajoute autre chose
 * dans la partie de calendrier"), en complément des cartes "Mois" et
 * "Examens" déjà en place.
 *
 * Nombre de jours calculé depuis la date du jour (`joursAvant`), pas
 * écrit en dur : reste juste au fil du temps sans intervention. Se
 * base sur les mêmes dates sourcées que le reste de la page (voir
 * EXAMEN_REGIONAL_1BAC dans lib/calendrier.ts) — rien d'inventé.
 * Disparaît silencieusement (`return null`) si les deux sessions sont
 * déjà passées, plutôt que d'afficher un nombre négatif absurde.
 */
export default function CompteARebours() {
  const session = prochaineSession();
  if (!session) return null;

  const jours = joursAvant(session.debut);
  const texteJours = jours > 0 ? `${jours} jour${jours > 1 ? "s" : ""}` : jours === 0 ? "Aujourd'hui" : "En cours";

  return (
    <div className="flex flex-wrap items-center gap-5 rounded-[24px] bg-gradient-to-r from-primary to-primary-vif px-7 py-6 text-white shadow-sm sm:px-8">
      <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white/15">
        <IconeHorloge className="size-6" />
      </span>
      <div>
        <p className="font-serif text-3xl font-bold">{texteJours}</p>
        <p className="text-sm text-white/85">
          avant {session.titre.toLowerCase()}
          {session.libelle !== session.titre && ` (${session.libelle.toLowerCase()})`} — {formaterDate(session.debut)}
        </p>
      </div>
    </div>
  );
}
