-- Les sujets d'examen régional des années précédentes, avec leur
-- corrigé quand il existe.
--
-- Une table plutôt que des fichiers : les sujets se filtrent par année,
-- par session et par œuvre dans l'interface (/examens-regionaux/
-- [matiere]), et un corrigé peut être ajouté après coup à un sujet déjà
-- en ligne.
--
-- `matiere` reprend les slugs déjà utilisés par `cours.categorie`
-- (francais, arabe, histoire-geo, education-islamique) : les deux
-- doivent rester alignés, c'est ce slug qui sert de segment d'URL.
--
-- `oeuvre` est un libellé libre ("Antigone", "La Boîte à Merveilles")
-- et non une clé étrangère vers `oeuvres` : un sujet d'examen peut
-- porter sur une œuvre qui n'est pas au programme de l'année en cours,
-- et il n'y a pas d'œuvre du tout en arabe ou en histoire-géographie.

create table public.annales (
  id uuid primary key default gen_random_uuid(),
  matiere text not null,
  annee integer not null,
  session text not null default 'normale'
    check (session in ('normale', 'rattrapage')),
  oeuvre text,
  -- Durée officielle de l'épreuve, en minutes. Sert au chronomètre du
  -- mode entraînement et au décompte "2 h par épreuve".
  duree_minutes integer,
  enonce_mdx text not null,
  -- `null` tant que le corrigé n'a pas été saisi : l'interface affiche
  -- alors la pastille "Corrigé" éteinte, plutôt que de promettre un
  -- corrigé inexistant.
  corrige_mdx text,
  created_at timestamptz not null default now(),
  unique (matiere, annee, session)
);

create index idx_annales_matiere on public.annales (matiere);
-- Sert le tri par défaut de la liste : les sujets les plus récents
-- d'abord.
create index idx_annales_matiere_annee on public.annales (matiere, annee desc);

alter table public.annales enable row level security;

create policy "lecture publique des annales"
  on public.annales
  for select
  using (true);

create policy "ecriture des annales reservee aux admins"
  on public.annales
  for all
  using (public.est_admin())
  with check (public.est_admin());
