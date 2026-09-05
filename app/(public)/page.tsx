import Link from "next/link";

import BandeauBienvenueAccueil from "@/components/BandeauBienvenueAccueil";
import CarteEnCours from "@/components/CarteEnCours";
import CompteARebourExamenLive from "@/components/CompteARebourExamenLive";
import GrilleMatieresAccueil from "@/components/GrilleMatieresAccueil";
import { IconeEtoile } from "@/components/icones";
import { creerClientServeur } from "@/lib/supabase/server";
import { recupererProgressionParOeuvre, recupererRepriseLecture } from "@/lib/supabase/tableauDeBord";

/** Premier prénom déduit de `nom_complet`, avec repli sur la partie
 * locale de l'email — même logique que /tableau-de-bord (dupliquée
 * ici : trop petite pour justifier un fichier partagé). */
function deriverPrenom(nomComplet: string | null, email: string | null): string {
  const premierMot = nomComplet?.trim().split(/\s+/)[0];
  if (premierMot) return premierMot;
  const local = email?.split("@")[0];
  return local ? local.charAt(0).toUpperCase() + local.slice(1) : "toi";
}

/**
 * Accueil d'un élève connecté — reprend une maquette complète fournie
 * par l'utilisateur ("j ai ajouté une photo dans le fichier fais la
 * comme ca dans l acuueil") : bandeau de bienvenue, carte "En cours",
 * "Mes matières", compte à rebours avant l'examen régional.
 *
 * Écarts assumés par rapport à la maquette, pour ne rien inventer :
 * - Pas de cloche de notifications : demandé puis explicitement
 *   écarté par l'utilisateur lors d'une session précédente ("non le
 *   mode de nuit" en réponse à la question posée à ce sujet) — la
 *   maquette en montre une, mais la garder contredirait ce choix déjà
 *   fait.
 * - Pas de planning "Aujourd'hui" (tâches horodatées) : aucune table
 *   de rappels/tâches personnelles n'existe en base, ces tâches de la
 *   maquette ("Lire le chapitre 2 — 08:00"...) sont des exemples de
 *   mise en page, pas de vraies données à reproduire.
 * - Pas de barre de recherche fonctionnelle (aucun moteur de
 *   recherche du contenu n'existe encore) ni de nouvelle barre de
 *   navigation : la navbar actuelle (BarreNavigation.tsx) a déjà été
 *   longuement ajustée à la demande de l'utilisateur, non reprise ici.
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
 */
async function AccueilConnecte({ prenom, userId }: { prenom: string; userId: string }) {
  const [progression, reprise] = await Promise.all([
    recupererProgressionParOeuvre(userId),
    recupererRepriseLecture(userId),
  ]);

  const totalChapitres = progression.parOeuvre.reduce((somme, o) => somme + o.totalChapitres, 0);
  const oeuvreReprise = reprise ? progression.parOeuvre.find((o) => o.slug === reprise.oeuvreSlug) : undefined;
  const pourcentageReprise =
    oeuvreReprise && oeuvreReprise.totalChapitres > 0
      ? Math.round((oeuvreReprise.chapitresLus / oeuvreReprise.totalChapitres) * 100)
      : null;

  return (
    <main className="flex w-full flex-col gap-6 px-6 py-10 sm:px-9">
      <BandeauBienvenueAccueil prenom={prenom} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-6">
          {reprise && <CarteEnCours reprise={reprise} pourcentage={pourcentageReprise} />}
          <GrilleMatieresAccueil chapitresLus={progression.totalChapitresLus} totalChapitres={totalChapitres} />
        </div>

        <div className="flex flex-col gap-6">
          <CompteARebourExamenLive />
          <div className="flex items-center gap-3 rounded-[24px] bg-gradient-to-br from-primary to-ink p-6 text-white shadow-sm">
            <IconeEtoile className="size-6 shrink-0" />
            <p className="text-sm leading-snug">Tu es plus proche de tes rêves que tu ne le penses.</p>
          </div>
        </div>
      </div>
    </main>
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
    const { data: profil } = await supabase.from("profils").select("nom_complet").eq("id", user.id).maybeSingle();
    const prenom = deriverPrenom(profil?.nom_complet ?? null, user.email ?? null);
    return <AccueilConnecte prenom={prenom} userId={user.id} />;
  }

  return (
    <>
      <style>{`
        @keyframes vague-accueil-respire {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(14px) scale(1.015); }
        }
      `}</style>
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 -z-10 w-full">
        <svg
          viewBox="0 0 1440 620"
          preserveAspectRatio="none"
          className="h-[88vh] w-full"
          style={{ animation: "vague-accueil-respire 10s ease-in-out infinite" }}
        >
          <defs>
            <linearGradient id="dégradé-vague-accueil" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="color-mix(in srgb, var(--color-primary) 14%, var(--color-background))" />
              <stop offset="55%" stopColor="color-mix(in srgb, var(--color-primary) 22%, var(--color-background))" />
              <stop offset="100%" stopColor="var(--color-background)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 H1440 V220 C1300,260 1160,180 980,220 C740,270 560,360 340,340 C180,326 60,290 0,260 Z"
            fill="url(#dégradé-vague-accueil)"
          />
        </svg>
      </div>

      <main className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-4 py-20 text-center">
        <h1 className="text-3xl font-semibold text-foreground">
          Réussis ton français, chapitre par chapitre.
        </h1>
        <p className="max-w-xl text-muted-foreground">
          Résumés, personnages, lexique et sujets pour les œuvres au programme —
          et bientôt un correcteur de copie.
        </p>
        <Link
          href="/oeuvres"
          className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Découvrir les œuvres →
        </Link>
      </main>
    </>
  );
}
