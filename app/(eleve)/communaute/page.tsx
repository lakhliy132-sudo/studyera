import Link from "next/link";

import FormulaireCommunaute from "@/components/FormulaireCommunaute";
import PublicationCommunaute from "@/components/PublicationCommunaute";
import {
  IconeBulles,
  IconeCible,
  IconeEtoile,
  IconeFleche,
  IconeIdee,
  IconePlume,
} from "@/components/icones";
import { MATIERES } from "@/lib/matieres";
import {
  recupererMessagesCommunaute,
  recupererStatistiquesCommunaute,
  TYPES_PUBLICATION,
  type TypePublication,
} from "@/lib/supabase/communaute";
import { creerClientServeur } from "@/lib/supabase/server";

const NOMBRE_MESSAGES = 40;
const TAILLE_CLASSEMENT = 5;

interface PagePropsCommunaute {
  searchParams: Promise<{ type?: string; matiere?: string }>;
}

/** Libellé lisible d'un slug de matière. */
function libelleMatiere(slug: string): string {
  if (slug === "francais") return "Français";
  const matiere = MATIERES.find((m) => m.slug === slug);
  return matiere ? `${matiere.titreAvantAccent}${matiere.titreAccent}` : slug;
}

/** Couleur d'accent d'une matière : les tokens déjà utilisés ailleurs
 * sur le site, pour que le fil parle le même langage visuel. */
function couleurMatiere(slug: string | null): string {
  if (slug === "francais") return "var(--color-matiere-francais)";
  if (slug === "arabe") return "var(--color-matiere-arabe)";
  if (slug === "histoire-geo") return "var(--color-matiere-histoire-geo)";
  if (slug === "education-islamique") return "var(--color-matiere-islamique)";
  return "var(--color-primary)";
}

/** Couleur d'une catégorie de publication — les étiquettes de la
 * maquette ne sont pas toutes de la même couleur. */
function couleurType(type: string): string {
  if (type === "question") return "var(--color-matiere-francais)";
  if (type === "astuce") return "var(--color-matiere-histoire-geo)";
  if (type === "objectif") return "var(--color-matiere-arabe)";
  if (type === "ressource") return "var(--color-matiere-islamique)";
  return "var(--color-primary)";
}

function depuis(iso: string): string {
  const minutes = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (minutes < 1) return "à l'instant";
  if (minutes < 60) return `il y a ${minutes} min`;
  const heures = Math.round(minutes / 60);
  if (heures < 24) return `il y a ${heures} h`;
  const jours = Math.round(heures / 24);
  if (jours === 1) return "hier";
  if (jours < 7) return `il y a ${jours} jours`;
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
  }).format(new Date(iso));
}

/**
 * /communaute — reprend la maquette envoyée par l'utilisateur ("je
 * veux comme ca") : bandeau d'accueil, colonne de gauche (aide +
 * matières), fil central filtrable par catégorie, colonne de droite
 * (élèves les plus actifs, repères, coin motivation).
 *
 * Tout ce qui s'affiche vient de la base : les compteurs par matière
 * et le classement sont calculés sur les publications réelles
 * (`recupererStatistiquesCommunaute`). Les éléments de la maquette qui
 * supposeraient des données inexistantes — nombre de membres d'un
 * groupe, défis hebdomadaires, pièces jointes — ne sont pas repris,
 * plutôt que remplis de chiffres inventés.
 */
