/**
 * Ce que le site propose vraiment pour préparer l'examen régional,
 * rassemblé en un endroit (voir app/(public)/examens-regionaux).
 *
 * Rien n'est inventé ici : chaque entrée pointe vers une page qui
 * existe déjà et dont le contenu est en base. Les annales des années
 * précédentes n'y figurent pas, parce qu'il n'y en a aucune — la page
 * le dit plutôt que d'annoncer une rubrique vide.
 */
export interface RessourceExamen {
  href: string;
  titre: string;
  /** Titre arabe, pour les ressources rédigées en arabe. */
  titreArabe?: string;
  description: string;
}

export interface PreparationMatiere {
  slug: string;
  matiere: string;
  ressources: RessourceExamen[];
}

export const PREPARATION_PAR_MATIERE: PreparationMatiere[] = [
  {
    slug: "francais",
    matiere: "Français",
    ressources: [
      {
        href: "/production-ecrite/methodologie-redaction",
        titre: "La méthodologie de la rédaction",
        description:
          "Comment construire une introduction, un développement et une conclusion le jour de l'épreuve.",
      },
      {
        href: "/production-ecrite/modeles-corriges",
        titre: "Modèles de rédactions corrigées",
        description: "Des copies rédigées en entier, pour voir ce qui est attendu.",
      },
      {
        href: "/production-ecrite/grille-auto-evaluation",
        titre: "Grille d'auto-évaluation",
        description: "Relis ta copie critère par critère avant de la rendre.",
      },
      {
        href: "/redaction/nouvelle",
        titre: "Correcteur IA",
        description:
          "Envoie une rédaction sur un sujet du programme et reçois une note sur 20 avec tes erreurs expliquées.",
      },
    ],
  },
  {
    slug: "education-islamique",
    matiere: "Éducation islamique",
    ressources: [
      {
        href: "/education-islamique/islamique-manhajiyat-imtihan",
        titre: "Méthodologie des questions de l'examen régional",
        titreArabe: "منهجية أسئلة الامتحان الجهوي",
        description:
          "Les dix types de questions posées à l'examen, avec un exemple traité pour chacun.",
      },
      {
        href: "/education-islamique/islamique-manhajiyat-nousous",
        titre: "Méthodologie des textes religieux",
        titreArabe: "منهجية التعامل مع النصوص الشرعية",
        description:
          "Dégager le contenu, la valeur, le jugement et la leçon d'un verset ou d'un hadith.",
      },
      {
        href: "/education-islamique/islamique-tariqat-mourajaa",
        titre: "Comment réviser la sourate Youssef",
        titreArabe: "طريقة مراجعة سورة يوسف",
        description:
          "Les six savoir-faire à maîtriser sur la sourate avant l'épreuve.",
      },
    ],
  },
];
