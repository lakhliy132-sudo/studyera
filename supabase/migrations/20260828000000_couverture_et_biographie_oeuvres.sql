-- Ajouts necessaires pour les pages de navigation dans les oeuvres
-- (session 3) : la carte et l'en-tete d'une oeuvre affichent une
-- couverture, l'onglet Biographie affiche un texte bilingue sur
-- l'auteur. Aucun des deux n'existait dans le schema initial.
--
-- Toutes nullable : une oeuvre sans couverture ou sans biographie
-- encore redigee doit rester un etat normal, gere explicitement cote
-- interface (bloc de remplacement / message "bientot disponible"),
-- pas une valeur manquante inattendue.
alter table public.oeuvres
  add column couverture_url text,
  add column biographie_fr text,
  add column biographie_ar text;
