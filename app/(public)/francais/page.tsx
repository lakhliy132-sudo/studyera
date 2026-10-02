import Link from "next/link";

import { IconeFleche, IconeLivre } from "@/components/icones";
import { SECTIONS_FRANCAIS } from "@/lib/francais";

/**
 * /francais — page hub regroupant les 4 sections françaises (Œuvres,
 * Langues, Production écrite, Correcteur IA). Accessible depuis
 * /matieres via une carte "Français", au même niveau que les autres
 * matières — demandé explicitement par l'utilisateur, qui ne voulait
 * pas de lien de nav séparé pour le français ("NON FAIS LA DANS LA
 * PARTIE DE MATIERE").
 */
export default function PageFrancais() {
  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 sm:gap-9 px-6 pt-6 pb-10 sm:pt-9 sm:pb-16">
        <Link
          href="/matieres"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Retour aux matières
        </Link>

        <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="flex size-8 items-center justify-center rounded-full border border-primary/20 bg-primary-tint text-primary">
              <IconeLivre className="size-4" />
            </span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <h1 className="mt-5 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Le <span className="text-primary italic">français</span>
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Œuvres au programme, cours de langue, production écrite et
            correction IA.
          </p>
        </section>

        <ul className="grid grid-cols-1 gap-3 sm:gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {SECTIONS_FRANCAIS.map((section) => (
            <li key={section.href}>
              <Link
                href={section.href}
                className="group flex h-full flex-col rounded-[20px] border border-border bg-surface p-5 sm:p-[26px] shadow-sm transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(27,58,143,0.11)]"
              >
                <span className="flex size-[52px] items-center justify-center rounded-full bg-primary-tint text-primary">
                  <section.Icone className="size-6" />
                </span>
                <h2 className="mt-4 font-serif text-lg leading-snug font-bold text-ink">
                  {section.titreAvantAccent}
                  <span className="text-primary italic">
                    {section.titreAccent}
                  </span>
                </h2>
                <p className="mt-1.5 font-lecture text-[14.5px] leading-relaxed text-muted-foreground">
                  {section.description}
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
