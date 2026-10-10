-- Sujet de français, examen régional 2024 (session normale), académie
-- Dakhla-Oued Ed-Dahab, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2024 جهة الداخلة وادي الذهب »).
-- Corrigé et barème officiels recopiés question par question.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين لجهة الداخلة - وادي الذهب »,
-- « الامتحان الجهوي الموحد لنيل شهادة الباكالوريا - المترشحون المتمدرسون »,
-- « الدورة العادية - يونيو 2024 », matière « اللغة الأجنبية الأولى », « جميع
-- الشعب العلمية والأدبية والتقنية », « المعامل : 4 », « مدة الإنجاز: ساعتان ».
-- Le corrigé (« عناصر الإجابة », « CORRIGÉ ET BARÈME ») n'a pas de phrase
-- d'avertissement : la mention de tête est générique.
-- Dernier paragraphe du texte : la feuille imprime « Pour échapper au bruit
-- des Mes yeux, hélas ! n'avaient plus la force de regarder tambours qui
-- bourdonnait encore sous mon crâne, j'ouvris ma Boîte à Merveilles. Mes
-- yeux , hélas ! n'avaient plus la force de regarder. » (phrase insérée par
-- erreur au milieu) : recopié tel quel.
-- Question 10 : la feuille parle du « dernier paragraphe » pour le départ
-- de Lalla Aicha, qui est dans le troisième ; recopié tel quel.
-- Question 8a : le corrigé accepte « la personnification- Métaphore ».
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, coefficient, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2024,
  $sujet$normale$sujet$,
  $sujet$Dakhla-Oued Ed-Dahab$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Toutes les filières scientifiques, littéraires et techniques$sujet$,
  120,
  4,
  $sujet$## Texte

Ma mère me permit de monter sur la terrasse jouer du tambour. Je compris que les deux femmes avaient des secrets à se communiquer et craignaient mes oreilles indiscrètes. J'étais ravi de l'aubaine. Je montai sur la terrasse. Seul dans ce vaste univers, je me livrai aux joies du rythme. J'inventais les combinaisons les plus barbares. Je tapais sur les deux faces de parchemin de mon sablier en poterie, d'une baguette rageuse. Les murs multipliaient les sons.

Pendant ce temps, Lalla Aicha et ma mère, penchées l'une sur l'autre, papotaient, papotaient, papotaient !...

Le soir, des bouquets de femmes richement vêtues ornaient toutes les terrasses. Les tambourins résonnaient, les chants fusaient de partout. Le soleil en robe d'or s'attardait à l'horizon, baignait toute la ville de rose fané et de mauve délicat. La première étoile clignota. Ce fut le signal. Lalla Aicha embrassa ma mère et partit.

La lampe à pétrole fut allumée. Nous étions sans entrain. Mon tambour et ma trompette gisaient sur un matelas. J'en étais dégoûté. Je retrouvai avec plaisir mes vieux vêtements. De mes habits neufs, je ne gardai que la chemise ; grâce à la chaleur de mon corps, son tissu s'était humanisé.

Pour échapper au bruit des Mes yeux, hélas ! n'avaient plus la force de regarder tambours qui bourdonnait encore sous mon crâne, j'ouvris ma Boîte à Merveilles. Mes yeux , hélas ! n'avaient plus la force de regarder.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant :.. **(0.25 pt x 4)**

| Auteur | Titre de l'œuvre | Genre | Siècle |
|---|---|---|---|
| | | | |

**2.** D'après votre lecture de l'œuvre, répondez par « vrai » ou « faux » : **(0.25 pt x 4)**

| | Vrai | Faux |
|---|---|---|
| a. La famille du narrateur habite à Meknès. | | |
| b. Le métier du mari de Rahma est un jardinier. | | |
| c. Le narrateur a six ans. | | |
| d. Abdallah est le père du narrateur. | | |

**3.** Que fait le narrateur sur la terrasse ? **(01 pt)**

**4.** La description des femmes est-elle péjorative ou méliorative ? Justifiez votre réponse. **(0,5 pt x 2)**

**5.** Quel sentiment le narrateur éprouve-t-il envers ses jouets à la tombée de la nuit ? **(01 pt)**

**6.** Pourquoi le narrateur décide-t-il d'ouvrir sa Boîte à Merveilles ? **(01 pt)**

**7a.** « Lalla Aicha et ma mère, penchées l'une sur l'autre, papotaient … » a- A quel registre de langue appartient le verbe « papoter » ? **(0,5 pt)**

**7b.** b- Trouvez son synonyme dans le registre courant. **(0,5 pt)**

**8a.** « Le soleil en robe d'or s'attardait à l'horizon ». a- Quelle figure de style reconnaissez-vous dans cet énoncé ? **(0,5 pt)**

