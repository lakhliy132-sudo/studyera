-- Sujet de français, examen régional 2014 (session de rattrapage), académie
-- Tanger-Tétouan-Al Hoceïma, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2014 جهة طنجة تطوان الحسيمة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie « لجهة طنجة - تطوان » (Tanger-Tétouan,
-- avant le découpage régional de 2015, aujourd'hui Tanger-Tétouan-Al Hoceïma) ;
-- « الدورة الاستدراكية – يوليوز 2014 », durée « 2 ساعات », filière « جميع الشعب
-- الأدبية و العلمية و التقنية ». Coefficient « 4 / 3 » : selon la série, donc non saisi.
-- Le sujet est imprimé sur une feuille-réponse (pointillés pour répondre) ; la
-- page 5 du PDF n'est que la page lignée de la production écrite.
-- L'en-tête du corrigé porte « الدورة الاستدراكية – يوليوز 2013 » (sic), mais ses
-- réponses correspondent exactement à ce sujet (Msid, pronoms « Ils » / « la »,
-- hyperbole) : il est repris.
-- Les deux pronoms soulignés du texte (« Ils », « la ») sont mis en gras.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2014,
  $sujet$rattrapage$sujet$,
  $sujet$Tanger-Tétouan-Al Hoceïma$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Toutes les filières littéraires, scientifiques et techniques$sujet$,
  120,
  $sujet$## Texte

Les murs étaient blanchis. Le lendemain, des équipes furent de nouveau constituées, chaque groupe avait sa spécialité. Je devins un personnage important. Je fus nommé chef des frotteurs. On procéda au lavage du sol. Une vingtaine d'élèves, chargés d'énormes seaux, faisaient la corvée d'eau. **Ils** allaient **la** chercher à la fontaine d'une *zaouïa* située à cinquante pas de notre école.

Le sol fut inondé. Je pris très au sérieux mon travail et, pour donner l'exemple, je maniai avec énergie ma balayette. J'en avais mal aux reins. De temps à autre, je me redressais tout rouge. Les muscles des bras me faisaient mal. Au repos, je les sentais trembler. Dans l'eau jusqu'aux chevilles, pieds nus, bousculé par celui-ci, insulté par celui-là, j'étais heureux ! Adieu les leçons, les récitations collectives, les planchettes rigides, rébarbatives, inhumaines ! Frottons le sol en terre battue, incrusté de poussière et de crasse, orné d'énormes étoiles de chaux, qui résistaient à notre brossage énergique.

– Aïe ! Tu m'as donné un coup de coude dans l'œil.

– Fais attention ! Tu m'as mouillé jusqu'à la ceinture.

– Regarde Driss, il est tombé dans le seau.

– Ha ! Ha ! Il va se noyer ! Il va se noyer !

– Frottez paresseux.

– Paresseux toi-même, notre coin est plus propre que le tien.

Avec des chiffons de jute, nous essuyâmes partout.

Le soir, je revins à la maison mort de fatigue mais très fier de ma journée.

Devant mes parents je me vantai de mes multiples exploits. Je réussis à les convaincre que sans moi aucun résultat sérieux n'aurait été obtenu. Mon père me félicita. Il dit à ma mère que je devenais un homme. Je me mis au lit.

Pendant mon sommeil, il m'arriva de me mettre sur mon séant, de hurler des ordres, de distribuer des injures. Ma mère me recouchait avec des gestes tendres, des phrases affectueuses.

## I. Étude de texte (10 points)

**1.** a) De quelle œuvre ce texte est-il extrait ? b) A quel genre littéraire appartient-elle ? c) En quelle année a-t-elle été publiée ? d) Qui en est l'auteur ? **(0,25 pt x 4)**

**2.** Pour situer le texte, répondez aux questions suivantes : a) A quelle occasion, le narrateur et ses amis nettoient-ils le *Msid* ? b) Au lendemain du nettoyage, pourquoi le narrateur a-t-il accompagné sa mère à la *Kissaria* ? **(0,5 pt x 2)**

**3.** a) Pour quelle raison le narrateur se sent-il important ? b) Quel est le rôle attribué à son équipe ? **(0,5 pt x 2)**

**4.** a) Quel sentiment éprouve le narrateur et ses amis en faisant le travail ? b) Dites pourquoi ? **(0,5 pt x 2)**

**5.** De quoi le narrateur voulait-il persuader ses parents ? **(1 pt)**

**6.** Relevez du texte quatre mots appartenant au champ lexical du « nettoyage ». **(0,25 pt x 4)**

**7.** A quels éléments renvoient les pronoms soulignés dans le texte. [soulignés sur la feuille, en gras ici] **(0,5 pt x 2)**

**8.** « *Le soir, je revins à la maison mort de fatigue* » La figure de style employée dans cet énoncé est : Recopiez la bonne réponse. **(1 pt)**

