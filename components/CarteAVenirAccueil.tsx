import Link from "next/link";

import { IconeCalendrier, IconeChevronBas, IconeFleche } from "@/components/icones";
import { EXAMEN_REGIONAL_1BAC, sessionAVenir } from "@/lib/calendrier";
import { couleurCategorie, libelleCategorie, type EvenementEleve } from "@/lib/supabase/evenements";

interface Echeance {
  cle: string;
  titre: string;
  date: Date;
  precision: string;
  couleur: string;
}

const FORMAT_DATE = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" });

/** `AAAA-MM-JJ` → date locale, sans passer par l'UTC (une date sans
 * heure lue avec `new Date("2026-10-15")` tomberait la veille selon le
 * fuseau). */
function dateLocale(jour: string): Date {
  const [annee, mois, j] = jour.split("-").map(Number);
  return new Date(annee, mois - 1, j);
}

/**
 * "À venir" de l'accueil connecté, d'après la dernière maquette de
 * l'utilisateur. Remplace l'ancienne carte "Aujourd'hui", qui ne
 * pouvait afficher que "Bientôt disponible".
 *
 * Que des échéances réelles, les trois plus proches :
 * - les sessions de l'examen régional encore à venir (lib/calendrier.ts) ;
 * - les événements que l'élève a lui-même ajoutés dans /calendrier
 *   (table `evenements_eleve`), à partir d'aujourd'hui.
 * Les lignes de la maquette ("Devoir surveillé 22 oct.", "Révision
 * 28 oct. Mathématiques") étaient des exemples : elles ne sont pas
 * reprises. Sans échéance, un état vide renvoie vers le calendrier.
 */
export default function CarteAVenirAccueil({ evenements }: { evenements: EvenementEleve[] }) {
  const aujourdHui = new Date();
  aujourdHui.setHours(0, 0, 0, 0);

  const echeances: Echeance[] = [
    ...EXAMEN_REGIONAL_1BAC.filter(sessionAVenir).map((session) => ({
      cle: `examen-${session.libelle}`,
      titre: session.titre,
      date: session.debut,
      precision: session.libelle,
      couleur: "var(--color-primary)",
    })),
    ...evenements
      .map((evenement) => ({
        cle: evenement.id,
        titre: evenement.titre,
        date: dateLocale(evenement.date),
        precision: libelleCategorie(evenement.categorie),
        couleur: couleurCategorie(evenement.categorie),
      }))
      .filter((echeance) => echeance.date >= aujourdHui),
  ]
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 3);

  return (
    <div className="rounded-[24px] border border-border bg-surface p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <IconeCalendrier className="size-5 text-primary" />
          <p className="font-serif text-xl font-bold text-ink">À venir</p>
        </div>
        <Link href="/calendrier" className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          Voir tout
          <IconeFleche className="size-3.5" />
        </Link>
      </div>

      {echeances.length === 0 ? (
        <div className="flex flex-col items-center gap-1.5 py-5 text-center">
          <p className="text-sm font-semibold text-ink">Rien de prévu pour l&apos;instant</p>
          <Link href="/calendrier" className="text-xs text-primary hover:underline">
            Ajoute tes contrôles et devoirs dans le calendrier
          </Link>
        </div>
      ) : (
        <ul className="flex flex-col">
          {echeances.map((echeance) => (
            <li key={echeance.cle}>
              <Link
                href="/calendrier"
                className="group flex items-center gap-3.5 rounded-[14px] px-1.5 py-3 transition-colors hover:bg-surface-muted"
              >
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-full"
                  style={{
                    color: echeance.couleur,
                    backgroundColor: `color-mix(in srgb, ${echeance.couleur} 14%, var(--color-surface))`,
                  }}
                >
                  <IconeCalendrier className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-ink">{echeance.titre}</span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {FORMAT_DATE.format(echeance.date)} · {echeance.precision}
                  </span>
                </span>
                <IconeChevronBas className="size-4 shrink-0 -rotate-90 text-subtle-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
