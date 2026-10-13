import Link from "next/link";

import FormulaireNouveauMotDePasse from "@/components/FormulaireNouveauMotDePasse";
import { creerClientServeur } from "@/lib/supabase/server";

/**
 * /connexion/nouveau-mot-de-passe : où mène le lien « mot de passe
 * oublié » (via /api/auth/retour, qui ouvre la session). Sans session
 * (lien expiré ou déjà utilisé), on le dit et on renvoie vers la
 * demande d'un nouveau lien.
 */
export default async function PageNouveauMotDePasse() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex w-full flex-col items-center px-6 pt-12 pb-20 sm:px-9 lg:px-16 xl:px-24 2xl:px-40">
      <section className="animate-entree-carte flex w-full max-w-lg flex-col gap-6 rounded-[32px] border border-border bg-surface p-8 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.45)] sm:p-12">
        <h1 className="font-titre text-[28px] leading-tight text-ink">Nouveau mot de passe</h1>
        {user ? (
          <>
            <p className="text-[15px] text-muted-foreground">Pour le compte {user.email}.</p>
            <FormulaireNouveauMotDePasse />
          </>
        ) : (
          <>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Ce lien a expiré ou a déjà servi. Demande-en un nouveau : il arrive en quelques secondes.
            </p>
            <Link href="/connexion?mode=oubli" className="self-start rounded-2xl bg-primary px-6 py-3.5 text-[15px] font-bold text-primary-foreground">
              Recevoir un nouveau lien
            </Link>
          </>
        )}
      </section>
    </main>
  );
}
