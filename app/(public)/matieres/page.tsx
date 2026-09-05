import Link from "next/link";

import { IconeFleche, IconeGraphique, IconeLivre } from "@/components/icones";
import { MATIERES } from "@/lib/matieres";

/**
 * /matieres — page d'accueil de toutes les matières, y compris le
 * français. Le français avait d'abord sa propre page hub (/francais)
 * et son propre lien de nav, séparé de "Matières" — corrigé à la
 * demande explicite de l'utilisateur ("NON FAIS LA DANS LA PARTIE DE
 * MATIERE") : /francais existe toujours (voir app/(public)/francais),
 * mais on y accède désormais par une carte "Français" ici, pas par un
 * lien de nav à part. Nav ramenée à 2 liens (Accueil, Matières, +
 * Tableau de bord si connecté) — voir LiensNavigation.tsx.
 */
export default function PageMatieres() {
  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-9 px-6 pt-9 pb-16">
        <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="flex size-8 items-center justify-center rounded-full border border-primary/20 bg-primary-tint text-primary">
              <IconeGraphique className="size-4" />
            </span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <h1 className="mt-5 font-serif text-4xl font-bold tracking-tight text-ink">
            Les <span className="text-primary italic">matières</span>
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Retrouve ici toutes les matières du bac.
          </p>
        </section>

        <ul className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <Link
              href="/francais"
              className="group flex h-full flex-col rounded-[20px] border border-border bg-surface p-[26px] shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
            >
              <span className="flex size-[52px] items-center justify-center rounded-full bg-primary-tint text-primary">
                <IconeLivre className="size-6" />
              </span>
              <h2 className="mt-4 font-serif text-lg leading-snug font-bold text-ink">
                <span className="text-primary italic">Français</span>
              </h2>
              <p className="mt-1.5 font-lecture text-[14.5px] leading-relaxed text-muted-foreground">
                Œuvres au programme, cours de langue, production écrite et correction IA.
              </p>
              <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                Découvrir
                <IconeFleche className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </li>

          {MATIERES.map((matiere) => (
            <li key={matiere.slug}>
              <Link
                href={`/${matiere.slug}`}
                className="group flex h-full flex-col rounded-[20px] border border-border bg-surface p-[26px] shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
              >
                <span className="flex size-[52px] items-center justify-center rounded-full bg-primary-tint text-primary">
                  <matiere.Icone className="size-6" />
                </span>
                <h2 className="mt-4 font-serif text-lg leading-snug font-bold text-ink">
                  {matiere.titreAvantAccent}
                  <span className="text-primary italic">{matiere.titreAccent}</span>
                </h2>
                <p className="mt-1.5 font-lecture text-[14.5px] leading-relaxed text-muted-foreground">
                  {matiere.description}
                </p>
                <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Découvrir
                  <IconeFleche className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
