-- Sujet de français, examen régional 2012 (session normale), académie
-- Casablanca-Settat, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2012 جهة الدار البيضاء سطات »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie du Grand Casablanca (avant le
-- découpage régional de 2015) ; « دورة يونيه 2012 », durée « ساعتان ».
-- Coefficient vide : 4 ou 3 selon la série.
-- Question 9 : la feuille publiée ne montre aucun énoncé souligné ; la
-- question est recopiée telle quelle, avec une note entre crochets.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2012,
  $sujet$normale$sujet$,
  $sujet$Casablanca-Settat$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, arts appliqués, sciences économiques et gestion, sciences et technologies$sujet$,
  120,
  $sujet$## Texte

Le lendemain de notre sortie avec Lalla Aicha, ma mère me fit part de son intention de me garder à la maison durant toute l'absence de mon père. Elle invoqua deux solides raisons : la première: je n'étais plus qu'un paquet d'os et mon teint rappelait l'écorce de grenade; la seconde : ma mère se sentait de plus en plus seule, ma présence lui faisait oublier ses malheurs.

Autant pour se distraire que pour attendrir les saints de la ville sur notre sort, ma mère décida de m'emmener chaque semaine prier sous la coupole d'un Saint. Notre ville foisonne de tombes qui abritent les restes de *chorfas*, de chefs de confréries, de pieux législateurs auxquels la foi populaire reconnaît des pouvoirs. Chaque santon a son jour de visite particulier : le lundi pour Sidi Ahmed ben Yahïa, le mardi pour Sidi Ali Diab, le mercredi pour Sidi Ali Boughaleb, etc. Tout cela, je le savais, tout le monde le savait. Nous trouvions simple, naturel, harmonieux, parfaitement sage ce que nos ancêtres avaient établi. Personne ne se serait avisé d'en rire. Les jours avaient un sens. Pour moi, ils possédaient même une couleur. Le lundi s'associait dans mon imagination au gris clair, le mardi, au gris foncé, un peu fumeux, le mercredi brillait d'un éclat doré comme un soir d'automne, le jeudi froid et bleu contrastait avec le jaune rutilant du vendredi, la pâleur du samedi annonçait le vert triomphant du dimanche. Je n'avais jamais entretenu personne de ces découvertes. Si j'avais été femme, si j'avais été riche, j'aurais porté chaque jour une robe de la couleur qui convenait. Ma vie en aurait été plus belle, plus équilibrée, plus heureuse. Mais je n'étais pas femme et nous n'étions guère riches, surtout depuis le départ de mon père. Ma mère faisait une cuisine maigre, mêlait de la farine d'orge au pain de froment. Elle riait moins, ne racontait plus d'histoires. Il nous restait les longues promenades que nous faisions pour nous rendre aux divers sanctuaires deux ou trois fois par semaine. Nous formulions les mêmes plaintes, demandions la réalisation des mêmes vœux. Nous versions toujours les mêmes larmes indigentes et nous repartions vers notre demeure. Ces visites me fatiguaient. Je ne pouvais pas refuser d'y participer. La présence d'un enfant rendait les hommes de Dieu plus attentifs et plus favorables.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1 point)**

| Nom de l'auteur | Titre de l'oeuvre | Genre littéraire | Deux autres titres du même auteur |
|---|---|---|---|
| | | | |

**2.** Situez le passage par rapport à ce qui précède. **(1 point)**

**3.** Pour quelles raisons la mère voulait-elle garder l'enfant à la maison ? **(1 point)**

**4.** Le narrateur a attribué à chaque jour une couleur. Quel effet ces couleurs produisent- elles sur lui ? **(1 point)**

**5.** Quel sentiment éprouve le narrateur pendant la visite des sanctuaires ? Justifiez votre réponse à l'aide d'un indice relevé dans le texte. **(1 point)**

**6.** Qu'éprouve la mère en l'absence du père ? Justifiez votre réponse par une phrase relevée dans le texte. **(1 point)**

**7.** Le narrateur et sa mère respectent-ils l'existence des saints ? Justifiez votre réponse par une phrase relevée dans le texte. **(1point)**

**8.** Relevez dans le texte quatre termes du champ lexical des saints. **(1point)**

**9.** a- Quelle figure de style reconnaissez-vous dans l'énoncé souligné suivant : [aucun énoncé souligné n'apparaît sur la feuille publiée] b- Quelle information cette figure de style donne-t-elle sur le narrateur ? **(1 point)**

**10.** Avez-vous le même comportement que la mère à l'égard des saints ? Pourquoi? **(1 point)**

