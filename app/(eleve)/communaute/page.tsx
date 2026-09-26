import BoutonSupprimerMessage from "@/components/BoutonSupprimerMessage";
import FormulaireCommunaute from "@/components/FormulaireCommunaute";
import { IconeBulles } from "@/components/icones";
import { recupererMessagesCommunaute } from "@/lib/supabase/communaute";
import { creerClientServeur } from "@/lib/supabase/server";

const NOMBRE_MESSAGES = 50;

/** "il y a 3 h", "hier", "le 12 septembre" — repère de temps lisible
 * sans dépendre d'une bibliothèque de dates. */
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
 * /communaute — fil de discussion entre élèves, demandé par
 * l'utilisateur ("fais moi une case de commuanité", option "vrai fil
 * de discussion").
 *
 * Page protégée par le middleware, comme le reste de (eleve).
 *
 * Tant que la migration `20260927000000_communaute.sql` n'a pas été
 * exécutée dans Supabase, la lecture renvoie une liste vide et la
 * page affiche son état vide — elle ne plante pas.
 */
export default async function PageCommunaute() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const messages = await recupererMessagesCommunaute(NOMBRE_MESSAGES);

  return (
    <main className="flex w-full flex-col gap-7 px-6 py-10 sm:px-9">
      <div className="flex items-center gap-3.5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-[13px] bg-primary-tint text-primary">
          <IconeBulles className="size-5" />
        </span>
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-ink">
            Communauté
          </h1>
          <p className="text-sm text-muted-foreground">
            Pose tes questions et partage tes conseils avec les autres élèves.
          </p>
        </div>
      </div>

      <div className="rounded-[20px] border border-border bg-surface p-5 shadow-sm sm:p-6">
        <FormulaireCommunaute />
      </div>

      {messages.length === 0 ? (
        <p className="rounded-[16px] border border-dashed border-border-strong bg-surface p-10 text-center text-sm text-muted-foreground">
          Aucun message pour l&apos;instant. Lance la discussion !
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {messages.map((message) => (
            <li
              key={message.id}
              className="flex gap-4 rounded-[16px] border border-border bg-surface p-5 shadow-sm"
            >
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
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="flex flex-wrap items-baseline gap-2">
                    <span className="font-semibold text-ink">
                      {message.auteur}
                    </span>
                    <span className="text-xs text-subtle-foreground">
                      {depuis(message.createdAt)}
                    </span>
                  </p>
                  {/* Bouton de suppression sur ses propres messages
                   * seulement ; la policy RLS refuse de toute façon les
                   * autres. */}
                  {user?.id === message.auteurId && (
                    <BoutonSupprimerMessage messageId={message.id} />
                  )}
                </div>
                <p className="mt-1 font-lecture text-[15px] leading-relaxed whitespace-pre-line text-foreground">
                  {message.contenu}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
