import Link from "next/link";

import EnTeteMatiere from "@/components/EnTeteMatiere";
import { IconeEclair, IconeFleche, IconeLivre, IconePlume, IconeTexte } from "@/components/icones";
import { cleCorrecteurPresente } from "@/lib/correcteur";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { compterSujets, recupererCoursParCategorie, recupererOeuvresParFiliere } from "@/lib/supabase/contenu";
import { compterLusParOeuvre } from "@/lib/supabase/progression";
import { creerClientServeur } from "@/lib/supabase/server";

/** Fond sombre de la carte du correcteur et des livres : la couleur du
 * site assombrie avec une valeur fixe, pour rester foncée en mode
 * sombre. Trois nuances pour distinguer les trois livres. */
const FONCE = "color-mix(in srgb, var(--color-primary) 55%, #0a1020)";
const NUANCES_LIVRES = [
  "color-mix(in srgb, var(--color-primary) 50%, #0a1020)",
  "color-mix(in srgb, var(--color-primary) 60%, #0a1020)",
  "color-mix(in srgb, var(--color-primary) 70%, #0a1020)",
];
const JAUNE = "#f7c948";

/**
 * /francais — page de la matière, regroupant ses quatre parties
 * (Œuvres, Cours de langue, Production écrite, Correcteur IA). Accessible
 * depuis /matieres, au même niveau que les autres matières ("NON FAIS LA
 * DANS LA PARTIE DE MATIERE").
 *
 * Refaite d'après une maquette de l'utilisateur ("fait moi ca a la place
 * de francais") : en-tête à gauche avec trois chiffres à droite, la
 * grande carte sombre du correcteur, la carte des œuvres avec leurs
 * trois livres, puis langue et production écrite.
 *
 * Tout est compté sur la base : nombre d'œuvres, de leçons de langue,
 * de sujets d'analyse ; noms des leçons et des parties ; progression de
 * l'élève dans chaque œuvre (seulement s'il est connecté). Écarts avec la
 * maquette, faute de donnée :
 * - pas de coefficient dans le sur-titre ;
 * - la copie du correcteur n'affiche ni note (« 14/20 ») ni remarque
 *   d'exemple : ce serait une correction inventée ; le dessin garde la
 *   forme d'une copie, sans contenu ;
 * - pas de « en moins d'une minute » : aucune mesure ne l'appuie ;
 * - la production écrite montre ses vraies parties, pas les trois étapes
 *   « Comprendre le sujet / Faire le plan / Rédiger » de la maquette.
 */
