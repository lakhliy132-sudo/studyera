-- Photos jointes aux publications de la communauté (« quand je veux
-- envoyer un message, ajoute pour ajouter une photo avec le message »).
--
-- Un espace de stockage public `communaute` : la photo d'une publication
-- y est rangée sous `<id de la publication>.jpg`. Aucune colonne n'est
-- ajoutée à `communaute_messages` : l'application retrouve la photo par
-- l'id de la publication.
--
-- Pas de policy sur storage.objects : l'élève n'écrit jamais lui-même
-- dans le stockage. L'envoi passe par une action serveur
-- (app/(eleve)/communaute/actions.ts) qui vérifie que la publication est
-- bien la sienne, puis écrit avec la clé de service. Le bucket étant
-- public, la lecture des images se fait par leur URL publique.
--
-- Déjà créé en base par l'API de stockage ; rejouable.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('communaute', 'communaute', true, 4194304, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do nothing;
