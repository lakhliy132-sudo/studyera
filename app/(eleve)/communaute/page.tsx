import Image from "next/image";
import Link from "next/link";

import DefiSemaine from "@/components/DefiSemaine";
import FormulaireCommunaute from "@/components/FormulaireCommunaute";
import PublicationCommunaute from "@/components/PublicationCommunaute";
import { IconeBulles, IconeCible, IconeInfo } from "@/components/icones";
import { MATIERES } from "@/lib/matieres";
import { recupererAnnonces } from "@/lib/supabase/communication";
import { recupererMessagesCommunaute, recupererStatistiquesCommunaute } from "@/lib/supabase/communaute";
import { recupererDefiCourant } from "@/lib/supabase/defis";
import { creerClientServeur } from "@/lib/supabase/server";

const NOMBRE_QUESTIONS = 40;
const NOMBRE_ANNONCES = 3;

interface PagePropsCommunaute {
  searchParams: Promise<{ matiere?: string }>;
}

/** Libellé lisible d'un slug de matière. */
function libelleMatiere(slug: string): string {
  if (slug === "francais") return "Français";
  const matiere = MATIERES.find((m) => m.slug === slug);
  return matiere ? `${matiere.titreAvantAccent}${matiere.titreAccent}` : slug;
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
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long" }).format(new Date(iso));
}

/**
 * /communaute — nouveau concept, demandé explicitement par
 * l'utilisateur (« je veux changer le concept de ça ») parmi les
 * propositions faites, en combinant deux d'entre elles :
 * - « Chaque semaine, l'équipe publie un défi (une question d'examen
 *   régional, par exemple). Les élèves envoient leur réponse, votent
 *   pour les meilleures, puis le corrigé est publié. »
 * - « en haut, les annonces de l'équipe StudyEra ; en dessous,
 *   seulement les questions des élèves. On retire astuces, objectifs,
 *   ressources et le classement. »
 *
 * Donc, de haut en bas : présentation + annonces de l'équipe (table
 * `annonces`, publiées depuis /administration), le défi de la semaine
 * (DefiSemaine, tables `defis*`), puis les questions des élèves,
 * filtrables par matière. Les anciennes publications d'un autre type
 * (astuce, objectif…) restent en base mais ne s'affichent plus.
 */
