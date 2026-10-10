-- Sujet de français, examen régional 2021 (session normale), académie
-- Drâa-Tafilalet, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2021 جهة درعة تافيلالت »).
-- Corrigé et barème officiels recopiés question par question.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين جهة درعة تافيلالت »,
-- « الامتحان الجهوي الموحد », « الدورة العادية - دورة يونيو 2021 »,
-- « المستوى : السنة الأولى بكالوريا », « المترشحون المتمدرسون »,
-- « المادة: اللغة الأجنبية الأولى - الشعب العلمية والتقنية والمهنية »,
-- durée « ساعتان », 2 pages. Aucun coefficient n'est imprimé : laissé vide.
-- Questions 2 et 8 : pas de barème imprimé sur la feuille ; 1 point
-- (0,5x2) d'après le corrigé, ce qui fait bien 10 points au total.
-- Question 2 : la feuille parle de « mots soulignés dans le texte »
-- (« papiers », ligne 1, et « scène », ligne 11), mais aucun mot n'est
-- souligné dans le texte imprimé ; rien n'est donc mis en gras.
-- Question 5 : sur le corrigé, le barème « 0,5x2 » est barré et remplacé
-- à la main par « 0,25 x 4 ».
-- Question 1 : le corrigé intitule ses colonnes « Source », « Auteur »,
-- « Genre romanesque », « Date de publication » ; les réponses
-- correspondent aux colonnes du sujet.
-- Question 6 b : les trois propositions sont précédées de puces sur la
-- feuille (pas de lettres).
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2021,
  $sujet$normale$sujet$,
  $sujet$Drâa-Tafilalet$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Séries scientifiques, techniques et professionnelles$sujet$,
  120,
  $sujet$## Texte

– Il existe, dit-elle, des papiers pour le prouver, des papiers gardés précieusement par l'imam de la mosquée de notre petite ville. Qui es-tu, toi, femme d'un fabricant de charrues, sans extraction, pour oser mettre ton linge, plein de poux, près du mien fraîchement lavé ? Je sais ce que tu es, une mendiante d'entre les mendiantes, une domestique d'entre les domestiques, une va-nu-pieds, crottée et pouilleuse, une lécheuse de plats qui ne mange jamais à sa faim. Et ton mari ! Parle-moi de cet être difforme, à la barbe rongée de mites, qui sent l'écurie et brait comme un âne ! Que dis-tu ? En parler à ton mari ? Est-ce que moi, je crains ton mari ? Qu'il vienne ! Je lui montrerai de quoi peut être capable une femme de noble origine. Quant à toi, arrête tes piaillements et ramasse tes hardes. Toutes les voisines témoigneront en ma faveur. Tu m'as provoquée. Je ne suis pas une petite fille pour me laisser insulter par une femme de ton espèce.

De notre fenêtre du deuxième étage, pâle d'angoisse et de peur, je suivais la scène, alors que ma mémoire d'enfant enregistrait les phrases violentes.

Le soir, tout abruti de sommeil, j'entendis mon père monter l'escalier. Il entra selon son habitude, se dirigea vers son matelas posé à même le sol. Ma mère prépara le souper, posa la table ronde, le plat de ragoût et le pain. On sentait qu'elle boudait.

Mon père se mit à manger sans poser de questions. Ma mère boudait toujours. Puis elle éleva brusquement la voix et dit :

– Cela ne te fait rien à toi, qu'on nous traîne dans la boue, qu'on nous insulte, qu'on insulte nos nobles origines, nos ancêtres qui faisaient trembler les tribus ! Cela ne te fait rien que les gens de basse extraction tentent de souiller, par des paroles inconvenantes, notre famille qui compte parmi ses morts des hommes courageux, des chefs, des saints et des savants ! Toujours silencieux, mon père continuait à manger.

Ma mère recommença :

