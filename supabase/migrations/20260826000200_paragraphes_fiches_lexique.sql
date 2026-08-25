-- Table `paragraphes` : texte d'un chapitre, découpé en paragraphes
-- ordonnés (bilingue fr/ar).
create table public.paragraphes (
  id uuid primary key default gen_random_uuid(),
  chapitre_id uuid not null references public.chapitres (id) on delete cascade,
  ordre integer not null,
  texte_fr text not null,
  texte_ar text,
  created_at timestamptz not null default now(),
  unique (chapitre_id, ordre)
);

-- L'index de la contrainte unique (chapitre_id, ordre) sert la clé
-- étrangère chapitre_id et le tri par ordre de lecture.

alter table public.paragraphes enable row level security;

create policy "lecture publique des paragraphes"
  on public.paragraphes
  for select
  using (true);

create policy "ecriture des paragraphes reservee aux admins"
  on public.paragraphes
  for all
  using (public.est_admin())
  with check (public.est_admin());


-- Table `fiches` : fiche de synthèse d'un chapitre.
--
-- La contrainte unique sur chapitre_id impose une seule fiche par
-- chapitre. Si plusieurs fiches par chapitre s'avèrent nécessaires plus
-- tard (ex. différents types de fiches), il faudra retirer cette
-- contrainte.
create table public.fiches (
  id uuid primary key default gen_random_uuid(),
  chapitre_id uuid not null unique references public.chapitres (id) on delete cascade,
  resume_fr text,
  resume_ar text,
  personnages jsonb not null default '[]'::jsonb,
  themes jsonb not null default '[]'::jsonb,
  points_cles jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

-- chapitre_id est déjà indexé par la contrainte unique ci-dessus.

alter table public.fiches enable row level security;

create policy "lecture publique des fiches"
  on public.fiches
  for select
  using (true);

create policy "ecriture des fiches reservee aux admins"
  on public.fiches
  for all
  using (public.est_admin())
  with check (public.est_admin());


-- Table `lexique` : mots de vocabulaire expliqués, par chapitre.
--
-- Contrairement à `fiches`, plusieurs mots par chapitre sont attendus :
-- chapitre_id n'est donc pas unique ici et a besoin de son propre index
-- (la clé étrangère seule ne crée pas d'index automatiquement).
create table public.lexique (
  id uuid primary key default gen_random_uuid(),
  chapitre_id uuid not null references public.chapitres (id) on delete cascade,
  mot text not null,
  sens_ar text,
  nature text,
  note text,
  created_at timestamptz not null default now()
);

create index idx_lexique_chapitre_id on public.lexique (chapitre_id);

alter table public.lexique enable row level security;

create policy "lecture publique du lexique"
  on public.lexique
  for select
  using (true);

create policy "ecriture du lexique reservee aux admins"
  on public.lexique
  for all
  using (public.est_admin())
  with check (public.est_admin());
