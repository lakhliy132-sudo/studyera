-- Sujet de français, examen régional 2023 (session normale), académie
-- Drâa-Tafilalet, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2023 جهة درعة تافيلالت »).
-- Corrigé et barème officiels recopiés question par question.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين درعة تافيلالت »,
-- « الامتحان الجهوي الموحد », « الدورة العادية - يونيو 2023 »,
-- « المستوى: السنة الأولى بكالوريا », « المترشحون المتمدرسون »,
-- « المادة: اللغة الأجنبية الأولى - الشعب العلمية والتقنية », durée « ساعتان ».
-- Aucun coefficient n'est imprimé : laissé vide.
-- Le PDF contient deux fois la même chose (pages 4 à 6 identiques aux
-- pages 1 à 3) : sujet sur 2 pages et corrigé sur 1 page.
-- Sur la feuille, la partie I s'intitule « COMPREHENSION DE L'ECRIT » (le
-- corrigé dit « ETUDE DE TEXTE »). La dernière réplique du garde se termine
-- sans point (« tout à fait recouvert ») : recopié tel quel.
-- Question 3 : le corrigé écrit « le cadre de Polynice » (pour « cadavre ») :
-- recopié tel quel.
-- Question 8 b : propositions précédées de puces sur la feuille (pas de
-- lettres).
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2023,
  $sujet$normale$sujet$,
  $sujet$Drâa-Tafilalet$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Séries scientifiques et techniques$sujet$,
  120,
  $sujet$## Texte

**CRÉON** - Qui garde le corps ?

**LE GARDE** - On a appelé la relève, chef.

**CRÉON** - Je t'avais dit de la renvoyer ! Je t'avais dit de ne rien dire.

**LE GARDE** - On n'a rien dit, chef. Mais comme on a arrêté celle-là, on a pensé qu'il fallait qu'on vienne. Et cette fois on n'a pas tiré au sort. On a préféré venir tous les trois.

**CRÉON** - Imbéciles ! (*A Antigone.*) Où t'ont-ils arrêtée ?

**LE GARDE** - Près du cadavre, chef.

**CRÉON** - Qu'allais-tu faire près du cadavre de ton frère ? Tu savais que j'avais interdit de l'approcher.

**LE GARDE** - Ce qu'elle faisait, chef ? C'est pour ça qu'on vous l'amène. Elle grattait la terre avec ses mains. Elle était en train de le recouvrir encore une fois.

**CRÉON** - Sais-tu bien ce que tu es en train de dire, toi ?

**LE GARDE** - Chef, vous pouvez demander aux autres. On avait dégagé le corps à mon retour; mais avec le soleil qui chauffait, comme il commençait à sentir, on s'est mis sur une petite hauteur, pas loin, pour être dans le vent. On se disait qu'en plein jour on ne risquait rien. Pourtant, on avait décidé, pour être plus sûrs, qu'il y en aurait toujours un de nous trois qui le regarderait. Mais à midi, en plein soleil, et puis avec l'odeur qui montait depuis que le vent était tombé, c'était comme un coup de massue. J'avais beau écarquiller les yeux, ça tremblait comme de la gélatine, je voyais plus. Je vais au camarade lui demander une chique, pour passer ça… Le temps que je me la cale à la joue, chef, le temps que je lui dise merci, je me retourne : elle était là à gratter avec ses mains. En plein jour ! Elle devait bien penser qu'on ne pouvait pas ne pas la voir. Et quand elle a vu que je lui courais dessus, vous croyez qu'elle s'est arrêtée, qu'elle a essayé de se sauver, peut-être ? Non. Elle a continué de toutes ses forces aussi vite qu'elle pouvait, comme si elle ne me voyait pas arriver. Et quand je l'ai empoignée, elle se débattait comme une diablesse, elle voulait continuer encore, elle me criait de la laisser, que le corps n'était pas encore tout à fait recouvert

**CRÉON**, *à Antigone.* - C'est vrai ?

**ANTIGONE** - Oui, c'est vrai.

**LE GARDE** - On a découvert le corps, comme de juste, et puis on a passé la relève, sans parler de rien, et on est venu vous l'amener, chef. Voilà.

**CRÉON** - Et cette nuit, la première fois, c'était toi aussi ?

**ANTIGONE** - Oui. C'était moi. Avec une petite pelle de fer qui nous servait à faire des châteaux de sable sur la plage, pendant les vacances. C'était justement la pelle de Polynice. Il avait gravé son nom au couteau sur le manche. C'est pour cela que je l'ai laissée près de lui. Mais ils l'ont prise. Alors la seconde fois, j'ai dû recommencer avec mes mains.

