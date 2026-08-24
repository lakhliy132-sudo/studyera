-- Table `profils`
--
-- Chaque ligne correspond à un utilisateur de `auth.users` (table interne
-- gérée par Supabase Auth, non accessible directement depuis le code de
-- l'application via la clé anon). `profils` est la table publique qui
-- rend disponibles, de façon contrôlée par RLS, les informations utiles
-- à l'application : email, nom, et surtout le rôle (élève / admin).
create table public.profils (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  nom_complet text,
  role text not null default 'eleve' check (role in ('eleve', 'admin')),
  date_creation timestamptz not null default now()
);

-- Remplit automatiquement `profils` à chaque nouvelle inscription.
--
-- Sans ce déclencheur, il faudrait créer la ligne de profil à la main
-- pour chaque nouvel utilisateur, ce qui serait vite oublié en pratique.
-- `security definer` permet à cette fonction de contourner la RLS
-- (voir plus bas) le temps de faire l'insertion initiale.
create function public.gerer_nouvel_utilisateur()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profils (id, email, nom_complet)
  values (
    new.id,
    new.email,
    coalesce(
      new.raw_user_meta_data ->> 'full_name',
      new.raw_user_meta_data ->> 'name'
    )
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.gerer_nouvel_utilisateur();

-- Row Level Security (RLS)
--
-- Sans RLS activée, n'importe quel utilisateur connecté pourrait lire
-- (voire modifier) les profils de tout le monde via l'API Supabase.
alter table public.profils enable row level security;

-- Un utilisateur ne peut lire que sa propre ligne.
create policy "les utilisateurs voient leur propre profil"
  on public.profils
  for select
  using (auth.uid() = id);

-- Volontairement, aucune policy INSERT/UPDATE/DELETE n'est ajoutée ici :
-- seul le déclencheur ci-dessus (en security definer) peut écrire dans
-- cette table pour l'instant. En particulier, un utilisateur ne peut
-- donc pas modifier son propre rôle. La possibilité de changer un rôle
-- (par un admin) est laissée pour une session ultérieure, quand une
-- vraie page d'administration existera.
