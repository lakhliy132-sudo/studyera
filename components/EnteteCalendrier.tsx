import { IconeCalendrier } from "@/components/icones";

/**
 * Bannière d'en-tête de /calendrier — reprend une maquette fournie par
 * l'utilisateur ("regarde la photo que je mis dans le fichier fais la
 * comme ca") : pastille "Mon calendrier", titre sur 2 lignes (2ᵉ ligne
 * en bleu), sous-titre, note manuscrite décorative en haut à droite
 * (masquée sur mobile, pas la place). Propre à cette page (comme la
 * vague de l'accueil, voir app/(public)/page.tsx) : dégradé léger +
 * fin quadrillage diagonal en fond, sans toucher au layout global.
 *
 * Hauteur réduite (`py-12` → `py-7`, titre plus petit, espacements
 * resserrés) — demandé explicitement par l'utilisateur ("la partie de
 * gere tes examens... elle est trop long") : la bannière prenait trop
 * de place en hauteur avant d'arriver au contenu utile en dessous.
 */
export default function EnteteCalendrier() {
  return (
    <div className="relative mx-6 mt-6 overflow-hidden rounded-[24px] border border-border bg-surface shadow-sm sm:mx-9">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, var(--color-primary) 0, var(--color-primary) 1px, transparent 1px, transparent 34px)",
          maskImage: "linear-gradient(to bottom right, black, transparent 70%)",
        }}
      />

      {/* Taches de couleur très diffuses, purement décoratives. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-10 size-44 rounded-full opacity-[0.16] blur-3xl"
        style={{ backgroundColor: "var(--color-matiere-arabe)" }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -bottom-20 size-52 rounded-full opacity-[0.14] blur-3xl"
        style={{ backgroundColor: "var(--color-matiere-histoire-geo)" }}
      />

      <div className="relative flex w-full flex-col gap-2 px-6 py-5 sm:px-9 lg:px-16 xl:px-24 2xl:px-40">
        <span className="flex w-fit items-center gap-2 rounded-full bg-primary-tint px-3.5 py-1.5 text-xs font-semibold text-primary">
          <IconeCalendrier className="size-3.5" />
          Mon calendrier
        </span>

        <h1 className="max-w-2xl font-titre text-3xl leading-[1.15] font-bold text-ink sm:text-[34px]">
          Gère tes examens et tes rappels{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(100deg, var(--color-primary) 0%, var(--color-matiere-arabe) 60%, var(--color-matiere-histoire-geo) 100%)",
            }}
          >
            en un seul endroit.
          </span>
        </h1>

        <p className="max-w-md text-sm text-muted-foreground">
          Ne manque plus aucune échéance et organise ton temps efficacement.
        </p>
      </div>
    </div>
  );
}