**LE GARDE** - On aurait dit une petite bête qui grattait. Même qu'au premier coup d'œil, avec l'air chaud qui tremblait, le camarade dit : « Mais non, c'est une bête. » « Penses-tu, je lui dis, c'est trop fin pour une bête. C'est une fille. »

**CRÉON** - C'est bien. On vous demandera peut-être un rapport tout à l'heure. Pour le moment, laissez-moi seul avec elle. Conduis ces hommes à côté, petit. Et qu'ils restent au secret jusqu'à ce que je revienne les voir.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant. **(1 point)**

| Titre de l'œuvre | Auteur | Genre | Une autre œuvre du même auteur |
|---|---|---|---|
| | | | |

**2.** Quels événements parmi ceux-ci se sont produits **avant** [souligné sur la feuille, en gras ici] cette scène ? a- Antigone charge le garde de remettre une lettre à Hémon. b- Les gardes ont surpris Antigone en train d'enterrer le cadavre. c- Hémon a mis fin à ses jours en se suicidant. d- Antigone est sortie à quatre heures du matin à l'insu de sa famille. **(1 point)**

**3.** Pourquoi les gardes font-ils venir Antigone auprès de Créon ? **(1 point)**

**4.** Pourquoi Antigone se défend-elle contre le garde Jonas ? **(1 point)**

**5a.** a- Antigone a-t-elle renié (*refusé de reconnaître comme vrai*) son acte ? **(1 point)**

**5b.** b- De quel trait moral Antigone fait-elle preuve dans cette scène ?

**6.** Quel ordre le *petit* reçoit-il de Créon ? **(1 point)**

**7.** Relevez deux mots exprimant ***l'ordre*** dans la scène. **(1 point)**

**8a.** « *… elle se débattait comme une diablesse* ». a- Quelle est la figure de style employée dans l'énoncé ci-dessus ? **(1 point)**

**8b.** b- Quel en est l'effet recherché ? **(Choisir la bonne réponse)**

a- Renforcer l'image de la fragilité d'Antigone.  
b- Créer une atmosphère de calme et de sérénité.  
c- Renforcer l'image de la force et de la détermination d'Antigone.  
d- Créer une atmosphère humoristique.

**9.** « *Laissez-moi seul avec elle* ». Pourquoi, à votre avis, Créon exige-t-il une discussion en tête-à-tête avec Antigone ? Développez, en deux ou trois lignes, votre point de vue. **(1 point)**

**10.** Partagez-vous l'avis de Créon lorsqu'il qualifie les gardes d'« *imbéciles* » ? Formulez votre réponse en deux ou trois lignes. **(1 point)**

## II. Production écrite (10 points)

**Sujet :**

Beaucoup de gens pensent que de nos jours, on ne peut échapper aux moments de stress et de tension psychologique, sans moyen (s) de les éviter, et considèrent cela comme une fatalité (*ce qui doit nécessairement arriver*) de notre temps.

Partagez-vous ce point de vue ?

Rédigez un texte argumentatif dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples pertinents.

*Important :*

*Lors de la correction, il sera tenu compte des aspects suivants :*

- *Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte (5 points)*
- *Critères d'évaluation de la langue : qualité de la langue (orthographe, syntaxe, vocabulaire, conjugaison) (5 points)*$sujet$,
  $sujet$## Corrigé et barème

*Éléments de correction et barème de notation. NB : Toute réponse – ou formulation - non prévue est laissée à l'appréciation du professeur correcteur.*

### I. Étude de texte

**1.** **(1 point)**

| Titre de l'œuvre | Auteur | Genre | Une autre œuvre du même auteur |
|---|---|---|---|
| *Antigone* | Jean Anouilh | Tragédie moderne | *Le Voyageur sans bagage, Eurydice* (Une œuvre seulement) |

**2.** – Les gardes ont surpris Antigone en train d'enterrer le cadavre. – Antigone est sortie à quatre heures du matin à l'insu de sa famille. (0,5x2) **(1 point)**

**3.** Parce qu'ils l'ont attrapée en train de recouvrir le cadre de Polynice. (1) **(1 point)**

**4.** Elle veut recouvrir le corps de Polynice/ Le corps n'est pas tout à fait recouvert. (1) **(1 point)**

**5a.** Non, elle a avoué son acte/elle reconnaît son acte (avoir enterré le cadavre de Polynice) (0,5) **(1 point)**

