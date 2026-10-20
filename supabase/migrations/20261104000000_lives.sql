-- Les lives de la page /live (« un bouton Démarrer le live dans le site »).
--
-- Une ligne par live : la salle Daily créée pour lui (nom et adresse),
-- son titre, son début, et sa fin quand l'admin le termine. Le live en
-- cours est celui dont `fin` est vide.
--
-- Aucune policy : seule la clé de service (lib/live.ts, côté serveur,
-- après vérification que la personne est admin pour écrire, ou qu'elle
-- a un accès complet pour regarder) lit et écrit cette table. L'adresse
-- de la salle ne sert à rien sans jeton : la salle est privée.
--
-- Tant que cette migration n'est pas lancée, /live reste sur « Bientôt
-- disponible » pour les élèves et le dit à l'admin.
--
-- Rejouable.

create table if not exists public.lives (
  id uuid primary key default gen_random_uuid(),
  titre text not null check (char_length(titre) between 1 and 120),
  salle_nom text not null,
  salle_url text not null,
  debut timestamptz not null default now(),
  fin timestamptz,
  cree_par uuid references auth.users (id) on delete set null
);

alter table public.lives enable row level security;

create index if not exists lives_en_cours on public.lives (debut desc) where fin is null;
