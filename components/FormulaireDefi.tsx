"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { MATIERES } from "@/lib/matieres";
import { creerClientNavigateur } from "@/lib/supabase/client";

/**
 * Espace admin : publier le défi de la semaine, puis son corrigé —
 * demandé explicitement par l'utilisateur (« Chaque semaine, l'équipe
 * publie un défi […] puis le corrigé est publié »). La RLS de `defis`
 * refuse l'écriture à qui n'est pas admin
 * (supabase/migrations/20261103000000_defis.sql) ; cette page n'est de
 * toute façon accessible qu'aux admins (middleware.ts).
 *
 * Écriture directe ici, pas dans lib/supabase/defis.ts (lectures
 * serveur, importe `next/headers`) : même raison que FormulaireAnnonce.
 */

const OPTIONS_MATIERE = [
  { valeur: "", libelle: "Aucune matière" },
  { valeur: "francais", libelle: "Français" },
  ...MATIERES.map((m) => ({ valeur: m.slug, libelle: `${m.titreAvantAccent}${m.titreAccent}` })),
];

/** Date limite proposée par défaut : dans 7 jours, à 23:59 (heure
 * locale du navigateur de l'admin), au format d'un champ
 * `datetime-local`. */
function limiteParDefaut(): string {
  const d = new Date();
  d.setDate(d.getDate() + 7);
  d.setHours(23, 59, 0, 0);
  const deux = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${deux(d.getMonth() + 1)}-${deux(d.getDate())}T${deux(d.getHours())}:${deux(d.getMinutes())}`;
}

const CHAMP =
  "w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none";

export default function FormulaireDefi() {
  const router = useRouter();
  const [titre, setTitre] = useState("");
  const [enonce, setEnonce] = useState("");
  const [matiere, setMatiere] = useState("");
  const [limite, setLimite] = useState(limiteParDefaut);
  const [enCours, setEnCours] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  const complet = titre.trim() && enonce.trim() && limite;

  async function publier(evenement: React.FormEvent) {
    evenement.preventDefault();
    if (!complet || enCours) return;
    setEnCours(true);
    setErreur(null);

    const supabase = creerClientNavigateur();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { error } = user
      ? await supabase.from("defis").insert({
          titre: titre.trim(),
          enonce: enonce.trim(),
          matiere: matiere || null,
          // `datetime-local` est en heure locale : `new Date` la lit
          // comme telle, puis on l'enregistre en UTC.
          date_limite: new Date(limite).toISOString(),
          auteur_id: user.id,
        })
      : { error: new Error("Non connecté.") };

    if (error) {
      setErreur("Le défi n'a pas pu être publié. La migration des défis est-elle lancée ?");
    } else {
      setTitre("");
      setEnonce("");
      setMatiere("");
      setLimite(limiteParDefaut());
      router.refresh();
    }
    setEnCours(false);
  }

  return (
    <form onSubmit={publier} className="flex flex-col gap-3 rounded-lg border border-border bg-surface-muted p-5">
      <input id="defi-titre" type="text" value={titre} onChange={(e) => setTitre(e.target.value)} maxLength={160} placeholder="Titre du défi" className={CHAMP} />
      <textarea
        id="defi-enonce"
        value={enonce}
        onChange={(e) => setEnonce(e.target.value)}
        rows={5}
        maxLength={4000}
        placeholder="Énoncé : la question posée aux élèves"
        className={CHAMP}
      />
      <div className="flex flex-wrap gap-3">
        <label className="flex flex-col gap-1 text-xs font-semibold text-muted-foreground">
          Matière
          <select id="defi-matiere" value={matiere} onChange={(e) => setMatiere(e.target.value)} className={CHAMP}>
            {OPTIONS_MATIERE.map((o) => (
              <option key={o.valeur || "aucune"} value={o.valeur}>
                {o.libelle}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-semibold text-muted-foreground">
          Réponses acceptées jusqu&apos;au
          <input id="defi-limite" type="datetime-local" value={limite} onChange={(e) => setLimite(e.target.value)} className={CHAMP} />
        </label>
      </div>
      {erreur && <p className="text-sm text-erreur">{erreur}</p>}
      <button
        type="submit"
        disabled={enCours || !complet}
        className="self-start rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
      >
        {enCours ? "Publication..." : "Publier le défi"}
      </button>
    </form>
  );
}

/** Publier (ou corriger) le corrigé d'un défi. Il s'affiche aussitôt
 * sur la page Communauté. */
export function FormulaireCorrigeDefi({ defiId, corrigeActuel }: { defiId: string; corrigeActuel: string | null }) {
  const router = useRouter();
  const [ouvert, setOuvert] = useState(false);
  const [corrige, setCorrige] = useState(corrigeActuel ?? "");
  const [enCours, setEnCours] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  async function publier(evenement: React.FormEvent) {
    evenement.preventDefault();
    if (!corrige.trim() || enCours) return;
    setEnCours(true);
    setErreur(null);
    const { error } = await creerClientNavigateur()
      .from("defis")
      .update({ corrige: corrige.trim(), corrige_publie_le: new Date().toISOString() })
      .eq("id", defiId);
    if (error) setErreur("Le corrigé n'a pas pu être publié.");
    else {
      setOuvert(false);
      router.refresh();
    }
    setEnCours(false);
  }

  if (!ouvert) {
    return (
      <button type="button" onClick={() => setOuvert(true)} className="text-sm font-semibold text-primary hover:underline">
        {corrigeActuel ? "Modifier le corrigé" : "Publier le corrigé"}
      </button>
    );
  }

  return (
    <form onSubmit={publier} className="flex flex-col gap-2">
      <textarea
        id={`corrige-${defiId}`}
        value={corrige}
        onChange={(e) => setCorrige(e.target.value)}
        rows={5}
        placeholder="Le corrigé, tel que les élèves le liront"
        className={CHAMP}
      />
      {erreur && <p className="text-sm text-erreur">{erreur}</p>}
      <div className="flex gap-3">
        <button
          type="submit"
          disabled={enCours || !corrige.trim()}
          className="rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
        >
          {enCours ? "Publication..." : "Publier le corrigé"}
        </button>
        <button type="button" onClick={() => setOuvert(false)} className="text-sm text-muted-foreground hover:underline">
          Annuler
        </button>
      </div>
    </form>
  );
}
