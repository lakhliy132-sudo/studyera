-- Sujet de français, examen régional 2014 (session de rattrapage), académie
-- Drâa-Tafilalet, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2014 جهة درعة تافيلالت »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie « الأكاديمية الجهوية للتربية والتكوين
-- جهة مكناس- تافيلالت » (Meknès-Tafilalet, avant le découpage régional de
-- 2015) ; « الدورة الاستدراكية : يوليوز 2014 », « خاص بالمترشحين الممدرسين »,
-- durée « ساعتان ». Coefficient vide : 3 pour sciences économiques et
-- gestion, 4 pour les autres séries.
-- Questions 3 a et 3 b : notées 1pt chacune sur le sujet, mais le corrigé
-- indique « (0.5pt) » après chaque réponse ; recopié tel quel.
-- Le corrigé de la production écrite se termine par un total « 20 pts »
-- (sous les quatre critères qui font 10 points) : recopié tel quel.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2014,
  $sujet$rattrapage$sujet$,
  $sujet$Drâa-Tafilalet$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences économiques et gestion, sciences et technologies électriques, sciences et technologies mécaniques, arts appliqués$sujet$,
  120,
  $sujet$## Texte

Mon père nous quitta le surlendemain à l'aube. Il partit, avec pour tout bagage, une sacoche de berger, en palmier nain, dont il avait fait l'acquisition la veille, une faucille neuve et un sac en toile, avec une fermeture à coulisse. Ma mère l'avait confectionné dans un morceau de *haïk* de coton et l'avait bourré de provisions : olives noires, figues sèches, farine grillée et sucrée, deux pains parfumés à l'anis et dix *qarchalas*. Nous appelons ainsi des petits pains ronds sucrés, parfumés à l'anis et à la fleur d'oranger et décorés de grains de sésame.

J'étais réveillé quand mon père partit. Ma mère lui fit quelques recommandations et resta après son départ, prostrée sur son lit, le visage caché dans ses deux mains. J'eus la sensation que nous étions abandonnés, que nous étions devenus orphelins.

Tout le monde dans le quartier devait être au courant de nos ennuis matériels et du départ de mon père. Ils manifesteraient à notre égard une pitié ostentatoire plus humiliante que le pire mépris. Mon père parti, nous restions sans soutien, sans défense.

Le père, dans une famille comme la nôtre, représente une protection occulte. Point n'est besoin qu'il soit riche, son prestige moral donne force, équilibre, assurance et respectabilité.

Mon père venait le soir seulement à la maison, mais il semblait que toute la journée se passait en préparatifs pour le recevoir. Je comprenais ce qui tourmentait ma mère, ce matin, dans la lumière du jour à peine naissant. Elle se rendait compte dans le tréfonds de son cœur que ses préparatifs seraient vains. Personne le soir ne pousserait plus notre porte, n'apporterait de l'extérieur la suave odeur du travail, ne servirait de lien entre nous et la vie exubérante de la rue.

Pour ma mère et pour moi, mon père représentait la force, l'aventure, la sécurité, la paix. Il n'avait jamais quitté sa maison ; les circonstances qui l'obligeaient ainsi à le faire prenaient dans notre imagination une figure hideuse.

La maison se réveillait peu à peu, saluait le soleil et ses bruits familiers. Je me sentais mieux ce matin. Je m'assis dans mon lit. Ma tête ne pesait rien sur mes épaules, mes bras n'étaient agités d'aucune fièvre.

– Maman, dis-je, est-ce que c'est long un mois ?

Ma mère se secoua de sa torpeur, regarda à droite, puis à gauche, comme pour reconnaître l'endroit où elle se trouvait et me fixa avec des yeux étonnés. .

– As-tu parlé, Sidi Mohammed ?

– Oui, maman ; je te demande si un mois est long.

– Un mois dure un mois, mon fils, mais pour nous, le mois à venir sera une éternité.

– Je sais attendre ; toi, tu ne sais pas encore ou plutôt, tu l'as su autrefois mais tu as dû oublier.

Ma mère parut abasourdie par cette réflexion

Extrait de « La Boîte à Merveilles » d'Ahmed Sefrioui

## I. Étude de texte (10 points)

