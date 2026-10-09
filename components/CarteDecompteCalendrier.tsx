import { joursAvant, type SessionExamen } from "@/lib/calendrier";

const FORMAT_DATE = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" });

/**
 * Carte bleue du haut de /calendrier, d'après la dernière maquette :
 * jours restants avant l'examen régional, date de la session, et la
 * barre "Rentrée → Examen" avec la part de l'année déjà écoulée.
 *
 * Tout est calculé : la date vient de lib/calendrier.ts (sourcée), la
 * rentrée est le 1ᵉʳ septembre précédant la session, comme dans
 * l'ancien planning. Fond sur les jetons `--fond-sombre-*`, pour que le
 * texte blanc reste lisible dans toutes les palettes et en mode sombre.
 */
export default function CarteDecompteCalendrier({ session }: { session: SessionExamen }) {
  const jours = joursAvant(session.debut);
  const rentree = new Date(session.debut.getFullYear() - 1, 8, 1);
  const total = joursAvant(session.debut) - joursAvant(rentree);
  const ecoules = -joursAvant(rentree);
  const progression = total > 0 ? Math.min(100, Math.max(0, (ecoules / total) * 100)) : 0;

  return (
    <div
      className="relative flex h-full flex-col overflow-hidden rounded-[28px] p-6 text-white shadow-[0_24px_50px_-24px_rgba(10,16,32,0.6)] sm:p-9"
      style={{ background: "linear-gradient(135deg, var(--fond-sombre-actif) 0%, var(--fond-sombre-haut) 100%)" }}
    >
      <span aria-hidden="true" className="pointer-events-none absolute -top-20 -right-16 size-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/80 sm:text-base">{session.titre}</p>
          <p className="mt-2 flex items-baseline gap-2">
            <span className="font-serif text-[64px] leading-none font-bold tabular-nums sm:text-[84px]">{jours}</span>
            <span className="text-lg text-white/85">jour{jours > 1 ? "s" : ""}</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-white/80">{session.libelle}</p>
          <p className="mt-1 font-serif text-xl sm:text-2xl">{FORMAT_DATE.format(session.debut)}</p>
        </div>
      </div>

      <div className="relative mt-auto pt-10">
        <div className="relative h-1.5 rounded-full bg-white/20">
          <div className="h-full rounded-full bg-white" style={{ width: `${progression}%` }} />
          <span
            aria-hidden="true"
            className="absolute top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-white/60 shadow"
            style={{ left: `${progression}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between gap-3 text-xs text-white/75 sm:text-sm">
          <span>Rentrée</span>
          <span>{Math.round(progression)} % de l&apos;année écoulée</span>
          <span>Examen</span>
        </div>
      </div>
    </div>
  );
}
