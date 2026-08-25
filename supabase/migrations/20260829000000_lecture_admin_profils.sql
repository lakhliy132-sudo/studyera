-- Autorise les admins à lire tous les profils (pas seulement le leur).
--
-- Jusqu'ici, seule la policy "les utilisateurs voient leur propre
-- profil" (migration 20260825120000_creation_profils.sql) existait :
-- un admin ne pouvait donc pas voir l'email/nom d'un autre élève.
-- Nécessaire pour la page /administration (session 4) qui affiche, pour
-- chaque copie déposée, l'identité de l'élève qui l'a soumise — même
-- principe déjà appliqué à `copies` ("les admins voient toutes les
-- copies", migration 20260826000400_copies.sql).
--
-- Volontairement SELECT uniquement : la possibilité de modifier le rôle
-- d'un profil (promouvoir un élève en admin) reste hors périmètre, elle
-- nécessitera sa propre policy UPDATE, réfléchie séparément pour éviter
-- qu'un admin ne se rétrograde lui-même par erreur.
create policy "les admins voient tous les profils"
  on public.profils
  for select
  using (public.est_admin());
