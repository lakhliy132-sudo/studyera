"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ajouterPhotoPublication } from "@/app/(eleve)/communaute/actions";

import { IconeFleche } from "@/components/icones";
import { MATIERES } from "@/lib/matieres";
import { creerClientNavigateur } from "@/lib/supabase/client";

const LONGUEUR_MAX = 1000;
const COTE_MAX = 1600;

/** Réduit la photo avant l'envoi (côté le plus long à 1600 px, JPEG),
 * comme pour les copies du correcteur : une photo de téléphone pèse
 * souvent plusieurs Mo, au-delà de ce qu'accepte l'envoi (next.config). */
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
  return new File([blob], "photo.jpg", { type: "image/jpeg" });
}

/**
 * Champ de publication du fil de communauté : une question, et la
 * matière qu'elle concerne. Depuis le nouveau concept de la page
 * (annonces de l'équipe, défi de la semaine, questions des élèves —
 * demandé explicitement par l'utilisateur, qui retire « astuces,
 * objectifs, ressources et le classement »), toute publication est
 * une question : plus de choix de catégorie.
 *
 * Écriture directe depuis le navigateur ; la policy RLS
 * `communaute_publication` garantit qu'on ne publie que sous sa propre
 * identité. `router.refresh()` recharge le fil rendu côté serveur.
 *
 * Photo (« quand je veux envoyer un message, ajoute pour ajouter une
 * photo avec le message ») : une seule par publication, réduite dans le
 * navigateur, envoyée après la publication par une action serveur qui
 * vérifie que la publication est bien la sienne (voir actions.ts).
 */
const OPTIONS_MATIERE = [
  { valeur: "", libelle: "Aucune matière" },
  { valeur: "francais", libelle: "Français" },
  ...MATIERES.map((m) => ({ valeur: m.slug, libelle: `${m.titreAvantAccent}${m.titreAccent}` })),
];

/**
 * Le choix de la matière d'une publication. Remplace la liste
 * déroulante du navigateur (« ça aussi mets-la stylée ») : une pastille
 * qui ouvre un petit panneau arrondi, la matière choisie cochée. Se
 * ferme au clic dehors, à Échap, ou au choix.
 */
