import Link from "next/link";

import BandeauBienvenueAccueil from "@/components/BandeauBienvenueAccueil";
import BarreObjectifAccueil from "@/components/BarreObjectifAccueil";
import CarteAujourdhuiAccueil from "@/components/CarteAujourdhuiAccueil";
import CarteMotivationAccueil from "@/components/CarteMotivationAccueil";
import TuilesStatsAccueil from "@/components/TuilesStatsAccueil";
import CompteARebourExamenLive from "@/components/CompteARebourExamenLive";
import GrilleMatieresAccueil from "@/components/GrilleMatieresAccueil";
import {
  IconeCalendrier,
  IconeFleche,
  IconeLivreOuvert,
  IconePlume,
  IconeTexte,
} from "@/components/icones";
import { deriverPrenom } from "@/lib/prenom";
import { creerClientServeur } from "@/lib/supabase/server";
import { recupererProgressionParOeuvre } from "@/lib/supabase/tableauDeBord";
import { compterCours, compterCoursParCategorie } from "@/lib/supabase/contenu";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { MATIERES } from "@/lib/matieres";
import { couleurMatiere } from "@/lib/palette-matieres";
import { joursAvant, prochaineSession } from "@/lib/calendrier";

/**
 * Accueil d'un élève connecté — reprend une maquette complète fournie
 * par l'utilisateur ("j ai ajouté une photo dans le fichier fais la
 * comme ca dans l acuueil") : bandeau de bienvenue, carte "En cours",
 * "Mes matières", compte à rebours avant l'examen régional.
 *
 * Écarts assumés par rapport à la maquette, pour ne rien inventer :
 * "Objectif : Réussir le Bac !" (BarreObjectifAccueil) et "Aujourd'hui"
 * (CarteAujourdhuiAccueil) ajoutés à la demande explicite de
 * l'utilisateur, capture d'écran de la maquette complète à l'appui
 * ("tu peux faire juste ce qui est sur cette page") — reviennent sur
 * le choix précédent de les omettre. "Aujourd'hui" garde toutefois un
 * état honnête "Bientôt disponible" plutôt que la liste de tâches
 * horodatées de la maquette ("Lire le chapitre 2 — 08:00"...) : aucune
 * table de rappels/tâches personnelles n'existe en base, ces tâches
 * sont des exemples de mise en page dans la maquette, pas de vraies
 * données à reproduire (voir le composant pour le détail).
 *
 * Écarts encore assumés par rapport à la maquette, pour ne rien
 * inventer :
 * - Pas de cloche de notifications ni de barre de recherche
 *   fonctionnelle dans la navbar (BarreNavigation.tsx) : aucun système
 *   de notifications ni moteur de recherche du contenu n'existe encore
 *   côté serveur — les ajouter purement visuels, sans rien derrière,
 *   induirait l'élève en erreur (bouton qui ne fait rien).
 * - "Mes matières" : seul le français a un vrai pourcentage
 *   (chapitres lus/total) — les 3 autres matières n'ont encore aucun
 *   contenu, "Bientôt disponible" plutôt qu'un chiffre inventé (la
 *   maquette illustrait 68/54/72/49%, aucun n'est réel).
 * - Compte à rebours : cible la vraie date de l'examen régional déjà
 *   sourcée pour /calendrier, pas une date inventée.
 *
 * Pleine largeur (`max-w-5xl` retiré) — demandé explicitement par
 * l'utilisateur ("je veux que l acceuil occupe toute la page"), même
 * principe que /calendrier (pas de centrage/plafond de largeur).
 *
 * Taches de couleur décoratives en fond (grands cercles flous, très
 * faible opacité) — demandé explicitement par l'utilisateur ("ajoute
 * des couleurs sur l acceuil pour donner la vie au site") : sans ça,
 * la page était presque entièrement bleu pâle/blanc (gris en mode
 * nuit), les seules touches de couleur étant les petites pastilles
 * d'icône de "Mes matières". Mêmes couleurs que les 4 matières
 * (tokens `--color-matiere-*`, voir app/globals.css), en fond derrière
 * les cartes plutôt que dessus (toutes les cartes ont un fond opaque
 * `bg-surface`) : même technique que la vague décorative de l'accueil
 * visiteur plus bas (`fixed ... -z-10`), purement décoratif, aucune
 * donnée. Vérifié en mode clair et sombre avant de garder les mêmes
 * opacités dans les deux.
 */