## II. Production écrite (10 points)

**Sujet :** Certaines personnes, pour trouver des solutions à leurs problèmes (amour, famille, mariage, chômage…) recourent à des saints.

Pensez-vous que le maraboutisme (les saints, les marabouts) soit le meilleur remède aux problèmes de la vie ?

Développez votre point de vue dans un texte argumenté et illustré d'exemples.

**Dans votre écrit, vous devez :**

| | |
|---|---|
| Respecter la consigne : traiter le sujet proposé ; | 1 point |
| Organiser votre texte : introduction, développement et conclusion ; | 2 points |
| Choisir des arguments précis ; | 2 points |
| Faire attention à la correction de la langue :phrases correctes, vocabulaire précis, orthographe et conjugaison correctes, ponctuation…. | 5 points |$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponse et barème de correction (les réponses non prévues sont laissées à l'appréciation du correcteur).*

### I. Étude de texte

**1.** **(1 point)**

| Nom de l'auteur | Titre de l'oeuvre | Genre littéraire | Deux autres titres du même auteur |
|---|---|---|---|
| Ahmed Sefrioui | La boîte à merveilles | Roman autobiographique | Le Chapelet d'ambre/ Le Jardin des sortilèges / La Maison de servitude |

**2.** Si Abdessalam a quitté sa famille, il est parti à la recherche d'un travail. Le narrateur, sa mère et Lalla Aicha viennent de rendre visite à Si El Arafi… Accepter toute bonne situation. **(1 point)**

**3.** Deux raisons : - l'enfant est malade - Elle se sent seule **(1 point)**

**4.** Pour le narrateur chaque jour a un sens, les couleurs traduisent l'état d'âme de l'enfant : de la tristesse du lundi et du mardi ( gris clair et foncé) à la joie du dimanche ( vert)… Accepter toute bonne réponse **(1 point)**

**5.** - La fatigue, l'ennui - « Ces visites me fatiguaient ». « Nous formulions les mêmes plaintes,..des mêmes vœux….les mêmes larmes.. » **(1 point)**

**6.** - La mère est malheureuse, seule - « Ma mère se sentait de plus en plus seule, ma présence lui faisait oublier ses malheurs ». - « Elle riait moins, ne racontait plus d'histoires ». **(1 point)**

**7.** Oui, « Nous trouvions simple, naturel, harmonieux, parfaitement sage ce que non ancêtres avaient établi. Personne ne se serait avisé d'en rire » **(1point)**

**8.** Chorfas - chefs de confréries – pieux législateurs – santon - sanctuaires – les hommes de Dieu. **(1point)**

**9.** a- Une métaphore b- L'enfant est maigre, chétif, malade **(1 point)**

**10.** Accepter toute réponse justifiée **(1 point)**

### II. Production écrite

Tenir compte des critères suivants : le respect de la consigne : traiter le sujet proposé (1 point) ; l'organisation et la progression de la production : introduction, développement et conclusion (2 points) ; la pertinence des arguments (2 points) ; la correction de la langue : vocabulaire précis, orthographe et conjugaison correctes, ponctuation (5 points). N.B : Ces critères doivent être reportés sur la copie de l'élève.$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Le lendemain de notre sortie avec Lalla Aicha, ma mère me fit part de son intention de me garder à la maison durant toute l'absence de mon père. Elle invoqua deux solides raisons : la première: je n'étais plus qu'un paquet d'os et mon teint rappelait l'écorce de grenade; la seconde : ma mère se sentait de plus en plus seule, ma présence lui faisait oublier ses malheurs.\n\nAutant pour se distraire que pour attendrir les saints de la ville sur notre sort, ma mère décida de m'emmener chaque semaine prier sous la coupole d'un Saint. Notre ville foisonne de tombes qui abritent les restes de *chorfas*, de chefs de confréries, de pieux législateurs auxquels la foi populaire reconnaît des pouvoirs. Chaque santon a son jour de visite particulier : le lundi pour Sidi Ahmed ben Yahïa, le mardi pour Sidi Ali Diab, le mercredi pour Sidi Ali Boughaleb, etc. Tout cela, je le savais, tout le monde le savait. Nous trouvions simple, naturel, harmonieux, parfaitement sage ce que nos ancêtres avaient établi. Personne ne se serait avisé d'en rire. Les jours avaient un sens. Pour moi, ils possédaient même une couleur. Le lundi s'associait dans mon imagination au gris clair, le mardi, au gris foncé, un peu fumeux, le mercredi brillait d'un éclat doré comme un soir d'automne, le jeudi froid et bleu contrastait avec le jaune rutilant du vendredi, la pâleur du samedi annonçait le vert triomphant du dimanche. Je n'avais jamais entretenu personne de ces découvertes. Si j'avais été femme, si j'avais été riche, j'aurais porté chaque jour une robe de la couleur qui convenait. Ma vie en aurait été plus belle, plus équilibrée, plus heureuse. Mais je n'étais pas femme et nous n'étions guère riches, surtout depuis le départ de mon père. Ma mère faisait une cuisine maigre, mêlait de la farine d'orge au pain de froment. Elle riait moins, ne racontait plus d'histoires. Il nous restait les longues promenades que nous faisions pour nous rendre aux divers sanctuaires deux ou trois fois par semaine. Nous formulions les mêmes plaintes, demandions la réalisation des mêmes vœux. Nous versions toujours les mêmes larmes indigentes et nous repartions vers notre demeure. Ces visites me fatiguaient. Je ne pouvais pas refuser d'y participer. La présence d'un enfant rendait les hommes de Dieu plus attentifs et plus favorables.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Nom de l'auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Titre de l'oeuvre", "reponse": "La boîte à merveilles"}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Deux autres titres du même auteur", "reponse": "Le Chapelet d'ambre/ Le Jardin des sortilèges / La Maison de servitude"}]}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Situez le passage par rapport à ce qui précède.", "correction": "Si Abdessalam a quitté sa famille, il est parti à la recherche d'un travail. Le narrateur, sa mère et Lalla Aicha viennent de rendre visite à Si El Arafi… Accepter toute bonne situation."}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Pour quelles raisons la mère voulait-elle garder l'enfant à la maison ?", "correction": "Deux raisons : - l'enfant est malade - Elle se sent seule"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Le narrateur a attribué à chaque jour une couleur. Quel effet ces couleurs produisent- elles sur lui ?", "correction": "Pour le narrateur chaque jour a un sens, les couleurs traduisent l'état d'âme de l'enfant : de la tristesse du lundi et du mardi ( gris clair et foncé) à la joie du dimanche ( vert)… Accepter toute bonne réponse"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Quel sentiment éprouve le narrateur pendant la visite des sanctuaires ? Justifiez votre réponse à l'aide d'un indice relevé dans le texte.", "correction": "- La fatigue, l'ennui - « Ces visites me fatiguaient ». « Nous formulions les mêmes plaintes,..des mêmes vœux….les mêmes larmes.. »"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Qu'éprouve la mère en l'absence du père ? Justifiez votre réponse par une phrase relevée dans le texte.", "correction": "- La mère est malheureuse, seule - « Ma mère se sentait de plus en plus seule, ma présence lui faisait oublier ses malheurs ». - « Elle riait moins, ne racontait plus d'histoires »."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Le narrateur et sa mère respectent-ils l'existence des saints ? Justifiez votre réponse par une phrase relevée dans le texte.", "correction": "Oui, « Nous trouvions simple, naturel, harmonieux, parfaitement sage ce que non ancêtres avaient établi. Personne ne se serait avisé d'en rire »"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Relevez dans le texte quatre termes du champ lexical des saints.", "correction": "Chorfas - chefs de confréries – pieux législateurs – santon - sanctuaires – les hommes de Dieu."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "a- Quelle figure de style reconnaissez-vous dans l'énoncé souligné suivant : [aucun énoncé souligné n'apparaît sur la feuille publiée] b- Quelle information cette figure de style donne-t-elle sur le narrateur ?", "correction": "a- Une métaphore b- L'enfant est maigre, chétif, malade"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Avez-vous le même comportement que la mère à l'égard des saints ? Pourquoi?", "correction": "Accepter toute réponse justifiée"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** Certaines personnes, pour trouver des solutions à leurs problèmes (amour, famille, mariage, chômage…) recourent à des saints.\n\nPensez-vous que le maraboutisme (les saints, les marabouts) soit le meilleur remède aux problèmes de la vie ?\n\nDéveloppez votre point de vue dans un texte argumenté et illustré d'exemples.\n\n**Dans votre écrit, vous devez :**\n\n| | |\n|---|---|\n| Respecter la consigne : traiter le sujet proposé ; | 1 point |\n| Organiser votre texte : introduction, développement et conclusion ; | 2 points |\n| Choisir des arguments précis ; | 2 points |\n| Faire attention à la correction de la langue :phrases correctes, vocabulaire précis, orthographe et conjugaison correctes, ponctuation…. | 5 points |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
