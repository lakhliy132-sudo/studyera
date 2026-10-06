import Link from "next/link";
import { notFound } from "next/navigation";

import ChronometreEpreuve from "@/components/ChronometreEpreuve";
import ContenuMarkdown from "@/components/ContenuMarkdown";
import CorrectionRepliable from "@/components/CorrectionRepliable";
import EpreuveInteractive from "@/components/EpreuveInteractive";
import { IconeFleche } from "@/components/icones";
import { lireEpreuve } from "@/lib/annales-questions";
import { recupererAnnaleParId } from "@/lib/supabase/annales";

interface PagePropsAnnale {
  params: Promise<{ matiere: string; id: string }>;
}

const TITRES: Record<string, string> = {
  francais: "Français",
  arabe: "Arabe",
  "histoire-geo": "Histoire-Géographie",
  "education-islamique": "Éducation islamique",
};

function dureeLisible(minutes: number): string {
  const heures = Math.floor(minutes / 60);
  const reste = minutes % 60;
  if (heures === 0) return `${reste} min`;
  return reste === 0 ? `${heures} h` : `${heures} h ${reste}`;
}

/** Les quatre repères du bandeau. Chaque case ne s'affiche que si sa
 * valeur est en base : une ligne « Coefficient — » ne renseignerait
 * personne, et un coefficient inventé tromperait sur le barème. */
function Repere({
  libelle,
  valeur,
}: {
  libelle: string;
  valeur: string | null;
}) {
  if (!valeur) return null;
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-[11px] tracking-wide text-white/50 uppercase">
        {libelle}
      </dt>
      <dd className="text-sm font-semibold text-white">{valeur}</dd>
    </div>
  );
}

/**
 * /examens-regionaux/[matiere]/[id] — un sujet d'examen régional,
 * d'après la maquette fournie par l'utilisateur : bandeau sombre avec
 * le chronomètre, les repères de l'épreuve, puis l'épreuve elle-même
 * en trois onglets (s'entraîner, sujet original, corrigé).
 *
 * Un sujet dont les questions n'ont pas été structurées (colonne
 * `questions` vide) retombe sur l'affichage simple : l'énoncé en
 * Markdown et le corrigé replié. Les deux formes coexistent, pour
 * qu'un sujet puisse être mis en ligne avant d'être découpé en
 * questions.
 */
export default async function PageAnnale({ params }: PagePropsAnnale) {
  const { matiere, id } = await params;
  const annale = await recupererAnnaleParId(id);
  if (!annale || annale.matiere !== matiere) notFound();

  const epreuve = lireEpreuve(annale.questions);
  const titreMatiere = TITRES[matiere] ?? matiere;

  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-5 px-6 pt-6 pb-10 sm:px-9 sm:pt-9 sm:pb-16">
        <Link
          href={`/examens-regionaux/${matiere}`}
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Tous les examens
        </Link>

        <section className="flex flex-col gap-5 rounded-[18px] bg-[#10172c] p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[13px] text-white/60">
                Examen régional, session {annale.session}
              </p>
              <h1 className="font-titre text-2xl font-bold text-white sm:text-[28px]">
                {titreMatiere} {annale.annee}
              </h1>
            </div>
            {annale.duree_minutes && (
              <ChronometreEpreuve dureeMinutes={annale.duree_minutes} />
            )}
          </div>

          <dl className="flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-4">
            <Repere libelle="Œuvre" valeur={annale.oeuvre} />
            <Repere libelle="Filière" valeur={annale.filiere_libelle} />
            <Repere
              libelle="Durée"
              valeur={
                annale.duree_minutes ? dureeLisible(annale.duree_minutes) : null
              }
            />
            <Repere
              libelle="Coefficient"
              valeur={
                annale.coefficient !== null ? String(annale.coefficient) : null
              }
            />
          </dl>
        </section>

        {epreuve ? (
          <EpreuveInteractive
            epreuve={epreuve}
            enonceMdx={annale.enonce_mdx}
            corrigeMdx={annale.corrige_mdx}
          />
        ) : (
          <>
            <article className="rounded-[22px] border border-border bg-feuille p-5 shadow-sm sm:p-9">
              <ContenuMarkdown texte={annale.enonce_mdx} grandeTaille />
            </article>
            {annale.corrige_mdx ? (
              <CorrectionRepliable contenu={annale.corrige_mdx} grandeTaille />
            ) : (
              <p className="rounded-[18px] border border-dashed border-border-strong bg-surface p-5 text-sm text-muted-foreground">
                Le corrigé de ce sujet n&apos;est pas encore disponible.
              </p>
            )}
          </>
        )}
      </div>
    </main>
  );
}
