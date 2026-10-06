import type { FicheLecture } from "@/lib/ficheLectureBoiteAMerveilles";

/**
 * Fiche de lecture (carte d'identité de l'œuvre, biographie de
 * l'auteur, structure, style) de "Le Dernier Jour d'un Condamné" —
 * demandée explicitement par l'utilisateur ("fais moi fiche de lecture
 * et lexique"). Même structure (`FicheLecture`, voir
 * `lib/ficheLectureBoiteAMerveilles.ts`) et même composant d'affichage
 * (`OngletFicheLecture.tsx`) que La Boîte à Merveilles/Antigone.
 *
 * ⚠️ Contenu entièrement rédigé par Claude, à partir de connaissances
 * générales sur l'œuvre et son auteur (repères de publication, genre,
 * biographie de Victor Hugo...), pas fourni par l'utilisateur — à
 * faire relire par un enseignant avant usage en classe, même réserve
 * que pour les fiches de La Boîte à Merveilles/Antigone.
 */
export const FICHE_LECTURE_DERNIER_JOUR_CONDAMNE: FicheLecture = {
  identite: {
    genre: "Roman à thèse (récit-plaidoyer), sous forme de journal intime fictif",
    datePublication: "1829 (publié anonymement ; préface engagée ajoutée par Victor Hugo en 1832)",
    editeur: "Gosselin (édition originale, 1829)",
    mouvement: "Romantisme engagé — œuvre fondatrice de la littérature abolitionniste française",
    narrateur: "Narrateur-personnage anonyme, à la première personne, sous forme de journal intime",
    cadreSpatioTemporel: "Paris, prisons de Bicêtre puis de la Conciergerie, dans les derniers jours précédant une exécution",
    structure: "49 chapitres courts et inégaux, organisés comme les entrées d'un journal tenu à l'approche de l'exécution",
    registre: "Pathétique et polémique",
  },
  biographieAuteur: {
    nomComplet: "Victor Marie Hugo",
    naissance: "26 février 1802, à Besançon",
    deces: "22 mai 1885, à Paris",
    profession: "Écrivain (poète, romancier, dramaturge) et homme politique (pair de France, député, sénateur)",
    mouvement: "Chef de file du romantisme français",
    oeuvresPrincipales: [
      "Le Dernier Jour d'un Condamné (1829)",
      "Notre-Dame de Paris (1831)",
      "Les Contemplations (1856)",
      "Les Misérables (1862)",
    ],
    distinction: "Figure majeure du XIXᵉ siècle littéraire et politique français ; funérailles nationales, inhumé au Panthéon",
    // Portrait par Étienne Carjat (1876), domaine public, pris sur
    // Wikimedia Commons et recadré sur le visage.
    photo: "/auteurs/victor-hugo.jpg",
  },
  structureDetail:
    "Le roman adopte la forme d'un journal intime fictif tenu par un condamné à mort anonyme, depuis sa condamnation jusqu'à ses derniers instants avant l'exécution. Le récit ne suit pas une intrigue à rebondissements mais un compte à rebours psychologique : chaque chapitre correspond à une étape de l'attente (le procès, le transfert à la Conciergerie, la visite de sa fille, l'approche de l'exécution), rythmée par un temps qui s'écoule inexorablement et de plus en plus vite à mesure que l'échéance approche. Cette construction fragmentée plonge le lecteur dans la durée subjective et angoissée du condamné plutôt que dans un enchaînement d'événements extérieurs. Le roman s'achève brutalement, sans jamais montrer l'exécution elle-même.",
  themesPrincipaux: [
    "La dénonciation de la peine de mort",
    "L'attente et le temps comme torture psychologique",
    "La solitude morale du condamné",
    "L'amour paternel",
    "L'indifférence et la cruauté de la société",
    "La peur de la mort et de l'inconnu",
  ],
  styleEcriture:
    "L'écriture de Victor Hugo dans ce texte de jeunesse (il a vingt-sept ans lors de la publication) est déjà marquée par l'éloquence et le pathétique qui caractériseront son œuvre : phrases courtes et hachées pour traduire l'urgence et l'angoisse, apostrophes au lecteur, procédés de la plaidoirie (répétitions, questions rhétoriques, gradations). Le choix du « je » et du présent installe une proximité immédiate avec la conscience du condamné, sans jamais nommer ni son crime ni son identité — un parti pris délibéré pour empêcher le lecteur de se rassurer en jugeant un coupable plutôt qu'en compatissant à un homme. Le texte est en réalité un réquisitoire déguisé en fiction : dans sa préface de 1832, Hugo revendiquera ouvertement son intention abolitionniste.",
  aRetenir: [
    "Le condamné reste **anonyme** : on ne juge pas un coupable, on compatit avec un homme.",
    "La structure est un **compte à rebours** : le temps s'accélère jusqu'à la fin.",
    "Le roman est un **réquisitoire déguisé en fiction** contre la peine de mort.",
    "Registres **pathétique et polémique** ; procédés de la plaidoirie.",
  ],
};
