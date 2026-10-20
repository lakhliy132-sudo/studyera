import Link from "next/link";

import { resumerAnnalesParMatiere } from "@/lib/supabase/annales";

/**
 * /examens-regionaux : une feuille d'examen par matière.
 *
 * Refaite après « j'ai les feuilles d'exam mais le design pas trop, il
 * est trop chargé et pour appuyer sur les trucs c'est pas simple » : on
 * garde l'en-tête de la copie du régional, mais une seule feuille par
 * matière, et toute la feuille est le lien, avec un grand bouton. Les
 * maquettes précédentes (pile de copies, tampon, chiffres, bandeau « le
 * jour J ») ont été écartées pour cette raison.
 *
 * Le nombre de sujets et les années sont comptés en base
 * (resumerAnnalesParMatiere) ; une matière sans sujet garde sa feuille,
 * grisée, avec « ils arrivent bientôt ».
 */

const MATIERES = [
  { slug: "francais", titre: "Français", ar: "اللغة الفرنسية" },
  { slug: "arabe", titre: "Arabe", ar: "اللغة العربية" },
  { slug: "histoire-geo", titre: "Histoire-Géographie", ar: "الاجتماعيات" },
  { slug: "education-islamique", titre: "Éducation islamique", ar: "التربية الإسلامية" },
];

export default async function PageExamensRegionaux() {
  const resumes = await resumerAnnalesParMatiere();

  return (
    <main className="flex w-full flex-col gap-8 px-6 pt-16 pb-20 sm:gap-10 sm:px-9 sm:pt-12 lg:px-16 xl:px-24 2xl:px-40">
      <header className="flex flex-col gap-3">
        <p dir="rtl" lang="ar" className="w-fit font-arabe text-lg font-bold text-primary sm:text-xl">
          الامتحان الجهوي الموحد للبكالوريا
        </p>
        <h1 className="font-affiche text-[40px] leading-[1.05] text-ink sm:text-6xl">Examens régionaux</h1>
        <p className="max-w-[560px] text-base text-muted-foreground sm:text-lg">
          Choisis ta matière, prends un vrai sujet et fais-le dans le temps de l&apos;épreuve.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {MATIERES.map((m) => {
          const r = resumes[m.slug];
          const periode = r ? (r.annees.length > 1 ? `${r.annees[0]} – ${r.annees[r.annees.length - 1]}` : `${r.annees[0]}`) : null;
          const feuille = (
            <>
              <span dir="rtl" lang="ar" className="flex items-center justify-between gap-3 border-b-2 border-ink px-5 py-3 font-arabe text-ink">
                <span className="text-sm font-bold">الامتحان الجهوي الموحد</span>
                <span className="text-sm">
                  <span className="text-muted-foreground">المادة : </span>
                  <span className="font-bold">{m.ar}</span>
                </span>
              </span>
              <span
                className="flex flex-1 flex-col gap-1 px-5 pt-5 pb-4 sm:px-6"
                style={{ backgroundImage: "repeating-linear-gradient(to bottom, transparent 0 31px, var(--color-border) 31px 32px)" }}
              >
                <span className="font-affiche text-[28px] leading-tight text-ink sm:text-[34px]">{m.titre}</span>
                <span className="text-[15px] text-muted-foreground">
                  {r ? `${r.nombre} sujet${r.nombre > 1 ? "s" : ""} · ${periode}` : "Pas encore de sujets : ils arrivent bientôt."}
                </span>
              </span>
              {r && (
                <span className="mx-5 mb-5 flex items-center justify-center gap-2 rounded-[14px] bg-primary py-3.5 text-base font-bold text-primary-foreground transition-transform group-hover:-translate-y-px sm:mx-6">
                  Voir les sujets <span aria-hidden="true">→</span>
                </span>
              )}
            </>
          );
          const classes = "flex h-full flex-col overflow-hidden rounded-[18px] border bg-surface";
          return (
            <li key={m.slug}>
              {r ? (
                <Link
                  href={`/examens-regionaux/${m.slug}`}
                  className={`group ${classes} border-border shadow-[0_18px_40px_-28px_rgba(15,23,42,0.5)] transition-all hover:-translate-y-1 hover:border-primary`}
                >
                  {feuille}
                </Link>
              ) : (
                <div className={`${classes} border-dashed border-border-strong opacity-60`}>{feuille}</div>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