– Oui, tout cela ne te fait rien. Que ta femme subisse tous les affronts, ton appétit n'en est pas affecté et tu manges comme à l'ordinaire. Moi, j'ai tellement de peine sur le cœur que je ne mangerai plus jamais de ma vie. Ma mère, se cachant le visage dans ses deux mains, poussa un long sanglot et se mit à pleurer à chaudes larmes. Elle gémissait, se lamentait, se donnait de grandes claques sur les cuisses, chantait sur un air monotone et combien triste tous les malheurs qui l'avaient frappée. Elle énumérait les insultes qu'elle avait reçues, les épithètes dont on l'avait gratifiée, recommençait intarissablement le panégyrique de ses ancêtres qui, par la même occasion, se trouvaient offensés. Mon père, rassasié, but une gorgée d'eau, s'essuya la bouche, tira à lui un coussin pour s'accouder et demanda : - Avec qui t'es-tu encore disputée ?

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant. **(1 point)**

| Œuvre | Auteur | Genre littéraire | Date de publication |
|---|---|---|---|
| | | | |

**2a.** Observez les mots soulignés dans le texte : « papiers » (ligne 1) et « scène » (ligne 11). **En vous appuyant sur vos connaissances de l'œuvre, dites :** a) De quelle « scène » il s'agit.

**2b.** b) À quels « papiers » Zoubida fait allusion.

**3a.** Lisez attentivement le texte et répondez aux questions suivantes : a) Quel type de discours rapporté domine dans le texte : direct, indirect ou indirect libre ? **(1 point)**

**3b.** b) Qui parle le plus souvent et le plus longtemps dans ce discours ?

**4a.** a) Relevez dans le texte deux expressions relevant de l'insulte. **(1 point)**

**4b.** b) Déduisez-en le thème du passage.

**5.** D'après le texte, dites si ces affirmations sont vraies ou fausses. **(1 point)**

| | Vrai | Faux |
|---|---|---|
| a) Zoubida méprise Rahma et la considère parmi les gens de condition sociale modeste. | | |
| b) Zoubida se montre orgueilleuse et manifeste une fierté dédaigneuse et arrogante. | | |
| c) Zoubida apprécie énormément la réaction de son mari. | | |
| d) Zoubida veut se réconcilier avec sa voisine Rahma. | | |

**6a.** « Et ton mari ! (…) brait comme un âne ! » a) Quelle figure de style est utilisée dans cet énoncé ? **(1 point)**

**6b.** b) À travers cette figure de style, Zoubida : **Choisissez la bonne réponse.**

a- Insiste sur la force de la voix du mari de Rahma ;  
b- Compare le mari de Rahma à un âne pour le dévaloriser comme signe d'insulte ;  
c- Oppose le portrait du mari de Rahma à l'âne pour le mettre en valeur.

**7.** Quels sentiments la scène racontée suscite-t-elle en Sidi Mohamed et son père ? **Justifiez vos réponses par des indices relevés dans texte. Aidez-vous du tableau suivant pour répondre à la question.** **(1 point)**

| Sidi Mohamed — Sentiment éprouvé | Sidi Mohamed — Justification (un indice dans le texte) | Abdeslem — Sentiment éprouvé | Abdeslem — Justification (un indice dans le texte) |
|---|---|---|---|
| | | | |

**8.** De quels moyens Zoubida use-t-elle pour faire réagir son mari Abdeslem ? Citez-en deux.

**9.** Abdesslam fait montre d'une grande sérénité au sujet de la dispute. Selon vous, a-t-il raison de ne pas réagir tout de suite aux doléances de sa femme ? Pourquoi ? **Formulez votre réponse en deux ou trois lignes.** **(1 point)**

**10.** À votre avis, Zoubida a-t-elle de bonnes raisons pour s'emporter contre sa voisine Rahma, l'humilier en proférant ce genre d'insultes ? **Justifiez votre réponse en deux ou trois lignes.** **(1 point)**