**8b.** b- Quel en est l'effet recherché ? **(0,5 pt)**

**9.** « Je compris que les deux femmes avaient des secrets à se communiquer et craignaient mes oreilles indiscrètes. » Pensez-vous, comme exprimé par le narrateur dans cette phrase, que les adultes ne doivent pas parler devant les enfants ? Justifiez votre réponse. **(01 pt)**

**10.** Dans le dernier paragraphe, Lalla Aicha part après l'apparition de la première étoile, c'est parce que la femme devrait rentrer chez elle avant qu'il fasse nuit. Êtes-vous d'accord avec cette idée ? Justifiez votre réponse. **(01 pt)**

## II. Production écrite (10 points)

**Sujet :**

Les rôles de la femme ne sont plus limités aux tâches ménagères et au foyer « La maison », ils sont influencés par les changements culturels, sociaux et économiques contemporains. Malgré ces avancées, la société civile continue de débattre sur la place de la femme, cherchant à renforcer son rôle et à promouvoir ses droits.

Êtes-vous d'accord avec les défis que représentent ces changements pour notre pays ?

Rédigez un texte argumentatif dans lequel vous défendez votre point de vue, tout en se basant sur des arguments et des exemples concrets.

**Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction.**

| Critères d'évaluation | Note à accorder |
|---|---|
| **Respect de la consigne (traiter le sujet proposé et non un autre).** | 01 point. |
| **Produire un texte argumentatif cohérent.** | 04 points. |
| **Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation).** | 05 points. |$sujet$,
  $sujet$## Corrigé et barème

*Corrigé et barème de l'académie.*

### I. Étude de texte

**1.** **(0.25 pt x 4)**

| Auteur | Titre de l'œuvre | Genre | Siècle |
|---|---|---|---|
| Ahmed Sefrioui | La boite à merveilles | Roman autobiographique | 20ème |

**2.** **(0.25 pt x 4)**

| | |
|---|---|
| a. La famille du narrateur habite à Meknès. | Faux |
| b. Le métier du mari de Rahma est un jardinier. | Faux |
| c. Le narrateur a six ans. | Vrai |
| d. Abdallah est le père du narrateur. | Faux |

**3.** Il se livrait aux joies du rythme. Il inventait les combinaisons les plus barbares. Il tapait sur les deux faces de parchemin de son sablier en poterie. **(01 pt)**

**4.** La description des femmes est méliorative. « Des bouquets de femmes richement vêtues ornaient toutes les terrasses. ». **(0,5 pt x 2)**

**5.** Le narrateur était dégouté de ses jouets à la tombée de la nuit. **(01 pt)**

**6.** Le narrateur décida d'ouvrir sa Boîte à Merveilles pour échapper au bruit des tambours qui bourdonnait encore sous son crâne. **(01 pt)**

**7a.** « Papoter » appartient au registre familier. **(0,5 pt)**

**7b.** Bavarder (discuter, parler …). **(0,5 pt)**

**8a.** La figure de style est : **la personnification- Métaphore**. *Accepter les deux réponses* **(0,5 pt)**

**8b.** L'effet recherché : montrer la beauté de la couleur du soleil. Acceptez toute réponse bien justifiée. **(0,5 pt)**

**9.** Acceptez toute réponse bien justifiée. **(01 pt)**

**10.** Acceptez toute réponse bien justifiée. **(01 pt)**

### II. Production écrite

Chaque copie sera corrigée à la lumière des critères suivants qu'il s'agit de respecter et de reporter ainsi détaillée sur la copie de l'élève.

