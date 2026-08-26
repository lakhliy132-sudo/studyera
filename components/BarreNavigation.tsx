import Link from "next/link";

import BoutonDeconnexion from "@/components/BoutonDeconnexion";

const LIENS_NAVIGATION = [
  { href: "/", libelle: "Accueil" },
  { href: "/oeuvres", libelle: "Œuvres" },
  { href: "/redaction/nouvelle", libelle: "Correcteur IA" },
  { href: "/ressources", libelle: "Ressources" },
  { href: "/a-propos", libelle: "À propos" },
] as const;

interface BarreNavigationProps {
  connecte: boolean;
  email: string | null;
}

/**
 * Barre de navigation, affichée par app/layout.tsx sur toutes les
 * pages (session design, sur la base des deux maquettes fournies).
 *
 * Menu mobile en `<details>`/`<summary>` natif plutôt qu'un composant
 * client avec un `useState` : même philosophie que OngletsOeuvre
 * ("Composant Serveur volontairement"), pas de JS nécessaire pour
 * ouvrir/fermer le menu. Seul `BoutonDeconnexion` est un vrai composant
 * client, parce qu'il doit appeler `supabase.auth.signOut()`.
 *
 * "Correcteur IA" pointe vers /redaction/nouvelle (page minimale) ;
 * "Ressources" et "À propos" pointent vers des pages "Bientôt
 * disponible" : ces destinations n'ont pas encore de vrai contenu,
 * seule la navigation vers elles existe.
 */
export default function BarreNavigation({ connecte, email }: BarreNavigationProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-surface">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span aria-hidden="true" className="text-2xl">
            📚
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-semibold text-foreground">Français 1BAC</span>
            <span className="text-xs text-muted-foreground">Révisez · Comprenez · Progressez</span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-6 md:flex">
          {LIENS_NAVIGATION.map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              {lien.libelle}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <EtatConnexion connecte={connecte} email={email} />
        </div>

        <details className="relative md:hidden">
          <summary className="list-none rounded-md border border-border p-2 text-foreground [&::-webkit-details-marker]:hidden">
            <span aria-hidden="true">☰</span>
            <span className="sr-only">Ouvrir le menu</span>
          </summary>
          <div className="absolute inset-x-0 top-full z-30 flex flex-col gap-1 border-b border-border bg-surface p-4 shadow-md">
            {LIENS_NAVIGATION.map((lien) => (
              <Link
                key={lien.href}
                href={lien.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-surface-muted"
              >
                {lien.libelle}
              </Link>
            ))}
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
      <>
        <Link
          href="/tableau-de-bord"
          className={
            pleineLargeur
              ? "rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-surface-muted"
              : "text-sm font-medium text-foreground hover:text-primary"
          }
        >
          {email}
        </Link>
        <BoutonDeconnexion />
      </>
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
