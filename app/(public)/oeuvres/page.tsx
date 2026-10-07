import CarteOeuvre from "@/components/CarteOeuvre";
import { FILIERE_ACTUELLE } from "@/lib/filiere";
import { recupererOeuvresParFiliere } from "@/lib/supabase/contenu";

/**
 * /oeuvres — liste des œuvres au programme, sous forme de grille de
 * cartes cliquables. 1 colonne en mobile, 3 en desktop.
 */
export default async function PageOeuvres() {
  const oeuvres = await recupererOeuvresParFiliere(FILIERE_ACTUELLE);

  return (
    <main className="w-full px-6 py-10 sm:px-9">
      <h1 className="mb-6 text-2xl font-semibold text-foreground">
        Œuvres au programme
      </h1>

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
