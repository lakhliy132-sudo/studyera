import type { Metadata } from "next";
import {
  Arimo,
  Caveat,
  IBM_Plex_Mono,
  IBM_Plex_Sans_Arabic,
  Unbounded,
} from "next/font/google";
import "./globals.css";

import BarreNavigation from "@/components/BarreNavigation";
import { deriverPrenom } from "@/lib/prenom";
import { creerClientServeur } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "STUDYERA",
  description: "STUDYERA",
};

/**
 * Police arabe (IBM Plex Sans Arabic), chargée et auto-hébergée par
 * Next.js au build (pas de requête vers Google au chargement de la
 * page). Exposée comme variable CSS `--font-ibm-plex-arabic`, reprise
 * par le token `font-arabe` défini dans app/globals.css : les
 * composants utilisent `font-arabe`, jamais la variable directement.
 */
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-arabic",
});

/**
 * Arial : police du texte courant et des titres de section, demandée
 * par l'utilisateur ("change le font utilise Arial Bold"), à la place
 * d'Inter (texte) et de Playfair Display (titres). Les grands titres de
 * page ont leur propre police, Unbounded, plus bas.
 *
 * Arial n'est pas installée sur Android, où la plupart des élèves
 * ouvrent le site : sans repli, leur texte retomberait sur la police
 * système. Arimo a les mêmes dessins et les mêmes métriques qu'Arial ;
 * chargée ici, elle prend le relais là où Arial manque, et le texte
 * garde la même largeur partout. Les tokens `font-sans` et `font-serif`
 * (app/globals.css) mettent Arial en premier, Arimo derrière. Le nom
 * `font-serif` reste pour ne pas toucher aux 160 titres qui l'utilisent.
 */
const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-arimo",
});

/**
 * Police des grands titres de page (h1) : Unbounded, large et très
 * grasse. L'utilisateur voulait "Epic Pro", une police payante dont on
 * n'a pas les fichiers ; sur un exemple qu'il a fourni ("HERO CROWN"),
 * cinq polices gratuites lui ont été montrées côte à côte et il a choisi
 * celle-ci ("le premier"). Réservée aux h1 (token `font-titre`) : une
 * police aussi large fatigue l'œil sur plusieurs lignes de texte.
 */
const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-unbounded",
});

/**
 * Police à chasse fixe pour les petits libellés "étiquette" en
 * capitales (ex. "CHAPITRE 01", "PRODUCTION ÉCRITE" sur le tableau de
 * bord) — ajoutée pour le tableau de bord réécrit sur un modèle fourni
 * par l'utilisateur ("fais moi comme ca mais ajoute des modif bien").
 * Même famille IBM Plex que la police arabe déjà en place, cohérent
 * avec le reste du système typographique plutôt qu'une police
 * supplémentaire sans rapport. Exposée comme `--font-ibm-plex-mono`,
 * reprise par le token `font-mono` dans app/globals.css.
 */
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
});

/**
 * Police manuscrite (Caveat), pour la note décorative "Un petit effort
 * chaque jour fait une grande différence." de la bannière /calendrier
 * — reprise d'une maquette fournie par l'utilisateur ("regarde la
 * photo que je mis dans le fichier fais la comme ca"). Réservée à cet
 * unique usage décoratif (token `font-manuscrit`, voir app/globals.css) :
 * jamais pour un texte fonctionnel/lisible en continu.
 */
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-caveat",
});

/**
 * Layout racine : s'applique à toutes les pages, quel que soit leur
 * groupe de routes ((public), (eleve), (admin)).
 *
 * Affiche BarreNavigation partout, avec l'état de connexion résolu une
 * seule fois ici (plutôt que de le refaire dans chaque page) et
 * transmis en props. Rend chaque page dynamique (plus de rendu
 * statique pur), acceptable pour une nav qui doit refléter la vraie
 * session de l'utilisateur.
 *
 * Plus de menu latéral ni de padding compensatoire ici — après un
 * aller-retour (menu vertical fixe puis retour à une navbar
 * horizontale, demandé explicitement par l'utilisateur avec la
 * référence du site Axiom), `BarreNavigation` est de nouveau une
 * simple barre en haut, dans le flux normal du document.
 *
 * Le fond décoratif "vague" (dégradé bleu clair → lavande pâle →
 * blanc, façon Axiom) qui vivait ici a été déplacé dans
 * app/(public)/page.tsx — demandé explicitement par l'utilisateur
 * ("FAIS LA JUSTE SUR L ACCEUIL") : posé dans ce layout racine, il
 * s'appliquait à tort à toutes les pages du site, alors qu'il n'avait
 * de sens que sur la page d'accueil (voir l'historique des itérations
 * dans ETAT.md).
 */

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Prénom affiché à côté de l'avatar dans la nav (maquette envoyée par
  // l'utilisateur) — une requête de plus uniquement pour un utilisateur
  // connecté, comme AccueilConnecte le fait déjà pour la même donnée.
  let prenom: string | null = null;
  if (user) {
    const { data: profil } = await supabase
      .from("profils")
      .select("nom_complet")
      .eq("id", user.id)
      .maybeSingle();
    prenom = deriverPrenom(profil?.nom_complet ?? null, user.email ?? null);
  }

  return (
    // `suppressHydrationWarning` : le script ci-dessous pose
    // `data-theme`/`data-palette` sur <html> avant l'hydratation, donc
    // l'attribut diffère forcément du HTML rendu côté serveur. C'est
    // voulu (évite le clignotement de couleur), React doit l'ignorer.
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${ibmPlexArabic.variable} ${arimo.variable} ${unbounded.variable} ${ibmPlexMono.variable} ${caveat.variable}`}
    >
      {/* `flex` : la colonne de navigation (BarreNavigation, verticale
       * pour un élève connecté) occupe la gauche, le contenu prend le
       * reste. En dessous de 1280px, la nav redevient une barre en haut
       * et ce conteneur se comporte comme une simple colonne. */}
      <head>
        {/* Applique la palette choisie (localStorage) avant le premier
         * rendu : sans ça, la page s'afficherait en bleu puis
         * basculerait sur la couleur de l'élève. Le thème clair/sombre,
         * lui, est déjà géré en CSS par prefers-color-scheme. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var p=localStorage.getItem("studyera-palette");if(p&&p!=="default"){document.documentElement.dataset.palette=p;}var t=localStorage.getItem("studyera-theme");if(t){document.documentElement.dataset.theme=t;}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <BarreNavigation
          connecte={Boolean(user)}
          email={user?.email ?? null}
          prenom={prenom}
        />
        {/* Le décalage n'est réservé que pour un élève connecté : c'est
         * lui seul qui voit la colonne de navigation (MenuLateral, qui
         * publie `--largeur-menu`). Pour un visiteur, cette variable
         * n'est jamais posée et la valeur de repli laissait une bande
         * vide de 18rem à gauche de toutes les pages publiques. */}
        <div
          className={`flex min-w-0 flex-1 flex-col ${
            user ? "xl:ps-[var(--largeur-menu,18rem)] print:ps-0" : ""
          }`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
