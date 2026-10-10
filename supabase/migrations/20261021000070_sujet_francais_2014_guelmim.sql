-- Sujet de français, examen régional 2014 (session normale), académie
-- Guelmim-Oued Noun.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2014 جهة كلميم واد نون »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Sujet à deux textes : Antigone (texte 1) et La Boîte à merveilles (texte 2),
-- d'où une œuvre laissée vide.
-- L'en-tête (en arabe) nomme « الأكاديمية الجهوية للتربية والتكوين كلميم-السمارة »
-- (Guelmim-Es Semara, avant le découpage régional de 2015, aujourd'hui
-- Guelmim-Oued Noun) ; « دورة يونيو 2014 », « المترشحون الرسميون », durée
-- « ساعتان ». Coefficient « 4 / 3 » : 4 pour lettres et sciences humaines,
-- sciences expérimentales, sciences mathématiques, sciences et technologies,
-- arts appliqués ; 3 pour sciences économiques et gestion. Coefficient donc
-- laissé vide.
-- Question 7 (« 1 pt » sur la feuille) découpée en 7a et 7b selon le corrigé
-- (0,5 pt chacune). Le sujet ne chiffre pas les critères de la production
-- écrite ; le corrigé donne 5 et 5 pts.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2014,
  $sujet$normale$sujet$,
  $sujet$Guelmim-Oued Noun$sujet$,
  $sujet$Lettres et sciences humaines, sciences expérimentales, sciences mathématiques, sciences et technologies, arts appliqués, sciences économiques et gestion$sujet$,
  120,
  $sujet$## Texte

**Texte 1 :**

**ISMENE**

Essaie de comprendre au moins!

**ANTIGONE**

Comprendre...Vous n'avez que ce mot-là dans la bouche, tous, depuis que je suis toute petite. Il fallait comprendre qu'on ne peut pas toucher à l'eau, à la belle eau fuyante et froide parce que cela mouille les dalles, à la terre parce que cela tache les robes. Il fallait comprendre qu'on ne doit pas manger tout à la fois, donner tout ce qu'on a dans ses poches au mendiant qu'on rencontre, courir, courir dans le vent jusqu'à ce qu'on tombe par terre et boire quand on a chaud et se baigner quand il est trop tôt ou trop tard, mais pas juste quand on en a envie! Comprendre. Toujours comprendre. Moi, je ne veux pas comprendre. Je comprendrai quand je serai vieille. (Elle achève doucement.) Si je deviens vieille. Pas maintenant.

**Texte 2 :**

A six ans, je ne pouvais formuler de telles considérations sur les bijoux et sur les fleurs, aucune discipline ne m'avait appris encore à classer méthodiquement mes idées. Mon vocabulaire était trop pauvre pour mettre au jour ce qui grouillait confusément en moi. C'était, je crois, cette impossibilité de faire part aux autres de mes découvertes qui avait fait naître en moi une douloureuse mélancolie. Je pardonnais aux grandes personnes de me gronder, au besoin de me frapper pour une futilité, mais je leur en voulais à mort de ne pas essayer de me comprendre.

Pour ma mère, j'étais un garçon parfait si je me lavais les pieds avant d'entrer dans la pièce ; pour mon père, j'étais un objet de fierté si le vendredi je copiais ses gestes pour faire la prière rituelle ; pour les voisins j'étais un enfant modèle si je ne traçais pas de graffiti sur les murs de l'escalier, si je ne faisais pas de bruit en jouant sur la terrasse.

## I. Étude de texte (10 points)

