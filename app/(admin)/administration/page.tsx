import Link from "next/link";

import FormulaireAnnonce from "@/components/FormulaireAnnonce";
import TableauCopies from "@/components/TableauCopies";
import { recupererCopiesPourAdmin } from "@/lib/supabase/admin";
import { recupererAnnonces, recupererFilsMessagesPourAdmin } from "@/lib/supabase/communication";
import { creerClientServeur } from "@/lib/supabase/server";

function formaterDate(dateIso: string) {
  return new Date(dateIso).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

/**
 * Page admin : /administration
 *
 * L'accès est garanti par le middleware (middleware.ts), qui vérifie
 * pour ce chemin non seulement l'authentification, mais aussi que
 * `profils.role = 'admin'` pour l'utilisateur connecté. Cette page peut
 * donc supposer que les deux conditions sont déjà réunies.
 *
 * Contenu (session 4) : liste des copies déposées par les élèves.
 *
 * Sections "Annonces" et "Messages" ajoutées ensuite — demandé
 * explicitement par l'utilisateur ("je veux ajouter une case de la
 * comminucation... moi ceo of the site talk avec les eleves qui sont
 * dans la plateforme") : publier une annonce visible par tous les
 * élèves connectés, et voir/répondre aux fils de messages privés
 * un-à-un (détail d'un fil sur /administration/messages/[eleveId]).
 */
export default async function PageAdministration() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [copies, annonces, filsMessages] = await Promise.all([
    recupererCopiesPourAdmin(),
    recupererAnnonces(),
    recupererFilsMessagesPourAdmin(),
  ]);

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

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-foreground">Annonces</h2>
        <FormulaireAnnonce />
        {annonces.length === 0 ? (
          <p className="text-sm text-muted-foreground">Aucune annonce publiée pour l&apos;instant.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {annonces.map((annonce) => (
              <li key={annonce.id} className="rounded-lg border border-border bg-surface p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-foreground">{annonce.titre}</p>
                  <p className="text-xs text-subtle-foreground">{formaterDate(annonce.created_at)}</p>
                </div>
                <p className="mt-1 text-sm whitespace-pre-line text-muted-foreground">{annonce.contenu}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-foreground">Messages des élèves</h2>
        {filsMessages.length === 0 ? (
          <p className="text-sm text-muted-foreground">Aucun message pour l&apos;instant.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {filsMessages.map((fil) => (
              <li key={fil.eleveId}>
                <Link
                  href={`/administration/messages/${fil.eleveId}`}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border bg-surface p-4 hover:border-border-strong"
                >
                  <div>
                    <p className="font-medium text-foreground">
                      {fil.eleveNomComplet ?? fil.eleveEmail ?? "Élève"}
                    </p>
                    <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">
                      {fil.dernierMessage.contenu}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    {fil.nonLusDeLEleve > 0 && (
                      <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                        {fil.nonLusDeLEleve}
                      </span>
                    )}
                    <p className="text-xs text-subtle-foreground">{formaterDate(fil.dernierMessage.created_at)}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
