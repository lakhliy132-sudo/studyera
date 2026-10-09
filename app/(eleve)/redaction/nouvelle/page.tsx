import Link from "next/link";
import { redirect } from "next/navigation";

import FormulaireCopie, {
  type SujetChoisissable,
} from "@/components/FormulaireCopie";
import { IconeFleche } from "@/components/icones";
import { cleCorrecteurPresente } from "@/lib/correcteur";
import { creerClientServeur } from "@/lib/supabase/server";
import { recupererQuotaRestant } from "@/lib/supabase/tableauDeBord";

/** Ligne de `sujets` avec l'œuvre imbriquée (relation directe
 * sujets.oeuvre_id -> oeuvres.id). */
interface LigneSujet {
  id: string;
  titre: string;
  type: string;
  consigne: string;
  oeuvres: { titre_fr: string; auteur: string | null } | null;
}

/**
 * /redaction/nouvelle — le « Correcteur IA ».
 *
 * L'élève choisit un des sujets du programme, photographie sa copie
 * (le modèle la lit, l'élève vérifie la lecture) ou écrit/colle sa
 * rédaction, et reçoit une correction : une note sur 20 détaillée en
 * forme et fond, la liste des erreurs avec leur explication, ce qu'il a
 * réussi et ce qu'il doit travailler.
 *
 * La page n'affiche que ce qui marche vraiment : sans clé d'API
 * (`ANTHROPIC_API_KEY` dans `.env.local`), elle le dit et n'offre pas
 * un formulaire qui échouerait à l'envoi.
 */
export default async function PageNouvelleRedaction() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const [{ data: lignes }, quotaRestant, { data: derniere }] = await Promise.all([
    supabase
      .from("sujets")
      .select("id, titre, type, consigne, oeuvres(titre_fr, auteur)")
      .order("type")
      .returns<LigneSujet[]>(),
    recupererQuotaRestant(user.id),
    supabase
      .from("copies")
      .select("note_total")
      .eq("user_id", user.id)
      .not("note_total", "is", null)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
  ]);
  const derniereNote = derniere?.note_total == null ? null : Number(derniere.note_total);

  const sujets: SujetChoisissable[] = (lignes ?? []).map((s) => ({
    id: s.id,
    titre: s.titre,
    type: s.type,
    consigne: s.consigne,
    oeuvreTitre: s.oeuvres?.titre_fr ?? null,
    oeuvreAuteur: s.oeuvres?.auteur ?? null,
  }));
  const correcteurPret = cleCorrecteurPresente();

  return (
    <main className="flex flex-col">
      {/* `pt-16` sous 1280 px : place pour le bouton du menu, en haut à
       * gauche (la page n'est vue que par un élève connecté). */}
      <div className="flex w-full flex-col gap-6 px-6 pt-16 pb-10 sm:px-9 lg:px-16 xl:px-24 xl:pt-9 2xl:px-40 sm:pb-16">
        <Link
          href="/tableau-de-bord"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Retour au tableau de bord
        </Link>

        {/* En-tête d'après la maquette de l'utilisateur ("change le design
         * en comme ça"). L'anneau montre la dernière note de l'élève
         * ("pour la note fait votre dernière note") : celle de sa
         * dernière copie corrigée, lue en base, et non le "14 / 20"
         * d'exemple de la maquette. Sans copie, il le dit. */}
        <section
          className="relative flex flex-col gap-6 overflow-hidden rounded-[28px] border border-border p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-10"
          style={{
            background:
              "linear-gradient(115deg, var(--color-primary-tint) 0%, var(--color-surface) 60%, color-mix(in srgb, #f472b6 9%, var(--color-surface)) 100%)",
          }}
        >
          <span aria-hidden="true" className="pointer-events-none absolute -top-20 right-1/3 size-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative">
            <p className="flex items-center gap-2.5 text-sm font-bold text-primary">
              Production écrite
              <span className="rounded-full border border-primary/20 bg-surface px-2.5 py-0.5 text-xs">Bêta</span>
            </p>
            <h1 className="mt-3 font-titre text-[34px] leading-tight font-bold text-ink sm:text-5xl">
              Correcteur <span className="text-primary">IA</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Envoie ta copie en photo ou en texte : une note sur 20, tes erreurs expliquées et quoi retravailler.
            </p>
          </div>
          <AnneauNote note={derniereNote} />
        </section>

        {!correcteurPret && (
          <p className="rounded-[14px] border border-dashed border-border-strong bg-surface p-5 text-sm text-muted-foreground">
            Le correcteur n&apos;est pas encore relié à un modèle : la clé{" "}
            <code className="rounded bg-surface-muted px-1.5 py-0.5 text-[13px]">ANTHROPIC_API_KEY</code> manque dans
            les variables d&apos;environnement du serveur. Ajoute-la et relance le serveur pour activer la correction.
          </p>
        )}

        {sujets.length === 0 ? (
          <p className="rounded-[14px] border border-dashed border-border-strong bg-surface p-5 text-sm text-muted-foreground">
            Aucun sujet n&apos;est encore enregistré : il en faut un pour corriger une copie, puisque la correction juge
            d&apos;abord si tu réponds à la consigne.
          </p>
        ) : (
          <FormulaireCopie sujets={sujets} quotaRestant={quotaRestant} correcteurPret={correcteurPret} />
        )}

        <p className="text-xs leading-relaxed text-subtle-foreground">
          La correction est faite par un modèle de langage. Elle t&apos;aide à progresser, mais elle n&apos;est pas la
          note de ton professeur : garde ton esprit critique sur ce qu&apos;elle te dit.
        </p>
      </div>
    </main>
  );
}

/** Anneau de l'en-tête : la dernière note de l'élève sur 20, ou un état
 * vide honnête s'il n'a encore envoyé aucune copie. */
function AnneauNote({ note }: { note: number | null }) {
  const rayon = 52;
  const tour = 2 * Math.PI * rayon;
  const part = note === null ? 0 : Math.min(1, Math.max(0, note / 20));
  return (
    <figure className="relative flex shrink-0 flex-col items-center gap-2 self-center">
      <div className="relative size-[124px] rounded-full sm:size-[150px] bg-surface shadow-[0_18px_40px_-20px_rgba(20,40,120,0.45)]">
        <svg viewBox="0 0 130 130" className="absolute inset-0 size-full -rotate-90" aria-hidden="true">
          <circle cx="65" cy="65" r={rayon} fill="none" stroke="var(--color-surface-muted)" strokeWidth="8" />
          {note !== null && (
            <circle
              cx="65"
              cy="65"
              r={rayon}
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${tour * part} ${tour}`}
            />
          )}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {note === null ? (
            <span className="px-6 text-xs leading-snug text-muted-foreground">Pas encore de note</span>
          ) : (
            <>
              <span className="font-serif text-[34px] leading-none sm:text-[40px] font-bold text-ink tabular-nums">
                {String(note).replace(".", ",")}
              </span>
              <span className="text-sm text-muted-foreground">/ 20</span>
            </>
          )}
        </div>
      </div>
      <figcaption className="text-xs font-bold text-muted-foreground">Ta dernière note</figcaption>
    </figure>
  );
}
