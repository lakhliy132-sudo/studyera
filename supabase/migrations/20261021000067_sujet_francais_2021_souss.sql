-- Sujet de français, examen régional 2021 (session normale), académie
-- Souss-Massa, sur La Boîte à merveilles.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2021 جهة سوس ماسة »).
-- Corrigé et barème officiels recopiés question par question.
--
-- Académie régionale d'éducation et de formation « جهة سوس ماسة », session
-- normale 2021 (« الدورة العادية 2021 »), sujet des « الشعب العلمية والتقنية
-- والمهنية » ; durée « ساعتان ». Coefficient : 3 pour sciences économiques
-- et gestion et pour les filières commerce et comptabilité, 4 pour les
-- autres filières professionnelles et pour les séries scientifiques.
-- PDF scanné : texte établi depuis l'OCR et vérifié sur le scan.
-- Question 1 : la case « Siècle » du corrigé porte « XXe » et, à la ligne,
-- « 20ème » ; séparés ici par « / ».
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2021,
  $sujet$normale$sujet$,
  $sujet$Souss-Massa$sujet$,
  $sujet$La Boîte à merveilles$sujet$,
  $sujet$Toutes les séries scientifiques, techniques et professionnelles$sujet$,
  120,
  $sujet$## Texte

Mes connaissances en bijoux étaient moins étendues. J'en avais pourtant vu de somptueux⁽¹⁾ à l'occasion des fêtes sur les femmes et sur les petites filles. Je les classais en deux catégories : les bijoux de tous les jours en argent gris bleu qui me fascinaient et les bijoux de fête rutilants⁽²⁾ de pierreries. Ceux-ci, forgés par les mains des génies dans des palais souterrains, gardaient encore dans leur miroitement⁽³⁾ et leur couleur de soleil, le souvenir des flammes où leur matière avait coulé. Pour moi, tous ces bijoux de fête provenaient de trésors cachés, avaient appartenu en des temps immémoriaux à des princesses de rêve dont le souvenir s'était oublié. Il fallait être niais, il fallait être puéril pour croire que ces délicates architectures d'or et de pierres précieuses fussent l'œuvre de quelque artisan besogneux, pressé de les exécuter pour les échanger contre une vile monnaie. Ces ornements magiques naissaient gratuitement par le pouvoir de l'amour.

[…] À six ans, je ne pouvais formuler de telles considérations sur les bijoux et sur les fleurs, aucune discipline ne m'avait appris encore à classer méthodiquement mes idées. Mon vocabulaire était trop pauvre pour mettre au jour ce qui grouillait confusément en moi. C'était, je crois, cette impossibilité de faire part aux autres de mes découvertes, qui avait fait naître en moi une douloureuse mélancolie. Je pardonnais aux grandes personnes de me gronder, au besoin de me frapper pour une futilité, mais je leur en voulais à mort de ne pas essayer de me comprendre.

*¹ somptueux : magnifique, luxueux.*  
*² rutilants : brillants, étincelants, lumineux.*  
*³ miroitement : scintillement, éclat.*

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1pt)**

| Titre de l'œuvre | Auteur de l'œuvre | Genre littéraire de l'œuvre | Siècle |
|---|---|---|---|
| | | | |

**2.** D'après votre lecture de l'œuvre, répondez par « **vrai** » ou « **faux** » : **(1pt)**

| | Vrai | Faux |
|---|---|---|
| a- L'œuvre appartient à la littérature maghrébine d'expression française. | | |
| b- Les événements racontés dans l'œuvre se déroulent au début de l'époque coloniale. | | |
| c- Le personnage principal a beaucoup d'amis. | | |
| d- L'imagination et le rêve occupent une place essentielle dans le monde du personnage principal. | | |

**3.** Le texte de base est à dominante : **Recopiez** et **justifiez** votre réponse **par deux indices** tirés du texte. [souligné sur la feuille, en gras ici] **(1pt)**

a- injonctive,  
b- descriptive,  
c- narrative,  
d- argumentative.

**4.** D'après le texte, le personnage principal a-t-il de larges connaissances dans le domaine des bijoux ? **Justifiez** [souligné sur la feuille, en gras ici] votre réponse **par une phrase** tirée du texte. **(1pt)**

**5.** Relevez dans le premier paragraphe **quatre mots** appartenant au **champ lexical** de **la lumière**. **(1pt)**

**6.** D'après le texte, que reproche l'enfant aux grandes personnes ? **(1pt)**

**7.** ***« je leur en voulais à mort »*** Quelle figure de style reconnaissez-vous dans la phrase ci-dessus ? **(1pt)**

**8.** La tonalité dominante (registre littéraire) dans **le second paragraphe** est : **Recopiez la bonne réponse.** **(1pt)**

a- tragique  
b- lyrique  
c- comique

**9.** Êtes-vous d'accord avec les parents qui ne donnent aucune importance aux idées de leurs enfants ? **Justifiez** [souligné sur la feuille, en gras ici] votre réponse. **(1pt)**

