import { IconeDocument, IconeFleche, IconeInfo } from "@/components/icones";
import { EXAMEN_REGIONAL_1BAC, sessionAVenir } from "@/lib/calendrier";

const NOM_MOIS = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

function formaterPeriode(debut: Date, fin: Date) {
  return `${debut.getDate()} – ${fin.getDate()} ${NOM_MOIS[fin.getMonth()]} ${fin.getFullYear()}`;
}

/**
 * Panneau "Examens", affiché à côté de la carte "Mois" (voir
 * app/(public)/calendrier/page.tsx) — reprend la maquette fournie par
 * l'utilisateur ("regarde la photo que je mis dans le fichier fais la
 * comme ca") : une carte par session, bordure de couleur à gauche,
 * pastille "À venir"/"Passé", date, chevron ; source en pied de carte.
 *
 * Dates sourcées, pas inventées — voir le commentaire de
 * EXAMEN_REGIONAL_1BAC dans lib/calendrier.ts pour la source exacte et
 * l'avertissement "à revérifier chaque année". La pastille "À venir"/
 * "Passé" est calculée depuis la date du jour (sessionAVenir), pas
 * écrite en dur.
 */
export default function CarteExamenRegional() {
  return (
    <div className="flex h-fit flex-col gap-6 rounded-[24px] border border-border bg-surface p-7 shadow-sm sm:p-8">
      <div className="flex items-center gap-3.5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
          <IconeDocument className="size-5" />
        </span>
        <div>
          <p className="font-serif text-xl font-bold text-ink">Examens</p>
          <p className="text-[13px] text-muted-foreground">Retrouve ici toutes tes épreuves et leurs rappels.</p>
        </div>
      </div>

      <ul className="flex flex-col gap-3.5">
        {EXAMEN_REGIONAL_1BAC.map((session, index) => {
          const aVenir = sessionAVenir(session);

          return (
            <li key={session.titre}>
              <div
                className={`flex items-center gap-3 rounded-[14px] border-l-4 bg-background px-4 py-3.5 ${
                  index === 0 ? "border-l-primary" : "border-l-primary-vif"
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-serif text-[15px] font-bold text-ink">
                      {session.titre}
                      {index === 0 && " — 1ère bac"}
                    </p>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        aVenir ? "bg-primary-tint text-primary" : "bg-surface-muted text-subtle-foreground"
                      }`}
                    >
                      {aVenir ? "À venir" : "Passé"}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{formaterPeriode(session.debut, session.fin)}</p>
                </div>
                <IconeFleche className="size-4 shrink-0 text-subtle-foreground" />
              </div>
            </li>
          );
        })}
      </ul>

      <p className="flex items-start gap-2 border-t border-border pt-5 text-xs text-muted-foreground">
        <IconeInfo className="mt-px size-3.5 shrink-0" />
        <a
          href="https://www.men.gov.ma/index.php/fr/notes"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-primary"
        >
          Source : ministère de l&apos;Éducation nationale
        </a>
      </p>
    </div>
  );
}