a- Une métonymie  
b- une personnification  
c- une hyperbole

**9.** D'après le texte, le narrateur veut donner l'exemple à ses amis. A sa place, auriez-vous fait la même chose ? Justifiez votre réponse (en trois lignes au maximum). **(1 pt)**

**10.** Le *fqih* a confié une responsabilité à chacune des équipes. Que pensez-vous de cette méthode. ? Justifiez votre réponse (en quatre lignes au maximum). **(1 pt)**

## II. Production écrite (10 points)

**Sujet :**

Certains considèrent que le travail en équipe est plus efficace (plus rentable) que le travail individuel.

Que pensez-vous de cette affirmation ?

Développez votre point de vue sur le sujet en vous appuyant sur des arguments pertinents et sur des exemples tirés de votre expérience et de vos lectures.

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Critères d'évaluation | Barème de notation |
|---|---|
| ***Critères d'évaluation du discours*** – Conformité de la production à la consigne d'écriture – Cohérence de l'argumentation – Structure du texte (organisation et progression du texte) | 5 Points |
| ***Critères d'évaluation de la langue*** – Vocabulaire (usage de termes précis et variés) – Syntaxe (construction de phrases correctes) – Ponctuation (usage d'une ponctuation adéquate) – Orthographe d'usage et grammaticale (respect des règles) – Conjugaison (emploi des temps) | 5 Points |$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponses (à titre indicatif) et barème de notation.*

### I. Étude de texte

**1.** a) La Boîte à Merveilles. b) Un roman autobiographique. c) 1954. d) Ahmed Sefrioui. **(0,25 pt x 4)**

**2.** a) à l'occasion de la *Achoura* b) pour acheter des vêtements neufs (un gilet). **(0,5 pt x 2)**

**3.** a) parce qu'il a été nommé chef de son équipe. b) frotter le sol du *Msid*. **(0,5 pt x 2)**

**4.** a) Un sentiment de bonheur. b) Ils trouvaient cela comme un jeu ; Ils ont quitté leurs leçons, leurs récitations. (*Accepter toute réponse allant dans ce sens*). **(0,5 pt x 2)**

**5.** que sans lui, il n'y aurait eu aucun résultat ; qu'il avait fait de multiples exploits ; (*Accepter toute réponse allant dans ce sens*). **(1 pt)**

**6.** frotter, frotteurs, lavage, balayette, brossage, propre, essuyâmes….. **(0,25 pt x 4)**

**7.** « *Ils* » : une vingtaine d'élèves ; « *la* » : l'eau **(0,5 pt x 2)**

**8.** Une hyperbole. **(1 pt)**

**9.** Accepter toute réponse convenablement justifiée. **(1 pt)**

**10.** Accepter toute réponse convenablement justifiée. **(1 pt)**

### II. Production écrite

La correction de l'épreuve de production écrite tiendra compte des critères suivants :

| Critères d'évaluation | Barème de notation |
|---|---|
| ***Critères d'évaluation du discours*** | **5 Points** |
| – Conformité de la production à la consigne d'écriture | (1 pt) |
| – Cohérence de l'argumentation | (2 pts) |
| – Structure du texte (organisation et progression du texte) | (2 pts) |
| ***Critères d'évaluation de la langue*** – Vocabulaire (usage de termes précis et variés) – Syntaxe (construction de phrases correctes) – Ponctuation (usage d'une ponctuation adéquate) – Orthographe d'usage et grammaticale (respect des règles) – Conjugaison (emploi des temps) | **5 Points** |

**IMPORTANT :**

