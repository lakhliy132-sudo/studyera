-- Communication CEO / élèves — demandé explicitement par
-- l'utilisateur ("je veux ajouter une case de la comminucation par
-- exemple moi ceo of the site talk avec les eleves qui sont dans la
-- plateforme"), précisé ensuite : à la fois des annonces publiques et
-- une messagerie privée un-à-un ("les deux").
--
-- ⚠️ Dépend du correctif de la migration précédente
-- (20260901010000_fix_recursion_est_admin.sql) : les policies
-- ci-dessous utilisent public.est_admin(), qui doit être
-- `security definer` pour ne pas retomber dans le même piège de
-- récursion RLS.

-- --- Annonces : publiées par un admin, visibles par tout élève
-- connecté. Pas de destinataire précis (diffusion, pas messagerie).
create table public.annonces (
  id uuid primary key default gen_random_uuid(),
  titre text not null,
  contenu text not null,
  auteur_id uuid not null references auth.users (id),
  created_at timestamptz not null default now()
);

create index idx_annonces_created_at on public.annonces (created_at desc);

alter table public.annonces enable row level security;

create policy "lecture des annonces reservee aux connectes"
  on public.annonces
  for select
  to authenticated
  using (true);

create policy "ecriture des annonces reservee aux admins"
  on public.annonces
  for all
  using (public.est_admin())
  with check (public.est_admin());

-- --- Messages : fil de discussion privé un-à-un entre un élève et
-- "l'administration" (pas un admin précis — n'importe quel compte
-- admin peut répondre dans le fil d'un élève donné). `eleve_id`
-- identifie le fil (toujours l'élève concerné, jamais un admin) ;
-- `auteur_id` identifie qui a écrit CE message précis (l'élève
-- lui-même, ou l'admin qui répond).
create table public.messages (
  id uuid primary key default gen_random_uuid(),
  eleve_id uuid not null references auth.users (id),
  auteur_id uuid not null references auth.users (id),
  contenu text not null,
  lu boolean not null default false,
  created_at timestamptz not null default now()
);

create index idx_messages_eleve_id on public.messages (eleve_id, created_at);

alter table public.messages enable row level security;

-- Un élève voit son propre fil ; un admin voit tous les fils (pour
-- pouvoir répondre à n'importe quel élève).
create policy "lecture des messages de son propre fil ou par un admin"
  on public.messages
  for select
  using (eleve_id = auth.uid() or public.est_admin());

-- Un élève ne peut écrire que dans son propre fil, en son propre nom.
-- Un admin peut écrire dans n'importe quel fil, mais toujours en son
-- propre nom (auteur_id = lui-même, jamais usurper l'élève ou un
-- autre admin).
create policy "ecrire un message dans son fil"
  on public.messages
  for insert
  with check (
    auteur_id = auth.uid()
    and (eleve_id = auth.uid() or public.est_admin())
  );

-- Marquer un message comme lu (colonne `lu` uniquement, pas de
-- contrainte au niveau colonne côté RLS — confiance faite au client,
-- comme le reste du site pour ce type de mise à jour simple, voir
-- BoutonMarquerLu.tsx pour un précédent).
create policy "marquer un message comme lu"
  on public.messages
  for update
  using (eleve_id = auth.uid() or public.est_admin())
  with check (eleve_id = auth.uid() or public.est_admin());
