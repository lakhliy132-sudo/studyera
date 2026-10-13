"use client";

import { useEffect, useState } from "react";

import type { PlusFormule } from "@/lib/abonnement";

export interface OptionFormule {
  cle: string;
  nom: string;
  prix: number;
  periode: string;
  parMois: number;
  plus: PlusFormule[];
  lien: string;
  message: string;
}

/**
 * Choix de la formule sur /acces, avec l'aperçu du message WhatsApp
 * (« elle est pas très belle, fais-moi quelque chose de mieux, de beau,
 * un peu interactif »).
 *
 * Un interrupteur Année / Trimestre change, sans recharger, le prix (qui
 * glisse), les « + » (qui entrent l'un après l'autre) et le bouton. À
 * côté, une conversation WhatsApp montre le message exact qui partira,
 * e-mail du compte compris : « … كيكتب » une fraction de seconde, puis
 * la bulle. Rien n'y est inventé : c'est le texte du lien wa.me
 * (lib/abonnement.ts, messageWhatsapp).
 *
 * Couleurs en dur : le vert WhatsApp (bouton, bandeau et bulle de
 * l'aperçu), couleur de la marque que l'élève reconnaît.
 */
export default function ChoixFormuleAcces({
  options,
  numero,
  economie,
}: {
  options: OptionFormule[];
  numero: string;
  /** Écart au mois entre les deux formules, en %, pour la pastille. */
  economie: number;
}) {
  const [indice, setIndice] = useState(0);
  const [ecrit, setEcrit] = useState(true);
  const choisie = options[indice];

  // « كيكتب… » puis la bulle, à chaque changement de formule.
  useEffect(() => {
    setEcrit(false);
    const minuteur = setTimeout(() => setEcrit(true), 650);
    return () => clearTimeout(minuteur);
  }, [indice]);

  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-8">
      {/* ——— La formule ——— */}
      <section className="flex flex-col gap-7 rounded-[30px] border border-border bg-surface p-6 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.5)] sm:p-9">
        <div className="relative grid grid-cols-2 rounded-full bg-surface-muted p-1.5" role="radiogroup" aria-label="الاشتراك">
          <span
            aria-hidden="true"
            className="absolute inset-y-1.5 start-1.5 w-[calc(50%-6px)] rounded-full bg-primary shadow-[0_10px_24px_-10px_var(--color-primary)] transition-transform duration-500 ease-[cubic-bezier(0.3,1.3,0.5,1)]"
            // Page en RTL : la seconde option est à gauche.
            style={{ transform: indice === 1 ? "translateX(-100%)" : "translateX(0)" }}
          />
          {options.map((o, i) => (
            <button
              key={o.cle}
              type="button"
              role="radio"
              aria-checked={indice === i}
              onClick={() => setIndice(i)}
              className={`relative flex items-center justify-center gap-2 rounded-full py-3 text-base font-bold transition-colors ${
                indice === i ? "text-primary-foreground" : "text-muted-foreground hover:text-ink"
              }`}
            >
              {o.nom}
              {i === 0 && economie > 0 && (
                <span
                  dir="ltr"
                  className={`rounded-full px-2 py-0.5 text-[11px] font-bold transition-colors ${
                    indice === i ? "bg-white/20 text-primary-foreground" : "bg-primary-tint text-primary"
                  }`}
                >
                  −{economie}%
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-end gap-3">
            <span key={choisie.cle} className="inline-block font-affiche text-[88px] leading-[0.85] text-ink tabular-nums animate-mot-entre sm:text-[110px]">
              {choisie.prix}
            </span>
            <span className="flex flex-col pb-2">
              <span className="text-xl font-bold text-ink">درهم</span>
              <span className="text-[15px] text-muted-foreground">{choisie.periode}</span>
            </span>
          </div>
          <span className="rounded-2xl bg-primary-tint px-4 py-2.5 text-[15px] text-ink">
            يعني <strong className="font-affiche text-xl text-primary">{choisie.parMois}</strong> درهم فالشهر
          </span>
        </div>

        <ul key={`plus-${choisie.cle}`} className="grid grid-cols-1 gap-x-6 gap-y-3 border-t border-border pt-6 sm:grid-cols-2">
          {choisie.plus.map((p, i) => (
            <li
              key={p.texte}
              className={`flex items-start gap-3 text-[15px] animate-entree-carte ${p.fort ? "font-bold text-ink sm:col-span-2" : "text-foreground"}`}
              style={{ animationDelay: `${i * 45}ms` }}
            >
              <span
                className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-sm leading-none font-bold ${
                  p.fort ? "bg-primary text-primary-foreground" : "bg-primary-tint text-primary"
                }`}
              >
                +
              </span>
              {p.texte}
            </li>
          ))}
        </ul>

        <a
          href={choisie.lien}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-5 text-lg font-bold text-white transition-transform hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
        >
          <span aria-hidden="true" className="absolute inset-0 rounded-2xl animate-pulsation" style={{ backgroundColor: "#25d366" }} />
          <IconeWhatsapp className="relative size-6 transition-transform group-hover:-rotate-12" />
          <span className="relative">صيفط الميساج فواتساب</span>
        </a>
      </section>

      {/* ——— L'aperçu du message ——— */}
      <section aria-label="الميساج اللي غادي يتصيفط" className="flex flex-col gap-3 lg:sticky lg:top-28">
        <div className="overflow-hidden rounded-[30px] border border-border bg-surface shadow-[0_30px_70px_-40px_rgba(15,23,42,0.55)]">
          <div className="flex items-center gap-3 px-5 py-4 text-white" style={{ background: "linear-gradient(135deg, #128c7e, #075e54)" }}>
            <span className="flex size-10 items-center justify-center rounded-full bg-white/20 font-affiche text-lg">S</span>
            <span className="flex flex-col">
              <span className="font-bold">StudyEra</span>
              <span dir="ltr" className="text-end text-xs text-white/75">
                {numero}
              </span>
            </span>
            <IconeWhatsapp className="ms-auto size-6 text-white/80" />
          </div>

          <div
            className="flex min-h-[260px] flex-col justify-end gap-3 p-5"
            style={{
              backgroundColor: "var(--color-surface-muted)",
              backgroundImage: "radial-gradient(color-mix(in srgb, var(--color-border) 90%, transparent) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          >
            <span className="self-center rounded-lg bg-surface px-3 py-1 text-xs text-muted-foreground shadow-sm">اليوم</span>
            {ecrit ? (
              <div
                key={choisie.cle}
                className="max-w-[88%] self-start rounded-2xl rounded-ss-sm px-4 py-3 text-[15px] leading-relaxed text-ink shadow-sm animate-entree-carte"
                style={{ backgroundColor: "color-mix(in srgb, #25d366 24%, var(--color-surface))" }}
              >
                <p className="break-words whitespace-pre-line">{choisie.message}</p>
                <span className="mt-1 flex items-center justify-end gap-1 text-[11px] text-muted-foreground">
                  دابا
                  <svg viewBox="0 0 18 12" className="h-3 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M1 6.5 4.5 10 11 2M7 9.5l.5.5L14 2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 self-start rounded-2xl rounded-ss-sm bg-surface px-4 py-3.5 shadow-sm" aria-label="كيكتب">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="size-2 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: `${i * 120}ms` }} />
                ))}
              </div>
            )}
          </div>
        </div>
        <p className="px-2 text-sm leading-relaxed text-muted-foreground">
          هادا هو الميساج اللي غادي يتكتب ليك فواتساب، بالإيميل ديال الحساب باش نعرفو شكون نفعلو. ما عليك غير تصيفطو.
        </p>
      </section>
    </div>
  );
}

/** Logo WhatsApp (glyphe officiel simplifié). */
function IconeWhatsapp({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.93.96-3.48-.23-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.44 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.37-11.37 0-3.03-1.18-5.89-3.33-8.03" />
    </svg>
  );
}
