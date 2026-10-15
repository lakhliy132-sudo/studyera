import Image from "next/image";

import { CREDITS_PHOTOS } from "@/lib/creditsPhotos";

/**
 * Page publique : /a-propos
 *
 * Destination du lien "À propos" de la nav (BarreNavigation, session
 * design). La présentation du site n'est pas encore écrite ; la page
 * porte en revanche les crédits des photos de matière, que les
 * licences CC BY / CC BY-SA rendent obligatoires (lib/creditsPhotos.ts).
 */
export default function PageAPropos() {
  return (
    <main className="flex w-full flex-col gap-12 px-6 pt-10 pb-20 sm:px-9 lg:px-16 xl:px-24 2xl:px-40">
      <header className="flex flex-col gap-2">
        <h1 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">À propos</h1>
        <p className="text-muted-foreground">La présentation de StudyEra arrive bientôt.</p>
      </header>

      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h2 className="font-serif text-2xl font-semibold text-ink">Crédits photos</h2>
          <p className="text-sm text-muted-foreground">
            Les photos des matières viennent de Wikimedia Commons, sous licence libre. Elles ont été recadrées.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CREDITS_PHOTOS.map((c) => (
            <li key={c.fichier} className="flex gap-4 rounded-2xl border border-border bg-surface p-3">
              <span className="relative block h-20 w-32 shrink-0 overflow-hidden rounded-xl">
                <Image src={c.fichier} alt="" fill sizes="128px" className="object-cover" />
              </span>
              <span className="flex min-w-0 flex-col gap-1 text-sm">
                <span className="font-semibold text-ink">{c.matiere}</span>
                <a href={c.source} target="_blank" rel="noreferrer" className="truncate text-primary hover:underline">
                  « {c.titre} »
                </a>
                <span className="text-muted-foreground">
                  {c.auteur ? `${c.auteur}, ` : ""}
                  {c.lienLicence ? (
                    <a href={c.lienLicence} target="_blank" rel="noreferrer" className="hover:underline">
                      {c.licence}
                    </a>
                  ) : (
                    c.licence
                  )}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
