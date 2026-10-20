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
  // Une copie d'examen posée sur un presse-papiers.
  examen:
    "M9 4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zM9 12h6M9 16h4",
  fermer: "M6 6l12 12M18 6 6 18",
  // Un point entouré d'ondes : le direct.
  live: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M8.5 15.5a5 5 0 0 1 0-7M15.5 8.5a5 5 0 0 1 0 7M5.6 18.4a9 9 0 0 1 0-12.8M18.4 5.6a9 9 0 0 1 0 12.8",
};

/** L'e-mail de l'élève en petite pastille (« juste l'e-mail de
 * l'utilisateur, je veux qu'elle soit bien stylée ») : une enveloppe,
 * le nom en blanc et le domaine plus discret ; si l'adresse est trop
 * longue, seul le nom est raccourci, le domaine reste lisible. Le texte
 * complet reste au survol. */
function EmailStylise({ email, className = "" }: { email: string; className?: string }) {
  const arobase = email.lastIndexOf("@");
  const nom = arobase > 0 ? email.slice(0, arobase) : email;
  const domaine = arobase > 0 ? email.slice(arobase) : "";
  return (
    <span
      title={email}
      className={`flex w-fit max-w-full items-center gap-1.5 rounded-full border border-white/15 bg-white/10 py-0.5 ps-1 pe-2.5 text-[11px] leading-5 ${className}`}
    >
      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-white/20">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="size-2.5" aria-hidden="true">
          <path d="M3 6h18v12H3zM3 7l9 6 9-6" />
        </svg>
      </span>
      <span className="flex min-w-0">
        <span className="truncate font-semibold text-white">{nom}</span>
        <span className="shrink-0 text-white/55">{domaine}</span>
      </span>
    </span>
  );
}

/** Une ligne du menu du compte avec un interrupteur qui montre l'état
 * réel du réglage (allumé / éteint). */
