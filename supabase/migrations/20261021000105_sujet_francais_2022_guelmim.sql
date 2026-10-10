-- Sujet de français, examen régional 2022 (session normale), académie
-- Guelmim-Oued Noun, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2022 جهة كلميم واد نون »).
-- Corrigé et barème officiels recopiés question par question.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين جهة كلميم واد نون »,
-- « الدورة: العادية / يونيو 2022 », « الأولى بكالوريا - مترشحون متمدرسون »,
-- « المدة الزمنية: 2 ساعات ». Coefficient « 3 أو 4 » : 4 pour les sciences
-- expérimentales, sciences mathématiques, technologies et arts appliqués,
-- 3 pour les sciences économiques et gestion ; laissé vide.
-- Question 2 (0,5x2) et question 5 (vrai/faux avec justification, 0.25x4)
-- sont découpées en sous-questions a et b. Question 3 : « 1pt » sur la
-- feuille, « 0.5x2 pt » dans le corrigé.
-- Question 1 : la feuille demande la « Date de publication », le corrigé
-- titre la colonne « Date de parution » et « Nom de l'auteur ».
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2022,
  $sujet$normale$sujet$,
  $sujet$Guelmim-Oued Noun$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Sciences expérimentales, sciences mathématiques, technologies, arts appliqués ; sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

Après déjeuner, nous reçûmes la visite de Lalla Aïcha. Il y avait longtemps que nous n'avions pas eu de ses nouvelles ni de celles de son mari Sidi Larbi le babouchier. Ma mère se hâta de préparer le thé. Elle entreprit ensuite de faire le récit de ses malheurs à sa vieille amie. Elle raconta dans les détails notre équipée au souk des bijoux, l'affreux drame qui se déroula à propos des bracelets, s'interrompit pour pleurer un moment, reprit son histoire entrecoupée de soupirs, d'invocations. Elle prophétisa avec lyrisme, annonça des catastrophes qui ne manqueraient pas de frapper notre foyer si mon père ne se décidait pas à vendre les bracelets de mauvais augure, cause occulte de notre ruine.

Lalla Aicha, par politesse, approuvait, soupirait, dodelinait de la tête, se donnait de légères tapes sur la joue.

Ma mère, enfin, regarda son amie.

– Mais toi ? Tu ne me dis rien sur ta maison. Comment vas-tu ? Comment va ton mari ?

Lalla Aicha, pour toute réponse, enfouit son visage dans ses mains et éclata en sanglots. Un torrent de larmes coula au travers de ses doigts. Son corps fut secoué de violents spasmes. La douleur l'étranglait par moments. Ma mère lui entoura les épaules de ses deux bras et se mit à sangloter avec elle. Lalla Aicha s'arrêta. Les joues encore luisantes de pleurs, le nez humide, elle dit à ma mère :

– Zoubida, je n'ai plus personne au monde, tu es mon amie, tu es ma seule famille. Le fils du péché pour qui je me suis dépouillée, m'a abandonnée pour prendre une seconde femme, la fille d'Abderrahman le coiffeur.

– Allah ! Allah ! cria ma mère, ô ma sœur, ma pauvre sœur, mon Dieu, quelle douleur ! Les deux femmes, de nouveau dans les bras l'une de l'autre, se mirent à sangloter. La chaleur, le lit, ces scènes affreuses dont je sentais, sans le comprendre, tout le tragique, me rendirent vraiment malade. J'eus de violents maux de tête, la fièvre me secoua tout entier. Je me mis à rendre sur ma couverture.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(0, 25 x4 pt)**

| Titre de l'œuvre | L'auteur | Genre littéraire | Date de publication |
|---|---|---|---|
| | | | |

**2a.** Pour situer ce passage, répondez aux questions suivantes : a. En quelle saison se passe cette scène ? **(0,5x2 pt)**

**2b.** b. Le texte évoque un drame qui se déroula au souk des bijoutiers. Lequel ?

**3.** Quelle est la raison de l'inquiétude de Lalla Zoubida dans le premier paragraphe ? Justifiez votre réponse par une phrase tirée du texte. **(1pt)**

**4.** Pourquoi Lalla Aicha était-elle venue rendre visite à la mère du narrateur ? **(1pt)**

**5a.** Répondez par *vrai* ou *faux* et justifiez vos réponses à partir du texte. a. Pour la mère du narrateur, les bracelets sont un porte-bonheur. **(0.25x4 pt)**

**5b.** b. Lalla Zoubida ne s'inquiétait pas du malheur de Lalla Aicha.

**6.** La scène des pleurs des deux femmes avait un effet négatif sur l'enfant. Relevez dans le texte une phrase qui le montre. **(1pt)**

**7.** Quelle est la tonalité qui domine dans les trois derniers paragraphes. **(1pt)**

**8.** « *Un torrent de larmes coula au travers de ses doigts* ». Cette phrase exprime : **Recopiez la bonne réponse.** **(1pt)**

a- Une métaphore  
b- Une hyperbole  
c- Une personnification.

**9.** Est-il préférable de partager ses problèmes et souffrances avec les autres ? Justifiez votre réponse à l'aide d'un seul argument. **(1pt)**

