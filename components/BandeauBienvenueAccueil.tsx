interface BandeauBienvenueAccueilProps {
  prenom: string;
}

/** Date du jour en toutes lettres ("mardi 20 septembre"), calculée au
 * rendu côté serveur — le composant n'est pas un composant client, le
 * navigateur ne la recalcule donc pas et il n'y a pas de risque de
 * décalage d'hydratation. */
function dateDuJour(): string {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date());
}

/**
 * Bandeau de bienvenue de l'accueil (élève connecté). Il a d'abord
 * repris une maquette fournie par l'utilisateur (prénom, citation
 * motivante, photo de bureau recadrée depuis l'image qu'il avait
 * déposée), puis a été allégé à sa demande, en deux temps : l'emoji
 * du bonjour ("enleve l emogie a coté"), puis la citation et la photo
 * ("enleve aussi la phrase et la photo"). Il ne reste que la date du
 * jour, le bonjour et le sous-titre, posés sur un fond dégradé avec
 * deux halos de couleur très diffus — tout sur les tokens du site
 * (`--color-primary`, `--color-matiere-arabe`), donc lisible aussi en
 * mode sombre.
 *
 * public/accueil-bureau.jpg n'est plus utilisée ici, mais reste dans
 * le dépôt : c'est une image fournie par l'utilisateur, pas à nous de
 * la supprimer.
 */
export default function BandeauBienvenueAccueil({
  prenom,
}: BandeauBienvenueAccueilProps) {
  return (
    <div
      className="relative overflow-hidden rounded-[28px] border border-border p-8 shadow-[0_18px_40px_-28px_rgba(20,30,60,0.45)] sm:p-9"
      style={{
        background:
          "linear-gradient(105deg, var(--color-primary-tint) 0%, color-mix(in srgb, var(--color-primary-tint) 55%, transparent) 45%, color-mix(in srgb, var(--color-matiere-arabe) 16%, transparent) 100%)",
      }}
    >
      {/* Halos diffus, purement décoratifs — même technique que les
       * taches de couleur du fond de l'accueil. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -top-20 -left-10 size-56 rounded-full opacity-[0.18] blur-3xl"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
        <div
          className="absolute -right-10 -bottom-24 size-64 rounded-full opacity-[0.12] blur-3xl"
          style={{ backgroundColor: "var(--color-matiere-arabe)" }}
        />
      </div>

      <div className="relative shrink-0">
        <p className="text-[11px] font-bold tracking-[0.16em] text-primary uppercase">
          {dateDuJour()}
        </p>
        <h1 className="mt-2 font-serif text-[34px] leading-tight font-bold text-ink">
          Bonjour, {prenom} !
        </h1>
        <p className="mt-1.5 text-[15px] text-muted-foreground">
          Prête à faire un pas de plus vers tes objectifs ?
        </p>
        <span
          aria-hidden="true"
          className="mt-4 block h-[3px] w-14 rounded-full bg-primary/40"
        />
      </div>
    </div>
  );
}
