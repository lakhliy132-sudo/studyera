import Link from "next/link";

import { IconeFleche } from "@/components/icones";
import { libelleChapitre, libelleUniteChapitre } from "@/lib/uniteChapitre";
import type { RepriseLecture } from "@/lib/supabase/tableauDeBord";

interface BandeauRepriseProps {
  reprise: RepriseLecture;
}

/**
 * Bandeau "Tu t'es arrêté ici" de /matieres — reprend une maquette
 * HTML fournie par l'utilisateur ("fais ca"). Données réelles
 * (`recupererRepriseLecture`, déjà utilisée par le tableau de bord),
 * pas une valeur d'exemple : le texte s'adapte selon que l'élève a
 * vraiment repris une lecture en cours (`estRecommandation: false`,
 * "Tu t'es arrêté ici") ou qu'aucune lecture n'a encore commencé
 * (`estRecommandation: true`, "Pour commencer" — la maquette
 * n'illustrait que le premier cas, un visiteur sans historique aurait
 * été trompé par "Tu t'es arrêté ici" alors qu'il n'a rien commencé).
 *
 * "Chapitre"/"Scène" via lib/uniteChapitre.ts (Antigone numérote en
 * scènes), pas écrit en dur comme dans la maquette ("chapitre 4").
 */
export default function BandeauReprise({ reprise }: BandeauRepriseProps) {
  const unite = libelleUniteChapitre(reprise.oeuvreSlug);
  const libelleChap = libelleChapitre(
    { numero: reprise.chapitreNumero, titre_fr: reprise.chapitreTitreFr },
    unite,
  );

  return (
    <Link
      href={reprise.url}
      className="mb-[18px] flex flex-wrap items-center justify-between gap-3 rounded-[10px] border border-primary/20 bg-primary-tint px-3.5 py-3 transition-colors hover:border-primary/40"
    >
      <div>
        <p className="text-xs text-primary">{reprise.estRecommandation ? "Pour commencer" : "Tu t'es arrêté ici"}</p>
        <p className="mt-0.5 text-sm font-semibold text-ink">
          Français · {reprise.oeuvreTitreFr}, {libelleChap.toLowerCase()}
        </p>
      </div>
      <span className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary">
        {reprise.estRecommandation ? "Commencer" : "Reprendre"}
        <IconeFleche className="size-3.5" />
      </span>
    </Link>
  );
}
