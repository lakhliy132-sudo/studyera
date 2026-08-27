-- Associe la couverture de « La Boîte à Merveilles » à son œuvre.
--
-- La valeur pointe vers un fichier local du dépôt (public/couvertures/...)
-- servi par Next.js, et non vers un objet Supabase Storage. Le champ
-- oeuvres.couverture_url accepte aussi bien une URL distante (bucket
-- public) qu'un chemin public local (utilisé par next/image).
--
-- Image fournie par l'utilisateur (couverture de l'édition utilisée en
-- classe).
update public.oeuvres
set couverture_url = '/couvertures/boite-a-merveilles.png'
where slug = 'boite-a-merveilles';
