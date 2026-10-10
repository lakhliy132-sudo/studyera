-- Sujet de français, examen régional 2024 (session normale), académie
-- Drâa-Tafilalet, sur Antigone.
-- Transcrit mot pour mot depuis le PDF de l'académie publié sur
-- moutamadris.ma (« الامتحان الجهوي في اللغة الفرنسية 2024 جهة درعة تافيلالت »).
-- Corrigé et barème officiels recopiés question par question.
--
-- En-tête (en arabe) : « الأكاديمية الجهوية للتربية والتكوين جهة درعة تافيلالت »,
-- « الامتحان الجهوي الموحد », « الدورة العادية - دورة يونيو 2024 »,
-- « المستوى : الأولى بكالوريا », « المترشحون المتمدرسون »,
-- « المادة: اللغة الفرنسية - الشعب الأدبية والعلمية والتقنية »,
-- durée « ساعتان ». Aucun coefficient n'est imprimé : laissé vide.
-- Sur la feuille, la partie I s'intitule « COMPREHENSION » (le corrigé dit
-- « Etude de texte »).
-- Question 6 : le corrigé cite « Il lui cracha au visage » alors que le
-- texte dit « il lui crache au visage » : recopié tel quel.
-- Question 7 b : propositions précédées de puces sur la feuille (pas de
-- lettres).
--
-- À lancer après 20261003000000_annales.sql. Rejouable : le sujet est
-- remplacé s'il existe déjà.

insert into public.annales
  (matiere, annee, session, academie, oeuvre, filiere_libelle, duree_minutes, enonce_mdx, corrige_mdx, questions)
values (
  $sujet$francais$sujet$,
  2024,
  $sujet$normale$sujet$,
  $sujet$Drâa-Tafilalet$sujet$,
  $sujet$Antigone$sujet$,
  $sujet$Séries littéraires, scientifiques et techniques$sujet$,
  120,
  $sujet$## Texte

**LE MESSAGER**

Une terrible nouvelle. On venait de jeter Antigone dans son trou. On n'avait pas encore fini de rouler les derniers blocs de pierre lorsque Créon et tous ceux qui l'entourent entendent des plaintes qui sortent soudain du tombeau. Chacun se tait et écoute, car ce n'est pas la voix d'Antigone. C'est une plainte nouvelle qui sort des profondeurs du trou... Tous regardent Créon, et lui, qui a deviné le premier, lui qui sait déjà avant tous les autres, hurle soudain comme un fou : «*Enlevez les pierres! Enlevez les pierres!* » Les esclaves se jettent sur les blocs entassés et, parmi eux, le roi suant, dont les mains saignent. Les pierres bougent enfin et le plus mince se glisse dans l'ouverture. Antigone est au fond de la tombe pendue aux fils de sa ceinture, des fils bleus, des fils verts, des fils rouges qui lui font comme un collier d'enfant, et Hémon à genoux qui la tient dans ses bras et gémit, le visage enfoui dans sa robe. On bouge un bloc encore et Créon peut enfin descendre. On voit ses cheveux blancs dans l'ombre, au fond du trou. Il essaie de relever Hémon, il le supplie. Hémon ne l'entend pas. Puis soudain il se dresse, les yeux noirs, et il n'a jamais tant ressemblé au petit garçon d'autrefois, il regarde son père sans rien dire, une minute, et, tout à coup, il lui crache au visage, et tire son épée. Créon a bondi hors de portée. Alors Hémon le regarde avec ses yeux d'enfant, lourds de mépris, et Créon ne peut pas éviter ce regard comme la lame. Hémon regarde ce vieil homme tremblant à l'autre bout de la caverne, et, sans rien dire, il se plonge l'épée dans le ventre et il s'étend contre Antigone, l'embrassant dans une immense flaque rouge.

## I. Étude de texte (10 points)

**1.** Recopiez et complétez le tableau suivant : **(1 point)**

| Auteur | Titre de l'œuvre | Genre littéraire | Personnage principal |
|---|---|---|---|
| | | | |

**2a.** Situez ce passage en répondant aux questions suivantes : a- A qui Antigone a-t-elle adressé la lettre rédigée par l'un des gardes ? **(1 point)**

**2b.** b- Antigone a offert au garde un objet pour qu'il accepte sa demande. Lequel ?

**3.** Quel est le personnage qui pousse des plaintes (gémit) au fond du trou ? **(1 point)**

**4.** Comment Créon réagit-il à l'écoute des cris au fond du tombeau ? **(1 point)**

**5.** Pour quelle raison Créon se rend-il au fond de la tombe ? **(1 point)**

**6.** Relevez dans la scène une phrase qui montre que Hémon a manqué de respect envers son père. **(1 point)**

**7a.** « Créon ne peut pas éviter **ce regard comme la lame** ». [souligné sur la feuille, en gras ici] a. Quelle est la figure de style employée dans l'énoncé ci-dessus ? **(1 point)**

**7b.** b. Quel en est l'effet recherché ? (Choisissez la bonne réponse.)

a- Montrer que le regard est méchant et haineux.  
b- Suggérer que le regard est doux et agréable.  
c- Souligner que le regard est passionné et intéressé.

**8.** Relevez deux mots appartenant au champ lexical de ***la souffrance***. **(1 point)**

**9.** Créon jette Antigone dans un trou. Comment trouvez-vous cette punition ? Formulez votre réponse en deux ou trois lignes. **(1 point)**

**10.** Le messager décrit ici une scène terrible et tragique. Pensez-vous qu'il convient de la représenter théâtralement (sur scène) ? Dites pourquoi. **(1 point)**

## II. Production écrite (10 points)

***Sujet :***

De nos jours, certaines personnes manquent d'indulgence envers les personnes âgées, c'est-à-dire qu'elles ne pardonnent pas facilement leurs erreurs.

Qu'en pensez-vous ?

Rédigez un texte argumentatif dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples pertinents.

*Important :*

*Lors de la correction, il sera tenu compte des aspects suivants :*

- *Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte …… (5 points)*
- *Critères d'évaluation de la langue : qualité de la langue (orthographe, syntaxe, vocabulaire, conjugaison) …… (5 points)*$sujet$,
  $sujet$## Corrigé et barème

*Éléments de correction et barème de notation. NB : Toute réponse – ou formulation - non prévue est laissée à l'appréciation de l'enseignant correcteur.*

### I. Étude de texte

**1.** **(1 point)**

| Auteur | Titre de l'œuvre | Genre littéraire | Personnage principal |
|---|---|---|---|
| *Jean Anouilh* | *Antigone* | Tragédie moderne | Antigone |

**2a.** Antigone a adressé une lettre à Hémon. (0,5) **(1 point)**

**2b.** Une bague. (0,5)

**3.** Hémon (1) **(1 point)**

**4.** Quand Créon a écouté le gémissement de Hémon, il a crié comme un fou et a ordonné aux esclaves d'enlever les pierres. (Acceptez toute réponse convenable) (1) **(1 point)**

**5.** Pour faire sortir Hémon de la tombe. (Acceptez toute réponse convenable) (1) **(1 point)**

**6.** « Il lui cracha au visage. » (1) **(1 point)**

**7a.** La comparaison (0,5) **(1 point)**

**7b.** Souligner que le regard est méchant et haineux. (0,5)

**8.** Plaintes, gémit, (acceptez toute réponse appropriée) (0,5x2) **(1 point)**

**9.** – Point de vue personnel. – Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2) **(1 point)**

