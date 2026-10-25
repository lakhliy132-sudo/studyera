"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import ChronometreEpreuve from "@/components/ChronometreEpreuve";
import ContenuMarkdown from "@/components/ContenuMarkdown";
import { CorpsQuestion, EnLigne, Points, estRepondue } from "@/components/EpreuveInteractive";
import { IconeFleche } from "@/components/icones";
import { aUneCorrection, compterQuestions, type Epreuve } from "@/lib/annales-questions";

type Vue = { type: "partie"; index: number } | { type: "sujet" } | { type: "corrige" };

const cle = (partie: number, question: number) => `${partie}-${question}`;

/**
 * La feuille d'examen « en deux colonnes », proposée puis demandée
 * pour un premier sujet de français (« pour un premier temps tu me la
 * fais pour un seul examen de français ») :
 *
 * - une barre d'examen qui reste en haut sur ordinateur : titre, durée,
 *   avancement, chrono, puis les parties en onglets (avec le sujet
 *   original et le corrigé) et une pastille par question pour y sauter ;
 * - le texte à gauche, fixe, comme la feuille posée sur la table, et les
 *   questions à droite : plus besoin de remonter au texte pour répondre ;
 * - la production écrite dans sa propre étape, avec le renvoi vers le
 *   correcteur.
 *
 * Étendue ensuite à tous les sujets (« fais comme ça pour tous les
 * examens »), y compris ceux rédigés en arabe (`arabe`).
 *
 * Les questions et leurs corrections sont celles de EpreuveInteractive
 * (CorpsQuestion) : seule la disposition change. Comme là-bas, rien
 * n'est enregistré, l'élève compare lui-même au corrigé.
 */