function ChoixMatiere({ valeur, onChange }: { valeur: string; onChange: (v: string) => void }) {
  const [ouvert, setOuvert] = useState(false);
  const zone = useRef<HTMLDivElement>(null);
  const actuelle = OPTIONS_MATIERE.find((o) => o.valeur === valeur) ?? OPTIONS_MATIERE[0];

  useEffect(() => {
    if (!ouvert) return;
    const fermer = (e: MouseEvent) => {
      if (zone.current && !zone.current.contains(e.target as Node)) setOuvert(false);
    };
    const touche = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOuvert(false);
    };
    document.addEventListener("mousedown", fermer);
    document.addEventListener("keydown", touche);
    return () => {
      document.removeEventListener("mousedown", fermer);
      document.removeEventListener("keydown", touche);
    };
  }, [ouvert]);

  return (
    <div ref={zone} className="relative">
      <button
        type="button"
        onClick={() => setOuvert((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={ouvert}
        className={`flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors ${
          valeur ? "border-primary bg-primary-tint text-primary" : "border-border bg-surface text-muted-foreground hover:border-primary hover:text-primary"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5" aria-hidden="true">
          <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 21V5M8 7h7" />
        </svg>
        {actuelle.libelle}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={`size-3.5 transition-transform ${ouvert ? "rotate-180" : ""}`} aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {ouvert && (
        <ul
          role="listbox"
          aria-label="Matière de la publication"
          className="animate-entree-carte absolute left-0 z-20 mt-2 w-60 rounded-[18px] border border-border bg-surface p-1.5 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.45)]"
        >
          {OPTIONS_MATIERE.map((o) => {
            const choisie = o.valeur === valeur;
            return (
              <li key={o.valeur || "aucune"} role="option" aria-selected={choisie}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(o.valeur);
                    setOuvert(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 rounded-[12px] px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                    choisie ? "bg-primary-tint text-primary" : "text-ink hover:bg-surface-muted"
                  }`}
                >
                  <span className={o.valeur ? "" : "text-muted-foreground"}>{o.libelle}</span>
                  {choisie && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0" aria-hidden="true">
                      <path d="m5 12 5 5 9-10" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function FormulaireCommunaute() {
  const router = useRouter();
  const [contenu, setContenu] = useState("");
  const [matiere, setMatiere] = useState("");
  const [envoi, setEnvoi] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);
  const [photo, setPhoto] = useState<{ fichier: File; apercu: string } | null>(null);
  const champPhoto = useRef<HTMLInputElement>(null);

  // Libère l'aperçu local quand la photo change ou que le formulaire
  // disparaît.
  useEffect(() => () => {
    if (photo) URL.revokeObjectURL(photo.apercu);
  }, [photo]);

  function choisirPhoto(evenement: React.ChangeEvent<HTMLInputElement>) {
    const fichier = evenement.target.files?.[0];
    evenement.target.value = "";
    if (!fichier) return;
    if (!fichier.type.startsWith("image/")) {
      setErreur("Choisis une image (photo, capture d'écran…).");
      return;
    }
    setErreur(null);
    setPhoto({ fichier, apercu: URL.createObjectURL(fichier) });
  }

  async function publier(evenement: React.FormEvent) {
    evenement.preventDefault();
    const texte = contenu.trim();
    if (!texte || envoi) return;

    setEnvoi(true);
    setErreur(null);

    const supabase = creerClientNavigateur();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setErreur("Ta session a expiré, reconnecte-toi pour publier.");
      setEnvoi(false);
      return;
    }

    const { data: publication, error } = await supabase
      .from("communaute_messages")
      .insert({
        auteur_id: user.id,
        contenu: texte,
        type: "question",
        matiere: matiere || null,
      })
      .select("id")
      .single();

    if (error || !publication) {
      setErreur(error?.message ?? "La publication n'a pas pu être envoyée.");
      setEnvoi(false);
      return;
    }

    if (photo) {
      let message: string | undefined;
      try {
        const donnees = new FormData();
        donnees.set("message_id", publication.id);
        donnees.set("photo", await reduirePhoto(photo.fichier));
        message = (await ajouterPhotoPublication(donnees)).erreur;
      } catch {
        message = "La photo n'a pas pu être lue.";
      }
      if (message) setErreur(`Ta publication est en ligne, mais pas la photo : ${message}`);
    }

    setContenu("");
    setPhoto(null);
    setEnvoi(false);
    router.refresh();
  }

  // Une seule carte : la zone d'écriture sans bordure, puis une barre
  // d'outils (photo, matière, compteur, envoi) — refait à la demande de
  // l'utilisateur (« TU PEUX FAIRE MIEUX QUE CE DESIGN ») : avant, le
  // champ encadré, la matière seule sur sa ligne et la rangée du bas
  // empilaient trois blocs.
  return (
    <form onSubmit={publier} className="flex flex-col">
      <div className="flex gap-3.5 p-5 sm:p-6">
        <span className="hidden size-11 shrink-0 -rotate-3 items-center justify-center rounded-[13px] bg-primary-tint text-primary sm:flex">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5v.2M12 15.5h.01" />
          </svg>
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <label htmlFor="message-communaute" className="text-sm font-bold text-ink">
            Ta question
          </label>
          <textarea
            id="message-communaute"
            value={contenu}
            onChange={(evenement) => setContenu(evenement.target.value)}
            maxLength={LONGUEUR_MAX}
            rows={3}
            placeholder="Sur une leçon, un exercice, un sujet d'examen… Sois précis·e : quelle leçon, quelle question."
            className="w-full resize-none bg-transparent font-lecture text-[15px] leading-relaxed text-foreground placeholder:text-subtle-foreground focus:outline-none"
          />

          {photo && (
            <div className="relative w-fit">
              {/* eslint-disable-next-line @next/next/no-img-element -- aperçu local (blob:), pas une image du site */}
              <img src={photo.apercu} alt="Photo jointe" className="max-h-48 rounded-[12px] border border-border object-contain" />
              <button
                type="button"
                onClick={() => setPhoto(null)}
                aria-label="Retirer la photo"
                className="absolute -top-2 -right-2 flex size-7 items-center justify-center rounded-full bg-ink text-sm font-bold text-surface shadow-md"
              >
                ×
              </button>
            </div>
          )}

          {erreur && <p className="text-xs font-semibold text-erreur">{erreur}</p>}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 rounded-b-[24px] border-t border-border bg-surface-muted/60 px-5 py-3 sm:px-6">
        <input ref={champPhoto} type="file" accept="image/*" onChange={choisirPhoto} className="hidden" />
        <button
          type="button"
          onClick={() => champPhoto.current?.click()}
          className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-bold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
            <path d="M4 8h3l2-3h6l2 3h3v11H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
          </svg>
          {photo ? "Changer la photo" : "Photo"}
        </button>
        <ChoixMatiere valeur={matiere} onChange={setMatiere} />
        <span className="ms-auto text-xs text-subtle-foreground tabular-nums">
          {contenu.trim().length}/{LONGUEUR_MAX}
        </span>
        <button
          type="submit"
          disabled={envoi || contenu.trim().length === 0}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-primary-foreground shadow-sm transition-all hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50"
        >
          {envoi ? "Envoi…" : "Publier"}
          <IconeFleche className="size-3.5" />
        </button>
      </div>
    </form>
  );
}
