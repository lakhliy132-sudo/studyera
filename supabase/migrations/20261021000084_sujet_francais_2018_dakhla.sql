-- Sujet de français, examen régional 2018 (session normale), académie
-- Dakhla-Oued Ed-Dahab, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2018 جهة الداخلة وادي الذهب »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie de Dakhla-Oued Ed-Dahab (« الأكاديمية الجهوية للتربية والتكوين
-- لجهة الداخلة وادي الذهب »), « الدورة العادية 2018 », « المترشحون
-- الرسميون », « السنة الأولى من سلك البكالوريا », matière « اللغة الأجنبية
-- الأولى », durée « ساعتان ». Coefficient : 3 pour sciences économiques et
-- gestion, 4 pour les autres séries (laissé vide).
-- Question 1 : pour « Une autre œuvre de cet auteur », le corrigé n'écrit
-- que « une autre œuvre … » ; la case reste vide.
-- « accorde » (sujet de production écrite) est tel quel sur la feuille.
-- Le sujet ne donne pas de critères pour la production écrite ; la grille du
-- corrigé (5 + 5 pts, sans détail par ligne) est recopiée.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2018,
  $sujet$normale$sujet$,
  $sujet$Dakhla-Oued Ed-Dahab$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Sciences économiques et gestion ; lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies$sujet$,
  120,
  $sujet$## Texte

Tout le monde dans le quartier devait être au courant de nos ennuis matériels et du départ de mon père. Ils manifesteraient à notre égard une pitié ostentatoire plus humiliante que le pire mépris. Mon père est parti, nous restions sans soutien, sans défense.

Le père, dans une famille comme dans la nôtre, représente une protection occulte. Point n'est besoin qu'il soit riche, son prestige moral donne force, équilibre, assurance et respectabilité.

Mon père venait le soir seulement à la maison, mais il semblait que toute la journée se passait en préparatifs pour le recevoir. Je comprenais ce qui tourmentait ma mère, ce matin, dans la lumière du jour à peine naissant. Elle rendait compte dans le tréfonds de son cœur que ses préparatifs seraient vains. Personne le soir ne pousserait plus notre porte, n'apporterait de l'extérieur de la suave odeur du travail, ne servirait de lien entre nous et la vie exubérante de la rue.

Pour ma mère et pour moi, mon père représentait la force, l'aventure, la sécurité, la paix. Il n'avait jamais quitté sa maison ; les circonstances qui l'obligeaient ainsi à le faire prenaient dans notre imagination une figure hideuse.

La maison se réveillait peu à peu, saluait le soleil et ses bruits familiers. Je me sentais mieux ce matin. Je m'assis dans mon lit. Ma tête ne pesait rien sur mes épaules, mes bras n'étaient agités d'aucune fièvre.

– maman, dis-je, est-ce que c'est long un mois ?

Ma mère se secoua de sa torpeur, regarda à droite, puis à gauche, comme pour reconnaitre l'endroit où elle se trouvait et me fixa avec des yeux étonnés.

– As-tu parlé, Sidi Mohammed ?

– Oui, maman ; je te demande si un mois est long.

– Un mois dure un mois, mon fils, mais pour nous, le mois à venir sera une éternité.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1 pt)**

| Titre | Genre | Auteur | Une autre œuvre de cet auteur |
|---|---|---|---|
| | | | |

**2a.** D'après votre compréhension de l'œuvre : Pourquoi le père a-t-il quitté sa maison ? **(1pt)**

**2b.** Quel genre de travail compte-t-il faire ?

**3.** Quel sentiment, le départ du père et ses ennuis matériels, susciteraient-ils chez les voisins ? **(1 pt)**

**4.** Que pense Sidi Mohammed de cette réaction des voisins ? **(1pt)**

**5.** Que représente le père pour Sidi Mohammed et sa mère ? **(1 pt)**

**6.** Relevez dans le texte, quatre mots appartenant au champ lexical du temps. **(1pt)**

**7a.** Dans l'énoncé suivant : « un mois dure un mois, mon fils, mais pour nous, le mois à venir sera une éternité ». Repérez la figure de style employée. **(1 pt)**

**7b.** Que cherche la mère à montrer par cette réponse ?

**8.** Relevez du texte les indices qui montrent que le temps s'écoule longuement pour Sidi Mohammed. **(1 pt)**

**9.** Que représentent, à vos yeux vos parents ? **(1 pt)**

**10.** Selon vous, le rôle de la mère est-il aussi important que celui du père ? Justifiez votre réponse. **(1 pt)**

## II. Production écrite (10 points)

**Sujet :**

Certains jeunes suivent actuellement la mode et accorde beaucoup d'importance aux apparences contrairement à d'autres qui préfèrent la simplicité et s'attachent aux traditions. Que préférez-vous ? S'habiller à la mode ou porter les habits traditionnels ?

Justifiez votre point de vue par des arguments pertinents.$sujet$,
  $sujet$## Corrigé et barème

*Barème et éléments de correction (à titre indicatif). Toute réponse non prévue est laissée à l'appréciation du professeur correcteur.*

### I. Étude de texte

**1.** **(1 pt)**

| Titre | Genre | Auteur | Une autre œuvre de cet auteur |
|---|---|---|---|
| La boîte à merveille | Roman autobiographique | Ahmed SEFRIOUI |  |

**2a.** Il est ruiné ; il a des ennuis matériels,… (0,5 pt) **(1pt)**

