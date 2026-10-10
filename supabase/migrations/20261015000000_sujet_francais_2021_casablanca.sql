-- Sujet de français, examen régional 2021, académie de
-- Casablanca-Settat, sur La Boîte à merveilles d'Ahmed Sefrioui. Transcrit
-- mot pour mot depuis le PDF officiel de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2021 جهة الدار
-- البيضاء سطات الدورة العادية ») : sujet sur 2 pages, « Corrigé et
-- barème » sur 1 page.
--
-- En-tête : « SESSION NORMALE 2021 », « Durée : 2 heures », « SERIES
-- SCIENTIFIQUES, TECHNIQUES ET PROFESSIONNELLES ». Le coefficient reste
-- vide : « 4 3/4 3/4 », plusieurs valeurs pour une seule colonne.
--
-- La question 8 (0.5ptx2) est découpée en 8a (figure) et 8b (effet).
-- L'énoncé souligné en gras du texte est en gras.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2021,
  $sujet$normale$sujet$,
  $sujet$Casablanca-Settat$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Séries scientifiques, techniques et professionnelles$sujet$,
  120,
  $sujet$## Texte

Mon père venait se faire raser les cheveux depuis son installation à Fès, dans la boutique de Si Abderrahman.

Les barbiers participent à de nombreuses cérémonies familiales. A ma naissance, mon père, montagnard transplanté dans la grande ville, désirait néanmoins fêter dignement mon arrivée au monde. Si Abderrahman lui fut d'un excellent conseil. Il vint, selon l'usage, accompagné de ses deux apprentis, placer les invités et faire le service pendant le repas.

Lors de ma première coupe de cheveux, mon père eut recours à ses soins et fit encore grand cas de ses avis et recommandations.

Je n'aimais pas Si Abderrahman. Je savais qu'il serait chargé de me circoncire. Je redoutais ce jour. Je sentais des frissons me parcourir l'épiderme quand je le voyais manier le rasoir ou les ciseaux.

Nous le trouvâmes occupé à pratiquer une saignée. Le client présentait sa nuque rasée. Si Abderrahman se penchait sur le cou du patient. Je détournai les yeux de ce spectacle.

Si Abderrahman planta deux ventouses en fer-blanc derrière la tête de l'inconnu et nous souhaita en termes courtois une heureuse journée.

- Je vois, dit-il, que ce jeune homme a été gâté: un tambour, une trompette, un magnifique chariot et un cierge. Il est vrai que le cierge est destiné au *fqih*. Il faut toujours être très bien avec son maître, sinon, gare à la baguette de cognassier.

Tout le monde se mit à rire. Je rougissais d'indignation. La baguette de cognassier n'a rien de risible. Ces messieurs n'en avaient jamais reçu sur la plante des pieds, au point de ne pouvoir se tenir debout. Ils pouvaient rire. La baguette de cognassier inspire à ceux qui la connaissent un sentiment de crainte et de respect.

**Un homme sec, avec une barbe de bouc et un turban monumental**, souleva le rideau d'entrée. Il geignait tant qu'il pouvait. Pour tout salut, il se contenta de hocher la tête d'un mouvement affirmatif. Il s'écroula entre les accoudoirs d'une chaise rigide et continua à geindre.

- Tu me parais encore bien fatigué, oncle Hammad ! Puis-je t'être utile?

- Si Abderrahman, je vais mourir.

## I- Etude de texte : (10 points)

1- Recopiez et complétez le tableau suivant : **(0.25pt x4)**

| Auteur | Titre | Genre littéraire | Une autre œuvre du même auteur |
|---|---|---|---|
| | | | |

2- Pour situer le passage, choisissez la bonne réponse. **(1pt)**
- Ce passage se situe :

a- avant la fête de l'Achoura. b- pendant la fête de l'Achoura. c- après la fête de Achoura .

3- Citez deux (2) autres activités exercées par Si Abderrahman le barbier ? **(0.5ptx2)**

4- Pourquoi le narrateur n'aime-t-il pas Si Abderrahman ? **(1pt)**

5- Qui est décrit par l'énoncé souligné en gras dans le texte ? **(1pt)**

6- Pourquoi Sidi Mohammed n'a-t-il pas accepté le rire des messieurs présents dans la boutique du barbier ? **(1pt)**

7- Relevez, dans le texte, 4 mots appartenant au champ lexical du métier de **barbier**. **(0.25pt x4)**

8- « *Je vois, dit-il, que ce jeune homme a été gâté: un tambour, une trompette, un magnifique chariot et un cierge."*

a- Quelle figure de style reconnaissez-vous dans l'énoncé précédent ? **(0.5ptx2)**
b- Quel en est l'effet recherché ?

9- La boutique du barbier était-elle un espace de joie pour le narrateur ? Justifier. **(1pt)**

