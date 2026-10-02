"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { IconeFleche } from "@/components/icones";
import { MATIERES } from "@/lib/matieres";
import { creerClientNavigateur } from "@/lib/supabase/client";

const LONGUEUR_MAX = 1000;

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
 */
export default function FormulaireCommunaute() {
  const router = useRouter();
  const [contenu, setContenu] = useState("");
  const [type, setType] = useState<(typeof TYPES)[number]["cle"]>("question");
  const [matiere, setMatiere] = useState("");
  const [envoi, setEnvoi] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

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

    const { error } = await supabase.from("communaute_messages").insert({
      auteur_id: user.id,
      contenu: texte,
      type,
      matiere: matiere || null,
    });

    if (error) {
      setErreur(error.message);
      setEnvoi(false);
      return;
    }

    setContenu("");
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
        <span className="text-xs text-subtle-foreground">
          {contenu.trim().length}/{LONGUEUR_MAX}
        </span>
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
