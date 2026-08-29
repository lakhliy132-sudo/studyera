import Link from "next/link";

interface CarteProductionEcriteProps {
  quotaRestant: number;
  quotaMax: number;
  copiesCorrigees: number;
  noteMoyenne: number | null;
}

/**
 * Carte "focus" du tableau de bord — bordure supérieure en
 * `--color-erreur` (rouge), réutilisée ici comme simple accent visuel
 * pour la carte "Production écrite" : cohérent avec l'usage documenté
 * de ce token ("réservé au correcteur de copie", voir app/globals.css)
 * plutôt qu'une couleur brute nouvelle. Reconstruite sur le modèle
 * fourni par l'utilisateur ("fais moi comme ca mais ajoute des modif
 * bien"), remplace `BlocRedaction.tsx`.
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
    <section className="flex flex-col rounded-lg border border-border border-t-[3px] border-t-erreur bg-surface p-7">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="font-mono text-[10.5px] font-medium tracking-[0.14em] text-erreur uppercase">
          Production écrite
        </span>
        <span className="inline-flex items-center gap-1.5" title={`${quotaRestant} corrections restantes aujourd'hui`}>
          {Array.from({ length: quotaMax }).map((_, i) => (
            <i
              key={i}
              aria-hidden="true"
              className={`block size-[7px] rounded-full ${i < quotaRestant ? "bg-erreur" : "bg-border"}`}
            />
          ))}
          <em className="ml-1 text-[11px] font-normal text-muted-foreground not-italic">
            {quotaRestant} restante{quotaRestant > 1 ? "s" : ""}
          </em>
        </span>
      </div>

      <h3 className="mb-2.5 font-serif text-2xl font-bold text-ink">Fais corriger ta copie</h3>
      <p className="max-w-[46ch] text-[14.5px] leading-relaxed text-muted-foreground">
        Photographie ton expression écrite. Tu récupères la note sur 10, les
        fautes surlignées et une remarque par critère d&apos;évaluation.
      </p>

      <Link
        href="/redaction/nouvelle"
        className="mt-5 self-start rounded-full border-[1.4px] border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
      >
        Envoyer une copie
      </Link>

      <p className="mt-3.5 text-xs text-muted-foreground">
        {copiesCorrigees > 0
          ? `${copiesCorrigees} copie${copiesCorrigees > 1 ? "s" : ""} corrigée${copiesCorrigees > 1 ? "s" : ""} — note moyenne ${noteMoyenne?.toFixed(1)}/10`
          : "Aucune copie envoyée pour l'instant."}
      </p>
    </section>
  );
}
