import Link from "next/link";

import CarteFormule from "@/components/CarteFormule";
import { IconeCoche } from "@/components/icones";
import { FORMULES, plusFormule } from "@/lib/abonnement";
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
 * et accueil le redirigent) : trois étapes, la première déjà faite, et
 * les deux formules de l'accueil, dont le bouton WhatsApp envoie aussi
 * l'e-mail du compte, pour savoir lequel activer sur
 * /administration/acces.
 *
 * En darija, comme les prix de l'accueil visiteur dont elle reprend les
 * cartes (components/CarteFormule.tsx).
 */
export default async function PageAcces() {
  const [acces, plusCommuns] = await Promise.all([lireAcces(), plusCommunsFormules()]);
  const session = prochaineSession();
  const enCours = acces.fin !== null && acces.fin >= aujourdhui();
  const [trimestre, annee] = FORMULES;

  const etapes = [
    { titre: "تصاوب الحساب", texte: acces.email ?? "", fait: true },
    { titre: "خلص فواتساب", texte: "ختار العرض، الميساج كيتكتب بوحدو", fait: acces.complet },
    { titre: "كنفعلو ليك الحساب", texte: "كلشي كيتحل: الدروس، المؤلفات والامتحانات", fait: acces.complet },
  ];

  return (
    <main
      dir="rtl"
      lang="ar"
      className="flex w-full flex-col gap-12 px-6 pt-16 pb-20 font-arabe sm:px-9 sm:pt-12 lg:px-16 xl:px-24 2xl:px-40"
    >
      <header className="flex flex-col gap-4">
        <p className="flex items-center gap-3 text-[15px] font-semibold text-muted-foreground">
          <span className="h-0.5 w-10 rounded-full bg-primary" />
          الحساب ديالك
        </p>
        <h1 className="font-affiche text-[44px] leading-[1.15] text-ink sm:text-6xl">
          {acces.complet && acces.verrouActif && !acces.admin
            ? "الحساب ديالك مفعّل."
            : acces.complet
              ? "عندك الولوج لكلشي."
              : acces.fin
                ? "الاشتراك ديالك سالا."
                : "باقي غير خطوة وحدة."}
        </h1>
        <p className="max-w-2xl text-lg leading-loose text-muted-foreground">
          {enCours
            ? `الولوج ديالك خدام حتى ${dateLongue(acces.fin!)}. تقدر تجدد من دابا إلا بغيتي.`
            : acces.complet
              ? "تقدر تدخل لكلشي فالموقع."
              : acces.fin
                ? `الولوج ديالك سالا نهار ${dateLongue(acces.fin)}. جدد الاشتراك فواتساب وكلشي يتحل من جديد.`
                : "الحساب تصاوب. خلص الاشتراك فواتساب، وملي توصلنا كنفعلو ليك الحساب باش يتحل ليك كلشي."}
        </p>
        {acces.complet && (
          <Link
            href="/tableau-de-bord"
            className="mt-2 self-start rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-[0_16px_32px_-14px_var(--color-primary)] transition-transform hover:-translate-y-0.5"
          >
            دخل للتابلو ديالك
          </Link>
        )}
      </header>

      {/* Les trois étapes, la première toujours faite. */}
      <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {etapes.map((e, i) => (
          <li
            key={e.titre}
            className={`flex items-center gap-4 rounded-[22px] border p-5 sm:p-6 ${
              e.fait ? "border-primary/30 bg-primary-tint" : "border-border bg-surface"
            }`}
          >
            <span
              className={`flex size-11 shrink-0 items-center justify-center rounded-full font-affiche text-xl ${
                e.fait ? "bg-primary text-primary-foreground" : "border-2 border-dashed border-border-strong text-muted-foreground"
              }`}
            >
              {e.fait ? <IconeCoche className="size-5" /> : i + 1}
            </span>
            <span className="flex min-w-0 flex-col gap-0.5">
              <span className="text-lg font-bold text-ink">{e.titre}</span>
              <span dir={i === 0 ? "ltr" : undefined} className="truncate text-end text-sm text-muted-foreground">
                {e.texte}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="font-affiche text-4xl text-ink sm:text-5xl">{acces.complet ? "جدد الاشتراك" : "ختار العرض ديالك"}</h2>
          <p className="max-w-2xl text-[15px] leading-loose text-muted-foreground">
            ضغط على الزر: كيتحل ليك واتساب والميساج مكتوب بوحدو، فيه العرض والإيميل ديال الحساب ديالك. صيفطو، ونجاوبوك باش نكملو الخلاص.
          </p>
        </div>
        <div className="grid w-full max-w-4xl grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {[annee, trimestre].map((f) => (
            <CarteFormule
              key={f.cle}
              formule={f}
              vedette={f.cle === "annee"}
              plus={plusFormule(f, plusCommuns, session?.debut ?? null)}
              email={acces.email}
            />
          ))}
        </div>
      </section>

      {!acces.complet && (
        <p className="max-w-2xl rounded-[18px] border border-dashed border-border-strong p-5 text-[15px] leading-loose text-muted-foreground">
          فهاد الوقت، المعاينة المجانية مفتوحة: أول درس فكل مادة، أول فصل فكل مؤلف، وآخر امتحان جهوي.{" "}
          <Link href="/matieres" className="font-bold text-primary underline decoration-primary/30 underline-offset-4">
            شوف المواد ←
          </Link>
        </p>
      )}
    </main>
  );
}
