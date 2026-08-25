-- Table `progression` : suivi de lecture par élève et par chapitre.
-- Clé primaire composite : un élève a au plus une ligne par chapitre.
create table public.progression (
  user_id uuid not null references auth.users (id) on delete cascade,
  chapitre_id uuid not null references public.chapitres (id) on delete cascade,
  lu boolean not null default false,
  termine_le timestamptz,
  primary key (user_id, chapitre_id)
);

-- La clé primaire composite indexe déjà (user_id, chapitre_id) dans cet
-- ordre : ça sert directement "ma progression sur ce chapitre" et
-- "toute ma progression" (préfixe user_id). Index séparé pour le sens
-- inverse ("qui a terminé ce chapitre ?", utile côté admin plus tard).
create index idx_progression_chapitre_id on public.progression (chapitre_id);

alter table public.progression enable row level security;

-- Aucun enjeu d'intégrité ici (contrairement aux notes ou au quota,
-- voir copies.sql et plus bas) : l'élève gère librement sa propre
-- progression de lecture, en lecture comme en écriture.
create policy "un eleve gere sa propre progression"
  on public.progression
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);


-- Table `activite` : journal d'activité de l'élève (consultation d'une
-- ressource, etc.). Conçue comme un journal "append-only" : on ajoute
-- des entrées, on ne les modifie pas après coup (pas de policy UPDATE).
create table public.activite (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  type text not null,
  ressource_id uuid,
  ressource_titre text,
  created_at timestamptz not null default now()
);

create index idx_activite_user_id_created_at on public.activite (user_id, created_at desc);

alter table public.activite enable row level security;

create policy "un eleve voit sa propre activite"
  on public.activite
  for select
  using (auth.uid() = user_id);

create policy "un eleve enregistre sa propre activite"
  on public.activite
  for insert
  with check (auth.uid() = user_id);


-- Table `quota_jour` : compteur quotidien de corrections consommées.
-- Clé primaire composite : une ligne par élève et par jour.
--
-- Volontairement, aucune policy INSERT/UPDATE côté élève : si l'élève
-- pouvait modifier lui-même ce compteur via l'API, il pourrait remettre
-- son propre quota à zéro, ce qui rendrait la limite inutile.
-- L'incrémentation devra se faire depuis un contexte serveur de
-- confiance (clé service_role), hors périmètre de cette session.
create table public.quota_jour (
  user_id uuid not null references auth.users (id) on delete cascade,
  date date not null,
  corrections_utilisees integer not null default 0,
  primary key (user_id, date)
);

alter table public.quota_jour enable row level security;

create policy "un eleve voit son propre quota"
  on public.quota_jour
  for select
  using (auth.uid() = user_id);