**10.** Pourquoi, à votre avis, les jeunes sont souvent mal compris par leurs parents ? **Justifiez** [souligné sur la feuille, en gras ici] votre réponse. **(1pt)**

## II. Production écrite (10 points)

**Sujet :**

Certains pensent que les enfants d'aujourd'hui sont tellement gâtés⁽¹⁾ qu'ils deviennent insupportables.

Qu'en pensez-vous ?

Rédigez un texte argumentatif dans lequel vous présenterez votre point de vue appuyé par des arguments et des exemples précis.

*¹ **enfant gâté** : enfant habitué à voir satisfaire ses moindres désirs.*

| **Critères d'évaluation du discours** | | **Critères d'évaluation de la langue** | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture. | **5pts** | Vocabulaire (usage de termes précis et variés). | **5pts** |
| Cohérence de l'argumentation. | | Syntaxe (construction de phrases correctes). | |
| Structure du texte (organisation et progression du texte). | | Ponctuation (usage d'une ponctuation adéquate). | |
| | | Orthographe d'usage et grammaticale (respect des règles). | |
| | | Conjugaison (emploi des temps). | |$sujet$,
  $sujet$## Corrigé et barème

*Toute réponse (ou formulation) non prévue doit être discutée selon les procédures du guide de correction en vigueur.*

### I. Étude de texte

**1.** **(1pt)**

| Titre de l'œuvre | Auteur de l'œuvre | Genre littéraire de l'œuvre | Siècle |
|---|---|---|---|
| La Boîte à Merveilles | Ahmed Sefrioui | - Roman autobiographique | XXe / 20ème |

**2.** **(1pt)**

| | |
|---|---|
| a- L'œuvre appartient à la littérature maghrébine d'expression française. | Vrai |
| b- Les événements racontés dans l'œuvre se déroulent au début de l'époque coloniale. | Vrai |
| c- Le personnage principal a beaucoup d'amis. | Faux |
| d- L'imagination et le rêve occupent une place essentielle dans le monde du personnage principal. | Vrai |

**3.** Le texte de base est à dominante : **b**-descriptive. (0,5pt) **Justification** : l'imparfait, les adjectifs qualificatifs : somptueux, gris bleu, rutilants, souterrains, immémoriaux… **(N.B. : Accepter les autres éléments de la caractérisation.)** (0,5pt) **(1pt)**

**4.** Non, le personnage principal n'a pas de larges connaissances dans le domaine des bijoux. (0,5pt) **Justification** : « Mes connaissances en bijoux étaient moins étendues. » (0,5pt) **(1pt)**

**5.** **Le champ lexical de la lumière** dans le premier paragraphe : **rutilants, miroitement, soleil, flammes.** (0,25pt x 4) **(1pt)**

**6.** L'enfant reproche aux grandes personnes de ne pas essayer de le comprendre. **(1pt)**

**7.** La figure de style contenue dans la phrase ci-dessus est **l'hyperbole.** **(1pt)**

**8.** La tonalité dominante (registre littéraire) du second paragraphe est : **b- lyrique.** **(1pt)**

**9.** Accepter toute réponse correcte et justifiée. **(1pt)**

**10.** Accepter toute réponse correcte et justifiée. **(1pt)**

### II. Production écrite

**N.B. : Le correcteur est prié de corriger la production écrite sans tenir rigueur du type de plan choisi par l'élève.**

| **Critères d'évaluation du discours** | | **Critères d'évaluation de la langue** | |
|---|---|---|---|
| Conformité de la production à la consigne d'écriture. | **5pts** | Vocabulaire (usage de termes précis et variés). | **5pts** |
| Cohérence de l'argumentation. | | Syntaxe (construction de phrases correctes). | |
| Structure du texte (organisation et progression du texte). | | Ponctuation (usage d'une ponctuation adéquate). | |
| | | Orthographe d'usage et grammaticale (respect des règles). | |
| | | Conjugaison (emploi des temps). | |$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "Mes connaissances en bijoux étaient moins étendues. J'en avais pourtant vu de somptueux⁽¹⁾ à l'occasion des fêtes sur les femmes et sur les petites filles. Je les classais en deux catégories : les bijoux de tous les jours en argent gris bleu qui me fascinaient et les bijoux de fête rutilants⁽²⁾ de pierreries. Ceux-ci, forgés par les mains des génies dans des palais souterrains, gardaient encore dans leur miroitement⁽³⁾ et leur couleur de soleil, le souvenir des flammes où leur matière avait coulé. Pour moi, tous ces bijoux de fête provenaient de trésors cachés, avaient appartenu en des temps immémoriaux à des princesses de rêve dont le souvenir s'était oublié. Il fallait être niais, il fallait être puéril pour croire que ces délicates architectures d'or et de pierres précieuses fussent l'œuvre de quelque artisan besogneux, pressé de les exécuter pour les échanger contre une vile monnaie. Ces ornements magiques naissaient gratuitement par le pouvoir de l'amour.\n\n[…] À six ans, je ne pouvais formuler de telles considérations sur les bijoux et sur les fleurs, aucune discipline ne m'avait appris encore à classer méthodiquement mes idées. Mon vocabulaire était trop pauvre pour mettre au jour ce qui grouillait confusément en moi. C'était, je crois, cette impossibilité de faire part aux autres de mes découvertes, qui avait fait naître en moi une douloureuse mélancolie. Je pardonnais aux grandes personnes de me gronder, au besoin de me frapper pour une futilité, mais je leur en voulais à mort de ne pas essayer de me comprendre.\n\n*¹ somptueux : magnifique, luxueux.*  \n*² rutilants : brillants, étincelants, lumineux.*  \n*³ miroitement : scintillement, éclat.*", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Titre de l'œuvre", "reponse": "La Boîte à Merveilles"}, {"libelle": "Auteur de l'œuvre", "reponse": "Ahmed Sefrioui"}, {"libelle": "Genre littéraire de l'œuvre", "reponse": "- Roman autobiographique"}, {"libelle": "Siècle", "reponse": "XXe / 20ème"}]}, {"type": "vrai-faux", "numero": "2", "points": 1, "enonce": "D'après votre lecture de l'œuvre, répondez par « **vrai** » ou « **faux** » :", "affirmations": [{"texte": "a- L'œuvre appartient à la littérature maghrébine d'expression française.", "vrai": true}, {"texte": "b- Les événements racontés dans l'œuvre se déroulent au début de l'époque coloniale.", "vrai": true}, {"texte": "c- Le personnage principal a beaucoup d'amis.", "vrai": false}, {"texte": "d- L'imagination et le rêve occupent une place essentielle dans le monde du personnage principal.", "vrai": true}]}, {"type": "choix", "numero": "3", "points": 1, "enonce": "Le texte de base est à dominante : **Recopiez** et **justifiez** votre réponse **par deux indices** tirés du texte. [souligné sur la feuille, en gras ici]", "options": ["injonctive,", "descriptive,", "narrative,", "argumentative."], "bonne": 1}, {"type": "libre", "numero": "4", "points": 1, "enonce": "D'après le texte, le personnage principal a-t-il de larges connaissances dans le domaine des bijoux ? **Justifiez** [souligné sur la feuille, en gras ici] votre réponse **par une phrase** tirée du texte.", "correction": "Non, le personnage principal n'a pas de larges connaissances dans le domaine des bijoux. (0,5pt) **Justification** : « Mes connaissances en bijoux étaient moins étendues. » (0,5pt)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Relevez dans le premier paragraphe **quatre mots** appartenant au **champ lexical** de **la lumière**.", "correction": "**Le champ lexical de la lumière** dans le premier paragraphe : **rutilants, miroitement, soleil, flammes.** (0,25pt x 4)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "D'après le texte, que reproche l'enfant aux grandes personnes ?", "correction": "L'enfant reproche aux grandes personnes de ne pas essayer de le comprendre."}, {"type": "libre", "numero": "7", "points": 1, "enonce": "***« je leur en voulais à mort »*** Quelle figure de style reconnaissez-vous dans la phrase ci-dessus ?", "correction": "La figure de style contenue dans la phrase ci-dessus est **l'hyperbole.**"}, {"type": "choix", "numero": "8", "points": 1, "enonce": "La tonalité dominante (registre littéraire) dans **le second paragraphe** est : **Recopiez la bonne réponse.**", "options": ["tragique", "lyrique", "comique"], "bonne": 1}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Êtes-vous d'accord avec les parents qui ne donnent aucune importance aux idées de leurs enfants ? **Justifiez** [souligné sur la feuille, en gras ici] votre réponse.", "correction": "Accepter toute réponse correcte et justifiée."}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Pourquoi, à votre avis, les jeunes sont souvent mal compris par leurs parents ? **Justifiez** [souligné sur la feuille, en gras ici] votre réponse.", "correction": "Accepter toute réponse correcte et justifiée."}]}, {"titre": "II. Production écrite", "points": 10, "texte": "**Sujet :**\n\nCertains pensent que les enfants d'aujourd'hui sont tellement gâtés⁽¹⁾ qu'ils deviennent insupportables.\n\nQu'en pensez-vous ?\n\nRédigez un texte argumentatif dans lequel vous présenterez votre point de vue appuyé par des arguments et des exemples précis.\n\n*¹ **enfant gâté** : enfant habitué à voir satisfaire ses moindres désirs.*\n\n| **Critères d'évaluation du discours** | | **Critères d'évaluation de la langue** | |\n|---|---|---|---|\n| Conformité de la production à la consigne d'écriture. | **5pts** | Vocabulaire (usage de termes précis et variés). | **5pts** |\n| Cohérence de l'argumentation. | | Syntaxe (construction de phrases correctes). | |\n| Structure du texte (organisation et progression du texte). | | Ponctuation (usage d'une ponctuation adéquate). | |\n| | | Orthographe d'usage et grammaticale (respect des règles). | |\n| | | Conjugaison (emploi des temps). | |", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
