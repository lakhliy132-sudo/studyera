import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import CompteurAnime from "@/components/CompteurAnime";
import LogoStudyera from "@/components/LogoStudyera";
import MotTournant from "@/components/MotTournant";
import RevelerAuDefilement from "@/components/RevelerAuDefilement";
import {
  IconeCroissant,
  IconeGlobe,
  IconeLivreOuvert,
  IconeTexte,
} from "@/components/icones";
import {
  FORMULES,
  couvreJusqua,
  economieMensuelle,
  lienWhatsapp,
  prixParMois,
  type Formule,
} from "@/lib/abonnement";
import { joursAvant, prochaineSession } from "@/lib/calendrier";
import { cleCorrecteurPresente } from "@/lib/correcteur";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { PALETTES } from "@/lib/palettes";
import { couleurMatiere } from "@/lib/palette-matieres";
import { QUOTA_QUOTIDIEN_MAX } from "@/lib/quota";
import { resumerAnnalesParMatiere } from "@/lib/supabase/annales";
import {
  compterCours,
  compterCoursParCategorie,
  recupererOeuvresParFiliere,
} from "@/lib/supabase/contenu";

/** Les quatre matières, en darija, avec leur photo et leur couleur. */
const MATIERES_ACCUEIL = [
  { slug: "francais", href: "/francais", nom: "الفرنسية", photo: "/francais-matiere.jpg", Icone: IconeTexte },
  { slug: "arabe", href: "/arabe", nom: "العربية", photo: "/arabe-matiere.jpg", Icone: IconeLivreOuvert },
  { slug: "histoire-geo", href: "/histoire-geo", nom: "الاجتماعيات", photo: "/histoire-geo-matiere.jpg", Icone: IconeGlobe },
  { slug: "education-islamique", href: "/education-islamique", nom: "التربية الإسلامية", photo: "/education-islamique-matiere.jpg", Icone: IconeCroissant },
];

const MOIS_DARIJA = ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر"];

function dateDarija(date: Date): string {
  return `${date.getDate()} ${MOIS_DARIJA[date.getMonth()]}`;
}

/** Délai d'apparition au défilement (voir RevelerAuDefilement). */
function delai(ms: number): CSSProperties {
  return { "--delai": `${ms}ms` } as CSSProperties;
}

