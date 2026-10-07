/**
 * Encart de chiffres à droite d'un en-tête (EnTeteMatiere), comme sur
 * les maquettes de /francais et /matieres. Les valeurs sont toujours
 * comptées en base par la page appelante ; un chiffre nul est retiré
 * plutôt qu'affiché à zéro (CLAUDE.md).
 */
export default function ChiffresEnTete({ chiffres }: { chiffres: { valeur: number; libelle: string }[] }) {
  const visibles = chiffres.filter((c) => c.valeur > 0);
  if (visibles.length === 0) return null;
  return (
    <dl className="flex divide-x divide-border overflow-hidden rounded-[22px] border border-border bg-surface shadow-sm">
      {visibles.map(({ valeur, libelle }) => (
        <div key={libelle} className="px-5 py-4 sm:px-7 sm:py-5">
          <dt className="sr-only">{libelle}</dt>
          <dd>
            <span className="block font-serif text-3xl font-bold text-ink sm:text-[34px]">{valeur}</span>
            <span className="block text-sm text-muted-foreground">{libelle}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
