/**
 * Script d'import de contenu : data/contenu-plateforme-bac.xlsx → Supabase.
 *
 * À exécuter en local uniquement (jamais en production, jamais depuis
 * le code de l'app) :
 *
 *   npm run importer
 *
 * Utilise la clé service_role (voir .env.local), qui contourne
 * entièrement RLS : c'est nécessaire ici car ce script doit pouvoir
 * écrire dans les tables de contenu sans être connecté en tant
 * qu'admin via un navigateur. Cette clé ne doit jamais être exposée au
 * navigateur ni commitée.
 *
 * Idempotent : peut être relancé après chaque mise à jour du fichier
 * Excel. Chaque table a une contrainte d'unicité (voir les migrations
 * supabase/migrations/) sur laquelle repose un upsert : une ligne déjà
 * présente est mise à jour, jamais dupliquée.
 *
 * Feuilles lues : Oeuvres, Chapitres, Lexique, Personnages, Sujets.
 * La feuille "Légende" est ignorée (c'est une notice d'utilisation du
 * fichier, pas des données).
 *
 * Feuille "Paragraphes" (texte intégral des chapitres, colonnes
 * oeuvre_slug, chapitre_numero, ordre, texte_fr, texte_ar) : lue si
 * présente, mais ABSENTE du fichier actuel. Contrairement aux autres
 * feuilles, son absence n'est donc volontairement pas signalée comme
 * une erreur : le texte intégral n'est pas encore prêt pour les œuvres
 * importées jusqu'ici, ce n'est pas un problème d'import.
 *
 * La feuille "Chapitres" alimente DEUX tables à partir des mêmes
 * lignes : `chapitres` (identité du chapitre) et `fiches` (résumé,
 * thèmes, points clés) — voir CHAMPS_CHAPITRE_VERS_FICHE plus bas.
 */

import { config as chargerEnv } from "dotenv";
// `quiet: true` desactive les messages promotionnels que le paquet
// dotenv affiche par defaut au demarrage (annonces pour des produits
// tiers de ses mainteneurs) : sans rapport avec le chargement des
// variables lui-meme.
chargerEnv({ path: ".env.local", quiet: true });

import { createClient } from "@supabase/supabase-js";
import ExcelJS from "exceljs";

const CHEMIN_FICHIER = "data/contenu-plateforme-bac.xlsx";

const urlSupabase = process.env.NEXT_PUBLIC_SUPABASE_URL;
const cleServiceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!urlSupabase || !cleServiceRole) {
  console.error(
    "Variables manquantes : NEXT_PUBLIC_SUPABASE_URL et/ou SUPABASE_SERVICE_ROLE_KEY " +
      "doivent être renseignées dans .env.local.",
  );
  process.exit(1);
}

// La clé service_role contourne RLS : ce client ne doit servir que
// depuis ce script, jamais depuis le code de l'application.
const supabase = createClient(urlSupabase, cleServiceRole);

// --- Petits utilitaires de lecture/normalisation des cellules ---

function texte(valeur: ExcelJS.CellValue): string | null {
  if (valeur === null || valeur === undefined) return null;
  const s = String(valeur).trim();
  return s === "" ? null : s;
}

function nombre(valeur: ExcelJS.CellValue): number | null {
  if (valeur === null || valeur === undefined || valeur === "") return null;
  const n = Number(valeur);
  return Number.isFinite(n) ? n : null;
}

/** "a ; b ; c" -> ["a", "b", "c"]. Tolère aussi "a;b" ou "a ;b". */
function listeSemicolon(valeur: ExcelJS.CellValue): string[] {
  const s = texte(valeur);
  if (!s) return [];
  return s
    .split(/\s*;\s*/)
    .map((v) => v.trim())
    .filter(Boolean);
}

/** Une ligne par élément (utilisé pour les points clés). */
function listeLignes(valeur: ExcelJS.CellValue): string[] {
  const s = texte(valeur);
  if (!s) return [];
  return s
    .split(/\r?\n/)
    .map((v) => v.trim())
    .filter(Boolean);
}

// --- Suivi des erreurs et des compteurs pour le résumé final ---

interface ErreurImport {
  feuille: string;
  ligne: number;
  message: string;
}

const erreurs: ErreurImport[] = [];
const compteurs = {
  oeuvres: 0,
  chapitres: 0,
  fiches: 0,
  motsLexique: 0,
  personnages: 0,
  sujets: 0,
  paragraphes: 0,
};

function signalerErreur(feuille: string, ligne: number, err: unknown) {
  const message = err instanceof Error ? err.message : String(err);
  erreurs.push({ feuille, ligne, message });
  console.error(`  ✗ [${feuille} L${ligne}] ${message}`);
}

// --- Lecture d'une feuille : construit l'index "nom de colonne -> numero" ---

