import Link from "next/link";

import type { Annonce } from "@/types/base-de-donnees";

function formaterDate(dateIso: string) {
  return new Date(dateIso).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" });
}

interface BlocAnnoncesProps {
  annonces: Annonce[];
}

/**
 * Bloc "Communication" du tableau de bord : la dernière annonce
 * publiée par l'administration, plus un lien vers la messagerie
 * privée — demandé explicitement par l'utilisateur ("je veux ajouter
 * une case de la comminucation... moi ceo of the site talk avec les
 * eleves qui sont dans la plateforme").
 *
 * Fond en dégradé bleu → bleu ciel (`--tdb-degrade-bleu`), texte blanc
 * — demandé explicitement ("FAIS LA RECTANGLE ET ARRONDIS AVEC COULEUR
 * BLEU VERS BLEU CIEL"), avec "Au programme cette année" et "Dernières
 * activités" (même traitement, voir ces composants). Jamais de bloc
 * vide : un message neutre invite à écrire quand il n'y a aucune
 * annonce.
 */
export default function BlocAnnonces({ annonces }: BlocAnnoncesProps) {
  const derniere = annonces[0] ?? null;

  return (
    <section
      className="mt-11 flex flex-col items-start justify-between gap-5 rounded-[14px] p-7 text-white shadow-[0_10px_30px_-14px_rgba(30,63,216,0.45)] sm:flex-row sm:items-center"
      style={{ backgroundImage: "var(--tdb-degrade-bleu)" }}
    >
      <div>
        <span className="[font-family:var(--tdb-font-mono)] text-[10.5px] font-medium tracking-[0.15em] text-white/80 uppercase">
          Communication
        </span>
        {derniere ? (
          <div className="mt-2">
            <p className="text-base font-semibold text-white">{derniere.titre}</p>
            <p className="mt-1 line-clamp-2 max-w-[56ch] text-sm text-white/85">{derniere.contenu}</p>
            <p className="mt-1.5 text-xs text-white/65">{formaterDate(derniere.created_at)}</p>
          </div>
        ) : (
          <p className="mt-2 max-w-[56ch] text-sm text-white/85">
            Rien de nouveau. Une question sur un chapitre ou sur ton compte ? Écris-nous.
          </p>
        )}
      </div>
      <Link href="/messages" className="shrink-0 text-sm font-medium text-white hover:underline">
        Écrire à l&apos;administration →
      </Link>
    </section>
  );
}