async function AccueilConnecte({
  prenom,
  userId,
}: {
  prenom: string;
  userId: string;
}) {
  const [progression, nombreCours] = await Promise.all([
    recupererProgressionParOeuvre(userId),
    compterCours(FILIERE_ACTUELLE),
  ]);
  const session = prochaineSession();

  const totalChapitres = progression.parOeuvre.reduce(
    (somme, o) => somme + o.totalChapitres,
    0,
  );

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute -top-24 -left-24 size-[420px] rounded-full opacity-[0.16] blur-3xl"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
        <div
          className="absolute top-32 -right-32 size-[380px] rounded-full opacity-[0.14] blur-3xl"
          style={{ backgroundColor: "var(--color-matiere-arabe)" }}
        />
        <div
          className="absolute bottom-[-160px] left-1/3 size-[460px] rounded-full opacity-[0.12] blur-3xl"
          style={{ backgroundColor: "var(--color-matiere-histoire-geo)" }}
        />
      </div>

      <main className="flex w-full flex-col gap-6 px-6 py-10 sm:px-9">
        {/* Entrée échelonnée des blocs au chargement — demandé par
         * l'utilisateur parmi plusieurs propositions d'élégance. Même
         * animation que les cartes de /oeuvres
         * (`animate-entree-carte`, app/globals.css), avec un décalage
         * croissant : les blocs apparaissent de haut en bas, colonne
         * de gauche puis colonne de droite. Le délai est en style
         * inline parce qu'il change d'un bloc à l'autre — une classe
         * Tailwind construite à l'exécution ne serait pas générée. */}
        <div className="animate-entree-carte">
          <BandeauBienvenueAccueil prenom={prenom} />
        </div>

        <div
          className="animate-entree-carte"
          style={{ animationDelay: "60ms" }}
        >
          <TuilesStatsAccueil
            nombreCours={nombreCours}
            nombreMatieres={MATIERES.length}
            joursAvantExamen={session ? joursAvant(session.debut) : null}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
          <div className="flex flex-col gap-6">
            <div
              className="animate-entree-carte"
              style={{ animationDelay: "90ms" }}
            >
              <GrilleMatieresAccueil
                chapitresLus={progression.totalChapitresLus}
                totalChapitres={totalChapitres}
              />
            </div>
            <div
              className="animate-entree-carte"
              style={{ animationDelay: "180ms" }}
            >
              <BarreObjectifAccueil />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div
              className="animate-entree-carte"
              style={{ animationDelay: "150ms" }}
            >
              <CompteARebourExamenLive />
            </div>
            <div
              className="animate-entree-carte"
              style={{ animationDelay: "240ms" }}
            >
              <CarteAujourdhuiAccueil />
            </div>
            <div
              className="animate-entree-carte"
              style={{ animationDelay: "330ms" }}
            >
              <CarteMotivationAccueil />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

/**
 * Page d'accueil : /
 *
 * Pour un visiteur non connecté : contenu marketing minimal inchangé
 * (vague décorative + hero, voir plus bas). Pour un élève connecté :
 * accueil personnalisé (AccueilConnecte ci-dessus) — demandé
 * explicitement par l'utilisateur.
 */
export default async function PageAccueil() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data: profil } = await supabase
      .from("profils")
      .select("nom_complet")
      .eq("id", user.id)
      .maybeSingle();
    const prenom = deriverPrenom(
      profil?.nom_complet ?? null,
      user.email ?? null,
    );
    return <AccueilConnecte prenom={prenom} userId={user.id} />;
  }

  // ———————————————————————————————————————————————————————————
  // Visiteur non connecté : page d'accueil publique.
  //
  // Elle ne montrait qu'un titre ("Réussis ton français, chapitre par
  // chapitre"), un sous-titre et un bouton, puis une grande bande vide
  // jusqu'au pied de page — alors que le site couvre désormais quatre
  // matières. Elle présente maintenant ce qui existe vraiment : les
  // matières (avec leur nombre de leçons, compté en base), les trois
  // espaces de français, et la date du prochain examen régional.
  // Rien d'inventé : aucun chiffre de fréquentation, aucun
  // témoignage, aucune fonctionnalité annoncée qui n'existe pas.
  // Pleine largeur, conformément au reste du site.
  const [coursParCategorie, session] = await Promise.all([
    compterCoursParCategorie(FILIERE_ACTUELLE),
    Promise.resolve(prochaineSession()),
  ]);
  const joursRestants = session ? joursAvant(session.debut) : null;

  const espacesFrancais = [
    {
      href: "/oeuvres",
      titre: "Œuvres au programme",
      texte: "Résumés, personnages, axes de lecture et sujets.",
      Icone: IconeLivreOuvert,
    },
    {
      href: "/langue",
      titre: "Langue",
      texte: "Figures de style, énonciation, discours rapporté, lexique.",
      Icone: IconeTexte,
    },
    {
      href: "/production-ecrite",
      titre: "Production écrite",
      texte: "Méthodes et sujets guidés pour rédiger au propre.",
      Icone: IconePlume,
    },
  ];

  return (
    <>
      <style>{`
        @keyframes vague-accueil-respire {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(14px) scale(1.015); }
        }
      `}</style>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 w-full"
      >
        <svg
          viewBox="0 0 1440 620"
          preserveAspectRatio="none"
          className="h-[88vh] w-full"
          style={{
            animation: "vague-accueil-respire 10s ease-in-out infinite",
          }}
        >
          <defs>
            <linearGradient
              id="dégradé-vague-accueil"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="color-mix(in srgb, var(--color-primary) 14%, var(--color-background))"
              />
              <stop
                offset="55%"
                stopColor="color-mix(in srgb, var(--color-primary) 22%, var(--color-background))"
              />
              <stop offset="100%" stopColor="var(--color-background)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 H1440 V220 C1300,260 1160,180 980,220 C740,270 560,360 340,340 C180,326 60,290 0,260 Z"
            fill="url(#dégradé-vague-accueil)"
          />
        </svg>
      </div>

      <main className="flex w-full flex-col px-6 pb-20 sm:px-9">
        <section className="flex flex-col items-center gap-6 py-12 sm:py-20 text-center">
          <span className="rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            1<sup>ère</sup> année du baccalauréat · Maroc
          </span>
          <h1 className="max-w-3xl font-serif text-3xl sm:text-4xl leading-tight font-bold tracking-tight text-ink sm:text-[46px]">
            Révise tout ton programme,{" "}
            <span className="text-primary italic">chapitre par chapitre</span>.
          </h1>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            Français, arabe, histoire-géographie et éducation islamique : les
            cours du programme, réécrits pour être lus et révisés, au même
            endroit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/matieres"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Voir les matières →
            </Link>
            <Link
              href="/calendrier"
              className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-border-strong"
            >
              Le calendrier de l&apos;examen
            </Link>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-bold text-ink">
                Les matières
              </h2>
              <p className="text-sm text-muted-foreground">
                Chaque matière mène à ses leçons, en lecture libre.
              </p>
            </div>
            <Link
              href="/matieres"
              className="shrink-0 text-sm font-semibold text-primary hover:underline"
            >
              Tout voir →
            </Link>
          </div>

          <ul className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3 sm:gap-[18px]">
            {[{ slug: "francais", href: "/francais" }, ...MATIERES.map((m) => ({ slug: m.slug, href: `/${m.slug}` }))].map(
              ({ slug, href }) => {
                const matiere = MATIERES.find((m) => m.slug === slug);
                const couleur = couleurMatiere(slug);
                const nombre = coursParCategorie[slug] ?? 0;
                const titre = matiere
                  ? `${matiere.titreAvantAccent}${matiere.titreAccent}`
                  : "Français";
                const texte = matiere
                  ? matiere.description
                  : "Œuvres au programme, langue et production écrite.";
                const Icone = matiere ? matiere.Icone : IconeLivreOuvert;
                return (
                  <li key={slug}>
                    <Link
                      href={href}
                      className="group flex h-full flex-col rounded-[20px] border border-border bg-surface p-5 sm:p-[26px] shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
                    >
                      <span
                        style={{
                          backgroundColor: `color-mix(in srgb, ${couleur} 14%, var(--color-surface))`,
                          color: couleur,
                        }}
                        className="flex size-[52px] items-center justify-center rounded-full"
                      >
                        <Icone className="size-6" />
                      </span>
                      <h3 className="mt-4 font-serif text-lg leading-snug font-bold text-ink">
                        {titre}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {texte}
                      </p>
                      <span
                        style={{ color: couleur }}
                        className="mt-4 flex items-center gap-1.5 text-sm font-semibold"
                      >
                        {nombre > 0
                          ? `${nombre} leçon${nombre > 1 ? "s" : ""}`
                          : "Découvrir"}
                        <IconeFleche className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                );
              },
            )}
          </ul>
        </section>

        <section className="mt-10 sm:mt-16 flex flex-col gap-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-ink">
              Le français en trois espaces
            </h2>
            <p className="text-sm text-muted-foreground">
              Les trois épreuves de l&apos;examen, chacune avec ses pages.
            </p>
          </div>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3 sm:gap-[18px]">
            {espacesFrancais.map(({ href, titre, texte, Icone }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex h-full items-start gap-4 rounded-[20px] border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[13px] bg-primary-tint text-primary">
                    <Icone className="size-5" />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="font-serif text-base font-bold text-ink">
                      {titre}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {texte}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {session && joursRestants !== null && joursRestants >= 0 && (
          <section className="mt-10 sm:mt-16">
            <div className="flex flex-col items-start gap-5 rounded-[22px] border border-border bg-surface p-5 sm:p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-primary-tint text-primary">
                  <IconeCalendrier className="size-6" />
                </span>
                <div>
                  <p className="font-serif text-xl font-bold text-ink">
                    {session.titre}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {session.libelle} — dans {joursRestants} jour
                    {joursRestants > 1 ? "s" : ""}.
                  </p>
                </div>
              </div>
              <Link
                href="/calendrier"
                className="shrink-0 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-border-strong"
              >
                Voir le calendrier →
              </Link>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
