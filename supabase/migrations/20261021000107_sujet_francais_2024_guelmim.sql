-- Sujet de français, examen régional 2024 (session normale), académie
-- Guelmim-Oued Noun, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2024 جهة كلميم واد نون »).
-- Corrigé et barème officiels recopiés question par question.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين جهة كلميم واد نون »,
-- « الدورة: العادية 2024 », « الأولى بكالوريا– مترشحون متمدرسون », « المدة
-- الزمنية:2 ساعات ». Coefficient « 3 أو 4 » : 4 pour les lettres et sciences
-- humaines, sciences expérimentales, sciences mathématiques, sciences et
-- technologies, arts appliqués ; 3 pour les sciences économiques et gestion ;
-- laissé vide.
-- Question 2 (0,5x2) et question 4 (vrai/faux avec justification, 0,5x2)
-- découpées en sous-questions a et b ; le corrigé note 4a et 4b (0,25x2 pt)
-- chacune.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2024,
  $sujet$normale$sujet$,
  $sujet$Guelmim-Oued Noun$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies, arts appliqués ; sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

Le soir, tout abruti de sommeil, j'entendis mon père monter l'escalier. Il entra selon son habitude, se dirigea vers son matelas posé à même le sol. Ma mère prépara le souper, posa la table ronde, le plat de ragoût et le pain.

On sentait qu'elle boudait.

Mon père se mit à manger sans poser de questions. Ma mère boudait\* toujours. Puis elle éleva brusquement la voix et dit :

– Cela ne te fait rien à toi, qu'on nous traîne dans la boue, qu'on nous insulte, qu'on insulte nos nobles origines, nos ancêtres qui faisaient trembler les tribus ! Cela ne te fait rien que les gens de basse extraction tentent de souiller, par des paroles inconvenantes, notre famille qui compte parmi ses morts des hommes courageux, des chefs, des saints et des savants !

Toujours silencieux, mon père continuait à manger.

Ma mère recommença :

– Oui, tout cela ne te fait rien. Que ta femme subisse tous les affronts, ton appétit n'en est pas affecté et tu manges comme à l'ordinaire. Moi, j'ai tellement de peine sur le cœur que je ne mangerai plus jamais de ma vie.

Ma mère, se cachant le visage dans ses deux mains, poussa un long sanglot et se mit à pleurer à chaudes larmes. Elle gémissait, se lamentait, se donnait de grandes claques sur les cuisses, chantait sur un air monotone et combien triste tous les malheurs qui l'avaient frappée. Elle énumérait les insultes qu'elle avait reçues, les épithètes dont on l'avait gratifiée, recommençait intarissablement le panégyrique de ses ancêtres qui, par la même occasion, se trouvaient offensés.

Mon père, rassasié, but une gorgée d'eau, s'essuya la bouche, tira à lui un coussin pour s'accouder et demanda :

– Avec qui t'es-tu encore disputée ?

La phrase eut sur ma mère un effet magique. Elle cessa de pleurer.

**\*Bouder: être fâché(e)/ mécontent(e)**

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(0,25x4 pt)**

| Auteur | Œuvre | Genre littéraire | Siècle |
|---|---|---|---|
| | | | |

**2a.** D'après votre connaissance de l'œuvre, répondez aux questions suivantes : **a.** Avec qui la mère du narrateur s'était-elle disputée ? **(0,5x2 pt)**

**2b.** **b.** Quelle était la cause de cette dispute ?

**3.** **Quand** et **où** se passent les évènements de ce passage ? **(0,5x2 pt)**

**4a.** Répondez par **vrai** ou **faux** et justifiez votre réponse à partir du texte. **a.** Le narrateur dormait pendant la conversation de ses parents. **(0,5x2 pt)**

**4b.** **b.** La mère parlait à haute voix.

**5.** Quelle était **la réaction du père** face au comportement de la mère ? Justifiez votre réponse par un indice tiré du texte. **(0,5x2 pt)**

**6.** Lalla Zoubida était fière de ses origines. Relevez dans le texte **deux indices** qui le montrent. **(0,5x2 pt)**

**7.** Relevez dans le texte **quatre** termes appartenant au champ lexical de **la tristesse**. **(1 pt)**

**8.** « *…nos ancêtres qui faisaient trembler les tribus* ». Quelle figure de style reconnaissez-vous dans cette phrase ? **Recopiez la bonne réponse**. **(1 pt)**

a- L'antithèse.  
b- L'hyperbole.  
c- La personnification.