**2b.** La moisson, etc. (0,5 pt)

**3.** La pitié, etc. **(1 pt)**

**4.** Humiliante et méprisante. **(1pt)**

**5.** La force, l'aventure, la sécurité, la paix… (0,5 pt x2) **(1 pt)**

**6.** Le soir, la journée, ce matin, un mois, une éternité,… (0,25pt x 4) **(1pt)**

**7a.** Hyperbole. (0,5pt) **(1 pt)**

**7b.** Mise en valeur de la durée d'un mois. (0,5pt)

**8.** le mois à venir sera une éternité. ; je te demande si un mois est long ; La maison se réveillait peu à peu (0,5 pt x2) **(1 pt)**

**9.** Réponse justifiée. **(1 pt)**

**10.** Point de vue justifié. **(1 pt)**

### II. Production écrite

**Critères d'évaluation du discours : 5 pts**

- Conformité de la production à la consigne d'écriture
- Cohérence de l'argumentation
- Organisation et progression du texte

**Critères d'évaluation de la langue : 5 pts**

- Correction de la langue (ponctuation, orthographe, syntaxe, vocabulaire, conjugaison)$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Tout le monde dans le quartier devait être au courant de nos ennuis matériels et du départ de mon père. Ils manifesteraient à notre égard une pitié ostentatoire plus humiliante que le pire mépris. Mon père est parti, nous restions sans soutien, sans défense.\n\nLe père, dans une famille comme dans la nôtre, représente une protection occulte. Point n'est besoin qu'il soit riche, son prestige moral donne force, équilibre, assurance et respectabilité.\n\nMon père venait le soir seulement à la maison, mais il semblait que toute la journée se passait en préparatifs pour le recevoir. Je comprenais ce qui tourmentait ma mère, ce matin, dans la lumière du jour à peine naissant. Elle rendait compte dans le tréfonds de son cœur que ses préparatifs seraient vains. Personne le soir ne pousserait plus notre porte, n'apporterait de l'extérieur de la suave odeur du travail, ne servirait de lien entre nous et la vie exubérante de la rue.\n\nPour ma mère et pour moi, mon père représentait la force, l'aventure, la sécurité, la paix. Il n'avait jamais quitté sa maison ; les circonstances qui l'obligeaient ainsi à le faire prenaient dans notre imagination une figure hideuse.\n\nLa maison se réveillait peu à peu, saluait le soleil et ses bruits familiers. Je me sentais mieux ce matin. Je m'assis dans mon lit. Ma tête ne pesait rien sur mes épaules, mes bras n'étaient agités d'aucune fièvre.\n\n– maman, dis-je, est-ce que c'est long un mois ?\n\nMa mère se secoua de sa torpeur, regarda à droite, puis à gauche, comme pour reconnaitre l'endroit où elle se trouvait et me fixa avec des yeux étonnés.\n\n– As-tu parlé, Sidi Mohammed ?\n\n– Oui, maman ; je te demande si un mois est long.\n\n– Un mois dure un mois, mon fils, mais pour nous, le mois à venir sera une éternité.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre", "reponse": "La boîte à merveille"}, {"libelle": "Genre", "reponse": "Roman autobiographique"}, {"libelle": "Auteur", "reponse": "Ahmed SEFRIOUI"}, {"libelle": "Une autre œuvre de cet auteur", "reponse": ""}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "D'après votre compréhension de l'œuvre : Pourquoi le père a-t-il quitté sa maison ?", "correction": "Il est ruiné ; il a des ennuis matériels,… (0,5 pt)"}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "Quel genre de travail compte-t-il faire ?", "correction": "La moisson, etc. (0,5 pt)"}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Quel sentiment, le départ du père et ses ennuis matériels, susciteraient-ils chez les voisins ?", "correction": "La pitié, etc."}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Que pense Sidi Mohammed de cette réaction des voisins ?", "correction": "Humiliante et méprisante."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Que représente le père pour Sidi Mohammed et sa mère ?", "correction": "La force, l'aventure, la sécurité, la paix… (0,5 pt x2)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez dans le texte, quatre mots appartenant au champ lexical du temps.", "correction": "Le soir, la journée, ce matin, un mois, une éternité,… (0,25pt x 4)"}, {"type": "libre", "numero": "7a", "points": 0.5, "enonce": "Dans l'énoncé suivant : « un mois dure un mois, mon fils, mais pour nous, le mois à venir sera une éternité ». Repérez la figure de style employée.", "correction": "Hyperbole. (0,5pt)"}, {"type": "libre", "numero": "7b", "points": 0.5, "enonce": "Que cherche la mère à montrer par cette réponse ?", "correction": "Mise en valeur de la durée d'un mois. (0,5pt)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Relevez du texte les indices qui montrent que le temps s'écoule longuement pour Sidi Mohammed.", "correction": "le mois à venir sera une éternité. ; je te demande si un mois est long ; La maison se réveillait peu à peu (0,5 pt x2)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Que représentent, à vos yeux vos parents ?", "correction": "Réponse justifiée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Selon vous, le rôle de la mère est-il aussi important que celui du père ? Justifiez votre réponse.", "correction": "Point de vue justifié."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nCertains jeunes suivent actuellement la mode et accorde beaucoup d'importance aux apparences contrairement à d'autres qui préfèrent la simplicité et s'attachent aux traditions. Que préférez-vous ? S'habiller à la mode ou porter les habits traditionnels ?\n\nJustifiez votre point de vue par des arguments pertinents.", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
