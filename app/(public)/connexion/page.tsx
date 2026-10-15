import Image from "next/image";
import { redirect } from "next/navigation";

import FormulaireConnexion from "@/components/FormulaireConnexion";
import { FORMULES } from "@/lib/abonnement";
import { creerClientServeur } from "@/lib/supabase/server";

interface PagePropsConnexion {
  searchParams: Promise<{ mode?: string }>;
}

/**
 * Page de connexion et d'inscription : /connexion
 * (`?mode=inscription` pour ouvrir directement l'onglet d'inscription,
 * c'est le lien du bouton « S'inscrire »).
 *
 * Refaite à la demande de l'utilisateur (« ici fais quelque chose de
 * beau, et aussi pour se connecter et aussi s'inscrire »), avec la
 * démarche qu'il a fixée : l'élève crée son compte, paie sur WhatsApp,
 * puis c'est lui qui active l'accès (lib/acces.ts). Le panneau sombre
 * explique ces trois étapes avant même l'inscription, pour que personne
 * ne s'étonne de trouver un compte « en attente ».
 *
 * À gauche le formulaire (Google ou e-mail, components/FormulaireConnexion),
 * à droite le panneau, avec une vraie capture du site en bas. Sur
 * téléphone, le formulaire passe en premier. Une personne déjà connectée
 * est renvoyée vers son tableau de bord (ou /acces, via le middleware).
 *
 * C'est aussi vers cette page que le middleware renvoie toute personne
 * non connectée qui ouvre un chemin protégé.
 */
export default async function PageConnexion({ searchParams }: PagePropsConnexion) {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) redirect("/");

  const { mode } = await searchParams;
  const modeInitial = mode === "inscription" ? "inscription" : mode === "oubli" ? "oubli" : "connexion";
  const [trimestre, annee] = FORMULES;

  const etapes = [
    { titre: "Crée ton compte", texte: "Avec Google ou ton e-mail, en une minute." },
    { titre: "Paie sur WhatsApp", texte: `${annee.prix} DH l'année ou ${trimestre.prix} DH le trimestre. Le message s'écrit tout seul.` },
    { titre: "On active ton accès", texte: "Dès réception : leçons, œuvres et sujets régionaux s'ouvrent." },
  ];

  return (
    <main className="flex w-full flex-col px-6 pt-8 pb-16 sm:px-9 sm:pt-12 lg:px-16 xl:px-24 2xl:px-40">
      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
        <section className="animate-entree-carte flex flex-col justify-center rounded-[32px] border border-border bg-surface p-7 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.45)] sm:p-12 lg:px-16">
          <FormulaireConnexion modeInitial={modeInitial} />
        </section>

        <aside
          className="animate-entree-carte relative flex min-h-[560px] flex-col overflow-hidden rounded-[32px] p-8 text-white sm:p-12"
          style={{
            animationDelay: "120ms",
            background: "linear-gradient(155deg, var(--fond-sombre-actif) 0%, var(--fond-sombre-haut) 45%, var(--fond-sombre-bas) 100%)",
          }}
        >
          {/* Quadrillage léger, comme sur l'accueil. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
              maskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black, transparent 75%)",
            }}
          />

          <div className="relative flex flex-col gap-3">
            <span dir="rtl" lang="ar" className="font-ruqaa text-2xl text-white/80">
              مرحبا بيك فـ StudyEra
            </span>
            <h2 className="font-titre text-3xl leading-tight sm:text-[40px]">Comment ça marche</h2>
          </div>

          <ol className="relative mt-9 flex flex-col">
            {etapes.map((e, i) => (
              <li key={e.titre} className="relative flex gap-5 pb-8 last:pb-0">
                {i < etapes.length - 1 && (
                  <span aria-hidden="true" className="absolute top-12 bottom-1 start-[21px] w-px border-s-2 border-dashed border-white/25" />
                )}
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/12 font-titre text-lg ring-1 ring-white/25 backdrop-blur">
                  {i + 1}
                </span>
                <span className="flex flex-col gap-1 pt-1.5">
                  <span className="text-lg font-bold">{e.titre}</span>
                  <span className="text-[15px] leading-relaxed text-white/75">{e.texte}</span>
                </span>
              </li>
            ))}
          </ol>

          {/* Une vraie page du site, qui dépasse du bas du panneau. */}
          <div className="relative mt-auto -mb-24 translate-y-4 pt-10 sm:-mb-28 lg:ms-10 lg:-me-24">
            <div className="-rotate-2 overflow-hidden rounded-[18px] border border-white/15 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src="/apercus/examen-regional-sombre.webp"
                alt=""
                width={1400}
                height={779}
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
