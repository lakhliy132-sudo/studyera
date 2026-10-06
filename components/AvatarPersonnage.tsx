import type { Apparence, CouleurCheveux, Peau } from "@/lib/avatarsPersonnages";

/**
 * Illustration d'un personnage d'œuvre, dessinée en SVG à partir de son
 * `Apparence` (lib/avatarsPersonnages.ts) : âge, coiffure, coiffe,
 * barbe, vêtement.
 *
 * Demandé par l'utilisateur ("pour tout les personnages met des trucs
 * dans leurs photos, des filles des garcon les gardes"). Ces personnages
 * sont fictifs : il n'existe pas de photo d'eux, et ce dessin n'en tient
 * pas lieu. Il indique seulement qui est qui (une jeune fille, un roi,
 * un garde), d'après ce que le texte dit d'eux.
 *
 * Exception assumée à la règle des jetons de couleur : la peau, les
 * cheveux et les vêtements sont des couleurs d'illustration, fixes comme
 * celles d'une photo. Seul le fond suit la palette et le mode sombre.
 */
const PEAU: Record<Peau, { visage: string; ombre: string }> = {
  claire: { visage: "#f3cba9", ombre: "#e2b18c" },
  mate: { visage: "#d9a27a", ombre: "#c38a63" },
};

const CHEVEUX: Record<CouleurCheveux, string> = {
  noirs: "#211a16",
  bruns: "#4a3020",
  blonds: "#d8b25a",
  gris: "#bdb7ae",
};

/** Fond teinté par la palette, mais mélangé à une valeur claire fixe :
 * avec le fond sombre du mode nuit, les cheveux noirs disparaissaient.
 * Le cercle reste clair dans les deux modes, comme une photo. */
const FOND = "color-mix(in srgb, var(--color-primary) 18%, #eef1f6)";

