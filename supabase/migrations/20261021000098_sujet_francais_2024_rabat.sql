-- Sujet de français, examen régional 2024 (session normale), académie
-- Rabat-Salé-Kénitra, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2024 جهة الرباط سلا القنيطرة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Rabat-Salé-Kénitra (« الأكاديمية الجهوية للتربية والتكوين لجهة الرباط
-- سلا القنيطرة »), « الدورة العادية 2024 », « الموضوع الرئيسي العادي », « الفئة: الشعب
-- الأدبية والعلمية والتقنية - رسميون » (code RSN 01), durée « من 8س إلى 10س »
-- (« ساعتان » sur le corrigé) ; aucun coefficient sur la feuille.
-- Le sujet est imprimé sur une feuille-réponse (pointillés, cadres « لا يكتب أي
-- شيء في هذا الإطار », page lignée pour la production) : non reproduits.
-- Le sujet ne donne pas de critères pour la production écrite ; seule la
-- grille du corrigé est reportée.
-- Le texte écrit tantôt « Lalla Aïcha », tantôt « Lalla Aicha » ; le corrigé
-- écrit « Moulay Laarbi » : laissés comme sur les feuilles.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2024,
  $sujet$normale$sujet$,
  $sujet$Rabat-Salé-Kénitra$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Séries littéraires, scientifiques et techniques$sujet$,
  120,
  $sujet$## Texte

« Tout le monde soupira de nouveau et Salama poursuivit :

– Tout commença le jour où Kebira, la fille de mon vénéré maître Moulay Abdeslem, me chargea de lui acheter du henné. J'étais à peine arrivée au souk des épices que quelqu'un me toucha discrètement l'épaule. Je me retournai, Moulay Larbi se tenait devant moi, souriant et affable comme à l'ordinaire. Nous échangeâmes les salutations d'usage. Nous parlâmes longuement du mauvais temps qui avait sévi, si vous vous en souvenez bien, un mois durant. Je lui demandai de tes nouvelles, Lalla Aïcha !

– Elle va bien, me dit-il. Il baissa ensuite les yeux et prit une attitude résignée.

– Qu'as-tu, Moulay Larbi ? Me cacherais-tu quelque chose de grave sur les gens de ta maison ?

– Non, répondit Moulay Larbi, je ne te cache rien, mais tu l'as deviné, je suis bien tourmenté. Si tu le voulais, tu pourrais m'aider à calmer mon âme. Comme vous le pensez, j'étais de plus en plus intriguée. Un âne chargé de sacs de sucre passa entre nous deux, nous sépara. Je me plaquai contre le mur et fis signe à Moulay Larbi de me rejoindre. Il échangea quelques insultes avec un passant qui l'avait bousculé et vint finalement tout près de moi pour m'entretenir de ce qui le préoccupait.

– Oui, me dit-il, tu pourrais m'aider. Ma situation prospère de jour en jour. Je gagne largement de quoi faire vivre une famille et même plusieurs ménages. La grande douleur de ma vie, c'est de n'avoir pas d'enfant. Bien sûr, j'estime et je respecte Lalla Aicha, mon épouse actuelle ; cette estime et ce respect, je les crois partagés, mais je ne peux envisager avec sérénité l'avenir tant que je n'ai pas d'héritier. Je l'interrompis pour lui conseiller de voir un médecin.

– Ne m'interromps pas, Salama, me dit-il, je ne crois ni aux médecins, ni aux remèdes. Dans mon cas, il n'y a qu'un seul remède, et si tu voulais, tu pourrais m'aider à me le procurer. J'ouvris de grands yeux et fis celle qui ne comprenait pas.

– Le remède, poursuivit Moulay Larbi, consiste à me trouver une seconde épouse.

– Je ne peux faire cela, Moulay Larbi, j'aime trop Lalla Aïcha pour être à l'origine de son chagrin.

– Lalla Aicha n'aura pas de chagrin, elle souhaite me voir père d'un enfant. Pourtant, je te demanderais de tenir secrète notre conversation. Il ne serait pas convenable de la mettre au courant d'un événement dont les conséquences pourraient blesser son amour-propre.

Avant que j'aie pu répondre à son argument, il me glissa entre les doigts une pièce d'argent toute neuve. Il s'en alla en me recommandant de bien réfléchir à cette affaire et de passer le voir à son atelier dans le courant de la semaine. »

