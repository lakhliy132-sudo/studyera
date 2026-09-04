import Link from "next/link";

import BoutonDeconnexion from "@/components/BoutonDeconnexion";
import { IconeMenu, IconePersonne } from "@/components/icones";
import LiensNavigation from "@/components/LiensNavigation";

interface BarreNavigationProps {
  connecte: boolean;
  email: string | null;
}

/**
 * Navigation du site, affichée par app/layout.tsx sur toutes les
 * pages. Deux rendus distincts plutôt qu'une seule barre qui se
 * réarrange en CSS : un menu latéral vertical fixe à gauche sur
 * desktop (`xl` et plus), un bandeau horizontal compact en haut avec
 * menu déroulant sur mobile/tablette — demandé explicitement par
 * l'utilisateur, capture d'écran à l'appui, en deux temps : d'abord
 * "HORIZETALEMENT A GAUCHE" (bandeau horizontal collé au bord gauche,
 * toujours en haut), puis "VERTICALEMENT A GAUCHE" (les mêmes liens,
 * mais empilés verticalement sur le côté gauche, comme un tableau de
 * bord classique) — confirmé via une question de clarification avant
 * d'appliquer, vu l'ampleur du changement (structure de toutes les
 * pages). `app/layout.tsx` décale le contenu de `xl:pl-[240px]` pour
 * laisser la place au menu latéral, qui est `fixed` (ne participe pas
 * au flux du document).
 *
 * Menu mobile en `<details>`/`<summary>` natif plutôt qu'un composant
 * client avec un `useState` : même philosophie que OngletsOeuvre
 * ("Composant Serveur volontairement"), pas de JS nécessaire pour
 * ouvrir/fermer le menu. `LiensNavigation` (client, `usePathname`) et
 * `BoutonDeconnexion` (client, `supabase.auth.signOut()`) sont les
 * seuls morceaux interactifs. `LiensNavigation`/`EtatConnexion` en
 * `pleineLargeur` (déjà conçus pour le tiroir mobile empilé) servent
 * tels quels dans le menu latéral desktop : même empilement vertical
 * dans les deux cas, pas de variante supplémentaire à maintenir.
 *
 * Bascule desktop/mobile à `xl` (1280px), pas `md` (768px) comme le
 * reste du site — voir la mesure Playwright déjà documentée pour
 * l'ancien bandeau horizontal (6 liens + logo + connexion ont besoin
 * d'environ 1220px).
 */
export default function BarreNavigation({ connecte, email }: BarreNavigationProps) {
  return (
    <>
      {/* Mobile/tablette (< xl) : bandeau horizontal compact en haut. */}
      <header className="sticky top-0 z-20 border-b border-border bg-surface xl:hidden">
        <div className="flex h-[72px] w-full items-center justify-between px-5">
          <Logo />

          {/* Pas de `relative` sur ce `<details>` : sa propre boîte ne
           * fait que la largeur du bouton hamburger, donc un `relative`
           * ici ferait résoudre `inset-x-0` du panneau ci-dessous
           * contre cette boîte étroite plutôt que contre la largeur de
           * l'écran. `<header>` est déjà `sticky`, donc déjà
           * positionné : c'est lui qui sert de référence pour
           * `inset-x-0`/`top-full` du panneau. */}
          <details>
            <summary className="list-none rounded-md border border-border p-2 text-ink [&::-webkit-details-marker]:hidden">
              <IconeMenu className="size-6" />
              <span className="sr-only">Ouvrir le menu</span>
            </summary>
            <div className="absolute inset-x-0 top-full z-30 flex flex-col gap-1 border-b border-border bg-surface p-4 shadow-sm">
              <LiensNavigation pleineLargeur connecte={connecte} />
              <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
                <EtatConnexion connecte={connecte} email={email} pleineLargeur />
              </div>
            </div>
          </details>
        </div>
      </header>

      {/* Desktop (xl et plus) : menu latéral fixe à gauche, pleine
       * hauteur. `fixed` : hors du flux, voir le padding compensatoire
       * dans app/layout.tsx. */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-[240px] flex-col border-r border-border bg-surface xl:flex">
        <div className="border-b border-border px-5 py-6">
          <Logo />
        </div>

        <nav
          aria-label="Navigation principale"
          className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-5"
        >
          <LiensNavigation pleineLargeur connecte={connecte} />
        </nav>

        <div className="flex flex-col gap-2 border-t border-border px-3 py-4">
          <EtatConnexion connecte={connecte} email={email} pleineLargeur />
        </div>
      </aside>
    </>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="shrink-0">
        <path d="M6 11c5-2.4 10-2.4 16 1v27c-6-3.4-11-3.4-16-1V11z" fill="var(--color-primary)" />
        <path d="M42 11c-5-2.4-10-2.4-16 1v27c6-3.4 11-3.4 16-1V11z" fill="var(--color-ink)" />
        <path d="M24 12v27" stroke="#fff" strokeWidth="2" />
      </svg>
      <span className="min-w-0 leading-tight">
        <span className="font-serif text-xl font-bold text-ink">STUDYERA</span>
        <span className="font-lecture block truncate text-[11.5px] text-primary-vif">
          Révisez · Comprenez · Progressez
        </span>
      </span>
    </Link>
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
        <Link href="/tableau-de-bord" className="flex items-center gap-3" title={email ?? undefined}>
          <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-primary-tint text-sm font-bold text-ink">
            {email ? email.charAt(0).toUpperCase() : "?"}
          </span>
          {/* Email visible seulement dans le tiroir mobile (assez de
           * place en vertical) — sur la nav desktop compacte, l'avatar
           * seul suffit à indiquer "connecté", le survol (title
           * ci-dessus) donne l'adresse complète si besoin. Retiré pour
           * faire de la place à "Tableau de bord" dans la liste de
           * liens, qui débordait sinon en dessous de ~1600px. */}
          {pleineLargeur && (
            <span className="truncate text-sm text-muted-foreground">{email}</span>
          )}
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
