"use client";

import type { Question } from "@/lib/annales-questions";

/*
 * Les briques d'une question d'examen régional (énoncé en ligne,
 * barème, champ de réponse et correction), utilisées par la feuille
 * d'examen (FeuilleExamen.tsx). L'ancienne disposition en une colonne
 * qui vivait ici a été remplacée par celle-ci sur tous les sujets
 * (« fais comme ça pour tous les examens »).
 */

/** Gras (`**…**`) et italique (`*…*`) dans les énoncés, cases de
 * tableau, affirmations et options. Les sujets les emploient pour ce
 * que la feuille d'examen met en relief : mots soulignés (« [souligné
 * sur la feuille, en gras ici] »), titres d'œuvres en italique. Sans
 * ce rendu, l'onglet « S'entraîner » affichait les astérisques tels
 * quels. Volontairement limité à ces deux marques : un rendu Markdown
 * complet ferait d'un libellé commençant par « 1. » ou « - » une
 * liste, et le numéro disparaîtrait. */
export function EnLigne({ texte }: { texte: string }) {
  const morceaux = texte.split(/(\*\*[^*]+\*\*|\*[^*\s()][^*]*?[^*\s()]\*|\*[^*\s()]\*)/g);
  return (
    <>
      {morceaux.map((morceau, index) => {
        if (morceau.length > 4 && morceau.startsWith("**") && morceau.endsWith("**"))
          return <strong key={index}>{morceau.slice(2, -2)}</strong>;
        if (morceau.length > 2 && morceau.startsWith("*") && morceau.endsWith("*"))
          return <em key={index}>{morceau.slice(1, -1)}</em>;
        return morceau;
      })}
    </>
  );
}

/** Barème d'une question. Dans un sujet en arabe, l'unité est « ن »
 * (نقطة), comme sur la feuille : « 1 pt » posé dans un bloc de droite
 * à gauche s'affichait « pt 1 ». */
export function Points({ points, arabe = false }: { points: number; arabe?: boolean }) {
  if (!points) return null;
  return (
    <span className="shrink-0 text-xs font-semibold text-muted-foreground">
      {arabe ? `${points} ن` : `${points.toString().replace(".", ",")} pt`}
    </span>
  );
}

/** Le bloc vert de correction, identique pour tous les types de
 * question. */
function Correction({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-3 rounded-[12px] border border-validation/30 bg-validation-tint p-4 text-sm leading-relaxed text-foreground">
      {children}
    </div>
  );
}

export function CorpsQuestion({
  question,
  reponse,
  surReponse,
  correctionVisible,
}: {
  question: Question;
  reponse: unknown;
  surReponse: (valeur: unknown) => void;
  correctionVisible: boolean;
}) {
  if (question.type === "tableau") {
    const valeurs = (reponse as Record<string, string>) ?? {};
    return (
      <>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {question.champs.map((champ) => (
            <label key={champ.libelle} className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-primary">
                <EnLigne texte={champ.libelle} />
              </span>
              <input
                type="text"
                value={valeurs[champ.libelle] ?? ""}
                onChange={(e) =>
                  surReponse({ ...valeurs, [champ.libelle]: e.target.value })
                }
                className="rounded-[10px] border border-border bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </label>
          ))}
        </div>
        {correctionVisible && (
          <Correction>
            <ul className="flex flex-col gap-1">
              {question.champs.map((champ) =>
                champ.reponse ? (
                  <li key={champ.libelle}>
                    <span className="font-semibold"><EnLigne texte={champ.libelle} /> :</span>{" "}
                    {champ.reponse}
                  </li>
                ) : null,
              )}
            </ul>
          </Correction>
        )}
      </>
    );
  }

  if (question.type === "vrai-faux") {
    const choix = (reponse as Record<number, boolean>) ?? {};
    return (
      <>
        <ul className="flex flex-col gap-2.5">
          {question.affirmations.map((affirmation, index) => (
            <li
              key={affirmation.texte}
              className="flex flex-wrap items-center justify-between gap-3"
            >
              <span className="min-w-0 flex-1 text-sm leading-relaxed text-foreground">
                {String.fromCharCode(97 + index)}. <EnLigne texte={affirmation.texte} />
              </span>
              <span className="flex shrink-0 gap-1.5">
                {[true, false].map((valeur) => {
                  const actif = choix[index] === valeur;
                  return (
                    <button
                      key={String(valeur)}
                      type="button"
                      aria-pressed={actif}
                      onClick={() => surReponse({ ...choix, [index]: valeur })}
                      className={`rounded-[9px] border px-3 py-1.5 text-sm font-semibold transition-colors ${
                        actif
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:text-ink"
                      }`}
                    >
                      {valeur ? "Vrai" : "Faux"}
                    </button>
                  );
                })}
              </span>
            </li>
          ))}
        </ul>
        {correctionVisible && (
          <Correction>
            <ul className="flex flex-col gap-1.5">
              {question.affirmations.map((affirmation, index) =>
                affirmation.vrai === null ? null : (
                  <li key={affirmation.texte}>
                    <span className="font-semibold">
                      {String.fromCharCode(97 + index)}. {affirmation.vrai ? "Vrai" : "Faux"}
                    </span>
                    {affirmation.justification && ` — ${affirmation.justification}`}
                  </li>
                ),
              )}
            </ul>
          </Correction>
        )}
      </>
    );
  }

  if (question.type === "choix") {
    const choisi = typeof reponse === "number" ? reponse : null;
    return (
      <>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {question.options.map((option, index) => {
            const actif = choisi === index;
            return (
              <li key={option}>
                <button
                  type="button"
                  aria-pressed={actif}
                  onClick={() => surReponse(index)}
                  className={`flex w-full items-center gap-2.5 rounded-[10px] border px-3 py-2 text-left text-sm transition-colors ${
                    actif
                      ? "border-primary bg-primary-tint font-semibold text-ink"
                      : "border-border text-foreground hover:border-border-strong"
                  }`}
                >
                  <span
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      actif ? "bg-primary text-primary-foreground" : "bg-surface-muted text-muted-foreground"
                    }`}
                  >
                    {String.fromCharCode(97 + index)}
                  </span>
                  <EnLigne texte={option} />
                </button>
              </li>
            );
          })}
        </ul>
        {correctionVisible && question.bonne !== null && (
          <Correction>
            <span className="font-semibold">
              {String.fromCharCode(97 + question.bonne)}. <EnLigne texte={question.options[question.bonne]} />
            </span>
          </Correction>
        )}
      </>
    );
  }

  return (
    <>
      <textarea
        rows={3}
        value={(reponse as string) ?? ""}
        onChange={(e) => surReponse(e.target.value)}
        placeholder="Ta réponse"
        className="w-full resize-y rounded-[10px] border border-border bg-surface p-3 text-sm leading-relaxed text-foreground placeholder:text-subtle-foreground focus:border-primary focus:outline-none"
      />
      {correctionVisible && question.correction && (
        <Correction>{question.correction}</Correction>
      )}
    </>
  );
}

/** Une réponse compte dès qu'elle contient quelque chose : un texte non
 * vide, un choix, une case de tableau remplie ou un vrai/faux coché. */
export function estRepondue(valeur: unknown): boolean {
  if (typeof valeur === "string") return valeur.trim().length > 0;
  if (typeof valeur === "number") return true;
  if (typeof valeur === "object" && valeur !== null) {
    return Object.values(valeur).some((v) => v === true || v === false || String(v).trim().length > 0);
  }
  return false;
}
