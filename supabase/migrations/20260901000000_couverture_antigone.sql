-- Associe la couverture d'Antigone à son œuvre.
--
-- Même mécanisme que les deux migrations précédentes
-- (20260830000000_couverture_boite_a_merveilles.sql,
-- 20260831000000_couverture_dernier_jour_condamne.sql) : chemin
-- public local (public/couvertures/), servi directement par Next.js,
-- pas un objet Supabase Storage.
--
-- Image fournie par l'utilisateur ("regarde la photo que j ai mis sur
-- le fichier fais la sur la couverture de l oeuvre antigone") :
-- illustration générée (pas une photo d'une personne réelle), une
-- jeune femme en tenue grecque antique vue de dos, assise sur des
-- ruines face à l'Acropole au crépuscule — même composition que la
-- couverture de La Boîte à Merveilles (figure de dos face à la ville).
update public.oeuvres
set couverture_url = '/couvertures/antigone.png'
where slug = 'antigone';
