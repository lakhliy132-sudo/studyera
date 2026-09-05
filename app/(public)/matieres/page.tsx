import BandeauReprise from "@/components/BandeauReprise";
import CarteMatiereProgression from "@/components/CarteMatiereProgression";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { MATIERES } from "@/lib/matieres";
import { recupererCoursParCategorie, recupererOeuvresParFiliere } from "@/lib/supabase/contenu";
import { creerClientServeur } from "@/lib/supabase/server";
import { recupererProgressionParOeuvre, recupererRepriseLecture } from "@/lib/supabase/tableauDeBord";

/**
 * /matieres — refondue sur une maquette HTML complète fournie par
 * l'utilisateur ("fais ca") : "Tes matières" (titre + décompte réel),
 * bandeau de reprise de lecture, une carte compacte par matière avec
 * sa progression réelle. Remplace l'ancienne page (grand titre centré
 * + grille de cartes "Découvrir" sans données) — /francais et
 * /[matiere] (les pages de détail vers lesquelles ces cartes pointent
 * toujours) restent inchangées.
 *
 * Données réelles, rien d'inventé :
 * - Français : progression agrégée depuis `recupererProgressionParOeuvre`
 *   (déjà utilisée par /progres et le tableau de bord) — chapitres
 *   lus / total, tous œuvres confondues.
 * - Les 3 nouvelles matières (éducation islamique, arabe,
 *   histoire-géo) : `recupererCoursParCategorie` renvoie 0 pour
 *   chacune pour l'instant (aucun contenu importé) — leur carte
 *   affiche "Bientôt disponible" plutôt qu'une fraction. La maquette
 *   fournie illustrait des fractions (2/9, 0/8, 5/9) à titre
 *   d'exemple de mise en page : aucun de ces chiffres n'est réel,
 *   donc aucun n'a été repris.
 * - Le bandeau de reprise vient de `recupererRepriseLecture`, déjà
 *   utilisée par le tableau de bord (voir BandeauReprise.tsx).
 *
 * Fonctionne pour un visiteur non connecté comme pour un élève
 * connecté (même pattern que le reste du site, ex. BoutonMarquerLu) :
 * `userId` vaut `null`, toutes les fonctions renvoient alors une
 * progression à 0 sans requête — pas besoin de page séparée "publique"
 * vs "connectée".
 */
export default async function PageMatieres() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id ?? null;

  const [oeuvres, progressionFrancais, reprise, coursParMatiere] = await Promise.all([
    recupererOeuvresParFiliere(FILIERE_ACTUELLE),
    recupererProgressionParOeuvre(userId),
    recupererRepriseLecture(userId),
    Promise.all(MATIERES.map((matiere) => recupererCoursParCategorie(matiere.slug, FILIERE_ACTUELLE))),
  ]);

  const totalChapitresFrancais = progressionFrancais.parOeuvre.reduce(
    (somme, oeuvre) => somme + oeuvre.totalChapitres,
    0,
  );
  const totalChapitres = totalChapitresFrancais + coursParMatiere.reduce((somme, cours) => somme + cours.length, 0);
  const totalMatieres = 1 + MATIERES.length;

  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-3xl flex-col px-6 py-10 sm:px-9">
        <div className="rounded-[14px] border border-border bg-surface p-5 shadow-sm sm:p-6">
          <p className="text-lg font-semibold text-ink">Tes matières</p>
          <p className="mt-1 mb-4 text-[13px] text-muted-foreground">
            Bac {FILIERE_ACTUELLE === "1bac" ? "1ère année" : FILIERE_ACTUELLE} · {totalMatieres} matières ·{" "}
            {totalChapitres} chapitres
          </p>

          {reprise && <BandeauReprise reprise={reprise} />}

          <div className="grid grid-cols-1 gap-2.5 min-[560px]:grid-cols-2">
            <CarteMatiereProgression
              href="/francais"
              titre="Français"
              description={`${oeuvres.length} œuvre${oeuvres.length > 1 ? "s" : ""} · correcteur IA`}
              couleur="var(--color-matiere-francais)"
              progression={{ fait: progressionFrancais.totalChapitresLus, total: totalChapitresFrancais }}
            />

            {MATIERES.map((matiere, index) => (
              <CarteMatiereProgression
                key={matiere.slug}
                href={`/${matiere.slug}`}
                titre={matiere.nom}
                description={matiere.descriptionCourte}
                couleur={matiere.couleur}
                progression={coursParMatiere[index].length > 0 ? { fait: 0, total: coursParMatiere[index].length } : null}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
