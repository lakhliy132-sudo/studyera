import Image from "next/image";
import Link from "next/link";

import FormulaireCommunaute from "@/components/FormulaireCommunaute";
import PublicationCommunaute from "@/components/PublicationCommunaute";
import {
  IconeBulles,
  IconeCible,
  IconeEtoile,
  IconeFleche,
  IconeIdee,
  IconeLivreOuvert,
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

/** Une icône par catégorie de publication. Les couleurs de matière ne
 * servent plus qu'à la grille de l'accueil (CLAUDE.md §3) : ici, tout
 * suit la palette, et c'est l'icône qui distingue les catégories. */
const ICONE_TYPE: Record<string, typeof IconeBulles> = {
  question: IconeBulles,
  astuce: IconeIdee,
  objectif: IconeCible,
  ressource: IconeLivreOuvert,
  discussion: IconePlume,
};

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
 * Refaite après « rendre ça stylé » dans l'écriture de l'accueil
 * (quadrillage, titre Lalezar souligné, carte sombre des plus actifs,
 * notes en ruqʿa). Les couleurs de matière et le dégradé violet en dur
 * sont retirés : tout suit la palette (CLAUDE.md §3), une icône
 * distingue les catégories.
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

  const carte = "rounded-[24px] border border-border bg-surface shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]";
  const podium = stats.classement.slice(0, 3);

  return (
    <main className="relative flex w-full flex-col gap-8 overflow-x-clip px-6 pt-16 pb-16 sm:px-9 lg:px-16 xl:px-24 xl:pt-10 2xl:px-40">
      {/* Quadrillage de cahier, comme l'accueil. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse 70% 70% at 30% 20%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 30% 20%, black 20%, transparent 75%)",
        }}
      />

      {/* ——— En-tête + les plus actifs ——— */}
      <section className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <div className="animate-entree-carte flex flex-col justify-center gap-4">
          <p className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
            <span className="h-0.5 w-10 rounded-full bg-primary" />
            Communauté StudyEra
            {stats.total > 0 && ` · ${stats.total} publication${stats.total > 1 ? "s" : ""}`}
          </p>
          <h1 className="font-affiche text-[40px] leading-[1.05] text-ink sm:text-6xl">
            Ensemble,
            <br />
            on va{" "}
            <span className="relative inline-block">
              plus loin
              <svg aria-hidden="true" viewBox="0 0 300 24" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-2 h-4 w-full text-[var(--color-consigne)]">
                <path className="trace-main" pathLength={1} d="M4 16C60 6 120 4 180 9s90 8 116-2" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            Pose tes questions, partage tes astuces, aide les autres et reste motivé·e tout au long de l&apos;année.
          </p>
          <div className="mt-1 flex flex-wrap gap-2.5">
            <Link
              href="#message-communaute"
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-[0_12px_26px_-12px_var(--color-primary)] transition-transform hover:-translate-y-0.5"
            >
              <IconePlume className="size-4" />
              Écrire une publication
            </Link>
            <Link
              href={lienFiltre("question", matiere)}
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <IconeBulles className="size-4" />
              Les questions
            </Link>
            <Link
              href={lienFiltre("astuce", matiere)}
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <IconeIdee className="size-4" />
              Les astuces
            </Link>
          </div>
        </div>

        {/* Les plus actifs : la carte sombre de l'accueil. */}
        <div
          className="animate-entree-carte relative flex flex-col gap-5 overflow-hidden rounded-[28px] p-7 text-white sm:p-8"
          style={{ animationDelay: "150ms", background: "linear-gradient(150deg, var(--fond-sombre-actif) 0%, var(--fond-sombre-haut) 55%, var(--fond-sombre-bas) 100%)" }}
        >
          <svg aria-hidden="true" viewBox="0 0 200 200" className="pointer-events-none absolute -right-20 -bottom-24 size-80 text-white/10">
            {[96, 74, 52].map((r) => (
              <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="1" />
            ))}
          </svg>
          <div className="relative flex items-start justify-between gap-3">
            <p className="flex items-center gap-2 text-sm font-semibold text-white/75">
              <IconeEtoile className="size-4" />
              Les plus actifs
            </p>
            <span dir="rtl" lang="ar" className="font-ruqaa text-xl text-white/80" style={{ transform: "rotate(-4deg)" }}>
              عاونو بعضياتكم!
            </span>
          </div>
          {podium.length === 0 ? (
            <p className="relative text-[15px] text-white/75">Le classement apparaîtra dès les premières publications.</p>
          ) : (
            <ol className="relative flex flex-col gap-2.5">
              {stats.classement.map((eleve, index) => (
                <li key={eleve.auteurId} className={`flex items-center gap-3 rounded-[16px] px-3 py-2.5 ${index === 0 ? "bg-white/15" : "bg-white/[0.06]"}`}>
                  <span className="w-6 text-center font-affiche text-xl text-white/70">{index + 1}</span>
                  <span
                    className="flex size-9 shrink-0 -rotate-3 items-center justify-center rounded-[11px] bg-white font-affiche text-lg leading-none"
                    style={{ color: "var(--fond-sombre-haut)" }}
                  >
                    {eleve.auteur.charAt(0).toUpperCase()}
                  </span>
                  <span className="min-w-0 flex-1 truncate font-bold">{eleve.auteur}</span>
                  <span className="shrink-0 text-sm text-white/70 tabular-nums">
                    {eleve.publications} publi{eleve.publications > 1 ? "s" : ""}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[250px_minmax(0,1fr)_280px]">
        {/* ——— Gauche : les matières ——— */}
        <aside className={`flex flex-col gap-3 p-5 xl:sticky xl:top-6 ${carte}`}>
          <p className="font-affiche text-xl text-ink">Par matière</p>
          <ul className="flex flex-col gap-1">
            {[{ slug: undefined, nom: "Toutes les matières", n: stats.total }, ...["francais", ...MATIERES.map((m) => m.slug)].map((slug) => ({ slug, nom: libelleMatiere(slug), n: stats.publicationsParMatiere[slug] ?? 0 }))].map((m) => {
              const actif = matiere === m.slug;
              return (
                <li key={m.slug ?? "toutes"}>
                  <Link
                    href={lienFiltre(typeActif, m.slug)}
                    className={`flex items-center justify-between gap-2 rounded-[12px] px-3 py-2.5 text-sm font-semibold transition-colors ${
                      actif ? "bg-primary text-primary-foreground" : "text-ink hover:bg-surface-muted"
                    }`}
                  >
                    <span className="truncate">{m.nom}</span>
                    <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs tabular-nums ${actif ? "bg-white/20" : "bg-surface-muted text-muted-foreground"}`}>{m.n}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* ——— Centre : écrire, filtrer, lire ——— */}
        <div className="flex min-w-0 flex-col gap-5">
          <section className={`p-5 sm:p-6 ${carte}`}>
            <FormulaireCommunaute />
          </section>

          <nav aria-label="Catégories" className="flex flex-wrap gap-1 rounded-[24px] border border-border bg-surface p-1.5">
            {[{ cle: undefined, pluriel: "Tout" }, ...TYPES_PUBLICATION].map((t) => {
              const actif = typeActif === t.cle;
              const Icone = t.cle ? ICONE_TYPE[t.cle] : null;
              return (
                <Link
                  key={t.cle ?? "tout"}
                  href={lienFiltre(t.cle, matiere)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-bold transition-colors ${
                    actif ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {Icone && <Icone className="size-4" />}
                  {t.pluriel}
                </Link>
              );
            })}
          </nav>

          {messages.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-[24px] border-2 border-dashed border-border px-6 py-12 text-center">
              <span className="flex size-14 -rotate-6 items-center justify-center rounded-2xl bg-primary-tint text-primary">
                <IconeBulles className="size-7" />
              </span>
              <p className="font-affiche text-2xl text-ink">
                Aucune publication{typeActif || matiere ? " avec ce filtre" : ""}
              </p>
              <p className="text-sm text-muted-foreground">Sois la première personne à lancer la discussion.</p>
              <Link href="#message-communaute" className="mt-1 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground">
                Écrire une publication
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {messages.map((message) => {
                const IconeType = ICONE_TYPE[message.type] ?? IconeBulles;
                return (
                  <li key={message.id} className={`animate-entree-carte p-5 transition hover:-translate-y-0.5 sm:p-6 ${carte}`}>
                    <div className="flex items-start gap-3.5">
                      <span className="flex size-11 shrink-0 -rotate-3 items-center justify-center rounded-[13px] bg-primary font-affiche text-xl leading-none text-primary-foreground">
                        {message.auteur.charAt(0).toUpperCase()}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                          <span className="font-bold text-ink">{message.auteur}</span>
                          <span className="text-xs text-subtle-foreground">{depuis(message.createdAt)}</span>
                          <span className="ms-auto flex flex-wrap gap-1.5">
                            <span className="flex items-center gap-1 rounded-full bg-primary-tint px-2.5 py-1 text-[11px] font-bold text-primary">
                              <IconeType className="size-3.5" />
                              {TYPES_PUBLICATION.find((t) => t.cle === message.type)?.libelle}
                            </span>
                            {message.matiere && (
                              <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-bold text-muted-foreground">
                                {libelleMatiere(message.matiere)}
                              </span>
                            )}
                          </span>
                        </div>

                        <p className="mt-2.5 font-lecture text-[15px] leading-relaxed whitespace-pre-line text-foreground">{message.contenu}</p>

                        {message.photoUrl && (
                          <a href={message.photoUrl} target="_blank" rel="noreferrer" className="mt-3 block w-fit">
                            <Image
                              src={message.photoUrl}
                              alt={`Photo partagée par ${message.auteur}`}
                              width={1200}
                              height={900}
                              sizes="(min-width: 1024px) 560px, 100vw"
                              className="h-auto max-h-[420px] w-auto max-w-full rounded-[16px] border border-border object-contain"
                            />
                          </a>
                        )}

                        <PublicationCommunaute
                          messageId={message.id}
                          nombreReactions={message.nombreReactions}
                          reactionPersonnelle={message.reactionPersonnelle}
                          nombreReponses={message.nombreReponses}
                          estAuteur={monId === message.auteurId}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* ——— Droite : besoin d'aide + motivation ——— */}
        <aside className="flex flex-col gap-5 xl:sticky xl:top-6">
          <section className={`relative flex flex-col items-start gap-3 overflow-hidden p-6 ${carte}`}>
            <span className="flex size-12 -rotate-6 items-center justify-center rounded-2xl bg-primary-tint text-primary">
              <IconeBulles className="size-6" />
            </span>
            <p className="font-affiche text-2xl leading-tight text-ink">Besoin d&apos;aide ?</p>
            <p className="text-sm leading-relaxed text-muted-foreground">Pose ta question : quelqu&apos;un a sûrement la réponse.</p>
            <Link
              href="#message-communaute"
              className="group mt-1 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
            >
              Poser une question
              <IconeFleche className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </section>

          <section
            className="relative overflow-hidden rounded-[24px] p-6 text-white"
            style={{ background: "linear-gradient(150deg, var(--fond-sombre-actif) 0%, var(--fond-sombre-haut) 70%, var(--fond-sombre-bas) 100%)" }}
          >
            <span dir="rtl" lang="ar" className="block font-ruqaa text-2xl text-white/85">
              اللي عرف شي حاجة، يعلّمها
            </span>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Aide quelqu&apos;un aujourd&apos;hui : expliquer une notion est la meilleure façon de la retenir.
            </p>
          </section>
        </aside>
      </div>
    </main>
  );
}
