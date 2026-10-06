import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { IconeCoche, IconeFleche, IconePlume } from "@/components/icones";
import type { ErreurCopie } from "@/lib/correcteur";
import { creerClientServeur } from "@/lib/supabase/server";

interface PagePropsCorrection {
  params: Promise<{ id: string }>;
}

/** Les champs `jsonb` reviennent en `unknown[]` : on les retamise ici
 * plutôt que de faire confiance à leur forme. */
function listeDeTextes(valeur: unknown): string[] {
  if (!Array.isArray(valeur)) return [];
  return valeur.filter((v): v is string => typeof v === "string");
}

function listeDErreurs(valeur: unknown): ErreurCopie[] {
  if (!Array.isArray(valeur)) return [];
  return valeur.flatMap((brut) => {
    if (typeof brut !== "object" || brut === null) return [];
    const e = brut as Record<string, unknown>;
    if (typeof e.extrait !== "string") return [];
    return [
      {
        type: typeof e.type === "string" ? e.type : "autre",
        extrait: e.extrait,
        correction: typeof e.correction === "string" ? e.correction : "",
        explication: typeof e.explication === "string" ? e.explication : "",
      },
    ];
  });
}

function Note({
  valeur,
  sur,
  libelle,
  principale = false,
}: {
  valeur: number | null;
  sur: number;
  libelle: string;
  principale?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-[16px] border border-border bg-surface px-5 py-4 ${principale ? "sm:px-7" : ""}`}
    >
      <span className="text-xs font-semibold text-muted-foreground">
        {libelle}
      </span>
      <span
        className={`font-serif font-bold text-ink ${principale ? "text-[40px] leading-none" : "text-2xl"}`}
      >
        {valeur ?? "—"}
        <span className="text-base font-semibold text-muted-foreground">
          /{sur}
        </span>
      </span>
    </div>
  );
}

/**
 * /redaction/[id] — la correction d'une copie.
 *
 * Lecture passée par le client de session : la policy RLS « un eleve
 * voit ses propres copies » suffit à garantir qu'on ne lit pas la copie
 * d'un autre, sans contrôle à réécrire ici.
 */
export default async function PageCorrection({
  params,
}: PagePropsCorrection) {
  const { id } = await params;
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: copie } = await supabase
    .from("copies")
    .select(
      "id, transcription, note_forme, note_fond, note_total, erreurs, points_forts, axes, commentaire, created_at, sujets(titre, consigne, type)",
    )
    .eq("id", id)
    .maybeSingle<{
      id: string;
      transcription: string | null;
      note_forme: number | null;
      note_fond: number | null;
      note_total: number | null;
      erreurs: unknown;
      points_forts: unknown;
      axes: unknown;
      commentaire: string | null;
      created_at: string;
      sujets: { titre: string; consigne: string; type: string } | null;
    }>();

  if (!copie) notFound();

  const erreurs = listeDErreurs(copie.erreurs);
  const pointsForts = listeDeTextes(copie.points_forts);
  const axes = listeDeTextes(copie.axes);

  return (
    <main className="flex flex-col">
      <div className="flex w-full max-w-[900px] flex-col gap-6 px-6 pt-6 pb-10 sm:px-9 sm:pt-9 sm:pb-16">
        <Link
          href="/redaction/nouvelle"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Corriger une autre copie
        </Link>

        <div>
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Correction · {copie.sujets?.type ?? "rédaction"}
          </p>
          <h1 className="mt-1 font-titre text-2xl font-bold text-ink sm:text-3xl">
            {copie.sujets?.titre ?? "Ta rédaction"}
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-[1.4fr_1fr_1fr]">
          <Note
            valeur={copie.note_total}
            sur={20}
            libelle="Note globale"
            principale
          />
          <Note valeur={copie.note_forme} sur={10} libelle="Forme" />
          <Note valeur={copie.note_fond} sur={10} libelle="Fond" />
        </div>

        {copie.commentaire && (
          <section className="flex gap-4 rounded-[18px] border border-border bg-surface p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-primary-tint text-primary">
              <IconePlume className="size-5" />
            </span>
            <div>
              <h2 className="font-serif text-lg font-bold text-ink">
                Appréciation
              </h2>
              <p className="mt-1.5 font-lecture text-[15px] leading-relaxed text-foreground">
                {copie.commentaire}
              </p>
            </div>
          </section>
        )}

        {(pointsForts.length > 0 || axes.length > 0) && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pointsForts.length > 0 && (
              <section className="flex flex-col gap-3 rounded-[18px] border border-border bg-surface p-5">
                <h2 className="font-serif text-lg font-bold text-ink">
                  Ce que tu as réussi
                </h2>
                <ul className="flex flex-col gap-2">
                  {pointsForts.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-0.5 text-validation">
                        <IconeCoche className="size-4" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {axes.length > 0 && (
              <section className="flex flex-col gap-3 rounded-[18px] border border-border bg-surface p-5">
                <h2 className="font-serif text-lg font-bold text-ink">
                  À travailler
                </h2>
                <ul className="flex flex-col gap-2">
                  {axes.map((axe) => (
                    <li key={axe} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] size-1.5 shrink-0 rounded-full bg-primary"
                      />
                      <span className="text-sm leading-relaxed text-foreground">
                        {axe}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-lg font-bold text-ink">
            {erreurs.length > 0
              ? `Tes erreurs (${erreurs.length})`
              : "Tes erreurs"}
          </h2>
          {erreurs.length === 0 ? (
            <p className="rounded-[14px] border border-dashed border-border-strong bg-surface p-5 text-sm text-muted-foreground">
              Aucune erreur relevée sur cette copie.
            </p>
          ) : (
            <ul className="flex flex-col gap-3">
              {erreurs.map((erreur, index) => (
                <li
                  key={`${erreur.extrait}-${index}`}
                  className="flex flex-col gap-2 rounded-[16px] border border-border bg-surface p-4 sm:p-5"
                >
                  <span className="w-fit rounded-full bg-surface-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                    {erreur.type}
                  </span>
                  <p className="font-lecture text-[15px] leading-relaxed">
                    <span className="text-erreur line-through decoration-erreur/40">
                      {erreur.extrait}
                    </span>
                    {erreur.correction && (
                      <>
                        {" → "}
                        <span className="font-semibold text-validation">
                          {erreur.correction}
                        </span>
                      </>
                    )}
                  </p>
                  {erreur.explication && (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {erreur.explication}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>

        {copie.transcription && (
          <details className="rounded-[18px] border border-border bg-surface p-5">
            <summary className="cursor-pointer text-sm font-semibold text-ink">
              Relire ma copie
            </summary>
            <p className="mt-3 font-lecture text-[15px] leading-relaxed whitespace-pre-wrap text-foreground">
              {copie.transcription}
            </p>
          </details>
        )}
      </div>
    </main>
  );
}
