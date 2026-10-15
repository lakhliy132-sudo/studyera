import Image from "next/image";
import Link from "next/link";

import { IconeCoche } from "@/components/icones";
import { COUVERTURES_OEUVRES } from "@/lib/couvertures";
import { decouperTitreChapitre, type LibelleUniteChapitre } from "@/lib/uniteChapitre";

interface ChapitreEnTete {
  numero: number;
  titre_fr: string;
  titre_ar?: string | null;
}

interface EnTeteChapitreProps {
  slug: string;
  titreOeuvre: string;
  chapitre: ChapitreEnTete;
  chapitres: ChapitreEnTete[];
  unite: LibelleUniteChapitre;
  lu: boolean;
}

/**
 * En-tête de /oeuvres/[slug]/[numero]. Remplace le fil d'Ariane en carte
 * et la carte de titre, que l'utilisateur n'aimait pas (« j'ai pas aimé
 * comme ça ») : même écriture que l'accueil élève (quadrillage de
 * cahier, titre Lalezar souligné à la main, couverture inclinée).
 *
 * - le retour à l'œuvre en petit, au-dessus du titre ;
 * - « Chapitre 7 » (ou « Scène 11 » lu dans le titre pour Antigone) et
 *   « Lu » si l'élève l'a marqué comme lu ;
 * - un sélecteur compact : flèches précédent/suivant, le premier et le
 *   dernier chapitre, et ceux qui entourent le chapitre courant (voir
 *   `fenetre`), puis une fine barre de position dans l'œuvre.
 */
/** Numéro affiché sur une pastille : pour Antigone, le numéro de scène
 * lu dans le titre (un point pour le Prologue ou le Mythe d'Œdipe). */
function etiquette(c: ChapitreEnTete, unite: LibelleUniteChapitre): string | number {
  return unite.numeroDejaDansTitre ? (decouperTitreChapitre(c).numeroScene ?? "•") : c.numero;
}

/** Les pastilles à montrer : le premier, le dernier, et deux de chaque
 * côté du chapitre courant ; `null` marque un saut (« … »). Ajouté
 * après « j'ai pas aimé qu'elle soit aussi longue » : Le Dernier Jour
 * d'un condamné a 49 chapitres, soit deux lignes de pastilles. */
function fenetre(position: number, total: number): (number | null)[] {
  const garde = new Set([0, total - 1]);
  for (let i = position - 2; i <= position + 2; i++) if (i >= 0 && i < total) garde.add(i);
  const tries = [...garde].sort((a, b) => a - b);
  const sortie: (number | null)[] = [];
  tries.forEach((i, k) => {
    if (k > 0 && i - tries[k - 1] > 1) sortie.push(null);
    sortie.push(i);
  });
  return sortie;
}

function Fleche({ slug, chapitre, sens }: { slug: string; chapitre: ChapitreEnTete | undefined; sens: "precedent" | "suivant" }) {
  const classe = "flex size-9 items-center justify-center rounded-full pb-0.5 text-lg leading-none font-bold transition-all";
  const fleche = sens === "precedent" ? "←" : "→";
  if (!chapitre) {
    return (
      <span aria-hidden="true" className={`${classe} text-border`}>
        {fleche}
      </span>
    );
  }
  return (
    <Link
      href={`/oeuvres/${slug}/${chapitre.numero}`}
      title={chapitre.titre_fr}
      aria-label={sens === "precedent" ? "Chapitre précédent" : "Chapitre suivant"}
      className={`${classe} bg-primary-tint text-primary hover:scale-105`}
    >
      {fleche}
    </Link>
  );
}

