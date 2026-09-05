import type { ReactElement } from "react";

import { IconeCroissant, IconeGlobe, IconeLivreOuvert } from "@/components/icones";

export interface Matiere {
  /** Utilisé à la fois comme segment d'URL (/[slug]) et comme valeur
   * de `cours.categorie` en base — les deux doivent rester alignés. */
  slug: string;
  titreAvantAccent: string;
  titreAccent: string;
  description: string;
  Icone: (props: { className?: string }) => ReactElement;
}

/**
 * Nouvelles matières ajoutées à la demande explicite de l'utilisateur
 * ("je veux ajouter autre matiere" → "education islamique arabe et
 * histoire geographie"), en plus du français (Œuvres / Langues /
 * Production écrite, déjà existants et non modifiés ici).
 *
 * Même mécanisme que /langue et /production-ecrite : une catégorie
 * de la table `cours` par matière (voir `lib/supabase/contenu.ts`),
 * mais routage générique via `app/(public)/[matiere]/` plutôt qu'un
 * dossier dédié par matière — ajouter une 4ᵉ matière plus tard ne
 * demandera qu'une entrée ici, aucun nouveau fichier de page.
 *
 * Aucune leçon n'est listée en dur ici (contrairement à `LEÇONS` dans
 * /langue/page.tsx) : le plan de cours de ces 3 matières n'a pas
 * encore été fourni par l'utilisateur ni un enseignant, donc rien
 * n'est inventé — les pages listent uniquement ce qui existe déjà
 * dans `cours` (vide pour l'instant, voir le message "Bientôt
 * disponible" de app/(public)/[matiere]/page.tsx).
 */
export const MATIERES: Matiere[] = [
  {
    slug: "education-islamique",
    titreAvantAccent: "Éducation ",
    titreAccent: "islamique",
    description: "Cours, notions clés et repères pour l'examen d'éducation islamique.",
    Icone: IconeCroissant,
  },
  {
    slug: "arabe",
    titreAvantAccent: "Cours d'",
    titreAccent: "arabe",
    description: "Textes, grammaire et expression pour progresser en arabe.",
    Icone: IconeLivreOuvert,
  },
  {
    slug: "histoire-geo",
    titreAvantAccent: "Histoire-",
    titreAccent: "Géographie",
    description: "Chapitres d'histoire et de géographie au programme du bac.",
    Icone: IconeGlobe,
  },
];

export function recupererMatiereParSlug(slug: string): Matiere | undefined {
  return MATIERES.find((matiere) => matiere.slug === slug);
}
