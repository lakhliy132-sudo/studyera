-- ⚠️ CORRECTIF CRITIQUE — À APPLIQUER EN PRIORITÉ, AVANT TOUT AUTRE
-- ⚠️ MIGRATION EN ATTENTE.
--
-- Bogue découvert en session en préparant une nouvelle fonctionnalité
-- (communication CEO/élèves) : la policy "les admins voient tous les
-- profils" (migration 20260829000000_lecture_admin_profils.sql)
-- appelle public.est_admin(), qui interroge lui-même `public.profils`.
-- Comme est_admin() n'était PAS `security definer`, cette requête
-- interne est à son tour soumise à la même policy RLS, qui rappelle
-- est_admin(), qui réinterroge `profils`, etc. : récursion infinie.
--
-- Conséquence réelle, vérifiée en base : TOUT SELECT sur `profils`
-- échoue avec l'erreur Postgres 54001 "stack depth limit exceeded" —
-- y compris la vérification de rôle faite par middleware.ts pour
-- protéger /administration, qui interprète silencieusement cet échec
-- comme "pas admin" et redirige. Résultat concret : plus personne ne
-- peut accéder à /administration depuis que cette policy existe.
--
-- Fix standard Supabase/Postgres pour ce cas précis : rendre la
-- fonction `security definer`, pour qu'elle s'exécute avec les droits
-- de son propriétaire (qui contourne RLS) plutôt que ceux de
-- l'utilisateur appelant — sa propre requête interne n'est alors plus
-- soumise à la policy qui l'appelle, donc plus de boucle.
-- `set search_path = public` : bonne pratique de sécurité recommandée
-- par Supabase pour toute fonction security definer (empêche un
-- search_path détourné de faire résoudre un nom vers une autre
-- fonction/table que celle voulue).
create or replace function public.est_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profils
    where id = auth.uid()
      and role = 'admin'
  );
$$;
