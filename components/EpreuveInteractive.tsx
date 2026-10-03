"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import ContenuMarkdown from "@/components/ContenuMarkdown";
import { IconeFleche } from "@/components/icones";
import {
  compterQuestions,
  type Epreuve,
  type Question,
} from "@/lib/annales-questions";

type Onglet = "entrainement" | "sujet" | "corrige";

/** Clé d'une question dans les états locaux : son rang global dans
 * l'épreuve, les numéros affichés pouvant se répéter d'une partie à
 * l'autre. */
const cle = (partie: number, question: number) => `${partie}-${question}`;

function Points({ points }: { points: number }) {
  if (!points) return null;
  return (
    <span className="shrink-0 text-xs font-semibold text-muted-foreground">
      {points.toString().replace(".", ",")} pt
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

function CorpsQuestion({
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
                {champ.libelle}
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
              {question.champs.map((champ) => (
                <li key={champ.libelle}>
                  <span className="font-semibold">{champ.libelle} :</span>{" "}
                  {champ.reponse}
                </li>
              ))}
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
                {String.fromCharCode(97 + index)}. {affirmation.texte}
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
              {question.affirmations.map((affirmation, index) => (
                <li key={affirmation.texte}>
                  <span className="font-semibold">
                    {String.fromCharCode(97 + index)}. {affirmation.vrai ? "Vrai" : "Faux"}
                  </span>
                  {affirmation.justification && ` — ${affirmation.justification}`}
                </li>
              ))}
            </ul>
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

/**
 * L'épreuve telle que la maquette fournie par l'utilisateur la
 * demande : trois onglets (s'entraîner, sujet original, corrigé), une
 * barre d'avancement, et des questions auxquelles l'élève répond sur
 * place, chacune avec sa correction à dévoiler.
 *
 * Les réponses restent dans la page : rien n'est enregistré ni corrigé
 * automatiquement. Aucune table ne prévoit de stocker les réponses à
 * une annale, et la correction d'une réponse libre demanderait le
 * correcteur. L'élève compare donc lui-même sa réponse au corrigé —
 * ce que fait la maquette avec son bouton « Voir la correction ».
 *
 * Une question compte comme traitée dès qu'elle a reçu une réponse, et
 * c'est ce que compte le « 2/6 questions » : pas une note, juste
 * l'avancement.
 */
export default function EpreuveInteractive({
  epreuve,
  enonceMdx,
  corrigeMdx,
}: {
  epreuve: Epreuve;
  enonceMdx: string;
  corrigeMdx: string | null;
}) {
  const [onglet, setOnglet] = useState<Onglet>("entrainement");
  const [reponses, setReponses] = useState<Record<string, unknown>>({});
  const [corrections, setCorrections] = useState<Record<string, boolean>>({});

  const total = useMemo(() => compterQuestions(epreuve), [epreuve]);
  const traitees = useMemo(
    () =>
      Object.values(reponses).filter((valeur) => {
        if (typeof valeur === "string") return valeur.trim().length > 0;
        if (typeof valeur === "object" && valeur !== null) {
          return Object.values(valeur).some(
            (v) => v === true || v === false || String(v).trim().length > 0,
          );
        }
        return false;
      }).length,
    [reponses],
  );

  const onglets: { cle: Onglet; libelle: string; disponible: boolean }[] = [
    { cle: "entrainement", libelle: "S'entraîner", disponible: true },
    { cle: "sujet", libelle: "Sujet original", disponible: Boolean(enonceMdx) },
    { cle: "corrige", libelle: "Corrigé", disponible: Boolean(corrigeMdx) },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div
        role="tablist"
        aria-label="Affichage du sujet"
        className="grid grid-cols-3 gap-1 rounded-[14px] border border-border bg-surface p-1"
      >
        {onglets.map((o) => (
          <button
            key={o.cle}
            role="tab"
            type="button"
            aria-selected={onglet === o.cle}
            disabled={!o.disponible}
            onClick={() => setOnglet(o.cle)}
            className={`rounded-[10px] px-3 py-2.5 text-sm font-semibold transition-colors ${
              onglet === o.cle
                ? "bg-surface-muted text-ink"
                : "text-muted-foreground hover:text-ink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-muted-foreground"
            }`}
          >
            {o.libelle}
          </button>
        ))}
      </div>

      {onglet === "entrainement" && (
        <>
          <div className="flex items-center gap-3">
            <div
              className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-surface-muted"
              role="progressbar"
              aria-valuenow={traitees}
              aria-valuemin={0}
              aria-valuemax={total}
              aria-label="Questions traitées"
            >
              <div
                style={{ width: total > 0 ? `${(traitees / total) * 100}%` : "0%" }}
                className="h-full rounded-full bg-primary transition-[width]"
              />
            </div>
            <span className="shrink-0 text-xs text-muted-foreground">
              {traitees}/{total} questions
            </span>
          </div>

          {epreuve.parties.map((partie, indexPartie) => (
            <section key={partie.titre} className="flex flex-col gap-3">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-serif text-xl font-bold text-ink">
                  {partie.titre}
                </h2>
                {partie.points > 0 && (
                  <span className="shrink-0 text-sm font-semibold text-muted-foreground">
                    {partie.points} points
                  </span>
                )}
              </div>

              {partie.consigne && (
                <p className="text-sm text-muted-foreground">{partie.consigne}</p>
              )}

              {partie.texte && (
                <div className="rounded-[18px] border border-border bg-feuille p-5">
                  <ContenuMarkdown texte={partie.texte} />
                </div>
              )}

              {partie.redaction ? (
                <div className="flex flex-col gap-4 rounded-[18px] border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-serif text-base font-bold text-ink">
                      Fais corriger ta copie
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Rédige ton expression écrite, puis envoie-la au correcteur :
                      note sur 20, erreurs expliquées et conseils.
                    </p>
                  </div>
                  <Link
                    href="/redaction/nouvelle"
                    className="flex w-fit shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Envoyer ma copie
                    <IconeFleche className="size-4" />
                  </Link>
                </div>
              ) : (
                <ul className="flex flex-col gap-3">
                  {partie.questions.map((question, indexQuestion) => {
                    const k = cle(indexPartie, indexQuestion);
                    const visible = corrections[k] === true;
                    return (
                      <li
                        key={k}
                        className="flex flex-col gap-3 rounded-[16px] border border-border bg-surface p-4 sm:p-5"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-sm leading-relaxed font-semibold text-ink">
                            {question.numero && `${question.numero}. `}
                            {question.enonce}
                          </p>
                          <Points points={question.points} />
                        </div>

                        <CorpsQuestion
                          question={question}
                          reponse={reponses[k]}
                          surReponse={(valeur) =>
                            setReponses((etat) => ({ ...etat, [k]: valeur }))
                          }
                          correctionVisible={visible}
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setCorrections((etat) => ({ ...etat, [k]: !visible }))
                          }
                          className="w-fit text-sm font-semibold text-primary hover:underline"
                        >
                          {visible ? "Masquer la correction" : "Voir la correction"}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          ))}
        </>
      )}

      {onglet === "sujet" && (
        <div className="rounded-[22px] border border-border bg-feuille p-5 shadow-sm sm:p-9">
          <ContenuMarkdown texte={enonceMdx} grandeTaille />
        </div>
      )}

      {onglet === "corrige" && corrigeMdx && (
        <div className="rounded-[22px] border border-border bg-feuille p-5 shadow-sm sm:p-9">
          <ContenuMarkdown texte={corrigeMdx} grandeTaille />
        </div>
      )}
    </div>
  );
}
