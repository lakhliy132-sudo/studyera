-- Sujet de français, examen régional 2022 (session normale), académie
-- Drâa-Tafilalet, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2022 جهة درعة تافيلالت »).
-- Corrigé et barème officiels recopiés question par question.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين جهة درعة تافيلالت »,
-- « الامتحان الجهوي الموحد », « الدورة العادية - يونيو 2022 »,
-- « السنة الأولى بكالوريا », « المترشحون المتمدرسون »,
-- « المادة: اللغة الأجنبية الأولى - الشعب العلمية والتقنية والمهنية »,
-- durée « ساعتان ». Coefficient non unique (« المعامل : الاقتصاد والتدبير : 3 -
-- باقي الشعب : 4 ») : laissé vide.
-- Le texte porte des numéros de ligne dans la marge (5 à 30), retirés ici.
-- Question 2 : plusieurs réponses attendues (deux d'après le corrigé), d'où
-- une question libre avec les propositions dans l'énoncé.
-- La 4e page du PDF est le corrigé d'un autre sujet (académie de Béni
-- Mellal-Khénifra, 2022, deux textes dont un extrait d'Antigone) : ignorée.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2022,
  $sujet$normale$sujet$,
  $sujet$Drâa-Tafilalet$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Séries scientifiques, techniques et professionnelles$sujet$,
  120,
  $sujet$## Texte

A la maison, je trouvai ma mère très ennuyée. Il n'y avait plus de pétrole dans la lampe. Ma mère avait oublié d'en faire acheter. Je lui proposai de faire sa commission. Elle refusa. Driss El Aouad rentra. Ma mère descendit au premier. Je l'entendis chuchoter sur le palier de Rahma. Le pas de Driss El Aouad retentit de nouveau dans l'escalier. Il avait accepté de rendre service à ma mère.

De la rue me parvint la voix grêle d'un vendeur de bougies. « Des bougies et des allumettes », criait-il. Nous ne nous servions plus de bougies. C'était bon pour les gens pauvres, sans argent, ceux qui ne peuvent se payer une belle lampe munie d'une glace pour refléter la lumière, bon aussi pour les personnes arriérées qui craignent les explosions, la fumée et la mauvaise odeur, autant d'inconvénients qui n'existent que dans leur imagination.

La nuit tomba brusquement. Nous attendions impatiemment le retour de notre voisin pour éclairer la chambre. Quelqu'un toussa à la porte d'entrée de la maison. Driss El Aouad demanda s'il n'y avait personne sur son passage. Ma mère se précipita chez Rahma, ramena sa bouteille à moitié pleine de pétrole. A la lumière d'un bout de chandelle, elle dévissa le bec, remplit la lampe, nettoya la mèche de son charbon et alluma.

– Soirée de bénédiction, lui dis-je.

– Que ta soirée soit bénie, me répondit ma mère.

– Lalla Zoubida, appela Lalla Kanza du rez-de-chaussée, bénie soit ta soirée, pourrais-tu me donner un brin de menthe ?

– Sidi Mohammed va te le porter.

Ma mère me donna quelques branches de menthe très parfumée. J'allai fièrement les offrir à la chouafa. Je la trouvai dans le patio (…)

Lalla Kanza, pour me remercier, me mit dans le creux de la main une poignée de grains de sésame. Je pensai que c'était là une part d'un repas mystérieux offert aux génies par la sorcière. J'y goûtai du bout de la langue. Le goût de sésame n'avait rien de suspect. Je mangeai. (…)

Il faisait noir dans l'escalier mais l'obscurité ne m'effrayait guère. Le vide qui s'ouvrait devant moi n'était vide qu'en apparence. Des présences muettes s'écartaient pour me laisser passer. Lorsque j'aurai l'âge requis, toutes ces présences se découvriront à mes yeux de voyant.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1 point)**

| Titre de l'œuvre | Genre de l'œuvre | Date de publication | Une autre œuvre du même auteur |
|---|---|---|---|
| | | | |

**2.** Lesquels de ces événements se produisent avant le texte ? a. Le narrateur raconte sa haine contre le bain maure. b. Abdeslem offre des bijoux à sa femme Zoubida. c. Zoubida et sa voisine visitent le sanctuaire de Sidi Boughaleb. d. Abdeslem part en voyage après la perte de son capital. **(1 point)**

**3.** Recopiez et complétez le tableau suivant. (L'affirmation / *Vrai* ou *Faux* / Justification) **(1 point)**

| a) Zoubida a besoin du pétrole et c'est le mari de Rahma qui lui vient en aide. — *Vrai* ou *Faux* | a) — Justification | b) Le noir fait peur au narrateur. — *Vrai* ou *Faux* | b) — Justification |
|---|---|---|---|
| | | | |

**4.** Trouvez dans le texte deux arguments employés contre l'utilisation des bougies. **(1 point)**

**5.** Relevez dans le texte quatre mots ou expressions du champ lexical de *la lumière*. **(1 point)**

**6a.** Observez **les éléments soulignés** dans cet énoncé : « *...toutes ces présences se découvriront* ***à mes yeux de voyant***. » [souligné sur la feuille, en gras ici] (lignes 30 et 31) a. De quelle figure de style s'agit-il ? **(1 point)**

**6b.** b. Quel **trait de caractère** du narrateur cette figure de style met-elle en avant ?

**7a.** a. Dans le texte, quel sentiment le narrateur éprouve-t-il en portant de la menthe à Kenza? **(1 point)**

**7b.** b. Justifiez votre réponse par une expression ou un mot relevé (e) dans le texte.

**8.** Que représente la lampe à pétrole à cette époque-là ? **(1 point)**

**9.** Si votre voisin frappe à votre porte pour vous demander de lui rendre un service, quelle sera votre réaction ? Justifiez votre réponse. **(1 point)**

**10.** Que pensez-vous des gens qui refusent les objets modernes ? Justifiez votre réponse en deux ou trois lignes. **(1 point)**

## II. Production écrite (10 points)

**Sujet :**

Certaines personnes pensent qu'il est possible de vivre confortablement sans recourir aux nouvelles technologies.

Qu'en pensez-vous ?

Rédigez un texte dans lequel vous exprimez votre point de vue en le justifiant par des arguments pertinents et des exemples précis.

*Important :*

*Lors de la correction, il sera tenu compte des aspects suivants :*

- *Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte …… (5 points)*
- *Critères d'évaluation de la langue : qualité de la langue (orthographe, syntaxe, vocabulaire, conjugaison) …… (5 points)*$sujet$,
  $sujet$## Corrigé et barème

*Éléments de correction et barème de notation. NB : Toute réponse non prévue est laissée à l'appréciation du professeur correcteur.*

### I. Étude de texte

**1.** **(1 point)**

| Titre de l'œuvre | Genre de l'œuvre | Date de publication | Une autre œuvre du même auteur |
|---|---|---|---|
| *La Boîte à merveilles* | Roman autobiographique | 1954 | *Le Chapelet d'ambre* (Accepter toute autre réponse correcte) |

**2.** – Le narrateur raconte sa haine pour le bain maure. – Zoubida et sa voisine visitent le sanctuaire de Sidi Boughaleb. (0,5x2) **(1 point)**

**3.** **(1 point)**

| a) Zoubida a besoin du pétrole et c'est le mari de Rahma qui lui vient en aide. — *Vrai* ou *Faux* | a) — Justification | b) Le noir fait peur au narrateur. — *Vrai* ou *Faux* | b) — Justification |
|---|---|---|---|
| vrai | « Il avait accepté de rendre service à ma mère. » | faux | « l'obscurité ne m'effrayait guère » |

