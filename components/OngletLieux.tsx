import Link from "next/link";

import { IconeLieu } from "@/components/icones";
import { decouperTitreChapitre, libelleUniteChapitre } from "@/lib/uniteChapitre";
import type { Chapitre } from "@/types/base-de-donnees";

interface OngletLieuxProps {
  slug: string;
  chapitres: Chapitre[];
}

/**
 * Contenu de l'onglet "Lieux" de /oeuvres/[slug], refait d'après une
 * maquette fournie par l'utilisateur pour Antigone ("pour lieux, je
 * veux qlq chose comme ca, la meme chose que ca, aussi pour les 3
 * autres oeuvres") : un bandeau des scènes (ou chapitres) colorées
 * selon leur lieu, une légende, puis une carte par lieu avec les scènes
 * qui s'y passent.
 *
 * Tout vient de `chapitres.lieux` en base. Deux éléments de la maquette
 * n'ont pas de donnée et ont été adaptés plutôt qu'inventés :
 * - la phrase de présentation de chaque lieu ("le huis clos du
 *   pouvoir…") : il n'existe pas de description de lieu en base, la
 *   carte affiche donc seulement le décompte ;
 * - l'encadré "À retenir" : sa phrase est calculée à partir des
 *   décomptes (lieu le plus présent, exceptions), pas rédigée à la main.
 *
 * Les chapitres sans lieu (le "Mythe d'Œdipe" d'Antigone, qui précède
 * la pièce) ne comptent pas dans le total.
 *
 * Couleurs : la plus présente prend la couleur du site (assombrie), les suivantes
 * des couleurs fixes, comme le doré des cartes personnages. Une œuvre
 * aux lieux très nombreux (La Boîte à merveilles en compte près de
 * vingt) ne colore que ceux qui reviennent au moins deux fois, au plus
 * quatre : les autres sont regroupés en gris sous "Autres lieux", une
 * vingtaine de couleurs ne se distinguant plus les unes des autres.
 */
// La première suit la palette, assombrie avec une valeur fixe : en mode
// sombre, la couleur du site devient pâle et les numéros blancs du
// bandeau ne s'y lisaient plus.
const COULEURS_LIEUX = [
  "color-mix(in srgb, var(--color-primary) 72%, #0a1020)",
  "#d39b12",
  "#2f8f83",
  "#b2547a",
];
const COULEUR_AUTRES = "#8a93a6";

interface LieuCompte {
  nom: string;
  chapitres: Chapitre[];
  couleur: string;
}

function decouperTitre(chapitre: Chapitre): { numero: number; titre: string } {
  const { numeroAffiche, titre } = decouperTitreChapitre(chapitre);
  return { numero: numeroAffiche, titre };
}