**10.** – Prise de position – Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2) **(1 point)**

### II. Production écrite

Critères d'évaluation et barème

- Critères d'évaluation du discours : …… (5 points)
  - Respect de la consigne …… (1 point)
  - Cohérence des idées …… (2 points)
  - Organisation et progression du texte …… (2 points)
- Critères d'évaluation de la langue : …… (5 points)
  - Syntaxe …… (2 points)
  - Orthographe …… (1 point)
  - Vocabulaire …… (1 point)
  - Conjugaison …… (1 point)$sujet$,
  $sujet${"parties": [{"titre": "I. Étude de texte", "points": 10, "consigne": "Lisez attentivement le texte et répondez aux questions.", "texte": "**LE MESSAGER**\n\nUne terrible nouvelle. On venait de jeter Antigone dans son trou. On n'avait pas encore fini de rouler les derniers blocs de pierre lorsque Créon et tous ceux qui l'entourent entendent des plaintes qui sortent soudain du tombeau. Chacun se tait et écoute, car ce n'est pas la voix d'Antigone. C'est une plainte nouvelle qui sort des profondeurs du trou... Tous regardent Créon, et lui, qui a deviné le premier, lui qui sait déjà avant tous les autres, hurle soudain comme un fou : «*Enlevez les pierres! Enlevez les pierres!* » Les esclaves se jettent sur les blocs entassés et, parmi eux, le roi suant, dont les mains saignent. Les pierres bougent enfin et le plus mince se glisse dans l'ouverture. Antigone est au fond de la tombe pendue aux fils de sa ceinture, des fils bleus, des fils verts, des fils rouges qui lui font comme un collier d'enfant, et Hémon à genoux qui la tient dans ses bras et gémit, le visage enfoui dans sa robe. On bouge un bloc encore et Créon peut enfin descendre. On voit ses cheveux blancs dans l'ombre, au fond du trou. Il essaie de relever Hémon, il le supplie. Hémon ne l'entend pas. Puis soudain il se dresse, les yeux noirs, et il n'a jamais tant ressemblé au petit garçon d'autrefois, il regarde son père sans rien dire, une minute, et, tout à coup, il lui crache au visage, et tire son épée. Créon a bondi hors de portée. Alors Hémon le regarde avec ses yeux d'enfant, lourds de mépris, et Créon ne peut pas éviter ce regard comme la lame. Hémon regarde ce vieil homme tremblant à l'autre bout de la caverne, et, sans rien dire, il se plonge l'épée dans le ventre et il s'étend contre Antigone, l'embrassant dans une immense flaque rouge.", "questions": [{"type": "tableau", "numero": "1", "points": 1, "enonce": "Recopiez et complétez le tableau suivant :", "champs": [{"libelle": "Auteur", "reponse": "*Jean Anouilh*"}, {"libelle": "Titre de l'œuvre", "reponse": "*Antigone*"}, {"libelle": "Genre littéraire", "reponse": "Tragédie moderne"}, {"libelle": "Personnage principal", "reponse": "Antigone"}]}, {"type": "libre", "numero": "2a", "points": 0.5, "enonce": "Situez ce passage en répondant aux questions suivantes : a- A qui Antigone a-t-elle adressé la lettre rédigée par l'un des gardes ?", "correction": "Antigone a adressé une lettre à Hémon. (0,5)"}, {"type": "libre", "numero": "2b", "points": 0.5, "enonce": "b- Antigone a offert au garde un objet pour qu'il accepte sa demande. Lequel ?", "correction": "Une bague. (0,5)"}, {"type": "libre", "numero": "3", "points": 1, "enonce": "Quel est le personnage qui pousse des plaintes (gémit) au fond du trou ?", "correction": "Hémon (1)"}, {"type": "libre", "numero": "4", "points": 1, "enonce": "Comment Créon réagit-il à l'écoute des cris au fond du tombeau ?", "correction": "Quand Créon a écouté le gémissement de Hémon, il a crié comme un fou et a ordonné aux esclaves d'enlever les pierres. (Acceptez toute réponse convenable) (1)"}, {"type": "libre", "numero": "5", "points": 1, "enonce": "Pour quelle raison Créon se rend-il au fond de la tombe ?", "correction": "Pour faire sortir Hémon de la tombe. (Acceptez toute réponse convenable) (1)"}, {"type": "libre", "numero": "6", "points": 1, "enonce": "Relevez dans la scène une phrase qui montre que Hémon a manqué de respect envers son père.", "correction": "« Il lui cracha au visage. » (1)"}, {"type": "libre", "numero": "7a", "points": 0.5, "enonce": "« Créon ne peut pas éviter **ce regard comme la lame** ». [souligné sur la feuille, en gras ici] a. Quelle est la figure de style employée dans l'énoncé ci-dessus ?", "correction": "La comparaison (0,5)"}, {"type": "choix", "numero": "7b", "points": 0.5, "enonce": "b. Quel en est l'effet recherché ? (Choisissez la bonne réponse.)", "options": ["Montrer que le regard est méchant et haineux.", "Suggérer que le regard est doux et agréable.", "Souligner que le regard est passionné et intéressé."], "bonne": 0}, {"type": "libre", "numero": "8", "points": 1, "enonce": "Relevez deux mots appartenant au champ lexical de ***la souffrance***.", "correction": "Plaintes, gémit, (acceptez toute réponse appropriée) (0,5x2)"}, {"type": "libre", "numero": "9", "points": 1, "enonce": "Créon jette Antigone dans un trou. Comment trouvez-vous cette punition ? Formulez votre réponse en deux ou trois lignes.", "correction": "– Point de vue personnel. – Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2)"}, {"type": "libre", "numero": "10", "points": 1, "enonce": "Le messager décrit ici une scène terrible et tragique. Pensez-vous qu'il convient de la représenter théâtralement (sur scène) ? Dites pourquoi.", "correction": "– Prise de position – Justification. Le correcteur jugera de la pertinence de la réponse et notera en conséquence. (0,5x2)"}]}, {"titre": "II. Production écrite", "points": 10, "texte": "***Sujet :***\n\nDe nos jours, certaines personnes manquent d'indulgence envers les personnes âgées, c'est-à-dire qu'elles ne pardonnent pas facilement leurs erreurs.\n\nQu'en pensez-vous ?\n\nRédigez un texte argumentatif dans lequel vous développerez votre point de vue à l'aide d'arguments et d'exemples pertinents.\n\n*Important :*\n\n*Lors de la correction, il sera tenu compte des aspects suivants :*\n\n- *Critères d'évaluation du discours : respect de la consigne, cohérence des idées, organisation et progression du texte …… (5 points)*\n- *Critères d'évaluation de la langue : qualité de la langue (orthographe, syntaxe, vocabulaire, conjugaison) …… (5 points)*", "questions": [], "redaction": true}]}$sujet$::jsonb
)
on conflict (matiere, annee, session, coalesce(academie, ''))
do update set
  oeuvre = excluded.oeuvre,
  filiere_libelle = excluded.filiere_libelle,
  duree_minutes = excluded.duree_minutes,
  enonce_mdx = excluded.enonce_mdx,
  corrige_mdx = excluded.corrige_mdx,
  questions = excluded.questions;
