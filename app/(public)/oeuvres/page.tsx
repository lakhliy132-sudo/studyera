import CarteOeuvre from "@/components/CarteOeuvre";
import EnTeteMatiere from "@/components/EnTeteMatiere";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { recupererOeuvresParFiliere } from "@/lib/supabase/contenu";

/**
 * /oeuvres — liste des œuvres au programme, sous forme de grille de
 * cartes cliquables. 1 colonne en mobile, 3 en desktop.
 */
export default async function PageOeuvres() {
  const oeuvres = await recupererOeuvresParFiliere(FILIERE_ACTUELLE);

  return (
    <main className="flex w-full flex-col gap-8 px-6 pt-6 pb-10 sm:gap-10 sm:px-9 lg:px-16 xl:px-24 2xl:px-40 sm:pt-9 sm:pb-16">
      <EnTeteMatiere
        retour={{ href: "/francais", libelle: "Retour au français" }}
        surTitre="Français · 1ʳᵉ année bac"
        titreAccent="Œuvres"
        titreApres=" au programme"
        description="Résumés, personnages, lexique et sujets pour chaque œuvre."
      />

      {oeuvres.length === 0 ? (
        <p className="text-muted-foreground">Bientôt disponible.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {oeuvres.map((oeuvre, index) => (
            <CarteOeuvre
              key={oeuvre.id}
              oeuvre={oeuvre}
              nombreChapitres={oeuvre.nombreChapitres}
              indexAnimation={index}
            />
          ))}
        </div>
      )}
    </main>
  );
}
