import Image from "next/image";

interface BandeauBienvenueAccueilProps {
  prenom: string;
}

/** Date du jour en toutes lettres ("Vendredi 9 octobre 2026"), calculée
 * au rendu côté serveur — le composant n'est pas un composant client,
 * le navigateur ne la recalcule donc pas et il n'y a pas de risque de
 * décalage d'hydratation. */
function dateDuJour(): string {
  const texte = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
  return texte.charAt(0).toUpperCase() + texte.slice(1);
}

/**
 * Bandeau de bienvenue de l'accueil (élève connecté).
 *
 * Historique : il a repris une première maquette (prénom, citation,
 * photo de bureau), puis a été allégé à la demande de l'utilisateur
 * ("enleve l emogie a coté", puis "enleve aussi la phrase et la
 * photo"). Une nouvelle maquette complète de l'accueil ("on va essayer
 * ca maintenant") remet la photo et la phrase d'encouragement : c'est
 * la demande la plus récente qui fait foi.
 *
 * Photo : public/accueil-bandeau.jpg, recadrée sur la zone strictement
 * photographique du bandeau de cette maquette (sans texte), agrandie ×2.
 * Elle occupe la moitié droite et se fond vers la gauche dans la
 * couleur de la carte, pour que le texte reste lisible en clair comme
 * en sombre.
 */
export default function BandeauBienvenueAccueil({ prenom }: BandeauBienvenueAccueilProps) {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-border bg-surface shadow-[0_18px_40px_-28px_rgba(20,30,60,0.45)]">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[62%] sm:block">
        <Image src="/accueil-bandeau.jpg" alt="" fill priority sizes="(min-width: 640px) 60vw, 0px" className="object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--color-surface) 0%, color-mix(in srgb, var(--color-surface) 70%, transparent) 30%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative px-6 py-7 sm:px-8 sm:py-9">
        <p className="text-sm text-muted-foreground">{dateDuJour()}</p>
        <h1 className="mt-2 font-titre text-[32px] leading-tight font-bold text-ink sm:text-[44px]">
          Bonjour, <span className="text-primary">{prenom}</span> !
        </h1>
        <p className="mt-3 text-base font-medium text-ink sm:text-lg">Prêt à faire un pas de plus vers tes objectifs ?</p>
        <p className="mt-1.5 text-sm text-muted-foreground sm:text-[15px]">Chaque effort compte. Tu es sur la bonne voie !</p>
        <span aria-hidden="true" className="mt-5 block h-[3px] w-16 rounded-full bg-primary" />
      </div>
    </div>
  );
}
