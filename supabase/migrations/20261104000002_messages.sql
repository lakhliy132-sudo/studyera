-- Les messages entre un élève et l'administration (« dans la partie
-- communauté, ajoute une petite partie où l'élève contacte
-- l'administration s'il a un problème »).
--
-- La table était prévue par 20260901020000_communication_annonces_messages.sql,
-- jamais lancée sur la base. Ce fichier ne crée que `messages`, avec le
-- même schéma et les mêmes règles, et peut être relancé sans risque :
-- - un fil par élève (`eleve_id`) ; l'élève lit et écrit dans le sien ;
-- - les admins (public.est_admin(), déjà en base) lisent tous les fils et
--   répondent, toujours en leur propre nom (`auteur_id`).
-- Les écrans existent déjà : /messages pour l'élève, /administration
-- (liste des fils) et /administration/messages/[eleveId] pour répondre.

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  eleve_id uuid not null references auth.users (id) on delete cascade,
  auteur_id uuid not null references auth.users (id) on delete cascade,
  contenu text not null,
  lu boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists idx_messages_eleve_id on public.messages (eleve_id, created_at);

alter table public.messages enable row level security;

drop policy if exists "lecture des messages de son propre fil ou par un admin" on public.messages;
create policy "lecture des messages de son propre fil ou par un admin"
  on public.messages
  for select
  using (eleve_id = auth.uid() or public.est_admin());

drop policy if exists "ecrire un message dans son fil" on public.messages;
create policy "ecrire un message dans son fil"
  on public.messages
  for insert
  with check (
    auteur_id = auth.uid()
    and (eleve_id = auth.uid() or public.est_admin())
  );

drop policy if exists "marquer un message comme lu" on public.messages;
create policy "marquer un message comme lu"
  on public.messages
  for update
  using (eleve_id = auth.uid() or public.est_admin())
  with check (eleve_id = auth.uid() or public.est_admin());
