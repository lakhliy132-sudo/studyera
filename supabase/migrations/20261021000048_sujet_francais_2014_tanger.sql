-- Sujet de français, examen régional 2014 (session normale), académie
-- Tanger-Tétouan-Al Hoceïma, sur Le Dernier Jour d'un condamné.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2014 جهة طنجة تطوان الحسيمة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- L'en-tête (en arabe) nomme l'académie « لجهة طنجة - تطوان » (Tanger-Tétouan,
-- avant le découpage régional de 2015, aujourd'hui Tanger-Tétouan-Al Hoceïma) ;
-- « الدورة العادية – يونيو 2014 », durée « 2 ساعات », filière « جميع الشعب الأدبية
-- و العلمية و التقنية ». Coefficient « 4 / 3 » : selon la série, donc non saisi.
-- Le sujet est imprimé sur une feuille-réponse (pointillés pour répondre) ; la
-- page 5 du PDF n'est que la page lignée de la production écrite.
-- Texte recopié sur l'image (OCR inexploitable). La question 7 cite « J'aimerais
-- recomposer… » alors que le texte porte « J'aimerais à recomposer… » : les deux
-- sont laissés comme sur la feuille.
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2014,
  $sujet$normale$sujet$,
  $sujet$Tanger-Tétouan-Al Hoceïma$sujet$,
  $sujet$Le Dernier Jour d'un condamné$sujet$,
  $sujet$Toutes les filières littéraires, scientifiques et techniques$sujet$,
  120,
  $sujet$## Texte

Puisque le jour ne paraît pas encore, que faire de la nuit ? Il m'est venu une idée. Je me suis levé et j'ai promené ma lampe sur les quatre murs de ma cellule. Ils sont couverts d'écritures, de dessins, de figures bizarres, de noms qui se mêlent et s'effacent les uns les autres. Il semble que chaque condamné ait voulu laisser trace, ici du moins. C'est du crayon, de la craie, du charbon, des lettres noires, blanches, grises, souvent de profondes entailles dans la pierre, ça et là des caractères rouillés qu'on dirait écrits avec du sang. Certes, si j'avais l'esprit plus libre, je prendrais intérêt à ce livre étrange qui se développe page à page à mes yeux sur chaque pierre de ce cachot. J'aimerais à recomposer un tout de ces fragments de pensée, épars sur la dalle ; à retrouver chaque homme sous chaque nom ; à rendre le sens et la vie à ces inscriptions mutilées, à ces phrases démembrées, à ces mots tronqués, corps sans tête, comme ceux qui les ont écrits.

À la hauteur de mon chevet, il y a deux cœurs enflammés, percés d'une flèche, et au-dessus : *Amour pour la vie*. Le malheureux ne prenait pas un long engagement.

À côté, une espèce de chapeau à trois cornes avec une petite figure grossièrement dessinée au-dessus, et ces mots : *Vive l'empereur !* 1824.

Encore des cœurs enflammés, avec cette inscription, caractéristique dans une prison : *J'aime et j'adore Mathieu Danvin.* JACQUES⁽¹⁾.

Sur le mur opposé on lit ce mot : *Papavoine*⁽²⁾. Le P majuscule est brodé d'arabesques et enjolivé avec soin.

Un couplet d'une chanson obscène.

Un bonnet de liberté sculpté assez profondément dans la pierre, avec ceci dessous : – *Bories*⁽³⁾. – *La République*. C'était un des quatre sous-officiers de La Rochelle. Pauvre jeune homme ! Que leurs prétendues nécessités politiques sont hideuses ! Pour une idée, pour une rêverie, pour une abstraction, cette horrible réalité qu'on appelle la guillotine ! Et moi qui me plaignais, moi, misérable qui ai commis un véritable crime, qui ai versé du sang !

*1. Exécuté pour crime de mœurs.*  
*2. Criminel guillotiné en 1821.*  
*3. Emprisonné pour ses idées et exécuté en 1822.*

## I. Étude de texte (10 points)

**1.** a) De quelle œuvre le texte est-il extrait ? b) A quel genre littéraire appartient-elle ? c) Qui en est l'auteur ? d) Citez un autre roman du même auteur. **(0,25 pt x 4)**

**2.** Pour situer le texte dans l'œuvre, répondez à ces questions : a) Quel est le nom de la prison où se trouve le narrateur ? b) Qu'a-t-il décidé d'écrire dans l'attente de son exécution ? **(0,5 pt x 2)**

**3.** a) A quel moment de la journée se passent les évènements évoqués dans le texte ? b) Justifiez votre réponse par un énoncé du texte. **(0,5 pt x 2)**

**4.** Que découvre le narrateur sur les murs de sa cellule ? (Relevez du texte quatre éléments). **(0,25 pt x 4)**

**5.** Dans le dernier paragraphe du texte, le narrateur avoue avoir commis un acte grave. Lequel ? **(1 pt)**

**6.** « *Ces fragments de pensée,* ***épars*** *sur la dalle.* » Le mot souligné dans cet énoncé signifie : [souligné sur la feuille, en gras ici] Recopiez la bonne réponse. **(1 pt)**

