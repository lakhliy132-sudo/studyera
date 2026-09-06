interface SommaireHistoireGeoProps {
  /** Titres des sections (`##`) du cours affiché, dans l'ordre du
   * document — mêmes textes que les pastilles numérotées de
   * `ContenuMarkdown` (`styleFeuille`), reliées ici par ancre
   * (`#section-N`, posé sur chaque `h2` par ContenuMarkdown). */
  titresSections: string[];
}

/**
 * Sommaire du cours affiché — corrige un malentendu sur la première
 * version (liste des 16 leçons d'histoire-géo) : l'utilisateur a
 * précisé qu'il voulait un sommaire propre à chaque cours ("non du
 * chaque cours"), donc les sections de la leçon affichée, pas la
 * liste des autres leçons. Liens d'ancrage vers les `h2` du cours
 * (`#section-N`), `sticky` pour rester visible pendant la lecture
 * d'un cours souvent long.
 */
export default function SommaireHistoireGeo({ titresSections }: SommaireHistoireGeoProps) {
  if (titresSections.length === 0) return null;

  return (
    <aside className="sticky top-24 flex w-full flex-col gap-3 rounded-[18px] border border-border bg-surface p-5 shadow-sm">
      <p className="font-serif text-base font-bold text-ink">Sommaire</p>
      <ul className="flex flex-col gap-1">
        {titresSections.map((titre, index) => (
          <li key={index}>
            <a
              href={`#section-${index + 1}`}
              className="flex items-start gap-2.5 rounded-[10px] px-2.5 py-2 text-[13px] leading-snug text-muted-foreground transition-colors hover:bg-surface-muted hover:text-ink"
            >
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-surface-muted text-[10.5px] font-bold text-subtle-foreground">
                {index + 1}
              </span>
              <span className="line-clamp-2">{titre}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
