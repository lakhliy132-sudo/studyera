-- Table `cours` : fiches de cours autonomes (pas rattachées à une
-- œuvre), classées par catégorie et par filière.
create table public.cours (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  titre text not null,
  categorie text,
  contenu_mdx text,
  filiere text,
  ordre integer not null default 0,
  created_at timestamptz not null default now()
);

create index idx_cours_filiere on public.cours (filiere);
-- Sert le cas d'usage "liste des cours d'une catégorie, dans l'ordre".
create index idx_cours_categorie_ordre on public.cours (categorie, ordre);

alter table public.cours enable row level security;

create policy "lecture publique des cours"
  on public.cours
  for select
  using (true);

create policy "ecriture des cours reservee aux admins"
  on public.cours
  for all
  using (public.est_admin())
  with check (public.est_admin());


-- Table `sujets` : sujets d'exercice (dissertation, commentaire, etc.).
--
-- oeuvre_id est nullable : un sujet n'est pas toujours rattaché à une
-- œuvre précise (ex. sujet de culture générale). `on delete set null`
-- plutôt que `cascade` : si une œuvre est supprimée, on garde le sujet
-- (il devient simplement "sans œuvre") plutôt que de le supprimer aussi.
create table public.sujets (
  id uuid primary key default gen_random_uuid(),
  oeuvre_id uuid references public.oeuvres (id) on delete set null,
  titre text not null,
  consigne text,
  type text,
  created_at timestamptz not null default now()
);

create index idx_sujets_oeuvre_id on public.sujets (oeuvre_id);

alter table public.sujets enable row level security;

create policy "lecture publique des sujets"
  on public.sujets
  for select
  using (true);

create policy "ecriture des sujets reservee aux admins"
  on public.sujets
  for all
  using (public.est_admin())
  with check (public.est_admin());
