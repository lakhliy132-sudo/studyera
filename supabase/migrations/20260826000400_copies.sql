-- Table `copies` : soumissions d'élèves (photo de copie + correction).
--
-- Les champs de correction (note_forme, note_fond, note_total, erreurs,
-- points_forts, axes, commentaire, cout_tokens) sont destinés à être
-- remplis par un traitement automatique côté serveur (ex. appel à un
-- modèle de langage pour corriger la copie), pas directement par
-- l'élève. C'est pourquoi, volontairement, aucune policy UPDATE côté
-- élève n'est créée plus bas : voir le commentaire à cet endroit.
--
-- sujet_id référence `sujets` sans `on delete cascade` (donc en
-- `no action`, le comportement par défaut) : ça empêche de supprimer un
-- sujet tant que des copies d'élèves y font encore référence, pour ne
-- pas perdre l'historique de correction d'un élève.
create table public.copies (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  sujet_id uuid not null references public.sujets (id),
  image_url text,
  transcription text,
  note_forme numeric,
  note_fond numeric,
  note_total numeric,
  erreurs jsonb not null default '[]'::jsonb,
  points_forts jsonb not null default '[]'::jsonb,
  axes jsonb not null default '[]'::jsonb,
  commentaire text,
  cout_tokens integer,
  created_at timestamptz not null default now()
);

create index idx_copies_user_id on public.copies (user_id);
create index idx_copies_sujet_id on public.copies (sujet_id);
-- Sert le cas d'usage le plus courant : "mes dernières copies d'abord".
create index idx_copies_user_id_created_at on public.copies (user_id, created_at desc);

alter table public.copies enable row level security;

create policy "un eleve voit ses propres copies"
  on public.copies
  for select
  using (auth.uid() = user_id);

-- L'élève crée sa propre soumission (photo + transcription) ; il ne
-- peut pas déposer une copie au nom de quelqu'un d'autre.
create policy "un eleve cree ses propres copies"
  on public.copies
  for insert
  with check (auth.uid() = user_id);

-- Pas de policy UPDATE pour l'élève (voir le commentaire en tête de
-- fichier) : sans elle, un élève ne peut pas modifier sa note ou son
-- commentaire de correction via l'API. Le remplissage de ces champs se
-- fera depuis un contexte serveur de confiance (clé service_role, hors
-- périmètre de cette session), qui contourne entièrement RLS et n'a
-- donc besoin d'aucune policy ici pour fonctionner.

create policy "les admins voient toutes les copies"
  on public.copies
  for select
  using (public.est_admin());

create policy "les admins modifient toutes les copies"
  on public.copies
  for update
  using (public.est_admin())
  with check (public.est_admin());
