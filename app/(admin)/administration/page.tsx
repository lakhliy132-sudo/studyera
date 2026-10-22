import Link from "next/link";
import type { ReactNode } from "react";

import FormulaireAnnonce from "@/components/FormulaireAnnonce";
import FormulaireDefi, { FormulaireCorrigeDefi } from "@/components/FormulaireDefi";
import TableauCopies from "@/components/TableauCopies";
import { recupererCopiesPourAdmin } from "@/lib/supabase/admin";
import { recupererAnnonces, recupererFilsMessagesPourAdmin } from "@/lib/supabase/communication";
import { recupererDefisPourAdmin } from "@/lib/supabase/defis";
import { creerClientServeur } from "@/lib/supabase/server";
import { listerEleves } from "@/lib/supabase/suiviEleves";

function formaterDate(dateIso: string) {
  return new Date(dateIso).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

/** Copies montrées d'emblée ; les autres sont repliées sous le tableau
 * (8, puis 3 : « copies déposées, réduis-la encore »). */
const COPIES_VISIBLES = 3;
const ANNONCES_VISIBLES = 3;

/** Icônes des cartes, dans le trait du menu de gauche (1.9, 24×24). */
const TRACES = {
  messages: "M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12",
  eleves: "M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M21 19v-1a4 4 0 0 0-3-3.9M15.5 3.1a3.5 3.5 0 0 1 0 6.8",
  copies: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4",
  annonces: "M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1M15 9a4 4 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11",
  defi: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8M12 12h.01",
  cle: "M15 7a4 4 0 1 1-3.9 4.9L4 19v2h3v-2h2v-2h2l1.1-1.1A4 4 0 0 1 15 7",
  suivi: "M4 20V10M10 20V4M16 20v-7M22 20H2",
};

function Icone({ trace, className = "size-5" }: { trace: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={trace} />
    </svg>
  );
}

/** Une carte de la page : même en-tête partout (icône, titre, pastille,
 * action à droite), pour que chaque partie se repère d'un coup d'œil. */
function Carte({
  id,
  trace,
  titre,
  pastille,
  action,
  children,
}: {
  id: string;
  trace: string;
  titre: string;
  pastille?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="flex min-w-0 scroll-mt-24 flex-col gap-4 rounded-[24px] border border-border bg-surface p-5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] sm:p-6"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <Icone trace={trace} />
        </span>
        <h2 className="font-affiche text-2xl text-ink">{titre}</h2>
        {pastille}
        {action && <span className="ms-auto">{action}</span>}
      </div>
      {children}
    </section>
  );
}

/** Formulaire replié derrière un bouton « + », pour que la page montre
 * d'abord ce qui existe, et non des champs vides. */
function Replie({ libelle, children }: { libelle: string; children: ReactNode }) {
  return (
    <details className="group rounded-[16px] border border-dashed border-border-strong open:border-solid open:border-border open:bg-surface-muted/50 open:p-4">
      <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 text-sm font-bold text-primary group-open:mb-3 group-open:p-0 [&::-webkit-details-marker]:hidden">
        <span aria-hidden="true" className="text-lg leading-none transition-transform group-open:rotate-45">
          +
        </span>
        {libelle}
      </summary>
      {children}
    </details>
  );
}

const vide = "rounded-[16px] border border-dashed border-border-strong px-4 py-6 text-center text-sm text-muted-foreground";

/**
 * Page admin : /administration
 *
 * L'accès est garanti par le middleware (middleware.ts), qui vérifie
 * pour ce chemin non seulement l'authentification, mais aussi que
 * `profils.role = 'admin'` pour l'utilisateur connecté.
 *
 * Réorganisée à la demande (« je veux qu'il soit tout organisé ») : la
 * page empilait des titres gris et des formulaires ouverts. Elle a
 * maintenant
 * - en haut, quatre chiffres comptés en base, qui mènent chacun à leur
 *   partie : messages non lus, comptes en attente d'activation, accès
 *   actifs, copies corrigées ;
 * - puis une carte par sujet, toutes avec le même en-tête : Messages et
 *   Élèves côte à côte, les Copies sur toute la largeur, Annonces et
 *   Défi côte à côte ;
 * - les formulaires (annonce, défi) repliés derrière « + », et les listes
 *   longues raccourcies (copies, annonces) avec la suite à déplier ou sur
 *   sa page.
 */
export default async function PageAdministration() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [copies, annonces, filsMessages, defis, eleves] = await Promise.all([
    recupererCopiesPourAdmin(),
    recupererAnnonces(),
    recupererFilsMessagesPourAdmin(),
    recupererDefisPourAdmin(),
    listerEleves(),
  ]);
  const nonLus = filsMessages.reduce((n, f) => n + f.nonLusDeLEleve, 0);
  const enAttente = eleves.filter((e) => e.etat === "attente").length;
  const actifs = eleves.filter((e) => e.etat === "actif").length;
  const corrigees = copies.filter((c) => c.note_total !== null).length;

  const chiffres = [
    { n: nonLus, libelle: nonLus > 1 ? "messages non lus" : "message non lu", href: "#messages", trace: TRACES.messages, alerte: nonLus > 0 },
    { n: enAttente, libelle: "comptes à activer", href: "/administration/acces", trace: TRACES.cle, alerte: enAttente > 0 },
    { n: actifs, libelle: actifs > 1 ? "accès actifs" : "accès actif", href: "/administration/eleves", trace: TRACES.eleves, alerte: false },
    { n: corrigees, libelle: corrigees > 1 ? "copies corrigées" : "copie corrigée", href: "#copies", trace: TRACES.copies, alerte: false },
  ];

  return (
    <main className="flex w-full flex-col gap-6 px-6 pt-16 pb-20 sm:px-9 sm:pt-12 lg:px-16 xl:px-24 2xl:px-40">
      <header className="flex flex-col gap-1">
        <h1 className="font-affiche text-[40px] leading-[1.05] text-ink sm:text-5xl">Espace administrateur</h1>
        <p className="truncate text-sm text-muted-foreground">Connecté en tant que {user?.email}</p>
      </header>

      {/* Les chiffres du jour, chacun mène à sa partie. */}
      <nav aria-label="Résumé" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {chiffres.map((c) => (
          <Link
            key={c.libelle}
            href={c.href}
            className={`group flex flex-col items-start gap-2.5 rounded-[20px] border p-4 sm:flex-row sm:items-center sm:gap-3 transition-all hover:-translate-y-0.5 sm:p-5 ${
              c.alerte ? "border-erreur/40 bg-erreur/[0.06]" : "border-border bg-surface hover:border-primary/40"
            }`}
          >
            <span
              className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${c.alerte ? "bg-erreur text-white" : "bg-primary-tint text-primary"}`}
            >
              <Icone trace={c.trace} className="size-5" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="font-affiche text-3xl leading-none text-ink tabular-nums">{c.n}</span>
              <span className="text-xs leading-tight font-semibold text-muted-foreground sm:text-sm">{c.libelle}</span>
            </span>
          </Link>
        ))}
      </nav>

      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-2">
        {/* Messages des élèves (« et les admins, où ils voient les
            messages ? ») : ils arrivent de « Un problème ? » (/communaute)
            et de /messages. */}
        <Carte
          id="messages"
          trace={TRACES.messages}
          titre="Messages des élèves"
          pastille={
            nonLus > 0 && (
              <span className="rounded-full bg-erreur px-3 py-1 text-xs font-bold text-white">
                {nonLus} non lu{nonLus > 1 ? "s" : ""}
              </span>
            )
          }
        >
          {filsMessages.length === 0 ? (
            <p className={vide}>
              Aucun élève ne vous a encore écrit. Les messages envoyés depuis « Un problème ? » (page Communauté) arriveront ici.
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
                      <p className="truncate font-semibold text-ink">{fil.eleveNomComplet ?? fil.eleveEmail ?? "Élève"}</p>
                      <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">{fil.dernierMessage.contenu}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      {fil.nonLusDeLEleve > 0 && (
                        <span className="rounded-full bg-erreur px-2.5 py-0.5 text-xs font-bold text-white">{fil.nonLusDeLEleve}</span>
                      )}
                      <p className="hidden text-xs text-subtle-foreground sm:block">{formaterDate(fil.dernierMessage.created_at)}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Carte>

        {/* Les deux pages des comptes : activer un accès après paiement
            sur WhatsApp, et voir ce que chaque élève a fait (« où je peux
            voir ce que l'élève a fait dans le site »). */}
        <Carte id="eleves" trace={TRACES.eleves} titre="Élèves">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              {
                href: "/administration/acces",
                trace: TRACES.cle,
                titre: "Accès des élèves",
                detail: "Activer un compte après paiement (3 ou 12 mois).",
                pastille: enAttente > 0 ? `${enAttente} en attente` : null,
              },
              {
                href: "/administration/eleves",
                trace: TRACES.suivi,
                titre: "Suivi des élèves",
                detail: "Ce que chacun a fait sur le site, jour par jour.",
                pastille: null,
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex flex-col gap-2 rounded-[18px] border border-border bg-surface-muted/40 p-4 transition-all hover:-translate-y-0.5 hover:border-primary"
              >
                <span className="flex items-center gap-2">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-primary-tint text-primary">
                    <Icone trace={l.trace} className="size-[18px]" />
                  </span>
                  {l.pastille && <span className="ms-auto rounded-full bg-erreur px-2.5 py-0.5 text-xs font-bold text-white">{l.pastille}</span>}
                </span>
                <span className="flex items-center gap-1.5 font-bold text-ink">
                  {l.titre}
                  <span aria-hidden="true" className="text-primary transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
                <span className="text-sm text-muted-foreground">{l.detail}</span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {eleves.length} compte{eleves.length > 1 ? "s" : ""} au total · {actifs} accès actif{actifs > 1 ? "s" : ""} · {enAttente} en attente
          </p>
        </Carte>
      </div>

      <Carte
        id="copies"
        trace={TRACES.copies}
        titre="Copies déposées"
        pastille={copies.length > 0 && <span className="rounded-full bg-primary-tint px-3 py-1 text-xs font-bold text-primary">{copies.length}</span>}
      >
        <TableauCopies copies={copies.slice(0, COPIES_VISIBLES)} />
        {copies.length > COPIES_VISIBLES && (
          <details className="group">
            <summary className="cursor-pointer list-none text-sm font-bold text-primary hover:underline [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">Voir les {copies.length - COPIES_VISIBLES} autres copies</span>
              <span className="hidden group-open:inline">Masquer les autres copies</span>
            </summary>
            <div className="mt-3">
              <TableauCopies copies={copies.slice(COPIES_VISIBLES)} />
            </div>
          </details>
        )}
      </Carte>

      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-2">
        <Carte
          id="annonces"
          trace={TRACES.annonces}
          titre="Annonces"
          action={
            <Link href="/annonces" className="text-sm font-bold text-primary hover:underline">
              Voir la page →
            </Link>
          }
        >
          <Replie libelle="Nouvelle annonce">
            <FormulaireAnnonce />
          </Replie>
          {annonces.length === 0 ? (
            <p className={vide}>Aucune annonce publiée pour l&apos;instant.</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {annonces.slice(0, ANNONCES_VISIBLES).map((annonce) => (
                <li key={annonce.id} className="rounded-[16px] border border-border bg-surface p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="min-w-0 truncate font-semibold text-ink">{annonce.titre}</p>
                    <p className="shrink-0 text-xs text-subtle-foreground">{formaterDate(annonce.created_at)}</p>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm whitespace-pre-line text-muted-foreground">{annonce.contenu}</p>
                </li>
              ))}
            </ul>
          )}
          {annonces.length > ANNONCES_VISIBLES && (
            <Link href="/annonces" className="text-sm font-bold text-primary hover:underline">
              Les {annonces.length - ANNONCES_VISIBLES} autres sur la page Annonces →
            </Link>
          )}
        </Carte>

        {/* Défi de la semaine de la page Communauté (« Chaque semaine,
            l'équipe publie un défi […] puis le corrigé est publié »). Le
            plus récent est celui que voient les élèves. */}
        <Carte id="defi" trace={TRACES.defi} titre="Défi de la semaine">
          <Replie libelle="Nouveau défi">
            <FormulaireDefi />
          </Replie>
          {defis.length === 0 ? (
            <p className={vide}>Aucun défi publié pour l&apos;instant.</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {defis.map((defi, index) => (
                <li key={defi.id} className="flex flex-col gap-2 rounded-[16px] border border-border bg-surface p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-semibold text-ink">
                      {defi.titre}
                      {index === 0 && <span className="ms-2 rounded-full bg-primary-tint px-2 py-0.5 text-xs font-bold text-primary">en ligne</span>}
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
        </Carte>
      </div>
    </main>
  );
}
