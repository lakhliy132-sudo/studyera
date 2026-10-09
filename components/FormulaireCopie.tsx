"use client";

import { useActionState, useEffect, useRef, useState, useTransition } from "react";
import { useFormStatus } from "react-dom";

import {
  corrigerEtEnregistrer,
  transcrirePhotos,
  type EtatCorrection,
} from "@/app/(eleve)/redaction/actions";
import { IconeFleche } from "@/components/icones";

export interface SujetChoisissable {
  id: string;
  titre: string;
  type: string;
  consigne: string;
  oeuvreTitre: string | null;
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

function BoutonEnvoyer({ desactive, libelle }: { desactive: boolean; libelle: string }) {
  // `useFormStatus` doit être appelé dans un composant enfant du
  // `<form>` : il lit l'état de la soumission en cours.
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending || desactive}
      className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "Correction en cours…" : libelle}
      {!pending && <IconeFleche className="size-4" />}
    </button>
  );
}

function Etapes({ actuelle }: { actuelle: 1 | 2 | 3 }) {
  const etapes = ["Photo de ta copie", "Vérifie la lecture", "Correction"];
  return (
    <ol className="flex flex-wrap items-center gap-2 text-sm">
      {etapes.map((libelle, i) => {
        const numero = i + 1;
        const active = numero === actuelle;
        const faite = numero < actuelle;
        return (
          <li key={libelle} className="flex items-center gap-2">
            <span
              className={`flex size-7 items-center justify-center rounded-full text-xs font-bold ${
                active ? "bg-primary text-white" : faite ? "bg-primary-tint text-primary" : "bg-surface-muted text-subtle-foreground"
              }`}
            >
              {numero}
            </span>
            <span className={active ? "font-semibold text-ink" : "text-muted-foreground"}>{libelle}</span>
            {numero < etapes.length && <span aria-hidden="true" className="mx-1 h-px w-6 bg-border" />}
          </li>
        );
      })}
    </ol>
  );
}

/**
 * Formulaire d'envoi d'une copie au correcteur.
 *
 * Deux façons d'envoyer sa rédaction :
 * - **par photo**, demandé par l'utilisateur ("quand l'étudiant envoie
 *   son expression écrite par photo, pour une première partie ça lui
 *   donne ce que l'IA a pu lire, et après ça lui donne accès de changer
 *   ou pas des mots si l'IA n'a pas pu bien lire quelque chose, en plus
 *   de ça directement l'IA va le corriger") : 1. l'élève photographie
 *   ses pages ; 2. le modèle les lit (`transcrirePhotos`) et l'élève
 *   voit le texte à côté de ses photos, avec les mots incertains
 *   signalés, et le corrige s'il le faut ; 3. "Valider et corriger"
 *   envoie ce texte au correcteur ;
 * - **en tapant ou collant** le texte, comme avant.
 *
 * Les photos ne sont jamais enregistrées : seul le texte validé par
 * l'élève l'est, avec sa correction. Le compteur de caractères et les
 * mots illisibles ([?]) sont vérifiés ici pour éviter un aller-retour,
 * mais la vraie validation reste dans les actions serveur.
 */