a- écrits sur la dalle  
b- dispersés sur la dalle  
c- gravés sur la dalle

**7a.** « *J'aimerais recomposer un tout de ces fragments de pensée* » a) Dans cet énoncé, quel est le sentiment exprimé par le narrateur ? **(0,5 pt)**

**7b.** Quel est le moyen utilisé pour exprimer ce sentiment ? **(0,25 pt x 2)**

**8.** « *Cette horrible réalité qu'on appelle la guillotine* » La figure de style employée dans cet énoncé est : Recopiez la bonne réponse. **(1 pt)**

a- une métaphore  
b- une métonymie  
c- une hyperbole

**9.** Selon vous, pourquoi les prisonniers laissent-ils des traces sur les murs de leurs cellules ? (Répondez en trois lignes au maximum) **(1 pt)**

**10.** Le narrateur semble éprouver un sentiment de pitié envers les prisonniers qui sont passés par la même cellule. Êtes-vous d'accord avec cette affirmation. Justifiez votre réponse (en quatre lignes au maximum). **(1 pt)**

## II. Production écrite (10 points)

**Sujet :**

Certains pensent qu'il faut punir sévèrement les individus qui commettent des délits graves. D'autres au contraire considèrent qu'on doit être indulgent envers eux.

Qu'en pensez-vous ?

Développez votre réflexion sur le sujet en vous appuyant sur des arguments pertinents et sur des exemples tirés de votre environnement et de vos lectures.

**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**

| Critères d'évaluation | Barème de notation |
|---|---|
| ***Critères d'évaluation du discours*** – Conformité de la production à la consigne d'écriture – Cohérence de l'argumentation – Structure du texte (organisation et progression du texte) | 5 Points |
| ***Critères d'évaluation de la langue*** – Vocabulaire (usage de termes précis et variés) – Syntaxe (construction de phrases correctes) – Ponctuation (usage d'une ponctuation adéquate) – Orthographe d'usage et grammaticale (respect des règles) – Conjugaison (emploi des temps) | 5 Points |$sujet$,
  $sujet$## Corrigé et barème

*Éléments de réponses (à titre indicatif) et barème de notation.*

### I. Étude de texte

**1.** a) Le Dernier Jour d'un Condamné ; b) un roman à thèse ; c) Victor Hugo ; d) Notre Dame de Paris, Les Misérables… **(0,25 pt x 4)**

**2.** a) Bicêtre ; b) Son journal intime, le journal de ses souffrances. **(0,5 pt x 2)**

**3.** a) Au petit matin, à l'aube, dans la nuit ; b) « *Puisque le jour ne parait pas encore,* (que faire de la nuit.) » **(0,5 pt x 2)**

**4.** Des écritures ; des dessins ; des figures (bizarres) ; des noms. **(0,25 pt x 4)**

**5.** Qu'il a commis un véritable crime, qu'il a versé du sang. **(1 pt)**

**6.** Dispersés sur la dalle. **(1 pt)**

**7a.** Le souhait ; **(0,5 pt)**

**7b.** le verbe « aimer », au conditionnel présent. **(0,25 pt x 2)**

**8.** Une hyperbole. **(1 pt)**

**9.** Pour exprimer leurs sentiments, pour témoigner de leurs souffrances, pour marquer leur passage, pour transmettre des messages… (*Accepter toute réponse allant dans le même sens*). **(1 pt)**

