import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

import CarteFormule from "@/components/CarteFormule";
import ChiffresAccueil from "@/components/ChiffresAccueil";
import MotTournant from "@/components/MotTournant";
import RevelerAuDefilement from "@/components/RevelerAuDefilement";
import {
  IconeBulles,
  IconeCoche,
  IconeGraphique,
  IconePalette,
} from "@/components/icones";
import { FORMULES, dateDarija, plusFormule } from "@/lib/abonnement";
import { plusCommunsFormules } from "@/lib/plusFormules";
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

/** Les quatre matières, en darija, pour le mot qui change du titre. */
const MATIERES_ACCUEIL = [
  { slug: "francais", nom: "الفرنسية" },
  { slug: "arabe", nom: "العربية" },
  { slug: "histoire-geo", nom: "الاجتماعيات" },
  { slug: "education-islamique", nom: "التربية الإسلامية" },
];

/** Part de l'année scolaire déjà écoulée, de la rentrée (1ᵉʳ septembre
 * précédant l'examen, comme sur /calendrier) au jour de l'examen. */
function progressionAnnee(examen: Date): number {
  const rentree = new Date(examen.getFullYear() - 1, 8, 1);
  const total = joursAvant(examen) - joursAvant(rentree);
  return total > 0 ? Math.min(100, Math.max(0, (-joursAvant(rentree) / total) * 100)) : 0;
}

/** Délai d'apparition au défilement (voir RevelerAuDefilement). */
function delai(ms: number): CSSProperties {
  return { "--delai": `${ms}ms` } as CSSProperties;
}

/**
 * Accueil d'un visiteur non connecté : la première page du site.
 *
 * Première demande : « je veux faire quelque chose très belle,
 * amusante et en arabe darija, et qu'elle explique toute l'application ;
 * mettre tout en bas la partie des prix, 199 dhs toute l'année et 130
 * dhs par trimestre, et mets aussi les + ; le paiement se fait par
 * WhatsApp, le bouton envoie directement au numéro +33609527898 ; mets
 * des animations très belles, des trucs qui bougent ».
 *
 * Refaite ensuite après « c'est très IA, surtout « شنو غادي تلقى فـ
 * StudyEra؟ », et les icônes sont très IA » : plus d'emojis dans des
 * pastilles, plus de grille de cartes identiques, plus de taches de
 * couleur floues. À la place :
 * - de vraies captures du site (public/apercus/, prises sur les pages
 *   elles-mêmes) dans un cadre de navigateur ou de téléphone, qui
 *   montrent ce que l'élève trouvera au lieu de le dessiner ;
 * - les outils présentés un par un, en rangées alternées, texte d'un
 *   côté et capture de l'autre ;
 * - une écriture plus marquée : Lalezar pour les titres, et de petites
 *   notes en ruqʿa (l'écriture à la main de tous les jours) avec des
 *   traits tracés à la main qui se dessinent à l'apparition.
 *
 * Rien d'inventé (CLAUDE.md §1) :
 * - chaque chiffre est compté en base (leçons, sujets régionaux,
 *   œuvres et chapitres) ou calculé (jours avant l'examen, prix au
 *   mois, écart entre les deux formules) ; ni nombre d'inscrits, ni
 *   avis d'élèves, ni note d'exemple ;
 * - les captures sont celles des vraies pages, sans retouche ; le cadre
 *   de navigateur n'affiche que le chemin de la page, pas de nom de
 *   domaine (aucun n'est fixé dans le projet) ;
 * - le correcteur n'est annoncé comme disponible que si sa clé d'API
 *   est posée sur le serveur, sinon il porte « قريبا » (bientôt) ;
 * - les « + » des formules sont ce que le site contient vraiment, plus
 *   ce qui se calcule (la formule couvre-t-elle l'examen si on la prend
 *   aujourd'hui, de combien revient-elle moins cher au mois).
 *
 * Couleurs en dur, comme ailleurs sur le site pour les fonds sombres :
 * le blanc sur la carte sombre de la formule à l'année, le vert
 * WhatsApp du bouton de paiement (la couleur de la marque, que l'élève
 * reconnaît) et le noir du cadre de téléphone. Le mot qui change dans
 * le titre prend la couleur de sa matière.
 *
 * Animations (app/globals.css) : mot du titre, captures qui flottent et
 * glissent à l'apparition, traits qui se dessinent, compteurs, bande
 * qui défile, bordure qui brille et halo du bouton WhatsApp. Toutes se
 * figent quand l'élève coupe les animations.
 */
