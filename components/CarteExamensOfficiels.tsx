import Link from "next/link";

import { EXAMEN_REGIONAL_1BAC, sessionAVenir } from "@/lib/calendrier";

const FORMAT_FIN = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" });

/** Les quatre matières de l'examen régional, celles du site. */
const MATIERES_EXAMEN = [
  { nom: "Français", href: "/francais" },
  { nom: "Arabe", href: "/arabe" },
  { nom: "Histoire-Géo", href: "/histoire-geo" },
  { nom: "Éducation islamique", href: "/education-islamique" },
];

/**
 * "Examens officiels" de /calendrier, d'après la dernière maquette :
 * carte sombre avec les deux sessions de l'examen régional (dates
 * sourcées dans lib/calendrier.ts) et leur état, calculé — "À venir"
 * ou "Passé" —, puis les matières de l'épreuve, chacune menant à sa
 * page. Remplace l'ancienne carte "Examens" (CarteExamenRegional).
 *
 * Fond sur les jetons `--fond-sombre-*`, lisible en mode sombre et dans
 * toutes les palettes ; le jaune des pastilles est celui des autres
 * cartes sombres du site.
 */
export default function CarteExamensOfficiels() {
  return (
    <section
      className="relative overflow-hidden rounded-[28px] p-6 text-white shadow-[0_24px_50px_-24px_rgba(10,16,32,0.6)] sm:p-7"
      style={{ background: "linear-gradient(160deg, var(--fond-sombre-haut) 0%, var(--fond-sombre-bas) 100%)" }}
    >
      <span aria-hidden="true" className="pointer-events-none absolute -right-16 -bottom-16 size-56 rounded-full bg-primary/40 blur-3xl" />

      <h2 className="relative font-serif text-2xl font-bold">Examens officiels</h2>

      <ul className="relative mt-5 flex flex-col gap-3">
        {EXAMEN_REGIONAL_1BAC.map((session, index) => {
          const aVenir = sessionAVenir(session);
          return (
            <li key={session.titre} className="rounded-[18px] border border-white/15 bg-white/[0.06] px-5 py-4">
              <div className="flex items-start justify-between gap-3">
                <p className="font-serif text-lg leading-snug">
                  {session.titre}
                  {index === 0 && ", 1ʳᵉ bac"}
                </p>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${
                    aVenir ? "bg-[#f7c948] text-[#1d2340]" : "bg-white/15 text-white/70"
                  }`}
                >
                  {aVenir ? "À venir" : "Passé"}
                </span>
              </div>
              <p className="mt-1 text-sm text-white/70">
                {session.debut.getDate()} – {FORMAT_FIN.format(session.fin)}
              </p>
            </li>
          );
        })}
      </ul>

      <ul className="relative mt-5 flex flex-wrap gap-2" aria-label="Matières de l'examen régional">
        {MATIERES_EXAMEN.map((matiere) => (
          <li key={matiere.href}>
            <Link
              href={matiere.href}
              className="block rounded-full bg-white/10 px-3.5 py-1.5 text-sm text-white/90 transition-colors hover:bg-white/20"
            >
              {matiere.nom}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