**1.** A- Contextualisation des deux textes. Recopiez et complétez le tableau suivant (Titre de l'œuvre : texte 1 « Antigone », texte 2 « La boîte à merveilles ») : **(1 pt)**

| Texte 1 — Genre littéraire | Texte 1 — Auteur | Texte 2 — Genre littéraire | Texte 2 — Auteur |
|---|---|---|---|
| | | | |

**2a.** Depuis le début de leur conversation, de quoi Ismène tente-t-elle de convaincre Antigone ? (texte 1) **(0,5pt)**

**2b.** Dans les passages qui précèdent cet extrait, Maâlem Abdeslem a annoncé à sa femme et au narrateur qu'il a l'intention de les faire sortir : (texte 2) - Où va-t-il les accompagner ? - Dans quel but ? **(0,5 pt)**

**3.** B- Analyse des deux textes. Texte 1 : A travers sa réplique, Antigone se montre : (Choisissez la bonne réponse.) **(1 pt)**

a- révoltée  
b- obéissante  
c- compréhensive

**4.** Relevez dans la réplique d'Antigone une expression qui annonce implicitement sa mort. **(1 pt)**

**5.** Citez deux actions que son entourage interdisait à Antigone quand elle était petite. **(1 pt)**

**6.** Est-ce qu'Antigone accepte d'écouter le conseil donné par Ismène ? Justifiez votre réponse par un indice tiré du texte. **(1 pt)**

**7a.** Texte 2 : D'après le texte, quelle est la cause de la mélancolie qu'éprouvait Sidi Mohammed ? **(1 pt)**

**7b.** Complétez le tableau suivant :

| Ce que le narrateur pardonne aux adultes | Ce que le narrateur reproche aux adultes |
|---|---|
| | |

**8.** « **Je leur en voulais à mort** de ne pas essayer de me comprendre ». [souligné sur la feuille, en gras ici] Quelle figure de style reconnaissez-vous dans ce qui est souligné ? (Choisissez la bonne réponse) **(1 pt)**

a- Une anaphore  
b- une comparaison  
c- une hyperbole.

**9.** C- Réactions individuelles. Refuser de comprendre et d'écouter les autres, est-ce une qualité ou un défaut ? Justifiez votre réponse par un ou deux arguments. **(1 pt)**

**10.** Croyez-vous que les jeunes doivent faire tout ce qui plaît à leurs parents ? Justifiez votre réponse. **(1 pt)**

## II. Production écrite (10 points)

**Le sujet :**

Ces derniers temps, au Maroc, les médias relatent chaque jour des cas de vol à main armée, d'agression, et même de meurtres perpétrés (commis) par des jeunes.

Quelles sont à votre avis les causes de ces phénomènes ? Que proposez-vous comme solutions pour y remédier ?

**Lors de la correction, il sera tenu compte :**

- Du respect de la consigne
- De la Correction de la langue
- De la Cohérence textuelle.
- De la pertinence des arguments.$sujet$,
  $sujet$## Corrigé et barème

*Barème et éléments de correction (à titre indicatif). Toute réponse non prévue est laissée à l'appréciation du correcteur.*

### I. Étude de texte

**1.** **(1 pt)**

| Texte 1 — Genre littéraire | Texte 1 — Auteur | Texte 2 — Genre littéraire | Texte 2 — Auteur |
|---|---|---|---|
| tragédie moderne | Jean Anouilh | roman autobiographique | Ahmed Sefrioui |

**2a.** Ismène tente de convaincre Antigone de renoncer à son projet **(0,5pt)**

**2b.** Il va les accompagner au marché des bijoux (0,25 pt). Il les accompagne à ce lieu dans le but d'acheter des bracelets à sa femme (0,25 pt) **(0,5 pt)**

**3.** A travers sa réplique, Antigone se montre : révoltée **(1 pt)**

**4.** L'expression qui annonce implicitement la mort d'Antigone : Si je deviens vieille **(1 pt)**

**5.** Les deux actions que son entourage interdisait à Antigone quand elle était petite : toucher à l'eau / toucher à la terre…. (0,5pt x2) **(1 pt)**

**6.** non (0,5pt) Justification : Moi, je ne veux pas comprendre. (0,5pt) **(1 pt)**

**7a.** la cause de la mélancolie qu'éprouvait Sidi Mohammed est : l'impossibilité de faire part aux autres de ses découvertes. (0,5 pt) **(1 pt)**

**7b.** 

| Ce que le narrateur pardonne aux adultes | Ce que le narrateur reproche aux adultes |
|---|---|
| le gronder / le frapper (0,25pt) | Ne pas essayer de le comprendre (0,25pt) |

**8.** Figure de style : une hyperbole. **(1 pt)**

**9.** Le point de vue justifié. **(1 pt)**

**10.** Le point de vue justifié. **(1 pt)**

### II. Production écrite

**Critères d'évaluation du discours : 5 pts**

- Conformité de la production à la consigne d'écriture
- Cohérence de l'argumentation
- Organisation et progression du texte

**Critères d'évaluation de la langue : 5 pts**

- Correction de la langue (ponctuation, orthographe, syntaxe, vocabulaire, conjugaison)$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement les deux textes et répondez aux questions.", "texte": "**Texte 1 :**\n\n**ISMENE**\n\nEssaie de comprendre au moins!\n\n**ANTIGONE**\n\nComprendre...Vous n'avez que ce mot-là dans la bouche, tous, depuis que je suis toute petite. Il fallait comprendre qu'on ne peut pas toucher à l'eau, à la belle eau fuyante et froide parce que cela mouille les dalles, à la terre parce que cela tache les robes. Il fallait comprendre qu'on ne doit pas manger tout à la fois, donner tout ce qu'on a dans ses poches au mendiant qu'on rencontre, courir, courir dans le vent jusqu'à ce qu'on tombe par terre et boire quand on a chaud et se baigner quand il est trop tôt ou trop tard, mais pas juste quand on en a envie! Comprendre. Toujours comprendre. Moi, je ne veux pas comprendre. Je comprendrai quand je serai vieille. (Elle achève doucement.) Si je deviens vieille. Pas maintenant.\n\n**Texte 2 :**\n\nA six ans, je ne pouvais formuler de telles considérations sur les bijoux et sur les fleurs, aucune discipline ne m'avait appris encore à classer méthodiquement mes idées. Mon vocabulaire était trop pauvre pour mettre au jour ce qui grouillait confusément en moi. C'était, je crois, cette impossibilité de faire part aux autres de mes découvertes qui avait fait naître en moi une douloureuse mélancolie. Je pardonnais aux grandes personnes de me gronder, au besoin de me frapper pour une futilité, mais je leur en voulais à mort de ne pas essayer de me comprendre.\n\nPour ma mère, j'étais un garçon parfait si je me lavais les pieds avant d'entrer dans la pièce ; pour mon père, j'étais un objet de fierté si le vendredi je copiais ses gestes pour faire la prière rituelle ; pour les voisins j'étais un enfant modèle si je ne traçais pas de graffiti sur les murs de l'escalier, si je ne faisais pas de bruit en jouant sur la terrasse.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "A- Contextualisation des deux textes. Recopiez et complétez le tableau suivant (Titre de l'œuvre : texte 1 « Antigone », texte 2 « La boîte à merveilles ») :", "champs": [{"libelle": "Texte 1 — Genre littéraire", "reponse": "tragédie moderne"}, {"libelle": "Texte 1 — Auteur", "reponse": "Jean Anouilh"}, {"libelle": "Texte 2 — Genre littéraire", "reponse": "roman autobiographique"}, {"libelle": "Texte 2 — Auteur", "reponse": "Ahmed Sefrioui"}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Depuis le début de leur conversation, de quoi Ismène tente-t-elle de convaincre Antigone ? (texte 1)", "correction": "Ismène tente de convaincre Antigone de renoncer à son projet"}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "Dans les passages qui précèdent cet extrait, Maâlem Abdeslem a annoncé à sa femme et au narrateur qu'il a l'intention de les faire sortir : (texte 2) - Où va-t-il les accompagner ? - Dans quel but ?", "correction": "Il va les accompagner au marché des bijoux (0,25 pt). Il les accompagne à ce lieu dans le but d'acheter des bracelets à sa femme (0,25 pt)"}, {"type": "choix", "numero": "3", "points": 1, "enonce": "B- Analyse des deux textes. Texte 1 : A travers sa réplique, Antigone se montre : (Choisissez la bonne réponse.)", "options": ["révoltée", "obéissante", "compréhensive"], "bonne": 0}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Relevez dans la réplique d'Antigone une expression qui annonce implicitement sa mort.", "correction": "L'expression qui annonce implicitement la mort d'Antigone : Si je deviens vieille"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Citez deux actions que son entourage interdisait à Antigone quand elle était petite.", "correction": "Les deux actions que son entourage interdisait à Antigone quand elle était petite : toucher à l'eau / toucher à la terre…. (0,5pt x2)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Est-ce qu'Antigone accepte d'écouter le conseil donné par Ismène ? Justifiez votre réponse par un indice tiré du texte.", "correction": "non (0,5pt) Justification : Moi, je ne veux pas comprendre. (0,5pt)"}, {"type": "libre", "numero": "7a", "points": 0.5, "enonce": "Texte 2 : D'après le texte, quelle est la cause de la mélancolie qu'éprouvait Sidi Mohammed ?", "correction": "la cause de la mélancolie qu'éprouvait Sidi Mohammed est : l'impossibilité de faire part aux autres de ses découvertes. (0,5 pt)"}, {"type": "tableau", "numero": "7b", "points": 0.5, "enonce": "Complétez le tableau suivant :", "champs": [{"libelle": "Ce que le narrateur pardonne aux adultes", "reponse": "le gronder / le frapper (0,25pt)"}, {"libelle": "Ce que le narrateur reproche aux adultes", "reponse": "Ne pas essayer de le comprendre (0,25pt)"}]}, {"type": "choix", "numero": "8", "points": 1, "enonce": "« **Je leur en voulais à mort** de ne pas essayer de me comprendre ». [souligné sur la feuille, en gras ici] Quelle figure de style reconnaissez-vous dans ce qui est souligné ? (Choisissez la bonne réponse)", "options": ["Une anaphore", "une comparaison", "une hyperbole."], "bonne": 2}, {"type": "libre", "numero": "9", "points": 1, "enonce": "C- Réactions individuelles. Refuser de comprendre et d'écouter les autres, est-ce une qualité ou un défaut ? Justifiez votre réponse par un ou deux arguments.", "correction": "Le point de vue justifié."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Croyez-vous que les jeunes doivent faire tout ce qui plaît à leurs parents ? Justifiez votre réponse.", "correction": "Le point de vue justifié."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Le sujet :**\n\nCes derniers temps, au Maroc, les médias relatent chaque jour des cas de vol à main armée, d'agression, et même de meurtres perpétrés (commis) par des jeunes.\n\nQuelles sont à votre avis les causes de ces phénomènes ? Que proposez-vous comme solutions pour y remédier ?\n\n**Lors de la correction, il sera tenu compte :**\n\n- Du respect de la consigne\n- De la Correction de la langue\n- De la Cohérence textuelle.\n- De la pertinence des arguments.", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
