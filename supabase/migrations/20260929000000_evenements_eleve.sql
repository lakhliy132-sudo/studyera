-- Événements personnels d'un élève sur son calendrier — demandé par
-- l'utilisateur ("dans la partie de calendrier ou l eleve peut ajouter
-- les enevement principaux de lui") : contrôles, devoirs, révisions,
-- rendez-vous, en plus des dates d'examen régional déjà affichées
-- (celles-là viennent de lib/calendrier.ts, pas de la base).
--
-- Chaque élève ne voit et ne modifie que ses propres événements : ce
-- n'est pas un agenda partagé.

create table if not exists public.evenements_eleve (
  id uuid primary key default gen_random_uuid(),
  eleve_id uuid not null references auth.users (id) on delete cascade,
  titre text not null check (char_length(btrim(titre)) between 1 and 120),
  -- Date seule, sans heure : un événement scolaire se repère au jour.
  date date not null,
  categorie text not null default 'autre'
    check (categorie in ('controle', 'devoir', 'revision', 'rappel', 'autre')),
  note text check (note is null or char_length(note) <= 500),
  created_at timestamptz not null default now()
);

create index if not exists evenements_eleve_date_idx on public.evenements_eleve (eleve_id, date);

alter table public.evenements_eleve enable row level security;

drop policy if exists "evenements_lecture" on public.evenements_eleve;
create policy "evenements_lecture" on public.evenements_eleve
  for select to authenticated using (eleve_id = auth.uid());

drop policy if exists "evenements_ajout" on public.evenements_eleve;
create policy "evenements_ajout" on public.evenements_eleve
  for insert to authenticated with check (eleve_id = auth.uid());

drop policy if exists "evenements_modification" on public.evenements_eleve;
create policy "evenements_modification" on public.evenements_eleve
  for update to authenticated using (eleve_id = auth.uid()) with check (eleve_id = auth.uid());

drop policy if exists "evenements_suppression" on public.evenements_eleve;
create policy "evenements_suppression" on public.evenements_eleve
  for delete to authenticated using (eleve_id = auth.uid());

notify pgrst, 'reload schema';
