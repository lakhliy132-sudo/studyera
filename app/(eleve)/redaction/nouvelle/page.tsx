import Link from "next/link";
import { redirect } from "next/navigation";

import FormulaireCopie, {
  type SujetChoisissable,
} from "@/components/FormulaireCopie";
import { IconeFleche, IconePlume } from "@/components/icones";
import { cleCorrecteurPresente } from "@/lib/correcteur";
import { creerClientServeur } from "@/lib/supabase/server";
import { recupererQuotaRestant } from "@/lib/supabase/tableauDeBord";

/** Ligne de `sujets` avec l'œuvre imbriquée (relation directe
 * sujets.oeuvre_id -> oeuvres.id). */
interface LigneSujet {
  id: string;
  titre: string;
  type: string;
  consigne: string;
  oeuvres: { titre_fr: string } | null;
}

/**
 * /redaction/nouvelle — le « Correcteur IA ».
 *
 * L'élève choisit un des sujets du programme, écrit ou colle sa
 * rédaction, et reçoit une correction : une note sur 20 détaillée en
 * forme et fond, la liste des erreurs avec leur explication, ce qu'il a
 * réussi et ce qu'il doit travailler.
 *
 * La page n'affiche que ce qui marche vraiment : sans clé d'API
 * (`ANTHROPIC_API_KEY` dans `.env.local`), elle le dit et n'offre pas
 * un formulaire qui échouerait à l'envoi.
 */
export default async function PageNouvelleRedaction() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const [{ data: lignes }, quotaRestant] = await Promise.all([
    supabase
      .from("sujets")
      .select("id, titre, type, consigne, oeuvres(titre_fr)")
      .order("type")
      .returns<LigneSujet[]>(),
    recupererQuotaRestant(user.id),
  ]);

  const sujets: SujetChoisissable[] = (lignes ?? []).map((s) => ({
    id: s.id,
    titre: s.titre,
    type: s.type,
    consigne: s.consigne,
    oeuvreTitre: s.oeuvres?.titre_fr ?? null,
  }));
  const correcteurPret = cleCorrecteurPresente();

  return (
    <main className="flex flex-col">
      <div className="flex w-full max-w-[860px] flex-col gap-6 px-6 pt-6 pb-10 sm:px-9 lg:px-16 xl:px-24 2xl:px-40 sm:pt-9 sm:pb-16">
        <Link
          href="/tableau-de-bord"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <IconeFleche className="size-4 rotate-180" />
          Retour au tableau de bord
        </Link>

        <div className="flex items-center gap-3.5">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-[13px] bg-primary-tint text-primary">
            <IconePlume className="size-5" />
          </span>
          <div>
            <h1 className="font-titre text-2xl font-bold text-ink sm:text-3xl">
              Correcteur <span className="text-primary italic">IA</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Une note sur 20, tes erreurs expliquées et ce qu&apos;il faut
              retravailler.
            </p>
          </div>
        </div>

        {!correcteurPret && (
          <p className="rounded-[14px] border border-dashed border-border-strong bg-surface p-5 text-sm text-muted-foreground">
            Le correcteur n&apos;est pas encore relié à un modèle : la clé{" "}
            <code className="rounded bg-surface-muted px-1.5 py-0.5 text-[13px]">
              ANTHROPIC_API_KEY
            </code>{" "}
            manque dans le fichier <code>.env.local</code>. Ajoute-la et
            relance le serveur pour activer la correction.
          </p>
        )}

        {sujets.length === 0 ? (
          <p className="rounded-[14px] border border-dashed border-border-strong bg-surface p-5 text-sm text-muted-foreground">
            Aucun sujet n&apos;est encore enregistré : il en faut un pour
            corriger une copie, puisque la correction juge d&apos;abord si tu
            réponds à la consigne.
          </p>
        ) : (
          <FormulaireCopie
            sujets={sujets}
            quotaRestant={quotaRestant}
            correcteurPret={correcteurPret}
          />
        )}

        <p className="text-xs leading-relaxed text-subtle-foreground">
          La correction est faite par un modèle de langage. Elle t&apos;aide à
          progresser, mais elle n&apos;est pas la note de ton professeur :
          garde ton esprit critique sur ce qu&apos;elle te dit.
        </p>
      </div>
    </main>
  );
}
