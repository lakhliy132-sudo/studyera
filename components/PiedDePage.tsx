import Link from "next/link";

import LogoStudyera from "@/components/LogoStudyera";

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
      <div className="flex w-full flex-col gap-6 px-6 py-7 sm:px-9">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div className="flex max-w-xs flex-col gap-2">
            <Link href="/" className="flex items-center gap-2.5">
              <LogoStudyera className="h-8 text-primary" />
            </Link>
            {/* Texte mis à jour quand l'arabe, l'histoire-géographie et
             * l'éducation islamique ont rejoint le français : il
             * annonçait encore un site de français seul. */}
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              Révise le bac marocain : français, arabe, histoire-géographie et
              éducation islamique — cours, langue et production écrite.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {COLONNES.map((colonne) => (
              <div key={colonne.titre} className="flex flex-col gap-2">
                <p className="text-[13px] font-semibold text-ink">
                  {colonne.titre}
                </p>
                <ul className="flex flex-col gap-2">
                  {colonne.liens.map((lien) => (
                    <li key={lien.href}>
                      <Link
                        href={lien.href}
                        className="text-[13px] text-muted-foreground hover:text-primary"
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

        <p className="border-t border-border pt-4 text-[11.5px] text-subtle-foreground">
          © {new Date().getFullYear()} Studyera. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
