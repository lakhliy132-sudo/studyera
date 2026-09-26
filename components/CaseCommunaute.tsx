import Link from "next/link";

import { IconeBulles, IconeFleche } from "@/components/icones";
import type { MessageCommunaute } from "@/lib/supabase/communaute";

interface CaseCommunauteProps {
  messages: MessageCommunaute[];
}

/**
 * Case "Communauté" du tableau de bord — demandée par l'utilisateur
 * ("fais moi une case de commuanité") : un aperçu des derniers
 * messages du fil (voir /communaute), pas un deuxième endroit où
 * écrire.
 *
 * État vide honnête quand personne n'a encore publié — ou tant que la
 * table `communaute_messages` n'existe pas en base (migration
 * 20260927000000_communaute.sql à exécuter) : aucun message d'exemple
 * n'est inventé.
 */
export default function CaseCommunaute({ messages }: CaseCommunauteProps) {
  return (
    <section
      className="flex h-full flex-col overflow-hidden rounded-[24px] border shadow-sm"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--color-matiere-arabe) 7%, var(--color-surface))",
        borderColor:
          "color-mix(in srgb, var(--color-matiere-arabe) 24%, var(--color-border))",
      }}
    >
      <span
        aria-hidden="true"
        className="block h-1.5 w-full shrink-0"
        style={{ backgroundColor: "var(--color-matiere-arabe)" }}
      />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
              <IconeBulles className="size-5" />
            </span>
            <p className="font-serif text-lg font-bold text-ink">Communauté</p>
          </div>
          <Link
            href="/communaute"
            className="text-xs font-semibold text-primary hover:underline"
          >
            Voir le fil
          </Link>
        </div>

        {messages.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Personne n&apos;a encore écrit. Lance la discussion avec les autres
            élèves.
          </p>
        ) : (
          <ul className="flex flex-col gap-3">
            {messages.map((message) => (
              <li key={message.id} className="flex gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-tint text-xs font-bold text-primary">
                  {message.auteur.charAt(0).toUpperCase()}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-semibold text-ink">
                    {message.auteur}
                  </span>
                  <span className="line-clamp-2 text-[13px] text-muted-foreground">
                    {message.contenu}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        )}

        <Link
          href="/communaute"
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[13.5px] font-semibold text-white shadow-sm transition-all hover:-translate-y-px"
          style={{ backgroundColor: "var(--color-matiere-arabe)" }}
        >
          Écrire un message
          <IconeFleche className="size-3.5" />
        </Link>
      </div>
    </section>
  );
}