**9.** Lalla Zoubida et sa voisine se sont insultées. Que pensez-vous de ce comportement ? Justifiez votre réponse par **un argument**. **(1 pt)**

**10.** Préférez-vous habiter dans un appartement ou dans une maison indépendante ? Justifiez votre réponse par **un argument**. **(1 pt)**

## II. Production écrite (10 points)

**Sujet :** Certains pensent qu'il faut éviter toutes sortes de relations avec les voisins. Etes-vous d'accord ?

Rédigez un texte argumentatif dans lequel vous exprimez votre point de vue en le justifiant par des arguments et des exemples précis.

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

**1.** **(0,25x4 pt)**

| Auteur | Œuvre | Genre littéraire | Siècle |
|---|---|---|---|
| Ahmed Sefrioui | *La boîte à merveilles* | Roman autobiographique | 20ème |

**2a.** Rahma /la voisine. (0,5 pt) **(0,5x2 pt)**

**2b.** Rahma a décidé de faire la lessive le lundi, jour réservé normalement pour Lalla Zoubida. (0,5 pt)

**3.** **Le soir** à **la maison** (des parents du narrateur). **(0,5x2 pt)**

**4a.** **Faux. Justification :** J'entendis mon père monter l'escalier, … (0,25x2 pt) **(0,5x2 pt)**

**4b.** **Vrai. Justification :** Elle éleva brusquement la voix. … (0,25x2 pt)

**5.** Calme, tranquille, serein (**0,5 pt**). **Justification** : se mit à manger sans poser de questions / tira à lui un coussin pour s'accouder **(0,5 pt)** **(0,5x2 pt)**

**6.** **Les indices :** - … notre famille qui compte parmi ses morts des hommes courageux, des chefs, des saints et des savants. **(0,5 pt)** - … recommençait intarissablement le panégyrique de ses ancêtres. **(0,5 pt)** **(0,5x2 pt)**

**7.** **Champ lexical de la tristesse :** peine, sanglot, pleurer, larmes, gémissait, se lamentait, triste, malheurs … **(0,25x4 pt)** **(1 pt)**

**8.** **L'hyperbole**. **(1 pt)**

**9.** Accepter toute formulation adéquate où le candidat/ la candidate prend position par rapport à la question en justifiant son point de vue. **(1 pt)**

**10.** Accepter toute formulation adéquate où le candidat/ la candidate prend position par rapport à la question en justifiant son point de vue. **(1 pt)**

### II. Production écrite

**LORS DE LA CORRECTION, TENIR COMPTE DES CRITERES SUIVANTS :**

| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |
|---|---|---|---|
| **Conformité** de la production à la consigne d'écriture | 5 points | **Vocabulaire** (usage des termes précis et variés) | 5 points |
| **Cohérence** de l'argumentation | | **Syntaxe** (construction des phrases correctes) | |
| **Structure** du texte (organisation et progression du texte) | | **Ponctuation** (usage d'une ponctuation adéquate) | |
| | | Respect des règles **orthographiques** et **grammaticales** | |
| | | **Conjugaison** (emploi des temps verbaux) | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Le soir, tout abruti de sommeil, j'entendis mon père monter l'escalier. Il entra selon son habitude, se dirigea vers son matelas posé à même le sol. Ma mère prépara le souper, posa la table ronde, le plat de ragoût et le pain.\n\nOn sentait qu'elle boudait.\n\nMon père se mit à manger sans poser de questions. Ma mère boudait\\* toujours. Puis elle éleva brusquement la voix et dit :\n\n– Cela ne te fait rien à toi, qu'on nous traîne dans la boue, qu'on nous insulte, qu'on insulte nos nobles origines, nos ancêtres qui faisaient trembler les tribus ! Cela ne te fait rien que les gens de basse extraction tentent de souiller, par des paroles inconvenantes, notre famille qui compte parmi ses morts des hommes courageux, des chefs, des saints et des savants !\n\nToujours silencieux, mon père continuait à manger.\n\nMa mère recommença :\n\n– Oui, tout cela ne te fait rien. Que ta femme subisse tous les affronts, ton appétit n'en est pas affecté et tu manges comme à l'ordinaire. Moi, j'ai tellement de peine sur le cœur que je ne mangerai plus jamais de ma vie.\n\nMa mère, se cachant le visage dans ses deux mains, poussa un long sanglot et se mit à pleurer à chaudes larmes. Elle gémissait, se lamentait, se donnait de grandes claques sur les cuisses, chantait sur un air monotone et combien triste tous les malheurs qui l'avaient frappée. Elle énumérait les insultes qu'elle avait reçues, les épithètes dont on l'avait gratifiée, recommençait intarissablement le panégyrique de ses ancêtres qui, par la même occasion, se trouvaient offensés.\n\nMon père, rassasié, but une gorgée d'eau, s'essuya la bouche, tira à lui un coussin pour s'accouder et demanda :\n\n– Avec qui t'es-tu encore disputée ?\n\nLa phrase eut sur ma mère un effet magique. Elle cessa de pleurer.\n\n**\\*Bouder: être fâché(e)/ mécontent(e)**", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Œuvre", "reponse": "*La boîte à merveilles*"}, {"libelle": "Genre littéraire", "reponse": "Roman autobiographique"}, {"libelle": "Siècle", "reponse": "20ème"}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "D'après votre connaissance de l'œuvre, répondez aux questions suivantes : **a.** Avec qui la mère du narrateur s'était-elle disputée ?", "correction": "Rahma /la voisine. (0,5 pt)"}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "**b.** Quelle était la cause de cette dispute ?", "correction": "Rahma a décidé de faire la lessive le lundi, jour réservé normalement pour Lalla Zoubida. (0,5 pt)"}, {"type": "libre", "numero": "3", "points": 1, "enonce": "**Quand** et **où** se passent les évènements de ce passage ?", "correction": "**Le soir** à **la maison** (des parents du narrateur)."}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "Répondez par **vrai** ou **faux** et justifiez votre réponse à partir du texte. **a.** Le narrateur dormait pendant la conversation de ses parents.", "correction": "**Faux. Justification :** J'entendis mon père monter l'escalier, … (0,25x2 pt)"}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "**b.** La mère parlait à haute voix.", "correction": "**Vrai. Justification :** Elle éleva brusquement la voix. … (0,25x2 pt)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Quelle était **la réaction du père** face au comportement de la mère ? Justifiez votre réponse par un indice tiré du texte.", "correction": "Calme, tranquille, serein (**0,5 pt**). **Justification** : se mit à manger sans poser de questions / tira à lui un coussin pour s'accouder **(0,5 pt)**"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Lalla Zoubida était fière de ses origines. Relevez dans le texte **deux indices** qui le montrent.", "correction": "**Les indices :** - … notre famille qui compte parmi ses morts des hommes courageux, des chefs, des saints et des savants. **(0,5 pt)** - … recommençait intarissablement le panégyrique de ses ancêtres. **(0,5 pt)**"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez dans le texte **quatre** termes appartenant au champ lexical de **la tristesse**.", "correction": "**Champ lexical de la tristesse :** peine, sanglot, pleurer, larmes, gémissait, se lamentait, triste, malheurs … **(0,25x4 pt)**"}, {"type": "choix", "numero": "8", "points": 1, "enonce": "« *…nos ancêtres qui faisaient trembler les tribus* ». Quelle figure de style reconnaissez-vous dans cette phrase ? **Recopiez la bonne réponse**.", "options": ["L'antithèse.", "L'hyperbole.", "La personnification."], "bonne": 1}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Lalla Zoubida et sa voisine se sont insultées. Que pensez-vous de ce comportement ? Justifiez votre réponse par **un argument**.", "correction": "Accepter toute formulation adéquate où le candidat/ la candidate prend position par rapport à la question en justifiant son point de vue."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Préférez-vous habiter dans un appartement ou dans une maison indépendante ? Justifiez votre réponse par **un argument**.", "correction": "Accepter toute formulation adéquate où le candidat/ la candidate prend position par rapport à la question en justifiant son point de vue."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** Certains pensent qu'il faut éviter toutes sortes de relations avec les voisins. Etes-vous d'accord ?\n\nRédigez un texte argumentatif dans lequel vous exprimez votre point de vue en le justifiant par des arguments et des exemples précis.\n\n| Critères d'évaluation du discours | | Critères d'évaluation de la langue | |\n|---|---|---|---|\n| **Conformité** de la production à la consigne d'écriture | 5 points | **Vocabulaire** (usage des termes précis et variés) | 5 points |\n| **Cohérence** de l'argumentation | | **Syntaxe** (construction des phrases correctes) | |\n| **Structure** du texte (organisation et progression du texte) | | **Ponctuation** (usage d'une ponctuation adéquate) | |\n| | | Respect des règles **orthographiques** et **grammaticales** | |\n| | | **Conjugaison** (emploi des temps verbaux) | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
