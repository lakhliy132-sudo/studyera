import Link from "next/link";

import { IconeFleche } from "@/components/icones";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { MODULES_ARABE, prefixeSlugModule } from "@/lib/modules-arabe";
import { leconsDeSection, SECTIONS_ISLAMIQUE } from "@/lib/sections-islamique";
import { recupererCoursParCategorie, recupererOeuvresParFiliere } from "@/lib/supabase/contenu";

/** Dégradé du haut des cartes : la couleur du site assombrie avec une
 * valeur fixe, pour rester foncée (et le texte blanc lisible) en mode
 * sombre comme en clair. */
const DEGRADE =
  "linear-gradient(160deg, color-mix(in srgb, var(--color-primary) 68%, #0a1020) 0%, color-mix(in srgb, var(--color-primary) 46%, #0a1020) 100%)";

/** Motif d'arrière-plan : une étoile à huit branches (deux carrés, dont
 * un tourné de 45°) reliée à ses voisines, en tuile de 72 px. Sert de
 * masque, la couleur vient de la feuille de style. */
const MOTIF_ZELLIGE = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72' fill='none' stroke='black' stroke-width='1.3'><rect x='24' y='24' width='24' height='24'/><rect x='24' y='24' width='24' height='24' transform='rotate(45 36 36)'/><circle cx='36' cy='36' r='5'/><path d='M36 0v19M36 53v19M0 36h19M53 36h19M0 0l11 11M72 0 61 11M0 72l11-11M72 72 61 61'/></svg>",
)}")`;

interface CarteMatierePage {
  href: string;
  titre: string;
  titreArabe: string;
  /** Ce que contient la matière, compté en base ; vide = "Bientôt
   * disponible". */
  contenu: string[];
}

function pluriel(n: number, mot: string) {
  return `${n} ${mot}${n > 1 ? "s" : ""}`;
}

/**
 * /matieres — les quatre matières, y compris le français ("NON FAIS LA
 * DANS LA PARTIE DE MATIERE" : /francais s'ouvre depuis une carte ici).
 *
 * Refaite d'après une seconde maquette de l'utilisateur : titre centré,
 * puis quatre cartes côte à côte, chacune avec un haut foncé portant le
 * nom arabe de la matière en grand, et en bas son nom français, ce
 * qu'elle contient et une flèche. Le nom français est écrit en entier et
 * d'une seule police ("met moi le titre en francais en entier dans le
 * meme font") : "Histoire-Géographie" et non "Histoire-Géo", sans mot en
 * italique.
 *
 * Toutes les cartes suivent la palette, comme sur la maquette : les
 * couleurs propres à chaque matière ne restent que sur la grille de
 * l'accueil.
 *
 * Écarts avec la maquette, faute de donnée (CLAUDE.md) :
 * - pas de pastille "Coef. N" : aucun coefficient n'est connu en base ;
 * - les pieds de carte ("3 œuvres · 12 notions", "4 modules"…) sont
 *   comptés sur la table `cours` et les œuvres, pas recopiés.
 */