export default async function AccueilVisiteur() {
  const [nombreCours, coursParCategorie, annales, oeuvres, plusCommuns] = await Promise.all([
    compterCours(FILIERE_ACTUELLE),
    compterCoursParCategorie(FILIERE_ACTUELLE),
    resumerAnnalesParMatiere(),
    recupererOeuvresParFiliere(FILIERE_ACTUELLE),
    plusCommunsFormules(),
  ]);
  const session = prochaineSession();
  const jours = session && joursAvant(session.debut) >= 0 ? joursAvant(session.debut) : null;
  const correcteur = cleCorrecteurPresente();

  const nombreAnnales = Object.values(annales).reduce((somme, r) => somme + r.nombre, 0);
  const anneesAnnales = Object.values(annales).flatMap((r) => r.annees);
  const premiereAnnee = anneesAnnales.length ? Math.min(...anneesAnnales) : null;
  const derniereAnnee = anneesAnnales.length ? Math.max(...anneesAnnales) : null;
  const nombreChapitres = oeuvres.reduce((somme, o) => somme + o.nombreChapitres, 0);
  // Le français n'a pas de catégorie à lui dans `cours` : ses leçons
  // sont celles de langue et de production écrite (les œuvres sont à
  // part, dans `oeuvres`).
  const leconsFrancais = (coursParCategorie["langue"] ?? 0) + (coursParCategorie["production-ecrite"] ?? 0);

  const [trimestre, annee] = FORMULES;

  // Sujets régionaux par année, toutes matières confondues, années sans
  // sujet comprises (une colonne vide dit qu'il n'y en a pas).
  const comptesParAnnee: Record<number, number> = {};
  for (const r of Object.values(annales)) {
    for (const [an, n] of Object.entries(r.parAnnee)) comptesParAnnee[Number(an)] = (comptesParAnnee[Number(an)] ?? 0) + n;
  }
  const annalesParAnnee =
    premiereAnnee && derniereAnnee
      ? Array.from({ length: derniereAnnee - premiereAnnee + 1 }, (_, i) => ({
          annee: premiereAnnee + i,
          nombre: comptesParAnnee[premiereAnnee + i] ?? 0,
        }))
      : [];

  const parMatiere = (nombre: number, nom: string) => (nombre > 0 ? `${nom}: ${nombre} درس` : null);

  const bande = ["دروس منظمة", "امتحانات جهوية", "الكرونو", "فلاش كارت", "المؤلفات فصل بفصل", "تمارين اللغة", "العد العكسي", "الجماعة"];

  return (
    <>
      <RevelerAuDefilement />

      <main dir="rtl" lang="ar" className="flex w-full flex-col overflow-x-clip px-6 pb-24 font-arabe sm:px-9">
        {/* ——— Haut de page ——— */}
        <section className="relative grid grid-cols-1 items-center gap-14 pt-12 pb-16 sm:pt-20 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:pb-24">
          {/* Quadrillage de cahier, très léger, qui s'efface vers les bords. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[-10%] -top-24 bottom-0 -z-10 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
              maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
            }}
          />

          <div className="flex flex-col items-start">
            <p className="animate-entree-carte flex items-center gap-3 text-[15px] font-semibold text-muted-foreground">
              <span className="h-0.5 w-10 rounded-full bg-primary" />
              أولى باك · الامتحان الجهوي
            </p>

            <h1
              className="animate-entree-carte mt-6 font-affiche text-[56px] leading-[1.05] text-ink sm:text-[84px]"
              style={{ animationDelay: "80ms" }}
            >
              الجهوي ماشي{" "}
              <span className="relative inline-block px-2">
                غول
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 100"
                  preserveAspectRatio="none"
                  className="absolute -inset-x-3 -inset-y-1 h-[115%] w-[125%] overflow-visible text-[var(--color-consigne)]"
                >
                  <path
                    className="trace-main"
                    pathLength={1}
                    d="M176 22C140 2 50 4 20 30 0 48 14 82 70 92c56 10 118 0 126-36 6-26-30-44-80-46"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    style={{ "--delai-trace": "0.7s" } as CSSProperties}
                  />
                </svg>
              </span>
              .
            </h1>

            <p
              className="animate-entree-carte mt-5 font-affiche text-[32px] leading-[1.35] text-ink sm:text-[46px]"
              style={{ animationDelay: "160ms" }}
            >
              راجع{" "}
              <MotTournant mots={MATIERES_ACCUEIL.map((m) => ({ texte: m.nom, couleur: couleurMatiere(m.slug) }))} />
              <br />
              معانا، درس بدرس.
            </p>

            <p
              className="animate-entree-carte mt-6 max-w-[34rem] text-lg leading-loose text-muted-foreground"
              style={{ animationDelay: "240ms" }}
            >
              الدروس ديال أولى باك، الامتحانات الجهوية ديال السنين اللي فاتو بالكرونو، والمؤلفات فصل بفصل.
              كلشي فبلاصة وحدة، مكتوب بوضوح، باش تدخل للامتحان وانت عارف آش كيتسناك.
            </p>

            <div className="animate-entree-carte mt-8 flex flex-wrap items-center gap-x-7 gap-y-4" style={{ animationDelay: "320ms" }}>
              <a
                href="#prix"
                className="rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-[0_16px_32px_-14px_var(--color-primary)] transition-transform hover:-translate-y-0.5"
              >
                شوف الأثمنة
              </a>
              <Link
                href="/matieres"
                className="group inline-flex items-center gap-2 text-base font-bold text-ink underline decoration-primary/40 decoration-2 underline-offset-8 transition-colors hover:text-primary hover:decoration-primary"
              >
                تصفح الدروس
                <span className="transition-transform group-hover:-translate-x-1">←</span>
              </Link>
            </div>

            {session && jours !== null && (
              <p className="animate-entree-carte mt-9 flex items-center gap-3 text-[15px] text-muted-foreground" style={{ animationDelay: "400ms" }}>
                <span className="relative flex size-2.5">
                  <span className="absolute inset-0 rounded-full bg-[var(--color-consigne)] animate-ping-doux" />
                  <span className="relative size-2.5 rounded-full bg-[var(--color-consigne)]" />
                </span>
                باقي <strong className="text-lg text-ink tabular-nums">{jours}</strong> يوم على الجهوي، {dateDarija(session.debut)}
              </p>
            )}
          </div>

          {/* Le vrai site : un sujet régional ouvert, sur ordinateur et sur téléphone. */}
          <div className="animate-entree-carte relative mx-auto w-full max-w-[640px] pb-16 sm:pb-20" style={{ animationDelay: "200ms" }}>
            <div className="animate-flotter-lent" style={{ "--inclinaison": "-1.5deg" } as CSSProperties}>
              <CadreNavigateur chemin="/examens-regionaux" nom="examen-regional" alt="صفحة امتحان جهوي فالموقع، مع الكرونو" priorite />
            </div>
            <div
              className="absolute bottom-0 left-0 w-[30%] min-w-[120px] animate-flotter-lent sm:left-[-4%]"
              style={{ animationDelay: "-4s", "--inclinaison": "3deg" } as CSSProperties}
            >
              <CadreTelephone nom="examen-telephone" alt="نفس الامتحان فالتيليفون" />
            </div>
            <NoteMain className="absolute -top-12 left-[2%] hidden sm:flex" sens="bas-gauche">
              جرب الامتحان بالكرونو
            </NoteMain>
          </div>
        </section>

        {/* ——— Les chiffres, comptés en base ——— */}
        <ChiffresAccueil
          examen={
            session && jours !== null
              ? { jours, date: dateDarija(session.debut), progression: progressionAnnee(session.debut) }
              : null
          }
          nombreCours={nombreCours}
          coursParMatiere={[
            { nom: "العربية", nombre: coursParCategorie["arabe"] ?? 0, couleur: couleurMatiere("arabe") },
            { nom: "التربية الإسلامية", nombre: coursParCategorie["education-islamique"] ?? 0, couleur: couleurMatiere("education-islamique") },
            { nom: "الاجتماعيات", nombre: coursParCategorie["histoire-geo"] ?? 0, couleur: couleurMatiere("histoire-geo") },
            { nom: "الفرنسية", nombre: leconsFrancais, couleur: couleurMatiere("francais") },
          ]}
          nombreAnnales={nombreAnnales}
          annalesParAnnee={annalesParAnnee}
          nombreChapitres={nombreChapitres}
          chapitresParOeuvre={oeuvres.map((o) => ({ titre: o.titre_fr, nombre: o.nombreChapitres }))}
        />

        {/* ——— Ce qu'il y a dans le site, un outil par rangée ——— */}
        <section className="mt-24 flex flex-col gap-6 sm:mt-32">
          <div data-reveler="" className="flex flex-col gap-3">
            <h2 className="font-affiche text-[40px] leading-tight text-ink sm:text-6xl">شنو كاين فالموقع؟</h2>
            <p className="max-w-xl text-lg text-muted-foreground">ماشي غير دروس. هاهوما الحوايج اللي غادي تخدم بيهم، كيف كيبانو بصح.</p>
          </div>

          <Rangee
            numero="01"
            titre="الدروس، مكتوبين باش يتفهمو"
            texte={`${nombreCours} درس مقسمين على حساب البرنامج. الاجتماعيات والتربية الإسلامية فورقة منظمة بالعناوين والفهرس حداك، والعربية بخط كبير يتقرا مزيان.`}
            points={[
              parMatiere(coursParCategorie["arabe"] ?? 0, "العربية"),
              parMatiere(coursParCategorie["histoire-geo"] ?? 0, "الاجتماعيات"),
              parMatiere(coursParCategorie["education-islamique"] ?? 0, "التربية الإسلامية"),
              parMatiere(leconsFrancais, "الفرنسية (اللغة والتعبير)"),
            ]}
            lien={{ href: "/matieres", texte: "شوف المواد" }}
            visuel={
              <div className="relative">
                <div className="absolute -top-8 right-[-6%] w-[70%] rotate-[4deg] opacity-90">
                  <CadreNavigateur chemin="/arabe" nom="cours-arabe" alt="" />
                </div>
                <div className="relative">
                  <CadreNavigateur chemin="/histoire-geo" nom="cours-histoire-geo" alt="درس ديال الاجتماعيات فالموقع" />
                </div>
                <NoteMain className="absolute -bottom-14 right-[8%] hidden sm:flex" sens="haut-droite">
                  الفهرس ديما حداك
                </NoteMain>
              </div>
            }
          />

          <Rangee
            inverse
            numero="02"
            titre="المؤلفات، فصل بفصل"
            texte={`${oeuvres.length} مؤلفات ديال البرنامج. كل فصل عندو ملخص بالفرنسية وبالعربية، والشخصيات، والمفردات الصعيبة، والمحاور، وكويز.`}
            points={[...oeuvres.map((o) => o.titre_fr), `${nombreChapitres} فصل ملخص`, "علّم على الفصول اللي قريتي، وشوف شحال باقي"]}
            lien={{ href: "/oeuvres", texte: "شوف المؤلفات" }}
            visuel={
              <div className="relative">
                <CadreNavigateur chemin="/oeuvres" nom="oeuvre-chapitre" alt="فصل من La Boîte à Merveilles فالموقع" />
                <NoteMain className="absolute -top-12 left-[6%] hidden sm:flex" sens="bas-gauche">
                  بالفرنسية وبالعربية
                </NoteMain>
              </div>
            }
          />

          {/* Le correcteur de copies (« ajoute le truc pour la production
              écrite aussi », juste avant les examens régionaux ; puis « non,
              ne mets pas le truc des cours de l'expression écrite » : le
              correcteur seul). Visuels pris sur le vrai site, à la page du
              correcteur : sur ordinateur, et l'envoi en photo sur téléphone.
              L'avis « clé manquante » de la copie locale, sans clé, a été
              retiré de la capture : le site en ligne ne l'affiche pas. */}
          <Rangee
            numero="03"
            titre="مصحح الإنشاء، كيعطيك النقطة"
            texte="كتب الإنشاء ديالك بالفرنسية ولا صورو، والمصحح كيعطيك نقطة على 20، مع الأخطاء مشروحة وشنو خاصك تخدم عليه باش تحسن."
            points={[
              "صوّر الورقة ديالك ولا كتب النص",
              "نقطة على 20 والأخطاء مشروحة",
              correcteur ? `حتى ${QUOTA_QUOTIDIEN_MAX} تصحيحات فالنهار` : "المصحح: قريبا",
            ]}
            lien={{ href: "/redaction/nouvelle", texte: "جرب المصحح" }}
            visuel={
              <div className="relative pb-10">
                <CadreNavigateur chemin="/redaction/nouvelle" nom="correcteur" alt="المصحح فالموقع" />
                <div className="absolute right-[4%] bottom-0 w-[26%] min-w-[110px] -rotate-3">
                  <CadreTelephone nom="correcteur-photo" alt="صوّر الورقة ديالك من التيليفون" />
                </div>
                <NoteMain className="absolute -top-12 left-[8%] hidden sm:flex" sens="bas-gauche">
                  نقطة على 20
                </NoteMain>
              </div>
            }
          />

          <Rangee
            inverse
            numero="04"
            titre="الامتحانات الجهوية، بحال نهار الامتحان"
            texte={
              premiereAnnee && derniereAnnee
                ? `${nombreAnnales} امتحان ديال الأكاديميات، من ${premiereAnnee} حتى ${derniereAnnee}. كتختار الامتحان، كتبدا الكرونو، وكتجاوب مباشرة فالموقع. ومن بعد كتقارن مع التصحيح الرسمي ملي كيكون.`
                : "امتحانات الأكاديميات: كتبدا الكرونو وكتجاوب مباشرة فالموقع."
            }
            points={[
              annales["francais"] ? `الفرنسية: ${annales["francais"].nombre} امتحان` : null,
              annales["arabe"] ? `العربية: ${annales["arabe"].nombre} امتحان` : null,
              "الكرونو والوقت الرسمي ديال كل امتحان",
            ]}
            lien={{ href: "/examens-regionaux", texte: "شوف الامتحانات" }}
            visuel={
              <div className="relative pb-10">
                <CadreNavigateur chemin="/examens-regionaux" nom="examen-regional" alt="امتحان جهوي ديال الفرنسية فالموقع" />
                <div className="absolute bottom-0 left-[4%] w-[26%] min-w-[110px] -rotate-3">
                  <CadreTelephone nom="examen-telephone" alt="" />
                </div>
              </div>
            }
          />

          <Rangee
            numero="05"
            titre="تمارين وفلاش كارت، باش يتحفظ"
            texte="دروس اللغة الفرنسية فيهم تمارين وكويز، ودروس الاجتماعيات فيهم كارطات كتقلبهم باش تحفظ التواريخ والمفاهيم."
            points={[
              (coursParCategorie["langue"] ?? 0) > 0 ? `${coursParCategorie["langue"]} دروس ديال اللغة` : null,
              "كارطات كتقلبهم وكتخلطهم",
            ]}
            lien={{ href: "/langue", texte: "شوف دروس اللغة" }}
            visuel={
              <div className="relative pb-12">
                <CadreNavigateur chemin="/langue" nom="langue-exercices" alt="درس ديال اللغة مع التمارين والكويز" />
                <div className="absolute -bottom-2 right-[-4%] w-[52%] rotate-[3deg] overflow-hidden rounded-[18px] border border-border bg-surface shadow-[0_24px_50px_-24px_rgba(15,23,42,0.5)]">
                  <Apercu nom="flashcards" alt="فلاش كارت ديال درس الاجتماعيات" largeur={816} hauteur={473} sizes="(min-width: 1024px) 24vw, 50vw" />
                </div>
              </div>
            }
          />

          <Rangee
            inverse
            numero="06"
            titre="الكالندريي، باش ما يفوتك والو"
            texte={
              session
                ? `العد العكسي حتى للجهوي (${dateDarija(session.debut)})، والفروض والمراجعة ديالك فكالندريي واحد.`
                : "العد العكسي حتى للجهوي، والفروض والمراجعة ديالك فكالندريي واحد."
            }
            points={["الفروض، المراقبة والمراجعة بالألوان", "شنو جاي فهاد الأيام"]}
            lien={{ href: "/calendrier", texte: "شوف الكالندريي" }}
            visuel={
              <div className="relative">
                <CadreNavigateur chemin="/calendrier" nom="calendrier" alt="الكالندريي مع العد العكسي للجهوي" />
                {jours !== null && (
                  <NoteMain className="absolute -bottom-14 left-[10%] hidden sm:flex" sens="haut-gauche">
                    {`باقي ${jours} يوم!`}
                  </NoteMain>
                )}
              </div>
            }
          />
        </section>

        {/* ——— Le reste, en liste ——— */}
        <section className="mt-28 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-border pt-12 sm:mt-36 sm:grid-cols-3">
          <div data-reveler="" className="sm:col-span-3">
            <h2 className="font-affiche text-4xl text-ink sm:text-5xl">وزيد…</h2>
          </div>
          {[
            { Icone: IconeGraphique, titre: "تتبع التقدم", texte: "التابلو ديالك كيبين ليك شحال قريتي من الفصول ديال المؤلفات." },
            { Icone: IconeBulles, titre: "الجماعة", texte: "سول، جاوب، علّق وزيد تصاور مع التلاميذ اللي كيوجدو بحالك." },
            { Icone: IconePalette, titre: `${PALETTES.length} لون والوضع الليلي`, texte: "ختار اللون اللي عجبك، وقرا فالليل بلا ما تعيا عينيك." },
          ].map((o, i) => (
            <div key={o.titre} data-reveler="" style={delai(i * 90)} className="flex flex-col gap-3">
              <span className="flex items-center gap-3">
                <o.Icone className="size-7 text-primary" />
              </span>
              <span className="text-xl font-bold text-ink">{o.titre}</span>
              <span className="text-[15px] leading-relaxed text-muted-foreground">{o.texte}</span>
            </div>
          ))}
        </section>

        {/* ——— Bande qui défile ———
            `dir="ltr"` : dans la page en RTL, la piste s'alignait à droite
            et le défilement vers la gauche la sortait de l'écran. */}
        <div dir="ltr" aria-hidden="true" className="relative -mx-6 mt-28 overflow-hidden border-y border-border py-5 sm:-mx-9 sm:mt-36">
          <div className="flex w-max animate-defiler items-center gap-10 whitespace-nowrap">
            {[...bande, ...bande].map((mot, i) => (
              <span key={i} dir="rtl" className="flex items-center gap-10 font-affiche text-3xl sm:text-4xl">
                <span
                  className={i % 2 ? "text-transparent" : "text-ink"}
                  style={i % 2 ? { WebkitTextStroke: "1.2px var(--color-ink)" } : undefined}
                >
                  {mot}
                </span>
                <span className="size-2 rounded-full bg-primary" />
              </span>
            ))}
          </div>
        </div>

        {/* ——— Les prix ——— */}
        <section id="prix" className="mt-24 flex scroll-mt-28 flex-col gap-12 sm:mt-32">
          <div data-reveler="" className="flex flex-col items-center gap-3 text-center">
            <h2 className="font-affiche text-[40px] leading-tight text-ink sm:text-6xl">الأثمنة</h2>
            <p className="max-w-xl text-lg text-muted-foreground">
              أقل من {Math.ceil(annee.prix / annee.mois)} درهم فالشهر مع العرض ديال العام. الخلاص كيدوز عبر واتساب.
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 items-stretch gap-6 md:grid-cols-2">
            {[annee, trimestre].map((f, i) => (
              <div key={f.cle} data-reveler="" style={delai(i * 140)} className="relative">
                {f.cle === "annee" && (
                  <NoteMain className="absolute -top-14 left-[4%] z-10 flex" sens="bas-droite">
                    هادا اللي كننصحوك بيه
                  </NoteMain>
                )}
                <CarteFormule formule={f} vedette={f.cle === "annee"} plus={plusFormule(f, plusCommuns, session?.debut ?? null)} />
              </div>
            ))}
          </div>

          <p data-reveler="" className="mx-auto max-w-2xl text-center text-[15px] leading-loose text-muted-foreground">
            ضغط على الزر: كيتحل ليك واتساب والميساج مكتوب بوحدو مع العرض اللي ختاريتي. صيفطو، ونجاوبوك باش نكملو الخلاص.
          </p>
        </section>

        {/* ——— Pour finir ——— */}
        <section data-reveler="" className="mt-28 flex flex-col items-center gap-6 border-t border-border pt-20 text-center sm:mt-36">
          <h2 className="font-affiche text-[40px] leading-[1.25] text-ink sm:text-6xl">
            ياله، الجهوي ما كيتسنى{" "}
            <span className="relative inline-block">
              حتى واحد
              <svg aria-hidden="true" viewBox="0 0 300 24" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-3 h-5 w-full text-primary">
                <path className="trace-main" pathLength={1} d="M4 16C60 6 120 4 180 9s90 8 116-2" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground">
            {jours !== null ? `باقي ${jours} يوم. ` : ""}كل نهار كتراجع فيه دابا، كيتحسب ليك نهار الامتحان.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
            <a
              href="#prix"
              className="rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-[0_16px_32px_-14px_var(--color-primary)] transition-transform hover:-translate-y-0.5"
            >
              شوف الأثمنة
            </a>
            <Link
              href="/connexion"
              className="text-base font-bold text-ink underline decoration-primary/40 decoration-2 underline-offset-8 transition-colors hover:text-primary hover:decoration-primary"
            >
              دخل للحساب ديالك
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

/** Une rangée « un outil » : numéro, titre, texte, points et lien d'un
 * côté, capture de l'autre. `inverse` échange les côtés sur grand
 * écran ; la capture glisse depuis son côté à l'apparition. */
function Rangee({
  numero,
  titre,
  texte,
  points,
  lien,
  visuel,
  inverse = false,
}: {
  numero: string;
  titre: string;
  texte: string;
  points: (string | null)[];
  lien: { href: string; texte: string };
  visuel: ReactNode;
  inverse?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 py-12 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <div data-reveler="" className={`flex flex-col items-start gap-5 ${inverse ? "lg:order-2" : ""}`}>
        <span
          className="font-affiche text-7xl leading-none text-transparent sm:text-8xl"
          style={{ WebkitTextStroke: "1.5px var(--color-primary)" }}
        >
          {numero}
        </span>
        <h3 className="font-affiche text-[32px] leading-tight text-ink sm:text-[42px]">{titre}</h3>
        <p className="text-[17px] leading-loose text-muted-foreground">{texte}</p>
        <ul className="flex flex-col gap-2.5">
          {points
            .filter((p): p is string => p !== null)
            .map((p) => (
              <li key={p} className="flex items-center gap-3 text-[16px] font-semibold text-ink">
                <IconeCoche className="size-5 shrink-0 text-primary" />
                {p}
              </li>
            ))}
        </ul>
        <Link
          href={lien.href}
          className="group mt-1 inline-flex items-center gap-2 text-base font-bold text-primary underline decoration-primary/30 decoration-2 underline-offset-8 hover:decoration-primary"
        >
          {lien.texte}
          <span className="transition-transform group-hover:-translate-x-1">←</span>
        </Link>
      </div>
      <div data-reveler="" data-depuis={inverse ? "droite" : "gauche"} style={delai(120)} className={inverse ? "lg:order-1" : ""}>
        {visuel}
      </div>
    </div>
  );
}

/** Capture d'une page du site dans un cadre de navigateur. La barre ne
 * montre que le chemin : aucun nom de domaine n'est fixé. */
function CadreNavigateur({ chemin, nom, alt, priorite = false }: { chemin: string; nom: string; alt: string; priorite?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-border bg-surface shadow-[0_30px_70px_-30px_rgba(15,23,42,0.45)]">
      <div dir="ltr" className="flex h-9 items-center gap-3 border-b border-border bg-surface-muted px-4">
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
        </span>
        <span className="mx-auto rounded-md bg-surface px-3 py-0.5 font-mono text-[11px] text-subtle-foreground">{chemin}</span>
        <span className="w-[42px]" />
      </div>
      <Apercu nom={nom} alt={alt} largeur={1400} hauteur={779} sizes="(min-width: 1024px) 50vw, 100vw" priorite={priorite} />
    </div>
  );
}

/**
 * Une capture du site en deux versions, claire et sombre
 * (public/apercus/<nom>-clair.webp et -sombre.webp) : la page affiche
 * celle du mode courant (règles `.apercu-*` d'app/globals.css). Une
 * capture claire au milieu de la page en mode sombre éblouissait.
 * L'image masquée n'est pas téléchargée (chargement différé).
 */
function Apercu({ nom, alt, largeur, hauteur, sizes, priorite = false }: { nom: string; alt: string; largeur: number; hauteur: number; sizes: string; priorite?: boolean }) {
  return (
    <>
      <Image src={`/apercus/${nom}-clair.webp`} alt={alt} width={largeur} height={hauteur} sizes={sizes} priority={priorite} className="apercu-clair h-auto w-full" />
      <Image src={`/apercus/${nom}-sombre.webp`} alt={alt} width={largeur} height={hauteur} sizes={sizes} loading={priorite ? "eager" : "lazy"} className="apercu-sombre h-auto w-full" />
    </>
  );
}

/** Capture du site sur téléphone, dans un cadre noir arrondi. */
function CadreTelephone({ nom, alt }: { nom: string; alt: string }) {
  return (
    <div className="rounded-[26px] bg-[#0b0d12] p-[5px] shadow-[0_24px_50px_-18px_rgba(15,23,42,0.6)]">
      <div className="overflow-hidden rounded-[21px]">
        <Apercu nom={nom} alt={alt} largeur={585} hauteur={1134} sizes="200px" />
      </div>
    </div>
  );
}

/** Petite note écrite à la main (ruqʿa), avec une flèche tracée qui
 * pointe vers ce qu'elle commente. */
function NoteMain({ children, className, sens }: { children: ReactNode; className: string; sens: "bas-gauche" | "bas-droite" | "haut-droite" | "haut-gauche" }) {
  const versLeBas = sens.startsWith("bas");
  const versLaGauche = sens.endsWith("gauche");
  const fleche = (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 50"
      className="h-10 w-12 shrink-0"
      style={{ transform: `scale(${versLaGauche ? 1 : -1}, ${versLeBas ? 1 : -1})` }}
    >
      <path className="trace-main" pathLength={1} d="M54 6C40 8 22 16 14 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path className="trace-main" pathLength={1} d="M6 30l8 11 10-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ "--delai-trace": "1.3s" } as CSSProperties} />
    </svg>
  );
  return (
    <span className={`pointer-events-none gap-1 font-ruqaa text-2xl text-[var(--color-consigne)] ${versLeBas ? "items-end" : "items-start"} ${className}`}>
      {versLaGauche ? (
        <>
          <span className="whitespace-nowrap">{children}</span>
          {fleche}
        </>
      ) : (
        <>
          {fleche}
          <span className="whitespace-nowrap">{children}</span>
        </>
      )}
    </span>
  );
}