| Critères d'évaluation | Note à accorder |
|---|---|
| **Respect de la consigne (traiter le sujet proposé et non un autre).** | 01 point. |
| **Produire un texte argumentatif cohérent.** | 04 points. |
| **Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation).** | 05 points. |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Ma mère me permit de monter sur la terrasse jouer du tambour. Je compris que les deux femmes avaient des secrets à se communiquer et craignaient mes oreilles indiscrètes. J'étais ravi de l'aubaine. Je montai sur la terrasse. Seul dans ce vaste univers, je me livrai aux joies du rythme. J'inventais les combinaisons les plus barbares. Je tapais sur les deux faces de parchemin de mon sablier en poterie, d'une baguette rageuse. Les murs multipliaient les sons.\n\nPendant ce temps, Lalla Aicha et ma mère, penchées l'une sur l'autre, papotaient, papotaient, papotaient !...\n\nLe soir, des bouquets de femmes richement vêtues ornaient toutes les terrasses. Les tambourins résonnaient, les chants fusaient de partout. Le soleil en robe d'or s'attardait à l'horizon, baignait toute la ville de rose fané et de mauve délicat. La première étoile clignota. Ce fut le signal. Lalla Aicha embrassa ma mère et partit.\n\nLa lampe à pétrole fut allumée. Nous étions sans entrain. Mon tambour et ma trompette gisaient sur un matelas. J'en étais dégoûté. Je retrouvai avec plaisir mes vieux vêtements. De mes habits neufs, je ne gardai que la chemise ; grâce à la chaleur de mon corps, son tissu s'était humanisé.\n\nPour échapper au bruit des Mes yeux, hélas ! n'avaient plus la force de regarder tambours qui bourdonnait encore sous mon crâne, j'ouvris ma Boîte à Merveilles. Mes yeux , hélas ! n'avaient plus la force de regarder.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :..", "champs": [{"libelle": "Auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Titre de l'œuvre", "reponse": "La boite à merveilles"}, {"libelle": "Genre", "reponse": "Roman autobiographique"}, {"libelle": "Siècle", "reponse": "20ème"}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "D'après votre lecture de l'œuvre, répondez par « vrai » ou « faux » :", "affirmations": [{"texte": "a. La famille du narrateur habite à Meknès.", "vrai": false}, {"texte": "b. Le métier du mari de Rahma est un jardinier.", "vrai": false}, {"texte": "c. Le narrateur a six ans.", "vrai": true}, {"texte": "d. Abdallah est le père du narrateur.", "vrai": false}]}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Que fait le narrateur sur la terrasse ?", "correction": "Il se livrait aux joies du rythme. Il inventait les combinaisons les plus barbares. Il tapait sur les deux faces de parchemin de son sablier en poterie."}, {"type": "libre", "numero": "4", "points": 1, "enonce": "La description des femmes est-elle péjorative ou méliorative ? Justifiez votre réponse.", "correction": "La description des femmes est méliorative. « Des bouquets de femmes richement vêtues ornaient toutes les terrasses. »."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Quel sentiment le narrateur éprouve-t-il envers ses jouets à la tombée de la nuit ?", "correction": "Le narrateur était dégouté de ses jouets à la tombée de la nuit."}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Pourquoi le narrateur décide-t-il d'ouvrir sa Boîte à Merveilles ?", "correction": "Le narrateur décida d'ouvrir sa Boîte à Merveilles pour échapper au bruit des tambours qui bourdonnait encore sous son crâne."}, {"type": "libre", "numero": "7a", "points": 0.5, "enonce": "« Lalla Aicha et ma mère, penchées l'une sur l'autre, papotaient … » a- A quel registre de langue appartient le verbe « papoter » ?", "correction": "« Papoter » appartient au registre familier."}, {"type": "libre", "numero": "7b", "points": 0.5, "enonce": "b- Trouvez son synonyme dans le registre courant.", "correction": "Bavarder (discuter, parler …)."}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "« Le soleil en robe d'or s'attardait à l'horizon ». a- Quelle figure de style reconnaissez-vous dans cet énoncé ?", "correction": "La figure de style est : **la personnification- Métaphore**. *Accepter les deux réponses*"}, {"type": "libre", "numero": "8b", "points": 0.5, "enonce": "b- Quel en est l'effet recherché ?", "correction": "L'effet recherché : montrer la beauté de la couleur du soleil. Acceptez toute réponse bien justifiée."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "« Je compris que les deux femmes avaient des secrets à se communiquer et craignaient mes oreilles indiscrètes. » Pensez-vous, comme exprimé par le narrateur dans cette phrase, que les adultes ne doivent pas parler devant les enfants ? Justifiez votre réponse.", "correction": "Acceptez toute réponse bien justifiée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Dans le dernier paragraphe, Lalla Aicha part après l'apparition de la première étoile, c'est parce que la femme devrait rentrer chez elle avant qu'il fasse nuit. Êtes-vous d'accord avec cette idée ? Justifiez votre réponse.", "correction": "Acceptez toute réponse bien justifiée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nLes rôles de la femme ne sont plus limités aux tâches ménagères et au foyer « La maison », ils sont influencés par les changements culturels, sociaux et économiques contemporains. Malgré ces avancées, la société civile continue de débattre sur la place de la femme, cherchant à renforcer son rôle et à promouvoir ses droits.\n\nÊtes-vous d'accord avec les défis que représentent ces changements pour notre pays ?\n\nRédigez un texte argumentatif dans lequel vous défendez votre point de vue, tout en se basant sur des arguments et des exemples concrets.\n\n**Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction.**\n\n| Critères d'évaluation | Note à accorder |\n|---|---|\n| **Respect de la consigne (traiter le sujet proposé et non un autre).** | 01 point. |\n| **Produire un texte argumentatif cohérent.** | 04 points. |\n| **Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation).** | 05 points. |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  coefficient = excluded.coefficient,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
