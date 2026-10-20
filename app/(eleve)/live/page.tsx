import Link from "next/link";
import type { CSSProperties } from "react";

import ActualiserPage from "@/components/ActualiserPage";
import FormulaireLive from "@/components/FormulaireLive";
import { lireAcces } from "@/lib/acces";
import { jetonSalle, lireLiveEnCours, liveConfigure, tableLivesPrete, type LiveEnCours } from "@/lib/live";
import { deriverPrenom } from "@/lib/prenom";
import { creerClientServeur } from "@/lib/supabase/server";

import { terminerLive } from "./actions";

/**
 * Page protégée : /live
 *
 * « On ajoute une nouvelle case qui s'appelle LIVE » (menu de gauche
 * seulement), puis « un bouton Démarrer le live dans le site » : l'admin
 * démarre un live depuis cette page, les élèves dont l'accès est complet
 * le regardent ici même. Diffusion par Daily (lib/live.ts), dans une
 * salle privée où seul l'admin envoie image et son.
 *
 * Sans live en cours, l'élève voit « Bientôt disponible », dans la carte
 * sombre faite belle à la demande (« la partie bientôt disponible,
 * fais-la belle »), et la page se recharge seule toutes les 30 s pour
 * que le live apparaisse dès qu'il commence.
 *
 * Sans `DAILY_API_KEY` ou sans la table `lives`, l'admin voit ce qui
 * manque au lieu d'un bouton qui échouerait.
 */
export default async function PageLive() {
  const acces = await lireAcces();
  const configure = liveConfigure();
  const tablePrete = configure ? await tableLivesPrete() : false;
  const live = configure && tablePrete ? await lireLiveEnCours() : null;

  return (
    <main className="relative flex w-full flex-col gap-8 px-6 pt-16 pb-20 sm:gap-10 sm:px-9 sm:pt-12 lg:px-16 xl:px-24 2xl:px-40">
      <header className="flex flex-col gap-3">
        <p className="flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-bold tracking-[0.18em] text-primary uppercase">
          <span aria-hidden="true" className="relative flex size-2">
            {live && <span className="absolute inset-0 animate-ping rounded-full bg-erreur opacity-70" />}
            <span className={`relative size-2 rounded-full ${live ? "bg-erreur" : "bg-border-strong"}`} />
          </span>
          {live ? "En direct" : "Live"}
        </p>
        <h1 className="font-affiche text-[40px] leading-[1.05] text-ink sm:text-6xl">{live ? live.titre : "Live"}</h1>
        {acces.admin && (
          <p className="w-fit rounded-full bg-primary-tint px-3 py-1 text-xs font-bold text-primary">Espace administrateur</p>
        )}
      </header>

      {acces.admin ? (
        <EspaceAdmin configure={configure} tablePrete={tablePrete} live={live} />
      ) : live && acces.complet ? (
        <Lecteur live={live} proprietaire={false} />
      ) : (
        <>
          {configure && tablePrete && <ActualiserPage secondes={30} />}
          <CarteBientot />
        </>
      )}
    </main>
  );
}

async function nomAffiche(): Promise<string> {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return "Élève";
  const { data } = await supabase.from("profils").select("nom_complet").eq("id", user.id).maybeSingle();
  return deriverPrenom((data?.nom_complet as string | null) ?? null, user.email ?? null);
}

/** La salle Daily dans la page, avec un jeton créé pour cette personne. */
async function Lecteur({ live, proprietaire }: { live: LiveEnCours; proprietaire: boolean }) {
  let jeton: string | null = null;
  try {
    jeton = await jetonSalle(live.salleNom, { proprietaire, nom: await nomAffiche() });
  } catch {
    jeton = null;
  }
  if (!jeton) {
    return (
      <p className="rounded-[20px] border border-border bg-surface p-6 text-center text-muted-foreground">
        Le live n&apos;a pas pu s&apos;ouvrir. Recharge la page dans un instant.
      </p>
    );
  }
  return (
    <iframe
      title={live.titre}
      src={`${live.salleUrl}?t=${encodeURIComponent(jeton)}`}
      allow="camera; microphone; fullscreen; speaker; display-capture; autoplay"
      className="h-[72vh] min-h-[440px] w-full rounded-[24px] border border-border bg-black shadow-[0_24px_60px_-34px_rgba(15,23,42,0.5)]"
    />
  );
}

