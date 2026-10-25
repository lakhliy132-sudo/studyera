import Link from "next/link";
import { notFound } from "next/navigation";
import { PageVerrouillee } from "@/components/ContenuVerrouille";
import { annaleGratuite, lireAcces } from "@/lib/acces";
import { noterActivite } from "@/lib/supabase/activite";

import ChronometreEpreuve from "@/components/ChronometreEpreuve";
import ContenuMarkdown from "@/components/ContenuMarkdown";
import CorrectionRepliable from "@/components/CorrectionRepliable";
import EpreuveInteractive from "@/components/EpreuveInteractive";
import FeuilleExamen from "@/components/FeuilleExamen";
import { IconeFleche } from "@/components/icones";
import { lireEpreuve } from "@/lib/annales-questions";
import {
  recupererAnnaleParId,
  recupererSujetsRedaction,
} from "@/lib/supabase/annales";

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
/** Sujets qui ont la nouvelle feuille (FeuilleExamen) : pour l'instant
 * le français 2015, Casablanca-Settat, session normale. */
const SUJETS_FEUILLE = new Set(["4b5f2477-e2d4-4ead-afad-fe78f5bd3cf3"]);

export default async function PageAnnale({ params }: PagePropsAnnale) {
  const { matiere, id } = await params;
  const annale = await recupererAnnaleParId(id);
  if (!annale || annale.matiere !== matiere) notFound();

  // Accès payant (lib/acces.ts) : sans accès complet, seul le sujet le
  // plus récent de la matière s'ouvre.
  const acces = await lireAcces();
  if (!acces.complet) {
    const gratuit = await annaleGratuite(matiere);
    if (gratuit?.id !== annale.id) {
      return (
        <PageVerrouillee
          retour={{ href: `/examens-regionaux/${matiere}`, libelle: "Tous les sujets" }}
          etat={acces}
          ceci="Ce sujet"
          titre={[`Régional ${annale.annee}`, annale.academie, annale.session === "rattrapage" ? "rattrapage" : null].filter(Boolean).join(" · ")}
          gratuit={gratuit ? { href: `/examens-regionaux/${matiere}/${gratuit.id}`, titre: gratuit.titre } : null}
        />
      );
    }
  }

  // Suivi des élèves : sujet ouvert (seulement quand il s'affiche).
  await noterActivite({
    type: "consultation_sujet",
    ressourceId: annale.id,
    ressourceTitre: [`${TITRES[matiere] ?? matiere} · Régional ${annale.annee}`, annale.academie, annale.session === "rattrapage" ? "rattrapage" : null]
      .filter(Boolean)
      .join(" · "),
  });

  const epreuve = lireEpreuve(annale.questions);
  // Le correcteur ne corrige que le français : seules ses productions
  // écrites ont un sujet à présélectionner.
  const sujetsRedaction =
    epreuve && matiere === "francais"
      ? await recupererSujetsRedaction(annale, epreuve.parties)
      : {};
  const titreMatiere = TITRES[matiere] ?? matiere;

  // Nouvelle disposition de la feuille (texte à gauche, questions à
  // droite, barre d'examen en haut), d'abord sur un seul sujet : « pour
  // un premier temps, tu me la fais pour un seul examen de français ».
  if (epreuve && SUJETS_FEUILLE.has(annale.id)) {
    return (
      <main className="flex w-full flex-col px-6 pt-14 pb-16 sm:px-9 lg:px-16 lg:pt-0 xl:px-24 2xl:px-40">
        <FeuilleExamen
          epreuve={epreuve}
          enonceMdx={annale.enonce_mdx}
          corrigeMdx={annale.corrige_mdx}
          sujetsRedaction={sujetsRedaction}
          titre={`${titreMatiere} ${annale.annee}${annale.academie ? ` · ${annale.academie}` : ""}`}
          details={[
            annale.oeuvre,
            annale.session === "rattrapage" ? "session de rattrapage" : "session normale",
            annale.duree_minutes ? dureeLisible(annale.duree_minutes) : null,
            annale.coefficient !== null ? `coefficient ${annale.coefficient}` : null,
          ]
            .filter(Boolean)
            .join(" · ")}
          dureeMinutes={annale.duree_minutes}
          retour={`/examens-regionaux/${matiere}`}
        />
      </main>
    );
  }

  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-5 px-6 pt-6 pb-10 sm:px-9 lg:px-16 xl:px-24 2xl:px-40 sm:pt-9 sm:pb-16">
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
                {annale.academie && ` · ${annale.academie}`}
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
            <Repere libelle="Académie" valeur={annale.academie} />
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
            // Sujets rédigés en arabe (arabe, éducation islamique) : de
            // droite à gauche, police arabe, barème en « ن ».
            arabe={matiere === "arabe" || matiere === "education-islamique"}
            sujetsRedaction={sujetsRedaction}
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
