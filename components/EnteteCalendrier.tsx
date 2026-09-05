import { IconeCalendrier } from "@/components/icones";

/**
 * Bannière d'en-tête de /calendrier — reprend une maquette fournie par
 * l'utilisateur ("regarde la photo que je mis dans le fichier fais la
 * comme ca") : pastille "Mon calendrier", titre sur 2 lignes (2ᵉ ligne
 * en bleu), sous-titre, note manuscrite décorative en haut à droite
 * (masquée sur mobile, pas la place). Propre à cette page (comme la
 * vague de l'accueil, voir app/(public)/page.tsx) : dégradé léger +
 * fin quadrillage diagonal en fond, sans toucher au layout global.
 */
export default function EnteteCalendrier() {
  return (
    <div className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary-tint/70 via-primary-tint/25 to-transparent">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, var(--color-primary) 0, var(--color-primary) 1px, transparent 1px, transparent 34px)",
          maskImage: "linear-gradient(to bottom right, black, transparent 70%)",
        }}
      />

      <div className="relative flex w-full flex-col gap-4 px-6 py-12 sm:px-9">
        <span className="flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-surface/80 px-3.5 py-1.5 text-xs font-semibold text-primary">
          <IconeCalendrier className="size-3.5" />
          Mon calendrier
        </span>

        <h1 className="max-w-lg font-serif text-[34px] leading-[1.15] font-bold text-ink sm:text-[40px]">
          Gère tes examens et tes rappels{" "}
          <span className="text-primary">en un seul endroit.</span>
        </h1>

        <p className="max-w-md text-base text-muted-foreground">
          Ne manque plus aucune échéance et organise ton temps efficacement.
        </p>

        <div className="pointer-events-none absolute top-8 right-9 hidden max-w-[220px] rotate-[-4deg] text-right lg:block">
          <p className="font-manuscrit text-2xl leading-snug text-primary-vif">
            Un petit effort chaque jour fait une grande différence.
          </p>
          <svg viewBox="0 0 90 18" className="ml-auto mt-1 h-4 w-20 text-primary-vif/60" fill="none" aria-hidden="true">
            <path
              d="M2 10c8-9 16-9 22 0s16 9 22 0 16-9 22 0 16 9 20 2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
