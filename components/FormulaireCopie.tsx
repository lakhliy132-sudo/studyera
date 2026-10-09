"use client";

import { useActionState, useEffect, useRef, useState, useTransition } from "react";
import { useFormStatus } from "react-dom";

import {
  corrigerEtEnregistrer,
  transcrirePhotos,
  type EtatCorrection,
} from "@/app/(eleve)/redaction/actions";
import { IconeChevronBas, IconeFleche } from "@/components/icones";
import { QUOTA_QUOTIDIEN_MAX } from "@/lib/quota";

export interface SujetChoisissable {
  id: string;
  titre: string;
  type: string;
  consigne: string;
  oeuvreTitre: string | null;
  oeuvreAuteur: string | null;
}

type Mode = "photo" | "texte";

interface Photo {
  fichier: File;
  apercu: string;
}

const PAGES_MAX = 4;
const COTE_MAX = 1800;
const LONGUEUR_MIN = 200;

/** Réduit une photo avant l'envoi : côté le plus long à COTE_MAX
 * pixels, en JPEG. Une photo de téléphone pèse souvent 3 à 6 Mo, bien
 * au-delà de ce qu'accepte l'envoi (4 Mo en tout, voir next.config.ts),
 * et le modèle ne lit pas mieux au-delà de cette taille. */
async function reduirePhoto(fichier: File): Promise<File> {
  const image = await createImageBitmap(fichier);
  const echelle = Math.min(1, COTE_MAX / Math.max(image.width, image.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(image.width * echelle);
  canvas.height = Math.round(image.height * echelle);
  canvas.getContext("2d")?.drawImage(image, 0, 0, canvas.width, canvas.height);
  image.close();
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.85));
  if (!blob) throw new Error("Photo illisible.");
  return new File([blob], "page.jpg", { type: "image/jpeg" });
}

/** Lettre de la tuile du sujet : l'initiale de l'œuvre, sans l'article
 * ("Le Dernier Jour…" → D), ou celle du type de sujet. */
