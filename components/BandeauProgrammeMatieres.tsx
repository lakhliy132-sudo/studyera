import Link from "next/link";

interface BandeauProgrammeMatieresProps {
  /** Jours avant l'examen régional, `null` si aucune session à venir. */
  joursAvantExamen: number | null;
  chapitresLus: number;
  totalChapitres: number;
}

/**
 * Bandeau sombre en tête de /matieres pour un élève connecté : compte à
 * rebours, part du programme déjà couverte, rythme conseillé. Repris
 * d'une maquette fournie par l'utilisateur ("fais ce changement sur la
 * partie les matieres").
 *
 * Deux écarts assumés par rapport à la maquette, pour ne rien
 * inventer :
 *
 * - Elle annonce « Tu as couvert 38 % du programme », tous sujets
 *   confondus. Seule la lecture des chapitres de français est
 *   enregistrée (table `progression`) : aucun suivi n'existe encore
 *   pour les leçons d'arabe, d'histoire-géographie et d'éducation
 *   islamique. Le libellé dit donc « du programme de français »,
 *   plutôt qu'un pourcentage global qui serait faux.
 * - Le rythme conseillé est calculé (chapitres restants ÷ semaines
 *   restantes avant l'examen), pas un chiffre fixe : la maquette
 *   affiche « 3 leçons par semaine », ce qui n'a de sens que pour
 *   l'élève de la maquette, à la date de la maquette.
 *
 * Le dégradé part d'un bleu nuit fixe plutôt que d'un token de thème :
 * le texte posé dessus est blanc, il doit le rester quelle que soit la
 * palette choisie.
 */
export default function BandeauProgrammeMatieres({
  joursAvantExamen,
  chapitresLus,
  totalChapitres,
}: BandeauProgrammeMatieresProps) {
  const pourcentage =
    totalChapitres > 0 ? Math.round((100 * chapitresLus) / totalChapitres) : 0;
  const restants = Math.max(0, totalChapitres - chapitresLus);
  const semaines =
    joursAvantExamen !== null && joursAvantExamen > 7
      ? Math.floor(joursAvantExamen / 7)
      : null;
  const rythme = semaines && restants > 0 ? Math.ceil(restants / semaines) : null;

  return (
    <section
      style={{
        background:
          "linear-gradient(120deg, #131b33 0%, color-mix(in srgb, var(--color-primary) 38%, #131b33) 100%)",
      }}
      className="flex flex-col gap-5 rounded-[22px] p-5 sm:p-8 text-white lg:flex-row lg:items-center lg:gap-10"
    >
      {joursAvantExamen !== null && (
        <div className="flex shrink-0 flex-col">
          <span className="font-serif text-[40px] leading-none font-bold">
            J−{joursAvantExamen}
          </span>
          <span className="mt-1 text-[13px] text-white/70">
            avant l&apos;examen régional
          </span>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col gap-2.5">
        <p className="text-lg font-semibold">
          Tu as couvert {pourcentage} % du programme de français
        </p>
        <div
          className="h-2 w-full overflow-hidden rounded-full bg-white/15"
          role="progressbar"
          aria-valuenow={pourcentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Part du programme de français déjà lue"
        >
          <div
            style={{ width: `${pourcentage}%` }}
            className="h-full rounded-full bg-gradient-to-r from-[#f97316] to-[#fbbf24]"
          />
        </div>
        <p className="text-[13px] text-white/70">
          {rythme
            ? `Rythme conseillé : ${rythme} chapitre${rythme > 1 ? "s" : ""} par semaine pour finir avant l'examen.`
            : restants === 0 && totalChapitres > 0
              ? "Tous les chapitres sont lus. Garde le rythme sur les autres matières."
              : `${restants} chapitre${restants > 1 ? "s" : ""} encore à lire.`}
        </p>
      </div>

      <Link
        href="/calendrier"
        className="shrink-0 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/25"
      >
        Voir mon planning
      </Link>
    </section>
  );
}
