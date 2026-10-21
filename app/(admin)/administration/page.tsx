import Link from "next/link";

import FormulaireAnnonce from "@/components/FormulaireAnnonce";
import FormulaireDefi, { FormulaireCorrigeDefi } from "@/components/FormulaireDefi";
import TableauCopies from "@/components/TableauCopies";
import { recupererCopiesPourAdmin } from "@/lib/supabase/admin";
import { recupererAnnonces, recupererFilsMessagesPourAdmin } from "@/lib/supabase/communication";
import { recupererDefisPourAdmin } from "@/lib/supabase/defis";
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

  const [copies, annonces, filsMessages, defis] = await Promise.all([
    recupererCopiesPourAdmin(),
    recupererAnnonces(),
    recupererFilsMessagesPourAdmin(),
    recupererDefisPourAdmin(),
  ]);
  const nonLus = filsMessages.reduce((n, f) => n + f.nonLusDeLEleve, 0);

  return (
    <main className="flex w-full flex-col gap-6 px-6 pt-16 pb-20 sm:px-9 sm:pt-12 lg:px-16 xl:px-24 2xl:px-40">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Espace administrateur</h1>
        <p className="text-sm text-muted-foreground">Connecté en tant que : {user?.email}</p>
      </div>

      {/* Messages des élèves, en premier (« et les admins, où ils voient
          les messages ? », puis « non, [rien dans la] partie de
          l'administration ») : ils étaient tout en bas, après les copies,
          les annonces et le défi. Ils arrivent de « Un problème ? »
          (/communaute) et de /messages. */}
      <section id="messages" className="flex scroll-mt-24 flex-col gap-4 rounded-[24px] border border-border bg-surface p-5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
              <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12" />
            </svg>
          </span>
          <h2 className="font-affiche text-2xl text-ink">Messages des élèves</h2>
          {nonLus > 0 && (
            <span className="rounded-full bg-erreur px-3 py-1 text-xs font-bold text-white">
              {nonLus} non lu{nonLus > 1 ? "s" : ""}
            </span>
          )}
        </div>
        {filsMessages.length === 0 ? (
          <p className="rounded-[16px] border border-dashed border-border-strong px-4 py-6 text-center text-sm text-muted-foreground">
            Aucun élève ne vous a encore écrit. Les messages envoyés depuis « Un problème ? » (page Communauté) arriveront
            ici.
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {filsMessages.map((fil) => (
              <li key={fil.eleveId}>
                <Link
                  href={`/administration/messages/${fil.eleveId}`}
                  className="flex items-center justify-between gap-3 rounded-[16px] border border-border bg-surface p-4 transition-colors hover:border-primary"
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium text-foreground">
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
                    <p className="hidden text-xs text-subtle-foreground sm:block">{formaterDate(fil.dernierMessage.created_at)}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Activation des comptes après paiement sur WhatsApp (accès payant). */}
      <Link
        href="/administration/acces"
        className="flex items-center justify-between rounded-2xl border border-primary/30 bg-primary-tint px-5 py-4 font-semibold text-primary transition-colors hover:border-primary"
      >
        Accès des élèves : activer un compte après paiement
        <span aria-hidden="true">→</span>
      </Link>

      {/* Ce que chaque élève a fait sur le site (« où je peux voir ce que
          l'élève a fait dans le site »). */}
      <Link
        href="/administration/eleves"
        className="flex items-center justify-between rounded-2xl border border-primary/30 bg-primary-tint px-5 py-4 font-semibold text-primary transition-colors hover:border-primary"
      >
        Suivi des élèves : ce que chacun a fait sur le site
        <span aria-hidden="true">→</span>
      </Link>

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

      {/* Défi de la semaine de la page Communauté (« Chaque semaine,
          l'équipe publie un défi […] puis le corrigé est publié »). Le
          plus récent est celui que voient les élèves. */}
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-foreground">Défi de la semaine</h2>
        <FormulaireDefi />
        {defis.length === 0 ? (
          <p className="text-sm text-muted-foreground">Aucun défi publié pour l&apos;instant.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {defis.map((defi, index) => (
              <li key={defi.id} className="flex flex-col gap-2 rounded-lg border border-border bg-surface p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-medium text-foreground">
                    {defi.titre}
                    {index === 0 && <span className="ms-2 rounded-full bg-primary-tint px-2 py-0.5 text-xs font-semibold text-primary">en ligne</span>}
                  </p>
                  <p className="text-xs text-subtle-foreground">
                    Jusqu&apos;au {formaterDate(defi.dateLimite)} · {defi.nombreReponses} réponse{defi.nombreReponses > 1 ? "s" : ""}
                    {defi.corrige ? " · corrigé publié" : ""}
                  </p>
                </div>
                <FormulaireCorrigeDefi defiId={defi.id} corrigeActuel={defi.corrige} />
              </li>
            ))}
          </ul>
        )}
      </section>

    </main>
  );
}