/** Bulle d'emoji qui flotte en fond du haut de page. */
function EmojiFlottant({ emoji, className, retard, inclinaison }: { emoji: string; className: string; retard: string; inclinaison: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute flex items-center justify-center rounded-2xl border border-border bg-surface/80 shadow-[0_12px_30px_-12px_rgba(27,58,143,0.35)] backdrop-blur animate-flotter ${className}`}
      style={{ animationDelay: retard, "--inclinaison": inclinaison } as CSSProperties}
    >
      {emoji}
    </span>
  );
}

/**
 * Accueil d'un visiteur non connecté : la première page du site.
 *
 * Demande de l'utilisateur : « je veux faire quelque chose très belle,
 * amusante et en arabe darija, et qu'elle explique toute l'application ;
 * mettre aussi tout en bas la partie des prix, 199 dhs toute l'année et
 * 130 dhs par trimestre, et mets aussi les + ; le paiement se fait par
 * WhatsApp, le bouton envoie directement au numéro +33609527898 ; mets
 * des animations très belles, des trucs qui bougent ».
 *
 * La page est donc en darija, de droite à gauche, et se lit de haut en
 * bas comme une visite : ce qu'est StudyEra, les chiffres, les quatre
 * matières, chaque outil, comment on révise, les prix.
 *
 * Rien d'inventé (CLAUDE.md §1) :
 * - chaque chiffre est compté en base (leçons, sujets régionaux,
 *   œuvres et chapitres) ou calculé (jours avant l'examen, prix au
 *   mois, écart entre les deux formules) ; il n'y a ni nombre
 *   d'inscrits, ni avis d'élèves, ni note d'exemple ;
 * - chaque outil présenté existe et renvoie à sa page ; le correcteur
 *   n'est annoncé comme disponible que si sa clé d'API est posée sur
 *   le serveur, sinon il porte « قريبا » (bientôt) ;
 * - les « + » des formules sont ce que le site contient vraiment, plus
 *   ce qui se calcule : la formule à l'année couvre-t-elle l'examen
 *   régional si on la prend aujourd'hui, de combien revient-elle moins
 *   cher au mois.
 *
 * Couleurs : les quatre couleurs de matière sont reprises ici (l'accueil
 * est la seule page où elles restent, CLAUDE.md §3) pour les matières,
 * les taches de fond et les pastilles des outils ; le reste suit la
 * palette. Deux exceptions en dur, comme les bandeaux sombres du site :
 * le vert WhatsApp du bouton de paiement (couleur de la marque, que
 * l'élève reconnaît) et le blanc posé sur le bandeau final sombre.
 *
 * Animations (app/globals.css) : taches qui ondulent, emojis qui
 * flottent, matières en orbite autour du logo, mot du titre qui change,
 * bande qui défile, compteurs, apparition au défilement, bordure qui
 * brille sur la formule à l'année, halo du bouton WhatsApp. Toutes se
 * figent quand l'élève coupe les animations (bouton de la barre ou
 * réglage du système).
 */
export default async function AccueilVisiteur() {
  const [nombreCours, coursParMatiere, annales, oeuvres] = await Promise.all([
    compterCours(FILIERE_ACTUELLE),
    compterCoursParCategorie(FILIERE_ACTUELLE),
    resumerAnnalesParMatiere(),
    recupererOeuvresParFiliere(FILIERE_ACTUELLE),
  ]);
  const session = prochaineSession();
  const jours = session ? joursAvant(session.debut) : null;
  const correcteur = cleCorrecteurPresente();

  const nombreAnnales = Object.values(annales).reduce((somme, r) => somme + r.nombre, 0);
  const anneesAnnales = Object.values(annales).flatMap((r) => r.annees);
  const premiereAnnee = anneesAnnales.length ? Math.min(...anneesAnnales) : null;
  const derniereAnnee = anneesAnnales.length ? Math.max(...anneesAnnales) : null;
  const nombreChapitres = oeuvres.reduce((somme, o) => somme + o.nombreChapitres, 0);

  const [trimestre, annee] = FORMULES;
  const economie = economieMensuelle(annee, trimestre);

  const chiffres = [
    { valeur: nombreCours, libelle: "درس مكتوب", emoji: "📚" },
    { valeur: nombreAnnales, libelle: "امتحان جهوي", emoji: "🏆" },
    { valeur: nombreChapitres, libelle: "فصل ديال المؤلفات", emoji: "📖" },
    ...(jours !== null && jours >= 0 ? [{ valeur: jours, libelle: "يوم باقي للجهوي", emoji: "⏳" }] : []),
  ].filter((c) => c.valeur > 0);

  const outils = [
    {
      emoji: "📚",
      titre: `دروس ${MATIERES_ACCUEIL.length} ديال المواد`,
      texte: `${nombreCours} درس ديال الفرنسية، العربية، الاجتماعيات والتربية الإسلامية، مكتوبين بوضوح ومقسمين مزيان باش تقرا بلا ما تتلف.`,
      href: "/matieres",
      couleur: couleurMatiere("francais"),
    },
    {
      emoji: "📖",
      titre: "المؤلفات فصل بفصل",
      texte: `${oeuvres.length} مؤلفات ديال الفرنسية: ملخص كل فصل، الشخصيات، المفردات، المحاور وكويز باش تشوف واش فهمتي.`,
      href: "/oeuvres",
      couleur: couleurMatiere("arabe"),
    },
    {
      emoji: "🏆",
      titre: "الامتحانات الجهوية",
      texte:
        premiereAnnee && derniereAnnee
          ? `${nombreAnnales} امتحان ديال الأكاديميات من ${premiereAnnee} حتى ${derniereAnnee}. دوزهم بالكرونو بحال نهار الامتحان، ومن بعد شوف التصحيح ملي كاين.`
          : "الامتحانات ديال الأكاديميات، بالكرونو بحال نهار الامتحان.",
      href: "/examens-regionaux",
      couleur: couleurMatiere("histoire-geo"),
    },
    {
      emoji: "✍️",
      titre: "مصحح الإنشاء",
      texte: `كتب الإنشاء ديالك بالفرنسية ولا صورها 📸، وخود نقطة على 20 مع الأخطاء مصححة، شنو مزيان وشنو خاصو يتحسن. حتى ${QUOTA_QUOTIDIEN_MAX} تصحيحات فالنهار.`,
      href: "/redaction/nouvelle",
      couleur: couleurMatiere("education-islamique"),
      bientot: !correcteur,
    },
    {
      emoji: "🧠",
      titre: "فلاش كارت",
      texte: "فدروس الاجتماعيات، كارطات صغار كتقلبهم باش تحفظ التواريخ والمفاهيم بالزربة.",
      href: "/histoire-geo",
      couleur: couleurMatiere("francais"),
    },
    {
      emoji: "🧩",
      titre: "تمارين اللغة",
      texte: "الصور البلاغية، التلفظ، الخطاب المنقول، الروابط… كل درس فيه تمارين وكويز.",
      href: "/langue",
      couleur: couleurMatiere("arabe"),
    },
    {
      emoji: "📅",
      titre: "الكالندريي ديال الامتحان",
      texte: "العد العكسي حتى للجهوي، وتقدر تزيد المواعيد ديالك باش ما يفوتك والو.",
      href: "/calendrier",
      couleur: couleurMatiere("histoire-geo"),
    },
    {
      emoji: "📈",
      titre: "تتبع التقدم",
      texte: "علّم على الفصول اللي قريتي فالمؤلفات وشوف شحال باقي ليك، من التابلو ديالك.",
      href: "/tableau-de-bord",
      couleur: couleurMatiere("education-islamique"),
    },
    {
      emoji: "💬",
      titre: "الجماعة",
      texte: "سول، جاوب، علّق وزيد تصاور مع التلاميذ اللي كيوجدو بحالك.",
      href: "/communaute",
      couleur: couleurMatiere("francais"),
    },
    {
      emoji: "🌙",
      titre: `الوضع الليلي و${PALETTES.length} لون`,
      texte: "ختار اللون اللي عجبك، وقرا فالليل بلا ما تعمى عينيك 😅",
      href: "/matieres",
      couleur: couleurMatiere("arabe"),
    },
  ];

  const etapes = [
    { emoji: "🎯", titre: "ختار المادة", texte: "الفرنسية، العربية، الاجتماعيات ولا الإسلامية." },
    { emoji: "📖", titre: "قرا الدرس", texte: "ملخص واضح، وفلاش كارت وتمارين باش يتحفظ." },
    { emoji: "⏱️", titre: "جرب راسك", texte: "دوز امتحان جهوي بالكرونو وقارن مع التصحيح." },
    { emoji: "✍️", titre: "صحح الإنشاء", texte: "صيفط التعبير ديالك وخود النقطة والملاحظات." },
  ];

  const plusCommuns = [
    `${nombreCours} درس فـ ${MATIERES_ACCUEIL.length} مواد`,
    `${nombreAnnales} امتحان جهوي بالكرونو`,
    `${oeuvres.length} مؤلفات ديال الفرنسية فصل بفصل`,
    correcteur ? `مصحح الإنشاء: ${QUOTA_QUOTIDIEN_MAX} تصحيحات فالنهار` : null,
    "فلاش كارت وتمارين اللغة",
    "الجماعة والكالندريي ديال الامتحان",
  ].filter((p): p is string => p !== null);

  function plusDe(formule: Formule): { texte: string; fort?: boolean }[] {
    const extras: { texte: string; fort?: boolean }[] = [];
    if (session && couvreJusqua(formule, session.debut) && formule.cle === "annee") {
      extras.push({ texte: `كيوصلك حتى لنهار الجهوي (${dateDarija(session.debut)})`, fort: true });
    }
    if (formule.cle === "annee" && economie > 0) {
      extras.push({ texte: `أرخص بـ ${economie}% فالشهر من التريمستر`, fort: true });
    }
    return [...extras, ...plusCommuns.map((texte) => ({ texte }))];
  }

  const bande = [
    "📚 دروس منظمة",
    "🏆 امتحانات جهوية",
    "⏱️ الكرونو",
    "🧠 فلاش كارت",
    "✍️ تصحيح الإنشاء",
    "📖 المؤلفات فصل بفصل",
    "📅 العد العكسي",
    "💬 الجماعة",
    "🌙 الوضع الليلي",
  ];

  return (
    <>
      <RevelerAuDefilement />

      {/* Taches de couleur qui ondulent lentement derrière toute la page. */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-32 -right-24 size-[460px] opacity-[0.18] blur-3xl animate-tache"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
        <div
          className="absolute top-[30%] -left-40 size-[420px] opacity-[0.15] blur-3xl animate-tache"
          style={{ backgroundColor: "var(--color-matiere-arabe)", animationDelay: "-5s" }}
        />
        <div
          className="absolute -bottom-40 right-1/4 size-[480px] opacity-[0.13] blur-3xl animate-tache"
          style={{ backgroundColor: "var(--color-matiere-histoire-geo)", animationDelay: "-10s" }}
        />
      </div>

      <main dir="rtl" lang="ar" className="flex w-full flex-col overflow-x-clip px-6 pb-20 font-arabe sm:px-9">
        {/* ——— Haut de page ——— */}
        <section className="relative grid grid-cols-1 items-center gap-12 pt-10 pb-14 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:pb-20">
          <EmojiFlottant emoji="✏️" className="top-4 left-[46%] hidden size-12 text-2xl lg:flex" retard="-1s" inclinaison="-8deg" />
          <EmojiFlottant emoji="⭐" className="bottom-6 right-[40%] hidden size-11 text-xl lg:flex" retard="-3s" inclinaison="10deg" />

          <div className="flex flex-col items-start gap-6">
            <span className="animate-entree-carte inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-sm font-semibold text-muted-foreground shadow-sm backdrop-blur">
              <span className="inline-block origin-[70%_70%] animate-coucou">👋</span>
              أولى باك · المغرب 🇲🇦
            </span>

            <h1
              className="animate-entree-carte text-[34px] leading-[1.25] font-bold text-ink sm:text-6xl sm:leading-[1.2]"
              style={{ animationDelay: "80ms" }}
            >
              الجهوي ماشي غول 👻
              <span className="mt-2 block text-[28px] leading-snug sm:text-[42px]">
                راجع{" "}
                <MotTournant mots={MATIERES_ACCUEIL.map((m) => ({ texte: m.nom, couleur: couleurMatiere(m.slug) }))} />
                <br />
                معانا، درس بدرس.
              </span>
            </h1>

            <p
              className="animate-entree-carte max-w-xl text-lg leading-loose text-muted-foreground"
              style={{ animationDelay: "160ms" }}
            >
              <strong className="text-ink">StudyEra</strong> كيجمع ليك فبلاصة وحدة الدروس ديال أولى باك،
              الامتحانات الجهوية ديال السنين اللي فاتو، والأدوات اللي كتعاونك تراجع
              {correcteur ? "، حتى مصحح كيعطيك نقطة الإنشاء ديالك" : ""}. بلا ستريس، وبالضحكة 😄
            </p>

            <div className="animate-entree-carte flex flex-wrap items-center gap-3" style={{ animationDelay: "240ms" }}>
              <a
                href="#prix"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-[0_14px_30px_-12px_var(--color-primary)] transition-transform hover:-translate-y-0.5 hover:scale-[1.03]"
              >
                شوف الأثمنة
                <span className="inline-block transition-transform group-hover:translate-y-1">👇</span>
              </a>
              <Link
                href="/matieres"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-base font-bold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                تصفح الدروس
              </Link>
            </div>

            {session && jours !== null && jours >= 0 && (
              <p
                className="animate-entree-carte inline-flex items-center gap-2 rounded-2xl border border-border bg-surface/80 px-4 py-2.5 text-sm font-semibold text-ink shadow-sm backdrop-blur"
                style={{ animationDelay: "320ms" }}
              >
                <span className="inline-block animate-flotter">⏳</span>
                باقي <span className="text-lg text-primary tabular-nums">{jours}</span> يوم على الجهوي ({dateDarija(session.debut)})
              </p>
            )}
          </div>

          {/* Le logo au centre, les quatre matières en orbite autour. */}
          <div className="animate-entree-carte relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[420px]" style={{ animationDelay: "200ms" }}>
            <div aria-hidden="true" className="absolute inset-[6%] rounded-full border-2 border-dashed border-border" />
            <div aria-hidden="true" className="absolute inset-[24%] rounded-full border border-border" />
            <div
              aria-hidden="true"
              className="absolute inset-[30%] rounded-full blur-2xl"
              style={{ background: "color-mix(in srgb, var(--color-primary) 30%, transparent)" }}
            />
            <div className="absolute inset-[31%] flex items-center justify-center rounded-full border border-border bg-surface shadow-[0_20px_50px_-20px_rgba(27,58,143,0.45)]">
              <LogoStudyera className="h-[46%] text-primary" />
            </div>

            <ul className="absolute inset-[6%] animate-orbite">
              {MATIERES_ACCUEIL.map((m, i) => {
                const positions = [
                  "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
                  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                  "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
                ];
                const couleur = couleurMatiere(m.slug);
                return (
                  <li key={m.slug} className={`absolute ${positions[i]}`}>
                    <span className="flex animate-contre-orbite flex-col items-center gap-1">
                      <span
                        className="flex size-12 items-center justify-center rounded-2xl text-white shadow-lg sm:size-16"
                        style={{ backgroundColor: couleur, boxShadow: `0 12px 26px -10px ${couleur}` }}
                      >
                        <m.Icone className="size-6 sm:size-7" />
                      </span>
                      <span className="rounded-full bg-surface px-2 py-0.5 text-xs font-bold whitespace-nowrap text-ink shadow-sm sm:text-sm">
                        {m.nom}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ——— Les chiffres, comptés en base ——— */}
        {chiffres.length > 0 && (
          <section className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {chiffres.map((c, i) => (
              <div key={c.libelle} data-reveler="" style={delai(i * 90)}>
                <div className="group flex h-full flex-col items-center gap-1 rounded-[22px] border border-border bg-surface p-5 text-center shadow-sm transition-transform hover:-translate-y-1 sm:p-7">
                  <span className="text-3xl transition-transform group-hover:scale-125 group-hover:rotate-12">{c.emoji}</span>
                  <span className="text-4xl font-bold text-primary sm:text-5xl">
                    <CompteurAnime valeur={c.valeur} />
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground sm:text-base">{c.libelle}</span>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* ——— Bande qui défile ——— */}
        {/* `dir="ltr"` sur la bande : dans la page en RTL, la piste
            s'alignait à droite et le défilement vers la gauche la
            sortait de l'écran. Légèrement agrandie pour que l'inclinaison
            ne laisse pas de coin vide sur les bords. */}
        <div dir="ltr" aria-hidden="true" className="relative -mx-6 mt-14 -rotate-1 scale-x-105 overflow-hidden border-y border-border bg-primary py-4 sm:-mx-9">
          <div className="flex w-max animate-defiler gap-10 whitespace-nowrap">
            {[...bande, ...bande].map((mot, i) => (
              <span key={i} dir="rtl" className="text-lg font-bold text-primary-foreground sm:text-xl">
                {mot} <span className="opacity-50">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ——— Les quatre matières ——— */}
        <section className="mt-16 flex flex-col gap-8 sm:mt-24">
          <div data-reveler="" className="flex flex-col items-center gap-3 text-center">
            <span className="text-4xl">🎒</span>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">{MATIERES_ACCUEIL.length} مواد، فبلاصة وحدة</h2>
            <p className="max-w-xl text-lg text-muted-foreground">كل مادة فيها الدروس ديالها، مرتبين كيف فالبرنامج.</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {MATIERES_ACCUEIL.map((m, i) => {
              const couleur = couleurMatiere(m.slug);
              const nombre = coursParMatiere[m.slug] ?? 0;
              return (
                <li key={m.slug} data-reveler="" style={delai(i * 100)}>
                  <Link
                    href={m.href}
                    className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 hover:shadow-[0_24px_50px_-20px_rgba(27,58,143,0.4)]"
                  >
                    <span className="relative block h-36 overflow-hidden">
                      <Image
                        src={m.photo}
                        alt=""
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(to top, color-mix(in srgb, ${couleur} 70%, transparent), transparent 70%)` }}
                      />
                      <span
                        className="absolute right-4 -bottom-6 flex size-12 items-center justify-center rounded-2xl text-white shadow-lg transition-transform group-hover:rotate-12"
                        style={{ backgroundColor: couleur }}
                      >
                        <m.Icone className="size-6" />
                      </span>
                    </span>
                    <span className="flex flex-1 flex-col gap-1 px-5 pt-9 pb-5">
                      <span className="text-xl font-bold text-ink">{m.nom}</span>
                      <span className="text-sm font-semibold" style={{ color: couleur }}>
                        {nombre > 0 ? `${nombre} درس ←` : "دخل تشوف ←"}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ——— Tous les outils ——— */}
        <section className="mt-20 flex flex-col gap-8 sm:mt-28">
          <div data-reveler="" className="flex flex-col items-center gap-3 text-center">
            <span className="text-4xl">🧰</span>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">شنو غادي تلقى فـ StudyEra؟</h2>
            <p className="max-w-xl text-lg text-muted-foreground">كلشي اللي كيخصك من أول درس حتى نهار الامتحان.</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {outils.map((o, i) => (
              <li key={o.titre} data-reveler="" style={delai((i % 5) * 80)}>
                <Link
                  href={o.href}
                  className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-[24px] border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_22px_44px_-22px_rgba(27,58,143,0.45)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-10 -left-10 size-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                    style={{ backgroundColor: o.couleur }}
                  />
                  <span className="flex items-center justify-between gap-2">
                    <span
                      className="flex size-14 items-center justify-center rounded-2xl text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12"
                      style={{ backgroundColor: `color-mix(in srgb, ${o.couleur} 15%, var(--color-surface))` }}
                    >
                      {o.emoji}
                    </span>
                    {o.bientot && (
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-bold text-muted-foreground">قريبا</span>
                    )}
                  </span>
                  <span className="text-lg font-bold text-ink">{o.titre}</span>
                  <span className="text-[15px] leading-relaxed text-muted-foreground">{o.texte}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ——— Comment on révise ——— */}
        <section className="mt-20 flex flex-col gap-10 sm:mt-28">
          <div data-reveler="" className="flex flex-col items-center gap-3 text-center">
            <span className="text-4xl">🚀</span>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">كيفاش كتراجع معانا؟</h2>
            <p className="max-w-xl text-lg text-muted-foreground">4 خطوات ساهلين، وعاود من الأول مع كل درس.</p>
          </div>
          <ol className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <span aria-hidden="true" className="absolute inset-x-[12%] top-10 hidden border-t-2 border-dashed border-border lg:block" />
            {etapes.map((e, i) => (
              <li key={e.titre} data-reveler="" style={delai(i * 140)} className="relative flex flex-col items-center gap-3 text-center">
                <span
                  className="relative flex size-20 items-center justify-center rounded-full border-4 border-background bg-surface text-4xl shadow-[0_14px_30px_-14px_rgba(27,58,143,0.5)] animate-flotter"
                  style={{ animationDelay: `${-i * 1.2}s` }}
                >
                  {e.emoji}
                  <span className="absolute -top-1 -right-1 flex size-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </span>
                <span className="text-xl font-bold text-ink">{e.titre}</span>
                <span className="max-w-[240px] text-[15px] leading-relaxed text-muted-foreground">{e.texte}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* ——— Les prix ——— */}
        <section id="prix" className="mt-20 flex scroll-mt-24 flex-col gap-10 sm:mt-28">
          <div data-reveler="" className="flex flex-col items-center gap-3 text-center">
            <span className="text-4xl">💸</span>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">الأثمنة</h2>
            <p className="max-w-xl text-lg text-muted-foreground">
              أقل من {Math.ceil(annee.prix / annee.mois)} درهم فالشهر مع العرض ديال العام. الخلاص كيدوز عبر واتساب.
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 items-stretch gap-6 md:grid-cols-2">
            {[annee, trimestre].map((f, i) => {
              const vedette = f.cle === "annee";
              const carte = (
                <div className={`relative flex h-full flex-col gap-5 rounded-[26px] bg-surface p-7 sm:p-8 ${vedette ? "" : "border border-border shadow-sm"}`}>
                  {vedette && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-bold whitespace-nowrap text-primary-foreground shadow-md">
                      الأحسن 🔥
                    </span>
                  )}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl font-bold text-ink">{f.nom}</span>
                    <span className="text-3xl">{vedette ? "🎓" : "📆"}</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-6xl leading-none font-bold text-primary tabular-nums">{f.prix}</span>
                    <span className="pb-1 text-lg font-bold text-ink">درهم</span>
                    <span className="pb-1 text-base text-muted-foreground">{f.periode}</span>
                  </div>
                  <p className="rounded-xl bg-surface-muted px-3 py-2 text-sm font-semibold text-ink">
                    يعني <span className="text-primary tabular-nums">{prixParMois(f)}</span> درهم فالشهر
                  </p>
                  <ul className="flex flex-1 flex-col gap-2.5">
                    {plusDe(f).map((p) => (
                      <li key={p.texte} className={`flex items-start gap-2.5 text-[15px] ${p.fort ? "font-bold text-ink" : "text-foreground"}`}>
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-sm leading-none font-bold text-primary-foreground">
                          +
                        </span>
                        {p.texte}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={lienWhatsapp(f)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative mt-2 inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-lg font-bold text-white transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
                    style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
                  >
                    {vedette && (
                      <span aria-hidden="true" className="absolute inset-0 rounded-full animate-pulsation" style={{ backgroundColor: "#25d366" }} />
                    )}
                    <IconeWhatsapp className="relative size-6" />
                    <span className="relative">خلص عبر واتساب</span>
                  </a>
                </div>
              );
              return (
                <div key={f.cle} data-reveler="" style={delai(i * 140)}>
                  {vedette ? (
                    // Bordure en dégradé qui tourne : la formule mise en avant.
                    <div
                      className="h-full rounded-[28px] p-[3px] shadow-[0_30px_60px_-30px_var(--color-primary)] animate-brillance"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, var(--color-primary), var(--color-consigne), var(--color-primary-vif), var(--color-primary))",
                        backgroundSize: "200% 100%",
                      }}
                    >
                      {carte}
                    </div>
                  ) : (
                    carte
                  )}
                </div>
              );
            })}
          </div>

          <p data-reveler="" className="mx-auto max-w-2xl text-center text-[15px] leading-loose text-muted-foreground">
            📲 ضغط على الزر: كيتحل ليك واتساب والميساج مكتوب بوحدو مع العرض اللي ختاري. صيفطو، ونجاوبوك باش نكملو الخلاص.
          </p>
        </section>

        {/* ——— Bandeau final ——— */}
        <section data-reveler="" className="mt-20 sm:mt-28">
          <div
            className="relative overflow-hidden rounded-[30px] px-6 py-12 text-center sm:px-12 sm:py-16"
            style={{ background: "linear-gradient(135deg, var(--fond-sombre-haut), var(--fond-sombre-bas))" }}
          >
            <span aria-hidden="true" className="absolute top-6 right-8 text-4xl animate-flotter">📚</span>
            <span aria-hidden="true" className="absolute bottom-6 left-8 text-4xl animate-flotter" style={{ animationDelay: "-2s" }}>🎓</span>
            <h2 className="relative text-3xl font-bold text-white sm:text-4xl">ياله، الجهوي ما كيتسنى حتى واحد ⏰</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/80">
              {jours !== null && jours >= 0
                ? `باقي ${jours} يوم. كل نهار كتراجع فيه دابا، كيتحسب ليك نهار الامتحان.`
                : "كل نهار كتراجع فيه دابا، كيتحسب ليك نهار الامتحان."}
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#prix"
                className="rounded-full bg-white px-7 py-3.5 text-base font-bold transition-transform hover:scale-105"
                style={{ color: "var(--fond-sombre-haut)" }}
              >
                شوف الأثمنة 👆
              </a>
              <Link
                href="/connexion"
                className="rounded-full border border-white/40 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                دخل للحساب ديالك
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/** Logo WhatsApp (glyphe officiel simplifié), sur le bouton de paiement. */
function IconeWhatsapp({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.93.96-3.48-.23-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.44 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.37-11.37 0-3.03-1.18-5.89-3.33-8.03" />
    </svg>
  );
}
