import Link from "next/link";

import BoutonCopier from "@/components/BoutonCopier";
import ChoixFormuleAcces, { type OptionFormule } from "@/components/ChoixFormuleAcces";
import { IconeCadenas, IconeCoche, IconeHorloge, IconeLivre, IconeLivreOuvert } from "@/components/icones";
import {
  FORMULES,
  economieMensuelle,
  lienWhatsapp,
  messageWhatsapp,
  numeroWhatsappLisible,
  plusFormule,
  prixParMois,
} from "@/lib/abonnement";
import { aujourdhui, lireAcces } from "@/lib/acces";
import { prochaineSession } from "@/lib/calendrier";
import { plusCommunsFormules } from "@/lib/plusFormules";

const MOIS = ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر"];

/** « 28 ماي 2027 », à partir d'une date AAAA-MM-JJ. */
function dateLongue(iso: string): string {
  const [annee, mois, jour] = iso.split("-").map(Number);
  return `${jour} ${MOIS[mois - 1]} ${annee}`;
}

/**
 * /acces : où en est le compte de l'élève, et comment l'activer.
 *
 * Démarche voulue par l'utilisateur : « quand il s'inscrit ou crée un
 * compte, c'est moi qui vais lui donner l'accès quand il payera sur
 * WhatsApp ». Un compte connecté mais pas activé arrive ici (middleware
 * et accueil le redirigent).
 *
 * Refaite après « elle est pas très belle, fais-moi quelque chose de
 * mieux, de beau, un peu interactif » :
 * - un bandeau sombre avec les trois étapes sur une piste qui se remplit
 *   jusqu'à l'étape en cours (qui pulse), et l'e-mail du compte à copier ;
 * - le choix de la formule par interrupteur, avec l'aperçu du message
 *   WhatsApp exact qui partira (components/ChoixFormuleAcces.tsx) ;
 * - l'aperçu gratuit en trois cartes.
 *
 * En darija, comme les prix de l'accueil visiteur.
 */
