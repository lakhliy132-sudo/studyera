import Image from "next/image";

interface BandeauBienvenueAccueilProps {
  prenom: string;
}

/**
 * Bandeau de bienvenue de l'accueil (élève connecté) — reprend une
 * maquette fournie par l'utilisateur ("j ai ajouté une photo dans le
 * fichier fais la comme ca dans l acuueil") : prénom, citation
 * motivante, photo décorative. La photo (bureau/livres/plante) vient
 * de l'image même que l'utilisateur a déposée pour cette demande —
 * recadrée (voir public/accueil-bureau.jpg), pas une photo de banque
 * d'images tierce (voir le refus des images pngtree/.avif plus tôt
 * dans le projet).
 *
 * Citation et photo dans le même flux `flex` (pas de positionnement
 * `absolute`) : un premier essai plaçait la photo en position absolue
 * par-dessus la citation, les deux se chevauchant sur grand écran
 * (repéré en relisant la capture d'écran — texte de la citation
 * visible en transparence sous la photo).
 */
export default function BandeauBienvenueAccueil({ prenom }: BandeauBienvenueAccueilProps) {
  return (
    <div className="flex flex-col gap-6 overflow-hidden rounded-[24px] border border-border bg-gradient-to-r from-primary-tint via-primary-tint/45 to-transparent p-7 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div className="shrink-0">
        <h1 className="font-serif text-3xl font-bold text-ink">Bonjour, {prenom} ! 👋</h1>
        <p className="mt-1 text-muted-foreground">Prête à faire un pas de plus vers tes objectifs ?</p>
      </div>

      <p className="hidden max-w-[220px] shrink-0 border-l-2 border-primary/30 pl-4 font-serif text-[15px] leading-snug text-ink italic xl:block">
        « La discipline d&apos;aujourd&apos;hui est la réussite de demain. »
      </p>

      <Image
        src="/accueil-bureau.jpg"
        alt=""
        aria-hidden="true"
        width={380}
        height={175}
        className="hidden h-[110px] w-[240px] shrink-0 rounded-[16px] object-cover 2xl:block"
      />
    </div>
  );
}
