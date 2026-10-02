import Link from "next/link";

import BoutonDeconnexion from "@/components/BoutonDeconnexion";
import LogoStudyera from "@/components/LogoStudyera";
import BoutonAnimations from "@/components/BoutonAnimations";
import MenuLateral from "@/components/MenuLateral";
import BoutonModeNuit from "@/components/BoutonModeNuit";
import {
  IconeChevronBas,
  IconeMenu,
  IconePersonne,
  IconeRecherche,
} from "@/components/icones";
import LiensNavigation from "@/components/LiensNavigation";

interface BarreNavigationProps {
  connecte: boolean;
  email: string | null;
  /** Prénom affiché à côté de l'avatar — `null` pour un visiteur non
   * connecté (voir app/layout.tsx). */
  prenom?: string | null;
}

/**
 * Barre de navigation, affichée par app/layout.tsx sur toutes les
 * pages. Revenue à une navbar horizontale en haut, pleine largeur —
 * demandé explicitement par l'utilisateur, capture d'écran du site
 * Axiom à l'appui, après être passée par un menu latéral vertical
 * entretemps ("Je veux modifier la navigation de STUDYERA pour qu'elle
 * ressemble à la barre de navigation du site Axiom... Supprime
 * complètement la sidebar verticale à gauche... Ne crée pas une
 * sidebar. Je veux UNIQUEMENT une navbar horizontale en haut").
 *
 * Trois zones dans la même ligne, via une grille `[auto_1fr_auto]`
 * plutôt qu'un simple `flex` : logo à gauche (largeur naturelle),
 * liens vraiment centrés dans l'espace restant (`justify-center` dans
 * la colonne `1fr`, indépendant de la largeur du logo ou du bloc de
 * connexion), connexion/menu mobile à droite — demandé explicitement
 * ("Au centre : les liens"), différent du bandeau précédent qui
 * plaçait les liens juste après le logo, à gauche.
 *
 * `border-b` fine + `sticky top-0` : reste fixée en haut au défilement
 * — demandé explicitement ("Ajoute une fine bordure en bas de la
 * navbar", "La navbar doit rester fixée en haut").
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
 * "Langues") plus le logo et les boutons de connexion ont besoin
 * d'environ 1220px pour tenir sur une seule ligne sans déborder — en
 * dessous, le menu `<details>` prend le relais plutôt que de laisser
 * la page défiler horizontalement.
 */
export default function BarreNavigation({
  connecte,
  email,
  prenom = null,
}: BarreNavigationProps) {
  const logo = (
    <Link href="/" className="flex shrink-0 items-center gap-3">
      <LogoStudyera className="h-[46px] text-primary" />
      <span className="hidden text-[10.5px] font-semibold tracking-[0.18em] text-subtle-foreground uppercase xl:block">
        Révisez · Comprenez · Progressez
      </span>
    </Link>
  );

  const menuMobile = (
    // Pas de `relative` sur ce `<details>` : sa propre boîte ne fait que
    // la largeur du bouton hamburger, donc un `relative` ici ferait
    // résoudre `inset-x-0` du panneau ci-dessous contre cette boîte
    // étroite plutôt que contre la largeur de l'écran. `<header>` est
    // déjà `sticky`, donc déjà positionné : c'est lui qui sert de
    // référence pour `inset-x-0`/`top-full` du panneau.
    <details className="justify-self-end xl:hidden">
      <summary className="list-none rounded-md border border-border p-2 text-ink [&::-webkit-details-marker]:hidden">
        <IconeMenu className="size-6" />
        <span className="sr-only">Ouvrir le menu</span>
      </summary>
      <div className="absolute inset-x-0 top-full z-30 flex flex-col gap-1 border-b border-border bg-surface p-4 shadow-sm">
        {connecte && <ChampRecherche pleineLargeur />}
        <LiensNavigation pleineLargeur connecte={connecte} />
        <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
          <EtatConnexion
            connecte={connecte}
            email={email}
            prenom={prenom}
            pleineLargeur
          />
        </div>
      </div>
    </details>
  );

  // Élève connecté : deux lignes (logo + recherche + compte, puis liens
  // de nav centrés en dessous) — reprend la maquette complète envoyée
  // par l'utilisateur ("tu peux faire juste ce qui est sur cette
  // page"), qui montre une recherche et une cloche de notifications en
  // plus de ce qui existait déjà (avatar, mode nuit, déconnexion).
  if (connecte) {
    return <MenuLateral prenom={prenom} email={email} />;
  }

  return (
    <header className="sticky top-0 z-20 w-full border-b border-border bg-surface/85 backdrop-blur-md">
      <div className="grid h-[88px] w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-7">
        {logo}

        <nav
          aria-label="Navigation principale"
          className="hidden items-center justify-center gap-2 xl:flex"
        >
          <LiensNavigation connecte={connecte} />
        </nav>

        <div className="hidden items-center justify-end gap-3 xl:flex">
          <EtatConnexion connecte={connecte} email={email} prenom={prenom} />
        </div>

        {menuMobile}
      </div>
    </header>
  );
}

