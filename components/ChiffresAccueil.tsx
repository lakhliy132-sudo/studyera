import type { CSSProperties } from "react";

import CompteurAnime from "@/components/CompteurAnime";

interface Part {
  nom: string;
  nombre: number;
  couleur: string;
}

interface ChiffresAccueilProps {
  /** Jours avant l'examen et sa date, `null` si toutes les sessions
   * sont passées. */
  examen: { jours: number; date: string; progression: number } | null;
  nombreCours: number;
  /** Leçons par matière, dans l'ordre d'affichage. */
  coursParMatiere: Part[];
  nombreAnnales: number;
  /** Sujets régionaux par année, de la plus ancienne à la plus récente. */
  annalesParAnnee: { annee: number; nombre: number }[];
  nombreChapitres: number;
  chapitresParOeuvre: { titre: string; nombre: number }[];
}

function delai(ms: number): CSSProperties {
  return { "--delai": `${ms}ms` } as CSSProperties;
}

/**
 * Les chiffres de l'accueil visiteur, en grille de cartes de tailles
 * différentes (« pour cette partie, fais quelque chose de plus beau et
 * moderne », capture de l'ancienne rangée de quatre nombres à l'appui).
 *
 * Chaque nombre est accompagné de ce qui le compose, tiré des mêmes
 * données que lui, au lieu d'un nombre seul :
 * - le compte à rebours, en grande carte sombre, avec la part de
 *   l'année déjà écoulée depuis la rentrée (même calcul que la carte de
 *   /calendrier, CarteDecompteCalendrier) ;
 * - les leçons, en barre découpée par matière, avec la légende en texte
 *   (nom et nombre) pour que la couleur ne soit jamais seule à porter
 *   l'information ;
 * - les sujets régionaux, en colonnes par année (une seule couleur :
 *   c'est une quantité, pas une catégorie), la valeur au survol ;
 * - les chapitres, en barre par œuvre.
 *
 * Les barres poussent à l'apparition (`.barre-croit`, app/globals.css)
 * et les nombres défilent (CompteurAnime) ; tout se fige quand l'élève
 * coupe les animations.
 */