**1.** Ahmed Sefrioui est un écrivain marocain. - Quand et où est-il né ? (0,25pt×2). - Citez une de ses œuvres autre que « *La Boîte à Merveilles* ». (0,75pt). - Quand est-il mort ? (0,25pt). Pour répondre, **vous pouvez choisir** [souligné sur la feuille, en gras ici] parmi les informations suivantes : 1910, 1915, 2000, 2004, à Fès, à Rabat, « *La Nuit Sacrée* », « *Le Chapelet d'Ambre* ». **(1,5pt)**

**2.** Relevez dans le texte deux indices qui montrent que « *La Boîte à Merveilles* » est une œuvre autobiographique. **(1pt)**

**3a.** Situez ce passage dans l'œuvre en répondant aux questions suivantes : a- Pourquoi le père a-t-il quitté sa famille ? **(1pt)**

**3b.** b- Quel travail compte-t-il faire ? Justifiez votre réponse à partir du texte. **(1pt)**

**4.** Que représente le père pour la famille de Sidi Mohammed ? **(0,5pt)**

**5a.** a- Quel est le sentiment de la mère après le départ de son mari ? **(1pt)**

**5b.** b- Quelle est la sensation de l'enfant après le départ de son père ? **(1pt)**

**6.** « ***La maison se réveillait peu à peu, saluait le soleil…***» De quelle figure de style s'agit-il ? Justifiez votre réponse. **(1pt)**

**7.** Pourquoi Lalla Zoubida estime-t-elle que « *le mois à venir sera une éternité* » ? **(1pt)**

**8.** ***« Ils manifesteraient à notre égard une pitié ostentatoire plus humiliante que le pire mépris. »*** Selon vous, l'enfant a-t-il raison d'éprouver un sentiment pareil vis-à-vis des voisins ? Justifiez votre réponse. **(1pt)**

## II. Production écrite (10 points)

**SUJET :**

Pour Sidi Mohammed , Maâlem Abdeslem est un papa idéal : il représente la force, l'aventure, la sécurité et la paix .

Pour vous, qu'est-ce qu'un bon père ?

Rédigez un texte dans lequel vous exposerez votre point de vue sur le sujet.

**NB : Lors de la correction de la production écrite, il sera tenu compte des éléments suivants :**

- *Présentation de la copie :* 2pts
- *Respect de la consigne :* 3 pts.
- *Cohérence textuelle :* 2 pts.
- *Correction de la langue :* 3 pts$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponse (à titre indicatif) et barème. NB : Ce corrigé est donné à titre indicatif.*

### I. Étude de texte

**1.** -Ahmed Sefrioui est un écrivain marocain. -Il est né en 1915 (0.25pt) à Fès (0.25pt). -Une de ses œuvres autre que « *La Boîte à Merveilles* » : « *Le Chapelet d'Ambre* » (0.75pt) -Il est mort en 2004 (0.25pt) **(1,5pt)**

**2.** Deux indices qui montrent que « La Boite à Merveilles » est une œuvre autobiographique : « mon », « je » et « ma » … (0.5pt x 2) (Accepter toute réponse correcte) **(1pt)**

**3a.** le père a quitté sa famille parce qu'il a perdu son capital / pour aller travailler dans les environs de Fès (0.5pt ) (Accepter toute réponse correcte) **(1pt)**

**3b.** Il va travailler comme moissonneur : évocation de la « *faucille neuve* » dans le texte. (0.5pt) **(1pt)**

**4.** Pour la famille de Sidi Mohammed, le père représente la force, l'aventure, la sécurité et la paix **(0,5pt)**

**5a.** - Après le départ de son mari, la mère est triste. **(1pt)**

**5b.** - Après le départ de son père, l'enfant se sent abandonné. (Accepter toute réponse correcte) **(1pt)**

**6.** « *La maison se réveillait peu à peu, saluait le soleil…* » Accepter comme réponse : une personnification (« *se réveiller* » est propre à l'homme/ à l'animé) une métonymie (le contenant pour le contenu) (Accepter toute réponse correcte)(0.5pt x 2) **(1pt)**

**7.** Pour Lalla Zoubida « *le mois à venir sera une éternité* » car elle ne peut pas supporter l'absence de son mari (Accepter toute réponse correcte) **(1pt)**

