import Link from "next/link";

import {
  IconeDocument,
  IconeEtoile,
  IconeFleche,
  IconeHorloge,
  IconeTexte,
} from "@/components/icones";
import type { Sujet } from "@/types/base-de-donnees";

interface OngletSujetsProps {
  sujets: Sujet[];
}

/** Libellé lisible du badge de type d'un sujet. `type` est un texte
 * libre en base (saisi via l'import Excel) : on ne connaît que deux
 * valeurs réelles aujourd'hui ("analyse" / "argumentation"), tout le
 * reste est affiché "Analyse" par défaut. */
function libelleType(type: string | null): string {
  return type === "argumentation" ? "Argumentation" : "Analyse";
}

/**
 * Contenu de l'onglet "Sujets d'analyse" de /oeuvres/[slug] : liste des
 * sujets d'exercice de l'œuvre, chacun dans une carte à liseré rouge
 * (couleur réservée au correcteur — voir globals.css `--color-erreur`),
 * numéro rond, titre, badge de type, consigne, puis un pied de carte
 * avec les métadonnées (mots, durée, barème) et le bouton d'accès au
 * correcteur.
 *
 * Design repris du fichier de référence fourni par l'utilisateur
 * (rubriques (3).html, section "Sujets liés"). Le bouton pointe vers
 * /redaction/nouvelle, la destination prévue du correcteur (encore une
 * page minimale "Bientôt disponible" — voir ETAT.md).
 */
export default function OngletSujets({ sujets }: OngletSujetsProps) {
  return (
    <section className="rounded-lg border border-border bg-surface p-5 sm:p-9 pb-10 shadow-sm">
      <div className="mb-2 flex items-center justify-center gap-3.5 text-primary">
        <IconeDocument className="size-[30px]" />
        <h2 className="font-serif text-[31px] font-bold tracking-tight text-ink">
          Sujets de l&apos;œuvre
        </h2>
      </div>
      <p className="mb-[30px] text-center text-base text-muted-foreground">
        Entraîne-toi, puis fais corriger ta copie.
      </p>

      {sujets.length === 0 ? (
        <p className="text-center text-muted-foreground">Bientôt disponible.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {sujets.map((sujet, index) => (
            <article
              key={sujet.id}
              className="rounded-md border border-border border-l-4 border-l-erreur bg-surface p-5 sm:p-[26px] pl-[30px] shadow-sm transition-all hover:translate-x-0.5 hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
            >
              <div className="mb-2.5 flex flex-wrap items-center gap-3">
                <span className="flex size-[34px] items-center justify-center rounded-full bg-[#FDF0EF] text-sm font-bold text-erreur">
                  {index + 1}
                </span>
                <h3 className="min-w-[200px] flex-1 font-serif text-xl font-bold text-ink">
                  {sujet.titre}
                </h3>
                <span className="rounded-full bg-primary-tint px-3.5 py-1.5 text-xs font-bold tracking-wide text-primary uppercase">
                  {libelleType(sujet.type)}
                </span>
              </div>

              {sujet.consigne && (
                <p className="mb-[18px] font-lecture text-base leading-[1.8] text-muted-foreground">
                  {sujet.consigne}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-5 border-t border-dashed border-border-strong pt-4">
                <span className="flex items-center gap-2 text-[13.5px] font-medium text-subtle-foreground">
                  <IconeTexte className="size-4" />
                  ≈ 150 mots
                </span>
                <span className="flex items-center gap-2 text-[13.5px] font-medium text-subtle-foreground">
                  <IconeHorloge className="size-4" />
                  25 min
                </span>
                <span className="flex items-center gap-2 text-[13.5px] font-medium text-subtle-foreground">
                  <IconeEtoile className="size-4" />
                  Noté sur 10
                </span>
                <Link
                  href="/redaction/nouvelle"
                  className="ml-auto flex items-center gap-2.5 rounded-[10px] bg-erreur px-6 py-3.5 text-sm font-semibold text-white shadow-[0_2px_10px_rgba(194,55,47,0.22)] transition-all hover:-translate-y-px hover:bg-[#A32C25] hover:shadow-[0_5px_16px_rgba(194,55,47,0.3)]"
                >
                  Rédiger et faire corriger
                  <IconeFleche className="size-[18px]" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
