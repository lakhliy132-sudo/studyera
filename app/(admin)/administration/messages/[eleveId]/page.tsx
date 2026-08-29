import Link from "next/link";
import { notFound } from "next/navigation";

import FilMessages from "@/components/FilMessages";
import { recupererMessagesEleve, recupererProfilEleve } from "@/lib/supabase/communication";
import { creerClientServeur } from "@/lib/supabase/server";

interface PageProps {
  params: Promise<{ eleveId: string }>;
}

/**
 * Page admin : /administration/messages/[eleveId] — le fil de
 * messages d'un élève précis, avec un formulaire de réponse. Accès
 * garanti par le middleware (CHEMINS_ADMIN couvre déjà tous les
 * sous-chemins de /administration, voir middleware.ts).
 *
 * Pas de vérification stricte que `eleveId` correspond à un élève
 * réel : un admin pourrait taper une URL avec un id quelconque et
 * ouvrir un fil vide, sans profil trouvé ("Élève" générique en
 * en-tête) — pas grave (voir le message neutre "Aucun message pour le
 * moment" dans FilMessages), et la RLS empêcherait de toute façon
 * d'écrire dans un fil dont l'id ne correspond à aucun utilisateur
 * réel.
 */
export default async function PageAdministrationMessages({ params }: PageProps) {
  const { eleveId } = await params;
  if (!eleveId) notFound();

  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const idAdmin = user!.id;

  const [messages, profil] = await Promise.all([
    recupererMessagesEleve(eleveId),
    recupererProfilEleve(eleveId),
  ]);
  const nomEleve = profil?.nomComplet ?? profil?.email ?? "Élève";

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-8">
      <div>
        <Link href="/administration" className="text-sm text-muted-foreground hover:text-primary">
          ← Espace administrateur
        </Link>
        <h1 className="mt-2 text-xl font-semibold text-foreground">{nomEleve}</h1>
      </div>

      <FilMessages eleveId={eleveId} messagesInitiaux={messages} idUtilisateurConnecte={idAdmin} />
    </main>
  );
}