**5b.** Le courage /la franchise/la sincérité/l'audace/la détermination, etc. (0,5)

**6.** Conduire les gardes à côté et de les garder en secret. (1) **(1 point)**

**7.** Laissez-moi… – Conduis, etc. (0,5x2) **(1 point)**

**8a.** La comparaison. (0,5) **(1 point)**

**8b.** Renforcer l'image de la force et de la détermination d'Antigone. (0,5)

**9.** Justification. *Le correcteur jugera de la pertinence de la réponse et notera en conséquence.* (1) **(1 point)**

**10.** Prise de position. Justification. *Le correcteur jugera de la pertinence de la réponse et notera en conséquence.* (0,5x2) **(1 point)**

### II. Production écrite

**Critères d'évaluation et barème**

- Critères d'évaluation du discours : …… **(5 points)**
  - Respect de la consigne …… (1 point)
  - Cohérence des idées …… (2 points)
  - Organisation et progression du texte …… (2 points)
- Critères d'évaluation de la langue : …… **(5 points)**
  - Syntaxe …… (2 points)
  - Orthographe …… (1 point)
  - Vocabulaire …… (1 point)
  - Conjugaison …… (1 point)$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**CRÉON** - Qui garde le corps ?\n\n**LE GARDE** - On a appelé la relève, chef.\n\n**CRÉON** - Je t'avais dit de la renvoyer ! Je t'avais dit de ne rien dire.\n\n**LE GARDE** - On n'a rien dit, chef. Mais comme on a arrêté celle-là, on a pensé qu'il fallait qu'on vienne. Et cette fois on n'a pas tiré au sort. On a préféré venir tous les trois.\n\n**CRÉON** - Imbéciles ! (*A Antigone.*) Où t'ont-ils arrêtée ?\n\n**LE GARDE** - Près du cadavre, chef.\n\n**CRÉON** - Qu'allais-tu faire près du cadavre de ton frère ? Tu savais que j'avais interdit de l'approcher.\n\n**LE GARDE** - Ce qu'elle faisait, chef ? C'est pour ça qu'on vous l'amène. Elle grattait la terre avec ses mains. Elle était en train de le recouvrir encore une fois.\n\n**CRÉON** - Sais-tu bien ce que tu es en train de dire, toi ?\n\n**LE GARDE** - Chef, vous pouvez demander aux autres. On avait dégagé le corps à mon retour; mais avec le soleil qui chauffait, comme il commençait à sentir, on s'est mis sur une petite hauteur, pas loin, pour être dans le vent. On se disait qu'en plein jour on ne risquait rien. Pourtant, on avait décidé, pour être plus sûrs, qu'il y en aurait toujours un de nous trois qui le regarderait. Mais à midi, en plein soleil, et puis avec l'odeur qui montait depuis que le vent était tombé, c'était comme un coup de massue. J'avais beau écarquiller les yeux, ça tremblait comme de la gélatine, je voyais plus. Je vais au camarade lui demander une chique, pour passer ça… Le temps que je me la cale à la joue, chef, le temps que je lui dise merci, je me retourne : elle était là à gratter avec ses mains. En plein jour ! Elle devait bien penser qu'on ne pouvait pas ne pas la voir. Et quand elle a vu que je lui courais dessus, vous croyez qu'elle s'est arrêtée, qu'elle a essayé de se sauver, peut-être ? Non. Elle a continué de toutes ses forces aussi vite qu'elle pouvait, comme si elle ne me voyait pas arriver. Et quand je l'ai empoignée, elle se débattait comme une diablesse, elle voulait continuer encore, elle me criait de la laisser, que le corps n'était pas encore tout à fait recouvert\n\n**CRÉON**, *à Antigone.* - C'est vrai ?\n\n**ANTIGONE** - Oui, c'est vrai.\n\n**LE GARDE** - On a découvert le corps, comme de juste, et puis on a passé la relève, sans parler de rien, et on est venu vous l'amener, chef. Voilà.\n\n**CRÉON** - Et cette nuit, la première fois, c'était toi aussi ?\n\n**ANTIGONE** - Oui. C'était moi. Avec une petite pelle de fer qui nous servait à faire des châteaux de sable sur la plage, pendant les vacances. C'était justement la pelle de Polynice. Il avait gravé son nom au couteau sur le manche. C'est pour cela que je l'ai laissée près de lui. Mais ils l'ont prise. Alors la seconde fois, j'ai dû recommencer avec mes mains.\n\n**LE GARDE** - On aurait dit une petite bête qui grattait. Même qu'au premier coup d'œil, avec l'air chaud qui tremblait, le camarade dit : « Mais non, c'est une bête. » « Penses-tu, je lui dis, c'est trop fin pour une bête. C'est une fille. »\n\n**CRÉON** - C'est bien. On vous demandera peut-être un rapport tout à l'heure. Pour le moment, laissez-moi seul avec elle. Conduis ces hommes à côté, petit. Et qu'ils restent au secret jusqu'à ce que je revienne les voir.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant.", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "*Antigone*"}, {"libelle": "Auteur", "reponse": "Jean Anouilh"}, {"libelle": "Genre", "reponse": "Tragédie moderne"}, {"libelle": "Une autre œuvre du même auteur", "reponse": "*Le Voyageur sans bagage, Eurydice* (Une œuvre seulement)"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Quels événements parmi ceux-ci se sont produits **avant** [souligné sur la feuille, en gras ici] cette scène ? a- Antigone charge le garde de remettre une lettre à Hémon. b- Les gardes ont surpris Antigone en train d'enterrer le cadavre. c- Hémon a mis fin à ses jours en se suicidant. d- Antigone est sortie à quatre heures du matin à l'insu de sa famille.", "correction": "– Les gardes ont surpris Antigone en train d'enterrer le cadavre. – Antigone est sortie à quatre heures du matin à l'insu de sa famille. (0,5x2)"}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Pourquoi les gardes font-ils venir Antigone auprès de Créon ?", "correction": "Parce qu'ils l'ont attrapée en train de recouvrir le cadre de Polynice. (1)"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Pourquoi Antigone se défend-elle contre le garde Jonas ?", "correction": "Elle veut recouvrir le corps de Polynice/ Le corps n'est pas tout à fait recouvert. (1)"}, {"type": "libre", "numero": "5a", "points": 0.5, "enonce": "a- Antigone a-t-elle renié (*refusé de reconnaître comme vrai*) son acte ?", "correction": "Non, elle a avoué son acte/elle reconnaît son acte (avoir enterré le cadavre de Polynice) (0,5)"}, {"type": "libre", "numero": "5b", "points": 0.5, "enonce": "b- De quel trait moral Antigone fait-elle preuve dans cette scène ?", "correction": "Le courage /la franchise/la sincérité/l'audace/la détermination, etc. (0,5)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Quel ordre le *petit* reçoit-il de Créon ?", "correction": "Conduire les gardes à côté et de les garder en secret. (1)"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez deux mots exprimant ***l'ordre*** dans la scène.", "correction": "Laissez-moi… – Conduis, etc. (0,5x2)"}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "« *… elle se débattait comme une diablesse* ». a- Quelle est la figure de style employée dans l'énoncé ci-dessus ?", "correction": "La comparaison. (0,5)"}, {"type": "choix", "numero": "8b", "points": 0.5, "enonce": "b- Quel en est l'effet recherché ? **(Choisir la bonne réponse)**", "options": ["Renforcer l'image de la fragilité d'Antigone.", "Créer une atmosphère de calme et de sérénité.", "Renforcer l'image de la force et de la détermination d'Antigone.", "Créer une atmosphère humoristique."], "bonne": 2}, {"type": "libre", "numero": "9", "points": 1, "enonce": "« *Laissez-moi seul avec elle* ». Pourquoi, à votre avis, Créon exige-t-il une discussion en tête-à-tête avec Antigone ? Développez, en deux ou trois lignes, votre point de vue.", "correction": "Justification. *Le correcteur jugera de la pertinence de la réponse et notera en conséquence.* (1)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Partagez-vous l'avis de Créon lorsqu'il qualifie les gardes d'« *imbéciles* » ? Formulez votre réponse en deux ou trois lignes.", "correction": "Prise de position. Justification. *Le correcteur jugera de la pertinence de la réponse et notera en conséquence.* (0,5x2)"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nBeaucoup de gens pensent que de nos jours, on ne peut échapper aux moments de stress et de tension psychologique, sans moyen (s) de les éviter, et considèrent cela comme une fatalité (*ce qui doit nécessairement arriver*) de notre temps.\n\nPartagez-vous ce point de vue ?\n\nRédigez un texte argumentatif dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples pertinents.\n\n*Important :*\n\n*Lors de la correction, il sera tenu compte des aspects suivants :*\n\n- *Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte (5 points)*\n- *Critères d'évaluation de la langue : qualité de la langue (orthographe, syntaxe, vocabulaire, conjugaison) (5 points)*", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