function indexEntetes(feuille: ExcelJS.Worksheet): Map<string, number> {
  const index = new Map<string, number>();
  feuille.getRow(1).eachCell({ includeEmpty: false }, (cell, colNumber) => {
    const nom = texte(cell.value);
    if (nom) index.set(nom, colNumber);
  });
  return index;
}

function valeur(
  ligne: ExcelJS.Row,
  entetes: Map<string, number>,
  nomColonne: string,
): ExcelJS.CellValue {
  const col = entetes.get(nomColonne);
  return col === undefined ? null : ligne.getCell(col).value;
}

async function main() {
  const classeur = new ExcelJS.Workbook();
  await classeur.xlsx.readFile(CHEMIN_FICHIER);

  // Clés de correspondance construites au fil de l'import, pour
  // résoudre les références (oeuvre_slug -> id, oeuvre_slug+numero ->
  // id de chapitre) rencontrées dans les feuilles suivantes.
  const idOeuvreParSlug = new Map<string, string>();
  const idChapitreParCle = new Map<string, string>();

  // --- 1. Oeuvres ---
  const feuilleOeuvres = classeur.getWorksheet("Oeuvres");
  if (feuilleOeuvres) {
    const entetes = indexEntetes(feuilleOeuvres);
    for (let n = 2; n <= feuilleOeuvres.rowCount; n++) {
      const ligne = feuilleOeuvres.getRow(n);
      if (ligne.actualCellCount === 0) continue;

      const slug = texte(valeur(ligne, entetes, "slug"));
      if (!slug) continue; // ligne vide en fin de feuille

      try {
        const { data, error } = await supabase
          .from("oeuvres")
          .upsert(
            {
              slug,
              titre_fr: texte(valeur(ligne, entetes, "titre_fr")),
              titre_ar: texte(valeur(ligne, entetes, "titre_ar")),
              auteur: texte(valeur(ligne, entetes, "auteur")),
              filiere: texte(valeur(ligne, entetes, "filiere")),
              mode: texte(valeur(ligne, entetes, "mode")),
              essentiel_fr: texte(valeur(ligne, entetes, "essentiel_fr")),
              essentiel_ar: texte(valeur(ligne, entetes, "essentiel_ar")),
            },
            { onConflict: "slug" },
          )
          .select("id")
          .single();

        if (error) throw error;
        idOeuvreParSlug.set(slug, data.id);
        compteurs.oeuvres++;
      } catch (err) {
        signalerErreur("Oeuvres", n, err);
      }
    }
  } else {
    erreurs.push({ feuille: "Oeuvres", ligne: 0, message: "Feuille introuvable" });
  }

  // --- 2. Chapitres (alimente aussi `fiches`, voir plus bas) ---
  const feuilleChapitres = classeur.getWorksheet("Chapitres");
  if (feuilleChapitres) {
    const entetes = indexEntetes(feuilleChapitres);
    for (let n = 2; n <= feuilleChapitres.rowCount; n++) {
      const ligne = feuilleChapitres.getRow(n);
      if (ligne.actualCellCount === 0) continue;

      const oeuvreSlug = texte(valeur(ligne, entetes, "oeuvre_slug"));
      const numero = nombre(valeur(ligne, entetes, "numero"));
      if (!oeuvreSlug || numero === null) continue;

      const oeuvreId = idOeuvreParSlug.get(oeuvreSlug);
      if (!oeuvreId) {
        signalerErreur(
          "Chapitres",
          n,
          `oeuvre_slug "${oeuvreSlug}" introuvable (feuille Oeuvres)`,
        );
        continue;
      }

      let chapitreId: string | null = null;

      try {
        const { data, error } = await supabase
          .from("chapitres")
          .upsert(
            {
              oeuvre_id: oeuvreId,
              numero,
              titre_fr: texte(valeur(ligne, entetes, "titre_fr")),
              titre_ar: texte(valeur(ligne, entetes, "titre_ar")),
              resume_court: texte(valeur(ligne, entetes, "resume_court_fr")),
              lieux: listeSemicolon(valeur(ligne, entetes, "lieux")),
              citation_reference: texte(
                valeur(ligne, entetes, "citation_reference"),
              ),
              statut: texte(valeur(ligne, entetes, "statut")) ?? "brouillon",
            },
            { onConflict: "oeuvre_id,numero" },
          )
          .select("id")
          .single();

        if (error) throw error;
        // Le client Supabase n'a pas de type de schema genere (pas de
        // CLI liee, voir types/base-de-donnees.ts) : data.id est typé
        // `any`. On sait que .single() n'a pas leve d'erreur juste
        // au-dessus, donc une ligne (avec id) existe forcement ici.
        chapitreId = data.id as string;
        idChapitreParCle.set(`${oeuvreSlug}::${numero}`, chapitreId);
        compteurs.chapitres++;
      } catch (err) {
        signalerErreur("Chapitres", n, err);
        continue; // pas de chapitre_id -> impossible de créer la fiche
      }

      if (chapitreId === null) continue; // ne devrait pas arriver, garde de type

      // La même ligne alimente `fiches` (résumé long, thèmes, points clés).
      try {
        const { error } = await supabase.from("fiches").upsert(
          {
            chapitre_id: chapitreId,
            resume_fr: texte(valeur(ligne, entetes, "resume_fr")),
            resume_ar: texte(valeur(ligne, entetes, "resume_ar")),
            points_cles_fr: listeLignes(
              valeur(ligne, entetes, "points_cles_fr"),
            ),
            points_cles_ar: listeLignes(
              valeur(ligne, entetes, "points_cles_ar"),
            ),
            themes: {
              principal: texte(valeur(ligne, entetes, "theme_principal")),
              secondaires: listeSemicolon(
                valeur(ligne, entetes, "themes_secondaires"),
              ),
            },
          },
          { onConflict: "chapitre_id" },
        );

        if (error) throw error;
        compteurs.fiches++;
      } catch (err) {
        signalerErreur("Chapitres (fiche)", n, err);
      }
    }
  } else {
    erreurs.push({ feuille: "Chapitres", ligne: 0, message: "Feuille introuvable" });
  }

  // --- 3. Lexique ---
  const feuilleLexique = classeur.getWorksheet("Lexique");
  if (feuilleLexique) {
    const entetes = indexEntetes(feuilleLexique);
    for (let n = 2; n <= feuilleLexique.rowCount; n++) {
      const ligne = feuilleLexique.getRow(n);
      if (ligne.actualCellCount === 0) continue;

      const oeuvreSlug = texte(valeur(ligne, entetes, "oeuvre_slug"));
      const chapitreNumero = nombre(valeur(ligne, entetes, "chapitre_numero"));
      const mot = texte(valeur(ligne, entetes, "mot"));
      if (!oeuvreSlug || chapitreNumero === null || !mot) continue;

      const chapitreId = idChapitreParCle.get(`${oeuvreSlug}::${chapitreNumero}`);
      if (!chapitreId) {
        signalerErreur(
          "Lexique",
          n,
          `chapitre introuvable pour "${oeuvreSlug}" numero ${chapitreNumero}`,
        );
        continue;
      }

      try {
        const { error } = await supabase.from("lexique").upsert(
          {
            chapitre_id: chapitreId,
            mot,
            sens_ar: texte(valeur(ligne, entetes, "sens_ar")),
            nature: texte(valeur(ligne, entetes, "nature")),
            note: texte(valeur(ligne, entetes, "note_fr")),
          },
          { onConflict: "chapitre_id,mot" },
        );

        if (error) throw error;
        compteurs.motsLexique++;
      } catch (err) {
        signalerErreur("Lexique", n, err);
      }
    }
  } else {
    erreurs.push({ feuille: "Lexique", ligne: 0, message: "Feuille introuvable" });
  }

  // --- 4. Personnages ---
  const feuillePersonnages = classeur.getWorksheet("Personnages");
  if (feuillePersonnages) {
    const entetes = indexEntetes(feuillePersonnages);
    for (let n = 2; n <= feuillePersonnages.rowCount; n++) {
      const ligne = feuillePersonnages.getRow(n);
      if (ligne.actualCellCount === 0) continue;

      const oeuvreSlug = texte(valeur(ligne, entetes, "oeuvre_slug"));
      const nom = texte(valeur(ligne, entetes, "nom"));
      if (!oeuvreSlug || !nom) continue;

      const oeuvreId = idOeuvreParSlug.get(oeuvreSlug);
      if (!oeuvreId) {
        signalerErreur(
          "Personnages",
          n,
          `oeuvre_slug "${oeuvreSlug}" introuvable (feuille Oeuvres)`,
        );
        continue;
      }

      const chapitreApparition = nombre(
        valeur(ligne, entetes, "chapitre_apparition"),
      );
      const chapitreApparitionId =
        chapitreApparition === null
          ? null
          : (idChapitreParCle.get(`${oeuvreSlug}::${chapitreApparition}`) ??
            null);

      try {
        const { error } = await supabase.from("personnages").upsert(
          {
            oeuvre_id: oeuvreId,
            nom,
            nom_ar: texte(valeur(ligne, entetes, "nom_ar")),
            role: texte(valeur(ligne, entetes, "role")),
            description_fr: texte(valeur(ligne, entetes, "description_fr")),
            chapitre_apparition_id: chapitreApparitionId,
          },
          { onConflict: "oeuvre_id,nom" },
        );

        if (error) throw error;
        compteurs.personnages++;
      } catch (err) {
        signalerErreur("Personnages", n, err);
      }
    }
  } else {
    erreurs.push({ feuille: "Personnages", ligne: 0, message: "Feuille introuvable" });
  }

  // --- 5. Sujets ---
  const feuilleSujets = classeur.getWorksheet("Sujets");
  if (feuilleSujets) {
    const entetes = indexEntetes(feuilleSujets);
    for (let n = 2; n <= feuilleSujets.rowCount; n++) {
      const ligne = feuilleSujets.getRow(n);
      if (ligne.actualCellCount === 0) continue;

      const oeuvreSlug = texte(valeur(ligne, entetes, "oeuvre_slug"));
      const titre = texte(valeur(ligne, entetes, "titre"));
      if (!oeuvreSlug || !titre) continue;

      const oeuvreId = idOeuvreParSlug.get(oeuvreSlug);
      if (!oeuvreId) {
        signalerErreur(
          "Sujets",
          n,
          `oeuvre_slug "${oeuvreSlug}" introuvable (feuille Oeuvres)`,
        );
        continue;
      }

      const chapitreNumero = nombre(valeur(ligne, entetes, "chapitre_numero"));
      const chapitreId =
        chapitreNumero === null
          ? null
          : (idChapitreParCle.get(`${oeuvreSlug}::${chapitreNumero}`) ?? null);

      try {
        const { error } = await supabase.from("sujets").upsert(
          {
            oeuvre_id: oeuvreId,
            chapitre_id: chapitreId,
            titre,
            consigne: texte(valeur(ligne, entetes, "consigne")),
            type: texte(valeur(ligne, entetes, "type")),
          },
          { onConflict: "oeuvre_id,chapitre_id,titre" },
        );

        if (error) throw error;
        compteurs.sujets++;
      } catch (err) {
        signalerErreur("Sujets", n, err);
      }
    }
  } else {
    erreurs.push({ feuille: "Sujets", ligne: 0, message: "Feuille introuvable" });
  }

  // --- 6. Paragraphes (texte intégral) ---
  //
  // Contrairement aux feuilles précédentes, absente du fichier actuel :
  // son absence n'est PAS ajoutée à `erreurs`, voir le commentaire en
  // tête de fichier.
  const feuilleParagraphes = classeur.getWorksheet("Paragraphes");
  if (feuilleParagraphes) {
    const entetes = indexEntetes(feuilleParagraphes);
    for (let n = 2; n <= feuilleParagraphes.rowCount; n++) {
      const ligne = feuilleParagraphes.getRow(n);
      if (ligne.actualCellCount === 0) continue;

      const oeuvreSlug = texte(valeur(ligne, entetes, "oeuvre_slug"));
      const chapitreNumero = nombre(valeur(ligne, entetes, "chapitre_numero"));
      const ordre = nombre(valeur(ligne, entetes, "ordre"));
      const texteFr = texte(valeur(ligne, entetes, "texte_fr"));
      if (!oeuvreSlug || chapitreNumero === null || ordre === null || !texteFr) {
        continue;
      }

      const chapitreId = idChapitreParCle.get(`${oeuvreSlug}::${chapitreNumero}`);
      if (!chapitreId) {
        signalerErreur(
          "Paragraphes",
          n,
          `chapitre introuvable pour "${oeuvreSlug}" numero ${chapitreNumero}`,
        );
        continue;
      }

      try {
        const { error } = await supabase.from("paragraphes").upsert(
          {
            chapitre_id: chapitreId,
            ordre,
            texte_fr: texteFr,
            texte_ar: texte(valeur(ligne, entetes, "texte_ar")),
          },
          { onConflict: "chapitre_id,ordre" },
        );

        if (error) throw error;
        compteurs.paragraphes++;
      } catch (err) {
        signalerErreur("Paragraphes", n, err);
      }
    }
  }

  // --- Résumé final ---
  console.log("\n--- Résumé de l'import ---");
  console.log(`Oeuvres      : ${compteurs.oeuvres}`);
  console.log(`Chapitres    : ${compteurs.chapitres}`);
  console.log(`Fiches       : ${compteurs.fiches}`);
  console.log(`Mots lexique : ${compteurs.motsLexique}`);
  console.log(`Personnages  : ${compteurs.personnages}`);
  console.log(`Sujets       : ${compteurs.sujets}`);
  console.log(`Paragraphes  : ${compteurs.paragraphes}`);
  console.log(`Erreurs      : ${erreurs.length}`);

  if (erreurs.length > 0) {
    console.log("\nDétail des erreurs :");
    for (const e of erreurs) {
      console.log(`  - [${e.feuille} L${e.ligne}] ${e.message}`);
    }
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error("Erreur fatale :", err);
  process.exit(1);
});