export default async function PageAcces() {
  const [acces, plusCommuns] = await Promise.all([lireAcces(), plusCommunsFormules()]);
  const session = prochaineSession();
  const enCours = acces.fin !== null && acces.fin >= aujourdhui();
  const [trimestre, annee] = FORMULES;

  const options: OptionFormule[] = [annee, trimestre].map((f) => ({
    cle: f.cle,
    nom: f.nom,
    prix: f.prix,
    periode: f.periode,
    parMois: prixParMois(f),
    plus: plusFormule(f, plusCommuns, session?.debut ?? null),
    lien: lienWhatsapp(f, acces.email),
    message: messageWhatsapp(f, acces.email),
  }));

  // Étape en cours : 1 = paiement (le compte existe toujours ici),
  // 2 = tout est fait.
  const etapeCourante = acces.complet ? 3 : 1;
  const etapes = [
    { titre: "تصاوب الحساب", Icone: IconeCoche },
    { titre: "خلص فواتساب", Icone: IconeCoche },
    { titre: "كنفعلو ليك الحساب", Icone: IconeCadenas },
  ];

  const titre =
    acces.complet && acces.verrouActif && !acces.admin
      ? "الحساب ديالك مفعّل."
      : acces.complet
        ? "عندك الولوج لكلشي."
        : acces.fin
          ? "الاشتراك ديالك سالا."
          : "باقي غير خطوة وحدة.";
  const texte = enCours
    ? `الولوج ديالك خدام حتى ${dateLongue(acces.fin!)}. تقدر تجدد من دابا إلا بغيتي.`
    : acces.complet
      ? "تقدر تدخل لكلشي فالموقع."
      : acces.fin
        ? `الولوج ديالك سالا نهار ${dateLongue(acces.fin)}. جدد الاشتراك فواتساب وكلشي يتحل من جديد.`
        : "الحساب تصاوب. ختار العرض، صيفط الميساج فواتساب، وملي يوصلنا الخلاص كنفعلو ليك الحساب.";

  return (
    <main dir="rtl" lang="ar" className="flex w-full flex-col gap-14 px-6 pt-16 pb-20 font-arabe sm:px-9 sm:pt-10 lg:px-16 xl:px-24 2xl:px-40">
      {/* ——— Bandeau : où en est le compte ——— */}
      <header
        className="animate-entree-carte relative overflow-hidden rounded-[34px] p-7 text-white sm:p-12"
        style={{ background: "linear-gradient(150deg, var(--fond-sombre-actif) 0%, var(--fond-sombre-haut) 50%, var(--fond-sombre-bas) 100%)" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage: "radial-gradient(ellipse 70% 80% at 80% 10%, black, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 80% 10%, black, transparent 75%)",
          }}
        />
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-20 size-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative flex flex-col gap-4">
          <span className="font-ruqaa text-2xl text-white/80">مرحبا بيك</span>
          <h1 className="font-affiche text-[44px] leading-[1.1] sm:text-7xl">{titre}</h1>
          <p className="max-w-2xl text-lg leading-loose text-white/80">{texte}</p>
          {acces.email && (
            <p className="flex flex-wrap items-center gap-3 text-sm text-white/70">
              الحساب:
              <span dir="ltr" className="rounded-full bg-white/10 px-3 py-1 font-mono text-[13px] text-white">
                {acces.email}
              </span>
              <BoutonCopier texte={acces.email} libelle="نسخ" copie="تنسخ ✓" />
            </p>
          )}
          {acces.complet && (
            <Link
              href="/tableau-de-bord"
              className="mt-2 self-start rounded-full bg-white px-8 py-4 text-base font-bold transition-transform hover:-translate-y-0.5"
              style={{ color: "var(--fond-sombre-haut)" }}
            >
              دخل للتابلو ديالك
            </Link>
          )}
        </div>

        {/* Les trois étapes, sur une piste qui se remplit. */}
        <ol className="relative mt-12 grid grid-cols-3">
          <span aria-hidden="true" className="absolute inset-x-[16.66%] top-6 h-1 rounded-full bg-white/15" />
          <span
            aria-hidden="true"
            className="barre-croit absolute top-6 right-[16.66%] h-1 rounded-full bg-white"
            style={{ width: `${(Math.min(etapeCourante, 2) / 2) * 66.66}%` }}
          />
          {etapes.map((e, i) => {
            const fait = i < etapeCourante || acces.complet;
            const courante = i === etapeCourante && !acces.complet;
            return (
              <li key={e.titre} className="relative flex flex-col items-center gap-3 text-center">
                <span className="relative flex size-12 items-center justify-center">
                  {courante && <span aria-hidden="true" className="absolute inset-0 rounded-full bg-white animate-ping-doux" />}
                  <span
                    className={`relative flex size-12 items-center justify-center rounded-full font-affiche text-xl ${
                      fait ? "bg-white" : courante ? "bg-white" : "border-2 border-dashed border-white/40 bg-transparent text-white/70"
                    }`}
                    style={fait || courante ? { color: "var(--fond-sombre-haut)" } : undefined}
                  >
                    {fait ? <IconeCoche className="size-5" /> : courante ? i + 1 : <e.Icone className="size-5" />}
                  </span>
                </span>
                <span className={`text-sm font-bold sm:text-base ${fait || courante ? "text-white" : "text-white/60"}`}>{e.titre}</span>
                {courante && <span className="-mt-2 font-ruqaa text-lg text-white/80">دابا</span>}
              </li>
            );
          })}
        </ol>
      </header>

      {/* ——— Choix de la formule et aperçu du message ——— */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-affiche text-4xl text-ink sm:text-5xl">{acces.complet ? "جدد الاشتراك" : "ختار العرض ديالك"}</h2>
          <p className="max-w-2xl text-[15px] leading-loose text-muted-foreground">
            بدل بين العام والتريمستر، وشوف الميساج اللي غادي يتصيفط.
          </p>
        </div>
        <ChoixFormuleAcces options={options} numero={numeroWhatsappLisible()} economie={economieMensuelle(annee, trimestre)} />
      </section>

      {/* ——— Aperçu gratuit ——— */}
      {!acces.complet && (
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-affiche text-3xl text-ink sm:text-4xl">فهاد الوقت، جرب بالمجان</h2>
            <p className="text-[15px] text-muted-foreground">هادو مفتوحين ليك من دابا، قبل ما تخلص.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { href: "/matieres", titre: "أول درس فكل مادة", texte: "الفرنسية، العربية، الاجتماعيات والتربية الإسلامية.", Icone: IconeLivreOuvert },
              { href: "/oeuvres", titre: "أول فصل فكل مؤلف", texte: "الملخص، والفيشة ديال المؤلف ولائحة الفصول.", Icone: IconeLivre },
              { href: "/examens-regionaux", titre: "آخر امتحان جهوي", texte: "فالفرنسية والعربية، بالكرونو.", Icone: IconeHorloge },
            ].map((c, i) => (
              <Link
                key={c.href}
                href={c.href}
                className="group flex items-start gap-4 rounded-[24px] border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-26px_rgba(15,23,42,0.45)] animate-entree-carte"
                style={{ animationDelay: `${200 + i * 80}ms` }}
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-tint text-primary transition-transform group-hover:-rotate-6">
                  <c.Icone className="size-6" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-lg font-bold text-ink">{c.titre}</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{c.texte}</span>
                  <span className="mt-1 text-sm font-bold text-primary">
                    حل <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