export default async function PageCommunaute({ searchParams }: PagePropsCommunaute) {
  const { matiere } = await searchParams;

  const supabase = await creerClientServeur();
  const [{ data: utilisateur }, questions, stats, annonces, defi] = await Promise.all([
    supabase.auth.getUser(),
    recupererMessagesCommunaute(NOMBRE_QUESTIONS, { type: "question", matiere }),
    recupererStatistiquesCommunaute(0, { type: "question" }),
    recupererAnnonces(NOMBRE_ANNONCES),
    recupererDefiCourant(),
  ]);
  const monId = utilisateur.user?.id ?? null;

  const lienMatiere = (slug?: string) => (slug ? `/communaute?matiere=${encodeURIComponent(slug)}#questions` : "/communaute#questions");
  const carte = "rounded-[24px] border border-border bg-surface shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]";

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

      {/* ——— Présentation + annonces de l'équipe ——— */}
      <section className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="animate-entree-carte flex flex-col justify-center gap-4">
          <p className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
            <span className="h-0.5 w-10 rounded-full bg-primary" />
            Communauté StudyEra
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
            Les nouvelles de l&apos;équipe, un défi chaque semaine pour s&apos;entraîner, et tes questions aux autres élèves.
          </p>
          <div className="mt-1 flex flex-wrap gap-2.5">
            <Link
              href="#defi"
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-[0_12px_26px_-12px_var(--color-primary)] transition-transform hover:-translate-y-0.5"
            >
              <IconeCible className="size-4" />
              Relever le défi
            </Link>
            <Link
              href="#message-communaute"
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <IconeBulles className="size-4" />
              Poser une question
            </Link>
          </div>
        </div>

        {/* Annonces : la carte sombre de l'accueil. */}
        <section
          aria-labelledby="titre-annonces"
          className="animate-entree-carte relative flex flex-col gap-4 overflow-hidden rounded-[28px] p-7 text-white sm:p-8"
          style={{ animationDelay: "150ms", background: "linear-gradient(150deg, var(--fond-sombre-actif) 0%, var(--fond-sombre-haut) 55%, var(--fond-sombre-bas) 100%)" }}
        >
          <svg aria-hidden="true" viewBox="0 0 200 200" className="pointer-events-none absolute -right-20 -bottom-24 size-80 text-white/10">
            {[96, 74, 52].map((r) => (
              <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="1" />
            ))}
          </svg>
          <p id="titre-annonces" className="relative flex items-center gap-2 text-sm font-semibold text-white/75">
            <IconeInfo className="size-4" />
            Annonces de l&apos;équipe StudyEra
          </p>
          {annonces.length === 0 ? (
            // Sans annonce, une phrase d'accueil plutôt qu'une carte vide —
            // demandé explicitement par l'utilisateur, capture à l'appui
            // (« ici fait une phrase ensemble etc »). Le proverbe en
            // ruqʿa, comme les notes manuscrites de l'accueil.
            <div className="relative flex flex-1 flex-col justify-center gap-3">
              <span dir="rtl" lang="ar" className="w-fit font-ruqaa text-2xl text-white/85" style={{ transform: "rotate(-3deg)" }}>
                يد وحدة ما تصفّقش
              </span>
              <p className="font-affiche text-3xl leading-tight sm:text-4xl">
                Ici, on révise
                <br />
                et on réussit ensemble.
              </p>
              <p className="max-w-md text-[15px] leading-relaxed text-white/80">
                Les nouvelles de l&apos;équipe StudyEra arriveront ici. En attendant, relève le défi de la semaine ou
                aide un camarade avec sa question.
              </p>
            </div>
          ) : (
            <ul className="relative flex flex-col gap-2.5">
              {annonces.map((annonce, index) => (
                <li key={annonce.id} className={`rounded-[16px] px-4 py-3 ${index === 0 ? "bg-white/15" : "bg-white/[0.06]"}`}>
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="min-w-0 font-bold">{annonce.titre}</p>
                    <span className="shrink-0 text-xs text-white/65">{depuis(annonce.created_at)}</span>
                  </div>
                  <p className={`mt-1 text-sm leading-relaxed whitespace-pre-line text-white/80 ${index === 0 ? "" : "line-clamp-2"}`}>
                    {annonce.contenu}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </section>

      {/* ——— Défi de la semaine ——— */}
      <div id="defi" className="scroll-mt-24">
        <DefiSemaine defi={defi} monId={monId} libelleMatiere={libelleMatiere} />
      </div>

      {/* ——— Questions des élèves ——— */}
      {/* Refait à la demande de l'utilisateur (« TU PEUX FAIRE MIEUX
       * QUE CE DESIGN ») : les matières passent en pastilles sous le
       * titre (la colonne de gauche n'affichait presque que des zéros),
       * et la colonne de droite donne les règles d'une bonne question. */}
      <section id="questions" className="flex scroll-mt-24 flex-col gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 -rotate-3 items-center justify-center rounded-[13px] bg-primary text-primary-foreground">
              <IconeBulles className="size-5" />
            </span>
            <div>
              <h2 className="font-affiche text-3xl leading-tight text-ink">Questions des élèves</h2>
              <p className="text-sm text-muted-foreground">Bloqué·e sur une leçon ? Demande : quelqu&apos;un a sûrement la réponse.</p>
            </div>
          </div>

          <nav aria-label="Filtrer par matière" className="flex flex-wrap gap-2">
            {[
              { slug: undefined, nom: "Toutes", n: stats.total },
              ...["francais", ...MATIERES.map((m) => m.slug)].map((slug) => ({
                slug,
                nom: libelleMatiere(slug),
                n: stats.publicationsParMatiere[slug] ?? 0,
              })),
            ].map((m) => {
              const actif = matiere === m.slug;
              return (
                <Link
                  key={m.slug ?? "toutes"}
                  href={lienMatiere(m.slug)}
                  aria-current={actif ? "page" : undefined}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                    actif
                      ? "border-primary bg-primary text-primary-foreground shadow-[0_10px_22px_-12px_var(--color-primary)]"
                      : "border-border bg-surface text-ink hover:border-primary hover:text-primary"
                  }`}
                >
                  {m.nom}
                  {m.n > 0 && (
                    <span className={`rounded-full px-1.5 text-xs tabular-nums ${actif ? "bg-white/20" : "bg-primary-tint text-primary"}`}>{m.n}</span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
          <div className="flex min-w-0 flex-col gap-5">
            <section className={carte}>
              <FormulaireCommunaute />
            </section>

            {questions.length === 0 ? (
              <div className="flex items-center gap-4 rounded-[24px] border border-border bg-surface/70 px-6 py-6">
                <span className="flex size-12 shrink-0 -rotate-6 items-center justify-center rounded-2xl bg-primary-tint text-primary">
                  <IconeBulles className="size-6" />
                </span>
                <div>
                  <p className="font-bold text-ink">Aucune question{matiere ? ` en ${libelleMatiere(matiere)}` : ""} pour l&apos;instant</p>
                  <p className="text-sm text-muted-foreground">Pose la première : d&apos;autres élèves se demandent sûrement la même chose.</p>
                </div>
              </div>
            ) : (
              <ul className="flex flex-col gap-4">
                {questions.map((message) => (
                  <li key={message.id} className={`animate-entree-carte p-5 transition hover:-translate-y-0.5 sm:p-6 ${carte}`}>
                    <div className="flex items-start gap-3.5">
                      <span className="flex size-11 shrink-0 -rotate-3 items-center justify-center rounded-[13px] bg-primary font-affiche text-xl leading-none text-primary-foreground">
                        {message.auteur.charAt(0).toUpperCase()}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                          <span className="font-bold text-ink">{message.auteur}</span>
                          <span className="text-xs text-subtle-foreground">{depuis(message.createdAt)}</span>
                          {message.matiere && (
                            <span className="ms-auto rounded-full border border-border px-2.5 py-1 text-[11px] font-bold text-muted-foreground">
                              {libelleMatiere(message.matiere)}
                            </span>
                          )}
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
                ))}
              </ul>
            )}
          </div>

          <aside className={`flex flex-col gap-4 p-6 xl:sticky xl:top-6 ${carte}`}>
            <p className="font-affiche text-xl text-ink">Une bonne question</p>
            <ol className="flex flex-col gap-3.5">
              {[
                { titre: "Choisis la matière", detail: "Elle range ta question au bon endroit." },
                { titre: "Dis où tu bloques", detail: "La leçon, l'exercice, la phrase que tu ne comprends pas." },
                { titre: "Ajoute une photo", detail: "L'énoncé ou ton brouillon : c'est plus clair qu'un long texte." },
              ].map((conseil, index) => (
                <li key={conseil.titre} className="flex gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-tint text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-snug">
                    <span className="block font-bold text-ink">{conseil.titre}</span>
                    <span className="text-muted-foreground">{conseil.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p dir="rtl" lang="ar" className="mt-1 border-t border-border pt-4 text-center font-ruqaa text-xl text-primary">
              اللي عرف شي حاجة، يعلّمها
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
