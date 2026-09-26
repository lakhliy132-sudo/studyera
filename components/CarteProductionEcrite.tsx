import Link from "next/link";

import { IconePlume } from "@/components/icones";

interface CarteProductionEcriteProps {
  quotaRestant: number;
  quotaMax: number;
  copiesCorrigees: number;
  noteMoyenne: number | null;
}

/**
 * Carte "Production écrite" du tableau de bord — refonte complète
 * demandée explicitement par l'utilisateur ("change moi le tableau de
 * bord completement fais le de ta part").
 *
 * Reprend les tokens globaux du site plutôt que l'ancien système
 * `--tdb-*` (voir CarteReprise.tsx). Affiche la note moyenne réelle
 * plutôt qu'une "dernière correction" (donnée non disponible en
 * base) — comportement conservé de l'ancienne version.
 */
export default function CarteProductionEcrite({
  quotaRestant,
  quotaMax,
  copiesCorrigees,
  noteMoyenne,
}: CarteProductionEcriteProps) {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-[24px] border shadow-sm"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--color-matiere-islamique) 7%, var(--color-surface))",
        borderColor:
          "color-mix(in srgb, var(--color-matiere-islamique) 24%, var(--color-border))",
      }}
    >
      <span
        aria-hidden="true"
        className="block h-1.5 w-full shrink-0"
        style={{ backgroundColor: "var(--color-matiere-islamique)" }}
      />
      <div className="flex h-full flex-col p-7">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
              <IconePlume className="size-5" />
            </span>
            <p className="font-serif text-xl font-bold text-ink">
              Production écrite
            </p>
          </div>
        </div>

        <p className="max-w-[42ch] text-sm text-muted-foreground">
          Photographie ton expression écrite : note sur 10, fautes surlignées,
          remarque par critère.
        </p>

        <div
          className="mt-4 flex items-center gap-1.5"
          title={`${quotaRestant} corrections restantes aujourd'hui`}
        >
          {Array.from({ length: quotaMax }).map((_, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`block size-2 rounded-full ${i < quotaRestant ? "bg-primary" : "bg-surface-muted"}`}
            />
          ))}
          <span className="ml-1.5 text-xs text-muted-foreground">
            {quotaRestant} correction{quotaRestant > 1 ? "s" : ""} restante
            {quotaRestant > 1 ? "s" : ""} aujourd&apos;hui
          </span>
        </div>

        <Link
          href="/redaction/nouvelle"
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-[10px] bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_2px_10px_rgba(29,78,216,0.22)] transition-all hover:-translate-y-px hover:bg-ink"
        >
          Envoyer une copie
        </Link>

        <p className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground">
          {copiesCorrigees > 0
            ? `${copiesCorrigees} copie${copiesCorrigees > 1 ? "s" : ""} corrigée${copiesCorrigees > 1 ? "s" : ""} — note moyenne ${noteMoyenne?.toFixed(1)}/10`
            : "Aucune copie envoyée pour l'instant."}
        </p>
      </div>
    </div>
  );
}