- Les correcteurs sont priés de respecter le barème de notation de l'épreuve de production écrite avec la précision et la rigueur requises.
- Il est recommandé d'éviter tout recours injustifié à la mention « hors sujet ».$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Les murs étaient blanchis. Le lendemain, des équipes furent de nouveau constituées, chaque groupe avait sa spécialité. Je devins un personnage important. Je fus nommé chef des frotteurs. On procéda au lavage du sol. Une vingtaine d'élèves, chargés d'énormes seaux, faisaient la corvée d'eau. **Ils** allaient **la** chercher à la fontaine d'une *zaouïa* située à cinquante pas de notre école.\n\nLe sol fut inondé. Je pris très au sérieux mon travail et, pour donner l'exemple, je maniai avec énergie ma balayette. J'en avais mal aux reins. De temps à autre, je me redressais tout rouge. Les muscles des bras me faisaient mal. Au repos, je les sentais trembler. Dans l'eau jusqu'aux chevilles, pieds nus, bousculé par celui-ci, insulté par celui-là, j'étais heureux ! Adieu les leçons, les récitations collectives, les planchettes rigides, rébarbatives, inhumaines ! Frottons le sol en terre battue, incrusté de poussière et de crasse, orné d'énormes étoiles de chaux, qui résistaient à notre brossage énergique.\n\n– Aïe ! Tu m'as donné un coup de coude dans l'œil.\n\n– Fais attention ! Tu m'as mouillé jusqu'à la ceinture.\n\n– Regarde Driss, il est tombé dans le seau.\n\n– Ha ! Ha ! Il va se noyer ! Il va se noyer !\n\n– Frottez paresseux.\n\n– Paresseux toi-même, notre coin est plus propre que le tien.\n\nAvec des chiffons de jute, nous essuyâmes partout.\n\nLe soir, je revins à la maison mort de fatigue mais très fier de ma journée.\n\nDevant mes parents je me vantai de mes multiples exploits. Je réussis à les convaincre que sans moi aucun résultat sérieux n'aurait été obtenu. Mon père me félicita. Il dit à ma mère que je devenais un homme. Je me mis au lit.\n\nPendant mon sommeil, il m'arriva de me mettre sur mon séant, de hurler des ordres, de distribuer des injures. Ma mère me recouchait avec des gestes tendres, des phrases affectueuses.", "questions": [{"type": "libre", "numero": "1", "points": 1, "enonce": "a) De quelle œuvre ce texte est-il extrait ? b) A quel genre littéraire appartient-elle ? c) En quelle année a-t-elle été publiée ? d) Qui en est l'auteur ?", "correction": "a) La Boîte à Merveilles. b) Un roman autobiographique. c) 1954. d) Ahmed Sefrioui."}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Pour situer le texte, répondez aux questions suivantes : a) A quelle occasion, le narrateur et ses amis nettoient-ils le *Msid* ? b) Au lendemain du nettoyage, pourquoi le narrateur a-t-il accompagné sa mère à la *Kissaria* ?", "correction": "a) à l'occasion de la *Achoura* b) pour acheter des vêtements neufs (un gilet)."}, {"type": "libre", "numero": "3", "points": 1, "enonce": "a) Pour quelle raison le narrateur se sent-il important ? b) Quel est le rôle attribué à son équipe ?", "correction": "a) parce qu'il a été nommé chef de son équipe. b) frotter le sol du *Msid*."}, {"type": "libre", "numero": "4", "points": 1, "enonce": "a) Quel sentiment éprouve le narrateur et ses amis en faisant le travail ? b) Dites pourquoi ?", "correction": "a) Un sentiment de bonheur. b) Ils trouvaient cela comme un jeu ; Ils ont quitté leurs leçons, leurs récitations. (*Accepter toute réponse allant dans ce sens*)."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "De quoi le narrateur voulait-il persuader ses parents ?", "correction": "que sans lui, il n'y aurait eu aucun résultat ; qu'il avait fait de multiples exploits ; (*Accepter toute réponse allant dans ce sens*)."}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez du texte quatre mots appartenant au champ lexical du « nettoyage ».", "correction": "frotter, frotteurs, lavage, balayette, brossage, propre, essuyâmes….."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "A quels éléments renvoient les pronoms soulignés dans le texte. [soulignés sur la feuille, en gras ici]", "correction": "« *Ils* » : une vingtaine d'élèves ; « *la* » : l'eau"}, {"type": "choix", "numero": "8", "points": 1, "enonce": "« *Le soir, je revins à la maison mort de fatigue* » La figure de style employée dans cet énoncé est : Recopiez la bonne réponse.", "options": ["Une métonymie", "une personnification", "une hyperbole"], "bonne": 2}, {"type": "libre", "numero": "9", "points": 1, "enonce": "D'après le texte, le narrateur veut donner l'exemple à ses amis. A sa place, auriez-vous fait la même chose ? Justifiez votre réponse (en trois lignes au maximum).", "correction": "Accepter toute réponse convenablement justifiée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Le *fqih* a confié une responsabilité à chacune des équipes. Que pensez-vous de cette méthode. ? Justifiez votre réponse (en quatre lignes au maximum).", "correction": "Accepter toute réponse convenablement justifiée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nCertains considèrent que le travail en équipe est plus efficace (plus rentable) que le travail individuel.\n\nQue pensez-vous de cette affirmation ?\n\nDéveloppez votre point de vue sur le sujet en vous appuyant sur des arguments pertinents et sur des exemples tirés de votre expérience et de vos lectures.\n\n**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**\n\n| Critères d'évaluation | Barème de notation |\n|---|---|\n| ***Critères d'évaluation du discours*** – Conformité de la production à la consigne d'écriture – Cohérence de l'argumentation – Structure du texte (organisation et progression du texte) | 5 Points |\n| ***Critères d'évaluation de la langue*** – Vocabulaire (usage de termes précis et variés) – Syntaxe (construction de phrases correctes) – Ponctuation (usage d'une ponctuation adéquate) – Orthographe d'usage et grammaticale (respect des règles) – Conjugaison (emploi des temps) | 5 Points |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