export default function ChiffresAccueil({
  examen,
  nombreCours,
  coursParMatiere,
  nombreAnnales,
  annalesParAnnee,
  nombreChapitres,
  chapitresParOeuvre,
}: ChiffresAccueilProps) {
  const maxAnnee = Math.max(1, ...annalesParAnnee.map((a) => a.nombre));
  const maxOeuvre = Math.max(1, ...chapitresParOeuvre.map((o) => o.nombre));
  const parts = coursParMatiere.filter((p) => p.nombre > 0);

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
      {examen && (
        <div
          data-reveler=""
          className="relative flex flex-col justify-between gap-10 overflow-hidden rounded-[28px] p-7 text-white sm:col-span-2 sm:p-9 lg:col-span-5 lg:row-span-2"
          style={{ background: "linear-gradient(150deg, var(--fond-sombre-actif) 0%, var(--fond-sombre-haut) 55%, var(--fond-sombre-bas) 100%)" }}
        >
          {/* Cercles concentriques très légers, comme un cadran. */}
          <svg aria-hidden="true" viewBox="0 0 200 200" className="pointer-events-none absolute -bottom-24 -left-24 size-80 text-white/10">
            {[96, 74, 52].map((r) => (
              <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="1" />
            ))}
          </svg>

          <div className="relative flex items-center justify-between gap-3 text-sm font-semibold text-white/75">
            <span className="flex items-center gap-2.5">
              <span className="relative flex size-2">
                <span className="absolute inset-0 rounded-full bg-white animate-ping-doux" />
                <span className="relative size-2 rounded-full bg-white" />
              </span>
              العد العكسي
            </span>
            <span>الجهوي، {examen.date}</span>
          </div>

          <div className="relative">
            <span className="block font-affiche text-[110px] leading-[0.9] sm:text-[150px]">
              <CompteurAnime valeur={examen.jours} />
            </span>
            <span className="mt-3 block text-xl font-bold">يوم باقي للجهوي</span>
          </div>

          <div className="relative flex flex-col gap-2.5">
            <div className="h-2 overflow-hidden rounded-full bg-white/15">
              <div className="barre-croit h-full rounded-full bg-white" style={{ width: `${examen.progression}%` }} />
            </div>
            <div className="flex justify-between text-[13px] text-white/70">
              <span>الدخول المدرسي</span>
              <span>دازت {Math.round(examen.progression)}% من العام</span>
              <span>الجهوي</span>
            </div>
          </div>
        </div>
      )}

      {nombreCours > 0 && (
        <Carte className={examen ? "sm:col-span-2 lg:col-span-7" : "sm:col-span-2 lg:col-span-12"} retard={90}>
          <Tete valeur={nombreCours} libelle="درس مكتوب" sous="فـ 4 مواد" />
          <div className="flex h-3.5 gap-[3px]" role="img" aria-label={parts.map((p) => `${p.nom}: ${p.nombre}`).join("، ")}>
            {parts.map((p, i) => (
              <span
                key={p.nom}
                className="barre-croit h-full rounded-full first:rounded-s-full"
                style={{ flexGrow: p.nombre, flexBasis: 0, backgroundColor: p.couleur, "--delai-barre": `${i * 120}ms` } as CSSProperties}
              />
            ))}
          </div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-4">
            {parts.map((p) => (
              <li key={p.nom} className="flex items-center gap-2 text-sm">
                <span className="size-2.5 shrink-0 rounded-full" style={{ backgroundColor: p.couleur }} />
                <span className="truncate text-muted-foreground">{p.nom}</span>
                <span className="ms-auto font-bold text-ink tabular-nums">{p.nombre}</span>
              </li>
            ))}
          </ul>
        </Carte>
      )}

      {nombreAnnales > 0 && (
        <Carte className="lg:col-span-4" retard={180}>
          <Tete valeur={nombreAnnales} libelle="امتحان جهوي" sous="ديال الأكاديميات" />
          {annalesParAnnee.length > 1 && (
            <div>
              {/* `dir="ltr"` : les années se lisent de gauche à droite,
                  la plus récente au bout. */}
              <div dir="ltr" className="flex h-24 items-end gap-[3px]">
                {annalesParAnnee.map((a, i) => (
                  <span
                    key={a.annee}
                    title={`${a.annee}: ${a.nombre} امتحان`}
                    className="group relative flex h-full flex-1 items-end"
                  >
                    <span
                      className="barre-croit-y w-full rounded-t-[4px] bg-primary transition-opacity group-hover:opacity-70"
                      style={{ height: `${(a.nombre / maxAnnee) * 100}%`, "--delai-barre": `${i * 40}ms` } as CSSProperties}
                    />
                  </span>
                ))}
              </div>
              <div dir="ltr" className="mt-2 flex justify-between text-xs text-muted-foreground tabular-nums">
                <span>{annalesParAnnee[0].annee}</span>
                <span>{annalesParAnnee[annalesParAnnee.length - 1].annee}</span>
              </div>
            </div>
          )}
        </Carte>
      )}

      {nombreChapitres > 0 && (
        <Carte className="lg:col-span-3" retard={270}>
          <Tete valeur={nombreChapitres} libelle="فصل ملخص" sous="فالمؤلفات" />
          <ul className="flex flex-col gap-3">
            {chapitresParOeuvre.map((o, i) => (
              <li key={o.titre} className="flex flex-col gap-1.5">
                <span className="flex items-baseline justify-between gap-2 text-[13px]">
                  <span dir="ltr" className="truncate text-muted-foreground">{o.titre}</span>
                  <span className="font-bold text-ink tabular-nums">{o.nombre}</span>
                </span>
                <span className="h-1.5 overflow-hidden rounded-full bg-surface-muted">
                  <span
                    className="barre-croit block h-full rounded-full bg-primary"
                    style={{ width: `${(o.nombre / maxOeuvre) * 100}%`, "--delai-barre": `${i * 120}ms` } as CSSProperties}
                  />
                </span>
              </li>
            ))}
          </ul>
        </Carte>
      )}
    </section>
  );
}

function Carte({ className, retard, children }: { className: string; retard: number; children: React.ReactNode }) {
  return (
    <div
      data-reveler=""
      style={delai(retard)}
      className={`flex flex-col justify-between gap-8 rounded-[28px] border border-border bg-surface p-7 shadow-[0_20px_44px_-30px_rgba(15,23,42,0.35)] sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

function Tete({ valeur, libelle, sous }: { valeur: number; libelle: string; sous: string }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <span className="block font-affiche text-6xl leading-none text-ink sm:text-7xl">
          <CompteurAnime valeur={valeur} />
        </span>
        <span className="mt-2 block text-base font-bold text-ink">{libelle}</span>
      </div>
      <span className="pb-1 text-sm text-muted-foreground">{sous}</span>
    </div>
  );
}
