"use client";

import Link from "next/link";

import LogoStudyera from "@/components/LogoStudyera";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { creerClientNavigateur } from "@/lib/supabase/client";

/** Tracés d'icônes, repris tels quels du composant `Sidebar.jsx`
 * fourni par l'utilisateur. Gardés ici plutôt que dans
 * components/icones.tsx : ce sont les icônes de ce menu, dessinées
 * dans un style propre (trait 1.8, 24×24), pas celles du reste du
 * site. */
const TRACES = {
  accueil: "M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z",
  tableau: "M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z",
  livre: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 21V5M8 7h7",
  calendrier: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  communaute:
    "M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M21 19v-1a4 4 0 0 0-3-3.9M15.5 3.1a3.5 3.5 0 0 1 0 6.8",
  progres: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  parametres:
    "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z",
  recherche: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14M21 21l-5-5",
  lune: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8",
  soleil:
    "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
  eclair: "M13 2 4 14h7l-1 8 9-12h-7z",
  deconnexion: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9",
  chevron: "m6 9 6 6 6-6",
  menu: "M4 6h16M4 12h16M4 18h16",
  fermer: "M6 6l12 12M18 6 6 18",
};

function Icone({
  trace,
  className = "size-5",
}: {
  trace: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={trace} />
    </svg>
  );
}

/** Liens du menu, dans l'ordre fourni par l'utilisateur, avec les
 * routes réelles du site (son "/dashboard" est "/tableau-de-bord"
 * ici). */
const LIENS = [
  { libelle: "Accueil", href: "/", trace: TRACES.accueil },
  {
    libelle: "Tableau de bord",
    href: "/tableau-de-bord",
    trace: TRACES.tableau,
  },
  { libelle: "Matières", href: "/matieres", trace: TRACES.livre },
  { libelle: "Calendrier", href: "/calendrier", trace: TRACES.calendrier },
  { libelle: "Communauté", href: "/communaute", trace: TRACES.communaute },
  { libelle: "Progrès", href: "/progres", trace: TRACES.progres },
  { libelle: "Paramètres", href: "/parametres", trace: TRACES.parametres },
];

const CLE_THEME = "studyera-theme";
const CLE_ANIMATIONS = "studyera-animations";

interface MenuLateralProps {
  prenom: string | null;
  email: string | null;
}

/**
 * Menu latéral de l'élève connecté — reprend le composant
 * `Sidebar.jsx` fourni par l'utilisateur ("CA aussi ajoute") : logo,
 * bouton de recherche avec raccourci Ctrl/Cmd+K, liens à icônes avec
 * barre bleue sur la page courante, et menu de compte dépliant en bas
 * (mode nuit, déconnexion).
 *
 * Adaptations par rapport au fichier fourni :
 *
 * - les routes pointent vers celles du site ("/tableau-de-bord") ;
 * - le mode nuit passe par `data-theme` + localStorage, la convention
 *   déjà en place (BoutonModeNuit.tsx), pas par une classe `dark` que
 *   la feuille de styles du site n'utilise pas ;
 * - la déconnexion appelle vraiment `supabase.auth.signOut()` au lieu
 *   d'une fonction passée en prop ;
 * - la carte "Studyera Premium" n'est pas reprise : aucune offre
 *   premium ni page /premium n'existe, et annoncer un abonnement
 *   inexistant tromperait les élèves ;
 * - le bouton "couper les animations" du site est ajouté au menu de
 *   compte, pour ne pas le perdre en route.
 */
