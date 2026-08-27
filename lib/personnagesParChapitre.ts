/**
 * Quels personnages de *La Boîte à Merveilles* apparaissent réellement
 * dans chaque chapitre — demandé explicitement par l'utilisateur ("juste
 * les personnages qui sont dans le chapitre", en réaction au choix
 * précédent d'afficher systématiquement les 27 personnages de l'œuvre
 * sur chaque page chapitre).
 *
 * ⚠️ Solution de contournement, pas la solution propre : la table
 * `personnages` n'a qu'un seul `chapitre_apparition_id` (le chapitre où
 * le personnage apparaît pour la PREMIÈRE fois), pas une vraie relation
 * many-to-many "ce personnage apparaît dans ces chapitres-là". Pour les
 * 12 personnages centraux (récurrents dans presque tous les chapitres,
 * tous rattachés au chapitre 1 où ils sont introduits), filtrer sur
 * `chapitre_apparition_id` les ferait disparaître de tous les autres
 * chapitres où ils sont pourtant bien présents. Une vraie table de
 * liaison `chapitres_personnages` serait la solution correcte, mais
 * demanderait une migration Supabase à appliquer manuellement (voir
 * l'avertissement déjà en tête de fichier pour la migration admin — pas
 * encore appliquée des jours plus tard) : en attendant, cette liste est
 * saisie à la main par Claude à partir des résumés de chapitres déjà
 * rédigés cette session (donc une vraie lecture du texte, pas une
 * supposition), à tenir à jour si le contenu des résumés change.
 *
 * Les valeurs sont les `nom` exacts de la table `personnages` (mêmes
 * légers écarts d'orthographe qu'ailleurs : "Maalem Abdeslam", pas
 * "Maâlem Abdeslem" utilisé dans le texte des résumés — voir ETAT.md).
 */
export const PERSONNAGES_PAR_CHAPITRE_BOITE_A_MERVEILLES: Record<number, string[]> = {
  1: [
    "Sidi Mohammed",
    "Lalla Zoubida",
    "Maalem Abdeslam",
    "La Chouafa (tante Kenza)",
    "Driss El Aouad",
    "Rahma",
    "Zineb",
    "Fatma Bziouya",
    "Allal",
    "Abdellah",
    "Lalla Fatoum",
    "Le fqih",
  ],
  2: ["Sidi Mohammed", "Lalla Zoubida", "Maalem Abdeslam", "Lalla Aïcha", "Rahma", "Fatma Bziouya"],
  3: [
    "Sidi Mohammed",
    "Lalla Zoubida",
    "Maalem Abdeslam",
    "Fatma Bziouya",
    "Rahma",
    "Zineb",
    "Khadija (sœur de Rahma)",
  ],
  4: [
    "Sidi Mohammed",
    "Lalla Zoubida",
    "Maalem Abdeslam",
    "Lalla Aïcha",
    "Moulay Larbi",
    "Abdelkader",
    "Abdellah",
  ],
  5: [
    "Sidi Mohammed",
    "Lalla Zoubida",
    "Maalem Abdeslam",
    "Lalla Aïcha",
    "Fatma Bziouya",
    "Rahma",
    "Zineb",
    "Sidi Mohammed Ben Taher",
    "Le fqih",
  ],
  6: [
    "Sidi Mohammed",
    "Lalla Zoubida",
    "Le fqih",
    "Lalla Aïcha",
    "Rahma",
    "Zineb",
    "L'oncle Othmane",
    "Lalla Khadija (épouse de l'oncle Othmane)",
  ],
  7: ["Sidi Mohammed", "Maalem Abdeslam", "Hamoussa", "Lalla Aïcha", "Lalla Zoubida", "Le fqih"],
  8: [
    "Lalla Aïcha",
    "Maalem Abdeslam",
    "Lalla Zoubida",
    "Fatma Bziouya",
    "Le courtier malhonnête",
    "Abderrahman le coiffeur",
    "La fille du coiffeur",
    "Moulay Larbi",
    "Le fqih",
  ],
  9: ["Sidi Mohammed", "Lalla Zoubida", "Maalem Abdeslam", "Lalla Aïcha", "Sidi El Arafi"],
  10: [
    "Sidi Mohammed",
    "Lalla Zoubida",
    "Lalla Aïcha",
    "Sidi El Arafi",
    "La femme de Sidi El Arafi",
    "Le fqih",
    "Maalem Abdeslam",
  ],
  11: [
    "Lalla Zoubida",
    "Lalla Aïcha",
    "Salama",
    "Sidi Mohammed",
    "Zhour",
    "Moulay Larbi",
    "La fille du coiffeur",
  ],
  12: [
    "Sidi Mohammed",
    "Lalla Zoubida",
    "Maalem Abdeslam",
    "Le fqih",
    "Zineb",
    "Driss El Aouad",
    "Moulay Larbi",
  ],
};