function EspaceAdmin({ configure, tablePrete, live }: { configure: boolean; tablePrete: boolean; live: LiveEnCours | null }) {
  if (!configure || !tablePrete) {
    return (
      <section className="flex flex-col gap-3 rounded-[24px] border-2 border-dashed border-border-strong p-6 sm:p-8">
        <p className="font-titre text-xl text-ink">Le live n&apos;est pas encore branché</p>
        <ul className="flex list-disc flex-col gap-2 ps-5 text-[15px] text-muted-foreground">
          {!configure && (
            <li>
              Crée un compte sur daily.co, copie la clé d&apos;API (Developers → API keys) et ajoute-la sur Vercel sous le nom{" "}
              <code className="rounded bg-surface-muted px-1.5 py-0.5 text-[13px]">DAILY_API_KEY</code>, puis redéploie.
            </li>
          )}
          {!tablePrete && (
            <li>
              Lance la migration{" "}
              <code className="rounded bg-surface-muted px-1.5 py-0.5 text-[13px]">20261104000000_lives.sql</code> dans
              l&apos;éditeur SQL de Supabase.
            </li>
          )}
        </ul>
        <p className="text-sm text-muted-foreground">En attendant, les élèves voient « Bientôt disponible ».</p>
      </section>
    );
  }
  if (!live) {
    return (
      <section className="flex flex-col gap-4 rounded-[24px] border border-border bg-surface p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-1">
          <p className="font-titre text-xl text-ink">Démarrer un live</p>
          <p className="text-sm text-muted-foreground">
            Les élèves dont l&apos;accès est activé le verront ici, dans le site. Toi seul envoies l&apos;image et le son ; eux
            regardent et peuvent écrire dans le chat.
          </p>
        </div>
        <FormulaireLive />
      </section>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <form action={terminerLive} className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          En direct depuis{" "}
          {new Date(live.debut).toLocaleTimeString("fr-FR", { timeZone: "Africa/Casablanca", hour: "2-digit", minute: "2-digit" })}. Autorise
          la caméra et le micro quand le navigateur le demande.
        </p>
        <button type="submit" className="rounded-[14px] border border-erreur px-5 py-2.5 text-sm font-bold text-erreur hover:bg-erreur hover:text-white">
          Terminer le live
        </button>
      </form>
      <Lecteur live={live} proprietaire />
    </div>
  );
}

function CarteBientot() {
  return (
    <section
      className="animate-entree-carte relative grid overflow-hidden rounded-[32px] text-white shadow-[0_34px_70px_-34px_rgba(10,16,32,0.75)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
      style={{ background: "linear-gradient(150deg, var(--fond-sombre-actif) 0%, var(--fond-sombre-haut) 50%, var(--fond-sombre-bas) 100%)" }}
    >
      {/* Quadrillage de cahier, comme l'accueil, en blanc très léger. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      <div className="relative flex flex-col items-start gap-5 p-8 sm:p-12 lg:py-16">
        <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-[0.18em] uppercase">
          <span aria-hidden="true" className="size-2 rounded-full bg-white/40" />
          Bientôt disponible
        </span>
        <h2 className="font-affiche text-[42px] leading-[1.02] sm:text-6xl">
          Le Live
          <br />
          <span className="relative inline-block">
            arrive bientôt
            <svg aria-hidden="true" viewBox="0 0 300 24" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-2 h-4 w-full text-[#f2b35c]">
              <path className="trace-main" pathLength={1} d="M4 16C60 6 120 4 180 9s90 8 116-2" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </span>
        </h2>
        <p dir="rtl" lang="ar" className="font-ruqaa text-2xl text-[#f2b35c] sm:text-3xl">
          قريبا إن شاء الله
        </p>
        <p className="max-w-[420px] text-base leading-relaxed text-white/75 sm:text-lg">
          Cette page s&apos;allumera très bientôt. En attendant, continue tes révisions.
        </p>
        <Link
          href="/matieres"
          className="mt-1 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-bold transition-transform hover:-translate-y-0.5"
          style={{ color: "var(--fond-sombre-haut)" }}
        >
          Continuer à réviser <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Le panneau « En direct », encore éteint, et ses ondes. */}
      <div aria-hidden="true" className="relative flex min-h-[280px] items-center justify-center pb-10 lg:min-h-0 lg:pb-0">
        {[0, 1200, 2400].map((d) => (
          <span
            key={d}
            className="onde-live absolute size-[280px] rounded-full border-2 border-white/40 sm:size-[360px]"
            style={{ "--delai": `${d}ms` } as CSSProperties}
          />
        ))}
        <span className="absolute size-40 rounded-full bg-white/[0.06] blur-xl" />
        <span className="relative flex flex-col items-center gap-4">
          <span className="flex size-24 items-center justify-center rounded-[28px] border border-white/25 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-12">
              <path d={TRACE_LIVE} />
            </svg>
          </span>
          <span className="flex items-center gap-2 rounded-[10px] border-2 border-white/25 px-4 py-1.5 font-affiche text-lg tracking-[0.2em] text-white/45">
            <span className="size-2.5 rounded-full bg-white/30" />
            EN DIRECT
          </span>
        </span>
      </div>
    </section>
  );
}

/** Un point entouré d'ondes : la même icône que la case du menu. */
const TRACE_LIVE =
  "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M8.5 15.5a5 5 0 0 1 0-7M15.5 8.5a5 5 0 0 1 0 7M5.6 18.4a9 9 0 0 1 0-12.8M18.4 5.6a9 9 0 0 1 0 12.8";
