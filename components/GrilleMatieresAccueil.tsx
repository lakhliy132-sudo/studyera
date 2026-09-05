import Image from "next/image";
import Link from "next/link";

import { IconeFleche } from "@/components/icones";
import { MATIERES } from "@/lib/matieres";

interface GrilleMatieresAccueilProps {
  chapitresLus: number;
  totalChapitres: number;
}

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
 * Photo sur la carte "Français" — demandé explicitement par
 * l'utilisateur ("ajoute les photo dans la case de francais... comme
 * je t ai envoyé sur l image dans le fichier") : réutilise la photo
 * bureau/livres déjà recadrée pour le bandeau de bienvenue
 * (public/accueil-bureau.jpg). Les 3 autres matières gardent leur
 * icône (aucune photo thématique fournie pour celles-ci).
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
          className="rounded-[14px] border border-border p-4 transition-colors hover:border-border-strong hover:bg-surface-muted"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/accueil-bureau.jpg"
              alt=""
              aria-hidden="true"
              width={380}
              height={175}
              className="h-9 w-9 shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink">Français</p>
              <p className="truncate text-xs text-muted-foreground">Œuvres · langue · production écrite</p>
            </div>
          </div>
          <div className="mt-3.5 h-1.5 overflow-hidden rounded-full bg-surface-muted">
            <div className="h-full rounded-full bg-primary" style={{ width: `${pourcentageFrancais}%` }} />
          </div>
          <p className="mt-1.5 text-right text-xs font-semibold text-primary">{pourcentageFrancais}%</p>
        </Link>

        {MATIERES.map((matiere) => (
          <Link
            key={matiere.slug}
            href={`/${matiere.slug}`}
            className="rounded-[14px] border border-border p-4 transition-colors hover:border-border-strong hover:bg-surface-muted"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
                <matiere.Icone className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-ink">
                  {matiere.titreAvantAccent}
                  {matiere.titreAccent}
                </p>
              </div>
            </div>
            <p className="mt-3.5 w-fit rounded-full bg-surface-muted px-2.5 py-1 text-xs font-semibold text-subtle-foreground">
              Bientôt disponible
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
