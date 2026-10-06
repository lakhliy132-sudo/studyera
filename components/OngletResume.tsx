import Link from "next/link";

import { IconeCoche, IconeLivreOuvert } from "@/components/icones";
import { decouperTitreChapitre, libelleUniteChapitre, type LibelleUniteChapitre } from "@/lib/uniteChapitre";
import type { Chapitre } from "@/types/base-de-donnees";

interface OngletResumeProps {
  slug: string;
  chapitres: Chapitre[];
  chapitresLusIds: Set<string>;
  connecte: boolean;
  /** Nombre de questions de quiz par numéro de chapitre. */
  questionsParChapitre: Record<number, number>;
  /** Nombre de personnages présents par numéro de chapitre, quand la
   * liste existe (La Boîte à merveilles, lib/personnagesParChapitre.ts). */
  personnagesParChapitre?: Record<number, number>;
}

/**
 * Onglet "Chapitres" de /oeuvres/[slug], refait d'après une maquette
 * fournie par l'utilisateur ("pour la partie chapitre fais moi qlq
 * chose comme ca, et pour le dernier jour d'un condamné essaye aussi de
 * faire qlq chose mais pas tres grande chargé") : un parcours en
 * serpentin, chapitre après chapitre, et une carte sombre sur le
 * chapitre à lire.
 *
 * Le serpentin sert jusqu'à 25 chapitres (La Boîte à merveilles,
 * Antigone). Au-delà, les 49 chapitres du Dernier Jour feraient un
 * serpentin de dix rangées : ils sont posés en pastilles, rangées dans
 * les trois parties du roman, comme demandé.
 *
 * Écarts avec la maquette, faute de donnée : pas de phrase d'accroche
 * rédigée sous le titre (elle est remplacée par le premier et le dernier
 * titre), pas de "quiz réussis" (les résultats de quiz ne sont pas
 * enregistrés), pas de durée de lecture ni de pourcentage lu dans le
 * chapitre (seul "lu / pas lu" est suivi). Le chapitre mis en avant est
 * le premier non lu, ou le premier tout court pour un visiteur.
 *
 * Couleurs fixes, comme le doré des cartes personnages : le vert des
 * chapitres lus et le jaune du chapitre à lire. La carte prend la
 * couleur du site, assombrie avec une valeur fixe pour rester lisible
 * en mode sombre.
 */
const VERT = "#17a07a";
const JAUNE = "#f7c948";
const FOND_CARTE = "color-mix(in srgb, var(--color-primary) 55%, #0a1020)";

/** Motif d'étoiles à huit branches, très pâle, en fond de section et
 * de carte (la maquette en a un). Décoratif seulement. */
function motif(couleur: string, opacite: number) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90'><g fill='none' stroke='${couleur}' stroke-opacity='${opacite}' stroke-width='1.4'><rect x='32' y='32' width='26' height='26'/><rect x='32' y='32' width='26' height='26' transform='rotate(45 45 45)'/><circle cx='45' cy='45' r='6'/></g></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

const PARTIES: Record<string, { titre: string; numeroMin: number; numeroMax: number }[]> = {
  // Les trois lieux du roman, déjà utilisés pour ranger son sommaire.
  "dernier-jour-condamne": [
    { titre: "Bicêtre", numeroMin: 1, numeroMax: 21 },
    { titre: "La Conciergerie", numeroMin: 22, numeroMax: 47 },
    { titre: "L'Hôtel de Ville", numeroMin: 48, numeroMax: 49 },
  ],
};

type Etat = "lu" | "courant" | "a-venir";