## II. Production écrite (10 points)

Considérée par Zoubida comme étant de « basse extraction », Rahma est victime de discrimination et d'harcèlement en raison de sa condition sociale.

La discrimination, raciale ou sociale, est-elle justifiable ?

**Organiser votre réflexion en vous appuyant sur des arguments et des exemples précis.**

*Lors de la correction, il sera tenu compte des aspects suivants :*

- *Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte …… (5 points)*
- *Critères d'évaluation de la langue : qualité de la langue (orthographe, syntaxe, vocabulaire, conjugaison) …… (5 points)*$sujet$,
  $sujet$## Corrigé et barème

*Éléments de correction et barème de notation. NB : Toute réponse non prévue est laissée à l'appréciation du professeur correcteur.*

### I. Étude de texte

**1.** **(1 point)**

| Œuvre | Auteur | Genre littéraire | Date de publication |
|---|---|---|---|
| *La Boite à merveilles* | Ahmed Sefrioui | Roman autobiographique | 1954 |

**2a.** La scène de la dispute entre Zoubida et Rahma. (0,5)

**2b.** Les papiers prouvant à qui le droit d'utiliser le patio pour la lessive le lundi. (0,5)

**3a.** Discours direct (0,5) **(1 point)**

**3b.** Zoubida (0,5)

**4a.** une mendiante d'entre les mendiantes, une domestique d'entre les domestiques, une va-nu-pieds, crottée et pouilleuse, une lécheuse de plats qui ne mange jamais à sa faim (0,5) **(1 point)**

**4b.** La querelle, la dispute (0,5)

**5.** **(1 point)**

| | |
|---|---|
| a) Zoubida méprise Rahma et la considère parmi les gens de condition sociale modeste. | Vrai |
| b) Zoubida se montre orgueilleuse et manifeste une fierté dédaigneuse et arrogante. | Vrai |
| c) Zoubida apprécie énormément la réaction de son mari. | Faux |
| d) Zoubida veut se réconcilier avec sa voisine Rahma. | Faux |

**6a.** La comparaison (0,5) **(1 point)**

**6b.** Compare le mari de Rahma à un âne pour le dévaloriser comme signe d'insulte (0,5)

**7.** **(1 point)**

| Sidi Mohamed — Sentiment éprouvé | Sidi Mohamed — Justification (un indice dans le texte) | Abdeslem — Sentiment éprouvé | Abdeslem — Justification (un indice dans le texte) |
|---|---|---|---|
| Angoisse, peur | « pâle d'angoisse et de peur, je suivais la scène » | Sérénité, calme, indifférence | « Mon père se mit à manger sans poser de questions », « Toujours silencieux, mon père continuait à manger » |

**8.** Moyens verbaux : arguments : insulter leurs soi-disant nobles origines, subir les affronts, etc. Moyens non verbaux : pousser des sanglots, pleurer à chaudes larmes, se donner des claques sur les cuisses, etc. (0,5x2)

**9.** Prise de position + justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2) **(1 point)**

**10.** Prise de position + justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2) **(1 point)**

### II. Production écrite

**Critères d'évaluation du discours : (5 points)**

Respect de la consigne (1 point), cohérence des idées (2 points), organisation et progression du texte (2 points)

**Critères d'évaluation de la langue : (5 points)**

