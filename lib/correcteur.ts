/**
 * Appel du modèle qui corrige une copie d'élève.
 *
 * Le modèle est joint directement par l'API Messages d'Anthropic
 * (`fetch`), sans SDK : un seul appel, un seul endpoint, aucune
 * dépendance de plus à maintenir.
 *
 * La clé se met dans `.env.local` sous le nom `ANTHROPIC_API_KEY`.
 * Elle n'est pas préfixée `NEXT_PUBLIC_` : elle reste donc côté
 * serveur et n'est jamais envoyée au navigateur. Tant qu'elle est
 * absente, `cleCorrecteurPresente()` renvoie `false` et l'interface
 * le dit à l'élève au lieu de lui laisser remplir un formulaire qui
 * échouerait à l'envoi.
 */

/** Modèle utilisé pour la correction. */
export const MODELE_CORRECTEUR = "claude-sonnet-5";

export interface ErreurCopie {
  /** "orthographe", "grammaire", "syntaxe", "vocabulaire",
   * "ponctuation", "méthode" ou "contenu". */
  type: string;
  /** Le passage fautif, recopié de la copie de l'élève. */
  extrait: string;
  /** Le même passage corrigé. */
  correction: string;
  /** Pourquoi c'est une erreur, en une phrase. */
  explication: string;
}

export interface CorrectionCopie {
  noteForme: number;
  noteFond: number;
  noteTotal: number;
  erreurs: ErreurCopie[];
  pointsForts: string[];
  axes: string[];
  commentaire: string;
  coutTokens: number;
}

export function cleCorrecteurPresente(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

const CONSIGNE_SYSTEME = `Tu es professeur de français correcteur de l'examen régional marocain de 1ère année du baccalauréat. Tu corriges la copie d'un élève de 15 à 17 ans, en français.

Barème : la forme sur 10 (orthographe, grammaire, syntaxe, ponctuation, richesse du vocabulaire) et le fond sur 10 (compréhension du sujet, pertinence des idées, organisation, exemples, longueur attendue). Le total est la somme des deux, sur 20.

Exigences :
- Note comme un correcteur d'examen marocain : exigeant mais juste, sans complaisance ni sévérité excessive.
- Relève au plus 12 erreurs, les plus importantes d'abord. Recopie l'extrait fautif mot pour mot depuis la copie, sans le modifier.
- Écris les explications en français simple, tutoie l'élève, et explique la règle plutôt que de te contenter de corriger.
- Si la copie est hors sujet, vide ou trop courte pour être notée, dis-le clairement dans le commentaire et note en conséquence.
- N'invente jamais une erreur qui n'est pas dans la copie.

Réponds uniquement par un objet JSON, sans texte autour, de la forme :
{"note_forme": 7.5, "note_fond": 6, "erreurs": [{"type": "orthographe", "extrait": "...", "correction": "...", "explication": "..."}], "points_forts": ["..."], "axes": ["..."], "commentaire": "..."}

"points_forts" : 2 à 4 réussites concrètes. "axes" : 2 à 4 conseils d'amélioration applicables à la prochaine rédaction. "commentaire" : 3 à 5 phrases d'appréciation générale adressées à l'élève.`;

/** Isole l'objet JSON d'une réponse qui contiendrait du texte autour. */
function extraireJson(texte: string): unknown {
  const debut = texte.indexOf("{");
  const fin = texte.lastIndexOf("}");
  if (debut === -1 || fin === -1 || fin <= debut) {
    throw new Error("Le modèle n'a pas renvoyé de JSON exploitable.");
  }
  return JSON.parse(texte.slice(debut, fin + 1));
}

function nombreBorne(valeur: unknown, max: number): number {
  const n = typeof valeur === "number" ? valeur : Number(valeur);
  if (!Number.isFinite(n)) return 0;
  return Math.min(max, Math.max(0, Math.round(n * 4) / 4));
}

function listeDeTextes(valeur: unknown): string[] {
  if (!Array.isArray(valeur)) return [];
  return valeur
    .map((v) => (typeof v === "string" ? v.trim() : ""))
    .filter((v) => v.length > 0)
    .slice(0, 6);
}

function listeDErreurs(valeur: unknown): ErreurCopie[] {
  if (!Array.isArray(valeur)) return [];
  return valeur
    .flatMap((brut) => {
      if (typeof brut !== "object" || brut === null) return [];
      const e = brut as Record<string, unknown>;
      const extrait = typeof e.extrait === "string" ? e.extrait.trim() : "";
      if (!extrait) return [];
      return [
        {
          type: typeof e.type === "string" ? e.type.trim() : "autre",
          extrait,
          correction:
            typeof e.correction === "string" ? e.correction.trim() : "",
          explication:
            typeof e.explication === "string" ? e.explication.trim() : "",
        },
      ];
    })
    .slice(0, 12);
}

/**
 * Corrige une copie et renvoie le résultat déjà validé : notes bornées
 * à leur barème, listes nettoyées. Le modèle reste une source de texte
 * libre — tout ce qui en sort est vérifié avant d'entrer en base.
 */
export async function corrigerCopie({
  consigne,
  typeSujet,
  texte,
}: {
  consigne: string;
  typeSujet: string;
  texte: string;
}): Promise<CorrectionCopie> {
  const cle = process.env.ANTHROPIC_API_KEY;
  if (!cle) throw new Error("ANTHROPIC_API_KEY absente.");

  const reponse = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": cle,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODELE_CORRECTEUR,
      max_tokens: 4000,
      system: CONSIGNE_SYSTEME,
      messages: [
        {
          role: "user",
          content: `Type de sujet : ${typeSujet}\n\nConsigne donnée à l'élève :\n${consigne}\n\nCopie de l'élève :\n"""\n${texte}\n"""`,
        },
      ],
    }),
  });

  if (!reponse.ok) {
    const detail = await reponse.text();
    throw new Error(
      `L'API a répondu ${reponse.status}. ${detail.slice(0, 300)}`,
    );
  }

  const donnees = (await reponse.json()) as {
    content?: { type: string; text?: string }[];
    usage?: { input_tokens?: number; output_tokens?: number };
  };
  const texteReponse =
    donnees.content?.find((bloc) => bloc.type === "text")?.text ?? "";
  const brut = extraireJson(texteReponse) as Record<string, unknown>;

  const noteForme = nombreBorne(brut.note_forme, 10);
  const noteFond = nombreBorne(brut.note_fond, 10);

  return {
    noteForme,
    noteFond,
    noteTotal: Math.round((noteForme + noteFond) * 4) / 4,
    erreurs: listeDErreurs(brut.erreurs),
    pointsForts: listeDeTextes(brut.points_forts),
    axes: listeDeTextes(brut.axes),
    commentaire:
      typeof brut.commentaire === "string" ? brut.commentaire.trim() : "",
    coutTokens:
      (donnees.usage?.input_tokens ?? 0) + (donnees.usage?.output_tokens ?? 0),
  };
}