**10.** Certaines personnes croient que certains objets leur portent bonheur ou malheur. Qu'en pensez-vous ? Justifiez votre réponse. **(1pt)**

## II. Production écrite (10 points)

**Sujet :** Beaucoup de jeunes ne cessent de poster et de publier leurs photos, vidéos et données personnelles sur les réseaux sociaux. Cela peut créer d'énormes problèmes. Partagez-vous cette affirmation ?

Développez votre réflexion en l'appuyant par des arguments pertinents et des exemples précis.

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| **Conformité** de la production à la consigne d'écriture | 5 points | **Vocabulaire** (usage des termes précis et variés) | 5 points |
| **Cohérence** de l'argumentation | | **Syntaxe** (construction des phrases correctes) | |
| **Structure** du texte (organisation et progression du texte) | | **Ponctuation** (usage d'une ponctuation adéquate) | |
| | | Respect des règles **orthographiques** et **grammaticales** | |
| | | **Conjugaison** (emploi des temps verbaux) | |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Toute formulation - ou réponse - non prévue est laissée à l'appréciation du professeur correcteur.*

### I. Étude de texte

**1.** **(0, 25 x4 pt)**

| Titre de l'œuvre | L'auteur | Genre littéraire | Date de publication |
|---|---|---|---|
| *La boîte à merveilles* | Ahmed Sefrioui | Roman autobiographique | 1954 |

**2a.** Cette scène se passe pendant l'été. **(0,5x2 pt)**

**2b.** La bagarre entre le père du narrateur et le dellal au souk des bijoux.

**3.** Lalla Zoubida s'inquiète pour les bracelets qui peuvent lui porter malheur. **Justification** : « annonça des catastrophes qui ne manqueraient pas de frapper notre foyer si mon père ne se décidait pas à vendre les bracelets de mauvais augure, cause occulte de notre ruine. » (0.5x2 pt) **(1pt)**

**4.** Lalla Aicha rend visite à la mère du narrateur pour lui annoncer la nouvelle du remariage de son mari Sidi Larbi. **(1pt)**

**5a.** **Faux**, « […] des catastrophes qui ne manqueraient pas de frapper notre foyer » **OU** « les bracelets de mauvais augure, cause occulte de notre ruine ». **(0.25x4 pt)**

**5b.** **Faux**, « Ma mère lui entoura les épaules de ses deux bras et se mit à sangloter avec elle » **OU** « - Allah ! Allah ! cria ma mère, ô ma sœur, ma pauvre sœur, mon Dieu, quelle douleur ! » **OU** « Les deux femmes, de nouveau dans les bras l'une de l'autre, se mirent à sangloter ».

**6.** « Ces scènes affreuses dont je sentais, sans le comprendre, tout le tragique, me rendirent vraiment malade » **OU** « J'eus de violents maux de tête, la fièvre me secoua tout entier » **OU** « Je me mis à rendre sur ma couverture ». **(1pt)**

**7.** La tonalité pathétique. **(1pt)**

**8.** Une hyperbole. **(1pt)**

**9.** Accepter toute formulation où le candidat justifie son point de vue. **(1pt)**

**10.** Accepter toute formulation où le candidat justifie son point de vue. **(1pt)**

### II. Production écrite

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| **Conformité** de la production à la consigne d'écriture | 5 points | **Vocabulaire** (usage des termes précis et variés) | 5 points |
| **Cohérence** de l'argumentation | | **Syntaxe** (construction des phrases correctes) | |
| **Structure** du texte (organisation et progression du texte) | | **Ponctuation** (usage d'une ponctuation adéquate) | |
| | | Respect des règles **orthographiques** et **grammaticales** | |
| | | **Conjugaison** (emploi des temps verbaux) | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Après déjeuner, nous reçûmes la visite de Lalla Aïcha. Il y avait longtemps que nous n'avions pas eu de ses nouvelles ni de celles de son mari Sidi Larbi le babouchier. Ma mère se hâta de préparer le thé. Elle entreprit ensuite de faire le récit de ses malheurs à sa vieille amie. Elle raconta dans les détails notre équipée au souk des bijoux, l'affreux drame qui se déroula à propos des bracelets, s'interrompit pour pleurer un moment, reprit son histoire entrecoupée de soupirs, d'invocations. Elle prophétisa avec lyrisme, annonça des catastrophes qui ne manqueraient pas de frapper notre foyer si mon père ne se décidait pas à vendre les bracelets de mauvais augure, cause occulte de notre ruine.\n\nLalla Aicha, par politesse, approuvait, soupirait, dodelinait de la tête, se donnait de légères tapes sur la joue.\n\nMa mère, enfin, regarda son amie.\n\n– Mais toi ? Tu ne me dis rien sur ta maison. Comment vas-tu ? Comment va ton mari ?\n\nLalla Aicha, pour toute réponse, enfouit son visage dans ses mains et éclata en sanglots. Un torrent de larmes coula au travers de ses doigts. Son corps fut secoué de violents spasmes. La douleur l'étranglait par moments. Ma mère lui entoura les épaules de ses deux bras et se mit à sangloter avec elle. Lalla Aicha s'arrêta. Les joues encore luisantes de pleurs, le nez humide, elle dit à ma mère :\n\n– Zoubida, je n'ai plus personne au monde, tu es mon amie, tu es ma seule famille. Le fils du péché pour qui je me suis dépouillée, m'a abandonnée pour prendre une seconde femme, la fille d'Abderrahman le coiffeur.\n\n– Allah ! Allah ! cria ma mère, ô ma sœur, ma pauvre sœur, mon Dieu, quelle douleur ! Les deux femmes, de nouveau dans les bras l'une de l'autre, se mirent à sangloter. La chaleur, le lit, ces scènes affreuses dont je sentais, sans le comprendre, tout le tragique, me rendirent vraiment malade. J'eus de violents maux de tête, la fièvre me secoua tout entier. Je me mis à rendre sur ma couverture.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "*La boîte à merveilles*"}, {"libelle": "L'auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Date de publication", "reponse": "1954"}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Pour situer ce passage, répondez aux questions suivantes : a. En quelle saison se passe cette scène ?", "correction": "Cette scène se passe pendant l'été."}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "b. Le texte évoque un drame qui se déroula au souk des bijoutiers. Lequel ?", "correction": "La bagarre entre le père du narrateur et le dellal au souk des bijoux."}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Quelle est la raison de l'inquiétude de Lalla Zoubida dans le premier paragraphe ? Justifiez votre réponse par une phrase tirée du texte.", "correction": "Lalla Zoubida s'inquiète pour les bracelets qui peuvent lui porter malheur. **Justification** : « annonça des catastrophes qui ne manqueraient pas de frapper notre foyer si mon père ne se décidait pas à vendre les bracelets de mauvais augure, cause occulte de notre ruine. » (0.5x2 pt)"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Pourquoi Lalla Aicha était-elle venue rendre visite à la mère du narrateur ?", "correction": "Lalla Aicha rend visite à la mère du narrateur pour lui annoncer la nouvelle du remariage de son mari Sidi Larbi."}, {"type": "libre", "numero": "5a", "points": 0.5, "enonce": "Répondez par *vrai* ou *faux* et justifiez vos réponses à partir du texte. a. Pour la mère du narrateur, les bracelets sont un porte-bonheur.", "correction": "**Faux**, « […] des catastrophes qui ne manqueraient pas de frapper notre foyer » **OU** « les bracelets de mauvais augure, cause occulte de notre ruine »."}, {"type": "libre", "numero": "5b", "points": 0.5, "enonce": "b. Lalla Zoubida ne s'inquiétait pas du malheur de Lalla Aicha.", "correction": "**Faux**, « Ma mère lui entoura les épaules de ses deux bras et se mit à sangloter avec elle » **OU** « - Allah ! Allah ! cria ma mère, ô ma sœur, ma pauvre sœur, mon Dieu, quelle douleur ! » **OU** « Les deux femmes, de nouveau dans les bras l'une de l'autre, se mirent à sangloter »."}, {"type": "libre", "numero": "6", "points": 1, "enonce": "La scène des pleurs des deux femmes avait un effet négatif sur l'enfant. Relevez dans le texte une phrase qui le montre.", "correction": "« Ces scènes affreuses dont je sentais, sans le comprendre, tout le tragique, me rendirent vraiment malade » **OU** « J'eus de violents maux de tête, la fièvre me secoua tout entier » **OU** « Je me mis à rendre sur ma couverture »."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Quelle est la tonalité qui domine dans les trois derniers paragraphes.", "correction": "La tonalité pathétique."}, {"type": "choix", "numero": "8", "points": 1, "enonce": "« *Un torrent de larmes coula au travers de ses doigts* ». Cette phrase exprime : **Recopiez la bonne réponse.**", "options": ["Une métaphore", "Une hyperbole", "Une personnification."], "bonne": 1}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Est-il préférable de partager ses problèmes et souffrances avec les autres ? Justifiez votre réponse à l'aide d'un seul argument.", "correction": "Accepter toute formulation où le candidat justifie son point de vue."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Certaines personnes croient que certains objets leur portent bonheur ou malheur. Qu'en pensez-vous ? Justifiez votre réponse.", "correction": "Accepter toute formulation où le candidat justifie son point de vue."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** Beaucoup de jeunes ne cessent de poster et de publier leurs photos, vidéos et données personnelles sur les réseaux sociaux. Cela peut créer d'énormes problèmes. Partagez-vous cette affirmation ?\n\nDéveloppez votre réflexion en l'appuyant par des arguments pertinents et des exemples précis.\n\n| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |\n|---|---|---|---|\n| **Conformité** de la production à la consigne d'écriture | 5 points | **Vocabulaire** (usage des termes précis et variés) | 5 points |\n| **Cohérence** de l'argumentation | | **Syntaxe** (construction des phrases correctes) | |\n| **Structure** du texte (organisation et progression du texte) | | **Ponctuation** (usage d'une ponctuation adéquate) | |\n| | | Respect des règles **orthographiques** et **grammaticales** | |\n| | | **Conjugaison** (emploi des temps verbaux) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
