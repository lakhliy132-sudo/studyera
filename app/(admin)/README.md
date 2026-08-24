# Groupe (admin)

Contient les pages réservées aux utilisateurs dont `profils.role = 'admin'`.

Protection : `middleware.ts`, liste `CHEMINS_ADMIN`. Contrairement au
groupe `(eleve)` (simple authentification), l'accès ici nécessite en
plus une vérification du rôle dans la table `profils`.

Pages existantes :

- `/administration` — page minimale confirmant l'accès et affichant
  l'email de l'admin connecté. Aucune fonctionnalité métier pour
  l'instant.

Pour ajouter une nouvelle page ici : créer le dossier sous
`app/(admin)/...`, puis ajouter son chemin à `CHEMINS_ADMIN` dans
`middleware.ts` (les groupes de routes n'apparaissent pas dans l'URL,
donc cette liste ne peut pas être déduite automatiquement).
