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

/** Les catégories proposées à la publication, dans l'ordre de la
 * maquette. Recopiées ici plutôt qu'importées de
 * lib/supabase/communaute.ts : ce fichier-là importe `next/headers`,
 * un composant client ne peut donc rien en importer. */
const TYPES = [
  { cle: "question", libelle: "Question" },
  { cle: "astuce", libelle: "Astuce" },
  { cle: "objectif", libelle: "Objectif" },
  { cle: "ressource", libelle: "Ressource" },
  { cle: "discussion", libelle: "Discussion" },
] as const;

/**
 * Champ de publication du fil de communauté : texte, catégorie et
 * matière concernée — les deux étiquettes que montre la maquette sur
 * chaque publication.
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
export default function FormulaireCommunaute() {
  const router = useRouter();
  const [contenu, setContenu] = useState("");
  const [type, setType] = useState<(typeof TYPES)[number]["cle"]>("question");
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
        type,
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

  return (
    <form onSubmit={publier} className="flex flex-col gap-3">
      <label htmlFor="message-communaute" className="sr-only">
        Ta publication
      </label>
      <textarea
        id="message-communaute"
        value={contenu}
        onChange={(evenement) => setContenu(evenement.target.value)}
        maxLength={LONGUEUR_MAX}
        rows={3}
        placeholder="Pose une question, partage une astuce, annonce ton objectif…"
        className="w-full resize-none rounded-[14px] border border-border bg-surface p-3.5 text-sm text-foreground transition-colors placeholder:text-subtle-foreground focus:border-primary focus:outline-none"
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

      <div className="flex flex-wrap items-center gap-2">
        {TYPES.map((choix) => (
          <button
            key={choix.cle}
            type="button"
            onClick={() => setType(choix.cle)}
            aria-pressed={type === choix.cle}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
              type === choix.cle
                ? "bg-primary text-white"
                : "bg-surface-muted text-muted-foreground hover:text-primary"
            }`}
          >
            {choix.libelle}
          </button>
        ))}

        <label className="ms-auto flex items-center gap-2 text-xs text-muted-foreground">
          Matière
          <select
            value={matiere}
            onChange={(evenement) => setMatiere(evenement.target.value)}
            className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-ink focus:border-primary focus:outline-none"
          >
            <option value="">Aucune</option>
            <option value="francais">Français</option>
            {MATIERES.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.titreAvantAccent}
                {m.titreAccent}
              </option>
            ))}
          </select>
        </label>
      </div>

      {erreur && <p className="text-xs font-semibold text-erreur">{erreur}</p>}

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <input ref={champPhoto} type="file" accept="image/*" onChange={choisirPhoto} className="hidden" />
          <button
            type="button"
            onClick={() => champPhoto.current?.click()}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
              <path d="M4 8h3l2-3h6l2 3h3v11H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
            </svg>
            {photo ? "Changer la photo" : "Ajouter une photo"}
          </button>
          <span className="text-xs text-subtle-foreground">
            {contenu.trim().length}/{LONGUEUR_MAX}
          </span>
        </div>
        <button
          type="submit"
          disabled={envoi || contenu.trim().length === 0}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50"
        >
          {envoi ? "Envoi…" : "Publier"}
          <IconeFleche className="size-3.5" />
        </button>
      </div>
    </form>
  );
}
