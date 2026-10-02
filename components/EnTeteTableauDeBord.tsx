import { IconeEtoile } from "@/components/icones";

interface EnTeteTableauDeBordProps {
  prenom: string;
  /** Jours consécutifs d'activité (`recupererSerieJours`). 0 = rien à
   * afficher plutôt qu'un "0 jour de suite" décourageant. */
  serie: number;
}

/** Date du jour en toutes lettres, calculée au rendu serveur — ce
 * composant n'est pas un composant client, il n'y a donc pas de
 * décalage d'hydratation possible. */
function dateDuJour(): string {
  return new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long" }).format(new Date());
}

/**
 * Bandeau d'en-tête du tableau de bord — introduit lors de la refonte
 * demandée par l'utilisateur ("change le tableau de bord", option
 * "nouveau design complet" : mise en page libre, mêmes données).
 *
 * Reprend le bandeau de l'accueil (date en petites capitales, bonjour
 * en serif, halos de couleur diffus) pour que les deux pages d'entrée
 * du site se répondent, avec en plus le badge de série de jours qui
 * flottait auparavant seul à droite du titre.
 */
export default function EnTeteTableauDeBord({ prenom, serie }: EnTeteTableauDeBordProps) {
  return (
    <div
      className="relative flex flex-col gap-5 overflow-hidden rounded-[28px] border border-border p-5 sm:p-8 shadow-[0_18px_40px_-28px_rgba(20,30,60,0.45)] sm:flex-row sm:items-center sm:justify-between sm:p-9"
      style={{
        background:
          "linear-gradient(105deg, var(--color-primary-tint) 0%, color-mix(in srgb, var(--color-primary-tint) 55%, transparent) 45%, color-mix(in srgb, var(--color-matiere-arabe) 16%, transparent) 100%)",
      }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-20 -left-10 size-56 rounded-full opacity-[0.18] blur-3xl"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
        <div
          className="absolute -right-10 -bottom-24 size-64 rounded-full opacity-[0.12] blur-3xl"
          style={{ backgroundColor: "var(--color-matiere-arabe)" }}
        />
      </div>

      <div className="relative">
        <p className="text-[11px] font-bold tracking-[0.16em] text-primary uppercase">{dateDuJour()}</p>
        <h1 className="mt-2 font-serif text-[34px] leading-tight font-bold text-ink">Bonjour {prenom}</h1>
        <p className="mt-1.5 text-[15px] text-muted-foreground">Voici où tu en es dans ton programme.</p>
      </div>

      {serie > 0 && (
        <span className="relative flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-primary shadow-sm">
          <IconeEtoile className="size-4" />
          {serie} jour{serie > 1 ? "s" : ""} de suite
        </span>
      )}
    </div>
  );
}