10- Que peut-on dire de la place qu'occupait le barbier dans la vie des hommes à cette époque ? **(1pt)**

**(Les réponses aux deux dernières questions doivent être argumentées).**

## II- Production écrite : (10 points)

**Sujet :** A l'époque de Ahmed Sefrioui, les barbiers comme d'autres artisans accomplissaient des activités relevant plutôt de la médecine comme celle de circoncire les enfants, arracher les dents, pratiquer des saignées sur la nuque des adultes et bien d'autres pratiques. Ces activités, pratiquées par des gens non spécialistes en médecine, pouvaient avoir des conséquences parfois regrettables.

**Pensez-vous que, même de nos jours, on doit encore accorder notre confiance à ces artisans ?**

Dans une production écrite argumentée et avec des exemples à l'appui, développez votre réflexion en vous référant à votre expérience personnelle, votre entourage et vos lectures.

*(Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction.)*

| Critère d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |
| Produire un texte argumentatif, cohérent et bien structuré. | 4 points. |
| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |$sujet$,
  $sujet$## Corrigé et barème

*Ce corrigé est donné à titre indicatif. Le professeur correcteur jugera de la validité des réponses non prévues.*

### I- Etude de texte : (10 points)

**1-** Recopiez et complétez le tableau suivant : **(0.25pt x4)**

| Auteur | Titre | Genre littéraire | Une autre œuvre du même auteur |
|---|---|---|---|
| Ahmed Sefrioui | *La boîte à merveilles* | Roman (autobiographique) | Le chapelet d'Ambre… |

**2-** Ce passage se situe après : **b- pendant la fête de l'Achoura.** **(1pt)**

**3-** Des activités exercées par Sidi Abderrahman : **serviteur dans les cérémonies, placer les invités, faire le service pendant les repas, conseiller, procéder à la circoncision.** **(1pt)**

**4-** …parce qu'**il savait qu'il serait chargé de sa circoncision.** **(1pt)**

**5-** C'est **Oncle Hammad.** **(1pt)**

**6-** Il n'a pas accepté car c'est un rire qui **ne** se justifie **pas.** D'autant plus que la baguette du cognassier **doit inspirer non pas le rire mais la crainte et le respect.** **(1pt)**

**7-** Le champ lexical du métier de barbier : **coupe, rasoir, ciseaux, rasée, barbe…** **(0.25pt x4)**

**8-** **Une énumération** : **(0.5ptx2)**
Effet : Pour insister sur le nombre des jouets pour un enfant jugé « gâté » par le barbier.

**9-** Non, du tout, Elle était au contraire un espace qui ne lui inspire pas confiance. **(1pt)**

**10-** Il occupait une place de choix, incontournable dans la vie des hommes : coiffer les cheveux, organiser les fêtes, consultant, … **(1pt)**

