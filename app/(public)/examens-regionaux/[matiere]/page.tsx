import Link from "next/link";
import { notFound } from "next/navigation";

import { IconeFleche } from "@/components/icones";
import ListeAnnales from "@/components/ListeAnnales";
import { accentMatiere } from "@/lib/palette-matieres";
import { recupererAnnalesParMatiere } from "@/lib/supabase/annales";

interface PagePropsAnnalesMatiere {
  params: Promise<{ matiere: string }>;
}

const TITRES: Record<string, string> = {
  francais: "Français",
  arabe: "Arabe",
  "histoire-geo": "Histoire-Géographie",
  "education-islamique": "Éducation islamique",
};

/** "2 h", "1 h 30" ou "45 min" — la durée la plus fréquente parmi les
 * sujets, pas une valeur écrite en dur : elle diffère d'une matière à
 * l'autre et d'une année à l'autre. */
function dureeDominante(durees: (number | null)[]): string | null {
  const presentes = durees.filter((d): d is number => typeof d === "number");
  if (presentes.length === 0) return null;

  const comptes = new Map<number, number>();
  for (const d of presentes) comptes.set(d, (comptes.get(d) ?? 0) + 1);
  const [minutes] = [...comptes.entries()].sort((a, b) => b[1] - a[1])[0];

  const heures = Math.floor(minutes / 60);
  const reste = minutes % 60;
  if (heures === 0) return `${reste} min`;
  return reste === 0 ? `${heures} h` : `${heures} h ${reste}`;
}

/**
 * /examens-regionaux/[matiere] — les sujets d'examen d'une matière,
 * d'après la maquette fournie par l'utilisateur : bandeau sombre avec
 * les décomptes, barre de filtres, puis une carte par sujet.
 *
 * Les trois chiffres du bandeau sont comptés sur les sujets réellement
 * en base, jamais écrits en dur : tant qu'aucun sujet n'est saisi, la
 * page le dit au lieu d'afficher un bandeau qui annoncerait des
 * épreuves inexistantes.
 */
export default async function PageAnnalesMatiere({
  params,
}: PagePropsAnnalesMatiere) {
  const { matiere } = await params;
  const titre = TITRES[matiere];
  if (!titre) notFound();

  const annales = await recupererAnnalesParMatiere(matiere);
  const accent = accentMatiere(matiere);
  const corriges = annales.filter((a) => a.aCorrige).length;
  const duree = dureeDominante(annales.map((a) => a.duree_minutes));

  const chiffres = [
    { valeur: annales.length, libelle: annales.length > 1 ? "sujets" : "sujet" },
    { valeur: corriges, libelle: corriges > 1 ? "corrigés" : "corrigé" },
    ...(duree ? [{ valeur: duree, libelle: "par épreuve" }] : []),
  ];

  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-6 px-6 pt-6 pb-10 sm:px-9 sm:pt-9 sm:pb-16">
        <Link
          href="/examens-regionaux"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Toutes les matières
        </Link>

        <section className="flex flex-col gap-5 rounded-[22px] bg-[#10172c] p-6 text-white sm:p-9">
          <div className="flex flex-col gap-2">
            <span style={{ color: accent }} className="text-sm font-semibold">
              1<sup>re</sup> année bac · {titre}
            </span>
            <h1 className="font-serif text-3xl leading-tight font-bold sm:text-[38px]">
              Examens régionaux
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-white/70">
              Les vrais sujets des années précédentes, avec corrigés et mode
              entraînement chronométré.
            </p>
          </div>

          {annales.length > 0 && (
            <dl className="flex flex-wrap gap-8">
              {chiffres.map((chiffre) => (
                <div key={chiffre.libelle} className="flex flex-col">
                  <dt className="order-2 text-[13px] text-white/60">
                    {chiffre.libelle}
                  </dt>
                  <dd className="order-1 font-serif text-[28px] leading-none font-bold">
                    {chiffre.valeur}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </section>

        {annales.length === 0 ? (
          <p className="rounded-[18px] border border-dashed border-border-strong bg-surface p-12 text-center text-muted-foreground">
            Aucun sujet d&apos;examen n&apos;est encore enregistré pour cette
            matière.
          </p>
        ) : (
          <ListeAnnales
            annales={annales}
            matiereSlug={matiere}
            accent={accent}
          />
        )}
      </div>
    </main>
  );
}
