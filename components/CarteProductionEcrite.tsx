import Link from "next/link";

interface CarteProductionEcriteProps {
  quotaRestant: number;
  quotaMax: number;
  copiesCorrigees: number;
  noteMoyenne: number | null;
}

/**
 * Carte "focus" (bordure supérieure rouge) — reprise fidèlement du
 * modèle fourni par l'utilisateur, palette/police dédiées à cette page
 * (voir CarteReprise.tsx pour le contexte de ce choix). Remplace
 * `BlocRedaction.tsx`.
 *
 * Le modèle affichait "Dernière correction : {date}" — donnée qu'on
 * n'a pas (`copies` ne garde pas de date "dernière consultée"
 * distincte) : remplacé par la note moyenne réelle, déjà calculée
 * ailleurs (`recupererStatsCopies`), plus honnête qu'inventer une date.
 */
export default function CarteProductionEcrite({
  quotaRestant,
  quotaMax,
  copiesCorrigees,
  noteMoyenne,
}: CarteProductionEcriteProps) {
  return (
    <section className="flex flex-col rounded-[14px] border border-[var(--tdb-line)] border-t-[3px] border-t-[var(--tdb-red)] bg-[var(--tdb-card)] p-7">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="[font-family:var(--tdb-font-mono)] text-[10.5px] font-medium tracking-[0.15em] text-[var(--tdb-red)] uppercase">
          Production écrite
        </span>
        <span
          className="inline-flex items-center gap-1.5"
          title={`${quotaRestant} corrections restantes aujourd'hui`}
        >
          {Array.from({ length: quotaMax }).map((_, i) => (
            <i
              key={i}
              aria-hidden="true"
              className="block size-[7px] rounded-full"
              style={{ backgroundColor: i < quotaRestant ? "var(--tdb-red)" : "var(--tdb-line)" }}
            />
          ))}
          <em className="ml-1 text-[11.5px] font-normal text-[var(--tdb-mute)] not-italic">
            {quotaRestant} restante{quotaRestant > 1 ? "s" : ""}
          </em>
        </span>
      </div>

      <h3 className="mb-2.5 [font-family:var(--tdb-font-serif)] text-[25px] font-semibold tracking-tight text-[var(--tdb-ink)]">
        Fais corriger ta copie
      </h3>
      <p className="max-w-[46ch] text-[14.5px] leading-[1.62] text-[var(--tdb-ink-2)]">
        Photographie ton expression écrite. Tu récupères la note sur 10, les
        fautes surlignées et une remarque par critère d&apos;évaluation.
      </p>

      <Link
        href="/redaction/nouvelle"
        className="mt-[22px] self-start rounded-full border-[1.4px] border-[var(--tdb-ink)] px-6 py-3 text-[14.5px] font-medium text-[var(--tdb-ink)] transition-colors hover:bg-[var(--tdb-ink)] hover:text-[var(--tdb-paper)]"
      >
        Envoyer une copie
      </Link>

      <p className="mt-3.5 text-[12.5px] text-[var(--tdb-mute)]">
        {copiesCorrigees > 0
          ? `${copiesCorrigees} copie${copiesCorrigees > 1 ? "s" : ""} corrigée${copiesCorrigees > 1 ? "s" : ""} — note moyenne ${noteMoyenne?.toFixed(1)}/10`
          : "Aucune copie envoyée pour l'instant."}
      </p>
    </section>
  );
}