export default function OngletLieux({ slug, chapitres }: OngletLieuxProps) {
  const unite = libelleUniteChapitre(slug);
  const unitePluriel = unite.pluriel.toLowerCase();
  const uniteSingulier = unite.singulier.toLowerCase();

  const avecLieu = chapitres.filter((chapitre) => chapitre.lieux.length > 0);

  const parLieu = new Map<string, Chapitre[]>();
  for (const chapitre of avecLieu) {
    for (const lieu of chapitre.lieux) {
      parLieu.set(lieu, [...(parLieu.get(lieu) ?? []), chapitre]);
    }
  }
  // Le plus présent d'abord ; à égalité, l'ordre d'apparition.
  const tries = [...parLieu.entries()].sort((a, b) => b[1].length - a[1].length);

  const colores = (
    tries.length <= COULEURS_LIEUX.length
      ? tries
      : tries.filter(([, liste]) => liste.length >= 2).slice(0, COULEURS_LIEUX.length)
  ).map(([nom, liste], i): LieuCompte => ({ nom, chapitres: liste, couleur: COULEURS_LIEUX[i] }));
  const nomsColores = new Set(colores.map((lieu) => lieu.nom));
  const autres = tries
    .filter(([nom]) => !nomsColores.has(nom))
    .map(([nom, liste]): LieuCompte => ({ nom, chapitres: liste, couleur: COULEUR_AUTRES }));

  const couleurDe = (lieu: string) =>
    colores.find((l) => l.nom === lieu)?.couleur ?? COULEUR_AUTRES;

  const total = avecLieu.length;
  const [principal, ...secondaires] = colores;

  if (!principal) {
    return (
      <section className="rounded-lg border border-border bg-surface p-5 sm:p-9 pb-10 shadow-sm">
        <EnTete unitePluriel={unitePluriel} />
        <p className="text-center text-muted-foreground">Bientôt disponible.</p>
      </section>
    );
  }

  const premier = decouperTitre(avecLieu[0]);
  const dernier = decouperTitre(avecLieu[avecLieu.length - 1]);

  // Encadré "À retenir", calculé : le lieu le plus présent, puis les
  // exceptions quand il n'y en a qu'une ou deux, d'une seule scène.
  const exceptions = [...secondaires, ...autres];
  const exceptionsUniques =
    exceptions.length > 0 && exceptions.length <= 2 && exceptions.every((l) => l.chapitres.length === 1);
  const aRetenir = `« ${principal.nom} » revient dans ${principal.chapitres.length} ${
    principal.chapitres.length > 1 ? unitePluriel : uniteSingulier
  } sur ${total}.${
    exceptionsUniques
      ? ` ${exceptions.length === 1 ? "Seule exception" : "Seules exceptions"} : ${exceptions
          .map((l) => `« ${l.nom} » (${uniteSingulier} ${decouperTitre(l.chapitres[0]).numero})`)
          .join(" et ")}.`
      : ` ${parLieu.size} lieux en tout.`
  }`;

  return (
    <section className="rounded-lg border border-border bg-surface p-5 sm:p-9 pb-10 shadow-sm">
      <EnTete unitePluriel={unitePluriel} />

      {/* Bandeau : une case par scène, colorée selon son lieu. Une scène
          qui en traverse plusieurs est rayée de leurs couleurs. */}
      {/* Jusqu'à 24 cases, une seule ligne sur ordinateur comme sur la
          maquette ; au-delà (les 49 chapitres du Dernier Jour), elles
          passent à la ligne. */}
      <ol
        style={{ "--cases": avecLieu.length } as React.CSSProperties}
        className={`grid grid-cols-[repeat(auto-fill,minmax(38px,1fr))] gap-1.5 sm:gap-2 ${
          avecLieu.length <= 24
            ? "sm:grid-cols-[repeat(var(--cases),minmax(0,64px))]"
            : "sm:grid-cols-[repeat(auto-fill,minmax(46px,1fr))]"
        }`}
      >
        {avecLieu.map((chapitre) => {
          const { numero, titre } = decouperTitre(chapitre);
          const couleurs = chapitre.lieux.map(couleurDe);
          const horsPrincipal = !chapitre.lieux.includes(principal.nom);
          return (
            <li key={chapitre.id}>
              <Link
                href={`/oeuvres/${slug}/${chapitre.numero}`}
                title={`${unite.singulier} ${numero} : ${titre} — ${chapitre.lieux.join(", ")}`}
                style={{
                  background:
                    couleurs.length === 1
                      ? couleurs[0]
                      : `linear-gradient(90deg, ${couleurs
                          .map((c, i) => `${c} ${(i * 100) / couleurs.length}% ${((i + 1) * 100) / couleurs.length}%`)
                          .join(", ")})`,
                }}
                className={`flex aspect-square items-center justify-center rounded-[10px] text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-1 sm:text-[15px] ${
                  horsPrincipal ? "-translate-y-1 shadow-md" : ""
                }`}
              >
                {numero}
              </Link>
            </li>
          );
        })}
      </ol>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
          {[...colores, ...(autres.length > 0 ? [{ nom: "Autres lieux", couleur: COULEUR_AUTRES }] : [])].map(
            (lieu) => (
              <li key={lieu.nom} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="size-3 shrink-0 rounded-[4px]" style={{ background: lieu.couleur }} />
                {lieu.nom}
              </li>
            ),
          )}
        </ul>
        <p className="text-sm text-subtle-foreground">
          {unite.singulier} {premier.numero} → {unite.singulier} {dernier.numero}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 items-start gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
        {/* Le lieu le plus présent, avec la liste de ses scènes. */}
        <article className="rounded-[20px] border border-border bg-background p-5 sm:p-8">
          <EnTeteLieu lieu={principal} total={total} unitePluriel={unitePluriel} uniteSingulier={uniteSingulier} />
          <ul className="mt-5 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {principal.chapitres.map((chapitre) => (
              <LigneChapitre key={chapitre.id} slug={slug} chapitre={chapitre} />
            ))}
          </ul>
        </article>

        <div className="flex flex-col gap-4 sm:gap-6">
          {secondaires.map((lieu) => (
            <article
              key={lieu.nom}
              className="rounded-[20px] border p-5 sm:p-7"
              style={{
                borderColor: `color-mix(in srgb, ${lieu.couleur} 30%, transparent)`,
                background: `color-mix(in srgb, ${lieu.couleur} 9%, transparent)`,
              }}
            >
              <EnTeteLieu lieu={lieu} total={total} unitePluriel={unitePluriel} uniteSingulier={uniteSingulier} />
              {lieu.chapitres.length <= 6 ? (
                <ul className="mt-4 flex flex-col gap-2">
                  {lieu.chapitres.map((chapitre) => (
                    <LigneChapitre key={chapitre.id} slug={slug} chapitre={chapitre} couleur={lieu.couleur} carte />
                  ))}
                </ul>
              ) : (
                <PastillesChapitres slug={slug} chapitres={lieu.chapitres} couleur={lieu.couleur} />
              )}
            </article>
          ))}

          <p className="border-s-[3px] border-[#d39b12] ps-4 font-lecture text-[15px] leading-relaxed text-muted-foreground italic">
            <span className="font-semibold not-italic text-ink">À retenir : </span>
            {aRetenir}
          </p>
        </div>
      </div>

      {autres.length > 0 && (
        <article className="mt-4 rounded-[20px] border border-border bg-background p-5 sm:mt-6 sm:p-7">
          <h3 className="font-serif text-xl font-bold text-ink">Autres lieux</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {autres.every((lieu) => lieu.chapitres.length === 1)
              ? `${autres.length} lieux qui n'apparaissent qu'une fois`
              : `${autres.length} lieux`}
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
            {autres.map((lieu) => (
              <li key={lieu.nom} className="flex items-start justify-between gap-3 text-[15px] text-foreground">
                <span>{lieu.nom}</span>
                <PastillesChapitres slug={slug} chapitres={lieu.chapitres} couleur={COULEUR_AUTRES} compact />
              </li>
            ))}
          </ul>
        </article>
      )}
    </section>
  );
}

