import Image from "next/image";
import Link from "next/link";

interface ColonnePied {
  titre: string;
  liens: { href: string; libelle: string }[];
}

const COLONNES: ColonnePied[] = [
  {
    titre: "Plateforme",
    liens: [
      { href: "/matieres", libelle: "Matières" },
      { href: "/francais", libelle: "Français" },
      { href: "/calendrier", libelle: "Calendrier" },
    ],
  },
  {
    titre: "Français",
    liens: [
      { href: "/oeuvres", libelle: "Œuvres" },
      { href: "/langue", libelle: "Cours de langue" },
      { href: "/production-ecrite", libelle: "Production écrite" },
      { href: "/redaction/nouvelle", libelle: "Correcteur IA" },
    ],
  },
  {
    titre: "À propos",
    liens: [
      { href: "/a-propos", libelle: "À propos" },
      { href: "/ressources", libelle: "Ressources" },
    ],
  },
];

/**
 * Pied de page des pages publiques — jusque-là absent du site, ce qui
 * contribuait à l'impression que "le site est comme une application"
 * (demande explicite de l'utilisateur : "je veux quelle soit la forme
 * d un site"). Un footer avec liens/copyright est un signal de site
 * web classique, quasi absent des applications ; les pages "app"
 * (tableau de bord, progrès, correcteur, activité, messages,
 * administration) n'en ont volontairement pas — voir
 * app/(public)/layout.tsx, seul endroit qui rend ce composant.
 */
export default function PiedDePage() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-10 px-6 py-12 sm:px-9">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="flex max-w-xs flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo-studyera.png" alt="Studyera" width={868} height={568} className="h-9 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Révise le français du bac marocain : œuvres au programme, langue, production écrite et bientôt
              d&apos;autres matières.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLONNES.map((colonne) => (
              <div key={colonne.titre} className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-ink">{colonne.titre}</p>
                <ul className="flex flex-col gap-2">
                  {colonne.liens.map((lien) => (
                    <li key={lien.href}>
                      <Link
                        href={lien.href}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {lien.libelle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="border-t border-border pt-6 text-xs text-subtle-foreground">
          © {new Date().getFullYear()} Studyera. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