## I. Étude de texte (10 points)

**1.** A. Contextualiser (2points) — Complétez le tableau ci-dessous : **(0.25 x4)**

| Titre de l'œuvre | Auteur | Genre littéraire | Date de parution |
|---|---|---|---|
| | | | |

**2.** Pour situer le passage, cochez **vrai** ou **faux** : **(0.25x4)**

| | Vrai | Faux |
|---|---|---|
| -L'action racontée dans le texte se déroule au printemps. | | |
| -Le narrateur et sa mère ont été invités chez Lalla Aicha. | | |
| -Poussées par leur malheur, Lalla Aicha et Lalla Zoubida ont visité le voyant Sidi El Arafi. | | |
| -Moulay Larbi est un tisserand. | | |

**3.** B. Analyser (6 points) — Que comptait faire Salama avant de rencontrer Moulay Larbi ? **(1pt)**

**4a.** Dans le texte, Salama raconte une scène où Moulay Larbi lui demande un « *remède* ». a- Lequel ? **(0.5x2)**

**4b.** Quelle en est la principale raison ?

**5.** Relevez, dans le texte, un indice justifiant chacune des affirmations suivantes : (Affirmation / Indice du texte) **(0.5x2)**

| -Moulay Larbi préfère la discrétion dans sa demande pour ne pas offenser sa femme. | -Salama hésite à aider Moulay Larbi dans la réalisation de son projet. |
|---|---|
| | |

**6.** Pour persuader Salama, Moulay Larbi avance plusieurs arguments. Relevez-en deux. **(0.5x2)**

**7.** Relevez dans le texte quatre mots appartenant au champ lexical des sentiments. **(1pt)**

**8.** Mettez au discours indirect la phrase suivante : ***Moulay Larbi poursuivit : « Le remède, consiste à me trouver une seconde épouse »*** **(1pt)**

**9.** C. Réagir (2points) — Moulay Larbi estime convenable de ne rien dire à sa femme au sujet de son projet. Lui donneriez-vous raison ? Justifiez votre point de vue à l'aide d'un argument. **(1pt)**

**10.** Eu égard à la raison principale de Moulay Larbi, trouvez-vous Lalla Aicha capable d'approuver sa décision ? Justifiez votre point de vue à l'aide d'un argument. **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

Dans ***La Boîte A Merveilles*** [souligné sur la feuille, en gras ici], les parents de Zineb lui ont adopté un chat et Sidi Mohammed désire attraper un moineau pour en faire son compagnon.

**Ainsi, de nos jours, certaines familles ont tendance à autoriser un animal de compagnie à l'un de leurs membres. Approuvez-vous ce choix ?**

Développez votre réflexion en l'appuyant à l'aide d'arguments pertinents et d'exemples précis.$sujet$,
  $sujet$## Corrigé et barème

*Eléments de réponse*

### I. Étude de texte

**1.** **(0.25 x4)**

| Titre de l'œuvre | Auteur | Genre littéraire | Date de parution |
|---|---|---|---|
| *La Boîte A Merveilles* | Ahmed SEFRIOUI | Roman autobiographique | 1954 |

**2.** **(0.25x4)**

| | |
|---|---|
| -L'action racontée dans le texte se déroule au printemps. | Faux |
| -Le narrateur et sa mère ont été invités chez Lalla Aicha. | Vrai |
| -Poussées par leur malheur, Lalla Aicha et Lalla Zoubida ont visité le voyant Sidi El Arafi. | Vrai |
| -Moulay Larbi est un tisserand. | Faux |

**3.** Avant de rencontrer Moulay Laarbi, Salama se trouvait au souk des épices et comptait acheter du henné pour Kebira. **(1pt)**

**4a.** Le remède que demande Moulay Laarbi est de lui trouver une seconde épouse. **(0.5x2)**

**4b.** La principale raison est son désir d'avoir un enfant.

**5.** **(0.5x2)**

| -Moulay Larbi préfère la discrétion dans sa demande pour ne pas offenser sa femme. | -Salama hésite à aider Moulay Larbi dans la réalisation de son projet. |
|---|---|
| *« je te demanderais de tenir secrète notre conversation »* , *« Il ne serait pas convenable de la mettre au courant d'un événement dont les conséquences pourraient blesser son amour-propre »* **Accepter les deux indices** | *« - Je ne peux faire cela »*, *« « j'aime trop Lalla Aïcha pour être à l'origine de son chagrin »* **Accepter les deux indices** |

