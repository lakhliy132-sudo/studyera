-- Sujet de français, examen régional 2021 (session normale), académie
-- Dakhla-Oued Ed-Dahab, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2021 جهة الداخلة وادي الذهب »).
-- Corrigé et barème officiels recopiés question par question.
--
-- En-tête (en arabe) : « امتحان نيل شهادة البكالوريا - الامتحان الجهوي الموحد للسنة الأولى
-- من سلك البكالوريا - الدورة العادية - 2021 », académie « جهة الداخلة - وادي الذهب »,
-- matière « اللغة الأجنبية الأولى », « جميع الشعب العلمية والتقنية والمسالك المهنية ».
-- Coefficient « 4/3 » (« 3 / 4 » sur le corrigé) : deux valeurs, laissé vide.
-- Aucune durée n'est indiquée sur la feuille ni sur le corrigé : durée laissée
-- vide.
-- Le texte est imprimé en gras sur la feuille. Question 8 : la phrase citée
-- est soulignée sur la feuille.
-- Question 5b : le corrigé donne un tableau d'indices (passages soulignés
-- dans le corrigé), reporté en liste. Question 6b : le corrigé propose cinq
-- sentiments avec leurs indices « à titre indicatif ».
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2021,
  $sujet$normale$sujet$,
  $sujet$Dakhla-Oued Ed-Dahab$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Toutes les filières scientifiques et techniques et les filières professionnelles$sujet$,
  $sujet$## Texte

Le maître nous imposa silence, nous releva de nos fonctions et voyant nos mines dépitées, nous conseilla d'attendre qu'il eût besoin de nous. Nous attendîmes dans un coin. Le *fqih* décréta que, seuls, les grands étaient admis à passer les murs au lait de chaux. Nous attendîmes jusqu'au soir que le maître nous chargeât de rendre le moindre service. Il n'en fut rien !

Les murs étaient blanchis. Le lendemain, des équipes furent de nouveau constituées, chaque groupe avait sa spécialité. Je devins un personnage important. Je fus nommé chef des frotteurs. On procéda au lavage du sol. Une vingtaine d'élèves, chargés d'énormes seaux, faisait la corvée d'eau. Ils allaient la chercher à la fontaine d'une zaouïa située à cinquante pas de notre école.

Le sol fut inondé. Je pris très au sérieux mon travail et, pour donner l'exemple, je maniai avec énergie ma balayette. J'en avais mal aux reins. De temps à autre, je me redressais tout rouge. Les muscles des bras me faisaient mal. Au repos, je les sentais trembler. Dans l'eau jusqu'aux chevilles, pieds nus, bousculé par celui-ci, insulté par celui-là, j'étais heureux ! Adieu les leçons, les récitations collectives, les planchettes rigides, rébarbatives, inhumaines ! Frottons le sol en terre battue, incrusté de poussière et de crasse, orné d'énormes étoiles de chaux, qui résistaient à notre brossage énergique.

– Aïe! Tu m'as donné un coup de coude dans l'œil.

– Fais attention ! Tu m'as mouillé jusqu'à la ceinture.

– Regarde Driss, il est tombé dans le seau.

– Ha! Ha! Il va se noyer ! Il va se noyer!

– Frottez paresseux.

– Paresseux toi-même, notre coin est plus propre que le tien.

Avec des chiffons de jute, nous essuyâmes partout.

Le soir, je revins à la maison mort de fatigue, mais très fier de ma journée. Devant mes parents je me vantai de mes multiples exploits.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1 pt.)**

| Titre de l'œuvre | Son genre littéraire | Nom de l'auteur | Sa date de naissance |
|---|---|---|---|
| | | | |

**2.** Dites si chacune des affirmations suivantes est **VRAIE** ou **FAUSSE**. **(1 pt.)**

| | Vrai | Faux |
|---|---|---|
| a) Le narrateur, Sidi Mohammed, a beaucoup d'amis. | | |
| b) L'école coranique se trouve à quelques pas de *Dar Chouafa*. | | |
| c) Le narrateur déteste le *Msid* à cause de la baguette de cognassier. | | |
| d) Les élèves disposent d'une semaine pour préparer le *Msid* à la fête de l'Achour | | |

**3a.** **Relevez dans le premier paragraphe :** a) Une expression montrant que les élèves font du bruit avant l'intervention du *fqih*. **(0,5 pt.)**

**3b.** b) Deux verbes montrant que le fqih a un caractère autoritaire. **(0,5 pt.)**

