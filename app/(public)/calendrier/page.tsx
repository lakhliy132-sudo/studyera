import CarteDecompteCalendrier from "@/components/CarteDecompteCalendrier";
import CarteExamensOfficiels from "@/components/CarteExamensOfficiels";
import EnteteCalendrier from "@/components/EnteteCalendrier";
import PlanningAgenda from "@/components/PlanningAgenda";
import { EXAMEN_REGIONAL_1BAC, prochaineSession } from "@/lib/calendrier";
import { recupererEvenementsEleve } from "@/lib/supabase/evenements";
import { creerClientServeur } from "@/lib/supabase/server";

const versCle = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

/**
 * /calendrier — demandé par l'utilisateur comme lien de navigation, puis
 * repris sur plusieurs maquettes successives (voir l'historique git).
 * Dernière refonte ("FAIT MOI CA DEJA") :
 * - en haut, l'en-tête avec la légende des catégories, et à droite la
 *   carte bleue des jours restants avant l'examen régional ;
 * - la barre de saisie d'un événement ;
 * - la grille du mois, et à droite "À venir" puis "Examens officiels".
 *
 * Rien d'inventé : les événements sont ceux que l'élève a ajoutés
 * (table `evenements_eleve`), les dates d'examen viennent de
 * lib/calendrier.ts. Un visiteur voit le calendrier et les examens, et
 * une invitation à se connecter à la place de la saisie.
 *
 * Marges d'origine (px-6 sm:px-9), sans les marges larges du reste du
 * site : "pour accueil tableau de bord et calendrier laisse les tailles
 * comme avant cad sans marge" (voir components/ConteneurMarges.tsx).
 */
export default async function PageCalendrier() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const evenements = await recupererEvenementsEleve();
  const session = prochaineSession();

  const examens = EXAMEN_REGIONAL_1BAC.map((s) => ({ titre: s.titre, debut: versCle(s.debut), fin: versCle(s.fin) }));

  // Un élève connecté a le bouton du menu en haut à gauche sous
  // 1280 px : on lui laisse la place au-dessus de l'en-tête.
  return (
    <main className={`flex w-full flex-col gap-6 px-6 pb-6 sm:px-9 sm:pb-8 ${user ? "pt-16 xl:pt-8" : "pt-6 sm:pt-8"}`}>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <div className="animate-entree-carte">
          <EnteteCalendrier />
        </div>
        {session && (
          <div className="animate-entree-carte" style={{ animationDelay: "60ms" }}>
            <CarteDecompteCalendrier session={session} />
          </div>
        )}
      </div>

      <div className="animate-entree-carte" style={{ animationDelay: "120ms" }}>
        <PlanningAgenda evenements={evenements} connecte={Boolean(user)} examens={examens}>
          <CarteExamensOfficiels />
        </PlanningAgenda>
      </div>
    </main>
  );
}
