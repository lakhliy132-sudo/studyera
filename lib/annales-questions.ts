/**
 * La structure d'un sujet d'examen régional, telle que la maquette
 * fournie par l'utilisateur la demande : des parties notées, et dans
 * chacune des questions numérotées valant un nombre de points, avec
 * leur correction consultable question par question.
 *
 * Stockée en `jsonb` dans `annales.questions` plutôt qu'en tables
 * séparées : un sujet est toujours lu et écrit d'un bloc, jamais
 * interrogé question par question, et la forme des questions varie
 * selon leur type.
 *
 * Tout ce qui sort de la base passe par `lireEpreuve`, qui ignore ce
 * qui n'est pas conforme : une question mal saisie disparaît de
 * l'affichage au lieu de casser la page.
 */

/*
 * Les réponses attendues sont toutes facultatives : un sujet peut être
 * mis en ligne sans son corrigé (le sujet 2023 de Casablanca-Settat a
 * été fourni sans). Une réponse absente n'est jamais devinée : le
 * bouton « Voir la correction » disparaît simplement pour la question.
 */

/** Un tableau à compléter : chaque champ a un libellé et sa réponse
 * (chaîne vide si le corrigé n'est pas connu). */
export interface QuestionTableau {
  type: "tableau";
  numero: string;
  points: number;
  enonce: string;
  champs: { libelle: string; reponse: string }[];
}

/** Des affirmations à juger vraies ou fausses. */
export interface QuestionVraiFaux {
  type: "vrai-faux";
  numero: string;
  points: number;
  enonce: string;
  /** `vrai` vaut `null` tant que le corrigé n'est pas connu. */
  affirmations: { texte: string; vrai: boolean | null; justification?: string }[];
}

/** Une question à choix : « choisissez la bonne réponse », a, b, c, d.
 * `bonne` est le rang de la bonne réponse, `null` si inconnu. */
export interface QuestionChoix {
  type: "choix";
  numero: string;
  points: number;
  enonce: string;
  options: string[];
  bonne: number | null;
}

/** Une question ouverte : l'élève écrit, puis compare à la correction. */
export interface QuestionLibre {
  type: "libre";
  numero: string;
  points: number;
  enonce: string;
  /** Chaîne vide si le corrigé n'est pas connu. */
  correction: string;
}

export type Question = QuestionTableau | QuestionVraiFaux | QuestionChoix | QuestionLibre;

/** Vrai si la question a de quoi afficher une correction. */
export function aUneCorrection(question: Question): boolean {
  switch (question.type) {
    case "tableau":
      return question.champs.some((c) => c.reponse);
    case "vrai-faux":
      return question.affirmations.some((a) => a.vrai !== null);
    case "choix":
      return question.bonne !== null;
    default:
      return Boolean(question.correction);
  }
}

export interface PartieEpreuve {
  titre: string;
  points: number;
  consigne?: string;
  /** Le texte support, en Markdown — absent si la partie n'en a pas. */
  texte?: string;
  questions: Question[];
  /** Partie à rédiger sur copie (production écrite) : pas de questions,
   * l'élève écrit et fait corriger. */
  redaction?: boolean;
}

export interface Epreuve {
  parties: PartieEpreuve[];
}

function texte(valeur: unknown): string {
  return typeof valeur === "string" ? valeur.trim() : "";
}

function nombre(valeur: unknown): number {
  const n = typeof valeur === "number" ? valeur : Number(valeur);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function lireQuestion(brut: unknown): Question | null {
  if (typeof brut !== "object" || brut === null) return null;
  const q = brut as Record<string, unknown>;
  const base = {
    numero: texte(q.numero),
    points: nombre(q.points),
    enonce: texte(q.enonce),
  };
  if (!base.enonce) return null;

  if (q.type === "tableau") {
    const champs = Array.isArray(q.champs)
      ? q.champs.flatMap((c) => {
          if (typeof c !== "object" || c === null) return [];
          const champ = c as Record<string, unknown>;
          const libelle = texte(champ.libelle);
          return libelle ? [{ libelle, reponse: texte(champ.reponse) }] : [];
        })
      : [];
    return champs.length > 0 ? { ...base, type: "tableau", champs } : null;
  }

  if (q.type === "vrai-faux") {
    const affirmations = Array.isArray(q.affirmations)
      ? q.affirmations.flatMap((a) => {
          if (typeof a !== "object" || a === null) return [];
          const aff = a as Record<string, unknown>;
          const t = texte(aff.texte);
          if (!t) return [];
          return [
            {
              texte: t,
              vrai: aff.vrai === true ? true : aff.vrai === false ? false : null,
              justification: texte(aff.justification) || undefined,
            },
          ];
        })
      : [];
    return affirmations.length > 0
      ? { ...base, type: "vrai-faux", affirmations }
      : null;
  }

  if (q.type === "choix") {
    const options = Array.isArray(q.options)
      ? q.options.map(texte).filter(Boolean)
      : [];
    const bonne =
      typeof q.bonne === "number" && Number.isInteger(q.bonne) && q.bonne >= 0 && q.bonne < options.length
        ? q.bonne
        : null;
    return options.length > 1 ? { ...base, type: "choix", options, bonne } : null;
  }

  return { ...base, type: "libre", correction: texte(q.correction) };
}

/** Relit le `jsonb` d'un sujet. Renvoie `null` si rien d'exploitable :
 * la page retombe alors sur l'énoncé en Markdown. */
export function lireEpreuve(brut: unknown): Epreuve | null {
  if (typeof brut !== "object" || brut === null) return null;
  const racine = brut as Record<string, unknown>;
  if (!Array.isArray(racine.parties)) return null;

  const parties = racine.parties.flatMap((p) => {
    if (typeof p !== "object" || p === null) return [];
    const partie = p as Record<string, unknown>;
    const titre = texte(partie.titre);
    if (!titre) return [];
    const questions = Array.isArray(partie.questions)
      ? partie.questions.flatMap((q) => lireQuestion(q) ?? [])
      : [];
    return [
      {
        titre,
        points: nombre(partie.points),
        consigne: texte(partie.consigne) || undefined,
        texte: texte(partie.texte) || undefined,
        questions,
        redaction: partie.redaction === true,
      },
    ];
  });

  return parties.length > 0 ? { parties } : null;
}

/** Nombre de questions auxquelles l'élève peut répondre — sert au
 * compteur « 2/6 questions » de la maquette. Les parties de rédaction
 * n'en font pas partie : elles se rendent sur copie. */
export function compterQuestions(epreuve: Epreuve): number {
  return epreuve.parties.reduce(
    (total, partie) => total + partie.questions.length,
    0,
  );
}
