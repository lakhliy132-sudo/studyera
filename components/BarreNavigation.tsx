import Link from "next/link";

import BoutonDeconnexion from "@/components/BoutonDeconnexion";
import { IconeMenu } from "@/components/icones";
import LiensNavigation from "@/components/LiensNavigation";

interface BarreNavigationProps {
  connecte: boolean;
  email: string | null;
}

/**
 * Barre de navigation, affichée par app/layout.tsx sur toutes les
 * pages — reprise de la maquette de référence (page-oeuvre.html).
 *
 * Menu mobile en `<details>`/`<summary>` natif plutôt qu'un composant
 * client avec un `useState` : même philosophie que OngletsOeuvre
 * ("Composant Serveur volontairement"), pas de JS nécessaire pour
 * ouvrir/fermer le menu. `LiensNavigation` (client, `usePathname`) et
 * `BoutonDeconnexion` (client, `supabase.auth.signOut()`) sont les
 * seuls morceaux interactifs.
 *
 * "Rédaction" pointe vers /redaction/nouvelle (page minimale) et
 * "Langue" vers une page "Bientôt disponible" : ces destinations n'ont
 * pas encore de vrai contenu, seule la navigation vers elles existe.
 */
export default function BarreNavigation({ connecte, email }: BarreNavigationProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-surface">
      <div className="mx-auto flex h-[74px] w-full max-w-[1180px] items-center gap-8 px-6">
        <Link href="/" className="leading-tight">
          <span className="font-serif text-2xl font-bold tracking-tight text-ink">Medrasti</span>
          <span className="block text-[11px] font-medium tracking-[0.1em] text-subtle-foreground uppercase">
            Français · 1<sup>ère</sup> année bac
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="ml-auto hidden items-center gap-1 md:flex">
          <LiensNavigation />
        </nav>

        <div className="hidden items-center gap-3 border-l border-border pl-5 md:flex">
          <EtatConnexion connecte={connecte} email={email} />
        </div>

        <details className="relative ml-auto md:hidden">
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

  const classeBase = pleineLargeur ? "text-center" : "";

  return (
    <>
      <Link
        href="/connexion"
        className={`rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary-tint ${classeBase}`}
      >
        Se connecter
      </Link>
      <Link
        href="/connexion"
        className={`rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 ${classeBase}`}
      >
        S&apos;inscrire
      </Link>
    </>
  );
}