export default function OngletResume({
  slug,
  chapitres,
  chapitresLusIds,
  connecte,
  questionsParChapitre,
  personnagesParChapitre,
}: OngletResumeProps) {
  const unite = libelleUniteChapitre(slug);
  const plurielBas = unite.pluriel.toLowerCase();

  if (chapitres.length === 0) {
    return (
      <section className="rounded-lg border border-border bg-surface p-5 sm:p-9 pb-10 shadow-sm">
        <h2 className="font-serif text-[31px] font-bold tracking-tight text-ink">
          Les {plurielBas} de l&apos;œuvre
        </h2>
        <p className="mt-6 text-center text-muted-foreground">Bientôt disponible.</p>
      </section>
    );
  }

  const lus = chapitres.filter((c) => chapitresLusIds.has(c.id)).length;
  const toutLu = connecte && lus === chapitres.length;
  const courant = connecte ? chapitres.find((c) => !chapitresLusIds.has(c.id)) ?? null : chapitres[0];
  const etat = (chapitre: Chapitre): Etat =>
    chapitresLusIds.has(chapitre.id) ? "lu" : chapitre.id === courant?.id ? "courant" : "a-venir";

  const premier = decouperTitreChapitre(chapitres[0]).titre;
  const dernier = decouperTitreChapitre(chapitres[chapitres.length - 1]).titre;
  const accordLus = unite.singulier === "Scène" ? "lues" : "lus";

  const parties = PARTIES[slug];

  return (
    <section
      className="rounded-lg border border-border bg-surface p-5 sm:p-9 pb-10 shadow-sm"
      style={{ backgroundImage: motif("#1b3a8f", 0.045) }}
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-[28px] font-bold tracking-tight text-ink sm:text-[34px]">
            Les {plurielBas} de l&apos;œuvre
          </h2>
          <p className="mt-1 font-lecture text-base text-muted-foreground italic">
            De « {premier} » à « {dernier} ».
          </p>
        </div>
        <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground">
          {connecte ? (
            <>
              <strong className="text-ink">
                {lus} / {chapitres.length}
              </strong>{" "}
              {plurielBas} {accordLus}
            </>
          ) : (
            <>
              <strong className="text-ink">{chapitres.length}</strong> {plurielBas}
            </>
          )}
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div>
          {parties ? (
            <Pastilles slug={slug} chapitres={chapitres} parties={parties} etat={etat} unite={unite} />
          ) : (
            <>
              <Serpentin slug={slug} chapitres={chapitres} etat={etat} />
              <ListeVerticale slug={slug} chapitres={chapitres} etat={etat} />
            </>
          )}
        </div>

        <CarteChapitre
          slug={slug}
          chapitres={chapitres}
          courant={courant}
          toutLu={toutLu}
          connecte={connecte}
          lus={lus}
          unite={unite}
          questionsParChapitre={questionsParChapitre}
          personnagesParChapitre={personnagesParChapitre}
        />
      </div>
    </section>
  );
}

/** Ce qui s'inscrit dans le rond : le numéro de la scène ou du chapitre,
 * une coche s'il est lu, une icône de livre pour le "Mythe d'Œdipe"
 * qui précède Antigone et n'est pas une scène. */
function ContenuRond({ chapitre, etat, unite }: { chapitre: Chapitre; etat: Etat; unite: LibelleUniteChapitre }) {
  if (etat === "lu") return <IconeCoche className="size-[45%]" />;
  const { numeroScene, numeroAffiche } = decouperTitreChapitre(chapitre);
  if (unite.numeroDejaDansTitre && numeroScene === null) return <IconeLivreOuvert className="size-[45%]" />;
  return <>{numeroAffiche}</>;
}

function styleRond(etat: Etat): { className: string; style?: React.CSSProperties } {
  if (etat === "lu") return { className: "text-white", style: { background: VERT } };
  if (etat === "courant")
    return {
      className: "text-white",
      style: {
        background: FOND_CARTE,
        boxShadow: `0 0 0 5px ${JAUNE}, 0 0 0 13px color-mix(in srgb, ${JAUNE} 28%, transparent)`,
      },
    };
  return { className: "border-[3px] border-border-strong bg-surface text-muted-foreground" };
}

/* ---------- Serpentin (ordinateur) ---------- */