export default function FeuilleExamen({
  epreuve,
  enonceMdx,
  corrigeMdx,
  sujetsRedaction = {},
  titre,
  details,
  dureeMinutes,
  retour,
  arabe = false,
}: {
  epreuve: Epreuve;
  enonceMdx: string;
  corrigeMdx: string | null;
  sujetsRedaction?: Record<number, string>;
  titre: string;
  details: string;
  dureeMinutes: number | null;
  retour: string;
  /** Sujet rédigé en arabe (arabe, éducation islamique) : le contenu se
   * lit de droite à gauche, en police arabe et en grand corps, barème
   * en « ن » ; pas de renvoi vers le correcteur, qui ne corrige que le
   * français. Les libellés de l'interface restent en français. */
  arabe?: boolean;
}) {
  const [vue, setVue] = useState<Vue>({ type: "partie", index: 0 });
  const [reponses, setReponses] = useState<Record<string, unknown>>({});
  const [corrections, setCorrections] = useState<Record<string, boolean>>({});

  const total = useMemo(() => compterQuestions(epreuve), [epreuve]);
  const traitees = useMemo(() => Object.values(reponses).filter(estRepondue).length, [reponses]);
  const sansCorrige = useMemo(
    () => !corrigeMdx && epreuve.parties.every((p) => p.questions.every((q) => !aUneCorrection(q))),
    [epreuve, corrigeMdx],
  );

  function aller(v: Vue) {
    setVue(v);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const partie = vue.type === "partie" ? epreuve.parties[vue.index] : null;
  const indexPartie = vue.type === "partie" ? vue.index : -1;
  const suivante = vue.type === "partie" ? epreuve.parties[vue.index + 1] : undefined;
  // La première question sans réponse de la partie : c'est celle qu'on
  // entoure, dans les pastilles et dans la liste.
  const enCours = partie ? partie.questions.findIndex((_, i) => !estRepondue(reponses[cle(indexPartie, i)])) : -1;

  const ongletClasse = (actif: boolean) =>
    `shrink-0 rounded-full px-4 py-1.5 text-sm font-bold whitespace-nowrap transition-colors ${
      actif ? "bg-surface text-ink shadow-sm" : "text-muted-foreground hover:text-ink"
    }`;

  return (
    <div className="flex flex-col">
      {/* ——— Barre d'examen ——— */}
      <div className="z-30 -mx-6 border-b border-border bg-surface/95 backdrop-blur sm:-mx-9 lg:sticky lg:top-0 lg:-mx-16 xl:-mx-24 2xl:-mx-40">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 px-6 py-3 sm:px-9 lg:px-16 lg:max-xl:ps-20 xl:px-24 2xl:px-40">
          <Link href={retour} className="flex w-full items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-primary sm:w-auto">
            <IconeFleche className="size-4 rotate-180" />
            Sujets
          </Link>
          <div className="flex min-w-0 basis-full flex-col sm:flex-1 sm:basis-0">
            <h1 className="truncate font-affiche text-xl leading-tight text-ink sm:text-2xl">{titre}</h1>
            <p className="truncate text-xs text-muted-foreground">{details}</p>
          </div>
          <div className="order-last flex w-full items-center gap-3 sm:order-none sm:w-auto">
            <div
              className="h-2 w-full overflow-hidden rounded-full bg-surface-muted sm:w-40"
              role="progressbar"
              aria-valuenow={traitees}
              aria-valuemin={0}
              aria-valuemax={total}
              aria-label="Questions traitées"
            >
              <div className="h-full rounded-full bg-primary transition-[width]" style={{ width: total > 0 ? `${(traitees / total) * 100}%` : "0%" }} />
            </div>
            <span className="shrink-0 text-xs font-semibold text-muted-foreground tabular-nums">
              {traitees}/{total}
            </span>
          </div>
          {dureeMinutes && <ChronometreEpreuve dureeMinutes={dureeMinutes} clair />}
        </div>

        <div className="flex items-center gap-4 overflow-x-auto px-6 pb-3 sm:px-9 lg:px-16 lg:max-xl:ps-20 xl:px-24 2xl:px-40">
          <div role="tablist" aria-label="Parties de l'épreuve" className="flex shrink-0 rounded-full bg-surface-muted p-1">
            {epreuve.parties.map((p, i) => (
              <button
                key={p.titre}
                role="tab"
                type="button"
                aria-selected={vue.type === "partie" && vue.index === i}
                onClick={() => aller({ type: "partie", index: i })}
                className={ongletClasse(vue.type === "partie" && vue.index === i)}
              >
                {p.titre}
              </button>
            ))}
            {enonceMdx && (
              <button role="tab" type="button" aria-selected={vue.type === "sujet"} onClick={() => aller({ type: "sujet" })} className={ongletClasse(vue.type === "sujet")}>
                Sujet original
              </button>
            )}
            {corrigeMdx && (
              <button role="tab" type="button" aria-selected={vue.type === "corrige"} onClick={() => aller({ type: "corrige" })} className={ongletClasse(vue.type === "corrige")}>
                Corrigé
              </button>
            )}
          </div>

          {partie && partie.questions.length > 0 && (
            <nav aria-label="Questions" className="flex shrink-0 gap-1.5">
              {partie.questions.map((q, i) => {
                const fait = estRepondue(reponses[cle(indexPartie, i)]);
                return (
                  <a
                    key={cle(indexPartie, i)}
                    href={`#question-${cle(indexPartie, i)}`}
                    aria-label={`Question ${q.numero}${fait ? ", répondue" : ""}`}
                    className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-xs font-bold tabular-nums transition-colors ${
                      fait
                        ? "bg-primary text-primary-foreground"
                        : i === enCours
                          ? "border-2 border-primary text-primary"
                          : "border border-border bg-surface text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {q.numero}
                  </a>
                );
              })}
            </nav>
          )}
        </div>
      </div>

      {/* ——— Le contenu ——— */}
      <div className={`pt-8 ${arabe ? "font-arabe" : ""}`} dir={arabe ? "rtl" : undefined} lang={arabe ? "ar" : undefined}>
        {partie && (
          <>
            {sansCorrige && vue.type === "partie" && vue.index === 0 && (
              <p className="mb-6 rounded-[14px] border border-dashed border-border-strong bg-surface px-4 py-3 text-sm text-muted-foreground">
                Le corrigé de ce sujet n&apos;est pas encore disponible : entraîne-toi sur les questions, la correction sera ajoutée dès que
                possible.
              </p>
            )}

            {partie.redaction ? (
              <div className={`grid grid-cols-1 items-start gap-8 ${arabe ? "" : "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"}`}>
                <section className="flex flex-col gap-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="font-affiche text-2xl text-ink">{partie.titre}</h2>
                    {partie.points > 0 && <span className="text-sm font-bold text-muted-foreground">{arabe ? `${partie.points} ن` : `${partie.points} points`}</span>}
                  </div>
                  {partie.consigne && <p className="text-sm text-muted-foreground">{partie.consigne}</p>}
                  {partie.texte && (
                    <div className="rounded-[20px] border border-border bg-feuille p-6 shadow-sm">
                      <ContenuMarkdown texte={partie.texte} grandeTaille={arabe} />
                    </div>
                  )}
                </section>
                {!arabe && (
                <aside className="flex flex-col gap-4 rounded-[20px] border border-border bg-surface p-6 shadow-sm lg:sticky lg:top-[150px]">
                  <p className="font-affiche text-2xl text-ink">Fais corriger ta copie</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Rédige ton expression écrite sur une feuille ou à l&apos;écran, puis envoie-la au correcteur : note sur 20, erreurs
                    expliquées et conseils.
                    {sujetsRedaction[indexPartie] && " Ce sujet y est déjà choisi pour toi."}
                  </p>
                  <Link
                    href={sujetsRedaction[indexPartie] ? `/redaction/nouvelle?sujet=${sujetsRedaction[indexPartie]}` : "/redaction/nouvelle"}
                    className="flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_10px_22px_-12px_var(--color-primary)] transition-transform hover:-translate-y-0.5"
                  >
                    Envoyer ma copie
                    <IconeFleche className="size-4" />
                  </Link>
                </aside>
                )}
              </div>
            ) : (
              <div className={`grid grid-cols-1 gap-8 ${partie.texte ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]" : ""}`}>
                {partie.texte && (
                  <section className="flex flex-col gap-3 lg:sticky lg:top-[150px] lg:max-h-[calc(100vh-170px)] lg:self-start">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-affiche text-2xl text-ink">Le texte</p>
                      <span className="hidden text-xs text-muted-foreground lg:inline">reste sous tes yeux</span>
                    </div>
                    <div className="overflow-y-auto rounded-[20px] border border-border bg-feuille p-6 shadow-sm">
                      <ContenuMarkdown texte={partie.texte} grandeTaille={arabe} />
                    </div>
                  </section>
                )}

                <section className="flex min-w-0 flex-col gap-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="font-affiche text-2xl text-ink">{partie.titre}</h2>
                    {partie.points > 0 && <span className="shrink-0 text-sm font-bold text-muted-foreground">{arabe ? `${partie.points} ن` : `${partie.points} points`}</span>}
                  </div>
                  {partie.consigne && <p className="-mt-2 text-sm text-muted-foreground">{partie.consigne}</p>}

                  {partie.questions.map((question, i) => {
                    const k = cle(indexPartie, i);
                    const fait = estRepondue(reponses[k]);
                    const visible = corrections[k] === true;
                    const prochaine = partie.questions[i + 1] ? `#question-${cle(indexPartie, i + 1)}` : null;
                    return (
                      <article
                        key={k}
                        id={`question-${k}`}
                        className={`flex scroll-mt-6 flex-col gap-3 rounded-[20px] border bg-surface p-5 transition-shadow lg:scroll-mt-[160px] ${
                          i === enCours ? "border-primary shadow-[0_14px_30px_-20px_var(--color-primary)]" : "border-border"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`flex h-8 min-w-8 shrink-0 items-center justify-center rounded-full px-2 text-xs font-bold ${
                              fait ? "bg-primary text-primary-foreground" : "bg-primary-tint text-primary"
                            }`}
                          >
                            {question.numero}
                          </span>
                          <p className={`flex-1 pt-1 leading-relaxed font-semibold text-ink ${arabe ? "text-[18px]" : "text-[15px]"}`}>
                            <EnLigne texte={question.enonce} />
                          </p>
                          <span className="pt-1.5">
                            <Points points={question.points} arabe={arabe} />
                          </span>
                        </div>
                        <CorpsQuestion
                          question={question}
                          reponse={reponses[k]}
                          surReponse={(valeur) => setReponses((etat) => ({ ...etat, [k]: valeur }))}
                          correctionVisible={visible}
                        />
                        <div className="flex flex-wrap items-center justify-end gap-4 text-sm font-bold">
                          {aUneCorrection(question) && (
                            <button
                              type="button"
                              onClick={() => setCorrections((etat) => ({ ...etat, [k]: !visible }))}
                              className="text-muted-foreground hover:text-primary"
                            >
                              {visible ? "Masquer la correction" : "Voir la correction"}
                            </button>
                          )}
                          {prochaine && (
                            <a href={prochaine} className="text-primary hover:underline">
                              Suivante ↓
                            </a>
                          )}
                        </div>
                      </article>
                    );
                  })}

                  {suivante && (
                    <button
                      type="button"
                      onClick={() => aller({ type: "partie", index: vue.type === "partie" ? vue.index + 1 : 0 })}
                      className="flex flex-col gap-3 rounded-[20px] p-6 text-left text-white sm:flex-row sm:items-center sm:justify-between"
                      style={{ background: "linear-gradient(150deg, var(--fond-sombre-actif), var(--fond-sombre-haut) 60%, var(--fond-sombre-bas))" }}
                    >
                      <span className="flex flex-col gap-1">
                        <span className="text-xs font-bold tracking-[0.16em] text-white/60 uppercase">Étape suivante</span>
                        <span className="font-affiche text-2xl">{suivante.titre}</span>
                        {suivante.points > 0 && <span className="text-sm text-white/70">{arabe ? `${suivante.points} ن` : `${suivante.points} points`}</span>}
                      </span>
                      <span className="w-fit rounded-full bg-white px-5 py-2.5 text-sm font-bold" style={{ color: "var(--fond-sombre-haut)" }}>
                        Passer →
                      </span>
                    </button>
                  )}
                </section>
              </div>
            )}
          </>
        )}

        {vue.type === "sujet" && (
          <div className="rounded-[22px] border border-border bg-feuille p-5 shadow-sm sm:p-9">
            <ContenuMarkdown texte={enonceMdx} grandeTaille={arabe} />
          </div>
        )}
        {vue.type === "corrige" && corrigeMdx && (
          <div className="rounded-[22px] border border-border bg-feuille p-5 shadow-sm sm:p-9">
            <ContenuMarkdown texte={corrigeMdx} grandeTaille={arabe} />
          </div>
        )}
      </div>
    </div>
  );
}
