import Image from "next/image";
import Link from "next/link";

import { IconeFleche } from "@/components/icones";
import { MATIERES } from "@/lib/matieres";

interface GrilleMatieresAccueilProps {
  chapitresLus: number;
  totalChapitres: number;
}

/** Photo + étiquette courte par matière — reprend la maquette au plus
 * près ("fais moi 100 pour 100 de ressemblance ce qui il y a dans la
 * photo") : chaque matière a sa propre photo (pas seulement le
 * français), recadrée depuis la même image que le reste de l'accueil. */
const PHOTOS_MATIERES: Record<string, { src: string; etiquette: string }> = {
  "education-islamique": { src: "/education-islamique-cours.jpg", etiquette: "Foi · Valeurs · Citoyenneté" },
  arabe: { src: "/arabe-cours.jpg", etiquette: "Grammaire · Lecture · Expression" },
  "histoire-geo": { src: "/histoire-geo-cours.jpg", etiquette: "Histoire · Géographie · EMC" },
};

/**
 * "Mes matières" de l'accueil (élève connecté) — reprend une maquette
 * fournie par l'utilisateur ("j ai ajouté une photo dans le fichier
 * fais la comme ca dans l acuueil"). La maquette illustrait un
 * pourcentage pour chaque matière (68%, 54%, 72%, 49%) : seul celui du
 * français est réel (chapitres lus/total, déjà calculé pour le
 * tableau de bord) — les 3 autres matières n'ont encore aucun contenu
 * importé, leur carte affiche "Bientôt disponible" plutôt qu'un
 * chiffre inventé, comme partout ailleurs sur le site où ces matières
 * apparaissent (/matieres, /calendrier).
 *
 * Photo en fondu à droite de chaque carte (pas seulement une petite
 * icône) — demandé explicitement par l'utilisateur après 2 essais
 * jugés trop éloignés de la maquette ("nonnn comme la photo que j ai
 * mis dans le fichier madrasti" puis "fais moi 100 pour 100 de
 * ressemblance ce qui il y a dans la photo") : chaque matière a
 * maintenant sa propre photo recadrée depuis la même image
 * (public/francais-cours.jpg, education-islamique-cours.jpg,
 * arabe-cours.jpg, histoire-geo-cours.jpg), comme dans la maquette.
 * Les étiquettes courtes ("Foi · Valeurs · Citoyenneté"...) décrivent
 * juste le contenu de la matière (reprises de la maquette), ce ne
 * sont pas des données inventées.
 */
export default function GrilleMatieresAccueil({ chapitresLus, totalChapitres }: GrilleMatieresAccueilProps) {
  const pourcentageFrancais = totalChapitres > 0 ? Math.round((chapitresLus / totalChapitres) * 100) : 0;

  return (
    <div className="rounded-[24px] border border-border bg-surface p-6 shadow-sm sm:p-7">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="font-serif text-xl font-bold text-ink">Mes matières</p>
        <Link href="/matieres" className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
          Voir tout
          <IconeFleche className="size-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link
          href="/francais"
          className="group relative flex flex-col overflow-hidden rounded-[14px] border border-border p-4 transition-colors hover:border-border-strong"
        >
          <Image
            src="/francais-cours.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="280px"
            className="pointer-events-none absolute inset-0 z-0 object-cover opacity-90 [mask-image:linear-gradient(to_right,white,white_38%,transparent)]"
          />
          <div className="relative z-10 flex flex-1 flex-col">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-ink">Français</p>
              <IconeFleche className="size-3.5 shrink-0 text-ink/70 transition-transform group-hover:translate-x-0.5" />
            </div>
            <p className="text-xs text-ink/70">Lecture · Écriture · Expression</p>
            <div className="mt-auto pt-3.5">
              <div className="h-1.5 overflow-hidden rounded-full bg-white/60">
                <div className="h-full rounded-full bg-primary" style={{ width: `${pourcentageFrancais}%` }} />
              </div>
              <p className="mt-1.5 text-right text-xs font-semibold text-primary">{pourcentageFrancais}%</p>
            </div>
          </div>
        </Link>

        {MATIERES.map((matiere) => {
          const photo = PHOTOS_MATIERES[matiere.slug];

          return (
            <Link
              key={matiere.slug}
              href={`/${matiere.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-[14px] border border-border p-4 transition-colors hover:border-border-strong"
            >
              {photo && (
                <Image
                  src={photo.src}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="280px"
                  className="pointer-events-none absolute inset-0 z-0 object-cover opacity-90 [mask-image:linear-gradient(to_right,white,white_38%,transparent)]"
                />
              )}
              <div className="relative z-10 flex flex-1 flex-col">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-ink">
                    {matiere.titreAvantAccent}
                    {matiere.titreAccent}
                  </p>
                  <IconeFleche className="size-3.5 shrink-0 text-ink/70 transition-transform group-hover:translate-x-0.5" />
                </div>
                {photo && <p className="text-xs text-ink/70">{photo.etiquette}</p>}
                <p className="mt-auto w-fit rounded-full bg-surface-muted px-2.5 py-1 text-xs font-semibold text-subtle-foreground">
                  Bientôt disponible
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