function LigneInterrupteur({
  trace,
  libelle,
  actif,
  onChange,
}: {
  trace: string;
  libelle: string;
  actif: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={actif}
      onClick={onChange}
      className="flex items-center gap-3 rounded-[14px] px-2 py-2 text-left text-sm font-semibold transition-colors hover:bg-white/[0.08]"
    >
      <span className="flex size-9 items-center justify-center rounded-[11px] bg-white/10">
        <Icone trace={trace} className="size-[18px]" />
      </span>
      <span className="flex-1">{libelle}</span>
      <span className={`relative h-6 w-11 rounded-full transition-colors ${actif ? "bg-white" : "bg-white/15"}`}>
        <span
          className={`absolute top-1 size-4 rounded-full transition-all ${actif ? "left-6" : "left-1 bg-white/70"}`}
          style={actif ? { backgroundColor: "var(--fond-sombre-haut)" } : undefined}
        />
      </span>
    </button>
  );
}

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
  // « Tableau de bord » retiré à la demande de l'utilisateur (« enlève
  // du menu Tableau de bord, je le veux plus ») : l'accueil élève fait
  // désormais ce travail.
  { libelle: "Accueil", href: "/", trace: TRACES.accueil },
  { libelle: "Matières", href: "/matieres", trace: TRACES.livre },
  {
    libelle: "Examens régionaux",
    href: "/examens-regionaux",
    trace: TRACES.examen,
  },
  { libelle: "Calendrier", href: "/calendrier", trace: TRACES.calendrier },
  { libelle: "Communauté", href: "/communaute", trace: TRACES.communaute },
  // « Une nouvelle case qui s'appelle LIVE » : le contenu pour les
  // admins, « bientôt » pour les élèves (app/(eleve)/live).
  { libelle: "Live", href: "/live", trace: TRACES.live },
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
        className="fixed top-4 left-4 z-40 rounded-[12px] border border-border bg-surface p-2 text-foreground shadow-sm xl:hidden print:hidden"
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

      {/* Colonne sombre, d'après la dernière maquette de l'accueil ("on
       * va essayer ca maintenant") : jetons `--fond-sombre-*`
       * (app/globals.css), qui suivent la palette et restent foncés
       * dans les deux modes. La citation de la maquette sous le menu
       * n'est pas reprise ("enleve la quote de menu a gauche"). */}
      <aside
        style={{
          background:
            "linear-gradient(180deg, var(--fond-sombre-haut) 0%, var(--fond-sombre-bas) 100%)",
        }}
        className={`fixed inset-y-0 left-0 z-50 flex flex-col text-white transition-all duration-200 xl:translate-x-0 print:hidden ${
          reduit ? "w-[76px]" : "w-72"
        } ${ouvert ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          className={`flex items-center pt-6 pb-4 ${reduit ? "justify-center px-2" : "justify-between px-5"}`}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <LogoStudyera
              className={`text-white ${reduit ? "h-9" : "h-10"}`}
            />
          </Link>
          <button
            type="button"
            onClick={() => setOuvert(false)}
            aria-label="Fermer le menu"
            className="rounded-[10px] p-1.5 text-white/70 hover:bg-white/10 xl:hidden"
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
              className="flex size-11 items-center justify-center rounded-[12px] text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Icone trace={TRACES.recherche} className="size-[22px]" />
            </Link>
          </div>
        ) : (
          <div className="px-3 pb-2">
            <Link
              href="/recherche"
              className="flex w-full items-center gap-3 rounded-[12px] border border-white/10 bg-white/[0.07] px-3 py-2.5 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/10"
            >
              <Icone trace={TRACES.recherche} className="size-4" />
              <span className="flex-1 text-left">Rechercher</span>
              <kbd className="rounded-[6px] border border-white/15 bg-white/10 px-1.5 py-0.5 text-[11px] font-medium text-white/70">
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
                        ? "bg-[var(--fond-sombre-actif)] text-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.6)]"
                        : "text-white/75 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    <Icone
                      trace={lien.trace}
                      className={`size-[22px] ${actif ? "text-white" : "text-white/60 group-hover:text-white"}`}
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
          className={`mx-3 mb-2 hidden items-center gap-2 rounded-[10px] px-2 py-2 text-xs font-semibold text-white/55 transition-colors hover:bg-white/10 hover:text-white xl:flex ${
            reduit ? "justify-center" : ""
          }`}
        >
          <Icone
            trace={TRACES.chevron}
            className={`size-4 ${reduit ? "-rotate-90" : "rotate-90"}`}
          />
          {!reduit && "Réduire le menu"}
        </button>

        <div ref={refMenu} className="relative border-t border-white/10 p-3">
          {/* Menu du compte, refait après « ça c'est pas stylé » : un
           * panneau sombre dans la couleur de la colonne (jetons
           * `--fond-sombre-*`, qui suivent la palette), l'élève en tête,
           * de vrais interrupteurs qui montrent l'état du mode sombre et
           * des animations, et la déconnexion à part. Largeur fixe, pour
           * rester lisible quand la colonne est réduite. */}
          {menuCompte && (
            <div
              className="animate-entree-carte absolute bottom-full left-3 z-10 mb-3 w-[264px] rounded-[22px] border border-white/10 p-2 text-white shadow-[0_28px_60px_-18px_rgba(0,0,0,0.75)]"
              style={{
                background:
                  "linear-gradient(160deg, color-mix(in srgb, var(--fond-sombre-actif) 30%, var(--fond-sombre-haut)) 0%, var(--fond-sombre-bas) 100%)",
              }}
            >
              {/* En-tête en « carte de membre » (« ça aussi c'est pas
               * stylé ») : dégradé de l'accent de la palette, cercles
               * comme la carte du compte à rebours, initiale en Lalezar. */}
              <div
                className="relative overflow-hidden rounded-[16px] p-4"
                style={{
                  background:
                    "linear-gradient(135deg, var(--fond-sombre-actif) 0%, color-mix(in srgb, var(--fond-sombre-actif) 45%, var(--fond-sombre-haut)) 100%)",
                }}
              >
                <svg aria-hidden="true" viewBox="0 0 200 200" className="pointer-events-none absolute -top-16 -right-14 size-44 text-white/15">
                  {[90, 66, 42].map((r) => (
                    <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="1.5" />
                  ))}
                </svg>
                <span dir="rtl" className="absolute top-2.5 right-4 font-ruqaa text-base text-white/75" style={{ transform: "rotate(-4deg)" }}>
                  مرحبا
                </span>
                <div className="relative flex items-center gap-3.5">
                  <span className="flex size-12 shrink-0 -rotate-3 items-center justify-center rounded-[14px] bg-white font-affiche text-[26px] leading-none shadow-[0_8px_18px_-8px_rgba(0,0,0,0.6)]" style={{ color: "var(--fond-sombre-haut)" }}>
                    {(prenom ?? email ?? "?").charAt(0).toUpperCase()}
                  </span>
                  <span className="min-w-0 pt-2">
                    <span className="block truncate font-affiche text-[22px] leading-none">{prenom ?? "Mon compte"}</span>
                    {email && <EmailStylise email={email} className="mt-1.5" />}
                  </span>
                </div>
              </div>

              <div className="mt-2 flex flex-col">
                <LigneInterrupteur
                  trace={sombre ? TRACES.lune : TRACES.soleil}
                  libelle="Mode sombre"
                  actif={sombre === true}
                  onChange={() => setSombre((valeur) => !valeur)}
                />
                <LigneInterrupteur
                  trace={TRACES.eclair}
                  libelle="Animations"
                  actif={animations !== false}
                  onChange={() => setAnimations((valeur) => !valeur)}
                />
                <Link
                  href="/parametres"
                  onClick={() => setMenuCompte(false)}
                  className="group flex items-center gap-3 rounded-[14px] px-2 py-2 text-sm font-semibold transition-colors hover:bg-white/[0.08]"
                >
                  <span className="flex size-9 items-center justify-center rounded-[11px] bg-white/10">
                    <Icone trace={TRACES.parametres} className="size-[18px]" />
                  </span>
                  <span className="flex-1">Paramètres</span>
                  <span className="text-white/45 transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>

              <button
                type="button"
                onClick={seDeconnecter}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-[14px] border border-white/10 py-2.5 text-sm font-bold text-white/80 transition-colors hover:border-transparent hover:bg-erreur hover:text-erreur-foreground"
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
            className={`flex w-full items-center rounded-[12px] p-2 text-left transition hover:bg-white/10 ${
              reduit ? "justify-center" : "gap-3"
            }`}
          >
            <span
              className="flex size-10 shrink-0 -rotate-3 items-center justify-center rounded-[12px] font-affiche text-xl leading-none text-white shadow-[0_6px_14px_-6px_rgba(0,0,0,0.6)]"
              style={{ background: "linear-gradient(135deg, var(--fond-sombre-actif), color-mix(in srgb, var(--fond-sombre-actif) 45%, var(--fond-sombre-haut)))" }}
            >
              {(prenom ?? email ?? "?").charAt(0).toUpperCase()}
            </span>
            {!reduit && (
              <span className="min-w-0 flex-1">
                <span className="block truncate font-affiche text-lg leading-tight text-white">
                  {prenom ?? "Mon compte"}
                </span>
                {email && <EmailStylise email={email} className="mt-1" />}
              </span>
            )}
            {!reduit && (
              <Icone
                trace={TRACES.chevron}
                className={`size-4 text-white/60 transition-transform ${menuCompte ? "rotate-180" : ""}`}
              />
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