const HAUTEUR_RANGEE = 172;
const RAYON = 30;

function Serpentin({
  slug,
  chapitres,
  etat,
}: {
  slug: string;
  chapitres: Chapitre[];
  etat: (c: Chapitre) => Etat;
}) {
  const unite = libelleUniteChapitre(slug);
  const colonnes = chapitres.length <= 12 ? 4 : 5;
  const rangees = Math.ceil(chapitres.length / colonnes);
  // Rangée paire de gauche à droite, rangée impaire de droite à gauche.
  const place = (i: number) => {
    const rangee = Math.floor(i / colonnes);
    const pos = i % colonnes;
    return { rangee, colonne: rangee % 2 === 0 ? pos + 1 : colonnes - pos };
  };
  const centreX = (colonne: number) => ((colonne - 0.5) / colonnes) * 100;
  // Un tronçon est "parcouru" quand le chapitre auquel il mène est lu
  // ou à lire.
  const parcouru = (i: number) => etat(chapitres[i]) !== "a-venir";

  return (
    <div className="relative hidden sm:block" style={{ height: rangees * HAUTEUR_RANGEE }}>
      {chapitres.slice(1).map((_, k) => {
        const i = k + 1;
        const a = place(i - 1);
        const b = place(i);
        const couleur = parcouru(i) ? VERT : "var(--color-border)";
        if (a.rangee === b.rangee) {
          return (
            <span
              key={`t${i}`}
              aria-hidden="true"
              className="absolute h-2"
              style={{
                top: a.rangee * HAUTEUR_RANGEE + RAYON - 4,
                left: `${centreX(Math.min(a.colonne, b.colonne))}%`,
                width: `${100 / colonnes}%`,
                background: couleur,
              }}
            />
          );
        }
        // Virage : un demi-anneau qui part du rond et rejoint celui de
        // la rangée suivante, à droite ou à gauche selon le sens.
        const aDroite = a.rangee % 2 === 0;
        return (
          <span
            key={`t${i}`}
            aria-hidden="true"
            className="absolute w-14 border-8"
            style={{
              top: a.rangee * HAUTEUR_RANGEE + RAYON - 4,
              height: HAUTEUR_RANGEE + 8,
              left: aDroite ? `${centreX(a.colonne)}%` : `calc(${centreX(a.colonne)}% - 3.5rem)`,
              borderColor: couleur,
              borderLeftWidth: aDroite ? 0 : 8,
              borderRightWidth: aDroite ? 8 : 0,
              borderRadius: aDroite ? "0 999px 999px 0" : "999px 0 0 999px",
            }}
          />
        );
      })}

      {chapitres.map((chapitre, i) => {
        const { rangee, colonne } = place(i);
        const e = etat(chapitre);
        const rond = styleRond(e);
        return (
          <Link
            key={chapitre.id}
            href={`/oeuvres/${slug}/${chapitre.numero}`}
            className="group absolute flex -translate-x-1/2 flex-col items-center"
            style={{ top: rangee * HAUTEUR_RANGEE, left: `${centreX(colonne)}%`, width: `${100 / colonnes}%` }}
          >
            <span
              className={`relative z-10 flex items-center justify-center rounded-full font-serif text-[22px] font-bold transition-transform group-hover:scale-105 ${rond.className}`}
              style={{ width: RAYON * 2, height: RAYON * 2, ...rond.style }}
            >
              <ContenuRond chapitre={chapitre} etat={e} unite={unite} />
            </span>
            <span
              className={`mt-3.5 line-clamp-3 px-2 text-center text-[14px] leading-snug ${
                e === "courant" ? "font-bold text-ink" : e === "lu" ? "text-foreground" : "text-muted-foreground"
              } group-hover:text-primary`}
            >
              {decouperTitreChapitre(chapitre).titre}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

/* ---------- Liste verticale (téléphone) ---------- */

function ListeVerticale({
  slug,
  chapitres,
  etat,
}: {
  slug: string;
  chapitres: Chapitre[];
  etat: (c: Chapitre) => Etat;
}) {
  const unite = libelleUniteChapitre(slug);
  return (
    <ol className="sm:hidden">
      {chapitres.map((chapitre, i) => {
        const e = etat(chapitre);
        const rond = styleRond(e);
        const suivant = chapitres[i + 1];
        return (
          <li key={chapitre.id} className="relative pb-5 last:pb-0">
            {suivant && (
              <span
                aria-hidden="true"
                className="absolute top-10 bottom-0 left-[19px] w-1"
                style={{ background: etat(suivant) !== "a-venir" ? VERT : "var(--color-border)" }}
              />
            )}
            <Link href={`/oeuvres/${slug}/${chapitre.numero}`} className="flex items-center gap-4">
              <span
                className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full font-serif text-base font-bold ${rond.className}`}
                style={rond.style}
              >
                <ContenuRond chapitre={chapitre} etat={e} unite={unite} />
              </span>
              <span
                className={`text-[15px] leading-snug ${
                  e === "courant" ? "font-bold text-ink" : e === "lu" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {decouperTitreChapitre(chapitre).titre}
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

/* ---------- Pastilles par parties (Dernier Jour) ---------- */

function Pastilles({
  slug,
  chapitres,
  parties,
  etat,
  unite,
}: {
  slug: string;
  chapitres: Chapitre[];
  parties: { titre: string; numeroMin: number; numeroMax: number }[];
  etat: (c: Chapitre) => Etat;
  unite: LibelleUniteChapitre;
}) {
  return (
    <div className="flex flex-col gap-6">
      {parties.map((partie) => {
        const liste = chapitres.filter((c) => c.numero >= partie.numeroMin && c.numero <= partie.numeroMax);
        if (liste.length === 0) return null;
        return (
          <div key={partie.titre}>
            <div className="mb-3 flex items-baseline gap-3">
              <h3 className="font-serif text-lg font-bold text-ink">{partie.titre}</h3>
              <span className="text-sm text-muted-foreground">
                {unite.pluriel} {partie.numeroMin} à {partie.numeroMax}
              </span>
            </div>
            <ol className="flex flex-wrap gap-2.5">
              {liste.map((chapitre) => {
                const e = etat(chapitre);
                const rond = styleRond(e);
                return (
                  <li key={chapitre.id}>
                    <Link
                      href={`/oeuvres/${slug}/${chapitre.numero}`}
                      title={`${unite.singulier} ${chapitre.numero} : ${chapitre.titre_fr}`}
                      className={`flex size-10 items-center justify-center rounded-full text-sm font-bold transition-transform hover:scale-110 ${rond.className}`}
                      style={{
                        ...rond.style,
                        ...(e === "courant"
                          ? { boxShadow: `0 0 0 3px ${JAUNE}, 0 0 0 7px color-mix(in srgb, ${JAUNE} 28%, transparent)` }
                          : {}),
                      }}
                    >
                      {e === "lu" ? <IconeCoche className="size-4" /> : chapitre.numero}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Carte du chapitre à lire ---------- */

function CarteChapitre({
  slug,
  chapitres,
  courant,
  toutLu,
  connecte,
  lus,
  unite,
  questionsParChapitre,
  personnagesParChapitre,
}: {
  slug: string;
  chapitres: Chapitre[];
  courant: Chapitre | null;
  toutLu: boolean;
  connecte: boolean;
  lus: number;
  unite: LibelleUniteChapitre;
  questionsParChapitre: Record<number, number>;
  personnagesParChapitre?: Record<number, number>;
}) {
  const singulierBas = unite.singulier.toLowerCase();
  const article = unite.singulier === "Scène" ? "la" : "le";
  const pourcentage = Math.round((lus / chapitres.length) * 100);

  const index = courant ? chapitres.findIndex((c) => c.id === courant.id) : -1;
  const suivant = index >= 0 ? chapitres[index + 1] : undefined;
  const nbQuestions = courant ? questionsParChapitre[courant.numero] ?? 0 : 0;
  const nbPersonnages = courant ? personnagesParChapitre?.[courant.numero] ?? 0 : 0;

  return (
    <aside
      className="relative overflow-hidden rounded-[26px] p-6 text-white shadow-[0_20px_50px_-20px_rgba(10,16,32,0.6)] sm:p-8"
      style={{ backgroundColor: FOND_CARTE, backgroundImage: motif("#ffffff", 0.07) }}
    >
      {toutLu || !courant ? (
        <>
          <span className="inline-block rounded-full px-3.5 py-1 text-sm font-bold text-[#1d2340]" style={{ background: JAUNE }}>
            Tout est lu
          </span>
          <h3 className="mt-5 font-serif text-3xl leading-tight font-bold">Bravo, tu as fini l&apos;œuvre</h3>
          <p className="mt-3 font-lecture text-base text-white/80 italic">
            Les {chapitres.length} {unite.pluriel.toLowerCase()} sont marqués comme lus. Vérifie ce que tu as retenu
            avec le quiz.
          </p>
          <Link
            href={`/oeuvres/${slug}?onglet=quiz`}
            className="mt-7 flex w-full items-center justify-center rounded-full px-6 py-3.5 text-base font-bold text-[#1d2340] transition-transform hover:-translate-y-0.5"
            style={{ background: JAUNE }}
          >
            Faire le quiz
          </Link>
        </>
      ) : (
        <>
          <span className="inline-block rounded-full px-3.5 py-1 text-sm font-bold text-[#1d2340]" style={{ background: JAUNE }}>
            {connecte && lus > 0 ? "À lire ensuite" : "Pour commencer"}
          </span>
          <h3 className="mt-5 font-serif text-[28px] leading-tight font-bold sm:text-[32px]">
            {decouperTitreChapitre(courant).titre}
          </h3>
          {courant.resume_court && (
            <p className="mt-3 line-clamp-4 font-lecture text-[15.5px] leading-relaxed text-white/80 italic">
              {courant.resume_court}
            </p>
          )}

          <dl className="mt-6 grid grid-cols-3 gap-2.5">
            <Statistique valeur={`${index + 1}/${chapitres.length}`} libelle={singulierBas} />
            {nbPersonnages > 0 && <Statistique valeur={String(nbPersonnages)} libelle="personnages" />}
            {nbQuestions > 0 && <Statistique valeur={String(nbQuestions)} libelle="questions de quiz" />}
          </dl>

          {connecte && (
            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm text-white/80">
                <span>Ta progression</span>
                <span>{pourcentage} %</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/15">
                <div className="h-full rounded-full" style={{ width: `${pourcentage}%`, background: JAUNE }} />
              </div>
            </div>
          )}

          <Link
            href={`/oeuvres/${slug}/${courant.numero}`}
            className="mt-7 flex w-full items-center justify-center rounded-full px-6 py-3.5 text-base font-bold text-[#1d2340] transition-transform hover:-translate-y-0.5"
            style={{ background: JAUNE }}
          >
            Lire {article} {singulierBas}
          </Link>
          {suivant && (
            <p className="mt-4 text-center text-sm text-white/70">
              Ensuite : {decouperTitreChapitre(suivant).titre}
            </p>
          )}
        </>
      )}
    </aside>
  );
}

function Statistique({ valeur, libelle }: { valeur: string; libelle: string }) {
  return (
    <div className="rounded-[14px] bg-white/[0.07] px-3 py-3">
      <dt className="sr-only">{libelle}</dt>
      <dd>
        <span className="block font-serif text-xl font-bold">{valeur}</span>
        <span className="block text-[13px] leading-tight text-white/75">{libelle}</span>
      </dd>
    </div>
  );
}