**4a.** a) Pour quelle raison Le narrateur n'est pas chargé de passer les murs à l'eau de chaux ? **(0,5 pt.)**

**4b.** b) Pourquoi le narrateur devient-il important le lendemain du blanchiment des murs ? **(0,5 pt.)**

**5a.** a) Dans quelle ambiance s'effectuent les activités entreprises par le narrateur et ses camarades le lendemain du blanchiment ? *Recopiez la bonne réponse.* **(0,5 pt.)**

a- De tristesse et de dégoût,  
b- D'enthousiasme et de rivalité  
c- D'insouciance et de désintérêt.

**5b.** b) Justifiez votre réponse par un indice tiré du texte. **(0,5 pt.)**

**6a.** a) Le narrateur a-t-il hâte de reprendre les cours au Msid ? Justifiez par une expression du texte. **(0,5pt.)**

**6b.** b) Citez deux sentiments éprouvés par le narrateur au cours de la journée du lavage du Msid. **(0,5 pt.)**

**7a.** a) Quelle figure de style identifiez-vous dans la phrase suivante : **« Le soir, je revins à la maison mort de fatigue. ».** **(0,5 pt.)**

**7b.** b) Quel est l'effet produit par l'emploi de cette figure de style ? **(0,5 pt.)**

**8.** Complétez le tableau suivant par ce qui convient selon les composants de la phrase suivante : **« Le *fqih* décréta que, seuls, les grands étaient admis à passer les murs au lait de chaux. »** [phrase soulignée sur la feuille] **(1 pt.)**

| Proposition principale | Proposition subordonnée | Subordonnant | Nature de la subordonnée |
|---|---|---|---|
| | | | |

**9.** Certaines personnes se fatiguent tellement au travail qu'elles s'usent la santé et vieillissent très vite. A votre avis, faudrait-il tricher au travail, pour éviter ces problèmes de santé ? Justifiez votre réponse. **(1pt.)**

**10.** Qu'est-ce qui vous tente le plus : un travail qui ne vous rendra pas riche mais qui vous passionne, ou un travail que vous n'aimez pas mais qui vous fera gagner beaucoup d'argent ? Justifiez votre réponse. **(1 pt.)**

## II. Production écrite (10 points)

**SUJET :**

**Pour subvenir aux besoins de la famille, certains parents encouragent leurs enfants à travailler au lieu d'aller à l'école. Ainsi, un grand nombre d'enfants travaillent de par le monde, malgré l'interdiction du travail des mineurs par la loi.**

**Etes-vous d'avis que le travail des enfants leur est profitable et rentable à leurs familles et à la société ?**

**Rédigez un texte présentant dans lequel vous développerez votre point de vue à l'aide d'arguments cohérents appuyés d'exemples.**

***Le correcteur de votre copie de production écrite tiendra compte des critères suivants :***

| Critères d'évaluation du discours | | Critère d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | *5 points* | Correction de la langue : (vocabulaire, syntaxe, orthographe et conjugaison) | *5 points* |
| Cohérence de l'argumentation | | Mise en page et ponctuation : (alinéas, majuscule, etc.) | |
| Structure du texte (organisation et progression du texte) | | | |$sujet$,
  $sujet$## Corrigé et barème

*ELEMENTS DE REPONSE — Réf. du texte : « La Boîte à merveilles », pages 101 & 102*

### I. Étude de texte

**1.** **(1 pt.)**

| Titre de l'œuvre | Son genre littéraire | Nom de l'auteur | Sa date de naissance |
|---|---|---|---|
| *La Boîte à Merveilles* (0.25 pt.) | Roman autobiographique (0.25 pt.) | Ahmed SEFRIOUI (0.25 pt.) | 1915 (0.25 pt.) |

**2.** **(1 pt.)**

| | |
|---|---|
| a) Le narrateur, Sidi Mohammed, a beaucoup d'amis. | Faux |
| b) L'école coranique se trouve à quelques pas de *Dar Chouafa*. | Vrai |
| c) Le narrateur déteste le *Msid* à cause de la baguette de cognassier. | Vrai |
| d) Les élèves disposent d'une semaine pour préparer le *Msid* à la fête de l'Achour | Faux |

**3a.** Le maître nous imposa silence (0.5pt) **(0,5 pt.)**

**3b.** imposa - releva - décréta – chargeât- attendîmes. *(L'élève est tenu d'en relever DEUX.)* (0.25pt x 2) **(0,5 pt.)**

**4a.** Il est petit, «Le *fqih* décréta que, seuls, les grands étaient admis à passer les murs au lait de chaux » **(0,5 pt.)**