export default function MenuLateral({ prenom, email }: MenuLateralProps) {
  const chemin = usePathname();
  const router = useRouter();
  const [ouvert, setOuvert] = useState(false);
  /** `null` = on suit la page affichée ; `true`/`false` = choix manuel. */
  const [reduitManuel, setReduitManuel] = useState<boolean | null>(null);
  const [menuCompte, setMenuCompte] = useState(false);
  const [sombre, setSombre] = useState<boolean | null>(null);
  const [animations, setAnimations] = useState<boolean | null>(null);
  const refMenu = useRef<HTMLDivElement>(null);

  // Préférences lues côté client, comme BoutonModeNuit/BoutonAnimations.
  useEffect(() => {
    const themeStocke = localStorage.getItem(CLE_THEME);
    setSombre(
      themeStocke
        ? themeStocke === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches,
    );
    const animationsStockees = localStorage.getItem(CLE_ANIMATIONS);
    setAnimations(
      animationsStockees
        ? animationsStockees === "on"
        : !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    if (sombre === null) return;
    document.documentElement.dataset.theme = sombre ? "dark" : "light";
    localStorage.setItem(CLE_THEME, sombre ? "dark" : "light");
  }, [sombre]);

  useEffect(() => {
    if (animations === null) return;
    if (animations) delete document.documentElement.dataset.animations;
    else document.documentElement.dataset.animations = "off";
    localStorage.setItem(CLE_ANIMATIONS, animations ? "on" : "off");
  }, [animations]);

  // Ctrl/Cmd + K ouvre la recherche, Échap referme les panneaux.
  useEffect(() => {
    const auClavier = (evenement: KeyboardEvent) => {
      if (
        (evenement.ctrlKey || evenement.metaKey) &&
        evenement.key.toLowerCase() === "k"
      ) {
        evenement.preventDefault();
        router.push("/recherche");
      }
      if (evenement.key === "Escape") {
        setMenuCompte(false);
        setOuvert(false);
      }
    };
    window.addEventListener("keydown", auClavier);
    return () => window.removeEventListener("keydown", auClavier);
  }, [router]);

  // Clic en dehors du menu de compte.
  useEffect(() => {
    const auClic = (evenement: MouseEvent) => {
      if (
        refMenu.current &&
        !refMenu.current.contains(evenement.target as Node)
      )
        setMenuCompte(false);
    };
    document.addEventListener("mousedown", auClic);
    return () => document.removeEventListener("mousedown", auClic);
  }, []);

  // Le menu mobile se referme en changeant de page.
  useEffect(() => setOuvert(false), [chemin]);

  // Déplié sur l'accueil, réduit dès qu'on entre dans une section.
  const reduit = reduitManuel ?? chemin !== "/";

  // Largeur publiée au layout, qui décale le contenu d'autant
  // (app/layout.tsx lit `--largeur-menu`).
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--largeur-menu",
      reduit ? "4.75rem" : "18rem",
    );
  }, [reduit]);

  const estActif = (href: string) =>
    href === "/" ? chemin === "/" : chemin.startsWith(href);

  async function seDeconnecter() {
    const supabase = creerClientNavigateur();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOuvert(true)}
        aria-label="Ouvrir le menu"
        className="fixed top-4 left-4 z-40 rounded-[12px] border border-border bg-surface p-2 text-foreground shadow-sm xl:hidden"
      >
        <Icone trace={TRACES.menu} />
      </button>

      {ouvert && (
        <div
          role="presentation"
          onClick={() => setOuvert(false)}
          className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm xl:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-surface transition-all duration-200 xl:translate-x-0 ${
          reduit ? "w-[76px]" : "w-72"
        } ${ouvert ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          className={`flex items-center pt-6 pb-4 ${reduit ? "justify-center px-2" : "justify-between px-5"}`}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <LogoStudyera
              className={`text-primary ${reduit ? "h-8" : "h-9"}`}
            />
          </Link>
          <button
            type="button"
            onClick={() => setOuvert(false)}
            aria-label="Fermer le menu"
            className="rounded-[10px] p-1.5 text-subtle-foreground hover:bg-surface-muted xl:hidden"
          >
            <Icone trace={TRACES.fermer} />
          </button>
        </div>

        {reduit ? (
          <div className="flex justify-center pb-2">
            <Link
              href="/recherche"
              aria-label="Rechercher"
              title="Rechercher (Ctrl K)"
              className="flex size-11 items-center justify-center rounded-[12px] text-subtle-foreground transition-colors hover:bg-surface-muted hover:text-primary"
            >
              <Icone trace={TRACES.recherche} className="size-[22px]" />
            </Link>
          </div>
        ) : (
          <div className="px-3 pb-2">
            <Link
              href="/recherche"
              className="flex w-full items-center gap-3 rounded-[12px] border border-border bg-background px-3 py-2 text-sm text-muted-foreground transition hover:border-border-strong hover:bg-surface"
            >
              <Icone trace={TRACES.recherche} className="size-4" />
              <span className="flex-1 text-left">Rechercher</span>
              <kbd className="rounded-[6px] border border-border bg-surface px-1.5 py-0.5 text-[11px] font-medium text-subtle-foreground">
                Ctrl K
              </kbd>
            </Link>
          </div>
        )}

        <nav
          aria-label="Navigation principale"
          className="flex-1 overflow-y-auto px-3 py-2"
        >
          <ul className="flex flex-col gap-1.5">
            {LIENS.map((lien) => {
              const actif = estActif(lien.href);
              return (
                <li key={lien.href}>
                  <Link
                    href={lien.href}
                    aria-current={actif ? "page" : undefined}
                    title={reduit ? lien.libelle : undefined}
                    className={`group relative flex items-center rounded-[12px] text-[16px] font-semibold transition ${
                      reduit
                        ? "justify-center px-0 py-3"
                        : "gap-3.5 px-3.5 py-3"
                    } ${
                      actif
                        ? "bg-primary-tint text-primary"
                        : "text-muted-foreground hover:bg-surface-muted hover:text-ink"
                    }`}
                  >
                    {actif && (
                      <span
                        aria-hidden="true"
                        className="absolute top-2 bottom-2 left-0 w-1 rounded-r-full bg-primary"
                      />
                    )}
                    <Icone
                      trace={lien.trace}
                      className={`size-[22px] ${actif ? "text-primary" : "text-subtle-foreground group-hover:text-ink"}`}
                    />
                    {!reduit && lien.libelle}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setReduitManuel(!reduit)}
          aria-label={reduit ? "Déplier le menu" : "Réduire le menu"}
          title={reduit ? "Déplier le menu" : "Réduire le menu"}
          className={`mx-3 mb-2 hidden items-center gap-2 rounded-[10px] px-2 py-2 text-xs font-semibold text-subtle-foreground transition-colors hover:bg-surface-muted hover:text-primary xl:flex ${
            reduit ? "justify-center" : ""
          }`}
        >
          <Icone
            trace={TRACES.chevron}
            className={`size-4 ${reduit ? "-rotate-90" : "rotate-90"}`}
          />
          {!reduit && "Réduire le menu"}
        </button>

        <div ref={refMenu} className="relative border-t border-border p-3">
          {menuCompte && (
            <div className="absolute right-3 bottom-full left-3 mb-2 overflow-hidden rounded-[12px] border border-border bg-surface py-1 shadow-lg">
              <Link
                href="/tableau-de-bord"
                className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-surface-muted"
              >
                <Icone
                  trace={TRACES.tableau}
                  className="size-4 text-subtle-foreground"
                />
                Mon tableau de bord
              </Link>
              <button
                type="button"
                onClick={() => setSombre((valeur) => !valeur)}
                className="flex w-full items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-surface-muted"
              >
                <Icone
                  trace={sombre ? TRACES.soleil : TRACES.lune}
                  className="size-4 text-subtle-foreground"
                />
                {sombre ? "Mode clair" : "Mode sombre"}
              </button>
              <button
                type="button"
                onClick={() => setAnimations((valeur) => !valeur)}
                className="flex w-full items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-surface-muted"
              >
                <Icone
                  trace={TRACES.eclair}
                  className="size-4 text-subtle-foreground"
                />
                {animations === false
                  ? "Réactiver les animations"
                  : "Couper les animations"}
              </button>
              <div className="my-1 border-t border-border" />
              <button
                type="button"
                onClick={seDeconnecter}
                className="flex w-full items-center gap-3 px-3 py-2 text-sm text-erreur hover:bg-erreur/10"
              >
                <Icone trace={TRACES.deconnexion} className="size-4" />
                Se déconnecter
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={() => setMenuCompte(!menuCompte)}
            aria-expanded={menuCompte}
            className={`flex w-full items-center rounded-[12px] p-2 text-left transition hover:bg-surface-muted ${
              reduit ? "justify-center" : "gap-3"
            }`}
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
              {(prenom ?? email ?? "?").charAt(0).toUpperCase()}
            </span>
            {!reduit && (
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[15px] font-semibold text-ink">
                  {prenom ?? "Mon compte"}
                </span>
                {email && (
                  <span className="block truncate text-xs text-muted-foreground">
                    {email}
                  </span>
                )}
              </span>
            )}
            {!reduit && (
              <Icone
                trace={TRACES.chevron}
                className={`size-4 text-subtle-foreground transition-transform ${menuCompte ? "rotate-180" : ""}`}
              />
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