/** Barre de recherche du header connecté — reprend la maquette envoyée
 * par l'utilisateur, purement visuelle : aucun moteur de recherche du
 * contenu n'existe encore côté serveur, donc pas de `<form>`/`action`
 * (une saisie suivie d'Entrée ne fait rien, plutôt que de donner
 * l'illusion d'une recherche qui ne mène nulle part). */
function ChampRecherche({
  pleineLargeur = false,
}: {
  pleineLargeur?: boolean;
}) {
  // Vrai formulaire GET vers /recherche — le champ n'était qu'un
  // décor jusqu'ici (aucun `form`, aucune action) ; rendre la recherche
  // utilisable a été demandé par l'utilisateur parmi plusieurs
  // propositions. Formulaire natif plutôt qu'un composant client : la
  // touche Entrée suffit, aucun JavaScript nécessaire.
  return (
    <form
      action="/recherche"
      method="get"
      role="search"
      className={`relative flex items-center ${pleineLargeur ? "w-full" : ""}`}
    >
      <IconeRecherche className="pointer-events-none absolute left-3.5 size-4 text-subtle-foreground" />
      <label
        htmlFor={pleineLargeur ? "recherche-mobile" : "recherche"}
        className="sr-only"
      >
        Rechercher
      </label>
      <input
        id={pleineLargeur ? "recherche-mobile" : "recherche"}
        name="q"
        type="search"
        placeholder="Rechercher une matière, un cours, un exercice..."
        className="w-full rounded-full border border-transparent bg-surface-muted py-2.5 pr-4 pl-11 text-sm text-foreground transition-colors placeholder:text-subtle-foreground focus:border-primary focus:bg-surface focus:outline-none"
      />
    </form>
  );
}

function EtatConnexion({
  connecte,
  email,
  prenom = null,
  pleineLargeur = false,
}: BarreNavigationProps & { pleineLargeur?: boolean }) {
  if (connecte) {
    return (
      <div
        className={
          pleineLargeur
            ? "flex items-center gap-3 px-3 py-2"
            : "flex items-center gap-3"
        }
      >
        <Link
          href="/tableau-de-bord"
          className="flex items-center gap-2"
          title={email ?? undefined}
        >
          <span
            className="flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm"
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary) 0%, var(--color-matiere-arabe) 100%)",
            }}
          >
            {email ? email.charAt(0).toUpperCase() : "?"}
          </span>
          {/* Prénom + chevron — maquette envoyée par l'utilisateur
           * ("avatar avec S, prénom Sara, petite flèche"). Caché en nav
           * desktop compacte quand on n'a pas de prénom réel (compte
           * Google dont les métadonnées n'ont pas encore été propagées),
           * l'avatar seul suffit alors à indiquer "connecté". */}
          {prenom && (
            <span className="hidden items-center gap-1 sm:flex">
              <span className="text-sm font-semibold text-ink">{prenom}</span>
              <IconeChevronBas className="size-3.5 text-subtle-foreground" />
            </span>
          )}
          {pleineLargeur && !prenom && (
            <span className="truncate text-sm text-muted-foreground">
              {email}
            </span>
          )}
        </Link>
        {/* Sur la barre desktop, les boutons d'affichage sont dans la
         * pilule à gauche du compte ; ils restent ici pour le menu
         * mobile, qui n'a pas cette pilule. */}
        {pleineLargeur && (
          <>
            <BoutonAnimations />
            <BoutonModeNuit />
          </>
        )}
        <BoutonDeconnexion />
      </div>
    );
  }

  const classeBase = pleineLargeur ? "justify-center" : "";

  return (
    <>
      <BoutonAnimations />
      <BoutonModeNuit />
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
