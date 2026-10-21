import FilMessages from "@/components/FilMessages";
import { recupererMessagesEleve } from "@/lib/supabase/communication";
import { creerClientServeur } from "@/lib/supabase/server";

/**
 * Page protégée : /messages
 *
 * Messagerie privée un-à-un entre l'élève connecté et l'administration
 * du site — demandé explicitement par l'utilisateur ("je veux ajouter
 * une case de la comminucation par exemple moi ceo of the site talk
 * avec les eleves qui sont dans la plateforme"). Accès garanti par le
 * middleware (voir CHEMINS_PROTEGES, middleware.ts).
 *
 * Un seul fil par élève (`eleve_id` dans `messages` identifie
 * toujours l'élève, jamais un admin précis) : n'importe quel admin
 * peut répondre, l'élève voit toutes les réponses dans la même
 * conversation, sans avoir à choisir un destinataire.
 *
 * On y arrive aussi depuis « Un problème ? » de /communaute. Mise en page
 * reprise aux règles du site (pleine largeur, titre Lalezar) à cette
 * occasion.
 */
export default async function PageMessages() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // Garanti non-null par le middleware, mais TypeScript ne le sait pas.
  const userId = user!.id;

  const messages = await recupererMessagesEleve(userId);

  return (
    <main className="flex w-full flex-col gap-8 px-6 pt-16 pb-20 sm:px-9 sm:pt-12 lg:px-16 xl:px-24 2xl:px-40">
      <header className="flex flex-col gap-2">
        <h1 className="font-affiche text-[40px] leading-[1.05] text-ink sm:text-6xl">Mes messages</h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          Ta conversation privée avec l&apos;administration de StudyEra. Seuls toi et l&apos;équipe la voyez.
        </p>
      </header>

      <section className="rounded-[28px] border border-border bg-surface p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] sm:p-8">
        <FilMessages eleveId={userId} messagesInitiaux={messages} idUtilisateurConnecte={userId} />
      </section>
    </main>
  );
}