**6.** Parmi les arguments de Moulay Laarbi : ✓ *« Ma situation prospère de jour en jour »* ✓ *« Je gagne largement de quoi faire vivre une famille et même plusieurs ménages »* ✓ *« Lalla Aicha n'aura pas de chagrin, elle souhaite me voir père d'un enfant »* ✓ Il veut avoir un héritier. **(0.5x2)**

**7.** Champ lexical des sentiments : « chagrin, douleur, tourmenté, souriant » **(1pt)**

**8.** Discours indirect : Moulay Laarbi poursuivit que le remède consistait à lui trouver une seconde épouse **(1pt)**

**9.** Accepter toute réponse plausible et correctement formulée. **(1pt)**

**10.** Accepter toute réponse plausible et correctement formulée. **(1pt)**

### II. Production écrite

| Les critères d'évaluation |
|---|
| Respect de la consigne : **1 pt** |
| Cohérence de l'argumentation : **2 pts** |
| Respect de la structure argumentative du texte : **2pts** |
| Langue correcte (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation) : **5pts** |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte puis répondez aux questions :", "texte": "« Tout le monde soupira de nouveau et Salama poursuivit :\n\n– Tout commença le jour où Kebira, la fille de mon vénéré maître Moulay Abdeslem, me chargea de lui acheter du henné. J'étais à peine arrivée au souk des épices que quelqu'un me toucha discrètement l'épaule. Je me retournai, Moulay Larbi se tenait devant moi, souriant et affable comme à l'ordinaire. Nous échangeâmes les salutations d'usage. Nous parlâmes longuement du mauvais temps qui avait sévi, si vous vous en souvenez bien, un mois durant. Je lui demandai de tes nouvelles, Lalla Aïcha !\n\n– Elle va bien, me dit-il. Il baissa ensuite les yeux et prit une attitude résignée.\n\n– Qu'as-tu, Moulay Larbi ? Me cacherais-tu quelque chose de grave sur les gens de ta maison ?\n\n– Non, répondit Moulay Larbi, je ne te cache rien, mais tu l'as deviné, je suis bien tourmenté. Si tu le voulais, tu pourrais m'aider à calmer mon âme. Comme vous le pensez, j'étais de plus en plus intriguée. Un âne chargé de sacs de sucre passa entre nous deux, nous sépara. Je me plaquai contre le mur et fis signe à Moulay Larbi de me rejoindre. Il échangea quelques insultes avec un passant qui l'avait bousculé et vint finalement tout près de moi pour m'entretenir de ce qui le préoccupait.\n\n– Oui, me dit-il, tu pourrais m'aider. Ma situation prospère de jour en jour. Je gagne largement de quoi faire vivre une famille et même plusieurs ménages. La grande douleur de ma vie, c'est de n'avoir pas d'enfant. Bien sûr, j'estime et je respecte Lalla Aicha, mon épouse actuelle ; cette estime et ce respect, je les crois partagés, mais je ne peux envisager avec sérénité l'avenir tant que je n'ai pas d'héritier. Je l'interrompis pour lui conseiller de voir un médecin.\n\n– Ne m'interromps pas, Salama, me dit-il, je ne crois ni aux médecins, ni aux remèdes. Dans mon cas, il n'y a qu'un seul remède, et si tu voulais, tu pourrais m'aider à me le procurer. J'ouvris de grands yeux et fis celle qui ne comprenait pas.\n\n– Le remède, poursuivit Moulay Larbi, consiste à me trouver une seconde épouse.\n\n– Je ne peux faire cela, Moulay Larbi, j'aime trop Lalla Aïcha pour être à l'origine de son chagrin.\n\n– Lalla Aicha n'aura pas de chagrin, elle souhaite me voir père d'un enfant. Pourtant, je te demanderais de tenir secrète notre conversation. Il ne serait pas convenable de la mettre au courant d'un événement dont les conséquences pourraient blesser son amour-propre.\n\nAvant que j'aie pu répondre à son argument, il me glissa entre les doigts une pièce d'argent toute neuve. Il s'en alla en me recommandant de bien réfléchir à cette affaire et de passer le voir à son atelier dans le courant de la semaine. »", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "A. Contextualiser (2points) — Complétez le tableau ci-dessous :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "*La Boîte A Merveilles*"}, {"libelle": "Auteur", "reponse": "Ahmed SEFRIOUI"}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Date de parution", "reponse": "1954"}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "Pour situer le passage, cochez **vrai** ou **faux** :", "affirmations": [{"texte": "-L'action racontée dans le texte se déroule au printemps.", "vrai": false}, {"texte": "-Le narrateur et sa mère ont été invités chez Lalla Aicha.", "vrai": true}, {"texte": "-Poussées par leur malheur, Lalla Aicha et Lalla Zoubida ont visité le voyant Sidi El Arafi.", "vrai": true}, {"texte": "-Moulay Larbi est un tisserand.", "vrai": false}]}, {"type": "libre", "numero": "3", "points": 1, "enonce": "B. Analyser (6 points) — Que comptait faire Salama avant de rencontrer Moulay Larbi ?", "correction": "Avant de rencontrer Moulay Laarbi, Salama se trouvait au souk des épices et comptait acheter du henné pour Kebira."}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Dans le texte, Salama raconte une scène où Moulay Larbi lui demande un « *remède* ». a- Lequel ?", "correction": "Le remède que demande Moulay Laarbi est de lui trouver une seconde épouse."}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "Quelle en est la principale raison ?", "correction": "La principale raison est son désir d'avoir un enfant."}, {"type": "tableau", "numero": "5", "points": 1, "enonce": "Relevez, dans le texte, un indice justifiant chacune des affirmations suivantes : (Affirmation / Indice du texte)", "champs": [{"libelle": "-Moulay Larbi préfère la discrétion dans sa demande pour ne pas offenser sa femme.", "reponse": "*« je te demanderais de tenir secrète notre conversation »* , *« Il ne serait pas convenable de la mettre au courant d'un événement dont les conséquences pourraient blesser son amour-propre »* **Accepter les deux indices**"}, {"libelle": "-Salama hésite à aider Moulay Larbi dans la réalisation de son projet.", "reponse": "*« - Je ne peux faire cela »*, *« « j'aime trop Lalla Aïcha pour être à l'origine de son chagrin »* **Accepter les deux indices**"}]}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Pour persuader Salama, Moulay Larbi avance plusieurs arguments. Relevez-en deux.", "correction": "Parmi les arguments de Moulay Laarbi : ✓ *« Ma situation prospère de jour en jour »* ✓ *« Je gagne largement de quoi faire vivre une famille et même plusieurs ménages »* ✓ *« Lalla Aicha n'aura pas de chagrin, elle souhaite me voir père d'un enfant »* ✓ Il veut avoir un héritier."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez dans le texte quatre mots appartenant au champ lexical des sentiments.", "correction": "Champ lexical des sentiments : « chagrin, douleur, tourmenté, souriant »"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Mettez au discours indirect la phrase suivante : ***Moulay Larbi poursuivit : « Le remède, consiste à me trouver une seconde épouse »***", "correction": "Discours indirect : Moulay Laarbi poursuivit que le remède consistait à lui trouver une seconde épouse"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "C. Réagir (2points) — Moulay Larbi estime convenable de ne rien dire à sa femme au sujet de son projet. Lui donneriez-vous raison ? Justifiez votre point de vue à l'aide d'un argument.", "correction": "Accepter toute réponse plausible et correctement formulée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Eu égard à la raison principale de Moulay Larbi, trouvez-vous Lalla Aicha capable d'approuver sa décision ? Justifiez votre point de vue à l'aide d'un argument.", "correction": "Accepter toute réponse plausible et correctement formulée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nDans ***La Boîte A Merveilles*** [souligné sur la feuille, en gras ici], les parents de Zineb lui ont adopté un chat et Sidi Mohammed désire attraper un moineau pour en faire son compagnon.\n\n**Ainsi, de nos jours, certaines familles ont tendance à autoriser un animal de compagnie à l'un de leurs membres. Approuvez-vous ce choix ?**\n\nDéveloppez votre réflexion en l'appuyant à l'aide d'arguments pertinents et d'exemples précis.", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
