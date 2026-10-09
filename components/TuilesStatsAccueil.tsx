import Link from "next/link";

import {
  IconeCalendrier,
  IconeFleche,
  IconeGraphique,
  IconeLivreOuvert,
  IconeReseau,
} from "@/components/icones";

interface TuilesStatsAccueilProps {
  nombreCours: number;
  nombreMatieres: number;
  joursAvantExamen: number | null;
  chapitresLus: number;
  totalChapitres: number;
}

/**
 * Chiffres clés sous le bandeau de l'accueil, refaits d'après la
 * dernière maquette de l'utilisateur : quatre tuiles, chacune avec sa
 * pastille de couleur, son chiffre, son libellé et un lien.
 *
 * Que des données réelles : le nombre de cours vient de la table
 * `cours`, les matières de lib/matieres.ts, les jours de la vraie date
 * de l'examen régional (lib/calendrier.ts).
 *
 * Écart avec la maquette : elle montre un "Taux de progression 87 %"
 * global. Aucun suivi n'existe hors des chapitres des œuvres de
 * français (CLAUDE.md §9) ; un pourcentage global serait inventé. La
 * quatrième tuile compte donc les chapitres lus, ce que la base sait
 * vraiment, avec le total en libellé.
 *
 * Les couleurs des pastilles sont celles des matières, réservées à
 * l'accueil (CLAUDE.md §3).
 */
export default function TuilesStatsAccueil({
  nombreCours,
  nombreMatieres,
  joursAvantExamen,
  chapitresLus,
  totalChapitres,
}: TuilesStatsAccueilProps) {
  const tuiles = [
    {
      cle: "cours",
      valeur: String(nombreCours),
      libelle: `Cours disponible${nombreCours > 1 ? "s" : ""}`,
      lien: { href: "/matieres", texte: "Voir les cours" },
      couleur: "var(--color-matiere-francais)",
      Icone: IconeLivreOuvert,
    },
    {
      cle: "matieres",
      valeur: String(nombreMatieres),
      libelle: `Matière${nombreMatieres > 1 ? "s" : ""}`,
      lien: { href: "/matieres", texte: "Voir toutes" },
      couleur: "var(--color-matiere-arabe)",
      Icone: IconeReseau,
    },
    ...(joursAvantExamen === null
      ? []
      : [
          {
            cle: "jours",
            valeur: String(joursAvantExamen),
            libelle: "Jours avant le 1Bac",
            lien: { href: "/calendrier", texte: "Voir calendrier" },
            couleur: "var(--color-matiere-histoire-geo)",
            Icone: IconeCalendrier,
          },
        ]),
    ...(totalChapitres === 0
      ? []
      : [
          {
            cle: "lus",
            valeur: String(chapitresLus),
            libelle: `Chapitres lus sur ${totalChapitres}`,
            lien: { href: "/progres", texte: "Voir mon parcours" },
            couleur: "var(--color-matiere-islamique)",
            Icone: IconeGraphique,
          },
        ]),
  ];

  return (
    // Requête de conteneur plutôt que de fenêtre : la largeur disponible
    // dépend du menu de gauche (déplié ou réduit) et de la colonne de
    // droite, pas seulement de l'écran.
    <div className="@container">
      <ul className="grid grid-cols-1 gap-4 @md:grid-cols-2 @4xl:grid-cols-4">
        {tuiles.map(({ cle, valeur, libelle, lien, couleur, Icone }) => (
          <li key={cle}>
            <Link
              href={lien.href}
              className="group flex h-full items-start gap-3 rounded-[20px] border border-border p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              style={{
                background: `linear-gradient(135deg, var(--color-surface) 40%, color-mix(in srgb, ${couleur} 10%, var(--color-surface)) 100%)`,
              }}
            >
              <span
                className="flex size-12 shrink-0 items-center justify-center rounded-full text-white shadow-md"
                style={{
                  background: `linear-gradient(145deg, color-mix(in srgb, ${couleur} 80%, white), ${couleur})`,
                }}
              >
                <Icone className="size-[22px]" />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="font-serif text-[32px] leading-none font-bold text-ink">
                  {valeur}
                </span>
                <span className="mt-1.5 text-[13px] text-muted-foreground">
                  {libelle}
                </span>
                <span
                  className="mt-3 flex items-center gap-1.5 text-[13px] font-semibold whitespace-nowrap"
                  style={{ color: couleur }}
                >
                  {lien.texte}
                  <IconeFleche className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