function EnTete({ unitePluriel }: { unitePluriel: string }) {
  return (
    <>
      <div className="mb-2 flex items-center justify-center gap-3.5 text-primary">
        <IconeLieu className="size-[30px]" />
        <h2 className="font-serif text-[31px] font-bold tracking-tight text-ink">Les lieux</h2>
      </div>
      <p className="mb-[30px] text-center text-base text-muted-foreground">
        Où se déroule chacune des {unitePluriel} de l&apos;œuvre.
      </p>
    </>
  );
}

function EnTeteLieu({
  lieu,
  total,
  unitePluriel,
  uniteSingulier,
}: {
  lieu: LieuCompte;
  total: number;
  unitePluriel: string;
  uniteSingulier: string;
}) {
  const n = lieu.chapitres.length;
  return (
    <div className="flex items-center gap-4">
      <span
        className="flex size-12 shrink-0 items-center justify-center rounded-[14px] sm:size-14"
        style={{ background: `color-mix(in srgb, ${lieu.couleur} 16%, transparent)`, color: lieu.couleur }}
      >
        <IconeLieu className="size-6" />
      </span>
      <div className="min-w-0">
        <h3 className="font-serif text-xl font-bold text-ink sm:text-2xl">{lieu.nom}</h3>
        <p className="text-sm text-muted-foreground">
          {n} {n > 1 ? unitePluriel : uniteSingulier} sur {total}
        </p>
      </div>
    </div>
  );
}

function LigneChapitre({
  slug,
  chapitre,
  couleur,
  carte = false,
}: {
  slug: string;
  chapitre: Chapitre;
  couleur?: string;
  carte?: boolean;
}) {
  const { numero, titre } = decouperTitre(chapitre);
  return (
    <li>
      <Link
        href={`/oeuvres/${slug}/${chapitre.numero}`}
        className={
          carte
            ? "flex items-center gap-3.5 rounded-[14px] bg-surface px-4 py-3 text-[15px] text-foreground shadow-sm transition-transform hover:-translate-y-0.5"
            : "flex items-center gap-3.5 border-b border-border py-3 text-[15px] text-foreground transition-colors hover:text-primary"
        }
      >
        <span
          className={
            couleur
              ? "flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
              : "flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-muted text-xs font-bold text-ink"
          }
          style={couleur ? { background: couleur } : undefined}
        >
          {numero}
        </span>
        {titre}
      </Link>
    </li>
  );
}

function PastillesChapitres({
  slug,
  chapitres,
  couleur,
  compact = false,
}: {
  slug: string;
  chapitres: Chapitre[];
  couleur: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "flex shrink-0 flex-wrap justify-end gap-1.5" : "mt-4 flex flex-wrap gap-1.5"}>
      {chapitres.map((chapitre) => (
        <Link
          key={chapitre.id}
          href={`/oeuvres/${slug}/${chapitre.numero}`}
          title={chapitre.titre_fr}
          className="flex size-8 items-center justify-center rounded-full text-xs font-bold text-white transition-transform hover:-translate-y-0.5"
          style={{ background: couleur }}
        >
          {decouperTitre(chapitre).numero}
        </Link>
      ))}
    </div>
  );
}
