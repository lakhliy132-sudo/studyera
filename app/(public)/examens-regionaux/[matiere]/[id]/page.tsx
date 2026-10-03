import Link from "next/link";
import { notFound } from "next/navigation";

import ChronometreEpreuve from "@/components/ChronometreEpreuve";
import ContenuMarkdown from "@/components/ContenuMarkdown";
import CorrectionRepliable from "@/components/CorrectionRepliable";
import { IconeFleche } from "@/components/icones";
import { accentMatiere } from "@/lib/palette-matieres";
import { recupererAnnaleParId } from "@/lib/supabase/annales";

interface PagePropsAnnale {
  params: Promise<{ matiere: string; id: string }>;
}

/**
 * /examens-regionaux/[matiere]/[id] — un sujet d'examen régional.
 *
 * L'énoncé est rendu comme un cours (même `ContenuMarkdown`, donc même
 * traitement de l'arabe et des tableaux), le corrigé est replié
 * derrière un bouton — comme pour les exercices des cours, pour que
 * l'élève puisse chercher avant de regarder.
 *
 * Le chronomètre n'apparaît que si la durée officielle de l'épreuve a
 * été saisie : un compte à rebours sur une durée devinée induirait en
 * erreur sur le temps dont on dispose le jour de l'examen.
 */
export default async function PageAnnale({ params }: PagePropsAnnale) {
  const { matiere, id } = await params;
  const annale = await recupererAnnaleParId(id);
  if (!annale || annale.matiere !== matiere) notFound();

  const accent = accentMatiere(matiere);

  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-[900px] flex-col gap-6 px-6 pt-6 pb-10 sm:px-9 sm:pt-9 sm:pb-16">
        <Link
          href={`/examens-regionaux/${matiere}`}
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Tous les sujets
        </Link>

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span
              style={{ backgroundColor: accent }}
              className="rounded-full px-3 py-1 text-xs font-bold text-white"
            >
              Session {annale.session}
            </span>
            {annale.oeuvre && (
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-ink">
                {annale.oeuvre}
              </span>
            )}
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Examen régional {annale.annee}
          </h1>
        </div>

        {annale.duree_minutes && (
          <ChronometreEpreuve dureeMinutes={annale.duree_minutes} />
        )}

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
      </div>
    </main>
  );
}
