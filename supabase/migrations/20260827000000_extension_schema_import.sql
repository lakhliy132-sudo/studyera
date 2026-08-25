-- Ajustements du schéma suite à la comparaison avec le premier fichier
-- de contenu réel (data/contenu-plateforme-bac.xlsx). Le schéma initial
-- (migrations du 2026-08-26) avait anticipé une structure un peu plus
-- simple que ce que contient réellement le contenu ; ces tables étant
-- encore vides à ce stade, on les modifie directement plutôt que de
-- garder des colonnes jamais utilisées.

-- `oeuvres` : ajout du résumé "essentiel" bilingue (contenu réel, pas
-- juste une note de travail). `nb_chapitres`, présent dans le fichier,
-- n'est volontairement PAS ajouté ici : c'est une valeur dérivable
-- (compter les lignes de `chapitres`), la stocker en dur la rendrait
-- vite désynchronisée du contenu réel.
alter table public.oeuvres
  add column essentiel_fr text,
  add column essentiel_ar text;

-- `chapitres` : trois colonnes issues du fichier n'avaient pas de
-- colonne correspondante.
-- - `lieux` : lieux évoqués dans le chapitre.
-- - `citation_reference` : repère ou courte citation (moins de 15 mots)
--   pour référencer un passage sans reproduire le texte intégral.
-- - `statut` : état éditorial interne (ex. "à relire"). Volontairement
--   sans contrainte `check` : le vocabulaire exact n'est pas encore
--   figé. Volontairement SANS impact sur la policy de lecture publique
--   existante : un chapitre "à relire" reste visible publiquement,
--   `statut` n'est qu'un pense-bête pour l'équipe éditoriale.
alter table public.chapitres
  add column lieux jsonb not null default '[]'::jsonb,
  add column citation_reference text,
  add column statut text not null default 'brouillon';

-- `personnages_introduits`, également présent dans la feuille
-- Chapitres du fichier, n'a PAS de colonne correspondante ici : c'est
-- volontaire, cette information est désormais portée par la table
-- `personnages` (voir migration suivante), qui a sa propre colonne
-- `chapitre_apparition_id`.

-- `fiches` : la feuille Chapitres du fichier distingue thème
-- principal/secondaires (français uniquement, pas de version arabe) et
-- fournit des points clés bilingues (fr ET ar) — le schéma initial
-- n'avait qu'un seul champ générique pour chacun.
alter table public.fiches
  drop column personnages,
  drop column themes,
  drop column points_cles;

-- Remplace l'ancien tableau plat par un objet qui garde la distinction
-- thème principal / thèmes secondaires : {"principal": "...",
-- "secondaires": ["...", "..."]}.
alter table public.fiches
  add column themes jsonb not null default '{"principal": null, "secondaires": []}'::jsonb;

-- Points clés bilingues : deux colonnes, cohérent avec resume_fr /
-- resume_ar déjà présents sur cette même table.
alter table public.fiches
  add column points_cles_fr jsonb not null default '[]'::jsonb,
  add column points_cles_ar jsonb not null default '[]'::jsonb;

-- `sujets` : le fichier rattache chaque sujet à un chapitre précis
-- (oeuvre_slug + chapitre_numero), alors que la table ne savait relier
-- un sujet qu'à une œuvre entière. Nullable : un sujet de culture
-- générale, par exemple, peut rester sans chapitre précis.
alter table public.sujets
  add column chapitre_id uuid references public.chapitres (id) on delete set null;

create index idx_sujets_chapitre_id on public.sujets (chapitre_id);

-- Contrainte d'unicité utilisée par le script d'import pour un upsert
-- idempotent (ON CONFLICT) : un même sujet (même titre, même œuvre,
-- même chapitre) est mis à jour plutôt que dupliqué en cas de réimport.
-- Limite connue : avec chapitre_id à NULL, Postgres traite chaque NULL
-- comme distinct des autres, donc deux sujets sans chapitre mais de
-- même titre ne seraient pas détectés comme doublons. Non bloquant
-- pour le contenu actuel (tous les sujets ont un chapitre).
alter table public.sujets
  add constraint sujets_oeuvre_chapitre_titre_key
  unique (oeuvre_id, chapitre_id, titre);

-- `lexique` : le schéma initial n'avait pas de contrainte d'unicité,
-- nécessaire pour permettre un import idempotent (un même mot, pour un
-- même chapitre, doit être mis à jour et non dupliqué à chaque
-- réimport du fichier).
alter table public.lexique
  add constraint lexique_chapitre_mot_key
  unique (chapitre_id, mot);