export default async function PageFrancais() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [oeuvres, leconsLangue, partiesProduction, nombreSujets, lusParOeuvre] = await Promise.all([
    recupererOeuvresParFiliere(FILIERE_ACTUELLE),
    recupererCoursParCategorie("langue", FILIERE_ACTUELLE),
    recupererCoursParCategorie("production-ecrite", FILIERE_ACTUELLE),
    compterSujets(),
    compterLusParOeuvre(user?.id ?? null),
  ]);
  const correcteurPret = cleCorrecteurPresente();

  const chiffres = [
    { valeur: oeuvres.length, libelle: oeuvres.length > 1 ? "œuvres" : "œuvre" },
    { valeur: leconsLangue.length, libelle: "notions de langue" },
    { valeur: nombreSujets, libelle: "sujets d'analyse" },
  ].filter((c) => c.valeur > 0);

  const notionsVisibles = leconsLangue.slice(0, 3);
  const notionsRestantes = leconsLangue.length - notionsVisibles.length;

  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-8 px-6 pt-6 pb-10 sm:gap-10 sm:px-9 sm:pt-9 sm:pb-16">
        <EnTeteMatiere
          retour={{ href: "/matieres", libelle: "Retour aux matières" }}
          surTitre="1ʳᵉ année bac · Examen régional"
          titreAvant="Le "
          titreAccent="français"
          description="Œuvres au programme, cours de langue, production écrite et correction IA : tout pour arriver serein le jour J."
          aside={
            chiffres.length > 0 && (
              <dl className="flex divide-x divide-border overflow-hidden rounded-[22px] border border-border bg-surface shadow-sm">
                {chiffres.map(({ valeur, libelle }) => (
                  <div key={libelle} className="px-5 py-4 sm:px-7 sm:py-5">
                    <dt className="sr-only">{libelle}</dt>
                    <dd>
                      <span className="block font-serif text-3xl font-bold text-ink sm:text-[34px]">{valeur}</span>
                      <span className="block text-sm text-muted-foreground">{libelle}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            )
          }
        />

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)]">
          {/* Correcteur IA */}
          <Link
            href="/redaction/nouvelle"
            className="group relative flex flex-col overflow-hidden rounded-[28px] p-7 text-white shadow-[0_20px_50px_-20px_rgba(10,16,32,0.55)] transition-transform hover:-translate-y-1 sm:p-9 lg:row-span-2"
            style={{ background: FONCE }}
          >
            <div className="flex items-start justify-between">
              <span className="flex size-14 items-center justify-center rounded-[16px] bg-white/10">
                <IconeEclair className="size-6" />
              </span>
              <span className="rounded-full px-3.5 py-1 text-sm font-bold text-[#1d2340]" style={{ background: JAUNE }}>
                {correcteurPret ? "Nouveau" : "Bientôt disponible"}
              </span>
            </div>
            <h2 className="mt-8 font-serif text-[34px] leading-tight font-bold sm:text-[40px]">Correcteur IA</h2>
            <p className="mt-3 text-lg leading-relaxed text-white/80">
              Envoie ta rédaction, reçois une note sur 20 et des conseils précis pour progresser.
            </p>

            {/* Une copie dessinée, sans note ni remarque inventée. */}
            <div aria-hidden="true" className="relative mt-10 mb-8 rotate-[-1.5deg] rounded-[20px] bg-white p-6 shadow-xl">
              <span
                className="absolute -top-7 -right-4 flex size-[88px] flex-col items-center justify-center rounded-full font-serif text-[#1d2340] shadow-lg"
                style={{ background: JAUNE }}
              >
                <span className="text-sm font-bold">note</span>
                <span className="text-xl font-bold">/ 20</span>
              </span>
              <p className="text-sm text-slate-500">Ta copie</p>
              <div className="mt-4 flex flex-col gap-2.5">
                <span className="h-2.5 w-[92%] rounded-full bg-slate-200" />
                <span className="h-2.5 w-[74%] rounded-full bg-amber-200" />
                <span className="h-2.5 w-[88%] rounded-full bg-slate-200" />
                <span className="h-2.5 w-[60%] rounded-full bg-slate-200" />
              </div>
              <div className="mt-5 flex flex-col gap-2.5">
                {["Forme sur 10", "Fond sur 10"].map((libelle, i) => (
                  <span key={libelle} className="flex items-center gap-3 rounded-[12px] bg-slate-100 px-3.5 py-2.5 text-sm text-slate-700">
                    <span className="flex size-6 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: FONCE }}>
                      {i + 1}
                    </span>
                    {libelle}
                  </span>
                ))}
              </div>
            </div>

            <span className="mt-auto flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#1d2340] transition-transform group-hover:translate-x-0.5">
              Corriger ma rédaction
              <IconeFleche className="size-4" />
            </span>
          </Link>

          {/* Œuvres au programme */}
          <Link
            href="/oeuvres"
            className="group flex flex-col gap-6 rounded-[28px] border border-border bg-surface p-7 shadow-sm transition-transform hover:-translate-y-1 sm:p-9 xl:flex-row xl:items-center"
          >
            <div className="flex flex-1 flex-col">
              <span className="flex size-14 items-center justify-center rounded-[16px] bg-primary-tint text-primary">
                <IconeLivre className="size-6" />
              </span>
              <h2 className="mt-6 font-serif text-[28px] leading-tight font-bold text-ink sm:text-[32px]">
                <span className="text-primary italic">Œuvres</span> au programme
              </h2>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                Résumés, personnages, lexique et sujets pour chaque œuvre.
              </p>
              <span className="mt-6 flex items-center justify-between font-bold text-ink">
                Voir les œuvres
                <span className="flex size-12 items-center justify-center rounded-full text-white" style={{ background: FONCE }}>
                  <IconeFleche className="size-5" />
                </span>
              </span>
            </div>
            {oeuvres.length > 0 && (
              <ul className="flex items-end gap-2.5 sm:gap-4" aria-label="Les œuvres">
                {oeuvres.map((oeuvre, i) => {
                  const lus = lusParOeuvre.get(oeuvre.id) ?? 0;
                  const pourcentage = oeuvre.nombreChapitres > 0 ? Math.round((lus / oeuvre.nombreChapitres) * 100) : 0;
                  return (
                    <li
                      key={oeuvre.id}
                      className="flex h-[200px] min-w-0 flex-1 flex-col rounded-r-[12px] rounded-l-[4px] border-l-[6px] border-black/25 p-3 text-white shadow-lg sm:h-[260px] sm:w-[170px] sm:flex-none sm:p-4"
                      style={{ background: NUANCES_LIVRES[i % NUANCES_LIVRES.length], marginBottom: i * 14 }}
                    >
                      <span className="font-serif text-[15px] leading-snug font-bold break-words sm:text-lg">{oeuvre.titre_fr}</span>
                      {oeuvre.auteur && (
                        <span className="mt-auto text-sm text-white/75">{oeuvre.auteur.split(" ").at(-1)}</span>
                      )}
                      {user && (
                        <span className="mt-2 h-1 overflow-hidden rounded-full bg-white/20" title={`${lus} chapitre${lus > 1 ? "s" : ""} lu${lus > 1 ? "s" : ""}`}>
                          <span className="block h-full rounded-full bg-white" style={{ width: `${pourcentage}%` }} />
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </Link>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            {/* Cours de langue */}
            <Link
              href="/langue"
              className="group flex flex-col rounded-[28px] border border-border bg-surface p-7 shadow-sm transition-transform hover:-translate-y-1 sm:p-9"
            >
              <span className="flex size-14 items-center justify-center rounded-[16px] bg-primary-tint text-primary">
                <IconeTexte className="size-6" />
              </span>
              <h2 className="mt-6 font-serif text-[28px] leading-tight font-bold text-ink">
                Cours de <span className="text-primary italic">langue</span>
              </h2>
              <p className="mt-2 text-base text-muted-foreground">Les notions essentielles pour l&apos;examen.</p>
              {leconsLangue.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {notionsVisibles.map((lecon) => (
                    <li key={lecon.id} className="rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground">
                      {lecon.titre}
                    </li>
                  ))}
                  {notionsRestantes > 0 && (
                    <li className="rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground">+{notionsRestantes}</li>
                  )}
                </ul>
              )}
              <span className="mt-auto flex items-center justify-between pt-7 font-bold text-ink">
                Découvrir
                <span className="flex size-12 items-center justify-center rounded-full text-white" style={{ background: FONCE }}>
                  <IconeFleche className="size-5" />
                </span>
              </span>
            </Link>

            {/* Production écrite */}
            <Link
              href="/production-ecrite"
              className="group flex flex-col rounded-[28px] border border-border bg-surface p-7 shadow-sm transition-transform hover:-translate-y-1 sm:p-9"
            >
              <span className="flex size-14 items-center justify-center rounded-[16px] bg-primary-tint text-primary">
                <IconePlume className="size-6" />
              </span>
              <h2 className="mt-6 font-serif text-[28px] leading-tight font-bold text-ink">
                Production <span className="text-primary italic">écrite</span>
              </h2>
              <p className="mt-2 text-base text-muted-foreground">Méthode, sujets et outils pour réussir tes rédactions.</p>
              {partiesProduction.length > 0 && (
                <ol className="mt-5 grid grid-cols-2 gap-2">
                  {partiesProduction.map((partie, i) => (
                    <li key={partie.id} className="rounded-[14px] bg-background px-3.5 py-3 text-sm leading-snug text-foreground">
                      <span className="block font-serif text-base font-bold text-ink">{i + 1}</span>
                      {partie.titre}
                    </li>
                  ))}
                </ol>
              )}
              <span className="mt-auto flex items-center justify-between pt-7 font-bold text-ink">
                Découvrir
                <span className="flex size-12 items-center justify-center rounded-full text-white" style={{ background: FONCE }}>
                  <IconeFleche className="size-5" />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