export default function AvatarPersonnage({
  apparence,
  className,
  fond = true,
}: {
  apparence: Apparence;
  className?: string;
  /** `false` : sans le disque de fond, pour poser le buste sur une
   * carte déjà teintée (onglet Personnages). */
  fond?: boolean;
}) {
  if (apparence.groupe) return <Groupe className={className} habit={apparence.habit} fond={fond} />;

  const peau = PEAU[apparence.peau];
  const cheveux = CHEVEUX[apparence.cheveux];
  const enfant = apparence.age === "enfant";
  const { coiffe } = apparence;

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {fond && <rect width="100" height="100" fill={FOND} />}

      {/* Ce qui passe derrière la tête : cheveux longs, foulard. */}
      {coiffe === "foulard" && (
        <path
          d="M29 52 C27 30 38 21 50 21 C62 21 73 30 71 52 C71 64 66 72 60 76 L40 76 C34 72 29 64 29 52 Z"
          fill={apparence.couleurCoiffe ?? "#7a4e8c"}
        />
      )}
      {!coiffe && apparence.coiffure === "longs" && (
        <path
          d="M32 48 C30 28 40 22 50 22 C61 22 70 28 68 48 L71 76 C64 72 60 70 57 68 L43 68 C40 70 36 72 29 76 Z"
          fill={cheveux}
        />
      )}
      {!coiffe && apparence.coiffure === "nattes" && (
        <>
          <circle cx="31" cy="52" r="6.5" fill={cheveux} />
          <circle cx="69" cy="52" r="6.5" fill={cheveux} />
        </>
      )}

      {/* Buste */}
      <path
        d={
          enfant
            ? "M24 100 C24 85 36 77 50 77 C64 77 76 85 76 100 Z"
            : "M13 100 C13 82 29 73 50 73 C71 73 87 82 87 100 Z"
        }
        fill={apparence.habit}
      />
      {apparence.col === "pretre" && <rect x="45" y="72" width="10" height="5" rx="1.5" fill="#f4f4f4" />}
      {apparence.col === "uniforme" && (
        <>
          <circle cx="50" cy="84" r="1.6" fill="#e0b84a" />
          <circle cx="50" cy="92" r="1.6" fill="#e0b84a" />
        </>
      )}

      {/* Cou et tête */}
      <rect x="44" y="58" width="12" height="17" rx="5" fill={peau.ombre} />
      <circle cx="34" cy="48" r="3.2" fill={peau.ombre} />
      <circle cx="66" cy="48" r="3.2" fill={peau.ombre} />
      <ellipse cx="50" cy="47" rx="16" ry={enfant ? 17 : 18.5} fill={peau.visage} />

      {/* Visage */}
      {apparence.yeuxFermes ? (
        <>
          <path d="M41.5 47.5 Q44 49.5 46.5 47.5" stroke="#2a211c" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M53.5 47.5 Q56 49.5 58.5 47.5" stroke="#2a211c" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="44" cy="47" r="1.9" fill="#2a211c" />
          <circle cx="56" cy="47" r="1.9" fill="#2a211c" />
        </>
      )}
      {enfant && (
        <>
          <circle cx="40" cy="53" r="2.6" fill="#f0a08c" opacity="0.55" />
          <circle cx="60" cy="53" r="2.6" fill="#f0a08c" opacity="0.55" />
        </>
      )}
      {apparence.barbe === "barbe" ? (
        <path
          d="M35 50 C36 66 43 73 50 73 C57 73 64 66 65 50 C61 57 56 59 50 59 C44 59 39 57 35 50 Z"
          fill={cheveux}
        />
      ) : (
        <path d="M46 55.5 Q50 58.5 54 55.5" stroke="#8a4a3a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      )}
      {apparence.barbe === "moustache" && (
        <path d="M43.5 54 C46 51.5 49 52.5 50 53.5 C51 52.5 54 51.5 56.5 54 C53 53.5 51 54.5 50 55 C49 54.5 47 53.5 43.5 54 Z" fill={cheveux} />
      )}

      {/* Cheveux visibles sur le front */}
      {!coiffe && apparence.coiffure !== "aucune" && (
        <path
          d="M34 45 C33 31 41 26 50 26 C59 26 67 31 66 45 C63 38 57 35 50 35 C43 35 37 38 34 45 Z"
          fill={cheveux}
        />
      )}
      {!coiffe && apparence.coiffure === "chignon" && <circle cx="50" cy="24" r="7" fill={cheveux} />}

      {/* Coiffes */}
      {coiffe === "foulard" && (
        <path
          d="M33 45 C33 31 41 26 50 26 C59 26 67 31 67 45 C61 37 56 35.5 50 35.5 C44 35.5 39 37 33 45 Z"
          fill={apparence.couleurCoiffe ?? "#7a4e8c"}
        />
      )}
      {coiffe === "chechia" && (
        <>
          <path d="M34 45 C34 38 39 35 50 35 C61 35 66 38 66 45 C62 40 57 39 50 39 C43 39 38 40 34 45 Z" fill={cheveux} />
          <path d="M37 37 L39.5 22 L60.5 22 L63 37 Z" fill="#b3261e" />
          <path d="M60 23 C64 25 65 30 64 33" stroke="#1f1a17" strokeWidth="1.4" fill="none" />
        </>
      )}
      {coiffe === "turban" && (
        <>
          <path d="M31 40 C31 24 41 19 50 19 C59 19 69 24 69 40 C62 35 57 34 50 34 C43 34 38 35 31 40 Z" fill="#f1ece0" stroke="#bfb49a" strokeWidth="1.2" />
          <path d="M33 33 C42 27 58 27 67 33" stroke="#d8d0bd" strokeWidth="1.6" fill="none" />
          <path d="M35 27 C44 22 56 22 65 27" stroke="#d8d0bd" strokeWidth="1.6" fill="none" />
        </>
      )}
      {coiffe === "couronne" && (
        <>
          <path
            d="M34 45 C33 31 41 26 50 26 C59 26 67 31 66 45 C63 38 57 35 50 35 C43 35 37 38 34 45 Z"
            fill={cheveux}
          />
          {apparence.coiffure === "longs" && (
            <path d="M32 46 C31 58 30 68 29 76 L37 70 L36 46 Z M68 46 C69 58 70 68 71 76 L63 70 L64 46 Z" fill={cheveux} />
          )}
          <path d="M35 32 L36.5 18 L43 25 L50 15 L57 25 L63.5 18 L65 32 Z" fill="#e0ad2e" />
          <circle cx="50" cy="26" r="2" fill="#c0392b" />
        </>
      )}
      {coiffe === "casque" && (
        <>
          <path d="M32 47 C32 29 40 23 50 23 C60 23 68 29 68 47 L63 47 L63 39 L37 39 L37 47 Z" fill="#b5843c" />
          <path d="M37 39 L63 39" stroke="#8c6228" strokeWidth="1.5" />
          <path d="M38 25 C42 11 58 11 62 25" stroke="#b3261e" strokeWidth="5" fill="none" strokeLinecap="round" />
        </>
      )}
      {coiffe === "bicorne" && (
        <>
          <path d="M34 45 C34 38 39 35 50 35 C61 35 66 38 66 45 C62 40 57 39 50 39 C43 39 38 40 34 45 Z" fill={cheveux} />
          <path d="M24 37 C33 21 67 21 76 37 C65 32 35 32 24 37 Z" fill="#1d1d24" />
          <circle cx="50" cy="29" r="2.2" fill="#c0392b" />
        </>
      )}
    </svg>
  );
}

/** Personnage collectif (le Chœur, la foule, les geôliers) : trois
 * silhouettes sans visage, plutôt qu'un individu qui n'existe pas. */
function Groupe({ className, habit, fond }: { className?: string; habit: string; fond: boolean }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {fond && <rect width="100" height="100" fill={FOND} />}
      {[
        { x: 28, y: 50, o: 0.55 },
        { x: 72, y: 50, o: 0.55 },
        { x: 50, y: 56, o: 1 },
      ].map(({ x, y, o }) => (
        <g key={x} opacity={o}>
          <circle cx={x} cy={y - 12} r="11" fill="#8f8a84" />
          <path d={`M${x - 20} 100 C${x - 20} ${y + 10} ${x - 10} ${y + 3} ${x} ${y + 3} C${x + 10} ${y + 3} ${x + 20} ${y + 10} ${x + 20} 100 Z`} fill={habit} />
        </g>
      ))}
    </svg>
  );
}
