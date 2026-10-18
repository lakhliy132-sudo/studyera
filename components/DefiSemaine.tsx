import { BoutonRetirerReponse, BoutonVoteDefi, FormulaireReponseDefi } from "@/components/DefiInteractions";
import { IconeCible, IconeCoche, IconeHorloge } from "@/components/icones";
import type { Defi } from "@/lib/supabase/defis";

/** « mardi 21 octobre à 23:59 », heure du Maroc. */
function formaterLimite(iso: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Casablanca",
  }).format(new Date(iso));
}

/**
 * Le défi de la semaine, sur la page Communauté — demandé explicitement
 * par l'utilisateur : « Chaque semaine, l'équipe publie un défi (une
 * question d'examen régional, par exemple). Les élèves envoient leur
 * réponse, votent pour les meilleures, puis le corrigé est publié. »
 *
 * Les réponses des autres ne s'affichent qu'une fois la sienne envoyée,
 * ou le défi terminé : sinon la première bonne réponse serait recopiée
 * par tout le monde. (Le masquage est sur la page, comme le verrou de
 * l'accès payant ; l'API REST, elle, les renvoie.)
 *
 * `defi` à `null` (aucun défi publié, ou migration pas encore lancée) :
 * un état vide honnête, sans défi d'exemple.
 */
export default function DefiSemaine({
  defi,
  monId,
  libelleMatiere,
}: {
  defi: Defi | null;
  monId: string | null;
  libelleMatiere: (slug: string) => string;
}) {
  if (!defi) {
    return (
      <section className="flex items-center gap-4 rounded-[24px] border-2 border-dashed border-border px-6 py-7">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-tint text-primary">
          <IconeCible className="size-6" />
        </span>
        <div>
          <p className="font-serif text-lg font-bold text-ink">Défi de la semaine</p>
          <p className="text-sm text-muted-foreground">Le prochain défi sera publié ici par l&apos;équipe StudyEra.</p>
        </div>
      </section>
    );
  }

  const voitLesReponses = Boolean(defi.maReponse) || defi.termine;

  return (
    <section className="overflow-hidden rounded-[24px] border border-border bg-surface shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]">
      {/* En-tête sombre : même fond que les bandeaux du site (jetons
       * --fond-sombre-*, une valeur par mode, voir CLAUDE.md §3). */}
      <div
        className="relative flex flex-col gap-4 overflow-hidden p-6 text-white sm:p-8"
        style={{ background: "linear-gradient(150deg, var(--fond-sombre-actif) 0%, var(--fond-sombre-haut) 60%, var(--fond-sombre-bas) 100%)" }}
      >
        <svg aria-hidden="true" viewBox="0 0 200 200" className="pointer-events-none absolute -top-20 -right-16 size-72 text-white/10">
          {[96, 74, 52, 30].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="1" />
          ))}
        </svg>
        <div className="relative flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
            <IconeCible className="size-3.5" />
            Défi de la semaine
          </span>
          {defi.matiere && (
            <span className="rounded-full border border-white/25 px-3 py-1 text-xs font-bold text-white/85">
              {libelleMatiere(defi.matiere)}
            </span>
          )}
          <span className="flex items-center gap-1.5 text-xs font-semibold text-white/75">
            <IconeHorloge className="size-3.5" />
            {defi.termine ? "Terminé" : `Jusqu'au ${formaterLimite(defi.dateLimite)}`}
          </span>
        </div>
        <h2 className="relative font-affiche text-3xl leading-tight sm:text-4xl">{defi.titre}</h2>
        <p className="relative max-w-3xl font-lecture text-[16px] leading-relaxed whitespace-pre-line text-white/90">{defi.enonce}</p>
        <p className="relative text-sm text-white/70 tabular-nums">
          {defi.reponses.length === 0
            ? "Aucune réponse pour l'instant"
            : `${defi.reponses.length} réponse${defi.reponses.length > 1 ? "s" : ""} envoyée${defi.reponses.length > 1 ? "s" : ""}`}
        </p>
      </div>

      <div className="flex flex-col gap-6 p-6 sm:p-8">
        {defi.corrige && (
          <div className="rounded-[18px] border border-primary/30 bg-primary-tint p-5">
            <p className="mb-2 flex items-center gap-2 font-serif text-lg font-bold text-primary">
              <IconeCoche className="size-5" />
              Le corrigé
            </p>
            <p className="font-lecture text-[15.5px] leading-relaxed whitespace-pre-line text-foreground">{defi.corrige}</p>
          </div>
        )}

        {!defi.maReponse && !defi.termine && <FormulaireReponseDefi defiId={defi.id} />}

        {defi.maReponse && !defi.termine && (
          <p className="text-sm text-muted-foreground">
            Ta réponse est envoyée. Vote pour les meilleures réponses des autres : la plus votée passe en tête.
          </p>
        )}

        {voitLesReponses ? (
          defi.reponses.length > 0 && (
            <div className="flex flex-col gap-3">
              <h3 className="font-serif text-lg font-bold text-ink">Les réponses, les plus votées d&apos;abord</h3>
              <ol className="flex flex-col gap-3">
                {defi.reponses.map((reponse, index) => {
                  const estAuteur = reponse.auteurId === monId;
                  return (
                    <li
                      key={reponse.id}
                      className={`flex flex-col gap-3 rounded-[18px] border p-4 sm:p-5 ${
                        estAuteur ? "border-primary/40 bg-primary-tint/40" : "border-border bg-surface"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-[11px] bg-primary font-affiche text-lg leading-none text-primary-foreground">
                          {reponse.auteur.charAt(0).toUpperCase()}
                        </span>
                        <span className="flex min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-1 font-bold text-ink">
                          {reponse.auteur}
                          {estAuteur && <span className="text-xs font-semibold text-primary">ta réponse</span>}
                          {index === 0 && reponse.nombreVotes > 0 && (
                            <span className="rounded-full bg-primary-tint px-2 py-0.5 text-xs font-bold whitespace-nowrap text-primary">
                              La plus votée
                            </span>
                          )}
                        </span>
                        <BoutonVoteDefi
                          reponseId={reponse.id}
                          nombreVotes={reponse.nombreVotes}
                          votePersonnel={reponse.votePersonnel}
                          estAuteur={estAuteur}
                        />
                      </div>
                      <p className="font-lecture text-[15px] leading-relaxed whitespace-pre-line text-foreground">{reponse.contenu}</p>
                      {estAuteur && !defi.termine && (
                        <div>
                          <BoutonRetirerReponse reponseId={reponse.id} />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          )
        ) : (
          defi.reponses.length > 0 && (
            <p className="rounded-[14px] bg-surface-muted px-4 py-3 text-sm text-muted-foreground">
              Envoie ta réponse pour voir celles des autres et voter.
            </p>
          )
        )}
      </div>
    </section>
  );
}