export default async function PageCommunaute({
  searchParams,
}: PagePropsCommunaute) {
  const { type, matiere } = await searchParams;
  const typeActif = TYPES_PUBLICATION.some((t) => t.cle === type)
    ? (type as TypePublication)
    : undefined;

  const supabase = await creerClientServeur();
  const [{ data: utilisateur }, messages, stats] = await Promise.all([
    supabase.auth.getUser(),
    recupererMessagesCommunaute(NOMBRE_MESSAGES, { type: typeActif, matiere }),
    recupererStatistiquesCommunaute(TAILLE_CLASSEMENT),
  ]);
  const monId = utilisateur.user?.id ?? null;

  /** Construit un lien de filtre en gardant l'autre critère en place. */
  const lienFiltre = (nouveauType?: string, nouvelleMatiere?: string) => {
    const parametres = new URLSearchParams();
    if (nouveauType) parametres.set("type", nouveauType);
    if (nouvelleMatiere) parametres.set("matiere", nouvelleMatiere);
    const suite = parametres.toString();
    return suite ? `/communaute?${suite}` : "/communaute";
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--color-background) 0%, color-mix(in srgb, var(--color-primary) 7%, var(--color-background)) 100%)",
        }}
      >
        <div
          className="absolute -top-32 -left-28 size-[440px] rounded-full opacity-[0.14] blur-3xl"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
        <div
          className="absolute top-1/3 -right-32 size-[440px] rounded-full opacity-[0.12] blur-3xl"
          style={{ backgroundColor: "var(--color-matiere-arabe)" }}
        />
      </div>

      <main className="flex w-full flex-col gap-6 px-6 py-8 sm:px-9">
        <section
          className="relative overflow-hidden rounded-[24px] p-5 sm:p-8 text-white shadow-sm sm:p-9"
          style={{
            background:
              "linear-gradient(115deg, var(--color-primary) 0%, var(--color-matiere-arabe) 100%)",
          }}
        >
          <p className="text-[11px] font-bold tracking-[0.18em] text-white/75 uppercase">
            Communauté StudyEra
          </p>
          <h1 className="mt-2 font-titre text-[34px] leading-tight font-bold">
            Ensemble, on va plus loin
          </h1>
          <p className="mt-2 max-w-xl text-sm text-white/85">
            Pose tes questions, partage tes astuces, aide les autres et reste
            motivée tout au long de ton parcours.
          </p>

          <div className="relative mt-6 flex flex-wrap gap-3">
            <Link
              href="#message-communaute"
              className="flex items-center gap-2 rounded-[14px] bg-white/95 px-4 py-2.5 text-sm font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <IconePlume className="size-4" />
              Créer une publication
            </Link>
            <Link
              href={lienFiltre("question", matiere)}
              className="flex items-center gap-2 rounded-[14px] bg-white/15 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 transition-transform hover:-translate-y-0.5"
            >
              <IconeBulles className="size-4" />
              Voir les questions
            </Link>
            <Link
              href={lienFiltre("astuce", matiere)}
              className="flex items-center gap-2 rounded-[14px] bg-white/15 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 transition-transform hover:-translate-y-0.5"
            >
              <IconeIdee className="size-4" />
              Découvrir les astuces
            </Link>
          </div>

          {/* Cercles décoratifs, comme le bandeau de la maquette. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-10 size-56 rounded-full bg-white/10"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-24 size-64 rounded-full bg-white/[0.07]"
          />
        </section>

        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[260px_1fr_300px]">
          <div className="flex flex-col gap-5">
            <section className="flex flex-col items-center gap-3 rounded-[20px] border border-border bg-surface p-6 text-center shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary-tint text-primary">
                <IconeBulles className="size-6" />
              </span>
              <p className="font-serif text-lg font-bold text-ink">
                Besoin d&apos;aide ?
              </p>
              <p className="text-sm text-muted-foreground">
                Pose ta question à la communauté, quelqu&apos;un a sûrement la
                réponse.
              </p>
              <Link
                href="#message-communaute"
                className="mt-1 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-px"
              >
                Poser une question
                <IconeFleche className="size-3.5" />
              </Link>
            </section>

            <section className="overflow-hidden rounded-[20px] border border-border bg-surface shadow-sm">
              <span
                aria-hidden="true"
                className="block h-1 w-full bg-primary/70"
              />
              <div className="p-5">
                <p className="mb-3 font-serif text-base font-bold text-ink">
                  Par matière
                </p>
                <ul className="flex flex-col gap-1.5">
                  <li>
                    <Link
                      href={lienFiltre(typeActif, undefined)}
                      className={`block rounded-[10px] px-3 py-2 text-sm font-semibold transition-colors ${
                        matiere
                          ? "text-muted-foreground hover:bg-surface-muted"
                          : "bg-primary-tint text-primary"
                      }`}
                    >
                      Toutes les matières
                    </Link>
                  </li>
                  {["francais", ...MATIERES.map((m) => m.slug)].map((slug) => {
                    const nombre = stats.publicationsParMatiere[slug] ?? 0;
                    return (
                      <li key={slug}>
                        <Link
                          href={lienFiltre(typeActif, slug)}
                          className={`flex items-center justify-between gap-2 rounded-[10px] px-3 py-2 text-sm transition-colors ${
                            matiere === slug
                              ? "bg-primary-tint font-semibold text-primary"
                              : "hover:bg-surface-muted"
                          }`}
                        >
                          <span className="flex min-w-0 items-center gap-2">
                            <span
                              aria-hidden="true"
                              className="size-2.5 shrink-0 rounded-full"
                              style={{ backgroundColor: couleurMatiere(slug) }}
                            />
                            <span className="truncate text-ink">
                              {libelleMatiere(slug)}
                            </span>
                          </span>
                          <span className="shrink-0 text-xs text-subtle-foreground">
                            {nombre}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          </div>

          <div className="flex flex-col gap-5">
            <section className="rounded-[20px] border border-border bg-surface p-5 shadow-sm sm:p-6">
              <FormulaireCommunaute />
            </section>

            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={lienFiltre(undefined, matiere)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  typeActif
                    ? "bg-surface-muted text-muted-foreground hover:text-primary"
                    : "bg-primary text-white"
                }`}
              >
                Tout
              </Link>
              {TYPES_PUBLICATION.map((t) => (
                <Link
                  key={t.cle}
                  href={lienFiltre(t.cle, matiere)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    typeActif === t.cle
                      ? "bg-primary text-white"
                      : "bg-surface-muted text-muted-foreground hover:text-primary"
                  }`}
                >
                  {t.pluriel}
                </Link>
              ))}
            </div>

            {messages.length === 0 ? (
              <p className="rounded-[16px] border border-dashed border-border-strong bg-surface p-10 text-center text-sm text-muted-foreground">
                Aucune publication
                {typeActif || matiere ? " avec ce filtre" : ""}. Lance la
                discussion !
              </p>
            ) : (
              <ul className="flex flex-col gap-4">
                {messages.map((message) => (
                  <li
                    key={message.id}
                    className="animate-entree-carte overflow-hidden rounded-[18px] border border-border bg-surface shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    style={{
                      borderLeft: `4px solid ${couleurType(message.type)}`,
                    }}
                  >
                    <div className="p-5">
                      <div className="flex items-start gap-3">
                        <span
                          className="flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                          style={{
                            background:
                              "linear-gradient(135deg, var(--color-primary) 0%, var(--color-matiere-arabe) 100%)",
                          }}
                        >
                          {message.auteur.charAt(0).toUpperCase()}
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-semibold text-ink">
                              {message.auteur}
                            </span>
                            <span
                              className="rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                              style={{
                                backgroundColor: `color-mix(in srgb, ${couleurType(message.type)} 15%, var(--color-surface))`,
                                color: couleurType(message.type),
                              }}
                            >
                              {
                                TYPES_PUBLICATION.find(
                                  (t) => t.cle === message.type,
                                )?.libelle
                              }
                            </span>
                            <span className="text-xs text-subtle-foreground">
                              {depuis(message.createdAt)}
                            </span>
                            {message.matiere && (
                              <span
                                className="ms-auto rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                                style={{
                                  backgroundColor: `color-mix(in srgb, ${couleurMatiere(message.matiere)} 15%, var(--color-surface))`,
                                  color: couleurMatiere(message.matiere),
                                }}
                              >
                                {libelleMatiere(message.matiere)}
                              </span>
                            )}
                          </div>

                          <p className="mt-2 font-lecture text-[15px] leading-relaxed whitespace-pre-line text-foreground">
                            {message.contenu}
                          </p>

                          <PublicationCommunaute
                            messageId={message.id}
                            nombreReactions={message.nombreReactions}
                            reactionPersonnelle={message.reactionPersonnelle}
                            nombreReponses={message.nombreReponses}
                            estAuteur={monId === message.auteurId}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col gap-5">
            <section className="overflow-hidden rounded-[20px] border border-border bg-surface shadow-sm">
              <span
                aria-hidden="true"
                className="block h-1 w-full bg-primary/70"
              />
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <IconeEtoile className="size-4 text-primary" />
                  <p className="font-serif text-base font-bold text-ink">
                    Les plus actifs
                  </p>
                </div>
                {stats.classement.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Le classement apparaîtra dès les premières publications.
                  </p>
                ) : (
                  <ul className="flex flex-col gap-3">
                    {stats.classement.map((eleve, index) => (
                      <li
                        key={eleve.auteurId}
                        className="flex items-center gap-3"
                      >
                        <span className="w-4 text-center text-xs font-bold text-subtle-foreground">
                          {index + 1}
                        </span>
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-tint text-xs font-bold text-primary">
                          {eleve.auteur.charAt(0).toUpperCase()}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-sm font-semibold text-ink">
                          {eleve.auteur}
                        </span>
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {eleve.publications} publi
                          {eleve.publications > 1 ? "s" : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>

            <section className="overflow-hidden rounded-[20px] border border-border bg-surface shadow-sm">
              <span
                aria-hidden="true"
                className="block h-1 w-full bg-primary/70"
              />
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <IconeCible className="size-4 text-primary" />
                  <p className="font-serif text-base font-bold text-ink">
                    Le fil en bref
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {stats.total === 0
                    ? "Aucune publication pour l'instant."
                    : `${stats.total} publication${stats.total > 1 ? "s" : ""} depuis le début.`}
                </p>
              </div>
            </section>

            <section
              className="rounded-[20px] p-5 text-white shadow-sm"
              style={{
                background:
                  "linear-gradient(140deg, var(--color-matiere-arabe) 0%, var(--color-primary) 100%)",
              }}
            >
              <div className="mb-2 flex items-center gap-2">
                <IconeIdee className="size-4" />
                <p className="font-serif text-base font-bold">
                  Coin motivation
                </p>
              </div>
              <p className="text-sm text-white/85">
                Aide quelqu&apos;un aujourd&apos;hui : expliquer une notion est
                la meilleure façon de la retenir.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
