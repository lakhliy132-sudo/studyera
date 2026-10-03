import Link from "next/link";

import { IconeFleche } from "@/components/icones";
import { IllustrationExamen } from "@/components/IllustrationsMatieres";

/**
 * /examens-regionaux — la cinquième case de /matieres.
 *
 * Volontairement vide : l'utilisateur a demandé la case d'abord et
 * fournira son contenu ensuite ("fais une autre case comme case de
 * matiere mais sans rien, moi je t'envoie après ce que tu vas faire").
 * Une première version rassemblait les dates de l'examen et les
 * méthodes déjà en base ; elle a été retirée à sa demande.
 *
 * La page annonce donc qu'elle est en préparation plutôt que d'exposer
 * des annales ou des méthodes qui n'existent pas encore.
 */
export default function PageExamensRegionaux() {
  return (
    <main className="flex flex-col">
      <div className="flex w-full flex-col gap-9 px-6 pt-6 pb-10 sm:px-9 sm:pt-9 sm:pb-16">
        <Link
          href="/matieres"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Retour aux matières
        </Link>

        <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <IllustrationExamen className="size-12" />
          <h1 className="mt-4 font-serif text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl">
            Examens <span className="text-primary italic">régionaux</span>
          </h1>
        </section>

        <p className="rounded-[18px] border border-dashed border-border-strong bg-surface p-12 text-center text-muted-foreground">
          Bientôt disponible.
        </p>
      </div>
    </main>
  );
}
