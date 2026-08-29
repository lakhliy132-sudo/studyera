import Link from "next/link";

import { IconeCoche, IconeDocument, IconeFleche, IconeIdee, IconeLivreOuvert, IconePlume } from "@/components/icones";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { recupererCoursParCategorie } from "@/lib/supabase/contenu";

interface Sujet {
  numero: number;
  slug: string;
  titre: string;
  description: string;
  Icone: (props: { className?: string }) => React.ReactElement;
}

/**
 * Les parties de /production-ecrite — même principe que `LEÇONS` sur
 * /langue : les 4 pistes déjà évoquées avec l'utilisateur (voir
 * ETAT.md, la question posée avant de commencer), mais une seule a du
 * contenu réel pour l'instant ("La méthodologie de la rédaction",
 * choisie explicitement par l'utilisateur en premier). Les 3 autres
 * restent des cartes non cliquables tant qu'elles n'ont pas de
 * contenu importé — mêmes convention et bandeau "Bientôt disponible"
 * que le reste du site.
 */
const SUJETS: Sujet[] = [
  {
    numero: 1,
    slug: "methodologie-redaction",
    titre: "La méthodologie de la rédaction",
    description: "Comprendre le sujet, choisir son plan, construire une introduction et une conclusion.",
    Icone: IconePlume,
  },
  {
    numero: 2,
    slug: "sujets-redaction",
    titre: "Sujets de rédaction",
    description: "Des sujets classés pour s'entraîner, seul ou avec le Correcteur IA.",
    Icone: IconeIdee,
  },
  {
    numero: 3,
    slug: "modeles-corriges",
    titre: "Modèles de rédactions corrigées",
    description: "Des copies bien construites, annotées, pour voir ce qui est attendu.",
    Icone: IconeDocument,
  },
  {
    numero: 4,
    slug: "grille-auto-evaluation",
    titre: "Grille d'auto-évaluation",
    description: "Les critères de notation d'une rédaction, pour se relire avec les bons repères.",
    Icone: IconeCoche,
  },
];

/**
 * Page publique : /production-ecrite — liste des parties de la
 * rubrique, sous forme de cartes (même structure que /langue, voir ce
 * fichier). Demandé explicitement par l'utilisateur, en revenant sur
 * le choix précédent qui affichait directement le contenu de la
 * méthodologie ici : "fais moi dans la partie de p ecrite case du la
 * methodologie de la redaction" — la méthodologie devient une carte
 * cliquable vers /production-ecrite/methodologie-redaction plutôt que
 * le contenu de cette page.
 */
export default async function PageProductionEcrite() {
  const coursDisponibles = await recupererCoursParCategorie("production-ecrite", FILIERE_ACTUELLE);
  const slugsDisponibles = new Set(coursDisponibles.map((c) => c.slug));

  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-9 px-6 pt-9 pb-16">
        <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-1.5 text-xs font-bold tracking-wide text-white uppercase">
            <IconeLivreOuvert className="size-3.5" />
            Français – 1ère Bac
          </span>
          <h1 className="mt-5 font-serif text-4xl font-bold tracking-tight text-ink">
            Production <span className="text-primary italic">écrite</span>
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Méthode, sujets et outils pour réussir tes rédactions à l&apos;examen.
          </p>
        </section>

        <div className="flex items-center gap-3 border-b border-border pb-3">
          <IconeLivreOuvert className="size-5 text-primary" />
          <h2 className="font-serif text-lg font-bold text-ink">{SUJETS.length} parties pour progresser</h2>
        </div>

        <ul className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[18px]">
          {SUJETS.map((sujet) => {
            const disponible = slugsDisponibles.has(sujet.slug);
            const contenuCarte = (
              <>
                <div className="flex items-center justify-between">
                  <span className="flex size-[52px] items-center justify-center rounded-full bg-primary-tint text-primary">
                    <sujet.Icone className="size-6" />
                  </span>
                  <span className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-bold text-primary-vif">
                    {String(sujet.numero).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-lg leading-snug font-bold text-ink">{sujet.titre}</h3>
                <p className="mt-1.5 font-lecture text-[14.5px] leading-relaxed text-muted-foreground">
                  {sujet.description}
                </p>
                {disponible ? (
                  <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Lire le cours
                    <IconeFleche className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                ) : (
                  <span className="mt-4 inline-flex w-fit rounded-full bg-surface-muted px-2.5 py-1 text-xs font-semibold text-subtle-foreground">
                    Bientôt disponible
                  </span>
                )}
              </>
            );

            return (
              <li key={sujet.slug}>
                {disponible ? (
                  <Link
                    href={`/production-ecrite/${sujet.slug}`}
                    className="group flex h-full flex-col rounded-[20px] border border-border bg-surface p-[26px] shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
                  >
                    {contenuCarte}
                  </Link>
                ) : (
                  <div className="flex h-full flex-col rounded-[20px] border border-border bg-surface p-[26px] opacity-70">
                    {contenuCarte}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
