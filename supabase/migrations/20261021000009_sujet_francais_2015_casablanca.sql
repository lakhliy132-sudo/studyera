-- Sujet de français, examen régional 2015 (session normale), académie
-- Casablanca-Settat, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2015 جهة الدار البيضاء سطات »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie « لجهة الدار البيضاء الكبرى »
-- (Grand Casablanca, avant le découpage régional de 2015) ; « دورة يونيه
-- 2015 » (le PDF code l'année « 1025 »), « مدة الإنجاز : ساعتان ». La
-- filière est traduite de la liste des branches. Coefficient vide : 4 ou 3
-- selon la série.
-- Barème de la question 6 : « 0,5pt » dans le sujet, « 1pt » dans le
-- corrigé ; le sujet fait foi pour le mode entraînement.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2015,
  $sujet$normale$sujet$,
  $sujet$Casablanca-Settat$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, arts appliqués, sciences économiques et gestion, sciences et technologies$sujet$,
  120,
  $sujet$## Texte

Le lendemain vendredi, mon père rentra déjeuner selon sa coutume. Il portait une djellaba de laine boutonnée d'une éblouissante blancheur et un turban neuf, tout raide d'apprêt.

Le repas fut servi par ma mère. Le menu était particulièrement soigné. Nous mangeâmes du mouton aux artichauts sauvages, du couscous au sucre et à la cannelle et pour finir une délicieuse salade d'oranges à l'huile d'olive.

Nous sirotâmes de nombreux verres de thé à la menthe. Au centre du plateau, deux roses d'Ispahan s'épanouissaient dans une vieille tasse de porcelaine.

Ma mère soupira. Elle s'adressa à mon père:

- Le sort se montre parfois bien cruel. Pauvres et riches, bons et méchants sont à la merci de ses revers. J'ai bien du chagrin ! Je pense à Lalla Aïcha et mon cœur saigne. Je n'ai pas voulu t'ennuyer hier soir avec les tristes événements qui se sont déroulés dans la journée.

Mon père prêta une oreille attentive. Elle poursuivit :

- Moulay Larbi, le mari de Lalla Aïcha, s'est disputé avec son associé, un certain Abdelkader fils de je ne sais qui. ..

Elle leva les yeux au plafond pour invoquer :

- Dieu écarte de notre chemin, de celui de nos enfants et les enfants de nos enfants, tous les fils du péché qui se présentent le sourire aux lèvres et la poitrine pleine de ténèbres. Sois notre protecteur et notre mandataire : Amine ! Cet Abdelkader, ce fils de l'adultère, ce disciple de Satan ne possédait pas une chemise propre quand Moulay Larbi le prit comme ouvrier dans son atelier à Mechatine. Il le traita avec bienveillance, lui prêta de l'argent, le reçut souvent à déjeuner ou à dîner. Abdelkader se montrait poli et même obséquieux. Il chantait les mérites de Moulay Larbi, louait sa générosité, son bon caractère et la noblesse de ses sentiments. Tous les deux travaillaient beaucoup. Les babouches brodées jouissent auprès des femmes de Fès d'un grand succès. La production de Moulay Larbi et de son ouvrier avait bonne réputation. Abdelkader songea à se marier. Moulay Larbi l'encouragea dans cette voie et Lalla Aïcha lui trouva une jeune fille digne d'éloges. Les mariages coûtent toujours très cher. Malgré ses nuits de veille, Abdelkader n'avait pas su économiser. Il se trouva assez gêné lorsqu'il fallut verser une dot à sa fiancée. Il eut recours à son patron. Moulay Larbi réussit à assembler quatre-vingts rials. Il les lui versa sans méfiance. Il commit la faute de lui avancer cet argent sans établir de papier de reconnaissance de dette. Pour permettre à Abdelkader de gagner davantage, il l'associa à son affaire.

- Sais-tu comment ce fils du péché l'a remercié de ses bienfaits?

Mon père ne savait pas.

Ma mère ne lui laissa d'ailleurs pas le temps de répondre...

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(0,25 pt x4)**

| Titre de l'œuvre | Genre littéraire | Personnage principal | Auteur |
|---|---|---|---|
| | | | |

**2.** Situez ce passage dans l'œuvre en choisissant l'une des trois propositions suivantes : **(1pt)**

a- Juste après la visite de Lalla Aïcha et de Lalla Zoubida à Sidi Ali Boughaleb .  
b- Juste après le retour de Mâalem Abdeslam et de Sidi Mohamed de chez le coiffeur .  
c- Juste après la visite rendue par Lalla Zoubida à Lalla Aïcha, chez elle, à Zankat Hajjama.

**3a.** Quelle expression dans le texte montre que Mâalem Abdeslam déjeune chaque vendredi chez lui ? **(0,5pt)**

**3b.** De quoi se composait le menu du repas de ce vendredi ? **(0,5pt)**

**3c.** Pourquoi ce menu était particulièrement soigné ? **(0,5pt)**

**4.** Lalla Zoubida fait plusieurs reproches à Moulay Larbi. Citez-en deux. **(0,5 pt x2)**

**5.** Quelle est la tonalité dominante (registre littéraire) dans le passage qui va : de : « Dieu écarte de notre chemin................à : il l'associa à son affaire. » ? Choisissez la bonne réponse parmi les propositions suivantes et justifiez-la : **(0,5 pt x2)**

a- Comique  
b- Satirique  
c- Epique

**6.** « Ma mère ne lui laissa d'ailleurs pas le temps de répondre.», cet énoncé veut-il dire que : **(0,5pt)**

a- la mère du narrateur interdit à son mari de parler,  
b- elle n'attendait pas de réponse de la part de son mari,  
c- le mari ne s'intéressait pas du tout à ce que racontait sa femme.

**7.** « Je n'ai pas voulu t'ennuyer hier soir. » Cet énoncé fait-il partie du récit ou du discours ? Justifiez par deux indices. **(0,5 pt x2)**

**8a.** « Je pense à Lalla Aïcha et mon cœur saigne. » Quelle figure de style comporte cet énoncé ? **(0,5pt)**

**8b.** Que nous permet-elle d'apprendre sur le personnage de Lalla Zoubida? **(0,5pt)**

**9.** Selon vous, quel jugement Mâalem Abdeslam pourrait-il porter sur sa femme Lalla Zoubida, après son récit agressif ? Pourquoi ? **(0.5ptx2)**

**10.** Partagez-vous le jugement sévère de Lalla Zoubida à l'égard de Abdelkader ? Justifiez votre point de vue. **(0.5ptx2)**

## II. Production écrite (10 points)

**Sujet :** La bonté, la solidarité et la générosité sont des valeurs nobles dans la société. Pourtant, il arrive qu'elles soient mal récompensées comme c'est le cas de Abdelkader avec Moulay Larbi, son patron.

Pensez-vous que ce comportement soit une raison suffisante pour refuser toute aide à autrui (aux autres) ?

Justifiez votre point de vue par des arguments et des exemples pertinents.

**Lors de la correction de votre copie, on tiendra compte des critères suivants :**

| Critères de réalisation de l'écrit à produire | Note attribuée |
|---|---|
| Respect de la consigne (traiter le sujet proposé) | 1 point |
| Organisation du texte | 2 points |
| Choix d'arguments précis et pertinents | 2 points |
| Correction de la langue: syntaxe, vocabulaire, adéquat, orthographe, conjugaison, ponctuation | 5 points |$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponses donnés à titre indicatif.*

### I. Étude de texte

**1.** **(0,25 pt x4)**

| Titre de l'œuvre | Genre littéraire | Personnage principal | Auteur |
|---|---|---|---|
| La Boîte à merveilles | Roman (à caractère) autobiographique | Sidi Mohamed | Ahmed SEFRIOUI |

**2.** c- Juste après la visite rendue par Lalla Zoubida à Lalla Aïcha, chez elle, à Zankat Hajjama. **(1pt)**

**3a.** « selon sa coutume » **(0,5pt)**

**3b.** le menu= mouton aux artichauts sauvages, couscous au sucre et à la cannelle, salade d'oranges à l'huile d'olive, du thé à la menthe... **(0,5pt)**

**3c.** Ce menu était particulièrement soigné parce que le père était présent d'une part, et de l'autre, il comportait de la viande (un repas plus riche que d'habitude) ; c'est également un jour sacré : vendredi **(0,5pt)**

**4.** ...Accepter deux reproches parmi la liste suivante : son excès de confiance en Abdelkader, son manque de méfiance, son absence de prudence, sa faute de ne pas avoir établi un papier de reconnaissance de dette, le fait d'être responsable de son propre malheur… **(0,5 pt x2)**

**5.** Tonalité satirique (0,5pt). Justification : ... car Lalla Zoubida critique les travers de l'ingrat Abdelkader... **(0,5 pt x2)**

**6.** b- elle n'attendait pas de réponse de la part de son mari, **(0,5pt)**

**7.** ...il fait partie du discours : emploi du « je » énonciateur- emploi du passé composé (temps du discours)- emploi de l'indicateur chronologique ( temporel) « hier » et de la marque de l'énonciataire « t' » **(0,5 pt x2)**

**8a.** hyperbole **(0,5pt)**

**8b.** Lalla Zoubida était profondément touchée (affectée) par ce qui arrive à son amie intime ; sa douleur est à l'image de leur amitié + elle est émotive , sensible, tendre… **(0,5pt)**

**9.** - jugement positif : admiration, fierté → moralité élevée, image brillante … - jugement négatif : bavardage, calomnie → moralité basse, mesquine … - Accepter toute autre réponse logique et justifiée **(0.5ptx2)**

**10.** - Oui : sévérité et critique méritées, à la mesure du méfait et de l'ingratitude de Abdelkader. - Non : Abdelkader a peut-être ses raisons qui justifient son comportement…… - Accepter la réponse par oui ou par non, mais justifiée et argumentée **(0.5ptx2)**

### II. Production écrite

Pour corriger la production des candidats, tenir compte des critères d'évaluation de l'écrit produit : respect de la consigne (1 point), organisation du texte (2 points), choix d'arguments précis et pertinents (2 points), correction de la langue (5 points).$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Le lendemain vendredi, mon père rentra déjeuner selon sa coutume. Il portait une djellaba de laine boutonnée d'une éblouissante blancheur et un turban neuf, tout raide d'apprêt.\n\nLe repas fut servi par ma mère. Le menu était particulièrement soigné. Nous mangeâmes du mouton aux artichauts sauvages, du couscous au sucre et à la cannelle et pour finir une délicieuse salade d'oranges à l'huile d'olive.\n\nNous sirotâmes de nombreux verres de thé à la menthe. Au centre du plateau, deux roses d'Ispahan s'épanouissaient dans une vieille tasse de porcelaine.\n\nMa mère soupira. Elle s'adressa à mon père:\n\n- Le sort se montre parfois bien cruel. Pauvres et riches, bons et méchants sont à la merci de ses revers. J'ai bien du chagrin ! Je pense à Lalla Aïcha et mon cœur saigne. Je n'ai pas voulu t'ennuyer hier soir avec les tristes événements qui se sont déroulés dans la journée.\n\nMon père prêta une oreille attentive. Elle poursuivit :\n\n- Moulay Larbi, le mari de Lalla Aïcha, s'est disputé avec son associé, un certain Abdelkader fils de je ne sais qui. ..\n\nElle leva les yeux au plafond pour invoquer :\n\n- Dieu écarte de notre chemin, de celui de nos enfants et les enfants de nos enfants, tous les fils du péché qui se présentent le sourire aux lèvres et la poitrine pleine de ténèbres. Sois notre protecteur et notre mandataire : Amine ! Cet Abdelkader, ce fils de l'adultère, ce disciple de Satan ne possédait pas une chemise propre quand Moulay Larbi le prit comme ouvrier dans son atelier à Mechatine. Il le traita avec bienveillance, lui prêta de l'argent, le reçut souvent à déjeuner ou à dîner. Abdelkader se montrait poli et même obséquieux. Il chantait les mérites de Moulay Larbi, louait sa générosité, son bon caractère et la noblesse de ses sentiments. Tous les deux travaillaient beaucoup. Les babouches brodées jouissent auprès des femmes de Fès d'un grand succès. La production de Moulay Larbi et de son ouvrier avait bonne réputation. Abdelkader songea à se marier. Moulay Larbi l'encouragea dans cette voie et Lalla Aïcha lui trouva une jeune fille digne d'éloges. Les mariages coûtent toujours très cher. Malgré ses nuits de veille, Abdelkader n'avait pas su économiser. Il se trouva assez gêné lorsqu'il fallut verser une dot à sa fiancée. Il eut recours à son patron. Moulay Larbi réussit à assembler quatre-vingts rials. Il les lui versa sans méfiance. Il commit la faute de lui avancer cet argent sans établir de papier de reconnaissance de dette. Pour permettre à Abdelkader de gagner davantage, il l'associa à son affaire.\n\n- Sais-tu comment ce fils du péché l'a remercié de ses bienfaits?\n\nMon père ne savait pas.\n\nMa mère ne lui laissa d'ailleurs pas le temps de répondre...", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "La Boîte à merveilles"}, {"libelle": "Genre littéraire", "reponse": "Roman (à caractère) autobiographique"}, {"libelle": "Personnage principal", "reponse": "Sidi Mohamed"}, {"libelle": "Auteur", "reponse": "Ahmed SEFRIOUI"}]}, {"type": "choix", "numero": "2", "points": 1, "enonce": "Situez ce passage dans l'œuvre en choisissant l'une des trois propositions suivantes :", "options": ["Juste après la visite de Lalla Aïcha et de Lalla Zoubida à Sidi Ali Boughaleb .", "Juste après le retour de Mâalem Abdeslam et de Sidi Mohamed de chez le coiffeur .", "Juste après la visite rendue par Lalla Zoubida à Lalla Aïcha, chez elle, à Zankat Hajjama."], "bonne": 2}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "Quelle expression dans le texte montre que Mâalem Abdeslam déjeune chaque vendredi chez lui ?", "correction": "« selon sa coutume »"}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "De quoi se composait le menu du repas de ce vendredi ?", "correction": "le menu= mouton aux artichauts sauvages, couscous au sucre et à la cannelle, salade d'oranges à l'huile d'olive, du thé à la menthe..."}, {"type": "libre", "numero": "3c", "points": 0.5, "enonce": "Pourquoi ce menu était particulièrement soigné ?", "correction": "Ce menu était particulièrement soigné parce que le père était présent d'une part, et de l'autre, il comportait de la viande (un repas plus riche que d'habitude) ; c'est également un jour sacré : vendredi"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Lalla Zoubida fait plusieurs reproches à Moulay Larbi. Citez-en deux.", "correction": "...Accepter deux reproches parmi la liste suivante : son excès de confiance en Abdelkader, son manque de méfiance, son absence de prudence, sa faute de ne pas avoir établi un papier de reconnaissance de dette, le fait d'être responsable de son propre malheur…"}, {"type": "choix", "numero": "5", "points": 1, "enonce": "Quelle est la tonalité dominante (registre littéraire) dans le passage qui va : de : « Dieu écarte de notre chemin................à : il l'associa à son affaire. » ? Choisissez la bonne réponse parmi les propositions suivantes et justifiez-la :", "options": ["Comique", "Satirique", "Epique"], "bonne": 1}, {"type": "choix", "numero": "6", "points": 0.5, "enonce": "« Ma mère ne lui laissa d'ailleurs pas le temps de répondre.», cet énoncé veut-il dire que :", "options": ["la mère du narrateur interdit à son mari de parler,", "elle n'attendait pas de réponse de la part de son mari,", "le mari ne s'intéressait pas du tout à ce que racontait sa femme."], "bonne": 1}, {"type": "libre", "numero": "7", "points": 1, "enonce": "« Je n'ai pas voulu t'ennuyer hier soir. » Cet énoncé fait-il partie du récit ou du discours ? Justifiez par deux indices.", "correction": "...il fait partie du discours : emploi du « je » énonciateur- emploi du passé composé (temps du discours)- emploi de l'indicateur chronologique ( temporel) « hier » et de la marque de l'énonciataire « t' »"}, {"type": "libre", "numero": "8a", "points": 0.5, "enonce": "« Je pense à Lalla Aïcha et mon cœur saigne. » Quelle figure de style comporte cet énoncé ?", "correction": "hyperbole"}, {"type": "libre", "numero": "8b", "points": 0.5, "enonce": "Que nous permet-elle d'apprendre sur le personnage de Lalla Zoubida?", "correction": "Lalla Zoubida était profondément touchée (affectée) par ce qui arrive à son amie intime ; sa douleur est à l'image de leur amitié + elle est émotive , sensible, tendre…"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Selon vous, quel jugement Mâalem Abdeslam pourrait-il porter sur sa femme Lalla Zoubida, après son récit agressif ? Pourquoi ?", "correction": "- jugement positif : admiration, fierté → moralité élevée, image brillante … - jugement négatif : bavardage, calomnie → moralité basse, mesquine … - Accepter toute autre réponse logique et justifiée"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Partagez-vous le jugement sévère de Lalla Zoubida à l'égard de Abdelkader ? Justifiez votre point de vue.", "correction": "- Oui : sévérité et critique méritées, à la mesure du méfait et de l'ingratitude de Abdelkader. - Non : Abdelkader a peut-être ses raisons qui justifient son comportement…… - Accepter la réponse par oui ou par non, mais justifiée et argumentée"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :** La bonté, la solidarité et la générosité sont des valeurs nobles dans la société. Pourtant, il arrive qu'elles soient mal récompensées comme c'est le cas de Abdelkader avec Moulay Larbi, son patron.\n\nPensez-vous que ce comportement soit une raison suffisante pour refuser toute aide à autrui (aux autres) ?\n\nJustifiez votre point de vue par des arguments et des exemples pertinents.\n\n**Lors de la correction de votre copie, on tiendra compte des critères suivants :**\n\n| Critères de réalisation de l'écrit à produire | Note attribuée |\n|---|---|\n| Respect de la consigne (traiter le sujet proposé) | 1 point |\n| Organisation du texte | 2 points |\n| Choix d'arguments précis et pertinents | 2 points |\n| Correction de la langue: syntaxe, vocabulaire, adéquat, orthographe, conjugaison, ponctuation | 5 points |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