Syntaxe (2 points), orthographe (1 point), vocabulaire (1 point), conjugaison (1 point)$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions ci-dessous.", "texte": "– Il existe, dit-elle, des papiers pour le prouver, des papiers gardés précieusement par l'imam de la mosquée de notre petite ville. Qui es-tu, toi, femme d'un fabricant de charrues, sans extraction, pour oser mettre ton linge, plein de poux, près du mien fraîchement lavé ? Je sais ce que tu es, une mendiante d'entre les mendiantes, une domestique d'entre les domestiques, une va-nu-pieds, crottée et pouilleuse, une lécheuse de plats qui ne mange jamais à sa faim. Et ton mari ! Parle-moi de cet être difforme, à la barbe rongée de mites, qui sent l'écurie et brait comme un âne ! Que dis-tu ? En parler à ton mari ? Est-ce que moi, je crains ton mari ? Qu'il vienne ! Je lui montrerai de quoi peut être capable une femme de noble origine. Quant à toi, arrête tes piaillements et ramasse tes hardes. Toutes les voisines témoigneront en ma faveur. Tu m'as provoquée. Je ne suis pas une petite fille pour me laisser insulter par une femme de ton espèce.\n\nDe notre fenêtre du deuxième étage, pâle d'angoisse et de peur, je suivais la scène, alors que ma mémoire d'enfant enregistrait les phrases violentes.\n\nLe soir, tout abruti de sommeil, j'entendis mon père monter l'escalier. Il entra selon son habitude, se dirigea vers son matelas posé à même le sol. Ma mère prépara le souper, posa la table ronde, le plat de ragoût et le pain. On sentait qu'elle boudait.\n\nMon père se mit à manger sans poser de questions. Ma mère boudait toujours. Puis elle éleva brusquement la voix et dit :\n\n– Cela ne te fait rien à toi, qu'on nous traîne dans la boue, qu'on nous insulte, qu'on insulte nos nobles origines, nos ancêtres qui faisaient trembler les tribus ! Cela ne te fait rien que les gens de basse extraction tentent de souiller, par des paroles inconvenantes, notre famille qui compte parmi ses morts des hommes courageux, des chefs, des saints et des savants ! Toujours silencieux, mon père continuait à manger.\n\nMa mère recommença :\n\n– Oui, tout cela ne te fait rien. Que ta femme subisse tous les affronts, ton appétit n'en est pas affecté et tu manges comme à l'ordinaire. Moi, j'ai tellement de peine sur le cœur que je ne mangerai plus jamais de ma vie. Ma mère, se cachant le visage dans ses deux mains, poussa un long sanglot et se mit à pleurer à chaudes larmes. Elle gémissait, se lamentait, se donnait de grandes claques sur les cuisses, chantait sur un air monotone et combien triste tous les malheurs qui l'avaient frappée. Elle énumérait les insultes qu'elle avait reçues, les épithètes dont on l'avait gratifiée, recommençait intarissablement le panégyrique de ses ancêtres qui, par la même occasion, se trouvaient offensés. Mon père, rassasié, but une gorgée d'eau, s'essuya la bouche, tira à lui un coussin pour s'accouder et demanda : - Avec qui t'es-tu encore disputée ?", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant.", "champs": [{"libelle": "Œuvre", "reponse": "*La Boite à merveilles*"}, {"libelle": "Auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Date de publication", "reponse": "1954"}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Observez les mots soulignés dans le texte : « papiers » (ligne 1) et « scène » (ligne 11). **En vous appuyant sur vos connaissances de l'œuvre, dites :** a) De quelle « scène » il s'agit.", "correction": "La scène de la dispute entre Zoubida et Rahma. (0,5)"}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "b) À quels « papiers » Zoubida fait allusion.", "correction": "Les papiers prouvant à qui le droit d'utiliser le patio pour la lessive le lundi. (0,5)"}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "Lisez attentivement le texte et répondez aux questions suivantes : a) Quel type de discours rapporté domine dans le texte : direct, indirect ou indirect libre ?", "correction": "Discours direct (0,5)"}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "b) Qui parle le plus souvent et le plus longtemps dans ce discours ?", "correction": "Zoubida (0,5)"}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "a) Relevez dans le texte deux expressions relevant de l'insulte.", "correction": "une mendiante d'entre les mendiantes, une domestique d'entre les domestiques, une va-nu-pieds, crottée et pouilleuse, une lécheuse de plats qui ne mange jamais à sa faim (0,5)"}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "b) Déduisez-en le thème du passage.", "correction": "La querelle, la dispute (0,5)"}, {"type": "vrai-faux", "numero": "5", "points": 1, "enonce": "D'après le texte, dites si ces affirmations sont vraies ou fausses.", "affirmations": [{"texte": "a) Zoubida méprise Rahma et la considère parmi les gens de condition sociale modeste.", "vrai": true}, {"texte": "b) Zoubida se montre orgueilleuse et manifeste une fierté dédaigneuse et arrogante.", "vrai": true}, {"texte": "c) Zoubida apprécie énormément la réaction de son mari.", "vrai": false}, {"texte": "d) Zoubida veut se réconcilier avec sa voisine Rahma.", "vrai": false}]}, {"type": "libre", "numero": "6a", "points": 0.5, "enonce": "« Et ton mari ! (…) brait comme un âne ! » a) Quelle figure de style est utilisée dans cet énoncé ?", "correction": "La comparaison (0,5)"}, {"type": "choix", "numero": "6b", "points": 0.5, "enonce": "b) À travers cette figure de style, Zoubida : **Choisissez la bonne réponse.**", "options": ["Insiste sur la force de la voix du mari de Rahma ;", "Compare le mari de Rahma à un âne pour le dévaloriser comme signe d'insulte ;", "Oppose le portrait du mari de Rahma à l'âne pour le mettre en valeur."], "bonne": 1}, {"type": "tableau", "numero": "7", "points": 1, "enonce": "Quels sentiments la scène racontée suscite-t-elle en Sidi Mohamed et son père ? **Justifiez vos réponses par des indices relevés dans texte. Aidez-vous du tableau suivant pour répondre à la question.**", "champs": [{"libelle": "Sidi Mohamed — Sentiment éprouvé", "reponse": "Angoisse, peur"}, {"libelle": "Sidi Mohamed — Justification (un indice dans le texte)", "reponse": "« pâle d'angoisse et de peur, je suivais la scène »"}, {"libelle": "Abdeslem — Sentiment éprouvé", "reponse": "Sérénité, calme, indifférence"}, {"libelle": "Abdeslem — Justification (un indice dans le texte)", "reponse": "« Mon père se mit à manger sans poser de questions », « Toujours silencieux, mon père continuait à manger »"}]}, {"type": "libre", "numero": "8", "points": 1, "enonce": "De quels moyens Zoubida use-t-elle pour faire réagir son mari Abdeslem ? Citez-en deux.", "correction": "Moyens verbaux : arguments : insulter leurs soi-disant nobles origines, subir les affronts, etc. Moyens non verbaux : pousser des sanglots, pleurer à chaudes larmes, se donner des claques sur les cuisses, etc. (0,5x2)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Abdesslam fait montre d'une grande sérénité au sujet de la dispute. Selon vous, a-t-il raison de ne pas réagir tout de suite aux doléances de sa femme ? Pourquoi ? **Formulez votre réponse en deux ou trois lignes.**", "correction": "Prise de position + justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "À votre avis, Zoubida a-t-elle de bonnes raisons pour s'emporter contre sa voisine Rahma, l'humilier en proférant ce genre d'insultes ? **Justifiez votre réponse en deux ou trois lignes.**", "correction": "Prise de position + justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2)"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "Considérée par Zoubida comme étant de « basse extraction », Rahma est victime de discrimination et d'harcèlement en raison de sa condition sociale.\n\nLa discrimination, raciale ou sociale, est-elle justifiable ?\n\n**Organiser votre réflexion en vous appuyant sur des arguments et des exemples précis.**\n\n*Lors de la correction, il sera tenu compte des aspects suivants :*\n\n- *Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte …… (5 points)*\n- *Critères d'évaluation de la langue : qualité de la langue (orthographe, syntaxe, vocabulaire, conjugaison) …… (5 points)*", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