**(Les réponses à ces deux dernières questions sont laissées à l'appréciation du correcteur.)**

### II- Production écrite : (10 points)

***Chaque copie DOIT être corrigée à la lumière des critères suivants qu'il importe de respecter et de détailler IMPERATIVEMENT sur chaque copie.***

| Critère d'évaluation | Note à accorder |
|---|---|
| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |
| Produire un texte argumentatif, cohérent et bien structuré. | 4 points. |
| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |$sujet$,
  $sujet${"parties": [{"titre": "I- Etude de texte", "points": 10, "consigne": "Lis attentivement le texte et réponds aux questions.", "texte": "Mon père venait se faire raser les cheveux depuis son installation à Fès, dans la boutique de Si Abderrahman.\n\nLes barbiers participent à de nombreuses cérémonies familiales. A ma naissance, mon père, montagnard transplanté dans la grande ville, désirait néanmoins fêter dignement mon arrivée au monde. Si Abderrahman lui fut d'un excellent conseil. Il vint, selon l'usage, accompagné de ses deux apprentis, placer les invités et faire le service pendant le repas.\n\nLors de ma première coupe de cheveux, mon père eut recours à ses soins et fit encore grand cas de ses avis et recommandations.\n\nJe n'aimais pas Si Abderrahman. Je savais qu'il serait chargé de me circoncire. Je redoutais ce jour. Je sentais des frissons me parcourir l'épiderme quand je le voyais manier le rasoir ou les ciseaux.\n\nNous le trouvâmes occupé à pratiquer une saignée. Le client présentait sa nuque rasée. Si Abderrahman se penchait sur le cou du patient. Je détournai les yeux de ce spectacle.\n\nSi Abderrahman planta deux ventouses en fer-blanc derrière la tête de l'inconnu et nous souhaita en termes courtois une heureuse journée.\n\n- Je vois, dit-il, que ce jeune homme a été gâté: un tambour, une trompette, un magnifique chariot et un cierge. Il est vrai que le cierge est destiné au *fqih*. Il faut toujours être très bien avec son maître, sinon, gare à la baguette de cognassier.\n\nTout le monde se mit à rire. Je rougissais d'indignation. La baguette de cognassier n'a rien de risible. Ces messieurs n'en avaient jamais reçu sur la plante des pieds, au point de ne pouvoir se tenir debout. Ils pouvaient rire. La baguette de cognassier inspire à ceux qui la connaissent un sentiment de crainte et de respect.\n\n**Un homme sec, avec une barbe de bouc et un turban monumental**, souleva le rideau d'entrée. Il geignait tant qu'il pouvait. Pour tout salut, il se contenta de hocher la tête d'un mouvement affirmatif. Il s'écroula entre les accoudoirs d'une chaise rigide et continua à geindre.\n\n- Tu me parais encore bien fatigué, oncle Hammad ! Puis-je t'être utile?\n\n- Si Abderrahman, je vais mourir.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Auteur", "reponse": "Ahmed Sefrioui"}, {"libelle": "Titre", "reponse": "La boîte à merveilles"}, {"libelle": "Genre littéraire", "reponse": "Roman (autobiographique)"}, {"libelle": "Une autre œuvre du même auteur", "reponse": "Le chapelet d'Ambre…"}]}, {"type": "choix", "numero": "2", "points": 1, "enonce": "Pour situer le passage, choisissez la bonne réponse. Ce passage se situe :", "options": ["avant la fête de l'Achoura.", "pendant la fête de l'Achoura.", "après la fête de Achoura ."], "bonne": 1}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Citez deux (2) autres activités exercées par Si Abderrahman le barbier ?", "correction": "Serviteur dans les cérémonies, placer les invités, faire le service pendant les repas, conseiller, procéder à la circoncision."}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Pourquoi le narrateur n'aime-t-il pas Si Abderrahman ?", "correction": "…parce qu'il savait qu'il serait chargé de sa circoncision."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Qui est décrit par l'énoncé souligné en gras dans le texte ?", "correction": "C'est Oncle Hammad."}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Pourquoi Sidi Mohammed n'a-t-il pas accepté le rire des messieurs présents dans la boutique du barbier ?", "correction": "Il n'a pas accepté car c'est un rire qui ne se justifie pas. D'autant plus que la baguette du cognassier doit inspirer non pas le rire mais la crainte et le respect."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Relevez, dans le texte, 4 mots appartenant au champ lexical du métier de barbier.", "correction": "Coupe, rasoir, ciseaux, rasée, barbe…"}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "« Je vois, dit-il, que ce jeune homme a été gâté: un tambour, une trompette, un magnifique chariot et un cierge. » Quelle figure de style reconnaissez-vous dans l'énoncé précédent ?", "correction": "Une énumération."}, {"type": "libre", "numero": "8b", "points": 0.5, "enonce": "Quel en est l'effet recherché ?", "correction": "Pour insister sur le nombre des jouets pour un enfant jugé « gâté » par le barbier."}, {"type": "libre", "numero": "9", "points": 1, "enonce": "La boutique du barbier était-elle un espace de joie pour le narrateur ? Justifier.", "correction": "Non, du tout, Elle était au contraire un espace qui ne lui inspire pas confiance. (Réponse laissée à l'appréciation du correcteur.)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Que peut-on dire de la place qu'occupait le barbier dans la vie des hommes à cette époque ?", "correction": "Il occupait une place de choix, incontournable dans la vie des hommes : coiffer les cheveux, organiser les fêtes, consultant, … (Réponse laissée à l'appréciation du correcteur.)"}]}, {"titre": "II- Production écrite", "points": 10, "texte": "**Sujet :** A l'époque de Ahmed Sefrioui, les barbiers comme d'autres artisans accomplissaient des activités relevant plutôt de la médecine comme celle de circoncire les enfants, arracher les dents, pratiquer des saignées sur la nuque des adultes et bien d'autres pratiques. Ces activités, pratiquées par des gens non spécialistes en médecine, pouvaient avoir des conséquences parfois regrettables.\n\n**Pensez-vous que, même de nos jours, on doit encore accorder notre confiance à ces artisans ?**\n\nDans une production écrite argumentée et avec des exemples à l'appui, développez votre réflexion en vous référant à votre expérience personnelle, votre entourage et vos lectures.\n\n*(Votre copie sera corrigée à la lumière des critères suivants qu'il faut respecter lors de la rédaction.)*\n\n| Critère d'évaluation | Note à accorder |\n|---|---|\n| Respect de la consigne (traiter le sujet proposé et non un autre). | 1 point. |\n| Produire un texte argumentatif, cohérent et bien structuré. | 4 points. |\n| Langue (vocabulaire, syntaxe, orthographe, conjugaison et ponctuation). | 5 points. |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
