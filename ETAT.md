# État du projet MADRASTI

> Mis à jour à la fin de chaque session. Dernière mise à jour : 2026-09-04.
>
> **En-tête de navigation en pleine largeur, plus centré dans un
> conteneur `max-w-[1240px]`** (`BarreNavigation.tsx`) — demandé
> explicitement par l'utilisateur, capture d'écran à l'appui : sur un
> grand écran, le bandeau centré laissait un vide visible avant le
> logo ("t a pas vue la photo je veux le tableu de bord et l accueil et
> l oeuvre etc... HORIZETALEMENT A GAUCHE"). Confirmé via une question
> de clarification avec aperçu avant/après avant d'appliquer, vu qu'il
> s'agit de l'en-tête global (toutes les pages). Retiré `mx-auto
> max-w-[1240px]`, gardé `px-7` : logo/nav collés au bord gauche réel
> de la fenêtre, boutons de connexion (`ml-auto`) collés au bord droit
> réel — changement propre à cet en-tête, le reste du site garde son
> conteneur centré habituel. Vérifié par capture d'écran réelle à
> 1920px de large.
>
> **"Tableau de bord" déplacé avant "Accueil" dans la navigation**
> (`LiensNavigation.tsx`) — demandé explicitement par l'utilisateur,
> capture d'écran de la nav actuelle à l'appui ("regarde la photo que
> je viens de mettre dans le fichier... fait le tableau de bord avant
> acceuil") : il avait été placé juste après "Accueil" lors de son
> ajout précédent, l'utilisateur le veut maintenant en première
> position. Un seul tableau de liens (`liens`) alimente à la fois la
> nav desktop et le tiroir mobile, donc les deux héritent du nouvel
> ordre sans code séparé. Vérifié avec un compte de test jetable + vraie
> session : capture d'écran de la nav desktop connectée, compte de test
> supprimé ensuite.
>
> **Nouveau modèle pour la barre de progression d'une œuvre**
> (`BarreProgression.tsx`) — demandé explicitement par l'utilisateur
> ("change le modele de la progression de chapitre"). L'ancienne
> version (ligne de texte fine + barre de 1.5px, sans carte) passait
> presque inaperçue ; remplacée par une carte bordée (même langage
> visuel que le reste du site), pourcentage en grand comme élément
> principal, barre plus épaisse (2.5px), décompte "X sur Y lus" en
> légende. Composant partagé par les 3 œuvres (pas de demande précisant
> une seule œuvre). Vérifié avec un compte de test jetable + vraie
> session (15/49 chapitres marqués lus sur Le Dernier Jour d'un
> Condamné) : capture d'écran avant/après, compte de test supprimé
> ensuite (cascade sur `progression` vérifiée vide).
>
> **Bouton "Lecteur bilingue" retiré de la bannière d'une œuvre**
> (`BanniereOeuvre.tsx`) — demandé explicitement par l'utilisateur
> ("dans le dernier jour enleve lecteur billingue"). Il pointait en
> réalité vers exactement la même page que "Lire le texte intégral"
> (aucun mode de lecture bilingue distinct n'existe) — un doublon sans
> vraie fonction propre. Seule "Le Dernier Jour d'un Condamné" a
> aujourd'hui `mode: "texte_integral"` (les 2 autres œuvres sont en
> `accompagnement`, ce bloc ne s'affiche pas pour elles), donc le
> retirer ici a concerné en pratique uniquement cette œuvre, sans
> condition sur le slug. Vérifié par lecture du HTML servi sur
> `/oeuvres/dernier-jour-condamne`.
>
> **⚠️ 8 nouveaux sujets d'argumentation pour DJC — contenu Claude, à
> faire relire par un enseignant.** Demande explicite : "ajoute autre
> sujet d argumentation". S'ajoutent aux 7 déjà en place (entrée
> précédente), thèmes distincts pour ne pas répéter les existants :
> l'erreur judiciaire, la vengeance et la justice, se mettre à la place
> de l'autre, la paternité face à l'adversité, le temps qui reste, la
> liberté qu'on ne mesure qu'une fois perdue, émouvoir pour convaincre,
> juger sans connaître. 15 sujets au total pour cette œuvre, tous de
> type "argumentation" (aucun "analyse" ré-ajouté par erreur). Vérifié
> via `npm run importer` (0 erreur, `Sujets` 80 → 88, stable sur un 2ᵉ
> run) et par lecture du HTML servi sur la page.
>
> **Retire les sujets de type "analyse" pour DJC, ne garde que
> l'argumentation** — demande explicite : "fais moi juste les sujets d
> augmentation" (coquille pour "argumentation"). Sur les 17 sujets
> ajoutés à l'entrée précédente, les 10 de type "analyse" (questions de
> lecture classiques) ont été retirés — de l'Excel (pour qu'un futur
> import ne les recrée pas) ET directement en base (`DELETE ... WHERE
> type = 'analyse'`, 10 lignes). Il reste 7 sujets, tous de type
> "argumentation" (dissertations/essais). Vérifié : `npm run importer`
> stable (0 erreur, `Sujets` 90 → 80, pas de résurrection), et par
> lecture du HTML servi sur `/oeuvres/dernier-jour-condamne?onglet=sujets`.
>
> **⚠️ Sujets d'analyse (17) + quiz étendu à 5 questions/chapitre (245
> au total) pour "Le Dernier Jour d'un Condamné" — contenu Claude, à
> faire relire par un enseignant.** Demande explicite : "fais moi les
> sujets liées de dernier jour et 5quiz dans chapitre".
>
> - 17 sujets d'analyse/argumentation, rattachés à l'œuvre entière (pas
>   de chapitre précis — comme la majorité des sujets déjà en place pour
>   Antigone) : le choix de l'anonymat, la forme du journal intime, la
>   fin brutale du roman, la peine de mort aujourd'hui, l'humanité
>   derrière le criminel... Importés via `npm run importer` : 0 erreur,
>   `Sujets` 73 → 90 (+17 exactement), stable sur un 2ᵉ run (la
>   contrainte NULL sur `chapitre_id` déjà corrigée cette session tient
>   bon).
> - Quiz : passé de 3 à 5 questions par chapitre (`lib/quizDernierJourCondamne.ts`,
>   245 questions au total), pour s'aligner sur la densité d'Antigone
>   (5/scène) comme demandé. Les 2 nouvelles questions par chapitre
>   portent sur le thème principal (choix parmi le vrai thème, ses 2
>   thèmes secondaires et le thème d'un autre chapitre) et sur un mot du
>   lexique de ce chapitre — réutilisent les données déjà rédigées
>   (thèmes, lexique) plutôt que d'inventer un nouvel angle à chaque
>   fois. Généré par script à partir des données sources, puis vérifié
>   automatiquement (structure : 5 questions/chapitre, 4 choix, pas de
>   doublon ; sémantique : la bonne réponse de chaque question de thème/
>   vocabulaire correspond bien aux données de `fiches`/lexique) avant
>   vérification visuelle par capture d'écran réelle.
>
> **Couleur des pastilles de l'onglet Lieux : dégradé plein → fond
> translucide** — demandé explicitement par l'utilisateur ("oui la c
> bien mais change de couleur je veux qlq chose de transparente ou
> bleu ciel"), une fois satisfait de la forme compacte (entrée
> précédente). Fond `bg-primary/10` (translucide, laisse deviner la
> carte blanche derrière) + bordure `primary/20` + texte `primary`,
> plutôt que le dégradé plein `primary`/`primary-vif` précédent —
> volontairement resté dans les tokens `--color-*` existants (opacité
> sur `primary`) plutôt que d'ajouter une nouvelle couleur "bleu ciel"
> hors du système de tokens du site. Vérifié par capture d'écran
> réelle.
>
> **Re-correction : pastilles de l'onglet Lieux trop en longueur** — la
> version dégradée précédente (flèche + padding large) jugée "trop
> longue" : "non pas comme je veux pas quelle soit comme ca long".
> Flèche retirée, padding réduit, `rounded-full` avec largeur minimale
> pour rester proche d'un cercle sur les libellés courts ("CH. 1") —
> dégradé et ombre conservés. Vérifié par capture d'écran réelle : les
> pastilles forment maintenant une grille de petites capsules
> compactes, plus la forme allongée d'avant.
>
> **Pastilles "CH. N" de l'onglet Lieux stylées + rendues cliquables**
> (`OngletLieux.tsx`) — demandé explicitement par l'utilisateur ("dans
> la partie de lieux ou ecrit chp fais la stylée"), qui trouvait la
> pastille plate d'origine trop simple. Transformées en vrais liens
> (`next/link`) vers `/oeuvres/{slug}/{numero}`. Composant partagé par
> les 3 œuvres (pas de demande précisant une seule œuvre cette fois) :
> Antigone et La Boîte à Merveilles en bénéficient aussi.
>
> Première version (bordure + flèche, fond plein seulement au survol)
> jugée pas assez travaillée : "non je veux qlq chose d estethique".
> Remplacée par un jeton au dégradé `primary` → `primary-vif` et une
> ombre bleutée, repris tels quels du bouton "Lire le texte intégral"
> de cette même page (`shadow-[0_2px_10px_rgba(29,78,216,0.22)]`)
> plutôt qu'un style inventé de toutes pièces — cohérent avec
> l'esthétique déjà en place sur le site. Vérifié par capture d'écran
> réelle sur `/oeuvres/dernier-jour-condamne?onglet=lieux`.
>
> **⚠️ Lieux + quiz (147 questions) ajoutés pour "Le Dernier Jour d'un
> Condamné" — les 7 onglets de l'œuvre ont maintenant tous un vrai
> contenu.** Demande explicite : "fais les lieux et les quiz".
>
> - `chapitres.lieux` rempli pour les 49 chapitres, en reprenant le
>   découpage déjà établi dans `SommaireChapitres.tsx`
>   (`PARTIES_DERNIER_JOUR`) plutôt que d'en inventer un nouveau :
>   Bicêtre (1-21), la Conciergerie (22-47), la place de Grève devant
>   l'Hôtel de Ville (48-49, lieu réel des exécutions capitales à Paris
>   jusqu'en 1832) — le chapitre 21 (le transfert lui-même) porte les
>   deux premiers lieux.
> - `lib/quizDernierJourCondamne.ts` (nouveau fichier) : 3 questions par
>   chapitre (147 au total) — délibérément moins dense que La Boîte à
>   Merveilles (15/chapitre) ou Antigone (5/scène), les chapitres de ce
>   roman étant beaucoup plus courts (une poignée de paragraphes
>   chacun) ; chaque question ancrée dans le résumé/les points clés déjà
>   en base. Branché dans `QUIZ_PAR_SLUG`
>   (`app/(public)/oeuvres/[slug]/page.tsx`), même composant
>   `OngletQuiz` que les 2 autres œuvres.
> - `npm run importer` : 0 erreur pour les lieux (colonne sur
>   `chapitres`, déjà upsertée). Vérifié par capture d'écran réelle sur
>   l'onglet Lieux (3 cartes, bons numéros de chapitres) et l'onglet
>   Quiz (49 pastilles, questions du chapitre 1 correctement affichées).
>
> **⚠️ Fiche de lecture + lexique (98 mots) ajoutés pour "Le Dernier
> Jour d'un Condamné" — contenu Claude, à faire relire par un
> enseignant.** Demande explicite : "fais moi fiche de lecture et
> lexique".
>
> - `lib/ficheLectureDernierJourCondamne.ts` (nouveau fichier) : même
>   structure `FicheLecture` et même composant `OngletFicheLecture` que
>   La Boîte à Merveilles/Antigone — carte d'identité, biographie de
>   Victor Hugo (tableau), structure et composition, style et écriture.
>   Branché dans `FICHES_LECTURE_PAR_SLUG`
>   (`app/(public)/oeuvres/[slug]/page.tsx`) ; seul l'onglet Quiz reste
>   "Bientôt disponible" pour cette œuvre désormais.
> - Lexique : ~2 mots par chapitre (98 au total), vocabulaire
>   judiciaire/carcéral et registre soutenu du texte (échafaud,
>   pourvoi en cassation, aumônier, geôlier, huissier, réquisitoire...),
>   avec sens en arabe, nature grammaticale et note explicative — même
>   format que le lexique déjà en place pour les 2 autres œuvres.
> - `npm run importer` : 0 erreur, `Mots lexique` 201 → 299 (+98
>   exactement), stable sur un 2ᵉ run. Vérifié par capture d'écran
>   réelle sur l'onglet Fiche de lecture, l'onglet Lexique (vue
>   œuvre entière) et le lexique du chapitre 1.
>
> **13 personnages ajoutés pour "Le Dernier Jour d'un Condamné" —
> contenu FOURNI PAR L'UTILISATEUR (collé dans le chat, fiche de
> lecture externe), pas rédigé par Claude.** `nom`/`role`/`description_fr`
> reprennent son texte quasiment tel quel (reformulé en description
> continue, le texte source était en puces courtes ; aucun contenu
> nouveau inventé) : le condamné à mort (narrateur, sans nom), Marie
> (sa fille), le Friauche, sa femme et sa mère, les représentants de la
> société, les geôliers, la foule, le prêtre, l'huissier, le bourreau,
> le sous-architecte, le nouveau gendarme de la Conciergerie,
> l'Espagnole (Pepa). Seul `nom_ar` (traduction du nom/de l'étiquette)
> est ajouté par Claude, l'utilisateur n'ayant fourni que du français —
> à vérifier comme le reste du contenu Claude.
>
> Rôle du narrateur volontairement aligné sur le libellé exact déjà
> utilisé pour celui de La Boîte à Merveilles ("Narrateur et personnage
> principal", pas une reformulation) : `OngletPersonnages.tsx` classe
> "personnage principal" par égalité de chaîne sur `role`
> (`ROLES_PRINCIPAUX`, déjà documenté comme fragile) — un libellé
> différent l'aurait fait atterrir à tort dans "Personnages secondaires".
>
> Importé via `npm run importer` : 0 erreur, Personnages 39 → 52 (+13,
> exactement les nouveaux), stable sur un 2ᵉ run. Vérifié par capture
> d'écran réelle sur `/oeuvres/dernier-jour-condamne?onglet=personnages` :
> le narrateur apparaît bien seul sous "Personnages principaux", les 12
> autres sous "Personnages secondaires".
>
> **⚠️ Résumé de l'œuvre + fiches de chapitre (thèmes, points clés)
> complétés pour "Le Dernier Jour d'un Condamné" — contenu Claude, à
> faire relire par un enseignant.** Demande explicite : "c bien
> maintenant fais le resumé de l oeuvre et ainsi que fais les fiche de
> chapitre dernier jour d un condamné".
>
> - `oeuvres.essentiel_fr`/`essentiel_ar` (le résumé affiché dans la
>   bannière de `/oeuvres/dernier-jour-condamne`, jusqu'ici vide) :
>   rédigé au même format que Antigone/La Boîte à Merveilles — 10
>   phrases, une par ligne, panorama complet de l'intrigue.
> - `fiches.points_cles_fr/ar` + `fiches.themes` (principal +
>   secondaires) pour les 49 chapitres, jusqu'ici tous vides (seul
>   `resume_fr/ar` avait été rempli la fois précédente) : 3 points clés
>   numérotés par chapitre (même convention que La Boîte à Merveilles :
>   numérotation "1."/"١." intégrée au texte) + 1 thème principal + 2
>   thèmes secondaires, cohérents avec le contenu réel de chaque
>   chapitre (peur de la mort, attente, paternité, dénonciation de la
>   peine de mort, etc., variés d'un chapitre à l'autre plutôt que
>   répétés).
> - `npm run importer` : 0 erreur, mêmes totaux qu'avant (83
>   chapitres/fiches, 73 sujets — aucun doublon). Vérifié par capture
>   d'écran réelle sur `/oeuvres/dernier-jour-condamne` (résumé
>   essentiel fr/ar dans la bannière) et `/oeuvres/dernier-jour-condamne/1`
>   (thèmes en pastilles + points clés en liste, sous la carte Résumé).
>
> **En-tête d'un chapitre : nom seul, sans le résumé court glué en
> dessous (`app/(public)/oeuvres/[slug]/[numero]/page.tsx`)** — demandé
> explicitement par l'utilisateur : "dans les chapitres laisse juste le
> nom du chapitre enleve la definition". Vérifié par capture d'écran :
> le `resume_court` (un paragraphe complet) juste sous le h1 faisait
> doublon avec la carte "Résumé"/"ملخص" plus bas sur la page
> (`FicheChapitre`, `fiche.resume_fr`/`resume_ar`) — supprimé, l'en-tête
> ne garde plus que la pastille "Chapitre N", le titre (h1) et le titre
> arabe. Changement dans le composant partagé par les 3 œuvres (pas de
> `slug === ...` particulier cette fois, contrairement aux demandes
> précédentes) : la demande ne nommait aucune œuvre en particulier, et
> Boîte à Merveilles/Antigone avaient exactement la même redondance.
> Vérifié par capture d'écran sur les 3 œuvres après coup.
>
> **Photo de couverture du Dernier Jour d'un Condamné réduite en
> vignette (`BanniereOeuvre.tsx`)** — la bannière de `/oeuvres/[slug]`
> recadre normalement la photo en plein cadre (`bg-cover`, bandeau
> ~250px de haut sur toute la largeur de la carte) : avec le cadrage
> large (3:2) de la nouvelle couverture, ce traitement ne laissait
> qu'une fine bande de l'image visible. Demande explicite de
> l'utilisateur : "la photo fais la petite pour toute view y regardent
> dans la photo". Ajouté une variante dédiée dans `Hero()`, appliquée
> uniquement quand `oeuvre.slug === "dernier-jour-condamne"` (les 2
> autres œuvres gardent le cadrage plein cadre habituel, non concernées
> par la demande) : petite vignette `object-contain` (image entière
> visible, non recadrée), sur fond bleu nuit, ~195×130px mobile,
> ~225×150px desktop. Bloc titre (`h1`/titre arabe/badge auteur)
> extrait en sous-composant `TitreOeuvre` pour être partagé entre les
> deux mises en forme sans dupliquer le JSX. Vérifié avec de vraies
> captures d'écran Playwright (desktop 1280px et mobile 390px) : photo
> entière visible dans les deux cas, les 2 autres œuvres inchangées.
>
> **Annulé juste après** — l'utilisateur n'a pas aimé cette vignette
> distincte : "nonn je veux ptite comme les autrress" (il voulait le
> même traitement plein cadre que les 2 autres œuvres, pas une mise en
> forme à part). `BanniereOeuvre.tsx` restauré à l'identique de son état
> juste avant l'entrée ci-dessus (`git checkout` du commit précédent) :
> les 3 œuvres utilisent de nouveau exactement le même `Hero()`. Avec ce
> cadrage plein cadre standard, le rendu de la nouvelle couverture est
> en fait correct (vérifié par capture d'écran) — la scène (fenêtre,
> silhouette, mur) reste bien lisible malgré le recadrage large.
>
> **⚠️ Résumés longs (49 chapitres) ajoutés pour "Le Dernier Jour d'un
> Condamné" — contenu Claude, à faire relire par un enseignant.**
> Demande explicite de l'utilisateur : "dans les chapitres de le
> dernier jour d un condamné faits les resumé pas collé au titre comme
> les chapitres de la boite". Les 49 chapitres existaient déjà en base
> (`chapitres.titre_fr` + `resume_court`, insérés par un mécanisme
> antérieur à cette session — 0 ligne correspondante dans l'Excel) mais
> la table `fiches` était entièrement vide pour cette œuvre : seul le
> résumé court, collé sous le H1, s'affichait, sans la carte
> "Résumé"/"ملخص" séparée qu'ont La Boîte à Merveilles et Antigone via
> `CarteBilingue`.
>
> - Rédigé un `resume_fr` (3-5 phrases, ancré dans une vraie
>   connaissance du roman de Victor Hugo) et sa traduction `resume_ar`
>   pour chacun des 49 chapitres. Ajoutés à la feuille "Chapitres" de
>   `data/contenu-plateforme-bac.xlsx` avec `titre_fr`/`resume_court_fr`
>   recopiés tels quels depuis la base (pour ne pas les écraser par
>   `null` au prochain import — piège déjà documenté plusieurs fois dans
>   ce fichier) et `statut: "brouillon"`.
> - `npm run importer` : `fiches` passe de 34 à 83 lignes (+49, exactement
>   les nouvelles), `chapitres` (83) et `sujets` (73) inchangés (pas de
>   doublon), 0 erreur. Deuxième run identique (idempotent). `essentiel_fr/ar`
>   des 3 œuvres vérifié inchangé avant/après (non concerné par cette
>   tâche). Vérifié par lecture directe du HTML servi sur
>   `/oeuvres/dernier-jour-condamne/1` (page publique, pas besoin de
>   session authentifiée) : le `resume_court` et le nouveau `resume_fr`
>   apparaissent bien à deux endroits distincts de la page, "Résumé" et
>   "ملخص" présents chacun deux fois (carte FR + carte AR).
> - **Erreur factuelle préexistante découverte et corrigée** (ni écrite
>   par l'utilisateur ni par moi à l'origine) : le chapitre 33, titré
>   "La fin brutale", affirmait dans son `resume_court` que "le récit se
>   termine brutalement au moment où l'exécution est sur le point
>   d'avoir lieu" — or les chapitres 34 à 49 racontent une suite
>   substantielle (visite de la fille, derniers écrits...), et c'est le
>   chapitre 49 ("Les derniers instants") qui contient la vraie fin,
>   avec une formule presque identique. Le nouveau `resume_fr` du
>   chapitre 33 a été rédigé sans reprendre cette affirmation ; le titre
>   et le `resume_court_fr` ont aussi été corrigés directement dans
>   l'Excel (titre → "Le vertige de l'attente") puis réimportés, plutôt
>   que de laisser une erreur factuelle visible aux élèves une fois
>   découverte — même logique que la correction de l'affirmation trop
>   large sur les RLS `profils` plus bas dans ce fichier : ne jamais
>   laisser une inexactitude documentée/publiée sans la corriger une
>   fois identifiée.
>
> **Correction du fond bleu plein → fond blanc + liséré bleu sur le
> côté** — l'utilisateur n'a pas aimé le dégradé plein fond de l'entrée
> précédente : "Non au fond le blanc mais a coté le bleu". Les 3 cartes
> (`BlocAnnonces.tsx`, `ListeProgrammeOeuvres.tsx`,
> `BlocDernieresActivites.tsx`) reviennent à un fond blanc et un texte
> encre/mute normal, avec le dégradé `--tdb-degrade-bleu` déplacé en
> liséré de 5px sur le bord gauche (`overflow-hidden` sur la carte pour
> que ses coins suivent l'arrondi) — même principe que la bordure
> supérieure rouge de `CarteProductionEcrite.tsx`, juste sur le côté au
> lieu du haut. La barre de progression par œuvre (dans
> `ListeProgrammeOeuvres`) revient aussi au vert `--tdb-green`
> d'origine (elle avait été passée en blanc pour rester visible sur
> l'ancien fond bleu, plus nécessaire).
>
> Vérifié avec un compte de test jetable + vraie session, 0px de
> débordement. Compte de test supprimé ensuite.
>
> **3 blocs du tableau de bord en rectangle arrondi, dégradé bleu →
> bleu ciel** — demandé explicitement par l'utilisateur ("PARTIE DE
> COMMUNICATION ET AU PROGRAMME DE L ANNée ET DERNIER ACTIVITéS CHANGE
> LA FORME FAIS LA RECTANGLE ET ARRONDIS AVEC COULEUR BLEU VERS BLEU
> CIEL"). Nouveau token `--tdb-degrade-bleu` (`linear-gradient(135deg,
> var(--tdb-blue), var(--tdb-ciel))`, `--tdb-ciel: #7dd3fc` ajouté) dans
> `app/globals.css`, appliqué comme fond des 3 cartes concernées
> (`BlocAnnonces.tsx`, `ListeProgrammeOeuvres.tsx`,
> `BlocDernieresActivites.tsx`) — texte passé en blanc/blanc
> transparent pour rester lisible sur le dégradé. `ListeProgrammeOeuvres`
> n'avait jusqu'ici aucune carte du tout (juste une liste nue) : c'est
> la première fois qu'elle est encadrée. Les 3 autres cartes (Reprise,
> Production écrite, Progression), non citées par l'utilisateur,
> gardent leur fond blanc/crème habituel — pas de changement non
> demandé.
>
> Vérifié avec un compte de test jetable + vraie session, 0px de
> débordement. Compte de test supprimé ensuite.
>
> **/tableau-de-bord repris fidèlement au modèle fourni** (2ᵉ passe) —
> le premier essai (voir entrée précédente) adaptait la palette/police
> du modèle fourni par l'utilisateur aux tokens déjà en place ailleurs
> sur le site (cohérence globale). L'utilisateur n'a pas aimé
> ("tu peux modifier le design j ai pas aimé comme ca", puis "tout" en
> réponse à une question de clarification) : cette fois, ses couleurs
> et sa police (Fraunces) sont reprises directement, telles quelles.
>
> - Nouvel espace de tokens `.tableau-de-bord` (`app/globals.css`,
>   préfixe `--tdb-`) : fond "papier" crème (`#F6F4EF`), encre, bleu,
>   rouge, vert — les valeurs exactes du modèle fourni. Scopé à cette
>   seule page (`<div className="tableau-de-bord min-h-screen">`
>   enveloppant `<main>`) : ne change RIEN à l'apparence du reste du
>   site, qui garde ses propres tokens `--color-*`. Utilisé partout via
>   la syntaxe Tailwind `bg-[var(--tdb-paper)]`/
>   `[font-family:var(--tdb-font-serif)]`.
> - Police Fraunces ajoutée (`app/layout.tsx`, `--font-fraunces`),
>   réservée à cette page — les autres pages gardent Playfair Display.
> - Ligne verticale rouge en fondu dans la marge gauche (décoration du
>   modèle fourni, "stu-rule"), reprise telle quelle sur desktop
>   (masquée en dessous de `sm` : pas assez de place).
> - Tous les composants du tableau de bord (`CarteReprise`,
>   `CarteProductionEcrite`, `CarteProgressionAnneau`,
>   `ListeProgrammeOeuvres`, `BlocAnnonces`, `BlocDernieresActivites`)
>   réécrits pour utiliser ces nouveaux tokens à la place des tokens
>   globaux. Les données restent réelles (aucun changement côté
>   `lib/supabase/tableauDeBord.ts` : seule l'apparence a changé).
>
> Vérifié avec un compte de test jetable + vraie session (même
> technique que la 1ʳᵉ passe) : desktop et mobile, 0px de débordement,
> aucune erreur JS. Compte de test et données injectées supprimés
> ensuite.
>
> **/tableau-de-bord entièrement reconstruit** — l'utilisateur a fourni
> un composant React complet (JSX + CSS-in-JS autonome, ~400 lignes)
> comme référence visuelle et a demandé "fais moi comme ca mais ajoute
> des modif bien". Structure et esprit repris (accroche du jour + série
> de jours consécutifs, carte "page de cahier" pour la reprise de
> lecture avec citation, carte focus rouge pour la correction, anneau
> de progression animé, liste du programme avec titres arabes, section
> communication), mais **adapté** plutôt que copié tel quel :
>
> - Le modèle fourni réimplémentait son propre `<header>` complet ;
>   pas repris, le site a déjà un `BarreNavigation` partagé par toutes
>   les pages (déjà enrichi d'un lien "Tableau de bord" plus tôt dans la
>   session) — dupliquer un second header aurait été incohérent.
> - Palette et typographie : le modèle fourni définissait son propre
>   système ("papier" crème, police Fraunces, rouge/vert propres)
>   entièrement séparé du reste du site. Remplacé par les tokens déjà
>   en place (`--color-ink`/`--color-primary`/`--color-erreur`/
>   `--color-validation`, très proches des couleurs du modèle fourni)
>   et la police serif déjà en place (Playfair Display, pas Fraunces en
>   plus) — cohérence du site entier plutôt qu'une seconde charte
>   graphique pour une seule page. Seul ajout réel : `--font-mono` (IBM
>   Plex Mono, même famille que la police arabe déjà utilisée) pour les
>   petites étiquettes en capitales, ajouté dans app/layout.tsx et
>   app/globals.css.
> - **Aucune donnée fictive** : contrairement au modèle fourni (objet
>   `data` codé en dur), tout vient de Supabase. Nouvelles fonctions
>   dans `lib/supabase/tableauDeBord.ts` :
>   - `recupererSerieJours` : vraie série de jours consécutifs
>     d'activité, calculée depuis `activite.created_at` (fenêtre de 60
>     jours), pas inventée.
>   - `recupererRepriseLecture` : version enrichie (titre arabe, auteur,
>     résumé) de "quoi proposer pour reprendre la lecture", remplace la
>     combinaison `recupererActivitesRecentes`/`recupererChapitreRecommande`
>     de l'ancien bloc.
>   - `OeuvreProgression` étendu avec `titreAr`/`auteur` (déjà
>     disponibles dans les lignes `oeuvres` déjà chargées, juste pas
>     transmis avant).
>   - Le modèle fourni affichait un "extrait" entre guillemets et des
>     "minutes de lecture" : aucune des deux n'est fiable en base (texte
>     intégral quasi jamais rempli, table `paragraphes`) — remplacé par
>     le vrai résumé court du chapitre (`chapitres.resume_court`),
>     présenté honnêtement comme "En bref", pas comme une citation. La
>     "dernière correction" du modèle fourni (date qu'on n'a pas) est
>     remplacée par la vraie note moyenne déjà calculée ailleurs.
> - Nouveaux composants : `CarteReprise.tsx`, `CarteProductionEcrite.tsx`,
>   `CarteProgressionAnneau.tsx` (anneau SVG animé), `ListeProgrammeOeuvres.tsx`.
>   `BlocAnnonces.tsx`/`BlocDernieresActivites.tsx` restylés en place
>   (même contrat de données). `BlocReprendre.tsx`/`BlocRedaction.tsx`/
>   `BlocProgression.tsx` superseded, gardés orphelins avec une note —
>   même précédent que `OngletThemes.tsx`.
> - "Chapitre"/"Scène" (Antigone) suivent toujours `lib/uniteChapitre.ts`
>   plutôt que d'être codés en dur comme dans le modèle fourni.
>
> **Vérification réelle**, pas seulement `tsc` : compte de test jetable
> (API admin Supabase) avec un `full_name`, activité + progression
> injectées directement en base (`service_role`) pour exercer tous les
> états (reprise réelle, anneau non vide, liste avec progression),
> cookie de session injecté dans Playwright, capture desktop ET mobile
> (0px de débordement). Deux petits bugs trouvés et corrigés pendant
> cette vérification : l'étiquette "Scène" sans numéro sur Antigone
> (extraction corrigée, même technique que les pastilles du Quiz), et
> "1 chapitres lus" non accordé au singulier. Compte de test et données
> injectées supprimés ensuite (vérifié vide après coup).
>
> **"Tableau de bord" ajouté à la nav principale pour un utilisateur
> connecté** — demandé explicitement par l'utilisateur, qui ne
> trouvait pas assez visible l'unique façon d'y accéder jusqu'ici
> (cliquer sur l'avatar/email en haut à droite) : "oui mais le tableau
> de bord il faut que on le trouve tjrs c pas que juste quans on se
> connecte". `LiensNavigation.tsx` prend un nouveau prop `connecte` :
> insère "Tableau de bord" juste après "Accueil" dans la liste de
> liens (nav desktop et tiroir mobile) quand `true`.
>
> Régression trouvée et corrigée en vérifiant avec une vraie session
> connectée (même technique que plus haut — compte de test jetable,
> cookie de session injecté) : avec ce 6ᵉ lien, la nav desktop
> débordait dès 1280px (jusqu'à ~1600px nécessaires avec un email
> assez long affiché en toutes lettres à côté de l'avatar). Corrigé en
> masquant l'email dans la barre desktop compacte (l'avatar seul
> suffit à indiquer "connecté", l'adresse complète reste consultable
> au survol via `title`, et toujours affichée en entier dans le tiroir
> mobile, où la largeur n'est pas un problème). Revérifié jusqu'à
> 1600px : 0px de débordement.


>
> ## ⚠️ ACTION MANUELLE REQUISE — Communication CEO/élèves
>
> Les deux migrations ci-dessous doivent être collées et exécutées à la
> main dans le SQL editor du tableau de bord Supabase (Project →
> SQL Editor → New query) — impossible de les appliquer depuis cet
> environnement (clés REST anon/service_role seulement, pas de
> connexion Postgres directe, donc pas d'exécution de DDL) :
> 1. `supabase/migrations/20260901010000_fix_recursion_est_admin.sql`
> 2. `supabase/migrations/20260901020000_communication_annonces_messages.sql`
>
> **Communication CEO/élèves (annonces + messagerie privée)** —
> demandé explicitement par l'utilisateur ("je veux ajouter une case de
> la comminucation par exemple moi ceo of the site talk avec les eleves
> qui sont dans la plateforme"), précisé via question : annonces
> publiques ET messagerie privée un-à-un ("les deux"). Nouvelles tables
> `annonces` (titre/contenu/auteur, lecture par tout utilisateur
> connecté, écriture réservée aux admins) et `messages` (fil par élève,
> `eleve_id` identifie toujours le fil, `auteur_id` qui a écrit ce
> message précis — élève ou n'importe quel admin) dans la migration 2,
> RLS écrite pour que : un élève ne lit/écrit que son propre fil ; un
> admin lit/écrit dans n'importe quel fil.
>
> - `lib/supabase/communication.ts` : les lectures (Server Components)
>   uniquement. Volontairement non bloquantes (`recupererAnnonces`,
>   `recupererMessagesEleve`, `recupererFilsMessagesPourAdmin`
>   attrapent l'erreur et renvoient un tableau vide) — même principe
>   que `enregistrerActivite` : tant que les migrations n'auront pas
>   été appliquées manuellement, le tableau de bord ne doit pas
>   planter pour autant, juste montrer un état vide.
> - **Bogue réel trouvé en vérifiant avec une vraie session** : un
>   premier essai mettait aussi les écritures (`publierAnnonce`,
>   `envoyerMessage`, `marquerMessagesLus`) dans ce même fichier
>   `communication.ts`. Comme ce fichier importe `creerClientServeur`
>   (donc `next/headers`), n'importe quel Composant Client impor­tant
>   ne serait-ce qu'UNE de ces fonctions faisait planter toute la page
>   ("You're importing a component that needs next/headers") — la
>   limite serveur/client de Next.js s'applique au fichier entier, pas
>   export par export. Corrigé en déplaçant les 3 fonctions d'écriture
>   directement dans les composants client qui les utilisent
>   (`FilMessages.tsx`, `FormulaireAnnonce.tsx`), avec
>   `creerClientNavigateur()` appelé directement — même principe déjà
>   en place pour `BoutonMarquerLu.tsx`, qui n'a jamais mélangé lecture
>   serveur et écriture navigateur dans un même fichier partagé.
> - **Élève** : `BlocAnnonces` (nouveau bloc du tableau de bord,
>   dernière annonce + lien "Écrire à l'administration"), page
>   `/messages` (fil privé complet + formulaire d'envoi, via
>   `FilMessages`, ajoutée à `CHEMINS_PROTEGES` dans middleware.ts).
> - **Admin** : `/administration` complétée de deux sections —
>   "Annonces" (formulaire de publication `FormulaireAnnonce` + liste)
>   et "Messages des élèves" (liste des fils, badge du nombre de
>   messages non lus, lien vers `/administration/messages/[eleveId]`
>   qui réutilise `FilMessages` pour répondre).
> - Pas de temps réel (ni websocket ni polling) : envoi/publication
>   met à jour l'état local ou déclenche `router.refresh()` — il faut
>   recharger la page pour voir une réponse envoyée par l'autre côté
>   entre-temps. Volontairement simple pour une première version.
>
> **Vérification réelle effectuée** (pas seulement `tsc`/curl) : créé
> un compte de test jetable via l'API admin Supabase (clé
> `service_role`), obtenu une vraie session (mot de passe), injecté le
> cookie `sb-<ref>-auth-token` dans un navigateur Playwright pour
> simuler une vraie connexion, puis visité les pages réelles. Résultat :
> `/tableau-de-bord` (avec `BlocAnnonces`), `/messages` (après le
> correctif ci-dessus) et `/administration` (promu admin via
> `service_role`, avec ses deux nouvelles sections) s'affichent
> correctement, captures à l'appui. Compte de test supprimé ensuite
> (cascade sur `profils`, confirmé vide après coup).
>
> **Correction d'une affirmation trop large faite plus tôt dans cette
> même session** : j'avais écrit que "TOUT SELECT sur profils échoue" à
> cause d'une récursion RLS, et que "personne ne peut accéder à
> /administration". C'est inexact — en creusant avec de vraies requêtes
> authentifiées, la récursion ne se déclenche que pour un `SELECT` sur
> `profils` **sans filtre `id`** (scan complet) ou pour une requête
> **non authentifiée** (`auth.uid()` NULL) ; un `SELECT` filtré par
> `id` (`eq` ou `in`, y compris avec plusieurs ids), authentifié,
> fonctionne très bien — exactement ce que fait le reste du code
> (middleware, `recupererCopiesPourAdmin`, `recupererFilsMessagesPourAdmin`).
> Un vrai admin connecté a donc bien accès à `/administration`
> aujourd'hui, avant même d'appliquer la migration 1. Cette migration
> reste recommandée (comportement plus robuste, plus prévisible), mais
> n'est plus "bloquante" comme annoncé initialement — correction faite
> pour ne pas laisser une affirmation inexacte dans cet historique.
>
> **Rédactions modèles encadrées, texte en noir plutôt qu'en bleu** —
> demandé explicitement par l'utilisateur ("fait la redaction arrondis
> et c mieux de faire l ecriture avec noir pas bleu"). Le gras
> `**...**` (rendu via le composant `strong` partagé, en
> `--color-ink` — un bleu profond, pas un vrai noir) ne convenait pas
> pour distinguer visuellement le texte d'une copie du reste de la
> page. Remplacé par un système de marqueurs générique :
> `segmenter()` découpe désormais `contenu_mdx` sur 3 types de
> marqueurs (`<!-- PLANS -->`, et la paire
> `<!-- REDACTION -->`/`<!-- /REDACTION -->`, qui peut apparaître 0,
> 1 ou plusieurs fois) au lieu de la coupe unique précédente réservée
> à `<!-- PLANS -->`. Chaque bloc `<!-- REDACTION -->` est rendu par
> `BlocRedaction` : encadré arrondi (`rounded-lg border`), texte en
> gras et `text-foreground` (noir, pas `text-ink`) — sans toucher au
> `strong` partagé, donc "Sujet"/"Le plan choisi" restent en bleu,
> cohérent avec le reste de la page.
>
> Bug corrigé en vérifiant : les paragraphes de rédaction, une fois
> sortis du flux principal (qui a `gap-4` sur son conteneur), n'avaient
> plus d'espacement entre eux à l'intérieur de `BlocRedaction` — ajouté
> `flex flex-col gap-4` sur son propre conteneur aussi.
>
> Vérifié par capture Playwright : les 2 rédactions bien encadrées et
> en noir, espacement des paragraphes correct, page méthodologie
> (`GrillePlans`) non affectée par la généralisation de `segmenter()`.
>
> **Texte des 2 rédactions modèles passé en gras** — demandé
> explicitement par l'utilisateur ("dans cette partie de redaction
> change le mode d ecriture en gras"). Chaque paragraphe de rédaction
> (pas l'encadré "Sujet"/"Le plan choisi", ni les "Points forts")
> entouré de `**...**` dans le markdown en base, rendu via le
> composant `strong` déjà stylé (gras + `text-ink`) — pas de nouveau
> style de composant, juste le contenu modifié. Vérifié par capture
> Playwright : les 9 paragraphes de rédaction (4 + 5) bien en gras, le
> reste de la page inchangé.
>
> **/production-ecrite : "Modèles de rédactions corrigées" rédigé** —
> demandé par l'utilisateur, qui m'a laissé l'initiative du contenu
> ("fait de ta part methode de reactions corrigés"). Nouveau cours en
> base (`modeles-corriges`, catégorie "production-ecrite") : deux
> rédactions complètes appliquant chacune un plan de la méthodologie
> (plan dialectique sur "Les réseaux sociaux rapprochent-ils vraiment
> les gens ?", plan analytique sur "Le stress avant les examens :
> causes, conséquences, solutions"), chacune suivie de ses "points
> forts" commentés. Encadré "Sujet"/"Le plan choisi" en tête de chaque
> modèle (blockquote markdown, nouveau style `blockquote`/`hr`/`h3`
> ajouté aux composants markdown partagés de la page détail). Aucune
> parenthèse dans ce nouveau texte non plus (vérifié par le même
> garde-fou `/[()]/.test(...)` que pour la méthodologie).
>
> ⚠️ Contenu entièrement rédigé par Claude (sujets et rédactions
> inventés pour l'exercice, pas fournis par l'utilisateur) — à faire
> relire par un enseignant avant usage en classe.
>
> Vérifié par capture Playwright : carte "Modèles de rédactions
> corrigées" désormais cliquable sur /production-ecrite (3ᵉ carte sur
> 4), contenu complet affiché sur /production-ecrite/modeles-corriges.
> ⚠️ Anomalie mineure observée en vérifiant essentiel_fr/ar : le total
> `resume_ar` des fiches est passé de 12104 à 12105 caractères entre
> deux contrôles de cette session, sans qu'aucune modification de la
> feuille Chapitres/Lexique n'ait été faite entre-temps (seule la
> feuille Cours a été touchée). Antigone revérifiée scène par scène,
> contenu identique à ce qui avait été rédigé — probablement un
> artefact bénin (espace) issu des nombreuses réécritures du classeur
> Excel par ExcelJS au fil de la session, pas une perte de contenu ;
> signalé par transparence, pas creusé plus loin faute d'impact
> constaté.
>
> **Toutes les parenthèses retirées du texte de la méthodologie de
> rédaction** — l'utilisateur a redemandé après un premier retrait
> partiel (une seule occurrence corrigée précédemment) : "enleve )
> dans les ecritures", plus général que la fois précédente. Repris
> tout le `contenu_mdx` en base et reformulé chaque tour de phrase qui
> utilisait des parenthèses, sans rien perdre du sens — virgules,
> deux-points ou tirets à la place ("sujet d'opinion, du type..." au
> lieu de "sujet d'opinion (...)" ; "un résumé synthétique, pas une
> simple répétition, des grandes étapes..." au lieu de "(pas une
> simple répétition)", etc.). Le script d'édition vérifie lui-même
> qu'aucune parenthèse ne subsiste avant d'écrire le fichier
> (`/[()]/.test(...)`) — garde-fou contre un oubli. Vérifié par
> capture Playwright : plus aucune parenthèse visible sur toute la
> page.
>
> **/production-ecrite transformée en liste de cartes (comme /langue)
> + parenthèse fermante isolée retirée** — demandé explicitement par
> l'utilisateur ("enleve ) ca dans l ecriture et fais moi dans la
> partie de p ecrite case du la methodologie de la redaction").
>
> - `/production-ecrite` affiche désormais une grille de 4 cartes
>   (même structure que `/langue`, `SUJETS` au lieu de `LEÇONS`) : "La
>   méthodologie de la rédaction" (réelle, cliquable, seule à avoir du
>   contenu en base) + 3 cartes "Bientôt disponible" reprenant les
>   autres pistes déjà évoquées avec l'utilisateur (Sujets de
>   rédaction, Modèles de rédactions corrigées, Grille
>   d'auto-évaluation) — aucun contenu inventé pour ces 3-là, juste le
>   titre/la description déjà discutés.
> - Le contenu de la méthodologie déménage vers
>   `/production-ecrite/[slug]` (nouvelle route dynamique, sur le
>   modèle de `/langue/[slug]`) — logique de coupe au marqueur
>   `<!-- PLANS -->` et `GrillePlans` inchangées, juste déplacées.
> - Parenthèse fermante isolée en bout de phrase (« Faut-il... »).)
>   retirée sur la carte "plan dialectique" — les deux exemples de
>   sujets sont maintenant introduits par un tiret, sans parenthèses
>   englobantes.
>
> Vérifié par capture Playwright : les 4 cartes sur `/production-ecrite`
> (1 cliquable + 3 grisées), le contenu complet sur
> `/production-ecrite/methodologie-redaction` (fil d'Ariane retour,
> plus de parenthèse isolée), 404 confirmé sur un slug pas encore réel
> (`/production-ecrite/sujets-redaction`).
>
> **/production-ecrite : les 3 plans sortis dans des cases dédiées** —
> correction demandée explicitement par l'utilisateur après un premier
> essai en simples sous-titres H3 empilés dans le flux markdown ("je
> veux quelle soit bien classé chaque plan dans une case pas comme
> ça"). Le `contenu_mdx` en base contient désormais un marqueur
> `<!-- PLANS -->` à l'endroit précis où les 3 plans doivent
> apparaître ; la page coupe le texte à ce marqueur (deux appels
> `ReactMarkdown` séparés) et intercale une grille de 3 cases
> (`GrillePlans`, données `PLANS` codées dans la page — même texte que
> ce qui était en base avant, pas reformulé) : chaque case a son
> titre, une phrase "quand l'utiliser", puis ses étapes (I/II/III pour
> le plan simple ; Thèse/Antithèse/Synthèse pour le dialectique ;
> Causes/Conséquences/Solutions pour l'analytique). Vérifié par
> capture Playwright : 3 cases nettement séparées, une par ligne en
> dessous de 640px, côte à côte au-delà.
>
> **/production-ecrite : premier contenu réel — méthodologie de la
> rédaction** — l'utilisateur a choisi "Méthodologie de rédaction"
> parmi les options proposées, en précisant explicitement vouloir les
> 3 types de plan ("et ainsi les plan le plan simple plan dialectique
> analytique"). Page reconstruite pour aller chercher un vrai cours en
> base (table `cours`, nouvelle catégorie "production-ecrite", même
> mécanisme que "L'énonciation" sur /langue) au lieu du "Bientôt
> disponible" statique, rendu via `react-markdown`/`remark-gfm` (déjà
> présents dans les dépendances) avec un style dédié (`components`),
> pas de `dangerouslySetInnerHTML` ni de MDX/JSX exécuté.
>
> Contenu : comprendre le sujet, les 3 plans (simple ; dialectique
> thèse/antithèse/synthèse ; analytique causes/conséquences/
> solutions), introduction (accroche/présentation/annonce du plan),
> développement, conclusion (bilan/ouverture), tableau des connecteurs
> logiques. ⚠️ Entièrement rédigé par Claude (méthodologie générale,
> pas propre à une œuvre) — à faire relire par un enseignant.
>
> Ajouté via le pipeline Excel habituel (feuille Cours existante,
> nouvelle ligne, `npm run importer`, 0 erreur, Cours passé de 1 à 2,
> essentiel_fr/ar des 3 œuvres vérifié inchangé).
> Vérifié par capture Playwright : titres, listes, gras, tableau des
> connecteurs tous bien stylés.
>
> **Nouvelle partie "Production écrite"** — demandé explicitement par
> l'utilisateur ("ajoute partie s appelle production écrite"), clarifié
> via question : nouveau lien de nav + nouvelle page, contenu à
> remplir plus tard. `app/(public)/production-ecrite/page.tsx` créée
> (même format d'attente que /ressources : pas de contenu inventé
> faute de brief, juste une phrase d'intention — "Sujets et méthode
> pour réussir tes rédactions. Bientôt disponible."), lien ajouté à
> `LiensNavigation.tsx` après "Langues".
>
> Bug de mise en page révélé en vérifiant : "Production écrite" (deux
> mots) faisait passer les libellés de nav sur 2 lignes dès la bascule
> desktop (`xl`, 1280px) — pas un débordement horizontal (0px mesuré),
> mais un retour à la ligne disgracieux à l'intérieur de chaque lien,
> qui persistait même à 1440px de large (le conteneur de la barre de
> nav a une largeur maximale fixe, `max-w-[1240px]`, indépendante de la
> largeur de l'écran). Corrigé avec `whitespace-nowrap` sur les liens
> de `LiensNavigation.tsx` — vérifié par capture Playwright à 1280,
> 1360 et 1440px : plus aucun retour à la ligne, toujours 0px de
> débordement horizontal.
>
> **"Ressources" et "À propos" retirés de la navigation** — demandé
> explicitement par l'utilisateur ("Enleve moi la partie de ressources
> et a propos"). Retiré uniquement du tableau `LIENS` de
> `LiensNavigation.tsx` (nav desktop et tiroir mobile, qui partagent ce
> même tableau) ; les pages `/ressources` et `/a-propos` elles-mêmes
> n'ont pas été supprimées (pas demandé), elles restent juste
> inaccessibles depuis la navigation. Nav réduite à 4 liens (Accueil,
> Œuvres, Correcteur IA, Langues) — vérifié par capture Playwright
> desktop et mobile (menu déplié).
>
> **"Lire la suite" sur le résumé essentiel + "Scène" dans la barre de
> progression** — demandé explicitement par l'utilisateur ("pour le
> resumé d antigone fait l option de lire la suite et autre chose dans
> la barre de ta progression de chapitre 22 remplace la par scene").
>
> - `BanniereOeuvre.tsx` : `CarteBilingue` du résumé essentiel appelée
>   avec `long` (repli à 6 lignes + "Lire la suite"/"Réduire", même
>   mécanisme déjà utilisé pour le résumé d'un chapitre) — appliqué à
>   toutes les œuvres, pas seulement Antigone (composant partagé, pas
>   de raison de le rendre incohérent selon l'œuvre). Vérifié par
>   capture Playwright replié/déplié sur Antigone (10 lignes) et sur La
>   Boîte à Merveilles (résumé plus court, se replie aussi puisqu'il
>   dépasse 6 lignes une fois affiché en 2 colonnes).
> - `BarreProgression.tsx` ("Ta progression", bannière de
>   /oeuvres/[slug]) affichait "N chapitre(s) sur total" en dur, y
>   compris sur Antigone — corrigé en unité-aware via
>   `libelleUniteChapitre(slug)` (même mécanisme que `CarteOeuvre.tsx`
>   /`OngletQuiz.tsx`), affiche désormais "scène(s)" pour Antigone. ⚠️
>   Non vérifié visuellement (la barre ne s'affiche qu'à un utilisateur
>   connecté avec une progression, pas de compte de test disponible
>   dans cet environnement) — vérifié uniquement par relecture de code
>   et `npx tsc --noEmit`, en reprenant exactement le même schéma déjà
>   vérifié ailleurs.
>
> **Résumé "essentiel" d'Antigone renseigné** (bannière de
> /oeuvres/antigone, jusqu'ici "Bientôt disponible"/"قريبًا") —
> `oeuvres.essentiel_fr` rempli avec le texte fourni verbatim par
> l'utilisateur ("ajoute ca resumé d antigone"), phrase par phrase,
> newlines conservés (le composant `CarteBilingue` les respecte via
> `whitespace-pre-line`, même rendu que le texte fourni). ⚠️
> `essentiel_ar` : traduction de Claude, phrase à phrase pour rester
> alignée avec le français — à faire relire par un enseignant. Ajouté
> via le pipeline Excel habituel (feuille Oeuvres, `npm run importer`,
> 0 erreur), essentiel_fr/ar de La Boîte à Merveilles vérifié
> inchangé. Vérifié par capture Playwright.
>
> **Cartes de /oeuvres : animation d'entrée + survol** — demandé
> explicitement par l'utilisateur ("je veux les 3 cases du roman
> bougee un peu", précisé ensuite : entrée ET survol). Nouveau
> `@keyframes entree-carte` + token `--animate-entree-carte` dans
> `app/globals.css` (fondu + léger glissement vers le haut, `backwards`
> pour rester invisible pendant le délai) ; `CarteOeuvre.tsx` prend un
> nouveau prop `indexAnimation` qui décale l'animation de chaque carte
> de 100ms (déclenché en cascade plutôt que toutes en même temps) et
> ajoute `hover:-translate-y-1` (le `transition` déjà présent couvre
> `transform` par défaut dans Tailwind, donc s'anime avec la même
> douceur que `hover:shadow-md`). Vérifié par capture Playwright (état
> au repos et au survol).
>
> **Lieux et sujets liés ajoutés pour les 21 scènes d'Antigone** —
> demandé explicitement par l'utilisateur ("fait les lieux et le
> sujetrs lieux de chaque scene"). Deux volets :
>
> - **Lieux** : "Le palais de Créon (Thèbes)" ajouté aux 19 scènes qui
>   n'avaient pas encore de lieu propre — cohérent avec l'unité de lieu
>   classique de la tragédie (toute la pièce se joue dans l'antichambre
>   du palais), à l'exception de "Scène 19 : Antigone part vers la
>   mort" qui garde "La grotte" (déjà en place). "Le mythe d'Œdipe"
>   n'est pas une scène de la pièce, aucun lieu ajouté.
> - **Sujets liés** : 13 des 30 sujets d'Antigone (ceux dont la
>   consigne nomme explicitement une scène/un personnage précis, ex.
>   "La scène des adieux entre Antigone et Hémon", "Le Prologue de la
>   pièce") rattachés à leur scène via `chapitre_id` ; les sujets plus
>   généraux (« Le personnage de Créon », « Le rôle du Chœur », les 11
>   sujets d'argumentation…) restent volontairement au niveau de
>   l'œuvre entière, faute de moment précis identifiable.
>
> ⚠️ **Bogue plus large découvert et corrigé au passage, signalé à
> l'utilisateur avant toute suppression** : la contrainte unique de la
> table `sujets` (`oeuvre_id, chapitre_id, titre`) ne détecte jamais de
> conflit quand `chapitre_id` est NULL (deux NULL ne sont jamais égaux
> en SQL) — chaque exécution de `npm run importer` réinsérait donc en
> double tous les sujets rattachés à l'œuvre entière plutôt qu'à un
> chapitre. Constaté en base : 199 lignes de sujets au lieu de 73
> (Antigone x3, Boîte à Merveilles x12 sur ses 6 sujets d'argumentation
> généraux). Après confirmation explicite de l'utilisateur : 126 lignes
> en double supprimées (garde la plus ancienne de chaque groupe), et
> `scripts/importer.ts` corrigé (recherche manuelle de la ligne
> existante avant insertion quand `chapitre_id` est NULL, au lieu de
> compter sur `upsert`/`onConflict`) — vérifié stable sur 3 exécutions
> consécutives de l'importeur (73 sujets à chaque fois, aucune
> croissance).
>
> Un second bogue lié a été détecté et corrigé pendant cette
> vérification : la ligne fantôme "Scène 21" (ancien numero=23,
> supprimée en base la session précédente mais jamais retirée de
> l'Excel) a été recréée par un import — retirée cette fois de l'Excel
> lui-même (feuilles Chapitres et Lexique) en plus de la base, pour que
> le problème ne se reproduise plus.
>
> Vérifié : `npm run importer` exécuté 3 fois de suite sans croissance
> des compteurs (34 chapitres, 73 sujets à chaque fois), essentiel_fr/ar
> inchangé (19740/12104), captures Playwright (onglet Lieux : 2 lieux
> sans doublon ; Scène 13 : 3 sujets liés affichés ; liste des 22
> scènes sans doublon).
>
> **"Fiche de la scène" rendue vraiment scène par scène + Quiz ajouté
> pour les 21 scènes d'Antigone** — demandé explicitement par
> l'utilisateur ("Fiche de scene modifie la scene par scene ET FAIS
> LES QUIZS DANS TOUTS LES SCENES").
>
> - **Personnages scène par scène** : jusqu'ici, les 12 personnages
>   d'Antigone s'affichaient systématiquement sur chaque scène (aucune
>   liste dédiée, contrairement à La Boîte à Merveilles). Ajout de
>   `PERSONNAGES_PAR_SCENE_ANTIGONE` (`lib/personnagesParChapitre.ts`,
>   même mécanisme que pour La Boîte à Merveilles) : chaque scène
>   n'affiche désormais que les personnages réellement présents/parlants
>   d'après son résumé (ex. "Scène 5 : Antigone et Hémon" → seulement
>   Antigone et Hémon, au lieu de 12). "Le mythe d'Œdipe" (numero=1)
>   n'a pas cette liste : aucun des personnages de la table n'y
>   "apparaît" au sens de ce mécanisme.
> - **Quiz d'Antigone** : `lib/quizAntigone.ts`, 5 questions par scène
>   (numero 2 à 22, 105 questions), même format que le quiz de La Boîte
>   à Merveilles (`QuestionQuiz`) — branché via une nouvelle map
>   `QUIZ_PAR_SLUG` dans la page œuvre, remplaçant le quiz "réservé à
>   La Boîte à Merveilles pour l'instant". Chaque question est ancrée
>   dans le résumé de la scène (fourni par l'utilisateur) et/ou son
>   lexique déjà en base ; pas de quiz pour "Le mythe d'Œdipe", qui
>   n'est pas une scène de la pièce.
> - `OngletQuiz.tsx` rendu unité-aware ("Chapitre"/"Scène" selon
>   l'œuvre, voir lib/uniteChapitre.ts) : pastilles "Scène 1"…"Scène 21"
>   (le numéro de scène extrait du titre, jamais reconstruit à partir
>   de `numero` — même précaution que partout ailleurs sur Antigone),
>   en-tête de scène affichant directement le titre complet plutôt que
>   "Chapitre N — titre" pour éviter un doublon avec le numéro déjà
>   dans le titre.
> - ⚠️ Contenu des 105 questions entièrement rédigé par Claude — à
>   faire relire par un enseignant avant usage en classe, même réserve
>   que le quiz de La Boîte à Merveilles.
> - **Bogue découvert en cours de route, signalé à l'utilisateur avant
>   correction** : les 15 mots de lexique du Prologue/Scène 1 étaient
>   dupliqués en base (une fois sur "Le mythe d'Œdipe" numero=1, une
>   fois sur "Scène 1 : Le Prologue" numero=2 — 114 mots au total pour
>   Antigone au lieu de 99), sans doute un reliquat d'une session
>   précédente où ces mots avaient été "déplacés" vers le Prologue sans
>   que les lignes d'origine soient retirées de la feuille Excel. Après
>   confirmation explicite de l'utilisateur, les 15 lignes en trop
>   (rattachées à numero=1) ont été supprimées directement en base (clé
>   `service_role`) ; total antigone revérifié à 99. "Le mythe d'Œdipe"
>   n'a donc plus de lexique propre, cohérent avec le fait qu'il n'a pas
>   de bloc "Fiche de la scène" (voir RecitContexte.tsx).
>
> Vérifié : `npx tsc --noEmit` sans erreur, quiz de La Boîte à
> Merveilles inchangé (captures Playwright), Scène 5 d'Antigone
> n'affiche plus que 2 personnages (Antigone, Hémon), 21 pastilles de
> scènes présentes dans l'onglet Quiz d'Antigone, contenu vérifié sur
> Scène 1 et Scène 6.
>
> **Les 21 vraies scènes d'Antigone (résumés scène par scène) ajoutées,
> remplaçant les 21 coquilles vides précédentes** — texte intégralement
> fourni par l'utilisateur (collé dans le chat, "listen commence les
> scene des la prologue scene 1 et voici resumé de scene par scene"),
> pas de contenu inventé par Claude sur le fond de chaque scène.
>
> - **Renumérotation complète** : dans le texte fourni par
>   l'utilisateur, "Scène 1" désigne le Prologue lui-même, et la
>   numérotation va jusqu'à "Scène 21" (l'Épilogue) — 21 scènes au
>   total, sans "Prologue" comptée à part. Cela ne correspondait plus à
>   la structure précédente (1 "Prologue" séparé + 21 "Scène 1" à
>   "Scène 21", soit 22 scènes). La structure en base a donc été
>   ré-alignée : l'ancien chapitre "Prologue" (numero=2) est devenu
>   "Scène 1 : Le Prologue", et chaque ancienne "Scène N" (numero=N+2,
>   coquille vide) a reçu le vrai contenu de la "Scène N+1" de
>   l'utilisateur (numero=N+2 → titre "Scène N+1 : ..."). "Le mythe
>   d'Œdipe" (numero=1, non concerné par cette numérotation) est
>   inchangé. L'ancien numero=23 (ex-"Scène 21", coquille vide devenue
>   sans équivalent dans la nouvelle numérotation à 21 cases) faisait
>   doublon avec la nouvelle "Scène 21 : L'Épilogue" (numero=22) : son
>   lexique (indifférent, reprendre, banal, un épilogue — 4 mots) a été
>   réattaché à numero=22 avant suppression de la ligne, aucune perte de
>   contenu. Suppression confirmée explicitement par l'utilisateur avant
>   exécution (l'outil bloque les suppressions en base sans validation).
> - **Titres** conservent désormais le sous-titre descriptif fourni par
>   l'utilisateur (ex. "Scène 5 : Antigone et Hémon") au lieu d'un
>   simple "Scène N" — plus informatif sur les cartes de la liste.
> - **Correction du lieu "La grotte"** : était rattaché à l'ancienne
>   "Scène 16" (numero=18, choix approximatif faute de vrai contenu à
>   l'époque). D'après le texte réel, c'est la scène "Antigone part vers
>   la mort" (nouvelle Scène 19, numero=20) qui évoque la grotte où elle
>   est emmurée vivante — le lieu a été déplacé en conséquence.
> - ⚠️ Traductions arabes (`resume_ar`, `titre_ar`) des 21 scènes
>   entièrement rédigées par Claude à partir du texte français fourni —
>   à faire relire par un enseignant avant usage en classe. Le texte
>   français source, lui, est celui de l'utilisateur, non modifié sur le
>   fond (juste redécoupé en phrases pour `resume_court_fr`).
> - Non traité dans cette passe (hors périmètre de la demande) : le
>   lexique des 21 scènes (84 mots) avait été distribué plus tôt dans la
>   session sur une reconstitution approximative de l'intrigue, pas sur
>   un vrai texte scène par scène — cette réserve reste valable
>   maintenant que le vrai contenu existe ; une repasse de cohérence
>   lexique ↔ scène réelle serait utile mais n'a pas été demandée ici.
>
> Ajouté via le pipeline Excel habituel (feuille Chapitres, `npm run
> importer`, 0 erreur ; essentiel_fr/ar vérifiés avant/après : total
> résumés passé de 21 nulls à 1 côté FR et de 22 à 2 côté AR, cohérent
> avec le remplissage des 21 scènes moins celle qui avait déjà un
> résumé). Suppression de l'ancien numero=23 et réattachement de son
> lexique faits directement en base (clé `service_role`, hors pipeline
> Excel qui ne fait que de l'upsert, jamais de suppression). Vérifié
> visuellement (captures Playwright) : liste des 22 scènes sans doublon,
> Scène 1 (contenu réel + lexique/personnages/lieu intacts), Scène 19
> (lieu "La grotte" bien présent), Scène 21 : L'Épilogue (dernière
> scène, pas de lien "suivant", lexique fusionné à 8 mots).
>
> **Lieux et 30 sujets d'analyse ajoutés pour Antigone** — demandé
> explicitement par l'utilisateur ("fait les lieux et les sujets d
> analyses 30 sujets").
>
> - **Lieux** : d'abord ajoutés au nombre de 7 — le lieu de la pièce
>   elle-même (le palais de Créon, sur "Prologue") complété par les
>   lieux évoqués dans le récit mythologique (Thèbes, Corinthe, Delphes,
>   la route de Thèbes, Athènes, rattachés à "Le mythe d'Œdipe") et "La
>   grotte" (Scène 16). **Corrigé aussitôt après** par l'utilisateur
>   ("le lieux que d antigone pas mythe d oedipe") : les 5 lieux du
>   mythe retirés, il ne reste que les 2 vrais lieux de la pièce
>   elle-même — le palais de Créon (Prologue) et la grotte (Scène 16),
>   cohérent avec l'unité de lieu classique du théâtre. Les badges de
>   coin affichent "PROLOGUE"/"SCÈNE 16" en majuscules (voir
>   `libelleChapitreCourt`, déjà en place) plutôt que "CH. N".
> - **30 sujets d'analyse**, tous rattachés à l'œuvre entière (pas à une
>   scène précise, faute de texte scène par scène fiable pour les
>   ancrer plus finement — même réserve que pour le lexique des 21
>   scènes) : env. moitié "analyse" (personnages — Antigone, Créon,
>   Ismène, Hémon, le Chœur, la Nourrice, Eurydice, les gardes, le
>   Messager —, scènes clés comme la confrontation Antigone-Créon ou le
>   dénouement) et moitié "argumentation" (la loi contre la conscience,
>   la raison d'État, le contexte de l'Occupation de 1944, la
>   réécriture du mythe...), toutes explicitement ancrées dans des
>   personnages/scènes réels de la pièce — même exigence que pour les
>   sujets d'argumentation de La Boîte à Merveilles corrigés plus tôt
>   dans le projet, pas de questions de société génériques.
>
> ⚠️ Contenu entièrement rédigé par Claude (lieux du mythe déduits du
> texte fourni par l'utilisateur, sujets entièrement composés par
> Claude à partir de connaissances généralistes sur la pièce) — à faire
> relire par un enseignant avant usage en classe.
>
> Ajouté via le pipeline Excel habituel (colonne `lieux` de la feuille
> Chapitres, feuille Sujets, puis `npm run importer`, 0 erreur,
> essentiel_fr/ar des 3 œuvres vérifiés inchangés). Vérifié : 30 sujets
> confirmés en base par `oeuvre_id` (aucun doublon de titre), capture
> Playwright des deux onglets.
>
> **"Le mythe d'Œdipe" encadré en bleu** — trois demandes successives
> de l'utilisateur : "encadre le mythe d oedipe comme rectangle et
> ajoute des tres [traits] noir", puis "pas forcement rectangle mais
> arrondis" (coins arrondis, comme le reste du site), puis "remplace dk
> le noir avec le bleu" (le noir jugé trop dur, remplacé par le bleu).
> `RecitContexte.tsx` : coins arrondis (`rounded-lg`) et bordure bleue
> épaisse (`border-2 border-primary`, aussi entre le récit et les
> "Mots-clés"), pour un effet "encadré" de manuel scolaire qui distingue
> ce bloc du reste de la page. Contrairement au noir de l'étape
> intermédiaire (une vraie exception à la palette), le bleu final
> réutilise le token `--color-primary` déjà utilisé partout ailleurs sur
> le site — juste plus épais que le `border-border` habituel. Vérifié
> par capture Playwright.
>
> **"Le mythe d'Œdipe" : nouvelle forme de contenu, ni résumé ni
> "Fiche de la scène"** — demandé en trois messages successifs par
> l'utilisateur : (1) "dans le mythe d oedipe enleve la fiche de scene
> fait que ca comme resumé de mythe d oedipe", suivi du texte intégral
> du mythe ; (2) correction immédiate — "non le mythe c pas comme un
> resumé et en plus fais le juste en francais et avec unee autre forme
> different de resumé parce que c est pas un resumé" ; (3) "avec des
> mots cles et des explicatif pour le mythe d oedipe". Le premier essai
> (texte dans `fiches.resume_fr`/`resume_ar`, rendu via `FicheChapitre`/
> `CarteBilingue` — les deux cartes "Résumé"/"ملخص") a donc été
> explicitement rejeté et remplacé.
>
> - **Nouveau composant `RecitContexte.tsx`** : simples paragraphes de
>   lecture en français uniquement (pas de carte bilingue, pas de
>   troncature "Lire la suite"), suivis d'une section "Mots-clés" (8
>   termes + explication : oracle, prophétie, Thèbes, Corinthe, le
>   Sphinx, Delphes, la peste, se crever les yeux). Le texte reste
>   stocké dans `fiches.resume_fr` comme n'importe quel résumé de
>   chapitre (pas de colonne dédiée pour ce genre de contenu) — seul le
>   RENDU change, `resume_ar` n'est délibérément plus rempli (`null`)
>   pour ce chapitre. Les mots-clés sont codés en dur dans la page
>   (`MOTS_CLES_MYTHE_OEDIPE`), pas dans `lexique` (ce sont des noms
>   propres/concepts, pas du vocabulaire du texte).
> - `/oeuvres/[slug]/[numero]/page.tsx` : nouveau garde-fou
>   `estMytheOedipe` (`slug === "antigone" && numero === 1`) qui bascule
>   entre `RecitContexte` (ce chapitre) et `FicheChapitre`/
>   `FicheChapitreApercu` (tous les autres) — codé en dur comme le reste
>   des exceptions par item sur cette page, faute de colonne dédiée en
>   base. Les 21 "Scène N" et "Prologue" gardent le format habituel.
> - Texte français : **fourni intégralement par l'utilisateur**, juste
>   reformaté en paragraphes propres (le collage d'origine coupait les
>   phrases au milieu des lignes) — aucune réserve "à faire relire" sur
>   ce texte-là. Les 8 mots-clés/explications et leurs libellés, en
>   revanche, sont **rédigés par Claude** — ⚠️ à faire relire.
>
> Vérifié : `tsc`/`eslint` propres, import sans erreur, essentiel_fr/ar
> des 3 œuvres inchangés, `resume_ar` confirmé `null` en base après
> import, capture Playwright confirmant l'absence de "ملخص" (0
> occurrence) et l'affichage correct des paragraphes + mots-clés.
>
> **Badges "CH. N" corrigés en "SCÈNE N" pour Antigone** — demandé
> explicitement par l'utilisateur ("dans lexique c ecrit chp pas
> scene"). Le tour précédent avait renommé le mot "Chapitre" en "Scène"
> dans les titres/en-têtes, mais pas dans les petits badges de coin
> (lexique, lieux), restés en "CH. N" codé en dur.
>
> - `lib/uniteChapitre.ts` : deux nouvelles fonctions centralisées,
>   `libelleChapitre` (forme longue, "Chapitre 4" ou "Scène 3"/
>   "Prologue") et `libelleChapitreCourt` (forme badge, "CH. 4" ou
>   "SCÈNE 3"/"PROLOGUE" en majuscules) — remplacent la logique
>   dupliquée à la main dans `/oeuvres/[slug]/[numero]/page.tsx`.
>   **Important** : pour Antigone, le badge n'affiche jamais "SC.
>   {numero de rangée en base}" mais le `titre_fr` réel de la scène —
>   sinon même doublon incohérent que le bug déjà corrigé sur les
>   cartes de chapitre (le numéro de rangée 1-23 ne correspond pas au
>   numéro de la scène à cause du Mythe d'Œdipe/Prologue en tête).
> - `OngletLexique.tsx`, `OngletPersonnages.tsx` et `OngletLieux.tsx`
>   reçoivent maintenant `slug` + `chapitreParId: Map<string, Chapitre>`
>   (objet chapitre complet, plus seulement son numéro) pour pouvoir
>   calculer ce libellé ; `OngletLieux.tsx` n'avait même pas encore
>   `slug` avant ce tour (pas signalé par l'utilisateur, corrigé au
>   passage par cohérence — mêmes badges de coin que le lexique).
>
> Vérifié : `tsc`/`eslint` propres, capture Playwright confirmant
> "SCÈNE 3"/"SCÈNE 19"/"SCÈNE 7" sur le lexique d'Antigone et
> "PROLOGUE" sur ses lieux, La Boîte à Merveilles revérifiée inchangée
> ("CH. 5"/"CH. 9"/"CH. 3" toujours affichés normalement).
>
> **Lexique des 21 scènes d'Antigone complété** — demandé explicitement
> par l'utilisateur ("dans lexique ajoute toutes les lexiques des
> scenes"). 84 nouveaux mots ajoutés (4 par scène, "Scène 1" à
> "Scène 21"), portant le lexique total d'Antigone à 99 mots (15 sur
> "Prologue" + 84 sur les scènes) et celui du site à 205.
>
> ⚠️ **Réserve plus forte que d'habitude à signaler** : contrairement au
> lexique de La Boîte à Merveilles (ancré sur des résumés de chapitres
> écrits à partir des points fournis par l'utilisateur) ou même du
> Prologue d'Antigone (ancré sur le résumé de la pièce déjà rédigé),
> ces 84 mots n'ont **aucun texte de scène réel auquel se rattacher** :
> comme déjà noté, la pièce d'Anouilh n'est pas officiellement décodée
> en 21 scènes numérotées, et les 21 "Scène N" créées au tour précédent
> sont des coquilles vides sans contenu. Chaque groupe de 4 mots a donc
> été choisi par Claude à partir d'une reconstitution approximative,
> scène par scène, du déroulement bien connu de la pièce (retour
> nocturne d'Antigone, dispute avec Ismène, tête-à-tête avec Créon,
> dénouement...), pas d'un texte source consulté ligne par ligne. Les
> mots eux-mêmes sont réels et pertinents pour le registre de la pièce,
> mais leur répartition entre les 21 scènes est une approximation, pas
> un fait vérifiable. Encore plus que d'habitude : à faire relire avant
> usage en classe, et à corriger/réattribuer une fois le texte réel de
> chaque scène disponible.
>
> Ajouté via le pipeline Excel habituel (feuille Lexique, chapitre_numero
> décalé de 2 comme pour le reste d'Antigone). Vérifié : 0 doublon (ni
> entre les 84 nouveaux mots, ni avec les 15 déjà présents), import sans
> erreur (205 mots au total), essentiel_fr/ar des 3 œuvres inchangés,
> capture Playwright (liste complète triée alphabétiquement + une scène
> précise montrant exactement ses 4 mots).
>
> **Antigone restructurée en 23 "scènes"** — demandé explicitement par
> l'utilisateur ("dans antigone change le nom de chapitre par scene et
> dans la case des scene comment par mythe d oedipe apres prologue
> apres de 1 scene jusque 21 scene").
>
> - **Libellé "Chapitre" → "Scène" pour Antigone uniquement**, partout
>   sur le site : nouveau `lib/uniteChapitre.ts`
>   (`libelleUniteChapitre(slug)`, mappage codé en dur par slug — même
>   contournement que `ROLES_PRINCIPAUX`, pas de colonne dédiée en
>   base). Appliqué dans `OngletsOeuvre.tsx` (tab), `OngletResume.tsx`
>   (titre/sous-titre), `SommaireChapitres.tsx` (cartes),
>   `CarteOeuvre.tsx` (carte /oeuvres), `OngletPersonnages.tsx`
>   ("Apparition : Scène N"), `FicheChapitreApercu.tsx` ("Fiche de la
>   scène", accord de genre géré via `duUnite`), et la page
>   `/oeuvres/[slug]/[numero]` (fil d'Ariane, pastille d'en-tête,
>   navigation précédent/suivant). Le Quiz et `BarreProgression`/
>   `BlocProgression` (tableau de bord) n'ont pas été traités — pas de
>   contenu Quiz pour Antigone actuellement, moindre priorité pour le
>   tableau de bord ; à faire si besoin confirmé.
> - **23 "scènes" créées** pour Antigone (`data/contenu-plateforme-bac.xlsx`,
>   feuille Chapitres) : "Le mythe d'Œdipe" (contexte mythologique,
>   contenu bref et factuel rédigé par Claude), "Prologue" (récupère le
>   résumé de la pièce écrit au tour précédent), puis "Scène 1" à
>   "Scène 21" (coquilles vides, statut "brouillon" — aucun contenu
>   scène par scène fourni par l'utilisateur pour l'instant). Le
>   lexique (15 mots) a suivi le résumé vers "Prologue" plutôt que de
>   rester sur "Le mythe d'Œdipe", qui n'est pas un extrait du texte de
>   la pièce.
> - ⚠️ **Bug de doublon repéré et corrigé en cours de route** : les
>   cartes/en-têtes affichaient à la fois "{unité} {numero}" ET
>   `titre_fr`, ce qui donnait des doublons incohérents dès que
>   `titre_fr` contient lui-même l'ordinal (ex. carte "Scène 3" avec
>   pour sous-titre "Scène 1", le numéro d'ordre en base 1-23 ne
>   correspondant plus au numéro de la scène elle-même à cause des deux
>   sections préliminaires). Corrigé par un nouveau champ
>   `numeroDejaDansTitre` sur `LibelleUniteChapitre` : quand vrai (
>   Antigone), les cartes/pastilles/liens précédent-suivant n'affichent
>   plus que `titre_fr`, sans préfixe ordinal redondant. Repéré et
>   vérifié par capture d'écran avant/après.
>
> Vérifié : `tsc`/`eslint` propres sur tous les fichiers touchés, import
> sans erreur (35 chapitres au total, essentiel_fr/ar des 3 œuvres
> inchangés), captures Playwright de la liste des 23 scènes, de la page
> "Prologue" et d'une "Scène 3" ; La Boîte à Merveilles revérifiée
> inchangée (libellés "Chapitre" intacts).
>
> **Fiche de lecture, personnages et lexique d'Antigone ajoutés** —
> demandé explicitement par l'utilisateur ("fais moi fiche de lecture
> et personnage lexique d antigone").
>
> - **Fiche de lecture** : `lib/ficheLectureAntigone.ts`, même structure
>   que celle de La Boîte à Merveilles (carte d'identité, biographie de
>   Jean Anouilh en tableau, structure et composition, style et
>   écriture). `app/(public)/oeuvres/[slug]/page.tsx` utilise maintenant
>   une table `FICHES_LECTURE_PAR_SLUG` plutôt qu'un simple test
>   `slug === "boite-a-merveilles"`, pour accueillir plus facilement une
>   3e œuvre plus tard. ⚠️ Contenu rédigé par Claude à partir de
>   connaissances générales sur la pièce et son auteur — à faire relire.
> - **Personnages** (12 : 4 principaux — Antigone, Créon, Ismène,
>   Hémon — et 8 secondaires) et **lexique** (15 mots, vocabulaire de
>   la tragédie plutôt que régionalismes comme pour La Boîte à
>   Merveilles) ajoutés via le pipeline Excel habituel (feuilles
>   Personnages/Lexique de `data/contenu-plateforme-bac.xlsx` puis
>   `npm run importer`, 0 erreur, essentiel_fr/ar des 3 œuvres vérifiés
>   inchangés avant/après).
> - **`ROLES_PRINCIPAUX` étendu** (`OngletPersonnages.tsx`) : ce
>   `Set` codé en dur ne contenait que les libellés de rôle de La Boîte
>   à Merveilles ; les 4 rôles principaux d'Antigone y sont ajoutés.
>   Confirme la fragilité déjà documentée de cette solution de
>   contournement (pas de colonne dédiée en base) — toujours pas migré
>   faute d'accès à une vraie migration Supabase.
> - ⚠️ **Chapitre-anchor créé pour Antigone** : `lexique.chapitre_id` est
>   NOT NULL en base, donc un chapitre au moins était nécessaire pour y
>   attacher le lexique. La pièce n'étant pas vraiment découpée en
>   chapitres, un unique chapitre "pseudo" (numero 1, statut
>   "brouillon") a été créé, avec un résumé honnête qui explique ce
>   choix plutôt qu'un vrai découpage inventé.
> - ⚠️ **Bug réel trouvé et corrigé en cours de route** : sur la page
>   chapitre, `PERSONNAGES_PAR_CHAPITRE_BOITE_A_MERVEILLES[numero]` est
>   indexée par simple numéro, pas par œuvre+numéro. Le nouveau
>   "chapitre 1" d'Antigone récupérait donc par erreur la liste de
>   personnages du chapitre 1 de *La Boîte à Merveilles* (même numéro,
>   aucun nom en commun), ce qui vidait complètement le bloc
>   Personnages de sa Fiche du chapitre (repéré par capture d'écran).
>   Corrigé en `app/(public)/oeuvres/[slug]/[numero]/page.tsx` par un
>   garde-fou explicite `slug === "boite-a-merveilles"` avant d'utiliser
>   cette liste. Boîte à Merveilles chapitre 1 revérifié inchangé (12
>   personnages) après le correctif.
>
> Vérifié : `tsc`/`eslint` propres sur tous les fichiers touchés,
> captures Playwright de la Fiche de lecture, des Personnages, du
> Lexique et de la page du chapitre-anchor (avant et après le
> correctif du bug ci-dessus).
>
> **Couverture d'Antigone ajoutée** — demandé explicitement par
> l'utilisateur ("regarde la photo que j ai mis sur le fichier fais la
> sur la couverture de l oeuvre antigone"). La photo en question est
> une image déposée à la racine du dépôt ("ChatGPT Image 28 août 2026,
> 21_31_28.png", non commitée) : une illustration générée (pas une
> photo d'une personne réelle) d'une jeune femme en tenue grecque
> antique vue de dos, assise sur des ruines face à l'Acropole au
> crépuscule — même composition que la couverture existante de La
> Boîte à Merveilles (figure de dos face à la ville). Copiée vers
> `public/couvertures/antigone.png`, `oeuvres.couverture_url` mis à
> jour pour le slug `antigone` via une nouvelle migration
> (`20260901000000_couverture_antigone.sql`, même mécanisme que les
> deux couvertures précédentes) — appliquée en direct via la clé
> service_role (pas d'accès CLI/Postgres direct dans ce projet).
> Vérifié par capture Playwright sur la carte de /oeuvres et la
> bannière de /oeuvres/antigone : la femme et l'Acropole restent bien
> visibles avec le cadrage déjà en place (`bg-[center_74%]`), sans
> retouche nécessaire.
>
> **Exercices ajoutés au cours "L'énonciation"** (`/langue/enonciation`)
> — demandé explicitement par l'utilisateur, qui a collé le contenu
> intégral de 3 exercices ("ajoute partie exercice 1er lecon
> enonciation"). Section "IV. Exercices" ajoutée à la suite du contenu
> déjà présent dans `contenu_mdx` (feuille "Cours" de
> `data/contenu-plateforme-bac.xlsx`, ligne "enonciation"), ré-importée
> via `npm run importer` (0 erreur, essentiel_fr/ar des 3 œuvres
> vérifiés inchangés avant/après comme d'habitude). Contenu fourni
> intégralement par l'utilisateur, reformaté en Markdown (listes
> numérotées pour l'exercice 3) sans modification de fond — y compris
> une coquille apparente dans l'énoncé 5 ("L'ouvrit..." sans sujet),
> conservée telle quelle plutôt que corrigée silencieusement, pour ne
> pas altérer un contenu fourni par l'utilisateur sans confirmation.
> `app/(public)/langue/[slug]/page.tsx` distingue maintenant `<ol>`
> (listes numérotées, `list-decimal`) de `<ul>` (listes à puces,
> `list-disc`) via la prop `components` de `ReactMarkdown`.
>
> ⚠️ **Nouvelle session parallèle détectée sur `/langue/[slug]`**,
> repérée en relisant le fichier juste après le réimport ci-dessus : il
> a été considérablement enrichi entre-temps par une autre session
> (barre d'onglets Cours/Exercices/Quiz via un nouveau composant
> `OngletsLecon`, composants `Exercices*`/`Quiz*` dédiés par leçon,
> `remark-gfm`) — pas touché ni commité par cette session-ci (les
> fichiers concernés, dont `package.json`/`package-lock.json` modifiés
> par l'ajout de `remark-gfm`, restent non indexés pour laisser l'autre
> session commiter son propre travail). À surveiller : la section "IV.
> Exercices" ajoutée ci-dessus dans `contenu_mdx` (affichée dans
> l'onglet "Cours") pourrait faire doublon avec le nouveau composant
> `ExercicesEnonciation` (onglet "Exercices" dédié) — pas résolu dans
> cette session, l'utilisateur n'a pas signalé ce doublon.
>
> **Page `/langue` reconstruite, table `cours` alimentée pour la
> première fois** — demandé explicitement par l'utilisateur ("regarde
> sur le fichier madrassti et fais moi comme ca dans la partie de
> langue", suivi du texte intégral d'une leçon sur l'énonciation avec
> "Ajoute ce lecon sur la partie langue dans 1er cours l enonciation").
>
> ⚠️ **Session parallèle détectée à nouveau** (comme déjà signalé plus
> tôt dans le projet pour OngletLieux/OngletSujets) : en ouvrant
> `app/(public)/langue/page.tsx` pour la modifier, son contenu n'était
> plus le placeholder "Bientôt disponible" laissé par cette session
> mais une page complète (bandeau, titre, grille de 12 leçons) écrite
> entre-temps par une autre session, à partir d'une maquette fournie
> par l'utilisateur (image "Capture d'écran 2026-08-26 162006.png" à la
> racine du dépôt, non commitée). Deux images "ChatGPT Image..."
> supplémentaires, également non commitées, montrent la maquette plus
> en détail (bandeau "FRANÇAIS – 1ÈRE BAC", titre bicolore, grille à 6
> colonnes avec ruban numéroté et icône par leçon) — probablement ce
> que visait "le fichier madrassti" de l'utilisateur. Conservé et
> complété plutôt qu'écrasé, conformément à la consigne du harnais de
> ne pas annuler le travail d'une autre session sans raison : la liste
> des 12 leçons (titres + accroches) de cette autre session est
> reprise telle quelle, avec `slug` et icône ajoutés pour chacune.
>
> - **`cours` alimentée pour la première fois** : la table existait en
>   base depuis une migration antérieure mais aucune page ni le script
>   d'import ne la lisait/écrivait encore. Ajout d'une feuille "Cours"
>   à `data/contenu-plateforme-bac.xlsx` (colonnes slug, titre,
>   categorie, contenu_mdx, filiere, ordre) et d'une section "Cours"
>   dans `scripts/importer.ts` (upsert sur `slug`). Une seule ligne
>   importée pour l'instant : "L'énonciation" (categorie "langue",
>   ordre 1), **contenu fourni intégralement par l'utilisateur** (collé
>   dans le chat), reformaté en Markdown sans modification de fond —
>   pas de réserve "à faire relire" ici, contrairement au lexique/
>   sujets/quiz/fiche de lecture qui sont rédigés par Claude. Vérifié
>   avant/après l'import : `essentiel_fr`/`essentiel_ar` des 3 œuvres
>   inchangés (import idempotent, 0 erreur).
> - **`react-markdown` installé** (nouvelle dépendance) pour rendre
>   `contenu_mdx` : malgré son nom, cette colonne ne contient que du
>   Markdown simple pour l'instant (pas de JSX/composants embarqués) —
>   react-markdown suffit et évite d'exécuter du code arbitraire venu
>   des données, contrairement à un vrai pipeline MDX
>   (`next-mdx-remote`). Pas de plugin Tailwind Typography : chaque
>   élément Markdown est stylé explicitement via la prop `components`
>   de `ReactMarkdown` (`app/(public)/langue/[slug]/page.tsx`), comme
>   le reste du site qui n'utilise jamais de classes "prose" génériques.
> - `lib/supabase/contenu.ts` : `recupererCoursParCategorie(categorie,
>   filiere)` et `recupererCoursParSlug(slug)`, mêmes conventions que
>   les fonctions existantes.
> - `components/icones.tsx` : 10 nouvelles icônes (une par leçon non
>   déjà couverte par une icône existante — `IconeMasques`/`IconeLien`
>   réutilisées pour 2 des 12), reprises en version trait de la
>   maquette pour rester cohérentes avec le reste du site (aucune
>   icône du site n'est une illustration colorée).
> - `app/(public)/langue/page.tsx` : bandeau "FRANÇAIS – 1ÈRE BAC" +
>   titre bicolore + grille de 12 cartes numérotées. Seule la carte
>   "L'énonciation" est cliquable (vers `/langue/enonciation`) ; les 11
>   autres, dont le `slug` n'existe pas encore dans `cours`, affichent
>   un badge "Bientôt disponible" et ne sont pas des liens — même
>   convention que le reste du site pour le contenu pas encore prêt.
> - `app/(public)/langue/[slug]/page.tsx` (nouvelle route) : affiche un
>   cours, `notFound()` si le slug est inconnu — vérifié
>   (`/langue/champ-lexical` → 404, `/langue/enonciation` → 200).
>
> Vérifié : `tsc`/`eslint` propres sur tous les fichiers touchés,
> captures Playwright de la liste et du cours "L'énonciation".
>
> **Biographie de l'auteur transformée en tableau** sur l'onglet Fiche
> de lecture — demandé explicitement par l'utilisateur ("FAIS MOI LA
> BIOGRAPHIE DE L AUTEUR SOUS FORME D UN TABLEU ELEGANT"). Le paragraphe
> continu est remplacé par un vrai élément `<table>` (zébré, un `<tr>`
> par information) : Nom complet, Naissance, Décès, Profession,
> Mouvement, Œuvres principales, Distinction — `biographieAuteur`
> restructurée en objet (`BiographieAuteur`) plutôt qu'une chaîne dans
> `lib/ficheLectureBoiteAMerveilles.ts`. Le médaillon aux initiales
> (déjà en place, toujours pas de vraie photo disponible) reste à côté
> du tableau plutôt que du texte. Vérifié : `tsc`/`eslint` propres,
> capture Playwright.
>
> **Ordre des onglets de `/oeuvres/[slug]` changé** — demandé
> explicitement par l'utilisateur ("remets la fiche de lecture la
> premier et 2 chapitres") : Fiche de lecture passe en 1re position,
> Chapitres en 2e (`ONGLETS` dans `OngletsOeuvre.tsx`). L'onglet actif
> par défaut à l'arrivée sur la page reste Chapitres (`versCleOnglet`
> retombe toujours sur `"resume"`, seul l'ordre visuel dans la barre a
> changé, pas ce qui s'affiche par défaut) — vérifié par capture
> Playwright. `tsc`/`eslint` propres.
>
> **Onglet "Thèmes et enjeux" retiré de `/oeuvres/[slug]`** — le tour
> précédent avait mal compris "enleve la case du theme et enjeux" comme
> visant un bloc similaire à l'intérieur de la Fiche de lecture ; le
> message suivant de l'utilisateur ("nonnn la case de theme en jeux qui
> il faut enleber") a clarifié qu'il visait bien l'onglet lui-même,
> dans la barre principale de la page œuvre. Retiré de `ONGLETS` dans
> `OngletsOeuvre.tsx` (7 onglets restants : Chapitres, Fiche de lecture,
> Personnages, Lexique, Lieux, Sujets d'analyse, Quiz) et de la page
> (import, chargement des `fiches`, branche de rendu). Comme
> `CleOnglet` ne contient plus `"themes"`, `versCleOnglet` retombe
> maintenant sur "resume" même si `?onglet=themes` est forcé dans
> l'URL — vérifié par Playwright.
>
> `OngletThemes.tsx` et `recupererFichesOeuvre` (lib/supabase/contenu.ts)
> **pas supprimés**, juste débranchés et commentés comme orphelins :
> l'utilisateur n'a demandé le retrait que de l'onglet, pas la
> suppression du code — même précédent que `OngletsChapitre.tsx` retiré
> de la page chapitre plus tôt dans la session. Vérifié : `tsc`/`eslint`
> propres.
>
> **Fiche de lecture ajustée** — demandé explicitement par l'utilisateur
> ("enleve la case du theme et enjeux et 2/. sur la fiche de lecture
> enleve le resumé et pour la biographie mettre a coté la photo du l
> ecrivain ahmed safrioui") :
> - Bloc "Thèmes principaux" retiré (déjà son propre onglet complet).
> - Bloc "Résumé de l'œuvre" retiré (déjà sur l'onglet Chapitres).
> - Bloc "Biographie de l'auteur" : médaillon à côté du texte, comme
>   demandé. ⚠️ **Pas de vraie photo d'Ahmed Sefrioui** : recherchée via
>   WebSearch/WebFetch sur Wikipédia (fr/en), Wikidata (propriété image
>   P18) et Wikimedia Commons — introuvable sous une forme réutilisable,
>   l'article Wikipédia français est même explicitement marqué "à
>   illustrer" (donc Wikipédia elle-même n'en a pas). Un médaillon aux
>   initiales ("AS"), avec le même style doré que les médaillons de
>   personnages (`initiales()`/accent doré de `OngletPersonnages.tsx`),
>   tient la place d'un portrait plutôt qu'une image fabriquée ou une
>   photo non vérifiée trouvée au hasard en ligne. Si une vraie photo
>   est fournie par l'utilisateur, la mettre dans `public/` (même
>   logique que `public/couvertures/`) et l'afficher via `next/image` à
>   la place du médaillon dans `BlocBiographie` (`OngletFicheLecture.tsx`).
> Vérifié : `tsc`/`eslint` propres, capture Playwright.
>
> **Onglet "Fiche de lecture" ajouté sur `/oeuvres/[slug]`** — demandé
> explicitement par l'utilisateur ("dans la partie de oeuvre boite a
> merveilles ajoute moi une partie de fiche de lecture"). Nouvelle
> entrée dans la barre d'onglets (`OngletsOeuvre.tsx`, entre Chapitres
> et Personnages, icône `IconeInfo`), contenu dans `OngletFicheLecture.tsx`
> + `lib/ficheLectureBoiteAMerveilles.ts` : carte d'identité (auteur,
> genre, date de publication, éditeur, mouvement, narrateur, cadre
> spatio-temporel, structure, registre), rappel du résumé (réutilise
> `oeuvre.essentiel_fr`, pas de duplication du texte bilingue déjà
> présent sur l'onglet Chapitres), biographie d'Ahmed Sefrioui,
> structure et composition du roman, thèmes principaux (avec lien vers
> l'onglet Thèmes et enjeux pour le détail chapitre par chapitre), style
> et écriture. ⚠️ **Contenu entièrement rédigé par Claude** (repères de
> publication, biographie, analyse du style...), pas fourni par
> l'utilisateur — à faire relire par un enseignant avant usage en classe
> (même réserve que le lexique/les sujets/le quiz). Stocké en dur en
> TypeScript plutôt qu'en base, même contournement que
> `lib/quizBoiteAMerveilles.ts`/`lib/personnagesParChapitre.ts` :
> `oeuvres.biographie_fr`/`biographie_ar` existent bien en base mais ne
> couvrent qu'une partie de cette fiche (aucune colonne pour le genre,
> le mouvement, le narrateur, la structure ou le style) — tout regroupé
> ici plutôt que réparti entre base et fichier TS. Réservé au slug
> `boite-a-merveilles` (comme le quiz) ; Antigone et Le Dernier Jour
> d'un Condamné affichent "Bientôt disponible" sur cet onglet.
> Composant Serveur (aucune interactivité). Vérifié : `tsc`/`eslint`
> propres, captures Playwright des deux cas (contenu réel et
> placeholder).
>
> **Nom du site changé en "STUDYERA"** (logo du header + `<title>`) —
> demandé explicitement par l'utilisateur ("change le nom avec
> STUDYERA"), envoyé juste après avoir demandé le lien "Langues" (voir
> ci-dessous), en plein milieu du tour. Deux occurrences trouvées et
> changées : le texte du logo dans `BarreNavigation.tsx` (était
> "Français 1BAC" — la ligne "Révisez · Comprenez · Progressez"
> en dessous n'a pas changé, c'est une accroche, pas le nom) et
> `metadata.title`/`metadata.description` dans `app/layout.tsx` (étaient
> "MADRASTI"). Le nom interne du dépôt (`package.json` "name": "madrasti",
> jamais visible par un visiteur) et les mentions dans `ETAT.md`/
> `PROJECT_CHARTER.md` (journal de bord, pas de l'UI) n'ont pas été
> touchés — pas ce que "le nom" du site désigne.
>
> **Lien "Langues" ajouté à la nav principale**, à côté d'Accueil/
> Œuvres/Correcteur IA — demandé explicitement par l'utilisateur.
> Pointe vers `/langue` (route déjà créée par une session antérieure,
> `app/(public)/langue/page.tsx`, jusqu'ici orpheline — accessible par
> URL mais reliée nulle part dans la nav ; contenu toujours "Bientôt
> disponible", son h1 a juste été aligné sur "Langues" au pluriel pour
> matcher le libellé du lien).
>
> ⚠️ **Bug de responsive découvert et corrigé en ajoutant ce 6e lien** :
> mesuré avec Playwright (balayage de largeurs de viewport), la barre de
> nav desktop (logo + 6 liens + boutons de connexion) a besoin d'environ
> 1220px pour tenir sur une ligne sans déborder ; en dessous, faute de
> `flex-wrap`, le contenu débordait du body et le bouton "S'inscrire"
> sortait de l'écran — déjà limite avant l'ajout de "Langues" (~1090px
> nécessaires avec 5 liens), mais le point de bascule desktop/mobile de
> `BarreNavigation` était réglé sur `md` (768px), donc rien ne prenait le
> relais entre 768 et ~1220px. Corrigé en reculant ce point de bascule à
> `xl` (1280px, avec de la marge) : en dessous, c'est maintenant le menu
> `<details>` (déjà existant) qui prend le relais.
>
> En testant ce menu mobile à plus de largeurs qu'avant (auparavant
> seulement testé sous 768px, désormais visible jusqu'à 1280px), un
> **second bug préexistant** est apparu : le panneau déroulant du menu
> utilisait `inset-x-0` sur un parent `<details className="relative">`
> dont la propre boîte ne fait que la largeur du bouton hamburger — le
> panneau se retrouvait donc coincé dans une colonne de ~40px de large,
> son contenu débordant hors de l'écran (vérifié aussi présent à 375px,
> donc déjà cassé sur mobile avant cette session, juste jamais repéré).
> Corrigé en retirant `relative` du `<details>` : `<header>` étant déjà
> `sticky` (donc déjà positionné), c'est lui qui sert maintenant de
> référence, ce qui donne un panneau pleine largeur comme visiblement
> prévu par le design (`border-b`, `shadow-sm`, fond plein).
>
> Les deux bugs vérifiés par capture d'écran Playwright avant/après, sur
> tout un balayage de largeurs (375 à 1920px) : plus aucun débordement
> horizontal, menu déroulant pleine largeur à 375px comme à 1024px.
>
> **Onglets "Thèmes et enjeux" et "Quiz" ajoutés sur `/oeuvres/[slug]`**
> — demandé explicitement par l'utilisateur ("ajoute les themes en jeux
> et une partie de quiz dans la barre").
>
> - **Thèmes et enjeux** (`OngletThemes.tsx`) : plus un placeholder.
>   Agrège `fiches.themes.principal` + `.secondaires` de tous les
>   chapitres de l'œuvre (nouvelle fonction `recupererFichesOeuvre` dans
>   `lib/supabase/contenu.ts`, même limite que `recupererLexiqueOeuvre` —
>   pas de colonne `oeuvre_id` directe sur `fiches`, on passe par la
>   liste des chapitres déjà chargée par la page). Dédoublonné par texte
>   exact, avec badges "Ch. N" listant tous les chapitres où un même
>   thème apparaît (ex. "La solidarité féminine" → Ch. 2, 3, 8). Design
>   identique à `OngletLieux`/`OngletPersonnages` (carte icône + titre +
>   badges), pas de nouveau fichier de référence pour cet onglet — 42
>   thèmes distincts obtenus à partir des fiches déjà rédigées les
>   sessions précédentes, rien de nouveau à faire relire ici.
> - **Quiz** (`OngletQuiz.tsx` + `lib/quizBoiteAMerveilles.ts`) :
>   organisé **chapitre par chapitre**, **15** questions à choix
>   multiples (4 réponses) par chapitre (1 à 12, **180 au total**) —
>   deux demandes successives de l'utilisateur : d'abord "tu peux le
>   quiz tu le fais chap par chap faire 5 qst dans chaque chapter" (5
>   questions/chapitre), puis "15 qst dans chaque chapter" (passage à
>   15/chapitre, contenu antérieur conservé et complété plutôt que
>   remplacé). Une rangée de pastilles "Ch. 1"… "Ch. 12" (même style que
>   la barre d'onglets) sélectionne le chapitre affiché, avec un badge
>   "x / 15" sous la pastille dès qu'on a répondu à au moins une
>   question de ce chapitre-là — l'état de chaque chapitre (réponses +
>   score) est indépendant des autres ; le composant ne code en dur
>   aucun total, il s'adapte à la longueur réelle du tableau de
>   questions. Structure des 180 questions vérifiée par un script
>   (`tsx`) : 15 par chapitre, identifiants tous uniques, 4 choix
>   distincts et un index de bonne réponse valide sur chacune. ⚠️ **Contenu
>   entièrement rédigé par Claude**, à partir des résumés/points clés
>   déjà en base (table `fiches`, remplis les sessions précédentes à
>   partir des points fournis par l'utilisateur — chaque question est
>   donc vérifiable dans le résumé du chapitre correspondant, mais la
>   formulation question/réponses n'a pas été fournie par l'utilisateur)
>   — pas fourni par l'utilisateur, **à faire relire avant usage en
>   classe** (même réserve que pour le lexique/les sujets, qui n'ont pas
>   de colonne `statut` : la mise en garde ne peut vivre que dans ce
>   fichier et le chat, pas dans une colonne DB). Stocké en dur en
>   TypeScript plutôt qu'en base — un vrai quiz demanderait une nouvelle
>   table Supabase (questions/choix/bonne réponse), donc une migration ;
>   **impossible à appliquer directement dans ce projet** (pas de
>   connexion Postgres, seulement les clés REST anon/service_role), même
>   contournement que `lib/personnagesParChapitre.ts`. L'objet
>   `QUIZ_PAR_CHAPITRE` n'est utilisé **que pour le slug
>   `boite-a-merveilles`** (vérifié via `/oeuvres` : les 3 slugs sont
>   `antigone`, `boite-a-merveilles`, `dernier-jour-condamne`) —
>   Antigone et Le Dernier Jour d'un Condamné affichent "Bientôt
>   disponible" sur cet onglet, pas de contenu inventé qui leur serait
>   attribué par erreur.
>   Composant Client : une réponse par question, définitive une fois
>   cliquée (bonne réponse en vert `--color-validation`, mauvaise en
>   rouge `--color-erreur`/`bg-[#FDF0EF]` — mêmes couleurs et même
>   logique que le correcteur de copie dans `OngletSujets`, jamais
>   utilisées pour la navigation normale), score en direct par chapitre,
>   bouton "Recommencer ce chapitre". État perdu au rechargement de la
>   page (pas persisté, assumé comme un quiz d'entraînement rapide, pas
>   un test noté).
> - Nouvel onglet `IconeQuiz` ajouté à `components/icones.tsx`
>   (point d'interrogation dans un cercle) et entrée `quiz` ajoutée à
>   `ONGLETS` dans `OngletsOeuvre.tsx` — la barre compte maintenant 7
>   onglets.
> - Vérifié : `npx tsc --noEmit` et `npx eslint` propres sur tous les
>   fichiers touchés, captures d'écran Playwright des deux onglets (dont
>   l'interaction quiz : sélection d'une mauvaise réponse → surlignage
>   rouge + coche verte sur la bonne réponse + score mis à jour),
>   processus chrome.exe nettoyés après coup.
>
> **Résumé "essentiel" de la bannière œuvre masqué hors de l'onglet
> Chapitres** — message de l'utilisateur coupé en cours de frappe
> ("...sujets d'analyses" sans suite), clarifié via une question posée
> puis un message de suivi ("le resumé dispare") : sur
> `/oeuvres/[slug]`, une fois sur Personnages/Lexique/Lieux/Thèmes et
> enjeux/Sujets d'analyse, les deux cartes résumé fr/ar disparaissent de
> la bannière — seules l'image et le titre restent visibles. Nouveau
> prop `BanniereOeuvre` `afficherResume` (`true` par défaut, mis à
> `ongletActif === "resume"` par la page appelante). Le résumé reste
> affiché normalement sur l'onglet Chapitres. Vérifié par capture
> d'écran sur les deux cas.
>
> ⚠️ **Barre d'onglets de la page chapitre complètement retirée** (pas
> seulement rendue non-`sticky`, voir l'entrée juste en dessous — le
> premier correctif n'a pas suffi : l'utilisateur voulait la barre
> invisible partout sur la page chapitre, pas seulement non collée en
> scrollant). Une deuxième question posée a permis de trancher entre
> deux lectures possibles ("invisible sur Résumé seulement" vs.
> "invisible partout, quel que soit l'onglet") : confirmé, invisible
> partout. `OngletsChapitre` n'est plus rendu du tout sur
> `/oeuvres/[slug]/[numero]`.
>
> **Conséquence assumée, pas cachée** : il n'y a plus aucun moyen dans
> l'interface d'atteindre les vues dédiées Personnages/Lexique/Lieux/
> Sujets liés de cette page (`OngletPersonnages`, `LexiqueChapitre`,
> `LieuxChapitre`, `SujetsChapitre`, toujours montées dans le code,
> conditionnées à `?onglet=...` dans l'URL — juste plus aucun lien n'y
> mène). Pas grave dans l'immédiat : la "Fiche du chapitre"
> (`FicheChapitreApercu`, dans le contenu Résumé, seule vue restante)
> affiche déjà Personnages/Lexique/Lieux/Sujets liés du chapitre. Ce
> code devenu inaccessible via l'UI n'a pas été supprimé (l'utilisateur
> n'a pas demandé leur suppression, seulement celle de la barre) — à
> nettoyer si un jour on est sûr que ces vues ne servent plus jamais.
>
> **Barre d'onglets de la page chapitre n'est plus `sticky`** — demandé
> explicitement par l'utilisateur, formulation ambiguë clarifiée via une
> question posée (plusieurs éléments possibles : la barre d'onglets
> elle-même, les en-têtes "Résumé"/"ملخص" des cartes, ou la ligne des
> thèmes — confirmé : la barre d'onglets). Elle restait collée en haut
> de l'écran (`sticky top-[88px]`) pendant tout le défilement dans
> l'onglet Résumé, ce qui n'était pas voulu ; défile désormais
> normalement avec le reste de la page (`OngletsChapitre.tsx`). Vérifié
> par capture d'écran après un défilement profond dans le résumé — la
> barre a bien disparu du haut de l'écran, seule la nav globale du site
> reste fixe.
>
> **Lexique étoffé : 106 mots au total** (était 51). Demandé explicitement
> par l'utilisateur ("ajoute plus de lexique dans les chapitres") : les
> chapitres 2 à 12 n'avaient que 3 mots chacun (contre 18 pour le
> chapitre 1) — 5 mots de plus ajoutés par chapitre (55 au total),
> toujours choisis par Claude à partir du contenu déjà rédigé (résumés,
> points clés), pas fournis par l'utilisateur, donc dans le même esprit
> "à relire" que le reste du lexique. Chapitre 1 non touché (déjà riche,
> contenu d'origine). Ajouté via le pipeline Excel habituel (`npm run
> importer`, 0 erreur, `essentiel_fr`/`essentiel_ar` vérifiés intacts
> avant relance) ; vérifié par capture d'écran (chapitre 9 : 8 mots au
> lieu de 3).
>
> **Réagencement de la "Fiche du chapitre" (bug réel repéré par
> l'utilisateur, pas juste une préférence)** : en 2/3 (Personnages) +
> 1/3 (Lexique/Lieux/Sujets liés empilés), l'ajout du bloc Lexique la
> veille rendait la colonne de droite bien plus haute que Personnages,
> laissant un grand espace blanc vide sous cette dernière — visible sur
> le chapitre 1 (12 personnages sur 6 lignes en 2 colonnes vs. 18 mots
> de lexique + lieux + sujets empilés). Corrigé en réagençant plutôt
> qu'en camouflant : Personnages passe en pleine largeur sur sa propre
> rangée (grille à 2/3/4 colonnes selon l'écran, donc moins de lignes),
> Lexique/Lieux/Sujets liés passent en trois colonnes côte à côte en
> dessous au lieu d'empilées dans une colonne étroite. Vérifié par
> capture d'écran pleine page sur un chapitre à beaucoup de personnages
> (ch. 1, 12) et un chapitre à peu de personnages (ch. 3, 7) : plus
> d'espace vide dans les deux cas.
>
> **Bloc Lexique ajouté à la "Fiche du chapitre"** — demandé explicitement
> par l'utilisateur (absent du fichier de référence d'origine, qui ne
> montrait que Personnages/Lieux/Sujets liés). `FicheChapitreApercu.tsx`
> a maintenant une colonne de droite à trois blocs (Lexique, Lieux,
> Sujets liés) au lieu de deux. Contrairement à `personnages` (vue
> "toute l'œuvre" partout sauf la Fiche, filtrée au chapitre), le
> lexique était déjà nativement chapitre par chapitre en base (chaque
> mot n'appartient qu'à un seul chapitre) : `recupererLexiqueChapitre`,
> déjà utilisée par cette page, alimente directement ce nouveau bloc,
> aucune nouvelle requête ni donnée nécessaire. Vérifié par capture
> d'écran (chapitre 1 : 18 mots).
>
> **6 sujets thématiques ajoutés, fournis cette fois par l'utilisateur**
> (43 sujets au total, était 37) : "Peut-on être heureux malgré la
> pauvreté ?", "Le voisinage peut-il remplacer la famille ?", "La
> solitude est-elle toujours négative ?", "La solidarité entre les
> voisins est-elle importante dans la société ?", "La superstition", "Les
> croyances religieuses et populaires". Contrairement aux sujets
> précédents, **titre et consigne viennent du texte collé par
> l'utilisateur** (reconstitué à partir d'un tableau titre/consigne collé
> à plat, sans mise en forme — recomposé par Claude en paires cohérentes,
> mais le contenu textuel lui-même n'est pas inventé). Pas de `statut`
> "à relire" à ajouter ici : contrairement aux résumés/lexique/mes
> propres sujets, celui-ci n'est pas une traduction ni une invention de
> Claude.
>
> Volontairement **pas rattachés à un chapitre précis** (`chapitre_numero`
> laissé vide dans l'Excel) : ce sont des sujets thématiques sur
> l'ensemble du roman, pas des événements d'un chapitre particulier — ils
> apparaissent donc sur l'onglet "Sujets d'analyse" de la page œuvre,
> pas sur une page chapitre. Ajouté via le pipeline Excel habituel
> (`npm run importer`, 0 erreur, `essentiel_fr`/`essentiel_ar` vérifiés
> intacts avant relance) ; vérifié par capture d'écran.
>
> **Sujets "argumentation" recentrés sur l'œuvre** — demandé explicitement
> par l'utilisateur ("fait que les sujets de l'argumentation [soient]
> conforme[s] au[x] œuvres"). 11 des sujets de type `argumentation`
> (les 10 ajoutés cette session pour les chapitres 2-12, plus un déjà
> présent au chapitre 1) posaient une question de société généraliste,
> reliée à l'œuvre seulement par une phrase d'accroche ("Faut-il toujours
> dire la vérité à ses proches ?", "Le commerce honnête est-il toujours
> possible ?"...) — corrigées pour que la consigne exige explicitement un
> appui sur le texte ("en vous appuyant sur des éléments précis du
> chapitre/du texte") plutôt qu'une opinion générale déconnectée du
> roman. **Titres volontairement inchangés** (clé d'unicité de l'upsert
> `oeuvre_id+chapitre_id+titre` : les changer aurait créé des lignes en
> double au lieu de mettre à jour celles-ci) — seule la consigne a été
> réécrite. Vérifié en base (la consigne corrigée y est bien) et sur
> l'onglet Sujets de la page œuvre (qui affiche la consigne complète,
> contrairement à l'aperçu compact de la page chapitre qui n'affiche que
> le titre). Compteur `npm run importer` resté à 37 sujets après import
> (confirme l'absence de doublon).
>
> **Sur la page chapitre : personnages filtrés au chapitre + 3 sujets par
> chapitre partout.** Deux demandes explicites de l'utilisateur :
>
> 1. La "Fiche du chapitre" et l'onglet Personnages dédié de
>    `/oeuvres/[slug]/[numero]` n'affichent plus les 27 personnages de
>    l'œuvre mais seulement ceux réellement présents dans le chapitre
>    consulté — retour en arrière assumé sur le choix précédent
>    ("applique les personnages dans tous les chapitres"), qui laissait
>    trop de monde partout. Repose sur une liste saisie à la main,
>    `lib/personnagesParChapitre.ts` (`PERSONNAGES_PAR_CHAPITRE_
>    BOITE_A_MERVEILLES`), et non une vraie relation en base : la table
>    `personnages` n'a qu'un `chapitre_apparition_id` unique (première
>    apparition), pas de many-to-many chapitres↔personnages, et ajouter
>    une vraie colonne/table demanderait une migration Supabase à
>    appliquer manuellement (toujours en attente pour l'admin, voir plus
>    bas — pas un chemin fiable pour un besoin "tout de suite"). Cette
>    liste vient d'une vraie lecture des résumés déjà rédigés cette
>    session, pas d'une supposition ; à tenir à jour si leur contenu
>    change. L'onglet Personnages de la page **œuvre**, lui, continue
>    d'afficher les 27 (c'est le trombinoscope complet du roman).
> 2. 33 nouveaux sujets ajoutés (3 par chapitre, chapitres 2 à 12 — le
>    chapitre 1 avait déjà 4 sujets d'origine, non touché), soit 37 au
>    total. **Comme pour le lexique, l'utilisateur n'a fourni aucun sujet
>    tout fait** : titres, consignes (~150 mots à produire) et type
>    (analyse/argumentation) sont entièrement rédigés par Claude, à
>    partir des thèmes déjà établis pour chaque chapitre — à faire
>    relire par un enseignant avant usage en classe. Ajouté via le
>    pipeline Excel habituel (`npm run importer`, 0 erreur,
>    `essentiel_fr`/`essentiel_ar` vérifiés intacts avant relance).
>
> Vérifié par capture d'écran (chapitre 3 : personnages filtrés à 7 au
> lieu de 27 ; chapitre 9 : 3 sujets réels dans l'aperçu et l'onglet
> dédié).
>
> ⚠️ **Session parallèle de nouveau détectée** (comme au tout début de
> cette conversation) : en travaillant sur la "Fiche du chapitre"
> ci-dessous, `git status` a montré des fichiers déjà modifiés/créés que
> je n'avais pas touchés — `components/OngletLieux.tsx`,
> `components/OngletSujets.tsx` (nouveaux), `components/OngletsOeuvre.tsx`
> (6 onglets au lieu de 5, "Lieux" ajouté), `components/icones.tsx`
> (`IconeHorloge`/`IconeEtoile`/`IconeTexte`), `lib/supabase/contenu.ts`
> (`recupererSujetsOeuvre`), et `/oeuvres/[slug]/page.tsx` (onglets Lieux
> et Sujets d'analyse branchés sur de vraies données). Relu : cohérent,
> basé sur le même fichier de référence "Rubriques" que Personnages/
> Lexique, `tsc`/`eslint` passent sur l'ensemble — committé avec le reste
> plutôt que défait, conformément à la consigne de ne pas annuler un
> changement externe sans raison. Onglets de /oeuvres/[slug] désormais
> tous réels sauf "Thèmes et enjeux".
>
> **"Fiche du chapitre" refaite sur `/oeuvres/[slug]/[numero]`** :
> l'ancien aperçu Personnages/Lieux/Sujets liés à trois colonnes égales
> (`BlocApercu`) est remplacé par `FicheChapitreApercu.tsx`, une carte
> unique en 2/3 (Personnages, avec recherche) + 1/3 (Lieux en frise
> verticale, Sujets liés en petites cartes) — design repris du fichier de
> référence fourni par l'utilisateur ("Chapitre 3 — La Boîte à
> Merveilles"). Toujours les 27 personnages de l'œuvre (pas de filtrage,
> comme demandé précédemment), mais ceux introduits DANS le chapitre
> consulté (`chapitre_apparition_id === chapitre.id`) sont mis en avant
> par un avatar plein plutôt qu'à contour — repris du concept "cle" du
> fichier de référence. `components/PersonnagesChapitre.tsx`, devenu
> orphelin (plus aucun appelant), supprimé.
>
> **Lexique étendu aux chapitres 2 à 12 : 51 mots au total** (était 18,
> tous du chapitre 1 seul — l'onglet Lexique de la page œuvre affichait
> déjà "tout" mais n'avait en réalité que du contenu chapitre 1, faute de
> mots saisis ailleurs). Demandé explicitement par l'utilisateur ("fais
> tout lexique du l'œuvre pas que chap1"). ⚠️ Contrairement aux résumés
> de chapitres, l'utilisateur n'a fourni aucune liste de vocabulaire :
> **les 33 nouveaux mots (3 par chapitre) sont choisis et rédigés
> entièrement par Claude**, à partir de termes déjà présents dans les
> résumés/points clés déjà écrits cette session (ex. "la faillite",
> "un sanctuaire", "une marieuse", "un haïk"), pas transcrits d'une
> source externe. `statut` n'existe pas sur la table `lexique` (pas de
> mécanisme "à relire" comme pour `fiches`/`chapitres`) — à faire
> vérifier par un enseignant avant usage en classe, au même titre que
> les traductions arabes des résumés. Ajouté via le pipeline Excel
> habituel (`npm run importer`, 0 erreur, `essentiel_fr`/`essentiel_ar`
> vérifiés intacts avant relance) ; vérifié par capture d'écran (mot du
> chapitre 9 retrouvé par recherche).
>
> **Onglet "Lexique" de la page œuvre branché sur de vraies données**
> (`/oeuvres/[slug]?onglet=lexique` — jusqu'ici "Bientôt disponible").
> Nouveau composant `OngletLexique.tsx` (**Client Component** — état
> local pour la recherche et le mode révision, pas de round-trip
> serveur) + fonction `recupererLexiqueOeuvre` (`lib/supabase/contenu.ts`,
> passe par la liste des chapitres de l'œuvre car `lexique` n'a pas de
> colonne `oeuvre_id` directe). Mêmes carte/interactions que le fichier
> de référence "Rubriques — Le Dernier Jour d'un Condamné" déjà utilisé
> pour Personnages : mot souligné en pointillé doré à gauche, traduction
> arabe sur fond crème à droite avec badge "CH. N", recherche par mot ou
> définition, "Mode révision" qui floute les traductions (révélées au
> survol ou par clic, pour s'entraîner à deviner le sens avant de
> vérifier). Deux nouvelles icônes ajoutées à `icones.tsx` :
> `IconeRecherche` (loupe), `IconeOeil` (bascule mode révision).
>
> ⚠️ **Bug trouvé et corrigé pendant la vérification, pas signalé par
> l'utilisateur** : la recherche ne gérait pas les accents (taper
> "boite" ne trouvait pas "boîte") — comparaison naïve `toLowerCase()`
> sans normalisation Unicode. Corrigé avec un helper `normaliser()`
> (`.normalize("NFD")` + suppression des marques diacritiques
> combinantes U+0300–U+036F) appliqué à la fois à la requête et aux
> champs mot/définition. Repéré en testant la recherche avant de
> considérer l'onglet terminé, pas par lecture du code.
>
> L'onglet Lexique de la page **chapitre** (contrairement à Personnages,
> déjà unifié partout) reste chapitre-scopé (`LexiqueChapitre.tsx`,
> `recupererLexiqueChapitre`) — pas demandé au niveau chapitre cette
> fois, seulement au niveau œuvre.
>
> **Casting complet : 27 personnages** (était 13). Ajout des 14
> personnages secondaires mentionnés au fil des chapitres 2 à 12 mais
> absents de la feuille "Personnages" jusqu'ici — demandé explicitement
> ("ajoute tous les personnages principaux et secondaires") : Moulay
> Larbi, Abdelkader, Sidi Mohammed Ben Taher (le coiffeur défunt),
> Hamoussa, Abderrahman le coiffeur, la fille du coiffeur (2ᵉ épouse de
> Moulay Larbi), le courtier malhonnête du souk des bijoutiers, Sidi El
> Arafi (le voyant) et sa femme, Salama la marieuse, Zhour, l'oncle
> Othmane et Lalla Khadija (personnages d'un récit dans le récit, chez
> Rahma — n'apparaissent jamais directement), et Khadija la sœur de
> Rahma (mentionnée seulement, chapitre 3). Contenu (rôle, description,
> chapitre de première apparition — au sens large : y compris une simple
> mention pour les personnages qui n'apparaissent jamais physiquement)
> rédigé par Claude à partir des résumés de chapitres déjà écrits cette
> session, pas inventé. Ajouté via le pipeline Excel habituel (`npm run
> importer`, 0 erreur, `essentiel_fr`/`essentiel_ar` vérifiés intacts
> avant relance) ; vérifié par capture d'écran (27 cartes, tous les
> champs corrects).
>
> **Onglet "Personnages" branché sur de vraies données, partout**
> (page œuvre ET chaque page chapitre — jusqu'ici "Bientôt disponible" ou
> vide sur la quasi-totalité des chapitres). Nouveau composant
> `OngletPersonnages.tsx` + fonction `recupererPersonnagesOeuvre`
> (`lib/supabase/contenu.ts`) : tous les personnages de l'œuvre, en
> cartes "médaillon" (initiales, nom en Playfair, nom arabe, pastille de
> rôle dorée, description, chapitre de première apparition) — design
> repris d'un fichier de référence HTML fourni par l'utilisateur
> ("Rubriques — Le Dernier Jour d'un Condamné", non committé). D'abord
> posé sur `/oeuvres/[slug]?onglet=personnages` seul, puis étendu à
> `/oeuvres/[slug]/[numero]?onglet=personnages` **et** à l'aperçu compact
> sous le résumé d'un chapitre, à la demande explicite de l'utilisateur
> ("applique les personnages dans tous les chapitres") : ces deux
> derniers montraient auparavant seulement les personnages apparaissant
> pour la PREMIÈRE fois dans le chapitre consulté (`recupererPersonnages
> Chapitre`, désormais supprimée, plus aucun appelant) — comme la plupart
> des personnages sont introduits au chapitre 1, ça laissait l'onglet
> vide sur presque tous les autres chapitres. Les trois emplacements
> affichent maintenant la liste complète et identique des personnages.
> Ce fichier de référence couvre aussi Lexique/Lieux/Sujets liés dans le
> même esprit visuel — **seul Personnages a été fait pour l'instant**, le
> reste est un suivi possible si demandé. L'accent doré (`--or`) de cette
> maquette est appliqué en couleurs arbitraires locales au composant, pas
> en token global : la palette v2 du reste du site n'en a pas (retiré
> lors de la refonte v2), seul cet onglet en a besoin.
>
> Contenu des 10 personnages déjà en base enrichi (descriptions plus
> complètes, fournies par l'utilisateur dans la conversation) + un
> nouveau personnage ajouté, Lalla Aïcha (apparue au chapitre 4, absente
> de la feuille "Personnages" jusqu'ici). ⚠️ Deux petits écarts
> d'orthographe entre le texte de l'utilisateur et les noms déjà
> enregistrés, volontairement PAS renommés pour ne pas dupliquer la ligne
> à l'import (upsert sur `oeuvre_id, nom`) : "Maâlem Abdeslem" (utilisateur,
> et aussi la graphie utilisée dans tous les résumés de chapitres 2-12)
> vs "Maalem Abdeslam" (nom déjà en base, conservé) ; "La Chouafa (Lalla
> Kanza)" (utilisateur) vs "La Chouafa (tante Kenza)" (déjà en base,
> conservé). À uniformiser un jour si ça gêne.
>
> ⚠️ **Piège réel de `npm run importer` découvert (et déclenché par erreur)
> cette session : un `upsert` écrase avec `null` toute colonne dont la
> cellule Excel est vide, même si la ligne existe déjà en base avec une
> vraie valeur.** En relançant l'import pour ajouter les chapitres 2/3
> (feuille "Chapitres"), la feuille "Oeuvres" a aussi été ré-upsertée en
> passant — et ses colonnes `essentiel_fr`/`essentiel_ar` étaient restées
> VIDES dans le fichier Excel (ce texte avait été écrit directement en
> base par Claude lors d'une session précédente, jamais reporté dans
> l'Excel). Résultat : le résumé "essentiel" de *La Boîte à Merveilles*,
> pourtant affiché et vérifié par capture d'écran plus tôt dans cette
> même session, a été silencieusement remis à `null` — repéré
> immédiatement (recherche du texte connu sur la page live) et corrigé en
> reportant ce texte dans l'Excel puis en relançant l'import. **Leçon** :
> toute donnée écrite directement en base (hors pipeline Excel) doit être
> reportée dans le fichier Excel dans la foulée, sinon le prochain
> `npm run importer` — même motivé par un tout autre besoin — peut
> l'effacer sans avertissement (`0 erreur` dans le résumé de l'import : ce
> n'est pas un cas signalé comme un problème par le script).
>
> **Les 12 chapitres de *La Boîte à Merveilles* sont tous ajoutés — le
> roman est complet** (en trois vagues cette session : 2-3, puis 4-6, puis
> 7-12 ; l'œuvre n'avait que le chapitre 1 avant). Source à chaque fois :
> l'utilisateur a fourni, dans la conversation, le déroulé événement par
> événement de chaque chapitre — ce contenu n'est donc PAS inventé, il
> vient de l'utilisateur (y compris l'ordre d'arrivée un peu particulier :
> les chapitres 9 à 12 ont été envoyés avant les chapitres 7 et 8, qui ont
> comblé le trou juste après — les 12 chapitres sont bien tous présents et
> dans le bon ordre en base). À partir de ces points, Claude a
> systématiquement : rédigé un résumé français suivi (`resume_fr`),
> reformaté les points en `points_cles_fr` (numérotation et légères
> corrections orthographiques), proposé des thèmes
> (`theme_principal`/`themes_secondaires`) et un titre court et descriptif
> par chapitre (aucun titre fourni par l'utilisateur pour aucun chapitre —
> même logique que "Dar Chouafa" pour le chapitre 1, un titre par
> événement/lieu central : "Le pèlerinage à Sidi Ali Boughaleb", "La
> disparition de Zineb", "La visite chez Lalla Aïcha", "La mort du
> coiffeur", "Les préparatifs de l'Achoura", "Le jour de l'Achoura", "La
> bagarre chez les bijoutiers", "La faillite de Maâlem Abdeslem", "La
> visite au voyant Sidi El Arafi", "Le mariage malheureux de Moulay
> Larbi", "Le retour du père") ; puis traduit l'ensemble en arabe
> (`resume_ar`, `points_cles_ar`, `titre_ar`). **⚠️ Comme pour le chapitre
> 1, la traduction arabe et les thèmes/titres proposés sont signalés
> `statut = "à relire"` — non relus par un locuteur/enseignant, à faire
> avant tout usage en classe.** Ajouté via le pipeline normal (lignes dans
> la feuille "Chapitres" de `data/contenu-plateforme-bac.xlsx`, fichier
> non versionné — voir `.gitignore` — puis `npm run importer`, 0 erreur à
> chaque fois ; avant chaque relance, vérifié que
> `essentiel_fr`/`essentiel_ar` étaient bien restés dans la feuille
> "Oeuvres" — voir le piège documenté juste au-dessus). Les onglets
> Personnages/Sujets liés restent "Bientôt disponible" pour tous les
> chapitres : l'utilisateur n'a pas fourni cette information, donc rien
> n'y a été ajouté (nouveaux personnages mentionnés au fil des chapitres
> mais pas dans la feuille "Personnages" : Hamoussa, Lalla Aïcha, Moulay
> Larbi, le courtier malhonnête, Abderrahman le coiffeur et sa fille, Sidi
> Mohammed Ben Taher le coiffeur, Sidi El Arafi le voyant et sa femme,
> Salama la marieuse, Zhour, l'oncle Othmane et Lalla Khadija — à faire si
> besoin).
>
> ⚠️ **Incident résolu cette session : le site paraissait "catastrophique"
> à l'utilisateur, cause réelle = mémoire système épuisée, pas le design.**
> Après le déploiement v2, `/oeuvres/[slug]` répondait par intermittence en
> 500 ("Jest worker encountered 2 child process exceptions") ou restait
> bloqué 10-15s : la RAM de la machine (8 Go) était descendue à ~267 Mo
> libres, à cause de **~25 processus `chrome.exe` zombies** accumulés par
> des sessions Playwright précédentes non refermées proprement (chacune
> lançait un navigateur sans toujours le fermer en cas d'échec du script).
> Sous cette pression mémoire, les workers de compilation du serveur de
> dev plantaient et le rendaient intermittent, pas le CSS/JS livré. Fixé
> en tuant tous les `chrome.exe`, en vidant `.next` et en relançant le
> serveur (RAM libre repassée à ~2 Go). **Leçon pour la suite** : après
> tout script Playwright (même en cas d'échec), tuer explicitement les
> process `chrome.exe`/`playwright` restants avant de continuer — ne pas
> supposer que `browser.close()` suffit si le script a pu planter avant.
>
> En creusant plus loin (13 pages, desktop + mobile, capturées une fois le
> serveur stable), un vrai bug visuel a aussi été trouvé et corrigé :
> `components/SelecteurOeuvres.tsx` posait `flex-1` directement sur
> chaque pilule d'œuvre, ce qui entre en conflit avec le
> `overflow-x-auto` du conteneur — un enfant `flex-1` (flex-basis:0) se
> fait comprimer pour tenir dans la largeur disponible au lieu de
> déborder, donc en dessous de `md` (mobile) les pilules étaient
> écrasées et leur texte tronqué à l'écran, au lieu de défiler
> horizontalement comme prévu. `OngletsOeuvre`/`OngletsChapitre`
> n'avaient pas ce bug (ils utilisent le bon motif : rangée `min-w-max`,
> items à largeur naturelle). Corrigé en réservant `flex-1` à `md:` et
> en gardant `flex-none` en dessous — vérifié par une vraie capture
> d'écran mobile + une mesure DOM (`scrollWidth > clientWidth`), pas
> seulement en relisant le code.
>
> **Retouches demandées ensuite par l'utilisateur** (mêmes tokens/
> mécanismes v2, pas une nouvelle refonte) : (1) les onglets
> `OngletsOeuvre`/`OngletsChapitre` sont repassés du style souligné
> (v2) à une pastille bleue pleine et arrondie (style d'avant la
> refonte v2) ; (2) la photo de couverture de *La Boîte à Merveilles*
> recadrée plus haut (`bg-[center_62%]` → `bg-[center_74%]`) pour que
> l'enfant soit plus visible dans le cadre, au lieu du grand aplat de
> ciel au-dessus de lui ; (3) le sélecteur des 3 œuvres
> (`SelecteurOeuvres`, la barre de pilules Antigone/Boîte à
> Merveilles/Dernier Jour) a été **retiré** de `/oeuvres/[slug]` — plus
> affiché une fois qu'on est sur la page d'une œuvre précise — et le
> composant, devenu orphelin (plus aucun appelant), a été supprimé.
> Pour changer d'œuvre il faut désormais repasser par `/oeuvres`.
>
> ⚠️ **Fichiers non committés laissés par une session parallèle/antérieure,
> toujours en attente d'une décision de l'utilisateur** : `PROJECT_CHARTER.md`
> (un audit du projet, non lu en détail par Claude — jamais committé, jamais
> supprimé) et une capture d'écran à la racine (`Capture d'écran 2026-08-26
> 162006.png`). À décider : les garder, les supprimer, ou fusionner
> `PROJECT_CHARTER.md` avec ce fichier ETAT.md qui a la même fonction.
> `.omo/` et `dev-server.log` (métadonnées d'outils locaux de cette même
> session parallèle, pas du code) ont déjà été ajoutés à `.gitignore`.
>
> ### Refonte visuelle v2 (remplace intégralement la v1)
>
> La session précédente avait reconstruit tout le design sur la base d'un
> premier fichier de référence (`page-oeuvre.html`, pour *La Boîte à
> Merveilles*) : palette DM Sans/Playfair/Spectral, pilules pleines pour
> les onglets, bannière en rectangle plein, résumé sur carte teintée.
> **L'utilisateur a ensuite fourni un second fichier de référence, plus
> abouti** (`page-oeuvre (2).html`, pour *Le Dernier Jour d'un Condamné*)
> et a explicitement demandé, via question posée, de **remplacer le
> design v1 par celui-ci comme version définitive** — ce qui a été fait
> cette session sur toute la partie œuvre/chapitre du site :
>
> - **Tokens** (`app/globals.css`, système `@theme` de Tailwind v4) :
>   nouvelle palette bleue/encre (`--color-primary:#1d4ed8`,
>   `--color-ink:#1b3a8f`, `--color-surface`/`--color-surface-muted`,
>   `--color-validation`/`--color-erreur`...), rayons et ombre repensés.
>   Le token `--color-or` (accent ambre du lexique en v1) a été supprimé
>   sans remplaçant dédié — voir bug corrigé plus bas.
> - **Polices** (`app/layout.tsx`) : Inter (texte courant), Playfair
>   Display (titres), Lora (texte de lecture fr), IBM Plex Sans Arabic
>   (texte arabe) — remplacent DM Sans/Spectral.
> - **Icônes** (`components/icones.tsx`) : nouvelles icônes ajoutées
>   (`IconeIdee`, `IconeMasques`, `IconeMaison`) pour coller à la
>   maquette v2 ; ⚠️ piège connu du composant — passer un `className`
>   personnalisé remplace entièrement la taille par défaut (`size-4`),
>   il faut toujours inclure un `size-*` explicite sinon l'icône rend
>   énorme/non stylée (bug rencontré et corrigé sur `IconeFleche`).
> - **Nav/bannière/onglets** : `BarreNavigation.tsx` reconstruite (logo
>   SVG deux tons, hauteur 88px), `SelecteurOeuvres.tsx` en pilules
>   égales avec icône par œuvre, `BanniereOeuvre.tsx` refaite avec un
>   effet de fondu CSS `mask-image` (photo de couverture qui se fond en
>   dégradé vers la carte blanche, au lieu du rectangle plein v1),
>   `OngletsOeuvre.tsx`/`OngletsChapitre.tsx` passés en soulignement actif
>   (au lieu de pilules pleines), `SommaireChapitres.tsx` en grille de
>   cartes verticales avec badge numéroté/coche si lu.
> - **Règle métier inchangée** : les boutons "Lire le texte intégral"/
>   "Lecteur bilingue" n'apparaissent que si `oeuvre.mode ===
>   "texte_integral"` **et** qu'un premier chapitre existe réellement.
> - **Couvertures photo** : en plus de la photo *Boîte à Merveilles*
>   ajoutée par la session parallèle (corrigée en rectangle plein cette
>   session, `max-w-[800px] mx-auto` → pleine largeur `aspect-[16/9]`),
>   une photo de couverture pour *Le Dernier Jour d'un Condamné* a été
>   extraite du fichier de référence v2 lui-même (image encodée en
>   base64 dans son CSS) et posée dans `public/couvertures/
>   dernier-jour-condamne.jpg` + migration `20260831000000_
>   couverture_dernier_jour_condamne.sql`.
> - **Illustration SVG abandonnée** : `components/IllustrationEnfantBoite.tsx`
>   (dessin au trait fait main d'un enfant portant sa boîte, créé en
>   réponse à une demande précédente faute d'outil de génération d'image
>   réel) a été **supprimé** — la bannière v2 affiche désormais la vraie
>   photo avec l'effet de fondu au lieu d'une illustration.
> - **Bug corrigé** : `MotLexique.tsx`/`LexiqueChapitre.tsx` référençaient
>   encore `text-or`/`decoration-or`, un token disparu avec la refonte
>   des tokens — Tailwind ne génère alors silencieusement aucune règle
>   (pas d'erreur de build), le soulignement du lexique perdait sa
>   couleur. Repéré uniquement via une vraie capture d'écran, pas en
>   lisant le code. Corrigé en `text-primary`/`decoration-primary` (la
>   palette v2 n'a pas d'accent dédié « lexique » comme l'ambre en v1).
>
> Chaque changement de design a été vérifié par une **vraie capture
> d'écran Playwright** avant d'être considéré terminé (voir règle
> ci-dessous) — jamais uniquement par lecture du code/CSS compilé.
>
> ⚠️ **Si le serveur de dev devient très lent ou plante (out of
> memory)** : vérifier `tasklist` pour des processus `node.exe`
> orphelins — chaque redémarrage de `npm run dev` dans une session
> laisse l'ancien processus tourner en arrière-plan si on ne le tue pas
> explicitement (le port change alors à chaque fois : 3000, 3001,
> 3002...). Un jour, 8 serveurs de dev tournaient simultanément sur
> cette machine et ont fini par saturer la RAM. Toujours `taskkill //F
> //PID <pid>` l'ancien processus avant/après en relancer un nouveau.
>
> ⚠️ **Action requise avant de tester `/administration`** : la migration
> `supabase/migrations/20260829000000_lecture_admin_profils.sql` n'a pas
> été appliquée automatiquement (pas de CLI Supabase liée dans ce dépôt).
> À exécuter manuellement dans l'éditeur SQL du dashboard Supabase, comme
> pour les migrations précédentes.

## 1. C'est quoi ce projet ?

MADRASTI est une application web pédagogique (français/arabe) pour des
élèves marocains préparant le bac (mentions "filière", "1bac" dans le
code). Elle donne accès à un programme d'œuvres littéraires au programme
(résumés, chapitres, personnages, lexique, sujets d'exercice) et, à
terme, à un outil de correction de copies (photo → transcription →
notation), avec suivi de progression et quota quotidien par élève.

Deux profils d'utilisateurs : **élève** (accès à son espace et au
contenu public) et **admin** (accès à `/administration`, seul rôle
autorisé à écrire le contenu pédagogique).

**Stack** : Next.js 15.5 (App Router) + React 19 + TypeScript,
Tailwind CSS v4, Supabase (Postgres + Auth + Storage) via `@supabase/ssr`,
authentification Google OAuth. Import de contenu depuis un fichier Excel
via un script `tsx` (`exceljs`) utilisant la clé `service_role`.

Le dépôt contient un `AGENTS.md` qui n'est **pas** de la documentation
projet : c'est un bloc auto-généré par `next dev` rappelant que cette
version de Next.js peut différer de ce que le modèle connaît (à lire dans
`node_modules/next/dist/docs/` avant d'écrire du code). Il n'y a donc pas
de doc projet séparée à comparer à l'existant — voir section 4.

## 2. Inventaire

### Tables Supabase (10 migrations, `supabase/migrations/`)

RLS activé sur **toutes** les tables. Modèle constant : contenu
pédagogique = lecture publique (`using (true)`) + écriture réservée aux
admins via `public.est_admin()` ; données élève = chacun ne voit/écrit
que les siennes (`auth.uid() = user_id`).

| Table | Contenu | RLS |
|---|---|---|
| `profils` | id, email, nom_complet, role (`eleve`/`admin`), date_creation | lecture de sa propre ligne + lecture de tous les profils par un admin (⚠️ migration à appliquer, voir en tête de fichier) ; **aucune policy INSERT/UPDATE** (remplie uniquement par trigger `on_auth_user_created`) |
| `oeuvres` | slug, titre_fr/ar, auteur, filiere, mode, essentiel_fr/ar, couverture_url, biographie_fr/ar | lecture publique, écriture admin |
| `chapitres` | oeuvre_id, numero, titre_fr/ar, resume_court, lieux, citation_reference, statut | lecture publique, écriture admin |
| `paragraphes` | chapitre_id, ordre, texte_fr/ar | lecture publique, écriture admin |
| `fiches` | chapitre_id (unique), resume_fr/ar, themes (jsonb {principal, secondaires}), points_cles_fr/ar | lecture publique, écriture admin |
| `lexique` | chapitre_id, mot, sens_ar, nature, note | lecture publique, écriture admin |
| `personnages` | oeuvre_id, nom, nom_ar, role, description_fr, chapitre_apparition_id | lecture publique, écriture admin |
| `cours` | slug, titre, categorie, contenu_mdx, filiere, ordre | lecture publique, écriture admin |
| `sujets` | oeuvre_id, chapitre_id, titre, consigne, type | lecture publique, écriture admin |
| `copies` | user_id, sujet_id, image_url, transcription, note_forme/fond/total, erreurs, points_forts, axes, commentaire, cout_tokens | élève : select+insert sur ses copies, **pas d'update** (réservé à un futur traitement serveur via service_role) ; admin : select+update de toutes |
| `progression` | user_id, chapitre_id, lu, termine_le (PK composite) | élève gère librement les siennes ; **isolation testée concrètement**, voir section 4 |
| `activite` | user_id, type, ressource_id/titre | élève : select+insert (append-only, pas d'update) ; alimentée à chaque ouverture de chapitre (type `consultation_chapitre`) |
| `quota_jour` | user_id, date, corrections_utilisees | élève : select seule (pas d'écriture — l'incrément devra venir d'un contexte serveur de confiance) |

Fonction utilitaire : `public.est_admin()` (SQL, `stable`), centralise
la vérification de rôle pour toutes les policies d'écriture.

### Pages / routes

| Route | Groupe | Protection | État |
|---|---|---|---|
| `/connexion` | `(public)` | aucune | ✅ fonctionne (bouton Google OAuth) |
| `/api/auth/retour` | — | aucune | ✅ fonctionne (échange le code OAuth contre une session) |
| `/tableau-de-bord` | `(eleve)` | middleware, connecté requis | ✅ quatre blocs empilés : Reprendre, Rédaction, Progression, Dernières activités — chacun avec un état "invitation" si vide (voir section 3) |
| `/redaction/nouvelle` | `(eleve)` | middleware, connecté requis | ✅ page minimale ("Bientôt disponible"), destination du bouton "Corriger une copie" |
| `/activite` | `(eleve)` | middleware, connecté requis | ✅ historique complet ("Tout voir" depuis le tableau de bord) |
| `/administration` | `(admin)` | middleware, connecté + `role=admin` | ✅ affiche l'email + liste des copies déposées (`TableauCopies`), vide tant qu'aucune UI élève ne permet d'en déposer une |
| `/` | `(public)` | aucune | ✅ accueil minimal, lien vers /oeuvres |
| `/ressources`, `/a-propos` | `(public)` | aucune | ✅ pages minimales ("Bientôt disponible"), destinations de la nav |
| `/oeuvres` | `(public)` | aucune | ✅ grille des œuvres, filière codée en dur (`"1bac"`) |
| `/oeuvres/[slug]` | `(public)` | aucune | ✅ sélecteur d'œuvre en pilules, bannière (cartes résumé fr/ar, badge auteur, boutons d'action, barre d'avancement si connecté) toujours visible, barre d'onglets ; seul l'onglet **Résumé** a du contenu réel |
| `/oeuvres/[slug]/[numero]` (détail d'un chapitre) | `(public)` | aucune | ✅ fil d'Ariane, en-tête, barre d'onglets (Résumé/Personnages/Lexique/Lieux/Sujets liés), résumé bilingue avec **mots de lexique cliquables**, texte intégral (si dispo), aperçu 3 colonnes, bouton "Marquer comme lu", journal d'activité |

### Composants (`components/`)

⚠️ Liste ci-dessous partiellement périmée sur le style visuel exact
(rédigée avant la refonte sur fichier de référence, voir la section
"Refonte visuelle complète" plus bas pour les composants réellement
nouveaux : `BanniereOeuvre`, `LiensNavigation`, `icones.tsx`) — les
noms de composants et leur rôle fonctionnel, eux, restent à jour.

`BoutonConnexionGoogle`, `CarteOeuvre`, `CouvertureOeuvre` (image ou
bloc de remplacement avec le titre), `OngletResume`, `OngletsOeuvre`
(barre d'onglets, Server Component, navigation par query param
`?onglet=`), `SommaireChapitres` (liste des chapitres, coche de
progression en lecture seule — cochage réel uniquement depuis la page
du chapitre), `TexteChapitre` (texte intégral d'un chapitre ou message
"Bientôt disponible"), `FicheChapitre` (résumé/thèmes/points clés d'un
chapitre), `LexiqueChapitre` (mots de vocabulaire d'un chapitre),
`BoutonMarquerLu` (**client**, bascule "Marquer comme lu" / "Lu ✓" avec
mise à jour optimiste ; affiche une invite de connexion si le
visiteur n'est pas connecté), `BarreProgression` ("N chapitres sur
total", affichée dans l'en-tête de `/oeuvres/[slug]` si connecté).
`TableauCopies` (liste des copies pour `/administration`, ou message
"Aucune copie déposée pour l'instant").

Blocs du tableau de bord (session 5), chacun avec son propre état
"invitation" quand il n'y a rien à montrer (voir section 3, règle
"aucun bloc vide") : `BlocReprendre`, `BlocRedaction`, `BlocProgression`
(3 chiffres + une barre par œuvre), `BlocDernieresActivites`.

Session design (nav + maquettes) : `BarreNavigation` (nav globale,
menu mobile en `<details>` natif, sans JS), `BoutonDeconnexion`
(**client**, seul morceau interactif de la nav), `SelecteurOeuvres`
(pilules d'œuvre), `CarteBilingue` (paire de cartes résumé fr/ar,
réutilisée dans la bannière d'œuvre et l'onglet Résumé d'un chapitre),
`MotLexique` (**client**, mot cliquable ouvrant sa définition — popover
en desktop, feuille pleine largeur depuis le bas en mobile),
`OngletsChapitre` (barre d'onglets du chapitre, même mécanisme que
`OngletsOeuvre`), `PersonnagesChapitre`, `LieuxChapitre`,
`SujetsChapitre` (listes utilisées à la fois en aperçu 3 colonnes et
comme contenu de leur propre onglet).

### `lib/`

- `lib/supabase/client.ts` — client navigateur (`createBrowserClient`)
- `lib/supabase/server.ts` — client serveur (`createServerClient`,
  cookies), à recréer à chaque requête
- `lib/supabase/contenu.ts` — lecture du contenu public (œuvres,
  chapitres, fiches, paragraphes, lexique, personnages et sujets d'un
  chapitre précis) pour les Server Components
- `lib/lexique.ts` — normalisation d'un mot pour faire correspondre le
  texte d'un chapitre à une entrée `lexique.mot` (retire les articles
  de tête, élidés ou séparés — voir les commentaires du fichier pour
  les limites connues : pas d'expressions à plusieurs mots, pas
  d'accord singulier/pluriel)
- `lib/supabase/admin.ts` — lecture des données réservées à l'espace
  admin (copies, avec sujet et identité élève joints manuellement)
- `lib/supabase/progression.ts` — lecture de la progression de lecture
  de l'utilisateur connecté (par œuvre entière ou par chapitre)
- `lib/supabase/activite.ts` — écriture dans le journal d'activité,
  avec déduplication (pas de doublon si rechargement dans la minute)
- `lib/supabase/tableauDeBord.ts` — agrégations pour `/tableau-de-bord`
  et `/activite` : activités récentes résolues en liens, chapitre
  recommandé, progression par œuvre, stats copies, quota restant
- `lib/filiere.ts` / `lib/quota.ts` — constantes partagées codées en dur
  (`FILIERE_ACTUELLE = "1bac"`, `QUOTA_QUOTIDIEN_MAX = 3`), un seul
  endroit à changer le jour où elles deviendront de vraies données

### Scripts

- `npm run dev` / `build` / `start` / `lint` — standards Next.js
- `npm run importer` (`scripts/importer.ts`) — importe
  `data/contenu-plateforme-bac.xlsx` (présent en local, ignoré par git)
  vers Supabase via la clé `service_role`. Idempotent (upsert sur
  contraintes uniques). Alimente Oeuvres, Chapitres+Fiches, Lexique,
  Personnages, Sujets. Prêt à importer une feuille "Paragraphes"
  (colonnes oeuvre_slug, chapitre_numero, ordre, texte_fr, texte_ar) si
  elle est ajoutée au fichier, mais **cette feuille n'existe pas encore
  dans `data/contenu-plateforme-bac.xlsx`** — le texte intégral des
  chapitres n'est donc pas encore importable, seulement les résumés
  (`fiches`). N'importe pas non plus `cours`, ni les colonnes
  `couverture_url`/`biographie_fr`/`biographie_ar` d'`oeuvres`.

### Authentification

Google OAuth via Supabase Auth. Trigger Postgres
(`gerer_nouvel_utilisateur`, `security definer`) crée automatiquement la
ligne `profils` à l'inscription, rôle `eleve` par défaut. Middleware
(`middleware.ts`) : rafraîchit la session à chaque requête, protège
`/tableau-de-bord` (connecté) et `/administration` (connecté + rôle
admin vérifié **côté serveur** via une requête Supabase soumise à RLS).
Pas de mécanisme applicatif pour promouvoir un élève en admin (aucune
policy UPDATE sur `profils` — changement de rôle possible uniquement à
la main depuis le dashboard Supabase / SQL direct, volontairement laissé
pour plus tard).

### Variables d'environnement référencées dans le code

- `NEXT_PUBLIC_SUPABASE_URL` (client + serveur + script importer)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (client + serveur)
- `SUPABASE_SERVICE_ROLE_KEY` (script importer **uniquement**, jamais
  dans le code de l'app)

`.env.example` documente ces trois variables ; `.env.local` existe en
local et est correctement ignoré par git (`.gitignore`), tout comme
`data/*` (seul `data/.gitkeep` est suivi).

## 3. Ce qui manque / ce qui est cassé

**Corrigé cette session :**
- ✅ `/oeuvres/[slug]/[numero]` (détail d'un chapitre) créée — le lien
  depuis `SommaireChapitres` ne renvoie plus de 404.
- ✅ `/administration` liste désormais les copies déposées (vide pour
  l'instant, voir plus bas).
- ✅ Progression de lecture (Session 4) : bouton "Marquer comme lu" sur
  la page d'un chapitre (mise à jour optimiste), coche dans le sommaire,
  barre d'avancement sur la page œuvre, journal d'activité à chaque
  consultation de chapitre. Isolation RLS entre élèves vérifiée
  concrètement (voir section 4).
- ✅ Tableau de bord (Session 5) : quatre blocs (Reprendre, Rédaction,
  Progression, Dernières activités). Règle "aucun bloc vide" appliquée
  systématiquement — chaque bloc a un état invitation distinct de son
  état avec données (détail dans les commentaires des composants
  `Bloc*`) plutôt qu'un "0" ou une zone blanche pour un nouvel élève.
  `/redaction/nouvelle` (stub) et `/activite` (historique complet)
  créées comme destinations de ce tableau de bord.
- ✅ Session Design : nav globale (`BarreNavigation`, avec état connecté/
  déconnecté), sélecteur d'œuvre en pilules, bannière d'œuvre et de
  chapitre reprises des deux maquettes fournies, mots de lexique
  cliquables dans le résumé d'un chapitre (popover desktop / feuille
  mobile), nouveaux onglets **du chapitre** Personnages/Lieux/Sujets
  liés branchés sur les vraies données. Détail des choix et des
  quelques écarts assumés par rapport aux maquettes littérales
  ci-dessous ("Adaptations pragmatiques").
- Attention à ne pas confondre avec le point suivant : ce sont les
  onglets **du chapitre** qui sont branchés cette session, pas les
  onglets **de l'œuvre** (Personnages/Lexique/Sujets/Biographie de
  `/oeuvres/[slug]`), toujours "Bientôt disponible".
- ✅ Correctif de fidélité visuelle (même session Design, suite à un
  retour direct comparant au rendu réel des maquettes) : fond de page
  bleu très pâle (`--color-background`) au lieu de blanc, bordures des
  cartes en bleu clair (`--color-border`) au lieu de gris neutre,
  ombre légère (`shadow-sm`) sur toutes les cartes, police serif
  (Playfair Display, `font-serif`) sur les grands titres d'œuvre et de
  chapitre en bleu foncé, barres d'onglets sur fond bleu pâle avec
  soulignement épais (`border-b-4`) de l'onglet actif, cartes de
  chapitre simplifiées ("Chapitre N" en gras + titre réel en sous-titre,
  sans répétition). Vérifié dans la CSS compilée après build, pas
  seulement dans le code source.

**Commencé mais incomplet :**
- Onglets Personnages, Lexique, Sujets, Biographie de `/oeuvres/[slug]`
  (au niveau de l'**œuvre** entière, pas du chapitre) : UI présente
  (barre d'onglets fonctionnelle, restylée cette session), contenu
  toujours non branché alors que les tables/colonnes existent déjà.
- `/administration` : affiche les copies, mais aucune gestion de
  contenu (œuvres/chapitres) ni gestion des rôles.
- Filière codée en dur (`"1bac"`, désormais centralisée dans
  `lib/filiere.ts`) — dépend d'une colonne `profils.filiere` qui
  n'existe pas encore.
- Quota quotidien codé en dur à **3** (`lib/quota.ts`, `QUOTA_QUOTIDIEN_MAX`) :
  valeur inventée faute de vraie décision produit, à ajuster (⚠️ à
  confirmer avec l'équipe, pas une valeur métier validée).

**Pas commencé :**
- Aucune UI **élève** pour déposer une copie (photo, transcription) —
  seule la consultation admin existe désormais (`/administration`), la
  table `copies` reste donc vide en pratique.
- Aucun mécanisme serveur pour incrémenter `quota_jour` ou remplir les
  champs de correction de `copies` (prévu pour un contexte
  `service_role`, explicitement hors périmètre des sessions passées).
- Texte intégral des chapitres (`paragraphes`) : le fichier Excel n'a
  pas de feuille "Paragraphes" — rien à importer tant qu'elle n'existe
  pas. Le script est prêt à la lire dès qu'elle sera ajoutée (colonnes
  oeuvre_slug, chapitre_numero, ordre, texte_fr, texte_ar). Ne concerne
  que les œuvres en mode `texte_integral` ; les œuvres en
  `accompagnement` n'en ont pas besoin.
- Script `importer.ts` n'importe toujours pas `cours`, ni
  couverture/biographie des œuvres — à vérifier si ces données existent
  dans une autre feuille du fichier Excel ou doivent être ajoutées.
- Aucun test automatisé (pas de script `test` dans `package.json`, pas
  de dossier de tests).
- `README.md` est resté celui par défaut de `create-next-app`, non
  spécifique au projet.

### Bug visuel trouvé et corrigé par capture d'écran réelle

Après un retour "ce n'est pas élégant", plutôt que de continuer à
deviner à partir du code, une vraie capture d'écran (Playwright) a été
prise du rendu réel. Elle a révélé un bug que la relecture du code
n'avait pas montré : le titre arabe (œuvre et chapitre) apparaissait
détaché, plaqué à droite de la page, sans rapport visuel avec le titre
français juste au-dessus.

**Cause** : un bloc `<p dir="rtl">` en pleine largeur aligne son texte
à droite de TOUTE la largeur disponible (comportement RTL normal), pas
à droite de son propre contenu — donc loin du titre français, aligné
à gauche, plus étroit. Idem pour l'en-tête "ملخص" de la carte de
résumé arabe : le `dir="rtl"` était posé sur toute la carte (au lieu
du texte seul), ce qui inversait aussi la ligne d'en-tête en flex et
poussait l'icône + le mot à droite, incohérent avec la carte française.

**Correctif** : `w-fit` sur les titres arabes (le bloc se réduit à son
contenu, reste donc calé au même bord gauche que le titre français
au-dessus) ; `dir="rtl"` déplacé du conteneur de la carte "ملخص" vers
le seul bloc de texte, en laissant la ligne d'en-tête en LTR comme
celle de la carte française. Appliqué partout où le même motif
existait : `/oeuvres/[slug]`, `/oeuvres/[slug]/[numero]`, `CarteOeuvre`
(grille de `/oeuvres`), `CarteBilingue`.

**Leçon pour la suite** : pour tout retour visuel/esthétique sur ce
projet, prendre une vraie capture d'écran (Playwright) avant de faire
des hypothèses sur ce qui ne va pas — mais **jamais** en installant
Playwright dans le `node_modules` du projet pendant que `next dev`
tourne dessus : la première tentative (`npm install --no-save
playwright` directement dans le projet) a corrompu le cache webpack et
cassé le serveur en cours d'utilisation (voir plus bas, section
mémoire des processus). Depuis, Playwright est installé dans un
répertoire complètement séparé (le scratchpad de la session, avec son
propre `package.json`), qui pointe juste vers le serveur de dev déjà
lancé via son URL `localhost` — aucun risque pour `node_modules` du
projet. Le vide apparent en bas de `/oeuvres/[slug]/boite-a-merveilles`
n'est PAS un bug : `essentiel_fr`/`essentiel_ar` sont vides pour les 3
œuvres en base (colonnes existantes, jamais remplies dans le fichier
Excel), la page est donc légitimement courte tant que ce contenu n'est
pas rédigé.

### Passage typographie (texte courant, pas seulement les titres)

Après un retour "l'écriture est catastrophique", constat : la session
précédente avait donné un traitement soigné aux grands titres (police
serif Playfair Display, taille, couleur) mais rien au texte courant
(résumés, listes, thèmes...), qui retombait sur la police système par
défaut du visiteur — aucune police n'était chargée pour lui.

- Nouvelle police **Source Sans 3** (`app/layout.tsx`), câblée comme
  police par défaut de tout le site via le token Tailwind `--font-sans`
  (`app/globals.css`) : aucune classe à ajouter dans les composants
  existants, tout le texte courant en bénéficie automatiquement.
- Texte des cartes de résumé (`CarteBilingue`) : `text-sm` → `text-base`
  + `leading-relaxed` — c'est le contenu principal de lecture de la
  page, il ne doit pas être traité comme un `text-sm` d'interface.
- En-têtes de section ("Résumé", "ملخص", "Points clés", "Personnages",
  "Lieux", "Sujets liés") : petites capitales bleues avec filet
  (`text-xs uppercase tracking-wide text-primary border-b`), motif
  éditorial cohérent repris partout où un tel en-tête existe.
- Thèmes d'un chapitre : passés d'une phrase brute ("Thèmes : a, b, c")
  à des pastilles (même style que les autres badges du site).
- Points clés, lieux, sujets liés : puce ronde colorée au lieu du
  disque HTML par défaut, plus d'espacement vertical entre les lignes.
- Personnages/lieux/sujets : nom en gras sur une ligne, rôle/description
  en dessous en texte atténué, plutôt qu'une seule ligne dense séparée
  par un tiret.

### Couverture photo de La Boîte à Merveilles (session parallèle + correctif)

`oeuvres.couverture_url` de `boite-a-merveilles` pointe désormais vers
`/couvertures/boite-a-merveilles.png` — un **fichier local du dépôt**
(`public/couvertures/`, servi directement par Next.js), pas un objet
Supabase Storage comme le suggérait le commentaire original de la
migration de création d'`oeuvres`. `couverture_url` accepte les deux :
une URL distante (bucket public, ce que `next.config.ts` autorise déjà
via `remotePatterns` pour `*.supabase.co`) ou un chemin public local —
`CouverturePanneau` (dans `BanniereOeuvre.tsx`) ne fait aucune
distinction, `next/image` gère les deux de la même façon.

Correctif apporté cette session : la photo s'affichait centrée avec de
grandes marges blanches de chaque côté (`max-w-[800px] mx-auto`), ce
qui cassait l'effet de bannière rectangulaire attendu. Passée en
pleine largeur de la carte, `aspect-[16/9]`.

`CouvertureOeuvre.tsx` (la grille `/oeuvres`) et `CouverturePanneau`
(la bannière `/oeuvres/[slug]`) sont deux composants distincts qui
lisent chacun `couverture_url` séparément : les deux en bénéficient
déjà sans changement supplémentaire.

### Contenu rédigé par Claude (à réviser) et illustration ajoutée

- `oeuvres.essentiel_fr`/`essentiel_ar` de `boite-a-merveilles` : ces
  deux colonnes existaient depuis le début mais étaient vides pour les
  3 œuvres (la feuille Excel ne les remplit pas). Sur demande directe,
  rédigé un résumé de l'intrigue à partir de la connaissance générale
  du roman (pas de sa source Excel) et écrit directement en base via
  `SUPABASE_SERVICE_ROLE_KEY` (même clé que `scripts/importer.ts`).
  ⚠️ **La version arabe est une traduction de Claude, non relue par un
  locuteur** — à faire vérifier avant un usage en classe. Si le fichier
  Excel est un jour réimporté avec ces colonnes remplies, il écrasera
  ce texte (comportement normal de l'upsert).
- `components/IllustrationEnfantBoite.tsx` (nouveau) : illustration
  originale au trait (SVG dessiné à la main, pas une photo ni une
  image générée par IA) représentant un enfant portant sa boîte à
  merveilles, dans le même langage graphique que `components/icones.tsx`.
  Remplace le dégradé nu du panneau de couverture de `BanniereOeuvre`
  — le titre n'y est plus répété (déjà affiché en grand dans la
  colonne de gauche), l'illustration devient le centre d'attention du
  panneau.

### Refonte visuelle complète sur fichier de référence fourni

L'utilisateur a fourni un fichier HTML/CSS autonome et déjà abouti
(`page-oeuvre.html`, non committé — reçu dans la conversation, pas
dans le dépôt) avec instruction explicite : "reproduis exactement...
ne change rien au rendu visuel". Traité comme référence faisant
autorité, remplaçant la palette/les polices/le style de tous les
passages design précédents (voir sections ci-dessus, en grande partie
obsolètes depuis).

**Tokens** (`app/globals.css`) — extraits 1:1 du `:root` du fichier de
référence, noms français choisis pour rester cohérents avec le code :
fond de page `#f5f8ff`, cartes blanches, bordure `#dce6f8` (+ variante
`--color-border-strong` `#c3d4f2` pour le survol), bleu actif
`#2453c4` (`--color-primary`), bleu profond `#16307b`
(`--color-ink`, réservé à l'affichage — titres/logo, jamais un élément
cliquable), plus `--color-validation` (vert, badge "lu"),
`--color-or` (accent réservé au Lexique). Rayons de coin agrandis
(10/14/20px) et ombre bleutée personnalisée, tous deux appliqués
globalement via les tokens Tailwind `--radius-*`/`--shadow-sm` — aucun
composant n'a eu besoin d'être touché pour ça spécifiquement.

**Polices** (`app/layout.tsx`) — trois polices latines au lieu d'une :
DM Sans (interface, `--font-sans`, par défaut sur tout le site),
Playfair Display (grands titres, `--font-serif`), Spectral (texte de
lecture longue — résumés —, nouveau token `--font-lecture`), plus
Amiri (arabe, inchangé).

**Icônes** (`components/icones.tsx`) — tous les emoji du site (📖 👤 📍
🔗 ✎ 📚 ☰) remplacés par un jeu d'icônes SVG cohérent (trait
`currentColor`), repris des chemins exacts du fichier de référence
quand ils y figurent, complétés dans le même style pour les icônes
propres à la page chapitre (Lieux, Sujets liés) qui n'y figurent pas.

**Composants reconstruits** : `BarreNavigation` (74px, logo "Medrasti"
en serif, liens Accueil/Œuvres/Langue/Rédaction, avatar rond pour un
utilisateur connecté), `LiensNavigation` (nouveau, **client** —
seul moyen fiable de connaître l'URL courante pour surligner le lien
actif, `BarreNavigation` étant un Server Component partagé par toutes
les pages), `SelecteurOeuvres` (fond blanc, pilule inactive fondue
dans le fond de page), `BanniereOeuvre` (nouveau — carte blanche
unique encadrant tout le haut de page, avec panneau de couverture
typographique en dégradé bleu + cercles décoratifs, PAS une
illustration générée), `CarteBilingue` (cartes imbriquées
`--color-background`, plus de blanc, texte en `font-lecture`),
`OngletsOeuvre`/`OngletsChapitre` (carte de pilules avec ombre, onglet
actif en pastille bleu plein — remplace l'ancien style à
soulignement), `SommaireChapitres` (carte de chapitre sans ombre,
titre en Playfair, effet de levée au survol), `BarreProgression`
("Ta progression" + barre fine).

**Nouvelle règle métier** : `oeuvre.mode === "texte_integral"` ET un
premier chapitre existant conditionnent désormais l'affichage de "Lire
le texte intégral"/"Lecteur bilingue" (avant : toujours affichés).
Vérifié sur les 3 œuvres réelles : `boite-a-merveilles` et `antigone`
sont en `accompagnement` (pas de bouton, comme dans le fichier de
référence), `dernier-jour-condamne` est en `texte_integral` mais n'a
aucun chapitre importé (pas de bouton non plus, faute de destination).

**Écarts assumés par rapport au fichier de référence** :
- Pas d'année de publication dans le badge auteur ("Ahmed Sefrioui",
  pas "Ahmed Sefrioui — 1954" comme dans le fichier) : aucune colonne
  `annee`/`date_publication` n'existe sur `oeuvres`, rien à afficher
  sans l'inventer.
- Liste de chapitres : seuls les chapitres réellement importés
  s'affichent (1 pour `boite-a-merveilles`) — le fichier de référence
  montre une liste de 12 avec des titres fictifs ("Le Msid", "Les
  Bijoux"...) pour les chapitres non encore rédigés ; ces titres
  n'existent dans aucune source de données réelle, ils n'ont donc pas
  été reproduits (pas de fabrication de contenu).
- Page chapitre (fil d'Ariane, en-tête, largeur `max-w-3xl` au lieu de
  1180px) : non couverte par le fichier de référence (qui ne montre
  que la page œuvre) — même système de tokens/polices/cartes appliqué
  par cohérence, largeur de lecture plus étroite choisie délibérément
  (confort de lecture d'un texte long).
- Points de repère de breakpoints (960px/600px dans le fichier
  d'origine) approximés par les paliers `sm`/`md` standards de
  Tailwind plutôt que reproduits au pixel près.

### Adaptations pragmatiques par rapport aux maquettes littérales

- **Nav** (⚠️ description ci-dessous périmée, voir "Refonte visuelle
  complète" au-dessus pour les liens réels actuels — conservé pour
  l'historique) : "Accueil", "Correcteur IA", "Ressources", "À propos"
  menaient à des pages minimales sans contenu réel. "Se connecter" et
  "S'inscrire" pointent tous les deux vers `/connexion` : le site n'a
  qu'un seul flux (Google OAuth), qui gère indifféremment inscription
  et connexion — ce point-là reste vrai.
- **Bannière d'œuvre** : "Lire le texte intégral" et "Lecteur bilingue"
  mènent tous les deux au premier chapitre — il n'existe qu'une seule
  expérience de lecture aujourd'hui (déjà bilingue), pas un second mode
  "lecteur bilingue" distinct.
- **Illustrations** : portraits d'auteur générés par IA retirés
  partout (demandé explicitement) ; illustration décorative de la
  bannière de chapitre non reprise du tout (pas seulement masquée en
  mobile) pour rester cohérent avec l'absence d'illustration générée
  côté œuvre.
- **Popover de lexique** : feuille pleine largeur en mobile (recommandé
  avant codage), popover flottante ancrée sous le mot en desktop —
  aucune librairie de positionnement dans le projet, donc pas de
  recalage automatique en cas de débordement proche du bord d'écran
  (rare en desktop vu la largeur de colonne).
- **Onglets** (œuvre et chapitre) : pas de scroll-into-view JS si on
  arrive directement sur un onglet non visible au chargement — accepté
  comme limite d'un composant volontairement sans JS.
- **Sommaire des chapitres** : reste une liste verticale (cartes
  empilées, badge numéroté rond) plutôt que la rangée de cartes à
  défilement horizontal de la maquette — plus accessible et plus sûr
  sur mobile pour un nombre de chapitres qui peut grandir.
- **Mot de lexique cliquable** : ne détecte qu'un mot isolé par
  occurrence (première seulement), pas les expressions à plusieurs mots
  ni les accords singulier/pluriel/conjugaison — voir les limites
  documentées dans `lib/lexique.ts`.

## 4. Sécurité — état des lieux

Points corrects observés :
- RLS activé sur toutes les tables, sans exception.
- Vérification du rôle admin faite **côté serveur** (middleware +
  requête Supabase soumise à RLS), jamais côté client.
- Clé `service_role` cantonnée au script `scripts/importer.ts`, jamais
  référencée dans `app/`, `components/` ou `lib/` — jamais exposée au
  navigateur.
- Clés `NEXT_PUBLIC_*` exposées côté client par design (clé anon,
  documenté dans `.env.example`) — sécurité réelle reposant sur les
  policies RLS, ce qui est le modèle correct pour Supabase.
- `.env.local` et le contenu de `data/` correctement ignorés par git.
- **Isolation RLS de `progression` testée concrètement** (session 4,
  script jetable non committé) : deux vrais comptes élève créés via
  l'API admin Supabase (puis supprimés à la fin du test), connectés
  chacun avec leur propre session. Résultat : élève A ne voit aucune
  ligne de la progression d'élève B (`select` filtré à 0 ligne, pas une
  erreur masquée), ne peut pas la modifier (`update` : 0 ligne
  affectée), et une tentative d'insérer une ligne de progression *au
  nom* de B (`user_id = B` depuis la session de A) est explicitement
  rejetée par Postgres ("new row violates row-level security policy").
  Les trois angles (lecture, modification, usurpation à l'insertion)
  sont couverts.
- **Visiteur non connecté sur une page de chapitre** (public par
  design, pas de redirection) : `user` vaut `null` côté serveur, ce qui
  fait "tomber" en cascade tous les points touchant la progression sans
  aucune requête tentée — `recupererProgressionChapitre`/`Oeuvre`
  renvoient un résultat vide sans appeler Supabase, `enregistrerActivite`
  s'arrête avant toute requête, `BoutonMarquerLu` affiche une invite
  "Connecte-toi" à la place du bouton, `BarreProgression` n'est pas
  rendue. Aucun de ces chemins ne tente d'écrire en tant qu'anonyme :
  il n'y a donc rien à bloquer côté RLS pour ce cas (contrairement à
  l'isolation entre élèves, qui elle repose sur les policies).

Points de vigilance (pas des failles actives, mais à garder en tête) :
- Nouvelle policy `SELECT` sur `profils` pour les admins (migration
  `20260829000000_lecture_admin_profils.sql`) : volontairement lecture
  seule, aucune capacité d'écriture ajoutée. À appliquer manuellement
  (voir en tête de fichier) avant de tester `/administration` avec de
  vraies données.
- Aucune policy ne permet à un admin de changer le rôle d'un profil
  depuis l'application : tant que ça reste vrai, c'est plutôt une
  garantie de sécurité qu'un manque — mais le jour où une page de
  gestion des rôles sera ajoutée, il faudra une policy UPDATE stricte
  (admin uniquement, et probablement interdire à un admin de se
  rétrograder lui-même par erreur).
- `copies` et `quota_jour` n'ont pas encore de contexte serveur qui les
  écrit : le jour où cette fonctionnalité sera implémentée, s'assurer
  que l'incrémentation du quota et le remplissage des notes passent
  bien par une clé `service_role` (ou une fonction `security definer`
  dédiée), jamais par une policy ouverte côté élève — c'est déjà
  anticipé par les commentaires dans les migrations correspondantes.

Aucune clé ou secret trouvé committé dans le code ou les migrations.

## 5. Prochaines étapes suggérées

1. Appliquer la migration `20260829000000_lecture_admin_profils.sql`
   dans le dashboard Supabase (voir avertissement en tête de fichier).
2. Confirmer la vraie valeur de `QUOTA_QUOTIDIEN_MAX` (actuellement 3,
   inventé — voir section 3).
3. Brancher les onglets Personnages / Lexique / Sujets / Biographie de
   `/oeuvres/[slug]` (niveau œuvre) sur les données déjà en base — les
   onglets équivalents du **chapitre** le sont déjà depuis cette session.
4. Décider si `profils.filiere` doit être ajouté maintenant (déblocage
   de la filière codée en dur) ou reporté.
5. Construire l'UI élève de dépôt de copie (photo → `copies`), seule
   pièce manquante pour que `/administration` et le bloc Progression du
   tableau de bord affichent des données réelles côté rédaction.
6. Revoir les adaptations pragmatiques listées en section 3 si l'une
   d'elles doit finalement suivre la maquette à la lettre (ex. un vrai
   contenu pour Correcteur IA/Ressources/À propos, ou une distinction
   réelle entre "texte intégral" et "lecteur bilingue").
7. Si le texte intégral des œuvres devient disponible, ajouter une
   feuille "Paragraphes" au fichier Excel (colonnes : oeuvre_slug,
   chapitre_numero, ordre, texte_fr, texte_ar) puis relancer
   `npm run importer` — le script est déjà prêt à la lire.
8. Décider du sort de `PROJECT_CHARTER.md` et de la capture d'écran non
   committée à la racine (laissés par la session parallèle — voir
   avertissement en tête de fichier).
9. La refonte v2 n'a couvert que la partie œuvre/chapitre (nav,
   bannière, onglets, cartes) — le reste du site (accueil, tableau de
   bord, page de rédaction) utilise déjà les nouveaux tokens via les
   classes sémantiques mais n'a pas été comparé composant par composant
   à la maquette v2, faute de référence pour ces pages-là.
