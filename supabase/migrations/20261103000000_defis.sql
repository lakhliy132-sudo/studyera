-- Défi de la semaine — nouveau concept de la page Communauté, demandé
-- explicitement par l'utilisateur : « Chaque semaine, l'équipe publie
-- un défi (une question d'examen régional, par exemple). Les élèves
-- envoient leur réponse, votent pour les meilleures, puis le corrigé
-- est publié. »
--
-- Trois tables :
-- - `defis` : publié et corrigé par un admin (public.est_admin()) ;
-- - `defis_reponses` : une seule réponse par élève et par défi,
--   acceptée jusqu'à la date limite ;
-- - `defis_votes` : un vote par élève et par réponse, jamais pour sa
--   propre réponse.
--
-- Lancée à la main dans l'éditeur SQL de Supabase (CLAUDE.md §6) ;
-- rejouable. Tant qu'elle ne l'est pas, la page Communauté n'affiche
-- simplement pas de défi (lib/supabase/defis.ts tolère les tables
-- absentes).

create table if not exists public.defis (
  id uuid primary key default gen_random_uuid(),
  titre text not null check (char_length(btrim(titre)) between 1 and 160),
  enonce text not null check (char_length(btrim(enonce)) between 1 and 4000),
  -- Slug de matière (`francais`, `arabe`…) ou null.
  matiere text,
  date_limite timestamptz not null,
  -- null tant que l'équipe n'a pas publié le corrigé.
  corrige text,
  corrige_publie_le timestamptz,
  auteur_id uuid not null references auth.users (id),
  created_at timestamptz not null default now()
);

create index if not exists defis_created_at_idx on public.defis (created_at desc);

create table if not exists public.defis_reponses (
  id uuid primary key default gen_random_uuid(),
  defi_id uuid not null references public.defis (id) on delete cascade,
  auteur_id uuid not null references auth.users (id) on delete cascade,
  contenu text not null check (char_length(btrim(contenu)) between 1 and 2000),
  created_at timestamptz not null default now(),
  unique (defi_id, auteur_id)
);

create index if not exists defis_reponses_defi_idx on public.defis_reponses (defi_id);

create table if not exists public.defis_votes (
  reponse_id uuid not null references public.defis_reponses (id) on delete cascade,
  auteur_id uuid not null references auth.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (reponse_id, auteur_id)
);

alter table public.defis enable row level security;
alter table public.defis_reponses enable row level security;
alter table public.defis_votes enable row level security;

-- --- defis : lecture par tout élève connecté, écriture par un admin.
drop policy if exists "defis_lecture" on public.defis;
create policy "defis_lecture"
  on public.defis for select
  to authenticated
  using (true);

drop policy if exists "defis_ecriture_admin" on public.defis;
create policy "defis_ecriture_admin"
  on public.defis for all
  to authenticated
  using (public.est_admin())
  with check (public.est_admin() and auteur_id = auth.uid());

-- --- defis_reponses
drop policy if exists "defis_reponses_lecture" on public.defis_reponses;
create policy "defis_reponses_lecture"
  on public.defis_reponses for select
  to authenticated
  using (true);

-- Sous son propre nom, et seulement avant la date limite du défi.
drop policy if exists "defis_reponses_envoi" on public.defis_reponses;
create policy "defis_reponses_envoi"
  on public.defis_reponses for insert
  to authenticated
  with check (
    auteur_id = auth.uid()
    and exists (
      select 1 from public.defis d
      where d.id = defi_id and now() <= d.date_limite
    )
  );

-- Retirer sa réponse (pour la réécrire) tant que le défi est ouvert ;
-- un admin peut retirer n'importe quelle réponse (modération).
drop policy if exists "defis_reponses_suppression" on public.defis_reponses;
create policy "defis_reponses_suppression"
  on public.defis_reponses for delete
  to authenticated
  using (
    public.est_admin()
    or (
      auteur_id = auth.uid()
      and exists (
        select 1 from public.defis d
        where d.id = defi_id and now() <= d.date_limite
      )
    )
  );

-- --- defis_votes
drop policy if exists "defis_votes_lecture" on public.defis_votes;
create policy "defis_votes_lecture"
  on public.defis_votes for select
  to authenticated
  using (true);

-- Sous son propre nom, jamais pour sa propre réponse.
drop policy if exists "defis_votes_envoi" on public.defis_votes;
create policy "defis_votes_envoi"
  on public.defis_votes for insert
  to authenticated
  with check (
    auteur_id = auth.uid()
    and not exists (
      select 1 from public.defis_reponses r
      where r.id = reponse_id and r.auteur_id = auth.uid()
    )
  );

drop policy if exists "defis_votes_retrait" on public.defis_votes;
create policy "defis_votes_retrait"
  on public.defis_votes for delete
  to authenticated
  using (auteur_id = auth.uid());
