import Image from "next/image";
import Link from "next/link";

import ChiffresEnTete from "@/components/ChiffresEnTete";
import EnTeteMatiere from "@/components/EnTeteMatiere";
import { IconeEclair, IconeFleche, IconeLivre, IconePlume, IconeTexte } from "@/components/icones";
import { cleCorrecteurPresente } from "@/lib/correcteur";
import { COUVERTURES_OEUVRES } from "@/lib/couvertures";
import { FICHES_LECTURE_PAR_SLUG } from "@/lib/fichesLecture";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { compterSujets, recupererCoursParCategorie, recupererOeuvresParFiliere } from "@/lib/supabase/contenu";
import { compterLusParOeuvre } from "@/lib/supabase/progression";
import { creerClientServeur } from "@/lib/supabase/server";

/** Fond sombre de la carte du correcteur et des livres : la couleur du
 * site assombrie avec une valeur fixe, pour rester foncée en mode
 * sombre. */
const FONCE = "color-mix(in srgb, var(--color-primary) 55%, #0a1020)";
const JAUNE = "#f7c948";

/**
 * /francais — page de la matière, regroupant ses quatre parties
 * (Œuvres, Cours de langue, Production écrite, Correcteur IA). Accessible
 * depuis /matieres, au même niveau que les autres matières ("NON FAIS LA
 * DANS LA PARTIE DE MATIERE").
 *
 * Refaite d'après une maquette de l'utilisateur ("fait moi ca a la place
 * de francais") : en-tête à gauche avec trois chiffres à droite, la
 * grande carte sombre du correcteur, la carte des œuvres, puis langue
 * et production écrite. Seconde maquette ("comme ca c est mieux, sauf
 * que le truc oeuvres programme je veux qu il soit plus attractive
 * aussi") : les œuvres passent en liste, enrichie de leurs couvertures
 * et des photos des auteurs.
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
  ];

  const totalChapitres = oeuvres.reduce((n, o) => n + o.nombreChapitres, 0);
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
          aside={<ChiffresEnTete chiffres={chiffres} />}
        />

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)]">
          {/* Correcteur IA */}
          <Link
            href="/redaction/nouvelle"
            className="group relative flex flex-col overflow-hidden rounded-[28px] p-7 text-white shadow-[0_20px_50px_-20px_rgba(10,16,32,0.55)] transition-transform hover:-translate-y-1 sm:p-9 lg:row-span-2"
            style={{ background: FONCE }}
          >
            {/* Deux arcs décoratifs, comme sur la maquette. */}
            <span aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-28 size-[420px] rounded-full border-[48px] border-white/[0.04]" />
            <span aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-24 size-56 rounded-full border-[28px] border-white/[0.05]" />
            <div className="relative flex items-start justify-between">
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

            <span className="relative mt-auto flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#1d2340] transition-transform group-hover:translate-x-0.5">
              Corriger ma rédaction
              <IconeFleche className="size-4" />
            </span>
          </Link>

          {/* Œuvres au programme — "plus attractive" que la maquette :
              chaque œuvre a sa couverture, la photo de son auteur, son
              genre et son année (tirés de sa fiche de lecture), son
              nombre de chapitres et, pour un élève connecté, sa
              progression. Rien n'y est écrit à la main : une œuvre sans
              couverture, sans fiche ou sans photo perd seulement l'élément
              manquant. */}
          <section className="relative flex flex-col gap-6 overflow-hidden rounded-[28px] border border-border bg-surface p-6 shadow-sm sm:p-9 xl:flex-row xl:items-stretch xl:gap-8">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-primary/10 blur-3xl"
            />
            <div className="relative flex flex-col xl:w-[34%] xl:shrink-0">
              <span className="flex size-14 items-center justify-center rounded-[16px] bg-primary-tint text-primary">
                <IconeLivre className="size-6" />
              </span>
              <h2 className="mt-6 font-serif text-[28px] leading-tight font-bold text-ink sm:text-[32px]">
                <span className="text-primary italic">Œuvres</span> au programme
              </h2>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                Résumés, personnages, lexique et sujets pour chaque œuvre.
              </p>
              {totalChapitres > 0 && (
                <p className="mt-4 text-sm font-semibold text-ink">
                  {oeuvres.length} {oeuvres.length > 1 ? "œuvres" : "œuvre"} · {totalChapitres} chapitres à découvrir
                </p>
              )}
              <Link href="/oeuvres" className="group mt-6 flex items-center justify-between font-bold text-ink xl:mt-auto">
                Voir les œuvres
                <span
                  className="flex size-12 items-center justify-center rounded-full text-white transition-transform group-hover:translate-x-1"
                  style={{ background: FONCE }}
                >
                  <IconeFleche className="size-5" />
                </span>
              </Link>
            </div>

            {oeuvres.length > 0 && (
              <ol className="relative flex min-w-0 flex-1 flex-col gap-3" aria-label="Les œuvres">
                {oeuvres.map((oeuvre, i) => {
                  const fiche = FICHES_LECTURE_PAR_SLUG[oeuvre.slug];
                  const couverture = COUVERTURES_OEUVRES[oeuvre.slug];
                  const photo = fiche?.biographieAuteur.photo;
                  const annee = fiche?.identite.datePublication.match(/\d{4}/)?.[0];
                  const genre = fiche?.identite.genre.split(/[ (]/)[0];
                  const details = [oeuvre.auteur, genre, annee].filter(Boolean).join(" · ");
                  const lus = lusParOeuvre.get(oeuvre.id) ?? 0;
                  const pourcentage = oeuvre.nombreChapitres > 0 ? Math.round((lus / oeuvre.nombreChapitres) * 100) : 0;
                  return (
                    <li key={oeuvre.id}>
                      <Link
                        href={`/oeuvres/${oeuvre.slug}`}
                        className="group relative flex items-center gap-4 overflow-hidden rounded-[20px] border border-border bg-background p-3 pe-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg sm:gap-5 sm:p-3.5 sm:pe-5"
                      >
                        {/* Grand numéro en filigrane, comme la maquette. */}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -bottom-3 end-12 hidden font-titre sm:block text-[88px] leading-none font-bold text-primary/[0.06] select-none"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <span
                          className="relative h-[92px] w-[64px] shrink-0 overflow-hidden rounded-[8px] shadow-[0_10px_22px_-10px_rgba(10,16,32,0.6)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-0 sm:h-[104px] sm:w-[72px]"
                          style={{ rotate: `${i % 2 === 0 ? -3 : 3}deg`, background: couverture ? undefined : FONCE }}
                        >
                          {couverture ? (
                            <Image src={couverture} alt={`Couverture de ${oeuvre.titre_fr}`} fill sizes="72px" className="object-cover" />
                          ) : (
                            <IconeLivre className="absolute inset-0 m-auto size-6 text-white" />
                          )}
                        </span>

                        <span className="relative flex min-w-0 flex-1 flex-col">
                          <span className="text-xs font-bold tracking-[0.12em] text-primary uppercase">
                            Œuvre {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="mt-0.5 font-serif text-lg leading-snug font-bold text-ink group-hover:text-primary sm:text-[21px]">
                            {oeuvre.titre_fr}
                          </span>
                          {details && <span className="mt-0.5 text-sm text-muted-foreground sm:truncate">{details}</span>}
                          <span className="mt-2 flex items-center gap-3">
                            {oeuvre.nombreChapitres > 0 && (
                              <span className="shrink-0 rounded-full bg-primary-tint px-2.5 py-0.5 text-xs font-semibold text-primary">
                                {oeuvre.nombreChapitres} chapitres
                              </span>
                            )}
                            {user && oeuvre.nombreChapitres > 0 && (
                              <span className="flex min-w-0 flex-1 items-center gap-2 text-xs text-muted-foreground">
                                <span className="h-1.5 max-w-[140px] flex-1 overflow-hidden rounded-full bg-border">
                                  <span className="block h-full rounded-full bg-primary" style={{ width: `${pourcentage}%` }} />
                                </span>
                                <span className="shrink-0">
                                  {lus}/{oeuvre.nombreChapitres} lus
                                </span>
                              </span>
                            )}
                          </span>
                        </span>

                        {photo && (
                          <span className="relative hidden size-12 shrink-0 overflow-hidden rounded-full ring-[3px] ring-surface shadow-md sm:block">
                            <Image src={photo} alt={`Portrait de ${oeuvre.auteur ?? "l'auteur"}`} fill sizes="48px" className="object-cover object-top" />
                          </span>
                        )}
                        <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors group-hover:border-transparent group-hover:bg-primary group-hover:text-white">
                          <IconeFleche className="size-4" />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            )}
          </section>

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
                    <li className="rounded-full bg-primary-tint px-3.5 py-1.5 text-sm font-bold text-primary">
                      +{notionsRestantes} notion{notionsRestantes > 1 ? "s" : ""}
                    </li>
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
                    <li key={partie.id} className="flex items-baseline gap-2.5 rounded-[14px] bg-background px-3.5 py-3 text-sm leading-snug text-foreground">
                      <span className="font-serif text-base font-bold text-ink">{i + 1}</span>
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
