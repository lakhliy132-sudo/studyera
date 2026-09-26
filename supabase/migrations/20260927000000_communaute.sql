-- Fil de discussion entre élèves ("fais moi une case de commuanité",
-- option "vrai fil de discussion" choisie par l'utilisateur).
--
-- Un seul fil commun à toute la filière, pas de sujets ni de réponses
-- imbriquées : on commence par le plus simple, quitte à ajouter des
-- réponses plus tard si l'usage le demande.

create table if not exists public.communaute_messages (
  id uuid primary key default gen_random_uuid(),
  auteur_id uuid not null references auth.users (id) on delete cascade,
  contenu text not null check (char_length(btrim(contenu)) between 1 and 1000),
  created_at timestamptz not null default now()
);

create index if not exists communaute_messages_created_at_idx
  on public.communaute_messages (created_at desc);

alter table public.communaute_messages enable row level security;

-- Tout utilisateur connecté lit le fil.
drop policy if exists "communaute_lecture" on public.communaute_messages;
create policy "communaute_lecture"
  on public.communaute_messages for select
  to authenticated
  using (true);

-- On ne publie que sous sa propre identité.
drop policy if exists "communaute_publication" on public.communaute_messages;
create policy "communaute_publication"
  on public.communaute_messages for insert
  to authenticated
  with check (auteur_id = auth.uid());

-- On ne supprime que ses propres messages.
drop policy if exists "communaute_suppression" on public.communaute_messages;
create policy "communaute_suppression"
  on public.communaute_messages for delete
  to authenticated
  using (auteur_id = auth.uid());
