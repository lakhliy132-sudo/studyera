import Link from "next/link";

import BoutonDeconnexion from "@/components/BoutonDeconnexion";
import { IconeMenu, IconePersonne } from "@/components/icones";
import LiensNavigation from "@/components/LiensNavigation";

interface BarreNavigationProps {
  connecte: boolean;
  email: string | null;
}

/**
 * Barre de navigation, affichée par app/layout.tsx sur toutes les
 * pages — reprise de la maquette de référence (page-oeuvre (2).html).
 *
 * Menu mobile en `<details>`/`<summary>` natif plutôt qu'un composant
 * client avec un `useState` : même philosophie que OngletsOeuvre
 * ("Composant Serveur volontairement"), pas de JS nécessaire pour
 * ouvrir/fermer le menu. `LiensNavigation` (client, `usePathname`) et
 * `BoutonDeconnexion` (client, `supabase.auth.signOut()`) sont les
 * seuls morceaux interactifs.
 *
 * Bascule desktop/mobile à `xl` (1280px), pas `md` (768px) comme le
 * reste du site : mesuré avec Playwright, les 6 liens de nav (dont
 * "Langues", ajouté à la demande de l'utilisateur) plus le logo et les
 * boutons de connexion ont besoin d'environ 1220px pour tenir sur une
 * seule ligne sans déborder — en dessous, le menu `<details>` prend le
 * relais plutôt que de laisser la page défiler horizontalement.
 */
export default function BarreNavigation({ connecte, email }: BarreNavigationProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-surface">
      <div className="mx-auto flex h-[88px] w-full max-w-[1240px] items-center gap-11 px-7">
        <Link href="/" className="flex items-center gap-3.5">
          <svg width="46" height="46" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M6 11c5-2.4 10-2.4 16 1v27c-6-3.4-11-3.4-16-1V11z" fill="var(--color-primary)" />
            <path d="M42 11c-5-2.4-10-2.4-16 1v27c6-3.4 11-3.4 16-1V11z" fill="var(--color-ink)" />
            <path d="M24 12v27" stroke="#fff" strokeWidth="2" />
          </svg>
          <span className="leading-tight">
            <span className="font-serif text-[25px] font-bold text-ink">STUDYERA</span>
            <span className="font-lecture block text-[12.5px] text-primary-vif">
              Révisez · Comprenez · Progressez
            </span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-2 xl:flex">
          <LiensNavigation />
        </nav>

        <div className="ml-auto hidden items-center gap-3 xl:flex">
          <EtatConnexion connecte={connecte} email={email} />
        </div>

        {/* Pas de `relative` sur ce `<details>` : sa propre boîte ne fait
         * que la largeur du bouton hamburger, donc un `relative` ici
         * ferait résoudre `inset-x-0` du panneau ci-dessous contre cette
         * boîte étroite plutôt que contre la largeur de l'écran (bug
         * préexistant, repéré par capture d'écran en élargissant la
         * bascule desktop/mobile ci-dessus à `xl`, qui expose ce menu à
         * beaucoup plus de largeurs d'écran qu'avant). `<header>` est
         * déjà `sticky`, donc déjà positionné : c'est lui qui sert de
         * référence pour `inset-x-0`/`top-full` du panneau. */}
        <details className="ml-auto xl:hidden">
          <summary className="list-none rounded-md border border-border p-2 text-ink [&::-webkit-details-marker]:hidden">
            <IconeMenu className="size-6" />
            <span className="sr-only">Ouvrir le menu</span>
          </summary>
          <div className="absolute inset-x-0 top-full z-30 flex flex-col gap-1 border-b border-border bg-surface p-4 shadow-sm">
            <LiensNavigation pleineLargeur />
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <EtatConnexion connecte={connecte} email={email} pleineLargeur />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

function EtatConnexion({
  connecte,
  email,
  pleineLargeur = false,
}: BarreNavigationProps & { pleineLargeur?: boolean }) {
  if (connecte) {
    return (
      <div className={pleineLargeur ? "flex items-center gap-3 px-3 py-2" : "flex items-center gap-3"}>
        <Link href="/tableau-de-bord" className="flex items-center gap-3">
          <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-primary-tint text-sm font-bold text-ink">
            {email ? email.charAt(0).toUpperCase() : "?"}
          </span>
          <span className="text-sm text-muted-foreground">{email}</span>
        </Link>
        <BoutonDeconnexion />
      </div>
    );
  }

  const classeBase = pleineLargeur ? "justify-center" : "";

  return (
    <>
      <Link
        href="/connexion"
        className={`flex items-center gap-2 rounded-[10px] border border-border-strong bg-surface px-[22px] py-[13px] text-[15.5px] font-semibold text-primary transition-colors hover:bg-surface-muted ${classeBase}`}
      >
        <IconePersonne className="size-[17px]" />
        Se connecter
      </Link>
      <Link
        href="/connexion"
        className={`flex items-center gap-2 rounded-[10px] bg-primary px-[22px] py-[13px] text-[15.5px] font-semibold text-white shadow-[0_2px_10px_rgba(29,78,216,0.22)] transition-all hover:-translate-y-px hover:bg-ink hover:shadow-[0_4px_16px_rgba(29,78,216,0.3)] ${classeBase}`}
      >
        <IconePersonne className="size-[17px]" />
        S&apos;inscrire
      </Link>
    </>
  );
}
