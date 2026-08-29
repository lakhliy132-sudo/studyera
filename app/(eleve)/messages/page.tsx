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
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-8">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Messages</h1>
        <p className="text-sm text-muted-foreground">Écris directement à l&apos;administration du site.</p>
      </div>

      <FilMessages eleveId={userId} messagesInitiaux={messages} idUtilisateurConnecte={userId} />
    </main>
  );
}
