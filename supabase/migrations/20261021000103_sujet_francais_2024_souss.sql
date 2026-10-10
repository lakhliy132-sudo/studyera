-- Sujet de français, examen régional 2024 (session normale), académie
-- Souss-Massa, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2024 جهة سوس ماسة »).
-- Le PDF ne contient pas de corrigé : aucune réponse n'est saisie.
--
-- Académie régionale d'éducation et de formation « جهة سوس ماسة » (« المركز الجهوي
-- للامتحانات »), « الدورة: العادية – يونيو 2024 », « الأولى بكالوريا (متمدرسون) »,
-- code SR02, filières « الآداب والعلوم الإنسانية - العلوم التجريبية – العلوم الرياضية –
-- التكنولوجيات - الفنون التطبيقية - العلوم الاقتصادية والتدبير » ; durée « ساعتان ».
-- Coefficient : 3 pour sciences économiques et gestion, 4 pour les autres
-- séries.
-- « Cependant » est souligné dans le texte sur la feuille (en gras ici) ; à la
-- question 8, « enleva », « roula » et « cacha » sont soulignés (en gras ici).
-- Le PDF ne contient pas de corrigé.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, questions)
values (
  $sujet$francais$sujet$,
  2024,
  $sujet$normale$sujet$,
  $sujet$Souss-Massa$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, technologies, arts appliqués, sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

Après les jours de liesse de l'Achoura, la vie reprit son cours normal, c'est-à-dire retomba dans sa grisaille, retrouva sa monotonie. La chaleur commença à sévir. Des colonies de mouches envahirent la maison, la remplirent de leurs chiures. Les punaises qui sommeillaient dans les vieilles boiseries firent leur apparition. C'étaient de pauvres punaises épuisées par le jeûne et le froid de l'hiver. Elles étaient d'un brun poussiéreux et toutes plates, comme vidées de leur sang.

Quand nous nous installâmes dans cette pièce, leur tribu jouissait d'une grande prospérité. Ma mère leur déclara une guerre totale. Elle utilisa tous les moyens pour en venir à bout. Elle employa des méthodes brutales : chaux vive, talismans\*, poudres diverses achetées chez un faiseur de miracles, invocations\*. Seules quelques familles avaient résisté au massacre. Leurs membres dégénérés traînaient une existence lamentable le long des chevrons et des solives de notre plafond. Ils ne se reproduisaient plus et quand par inadvertance l'un d'eux s'aventurait loin des hauteurs, il se savait condamné. Venir à portée des doigts de l'homme était une manière de suicide, une façon comme une autre de fuir au plus vite ce monde et ses misères.

**Cependant**, les mouches prospéraient de jour en jour. Tous les matins, ma mère les chassait à grands coups de torchon. Elles sortaient par la fenêtre avec le bourdonnement de colère. Le rideau déplié, nous étions à l'abri de ces déplaisantes bestioles. Quelques-unes plus rusées continuaient à faire des rondes dans la pénombre de la pièce.

Dès la première journée de chaleur, ma mère enleva la natte de jonc, la roula et la cacha derrière le lit. Les matelas reposaient directement sur le sol lavé à grande eau.

\***Un talisman** : objet préparé rituellement pour lui conférer une action magique (amulette, fétiche, porte-bonheur)  
\***Invocations** : prières et appels adressés à certains saints ou *chorfas* ou être invisibles pour obtenir leur soutien.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(01pt.)**

| Titre de l'œuvre | Auteur | Genre littéraire | La Ville où se déroule l'histoire |
|---|---|---|---|
| | | | |

**2.** A partir de votre lecture de l'œuvre, répondez par ***Vrai*** ou ***Faux*** : **(01pt.)**

| | Vrai | Faux |
|---|---|---|
| a- L'auteur est un écrivain marocain d'expression arabe ; | | |
| b- Les événements racontés dans l'œuvre se déroulent après l'indépendance du Maroc ; | | |
| c- Le narrateur est aussi personnage principal ; | | |
| d- Le personnage principal passe la majorité de son temps avec les femmes. | | |

**3a.** L'ambiance de la fête s'est-elle prolongée après l'Achoura ? **(0,5pt.)**

**3b.** Justifiez votre réponse à partir du texte. **(0,5pt.)**

**4a.** Est-ce que la mère a pu réduire le nombre de punaises ? **(0,5pt.)**

**4b.** Justifiez votre réponse à partir du texte. **(0,5pt.)**

**5A.** Le mot "*cependant*" souligné dans le texte exprime un rapport logique de : Recopiez la bonne réponse. **(0,5pt.)**

a- *simultanéité* ;  
b- *opposition* ;  
c- *cause* ;  
d- *conséquence.*

**5B.** Donnez un équivalent de "*cependant*" qui exprime le même rapport logique. **(0,5pt.)**

**6.** Relevez et recopiez deux mots intrus (qui n'appartiennent pas) au champ lexical de ***la guerre*** : *chassait ; massacre ; monotonie ; envahirent ; prospéraient ; grands coups.* **(01pt.)**

**7A.** « *Elle employa des méthodes brutales : chaux vive, talismans, poudres diverses achetées chez un faiseur de miracles, invocations.*» Quelle figure de style reconnaissez-vous dans l'énoncé ci-dessus ? **(0,5pt.)**

**7B.** Cette figure de style met en valeur : Recopiez la bonne réponse. **(0,5pt.)**

a- la détermination de la mère à éliminer ces bestioles ;  
b- la détermination de la mère à préserver ces bestioles ;  
c- la détermination de la mère à favoriser la reproduction de ces bestioles.

**8.** [*…ma mère* ***enleva*** *la natte de jonc, la* ***roula*** *et la* ***cacha*** *derrière le lit.*] [soulignés sur la feuille, en gras ici] Le passé simple dans l'énoncé ci-dessus exprime : Recopiez la bonne réponse. **(01pt.)**

a- *La durée des actions* ;  
b- *la succession des actions* ;  
c- *la répétition des actions.*

**9.** Proposez un titre convenable au texte. **(01pt.)**

**10.** Pour combattre les punaises, la mère utilise les talismans et les invocations. Approuvez-vous ce comportement superstitieux de la mère? Justifiez par un argument. **(01pt.)**

## II. Production écrite (10 points)

**Sujet :** Certains pensent que les vacances d'été sont une occasion pour que les élèves se reposent et s'amusent pleinement.

Rédigez un texte argumentatif où vous développez ce point de vue en se demandant si les vacances estivales ne seraient pas aussi le seul moment convenable pour se préparer, avec plaisir, à l'année scolaire suivante (lectures, écritures, révisions…).

***Lors de la rédaction, vous tenez compte des critères suivants***

| *Critères d'évaluation du discours* | | *Critères d'évaluation de la langue* | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | **5 pts** | Vocabulaire (usage de termes précis et variés) | **5 pts** |
| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |
| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |
| | | Respect des règles orthographiques et grammaticales. | |
| | | Conjugaison (emploi des temps verbaux) | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Après les jours de liesse de l'Achoura, la vie reprit son cours normal, c'est-à-dire retomba dans sa grisaille, retrouva sa monotonie. La chaleur commença à sévir. Des colonies de mouches envahirent la maison, la remplirent de leurs chiures. Les punaises qui sommeillaient dans les vieilles boiseries firent leur apparition. C'étaient de pauvres punaises épuisées par le jeûne et le froid de l'hiver. Elles étaient d'un brun poussiéreux et toutes plates, comme vidées de leur sang.\n\nQuand nous nous installâmes dans cette pièce, leur tribu jouissait d'une grande prospérité. Ma mère leur déclara une guerre totale. Elle utilisa tous les moyens pour en venir à bout. Elle employa des méthodes brutales : chaux vive, talismans\\*, poudres diverses achetées chez un faiseur de miracles, invocations\\*. Seules quelques familles avaient résisté au massacre. Leurs membres dégénérés traînaient une existence lamentable le long des chevrons et des solives de notre plafond. Ils ne se reproduisaient plus et quand par inadvertance l'un d'eux s'aventurait loin des hauteurs, il se savait condamné. Venir à portée des doigts de l'homme était une manière de suicide, une façon comme une autre de fuir au plus vite ce monde et ses misères.\n\n**Cependant**, les mouches prospéraient de jour en jour. Tous les matins, ma mère les chassait à grands coups de torchon. Elles sortaient par la fenêtre avec le bourdonnement de colère. Le rideau déplié, nous étions à l'abri de ces déplaisantes bestioles. Quelques-unes plus rusées continuaient à faire des rondes dans la pénombre de la pièce.\n\nDès la première journée de chaleur, ma mère enleva la natte de jonc, la roula et la cacha derrière le lit. Les matelas reposaient directement sur le sol lavé à grande eau.\n\n\\***Un talisman** : objet préparé rituellement pour lui conférer une action magique (amulette, fétiche, porte-bonheur)  \n\\***Invocations** : prières et appels adressés à certains saints ou *chorfas* ou être invisibles pour obtenir leur soutien.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": ""}, {"libelle": "Auteur", "reponse": ""}, {"libelle": "Genre littéraire", "reponse": ""}, {"libelle": "La Ville où se déroule l'histoire", "reponse": ""}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "A partir de votre lecture de l'œuvre, répondez par ***Vrai*** ou ***Faux*** :", "affirmations": [{"texte": "a- L'auteur est un écrivain marocain d'expression arabe ;", "vrai": null}, {"texte": "b- Les événements racontés dans l'œuvre se déroulent après l'indépendance du Maroc ;", "vrai": null}, {"texte": "c- Le narrateur est aussi personnage principal ;", "vrai": null}, {"texte": "d- Le personnage principal passe la majorité de son temps avec les femmes.", "vrai": null}]}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "L'ambiance de la fête s'est-elle prolongée après l'Achoura ?", "correction": ""}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "Justifiez votre réponse à partir du texte.", "correction": ""}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Est-ce que la mère a pu réduire le nombre de punaises ?", "correction": ""}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "Justifiez votre réponse à partir du texte.", "correction": ""}, {"type": "choix", "numero": "5A", "points": 0.5, "enonce": "Le mot \"*cependant*\" souligné dans le texte exprime un rapport logique de : Recopiez la bonne réponse.", "options": ["*simultanéité* ;", "*opposition* ;", "*cause* ;", "*conséquence.*"], "bonne": null}, {"type": "libre", "numero": "5B", "points": 0.5, "enonce": "Donnez un équivalent de \"*cependant*\" qui exprime le même rapport logique.", "correction": ""}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez et recopiez deux mots intrus (qui n'appartiennent pas) au champ lexical de ***la guerre*** : *chassait ; massacre ; monotonie ; envahirent ; prospéraient ; grands coups.*", "correction": ""}, {"type": "libre", "numero": "7A", "points": 0.5, "enonce": "« *Elle employa des méthodes brutales : chaux vive, talismans, poudres diverses achetées chez un faiseur de miracles, invocations.*» Quelle figure de style reconnaissez-vous dans l'énoncé ci-dessus ?", "correction": ""}, {"type": "choix", "numero": "7B", "points": 0.5, "enonce": "Cette figure de style met en valeur : Recopiez la bonne réponse.", "options": ["la détermination de la mère à éliminer ces bestioles ;", "la détermination de la mère à préserver ces bestioles ;", "la détermination de la mère à favoriser la reproduction de ces bestioles."], "bonne": null}, {"type": "choix", "numero": "8", "points": 1, "enonce": "[*…ma mère* ***enleva*** *la natte de jonc, la* ***roula*** *et la* ***cacha*** *derrière le lit.*] [soulignés sur la feuille, en gras ici] Le passé simple dans l'énoncé ci-dessus exprime : Recopiez la bonne réponse.", "options": ["*La durée des actions* ;", "*la succession des actions* ;", "*la répétition des actions.*"], "bonne": null}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Proposez un titre convenable au texte.", "correction": ""}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Pour combattre les punaises, la mère utilise les talismans et les invocations. Approuvez-vous ce comportement superstitieux de la mère? Justifiez par un argument.", "correction": ""}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** Certains pensent que les vacances d'été sont une occasion pour que les élèves se reposent et s'amusent pleinement.\n\nRédigez un texte argumentatif où vous développez ce point de vue en se demandant si les vacances estivales ne seraient pas aussi le seul moment convenable pour se préparer, avec plaisir, à l'année scolaire suivante (lectures, écritures, révisions…).\n\n***Lors de la rédaction, vous tenez compte des critères suivants***\n\n| *Critères d'évaluation du discours* | | *Critères d'évaluation de la langue* | |\n|---|---|---|---|\n| Conformité de la production à la consigne d'écriture | **5 pts** | Vocabulaire (usage de termes précis et variés) | **5 pts** |\n| Cohérence de l'argumentation | | Syntaxe (construction des phrases correctes) | |\n| Structure du texte (organisation et progression du texte) | | Ponctuation (usage d'une ponctuation adéquate) | |\n| | | Respect des règles orthographiques et grammaticales. | |\n| | | Conjugaison (emploi des temps verbaux) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  questions = excluded.questions;