**4.** – « C'était bon pour les gens pauvres, sans argent, ceux qui ne peuvent se payer une belle lampe munie d'une glace pour refléter la lumière » – « …bon pour les personne arriérées qui craignent les explosions, la fumée et la mauvaise odeur… » (0,5x2) **(1 point)**

**5.** Lampe, bougie, refléter, éclairer, etc. (0,25x4) **(1 point)**

**6a.** La métaphore (0,5) **(1 point)**

**6b.** Sa capacité d'inventer des mondes fantastiques. Accepter toute autre réponse correcte (0,5)

**7a.** La fierté (0,5) **(1 point)**

**7b.** « J'allai fièrement les offrir à la *chouafa*. » (0,5)

**8.** Objet moderne, signe de richesse, indice d'appartenance à un rang social. Accepter toute réponse qui convient à l'item. (1) **(1 point)**

**9.** Accepter toute réponse qui convient à l'item. Prise de position + Justification (0,5x2) **(1 point)**

**10.** Accepter toute réponse qui convient à l'item. Prise de position + Justification (0,5x2) **(1 point)**

### II. Production écrite

Critères d'évaluation du discours : (5 points)

- Respect de la consigne (1 point), cohérence des idées (2 points), organisation et progression du texte (2 points)

Critères d'évaluation de la langue : (5 points)