export default async function PageMatieres() {
  const [oeuvres, langue, arabe, histoireGeo, islamique] = await Promise.all([
    recupererOeuvresParFiliere(FILIERE_ACTUELLE),
    recupererCoursParCategorie("langue", FILIERE_ACTUELLE),
    recupererCoursParCategorie("arabe", FILIERE_ACTUELLE),
    recupererCoursParCategorie("histoire-geo", FILIERE_ACTUELLE),
    recupererCoursParCategorie("education-islamique", FILIERE_ACTUELLE),
  ]);

  const modulesArabe = MODULES_ARABE.filter((m) => arabe.some((c) => c.slug.startsWith(prefixeSlugModule(m.numero))));
  const sourate = SECTIONS_ISLAMIQUE.find((s) => s.id === "sourate-youssef");
  const avecSourate = sourate && leconsDeSection(islamique, sourate).length > 0;

  const cartes: CarteMatierePage[] = [
    {
      href: "/francais",
      titre: "Le français",
      titreArabe: "الفرنسية",
      contenu: [
        oeuvres.length > 0 ? pluriel(oeuvres.length, "œuvre") : "",
        langue.length > 0 ? pluriel(langue.length, "notion") : "",
      ],
    },
    {
      href: "/arabe",
      titre: "L'arabe",
      titreArabe: "العربية",
      contenu: [
        modulesArabe.length > 0 ? pluriel(modulesArabe.length, "module") : "",
        arabe.length > 0 ? pluriel(arabe.length, "leçon") : "",
      ],
    },
    {
      href: "/histoire-geo",
      titre: "Histoire-Géographie",
      titreArabe: "التاريخ والجغرافيا",
      contenu: [histoireGeo.length > 0 ? pluriel(histoireGeo.length, "leçon") : ""],
    },
    {
      href: "/education-islamique",
      titre: "Éducation islamique",
      titreArabe: "التربية الإسلامية",
      contenu: [avecSourate ? sourate.titre : "", islamique.length > 0 ? pluriel(islamique.length, "leçon") : ""],
    },
  ];

  return (
    <main className="relative flex flex-col overflow-hidden">
      {/* Arrière-plan de la page ("fais un arrière-plan") : un dégradé
       * doux en haut, un motif d'étoiles à huit branches façon zellige
       * qui s'efface vers le bas, et deux halos. Le motif est un masque
       * rempli avec la couleur du site : il suit la palette et le mode
       * sombre, sans couleur en dur. Le tout s'efface en bas, sinon les
       * halos s'arrêtaient net au-dessus du pied de page. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 65% at 50% 0%, var(--color-primary-tint) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundColor: "var(--color-primary)",
            maskImage: `${MOTIF_ZELLIGE}, linear-gradient(to bottom, black 0%, black 35%, transparent 85%)`,
            maskSize: "72px 72px, 100% 100%",
            maskRepeat: "repeat, no-repeat",
            maskComposite: "intersect",
            WebkitMaskImage: `${MOTIF_ZELLIGE}, linear-gradient(to bottom, black 0%, black 35%, transparent 85%)`,
            WebkitMaskSize: "72px 72px, 100% 100%",
            WebkitMaskRepeat: "repeat, no-repeat",
            WebkitMaskComposite: "source-in",
          }}
        />
        <span className="absolute -top-40 left-1/2 size-[560px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <span className="absolute top-1/2 -right-40 size-[420px] rounded-full bg-[#f472b6]/10 blur-3xl" />
        <span className="absolute -bottom-40 -left-32 size-[420px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="flex w-full flex-col gap-8 px-6 pt-10 pb-12 sm:gap-12 sm:px-9 lg:px-16 xl:px-24 2xl:px-40 sm:pt-16 sm:pb-20">
        <header className="flex flex-col items-center text-center">
          <p className="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase sm:text-[13px]">
            1ʳᵉ année bac · Examen régional
          </p>
          <h1 className="mt-3 font-titre text-[38px] leading-[1.05] font-bold text-ink sm:text-5xl lg:text-[64px]">
            Les <span className="text-primary italic">matières</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore toutes les matières de ton parcours et progresse à ton rythme.
          </p>
        </header>

        {/* Plages bornées (`sm:max-[1399px]:`) : une variante arbitraire
         * `min-[1400px]:` est placée avant `sm:` dans la CSS générée, et
         * `sm:grid-cols-2` l'emportait, d'où deux colonnes à 1440 px. */}
        <ul className="grid grid-cols-1 gap-5 sm:gap-6 sm:max-[1399px]:grid-cols-2 min-[1400px]:grid-cols-4">
          {cartes.map((carte) => {
            const contenu = carte.contenu.filter(Boolean);
            return (
              <li key={carte.href}>
                <Link
                  href={carte.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border bg-surface shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className="relative flex h-[170px] items-center justify-center overflow-hidden px-5 sm:h-[230px]"
                    style={{ background: DEGRADE }}
                  >
                    {/* Halo et cercle décoratifs, pour que le haut ne soit
                        pas un aplat. */}
                    <span aria-hidden="true" className="pointer-events-none absolute -top-16 -left-10 size-48 rounded-full bg-white/10 blur-2xl" />
                    <span aria-hidden="true" className="pointer-events-none absolute -right-12 -bottom-16 size-44 rounded-full border-[18px] border-white/[0.06]" />
                    <p
                      dir="rtl"
                      lang="ar"
                      className="relative text-center font-arabe text-[40px] leading-tight font-bold text-white transition-transform duration-300 group-hover:scale-105 sm:max-[1399px]:text-[42px] min-[1400px]:max-[1535px]:text-[34px] 2xl:text-[38px]"
                    >
                      {carte.titreArabe}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h2 className="font-serif text-2xl leading-tight font-bold text-ink sm:max-[1399px]:text-[26px] min-[1400px]:max-[1535px]:text-[21px] 2xl:text-[22px]">{carte.titre}</h2>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                      <span className="text-sm text-muted-foreground sm:text-[15px]">
                        {contenu.length > 0 ? contenu.join(" · ") : "Bientôt disponible"}
                      </span>
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-ink transition-colors group-hover:border-transparent group-hover:bg-primary group-hover:text-white">
                        <IconeFleche className="size-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
