-- Table `oeuvres` : les œuvres littéraires au programme.
--
-- `mode` distingue les œuvres étudiées intégralement de celles
-- abordées seulement via un accompagnement (résumés, fiches...).
create table public.oeuvres (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  titre_fr text not null,
  titre_ar text,
  auteur text,
  filiere text,
  mode text not null check (mode in ('texte_integral', 'accompagnement')),
  created_at timestamptz not null default now()
);

-- Index de tri/filtrage par filière (utilisé dès qu'une page liste les
-- œuvres d'une filière donnée).
create index idx_oeuvres_filiere on public.oeuvres (filiere);

alter table public.oeuvres enable row level security;

-- Contenu pédagogique : lecture ouverte à tout le monde, y compris aux
-- visiteurs non connectés (pas seulement aux élèves/admins). L'écriture
-- est réservée aux admins via la fonction est_admin() (migration
-- précédente).
create policy "lecture publique des oeuvres"
  on public.oeuvres
  for select
  using (true);

-- `for all` couvre insert/update/delete (et select, redondant sans
-- conséquence avec la policy publique ci-dessus) : un admin peut tout
-- faire sur cette table, personne d'autre ne peut écrire.
create policy "ecriture des oeuvres reservee aux admins"
  on public.oeuvres
  for all
  using (public.est_admin())
  with check (public.est_admin());


-- Table `chapitres` : chapitres d'une œuvre.
create table public.chapitres (
  id uuid primary key default gen_random_uuid(),
  oeuvre_id uuid not null references public.oeuvres (id) on delete cascade,
  numero integer not null,
  titre_fr text not null,
  titre_ar text,
  resume_court text,
  created_at timestamptz not null default now(),
  unique (oeuvre_id, numero)
);

-- Pas d'index séparé nécessaire : la contrainte unique (oeuvre_id,
-- numero) crée déjà un index qui sert à la fois la clé étrangère
-- oeuvre_id et le tri par numéro de chapitre.

alter table public.chapitres enable row level security;

create policy "lecture publique des chapitres"
  on public.chapitres
  for select
  using (true);

create policy "ecriture des chapitres reservee aux admins"
  on public.chapitres
  for all
  using (public.est_admin())
  with check (public.est_admin());