- Syntaxe (2 points), orthographe (1 point), vocabulaire (1 point), conjugaison (1 point)$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions ci-dessous.", "texte": "A la maison, je trouvai ma mère très ennuyée. Il n'y avait plus de pétrole dans la lampe. Ma mère avait oublié d'en faire acheter. Je lui proposai de faire sa commission. Elle refusa. Driss El Aouad rentra. Ma mère descendit au premier. Je l'entendis chuchoter sur le palier de Rahma. Le pas de Driss El Aouad retentit de nouveau dans l'escalier. Il avait accepté de rendre service à ma mère.\n\nDe la rue me parvint la voix grêle d'un vendeur de bougies. « Des bougies et des allumettes », criait-il. Nous ne nous servions plus de bougies. C'était bon pour les gens pauvres, sans argent, ceux qui ne peuvent se payer une belle lampe munie d'une glace pour refléter la lumière, bon aussi pour les personnes arriérées qui craignent les explosions, la fumée et la mauvaise odeur, autant d'inconvénients qui n'existent que dans leur imagination.\n\nLa nuit tomba brusquement. Nous attendions impatiemment le retour de notre voisin pour éclairer la chambre. Quelqu'un toussa à la porte d'entrée de la maison. Driss El Aouad demanda s'il n'y avait personne sur son passage. Ma mère se précipita chez Rahma, ramena sa bouteille à moitié pleine de pétrole. A la lumière d'un bout de chandelle, elle dévissa le bec, remplit la lampe, nettoya la mèche de son charbon et alluma.\n\n– Soirée de bénédiction, lui dis-je.\n\n– Que ta soirée soit bénie, me répondit ma mère.\n\n– Lalla Zoubida, appela Lalla Kanza du rez-de-chaussée, bénie soit ta soirée, pourrais-tu me donner un brin de menthe ?\n\n– Sidi Mohammed va te le porter.\n\nMa mère me donna quelques branches de menthe très parfumée. J'allai fièrement les offrir à la chouafa. Je la trouvai dans le patio (…)\n\nLalla Kanza, pour me remercier, me mit dans le creux de la main une poignée de grains de sésame. Je pensai que c'était là une part d'un repas mystérieux offert aux génies par la sorcière. J'y goûtai du bout de la langue. Le goût de sésame n'avait rien de suspect. Je mangeai. (…)\n\nIl faisait noir dans l'escalier mais l'obscurité ne m'effrayait guère. Le vide qui s'ouvrait devant moi n'était vide qu'en apparence. Des présences muettes s'écartaient pour me laisser passer. Lorsque j'aurai l'âge requis, toutes ces présences se découvriront à mes yeux de voyant.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "*La Boîte à merveilles*"}, {"libelle": "Genre de l'œuvre", "reponse": "Roman autobiographique"}, {"libelle": "Date de publication", "reponse": "1954"}, {"libelle": "Une autre œuvre du même auteur", "reponse": "*Le Chapelet d'ambre* (Accepter toute autre réponse correcte)"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Lesquels de ces événements se produisent avant le texte ? a. Le narrateur raconte sa haine contre le bain maure. b. Abdeslem offre des bijoux à sa femme Zoubida. c. Zoubida et sa voisine visitent le sanctuaire de Sidi Boughaleb. d. Abdeslem part en voyage après la perte de son capital.", "correction": "– Le narrateur raconte sa haine pour le bain maure. – Zoubida et sa voisine visitent le sanctuaire de Sidi Boughaleb. (0,5x2)"}, {"type": "tableau", "numero": "3", "points": 1, "enonce": "Recopiez et complétez le tableau suivant. (L'affirmation / *Vrai* ou *Faux* / Justification)", "champs": [{"libelle": "a) Zoubida a besoin du pétrole et c'est le mari de Rahma qui lui vient en aide. — *Vrai* ou *Faux*", "reponse": "vrai"}, {"libelle": "a) — Justification", "reponse": "« Il avait accepté de rendre service à ma mère. »"}, {"libelle": "b) Le noir fait peur au narrateur. — *Vrai* ou *Faux*", "reponse": "faux"}, {"libelle": "b) — Justification", "reponse": "« l'obscurité ne m'effrayait guère »"}]}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Trouvez dans le texte deux arguments employés contre l'utilisation des bougies.", "correction": "– « C'était bon pour les gens pauvres, sans argent, ceux qui ne peuvent se payer une belle lampe munie d'une glace pour refléter la lumière » – « …bon pour les personne arriérées qui craignent les explosions, la fumée et la mauvaise odeur… » (0,5x2)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Relevez dans le texte quatre mots ou expressions du champ lexical de *la lumière*.", "correction": "Lampe, bougie, refléter, éclairer, etc. (0,25x4)"}, {"type": "libre", "numero": "6a", "points": 0.5, "enonce": "Observez **les éléments soulignés** dans cet énoncé : « *...toutes ces présences se découvriront* ***à mes yeux de voyant***. » [souligné sur la feuille, en gras ici] (lignes 30 et 31) a. De quelle figure de style s'agit-il ?", "correction": "La métaphore (0,5)"}, {"type": "libre", "numero": "6b", "points": 0.5, "enonce": "b. Quel **trait de caractère** du narrateur cette figure de style met-elle en avant ?", "correction": "Sa capacité d'inventer des mondes fantastiques. Accepter toute autre réponse correcte (0,5)"}, {"type": "libre", "numero": "7a", "points": 0.5, "enonce": "a. Dans le texte, quel sentiment le narrateur éprouve-t-il en portant de la menthe à Kenza?", "correction": "La fierté (0,5)"}, {"type": "libre", "numero": "7b", "points": 0.5, "enonce": "b. Justifiez votre réponse par une expression ou un mot relevé (e) dans le texte.", "correction": "« J'allai fièrement les offrir à la *chouafa*. » (0,5)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Que représente la lampe à pétrole à cette époque-là ?", "correction": "Objet moderne, signe de richesse, indice d'appartenance à un rang social. Accepter toute réponse qui convient à l'item. (1)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Si votre voisin frappe à votre porte pour vous demander de lui rendre un service, quelle sera votre réaction ? Justifiez votre réponse.", "correction": "Accepter toute réponse qui convient à l'item. Prise de position + Justification (0,5x2)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Que pensez-vous des gens qui refusent les objets modernes ? Justifiez votre réponse en deux ou trois lignes.", "correction": "Accepter toute réponse qui convient à l'item. Prise de position + Justification (0,5x2)"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nCertaines personnes pensent qu'il est possible de vivre confortablement sans recourir aux nouvelles technologies.\n\nQu'en pensez-vous ?\n\nRédigez un texte dans lequel vous exprimez votre point de vue en le justifiant par des arguments pertinents et des exemples précis.\n\n*Important :*\n\n*Lors de la correction, il sera tenu compte des aspects suivants :*\n\n- *Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte …… (5 points)*\n- *Critères d'évaluation de la langue : qualité de la langue (orthographe, syntaxe, vocabulaire, conjugaison) …… (5 points)*", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
