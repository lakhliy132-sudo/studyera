-- Table `personnages` : liste des personnages d'une œuvre.
--
-- Absente du schéma initial, qui avait anticipé un simple tableau JSON
-- dans fiches.personnages. Le contenu réel (feuille "Personnages" du
-- fichier importé) est nettement plus structuré (nom, nom arabe, rôle,
-- description, chapitre de première apparition) et rattaché à l'œuvre
-- entière plutôt qu'à un chapitre précis : une vraie table relationnelle
-- convient mieux qu'un blob JSON.
create table public.personnages (
  id uuid primary key default gen_random_uuid(),
  oeuvre_id uuid not null references public.oeuvres (id) on delete cascade,
  nom text not null,
  nom_ar text,
  role text,
  description_fr text,
  -- Chapitre où le personnage apparaît pour la première fois. Nullable
  -- et `on delete set null` : si ce chapitre est supprimé, le
  -- personnage reste, simplement sans référence de première apparition.
  chapitre_apparition_id uuid references public.chapitres (id) on delete set null,
  created_at timestamptz not null default now()
);

create index idx_personnages_oeuvre_id on public.personnages (oeuvre_id);
create index idx_personnages_chapitre_apparition_id on public.personnages (chapitre_apparition_id);

-- Contrainte d'unicité utilisée par le script d'import pour un upsert
-- idempotent : un même personnage (même nom, même œuvre) est mis à
-- jour plutôt que dupliqué en cas de réimport.
alter table public.personnages
  add constraint personnages_oeuvre_nom_key
  unique (oeuvre_id, nom);

alter table public.personnages enable row level security;

-- Même règle que les autres tables de contenu : lecture ouverte à
-- tous, écriture réservée aux admins.
create policy "lecture publique des personnages"
  on public.personnages
  for select
  using (true);

create policy "ecriture des personnages reservee aux admins"
  on public.personnages
  for all
  using (public.est_admin())
  with check (public.est_admin());
