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

/**
 * Même principe que ci-dessus, pour *Antigone* — demandé explicitement
 * par l'utilisateur ("Fiche de scene modifie la scene par scene"), une
 * fois le vrai contenu scène par scène disponible (voir le résumé de
 * chaque scène en base, fourni par l'utilisateur). Clé = `numero` du
 * chapitre en base (2 à 22, "Scène 1" à "Scène 21" ; "Le mythe
 * d'Œdipe", numero=1, n'y figure pas — ce n'est pas une scène de la
 * pièce, aucun des personnages de la table `personnages`, tous issus
 * du texte d'Anouilh, n'y "apparaît" au sens de cette liste).
 *
 * Ne retient que les personnages effectivement présents/parlants dans
 * la scène (comme pour La Boîte à Merveilles ci-dessus) : par exemple
 * Étéocle et Polynice, déjà morts, sont évoqués dans la Scène 14 sans y
 * apparaître, donc absents de la liste de cette scène.
 */
export const PERSONNAGES_PAR_SCENE_ANTIGONE: Record<number, string[]> = {
  2: ["Antigone", "Ismène", "Créon", "Hémon", "La Nourrice", "Le Chœur", "Le Garde (Jonas)", "Le Prologue"],
  3: ["Antigone", "La Nourrice"],
  4: ["Antigone", "Ismène"],
  5: ["Antigone", "La Nourrice"],
  6: ["Antigone", "Hémon"],
  7: ["Antigone"],
  8: ["Créon", "Le Garde (Jonas)"],
  9: ["Le Chœur"],
  10: ["Créon", "Le Garde (Jonas)"],
  11: ["Antigone", "Le Garde (Jonas)"],
  12: ["Antigone", "Créon"],
  13: ["Créon", "Antigone"],
  14: ["Antigone", "Créon"],
  15: ["Antigone", "Créon"],
  16: ["Ismène", "Antigone"],
  17: ["Hémon", "Créon"],
  18: ["Antigone", "Le Garde (Jonas)"],
  19: ["Le Chœur", "Créon"],
  20: ["Antigone"],
  21: ["Le Messager", "Hémon", "Créon"],
  22: ["Créon", "Eurydice"],
};