function initiale(sujet: SujetChoisissable): string {
  const source = sujet.oeuvreTitre?.replace(/^(le|la|les|l['’])\s*/i, "") ?? sujet.type;
  return (source.trim().charAt(0) || "?").toUpperCase();
}

/** Longueur demandée, lue dans la consigne elle-même ("d'environ 150
 * mots") : aucune colonne ne la porte, on ne l'invente donc pas quand
 * la consigne ne la donne pas. */
function longueurDemandee(consigne: string): string | null {
  const trouve = consigne.match(/(\d{2,4})\s*mots/i);
  return trouve ? `≈ ${trouve[1]} mots` : null;
}

/** Petites icônes propres à ce formulaire (appareil photo, texte, et
 * les quatre conseils de prise de vue), au trait comme celles du site. */
function Trace({ d, className = "size-4" }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const TRACES = {
  photo: "M4 8h3l2-3h6l2 3h3v11H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
  texte: "M5 6V4h14v2M12 4v16M9 20h6",
  soleil: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
  face: "M7 3h10v18H7zM11 18h2",
  oeil: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
  ordre: "M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01",
};
const CONSEILS = [
  { trace: TRACES.soleil, libelle: "Bien éclairée" },
  { trace: TRACES.face, libelle: "Prise de face" },
  { trace: TRACES.oeil, libelle: "Écriture nette" },
  { trace: TRACES.ordre, libelle: "Pages dans l'ordre" },
];

function BoutonEnvoyer({ desactive, libelle }: { desactive: boolean; libelle: string }) {
  // `useFormStatus` doit être appelé dans un composant enfant du
  // `<form>` : il lit l'état de la soumission en cours.
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending || desactive}
      className="flex items-center justify-center gap-2 rounded-[16px] bg-primary px-7 py-3.5 text-base font-bold text-white shadow-[0_12px_28px_-12px_rgba(29,78,216,0.7)] transition hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "Correction en cours…" : libelle}
      {!pending && <IconeFleche className="size-4" />}
    </button>
  );
}

function Etapes({ actuelle }: { actuelle: 1 | 2 }) {
  const etapes = ["Photo", "Vérifie la lecture", "Correction"];
  return (
    <ol className="flex flex-wrap items-center gap-2 text-sm">
      {etapes.map((libelle, i) => {
        const numero = i + 1;
        const active = numero === actuelle;
        return (
          <li key={libelle} className="flex items-center gap-2">
            <span
              className={`flex size-6 items-center justify-center rounded-full text-xs font-bold ${
                active ? "bg-primary text-white" : "bg-surface-muted text-muted-foreground"
              }`}
            >
              {numero}
            </span>
            <span className={active ? "font-bold text-ink" : "text-muted-foreground"}>{libelle}</span>
            {numero < etapes.length && <span aria-hidden="true" className="mx-1 h-px w-7 bg-border-strong" />}
          </li>
        );
      })}
    </ol>
  );
}

/**
 * Formulaire d'envoi d'une copie au correcteur, refait d'après la
 * maquette de l'utilisateur ("change le design en comme ça") : le sujet
 * en carte, la consigne mise en avant, puis une grande carte avec les
 * deux façons d'envoyer sa copie et les trois étapes.
 *
 * Par photo ("quand l'étudiant envoie son expression écrite par photo,
 * pour une première partie ça lui donne ce que l'IA a pu lire, et après
 * ça lui donne accès de changer ou pas des mots si l'IA n'a pas pu bien
 * lire quelque chose, en plus de ça directement l'IA va le corriger") :
 * 1. l'élève ajoute ses pages ; 2. le modèle les lit (`transcrirePhotos`)
 * et l'élève corrige la lecture à côté de ses photos ; 3. "Valider et
 * corriger" envoie ce texte au correcteur. Ou bien il tape son texte.
 *
 * Le quota du jour est montré en boules, autant que de corrections
 * permises par jour ("pour les essais fais que 3 boules") : pleines pour
 * celles qui restent.
 *
 * Écart avec la maquette : elle annonce "≈ 250 mots · 45 min" sous la
 * consigne. La longueur est reprise seulement quand la consigne la donne
 * elle-même ; aucune durée n'est connue, elle n'est pas affichée.
 *
 * Les photos ne sont jamais enregistrées : seul le texte validé l'est.
 * Les vérifications faites ici évitent un aller-retour, mais la vraie
 * validation reste dans les actions serveur.
 */
export default function FormulaireCopie({
  sujets,
  sujetInitial,
  quotaRestant,
  correcteurPret,
}: {
  sujets: SujetChoisissable[];
  /** Sujet présélectionné ("Réécrire ma copie" depuis une correction). */
  sujetInitial?: string;
  quotaRestant: number;
  correcteurPret: boolean;
}) {
  const [etat, action] = useActionState<EtatCorrection, FormData>(corrigerEtEnregistrer, { erreur: null });
  const [sujetId, setSujetId] = useState(sujetInitial ?? sujets[0]?.id ?? "");
  const [mode, setMode] = useState<Mode>("photo");
  const [texte, setTexte] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [lu, setLu] = useState(false);
  const [incertains, setIncertains] = useState<string[]>([]);
  const [erreurLecture, setErreurLecture] = useState<string | null>(null);
  const [lecture, demarrerLecture] = useTransition();
  const refTexte = useRef<HTMLTextAreaElement>(null);
  const refPhotos = useRef<Photo[]>([]);

  // Libère les aperçus des photos quand le formulaire disparaît.
  refPhotos.current = photos;
  useEffect(() => () => refPhotos.current.forEach((p) => URL.revokeObjectURL(p.apercu)), []);

  const sujet = sujets.find((s) => s.id === sujetId) ?? null;
  const longueur = texte.trim().length;
  const tropCourt = longueur < LONGUEUR_MIN;
  const illisibles = (texte.match(/\[\?\]/g) ?? []).length;
  const bloque = !correcteurPret || quotaRestant <= 0;
  const restantes = Math.max(0, Math.min(quotaRestant, QUOTA_QUOTIDIEN_MAX));

  function ajouterPhotos(liste: FileList | null) {
    if (!liste) return;
    const nouvelles = Array.from(liste)
      .filter((f) => f.type.startsWith("image/"))
      .slice(0, PAGES_MAX - photos.length)
      .map((fichier) => ({ fichier, apercu: URL.createObjectURL(fichier) }));
    setPhotos([...photos, ...nouvelles]);
    setErreurLecture(null);
  }

  function retirerPhoto(index: number) {
    URL.revokeObjectURL(photos[index].apercu);
    setPhotos(photos.filter((_, i) => i !== index));
  }

  function lireCopie() {
    setErreurLecture(null);
    demarrerLecture(async () => {
      try {
        const donnees = new FormData();
        for (const photo of photos) donnees.append("pages", await reduirePhoto(photo.fichier));
        const resultat = await transcrirePhotos({ erreur: null, texte: null, incertains: [] }, donnees);
        if (resultat.erreur || resultat.texte === null) {
          setErreurLecture(resultat.erreur ?? "La lecture n'a pas abouti.");
          return;
        }
        setTexte(resultat.texte);
        setIncertains(resultat.incertains);
        setLu(true);
      } catch {
        setErreurLecture("Une des photos n'a pas pu être ouverte. Essaie avec une autre photo.");
      }
    });
  }

  /** Sélectionne la prochaine occurrence d'un mot incertain dans le
   * texte, pour que l'élève le vérifie et le remplace s'il le faut. */
  function allerAuMot(mot: string) {
    const zone = refTexte.current;
    if (!zone) return;
    const depart = zone.selectionEnd ?? 0;
    let index = texte.indexOf(mot, depart);
    if (index === -1) index = texte.indexOf(mot);
    if (index === -1) return;
    zone.focus();
    zone.setSelectionRange(index, index + mot.length);
  }

  function changerMode(nouveau: Mode) {
    setMode(nouveau);
    setLu(false);
    setIncertains([]);
    setErreurLecture(null);
  }

  const longueurConsigne = sujet ? longueurDemandee(sujet.consigne) : null;

  return (
    <form action={action} className="flex flex-col gap-5">
      {/* Le sujet : carte cliquable posée sur un <select> natif
       * transparent, qui reste accessible au clavier et au lecteur
       * d'écran. */}
      <div className="flex flex-col gap-2">
        <label htmlFor="sujet_id" className="text-sm font-bold text-muted-foreground">
          Le sujet traité
        </label>
        <div className="relative flex items-center gap-4 rounded-[20px] border border-border bg-surface px-4 py-3.5 shadow-sm transition focus-within:border-primary hover:border-border-strong">
          {sujet && (
            <>
              <span
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-[12px] font-serif text-xl font-bold text-white"
                style={{ background: "linear-gradient(145deg, var(--fond-sombre-actif), var(--fond-sombre-haut))" }}
              >
                {initiale(sujet)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-xs text-muted-foreground">
                  {[sujet.oeuvreTitre, sujet.oeuvreAuteur].filter(Boolean).join(" · ") || "Sujet libre"}
                </span>
                <span className="block truncate font-serif text-lg text-ink">{sujet.titre}</span>
              </span>
            </>
          )}
          <IconeChevronBas className="size-5 shrink-0 text-muted-foreground" />
          <select
            id="sujet_id"
            name="sujet_id"
            value={sujetId}
            onChange={(e) => setSujetId(e.target.value)}
            className="absolute inset-0 cursor-pointer opacity-0"
          >
            {sujets.map((s) => (
              <option key={s.id} value={s.id}>
                {s.oeuvreTitre ? `${s.oeuvreTitre} — ` : ""}
                {s.titre}
              </option>
            ))}
          </select>
        </div>
      </div>

      {sujet && (
        <div className="rounded-[20px] border border-border border-s-4 border-s-primary bg-surface px-5 py-4 shadow-sm sm:px-7 sm:py-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="flex items-center gap-2.5 text-sm font-bold text-muted-foreground">
              Consigne
              <span className="rounded-full bg-primary-tint px-2.5 py-0.5 text-xs font-bold text-primary capitalize">{sujet.type}</span>
            </p>
            {longueurConsigne && <span className="text-sm text-muted-foreground">{longueurConsigne}</span>}
          </div>
          <p className="mt-3 font-serif text-lg leading-relaxed text-ink sm:text-xl">{sujet.consigne}</p>
        </div>
      )}

      <section className="flex flex-col gap-5 rounded-[28px] border border-border bg-surface p-4 shadow-sm sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div role="tablist" aria-label="Façon d'envoyer ta copie" className="flex rounded-[16px] bg-surface-muted p-1">
            {(
              [
                ["photo", "Photo de ma copie", TRACES.photo],
                ["texte", "Taper mon texte", TRACES.texte],
              ] as const
            ).map(([cle, libelle, trace]) => (
              <button
                key={cle}
                type="button"
                role="tab"
                aria-selected={mode === cle}
                onClick={() => changerMode(cle)}
                className={`flex items-center gap-2 rounded-[12px] px-4 py-2.5 text-sm transition ${
                  mode === cle ? "bg-surface font-bold text-primary shadow-sm" : "text-muted-foreground hover:text-ink"
                }`}
              >
                <Trace d={trace} />
                {libelle}
              </button>
            ))}
          </div>
          {mode === "photo" && <Etapes actuelle={lu ? 2 : 1} />}
        </div>

        {/* Étape 1 : les pages */}
        {mode === "photo" && !lu && (
          <>
            <ul className="grid grid-cols-2 gap-4 rounded-[20px] border border-dashed border-border-strong bg-surface-muted/60 p-4 sm:p-6 lg:grid-cols-4">
              {Array.from({ length: PAGES_MAX }, (_, index) => {
                const photo = photos[index];
                if (photo) {
                  return (
                    <li key={photo.apercu} className="relative" style={{ rotate: index % 2 === 0 ? "-1.5deg" : "1deg" }}>
                      <div className="overflow-hidden rounded-[8px] bg-white p-1.5 shadow-[0_14px_30px_-16px_rgba(20,30,60,0.55)]">
                        {/* eslint-disable-next-line @next/next/no-img-element -- aperçu local (blob:), pas une image du site */}
                        <img src={photo.apercu} alt={`Page ${index + 1}`} className="aspect-[3/4] w-full rounded-[4px] object-cover" />
                      </div>
                      <span className="absolute bottom-3 left-3 flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white ring-2 ring-white">
                        {index + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => retirerPhoto(index)}
                        aria-label={`Retirer la page ${index + 1}`}
                        className="absolute -top-2.5 -right-2.5 flex size-7 items-center justify-center rounded-full border border-border bg-surface text-sm text-muted-foreground shadow hover:text-erreur"
                      >
                        ×
                      </button>
                    </li>
                  );
                }
                if (index === photos.length) {
                  return (
                    <li key="ajout">
                      <label className="flex aspect-[3/4] h-full w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-[14px] border-2 border-primary bg-surface px-3 text-center transition hover:bg-primary-tint/40">
                        <span className="flex size-12 items-center justify-center rounded-full bg-primary text-2xl leading-none text-white shadow-md">+</span>
                        <span className="mt-1 text-sm font-bold text-ink">Ajouter une page</span>
                        <span className="text-xs text-muted-foreground">Photo ou fichier</span>
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/webp,image/*"
                          multiple
                          onChange={(e) => {
                            ajouterPhotos(e.target.files);
                            e.target.value = "";
                          }}
                          className="sr-only"
                        />
                      </label>
                    </li>
                  );
                }
                return (
                  <li
                    key={`vide-${index}`}
                    aria-hidden="true"
                    className="flex aspect-[3/4] items-center justify-center rounded-[14px] border border-dashed border-border-strong font-serif text-3xl text-subtle-foreground/60"
                  >
                    {index + 1}
                  </li>
                );
              })}
            </ul>

            <ul className="flex flex-wrap gap-2" aria-label="Conseils pour la photo">
              {CONSEILS.map((conseil) => (
                <li key={conseil.libelle} className="flex items-center gap-2 rounded-full bg-surface-muted px-3.5 py-2 text-sm text-foreground">
                  <span className="text-validation">
                    <Trace d={conseil.trace} />
                  </span>
                  {conseil.libelle}
                </li>
              ))}
            </ul>

            {erreurLecture && (
              <p role="alert" className="rounded-[12px] border border-erreur/30 bg-erreur/10 px-4 py-3 text-sm text-erreur">
                {erreurLecture}
              </p>
            )}
          </>
        )}

        {/* Étape 2 (photo) ou saisie directe (texte) */}
        {(mode === "texte" || lu) && (
          <div className={mode === "photo" ? "grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]" : ""}>
            {mode === "photo" && (
              <div className="flex flex-col gap-3">
                <p className="text-sm font-bold text-ink">Tes photos</p>
                <ul className="flex max-h-[340px] flex-col gap-3 overflow-y-auto rounded-[14px] lg:max-h-[640px]">
                  {photos.map((photo, index) => (
                    <li key={photo.apercu}>
                      <a href={photo.apercu} target="_blank" rel="noreferrer" title="Ouvrir en grand">
                        {/* eslint-disable-next-line @next/next/no-img-element -- aperçu local (blob:), pas une image du site */}
                        <img src={photo.apercu} alt={`Page ${index + 1}`} className="w-full rounded-[14px] border border-border" />
                      </a>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => {
                    setLu(false);
                    setIncertains([]);
                  }}
                  className="w-fit text-sm font-semibold text-primary hover:underline"
                >
                  Reprendre les photos
                </button>
              </div>
            )}

            <div className="flex flex-col gap-3">
              {mode === "photo" && (
                <div className="rounded-[16px] border border-border bg-primary-tint/60 p-4 text-sm text-foreground">
                  <p className="font-bold text-ink">Voici ce que l&apos;IA a lu sur ta copie.</p>
                  <p className="mt-1 text-muted-foreground">
                    Compare avec tes photos et corrige les mots mal lus. Ne corrige pas tes propres fautes : la note porte
                    sur ce que tu as écrit.
                  </p>
                  {incertains.length > 0 && (
                    <div className="mt-3">
                      <p className="text-xs font-bold text-ink">Lecture incertaine, à vérifier :</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {incertains.map((mot) => (
                          <button
                            key={mot}
                            type="button"
                            onClick={() => allerAuMot(mot)}
                            className="rounded-full border border-[#f59e0b]/50 bg-[#f59e0b]/15 px-2.5 py-1 text-xs font-medium text-ink hover:bg-[#f59e0b]/25"
                          >
                            {mot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-baseline justify-between gap-3">
                <label htmlFor="texte" className="text-sm font-bold text-ink">
                  {mode === "photo" ? "Le texte de ta copie" : "Ta rédaction"}
                </label>
                <span className={`text-xs ${tropCourt ? "text-muted-foreground" : "text-validation"}`}>
                  {longueur} caractères
                  {tropCourt ? ` (${LONGUEUR_MIN} minimum)` : ""}
                </span>
              </div>
              <textarea
                ref={refTexte}
                id="texte"
                name="texte"
                rows={18}
                value={texte}
                onChange={(e) => setTexte(e.target.value)}
                placeholder="Écris ou colle ici ta rédaction, telle que tu l'as rendue."
                className="w-full resize-y rounded-[16px] border border-border bg-background p-4 font-lecture text-[15px] leading-relaxed text-foreground focus:border-primary focus:outline-none"
              />
              {illisibles > 0 && (
                <p className="text-xs font-semibold text-erreur">
                  {illisibles} mot{illisibles > 1 ? "s" : ""} illisible{illisibles > 1 ? "s" : ""}, marqué
                  {illisibles > 1 ? "s" : ""} [?] : remplace-{illisibles > 1 ? "les" : "le"} par ce que tu as écrit.
                </p>
              )}
            </div>
          </div>
        )}

        {etat.erreur && (
          <p role="alert" className="rounded-[12px] border border-erreur/30 bg-erreur/10 px-4 py-3 text-sm text-erreur">
            {etat.erreur}
          </p>
        )}

        <div className="flex flex-col gap-3 border-t border-border pt-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex gap-1.5" aria-hidden="true">
                {Array.from({ length: QUOTA_QUOTIDIEN_MAX }, (_, i) => (
                  <span key={i} className={`size-2.5 rounded-full ${i < restantes ? "bg-primary" : "bg-border-strong"}`} />
                ))}
              </span>
              {restantes > 0 ? (
                <span>
                  <strong className="font-bold text-ink">
                    {restantes} correction{restantes > 1 ? "s" : ""}
                  </strong>{" "}
                  restante{restantes > 1 ? "s" : ""} aujourd&apos;hui
                </span>
              ) : (
                <span>Tu as utilisé toutes tes corrections du jour.</span>
              )}
            </p>

            {mode === "photo" && !lu ? (
              <button
                type="button"
                onClick={lireCopie}
                disabled={bloque || photos.length === 0 || lecture}
                className="flex items-center justify-center gap-2 rounded-[16px] bg-primary px-7 py-3.5 text-base font-bold text-white shadow-[0_12px_28px_-12px_rgba(29,78,216,0.7)] transition hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50"
              >
                {lecture ? "Lecture de ta copie…" : "Lire ma copie"}
                {!lecture && <IconeFleche className="size-4" />}
              </button>
            ) : (
              <BoutonEnvoyer
                desactive={bloque || tropCourt || illisibles > 0}
                libelle={mode === "photo" ? "Valider et corriger" : "Corriger ma copie"}
              />
            )}
          </div>
          {mode === "photo" && !lu && (
            <p className="text-xs text-muted-foreground">
              L&apos;IA lit d&apos;abord ta copie sans la corriger : tu pourras vérifier sa lecture avant la correction.
            </p>
          )}
        </div>
      </section>
    </form>
  );
}
