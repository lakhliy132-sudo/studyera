-- Les annonces (« ajoute une autre case qui s'appelle Annonce »).
--
-- La table était prévue par 20260901020000_communication_annonces_messages.sql,
-- jamais lancée sur la base (elle crée aussi `messages`, et n'est pas
-- rejouable). Ce fichier ne crée que `annonces`, avec le même schéma et
-- les mêmes règles, et peut être relancé sans risque :
-- - tout compte connecté lit les annonces (/annonces, /communaute) ;
-- - seuls les admins (public.est_admin(), déjà en base) publient et
--   suppriment.

create table if not exists public.annonces (
  id uuid primary key default gen_random_uuid(),
  titre text not null,
  contenu text not null,
  auteur_id uuid not null references auth.users (id),
  created_at timestamptz not null default now()
);

create index if not exists idx_annonces_created_at on public.annonces (created_at desc);

alter table public.annonces enable row level security;

drop policy if exists "lecture des annonces reservee aux connectes" on public.annonces;
create policy "lecture des annonces reservee aux connectes"
  on public.annonces
  for select
  to authenticated
  using (true);

drop policy if exists "ecriture des annonces reservee aux admins" on public.annonces;
create policy "ecriture des annonces reservee aux admins"
  on public.annonces
  for all
  using (public.est_admin())
  with check (public.est_admin());