**4b.** Il est nommé chef des frotteurs. **(0,5 pt.)**

**5a.** D'enthousiasme et de rivalité. **(0,5 pt.)**

**5b.** (indices) ▪ Je pris très au sérieux ▪ mon travail Pour donner l'exemple, je maniai avec énergie ma balayette. ▪ J'en avais mal aux reins. ▪ Je me redressais tout rouge. ▪ Les muscles des bras me faisaient mal. ▪ Au repos, je les (les muscles) sentais trembler. ▪ Dans l'eau jusqu'aux chevilles, pieds nus, bousculé par celui-ci, insulté par celui-là, j'étais heureux ! ▪ Frottons le sol en terre battue, incrusté de poussière et de crasse, orné d'énormes étoiles de chaux, qui résistaient à notre brossage énergique. **(0,5 pt.)**

**6a.** - Non (0.25 pt.) - « Adieu les leçons, les récitations collectives, les planchettes rigides, rébarbatives, inhumaines ! » (0.25 Pt.) **(0,5pt.)**

**6b.** Il s'agira de citer **DEUX sentiments** éprouvés dans la journée du lavage du *Msid* : (0.25 pt. x2)

| Sentiments éprouvés | Indices (A titre indicatif) |
|---|---|
| Sentiment de responsabilité | *Je pris très au sérieux mon travail* |
| Sentiment d'enthousiasme, d'engagement personnel | *Pour donner l'exemple, je maniai avec énergie ma balayette.* ▪ *Dans l'eau jusqu'aux chevilles, pieds nus, bousculé par celui-ci, insulté par celui-là,* |
| Sentiment de bonheur | *j'étais heureux !* |
| Sentiment de liberté | *Adieu les leçons, les récitations collectives, les planchettes rigides, rébarbatives, inhumaines !* |
| Sentiment de fierté | *Je revins (…) très fier de ma journée.* |

 **(0,5 pt.)**

**7a.** Hyperbole **(0,5 pt.)**

**7b.** Mettre l'accent sur le grand épuisement du narrateur. **(0,5 pt.)**

**8.** **(1 pt.)**

| Proposition principale | Proposition subordonnée | Subordonnant | Nature de la subordonnée |
|---|---|---|---|
| Le *fqih* décréta | que, seuls, les grands étaient admis à passer les murs au lait de chaux | que | Proposition Sub. Conjonctive. Ou : Prop. Sub. Complétive |

**9.** Prise de position (0.5 pt.) ; argument(s) (0.5 pt.) *(Pour les questions 9 et 10, Le correcteur jugera de la pertinence de la réponse et notera en conséquence, sans sanctionner la langue et le style)* **(1pt.)**

**10.** Prise de position (0.5 pt.); argument(s) (0.5 pt.) *(Pour les questions 9 et 10, Le correcteur jugera de la pertinence de la réponse et notera en conséquence, sans sanctionner la langue et le style)* **(1 pt.)**

### II. Production écrite

***Le correcteur tiendra impérativement compte des critères suivants :***

