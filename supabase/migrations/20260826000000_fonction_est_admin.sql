-- Fonction utilitaire : l'utilisateur actuellement connecté est-il
-- administrateur ?
--
-- Centralise la vérification de rôle pour ne pas répéter la même
-- sous-requête dans toutes les policies d'écriture des tables de
-- contenu (migrations suivantes). S'appuie sur la policy "les
-- utilisateurs voient leur propre profil" (migration
-- 20260825120000_creation_profils.sql) : un utilisateur peut toujours
-- lire sa propre ligne dans `profils`, donc cette fonction n'a pas
-- besoin d'être `security definer`.
--
-- `stable` indique à Postgres que le résultat ne change pas au cours
-- d'une même requête : permet un plan d'exécution plus efficace quand
-- la fonction est appelée depuis une policy RLS.
create function public.est_admin()
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.profils
    where id = auth.uid()
      and role = 'admin'
  );
$$;