export default function EnTeteChapitre({ slug, titreOeuvre, chapitre, chapitres, unite, lu }: EnTeteChapitreProps) {
  const { numeroScene, titre } = decouperTitreChapitre(chapitre);
  const numero = unite.numeroDejaDansTitre ? numeroScene : chapitre.numero;
  const couverture = COUVERTURES_OEUVRES[slug];
  const position = chapitres.findIndex((c) => c.numero === chapitre.numero);

  return (
    <header className="relative flex flex-col gap-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-16 -top-10 -z-10 h-[420px] opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse 60% 70% at 30% 30%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 30% 30%, black 20%, transparent 75%)",
        }}
      />

      <div className="flex items-end justify-between gap-6">
        <div className="animate-entree-carte flex min-w-0 flex-col gap-3">
          <Link
            href={`/oeuvres/${slug}`}
            className="group flex w-fit items-center gap-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="h-0.5 w-10 rounded-full bg-primary transition-all group-hover:w-6" />
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            {titreOeuvre}
          </Link>

          <p className="flex flex-wrap items-center gap-2.5">
            {numero !== null && (
              <span className="rounded-full bg-primary px-3.5 py-1 text-sm font-bold text-primary-foreground">
                {unite.singulier} {numero}
              </span>
            )}
            {lu && (
              <span className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-sm font-semibold text-[var(--color-validation)]">
                <IconeCoche className="size-4" />
                Lu
              </span>
            )}
          </p>

          <h1 className="font-affiche text-[38px] leading-[1.08] text-ink sm:text-6xl">{titre}</h1>
          <svg aria-hidden="true" viewBox="0 0 300 24" preserveAspectRatio="none" className="-mt-2 h-4 w-40 text-[var(--color-consigne)] sm:w-56">
            <path className="trace-main" pathLength={1} d="M4 16C60 6 120 4 180 9s90 8 116-2" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          </svg>
          {chapitre.titre_ar && (
            <p dir="rtl" lang="ar" className="w-fit font-arabe text-2xl text-primary sm:text-[28px]">
              {chapitre.titre_ar}
            </p>
          )}
        </div>

        {couverture && (
          <div className="animate-entree-carte relative hidden shrink-0 md:block" style={{ animationDelay: "120ms" }}>
            {numero !== null && (
              <span
                aria-hidden="true"
                className="absolute -bottom-9 -left-14 z-10 font-affiche text-[110px] leading-none text-[var(--color-background)] select-none lg:text-[130px]"
                style={{ WebkitTextStroke: "3px var(--color-primary)", paintOrder: "stroke fill" }}
              >
                {String(numero).padStart(2, "0")}
              </span>
            )}
            <span className="relative block h-48 w-[134px] -rotate-3 overflow-hidden rounded-2xl shadow-[0_24px_44px_-20px_rgba(15,23,42,0.6)] lg:h-56 lg:w-[156px]">
              <Image src={couverture} alt="" fill sizes="156px" className="object-cover" priority />
            </span>
          </div>
        )}
      </div>

      {chapitres.length > 1 && position >= 0 && (
        <nav aria-label={`${unite.pluriel} de l'œuvre`} className="flex w-fit max-w-full flex-col gap-2.5">
          <span className="text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
            {unite.pluriel} · {position + 1} sur {chapitres.length}
          </span>
          <ol className="flex items-center gap-1.5">
            <li>
              <Fleche slug={slug} chapitre={chapitres[position - 1]} sens="precedent" />
            </li>
            {fenetre(position, chapitres.length).map((i, k) =>
              i === null ? (
                <li key={`trou-${k}`} aria-hidden="true" className="w-5 text-center text-sm font-bold text-muted-foreground">
                  …
                </li>
              ) : (
                <li key={chapitres[i].numero} className={Math.abs(i - position) === 2 && i !== 0 && i !== chapitres.length - 1 ? "hidden sm:block" : undefined}>
                  <Link
                    href={`/oeuvres/${slug}/${chapitres[i].numero}`}
                    title={chapitres[i].titre_fr}
                    aria-current={i === position ? "page" : undefined}
                    className={`flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-sm font-bold tabular-nums transition-all ${
                      i === position
                        ? "scale-110 bg-primary text-primary-foreground shadow-[0_8px_18px_-8px_var(--color-primary)]"
                        : "border border-border bg-surface text-muted-foreground hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {etiquette(chapitres[i], unite)}
                  </Link>
                </li>
              ),
            )}
            <li>
              <Fleche slug={slug} chapitre={chapitres[position + 1]} sens="suivant" />
            </li>
          </ol>
          <span className="h-1 overflow-hidden rounded-full bg-surface-muted">
            <span
              className="barre-croit block h-full rounded-full bg-primary"
              style={{ width: `${((position + 1) / chapitres.length) * 100}%`, transformOrigin: "left" }}
            />
          </span>
        </nav>
      )}
    </header>
  );
}