| *5 points* — Critères d'évaluation du discours | | *5 points* — Critère d'évaluation de la langue | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture | 1pt | Vocabulaire (usage de termes précis et variés) | 1pt |
| Cohérence de l'argumentation | 2pt | Syntaxe (construction de phrases correctes) | 1pt |
| Structure du texte (organisation et progression du texte) | 2pt | Orthographe d'usage et orthographe grammaticale | 1pt |
| | | Conjugaison et emploi des temps verbaux | 1pt |
| | | Ponctuation et mise en page | 1pt |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Le maître nous imposa silence, nous releva de nos fonctions et voyant nos mines dépitées, nous conseilla d'attendre qu'il eût besoin de nous. Nous attendîmes dans un coin. Le *fqih* décréta que, seuls, les grands étaient admis à passer les murs au lait de chaux. Nous attendîmes jusqu'au soir que le maître nous chargeât de rendre le moindre service. Il n'en fut rien !\n\nLes murs étaient blanchis. Le lendemain, des équipes furent de nouveau constituées, chaque groupe avait sa spécialité. Je devins un personnage important. Je fus nommé chef des frotteurs. On procéda au lavage du sol. Une vingtaine d'élèves, chargés d'énormes seaux, faisait la corvée d'eau. Ils allaient la chercher à la fontaine d'une zaouïa située à cinquante pas de notre école.\n\nLe sol fut inondé. Je pris très au sérieux mon travail et, pour donner l'exemple, je maniai avec énergie ma balayette. J'en avais mal aux reins. De temps à autre, je me redressais tout rouge. Les muscles des bras me faisaient mal. Au repos, je les sentais trembler. Dans l'eau jusqu'aux chevilles, pieds nus, bousculé par celui-ci, insulté par celui-là, j'étais heureux ! Adieu les leçons, les récitations collectives, les planchettes rigides, rébarbatives, inhumaines ! Frottons le sol en terre battue, incrusté de poussière et de crasse, orné d'énormes étoiles de chaux, qui résistaient à notre brossage énergique.\n\n– Aïe! Tu m'as donné un coup de coude dans l'œil.\n\n– Fais attention ! Tu m'as mouillé jusqu'à la ceinture.\n\n– Regarde Driss, il est tombé dans le seau.\n\n– Ha! Ha! Il va se noyer ! Il va se noyer!\n\n– Frottez paresseux.\n\n– Paresseux toi-même, notre coin est plus propre que le tien.\n\nAvec des chiffons de jute, nous essuyâmes partout.\n\nLe soir, je revins à la maison mort de fatigue, mais très fier de ma journée. Devant mes parents je me vantai de mes multiples exploits.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "*La Boîte à Merveilles* (0.25 pt.)"}, {"libelle": "Son genre littéraire", "reponse": "Roman autobiographique (0.25 pt.)"}, {"libelle": "Nom de l'auteur", "reponse": "Ahmed SEFRIOUI (0.25 pt.)"}, {"libelle": "Sa date de naissance", "reponse": "1915 (0.25 pt.)"}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "Dites si chacune des affirmations suivantes est **VRAIE** ou **FAUSSE**.", "affirmations": [{"texte": "a) Le narrateur, Sidi Mohammed, a beaucoup d'amis.", "vrai": false}, {"texte": "b) L'école coranique se trouve à quelques pas de *Dar Chouafa*.", "vrai": true}, {"texte": "c) Le narrateur déteste le *Msid* à cause de la baguette de cognassier.", "vrai": true}, {"texte": "d) Les élèves disposent d'une semaine pour préparer le *Msid* à la fête de l'Achour", "vrai": false}]}, {"type": "libre", "numero": "3a", "points": 0.5, "enonce": "**Relevez dans le premier paragraphe :** a) Une expression montrant que les élèves font du bruit avant l'intervention du *fqih*.", "correction": "Le maître nous imposa silence (0.5pt)"}, {"type": "libre", "numero": "3b", "points": 0.5, "enonce": "b) Deux verbes montrant que le fqih a un caractère autoritaire.", "correction": "imposa - releva - décréta – chargeât- attendîmes. *(L'élève est tenu d'en relever DEUX.)* (0.25pt x 2)"}, {"type": "libre", "numero": "4a", "points": 0.5, "enonce": "a) Pour quelle raison Le narrateur n'est pas chargé de passer les murs à l'eau de chaux ?", "correction": "Il est petit, «Le *fqih* décréta que, seuls, les grands étaient admis à passer les murs au lait de chaux »"}, {"type": "libre", "numero": "4b", "points": 0.5, "enonce": "b) Pourquoi le narrateur devient-il important le lendemain du blanchiment des murs ?", "correction": "Il est nommé chef des frotteurs."}, {"type": "choix", "numero": "5a", "points": 0.5, "enonce": "a) Dans quelle ambiance s'effectuent les activités entreprises par le narrateur et ses camarades le lendemain du blanchiment ? *Recopiez la bonne réponse.*", "options": ["De tristesse et de dégoût,", "D'enthousiasme et de rivalité", "D'insouciance et de désintérêt."], "bonne": 1}, {"type": "libre", "numero": "5b", "points": 0.5, "enonce": "b) Justifiez votre réponse par un indice tiré du texte.", "correction": "(indices) ▪ Je pris très au sérieux ▪ mon travail Pour donner l'exemple, je maniai avec énergie ma balayette. ▪ J'en avais mal aux reins. ▪ Je me redressais tout rouge. ▪ Les muscles des bras me faisaient mal. ▪ Au repos, je les (les muscles) sentais trembler. ▪ Dans l'eau jusqu'aux chevilles, pieds nus, bousculé par celui-ci, insulté par celui-là, j'étais heureux ! ▪ Frottons le sol en terre battue, incrusté de poussière et de crasse, orné d'énormes étoiles de chaux, qui résistaient à notre brossage énergique."}, {"type": "libre", "numero": "6a", "points": 0.5, "enonce": "a) Le narrateur a-t-il hâte de reprendre les cours au Msid ? Justifiez par une expression du texte.", "correction": "- Non (0.25 pt.) - « Adieu les leçons, les récitations collectives, les planchettes rigides, rébarbatives, inhumaines ! » (0.25 Pt.)"}, {"type": "libre", "numero": "6b", "points": 0.5, "enonce": "b) Citez deux sentiments éprouvés par le narrateur au cours de la journée du lavage du Msid.", "correction": "Il s'agira de citer **DEUX sentiments** éprouvés dans la journée du lavage du *Msid* : (0.25 pt. x2)\n\n| Sentiments éprouvés | Indices (A titre indicatif) |\n|---|---|\n| Sentiment de responsabilité | *Je pris très au sérieux mon travail* |\n| Sentiment d'enthousiasme, d'engagement personnel | *Pour donner l'exemple, je maniai avec énergie ma balayette.* ▪ *Dans l'eau jusqu'aux chevilles, pieds nus, bousculé par celui-ci, insulté par celui-là,* |\n| Sentiment de bonheur | *j'étais heureux !* |\n| Sentiment de liberté | *Adieu les leçons, les récitations collectives, les planchettes rigides, rébarbatives, inhumaines !* |\n| Sentiment de fierté | *Je revins (…) très fier de ma journée.* |\n\n"}, {"type": "libre", "numero": "7a", "points": 0.5, "enonce": "a) Quelle figure de style identifiez-vous dans la phrase suivante : **« Le soir, je revins à la maison mort de fatigue. ».**", "correction": "Hyperbole"}, {"type": "libre", "numero": "7b", "points": 0.5, "enonce": "b) Quel est l'effet produit par l'emploi de cette figure de style ?", "correction": "Mettre l'accent sur le grand épuisement du narrateur."}, {"type": "tableau", "numero": "8", "points": 1, "enonce": "Complétez le tableau suivant par ce qui convient selon les composants de la phrase suivante : **« Le *fqih* décréta que, seuls, les grands étaient admis à passer les murs au lait de chaux. »** [phrase soulignée sur la feuille]", "champs": [{"libelle": "Proposition principale", "reponse": "Le *fqih* décréta"}, {"libelle": "Proposition subordonnée", "reponse": "que, seuls, les grands étaient admis à passer les murs au lait de chaux"}, {"libelle": "Subordonnant", "reponse": "que"}, {"libelle": "Nature de la subordonnée", "reponse": "Proposition Sub. Conjonctive. Ou : Prop. Sub. Complétive"}]}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Certaines personnes se fatiguent tellement au travail qu'elles s'usent la santé et vieillissent très vite. A votre avis, faudrait-il tricher au travail, pour éviter ces problèmes de santé ? Justifiez votre réponse.", "correction": "Prise de position (0.5 pt.) ; argument(s) (0.5 pt.) *(Pour les questions 9 et 10, Le correcteur jugera de la pertinence de la réponse et notera en conséquence, sans sanctionner la langue et le style)*"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Qu'est-ce qui vous tente le plus : un travail qui ne vous rendra pas riche mais qui vous passionne, ou un travail que vous n'aimez pas mais qui vous fera gagner beaucoup d'argent ? Justifiez votre réponse.", "correction": "Prise de position (0.5 pt.); argument(s) (0.5 pt.) *(Pour les questions 9 et 10, Le correcteur jugera de la pertinence de la réponse et notera en conséquence, sans sanctionner la langue et le style)*"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**SUJET :**\n\n**Pour subvenir aux besoins de la famille, certains parents encouragent leurs enfants à travailler au lieu d'aller à l'école. Ainsi, un grand nombre d'enfants travaillent de par le monde, malgré l'interdiction du travail des mineurs par la loi.**\n\n**Etes-vous d'avis que le travail des enfants leur est profitable et rentable à leurs familles et à la société ?**\n\n**Rédigez un texte présentant dans lequel vous développerez votre point de vue à l'aide d'arguments cohérents appuyés d'exemples.**\n\n***Le correcteur de votre copie de production écrite tiendra compte des critères suivants :***\n\n| Critères d'évaluation du discours | | Critère d'évaluation de la langue | |\n|---|---|---|---|\n| Conformité de la production à la consigne d'écriture | *5 points* | Correction de la langue : (vocabulaire, syntaxe, orthographe et conjugaison) | *5 points* |\n| Cohérence de l'argumentation | | Mise en page et ponctuation : (alinéas, majuscule, etc.) | |\n| Structure du texte (organisation et progression du texte) | | | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
