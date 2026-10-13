-- Accès payant des élèves (« quand il s'inscrit ou crée un compte, c'est moi
-- qui vais lui donner l'accès quand il payera sur WhatsApp »).
--
-- Une ligne par élève activé : la formule payée et la date de fin de son
-- accès. Pas de ligne = compte créé mais pas encore activé. L'élève peut
-- lire SA ligne (pour savoir où il en est), jamais l'écrire : aucune policy
-- d'écriture n'existe, seule la clé de service (page /administration/acces,
-- réservée aux comptes admin) crée, prolonge ou retire un accès.
--
-- Tant que cette migration n'est pas lancée, le site reste entièrement
-- ouvert comme avant (lib/acces.ts traite la table absente comme « pas de
-- verrou »). Une fois lancée, seuls les comptes activés (et les admins)
-- voient tout ; les autres ont l'aperçu gratuit.
--
-- Rejouable.

create table if not exists public.acces_eleves (
  user_id uuid primary key references auth.users (id) on delete cascade,
  formule text not null check (formule in ('trimestre', 'annee', 'autre')),
  debut date not null default current_date,
  fin date not null,
  note text,
  cree_le timestamptz not null default now(),
  modifie_le timestamptz not null default now()
);

alter table public.acces_eleves enable row level security;

drop policy if exists "un eleve lit son propre acces" on public.acces_eleves;
create policy "un eleve lit son propre acces"
  on public.acces_eleves
  for select
  using (auth.uid() = user_id);
