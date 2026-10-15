/**
 * Les photos des cartes de matière de l'accueil (public/*-matiere.jpg).
 *
 * Remplacées à la demande « augmente la qualité des photos » : les
 * anciennes étaient découpées dans une maquette (540 à 735 px de large,
 * avec des restes de l'interface, « 68% » ou « 54 », incrustés dedans).
 * Celles-ci viennent de Wikimedia Commons, sous licence libre, et ont
 * été recadrées en bandeau. Les licences CC BY et CC BY-SA exigent de
 * citer l'auteur, la licence et la source : c'est ce que fait la page
 * /a-propos à partir de cette liste.
 */
export type CreditPhoto = {
  matiere: string;
  fichier: string;
  titre: string;
  auteur: string | null;
  licence: string;
  lienLicence: string | null;
  source: string;
};

export const CREDITS_PHOTOS: CreditPhoto[] = [
  {
    matiere: "Français",
    fichier: "/francais-matiere.jpg",
    titre: "Old-fashioned clock on an open book closeup",
    auteur: "Shixart1985",
    licence: "CC BY 2.0",
    lienLicence: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Old-fashioned_clock_on_an_open_book_closeup.jpg",
  },
  {
    matiere: "Arabe",
    fichier: "/arabe-matiere.jpg",
    titre: "Nastaliq Calligraphy",
    auteur: "Udaradingin",
    licence: "CC BY-SA 4.0",
    lienLicence: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Nastaliq_Calligraphy.png",
  },
  {
    matiere: "Histoire-Géo",
    fichier: "/histoire-geo-matiere.jpg",
    titre: "Globe of the Ancient World 1977",
    auteur: "DavidHalpernist",
    licence: "CC BY-SA 4.0",
    lienLicence: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Globe_of_the_Ancient_World_1977.jpg",
  },
  {
    matiere: "Éducation islamique",
    fichier: "/education-islamique-matiere.jpg",
    titre: "Mosquée de la Koutoubia - marakesh",
    auteur: "Baca12",
    licence: "CC BY-SA 4.0",
    lienLicence: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Mosqu%C3%A9e_de_la_Koutoubia_-_marakesh.jpg",
  },
];
