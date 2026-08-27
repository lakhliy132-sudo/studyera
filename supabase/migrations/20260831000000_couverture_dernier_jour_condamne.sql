-- Associe la couverture du « Dernier Jour d'un Condamné » à son œuvre.
--
-- Même mécanisme que la migration précédente
-- (20260830000000_couverture_boite_a_merveilles.sql) : chemin public
-- local (public/couvertures/), servi directement par Next.js, pas un
-- objet Supabase Storage.
--
-- Image extraite du fichier de référence fourni par l'utilisateur
-- (page-oeuvre (2).html, image encodée en base64 dans le CSS).
update public.oeuvres
set couverture_url = '/couvertures/dernier-jour-condamne.jpg'
where slug = 'dernier-jour-condamne';