**8.** « *Ils manifesteraient à notre égard une pitié ostentatoire plus humiliante que le pire mépris.* » Accepter toute réponse valable comme : non, car les voisins peuvent ne pas être aussi méchants que croit l'enfant / oui parce que le malheur des uns peut faire le bonheur des autres. (0.5pt x 2) **(1pt)**

### II. Production écrite

| | |
|---|---|
| Présentation de la copie : | 2pts |
| Respect de la consigne : | 3 pts. |
| Cohérence textuelle : | 2 pts. |
| Correction de la langue : | 3 pts |
| | 20 pts |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Relisez le texte et répondez aux questions suivantes :", "texte": "Mon père nous quitta le surlendemain à l'aube. Il partit, avec pour tout bagage, une sacoche de berger, en palmier nain, dont il avait fait l'acquisition la veille, une faucille neuve et un sac en toile, avec une fermeture à coulisse. Ma mère l'avait confectionné dans un morceau de *haïk* de coton et l'avait bourré de provisions : olives noires, figues sèches, farine grillée et sucrée, deux pains parfumés à l'anis et dix *qarchalas*. Nous appelons ainsi des petits pains ronds sucrés, parfumés à l'anis et à la fleur d'oranger et décorés de grains de sésame.\n\nJ'étais réveillé quand mon père partit. Ma mère lui fit quelques recommandations et resta après son départ, prostrée sur son lit, le visage caché dans ses deux mains. J'eus la sensation que nous étions abandonnés, que nous étions devenus orphelins.\n\nTout le monde dans le quartier devait être au courant de nos ennuis matériels et du départ de mon père. Ils manifesteraient à notre égard une pitié ostentatoire plus humiliante que le pire mépris. Mon père parti, nous restions sans soutien, sans défense.\n\nLe père, dans une famille comme la nôtre, représente une protection occulte. Point n'est besoin qu'il soit riche, son prestige moral donne force, équilibre, assurance et respectabilité.\n\nMon père venait le soir seulement à la maison, mais il semblait que toute la journée se passait en préparatifs pour le recevoir. Je comprenais ce qui tourmentait ma mère, ce matin, dans la lumière du jour à peine naissant. Elle se rendait compte dans le tréfonds de son cœur que ses préparatifs seraient vains. Personne le soir ne pousserait plus notre porte, n'apporterait de l'extérieur la suave odeur du travail, ne servirait de lien entre nous et la vie exubérante de la rue.\n\nPour ma mère et pour moi, mon père représentait la force, l'aventure, la sécurité, la paix. Il n'avait jamais quitté sa maison ; les circonstances qui l'obligeaient ainsi à le faire prenaient dans notre imagination une figure hideuse.\n\nLa maison se réveillait peu à peu, saluait le soleil et ses bruits familiers. Je me sentais mieux ce matin. Je m'assis dans mon lit. Ma tête ne pesait rien sur mes épaules, mes bras n'étaient agités d'aucune fièvre.\n\n– Maman, dis-je, est-ce que c'est long un mois ?\n\nMa mère se secoua de sa torpeur, regarda à droite, puis à gauche, comme pour reconnaître l'endroit où elle se trouvait et me fixa avec des yeux étonnés. .\n\n– As-tu parlé, Sidi Mohammed ?\n\n– Oui, maman ; je te demande si un mois est long.\n\n– Un mois dure un mois, mon fils, mais pour nous, le mois à venir sera une éternité.\n\n– Je sais attendre ; toi, tu ne sais pas encore ou plutôt, tu l'as su autrefois mais tu as dû oublier.\n\nMa mère parut abasourdie par cette réflexion\n\nExtrait de « La Boîte à Merveilles » d'Ahmed Sefrioui", "questions": [{"type": "libre", "numero": "1", "points": 1.5, "enonce": "Ahmed Sefrioui est un écrivain marocain. - Quand et où est-il né ? (0,25pt×2). - Citez une de ses œuvres autre que « *La Boîte à Merveilles* ». (0,75pt). - Quand est-il mort ? (0,25pt). Pour répondre, **vous pouvez choisir** [souligné sur la feuille, en gras ici] parmi les informations suivantes : 1910, 1915, 2000, 2004, à Fès, à Rabat, « *La Nuit Sacrée* », « *Le Chapelet d'Ambre* ».", "correction": "-Ahmed Sefrioui est un écrivain marocain. -Il est né en 1915 (0.25pt) à Fès (0.25pt). -Une de ses œuvres autre que « *La Boîte à Merveilles* » : « *Le Chapelet d'Ambre* » (0.75pt) -Il est mort en 2004 (0.25pt)"}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Relevez dans le texte deux indices qui montrent que « *La Boîte à Merveilles* » est une œuvre autobiographique.", "correction": "Deux indices qui montrent que « La Boite à Merveilles » est une œuvre autobiographique : « mon », « je » et « ma » … (0.5pt x 2) (Accepter toute réponse correcte)"}, {"type": "libre", "numero": "3a", "points": 1, "enonce": "Situez ce passage dans l'œuvre en répondant aux questions suivantes : a- Pourquoi le père a-t-il quitté sa famille ?", "correction": "le père a quitté sa famille parce qu'il a perdu son capital / pour aller travailler dans les environs de Fès (0.5pt ) (Accepter toute réponse correcte)"}, {"type": "libre", "numero": "3b", "points": 1, "enonce": "b- Quel travail compte-t-il faire ? Justifiez votre réponse à partir du texte.", "correction": "Il va travailler comme moissonneur : évocation de la « *faucille neuve* » dans le texte. (0.5pt)"}, {"type": "libre", "numero": "4", "points": 0.5, "enonce": "Que représente le père pour la famille de Sidi Mohammed ?", "correction": "Pour la famille de Sidi Mohammed, le père représente la force, l'aventure, la sécurité et la paix"}, {"type": "libre", "numero": "5a", "points": 1, "enonce": "a- Quel est le sentiment de la mère après le départ de son mari ?", "correction": "- Après le départ de son mari, la mère est triste."}, {"type": "libre", "numero": "5b", "points": 1, "enonce": "b- Quelle est la sensation de l'enfant après le départ de son père ?", "correction": "- Après le départ de son père, l'enfant se sent abandonné. (Accepter toute réponse correcte)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "« ***La maison se réveillait peu à peu, saluait le soleil…***» De quelle figure de style s'agit-il ? Justifiez votre réponse.", "correction": "« *La maison se réveillait peu à peu, saluait le soleil…* » Accepter comme réponse : une personnification (« *se réveiller* » est propre à l'homme/ à l'animé) une métonymie (le contenant pour le contenu) (Accepter toute réponse correcte)(0.5pt x 2)"}, {"type": "libre", "numero": "7", "points": 1, "enonce": "Pourquoi Lalla Zoubida estime-t-elle que « *le mois à venir sera une éternité* » ?", "correction": "Pour Lalla Zoubida « *le mois à venir sera une éternité* » car elle ne peut pas supporter l'absence de son mari (Accepter toute réponse correcte)"}, {"type": "libre", "numero": "8", "points": 1, "enonce": "***« Ils manifesteraient à notre égard une pitié ostentatoire plus humiliante que le pire mépris. »*** Selon vous, l'enfant a-t-il raison d'éprouver un sentiment pareil vis-à-vis des voisins ? Justifiez votre réponse.", "correction": "« *Ils manifesteraient à notre égard une pitié ostentatoire plus humiliante que le pire mépris.* » Accepter toute réponse valable comme : non, car les voisins peuvent ne pas être aussi méchants que croit l'enfant / oui parce que le malheur des uns peut faire le bonheur des autres. (0.5pt x 2)"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**SUJET :**\n\nPour Sidi Mohammed , Maâlem Abdeslem est un papa idéal : il représente la force, l'aventure, la sécurité et la paix .\n\nPour vous, qu'est-ce qu'un bon père ?\n\nRédigez un texte dans lequel vous exposerez votre point de vue sur le sujet.\n\n**NB : Lors de la correction de la production écrite, il sera tenu compte des éléments suivants :**\n\n- *Présentation de la copie :* 2pts\n- *Respect de la consigne :* 3 pts.\n- *Cohérence textuelle :* 2 pts.\n- *Correction de la langue :* 3 pts", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
