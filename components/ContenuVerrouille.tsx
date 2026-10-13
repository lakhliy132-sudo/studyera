import Link from "next/link";

import { IconeCadenas, IconeCoche } from "@/components/icones";
import { FORMULES } from "@/lib/abonnement";
import type { EtatAcces } from "@/lib/acces";

interface ContenuVerrouilleProps {
  etat: EtatAcces;
  /** Ce qui est verrouillé, pour la phrase d'en-tête (« Cette leçon »,
   * « Ce chapitre », « Ce sujet », « Cet onglet »). */
  ceci: string;
  titre: string;
  /** L'élément gratuit du même ensemble, à ouvrir en attendant. */
  gratuit?: { href: string; titre: string } | null;
}

function dateFr(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

/**
 * Ce que voit un visiteur, ou un élève dont l'accès n'est pas (ou plus)
 * activé, à la place d'un contenu réservé (lib/acces.ts : « un aperçu
 * gratuit », puis « c'est moi qui vais lui donner l'accès quand il
 * payera sur WhatsApp »).
 *
 * Le titre du contenu reste affiché, pour qu'on sache ce qu'on
 * débloque ; le texte, lui, n'est pas envoyé au navigateur. La carte
 * explique la démarche en trois étapes et mène à l'étape où en est la
 * personne : créer un compte, ou activer l'accès (/acces). Elle propose
 * aussi l'élément gratuit du même ensemble.
 */
export default function ContenuVerrouille({ etat, ceci, titre, gratuit }: ContenuVerrouilleProps) {
  const expire = etat.connecte && etat.fin !== null;
  const etapes = [
    { texte: "Crée ton compte", fait: etat.connecte },
    { texte: "Paie ton accès sur WhatsApp", fait: false },
    { texte: "On active ton compte", fait: false },
  ];
  const [trimestre, annee] = FORMULES;

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-7 shadow-[0_24px_60px_-34px_rgba(15,23,42,0.4)] sm:p-12">
      {/* Halo de la couleur de la palette, en haut à gauche. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full opacity-[0.12] blur-3xl"
        style={{ backgroundColor: "var(--color-primary)" }}
      />

      <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="flex flex-col items-start gap-5">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_14px_30px_-14px_var(--color-primary)]">
            <IconeCadenas className="size-7" />
          </span>
          <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">{ceci} fait partie de l&apos;accès complet</p>
          <h2 className="font-titre text-2xl leading-snug text-ink sm:text-3xl">{titre}</h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            {!etat.connecte
              ? "Crée ton compte, paie ton accès sur WhatsApp, et on l'active pour toi : toutes les leçons, les œuvres chapitre par chapitre et les sujets régionaux s'ouvrent."
              : expire
                ? `Ton accès a pris fin le ${dateFr(etat.fin!)}. Renouvelle-le sur WhatsApp et tout se rouvre.`
                : "Ton compte est créé. Il ne reste qu'à payer ton accès sur WhatsApp : on l'active dès réception."}
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-3">
            {etat.connecte ? (
              <Link
                href="/acces"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_26px_-12px_var(--color-primary)] transition-transform hover:-translate-y-0.5"
              >
                {expire ? "Renouveler mon accès" : "Activer mon accès"}
              </Link>
            ) : (
              <>
                <Link
                  href="/connexion?mode=inscription"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_26px_-12px_var(--color-primary)] transition-transform hover:-translate-y-0.5"
                >
                  Créer mon compte
                </Link>
                <Link
                  href="/connexion"
                  className="rounded-full border border-border-strong bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
                >
                  J&apos;ai déjà un compte
                </Link>
              </>
            )}
          </div>

          {gratuit && (
            <Link href={gratuit.href} className="group mt-2 flex flex-col gap-0.5 text-sm">
              <span className="text-muted-foreground">En attendant, ouvre l&apos;aperçu gratuit :</span>
              <span className="font-semibold text-primary underline decoration-primary/30 decoration-2 underline-offset-4 group-hover:decoration-primary">
                {gratuit.titre} →
              </span>
            </Link>
          )}
        </div>

        <div className="flex flex-col justify-center gap-6 rounded-[22px] border border-border bg-surface-muted/60 p-6 sm:p-8">
          <ol className="flex flex-col gap-4">
            {etapes.map((e, i) => (
              <li key={e.texte} className="flex items-center gap-4">
                <span
                  className={`flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    e.fait ? "bg-primary text-primary-foreground" : "border-2 border-border-strong text-muted-foreground"
                  }`}
                >
                  {e.fait ? <IconeCoche className="size-4" /> : i + 1}
                </span>
                <span className={`text-[15px] font-semibold ${e.fait ? "text-muted-foreground line-through decoration-primary/50" : "text-ink"}`}>
                  {e.texte}
                </span>
              </li>
            ))}
          </ol>
          <div className="flex items-end gap-6 border-t border-border pt-5">
            <div>
              <span className="block font-titre text-3xl text-ink">
                {annee.prix} <span className="text-base">DH</span>
              </span>
              <span className="text-sm text-muted-foreground">l&apos;année</span>
            </div>
            <div>
              <span className="block font-titre text-3xl text-muted-foreground">
                {trimestre.prix} <span className="text-base">DH</span>
              </span>
              <span className="text-sm text-muted-foreground">le trimestre</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Page entière d'un contenu verrouillé : lien de retour vers la liste,
 * puis la carte. Mêmes marges que les pages de contenu (CLAUDE.md §4). */
export function PageVerrouillee({ retour, ...carte }: ContenuVerrouilleProps & { retour: { href: string; libelle: string } }) {
  return (
    <main className="flex w-full flex-col gap-6 px-6 pt-6 pb-16 sm:px-9 sm:pt-9 lg:px-16 xl:px-24 2xl:px-40">
      <Link href={retour.href} className="text-sm font-medium text-muted-foreground hover:text-primary">
        ← {retour.libelle}
      </Link>
      <ContenuVerrouille {...carte} />
    </main>
  );
}
