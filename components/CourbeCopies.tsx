interface CourbeCopiesProps {
  /** Notes dans l'ordre chronologique. */
  valeurs: number[];
  /** Note maximale de l'échelle (20 pour les copies du site). */
  max: number;
}

/**
 * Courbe des notes des expressions écrites — reprend le sous-composant
 * `Courbe` du fichier `Progression.jsx` fourni par l'utilisateur
 * ("AJOUTE CA") : aire remplie, ligne épaisse, un point par copie.
 *
 * Deux écarts avec le fichier d'origine : l'échelle est sur 20 (les
 * copies du site sont notées sur 20, pas sur 10), et les couleurs
 * passent par les tokens du thème plutôt que par des valeurs fixes,
 * pour rester lisibles en mode sombre.
 *
 * Une seule copie ne fait pas une courbe : le composant affiche alors
 * un point seul, sans ligne.
 */
export default function CourbeCopies({ valeurs, max }: CourbeCopiesProps) {
  if (valeurs.length === 0) return null;

  const L = 500;
  const H = 160;
  const P = 26;

  const x = (index: number) =>
    valeurs.length === 1
      ? L / 2
      : P + (index * (L - 2 * P)) / (valeurs.length - 1);
  const y = (valeur: number) => H - P - (valeur / max) * (H - 2 * P);
  const points = valeurs
    .map((valeur, index) => `${x(index)},${y(valeur)}`)
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${L} ${H}`}
      className="w-full"
      role="img"
      aria-label="Évolution de tes notes"
    >
      {[0, max / 2, max].map((graduation) => (
        <g key={graduation}>
          <line
            x1={P}
            x2={L - P}
            y1={y(graduation)}
            y2={y(graduation)}
            stroke="var(--color-border)"
          />
          <text
            x={2}
            y={y(graduation) + 4}
            fontSize="11"
            fill="var(--color-subtle-foreground)"
          >
            {graduation}
          </text>
        </g>
      ))}

      {valeurs.length > 1 && (
        <>
          <polygon
            points={`${x(0)},${y(0)} ${points} ${x(valeurs.length - 1)},${y(0)}`}
            fill="var(--color-primary)"
            opacity="0.14"
          />
          <polyline
            points={points}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </>
      )}

      {valeurs.map((valeur, index) => (
        <circle
          key={index}
          cx={x(index)}
          cy={y(valeur)}
          r="4"
          fill="var(--color-surface)"
          stroke="var(--color-primary)"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}
