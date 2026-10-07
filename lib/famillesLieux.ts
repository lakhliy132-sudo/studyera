/**
 * Regroupement des lieux d'une œuvre en quelques grands endroits, pour
 * l'onglet Lieux — demandé par l'utilisateur pour La Boîte à merveilles
 * ("pour lieux dans la boite a merveille c est pas tres comprehensible
 * fait que pour elle un truc comprehensible et mieux"). Ses 19 lieux en
 * base, chacun avec sa couleur, ne se lisaient plus.
 *
 * Les clés sont les noms exacts de `chapitres.lieux`. Le regroupement ne
 * suppose rien que le nom ne dise : "Dar Chouafa" et "La maison (Dar
 * Chouafa)" sont le même lieu ; les trois "Msid" aussi ; "Chez les
 * autres" réunit les lieux nommés d'après quelqu'un (la maison de Lalla
 * Aïcha, la chambre de Fatma Bziouya…) ; "Dans la médina" les rues,
 * souks, bain et bâtiments de la ville. Un lieu absent d'ici (ajouté en
 * base plus tard) tombe dans "Autres lieux" au lieu de disparaître.
 */
export interface FamilleLieux {
  nom: string;
  lieux: string[];
}

export const FAMILLES_LIEUX: Record<string, FamilleLieux[]> = {
  "boite-a-merveilles": [
    { nom: "Dar Chouafa, la maison", lieux: ["La maison (Dar Chouafa)", "Dar Chouafa"] },
    { nom: "Le Msid", lieux: ["Le Msid", "Le Msid (porte de Derb Noualla)", "Le Msid (mausolée)"] },
    {
      nom: "Chez les autres",
      lieux: ["La maison de Lalla Aïcha", "La chambre de Fatma Bziouya", "Le logis de Sidi El Arafi", "Chez le coiffeur"],
    },
    {
      nom: "Dans la médina de Fès",
      lieux: [
        "La médina de Fès",
        "La rue Jiaf",
        "La rue",
        "La Kissaria",
        "Le souk",
        "Le souk des bijoutiers",
        "Le bain maure",
        "Les terrasses",
        "L'asile des Idrissides (Dar Kitoun)",
      ],
    },
    { nom: "Le sanctuaire", lieux: ["Le mausolée de Sidi Ali Boughaleb"] },
  ],
};