**10.** Accepter toute opinion convenablement justifiée. **(1 pt)**

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
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Puisque le jour ne paraît pas encore, que faire de la nuit ? Il m'est venu une idée. Je me suis levé et j'ai promené ma lampe sur les quatre murs de ma cellule. Ils sont couverts d'écritures, de dessins, de figures bizarres, de noms qui se mêlent et s'effacent les uns les autres. Il semble que chaque condamné ait voulu laisser trace, ici du moins. C'est du crayon, de la craie, du charbon, des lettres noires, blanches, grises, souvent de profondes entailles dans la pierre, ça et là des caractères rouillés qu'on dirait écrits avec du sang. Certes, si j'avais l'esprit plus libre, je prendrais intérêt à ce livre étrange qui se développe page à page à mes yeux sur chaque pierre de ce cachot. J'aimerais à recomposer un tout de ces fragments de pensée, épars sur la dalle ; à retrouver chaque homme sous chaque nom ; à rendre le sens et la vie à ces inscriptions mutilées, à ces phrases démembrées, à ces mots tronqués, corps sans tête, comme ceux qui les ont écrits.\n\nÀ la hauteur de mon chevet, il y a deux cœurs enflammés, percés d'une flèche, et au-dessus : *Amour pour la vie*. Le malheureux ne prenait pas un long engagement.\n\nÀ côté, une espèce de chapeau à trois cornes avec une petite figure grossièrement dessinée au-dessus, et ces mots : *Vive l'empereur !* 1824.\n\nEncore des cœurs enflammés, avec cette inscription, caractéristique dans une prison : *J'aime et j'adore Mathieu Danvin.* JACQUES⁽¹⁾.\n\nSur le mur opposé on lit ce mot : *Papavoine*⁽²⁾. Le P majuscule est brodé d'arabesques et enjolivé avec soin.\n\nUn couplet d'une chanson obscène.\n\nUn bonnet de liberté sculpté assez profondément dans la pierre, avec ceci dessous : – *Bories*⁽³⁾. – *La République*. C'était un des quatre sous-officiers de La Rochelle. Pauvre jeune homme ! Que leurs prétendues nécessités politiques sont hideuses ! Pour une idée, pour une rêverie, pour une abstraction, cette horrible réalité qu'on appelle la guillotine ! Et moi qui me plaignais, moi, misérable qui ai commis un véritable crime, qui ai versé du sang !\n\n*1. Exécuté pour crime de mœurs.*  \n*2. Criminel guillotiné en 1821.*  \n*3. Emprisonné pour ses idées et exécuté en 1822.*", "questions": [{"type": "libre", "numero": "1", "points": 1, "enonce": "a) De quelle œuvre le texte est-il extrait ? b) A quel genre littéraire appartient-elle ? c) Qui en est l'auteur ? d) Citez un autre roman du même auteur.", "correction": "a) Le Dernier Jour d'un Condamné ; b) un roman à thèse ; c) Victor Hugo ; d) Notre Dame de Paris, Les Misérables…"}, {"type": "libre", "numero": "2", "points": 1, "enonce": "Pour situer le texte dans l'œuvre, répondez à ces questions : a) Quel est le nom de la prison où se trouve le narrateur ? b) Qu'a-t-il décidé d'écrire dans l'attente de son exécution ?", "correction": "a) Bicêtre ; b) Son journal intime, le journal de ses souffrances."}, {"type": "libre", "numero": "3", "points": 1, "enonce": "a) A quel moment de la journée se passent les évènements évoqués dans le texte ? b) Justifiez votre réponse par un énoncé du texte.", "correction": "a) Au petit matin, à l'aube, dans la nuit ; b) « *Puisque le jour ne parait pas encore,* (que faire de la nuit.) »"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Que découvre le narrateur sur les murs de sa cellule ? (Relevez du texte quatre éléments).", "correction": "Des écritures ; des dessins ; des figures (bizarres) ; des noms."}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Dans le dernier paragraphe du texte, le narrateur avoue avoir commis un acte grave. Lequel ?", "correction": "Qu'il a commis un véritable crime, qu'il a versé du sang."}, {"type": "choix", "numero": "6", "points": 1, "enonce": "« *Ces fragments de pensée,* ***épars*** *sur la dalle.* » Le mot souligné dans cet énoncé signifie : [souligné sur la feuille, en gras ici] Recopiez la bonne réponse.", "options": ["écrits sur la dalle", "dispersés sur la dalle", "gravés sur la dalle"], "bonne": 1}, {"type": "libre", "numero": "7a", "points": 0.5, "enonce": "« *J'aimerais recomposer un tout de ces fragments de pensée* » a) Dans cet énoncé, quel est le sentiment exprimé par le narrateur ?", "correction": "Le souhait ;"}, {"type": "libre", "numero": "7b", "points": 0.5, "enonce": "Quel est le moyen utilisé pour exprimer ce sentiment ?", "correction": "le verbe « aimer », au conditionnel présent."}, {"type": "choix", "numero": "8", "points": 1, "enonce": "« *Cette horrible réalité qu'on appelle la guillotine* » La figure de style employée dans cet énoncé est : Recopiez la bonne réponse.", "options": ["une métaphore", "une métonymie", "une hyperbole"], "bonne": 2}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Selon vous, pourquoi les prisonniers laissent-ils des traces sur les murs de leurs cellules ? (Répondez en trois lignes au maximum)", "correction": "Pour exprimer leurs sentiments, pour témoigner de leurs souffrances, pour marquer leur passage, pour transmettre des messages… (*Accepter toute réponse allant dans le même sens*)."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Le narrateur semble éprouver un sentiment de pitié envers les prisonniers qui sont passés par la même cellule. Êtes-vous d'accord avec cette affirmation. Justifiez votre réponse (en quatre lignes au maximum).", "correction": "Accepter toute opinion convenablement justifiée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nCertains pensent qu'il faut punir sévèrement les individus qui commettent des délits graves. D'autres au contraire considèrent qu'on doit être indulgent envers eux.\n\nQu'en pensez-vous ?\n\nDéveloppez votre réflexion sur le sujet en vous appuyant sur des arguments pertinents et sur des exemples tirés de votre environnement et de vos lectures.\n\n**La correction de l'épreuve de production écrite tiendra compte des critères suivants :**\n\n| Critères d'évaluation | Barème de notation |\n|---|---|\n| ***Critères d'évaluation du discours*** – Conformité de la production à la consigne d'écriture – Cohérence de l'argumentation – Structure du texte (organisation et progression du texte) | 5 Points |\n| ***Critères d'évaluation de la langue*** – Vocabulaire (usage de termes précis et variés) – Syntaxe (construction de phrases correctes) – Ponctuation (usage d'une ponctuation adéquate) – Orthographe d'usage et grammaticale (respect des règles) – Conjugaison (emploi des temps) | 5 Points |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
