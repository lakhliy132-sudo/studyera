import { IconeCalendrier } from "@/components/icones";
import { EXAMEN_REGIONAL_1BAC } from "@/lib/calendrier";

const NOM_MOIS = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

function formaterPeriode(debut: Date, fin: Date) {
  return `${debut.getDate()}-${fin.getDate()} ${NOM_MOIS[fin.getMonth()]} ${fin.getFullYear()}`;
}

/**
 * Carte "Examen régional", affichée à côté de la grille du calendrier
 * (voir app/(public)/calendrier/page.tsx) — sortie de l'en-tête de
 * CalendrierMois.tsx à la demande explicite de l'utilisateur ("nonnn
 * je veux que la partie d examen soit a coté") : un premier essai
 * plaçait un badge dans l'en-tête de la grille, jugé pas assez visible
 * comme élément "à côté".
 *
 * Dates sourcées, pas inventées — voir le commentaire de
 * EXAMEN_REGIONAL_1BAC dans lib/calendrier.ts pour la source exacte et
 * l'avertissement "à revérifier chaque année". Le lien "Source"
 * permet à un élève de vérifier lui-même avant de s'y fier.
 */
export default function CarteExamenRegional() {
  return (
    <div className="flex h-fit flex-col gap-5 rounded-[24px] border border-border-strong bg-primary-tint p-7 shadow-sm">
      <div className="flex items-center gap-3 text-primary">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-surface">
          <IconeCalendrier className="size-5" />
        </span>
        <p className="font-serif text-xl leading-tight font-bold text-ink">Examen régional — 1ère bac</p>
      </div>

      <ul className="flex flex-col gap-3">
        {EXAMEN_REGIONAL_1BAC.map((session) => (
          <li key={session.libelle} className="rounded-[14px] bg-surface px-5 py-4">
            <p className="text-sm font-semibold text-primary">{session.libelle}</p>
            <p className="text-xl font-bold text-ink">
              {formaterPeriode(session.debut, session.fin)}
            </p>
          </li>
        ))}
      </ul>

      <a
        href="https://www.men.gov.ma/index.php/fr/notes"
        target="_blank"
        rel="noreferrer"
        className="text-xs text-muted-foreground underline hover:text-primary"
      >
        Source : ministère de l&apos;Éducation nationale
      </a>
    </div>
  );
}
