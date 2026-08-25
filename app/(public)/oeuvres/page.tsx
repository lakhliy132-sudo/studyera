import CarteOeuvre from "@/components/CarteOeuvre";
import { recupererOeuvresParFiliere } from "@/lib/supabase/contenu";

// Filière en dur pour cette session : à terme, dépendra de la filière
// de l'élève connecté (profils.filiere, qui n'existe pas encore —
// signalé séparément).
const FILIERE_ACTUELLE = "1bac";

/**
 * /oeuvres — liste des œuvres au programme, sous forme de grille de
 * cartes cliquables. 1 colonne en mobile, 3 en desktop.
 */
export default async function PageOeuvres() {
  const oeuvres = await recupererOeuvresParFiliere(FILIERE_ACTUELLE);

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-semibold text-foreground">
        Œuvres au programme
      </h1>

      {oeuvres.length === 0 ? (
        <p className="text-muted-foreground">Bientôt disponible.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {oeuvres.map((oeuvre) => (
            <CarteOeuvre
              key={oeuvre.id}
              oeuvre={oeuvre}
              nombreChapitres={oeuvre.nombreChapitres}
            />
          ))}
        </div>
      )}
    </main>
  );
}