export default function FormulaireCopie({
  sujets,
  quotaRestant,
  correcteurPret,
}: {
  sujets: SujetChoisissable[];
  quotaRestant: number;
  correcteurPret: boolean;
}) {
  const [etat, action] = useActionState<EtatCorrection, FormData>(corrigerEtEnregistrer, { erreur: null });
  const [sujetId, setSujetId] = useState(sujets[0]?.id ?? "");
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

  const etape: 1 | 2 = mode === "photo" && !lu ? 1 : 2;

  return (
    <form action={action} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="sujet_id" className="text-sm font-semibold text-ink">
          Le sujet traité
        </label>
        <select
          id="sujet_id"
          name="sujet_id"
          value={sujetId}
          onChange={(e) => setSujetId(e.target.value)}
          className="w-full rounded-[12px] border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
        >
          {sujets.map((s) => (
            <option key={s.id} value={s.id}>
              {s.oeuvreTitre ? `${s.oeuvreTitre} — ` : ""}
              {s.titre}
            </option>
          ))}
        </select>
      </div>

      {sujet && (
        <div className="rounded-[14px] border border-border bg-surface-muted p-4">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Consigne · {sujet.type}</p>
          <p className="mt-2 font-lecture text-[15px] leading-relaxed text-foreground">{sujet.consigne}</p>
        </div>
      )}

      <div role="tablist" aria-label="Façon d'envoyer ta copie" className="flex w-fit rounded-full bg-surface-muted p-1">
        {(
          [
            ["photo", "Photo de ma copie"],
            ["texte", "Taper mon texte"],
          ] as const
        ).map(([cle, libelle]) => (
          <button
            key={cle}
            type="button"
            role="tab"
            aria-selected={mode === cle}
            onClick={() => changerMode(cle)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              mode === cle ? "bg-surface font-semibold text-ink shadow-sm" : "text-muted-foreground hover:text-ink"
            }`}
          >
            {libelle}
          </button>
        ))}
      </div>

      {mode === "photo" && <Etapes actuelle={etape} />}

      {/* Étape 1 : les photos */}
      {mode === "photo" && !lu && (
        <div className="flex flex-col gap-4">
          <label
            className={`flex cursor-pointer flex-col items-center gap-2 rounded-[18px] border-2 border-dashed border-border-strong bg-surface px-6 py-10 text-center transition hover:border-primary ${
              photos.length >= PAGES_MAX ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-primary-tint text-2xl text-primary">+</span>
            <span className="font-semibold text-ink">Prends en photo ou choisis les pages de ta copie</span>
            <span className="text-sm text-muted-foreground">
              {PAGES_MAX} pages au plus, dans l&apos;ordre. Une photo nette, bien éclairée et prise de face se lit mieux.
            </span>
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

          {photos.length > 0 && (
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {photos.map((photo, index) => (
                <li key={photo.apercu} className="relative overflow-hidden rounded-[14px] border border-border bg-surface">
                  {/* eslint-disable-next-line @next/next/no-img-element -- aperçu local (blob:), pas une image du site */}
                  <img src={photo.apercu} alt={`Page ${index + 1}`} className="aspect-[3/4] w-full object-cover" />
                  <span className="absolute top-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-xs font-semibold text-white">
                    Page {index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => retirerPhoto(index)}
                    className="absolute top-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white hover:bg-black/80"
                  >
                    Retirer
                  </button>
                </li>
              ))}
            </ul>
          )}

          {erreurLecture && (
            <p role="alert" className="rounded-[12px] border border-erreur/30 bg-erreur/10 px-4 py-3 text-sm text-erreur">
              {erreurLecture}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-muted-foreground">
              L&apos;IA lit d&apos;abord ta copie, sans la corriger : tu pourras vérifier sa lecture avant la correction.
            </span>
            <button
              type="button"
              onClick={lireCopie}
              disabled={bloque || photos.length === 0 || lecture}
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {lecture ? "Lecture de ta copie…" : "Lire ma copie"}
              {!lecture && <IconeFleche className="size-4" />}
            </button>
          </div>
        </div>
      )}

      {/* Étape 2 (photo) ou saisie directe (texte) */}
      {(mode === "texte" || lu) && (
        <div className={mode === "photo" ? "grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]" : ""}>
          {mode === "photo" && (
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-ink">Tes photos</p>
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
              <div className="rounded-[14px] border border-border bg-primary-tint/60 p-4 text-sm text-foreground">
                <p className="font-semibold text-ink">Voici ce que l&apos;IA a lu sur ta copie.</p>
                <p className="mt-1 text-muted-foreground">
                  Compare avec tes photos et corrige les mots mal lus. Ne corrige pas tes propres fautes : la note porte sur
                  ce que tu as écrit.
                </p>
                {incertains.length > 0 && (
                  <div className="mt-3">
                    <p className="text-xs font-semibold text-ink">Lecture incertaine, à vérifier :</p>
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
              <label htmlFor="texte" className="text-sm font-semibold text-ink">
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
              className="w-full resize-y rounded-[14px] border border-border bg-surface p-4 font-lecture text-[15px] leading-relaxed text-foreground focus:border-primary focus:outline-none"
            />
            {illisibles > 0 && (
              <p className="text-xs font-semibold text-erreur">
                {illisibles} mot{illisibles > 1 ? "s" : ""} illisible{illisibles > 1 ? "s" : ""}, marqué{illisibles > 1 ? "s" : ""}{" "}
                [?] : remplace-{illisibles > 1 ? "les" : "le"} par ce que tu as écrit.
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

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs text-muted-foreground">
          {quotaRestant > 0
            ? `${quotaRestant} correction${quotaRestant > 1 ? "s" : ""} restante${quotaRestant > 1 ? "s" : ""} aujourd'hui.`
            : "Tu as utilisé toutes tes corrections du jour."}
        </span>
        {(mode === "texte" || lu) && (
          <BoutonEnvoyer
            desactive={bloque || tropCourt || illisibles > 0}
            libelle={mode === "photo" ? "Valider et corriger" : "Corriger ma copie"}
          />
        )}
      </div>
    </form>
  );
}
