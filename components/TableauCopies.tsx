import type { CopieAvecDetails } from "@/lib/supabase/admin";

interface TableauCopiesProps {
  copies: CopieAvecDetails[];
}

function formaterDate(dateIso: string) {
  return new Date(dateIso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

/**
 * Liste des copies déposées par les élèves, pour /administration.
 *
 * Aucune UI élève ne permet encore de déposer une copie (voir ETAT.md) :
 * cette table est donc vide en pratique pour l'instant. Le message de
 * remplacement ci-dessous est le cas normal, pas une erreur.
 */
export default function TableauCopies({ copies }: TableauCopiesProps) {
  if (copies.length === 0) {
    return <p className="text-muted-foreground">Aucune copie déposée pour l&apos;instant.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-max text-sm">
        <thead>
          <tr className="border-b border-border bg-surface-muted text-left text-muted-foreground">
            <th className="px-3 py-2 font-medium">Date</th>
            <th className="px-3 py-2 font-medium">Élève</th>
            <th className="px-3 py-2 font-medium">Sujet</th>
            <th className="px-3 py-2 font-medium">Note</th>
            <th className="px-3 py-2 font-medium">Copie</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {copies.map((copie) => (
            <tr key={copie.id}>
              <td className="px-3 py-2 whitespace-nowrap text-foreground">
                {formaterDate(copie.created_at)}
              </td>
              <td className="px-3 py-2 text-foreground">
                {copie.eleveNomComplet ?? copie.eleveEmail ?? "—"}
              </td>
              <td className="px-3 py-2 text-foreground">{copie.sujetTitre ?? "—"}</td>
              <td className="px-3 py-2 text-foreground">
                {copie.note_total !== null ? copie.note_total : "En attente"}
              </td>
              <td className="px-3 py-2">
                {copie.image_url ? (
                  <a
                    href={copie.image_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    Voir
                  </a>
                ) : (
                  "—"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
