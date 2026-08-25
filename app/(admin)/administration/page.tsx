import TableauCopies from "@/components/TableauCopies";
import { recupererCopiesPourAdmin } from "@/lib/supabase/admin";
import { creerClientServeur } from "@/lib/supabase/server";

/**
 * Page admin : /administration
 *
 * L'accès est garanti par le middleware (middleware.ts), qui vérifie
 * pour ce chemin non seulement l'authentification, mais aussi que
 * `profils.role = 'admin'` pour l'utilisateur connecté. Cette page peut
 * donc supposer que les deux conditions sont déjà réunies.
 *
 * Contenu (session 4) : liste des copies déposées par les élèves. La
 * table sera vide tant qu'aucune UI élève ne permet de déposer une
 * copie (fonctionnalité pas encore construite) — voir ETAT.md.
 */
export default async function PageAdministration() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const copies = await recupererCopiesPourAdmin();

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Espace administrateur</h1>
        <p className="text-sm text-muted-foreground">Connecté en tant que : {user?.email}</p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-foreground">Copies déposées</h2>
        <TableauCopies copies={copies} />
      </section>
    </main>
  );
}
