# Groupe (admin)

Dossier réservé pour les futures pages d'administration
(`app/(admin)/...`).

Aucune page n'est créée ici dans cette session : c'était explicitement
hors périmètre (« aucune page métier »). Seule la structure existe.

À faire lors d'une prochaine session, si besoin :

- Ajouter les pages d'administration sous ce groupe.
- Étendre `middleware.ts` pour protéger ces chemins (comme c'est déjà
  fait pour le groupe `(eleve)`), probablement avec une vérification de
  rôle en plus de la simple authentification.
